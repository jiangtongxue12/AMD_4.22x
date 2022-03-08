// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define("require exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/tslib.es6 ../../../../chunks/mat4 ../../../../chunks/mat4f64 ../core/shaderTechnique/ReloadableShaderModule ../core/shaderTechnique/ShaderTechnique ../core/shaderTechnique/ShaderTechniqueConfiguration ../lib/Program ../../../../chunks/LaserlinePath.glsl ../../../webgl/renderState".split(" "),function(q,h,m,r,t,u,g,f,n,v,w,k){f=function(c){function a(){return c.apply(this,arguments)||this}m._inheritsLoose(a,c);
var e=a.prototype;e.initializeProgram=function(b){const l=a.shader.get().build(this.configuration);return new v.Program(b.rctx,l,a.attributeLocations)};e.bind=function(b,l,d){this.program.setUniform3fv("innerColor",b.innerColor);this.program.setUniform1f("innerWidth",b.innerWidth*d.pixelRatio);this.program.setUniform3fv("glowColor",b.glowColor);this.program.setUniform1f("glowWidth",b.glowWidth*d.pixelRatio);this.program.setUniform1f("glowFalloff",b.glowFalloff);this.program.setUniform1f("globalAlpha",
b.globalAlpha);this.program.setUniform1f("perScreenPixelRatio",d.perScreenPixelRatio);this.program.setUniform2f("pixelToNDC",2/d.fullWidth,2/d.fullHeight);this.program.setUniformMatrix4fv("uProjectionMatrix",d.projectionMatrix);t.translate(p,d.viewMatrix,l);this.program.setUniformMatrix4fv("uModelViewMatrix",p);this.configuration.contrastControlEnabled&&this.program.setUniform1f("globalAlphaContrastBoost",null!=b.globalAlphaContrastBoost?b.globalAlphaContrastBoost:1)};e.initializePipeline=function(){return k.makePipelineState({blending:k.simpleBlendingParams(1,
771),colorWrite:k.defaultColorWriteParams})};return a}(f.ShaderTechnique);f.shader=new g.ReloadableShaderModule(w.LaserlinePathShader,()=>new Promise((c,a)=>q(["./LaserlinePath.glsl"],c,a)));f.attributeLocations=new Map([["start",0],["end",1],["up",2],["extrude",3]]);g=function(c){function a(){var e=c.apply(this,arguments)||this;e.contrastControlEnabled=!1;return e}m._inheritsLoose(a,c);return a}(n.ShaderTechniqueConfiguration);r.__decorate([n.parameter()],g.prototype,"contrastControlEnabled",void 0);
const p=u.create();h.LaserlinePathTechnique=f;h.LaserlinePathTechniqueConfiguration=g;Object.defineProperty(h,"__esModule",{value:!0})});