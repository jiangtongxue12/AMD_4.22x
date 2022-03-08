// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../core/time ../easing ./Definition ./Settings ./apex/Path".split(" "),function(g,l,d,h,m,k,n){const p={zoom:0,pan:0,rotate:0};let q=function(){function f(a){this.createCamera=a;this._time=d.Milliseconds(0);this.definition=new m.Definition(a);this.path=new n.Path}var e=f.prototype;e.update=function(a,b,c){this.definition.update(a,b,c);this.path.update(this.definition,c);this._time=this._applyTimeSettings(d.MillisecondsFromSeconds(this.path.time),
c);this._easing=c.easing?c.easing:1E3<=this._time?h.inOutCoastQuad:h.outExpo};e.cameraAt=function(a,b){b=b||this.createCamera();a=Math.min(Math.max(0,a),1);a=this._normalizedEasing(a);a=this.path.interpolateComponentsAt(a,p);b.interpolate(this.definition.source,this.definition.target,a);return b};e._normalizedEasing=function(a){const b=this._easing(0,this._time),c=this._easing(1,this._time);return(this._easing(a,this._time)-b)/(c-b)};e._applyTimeSettings=function(a,b){const c=null!=b.speedFactor?
b.speedFactor:1;null!=b.duration?a=b.duration:null!=b.speedFactor&&(a=d.Milliseconds(a/c));return d.Milliseconds(Math.min(Math.max(null!=b.minDuration?b.minDuration:k.defaultSettings.minDuration/c,a),null!=b.maxDuration?b.maxDuration:k.defaultSettings.maxDuration/c))};l._createClass(f,[{key:"time",get:function(){return this._time}}]);return f}();g.Animation=q;Object.defineProperty(g,"__esModule",{value:!0})});