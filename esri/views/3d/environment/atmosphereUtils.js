// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define(["exports","../../../chunks/vec3f64"],function(a,b){const c=b.fromValues(5.802E-6,1.3558E-5,3.31E-5);b=b.fromValues(1.95E-6,5.643E-6,2.55E-7);a.atmosphereHeight=1E5;a.betaMie=3.996E-6;a.betaOzone=b;a.betaRayleigh=c;a.computeInnerAltitudeFade=function(d){return Math.min(1,Math.max(0,(d-1E5)/9E5))};a.innerAtmosphereDepth=1E4;a.rayLeighScaleHeight=.085;Object.defineProperty(a,"__esModule",{value:!0})});