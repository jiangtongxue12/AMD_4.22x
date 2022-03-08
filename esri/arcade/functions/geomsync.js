// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define("exports ../../kernel ../kernel ../../chunks/languageUtils ./centroid ../../geometry/Extent ../../geometry/Geometry ../../geometry/Multipoint ../../geometry/Point ../../geometry/Polygon ../../geometry/Polyline ../../geometry/support/jsonUtils ../../core/unitUtils".split(" "),function(w,B,m,c,q,u,l,x,v,r,t,y,C){function z(f){return 0===B.version.indexOf("4.")?r.fromExtent(f):new r({spatialReference:f.spatialReference,rings:[[[f.xmin,f.ymin],[f.xmin,f.ymax],[f.xmax,f.ymax],[f.xmax,f.ymin],[f.xmin,
f.ymin]]]})}function A(f,k){if("polygon"!==f.type&&"polyline"!==f.type&&"extent"!==f.type)return 0;var n=1;if(f.spatialReference.vcsWkid||f.spatialReference.latestVcsWkid){n=q.getMetersPerVerticalUnitForSR(f.spatialReference);var d=C.getMetersPerUnitForSR(f.spatialReference);n/=d}d=0;if("polyline"===f.type)for(var g of f.paths)for(var b=1;b<g.length;b++)d+=q.segmentLength3d(g[b],g[b-1],n);else if("polygon"===f.type)for(b of f.rings){for(g=1;g<b.length;g++)d+=q.segmentLength3d(b[g],b[g-1],n);if(b[0][0]!==
b[b.length-1][0]||b[0][1]!==b[b.length-1][1]||void 0!==b[0][2]&&b[0][2]!==b[b.length-1][2])d+=q.segmentLength3d(b[0],b[b.length-1],n)}else"extent"===f.type&&(d+=2*q.segmentLength3d([f.xmin,f.ymin,0],[f.xmax,f.ymin,0],n),d+=2*q.segmentLength3d([f.xmin,f.ymin,0],[f.xmin,f.ymax,0],n),d=2*d+4*Math.abs(c.defaultUndefined(f.zmax,0)*n-c.defaultUndefined(f.zmin,0)*n));f=new t({hasZ:!1,hasM:!1,spatialReference:f.spatialReference,paths:[[0,0],[0,d]]});return h.planarLength(f,k)}let h=null;w.registerFunctions=
function(f,k){function n(d){c.pcCheck(d,2,2);if(!(d[0]instanceof l&&d[1]instanceof l||d[0]instanceof l&&null===d[1]||d[1]instanceof l&&null===d[0]||null===d[0]&&null===d[1]))throw Error("Illegal Argument");}f.disjoint=function(d,g){return k(d,g,function(b,e,a){a=c.autoCastFeatureToGeometry(a);n(a);return null===a[0]||null===a[1]?!0:h.disjoint(a[0],a[1])})};f.intersects=function(d,g){return k(d,g,function(b,e,a){a=c.autoCastFeatureToGeometry(a);n(a);return null===a[0]||null===a[1]?!1:h.intersects(a[0],
a[1])})};f.touches=function(d,g){return k(d,g,function(b,e,a){a=c.autoCastFeatureToGeometry(a);n(a);return null===a[0]||null===a[1]?!1:h.touches(a[0],a[1])})};f.crosses=function(d,g){return k(d,g,function(b,e,a){a=c.autoCastFeatureToGeometry(a);n(a);return null===a[0]||null===a[1]?!1:h.crosses(a[0],a[1])})};f.within=function(d,g){return k(d,g,function(b,e,a){a=c.autoCastFeatureToGeometry(a);n(a);return null===a[0]||null===a[1]?!1:h.within(a[0],a[1])})};f.contains=function(d,g){return k(d,g,function(b,
e,a){a=c.autoCastFeatureToGeometry(a);n(a);return null===a[0]||null===a[1]?!1:h.contains(a[0],a[1])})};f.overlaps=function(d,g){return k(d,g,function(b,e,a){a=c.autoCastFeatureToGeometry(a);n(a);return null===a[0]||null===a[1]?!1:h.overlaps(a[0],a[1])})};f.equals=function(d,g){return k(d,g,function(b,e,a){c.pcCheck(a,2,2);return a[0]===a[1]?!0:a[0]instanceof l&&a[1]instanceof l?h.equals(a[0],a[1]):c.isDate(a[0])&&c.isDate(a[1])?a[0].getTime()===a[1].getTime():!1})};f.relate=function(d,g){return k(d,
g,function(b,e,a){a=c.autoCastFeatureToGeometry(a);c.pcCheck(a,3,3);if(a[0]instanceof l&&a[1]instanceof l)return h.relate(a[0],a[1],c.toString(a[2]));if(a[0]instanceof l&&null===a[1]||a[1]instanceof l&&null===a[0]||null===a[0]&&null===a[1])return!1;throw Error("Illegal Argument");})};f.intersection=function(d,g){return k(d,g,function(b,e,a){a=c.autoCastFeatureToGeometry(a);n(a);return null===a[0]||null===a[1]?null:h.intersect(a[0],a[1])})};f.union=function(d,g){return k(d,g,function(b,e,a){a=c.autoCastFeatureToGeometry(a);
b=[];if(0===a.length)throw Error("Function called with wrong number of Parameters");if(1===a.length)if(c.isArray(a[0]))for(a=c.autoCastFeatureToGeometry(a[0]),e=0;e<a.length;e++){if(null!==a[e]){if(!(a[e]instanceof l))throw Error("Illegal Argument");b.push(a[e])}}else if(c.isImmutableArray(a[0]))for(a=c.autoCastFeatureToGeometry(a[0].toArray()),e=0;e<a.length;e++){if(null!==a[e]){if(!(a[e]instanceof l))throw Error("Illegal Argument");b.push(a[e])}}else{if(a[0]instanceof l)return c.fixSpatialReference(m.cloneGeometry(a[0]),
d.spatialReference);if(null===a[0])return null;throw Error("Illegal Argument");}else for(e=0;e<a.length;e++)if(null!==a[e]){if(!(a[e]instanceof l))throw Error("Illegal Argument");b.push(a[e])}return 0===b.length?null:h.union(b)})};f.difference=function(d,g){return k(d,g,function(b,e,a){a=c.autoCastFeatureToGeometry(a);n(a);return null!==a[0]&&null===a[1]?m.cloneGeometry(a[0]):null===a[0]?null:h.difference(a[0],a[1])})};f.symmetricdifference=function(d,g){return k(d,g,function(b,e,a){a=c.autoCastFeatureToGeometry(a);
n(a);return null===a[0]&&null===a[1]?null:null===a[0]?m.cloneGeometry(a[1]):null===a[1]?m.cloneGeometry(a[0]):h.symmetricDifference(a[0],a[1])})};f.clip=function(d,g){return k(d,g,function(b,e,a){a=c.autoCastFeatureToGeometry(a);c.pcCheck(a,2,2);if(!(a[1]instanceof u)&&null!==a[1])throw Error("Illegal Argument");if(null===a[0])return null;if(!(a[0]instanceof l))throw Error("Illegal Argument");return null===a[1]?null:h.clip(a[0],a[1])})};f.cut=function(d,g){return k(d,g,function(b,e,a){a=c.autoCastFeatureToGeometry(a);
c.pcCheck(a,2,2);if(!(a[1]instanceof t)&&null!==a[1])throw Error("Illegal Argument");if(null===a[0])return[];if(!(a[0]instanceof l))throw Error("Illegal Argument");return null===a[1]?[m.cloneGeometry(a[0])]:h.cut(a[0],a[1])})};f.area=function(d,g){return k(d,g,function(b,e,a){c.pcCheck(a,1,2);a=c.autoCastFeatureToGeometry(a);if(null===a[0])return 0;if(c.isArray(a[0])||c.isImmutableArray(a[0]))return b=c.autoCastArrayOfPointsToPolygon(a[0],d.spatialReference),null===b?0:h.planarArea(b,m.convertSquareUnitsToCode(c.defaultUndefined(a[1],
-1)));if(!(a[0]instanceof l))throw Error("Illegal Argument");return h.planarArea(a[0],m.convertSquareUnitsToCode(c.defaultUndefined(a[1],-1)))})};f.areageodetic=function(d,g){return k(d,g,function(b,e,a){c.pcCheck(a,1,2);a=c.autoCastFeatureToGeometry(a);if(null===a[0])return 0;if(c.isArray(a[0])||c.isImmutableArray(a[0]))return b=c.autoCastArrayOfPointsToPolygon(a[0],d.spatialReference),null===b?0:h.geodesicArea(b,m.convertSquareUnitsToCode(c.defaultUndefined(a[1],-1)));if(!(a[0]instanceof l))throw Error("Illegal Argument");
return h.geodesicArea(a[0],m.convertSquareUnitsToCode(c.defaultUndefined(a[1],-1)))})};f.length=function(d,g){return k(d,g,function(b,e,a){c.pcCheck(a,1,2);a=c.autoCastFeatureToGeometry(a);if(null===a[0])return 0;if(c.isArray(a[0])||c.isImmutableArray(a[0]))return b=c.autoCastArrayOfPointsToPolyline(a[0],d.spatialReference),null===b?0:h.planarLength(b,m.convertLinearUnitsToCode(c.defaultUndefined(a[1],-1)));if(!(a[0]instanceof l))throw Error("Illegal Argument");return h.planarLength(a[0],m.convertLinearUnitsToCode(c.defaultUndefined(a[1],
-1)))})};f.length3d=function(d,g){return k(d,g,function(b,e,a){c.pcCheck(a,1,2);a=c.autoCastFeatureToGeometry(a);if(null===a[0])return 0;if(c.isArray(a[0])||c.isImmutableArray(a[0]))return b=c.autoCastArrayOfPointsToPolyline(a[0],d.spatialReference),null===b?0:!0===b.hasZ?A(b,m.convertLinearUnitsToCode(c.defaultUndefined(a[1],-1))):h.planarLength(b,m.convertLinearUnitsToCode(c.defaultUndefined(a[1],-1)));if(!(a[0]instanceof l))throw Error("Illegal Argument");return!0===a[0].hasZ?A(a[0],m.convertLinearUnitsToCode(c.defaultUndefined(a[1],
-1))):h.planarLength(a[0],m.convertLinearUnitsToCode(c.defaultUndefined(a[1],-1)))})};f.lengthgeodetic=function(d,g){return k(d,g,function(b,e,a){c.pcCheck(a,1,2);a=c.autoCastFeatureToGeometry(a);if(null===a[0])return 0;if(c.isArray(a[0])||c.isImmutableArray(a[0]))return b=c.autoCastArrayOfPointsToPolyline(a[0],d.spatialReference),null===b?0:h.geodesicLength(b,m.convertLinearUnitsToCode(c.defaultUndefined(a[1],-1)));if(!(a[0]instanceof l))throw Error("Illegal Argument");return h.geodesicLength(a[0],
m.convertLinearUnitsToCode(c.defaultUndefined(a[1],-1)))})};f.distance=function(d,g){return k(d,g,function(b,e,a){a=c.autoCastFeatureToGeometry(a);c.pcCheck(a,2,3);b=a[0];if(c.isArray(a[0])||c.isImmutableArray(a[0]))b=c.autoCastArrayOfPointsToMultiPoint(a[0],d.spatialReference);e=a[1];if(c.isArray(a[1])||c.isImmutableArray(a[1]))e=c.autoCastArrayOfPointsToMultiPoint(a[1],d.spatialReference);if(!(b instanceof l))throw Error("Illegal Argument");if(!(e instanceof l))throw Error("Illegal Argument");return h.distance(b,
e,m.convertLinearUnitsToCode(c.defaultUndefined(a[2],-1)))})};f.distancegeodetic=function(d,g){return k(d,g,function(b,e,a){a=c.autoCastFeatureToGeometry(a);c.pcCheck(a,2,3);b=a[0];e=a[1];if(!(b instanceof v))throw Error("Illegal Argument");if(!(e instanceof v))throw Error("Illegal Argument");const p=new t({paths:[],spatialReference:b.spatialReference});p.addPath([b,e]);return h.geodesicLength(p,m.convertLinearUnitsToCode(c.defaultUndefined(a[2],-1)))})};f.densify=function(d,g){return k(d,g,function(b,
e,a){a=c.autoCastFeatureToGeometry(a);c.pcCheck(a,2,3);if(null===a[0])return null;if(!(a[0]instanceof l))throw Error("Illegal Argument");b=c.toNumber(a[1]);if(isNaN(b))throw Error("Illegal Argument");if(0>=b)throw Error("Illegal Argument");return a[0]instanceof r||a[0]instanceof t?h.densify(a[0],b,m.convertLinearUnitsToCode(c.defaultUndefined(a[2],-1))):a[0]instanceof u?h.densify(z(a[0]),b,m.convertLinearUnitsToCode(c.defaultUndefined(a[2],-1))):a[0]})};f.densifygeodetic=function(d,g){return k(d,
g,function(b,e,a){a=c.autoCastFeatureToGeometry(a);c.pcCheck(a,2,3);if(null===a[0])return null;if(!(a[0]instanceof l))throw Error("Illegal Argument");b=c.toNumber(a[1]);if(isNaN(b))throw Error("Illegal Argument");if(0>=b)throw Error("Illegal Argument");return a[0]instanceof r||a[0]instanceof t?h.geodesicDensify(a[0],b,m.convertLinearUnitsToCode(c.defaultUndefined(a[2],-1))):a[0]instanceof u?h.geodesicDensify(z(a[0]),b,m.convertLinearUnitsToCode(c.defaultUndefined(a[2],-1))):a[0]})};f.generalize=function(d,
g){return k(d,g,function(b,e,a){a=c.autoCastFeatureToGeometry(a);c.pcCheck(a,2,4);if(null===a[0])return null;if(!(a[0]instanceof l))throw Error("Illegal Argument");b=c.toNumber(a[1]);if(isNaN(b))throw Error("Illegal Argument");return h.generalize(a[0],b,c.toBoolean(c.defaultUndefined(a[2],!0)),m.convertLinearUnitsToCode(c.defaultUndefined(a[3],-1)))})};f.buffer=function(d,g){return k(d,g,function(b,e,a){a=c.autoCastFeatureToGeometry(a);c.pcCheck(a,2,3);if(null===a[0])return null;if(!(a[0]instanceof
l))throw Error("Illegal Argument");b=c.toNumber(a[1]);if(isNaN(b))throw Error("Illegal Argument");return 0===b?m.cloneGeometry(a[0]):h.buffer(a[0],b,m.convertLinearUnitsToCode(c.defaultUndefined(a[2],-1)))})};f.buffergeodetic=function(d,g){return k(d,g,function(b,e,a){a=c.autoCastFeatureToGeometry(a);c.pcCheck(a,2,3);if(null===a[0])return null;if(!(a[0]instanceof l))throw Error("Illegal Argument");b=c.toNumber(a[1]);if(isNaN(b))throw Error("Illegal Argument");return 0===b?m.cloneGeometry(a[0]):h.geodesicBuffer(a[0],
b,m.convertLinearUnitsToCode(c.defaultUndefined(a[2],-1)))})};f.offset=function(d,g){return k(d,g,function(b,e,a){a=c.autoCastFeatureToGeometry(a);c.pcCheck(a,2,6);if(null===a[0])return null;if(!(a[0]instanceof r||a[0]instanceof t))throw Error("Illegal Argument");b=c.toNumber(a[1]);if(isNaN(b))throw Error("Illegal Argument");e=c.toNumber(c.defaultUndefined(a[4],10));if(isNaN(e))throw Error("Illegal Argument");const p=c.toNumber(c.defaultUndefined(a[5],0));if(isNaN(p))throw Error("Illegal Argument");
return h.offset(a[0],b,m.convertLinearUnitsToCode(c.defaultUndefined(a[2],-1)),c.toString(c.defaultUndefined(a[3],"round")).toLowerCase(),e,p)})};f.rotate=function(d,g){return k(d,g,function(b,e,a){a=c.autoCastFeatureToGeometry(a);c.pcCheck(a,2,3);b=a[0];if(null===b)return null;if(!(b instanceof l))throw Error("Illegal Argument");b instanceof u&&(b=r.fromExtent(b));e=c.toNumber(a[1]);if(isNaN(e))throw Error("Illegal Argument");a=c.defaultUndefined(a[2],null);if(null===a)return h.rotate(b,e);if(a instanceof
v)return h.rotate(b,e,a);throw Error("Illegal Argument");})};f.centroid=function(d,g){return k(d,g,function(b,e,a){a=c.autoCastFeatureToGeometry(a);c.pcCheck(a,1,1);if(null===a[0])return null;b=a[0];if(c.isArray(a[0])||c.isImmutableArray(a[0]))b=c.autoCastArrayOfPointsToMultiPoint(a[0],d.spatialReference);if(null===b)return null;if(!(b instanceof l))throw Error("Illegal Argument");return b instanceof v?c.fixSpatialReference(m.cloneGeometry(a[0]),d.spatialReference):b instanceof r?b.centroid:b instanceof
t?q.centroidPolyline(b):b instanceof x?q.centroidMultiPoint(b):b instanceof u?b.center:null})};f.multiparttosinglepart=function(d,g){return k(d,g,function(b,e,a){a=c.autoCastFeatureToGeometry(a);c.pcCheck(a,1,1);e=[];if(null===a[0])return null;if(!(a[0]instanceof l))throw Error("Illegal Argument");if(a[0]instanceof v||a[0]instanceof u)return[c.fixSpatialReference(m.cloneGeometry(a[0]),d.spatialReference)];b=h.simplify(a[0]);if(b instanceof r){a=[];e=[];for(var p=0;p<b.rings.length;p++)if(b.isClockwise(b.rings[p])){const D=
y.fromJSON({rings:[b.rings[p]],hasZ:!0===b.hasZ,hasM:!0===b.hasM,spatialReference:b.spatialReference.toJSON()});a.push(D)}else e.push({ring:b.rings[p],pt:b.getPoint(p,0)});for(b=0;b<e.length;b++)for(p=0;p<a.length;p++)if(a[p].contains(e[b].pt)){a[p].addRing(e[b].ring);break}return a}if(b instanceof t){a=[];for(e=0;e<b.paths.length;e++)p=y.fromJSON({paths:[b.paths[e]],hasZ:!0===b.hasZ,hasM:!0===b.hasM,spatialReference:b.spatialReference.toJSON()}),a.push(p);return a}if(a[0]instanceof x){b=c.fixSpatialReference(m.cloneGeometry(a[0]),
d.spatialReference);for(a=0;a<b.points.length;a++)e.push(b.getPoint(a));return e}return null})};f.issimple=function(d,g){return k(d,g,function(b,e,a){a=c.autoCastFeatureToGeometry(a);c.pcCheck(a,1,1);if(null===a[0])return!0;if(!(a[0]instanceof l))throw Error("Illegal Argument");return h.isSimple(a[0])})};f.simplify=function(d,g){return k(d,g,function(b,e,a){a=c.autoCastFeatureToGeometry(a);c.pcCheck(a,1,1);if(null===a[0])return null;if(!(a[0]instanceof l))throw Error("Illegal Argument");return h.simplify(a[0])})}};
w.setGeometryEngine=function(f){h=f};Object.defineProperty(w,"__esModule",{value:!0})});