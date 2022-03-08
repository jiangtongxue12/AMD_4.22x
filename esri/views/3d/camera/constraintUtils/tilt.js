// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define("exports ../../../../core/compilerUtils ../../../../core/mathUtils ../../../../core/maybe ../../../../chunks/mat4 ../../../../chunks/mat4f64 ../../../../chunks/vec3 ../../../../chunks/vec3f64 ../../../../geometry/projectionEllipsoid ../../../../chunks/sphere ./common ../../state/utils/viewUtils".split(" "),function(u,z,k,J,A,K,h,B,C,D,l,r){function E(c,a,b=l.defaultApplyOptions,d=!0){t.eyeCenterDistance=0;t.requiresTwoSteps=!1;const f=v(c,a,b,void 0,t);if(0===f)return!1;A.identity(q);A.rotate(q,
q,-f,a.viewRight);switch(b.tiltMode){case 1:h.transformMat4(m,a.viewForward,q);h.scale(m,m,t.eyeCenterDistance);a.center=h.add(n,a.eye,m);break;case 0:h.subtract(m,a.center,a.eye);h.transformMat4(m,m,q);a.eye=h.subtract(n,a.center,m);break;default:z.neverReached(b.tiltMode)}a.up=h.transformMat4(n,a.up,q);return t.requiresTwoSteps&&d?E(c,a,b,!1):!0}function v(c,a,b=l.defaultApplyOptions,d=l.defaultApplyOptions,f){if(!c.state.constraints.tilt)return 0;var e=c.state.constraints.tilt(a.distance,L);if(0!==
b.interactionType){var {interactionStartCamera:p,interactionFactor:F}=b,{min:M,max:N}=e,g=v(c,p,l.defaultApplyOptions,b),G=0===g?0:r.viewAngle(c.renderCoordsHelper,p.center,p.eye);e.min=M;e.max=N;2===b.interactionType?(l.hasConstraintType(b.selection,2)&&H(c,p,e),l.adjustRangeForInteraction(g,G,!0,F,I,e)):l.adjustRangeForInteraction(g,G,!1,F,I,e)}2===d.interactionType&&l.hasConstraintType(d.selection,2)&&H(c,d.interactionStartCamera,e);if(1===b.tiltMode||1===d.tiltMode){a:switch(f&&(f.requiresTwoSteps=
!1),c.viewingMode){case "global":b=O;g=c.pointsOfInterest.centerOnSurfaceFrequent.estimatedSurfaceAltitude;d=g+C.getReferenceEllipsoid(c.spatialReference).radius;g=c.renderCoordsHelper.intersectManifold(a.ray,g,n);b.eyeCenterDistance=a.distance;b.centerIsOnSurface=!1;J.isSome(g)?(b.eyeCenterDistance=h.distance(a.eye,g),b.tiltAtCenter=r.viewAngle(c.renderCoordsHelper,g,a.eye),b.centerIsOnSurface=!0):c.state.isLocal?b.tiltAtCenter=r.viewAngle(c.renderCoordsHelper,a.center,a.eye):(D.closestPointOnSilhouette(D.fromRadius(d),
a.ray,n),b.eyeCenterDistance=h.distance(a.eye,n),b.tiltAtCenter=k.acosClamped(-h.dot(a.viewForward,h.normalize(n,n))));b.radius=d;b.eyeRadius=h.length(a.eye);b.constraints=c.state.constraints;a=k.clamp(b.tiltAtCenter,e.min,e.max);if(1E-9<Math.abs(b.tiltAtCenter-a)){if(b.centerIsOnSurface){{const {constraints:w,eyeCenterDistance:P,tiltAtCenter:x}=b;a=x;c=w.clampTilt(P,x);e=y(b,c);if(w.clampTilt(e,x)!==c)for(e=0;10>e&&1E-9<Math.abs(c-a);)d=(a+c)/2,g=y(b,d),g=w.clampTilt(g,d),1E-9<Math.abs(g-d)?a=d:
c=d,e++;a=c}e=a;c=k.asinClamped(b.radius/b.eyeRadius*Math.sin(b.tiltAtCenter));e=k.asinClamped(b.radius/b.eyeRadius*Math.sin(e));c=b.eyeRadius>b.radius?c-e:e-c}else a=b.constraints.clampTilt(b.eyeCenterDistance,b.tiltAtCenter),f&&a<Math.PI/2&&(f.requiresTwoSteps=!0,a=Math.PI/2-1E-5),c=b.tiltAtCenter-Math.PI/2-(a-Math.PI/2);f&&(f.eyeCenterDistance=y(b,a));f=c}else f=0;break a;case "local":d=r.viewAngle(c.renderCoordsHelper,a.center,a.eye);b=k.clamp(d,e.min,e.max);e=d-b;1E-9<Math.abs(e)?(f&&(d=c.pointsOfInterest.centerOnSurfaceFrequent.estimatedSurfaceAltitude,
c=c.renderCoordsHelper.getAltitude(a.eye)-d,b=Math.cos(b),f.eyeCenterDistance=1E-4<Math.abs(b)?c/b:a.distance),f=e):f=0;break a;default:z.neverReached(c.viewingMode),f=void 0}return f}f=r.viewAngle(c.renderCoordsHelper,a.center,a.eye);b=k.clamp(f,e.min,e.max);f-=b;f=1E-9<Math.abs(f)?f:0;return f}function y(c,a){if(!c.centerIsOnSurface)return c.eyeCenterDistance;a=Math.PI-k.clamp(a,0,Math.PI);const b=k.asinClamped(c.radius/c.eyeRadius*Math.sin(a)),d=Math.sin(Math.PI-a-b)/Math.sin(a);return c.eyeRadius<
c.radius&&1<d?Math.sin(Math.PI-a-(Math.PI-b))/Math.sin(a)*c.eyeRadius:d*c.eyeRadius}function H(c,a,b){if(!c.state.isLocal){var d=c.state.constraints;if(d.altitude){var f=h.squaredLength(a.center),e=Math.sqrt(f);a=a.distance;var p=C.getReferenceEllipsoid(c.spatialReference).radius;c=d.altitude.min+p;d=d.altitude.max+p;c=(c*c-a*a-f)/(-2*e*a);b.min=Math.max(b.min,Math.min(Math.PI-k.acosClamped((d*d-a*a-f)/(-2*e*a)),b.max));b.max=Math.min(b.max,Math.PI-k.acosClamped(c))}}}const m=B.create(),q=K.create(),
n=B.create(),I=k.deg2rad(5),L={min:0,max:0},O={constraints:null,radius:0,eyeRadius:0,centerIsOnSurface:!0,eyeCenterDistance:0,tiltAtCenter:0},t={eyeCenterDistance:0,requiresTwoSteps:!1};u.applyTiltConstraint=E;u.getTiltConstraintError=v;Object.defineProperty(u,"__esModule",{value:!0})});