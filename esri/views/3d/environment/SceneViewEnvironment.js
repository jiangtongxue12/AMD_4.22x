// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/lang ../../../core/accessorSupport/decorators/property ../../../core/accessorSupport/decorators/cast ../../../core/accessorSupport/decorators/subclass ../../../core/accessorSupport/ensureType ./SceneViewAtmosphere ./SceneViewLighting ./SunnyWeather ./weather ../../../webscene/Environment ../../../webscene/Lighting".split(" "),function(n,d,k,h,p,q,r,l,c,t,u,b,v){var e;b=e=function(m){function g(a){a=m.call(this,
a)||this;a.atmosphere=new l.default;a.weather=new t;return a}n._inheritsLoose(g,m);g.fromWebsceneEnvironment=function(a){a=a.cloneConstructProperties();return new e({...a,lighting:c.SceneViewLighting.fromWebsceneLighting(a.lighting)})};var f=g.prototype;f.castLighting=function(a){return this.convertLighting(a)};f.applyLighting=function(a){this.lighting=this.convertLighting(a)};f.convertLighting=function(a){return a?a instanceof c.SceneViewLighting?a:a instanceof v?this.lighting?this.lighting.cloneWithWebsceneLighting(a):
c.SceneViewLighting.fromWebsceneLighting(a):r.ensureType(c.SceneViewLighting,a):new c.SceneViewLighting};f.clone=function(){return new e({lighting:this.lighting.clone(),atmosphere:this.atmosphere.clone(),weather:this.weather.clone(),atmosphereEnabled:this.atmosphereEnabled,starsEnabled:this.starsEnabled,background:k.clone(this.background)})};f.cloneWithWebsceneEnvironment=function(a){return new e({atmosphere:this.atmosphere.clone(),weather:this.weather.clone(),atmosphereEnabled:this.atmosphereEnabled,
starsEnabled:this.starsEnabled,background:k.clone(this.background),...a.cloneConstructProperties(),lighting:null!=this.lighting?this.lighting.cloneWithWebsceneLighting(a.lighting):c.SceneViewLighting.fromWebsceneLighting(a.lighting)})};return g}(b);d.__decorate([h.property({type:l.default,json:{read:!1},nonNullable:!0})],b.prototype,"atmosphere",void 0);d.__decorate([h.property({types:u.weatherTypes,nonNullable:!0,json:{write:!1}})],b.prototype,"weather",void 0);d.__decorate([h.property()],b.prototype,
"lighting",void 0);d.__decorate([p.cast("lighting")],b.prototype,"castLighting",null);return b=e=d.__decorate([q.subclass("esri.views.3d.environment.SceneViewEnvironment")],b)});