// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define(["exports","../../../chunks/_rollupPluginBabelHelpers","./OverlayFramebufferObject"],function(f,g,h){let m=function(){function e(b){const a=(c,k,l=!0)=>({type:k,fbo:new h.OverlayFramebufferObject(b,l),renderPass:c,valid:!1,lastUsed:Infinity});this.renderTargets=[a(0,0),a(0,1),a(5,2,!1),a(3,3),a(0,4)]}var d=e.prototype;d.getTarget=function(b){return this.renderTargets[b].fbo};d.dispose=function(){for(const b of this.renderTargets)b.fbo.dispose()};d.disposeRenderTargetMemory=function(){for(const b of this.renderTargets)b.fbo.disposeRenderTargetMemory()};
d.validateUsageForTarget=function(b,a,c){if(b)a.lastUsed=c;else if(1E3<c-a.lastUsed)a.fbo.disposeRenderTargetMemory(),a.lastUsed=Infinity;else if(Infinity>a.lastUsed)return!0;return!1};g._createClass(e,[{key:"gpuMemoryUsage",get:function(){return this.renderTargets.reduce((b,a)=>b+a.fbo.gpuMemoryUsage,0)}}]);return e}();f.OverlayRenderTarget=m;Object.defineProperty(f,"__esModule",{value:!0})});