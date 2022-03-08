// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../Graphic ../../core/Error ../../core/maybe ../../core/accessorSupport/decorators/property ../../core/arrayUtils ../../core/has ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass ../../layers/support/commonProperties ../../layers/support/rasterFunctions/rasterProjectionHelper ./support/popupUtils".split(" "),function(v,w,k,C,n,A,l,x,G,H,D,E,y,F){x=g=>{g=function(B){function t(){var a=
B.apply(this,arguments)||this;a._rasterFieldPrefix="Raster.";a.layer=null;a.view=null;a.fullExtent=null;a.tileInfo=null;a.datumTransformation=null;return a}w._inheritsLoose(t,B);var m=t.prototype;m.fetchPopupFeatures=function(){var a=w._asyncToGenerator(function*(b,c){const {layer:d}=this;if(!b)return Promise.reject(new n("imageryTileLayerView:fetchPopupFeatures","Nothing to fetch without area",{layer:d}));var {popupEnabled:e}=d;c=F.getFetchPopupTemplate(d,c);if(!e||!A.isSome(c))throw new n("imageryTileLayerView:fetchPopupFeatures",
"Missing required popupTemplate or popupEnabled",{popupEnabled:e,popupTemplate:c});e=[];const {value:p,magdirValue:u}=yield d.identify(b,{timeExtent:this.timeExtent});let z="";if(p&&p.length){var h,q;z="imagery-tile"===d.type&&d.hasStandardTime()&&null!=p[0]?p.map(r=>d.getStandardTimeValue(r)).join(", "):p.join(", ");b={ObjectId:0};b["Raster.ServicePixelValue"]=this._formatAttributeValue(z,"Raster.ServicePixelValue");if((c=null==(h=d.rasterInfo)?void 0:null==(q=h.attributeTable)?void 0:q.features)&&
0<c.length&&(h=c.filter(r=>String(r.attributes.value||r.attributes.Value||r.attributes.VALUE)===z),0<h.length&&(h=h[0])))for(var f in h.attributes)h.attributes.hasOwnProperty(f)&&(q=this._rasterFieldPrefix+f,b[q]=this._formatAttributeValue(h.attributes[f],q));f=d.rasterInfo.dataType;if("vector-magdir"===f||"vector-uv"===f)b["Raster.Magnitude"]=null==u?void 0:u[0],b["Raster.Direction"]=null==u?void 0:u[1];f=new C(this.fullExtent.clone(),null,b);f.layer=d;f.sourceLayer=f.layer;e.push(f)}return e});
return function(b,c){return a.apply(this,arguments)}}();m.updateFullExtent=function(){var a=this.layer.tileInfo;if(!a||!a.spatialReference)return Promise.reject(new n("layerview:tiling-information-missing","The layer doesn't provide tiling information",{layer:this.layer}));if(A.isNone(this.layer.fullExtent))return Promise.reject(new n("layerview:extent-missing","The layer doesn't provide a full extent.",{layer:this.layer}));a=y.getDefaultDatumTransformationForDataset(this.layer.fullExtent,this.view.spatialReference,
!1);a=y.projectExtent(this.layer.fullExtent,this.view.spatialReference,a);if(null==a)return Promise.reject(new n("layerview:projection-not-supported","The layer extent cannot be projected to the view's spatial reference",{layer:this.layer}));this._set("fullExtent",a);this.datumTransformation||(this.datumTransformation=y.getDefaultDatumTransformationForDataset(this.layer.fullExtent,this.view.spatialReference,!0));return Promise.resolve()};m._formatAttributeValue=function(a,b){if("string"===typeof a&&
(b=(b=this._getFieldInfo(this.layer.popupTemplate&&this.layer.popupTemplate.fieldInfos,b))&&b.format)){let c,d;return-1<a.trim().indexOf(",")?(c=",",d=c+" ",this._formatDelimitedString(a,c,d,b)):-1<a.trim().indexOf(" ")?(c=d=" ",this._formatDelimitedString(a,c,d,b)):this._formatNumberFromString(a,b)}return a};m._getFieldInfo=function(a,b){if(a&&a.length&&b){var c=b.toLowerCase(),d=void 0;a.some(e=>!e.fieldName||e.fieldName.toLowerCase()!==c&&e.fieldName.toLowerCase()!==c.replace(/ /g,"_")?!1:(d=e,
!0));return d}};m._formatDelimitedString=function(a,b,c,d){return a&&b&&c&&d?a.trim().split(b).map(e=>this._formatNumberFromString(e,d)).join(c):a};m._formatNumberFromString=function(a,b){if(!a||!b)return a;const c=Number(a);return isNaN(c)?a:b.format(c)};w._createClass(t,[{key:"hasTilingEffects",get:function(){return this.layer.renderer&&"dynamicRangeAdjustment"in this.layer.renderer&&this.layer.renderer.dynamicRangeAdjustment}}]);return t}(g);k.__decorate([l.property()],g.prototype,"layer",void 0);
k.__decorate([l.property(E.combinedViewLayerTimeExtentProperty)],g.prototype,"timeExtent",void 0);k.__decorate([l.property()],g.prototype,"view",void 0);k.__decorate([l.property()],g.prototype,"fullExtent",void 0);k.__decorate([l.property()],g.prototype,"tileInfo",void 0);k.__decorate([l.property({readOnly:!0})],g.prototype,"hasTilingEffects",null);return g=k.__decorate([D.subclass("esri.views.layers.ImageryTileLayerView")],g)};v.ImageryTileLayerView=x;v.default=x;Object.defineProperty(v,"__esModule",
{value:!0})});