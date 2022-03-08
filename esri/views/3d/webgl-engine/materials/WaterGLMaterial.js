// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../lib/GLMaterial","./WaterTechnique"],function(f,h,d,k){d=function(g){function e(){return g.apply(this,arguments)||this}h._inheritsLoose(e,g);var b=e.prototype;b.updateParameters=function(a){return this.ensureTechnique(k.WaterTechnique,a)};b.setElapsedTimeUniform=function(a){a.setUniform1f("timeElapsed",.001*this._material.animation.time*this._material.parameters.animationSpeed)};b._updateShadowState=function(a){a.shadowMappingEnabled!==
this._material.parameters.receiveShadows&&this._material.setParameters({receiveShadows:a.shadowMappingEnabled})};b._updateSSRState=function(a){a.ssrEnabled!==this._material.parameters.ssrEnabled&&this._material.setParameters({ssrEnabled:a.ssrEnabled})};b.ensureResources=function(a){const c=this._techniqueRep.constructionContext.waterTextureRepository;c.ready||c.updating||c.loadTextures(a);return c.ready?2:1};b.beginSlot=function(a){0===this._output&&(this._updateShadowState(a),this._updateSSRState(a));
return this.updateParameters(a)};b.bind=function(a,c){c.bindPass(this._material.parameters,a);2!==this._output&&0!==this._output||this.setElapsedTimeUniform(c.program)};return e}(d);f.WaterGLMaterial=d;Object.defineProperty(f,"__esModule",{value:!0})});