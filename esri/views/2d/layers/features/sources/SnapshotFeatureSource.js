// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define("exports ../../../../../chunks/_rollupPluginBabelHelpers ../../../../../core/has ../../../../../core/Logger ../../../../../core/maybe ../../../../../core/promiseUtils ../../../../../core/RandomLCG ./BaseFeatureSource ../support/FeatureSetReaderPBFIndirect ../support/UpdateToken".split(" "),function(y,q,z,A,r,w,B,C,D,v){function E(n,k,l){var b=n.getXHydrated();n=n.getYHydrated();b=k.getColumnForX(b);b=Math.floor(k.normalizeCol(b));k=Math.floor(k.getRowForY(n));return`${l}/${k}/${b}`}function x(n,
k){if(r.isNone(n))return null;k=k.transform;const l=n.getQuantizationTransform();if(r.isNone(l)){const [h,t]=k.scale,[u,p]=k.translate;return n.transform(-u/h,p/t,1/h,1/-t)}const [b,a]=l.scale,[c,d]=l.translate,[e,g]=k.scale,[f,m]=k.translate;return n.transform((c-f)/e,(-d+m)/g,b/e,a/g)}const F=A.getLogger("esri.views.2d.layers.features.sources.SnapshotFeatureSource");z=function(n){function k(b){var a=n.call(this,b)||this;a.mode="snapshot";a._loading=!0;a._controller=new AbortController;a._downloadPromise=
null;a._didSendEnd=!1;a._queries=[];a._invalidated=!1;a._hasAggregates=!1;a._random=new B(1E3);a._store=b.store;a._markedIdsBufId=a._store.storage.createBitset();return a}q._inheritsLoose(k,n);var l=k.prototype;l.destroy=function(){n.prototype.destroy.call(this);this._controller.abort()};l.update=function(b,a){n.prototype.update.call(this,b,a);this._hasAggregates=b.targets.aggregate};l.resend=function(){var b=q._asyncToGenerator(function*(a=!1){yield this._downloadPromise;this._invalidated||a?(a=
r.unwrapOrThrow(this._schema.featureCount,"Expected featureCount to be defined"),this._invalidated=!1,this._subscriptions.forEach(c=>c.clear()),this._downloadPromise=this._download(a),yield this._downloadPromise):(a=this._queries.map(({query:c,reader:d})=>this._sendPatchQuery(c,d)),yield Promise.all(a),this._subscriptions.forEach(c=>{c.requests.done.forEach(d=>this._onMessage(d.message))}))});return function(){return b.apply(this,arguments)}}();l.refresh=function(){var b=q._asyncToGenerator(function*(){yield this.resend(!0)});
return function(){return b.apply(this,arguments)}}();l._sendPatchQuery=function(){var b=q._asyncToGenerator(function*(a,c){const d=r.isSome(a.outFields)?a.outFields:[],e=this._queryInfo.outFields,g=e.filter(h=>-1===d.indexOf(h));if(g.length){var f=a.clone(),m=this._signal;f.returnGeometry=!1;f.returnCentroid=!1;f.outFields=g;a.outFields=e;a=yield this._queue.push({query:f,depth:0,signal:m});w.throwIfAborted({signal:m});c.joinAttributes(a)}});return function(a,c){return b.apply(this,arguments)}}();
l._fetchDataTile=function(){var b=q._asyncToGenerator(function*(a){if(!this._downloadPromise){var c=r.unwrapOrThrow(this._schema.featureCount,"Expected featureCount to be defined");this._downloadPromise=this._download(c)}var d=this._store.search(a);c=this._subscriptions.get(a.key.id);const e=d.length-1;for(let f=0;f<e;f++){var g=x(d[f],a);g={type:"append",id:a.id,addOrUpdate:g,end:!1,status:v.UpdateToken.empty()};c.add({query:null,message:g});this._hasAggregates||(yield w.after(1));this._onMessage(g)}d=
x(0<=e?d[e]:null,a);a={type:"append",id:a.id,addOrUpdate:d,end:this._didSendEnd,status:v.UpdateToken.empty()};c.add({query:null,message:a});this._onMessage(a)});return function(a){return b.apply(this,arguments)}}();l._download=function(){var b=q._asyncToGenerator(function*(a){try{yield this.whenInitialized();const c=this._store.storage.getBitset(this._markedIdsBufId),d=new Set;c.clear();const e=Array.from({length:Math.ceil(a/this.pageSize)},(g,f)=>f).sort((g,f)=>this._random.getInt()-this._random.getInt()).map(g=>
this._downloadPage(g,c,d));yield Promise.all(e);this._store.sweepFeatures(c,this._store.storage);this._store.sweepFeatureSets(d)}catch(c){F.error("mapview-snapshot-source","Encountered and error when downloading feature snapshot",c)}this._sendEnd();this._loading=!1});return function(a){return b.apply(this,arguments)}}();l._downloadPage=function(){var b=q._asyncToGenerator(function*(a,c,d){var e=this.pageSize;e={start:a*e,num:e,cacheHint:!0};r.isSome(this.maxRecordCountFactor)&&(e.maxRecordCountFactor=
this.maxRecordCountFactor);e=this.createQuery(e);const g=this._signal;a=yield this._queue.push({query:e,depth:a,signal:g});w.throwIfAborted({signal:g});this._queries.push({query:e,reader:a});this._store.insert(a);d.add(a.instance);for(d=a.getCursor();d.next();)c.set(d.getDisplayId());this._send(a)});return function(a,c,d){return b.apply(this,arguments)}}();l._send=function(b){if(this._subscriptions.size){var a=null,c=new Map,d=new Set,e=new Map;this._subscriptions.forEach(f=>{var m,h=f.tile;c.set(h.key.id,
null);a=h.tileInfoView;d.add(h.level);const {row:t,col:u}=h.key;h=`${h.level}/${t}/${u}`;const p=null!=(m=e.get(h))?m:[];p.push(f);e.set(h,p)});for(const f of d){const m=a.getLODInfoAt(f),h=b.getCursor();for(;h.next();){var g=E(h,m,f);const t=h.getIndex();if(e.has(g))for(const u of e.get(g)){g=u.tile.id;let p=c.get(g);r.isNone(p)&&(p=[],c.set(g,p));p.push(t)}}}c.forEach((f,m)=>{if(r.isSome(f)){const h=this._subscriptions.get(m);f=x(D.FeatureSetReaderIndirect.from(b,f),h.tile);m={type:"append",id:m,
addOrUpdate:f,end:!1,status:v.UpdateToken.empty()};h.add({query:null,message:m});this._onMessage(m)}})}};l._sendEnd=function(){this._subscriptions.forEach(b=>{const a={type:"append",id:b.tile.id,addOrUpdate:null,end:!0,status:v.UpdateToken.empty()};b.add({query:null,message:a});this._onMessage(a)});this._didSendEnd=!0};q._createClass(k,[{key:"loading",get:function(){return this._loading}},{key:"_signal",get:function(){return this._controller.signal}}]);return k}(C.BaseFeatureSource);y.SnapshotFeatureSource=
z;Object.defineProperty(y,"__esModule",{value:!0})});