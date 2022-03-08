// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define(["../../chunks/_rollupPluginBabelHelpers","../../core/Logger","../../core/maybe","./enums","./Util"],function(q,r,g,l,m){const e=r.getLogger("esri.views.webgl.VertexArrayObject");return function(){function k(a,b,d,c,h=null){this._context=a;this._locations=b;this._layout=d;this._buffers=c;this._indexBuffer=h;this._glName=null;this._initialized=!1;a.instanceCounter.increment(l.ResourceType.VAO,this)}var f=k.prototype;f.dispose=function(a=!0){if(this._context){if(this._glName){var b,d;const c=
null==(b=this._context)?void 0:null==(d=b.capabilities)?void 0:d.vao;c?(c.deleteVertexArray(this._glName),this._glName=null):e.warn("Leaked WebGL VAO")}this._context.getBoundVAO()===this&&this._context.bindVAO(null);if(a){for(const c in this._buffers)this._buffers[c].dispose(),delete this._buffers[c];this._indexBuffer=g.disposeMaybe(this._indexBuffer)}this._context.instanceCounter.decrement(l.ResourceType.VAO,this);this._context=null}else(this._glName||a&&0<Object.getOwnPropertyNames(this._buffers).length)&&
e.warn("Leaked WebGL VAO")};f.initialize=function(){if(!this._initialized){var a=this._context.capabilities.vao;if(a){const b=a.createVertexArray();a.bindVertexArray(b);this._bindLayout();a.bindVertexArray(null);this._glName=b}this._initialized=!0}};f.bind=function(){this.initialize();const a=this._context.capabilities.vao;a?a.bindVertexArray(this.glName):(this._context.bindVAO(null),this._bindLayout())};f._bindLayout=function(){const {_buffers:a,_layout:b,_indexBuffer:d}=this;a||e.error("Vertex buffer dictionary is empty!");
const c=this._context.gl;for(const h in a){const n=a[h];n||e.error("Vertex buffer is uninitialized!");const p=b[h];p||e.error("Vertex element descriptor is empty!");m.bindVertexBufferLayout(this._context,this._locations,n,p)}g.isSome(d)&&(this._context.capabilities.vao?c.bindBuffer(c.ELEMENT_ARRAY_BUFFER,d.glName):this._context.bindBuffer(d))};f.unbind=function(){this.initialize();const a=this._context.capabilities.vao;a?a.bindVertexArray(null):this._unbindLayout()};f._unbindLayout=function(){const {_buffers:a,
_layout:b}=this;a||e.error("Vertex buffer dictionary is empty!");for(const d in a){const c=a[d];c||e.error("Vertex buffer is uninitialized!");m.unbindVertexBufferLayout(this._context,this._locations,c,b[d])}g.isSome(this._indexBuffer)&&this._context.unbindBuffer(this._indexBuffer.bufferType)};q._createClass(k,[{key:"glName",get:function(){return this._glName}},{key:"vertexBuffers",get:function(){return this._buffers}},{key:"indexBuffer",get:function(){return this._indexBuffer}},{key:"size",get:function(){return Object.keys(this._buffers).reduce((a,
b)=>a+this._buffers[b].size,g.isSome(this._indexBuffer)?this._indexBuffer.size:0)}},{key:"layout",get:function(){return this._layout}},{key:"locations",get:function(){return this._locations}}]);return k}()});