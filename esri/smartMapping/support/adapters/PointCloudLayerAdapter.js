// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/Logger ../../../core/accessorSupport/ensureType ../../../core/arrayUtils ../../../core/has ../../../core/accessorSupport/set ../../../core/accessorSupport/decorators/subclass ./SceneLayerAdapter".split(" "),function(f,g,c,l,m,n,p,h,k){c=function(e){function d(a){return e.call(this,a)||this}f._inheritsLoose(d,e);var b=d.prototype;b.getField=function(a=""){return this.layer.fieldsIndex.get(a)};b.getFieldUsageInfo=
function(a){a=this.getField(a);if(!a)return null;a=this._hasCachedStatistics(a.name);return{supportsLabelingInfo:a,supportsPopupTemplate:a,supportsRenderer:a,supportsLayerQuery:!1,supportsStatistics:a}};b.getFieldDomain=function(){return null};b.load=function(a){a=this.layer.load(a).then(()=>{this.geometryType="point";this.objectIdField=null;this.hasQueryEngine=this.supportsSQLExpression=!1});this.addResolvingPromise(a);return Promise.resolve(this)};return d}(k);return c=g.__decorate([h.subclass("esri.smartMapping.support.adapters.PointCloudLayerAdapter")],
c)});