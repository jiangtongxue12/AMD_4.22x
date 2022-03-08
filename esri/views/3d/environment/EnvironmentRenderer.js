// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/Accessor ../../../core/has ../../../core/Handles ../../../core/lang ../../../core/mathUtils ../../../core/maybe ../../../core/reactiveUtils ../../../core/watchUtils ../../../core/accessorSupport/decorators/property ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/subclass ../../../chunks/vec3 ../../../geometry/projectionEllipsoid ../../../geometry/support/spatialReferenceUtils ./ChapmanAtmosphere ./CloudsComposition ./CloudsGenerator ./Fog ./PanoramicAtmosphere ./SimpleAtmosphere ./Stars".split(" "),
function(e,t,g,x,J,y,r,p,b,k,z,h,K,A,B,C,u,v,D,m,E,F,G,H){const I=[12,13];e.EnvironmentRenderer=function(w){function q(a){a=w.call(this,a)||this;a._handles=new y;a._context=null;a._pendingAtmosphere=null;a._atmosphere=null;a._stars=null;a._clouds=null;a._cloudComposition=null;a._fog=null;return a}t._inheritsLoose(q,w);var f=q.prototype;f.initialize=function(){this.view._stage.addRenderPlugin(I,this)};f.destroy=function(){this._pendingAtmosphere=b.destroyMaybe(this._pendingAtmosphere);this.uninitializeRenderContext();
this._handles=b.destroyMaybe(this._handles);this.view&&null!=this.view._stage&&(this.view._stage.removeRenderPlugin(this),this._set("view",null))};f.initializeRenderContext=function(a=null){this._context=a;this._handles.add([z.when(this.view,"basemapTerrain",()=>this._updateBasemapTerrain(),!0),k.react(()=>({viewingMode:this.view.viewingMode,atmosphereEnabled:this.view.environment.atmosphereEnabled,atmosphereQuality:this.view.environment.atmosphere.quality}),()=>this._updateAtmosphere(),k.syncAndInitial),
k.react(()=>this._starsCreationParameters,c=>this._createOrDestroyStars(c),{sync:!0,initial:!0,equals:r.equalsShallow}),k.react(()=>this._cloudsCreationParameters,c=>this._createOrDestroyClouds(c),{sync:!0,initial:!0,equals:r.equalsShallow}),k.react(()=>this._fogCreationParameters,c=>this._createOrDestroyFog(c),{sync:!0,initial:!0,equals:r.equalsShallow}),k.react(()=>this._weatherUpdateParameters,c=>{this._updateWeather(c);this._updateFog(c)},k.syncAndInitial)])};f.uninitializeRenderContext=function(){this._stars=
b.destroyMaybe(this._stars);this._atmosphere=b.destroyMaybe(this._atmosphere);this._clouds=b.destroyMaybe(this._clouds);this._cloudComposition=b.destroyMaybe(this._cloudComposition);this._fog=b.destroyMaybe(this._fog)};f.render=function(a){if(0!==a.pass)return!1;let c=!1;switch(a.slot){case 12:b.isSome(this._stars)&&this._stars.render(a)&&(c=!0);b.isSome(this._atmosphere)&&this._atmosphere.canRender&&(this._atmosphere.render(a)&&(c=!0),b.isSome(this._clouds)&&b.isSome(this._clouds.cubeMap)&&!this._clouds.running&&
b.isSome(this._cloudComposition)&&("sunny"!==this.view.environment.weather.type||0!==this.view.environment.weather.cloudCover)&&(this._cloudComposition.render(a,this._clouds.cubeMap,b.isSome(this.view.animation),this._clouds.coverage,this._clouds.absorption)&&(c=!0),this._cloudComposition.isFading()&&this._setNeedsRender()));break;case 13:if(b.isSome(this._atmosphere)&&this._atmosphere.canRender){const d=this.weatherEnabled?this.view.environment.weather.type:"disabled";this._atmosphere.renderHaze(a,
"rainy"===d)&&(c=!0);b.isSome(this._fog)&&("foggy"===d||"realistic"!==this._selectAtmosphereType())&&this._fog.render(a,"foggy"===d,"rainy"===d)&&(c=!0)}break;default:return!1}return c};f._createOrDestroyClouds=function(a){this._clouds=b.destroyMaybe(this._clouds);this._cloudComposition=b.destroyMaybe(this._cloudComposition);b.applySome(a,({view:c,viewingMode:d,rctx:l,radius:n})=>{this._clouds=new m.CloudsGenerator({rctx:l,view:c,requestRender:()=>this._setNeedsRender()});this._cloudComposition=new D.CloudsComposition(l,
d,n,B.length(c.state.camera.eye)-n)});this._setNeedsRender()};f._updateWeather=function(a){if(!b.isNone(a)&&!b.isNone(this._clouds)){var c=m.cloudPresets[a.type].median;for(const d in m.cloudPresets[a.type])if("raymarchingStepType"===d)this._clouds[d]=m.cloudPresets[a.type][d];else if("median"!==d){const l=m.cloudPresets[a.type][d],n=p.lerp(l[0],l[1],c);this._clouds[d]=.5>a.presetAdjustment?p.lerp(l[0],n,2*a.presetAdjustment):p.lerp(n,l[1],2*(a.presetAdjustment-.5))}}};f._setNeedsRender=function(){b.isSome(this._context)&&
this._context.requestRender()};f._createOrDestroyStars=function({view:a,starsEnabled:c}){c&&b.isNone(this._stars)?(this._stars=new H.Stars({view:a,requestRender:()=>this._setNeedsRender()}),this._setNeedsRender()):!c&&b.isSome(this._stars)&&(this._stars.destroy(),this._stars=null,this._setNeedsRender())};f._updateFog=function(a){b.isNone(this._fog)||b.isNone(a)||(this._fog.strength="foggy"===a.type?p.lerp(3E-5,.005,a.presetAdjustment**3):4E-6)};f._createOrDestroyFog=function(a){this.weatherEnabled&&
b.isNone(this._fog)?(b.applySome(a,({view:c,context:d})=>{this._fog=new E.Fog(d,c)}),this._updateFog(this._weatherUpdateParameters),this._setNeedsRender()):b.isSome(this._fog)&&(this._fog.destroy(),this._fog=null,this._setNeedsRender())};f._updateAtmosphere=function(){var a=this._selectAtmosphereType();if(this.atmosphereType!==a)if(b.isSome(this._pendingAtmosphere)&&(this._pendingAtmosphere!==this._atmosphere&&this._pendingAtmosphere.destroy(),this._pendingAtmosphere=null),a=this._getAtmosphereClass()){var c=
new a(this.view);b.isSome(this._context)&&c.initializeRenderContext(this._context);b.isNone(this._atmosphere)&&(this._atmosphere=c,this._setNeedsRender());this._pendingAtmosphere=c;c.when().then(()=>{b.isSome(this._atmosphere)&&this._pendingAtmosphere&&this._pendingAtmosphere!==this._atmosphere&&(this._atmosphere.destroy(),this._atmosphere=this._pendingAtmosphere);this._pendingAtmosphere=null;this._setNeedsRender();this._updateBasemapTerrain()}).catch(()=>{this._pendingAtmosphere===c&&(this._pendingAtmosphere=
null)})}else b.isSome(this._atmosphere)&&(this._atmosphere.destroy(),this._atmosphere=null,this._setNeedsRender()),this._updateBasemapTerrain()};f._getAtmosphereClass=function(){switch(this._selectAtmosphereType()){case "none":return null;case "realistic":return v.ChapmanAtmosphere;case "panoramic":return F.PanoramicAtmosphere;case "simple":return G}};f._selectAtmosphereType=function(){const a=this.view.get("environment.atmosphereEnabled"),c=this.view.get("environment.atmosphere.quality"),d=this.view.viewingMode;
return!a||null==c||u.isMoon(this.view.spatialReference)?"none":"local"===d?"panoramic":"high"===c&&b.isSome(this._context)&&v.ChapmanAtmosphere.isSupported(this._context)&&u.isEarth(this.view.spatialReference)?"realistic":"simple"};f._updateBasemapTerrain=function(){this.view.basemapTerrain&&(this.view.basemapTerrain.velvetOverground=b.isSome(this._atmosphere)&&"simple"===this.atmosphereType)};t._createClass(q,[{key:"atmosphereType",get:function(){return b.isSome(this._pendingAtmosphere)?this._pendingAtmosphere.type:
b.isSome(this._atmosphere)?this._atmosphere.type:"none"}},{key:"canRender",get:function(){var a;return!(null==(a=this.view.basemapTerrain)||!a.renderer.canRender)||"global"!==this.view.viewingMode}},{key:"needsLinearDepth",get:function(){return"realistic"===this._selectAtmosphereType()}},{key:"updating",get:function(){return b.isSome(this._pendingAtmosphere)||b.isSome(this._stars)&&this._stars.updating||b.isSome(this._clouds)&&this._clouds.running}},{key:"weatherEnabled",get:function(){var a;return!(null==
(a=this.view.environmentManager)||!a.weatherEnabled)}},{key:"_cloudsCreationParameters",get:function(){return this.weatherEnabled?{view:this.view,viewingMode:this.view.state.viewingMode,rctx:b.isSome(this._context)?this._context.renderContext.rctx:null,radius:C.getReferenceEllipsoid(this.view.spatialReference).radius}:null}},{key:"_weatherUpdateParameters",get:function(){const a=this.weatherEnabled?this.view.environment.weather:null;return b.isNone(a)?null:{type:a.type,presetAdjustment:"foggy"===
a.type?a.fogStrength:a.cloudCover}}},{key:"_starsCreationParameters",get:function(){var a,c,d;return{view:this.view,starsEnabled:null!=(a=null==(c=this.view)?void 0:null==(d=c.environment)?void 0:d.starsEnabled)?a:!1}}},{key:"_fogCreationParameters",get:function(){return!this.weatherEnabled||b.isNone(this._context)?null:{view:this.view,context:this._context}}},{key:"test",get:function(){return{atmosphere:this._atmosphere,clouds:this._clouds,selectAtmosphereType:()=>this._selectAtmosphereType()}}}]);
return q}(x);g.__decorate([h.property({constructOnly:!0})],e.EnvironmentRenderer.prototype,"view",void 0);g.__decorate([h.property({type:Boolean,readOnly:!0})],e.EnvironmentRenderer.prototype,"updating",null);g.__decorate([h.property()],e.EnvironmentRenderer.prototype,"_pendingAtmosphere",void 0);g.__decorate([h.property()],e.EnvironmentRenderer.prototype,"_stars",void 0);g.__decorate([h.property()],e.EnvironmentRenderer.prototype,"_clouds",void 0);g.__decorate([h.property()],e.EnvironmentRenderer.prototype,
"_cloudComposition",void 0);g.__decorate([h.property()],e.EnvironmentRenderer.prototype,"_fog",void 0);g.__decorate([h.property()],e.EnvironmentRenderer.prototype,"weatherEnabled",null);g.__decorate([h.property()],e.EnvironmentRenderer.prototype,"_cloudsCreationParameters",null);g.__decorate([h.property()],e.EnvironmentRenderer.prototype,"_weatherUpdateParameters",null);g.__decorate([h.property()],e.EnvironmentRenderer.prototype,"_starsCreationParameters",null);g.__decorate([h.property()],e.EnvironmentRenderer.prototype,
"_fogCreationParameters",null);e.EnvironmentRenderer=g.__decorate([A.subclass("esri.views.3d.environment.EnvironmentRenderer")],e.EnvironmentRenderer);Object.defineProperty(e,"__esModule",{value:!0})});