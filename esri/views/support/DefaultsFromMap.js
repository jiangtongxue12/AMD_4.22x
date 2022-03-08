// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define("require ../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/Accessor ../../core/Handles ../../core/Logger ../../core/maybe ../../core/promiseUtils ../../core/accessorSupport/decorators/property ../../core/arrayUtils ../../core/has ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass ../../geometry/projection ../../geometry/support/heightModelInfoUtils ../ViewingMode".split(" "),function(B,t,h,g,C,D,f,u,k,G,H,I,E,v,x,y){const z=D.getLogger("esri.views.support.DefaultsFromMap");
z.level="info";g=function(A){function r(a){a=A.call(this,a)||this;a._handles=new C;a.required={tileInfo:!1,heightModelInfo:!1,extent:!1};a.defaultSpatialReference=null;a.userSpatialReference=null;a.priorityCollection=null;a.logDebugInformation=!1;a.suspended=!1;a._projectExtentTask={task:null,input:null,output:null,spatialReference:null};return a}t._inheritsLoose(r,A);var q=r.prototype;q.destroy=function(){this._handles=f.destroyMaybe(this._handles);this._projectExtentTask.task&&(this._debug("Aborting project extent task"),
this._projectExtentTask.task=f.abortMaybe(this._projectExtentTask.task));this._set("map",null)};q._processSpatialReferenceCandidates=function(a,b){var d;const e=this._getSupportedSpatialReferences(a);if(0!==e.length)if(this._debug("Spatial reference candidates from",null!=(d=a.title)?d:a.id,":",e.map(c=>`${c.spatialReference.wkid}:${f.isSome(c.viewingMode)?y.stringFromViewingMode(c.viewingMode):"global/local"}`).join(", ")),b.candidates){a=[];d=(c,l)=>f.isNone(c.viewingMode)?l.viewingMode:f.isNone(l.viewingMode)?
c.viewingMode:c.viewingMode===l.viewingMode?c.viewingMode:!1;for(const c of b.candidates)for(const l of e){if(!c.spatialReference.equals(l.spatialReference))continue;const n=d(c,l);if(!1!==n){a.push({spatialReference:c.spatialReference,viewingMode:n});break}}0<a.length&&(b.candidates=a)}else b.candidates=e};q._pickSpatialReferenceCandidate=function(a){const b=this.defaultSpatialReference;return!a||1>a.length?f.isSome(b)?{spatialReference:b,viewingMode:null}:null:f.isSome(b)&&1<a.length&&a.some(({spatialReference:d})=>
d.equals(b))?{spatialReference:b,viewingMode:null}:a[0]};q._getSupportedSpatialReferences=function(a){var b="supportedSpatialReferences"in a&&a.supportedSpatialReferences||(a.spatialReference?[a.spatialReference]:[]);if(0===b.length)return[];const d=[];for(const e of b)if(b=this.getSpatialReferenceSupport({spatialReference:e,layer:a}),f.isSome(b)){b=f.isSome(b.constraints)?b.constraints:[{spatialReference:e}];for(const {spatialReference:c,viewingMode:l}of b)(f.isNone(this.userSpatialReference)||c.equals(this.userSpatialReference))&&
d.push({spatialReference:c,viewingMode:l})}return d};q._pickExtentCandidate=function(a){const b=this.spatialReference,d=a.find(({extent:e})=>v.canProjectWithoutEngine(e.spatialReference,b)||v.isLoaded());return f.isSome(d)?{candidate:d,requiresGeometryService:!1}:{candidate:a[0],requiresGeometryService:!0}};q._collectLayers=function(a){var b;if("loaded"!==this._loadMaybe(null==(b=this.map)?void 0:b.call(this)))return{layers:[],updating:!0};b={layers:[],preloading:-1,updating:!1};for(const d of a)if(this._collectCollection(d,
b),10===b.preloading)break;return{layers:b.layers,updating:b.updating}};q._collectCollection=function(a,b){if(a.layers){switch(this._loadMaybe(a.parent)){case "loading":b.updating=!0;++b.preloading;return;case "failed":return}for(const c of a.layers){switch(this._loadMaybe(c)){case "failed":continue;case "loading":b.updating=!0;++b.preloading;break;case "loaded":if(!b.updating){var d,e;this._debug("Considering layer",null!=(d=null!=(e=c.title)?e:c.id)?d:c.declaredClass);b.layers.push(c)}"layers"in
c&&this._collectCollection({layers:c.layers},b)}if(10===b.preloading)break}}};q._loadMaybe=function(a){if(!(a&&"loadStatus"in a))return"loaded";if("not-loaded"===a.loadStatus){var b,d;this._debug("Triggering load",null!=(b=null!=(d=a.title)?d:a.id)?b:a.declaredClass);a.load();return"loading"}return a.loadStatus};q._debug=function(...a){this.logDebugInformation&&z.info(...a)};t._createClass(r,[{key:"ready",get:function(){return!this._spatialReferenceTask.updating&&!this._tileInfoTask.updating&&!this._extentTask.updating}},
{key:"heightModelInfoReady",get:function(){return!this._heightModelInfoTask.updating}},{key:"spatialReference",get:function(){return f.isSome(this.userSpatialReference)?this.userSpatialReference:f.unwrap(this._spatialReferenceTask.spatialReference)}},{key:"extent",get:function(){return f.unwrap(this._extentTask.extent)}},{key:"heightModelInfo",get:function(){return f.unwrap(this._heightModelInfoTask.heightModelInfo)}},{key:"vcsWkid",get:function(){return f.unwrap(this._heightModelInfoTask.vcsWkid)}},
{key:"latestVcsWkid",get:function(){return f.unwrap(this._heightModelInfoTask.latestVcsWkid)}},{key:"viewingMode",get:function(){return f.isNone(this.userSpatialReference)||this.userSpatialReference.equals(f.unwrap(this._spatialReferenceTask.spatialReference))?f.unwrap(this._spatialReferenceTask.viewingMode):null}},{key:"tileInfo",get:function(){return f.unwrap(this._tileInfoTask.tileInfo)}},{key:"mapCollections",get:function(){var a,b,d,e;const c=null==(a=this.map)?void 0:a.call(this);a=[];f.isSome(this.priorityCollection)&&
a.push(this.priorityCollection);a.push({parent:null==c?void 0:c.basemap,layers:null==c?void 0:null==(b=c.basemap)?void 0:b.baseLayers},{layers:null==c?void 0:c.layers},{parent:null==c?void 0:c.ground,layers:null==c?void 0:null==(d=c.ground)?void 0:d.layers},{parent:null==c?void 0:c.basemap,layers:null==c?void 0:null==(e=c.basemap)?void 0:e.referenceLayers});return a}},{key:"_allLayers",get:function(){var a,b;const d=this._collectLayers(this.mapCollections);this._debug("Collected",null!=(a=null==(b=
d.layers)?void 0:b.length)?a:0,"layers, updating",d.updating);return d}},{key:"_spatialReferenceTask",get:function(){var a;if(this.suspended){var b;return null!=(b=this._get("_spatialReferenceTask"))?b:{updating:!1}}const {layers:d,updating:e}=this._allLayers;b={candidates:null};for(const c of d)if(this._processSpatialReferenceCandidates(c,b),b.candidates&&1===b.candidates.length)break;if(1!==(null==(a=b.candidates)?void 0:a.length)&&e)return{updating:!0};a=this._pickSpatialReferenceCandidate(b.candidates);
this._debug("Finished spatial reference",f.isSome(a)?`${a.spatialReference.wkid}:${f.isSome(a.viewingMode)?y.stringFromViewingMode(a.viewingMode):"global/local"}`:"none available");return{spatialReference:f.isSome(a)?a.spatialReference:null,viewingMode:f.isSome(a)?a.viewingMode:null,updating:!1}}},{key:"_tileInfoTask",get:function(){var a,b,d,e,c,l,n;if(!this.required.tileInfo){var p;return null!=(p=this._get("_tileInfoTask"))?p:{updating:!1}}if(!this.spatialReference)return{updating:this._spatialReferenceTask.updating};
const {layers:m,updating:w}=this._collectLayers([{parent:null==(a=this.map)?void 0:null==(b=a.call(this))?void 0:b.basemap,layers:null==(d=this.map)?void 0:null==(e=d.call(this))?void 0:null==(c=e.basemap)?void 0:c.baseLayers},{layers:null==(l=this.map)?void 0:null==(n=l.call(this))?void 0:n.layers}]);return m&&0<m.length&&"tileInfo"in m[0]?(a=m[0].tileInfo,{tileInfo:a&&a.spatialReference.equals(this.spatialReference)?a:null,updating:!1}):{updating:w}}},{key:"_heightModelInfoTask",get:function(){var a;
if(!this.required.heightModelInfo||this.suspended&&null!=(a=this._get("_heightModelInfoTask"))&&a.heightModelInfo){var b;return null!=(b=this._get("_heightModelInfoTask"))?b:{updating:!1}}const {layers:d,updating:e}=this._allLayers;for(const m of d){var c,l;this._debug("Considering",null!=(c=null!=(l=m.title)?l:m.id)?c:m.declaredClass,"for height model info");if(x.mayHaveHeightModelInfo(m)&&(a=x.deriveHeightModelInfoFromLayer(m))){var n,p;this._debug("Derived height model info",a);return{heightModelInfo:a,
vcsWkid:null==(n=m.spatialReference)?void 0:n.vcsWkid,latestVcsWkid:null==(p=m.spatialReference)?void 0:p.latestVcsWkid,updating:!1}}this._debug("Layer does not support height models")}this._debug("No height model info found,","updating",e);return{updating:e}}},{key:"_extentCandidatesTask",get:function(){if(this.suspended||!this.required.extent){var a;return null!=(a=this._get("_extentCandidatesTask"))?a:{updating:!1}}if(!this.spatialReference)return{updating:this._spatialReferenceTask.updating};
var b=this._allLayers;a=b.updating;const d=[];for(const e of b.layers){b="fullExtents"in e&&e.fullExtents||(f.isSome(e.fullExtent)?[e.fullExtent]:[]);const c=b.find(l=>l.spatialReference.equals(this.spatialReference));if(c)return{candidates:[{extent:c,layer:e}],updating:!1};if(0<this._getSupportedSpatialReferences(e).length)for(const l of b)d.push({extent:l,layer:e})}return{candidates:d,updating:a}}},{key:"_extentTask",get:function(){var a=this;const {candidates:b,updating:d}=this._extentCandidatesTask;
if(d)return{updating:d};if(f.isNone(b)||0===b.length)return{updating:!1};if(!this.spatialReference)return{updating:this._spatialReferenceTask.updating};const {candidate:e,requiresGeometryService:c}=this._pickExtentCandidate(b),l=this.spatialReference;if(e.extent.equals(this._projectExtentTask.input)&&l.equals(this._projectExtentTask.spatialReference))return{extent:this._projectExtentTask.output,updating:f.isSome(this._projectExtentTask.task)&&!this._projectExtentTask.task.finished};f.isSome(this._projectExtentTask.task)&&
(this._debug("Aborting project extent task"),this._projectExtentTask.task=f.abortMaybe(this._projectExtentTask.task));if(!c){this._projectExtentTask={input:null,output:null,task:null,spatialReference:null};try{return{extent:v.project(e.extent,l),updating:!1}}catch{return{updating:!1}}}this._debug("Starting project extent task for",e.extent);this._projectExtentTask={input:e.extent.clone(),output:null,spatialReference:l.clone(),task:u.createTask(function(){var n=t._asyncToGenerator(function*(p){try{const m=
yield(yield u.whenOrAbort(new Promise((w,F)=>B(["../../portal/support/geometryServiceUtils"],w,F)),p)).projectGeometry(e.extent,l,e.layer.portalItem,p);a._debug("Project extent task finished",m);a._projectExtentTask={...a._projectExtentTask,task:null,output:m}}catch(m){u.isAborted(p)||(a._projectExtentTask={...a._projectExtentTask,task:null})}});return function(p){return n.apply(this,arguments)}}())};return{updating:!0}}}]);return r}(g);h.__decorate([k.property()],g.prototype,"required",void 0);h.__decorate([k.property({constructOnly:!0})],
g.prototype,"map",void 0);h.__decorate([k.property({constructOnly:!0})],g.prototype,"getSpatialReferenceSupport",void 0);h.__decorate([k.property()],g.prototype,"defaultSpatialReference",void 0);h.__decorate([k.property()],g.prototype,"userSpatialReference",void 0);h.__decorate([k.property()],g.prototype,"priorityCollection",void 0);h.__decorate([k.property()],g.prototype,"logDebugInformation",void 0);h.__decorate([k.property()],g.prototype,"suspended",void 0);h.__decorate([k.property({readOnly:!0})],
g.prototype,"ready",null);h.__decorate([k.property({readOnly:!0})],g.prototype,"heightModelInfoReady",null);h.__decorate([k.property({readOnly:!0})],g.prototype,"spatialReference",null);h.__decorate([k.property({readOnly:!0})],g.prototype,"extent",null);h.__decorate([k.property({readOnly:!0})],g.prototype,"heightModelInfo",null);h.__decorate([k.property({readOnly:!0})],g.prototype,"vcsWkid",null);h.__decorate([k.property({readOnly:!0})],g.prototype,"latestVcsWkid",null);h.__decorate([k.property({readOnly:!0})],
g.prototype,"viewingMode",null);h.__decorate([k.property({readOnly:!0})],g.prototype,"tileInfo",null);h.__decorate([k.property({readOnly:!0})],g.prototype,"mapCollections",null);h.__decorate([k.property({readOnly:!0})],g.prototype,"_allLayers",null);h.__decorate([k.property({readOnly:!0})],g.prototype,"_spatialReferenceTask",null);h.__decorate([k.property({readOnly:!0})],g.prototype,"_tileInfoTask",null);h.__decorate([k.property({readOnly:!0})],g.prototype,"_heightModelInfoTask",null);h.__decorate([k.property({readOnly:!0})],
g.prototype,"_extentCandidatesTask",null);h.__decorate([k.property()],g.prototype,"_extentTask",null);h.__decorate([k.property()],g.prototype,"_projectExtentTask",void 0);return g=h.__decorate([E.subclass("esri.views.support.DefaultsFromMap")],g)});