// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/Evented ../../../core/accessorSupport/decorators/property ../../../core/arrayUtils ../../../core/has ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/subclass ../../../webscene/Lighting".split(" "),function(c,n,d,q,f,v,w,x,r,t){function l({hours:h,minutes:e,seconds:g}){return Math.round(h+e/60+g/3600)}var k;c.SceneViewLighting=k=function(h){function e(a){a=h.call(this,
a)||this;a.positionTimezoneInfo={hours:0,minutes:0,seconds:0,autoUpdated:!0};a.cameraTrackingEnabled=!0;a.ambientOcclusionEnabled=!1;a.waterReflectionEnabled=!1;var b=(new Date).getFullYear();b=new Date("March 15, "+b+" 12:00:00 UTC");a._set("defaultDate",b);a._set("date",b);return a}n._inheritsLoose(e,h);e.fromWebsceneLighting=function(a){return new k({...a.cloneConstructProperties()})};var g=e.prototype;g.autoUpdate=function(a,b){const u=l(this.positionTimezoneInfo);this.positionTimezoneInfo.hours=
b.hours;this.positionTimezoneInfo.minutes=b.minutes;this.positionTimezoneInfo.seconds=b.seconds;b=null;null!=a&&(this.positionTimezoneInfo.autoUpdated=!0,b=this.date&&this.date.getTime(),this._set("date",new Date(a.getTime())));const p=l(this.positionTimezoneInfo);u!==p&&(m.target=this,m.timezoneOffset=p,this.emit("timezone-will-change",m));if(null!=a)return b!==a.getTime()};g.clone=function(){const a=this._get("date")===this._get("defaultDate"),b=new k({...this.cloneConstructProperties(),defaultDate:this.defaultDate,
cameraTrackingEnabled:this.cameraTrackingEnabled,ambientOcclusionEnabled:this.ambientOcclusionEnabled,waterReflectionEnabled:this.waterReflectionEnabled});a&&b._set("date",b._get("defaultDate"));b.positionTimezoneInfo.autoUpdated=this.positionTimezoneInfo.autoUpdated;b.positionTimezoneInfo.hours=this.positionTimezoneInfo.hours;b.positionTimezoneInfo.minutes=this.positionTimezoneInfo.minutes;b.positionTimezoneInfo.seconds=this.positionTimezoneInfo.seconds;return b};g.cloneWithWebsceneLighting=function(a){const b=
this.clone();null!=a.date&&(b.date=a.date);b.directShadowsEnabled=a.directShadowsEnabled;b.displayUTCOffset=a.displayUTCOffset;return b};n._createClass(e,[{key:"defaultDate",get:function(){return new Date(this._get("defaultDate").getTime())},set:function(a){const b=this._get("date")===this._get("defaultDate");a=new Date(a.getTime());this._set("defaultDate",a);b&&this._set("date",a)}},{key:"date",set:function(a){null!=a&&(this.positionTimezoneInfo.autoUpdated=!1,this._set("date",new Date(a.getTime())))}}]);
return e}(q.EventedMixin(t));d.__decorate([f.property({type:Boolean})],c.SceneViewLighting.prototype,"cameraTrackingEnabled",void 0);d.__decorate([f.property({type:Boolean})],c.SceneViewLighting.prototype,"ambientOcclusionEnabled",void 0);d.__decorate([f.property({type:Boolean})],c.SceneViewLighting.prototype,"waterReflectionEnabled",void 0);d.__decorate([f.property({type:Date})],c.SceneViewLighting.prototype,"defaultDate",null);d.__decorate([f.property({type:Date})],c.SceneViewLighting.prototype,
"date",null);c.SceneViewLighting=k=d.__decorate([r.subclass("esri.views.3d.environment.SceneViewLighting")],c.SceneViewLighting);const m={target:null,timezoneOffset:0};d=c.SceneViewLighting;c.calculateTimezoneOffset=l;c.default=d;Object.defineProperty(c,"__esModule",{value:!0})});