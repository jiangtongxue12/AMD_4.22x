// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/Accessor ../../../core/Handles ../../../core/maybe ../../../core/accessorSupport/decorators/property ../../../core/arrayUtils ../../../core/has ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/subclass ../../../geometry/projection ../../../geometry/support/aaBoundingRect ../../../geometry/support/spatialReferenceUtils ../../../layers/support/layerUtils ./terrainUtils ./TilingScheme".split(" "),
function(b,n,d,t,u,k,e,y,z,A,v,p,w,q,x,l,h){b.TilingSchemeLogic=function(r){function m(a){a=r.call(this,a)||this;a._handles=new u;return a}n._inheritsLoose(m,r);var f=m.prototype;f.initialize=function(){this._handles.add(this.layers.on("change",()=>this._update()));this._handles.add(this.extentHelper.watch("layerViewsExtent",()=>this._setAdHocTilingScheme()));this._update();this.tilingSchemeLocked||this._setAdHocTilingScheme()};f.destroy=function(){this._handles=k.destroyMaybe(this._handles);this._waitTask=
null};f._update=function(){this._waitTask=null;if(!this.tilingSchemeLocked){this._set("tilingSchemeDone",!1);var a;this.layers.some(g=>!x.isTiledLayer(g)||g.isRejected()?!1:!g.isFulfilled()||k.isSome(l.getTiledLayerInfo(g,this.viewSpatialReference,this.viewingMode))?(a=g,!l.isVectorTileLayer(g)&&!l.isProjectableRasterLayer(g)):!1);if(a)if(a.isResolved()){var c=l.getTiledLayerInfo(a,this.viewSpatialReference,this.viewingMode);k.isSome(c)&&(c=new h(c.tileInfo),this._set("tilingSchemeDone",!0),this._lockTilingScheme(c))}else this._updateWhen(a);
else this._set("tilingSchemeDone",!0)}};f._updateWhen=function(a){const c=a.when().catch(()=>{}).then(()=>{c!==this._waitTask||this.destroyed||this._update()});this._waitTask=c};f._lockTilingScheme=function(a){if(1===this.viewingMode){const c=a.levels.length-1;a.spatialReference.isWebMercator?a=h.makeWebMercatorAuxiliarySphere(c):p.canProjectToWGS84ComparableLonLat(a.spatialReference)&&(a=h.makeGCSWithTileSize(a.spatialReference,a.pixelSize,c))}this.tilingSchemeLocked=!0;this.tilingScheme=a;this.extentHelper.tilingScheme=
this.tilingScheme;this._updateTiledLayerExtent();this._handles.removeAll();this._handles.add(this.extentHelper.watch("tiledLayersExtent",()=>this._updateTiledLayerExtent()))};f._updateTiledLayerExtent=function(){this._set("extent",this.extentHelper.tiledLayersExtent)};f._setAdHocTilingScheme=function(){if(1===this.viewingMode){var a=this.extentHelper.viewSpatialReference;const c=p.canProjectToWGS84ComparableLonLat(a)||q.isMars(a)||q.isMoon(a);a.isWebMercator?this.tilingScheme=h.WebMercatorAuxiliarySphere:
c&&(this.tilingScheme=h.makeGCSWithTileSize(a,256));this._set("extent",this.extentHelper.layerViewsExtent)}else a=this.extentHelper.layerViewsExtent,k.isSome(a)&&!w.equals(a,this.extent)&&(this.tilingScheme=h.fromExtent(a,this.extentHelper.viewSpatialReference),this._set("extent",a))};n._createClass(m,[{key:"test",get:function(){return{lockTilingScheme:a=>this._lockTilingScheme(a),done:!this._waitTask}}}]);return m}(t);d.__decorate([e.property()],b.TilingSchemeLogic.prototype,"tilingScheme",void 0);
d.__decorate([e.property({readOnly:!0})],b.TilingSchemeLogic.prototype,"extent",void 0);d.__decorate([e.property({value:!1})],b.TilingSchemeLogic.prototype,"tilingSchemeLocked",void 0);d.__decorate([e.property({readOnly:!0,value:!1})],b.TilingSchemeLogic.prototype,"tilingSchemeDone",void 0);d.__decorate([e.property({constructOnly:!0})],b.TilingSchemeLogic.prototype,"viewSpatialReference",void 0);d.__decorate([e.property({constructOnly:!0})],b.TilingSchemeLogic.prototype,"layers",void 0);d.__decorate([e.property({constructOnly:!0})],
b.TilingSchemeLogic.prototype,"extentHelper",void 0);d.__decorate([e.property({constructOnly:!0})],b.TilingSchemeLogic.prototype,"viewingMode",void 0);b.TilingSchemeLogic=d.__decorate([v.subclass("esri.views.3d.terrain.TilingSchemeLogic")],b.TilingSchemeLogic);Object.defineProperty(b,"__esModule",{value:!0})});