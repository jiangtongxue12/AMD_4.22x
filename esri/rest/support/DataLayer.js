// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../geometry ../../core/jsonMap ../../core/JSONSupport ../../core/accessorSupport/decorators/property ../../core/arrayUtils ../../core/has ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass ../../geometry/support/jsonUtils".split(" "),function(h,c,k,e,a,d,n,p,q,l,m){e=new e.JSONMap({esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelEnvelopeIntersects:"envelope-intersects",
esriSpatialRelIndexIntersects:"index-intersects",esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:"relation"});a=function(f){function g(b){b=f.call(this,b)||this;b.doNotLocateOnRestrictedElements=null;b.geometry=null;b.name=null;b.spatialRelationship=null;b.type="layer";b.where=null;return b}h._inheritsLoose(g,f);return g}(a.JSONSupport);c.__decorate([d.property({type:Boolean,json:{write:!0}})],a.prototype,"doNotLocateOnRestrictedElements",
void 0);c.__decorate([d.property({types:k.geometryTypes,json:{read:m.fromJSON,write:!0}})],a.prototype,"geometry",void 0);c.__decorate([d.property({type:String,json:{read:{source:"layerName"},write:{target:"layerName"}}})],a.prototype,"name",void 0);c.__decorate([d.property({type:String,json:{read:{source:"spatialRel",reader:e.read},write:{target:"spatialRel",writer:e.write}}})],a.prototype,"spatialRelationship",void 0);c.__decorate([d.property({type:String,json:{write:!0}})],a.prototype,"type",void 0);
c.__decorate([d.property({type:String,json:{write:!0}})],a.prototype,"where",void 0);return a=c.__decorate([l.subclass("esri.rest.support.DataLayer")],a)});