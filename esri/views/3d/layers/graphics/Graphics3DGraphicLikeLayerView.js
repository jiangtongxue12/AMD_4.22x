// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define("../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/tslib.es6 ../../../../Graphic ../../../../core/Accessor ../../../../core/Collection ../../../../core/Handles ../../../../core/maybe ../../../../core/promiseUtils ../../../../core/watchUtils ../../../../core/accessorSupport/decorators/property ../../../../core/arrayUtils ../../../../core/has ../../../../core/accessorSupport/ensureType ../../../../core/accessorSupport/decorators/subclass ../../../../core/accessorSupport/diffUtils ../../../../layers/Layer ../../../../layers/graphics/hydratedFeatures ../../../../rest/support/Query ./constants ./Graphics3DCore ./Graphics3DElevationAlignment ./Graphics3DObjectStates ./Graphics3DScaleVisibility ./graphicUtils ../../../support/WatchUpdatingTracking".split(" "),
function(l,f,n,d,r,t,g,u,v,h,J,K,L,w,x,y,z,A,B,C,D,E,F,G,H){d=function(p){function k(a){a=p.call(this,a)||this;a.graphicsCore=null;a.elevationAlignment=new D;a.watchUpdatingTracking=new H.WatchUpdatingTracking;a.handles=new t;a.suspendResumeExtent=null;return a}l._inheritsLoose(k,p);var e=k.prototype;e.normalizeCtorArgs=function(a){let b=null;a.scaleVisibilityEnabled&&(a={...a},delete a.scaleVisibilityEnabled,b=new F);const c=new C.Graphics3DCore({owner:a.owner,layer:a.layer,preferredUpdatePolicy:1,
graphicSymbolSupported:!0});return{...a,graphicsCore:c,scaleVisibility:b}};e.initialize=function(){const a=this.scaleVisibility;g.isSome(a)&&"minScale"in this.layer&&this.watchUpdatingTracking.add(this.layer,"scaleRangeId",()=>a.layerMinMaxScaleChangeHandler());"elevationInfo"in this.layer&&this.watchUpdatingTracking.add(this.layer,"elevationInfo",(b,c)=>{x.diff(b,c)&&this.watchUpdatingTracking.addPromise(this.graphicsCore.elevationInfoChange())})};e.setup=function(){var a=l._asyncToGenerator(function*(){const b=
(c,m,I)=>this.graphicsCore.spatialIndex.queryGraphicUIDsInExtent(c,m,I);this.elevationAlignment.setup(this.owner,b,this.graphicsCore,this.view.elevationProvider);g.isSome(this.scaleVisibility)&&"minScale"in this.layer&&this.scaleVisibility.setup(this.owner,this.layer,b,this.graphicsCore,this.owner.view.basemapTerrain);this._set("objectStates",new E.Graphics3DObjectStates(this.graphicsCore));try{yield this.graphicsCore.setup({elevationAlignment:this.elevationAlignment,scaleVisibility:this.scaleVisibility,
objectStates:this.objectStates})}catch(c){if(u.isAbortError(c))return;throw c;}this.destroyed||(this.handles.add(this.view.watch("clippingArea",()=>this.updateClippingExtent(),!0)),this.updateClippingExtent(),this.setupSuspendResumeExtent(),this.graphicsCore.startCreateGraphics())});return function(){return a.apply(this,arguments)}}();e.destroy=function(){this.handles=g.destroyMaybe(this.handles);this.watchUpdatingTracking.destroy();this._set("elevationAlignment",g.destroyMaybe(this.elevationAlignment));
this._set("scaleVisibility",g.destroyMaybe(this.scaleVisibility));this._set("objectStates",g.destroyMaybe(this.objectStates));this._set("graphicsCore",g.destroyMaybe(this.graphicsCore))};e.getGraphicFromGraphicUid=function(a){if(this.owner.loadedGraphics){const b=this.owner.loadedGraphics.find(c=>c.uid===a);if(b)return z.hydrateGraphic(b,this.layer instanceof y?this.layer:null)}};e.whenGraphicBounds=function(a,b){return this.graphicsCore?this.graphicsCore.whenGraphicBounds(a,b):Promise.reject()};
e.computeAttachmentOrigin=function(a,b){return this.graphicsCore?this.graphicsCore.computeAttachmentOrigin(a,b):null};e.getSymbolLayerSize=function(a,b){return this.graphicsCore?this.graphicsCore.getSymbolLayerSize(a,b):null};e.maskOccludee=function(a){const {set:b,handle:c}=this.objectStates.acquireSet(1,null);this.objectStates.setUid(b,a.uid);return c};e.highlight=function(a){if(a instanceof A)return q;if("number"===typeof a||a instanceof n)return this.highlight([a]);a instanceof r&&(a=a.toArray());
if(Array.isArray(a)&&0<a.length){if(a[0]instanceof n){a=a.map(m=>m.uid);const {set:b,handle:c}=this.objectStates.acquireSet(0,null);this.objectStates.setUids(b,a);return c}if("number"===typeof a[0]){const {set:b,handle:c}=this.objectStates.acquireSet(0,null);this.objectStates.setObjectIds(b,a);return c}}return q};e.updateClippingExtent=function(){this.graphicsCore.setClippingExtent(this.view.clippingArea,this.view.spatialReference)&&this.graphicsCore.recreateAllGraphics()};e.updateSuspendResumeExtent=
function(){g.isNone(this.scaleVisibility)||(this.suspendResumeExtent=G.enlargeExtent(this.graphicsCore.computedExtent,this.suspendResumeExtent,B.SUSPEND_RESUME_EXTENT_OPTIMISM,this.graphicsCore.extentPadding),this.scaleVisibility.setExtent(this.suspendResumeExtent))};e.setupSuspendResumeExtent=function(){g.isNone(this.scaleVisibility)||(v.init(this.graphicsCore,"computedExtent",a=>this.updateSuspendResumeExtent(),!0),this.graphicsCore.watch("extentPadding",a=>this.updateSuspendResumeExtent()))};l._createClass(k,
[{key:"suspended",get:function(){return!(!g.isSome(this.scaleVisibility)||!this.scaleVisibility.suspended)}},{key:"updating",get:function(){var a,b;return!!(null!=(a=this.graphicsCore)&&a.updating||g.isSome(this.scaleVisibility)&&this.scaleVisibility.updating||null!=(b=this.watchUpdatingTracking)&&b.updating)}}]);return k}(d);f.__decorate([h.property({constructOnly:!0})],d.prototype,"owner",void 0);f.__decorate([h.property({constructOnly:!0})],d.prototype,"layer",void 0);f.__decorate([h.property({readOnly:!0,
aliasOf:"owner.view"})],d.prototype,"view",void 0);f.__decorate([h.property({constructOnly:!0})],d.prototype,"graphicsCore",void 0);f.__decorate([h.property({constructOnly:!0})],d.prototype,"scaleVisibility",void 0);f.__decorate([h.property({readOnly:!0})],d.prototype,"elevationAlignment",void 0);f.__decorate([h.property({readOnly:!0})],d.prototype,"objectStates",void 0);f.__decorate([h.property({readOnly:!0})],d.prototype,"watchUpdatingTracking",void 0);f.__decorate([h.property({readOnly:!0})],d.prototype,
"suspended",null);f.__decorate([h.property({readOnly:!0})],d.prototype,"updating",null);d=f.__decorate([w.subclass("esri.views.3d.layers.graphics.Graphics3DGraphicLikeLayerView")],d);const q={remove(){},pause(){},resume(){}};return d});