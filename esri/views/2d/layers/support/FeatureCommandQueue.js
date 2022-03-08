// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define("../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/tslib.es6 ../../../../core/Accessor ../../../../core/accessorSupport/decorators/property ../../../../core/arrayUtils ../../../../core/has ../../../../core/accessorSupport/ensureType ../../../../core/accessorSupport/decorators/subclass ../../../support/QueueProcessor".split(" "),function(r,t,h,w,z,A,B,x,y){function l(b){return b.some(c=>c.globalId)}function k(b){return b.filter(c=>!c.error).map(c=>{var f;return null!=(f=c.objectId)?
f:c.globalId})}function u(b,c){b=new Set(b);for(const f of c.values())b.add(f);return b}function v(b,c){b=new Set(b);for(const f of c.values())b.delete(f);return b}h=function(b){function c(a){a=b.call(this,a)||this;a._hasGlobalIds=!1;return a}r._inheritsLoose(c,b);var f=c.prototype;f.normalizeCtorArgs=function(a){this._queueProcessor=new y.QueueProcessor({concurrency:1,process:a.process});return{}};f.destroy=function(){this._queueProcessor.clear()};f.push=function(a){const e=this._queueProcessor;
var d=e.last();switch(a.type){case "update":case "refresh":if((null==d?void 0:d.type)===a.type)return;e.push(a).finally(()=>this.notifyChange("updating"));break;case "edit":(d="processed-edit"===(null==d?void 0:d.type)?d:null)&&e.popLast();a=this._mergeEdits(d,a);for(const g of a)e.push(g).finally(()=>this.notifyChange("updating"))}this.notifyChange("updating")};f._mergeEdits=function(a,e){var d,g;const {addedFeatures:m,deletedFeatures:n,updatedFeatures:p}=e.edits;if(this._hasGlobalIds=this._hasGlobalIds||
l(m)||l(p)||l(n))return e=[...m,...p],[a,{type:"processed-edit",edits:{addOrModified:e,removed:n}}];e=new Set(k(null!=(d=null==a?void 0:a.edits.addOrModified)?d:[]));a=new Set(k(null!=(g=null==a?void 0:a.edits.removed)?g:[]));g=new Set([...k(m),...k(p)]);d=new Set(k(n));e=Array.from(u(v(e,d),g)).map(q=>({objectId:q}));a=Array.from(u(v(a,g),d)).map(q=>({objectId:q}));return[{type:"processed-edit",edits:{addOrModified:e,removed:a}}]};r._createClass(c,[{key:"updating",get:function(){return 0<this._queueProcessor.length}}]);
return c}(h);t.__decorate([w.property({readOnly:!0})],h.prototype,"updating",null);return h=t.__decorate([x.subclass("esri.views.2d.layers.support.FeatureCommandQueue")],h)});