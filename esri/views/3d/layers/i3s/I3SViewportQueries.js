// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define("../../../../core/maybe ../../../../chunks/vec3 ../../../../chunks/vec3f64 ../../../../chunks/vec4 ../../../../geometry/projection ../../../../geometry/projectionEllipsoid ../../../../geometry/support/frustum ../../../../chunks/sphere ../../../../layers/graphics/dehydratedFeatures ../graphics/elevationAlignmentUtils ../graphics/ElevationContext ../graphics/featureExpressionInfoUtils ./I3SUtil ../../support/orientedBoundingBox".split(" "),function(k,d,l,v,w,x,m,y,z,q,A,r,t,n){return function(){function u(a,
b,c,f,g,h,B,p={}){this._indexSR=a;this._renderCoordsHelper=b;this.clippingArea=g;this._elevationProvider=h;this._options=p;this._frustum=m.create();this._useFrustumCulling=!1;this._poi=l.create();this.minDistance=Infinity;this.maxDistance=0;this.maxLodLevel=2;this._tmp1=l.create();this._tmp2=l.create();this._tmp3=l.create();this._tmp0=l.create();this._screenspaceErrorBias=p.screenspaceErrorBias||1;this._progressiveLoadFactor=p.progressiveLoadFactor||1;this.updateCamera(c,f);this.engineSR=this._renderCoordsHelper.spatialReference;
this.updateElevationInfo(B);this._tmpPoint=z.makeDehydratedPoint(0,0,0,a)}var e=u.prototype;e.updateElevationInfo=function(a){null==a?this._elevationContext=null:(this._elevationContext=A.ElevationContext.fromElevationInfo(a),this._elevationContext.updateFeatureExpressionInfoContext(r.createContextWithoutExpressionSupport(r.extractExpressionInfo(a,!1))))};e.updateCamera=function(a,b){(this._useFrustumCulling=b)&&m.fromMatrix(a.viewMatrix,a.projectionMatrix,this._frustum);this._screenSizeFactor=1/
(a.perScreenPixelRatio/2);this._camPos=a.eye;this.minDistance=Infinity;this.maxDistance=0};e.setPointOfInterest=function(a){this._poi=a};e.updateScreenSpaceErrorBias=function(a){const b=this._screenspaceErrorBias;this._screenspaceErrorBias=a;return b};e.updateClippingArea=function(a){this.clippingArea=a};e.getRenderMbs=function(a){const b=a.renderMbs;0>b[3]&&(v.copy(b,a.mbs),this._elevationContext&&1E5>b[3]&&(this._tmpPoint.x=b[0],this._tmpPoint.y=b[1],this._tmpPoint.z=b[2],b[2]=q.evaluateElevationAlignmentAtPoint(this._tmpPoint,
this._elevationProvider,this._elevationContext,this._renderCoordsHelper)),w.projectBoundingSphere(b,this._indexSR,b,this.engineSR));return b};e.getVisibilityObb=function(a){if(k.isSome(a.visibilityObb))return a.visibilityObb;const b=a.serviceObb;if(!(k.isNone(b)||0>b.halfSize[0]))return a.serviceObbInRenderSR=this._computeRenderObb(b,a.serviceObbInRenderSR,a.mbs[3]),a.serviceObbInRenderSR};e._computeRenderObb=function(a,b,c){k.isNone(b)&&(b=n.create());if(0>b.halfSize[0]){let f=0;this._elevationContext&&
1E5>c&&(this._tmpPoint.x=a.center[0],this._tmpPoint.y=a.center[1],this._tmpPoint.z=a.center[2],f=q.evaluateElevationAlignmentAtPoint(this._tmpPoint,this._elevationProvider,this._elevationContext,this._renderCoordsHelper)-a.center[2]);t.transformObb(a,this._indexSR,b,this.engineSR,f)}return b};e.isNodeVisible=function(a){const b=this.getRenderMbs(a);if(!this._isMBSinClippingArea(b))return!1;if(!this._useFrustumCulling)return!0;a=this.getVisibilityObb(a);return k.isSome(a)?n.isVisible(a,this._frustum):
m.intersectsSphere(this._frustum,y.wrap(b))};e.isGeometryVisible=function(a){if(!this._useFrustumCulling)return!0;const b=a.geometryObb;return k.isSome(b)?n.isVisible(b,this._frustum):this.isNodeVisible(a)};e._isMBSinClippingArea=function(a){return k.isNone(this.clippingArea)?!0:0!==t.intersectBoundingRectWithMbs(this.clippingArea,a)};e.screenSpaceDiameterMbs=function(a,b){var c=this.getRenderMbs(a);a=Math.sqrt(d.squaredDistance(c,this._camPos));c=a-c[3];this._updateMinMaxDistance(a);return 0>c?.5*
Number.MAX_VALUE:b/c*this._screenSizeFactor};e.calcCameraDistance=function(a){return this.calcCameraDistanceToCenter(a)-this.getRenderMbs(a)[3]};e.calcCameraDistanceToCenter=function(a){a=this.getRenderMbs(a);a=d.distance(a,this._camPos);this._updateMinMaxDistance(a);return a};e.calcAngleDependentLoD=function(a){a=this.getRenderMbs(a);const b=a[3];a=(Math.abs(a[0]*(a[0]-this._camPos[0])+a[1]*(a[1]-this._camPos[1])+a[2]*(a[2]-this._camPos[2]))/d.length(a)+b)/d.distance(a,this._camPos);return Math.min(1,
a)};e.hasLOD=function(a){return 0!==a.lodMetric};e.getDistancePlanarMode=function(a,b){var c=a[0]-b[0];const f=a[1]-b[1];a=a[2]-b[2];c=c*c+f*f;b=b[3];if(c<=b*b)return Math.abs(a);b=Math.sqrt(c)-b;return Math.sqrt(a*a+b*b)};e.getDistanceGlobeMode=function(a,b){var c=d.length(b);const f=d.length(a)-c;d.scale(this._tmp0,a,d.dot(a,b)/d.squaredLength(a));var g=d.squaredDistance(b,this._tmp0),h=b[3];if(g<=h*h)return Math.abs(f);b=d.scale(this._tmp0,b,1/c);c=d.scale(this._tmp1,b,c-h*h/2/c);g=d.subtract(this._tmp2,
a,c);g=d.subtract(this._tmp2,g,d.scale(this._tmp3,b,d.dot(b,g)));c=d.add(this._tmp2,c,d.scale(this._tmp2,g,h/d.length(g)));h=d.distance(a,c);2E5<=f&&(a=d.subtract(this._tmp1,a,c),a=d.dot(a,b)/d.length(a),.08>a&&(a=1E-4),h/=a);return h};e.getDistance=function(a,b){return this.engineSR===x.getSphericalPCPF(this.engineSR)?this.getDistanceGlobeMode(a,b):this.getDistancePlanarMode(a,b)};e._updateMinMaxDistance=function(a){0<a?(this.minDistance=Math.min(this.minDistance,a),this.maxDistance=Math.max(this.maxDistance,
a)):(this.minDistance=0,this.maxDistance=Math.max(this.maxDistance,-a))};e.getLodLevel=function(a){if(0===a.lodMetric||!a.resources.hasFeatureData)return 0;if(0===a.childCount)return this.maxLodLevel;if(this._useFrustumCulling&&1>this._progressiveLoadFactor){const b=this._screenspaceErrorBias;return this.evaluateLODmetric(a,this._progressiveLoadFactor*this._screenspaceErrorBias)?this.evaluateLODmetric(a,b)?2:1:0}return this.evaluateLODmetric(a,this._screenspaceErrorBias)?this.maxLodLevel:0};e.evaluateLODmetric=
function(a,b){switch(a.lodMetric){case 2:{const c=this.getRenderMbs(a),f=this.getDistance(this._camPos,c),g=2*f/this._screenSizeFactor;this._updateMinMaxDistance(f+c[3]);return a.maxError*b<=g}case 1:return b=this.screenSpaceDiameterMbs(a,a.mbs[3]*b),this._options.angleDependentLoD&&(b*=this.calcAngleDependentLoD(a)),b<a.maxError;case 3:return 10>this.screenSpaceDiameterMbs(a,a.maxError)*b;case 4:return this.calcCameraDistance(a)>a.maxError*b}return!1};e.distToPOI=function(a){a=this.getRenderMbs(a);
return d.distance(a,this._poi)-a[3]};e.distCameraToPOI=function(){return d.distance(this._camPos,this._poi)};return u}()});