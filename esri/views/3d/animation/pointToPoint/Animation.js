// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../core/time ../../../../chunks/vec3 ../../../../chunks/vec3f64 ./Camera ../../webgl-engine/lib/Camera ../../../animation/pointToPoint/Animation".split(" "),function(k,q,d,e,f,p,r,t){const u=f.create();f=function(){function l(b){this.currentTime=d.Milliseconds(0);this._animation=new t.Animation(()=>new p(b));this._current=new p(b)}var m=l.prototype;m.update=function(b,c,v){const g=this._animation.definition.source,n=this._animation.definition.target,
a=e.subtract(u,c.center,b.center),h=e.length(a);1E-5<=h?(a[0]/=h,a[1]/=h,a[2]/=h):(a[0]=0,a[1]=1,a[0]=0);e.copy(g.lookAtDirection,a);e.copy(n.lookAtDirection,a);g.copyFromRenderCamera(b);n.copyFromRenderCamera(c);this._current.copyFrom(g);this._animation.update(g,n,v);this.currentTime=d.Milliseconds(0);b.almostEquals(c)&&(this.currentTime=this._animation.time)};m.cameraAt=function(b,c){this._animation.cameraAt(b,this._current);c=c||new r;this._current.copyToRenderCamera(c);return c};m.step=function(b,
c){this.finished||(this.currentTime=d.Milliseconds(this.currentTime+d.MillisecondsFromSeconds(b)),this.currentTime>=this.time&&(this.currentTime=this.time));return this.cameraAt(this.currentTime/this.time,c)};q._createClass(l,[{key:"finished",get:function(){return this.currentTime>=this._animation.time}},{key:"time",get:function(){return this._animation.time}}]);return l}();k.Animation=f;k.default=f;Object.defineProperty(k,"__esModule",{value:!0})});