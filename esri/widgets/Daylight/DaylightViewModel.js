// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/HandleOwner ../../core/maybe ../../core/scheduling ../../core/timeUtils ../../core/watchUtils ../../core/accessorSupport/decorators/property ../../core/arrayUtils ../../core/has ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass ../../views/SceneView ../../views/3d/environment/SceneViewLighting ../../views/3d/support/earthUtils ./support/daylightUtils ./support/SliderWithDropdownViewModel ../support/DatePickerViewModel ../support/timeWidgetUtils".split(" "),
function(p,d,c,u,v,l,m,f,C,D,E,w,x,y,z,k,q,r,A){c=function(t){function n(a){a=t.call(this,a)||this;a.view=null;a.datePickerViewModel=new r;a.timeSliderViewModel=new q.SliderWithDropdownViewModel;a.lightingUpdateInterval=200;a._cachedLightingDateUTC=new Date(0);a._cachedDisplayUTCOffset=0;a._enableShadowsOnFirstInteraction=!0;a._lastLightingUpdate=0;a._nextLightingUpdate=null;a.playSpeedMultiplier=1;return a}p._inheritsLoose(n,t);var h=n.prototype;h.initialize=function(){var a=this;this.handles.add([m.init(this,
"view",()=>{this.view&&this.view.when(()=>this._updateLighting(null))}),m.watch(this,"view.environment.lighting.date",b=>this._scheduleUpdateLighting(b)),m.on(this,"view.environment.lighting","timezone-will-change",b=>this._timezoneWillChange(b),()=>this._timezoneWillChange(null)),m.init(this,"view.stationary",()=>{(this.dayPlaying||this.yearPlaying)&&this._updateSunriseAndSunset()}),this.watch(["timeSliderPosition","timeSliderViewModel.state"],()=>{"ready"===this.timeSliderViewModel.state&&this.timeSliderViewModel.setValue(0,
this.timeSliderPosition)}),this.timeSliderViewModel.watch("currentItem",b=>{this.utcOffset=b.utcOffset}),this.timeSliderViewModel.watch("isDropdownOpen",()=>this.stopPlaying()),this.timeSliderViewModel.watch("values",b=>this.timeSliderPosition=b[0]),this.datePickerViewModel.watch("value",b=>{this.dayPlaying=!1;this.localDate=b}),this.watch("localDate",function(){var b=p._asyncToGenerator(function*(e){a.datePickerViewModel.value.valueOf()!==e.getTime()&&a.datePickerViewModel.set("value",e)});return function(e){return b.apply(this,
arguments)}}())])};h.destroy=function(){this._nextLightingUpdate&&(clearTimeout(this._nextLightingUpdate),this._nextLightingUpdate=null);this.view=null};h._timezoneFromCamera=function(a){var b;const e=null==(b=a.camera)?void 0:b.position;if(!e||!a.environment.lighting.cameraTrackingEnabled)return 0;a=u.unwrap(z.positionToTimezoneInfo([e.longitude,e.latitude]));return Math.round(a.hours+a.minutes/60+a.seconds/3600)};h.stopPlaying=function(){this.playingState="none"};h.toggleDayPlaying=function(){this.dayPlaying=
!this.dayPlaying};h.toggleYearPlaying=function(){this.yearPlaying=!this.yearPlaying};h.toggleDirectShadows=function(){this.stopPlaying();this.directShadowsEnabled=!this.directShadowsEnabled};h._updateLighting=function(a){var b,e;this._lastLightingUpdate=Date.now();var g=null==(b=this.view)?void 0:null==(e=b.environment)?void 0:e.lighting;g&&(a=a||g.date,g=g.displayUTCOffset,g=null!==g?g:this._timezoneFromCamera(this.view),this._cachedLightingDateUTC.getTime()!==a.getTime()&&(this._cachedLightingDateUTC=
new Date(a.getTime())),this._cachedDisplayUTCOffset!==g&&(this._cachedDisplayUTCOffset=g))};h._timezoneWillChange=function(a){var b,e;const g=null==(b=this.view)?void 0:null==(e=b.environment)?void 0:e.lighting;if(g&&g.cameraTrackingEnabled){if(a)a=a.timezoneOffset;else{if(null!=g.displayUTCOffset)return;a=y.calculateTimezoneOffset(g.positionTimezoneInfo)}g.displayUTCOffset=a;this._scheduleUpdateLighting(null)}};h._scheduleUpdateLighting=function(a){if(!this._nextLightingUpdate){var b=Date.now()-
this._lastLightingUpdate;b=this.lightingUpdateInterval-b;0>=b?v.schedule(()=>this._updateLighting(a)):this._nextLightingUpdate=setTimeout(()=>{this._updateLighting(null);this._nextLightingUpdate=null},b)}};h._play=function(){var a;const b=this.view;if(null!=(a=this.view)&&a.environment&&(this.dayPlaying||this.yearPlaying)){a=(new Date).getTime()-this._lastTime;if(this.dayPlaying){if(this._lastTime=(new Date).getTime(),a*=k.calculatePlaySpeed(this._sunrise,this._sunset,b.environment.lighting.date)*
this.playSpeedMultiplier/100,0<a){var e=new Date(b.environment.lighting.date.getTime()+a);const g=((e.getUTCHours()+b.environment.lighting.displayUTCOffset)%24+24)%24,B=((b.environment.lighting.date.getUTCHours()+b.environment.lighting.displayUTCOffset)%24+24)%24;g<B&&(e=new Date(b.environment.lighting.date.getTime()+a-864E5));b.environment.lighting.date=e}}else 1E3<a&&(this._lastTime=(new Date).getTime(),a=(b.environment.lighting.date.getUTCMonth()+1)%12,e=new Date(b.environment.lighting.date.getTime()),
e.setUTCMonth(a),b.environment.lighting.date=e);requestAnimationFrame(()=>this._play())}};h._updateSunriseAndSunset=function(){const a=A.getSunriseAndSunsetTimes(this.view.environment.lighting.date,this.view.camera.position.latitude,this.view.camera.position.longitude,this.view.environment.lighting.displayUTCOffset);this._sunrise=new Date(a.sunrise);this._sunset=new Date(a.sunset)};p._createClass(n,[{key:"isSupported",get:function(){return!this.view||"3d"===this.view.type}},{key:"utcOffset",get:function(){return this._cachedDisplayUTCOffset},
set:function(a){a!==this.utcOffset&&(this.view.environment.lighting.displayUTCOffset=a,this._updateLighting(null))}},{key:"localDate",get:function(){return l.truncateLocalTime(this._lightingDateDisplay)},set:function(a){a.getTime()!==this.localDate.getTime()&&(this._lightingDateDisplay=l.resetUTCDate(this._lightingDateDisplay,a))}},{key:"timeSliderPosition",get:function(){return k.dateTimeToSliderPos(this._lightingDateDisplay)},set:function(a){Math.abs(a-this.timeSliderPosition)>1/60&&(this._lightingDateDisplay=
k.sliderPosToDateTime(this._lightingDateDisplay,a),this.stopPlaying(),this._enableShadowsOnFirstInteraction&&(this.directShadowsEnabled=!0,this._enableShadowsOnFirstInteraction=!1))}},{key:"_lightingDateDisplay",get:function(){return l.offsetDate(this._cachedLightingDateUTC,this._cachedDisplayUTCOffset,"hours")},set:function(a){a=l.offsetDate(a,-this._cachedDisplayUTCOffset,"hours");a.getTime()!==this.view.environment.lighting.date.getTime()&&(this.view.environment.lighting.date=a,this._updateLighting(null))}},
{key:"playingState",set:function(a){this.playingState!==a&&(this._set("playingState",a),"none"!==a&&(this._updateSunriseAndSunset(),this._lastTime=(new Date).getTime(),this._play(),this._enableShadowsOnFirstInteraction&&(this.directShadowsEnabled=!0,this._enableShadowsOnFirstInteraction=!1)))}},{key:"dayPlaying",get:function(){return"day"===this.playingState},set:function(a){a?this.playingState="day":this.dayPlaying&&(this.playingState="none")}},{key:"yearPlaying",get:function(){return"year"===this.playingState},
set:function(a){a?this.playingState="year":this.yearPlaying&&(this.playingState="none")}},{key:"currentSeason",get:function(){return k.getSeasonFromDate(this.localDate,this._currentHemisphere)},set:function(a){this.stopPlaying();a=k.getNorthernHemisphereSeason(a,this._currentHemisphere);this.localDate=k.getSeasonDate(this.localDate,a,k.Hemisphere.NORTHERN)}},{key:"_currentHemisphere",get:function(){var a,b;const e=null==(a=this.view)?void 0:null==(b=a.camera)?void 0:b.position;return e?0<=e.latitude?
k.Hemisphere.NORTHERN:k.Hemisphere.SOUTHERN:k.Hemisphere.NORTHERN}}]);return n}(c.HandleOwner);d.__decorate([f.property({type:x})],c.prototype,"view",void 0);d.__decorate([f.property({type:r})],c.prototype,"datePickerViewModel",void 0);d.__decorate([f.property({type:q.SliderWithDropdownViewModel})],c.prototype,"timeSliderViewModel",void 0);d.__decorate([f.property()],c.prototype,"isSupported",null);d.__decorate([f.property()],c.prototype,"lightingUpdateInterval",void 0);d.__decorate([f.property()],
c.prototype,"_cachedLightingDateUTC",void 0);d.__decorate([f.property()],c.prototype,"_cachedDisplayUTCOffset",void 0);d.__decorate([f.property()],c.prototype,"_enableShadowsOnFirstInteraction",void 0);d.__decorate([f.property()],c.prototype,"utcOffset",null);d.__decorate([f.property()],c.prototype,"localDate",null);d.__decorate([f.property()],c.prototype,"timeSliderPosition",null);d.__decorate([f.property()],c.prototype,"_lightingDateDisplay",null);d.__decorate([f.property({aliasOf:"view.environment.lighting.directShadowsEnabled"})],
c.prototype,"directShadowsEnabled",void 0);d.__decorate([f.property({type:["none","day","year"],value:"none"})],c.prototype,"playingState",null);d.__decorate([f.property()],c.prototype,"dayPlaying",null);d.__decorate([f.property()],c.prototype,"yearPlaying",null);d.__decorate([f.property()],c.prototype,"playSpeedMultiplier",void 0);d.__decorate([f.property()],c.prototype,"currentSeason",null);d.__decorate([f.property()],c.prototype,"_lastTime",void 0);d.__decorate([f.property()],c.prototype,"_sunrise",
void 0);d.__decorate([f.property()],c.prototype,"_sunset",void 0);d.__decorate([f.property({readOnly:!0})],c.prototype,"_currentHemisphere",null);return c=d.__decorate([w.subclass("esri.widgets.Daylight.DaylightViewModel")],c)});