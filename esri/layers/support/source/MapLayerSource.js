// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/JSONSupport ../../../core/accessorSupport/decorators/property ../../../core/arrayUtils ../../../core/has ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/enumeration ../../../core/accessorSupport/decorators/subclass".split(" "),function(a,h,c,k,f,q,r,l,m,n){var d;a.MapLayerSource=d=function(g){function e(b){b=g.call(this,b)||this;b.type="map-layer";return b}h._inheritsLoose(e,
g);e.prototype.clone=function(){const {mapLayerId:b,gdbVersion:p}=this;return new d({mapLayerId:b,gdbVersion:p})};return e}(k.JSONSupport);c.__decorate([m.enumeration({mapLayer:"map-layer"})],a.MapLayerSource.prototype,"type",void 0);c.__decorate([f.property({type:l.Integer,json:{write:!0}})],a.MapLayerSource.prototype,"mapLayerId",void 0);c.__decorate([f.property({type:String,json:{write:!0}})],a.MapLayerSource.prototype,"gdbVersion",void 0);a.MapLayerSource=d=c.__decorate([n.subclass("esri.layers.support.source.MapLayerSource")],
a.MapLayerSource);Object.defineProperty(a,"__esModule",{value:!0})});