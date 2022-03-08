// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../intl ../../PopupTemplate ../../core/Error ../../core/Handles ../../core/accessorSupport/decorators/property ../../core/arrayUtils ../../core/has ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass ../Popup/actions ../support/GeolocationPositioning ../support/geolocationUtils ../../intl/locale ../../intl/messages".split(" "),function(f,g,e,p,n,q,h,A,B,C,r,t,u,v,w,x){function y(){return m.apply(this,
arguments)}function m(){m=f._asyncToGenerator(function*(){const b=yield x.fetchMessageBundle("esri/widgets/Locate/t9n/Locate");return new p({title:b.currentLocation,fieldInfos:[{fieldName:"timestamp",label:b.timestamp,format:{dateFormat:"short-date-short-time"}},{fieldName:"latitude",label:b.latitude,format:{places:4,digitSeparator:!0}},{fieldName:"longitude",label:b.longitude,format:{places:4,digitSeparator:!0}},{fieldName:"accuracy",label:b.accuracy,format:{places:0,digitSeparator:!0}},{fieldName:"altitude",
label:b.altitude,format:{places:0,digitSeparator:!0}},{fieldName:"altitudeAccuracy",label:b.altitudeAccuracy,format:{places:0,digitSeparator:!0}},{fieldName:"heading",label:b.heading,format:{places:0,digitSeparator:!0}},{fieldName:"speed",label:b.speed,format:{places:0,digitSeparator:!0}}],actions:[t.removeSelectedFeature.clone()],content:[{type:"fields"}]})});return m.apply(this,arguments)}e=function(b){function l(a){a=b.call(this,a)||this;a._locateController=null;a._handles=new q;a.popupEnabled=
!0;a.locate=a.locate.bind(f._assertThisInitialized(a));return a}f._inheritsLoose(l,b);var k=l.prototype;k.initialize=function(){this._handles.add([w.onLocaleChange(()=>{var a;const {graphic:d,view:c}=this;(null==c?0:null==(a=c.graphics)?0:a.includes(d))&&this._updatePopupTemplate(d)})])};k.destroy=function(){this.cancelLocate();this._handles.destroy();this._handles=null};k.locate=function(){var a=f._asyncToGenerator(function*(){this.cancelLocate();if("disabled"===this.state)throw new n("locate:disabled-state",
"Cannot locate when disabled.");if("feature-unsupported"===this.state)throw new n("locate:feature-unsupported-state","Cannot locate in unsecure domain.");const d=new AbortController;this._locateController=d;try{let c=yield v.getCurrentPosition(this.geolocationOptions);c=yield this._setPosition(c,{signal:d.signal});if(this._locateController!==d)return null;this.graphic&&(this.graphic=this.graphic.clone(),yield this._updatePopupTemplate(this.graphic),this.view.graphics.push(this.graphic));this.emit("locate",
{position:c});this._locateController=null;return c}catch(c){throw this._locateController=null,this.emit("locate-error",{error:c}),c;}});return function(){return a.apply(this,arguments)}}();k.cancelLocate=function(){this._clear();this._locateController&&this._locateController.abort();this._locateController=null};k._updatePopupTemplate=function(){var a=f._asyncToGenerator(function*(d){if(this.popupEnabled){var c=yield y(),z=d!==this.graphic;this.destroyed||z||(d.popupTemplate=c)}});return function(d){return a.apply(this,
arguments)}}();f._createClass(l,[{key:"state",get:function(){return this._geolocationUsable?this.get("view.ready")?this._locateController?"locating":"ready":"disabled":"feature-unsupported"}}]);return l}(u);g.__decorate([h.property()],e.prototype,"_locateController",void 0);g.__decorate([h.property()],e.prototype,"popupEnabled",void 0);g.__decorate([h.property({readOnly:!0})],e.prototype,"state",null);g.__decorate([h.property()],e.prototype,"locate",null);g.__decorate([h.property()],e.prototype,"cancelLocate",
null);return e=g.__decorate([r.subclass("esri.widgets.Locate.LocateViewModel")],e)});