// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define("require exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/tslib.es6 ../../../../core/mathUtils ../core/shaderTechnique/ReloadableShaderModule ../core/shaderTechnique/ShaderTechnique ../core/shaderTechnique/ShaderTechniqueConfiguration ../lib/DefaultVertexAttributeLocations ../lib/Program ../../../../chunks/Laserlines.glsl ../../../webgl/renderState".split(" "),function(q,l,n,g,r,d,k,f,t,u,p,m){k=function(e){function c(){return e.apply(this,arguments)||this}n._inheritsLoose(c,
e);var b=c.prototype;b.initializeProgram=function(a){const h=c.shader.get().build(this.configuration);return new u.Program(a.rctx,h,t.Default3D)};b.bind=function(a,h){this.program.setUniform3fv("innerColor",a.innerColor);this.program.setUniform1f("innerWidth",a.innerWidth*h.pixelRatio);this.program.setUniform3fv("glowColor",a.glowColor);this.program.setUniform1f("glowWidth",a.glowWidth*h.pixelRatio);this.program.setUniform1f("glowFalloff",a.glowFalloff);this.program.setUniform1f("globalAlpha",a.globalAlpha);
this.configuration.contrastControlEnabled&&this.program.setUniform1f("globalAlphaContrastBoost",null!=a.globalAlphaContrastBoost?a.globalAlphaContrastBoost:1);a=null!=a.angleCutoff?a.angleCutoff:p.defaultAngleCutoff;this.program.setUniform2f("angleCutoff",Math.cos(a),Math.cos(Math.max(0,a-r.deg2rad(2))));this.configuration.intersectsLineEnabled&&this.program.setUniform1f("perScreenPixelRatio",h.perScreenPixelRatio)};b.initializePipeline=function(){return m.makePipelineState({blending:m.simpleBlendingParams(1,
771),colorWrite:m.defaultColorWriteParams})};return c}(k.ShaderTechnique);k.shader=new d.ReloadableShaderModule(p.LaserlinesShader,()=>new Promise((e,c)=>q(["./Laserlines.glsl"],e,c)));d=function(e){function c(){var b=e.apply(this,arguments)||this;b.heightManifoldEnabled=!1;b.pointDistanceEnabled=!1;b.lineVerticalPlaneEnabled=!1;b.intersectsLineEnabled=!1;b.contrastControlEnabled=!1;return b}n._inheritsLoose(c,e);return c}(f.ShaderTechniqueConfiguration);g.__decorate([f.parameter()],d.prototype,"heightManifoldEnabled",
void 0);g.__decorate([f.parameter()],d.prototype,"pointDistanceEnabled",void 0);g.__decorate([f.parameter()],d.prototype,"lineVerticalPlaneEnabled",void 0);g.__decorate([f.parameter()],d.prototype,"intersectsLineEnabled",void 0);g.__decorate([f.parameter()],d.prototype,"contrastControlEnabled",void 0);l.LaserlineTechnique=k;l.LaserlineTechniqueConfiguration=d;Object.defineProperty(l,"__esModule",{value:!0})});