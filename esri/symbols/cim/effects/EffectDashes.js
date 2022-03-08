// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../CIMCursor","../CurveHelper","../GeometryWalker"],function(f,m,n,p,g){let h=function(){function c(){}c.local=function(){null===c.instance&&(c.instance=new c);return c.instance};c.prototype.execute=function(e,a,b){return new q(e,a,b)};return c}();h.instance=null;let q=function(c){function e(a,b,d){var k,l;a=c.call(this,a,!0,!0)||this;a._walker=new g.GeometryWalker;a._walker.updateTolerance(d);a._endings=b.lineDashEnding;a._customDashPos=
-(null!=(k=b.offsetAlongLine)?k:0)*d;a._offsetAtEnd=(null!=(l=b.customEndingOffset)?l:0)*d;a._pattern=new g.DashPattern;a._pattern.init(b.dashTemplate,!0);a._pattern.scale(d);return a}m._inheritsLoose(e,c);e.prototype.processPath=function(a){if(0===this._pattern.length())return this.iteratePath=!1,{paths:[a]};if(!this.iteratePath){var b=!0;switch(this._endings){default:this._pattern.extPtGap=0;break;case "FullPattern":this.isClosed||(this._pattern.extPtGap=.5*this._pattern.firstValue());break;case "FullGap":this.isClosed||
(this._pattern.extPtGap=.5*this._pattern.lastValue());break;case "NoConstraint":this.isClosed||(b=!1);break;case "Custom":this.isClosed||(this._pattern.extPtGap=.5*this._offsetAtEnd)}var d=this._walker.calculatePathLength(a);if(this._pattern.isEmpty()||d<.1*this._pattern.length()||!this._walker.init(a,this._pattern,b))return{paths:[a]}}if(this.iteratePath)a=this._pattern.nextValue();else{switch(this._endings){default:b=.5*this._pattern.firstValue();break;case "HalfGap":b=.5*-this._pattern.lastValue();
break;case "FullGap":b=-this._pattern.lastValue();break;case "FullPattern":b=0;break;case "NoConstraint":case "Custom":b=-this._customDashPos}a=b/this._pattern.length();a-=Math.floor(a);b=a*this._pattern.length();this._pattern.reset();a=this._pattern.nextValue();for(d=!1;b>=a;)b-=a,a=this._pattern.nextValue(),d=!d;a-=b;d?(this._walker.nextPosition(a),a=this._pattern.nextValue()):this.isClosed&&(this._firstCurve=this._walker.nextCurve(a),a=this._pattern.nextValue(),this._walker.nextPosition(a),a=this._pattern.nextValue())}(b=
this._walker.nextCurve(a))?this._walker.isPathEnd()?(this.iteratePath=!1,this._firstCurve&&(this._firstCurve.splice(0,1),p.PathHelper.mergePath(b,this._firstCurve),this._firstCurve=null)):(a=this._pattern.nextValue(),!this._walker.nextPosition(a)||this._walker.isPathEnd()?(this.iteratePath=!1,this._firstCurve&&(b=this._firstCurve,this._firstCurve=null)):this.iteratePath=!0):(this.iteratePath=!1,b=this._firstCurve,this._firstCurve=null);return{paths:[b]}};return e}(n.PathGeometryCursor);f.EffectDashes=
h;Object.defineProperty(f,"__esModule",{value:!0})});