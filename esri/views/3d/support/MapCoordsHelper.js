// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../geometry ../../../core/Error ../../../core/unitUtils ../../../geometry/projectionEllipsoid ../../../portal/support/geometryServiceUtils ../../../rest/geometryService/project ../../../rest/support/ProjectParameters ../../../geometry/Point ../../../geometry/SpatialReference".split(" "),function(e,l,f,m,n,p,q,r,t,g,u){f=function(){function h(c,a){this.spatialReference=a;this.unitInMeters=n.getMetersPerUnitForSR(this.spatialReference,
p.getReferenceEllipsoid(this.spatialReference).metersPerDegree);this._geometryServiceURLPromise=q.getGeometryServiceURL(c&&c.get("portalItem")).catch(()=>{throw new m("mapcoordshelper:missing-geometry-service","Must specify geometryService in esri/config");})}h.prototype.toGeographic=function(){var c=l._asyncToGenerator(function*(a){var d=yield this._geometryServiceURLPromise;let k=!0;Array.isArray(a[0])&&"number"!==typeof a[0]||(a=[a],k=!1);a=a.map(b=>b instanceof g?b:new g(b,this.spatialReference));
a=new t({geometries:a,outSpatialReference:u.WGS84});d=(yield r.project(d,a)).map(b=>"point"===b.type?[b.x,b.y]:void 0);return k?d:d[0]});return function(a){return c.apply(this,arguments)}}();return h}();e.MapCoordsHelper=f;e.default=f;Object.defineProperty(e,"__esModule",{value:!0})});