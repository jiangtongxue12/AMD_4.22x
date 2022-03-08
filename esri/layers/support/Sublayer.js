// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define("require ../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../geometry ../../PopupTemplate ../../renderers/ClassBreaksRenderer ../../renderers/DictionaryRenderer ../../renderers/DotDensityRenderer ../../renderers/HeatmapRenderer ../../renderers/Renderer ../../renderers/SimpleRenderer ../../renderers/UniqueValueRenderer ../../renderers/support/jsonUtils ../../renderers/support/types ../../request ../../symbols ../../core/Collection ../../core/Error ../../core/HandleOwner ../../core/Identifiable ../../core/lang ../../core/Loadable ../../core/Logger ../../core/maybe ../../core/MultiOriginJSONSupport ../../core/urlUtils ../../core/accessorSupport/decorators/property ../../core/accessorSupport/utils ../../core/accessorSupport/decorators/cast ../../core/accessorSupport/decorators/reader ../../core/accessorSupport/decorators/subclass ../../core/accessorSupport/decorators/writer ../../core/accessorSupport/ensureType ../../core/accessorSupport/PropertyOrigin ./FeatureType ./Field ./FieldsIndex ./LabelClass ./LayerFloorInfo ./source/DataLayerSource ./source/MapLayerSource ../../rest/support/Query ../../support/popupUtils ../../views/support/floorFilterUtils ../../geometry/Extent".split(" "),
function(C,v,f,d,P,oa,pa,qa,ra,sa,ta,ua,va,J,Q,R,S,y,T,U,z,V,W,K,X,Y,h,D,Z,r,aa,w,t,L,ba,ca,da,ea,fa,M,E,N,ha,ia,ja){function F(l){return l&&"esriSMS"===l.type}function G(l,n,e){var a;l=this.originIdOf(n)>=L.nameToId(e.origin);return{ignoreOrigin:!0,allowNull:l,enabled:e?"map-image"===(null==(a=e.layer)?void 0:a.type)&&(e.writeSublayerStructure||l):!1}}function O(l,n,e){var a;return{enabled:e?"tile"===(null==(a=e.layer)?void 0:a.type)&&this._isOverridden(n):!1}}function p(l,n,e){return{ignoreOrigin:!0,
enabled:e&&e.writeSublayerStructure||!1}}function A(l,n,e){return{ignoreOrigin:!0,enabled:e?e.writeSublayerStructure||this.originIdOf(n)>=L.nameToId(e.origin):!1}}var B;const H=W.getLogger("esri.layers.support.Sublayer");let ka=0;const u=new Set;u.add("layer");u.add("parent");u.add("loaded");u.add("loadStatus");u.add("loadError");u.add("loadWarnings");d=B=function(l){function n(a){a=l.call(this,a)||this;a.capabilities=void 0;a.fields=null;a.fullExtent=null;a.globalIdField=null;a.legendEnabled=!0;
a.objectIdField=null;a.popupEnabled=!0;a.popupTemplate=null;a.sourceJSON=null;a.title=null;a.typeIdField=null;a.types=null;return a}v._inheritsLoose(n,l);var e=n.prototype;e.load=function(){var a=v._asyncToGenerator(function*(b){var c=this;this.addResolvingPromise(v._asyncToGenerator(function*(){var g;if(!c.layer&&!c.url)throw new y("sublayer:missing-layer","Sublayer can't be loaded without being part of a layer",{sublayer:c});let k=null;if(!c.layer||2<c.originIdOf("url")||"data-layer"===(null==(g=
c.source)?void 0:g.type))k=(yield Q(c.url,{responseType:"json",query:{f:"json"},...b})).data;else{var m;g=c.id;"map-layer"===(null==(m=c.source)?void 0:m.type)&&(g=c.source.mapLayerId);k=yield c.layer.fetchSublayerInfo(g,b)}k&&(c.sourceJSON=k,c.read({layerDefinition:k},{origin:"service"}))})());return this});return function(b){return a.apply(this,arguments)}}();e.readCapabilities=function(a,b){b=b.layerDefinition||b;a=(a=b.capabilities||a)?a.toLowerCase().split(",").map(c=>c.trim()):[];return{exportMap:{supportsModification:!!b.canModifyLayer},
operations:{supportsQuery:-1!==a.indexOf("query")}}};e.readGlobalIdFieldFromService=function(a,b){b=b.layerDefinition||b;if(b.globalIdField)return b.globalIdField;if(b.fields)for(const c of b.fields)if("esriFieldTypeGlobalID"===c.type)return c.name};e.writeLabelingInfo=function(a,b,c,g){a&&a.length&&(b.layerDefinition={drawingInfo:{labelingInfo:a.map(k=>k.write({},g))}})};e.readMinScale=function(a,b){return b.minScale||b.layerDefinition&&b.layerDefinition.minScale||0};e.readMaxScale=function(a,b){return b.maxScale||
b.layerDefinition&&b.layerDefinition.maxScale||0};e.readObjectIdFieldFromService=function(a,b){b=b.layerDefinition||b;if(b.objectIdField)return b.objectIdField;if(b.fields)for(const c of b.fields)if("esriFieldTypeOID"===c.type)return c.name};e.readOpacity=function(a,b){a=b.layerDefinition;return 1-.01*(null!=a.transparency?a.transparency:a.drawingInfo.transparency)};e.writeOpacity=function(a,b,c,g){b.layerDefinition={drawingInfo:{transparency:100-100*a}}};e.writeParent=function(a,b){b.parentLayerId=
this.parent&&this.parent!==this.layer?t.ensureInteger(this.parent.id):-1};e.castSublayers=function(a){return t.ensureType(S.ofType(B),a)};e.writeSublayers=function(a,b,c){this.get("sublayers.length")&&(b[c]=this.sublayers.map(g=>g.id).toArray().reverse())};e.readTypeIdField=function(a,b){b=b.layerDefinition||b;let c=b.typeIdField;c&&b.fields&&(c=c.toLowerCase(),a=b.fields.find(g=>g.name.toLowerCase()===c))&&(c=a.name);return null};e.writeVisible=function(a,b,c,g){b[c]=this.getAtOrigin("defaultVisibility",
"service")||a};e.clone=function(){const {store:a}=D.getProperties(this),b=new B;D.getProperties(b).store=a.clone(u);this.commitProperty("url");b._lastParsedUrl=this._lastParsedUrl;return b};e.createPopupTemplate=function(a){return ha.createPopupTemplate(this,a)};e.createQuery=function(){return new N({returnGeometry:!0,where:this.definitionExpression||"1\x3d1"})};e.createFeatureLayer=function(){var a=v._asyncToGenerator(function*(){var b,c;if(this.hasOwnProperty("sublayers"))return null;const g=null==
(b=this.layer)?void 0:b.parsedUrl;b=new (yield new Promise((k,m)=>C(["../FeatureLayer"],q=>k(Object.freeze({__proto__:null,default:q})),m))).default({url:g.path});g&&this.source&&("map-layer"===this.source.type?b.layerId=this.source.mapLayerId:b.dynamicDataSource=this.source);null!=this.layer.refreshInterval&&(b.refreshInterval=this.layer.refreshInterval);this.definitionExpression&&(b.definitionExpression=this.definitionExpression);this.floorInfo&&(b.floorInfo=z.clone(this.floorInfo));2<this.originIdOf("labelingInfo")&&
(b.labelingInfo=z.clone(this.labelingInfo));0<this.originIdOf("labelsVisible")&&(b.labelsVisible=this.labelsVisible);0<this.originIdOf("legendEnabled")&&(b.legendEnabled=this.legendEnabled);0<this.originIdOf("visible")&&(b.visible=this.visible);0<this.originIdOf("minScale")&&(b.minScale=this.minScale);0<this.originIdOf("maxScale")&&(b.maxScale=this.maxScale);0<this.originIdOf("opacity")&&(b.opacity=this.opacity);0<this.originIdOf("popupTemplate")&&(b.popupTemplate=z.clone(this.popupTemplate));2<this.originIdOf("renderer")&&
(b.renderer=z.clone(this.renderer));"data-layer"===(null==(c=this.source)?void 0:c.type)&&(b.dynamicDataSource=this.source.clone());0<this.originIdOf("title")&&(b.title=this.title);"map-image"===this.layer.type&&0<this.layer.originIdOf("customParameters")&&(b.customParameters=this.layer.customParameters);"tile"===this.layer.type&&0<this.layer.originIdOf("customParameters")&&(b.customParameters=this.layer.customParameters);return b});return function(){return a.apply(this,arguments)}}();e.getField=
function(a){return this.fieldsIndex.get(a)};e.getFeatureType=function(a){const {typeIdField:b,types:c}=this;if(!b||!a)return null;const g=a.attributes?a.attributes[b]:void 0;if(null==g)return null;let k=null;c.some(m=>{const {id:q}=m;if(null==q)return!1;q.toString()===g.toString()&&(k=m);return!!k});return k};e.getFieldDomain=function(a,b){return(b=this.getFeatureType(b&&b.feature))&&(b=b.domains&&b.domains[a])&&"inherited"!==b.type?b:this._getLayerDomain(a)};e.queryFeatures=function(){var a=v._asyncToGenerator(function*(b=
this.createQuery(),c){var g,k,m,q;yield this.load();if(!this.get("capabilities.operations.supportsQuery"))throw new y("Sublayer.queryFeatures","this layer doesn't support queries.");const [{executeQuery:la},{default:ma}]=yield Promise.all([new Promise((x,I)=>C(["../../rest/query/operations/query"],x,I)),new Promise((x,I)=>C(["../../rest/support/FeatureSet"],na=>x(Object.freeze({__proto__:null,default:na})),I))]);b=yield la(this.url,N.from(b),null!=(g=null==(k=this.layer)?void 0:k.spatialReference)?
g:null,{...c,query:{...null==(m=this.layer)?void 0:m.customParameters,token:null==(q=this.layer)?void 0:q.apiKey}});g=ma.fromJSON(b.data);if(null!=g&&g.features)for(const x of g.features)x.sourceLayer=this;return g});return function(){return a.apply(this,arguments)}}();e.toExportImageJSON=function(a){var b;const c={id:this.id,source:(null==(b=this.source)?void 0:b.toJSON())||{mapLayerId:this.id,type:"mapLayer"}};this.definitionExpression?(a=K.isSome(a)?ia.combineFloorsDefinitionExpression(a,this):
this.definitionExpression,c.definitionExpression=a):K.isSome(a)&&(c.definitionExpression=a);const g=["renderer","labelingInfo","opacity","labelsVisible"].reduce((k,m)=>{k[m]=this.originIdOf(m);return k},{});Object.keys(g).some(k=>2<g[k])&&(a=c.drawingInfo={},2<g.renderer&&(a.renderer=this.renderer?this.renderer.toJSON():null),2<g.labelsVisible&&(a.showLabels=this.labelsVisible),this.labelsVisible&&2<g.labelingInfo&&(a.labelingInfo=this.labelingInfo?this.labelingInfo.map(k=>k.write({},{origin:"service",
layer:this.layer})):null,a.showLabels=!0),2<g.opacity&&(a.transparency=100-100*this.opacity),this._assignDefaultSymbolColors(a.renderer));return c};e._assignDefaultSymbolColors=function(a){this._forEachSimpleMarkerSymbols(a,b=>{b.color||"esriSMSX"!==b.style&&"esriSMSCross"!==b.style||(b.color=b.outline&&b.outline.color?b.outline.color:[0,0,0,0])})};e._forEachSimpleMarkerSymbols=function(a,b){if(a){const c="uniqueValueInfos"in a?a.uniqueValueInfos:"classBreakInfos"in a?a.classBreakInfos:[];for(const g of c)F(g.symbol)&&
b(g.symbol);"symbol"in a&&F(a.symbol)&&b(a.symbol);"defaultSymbol"in a&&F(a.defaultSymbol)&&b(a.defaultSymbol)}};e._setAndNotifyLayer=function(a,b){const c=this.layer,g=this._get(a);let k,m;switch(a){case "definitionExpression":case "floorInfo":k="supportsSublayerDefinitionExpression";case "minScale":case "maxScale":case "visible":k="supportsSublayerVisibility";break;case "labelingInfo":case "labelsVisible":case "opacity":case "renderer":case "source":k="supportsDynamicLayers",m="supportsModification"}const q=
D.getProperties(this).getDefaultOrigin();if("service"!==q){if(k&&!1===this.get(`layer.capabilities.exportMap.${k}`)){this._logLockedError(a,`capability not available 'layer.capabilities.exportMap.${k}'`);return}if(m&&!1===this.get(`capabilities.exportMap.${m}`)){this._logLockedError(a,`capability not available 'capabilities.exportMap.${m}'`);return}}"source"===a&&"not-loaded"!==this.loadStatus?this._logLockedError(a,"'source' can't be changed after calling sublayer.load()"):(this._set(a,b),"service"!==
q&&g!==b&&c&&c.emit&&c.emit("sublayer-update",{propertyName:a,target:this}))};e._handleSublayersChange=function(a,b){b&&(b.forEach(c=>{c.parent=null;c.layer=null}),this.handles.removeAll());a&&(a.forEach(c=>{c.parent=this;c.layer=this.layer}),this.handles.add([a.on("after-add",({item:c})=>{c.parent=this;c.layer=this.layer}),a.on("after-remove",({item:c})=>{c.parent=null;c.layer=null}),a.on("before-changes",c=>{const g=this.get("layer.capabilities.exportMap.supportsSublayersChanges");null==g||g||(H.error(new y("sublayer:sublayers-non-modifiable",
"Sublayer can't be added, moved, or removed from the layer's sublayers",{sublayer:this,layer:this.layer})),c.preventDefault())})]))};e._logLockedError=function(a,b){H.error(new y("sublayer:locked",`Property '${a}' can't be changed on Sublayer from the layer '${this.layer.id}'`,{reason:b,sublayer:this,layer:this.layer}))};e._getLayerDomain=function(a){return(a=this.fieldsIndex.get(a))?a.domain:null};v._createClass(n,[{key:"definitionExpression",set:function(a){this._setAndNotifyLayer("definitionExpression",
a)}},{key:"fieldsIndex",get:function(){return new da(this.fields||[])}},{key:"floorInfo",set:function(a){this._setAndNotifyLayer("floorInfo",a)}},{key:"id",get:function(){const a=this._get("id");return null==a?ka++:a},set:function(a){this._get("id")!==a&&(!1===this.get("layer.capabilities.exportMap.supportsDynamicLayers")?this._logLockedError("id","capability not available 'layer.capabilities.exportMap.supportsDynamicLayers'"):this._set("id",a))}},{key:"labelingInfo",set:function(a){this._setAndNotifyLayer("labelingInfo",
a)}},{key:"labelsVisible",set:function(a){this._setAndNotifyLayer("labelsVisible",a)}},{key:"layer",set:function(a){this._set("layer",a);this.sublayers&&this.sublayers.forEach(b=>b.layer=a)}},{key:"listMode",set:function(a){this._set("listMode",a)}},{key:"minScale",set:function(a){this._setAndNotifyLayer("minScale",a)}},{key:"maxScale",set:function(a){this._setAndNotifyLayer("maxScale",a)}},{key:"opacity",set:function(a){this._setAndNotifyLayer("opacity",a)}},{key:"defaultPopupTemplate",get:function(){return this.createPopupTemplate()}},
{key:"renderer",set:function(a){if(a)for(const b of a.getSymbols())if(R.isSymbol3D(b)){H.warn("Sublayer renderer should use 2D symbols");break}this._setAndNotifyLayer("renderer",a)}},{key:"source",get:function(){return this._get("source")||new E.MapLayerSource({mapLayerId:this.id})},set:function(a){this._setAndNotifyLayer("source",a)}},{key:"sublayers",set:function(a){this._handleSublayersChange(a,this._get("sublayers"));this._set("sublayers",a)}},{key:"url",get:function(){var a,b;const c=null!=(a=
null==(b=this.layer)?void 0:b.parsedUrl)?a:this._lastParsedUrl;a=this.source;if(!c)return null;this._lastParsedUrl=c;if("map-layer"===(null==a?void 0:a.type))return`${c.path}/${a.mapLayerId}`;a={layer:JSON.stringify({source:this.source})};return`${c.path}/dynamicLayer?${Y.objectToQuery(a)}`},set:function(a){a?this._override("url",a):this._clearOverride("url")}},{key:"visible",set:function(a){this._setAndNotifyLayer("visible",a)}}]);return n}(T.HandleOwnerMixin(X.MultiOriginJSONMixin(U.IdentifiableMixin(V))));
d.test={isMapImageLayerOverridePolicy:l=>l===p||l===G,isTileImageLayerOverridePolicy:l=>l===O};f.__decorate([h.property({readOnly:!0})],d.prototype,"capabilities",void 0);f.__decorate([r.reader("service","capabilities",["layerDefinition.canModifyLayer","layerDefinition.capabilities"])],d.prototype,"readCapabilities",null);f.__decorate([h.property({type:String,value:null,json:{name:"layerDefinition.definitionExpression",write:{allowNull:!0,overridePolicy:G}}})],d.prototype,"definitionExpression",null);
f.__decorate([h.property({type:[ca],json:{origins:{service:{read:{source:"layerDefinition.fields"}}}}})],d.prototype,"fields",void 0);f.__decorate([h.property({readOnly:!0})],d.prototype,"fieldsIndex",null);f.__decorate([h.property({type:fa,value:null,json:{name:"layerDefinition.floorInfo",read:{source:"layerDefinition.floorInfo"},write:{target:"layerDefinition.floorInfo",overridePolicy:G},origins:{"web-scene":{read:!1,write:!1}}}})],d.prototype,"floorInfo",null);f.__decorate([h.property({type:ja,
json:{read:{source:"layerDefinition.extent"}}})],d.prototype,"fullExtent",void 0);f.__decorate([h.property({type:String})],d.prototype,"globalIdField",void 0);f.__decorate([r.reader("service","globalIdField",["layerDefinition.globalIdField","layerDefinition.fields"])],d.prototype,"readGlobalIdFieldFromService",null);f.__decorate([h.property({type:t.Integer,json:{write:{ignoreOrigin:!0}}})],d.prototype,"id",null);f.__decorate([h.property({value:null,type:[ea],json:{read:{source:"layerDefinition.drawingInfo.labelingInfo"},
write:{target:"layerDefinition.drawingInfo.labelingInfo",overridePolicy:p}}})],d.prototype,"labelingInfo",null);f.__decorate([w.writer("labelingInfo")],d.prototype,"writeLabelingInfo",null);f.__decorate([h.property({type:Boolean,value:!0,json:{read:{source:"layerDefinition.drawingInfo.showLabels"},write:{target:"layerDefinition.drawingInfo.showLabels",overridePolicy:p}}})],d.prototype,"labelsVisible",null);f.__decorate([h.property({value:null})],d.prototype,"layer",null);f.__decorate([h.property({type:Boolean,
value:!0,json:{origins:{service:{read:{enabled:!1}}},read:{source:"showLegend"},write:{target:"showLegend",overridePolicy:A}}})],d.prototype,"legendEnabled",void 0);f.__decorate([h.property({type:["show","hide","hide-children"],value:"show",json:{read:!1,write:!1,origins:{"web-scene":{read:!0,write:!0}}}})],d.prototype,"listMode",null);f.__decorate([h.property({type:Number,value:0,json:{write:{overridePolicy:p}}})],d.prototype,"minScale",null);f.__decorate([r.reader("minScale",["minScale","layerDefinition.minScale"])],
d.prototype,"readMinScale",null);f.__decorate([h.property({type:Number,value:0,json:{write:{overridePolicy:p}}})],d.prototype,"maxScale",null);f.__decorate([r.reader("maxScale",["maxScale","layerDefinition.maxScale"])],d.prototype,"readMaxScale",null);f.__decorate([h.property({type:String})],d.prototype,"objectIdField",void 0);f.__decorate([r.reader("service","objectIdField",["layerDefinition.objectIdField","layerDefinition.fields"])],d.prototype,"readObjectIdFieldFromService",null);f.__decorate([h.property({type:Number,
value:1,json:{write:{target:"layerDefinition.drawingInfo.transparency",overridePolicy:p}}})],d.prototype,"opacity",null);f.__decorate([r.reader("opacity",["layerDefinition.drawingInfo.transparency","layerDefinition.transparency"])],d.prototype,"readOpacity",null);f.__decorate([w.writer("opacity")],d.prototype,"writeOpacity",null);f.__decorate([h.property({json:{type:t.Integer,write:{target:"parentLayerId",writerEnsuresNonNull:!0,overridePolicy:p}}})],d.prototype,"parent",void 0);f.__decorate([w.writer("parent")],
d.prototype,"writeParent",null);f.__decorate([h.property({type:Boolean,value:!0,json:{read:{source:"disablePopup",reader(l,n){return!n.disablePopup}},write:{target:"disablePopup",overridePolicy:A,writer(l,n,e){n[e]=!l}}}})],d.prototype,"popupEnabled",void 0);f.__decorate([h.property({type:P,json:{read:{source:"popupInfo"},write:{target:"popupInfo",overridePolicy:A}}})],d.prototype,"popupTemplate",void 0);f.__decorate([h.property({readOnly:!0})],d.prototype,"defaultPopupTemplate",null);f.__decorate([h.property({types:J.rendererTypes,
value:null,json:{name:"layerDefinition.drawingInfo.renderer",write:{overridePolicy:p},origins:{"web-scene":{types:J.webSceneRendererTypes,name:"layerDefinition.drawingInfo.renderer",write:{overridePolicy:p}}}}})],d.prototype,"renderer",null);f.__decorate([h.property({types:{key:"type",base:null,typeMap:{"data-layer":M.DataLayerSource,"map-layer":E.MapLayerSource}},cast(l){if(l){if("mapLayerId"in l)return t.ensureClass(E.MapLayerSource,l);if("dataSource"in l)return t.ensureClass(M.DataLayerSource,
l)}return l},json:{name:"layerDefinition.source",write:{overridePolicy:p}}})],d.prototype,"source",null);f.__decorate([h.property()],d.prototype,"sourceJSON",void 0);f.__decorate([h.property({value:null,json:{type:[t.Integer],write:{target:"subLayerIds",allowNull:!0,overridePolicy:p}}})],d.prototype,"sublayers",null);f.__decorate([Z.cast("sublayers")],d.prototype,"castSublayers",null);f.__decorate([w.writer("sublayers")],d.prototype,"writeSublayers",null);f.__decorate([h.property({type:String,json:{name:"name",
write:{overridePolicy:A}}})],d.prototype,"title",void 0);f.__decorate([h.property({type:String})],d.prototype,"typeIdField",void 0);f.__decorate([r.reader("typeIdField",["layerDefinition.typeIdField"])],d.prototype,"readTypeIdField",null);f.__decorate([h.property({type:[ba],json:{origins:{service:{read:{source:"layerDefinition.types"}}}}})],d.prototype,"types",void 0);f.__decorate([h.property({type:String,json:{read:{source:"layerUrl"},write:{target:"layerUrl",overridePolicy:O}}})],d.prototype,"url",
null);f.__decorate([h.property({type:Boolean,value:!0,json:{read:{source:"defaultVisibility"},write:{target:"defaultVisibility",overridePolicy:p}}})],d.prototype,"visible",null);f.__decorate([w.writer("visible")],d.prototype,"writeVisible",null);return d=B=f.__decorate([aa.subclass("esri.layers.support.Sublayer")],d)});