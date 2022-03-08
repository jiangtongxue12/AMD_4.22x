// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define("../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/tslib.es6 ../../../../core/Accessor ../../../../core/promiseUtils ../../../../core/accessorSupport/decorators/property ../../../../core/arrayUtils ../../../../core/has ../../../../core/accessorSupport/ensureType ../../../../core/accessorSupport/decorators/subclass ../../../../geometry/Extent ../../../../geometry/support/aaBoundingRect ../../../../geometry/support/spatialReferenceUtils ../../../../layers/support/TileInfo ../../viewStateUtils ../../engine/Bitmap ../../tiling/TileInfoView ../../tiling/TileKey".split(" "),
function(t,f,e,C,m,K,L,M,D,y,E,F,G,z,H,I,J){const n=E.create(),p=[0,0],A=new J(0,0,0,0);e=function(B){function x(g){var a=B.call(this,g)||this;a._imagePromise=null;a.bitmaps=[];a.hidpi=!1;a.imageMaxWidth=2048;a.imageMaxHeight=2048;a.imageRotationSupported=!1;a.imageNormalizationSupported=!1;a.update=C.debounce(function(){var l=t._asyncToGenerator(function*(c,h){if(!c.stationary||a.destroyed)return null;const b=c.state;var d=F.getInfo(b.spatialReference);c=a.hidpi?c.pixelRatio:1;var k=a.imageNormalizationSupported&&
b.worldScreenWidth&&b.worldScreenWidth<b.size[0];k?(p[0]=b.worldScreenWidth,p[1]=b.size[1]):a.imageRotationSupported?(p[0]=b.size[0],p[1]=b.size[1]):z.getOuterSize(p,b);d=d&&(b.extent.xmin<d.valid[0]||b.extent.xmax>d.valid[1]);d=!a.imageNormalizationSupported&&d;const u=a.imageRotationSupported?b.rotation:0;Math.floor(p[0]*c)>a.imageMaxWidth||Math.floor(p[1]*c)>a.imageMaxHeight||d?(k=Math.min(a.imageMaxWidth,a.imageMaxHeight),d&&(k=Math.min(b.worldScreenWidth,k)),a._imagePromise=a._tiledExport(b,
k,u,c,h)):a._imagePromise=a._singleExport(b,p,k?b.paddedViewState.center:b.center,b.resolution,u,c,h);return a._imagePromise.then(function(){var v=t._asyncToGenerator(function*(r){a._imagePromise=null;if(!a.destroyed){a.bitmaps=null!=r?r:[];for(const q of a.container.children)r.includes(q)||q.fadeOut().then(()=>{q.remove()});for(const q of r)a.container.addChild(q),q.fadeIn()}});return function(r){return v.apply(this,arguments)}}()).catch(v=>{a._imagePromise=null;throw v;})});return function(c,h){return l.apply(this,
arguments)}}(),5E3);return a}t._inheritsLoose(x,B);var w=x.prototype;w.destroy=function(){this.bitmaps=[]};w.updateExports=function(g){for(const a of this.container.children){if(!a.visible||!a.stage)break;g(a);a.invalidateTexture();a.requestRender()}};w._export=function(){var g=t._asyncToGenerator(function*(a,l,c,h,b,d){c=yield this.fetchSource(a,Math.floor(l*b),Math.floor(c*b),{rotation:h,pixelRatio:b,signal:d});c=new H.Bitmap(c,"additive");c.x=a.xmin;c.y=a.ymax;c.resolution=a.width/l;c.rotation=
h;c.pixelRatio=b;return c});return function(a,l,c,h,b,d){return g.apply(this,arguments)}}();w._singleExport=function(){var g=t._asyncToGenerator(function*(a,l,c,h,b,d,k){z.getBBox(n,c,h,l);a=new y(n[0],n[1],n[2],n[3],a.spatialReference);return[yield this._export(a,l[0],l[1],b,d,k)]});return function(a,l,c,h,b,d,k){return g.apply(this,arguments)}}();w._tiledExport=function(g,a,l,c,h){var b=G.create({size:a,spatialReference:g.spatialReference,scales:[g.scale]});const d=new I(b);b=d.getTileCoverage(g);
if(!b)return null;const k=[];b.forEach((u,v,r,q)=>{A.set(u,v,r,q);d.getTileBounds(n,A);u=new y(n[0],n[1],n[2],n[3],g.spatialReference);k.push(this._export(u,a,a,l,c,h))});return Promise.all(k)};t._createClass(x,[{key:"updating",get:function(){return!this.destroyed&&null!==this._imagePromise}}]);return x}(e);f.__decorate([m.property()],e.prototype,"_imagePromise",void 0);f.__decorate([m.property()],e.prototype,"bitmaps",void 0);f.__decorate([m.property()],e.prototype,"container",void 0);f.__decorate([m.property()],
e.prototype,"fetchSource",void 0);f.__decorate([m.property()],e.prototype,"hidpi",void 0);f.__decorate([m.property()],e.prototype,"imageMaxWidth",void 0);f.__decorate([m.property()],e.prototype,"imageMaxHeight",void 0);f.__decorate([m.property()],e.prototype,"imageRotationSupported",void 0);f.__decorate([m.property()],e.prototype,"imageNormalizationSupported",void 0);f.__decorate([m.property()],e.prototype,"requestUpdate",void 0);f.__decorate([m.property()],e.prototype,"updating",null);return e=f.__decorate([D.subclass("esri.views.2d.layers.support.ExportStrategy")],
e)});