// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define(["exports","../../../../core/arrayUtils","../../../../chunks/vec2"],function(e,f,g){let k=function(){function d(a,b,h=0){this.origin=a;this.angle=b;this.accumulationType=h}var c=d.prototype;c.rotate=function(a,b){g.rotate(a.pos,a.pos,this.origin,b)};c.apply=function(a){this.rotate(a,this.angle)};c.undo=function(a){this.rotate(a,-this.angle)};c.canAccumulate=function(a){return a instanceof d&&f.equals(this.origin,a.origin)};c.accumulate=function(a,b){this.rotate(a,1===b.accumulationType?b.angle-
this.angle:b.angle)};c.accumulateParams=function(a){this.angle=1===a.accumulationType?a.angle:this.angle+a.angle};return d}();e.RotateVertex=k;Object.defineProperty(e,"__esModule",{value:!0})});