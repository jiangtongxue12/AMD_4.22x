// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers","../../../../../core/has","../../../../../core/promiseUtils","./BaseFeatureSource"],function(p,f,g,q,h){var x=(g=g("esri-mobile"))?1:4,y=g?1:3;h=function(r){function k(l){return r.call(this,l)||this}f._inheritsLoose(k,r);k.prototype._fetchDataTile=function(){var l=f._asyncToGenerator(function*(a){var b=this;const z=this._serviceInfo.capabilities.query.supportsMaxRecordCountFactor,t=this._subscriptions.get(a.key.id),u=t.signal,A=a.getQuantizationParameters();
let m=0;const n=function(){var D=f._asyncToGenerator(function*(e,c){const B=b._queryInfo,v=b.createTileQuery(e,{maxRecordCountFactor:z?y:void 0,returnExceededLimitFeatures:!1,quantizationParameters:A});m++;try{const d=yield b._queue.push({tile:a,query:v,signal:u,depth:c});m--;q.throwIfAborted(u);if(d)if(B!==b._queryInfo)n(e,c);else if(d.exceededTransferLimit&&c<x)for(const C of e.createChildTiles())n(C,c+1);else{var w={id:a.id,addOrUpdate:d,end:0===m,type:"append"};t.add({query:v,message:w});b._onMessage(w)}}catch(d){q.isAbortError(d)||
b._onMessage({id:a.id,addOrUpdate:null,end:!0,type:"append"})}});return function(e,c){return D.apply(this,arguments)}}();n(a,0)});return function(a){return l.apply(this,arguments)}}();return k}(h.BaseFeatureSource);p.DrillDownFeatureSource=h;Object.defineProperty(p,"__esModule",{value:!0})});