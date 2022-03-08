// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define(["exports","../chunks/geometryEngineBase","./geometryAdapters/hydrated"],function(c,d,f){function g(a){return Array.isArray(a)?a[0].spatialReference:a&&a.spatialReference}function l(a){return"xmin"in a?"center"in a?a.center:null:"x"in a?a:"extent"in a?a.extent.center:null}c.buffer=function(a,b,e,h=!1){return d.GeometryEngineApi.buffer(f.hydratedAdapter,g(a),a,b,e,h)};c.clip=function(a,b){return d.GeometryEngineApi.clip(f.hydratedAdapter,g(a),a,b)};c.contains=function(a,b){return d.GeometryEngineApi.contains(f.hydratedAdapter,
g(a),a,b)};c.convexHull=function(a,b=!1){return d.GeometryEngineApi.convexHull(f.hydratedAdapter,g(a),a,b)};c.crosses=function(a,b){return d.GeometryEngineApi.crosses(f.hydratedAdapter,g(a),a,b)};c.cut=function(a,b){return d.GeometryEngineApi.cut(f.hydratedAdapter,g(a),a,b)};c.densify=function(a,b,e){return d.GeometryEngineApi.densify(f.hydratedAdapter,g(a),a,b,e)};c.difference=function(a,b){return d.GeometryEngineApi.difference(f.hydratedAdapter,g(a),a,b)};c.disjoint=function(a,b){return d.GeometryEngineApi.disjoint(f.hydratedAdapter,
g(a),a,b)};c.distance=function(a,b,e){return d.GeometryEngineApi.distance(f.hydratedAdapter,g(a),a,b,e)};c.equals=function(a,b){return d.GeometryEngineApi.equals(f.hydratedAdapter,g(a),a,b)};c.extendedSpatialReferenceInfo=function(a){return d.GeometryEngineApi.extendedSpatialReferenceInfo(a)};c.flipHorizontal=function(a,b){var e;if(null==a)throw Error("Illegal Argument Exception");const h=a.spatialReference;b=null!=(e=b)?e:l(a);if(null==b)throw Error("Illegal Argument Exception");a=a.constructor.fromJSON(d.GeometryEngineApi.flipHorizontal(a,
b));a.spatialReference=h;return a};c.flipVertical=function(a,b){var e;if(null==a)throw Error("Illegal Argument Exception");const h=a.spatialReference;b=null!=(e=b)?e:l(a);if(null==b)throw Error("Illegal Argument Exception");a=a.constructor.fromJSON(d.GeometryEngineApi.flipVertical(a,b));a.spatialReference=h;return a};c.generalize=function(a,b,e,h){return d.GeometryEngineApi.generalize(f.hydratedAdapter,g(a),a,b,e,h)};c.geodesicArea=function(a,b,e){return d.GeometryEngineApi.geodesicArea(f.hydratedAdapter,
g(a),a,b,e)};c.geodesicBuffer=function(a,b,e,h,k,m){return d.GeometryEngineApi.geodesicBuffer(f.hydratedAdapter,g(a),a,b,e,h,k,m)};c.geodesicDensify=function(a,b,e,h=0){return d.GeometryEngineApi.geodesicDensify(f.hydratedAdapter,g(a),a,b,e,h)};c.geodesicLength=function(a,b,e){return d.GeometryEngineApi.geodesicLength(f.hydratedAdapter,g(a),a,b,e)};c.intersect=function(a,b){return d.GeometryEngineApi.intersect(f.hydratedAdapter,g(a),a,b)};c.intersects=function(a,b){return d.GeometryEngineApi.intersects(f.hydratedAdapter,
g(a),a,b)};c.isSimple=function(a){return d.GeometryEngineApi.isSimple(f.hydratedAdapter,g(a),a)};c.nearestCoordinate=function(a,b,e=!0){return d.GeometryEngineApi.nearestCoordinate(f.hydratedAdapter,g(a),a,b,e)};c.nearestVertex=function(a,b){return d.GeometryEngineApi.nearestVertex(f.hydratedAdapter,g(a),a,b)};c.nearestVertices=function(a,b,e,h){return d.GeometryEngineApi.nearestVertices(f.hydratedAdapter,g(a),a,b,e,h)};c.offset=function(a,b,e,h,k,m){return d.GeometryEngineApi.offset(f.hydratedAdapter,
g(a),a,b,e,h,k,m)};c.overlaps=function(a,b){return d.GeometryEngineApi.overlaps(f.hydratedAdapter,g(a),a,b)};c.planarArea=function(a,b){return d.GeometryEngineApi.planarArea(f.hydratedAdapter,g(a),a,b)};c.planarLength=function(a,b){return d.GeometryEngineApi.planarLength(f.hydratedAdapter,g(a),a,b)};c.relate=function(a,b,e){return d.GeometryEngineApi.relate(f.hydratedAdapter,g(a),a,b,e)};c.rotate=function(a,b,e){var h;if(null==a)throw Error("Illegal Argument Exception");const k=a.spatialReference;
e=null!=(h=e)?h:l(a);if(null==e)throw Error("Illegal Argument Exception");a=a.constructor.fromJSON(d.GeometryEngineApi.rotate(a,b,e));a.spatialReference=k;return a};c.simplify=function(a){return d.GeometryEngineApi.simplify(f.hydratedAdapter,g(a),a)};c.symmetricDifference=function(a,b){return d.GeometryEngineApi.symmetricDifference(f.hydratedAdapter,g(a),a,b)};c.touches=function(a,b){return d.GeometryEngineApi.touches(f.hydratedAdapter,g(a),a,b)};c.union=function(a,b=null){return d.GeometryEngineApi.union(f.hydratedAdapter,
g(a),a,b)};c.within=function(a,b){return d.GeometryEngineApi.within(f.hydratedAdapter,g(a),a,b)};Object.defineProperty(c,"__esModule",{value:!0})});