// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define(["exports","../../chunks/_rollupPluginBabelHelpers"],function(d,e){let g=function(){function c(a){this.gain=a}var b=c.prototype;b.update=function(a){if(this.hasLastValue){const f=this.computeDelta(a);this.updateDelta(f)}this.lastValue=a};b.reset=function(){this.filteredDelta=this.lastValue=void 0};b.computeDelta=function(a){return a-this.lastValue};b.updateDelta=function(a){this.filteredDelta=this.hasFilteredDelta?(1-this.gain)*this.filteredDelta+this.gain*a:a};e._createClass(c,[{key:"hasLastValue",
get:function(){return void 0!==this.lastValue}},{key:"hasFilteredDelta",get:function(){return void 0!==this.filteredDelta}}]);return c}();d.FilteredFiniteDifference=g;Object.defineProperty(d,"__esModule",{value:!0})});