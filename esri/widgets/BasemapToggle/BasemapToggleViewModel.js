// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/compilerUtils ../../core/Evented ../../core/watchUtils ../../core/accessorSupport/decorators/property ../../core/arrayUtils ../../core/has ../../core/accessorSupport/decorators/cast ../../core/accessorSupport/decorators/subclass ../../support/basemapDefinitions ../../support/basemapUtils".split(" "),function(k,c,l,b,n,e,u,v,p,q,r,f){b=function(m){function g(a){a=m.call(this,a)||this;a._basemapCache={};a.nextBasemap=f.ensureType("hybrid",
a._basemapCache);a.view=null;a.toggle=a.toggle.bind(k._assertThisInitialized(a));return a}k._inheritsLoose(g,m);var h=g.prototype;h.initialize=function(){n.init(this,"nextBasemap",a=>{a&&!a.loaded&&a.load().catch(()=>{})})};h.destroy=function(){this.view=null;f.destroyCache(this._basemapCache);this._basemapCache=null};h.castNextBasemap=function(a){return f.ensureType(a,this._basemapCache)};h.toggle=function(){if("disabled"!==this.state){var a=this.activeBasemap,d=this.nextBasemap;this.view.map.basemap=
d;this.nextBasemap=a;this.emit("toggle",{previous:a,current:d})}};g.getThumbnailUrl=function(a){if(!a)return null;var {thumbnailUrl:d}=a;return d?d:(d=f.getWellKnownBasemapId(a))?r.esriBasemapDefinitions[d].thumbnailUrl:(a=a.baseLayers.find(t=>!!l.typeCast(t)().get("portalItem.thumbnailUrl")))?l.typeCast(a)().get("portalItem.thumbnailUrl"):null};k._createClass(g,[{key:"activeBasemap",get:function(){return f.ensureType(this.get("view.map.basemap")||"topo",this._basemapCache)}},{key:"state",get:function(){return this.get("view.ready")?
"ready":"disabled"}}]);return g}(b.EventedAccessor);c.__decorate([e.property({readOnly:!0})],b.prototype,"activeBasemap",null);c.__decorate([e.property()],b.prototype,"nextBasemap",void 0);c.__decorate([p.cast("nextBasemap")],b.prototype,"castNextBasemap",null);c.__decorate([e.property({readOnly:!0})],b.prototype,"state",null);c.__decorate([e.property()],b.prototype,"view",void 0);c.__decorate([e.property()],b.prototype,"toggle",null);return b=c.__decorate([q.subclass("esri.widgets.BasemapToggle.BasemapToggleViewModel")],
b)});