// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define(["../../chunks/_rollupPluginBabelHelpers","./enums"],function(g,e){return function(){function d(a,b){this._context=a;this._desc=b;this._context.instanceCounter.increment(e.ResourceType.Renderbuffer,this);a=this._context.gl;this.glName=a.createRenderbuffer();this._context.bindRenderbuffer(this);a.renderbufferStorage(a.RENDERBUFFER,b.internalFormat,b.width,b.height)}var f=d.prototype;f.resize=function(a,b){const c=this._desc;if(c.width!==a||c.height!==b)c.width=a,c.height=b,a=this._context.gl,
this._context.bindRenderbuffer(this),a.renderbufferStorage(a.RENDERBUFFER,c.internalFormat,c.width,c.height)};f.dispose=function(){this._context&&(this._context.gl.deleteRenderbuffer(this.glName),this._context.instanceCounter.decrement(e.ResourceType.Renderbuffer,this),this._context=null)};g._createClass(d,[{key:"descriptor",get:function(){return this._desc}}]);return d}()});