// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define("../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/tslib.es6 ../../../../Graphic ../../../../core/Accessor ../../../../core/compilerUtils ../../../../core/Handles ../../../../core/promiseUtils ../../../../core/watchUtils ../../../../core/accessorSupport/decorators/property ../../../../core/arrayUtils ../../../../core/has ../../../../core/accessorSupport/ensureType ../../../../core/accessorSupport/decorators/subclass ../../../../core/accessorSupport/diffUtils ../../../../geometry/support/webMercatorUtils ../../../../rest/support/Query ./constants ./Graphics3DCore ./Graphics3DElevationAlignment ./Graphics3DFilterVisibility ./Graphics3DFrustumVisibility ./Graphics3DObjectStates ./Graphics3DScaleVisibility ./graphicUtils ../support/attributeUtils ../../../support/WatchUpdatingTracking".split(" "),
function(m,e,r,d,y,z,t,n,f,O,P,Q,A,u,v,B,C,D,E,F,G,H,I,J,w,K){d=function(x){function l(a){a=x.call(this,a)||this;a._handles=new z;a.watchUpdatingTracking=new K.WatchUpdatingTracking;a.suspendResumeExtentMode="computed";a.dataExtent=null;a.suspendResumeExtent=null;return a}m._inheritsLoose(l,x);var g=l.prototype;g.normalizeCtorArgs=function(a){const b=a.frustumVisibilityEnabled?new G:null,c=a.scaleVisibilityEnabled?new I:null,h=(a.filterVisibilityEnabled||a.timeExtentVisibilityEnabled)&&"multipatch"!==
a.layer.geometryType?new F.Graphics3DFilterVisibility:null,k=a.elevationAlignmentEnabled?new E:null,p=new D.Graphics3DCore({owner:a.owner,layer:a.layer,preferredUpdatePolicy:a.preferredUpdatePolicy,elevationFeatureExpressionEnabled:a.elevationFeatureExpressionEnabled,graphicSymbolSupported:!1,hasZ:a.owner.hasZ,hasM:a.owner.hasM}),{updateClippingExtent:q,suspendResumeExtentMode:L,dataExtent:M}=a;return{graphicsCore:p,frustumVisibility:b,scaleVisibility:c,filterVisibility:h,elevationAlignment:k,updateClippingExtent:q,
suspendResumeExtentMode:L,dataExtent:M}};g.initialize=function(){this.scaleVisibility&&this.watchUpdatingTracking.add(this.layer,"scaleRangeId",()=>this.scaleVisibility.layerMinMaxScaleChangeHandler());this.filterVisibility&&(this.watchUpdatingTracking.add(this.owner,"filter",()=>this.filterVisibility.filterChanged()),this.watchUpdatingTracking.add(this.owner,"timeExtent",()=>this.filterVisibility.filterChanged()));this.elevationAlignment&&this.watchUpdatingTracking.add(this.layer,"elevationInfo",
(a,b)=>{u.diff(a,b)&&this.watchUpdatingTracking.addPromise(this.graphicsCore.elevationInfoChange())});this.watchUpdatingTracking.add(this.layer,"labelsVisible",()=>this.graphicsCore.updateVisibilityInfo());this.watchUpdatingTracking.add(this.layer,"labelingInfo",(a,b)=>{u.diff(a,b)&&this.graphicsCore.updateLabelingInfo()})};g.setup=function(){var a=m._asyncToGenerator(function*(){this.frustumVisibility&&this.frustumVisibility.setup(this.owner);const b=this.owner,c=this.owner.view.basemapTerrain,h=
(k,p,q)=>this.graphicsCore.spatialIndex.queryGraphicUIDsInExtent(k,p,q);this.scaleVisibility&&this.scaleVisibility.setup(b,this.layer,h,this.graphicsCore,c);this.filterVisibility&&("filter"in b||"timeExtent"in b)&&this.filterVisibility.setup(b,this.graphicsCore);this.elevationAlignment&&this.elevationAlignment.setup(b,h,this.graphicsCore,b.view.elevationProvider);this._set("objectStates",new H.Graphics3DObjectStates(this.graphicsCore));this._set("labeling",this.owner.view.labeler.addGraphicsOwner(this.graphicsCore,
this.scaleVisibility));this._set("deconfliction",b.view.deconflictor.addGraphicsOwner(this.graphicsCore));yield t.logOnError(this.graphicsCore.setup({elevationAlignment:this.elevationAlignment,scaleVisibility:this.scaleVisibility,filterVisibility:this.filterVisibility,deconflictor:this.deconfliction,labeler:this.labeling,objectStates:this.objectStates}));this.watchUpdatingTracking.add(this.layer,"renderer",k=>this.watchUpdatingTracking.addPromise(this.graphicsCore.rendererChange(k)));this.watchUpdatingTracking.add(b,
"fullOpacity",()=>this.graphicsCore.opacityChange());this.setupSuspendResumeExtent();this.updateClippingExtent&&(this.watchUpdatingTracking.add(b.view,"clippingArea",()=>this._updateClippingExtent()),this._updateClippingExtent());this.graphicsCore.startCreateGraphics();this.graphicsCore.labelsEnabled&&(yield t.logOnError(this.graphicsCore.updateLabelingInfo()))});return function(){return a.apply(this,arguments)}}();g.destroy=function(){this._handles&&(this._handles.destroy(),this._handles=null);var a=
"watchUpdatingTracking frustumVisibility scaleVisibility filterVisibility elevationAlignment objectStates graphicsCore".split(" ");for(const b of a)if(a=this[b])a.destroy(),this._set(b,null);this._set("layer",null);this._set("owner",null)};g.maskOccludee=function(a){const {set:b,handle:c}=this.objectStates.acquireSet(1,null);this.objectStates.setUid(b,a.uid);return c};g.highlight=function(a,b){if(a instanceof B){const {set:c,handle:h}=this.objectStates.acquireSet(0,b);this.owner.queryObjectIds(a).then(k=>
this.objectStates.setObjectIds(c,k));return h}if("number"===typeof a||"string"===typeof a||a instanceof r)return this.highlight([a],b);"toArray"in a&&(a=a.toArray());if(Array.isArray(a)&&0<a.length){if(a[0]instanceof r)if(null!=w.attributeLookup(this.layer.fieldsIndex,a[0].attributes,b))a=a.map(c=>w.attributeLookup(this.layer.fieldsIndex,c.attributes,b));else{a=a.map(k=>k.uid);const {set:c,handle:h}=this.objectStates.acquireSet(0,null);this.objectStates.setUids(c,a);return h}if("number"===typeof a[0]||
"string"===typeof a[0]){const {set:c,handle:h}=this.objectStates.acquireSet(0,b);this.objectStates.setObjectIds(c,a);return h}}return N};g._updateClippingExtent=function(){const a=this.owner.view.clippingArea;this.graphicsCore.setClippingExtent(a,this.owner.view.spatialReference)&&(this.updateClippingExtent(a)||this.graphicsCore.recreateAllGraphics())};g.setupSuspendResumeExtent=function(){(this.frustumVisibility||this.scaleVisibility)&&this._handles.add(n.init(this,"suspendResumeExtentMode",()=>
{this._handles.remove("suspendResumeExtentMode");switch(this.suspendResumeExtentMode){case "computed":this._handles.add([n.init(this.graphicsCore,"computedExtent",a=>this.updateSuspendResumeExtent(a)),this.graphicsCore.watch("extentPadding",()=>this.updateSuspendResumeExtent(this.graphicsCore.computedExtent))],"suspendResumeExtentMode");break;case "data":this._handles.add([n.init(this,"dataExtent",a=>this.updateSuspendResumeExtent(a)),this.graphicsCore.watch("extentPadding",()=>this.updateSuspendResumeExtent(this.dataExtent))],
"suspendResumeExtentMode");break;default:y.neverReached(this.suspendResumeExtentMode)}}))};g.updateSuspendResumeExtent=function(a){a?this.suspendResumeExtentChanged(this.extentToSuspendResumeRect(a,this.suspendResumeExtent)):this.suspendResumeExtentChanged(null)};g.extentToSuspendResumeRect=function(a,b){const c=this.owner.view.spatialReference;if(!a.spatialReference.equals(c)){if(!v.canProject(a,c))return;a=v.project(a,c)}return J.enlargeExtent(a,b,C.SUSPEND_RESUME_EXTENT_OPTIMISM,this.graphicsCore.extentPadding)};
g.suspendResumeExtentChanged=function(a){this.frustumVisibility&&this.frustumVisibility.setExtent(a);this.scaleVisibility&&this.scaleVisibility.setExtent(a)};m._createClass(l,[{key:"suspended",get:function(){var a;return null==(a=this.scaleVisibility)?void 0:a.suspended}},{key:"suspendInfo",get:function(){var a,b;const c={};null!=(a=this.scaleVisibility)&&a.suspended&&(c.outsideScaleRange=!0);null!=(b=this.frustumVisibility)&&b.suspended&&(c.outsideOfView=!0);return c}},{key:"updating",get:function(){var a,
b,c;return!!(null!=(a=this.graphicsCore)&&a.updating||null!=(b=this.frustumVisibility)&&b.updating||null!=(c=this.watchUpdatingTracking)&&c.updating)}}]);return l}(d);e.__decorate([f.property({aliasOf:"graphicsCore.layer"})],d.prototype,"layer",void 0);e.__decorate([f.property({aliasOf:"graphicsCore.owner"})],d.prototype,"owner",void 0);e.__decorate([f.property({constructOnly:!0})],d.prototype,"updateClippingExtent",void 0);e.__decorate([f.property({constructOnly:!0})],d.prototype,"graphicsCore",
void 0);e.__decorate([f.property({constructOnly:!0})],d.prototype,"scaleVisibility",void 0);e.__decorate([f.property({constructOnly:!0})],d.prototype,"filterVisibility",void 0);e.__decorate([f.property({constructOnly:!0})],d.prototype,"elevationAlignment",void 0);e.__decorate([f.property({constructOnly:!0})],d.prototype,"frustumVisibility",void 0);e.__decorate([f.property({readOnly:!0})],d.prototype,"deconfliction",void 0);e.__decorate([f.property({readOnly:!0})],d.prototype,"labeling",void 0);e.__decorate([f.property({readOnly:!0})],
d.prototype,"objectStates",void 0);e.__decorate([f.property({readOnly:!0})],d.prototype,"watchUpdatingTracking",void 0);e.__decorate([f.property()],d.prototype,"suspendResumeExtentMode",void 0);e.__decorate([f.property()],d.prototype,"dataExtent",void 0);e.__decorate([f.property({readOnly:!0})],d.prototype,"suspended",null);e.__decorate([f.property({readOnly:!0})],d.prototype,"suspendInfo",null);e.__decorate([f.property({readOnly:!0,dependsOn:["graphicsCore.updating","frustumVisibility.updating",
"watchUpdatingTracking.updating"]})],d.prototype,"updating",null);d=e.__decorate([A.subclass("esri.views.3d.layers.graphics.Graphics3DFeatureLikeLayerView")],d);const N={remove(){},pause(){},resume(){}};return d});