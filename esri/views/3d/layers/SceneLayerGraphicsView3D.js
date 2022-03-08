// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define("require ../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../Graphic ../../../core/Logger ../../../core/maybe ../../../core/watchUtils ../../../core/accessorSupport/decorators/property ../../../core/arrayUtils ../../../core/has ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/subclass ../../../chunks/vec3 ../../../chunks/vec3f64 ../../../geometry/projection ../../../geometry/support/aaBoundingRect ../../../geometry/support/contains ../../../geometry/support/zscale ../../../layers/graphics/dehydratedFeatures ../../../layers/graphics/hydratedFeatures ../../../layers/graphics/controllers/I3SOnDemandController ../../../layers/support/FeatureFilter ../../../renderers/support/renderingInfoUtils ../../../rest/support/Query ./I3SPointsWorkerHandle ./LayerView3D ./graphics/Graphics3DFeatureLikeLayerView ./graphics/QueryEngine ./i3s/attributeEditing ./i3s/I3SAttributeOverrides ./i3s/I3SUtil ./support/DefinitionExpressionSceneLayerView ./support/fieldProperties ./support/PopupSceneLayerView ./support/SceneLayerViewRequiredFields ../support/debugFlags ../support/GraphicsMap ../support/orientedBoundingBox ../support/updatingProperties ../../layers/SceneLayerView ../../support/Scheduler".split(" "),
function(W,v,k,H,I,g,X,m,ua,va,wa,Y,Z,O,F,aa,ba,ca,L,da,ea,fa,P,Q,R,h,ha,ia,S,ja,J,ka,la,ma,na,M,oa,pa,qa,ra,sa){function T(D){const x=D.attributeInfo;for(let e=0;e<D.graphics.length;e++){const a=D.graphics[e];a.attributes||(a.attributes={});if(g.isSome(x)&&g.isSome(x.loadedAttributes))for(const {name:b}of x.loadedAttributes)x.attributeData[b]&&(a.attributes[b]=J.getCachedAttributeValue(x.attributeData[b],e))}}const G=I.getLogger("esri.views.3d.layers.SceneLayerGraphicsView3D");I=la.defineFieldProperties();
h=function(D){function x(){var a=D.apply(this,arguments)||this;a.type="scene-layer-graphics-3d";a._nodesAddedToStage=new Map;a.drapeSourceType=1;a._queryEngine=null;a._memCache=null;a._interactiveEditingSessions=new Map;a.loadedGraphics=new oa.GraphicsMap;a.holeFilling="always";a.progressiveLoadFactor=1;a.supportsHeightUnitConversion=!0;a._coordinatesOutsideExtentErrors=0;a._maxCoordinatesOutsideExtentErrors=20;return a}v._inheritsLoose(x,D);var e=x.prototype;e.initialize=function(){var a,b;const c=
this.layer;this.addResolvingPromise(c.indexInfo);this._attributeOverrides=new ja.I3SAttributeOverrides(this.layer,null==(a=this.view.resourceController)?void 0:a.memoryController);J.checkSpatialReferences(c,this.view.spatialReference,this.view.viewingMode);this.fieldsHelper=new na.SceneLayerViewRequiredFields({layerView:this});this.updatingHandles.add(c,"rangeInfos",d=>this._rangeInfosChanged(d),2);this.updatingHandles.add(c,"renderer",(d,f)=>this._rendererChange(d,f));this.updatingHandles.add(this,
"parsedDefinitionExpression",()=>this._filterChange());this.updatingHandles.add(this,"view.floors",()=>this.graphics3d.filterVisibility.filterChanged());this.handles.add(X.init(M,"I3S_TREE_SHOW_TILES",d=>{if(d&&!this._treeDebugger){const f=this._controller.crsIndex;(new Promise((q,n)=>W(["./support/I3STreeDebugger"],q,n))).then(({I3STreeDebugger:q})=>{!this._treeDebugger&&M.I3S_TREE_SHOW_TILES&&(this._treeDebugger=new q({lv:this,view:this.view,nodeSR:f}))})}else d||!this._treeDebugger||M.I3S_TREE_SHOW_TILES||
(this._treeDebugger.destroy(),this._treeDebugger=null)}));this._set("graphics3d",new ha({owner:this,layer:c,preferredUpdatePolicy:0,scaleVisibilityEnabled:!0,filterVisibilityEnabled:!0,timeExtentVisibilityEnabled:!1,frustumVisibilityEnabled:!1,elevationAlignmentEnabled:!0,elevationFeatureExpressionEnabled:!1,suspendResumeExtentMode:"data",dataExtent:c.fullExtent,updateClippingExtent:d=>this._updateClippingExtent(d)}));null==(b=this.graphics3d.elevationAlignment)?void 0:b.events.on("invalidate-elevation",
d=>this._invalidateElevation(d));this.supportsHeightUnitConversion&&(this._verticalScale=ca.getGeometryZScaler("point",c.spatialReference,this.view.spatialReference));this.addResolvingPromise(this.graphics3d.setup());this._memCache=this.view.resourceController.memoryController.newCache(c.uid);this._controller=new ea({layerView:this,scaleVisibilityEnabled:!1});J.containsDraco(this.layer.geometryDefinitions)&&(this._worker=new R.I3SPointsWorkerHandle(d=>this.view.resourceController.schedule(d)));this.handles.add(this.layer.on("apply-edits",
d=>this.updatingHandles.addPromise(d.result)));this.handles.add(this.layer.on("edits",d=>this._handleEdits(d)));this.when(()=>{this._queryEngine=new ia.default({layerView:this,priority:sa.TaskPriority.FEATURE_QUERY_ENGINE});this.updatingHandles.add(this,"maximumNumberOfFeatures",d=>this._controller.featureTarget=d,2);this.updatingHandles.add(this,"suspended",d=>{d&&this._removeAllNodeData()})})};e.destroy=function(){this._treeDebugger=g.destroyMaybe(this._treeDebugger);this._attributeOverrides=g.destroyMaybe(this._attributeOverrides);
this._set("graphics3d",g.destroyMaybe(this.graphics3d));this._controller=g.destroyMaybe(this._controller);this._queryEngine=g.destroyMaybe(this._queryEngine);this._worker=g.destroyMaybe(this._worker);this._memCache=g.destroyMaybe(this._memCache);this._nodesAddedToStage.clear();this.fieldsHelper=g.destroyMaybe(this.fieldsHelper)};e.notifyGraphicGeometryChanged=function(a){this.graphics3d.graphicsCore.notifyGraphicGeometryChanged(a)};e.notifyGraphicVisibilityChanged=function(a){this.graphics3d.graphicsCore.notifyGraphicVisibilityChanged(a)};
e.whenGraphicAttributes=function(){var a=v._asyncToGenerator(function*(b,c){return J.whenGraphicAttributes(this.layer,b,this._getObjectIdField(),c,()=>[...this._nodesAddedToStage.values()])});return function(b,c){return a.apply(this,arguments)}}();e.getGraphicFromGraphicUid=function(a){if(!this.loadedGraphics)return null;const b=da.hydrateGraphic(this.loadedGraphics.find(d=>d.uid===a),this.layer),c=this._getObjectIdField();if(!b||!b.attributes||!b.attributes[c])return null;b.layer=this.layer;b.sourceLayer=
this.layer;return b};e.whenGraphicBounds=function(a,b){return this.graphics3d.graphicsCore.whenGraphicBounds(a,b)};e.computeAttachmentOrigin=function(a,b){return this.graphics3d.graphicsCore.computeAttachmentOrigin(a,b)};e.canResume=function(){return D.prototype.canResume.call(this)&&(!this._controller||this._controller.rootNodeVisible)};e.isUpdating=function(){var a,b,c;return!!(null!=(a=this._controller)&&a.updating||null!=(b=this.graphics3d)&&b.updating||null!=(c=this.fieldsHelper)&&c.updating)};
e.getRenderingInfo=function(a,b,c){a=P.getRenderingInfo(a,{renderer:b,arcade:c});g.isSome(a)&&a.color&&(b=a.color,b[0]/=255,b[1]/=255,b[2]/=255);return a};e.getRenderingInfoAsync=function(){var a=v._asyncToGenerator(function*(b,c,d,f){return P.getRenderingInfoAsync(b,{renderer:c,arcade:d,...f})});return function(b,c,d,f){return a.apply(this,arguments)}}();e.highlight=function(a){return this.graphics3d.highlight(a,this.layer.objectIdField)};e.createInteractiveEditSession=function(a){return S.createInteractiveEditSession(this.attributeEditingContext,
a)};e.extractBinaryPointData=function(){var a=v._asyncToGenerator(function*(b,c){b={geometryBuffer:b.geometryBuffer};g.isNone(this._worker)&&(this._worker=new R.I3SPointsWorkerHandle(d=>this.view.resourceController.schedule(d)));return this._worker.invoke(b,c).then(d=>{if(g.isSome(d))return{positionData:d.positions,featureIds:d.featureIds};throw Error("Failed to decompress Draco point data");})});return function(b,c){return a.apply(this,arguments)}}();e.checkExtent=function(a,b){a&&!ba.extentContainsCoords3D(a,
b)&&(this._coordinatesOutsideExtentErrors<this._maxCoordinatesOutsideExtentErrors&&G.error("Service Error: Coordinates outside of layer extent"),this._coordinatesOutsideExtentErrors+1===this._maxCoordinatesOutsideExtentErrors&&G.error("Maximum number of errors reached. Further errors are ignored."),this._coordinatesOutsideExtentErrors++)};e.addNode=function(){var a=v._asyncToGenerator(function*(b,c,d){if(!("geometryBuffer"in c&&null!==c.geometryBuffer||"pointData"in c))return Promise.reject();if(this._nodesAddedToStage.has(b.index))G.error("I3S node "+
b.id+" already added");else{if(g.isSome(this.layer.fullExtent)){var f=this.layer.fullExtent.clone();f.xmin-=.5;f.ymin-=.5;f.xmax+=.5;f.ymax+=.5;f.hasZ&&(f.zmin-=.5,f.zmax+=.5);f.hasM&&(f.mmin-=.5,f.mmax+=.5)}else f=null;var q=this._controller.crsVertex,n=[],l={graphics:null,featureIds:null,attributeInfo:c.attributeDataInfo,node:b};"geometryBuffer"in c&&null!==c.geometryBuffer?yield this._addNodeBinaryPointData(b,l,c,f,n,d):"pointData"in c&&this._addNodeLegacyPointData(b,l,c,f,n);yield this._attributeOverrides.apply(l.featureIds,
c.attributeDataInfo,d);b.numFeatures=l.graphics.length;this._updateNodeMemory(b);T(l);0<n.length&&(this.computeObb(b,n,q),this._controller.updateVisibility(b.index));if(!this._controller.isGeometryVisible(b))return this._cacheNodeData(l),Promise.resolve();if(g.isSome(this._verticalScale))for(const u of l.graphics)this._verticalScale(u.geometry);this._nodesAddedToStage.set(b.index,l);this.loadedGraphics.addMany(l.graphics);this._filterNode(l);this._treeDebugger&&this._treeDebugger.update();return Promise.resolve()}});
return function(b,c,d){return a.apply(this,arguments)}}();e.computeObb=function(a,b,c){const d=this._controller.crsIndex,f=d.isGeographic?this.view.renderSpatialReference:d;F.projectBuffer(b,c,0,b,f,0,b.length/3);a.serviceObb=pa.compute({data:b,size:3});d.isGeographic&&F.projectVectorToVector(a.serviceObb.center,f,a.serviceObb.center,d)};e.isNodeLoaded=function(a){return this._nodesAddedToStage.has(a)};e.isNodeReloading=function(){return!1};e.updateNodeState=function(){};e._addNodeBinaryPointData=
function(){var a=v._asyncToGenerator(function*(b,c,d,f,q,n){var l=yield this.extractBinaryPointData(d,n);if(null==l)return Promise.reject();d=this._getObjectIdField();n=this._controller.crsVertex;const u=this.view.spatialReference,K=this.graphics3d.graphicsCore,{positionData:B,featureIds:y}=l;l=B.length/3;const t=[];for(let E=0;E<l;E++){var A=g.isSome(b.serviceObb)?b.serviceObb.center:[0,0,0],r=3*E,p=O.fromValues(B[r+0],B[r+1],B[r+2]);Z.add(p,p,A);b.serviceObb||q.push(p[0],p[1],p[2]);g.isSome(f)&&
this.checkExtent(f,p);r=y[E];A={};null!=r&&(A[d]=r);r=null==r?H.generateUID():r;F.projectBuffer(p,n,0,C,u,0,1);p=L.makeDehydratedPoint(C[0],C[1],C[2],u);var w=this.loadedGraphics.get(r);g.isSome(w)?(w.level<b.level&&(z.property="geometry",z.graphic=w,z.oldValue=g.unwrap(w.geometry),z.newValue=p,w.geometry=p,K.graphicUpdateHandler(z)),t.push(w)):(w=H.generateUID(),t.push({objectId:r,uid:w,geometry:p,attributes:A,visible:!0,level:b.level}))}c.graphics=t;c.featureIds=y});return function(b,c,d,f,q,n){return a.apply(this,
arguments)}}();e._addNodeLegacyPointData=function(a,b,c,d,f){const q=this._getObjectIdField(),n=this._controller.crsVertex,l=this.view.spatialReference,u=[0,0,0],K=[],B=[];for(const A of c.pointData){c=A.featureDataPosition;const r=c.length;var y=A.geometries&&A.geometries[0]||ta[r];const p=A.featureIds[0];if("points"!==y.params.type)continue;g.isSome(d)&&this.checkExtent(d,c);const w={};null!=p&&(w[q]=p);const E=null==p?H.generateUID():p;let N;"Embedded"===y.type&&(N=y.params.vertexAttributes.position);
for(y=0;y<N.length;y+=r){for(var t=0;t<r;t++)u[t]=c[t]+N[y+t];t=3===r;a.serviceObb||f.push(u[0],u[1],t?u[2]:0);F.projectBuffer(u,n,0,C,l,0,1);t=L.makeDehydratedPoint(C[0],C[1],t?C[2]:void 0,l);const U=this.loadedGraphics.get(E);g.isSome(U)?B.push(U):B.push({objectId:E,uid:H.generateUID(),geometry:t,attributes:w,visible:!0})}K.push(p)}b.graphics=B;b.featureIds=K};e._updateNodeMemory=function(a){a.memory=4096+(g.isSome(a.numFeatures)?a.numFeatures*this.graphics3d.graphicsCore.usedMemoryPerGraphic:0)};
e._cacheNodeData=function(a){const b=a.graphics.reduce((c,d)=>L.estimateSize(d)+c,8*a.featureIds.length+1536);this._memCache.put(this._getMemCacheKey(a.node),a,b)};e._getMemCacheKey=function(a){return`${a.index}`};e._removeAllNodeData=function(){this._nodesAddedToStage.forEach(a=>{a&&(this._updateNodeMemory(a.node),this._cacheNodeData(a))});this._nodesAddedToStage.clear();this._treeDebugger&&this._treeDebugger.update();this.loadedGraphics.clear()};e.removeNode=function(a){if(a=this._removeNodeStageData(a))this._updateNodeMemory(a.node),
this._cacheNodeData(a)};e._removeNodeStageData=function(a){const b=this._nodesAddedToStage.get(a);if(!b)return null;this.loadedGraphics.removeMany(b.graphics);this._nodesAddedToStage.delete(a);this._treeDebugger&&this._treeDebugger.update();return b};e.loadCachedNodeData=function(){var a=v._asyncToGenerator(function*(b){return this._memCache.pop(this._getMemCacheKey(b))});return function(b){return a.apply(this,arguments)}}();e.addCachedNodeData=function(){var a=v._asyncToGenerator(function*(b,c,d,
f){if(this._nodesAddedToStage.has(b.index))G.error("I3S node "+b.id+" already added");else return this.loadedGraphics.addMany(c.graphics),this._nodesAddedToStage.set(b.index,c),this._updateNodeMemory(b),yield this.updateAttributes(b.index,d,f),this._filterNode(c),this._treeDebugger&&this._treeDebugger.update(),Promise.resolve()});return function(b,c,d,f){return a.apply(this,arguments)}}();e.getLoadedNodeIds=function(){const a=[];this._nodesAddedToStage.forEach(b=>a.push(b.node.id));return a.sort()};
e.getVisibleNodes=function(){const a=[];this._nodesAddedToStage.forEach(b=>a.push(b.node));return a};e.getLoadedNodeIndices=function(a){this._nodesAddedToStage.forEach((b,c)=>a.push(c))};e.getLoadedAttributes=function(a){if((a=this._nodesAddedToStage.get(a))&&g.isSome(a.attributeInfo))return a.attributeInfo.loadedAttributes};e.getAttributeData=function(a){if((a=this._nodesAddedToStage.get(a))&&g.isSome(a.attributeInfo))return a.attributeInfo.attributeData};e.setAttributeData=function(a,b){(a=this._nodesAddedToStage.get(a))&&
!g.isNone(a.attributeInfo)&&(a.attributeInfo.attributeData=b,this._attributeValuesChanged(a))};e.updateAttributes=function(){var a=v._asyncToGenerator(function*(b,c,d){if(b=this._nodesAddedToStage.get(b))yield this._attributeOverrides.apply(b.featureIds,c,d),b.attributeInfo=c,this._attributeValuesChanged(b)});return function(b,c,d){return a.apply(this,arguments)}}();e._attributeValuesChanged=function(a){T(a);this._filterNode(a);this.graphics3d.graphicsCore.labelsEnabled&&(a=a.graphics.map(b=>b.uid),
this.graphics3d.graphicsCore.updateLabelingInfo(a))};e._updateClippingExtent=function(a){this._controller&&this._controller.updateClippingArea(a);return!1};e._getObjectIdField=function(){return this.layer.objectIdField||"OBJECTID"};e._rendererChange=function(){var a=v._asyncToGenerator(function*(b,c){const {layer:{fieldsIndex:d}}=this,f=new Set;let q;b?(yield b.collectRequiredFields(f,d),q=Array.from(f).sort()):q=[];f.clear();let n;c?(yield c.collectRequiredFields(f,d),n=Array.from(f).sort()):n=[];
q.length===n.length&&q.every((l,u)=>q[u]===n[u])||this._reloadAllNodes()});return function(b,c){return a.apply(this,arguments)}}();e._rangeInfosChanged=function(a){null!=a&&0<a.length&&G.warn("Unsupported property: rangeInfos are currently only serialized to and from web scenes but do not affect rendering.")};e._filterChange=function(){this._nodesAddedToStage.forEach(a=>this._filterNode(a))};e._reloadAllNodes=function(){this._removeAllNodeData();this._controller&&this._controller.restartNodeLoading()};
e._filterNode=function(a){const b=this.parsedDefinitionExpression;for(const c of a.graphics)a=c.visible,c.visible=b?this._evaluateClause(b,c):!0,a!==c.visible&&(z.graphic=c,z.property="visible",z.oldValue=a,z.newValue=c.visible,this.graphics3d.graphicsCore.graphicUpdateHandler(z))};e._invalidateElevation=function(a){const b=this._controller.crsIndex;F.projectBoundingRect(a.extent,a.spatialReference,V,b);this._controller.updateElevationChanged(V,b)};e.createQuery=function(){const a={outFields:["*"],
returnGeometry:!0,outSpatialReference:this.view.spatialReference};return g.isSome(this.filter)?this.filter.createQuery(a):new Q(a)};e.queryFeatures=function(a,b){return this._queryEngine.executeQuery(this._ensureQuery(a),null==b?void 0:b.signal)};e.queryObjectIds=function(a,b){return this._queryEngine.executeQueryForIds(this._ensureQuery(a),null==b?void 0:b.signal)};e.queryFeatureCount=function(a,b){return this._queryEngine.executeQueryForCount(this._ensureQuery(a),null==b?void 0:b.signal)};e.queryExtent=
function(a,b){return this._queryEngine.executeQueryForExtent(this._ensureQuery(a),null==b?void 0:b.signal)};e._ensureQuery=function(a){return this._addDefinitionExpressionToQuery(g.isNone(a)?this.createQuery():Q.from(a))};e.getUsedMemory=function(){const a=this.graphics3d&&this.graphics3d.graphicsCore;return a?a.usedMemory:0};e.getUnloadedMemory=function(){const a=this.graphics3d&&this.graphics3d.graphicsCore;return.8*((this._controller?this._controller.unloadedMemoryEstimate:0)+(a?a.unprocessedMemoryEstimate:
0))};e.ignoresMemoryFactor=function(){return this._controller&&this._controller.fixedFeatureTarget};e._handleEdits=function(a){S.processAttributeEdits(this.attributeEditingContext,a)};v._createClass(x,[{key:"requiredFields",get:function(){var a,b;return null!=(a=null==(b=this.fieldsHelper)?void 0:b.requiredFields)?a:[]}},{key:"maximumNumberOfFeatures",get:function(){const a=this.graphics3d&&this.graphics3d.graphicsCore&&this.graphics3d.graphicsCore.displayFeatureLimit;return a?a.maximumNumberOfFeatures:
0},set:function(a){null!=a?(this._override("maximumNumberOfFeatures",a),this._controller.fixedFeatureTarget=!0):(this._clearOverride("maximumNumberOfFeatures"),this._controller.fixedFeatureTarget=!1)}},{key:"maximumNumberOfFeaturesExceeded",get:function(){return this.suspended?!1:!!this._controller&&!this._controller.leavesReached}},{key:"hasM",get:function(){return!1}},{key:"hasZ",get:function(){return!0}},{key:"symbolUpdateType",get:function(){return this.graphics3d.graphicsCore.symbolUpdateType}},
{key:"updatePolicy",get:function(){return this.graphics3d.graphicsCore.effectiveUpdatePolicy}},{key:"attributeEditingContext",get:function(){const a=this._getObjectIdField();return{sessions:this._interactiveEditingSessions,fieldsIndex:this.layer.fieldsIndex,objectIdField:a,forEachNode:b=>this._nodesAddedToStage.forEach(c=>b(c.node,c.featureIds)),attributeStorageInfo:this.i3slayer.attributeStorageInfo,attributeOverrides:this._attributeOverrides,getAttributeData:b=>this.getAttributeData(b),setAttributeData:(b,
c,d)=>{this.setAttributeData(b,c);b=this._nodesAddedToStage.get(b);g.isSome(d)?(d=this.loadedGraphics.get(d.attributes[a]),g.isSome(d)&&this.graphics3d.graphicsCore.recreateGraphics([d])):g.isSome(b)&&this.graphics3d.graphicsCore.recreateGraphics(b.graphics)},clearMemCache:()=>{}}}},{key:"performanceInfo",get:function(){const a={displayedNumberOfFeatures:this.loadedGraphics.length,maximumNumberOfFeatures:this.maximumNumberOfFeatures,totalNumberOfFeatures:-1,nodes:this._nodesAddedToStage.size,core:this.graphics3d.graphicsCore.performanceInfo};
this._controller&&this._controller.updateStats(a);return a}},{key:"test",get:function(){return{controller:this._controller,numNodes:this._nodesAddedToStage.size,numFeatures:this.loadedGraphics.length}}}]);return x}(ka.DefinitionExpressionSceneLayerView(ma.PopupSceneLayerView(h.LayerView3D(ra))));k.__decorate([m.property()],h.prototype,"graphics3d",void 0);k.__decorate([m.property({type:fa})],h.prototype,"filter",void 0);k.__decorate([m.property()],h.prototype,"loadedGraphics",void 0);k.__decorate([m.property({aliasOf:"layer"})],
h.prototype,"i3slayer",void 0);k.__decorate([m.property()],h.prototype,"_controller",void 0);k.__decorate([m.property()],h.prototype,"updating",void 0);k.__decorate([m.property()],h.prototype,"suspended",void 0);k.__decorate([m.property()],h.prototype,"holeFilling",void 0);k.__decorate([m.property(qa.updatingProgress)],h.prototype,"updatingProgress",void 0);k.__decorate([m.property({aliasOf:"_controller.updatingProgress"})],h.prototype,"updatingProgressValue",void 0);k.__decorate([m.property(I.requiredFields)],
h.prototype,"requiredFields",null);k.__decorate([m.property(I.availableFields)],h.prototype,"availableFields",void 0);k.__decorate([m.property()],h.prototype,"fieldsHelper",void 0);k.__decorate([m.property({type:Number})],h.prototype,"maximumNumberOfFeatures",null);k.__decorate([m.property({readOnly:!0})],h.prototype,"maximumNumberOfFeaturesExceeded",null);k.__decorate([m.property({readOnly:!0,aliasOf:"view.qualitySettings.sceneService.point.lodFactor"})],h.prototype,"lodFactor",void 0);k.__decorate([m.property({readOnly:!0})],
h.prototype,"hasM",null);k.__decorate([m.property({readOnly:!0})],h.prototype,"hasZ",null);k=h=k.__decorate([Y.subclass("esri.views.3d.layers.SceneLayerGraphicsView3D")],h);const ta={2:{type:"Embedded",params:{type:"points",vertexAttributes:{position:[0,0]}}},3:{type:"Embedded",params:{type:"points",vertexAttributes:{position:[0,0,0]}}}},C=O.create(),z={graphic:null,property:null,oldValue:null,newValue:null},V=aa.create();return k});