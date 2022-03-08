// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/vec3 ../../../../chunks/vec3f64 ../../../../geometry/projection ../../../../geometry/projectionEllipsoid ../../support/mathUtils".split(" "),function(e,f,d,g,k,m){let n=function(){function c(b,a){this._startPosition=d.create();this._endPosition=d.create();f.copy(this._startPosition,b);f.copy(this._endPosition,a)}c.prototype.eval=function(b,a){f.lerp(a,this._startPosition,this._endPosition,b)};return c}(),q=function(){function c(b,a,h,p){this._startPosition=d.create();
this._endPosition=d.create();const l=k.getSphericalPCPF(h);g.projectVectorToVector(b,h,this._startPosition,l);g.projectVectorToVector(a,h,this._endPosition,l);this._destSR=k.getSphericalPCPF(p)}c.prototype.eval=function(b,a){m.slerp(this._startPosition,this._endPosition,b,a);g.projectVectorToVector(a,this._destSR,a,this._destSR)};return c}();e.Linear=n;e.Spherical=q;Object.defineProperty(e,"__esModule",{value:!0})});