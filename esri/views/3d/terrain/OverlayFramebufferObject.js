// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../core/maybe ../../../chunks/vec2f32 ../../webgl/BufferObject ../../webgl/FramebufferObject ../../../core/has ../../webgl/checkWebGLError ../../webgl/enums ../../../chunks/builtins ../../webgl/Texture ../../webgl/VertexArrayObject".split(" "),function(e,g,h,k,f,l,m,n,p,q,r,t){f=function(){function d(a,c){this.size=k.create();this._fbo=null;this._fbo=new l(a,{colorTarget:0,depthStencilTarget:0},{target:3553,pixelFormat:6408,dataType:5121,
wrapMode:33071,samplingMode:9987,hasMipmap:c,maxAnisotropy:8,width:0,height:0})}var b=d.prototype;b.dispose=function(){this._fbo=h.disposeMaybe(this._fbo)};b.getTexture=function(){return this._fbo?this._fbo.colorTexture:null};b.isValid=function(){return null!==this._fbo};b.resize=function(a,c){this.size[0]=a;this.size[1]=c;this._fbo.resize(this.size[0],this.size[1])};b.bind=function(a){a.bindFramebuffer(this._fbo)};b.generateMipMap=function(){this._fbo.colorTexture.descriptor.hasMipmap&&this._fbo.colorTexture.generateMipmap()};
b.disposeRenderTargetMemory=function(){var a;null==(a=this._fbo)?void 0:a.resize(0,0)};g._createClass(d,[{key:"gpuMemoryUsage",get:function(){var a,c;return null!=(a=null==(c=this._fbo)?void 0:c.gpuMemoryUsage)?a:0}}]);return d}();e.OverlayFramebufferObject=f;Object.defineProperty(e,"__esModule",{value:!0})});