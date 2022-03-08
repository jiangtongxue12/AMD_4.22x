// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define("require exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/tslib.es6 ../../../../core/maybe ../core/shaderLibrary/Slice.glsl ../core/shaderLibrary/output/OutputHighlight.glsl ../core/shaderLibrary/shading/MultipassTerrainTest.glsl ../core/shaderLibrary/shading/VisualVariables.glsl ../core/shaderLibrary/util/View.glsl ../core/shaderTechnique/ReloadableShaderModule ../core/shaderTechnique/ShaderTechnique ../core/shaderTechnique/ShaderTechniqueConfiguration ../lib/OrderIndependentTransparency ../lib/Program ../lib/StencilUtils ../../../../chunks/RibbonLine.glsl ../../../webgl/renderState".split(" "),
function(z,q,t,g,u,A,B,C,D,v,e,r,f,n,E,h,F,m){const x=new Map([["position",0],["subdivisionFactor",1],["uv0",2],["auxpos1",3],["auxpos2",4],["size",6],["sizeFeatureAttribute",6],["color",5],["colorFeatureAttribute",5],["opacityFeatureAttribute",7]]);r=function(l){function k(a,d,b){d=l.call(this,a,d,b)||this;d.stippleTextureRepository=a.stippleTextureRepository;return d}t._inheritsLoose(k,l);var c=k.prototype;c.initializeProgram=function(a){var d=k.shader.get();const b=this.configuration;d=d.build({OITEnabled:0===
b.transparencyPassType,output:b.output,slicePlaneEnabled:b.slicePlaneEnabled,sliceHighlightDisabled:!1,sliceEnabledForVertexPrograms:!1,draped:b.draped,stippleEnabled:this.stippleEnabled,stippleOffColorEnabled:b.stippleOffColorEnabled,stippleRequiresClamp:!0,stippleScaleWithLineWidth:b.stippleScaleWithLineWidth,stipplePreferContinuous:b.stipplePreferContinuous,roundCaps:b.roundCaps,roundJoins:b.roundJoins,vvColor:b.vvColor,vvSize:b.vvSize,vvInstancingEnabled:!0,vvOpacity:b.vvOpacity,falloffEnabled:b.falloffEnabled,
innerColorEnabled:b.innerColorEnabled,multipassTerrainEnabled:b.multipassTerrainEnabled,cullAboveGround:b.cullAboveGround});return new E.Program(a.rctx,d,x)};c.dispose=function(){l.prototype.dispose.call(this);this.stippleTextureRepository.release(this.stipplePattern);this.stippleTextureBind=this.stipplePattern=null};c.bindPass=function(a,d){v.bindProjectionMatrix(this.program,d.camera.projectionMatrix);4===this.configuration.output&&B.bindOutputHighlight(this.program,d);d.multipassTerrainEnabled&&
(this.program.setUniform2fv("inverseViewport",d.inverseViewport),C.bindMultipassTerrainTexture(this.program,d));this.program.setUniform1f("intrinsicWidth",a.width);this.program.setUniform4fv("intrinsicColor",a.color);this.program.setUniform1f("miterLimit","miter"!==a.join?0:a.miterLimit);this.program.setUniform2fv("cameraNearFar",d.camera.nearFar);this.program.setUniform1f("pixelRatio",d.camera.pixelRatio);this.program.setUniform2f("screenSize",d.camera.fullViewport[2],d.camera.fullViewport[3]);D.bindVisualVariablesUniformsWithOpacity(this.program,
a);if(this.stipplePattern!==a.stipplePattern){var b=a.stipplePattern;this.stippleTextureBind=this.stippleTextureRepository.swap(this.stipplePattern,b);this.stipplePattern=b}if(this.stippleEnabled){const {pixelSize:p,sdfNormalizer:w,pixels:G}=u.isSome(this.stippleTextureBind)?this.stippleTextureBind(this.program):{pixelSize:1,sdfNormalizer:1,pixels:1};this.program.setUniform1f("stipplePatternSDFNormalizer",w);this.program.setUniform1f("stipplePatternTextureSize",G);this.program.setUniform1f("stipplePatternPixelSize",
p);this.program.setUniform1f("stipplePatternPixelSizeInv",1/p);this.configuration.draped?this.program.setUniform1f("worldToScreenRatio",1/d.screenToPCSRatio):this.program.setUniform1f("worldToScreenPerDistanceRatio",1/d.camera.perScreenPixelRatio);this.configuration.stippleOffColorEnabled&&(b=u.unwrap(a.stippleOffColor),this.program.setUniform4f("stippleOffColor",b[0],b[1],b[2],3<b.length?b[3]:1))}this.configuration.falloffEnabled&&this.program.setUniform1f("falloff",a.falloff);this.configuration.innerColorEnabled&&
(this.program.setUniform4fv("innerColor",u.unwrapOr(a.innerColor,a.color)),this.program.setUniform1f("innerWidth",a.innerWidth*d.camera.pixelRatio))};c.bindDraw=function(a){v.bindView(this.program,a);this.stippleEnabled&&!this.configuration.draped&&v.bindCameraPosition(this.program,a.origin,a.camera.viewInverseTransposeMatrix);A.bindSliceUniformsWithOrigin(this.program,this.configuration,a);this.program.rebindTextures()};c.makePipelineState=function(a,d){const b=this.configuration,p=3===a,w=2===a;
return m.makePipelineState({blending:0===b.output||7===b.output?p?n.blendingDefault:n.OITBlending(a):null,depthTest:{func:n.OITDepthTest(a)},depthWrite:p?!b.transparent&&b.writeDepth&&m.defaultDepthWriteParams:n.OITDepthWrite(a),colorWrite:m.defaultColorWriteParams,stencilWrite:b.sceneHasOcludees?h.stencilWriteMaskOn:null,stencilTest:b.sceneHasOcludees?d?h.stencilToolMaskBaseParams:h.stencilBaseAllZerosParams:null,polygonOffset:p||w?b.polygonOffset&&y:n.OITPolygonOffset})};c.initializePipeline=function(){const a=
this.configuration,d=a.polygonOffset&&y;a.occluder&&(this._occluderPipelineTransparent=m.makePipelineState({blending:n.blendingDefault,polygonOffset:d,depthTest:h.depthCompareAlways,depthWrite:null,colorWrite:m.defaultColorWriteParams,stencilWrite:null,stencilTest:h.stencilToolTransparentOccluderParams}),this._occluderPipelineOpaque=m.makePipelineState({blending:n.blendingDefault,polygonOffset:d,depthTest:h.depthCompareAlways,depthWrite:null,colorWrite:m.defaultColorWriteParams,stencilWrite:h.stencilWriteMaskOff,
stencilTest:h.stencilToolMaskOccluderParams}),this._occluderPipelineMaskWrite=m.makePipelineState({blending:null,polygonOffset:d,depthTest:h.depthCompareLess,depthWrite:null,colorWrite:null,stencilWrite:h.stencilWriteMaskOn,stencilTest:h.stencilToolMaskBaseParams}));this._occludeePipelineState=this.makePipelineState(this.configuration.transparencyPassType,!0);return this.makePipelineState(this.configuration.transparencyPassType,!1)};c.getPipelineState=function(a,d){return d?this._occludeePipelineState:
this.configuration.occluder?10===a?this._occluderPipelineTransparent:9===a?this._occluderPipelineOpaque:this._occluderPipelineMaskWrite:l.prototype.getPipelineState.call(this,a,d)};t._createClass(k,[{key:"stippleEnabled",get:function(){return this.configuration.stippleEnabled&&4!==this.configuration.output}},{key:"primitiveType",get:function(){return 5}}]);return k}(r.ShaderTechnique);r.shader=new e.ReloadableShaderModule(F.RibbonLineShader,()=>new Promise((l,k)=>z(["./RibbonLine.glsl"],l,k)));const y=
{factor:0,units:-4};e=function(l){function k(){var c=l.apply(this,arguments)||this;c.output=0;c.occluder=!1;c.slicePlaneEnabled=!1;c.transparent=!1;c.polygonOffset=!1;c.writeDepth=!1;c.draped=!1;c.stippleEnabled=!1;c.stippleOffColorEnabled=!1;c.stippleScaleWithLineWidth=!1;c.stipplePreferContinuous=!0;c.roundCaps=!1;c.roundJoins=!1;c.vvSize=!1;c.vvColor=!1;c.vvOpacity=!1;c.falloffEnabled=!1;c.innerColorEnabled=!1;c.sceneHasOcludees=!1;c.transparencyPassType=3;c.multipassTerrainEnabled=!1;c.cullAboveGround=
!1;return c}t._inheritsLoose(k,l);return k}(f.ShaderTechniqueConfiguration);g.__decorate([f.parameter({count:8})],e.prototype,"output",void 0);g.__decorate([f.parameter()],e.prototype,"occluder",void 0);g.__decorate([f.parameter()],e.prototype,"slicePlaneEnabled",void 0);g.__decorate([f.parameter()],e.prototype,"transparent",void 0);g.__decorate([f.parameter()],e.prototype,"polygonOffset",void 0);g.__decorate([f.parameter()],e.prototype,"writeDepth",void 0);g.__decorate([f.parameter()],e.prototype,
"draped",void 0);g.__decorate([f.parameter()],e.prototype,"stippleEnabled",void 0);g.__decorate([f.parameter()],e.prototype,"stippleOffColorEnabled",void 0);g.__decorate([f.parameter()],e.prototype,"stippleScaleWithLineWidth",void 0);g.__decorate([f.parameter()],e.prototype,"stipplePreferContinuous",void 0);g.__decorate([f.parameter()],e.prototype,"roundCaps",void 0);g.__decorate([f.parameter()],e.prototype,"roundJoins",void 0);g.__decorate([f.parameter()],e.prototype,"vvSize",void 0);g.__decorate([f.parameter()],
e.prototype,"vvColor",void 0);g.__decorate([f.parameter()],e.prototype,"vvOpacity",void 0);g.__decorate([f.parameter()],e.prototype,"falloffEnabled",void 0);g.__decorate([f.parameter()],e.prototype,"innerColorEnabled",void 0);g.__decorate([f.parameter()],e.prototype,"sceneHasOcludees",void 0);g.__decorate([f.parameter({count:4})],e.prototype,"transparencyPassType",void 0);g.__decorate([f.parameter()],e.prototype,"multipassTerrainEnabled",void 0);g.__decorate([f.parameter()],e.prototype,"cullAboveGround",
void 0);q.RibbonLineTechnique=r;q.RibbonLineTechniqueConfiguration=e;q.ribbonVertexAttributeLocations=x;Object.defineProperty(q,"__esModule",{value:!0})});