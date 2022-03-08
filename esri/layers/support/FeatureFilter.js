// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../geometry ../../TimeExtent ../../core/jsonMap ../../core/JSONSupport ../../core/lang ../../core/maybe ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass ../../rest/support/Query".split(" "),function(v,c,w,x,e,b,f,y,d,h,z,A){var k;h=new e.JSONMap({esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",
esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"envelope-intersects",esriSpatialRelIndexIntersects:"index-intersects",esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:"relation"});e=new e.JSONMap({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"});b=k=function(g){function l(a){a=
g.call(this,a)||this;a.where=null;a.geometry=null;a.spatialRelationship="intersects";a.distance=void 0;a.objectIds=null;a.units=null;a.timeExtent=null;return a}v._inheritsLoose(l,g);var u=l.prototype;u.createQuery=function(a={}){const {where:m,geometry:n,spatialRelationship:p,timeExtent:q,objectIds:r,units:t,distance:B}=this;return new A({geometry:f.clone(n),objectIds:f.clone(r),spatialRelationship:p,timeExtent:f.clone(q),where:m,units:t,distance:B,...a})};u.clone=function(){const {where:a,geometry:m,
spatialRelationship:n,timeExtent:p,objectIds:q,units:r,distance:t}=this;return new k({geometry:f.clone(m),objectIds:f.clone(q),spatialRelationship:n,timeExtent:f.clone(p),where:a,units:r,distance:t})};return l}(b.JSONSupport);c.__decorate([d.property({type:String,json:{write:!0}})],b.prototype,"where",void 0);c.__decorate([d.property({types:w.geometryTypes,json:{write:!0}})],b.prototype,"geometry",void 0);c.__decorate([d.property({type:h.apiValues,json:{name:"spatialRel",read:{reader:h.read},write:{allowNull:!1,
writer:h.write,overridePolicy(){return{enabled:y.isSome(this.geometry)}}}}})],b.prototype,"spatialRelationship",void 0);c.__decorate([d.property({type:Number,json:{write:{overridePolicy(g){return{enabled:null!=g&&null!=this.geometry}}}}})],b.prototype,"distance",void 0);c.__decorate([d.property({type:[Number],json:{write:!0}})],b.prototype,"objectIds",void 0);c.__decorate([d.property({type:e.apiValues,json:{read:e.read,write:{writer:e.write,overridePolicy(g){return{enabled:null!=g&&null!=this.geometry}}}}})],
b.prototype,"units",void 0);c.__decorate([d.property({type:x,json:{write:!0}})],b.prototype,"timeExtent",void 0);return b=k=c.__decorate([z.subclass("esri.layers.support.FeatureFilter")],b)});