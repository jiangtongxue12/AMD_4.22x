// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers","../../../../../core/maybe"],function(f,h,g){let k=function(){function d(a,c,e=()=>this.dispose()){this.release=e;c&&(this._config=c.snapshot());this._program=this.initializeProgram(a);this._pipeline=this.initializePipeline(a)}var b=d.prototype;b.dispose=function(){this._program=g.disposeMaybe(this._program);this._pipeline=this._config=null};b.reload=function(a){g.disposeMaybe(this._program);this._program=this.initializeProgram(a)};
b.bindPass=function(a,c){};b.bindMaterial=function(a,c){};b.bindDraw=function(a){};b.bindPipelineState=function(a,c=null,e){a.setPipelineState(this.getPipelineState(c,e))};b.ensureAttributeLocations=function(a){this.program.assertCompatibleVertexAttributeLocations(a)};b.getPipelineState=function(a,c){return this._pipeline};h._createClass(d,[{key:"program",get:function(){return this._program}},{key:"key",get:function(){return this._config.key}},{key:"configuration",get:function(){return this._config}},
{key:"primitiveType",get:function(){return 4}}]);return d}();f.ShaderTechnique=k;Object.defineProperty(f,"__esModule",{value:!0})});