// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../core/Error ../../../core/maybe ../../../renderers/support/rasterRendererHelper ../support/utils".split(" "),function(k,l,e,m,f,n){function p(a){return g.apply(this,arguments)}function g(){g=l._asyncToGenerator(function*(a){var c;a=yield n.processRasterRendererParameters(a);const {rasterInfo:b}=a.layer;if(1<b.bandCount)throw new e("raster-class-breaks-renderer:not-supported","Multiband raster is not supported");if(null===b.attributeTable&&
!f.isSingleBand8BitRasterWithStats(b))throw new e("raster-unique-value-renderer:not-supported","The source raster does not have an attribute table");const d=null==(c=a.classFieldName)?void 0:c.toLowerCase();if(d&&!b.attributeTable.fields.some(q=>q.name.toLowerCase()===d))throw new e("raster-unique-value-renderer:invalid-parameters","A valid 'classfieldName' is required");d||(a.classFieldName=f.getClassField(b.attributeTable).name);return a});return g.apply(this,arguments)}function h(){h=l._asyncToGenerator(function*(a){a=
yield p(a);const {classFieldName:c,colors:b,colorRamp:d}=a;a=f.createUVRenderer(a.layer.rasterInfo,c,b,d);if(!m.isSome(a))throw new e("raster-unique-value-renderer:not-supported","UniqueValueRenderer is not supported on the provided data source");return{renderer:a,classFieldName:c}});return h.apply(this,arguments)}k.createRenderer=function(a){return h.apply(this,arguments)};Object.defineProperty(k,"__esModule",{value:!0})});