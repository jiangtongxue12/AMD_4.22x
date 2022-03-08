// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define("require exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/tslib.es6 ../core/shaderTechnique/ReloadableShaderModule ../core/shaderTechnique/ShaderTechnique ../core/shaderTechnique/ShaderTechniqueConfiguration ../lib/DefaultVertexAttributeLocations ../lib/Program ../lib/StencilUtils ../../../../chunks/PointRenderer.glsl ../../../webgl/renderState".split(" "),function(r,l,p,h,c,k,e,t,u,q,v,m){k=function(d){function a(n,f,g){return d.call(this,n,f,g)||this}p._inheritsLoose(a,
d);var b=a.prototype;b.initializeProgram=function(n){var f=a.shader.get();const g=this.configuration;f=f.build({output:g.output,slicePlaneEnabled:g.slicePlaneEnabled,sliceHighlightDisabled:!1,sliceEnabledForVertexPrograms:!0,drawScreenSize:g.drawScreenSize});return new u.Program(n.rctx,f,t.Default3D)};b.initializePipeline=function(){return m.makePipelineState({depthTest:{func:513},depthWrite:m.defaultDepthWriteParams,colorWrite:m.defaultColorWriteParams,stencilWrite:this.configuration.sceneHasOcludees?
q.stencilWriteMaskOn:null,stencilTest:this.configuration.sceneHasOcludees?q.stencilBaseAllZerosParams:null})};return a}(k.ShaderTechnique);k.shader=new c.ReloadableShaderModule(v.PointRendererShader,()=>new Promise((d,a)=>r(["./PointRenderer.glsl"],d,a)));c=function(d){function a(){var b=d.apply(this,arguments)||this;b.output=0;b.slicePlaneEnabled=!1;b.drawScreenSize=!1;b.sceneHasOcludees=!1;return b}p._inheritsLoose(a,d);return a}(e.ShaderTechniqueConfiguration);h.__decorate([e.parameter({count:8})],
c.prototype,"output",void 0);h.__decorate([e.parameter()],c.prototype,"slicePlaneEnabled",void 0);h.__decorate([e.parameter()],c.prototype,"drawScreenSize",void 0);h.__decorate([e.parameter()],c.prototype,"sceneHasOcludees",void 0);l.PointRendererTechnique=k;l.PointRendererTechniqueConfiguration=c;Object.defineProperty(l,"__esModule",{value:!0})});