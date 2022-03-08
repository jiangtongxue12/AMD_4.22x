// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define("exports ../../../../../chunks/_rollupPluginBabelHelpers ../../../../../TimeExtent ../../../../../core/Evented ../../../../../core/has ../../../../../core/maybe ../../../../../core/promiseUtils ../../../../../core/accessorSupport/diffUtils ../../../../../rest/support/Query ./DataTileSubscription".split(" "),function(q,k,t,u,r,v,p,n,w,x){function y(l,c){const b=new Set;l&&l.forEach(a=>b.add(a));c&&c.forEach(a=>b.add(a));return b.has("*")?["*"]:Array.from(b)}let A=function(){function l(b){this.events=
new u;this._resolver=p.createResolver();this._didEdit=!1;this._subscriptions=new Map;this._outSR=b.outSR;this._serviceInfo=b.serviceInfo;this._onTileUpdateMessage=b.onMessage}var c=l.prototype;c.destroy=function(){};c._onMessage=function(){var b=k._asyncToGenerator(function*(a){var d;const e=this._subscriptions.get(a.id);if(e)return a={...a,remove:null!=(d=a.remove)?d:[],status:a.status},this._onTileUpdateMessage(a,e.options)});return function(a){return b.apply(this,arguments)}}();c.update=function(b,
a){var d,e=a.fields.length;a.outFields=y(null==(d=this._schema)?void 0:d.outFields,a.outFields);a.outFields=a.outFields.length>=.75*e?["*"]:a.outFields;a.outFields.sort();if(d=n.diff(this._schema,a)){r("esri-2d-update-debug")&&console.debug("Applying Update - Source:",d);e="orderByFields"in this._serviceInfo&&this._serviceInfo.orderByFields?this._serviceInfo.orderByFields:this._serviceInfo.objectIdField+" ASC";e={returnCentroid:r("esri-2d-query-centroid-enabled")&&"esriGeometryPolygon"===this._serviceInfo.geometryType,
returnGeometry:!0,timeReferenceUnknownClient:"stream"!==this._serviceInfo.type&&this._serviceInfo.timeReferenceUnknownClient,outFields:a.outFields,outSpatialReference:this._outSR,orderByFields:[e],where:a.definitionExpression||"1\x3d1",gdbVersion:a.gdbVersion,historicMoment:a.historicMoment,timeExtent:t.fromJSON(a.timeExtent),customParameters:a.customParameters};var h=this._schema&&n.hasDiff(d,"outFields");this._schema&&n.hasDiffAny(d,["timeExtent","definitionExpression","gdbVersion","historicMoment",
"customParameters"])&&(b.why.mesh.push("Layer filter and/or custom parameters changed"),b.why.source.push("Layer filter and/or custom parameters changed"),b.mesh=!0,b.source=!0,b.queryFilter=!0);h&&(b.why.source.push("Layer required fields changed"),b.source=!0);n.diff(e,this._queryInfo)&&(this._queryInfo=e);this._schema=a;this._resolver.resolve()}};c.whenInitialized=function(){return this._resolver.promise};c.applyUpdate=function(){var b=k._asyncToGenerator(function*(a){a.queryFilter||a.source&&
this._didEdit?(this.refresh(),this._didEdit=!1):(this._subscriptions.forEach(d=>d.applyUpdate(a)),yield this.resend())});return function(a){return b.apply(this,arguments)}}();c.refresh=function(){for(const b of this._tiles())this.unsubscribe(b),this.subscribe(b)};c.subscribe=function(b){const a=new x.DataTileSubscription(b);this._subscriptions.set(b.id,a)};c.unsubscribe=function(b){const a=this.get(b.id);v.isSome(a)&&a.abort();this._subscriptions.delete(b.id)};c.createQuery=function(b={}){return new w({...this._queryInfo,
historicMoment:this._queryInfo.historicMoment?new Date(this._queryInfo.historicMoment):null,...b})};c.get=function(b){return this._subscriptions.has(b)?this._subscriptions.get(b):null};c.queryLastEditDate=function(){var b=k._asyncToGenerator(function*(){throw Error("Service does not support query type");});return function(){return b.apply(this,arguments)}}();c.query=function(){var b=k._asyncToGenerator(function*(a){throw Error("Service does not support query");});return function(a){return b.apply(this,
arguments)}}();c._tiles=function*(){const b=Array.from(this._subscriptions.values());for(const a of b)yield a.tile};c.edit=function(){var b=k._asyncToGenerator(function*(a,d){var e=this,h=Array.from(this._subscriptions.values());const z=h.map(({tile:f})=>f);for(const f of h)f.removeIds(d);a.length&&(h=z.map(f=>{const g=this.createTileQuery(f);g.objectIds=a;return{tile:f,query:g}}).map(function(){var f=k._asyncToGenerator(function*({tile:g,query:m}){return{tile:g,result:yield e.query(m),query:m}});
return function(g){return f.apply(this,arguments)}}()),h=(yield p.eachAlwaysValues(h)).map(function(){var f=k._asyncToGenerator(function*({tile:g,result:m}){(m.hasFeatures||d.length||a.length)&&(g=e._subscriptions.get(g.key.id))&&g.edit(m,a)});return function(g){return f.apply(this,arguments)}}()),yield p.eachAlways(h));this._didEdit=!0});return function(a,d){return b.apply(this,arguments)}}();return l}();q.DataTileSource=A;Object.defineProperty(q,"__esModule",{value:!0})});