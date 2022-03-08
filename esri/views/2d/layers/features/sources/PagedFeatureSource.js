// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define("exports ../../../../../chunks/_rollupPluginBabelHelpers ../../../../../core/Error ../../../../../core/Logger ../../../../../core/maybe ../../../../../core/promiseUtils ./BaseFeatureSource".split(" "),function(u,n,x,p,y,h,z){const A=p.getLogger("esri.views.2d.layers.features.sources.FeatureSource");p=function(v){function q(m){return v.call(this,m)||this}n._inheritsLoose(q,v);var w=q.prototype;w._fetchDataTile=function(){var m=n._asyncToGenerator(function*(b){const c=this._subscriptions.get(b.key.id);
let d=!1,r=0,e=0;const l=(g,a)=>{e--;h.throwIfAborted(c);const k=b.id,f=g.reader;g=g.query;f.exceededTransferLimit?(a={id:k,addOrUpdate:f,end:d&&0===e,type:"append"},c.add({message:a,query:g}),this._onMessage(a)):(d=!0,a={id:k,addOrUpdate:f,end:0===e,type:"append"},c.add({message:a,query:g}),this._onMessage(a))};let t=0,B=0;for(;!d&&20>B++;){let g;for(let a=0;a<t+1;a++){const k=r++;e++;g=this._fetchDataTilePage(b,k,c).then(f=>f&&l(f,k)).catch(f=>{d=!0;h.isAbortError(f)||(A.error(new x("mapview-query-error",
"Encountered error when fetching tile",{tile:b,error:f})),this._onMessage({id:b.id,addOrUpdate:null,end:d,type:"append"}))})}yield g;h.throwIfAborted(c);t=Math.min(t+2,6)}});return function(b){return m.apply(this,arguments)}}();w._fetchDataTilePage=function(){var m=n._asyncToGenerator(function*(b,c,d){h.throwIfAborted(d);const r=this._queryInfo;var e={start:this.pageSize*c,num:this.pageSize,returnExceededLimitFeatures:!0,quantizationParameters:b.getQuantizationParameters()};y.isSome(this.maxRecordCountFactor)&&
(e.maxRecordCountFactor=this.maxRecordCountFactor);e=this.createTileQuery(b,e);try{const l=yield this._queue.push({tile:b,query:e,signal:d.signal,depth:c});h.throwIfAborted(d);return l?r!==this._queryInfo?this._fetchDataTilePage(b,c,d):{reader:l,query:e}:null}catch(l){return h.throwIfNotAbortError(l),null}});return function(b,c,d){return m.apply(this,arguments)}}();return q}(z.BaseFeatureSource);u.PagedFeatureSource=p;Object.defineProperty(u,"__esModule",{value:!0})});