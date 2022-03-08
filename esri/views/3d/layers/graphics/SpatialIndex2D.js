// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/tslib.es6 ../../../../core/Accessor ../../../../core/has ../../../../core/accessorSupport/decorators/property ../../../../core/arrayUtils ../../../../core/accessorSupport/ensureType ../../../../core/accessorSupport/decorators/subclass ../../../../core/libs/rbush/PooledRBush ../../../../geometry/support/aaBoundingBox ../../../../layers/graphics/dehydratedFeatures".split(" "),function(c,m,f,q,r,h,w,x,t,u,v,n){c.SpatialIndex2D=
function(p){function k(a){a=p.call(this,a)||this;a._index=new u.PooledRBush(9,r("esri-csp-restrictions")?b=>({minX:b.extent[0],minY:b.extent[1],maxX:b.extent[2],maxY:b.extent[3]}):[".extent[0]",".extent[1]",".extent[2]",".extent[3]"]);a._missing=new Set;a._boundsByFeature=new Map;a.spatialReference=null;a.hasZ=null;a.hasM=null;a.objectIdField=null;a.updating=!1;return a}m._inheritsLoose(k,p);var d=k.prototype;d.setup=function(a){this._addMany(a)};d.destroy=function(){this._missing.clear();this._index.destroy();
this._index=null;this._boundsByFeature.clear();this._boundsByFeature=null};d.update=function(){0<this._missing.size&&(this._addMany(Array.from(this._missing.values())),this.updating=!1,this._missing.clear())};d.queryGraphicUIDsInExtent=function(a,b,g){b.equals(this.spatialReference)&&(e.minX=a[0],e.minY=a[1],e.maxX=a[2],e.maxY=a[3],this.update(),this._index.search(e,l=>g(l.graphic.uid)))};d.add=function(a){this._missing.add(a);this.updating=!0};d.remove=function(a){this._missing.delete(a)?this.updating=
0<this._missing.size:(this._index.remove(a),a=n.getObjectId(a.graphic,this._get("objectIdField")),null!=a&&this._boundsByFeature.delete(a))};d._addMany=function(a){if(0!==a.length){var b=this._get("objectIdField");for(const g of a){g.computeExtent(this.spatialReference);const l=n.getObjectId(g.graphic,b);null!=l&&this._boundsByFeature.set(l,g.extent)}this._index.load(a)}};d.clear=function(){this._index.clear();this._missing.clear();this._boundsByFeature.clear();this.updating=!1};d.forEachInBounds=
function(a,b){e.minX=a[0];e.minY=a[1];e.maxX=a[2];e.maxY=a[3];this.update();this._index.search(e,g=>{b(g)})};d.getBounds=function(a,b){this.update();return(a=this._boundsByFeature.get(a))?v.fromRect(b,a):null};m._createClass(k,[{key:"updatingRemaining",get:function(){return this._missing.size}}]);return k}(q);f.__decorate([h.property({constructOnly:!0})],c.SpatialIndex2D.prototype,"spatialReference",void 0);f.__decorate([h.property({constructOnly:!0})],c.SpatialIndex2D.prototype,"hasZ",void 0);f.__decorate([h.property({constructOnly:!0})],
c.SpatialIndex2D.prototype,"hasM",void 0);f.__decorate([h.property({constructOnly:!0})],c.SpatialIndex2D.prototype,"objectIdField",void 0);f.__decorate([h.property()],c.SpatialIndex2D.prototype,"updating",void 0);f.__decorate([h.property({readOnly:!0})],c.SpatialIndex2D.prototype,"updatingRemaining",null);c.SpatialIndex2D=f.__decorate([t.subclass("esri.views.3d.layers.graphics.SpatialIndex2D")],c.SpatialIndex2D);const e={minX:0,minY:0,maxX:0,maxY:0};Object.defineProperty(c,"__esModule",{value:!0})});