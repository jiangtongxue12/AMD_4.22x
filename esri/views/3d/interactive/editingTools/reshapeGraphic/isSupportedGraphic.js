// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define(["exports","../../../../../core/maybe","../../../../../geometry/Circle","../../../../../support/elevationInfoUtils"],function(b,f,g,c){function d(a){var e;return"graphics"!==(null==(e=a.layer)?void 0:e.type)?{result:1,geometry:null}:f.isNone(a.geometry)?{result:2,geometry:null}:"on-the-ground"!==c.getGraphicEffectiveElevationMode(a)&&c.hasGraphicFeatureExpressionInfo(a)?{result:4,geometry:null}:"point"!==a.geometry.type&&"polyline"!==a.geometry.type&&("polygon"!==a.geometry.type||a.geometry instanceof
g)?{result:3,geometry:null}:{result:0,geometry:a.geometry}}b.geometryOfSupportedGraphic=function(a){return d(a).geometry};b.isSupportedGraphic=function(a){return d(a).result};Object.defineProperty(b,"__esModule",{value:!0})});