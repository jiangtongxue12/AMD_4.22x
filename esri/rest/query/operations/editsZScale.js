// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define(["exports","../../../core/maybe","../../../core/unitUtils","../../../geometry/support/spatialReferenceUtils"],function(g,m,h,n){function k(a,d,c){if(null==a.hasM||a.hasZ)for(const b of d)for(const e of b)2<e.length&&(e[2]*=c)}function l(a,d,c){if(a)for(const p of a){a=p.geometry;var b=d,e=c;if(!m.isNone(a)&&a.spatialReference&&!n.equals(a.spatialReference,b)&&(b=h.getMetersPerVerticalUnitForSR(a.spatialReference)/e,1!==b))if("x"in a)null!=a.z&&(a.z*=b);else if("rings"in a)k(a,a.rings,b);else if("paths"in
a)k(a,a.paths,b);else if("points"in a&&(null==a.hasM||a.hasZ))for(const f of a.points)2<f.length&&(f[2]*=b)}}g.unapplyEditsZUnitScaling=function(a,d,c){if((a||d)&&c){var b=h.getMetersPerVerticalUnitForSR(c);l(a,c,b);l(d,c,b)}};Object.defineProperty(g,"__esModule",{value:!0})});