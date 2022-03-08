// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/Accessor ../../core/HandleOwner ../../core/watchUtils ../../core/accessorSupport/decorators/property ../../core/arrayUtils ../../core/has ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass ./ScaleRanges ../Slider/SliderViewModel".split(" "),function(m,g,e,t,p,k,x,y,z,u,q,v){e=function(r){function l(a){a=r.call(this,a)||this;a.layer=null;a.scaleRanges=q.fromScaleRange({minScale:0,maxScale:0});
({max:b}=a._getSliderIndexRange(a.scaleRanges.length-1));var b=new v({precision:10,min:0,max:b,values:[0,b]});a.sliderViewModel=b;return a}m._inheritsLoose(l,r);var d=l.prototype;d.initialize=function(){var a=this;this.handles.add([p.init(this,"sliderViewModel.values",()=>{if(this._hasTiledLayer()){var [b,c]=this.sliderViewModel.values,f=this.mapScaleToSlider(this._getTiledLayerMaxScale()),h=this.mapScaleToSlider(this._getTiledLayerMinScale());if(c>f||b<h)this.sliderViewModel.values=[Math.max(b,h),
Math.min(c,f)]}}),p.init(this,"layer.loaded",m._asyncToGenerator(function*(){const {layer:b,view:c}=a;if(b)if(c&&(yield c.when()),yield b.when(),"minScale"in b&&"maxScale"in b){const {minScale:f,maxScale:h}=b;a.set({minScale:f,maxScale:h})}else a.set({minScale:void 0,maxScale:void 0})}))])};d.mapScaleToSlider=function(a){const b=this.scaleRanges.scaleToRangeIndex(a),c=this.scaleRanges.findScaleRangeByIndex(b),{maxScale:f,minScale:h}=c,{max:n,min:w}=this._getSliderIndexRange(b);return this._mapToRange(a,
h,f,w,n)};d.mapSliderToScale=function(a){const b=this.scaleRanges.findScaleRangeByIndex(a),{maxScale:c,minScale:f}=b,{max:h,min:n}=this._getSliderIndexRange(a);return this._mapToRange(a,n,h,f,c)};d._setSliderRange=function(a){this.scaleRanges=q.fromScaleRange(a);({max:a}=this._getSliderIndexRange(this.scaleRanges.length-1));this.sliderViewModel.max=a;this.sliderViewModel.min=0;this.notifyChange("maxScaleLimit");this.notifyChange("minScaleLimit")};d._getSliderIndexRange=function(a){a=Math.floor(a);
return{min:a,max:a+.99999}};d._mapToRange=function(a,b,c,f,h){return f+(a-b)*(h-f)/(c-b)};d._setMaxScaleOnSlider=function(a){const {scaleRanges:b,sliderViewModel:c}=this;void 0!==a&&(a=this.mapScaleToSlider(this._constrainMaxScaleToLayer(b.clampMaxScale(a))),c.values=[c.values[0],a])};d._setMinScaleOnSlider=function(a){const {scaleRanges:b,sliderViewModel:c}=this;void 0!==a&&(a=this.mapScaleToSlider(this._constrainMinScaleToLayer(b.clampMinScale(a))),c.values=[a,c.values[1]])};d._constrainMinScaleToLayer=
function(a){var {scaleRanges:b}=this;if(this._hasTiledLayer()){({firstRange:b}=b);const c=this._getTiledLayerMinScale();a=.85<this._mapToRange(a,b.maxScale,b.minScale,0,1)?c:a>c?c:a}return a};d._constrainMaxScaleToLayer=function(a){if(this._hasTiledLayer()){const b=this._getTiledLayerMaxScale();a=a<b?b:a}return a};d._normalizeScale=function(a,b){const c="max"===a?"maxScale":"minScale";a=this._hasTiledLayer()?"min"===a?this._getTiledLayerMinScale():this._getTiledLayerMaxScale():this.scaleRanges[c];
return Number((0===b||a===b||1E-6>=Math.abs(a-b)?0:b).toFixed(6))};d._getLayerLODS=function(){var a,b;return"imagery-tile"===(null==(a=this.layer)?void 0:a.type)&&"Raster"===(null==(b=this.layer.raster)?void 0:b.tileType)?null:this.get("layer.tileInfo.lods")};d._getTiledLayerMinScale=function(){const a=this._getLayerLODS();return this.scaleRanges.clampMinScale(a[0].scale)};d._getTiledLayerMaxScale=function(){const a=this._getLayerLODS();return a[a.length-1].scale};d._hasTiledLayer=function(){return!!this._getLayerLODS()};
m._createClass(l,[{key:"maxScale",get:function(){const a=this.mapSliderToScale(this.sliderViewModel.values[1]);return this._normalizeScale("max",a)},set:function(a){this._setMaxScaleOnSlider(a)}},{key:"maxScaleLimit",get:function(){return this.mapSliderToScale(this.sliderViewModel.max)},set:function(a){this._setSliderRange({maxScale:a,minScale:this.minScaleLimit})}},{key:"minScale",get:function(){const a=this.mapSliderToScale(this.sliderViewModel.values[0]);return this._normalizeScale("min",a)},set:function(a){this._setMinScaleOnSlider(a)}},
{key:"minScaleLimit",get:function(){return this.mapSliderToScale(this.sliderViewModel.min)},set:function(a){this._setSliderRange({maxScale:this.maxScaleLimit,minScale:a})}},{key:"state",get:function(){const {view:a,layer:b}=this;return!a&&!b||!a&&b&&b.loaded||!b&&a&&a.ready||a&&a.ready&&b&&b.loaded?"ready":"disabled"}},{key:"view",set:function(a){this._set("view",a)}}]);return l}(t.HandleOwnerMixin(e));g.__decorate([k.property()],e.prototype,"layer",void 0);g.__decorate([k.property()],e.prototype,
"maxScale",null);g.__decorate([k.property()],e.prototype,"maxScaleLimit",null);g.__decorate([k.property()],e.prototype,"minScale",null);g.__decorate([k.property()],e.prototype,"minScaleLimit",null);g.__decorate([k.property()],e.prototype,"scaleRanges",void 0);g.__decorate([k.property()],e.prototype,"sliderViewModel",void 0);g.__decorate([k.property({readOnly:!0})],e.prototype,"state",null);g.__decorate([k.property()],e.prototype,"view",null);return e=g.__decorate([u.subclass("esri.widgets.ScaleRangeSlider.ScaleRangeSliderViewModel")],
e)});