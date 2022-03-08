// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define("exports ../../../../../../chunks/_rollupPluginBabelHelpers ../../../../../../chunks/tslib.es6 ../../../../../../core/maybe ../../../../../../chunks/vec3 ../../../../../../chunks/vec3f32 ../../../../../../chunks/vec4 ../../../../../../chunks/vec4f32 ../../../../../../chunks/vec4f64 ./ComponentTechnique ../../../../../../chunks/ComponentShader.glsl ../../../core/material/MaterialBase ../../../core/shaderLibrary/util/AlphaDiscard.glsl".split(" "),function(u,q,e,n,p,z,t,A,B,C,D,c,E){function F(l){switch(l){case 0:return 0;
case 1:return 7;case 2:return 1;case 3:return 2}}let f=function(l){function k(){var b=l.apply(this,arguments)||this;b.baseColor=A.fromValues(1,1,1,1);b.usePBR=!1;b.hasParametersFromSource=!1;b.mrrFactors=z.fromValues(1,1,.5);b.emissiveFactor=z.fromValues(0,0,0);b.baseColorTexture=null;b.metallicRoughnessTexture=null;b.emissionTexture=null;b.occlusionTexture=null;b.normalTexture=null;b.overlayTexOffset=B.fromValues(-1,-1,-1,-1);b.overlayTexScale=B.fromValues(0,0,0,0);b.overlayColor=null;b.overlayHighlight=
null;b.overlayNormal=null;b.objectOpacity=1;b.commonMaterialParameters=new v;b.componentParameters=new w;b.alphaCutoff=E.defaultMaskAlphaCutoff;b.alphaDiscardMode=1;b.isIntegratedMesh=!1;b.polygonOffsetEnabled=!1;b.ellipsoidMode=1;b.sceneHasOcludees=!1;b._techniqueConfig=new C.ComponentTechniqueConfiguration;return b}q._inheritsLoose(k,l);var g=k.prototype;g.dispose=function(){this._technique=n.releaseMaybe(this._technique);this.normalTexture=this.occlusionTexture=this.emissionTexture=this.metallicRoughnessTexture=
this.baseColorTexture=null};g.getTechnique=function(b,d,h){const a=this._techniqueConfig;a.hasVertexColors=h.colors;a.hasNormals=h.normals;a.vertexTextureCoordinates=h.textureCoordinates;a.usePBR=this.usePBR;a.hasMetalnessAndRoughnessTexture=n.isSome(this.metallicRoughnessTexture);a.hasEmissionTexture=n.isSome(this.emissionTexture);a.hasOcclusionTexture=n.isSome(this.occlusionTexture);a.hasNormalTexture=n.isSome(this.normalTexture);a.transparencyPassType=0===d.identifier&&null!=d.transparencyPassType?
d.transparencyPassType:3;a.multipassTerrainEnabled=0===d.identifier&&null!=d.multipassTerrainParams?d.multipassTerrainParams.multipassTerrainEnabled:!1;a.cullAboveGround=0===d.identifier&&null!=d.multipassTerrainParams?d.multipassTerrainParams.cullAboveGround:!1;a.ellipsoidMode=this.ellipsoidMode;this.dirty&&(a.componentData=this.componentParameters.type,a.cullFace=this.commonMaterialParameters.cullFace,a.doubleSidedMode=this.commonMaterialParameters.doubleSided?1:0,a.baseColorTexture=n.isSome(this.baseColorTexture),
a.isSchematic=this.hasParametersFromSource&&!n.isSome(this.baseColorTexture),h=this._computeWhichMaterialPass(),a.blendingEnabled=1===h||2===h,a.alphaDiscardMode=this.alphaDiscardMode,a.integratedMeshMode=this.isIntegratedMesh?this.overlayColor?this.overlayNormal?3:2:1:0,a.polygonOffsetEnabled=this.polygonOffsetEnabled,this._setClean());a.slicePlaneEnabled=d.slicePlaneEnabled&&this.commonMaterialParameters.slicePlaneEnabled;1===d.identifier?(a.output=3,a.vertexDiscardMode=0):2===d.identifier?(a.output=
4,a.vertexDiscardMode=0):(2===this._computeWhichMaterialPass()?a.vertexDiscardMode=d.transparent?2:1:a.vertexDiscardMode=0,a.output=F(d.subPass),1===d.subPass&&(a.sceneHasOcludees=d.sceneHasOcludees),0===d.subPass?(a.receiveAmbientOcclusion=d.ambientOcclusionEnabled,a.sceneHasOcludees=d.sceneHasOcludees,a.receiveShadows=d.shadowsEnabled,a.ssrEnabled=d.ssrParams.ssrEnabled):(a.receiveAmbientOcclusion=!1,a.receiveShadows=!1));return this._technique=b.releaseAndAcquire(C.ComponentTechnique,a,this._technique)};
g.submit=function(b,d){if(0!==this.objectOpacity){var h=d.renderable.geometry,a=d.components,m=d.renderable.drawParameters;d=d.renderable.meta.cameraDepthSquared;var r=a.geometryRanges,x=a.highlightRanges;a=a.defaultShadowMapRanges;switch(this._computeWhichMaterialPass()){case 0:b.materialOpaque.submitDraw(this,h,r,m,d);break;case 1:b.materialTransparent.submitDraw(this,h,r,m,d);break;case 2:b.materialOpaque.submitDraw(this,h,r,m,d);b.materialTransparent.submitDraw(this,h,r,m,d);break;case 3:b.materialIntegratedMesh.submitDraw(this,
h,r,m,d),this.overlayHighlight&&b.highlightIntegratedMesh.submitDraw(this,h,r,m,d)}var y=2!==this.componentParameters.castShadows;y&&b.shadowMap.submitDraw(this,h,r,m,d);n.isSome(x)&&(b.highlight.submitDraw(this,h,x,m,d),y&&b.highlightShadowMap.submitDraw(this,h,x,m,d));y&&n.isSome(a)&&b.defaultShadowMap.submitDraw(this,h,a,m,d)}};g._computeWhichMaterialPass=function(){return this.isIntegratedMesh?3:1>this.objectOpacity?1:0===this.componentParameters.opaqueOverride?0:1>this.baseColor[3]||0===this.alphaDiscardMode||
3===this.alphaDiscardMode?1:2===this.componentParameters.transparent?0:0===this.componentParameters.transparent?1:2};q._createClass(k,[{key:"attributeLocations",get:function(){return D.attributeLocations}}]);return k}(c.MaterialBase);e.__decorate([c.parameter({vectorOps:t.vec4})],f.prototype,"baseColor",void 0);e.__decorate([c.parameter()],f.prototype,"usePBR",void 0);e.__decorate([c.parameter()],f.prototype,"hasParametersFromSource",void 0);e.__decorate([c.parameter({vectorOps:p.vec3})],f.prototype,
"mrrFactors",void 0);e.__decorate([c.parameter({vectorOps:p.vec3})],f.prototype,"emissiveFactor",void 0);e.__decorate([c.parameter({dispose:!0})],f.prototype,"baseColorTexture",void 0);e.__decorate([c.parameter({dispose:!0})],f.prototype,"metallicRoughnessTexture",void 0);e.__decorate([c.parameter({dispose:!0})],f.prototype,"emissionTexture",void 0);e.__decorate([c.parameter({dispose:!0})],f.prototype,"occlusionTexture",void 0);e.__decorate([c.parameter({dispose:!0})],f.prototype,"normalTexture",
void 0);e.__decorate([c.parameter({vectorOps:{equals:t.exactEquals,copy:t.copy}})],f.prototype,"overlayTexOffset",void 0);e.__decorate([c.parameter({vectorOps:{equals:t.exactEquals,copy:t.copy}})],f.prototype,"overlayTexScale",void 0);e.__decorate([c.parameter()],f.prototype,"overlayColor",void 0);e.__decorate([c.parameter()],f.prototype,"overlayHighlight",void 0);e.__decorate([c.parameter()],f.prototype,"overlayNormal",void 0);e.__decorate([c.parameter()],f.prototype,"objectOpacity",void 0);e.__decorate([c.parameterBlock()],
f.prototype,"commonMaterialParameters",void 0);e.__decorate([c.parameterBlock()],f.prototype,"componentParameters",void 0);e.__decorate([c.parameter()],f.prototype,"alphaCutoff",void 0);e.__decorate([c.parameter()],f.prototype,"alphaDiscardMode",void 0);e.__decorate([c.parameter()],f.prototype,"isIntegratedMesh",void 0);e.__decorate([c.parameter()],f.prototype,"polygonOffsetEnabled",void 0);e.__decorate([c.parameter()],f.prototype,"ellipsoidMode",void 0);e.__decorate([c.parameter()],f.prototype,"sceneHasOcludees",
void 0);let v=function(l){function k(){var g=l.apply(this,arguments)||this;g.doubleSided=!1;g.cullFace=2;g.slicePlaneEnabled=!0;return g}q._inheritsLoose(k,l);return k}(c.MaterialParameterBlock);e.__decorate([c.parameter()],v.prototype,"doubleSided",void 0);e.__decorate([c.parameter()],v.prototype,"cullFace",void 0);e.__decorate([c.parameter()],v.prototype,"slicePlaneEnabled",void 0);let w=function(l){function k(){var g=l.apply(this,arguments)||this;g.externalColor=A.fromValues(1,1,1,1);g.externalColorMixMode=
1;g.castShadows=0;return g}q._inheritsLoose(k,l);q._createClass(k,[{key:"transparent",get:function(){return 1>this.externalColor[3]?0:2}},{key:"opaqueOverride",get:function(){return 3===this.externalColorMixMode&&1===this.externalColor[3]?0:2}},{key:"visible",get:function(){return 0<this.externalColor[3]?0:2}},{key:"type",get:function(){return 0}}]);return k}(c.MaterialParameterBlock);e.__decorate([c.parameter({vectorOps:t.vec4})],w.prototype,"externalColor",void 0);e.__decorate([c.parameter()],w.prototype,
"externalColorMixMode",void 0);e.__decorate([c.parameter()],w.prototype,"castShadows",void 0);p=function(l){function k(){var g=l.apply(this,arguments)||this;g.texture=null;g.transparent=2;g.opaqueOverride=2;g.castShadows=2;return g}q._inheritsLoose(k,l);q._createClass(k,[{key:"type",get:function(){return 1}}]);return k}(c.MaterialParameterBlock);e.__decorate([c.parameter()],p.prototype,"texture",void 0);e.__decorate([c.parameter()],p.prototype,"transparent",void 0);e.__decorate([c.parameter()],p.prototype,
"opaqueOverride",void 0);e.__decorate([c.parameter()],p.prototype,"castShadows",void 0);u.CommonMaterialParameters=v;u.ComponentMaterial=f;u.ComponentParametersUniform=w;u.ComponentParametersVarying=p;Object.defineProperty(u,"__esModule",{value:!0})});