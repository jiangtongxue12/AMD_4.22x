// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../core/Error ../../../../core/has ../../../../core/Logger ../../../../core/maybe ../../../../core/promiseUtils ../../../webgl/BufferObject ../../../webgl/FramebufferObject ../../../webgl/checkWebGLError ../../../webgl/enums ../../../../chunks/builtins ../../../webgl/Texture ../../../webgl/VertexArrayObject ./definitions ./DisplayId ./Utils ./util/debug".split(" "),function(z,A,B,C,t,d,H,J,I,K,L,M,D,N,l,E,n,F){const u=t.getLogger("esri.views.2d.engine.webgl.AttributeStoreView"),
v=F.createDebugLogger(F.DEBUG_ATTR_UPDATES,u);let G=function(){function m(a,b,c){this._lastTexture=this._texture=null;this._fbos={};this.texelSize=4;const {buffer:e,pixelType:g,textureOnly:h}=a;a=n.getPixelArrayCtor(g);this.shared=c;this.pixelType=g;this.size=b;this.textureOnly=h;h||(this.data=new a(d.unwrap(e)));this._resetRange()}var f=m.prototype;f.destroy=function(){d.andThen(this._texture,a=>a.dispose());for(const a in this._fbos)d.andThen(this._fbos[a],b=>{"0"===a&&b.detachColorTexture();b.dispose()}),
this._fbos[a]=null;this._texture=null};f.setData=function(a,b,c){a=E.getDisplayIdTexel(a);const e=d.unwrap(this.data);b=a*this.texelSize+b;!e||b>=e.length||(e[b]=c,this.dirtyStart=Math.min(this.dirtyStart,a),this.dirtyEnd=Math.max(this.dirtyEnd,a))};f.getData=function(a,b){if(d.isNone(this.data))return null;a=E.getDisplayIdTexel(a)*this.texelSize+b;return!this.data||a>=this.data.length?null:this.data[a]};f.getTexture=function(a){return d.unwrapOr(this._texture,()=>this._initTexture(a))};f.getFBO=
function(a,b=0){if(d.isNone(this._fbos[b])){const c=0===b?this.getTexture(a):this._textureDesc;this._fbos[b]=new I(a,{colorTarget:0,depthStencilTarget:0},c)}return this._fbos[b]};f.updateTexture=function(a,b){if(!this.locked){try{const c=this.dirtyStart,e=this.dirtyEnd;if(!this.hasDirty)return;this._resetRange();const g=d.unwrap(this.data).buffer,h=this.getTexture(a),k=(c-c%this.size)/this.size,q=(e-e%this.size)/this.size,p=k*this.size*4,w=4*(this.size+q*this.size)-p,r=n.getPixelArrayCtor(this.pixelType),
x=new r(g,p*r.BYTES_PER_ELEMENT,w),y=this.size;a=q-k+1;if(a>this.size){u.error(new B("mapview-webgl","Out-of-bounds index when updating AttributeData"));return}h.updateData(0,0,k,y,a,x)}catch(c){}b()}};f.update=function(a){const {data:b,start:c,end:e}=a;if(d.isSome(b)){const g=this.data,h=c*this.texelSize;for(let k=0;k<b.length;k++)a.layout&1<<k%this.texelSize&&(g[h+k]=b[k])}this.dirtyStart=Math.min(this.dirtyStart,c);this.dirtyEnd=Math.max(this.dirtyEnd,e)};f.resize=function(a,b){const c=this.size;
this.size=b;this.textureOnly?c!==this.size&&(this._lastTexture=this._texture,this._texture=null):(b=n.getPixelArrayCtor(this.pixelType),this.destroy(),this.data=new b(d.unwrap(a.buffer)))};f._resetRange=function(){this.dirtyStart=2147483647;this.dirtyEnd=0};f._initTexture=function(a){const b=new D(a,this._textureDesc,d.unwrapOr(this.data,void 0));if(d.isSome(this._lastTexture)&&this._fbos[0]){const g=this._lastTexture.descriptor.width,h=this._lastTexture.descriptor.height,k=this._lastTexture.descriptor.dataType,
q=this._lastTexture.descriptor.pixelFormat,p=this.getFBO(a);var c=n.getPixelBytes(k),e=n.getPixelArrayCtor(k);c=new ArrayBuffer(g*h*c*this.texelSize);e=new e(c);c=a.getBoundFramebufferObject();const {x:w,y:r,width:x,height:y}=a.getViewport();a.bindFramebuffer(p);p.readPixels(0,0,g,h,q,k,e);b.updateData(0,0,0,2*g,h/2,e);a.setViewport(w,r,x,y);a.bindFramebuffer(c)}this.destroy();return this._texture=b};A._createClass(m,[{key:"_textureDesc",get:function(){return{target:3553,wrapMode:33071,pixelFormat:6408,
dataType:this.pixelType,samplingMode:9728,width:this.size,height:this.size}}},{key:"locked",get:function(){return 5121===this.pixelType&&this.shared&&!this.textureOnly&&C("esri-atomics")&&this.data?1===Atomics.load(this.data,0):!1}},{key:"hasDirty",get:function(){return this.dirtyEnd>=this.dirtyStart}}]);return m}();t=function(){function m(a){this._onUpdate=a;this._locked=this._forceNextUpload=this._initialized=!1}var f=m.prototype;f.initialize=function(a){const {blocks:b,shared:c,size:e}=a;this.shared=
c;this.size=e;v("Initializing AttributeStoreView",a);if(d.isNone(this._data))this._data=d.mapMany(b,g=>new G(g,e,c));else for(a=0;a<this._data.length;a++){const g=this._data[a],h=b[a];d.isSome(h)&&(d.isNone(g)?this._data[a]=new G(h,e,c):g.resize(h,e))}this._initialized=!0};f.destroy=function(){d.andThen(this._data,a=>d.mapMany(a,b=>b.destroy()));d.andThen(this._defaultTexture,a=>a.dispose())};f.isEmpty=function(){return d.isNone(this._data)};f.isUpdating=function(){const a=d.isSome(this._pendingAttributeUpdate);
C("esri-2d-log-updating")&&console.log(`Updating AttributeStoreView ${a}\n  -> hasPendingUpdate ${a}`);return a};f.getBlock=function(a){return d.isNone(this._data)?null:this._data[a]};f.setLabelMinZoom=function(a,b){this.setData(a,0,1,b)};f.getLabelMinZoom=function(a){return this.getData(a,0,1,255)};f.getFilterFlags=function(a){return this.getData(a,0,0,0)};f.getVVSize=function(a){return this.getData(a,l.ATTRIBUTE_DATA_VV,0,0)};f.getData=function(a,b,c,e){if(!this._data)return 0;b=d.unwrap(this._data)[b];
if(d.isNone(b))return 0;a=b.getData(a,c);return d.isSome(a)?a:e};f.setData=function(a,b,c,e){b=d.unwrap(this._data)[b];d.unwrap(b).setData(a,c,e)};f.lockTextureUpload=function(){this._locked=!0};f.unlockTextureUpload=function(){this._locked=!1};f.forceTextureUpload=function(){this._forceNextUpload=!0};f.requestUpdate=function(){var a=A._asyncToGenerator(function*(b){if(this._pendingAttributeUpdate)u.error(new B("mapview-webgl","Tried to update attribute data with a pending update"));else{var c=H.createResolver();
v("AttributeStoreView Update Requested",b);this._pendingAttributeUpdate={data:b,resolver:c};return c.promise}});return function(b){return a.apply(this,arguments)}}();f.update=function(){if(this._initialized&&d.isSome(this._pendingAttributeUpdate)){const {data:a,resolver:b}=this._pendingAttributeUpdate,c=d.unwrap(this._data);for(let e=0;e<a.blocks.length;e++){const g=a.blocks[e];d.andThen(c[e],h=>d.andThen(g,k=>{v(`Updating block ${e}`,k);h.update(k)}))}this._pendingAttributeUpdate=null;b();this._onUpdate()}};
f.bindTextures=function(a,b=!0){this.update();const c=this._getDefaultTexture(a);if(this._initialized){var e=d.unwrap(this._data);if(!this._locked||this._forceNextUpload)d.forEachSome(e,g=>g.updateTexture(a,()=>this._onUpdate())),this._forceNextUpload=!1;a.bindTexture(d.mapOr(e[0],c,g=>g.getTexture(a)),l.TEXTURE_BINDING_ATTRIBUTE_DATA_0);b&&(a.bindTexture(d.mapOr(e[1],c,g=>g.getTexture(a)),l.TEXTURE_BINDING_ATTRIBUTE_DATA_1),a.bindTexture(d.mapOr(e[2],c,g=>g.getTexture(a)),l.TEXTURE_BINDING_ATTRIBUTE_DATA_2),
a.bindTexture(d.mapOr(e[3],c,g=>g.getTexture(a)),l.TEXTURE_BINDING_ATTRIBUTE_DATA_3))}else a.bindTexture(c,l.TEXTURE_BINDING_ATTRIBUTE_DATA_0),b&&(a.bindTexture(c,l.TEXTURE_BINDING_ATTRIBUTE_DATA_1),a.bindTexture(c,l.TEXTURE_BINDING_ATTRIBUTE_DATA_2),a.bindTexture(c,l.TEXTURE_BINDING_ATTRIBUTE_DATA_3))};f._getDefaultTexture=function(a){d.isNone(this._defaultTexture)&&(this._defaultTexture=new D(a,{wrapMode:33071,pixelFormat:6408,dataType:5121,samplingMode:9728,width:1,height:1},new Uint8Array(4)));
return this._defaultTexture};return m}();z.AttributeStoreView=t;Object.defineProperty(z,"__esModule",{value:!0})});