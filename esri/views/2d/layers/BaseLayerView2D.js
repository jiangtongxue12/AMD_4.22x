// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/accessorSupport/decorators/property ../../../core/arrayUtils ../../../core/has ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/subclass ../../../geometry/support/aaBoundingRect ../tiling/PagedTileQueue ../tiling/TileInfoView ../tiling/TileKey ../tiling/TileQueue ../tiling/TileStrategy ./LayerView2D ./support/Display ../../layers/LayerView ../../layers/RefreshableLayerView".split(" "),
function(k,r,u,h,H,I,x,y,J,z,K,L,M,A,B,C,D){const t=new Set,l=[],m=[];let E=function(n,f,c,a,b,g,d,p=[0,0],e=y.create()){this.id=n;this.level=f;this.row=c;this.col=a;this.world=b;this.resolution=g;this.scale=d;this.coords=p;this.bounds=e};h=function(n){function f(a){a=n.call(this,a)||this;a._tileMap=new Map;a.container=new B.Display(k._assertThisInitialized(a));a.layer=null;a.tiles=[];return a}k._inheritsLoose(f,n);var c=f.prototype;c.attach=function(){};c.detach=function(){};c.requestRender=function(){this.container.requestRender()};
c.tilesChanged=function(a,b){};c.doRefresh=function(){var a=k._asyncToGenerator(function*(){});return function(){return a.apply(this,arguments)}}();c.isUpdating=function(){return!1};c.update=function(a){var b=this._tileInfoView;const g=this.tiles;if(b){a=b.getTileCoverage(a.state,0);const {spans:p,lodInfo:e}=a;({level:a}=e);if(p.length)for(const {row:v,colFrom:F,colTo:G}of p)for(b=F;b<=G;b++){var d=e.normalizeCol(b);const w=e.getWorldForColumn(b),q=`${a}/${v}/${d}/${w}`;this._tileMap.has(q)||(d=new E(q,
a,v,d,w,e.resolution,e.scale),e.getTileCoords(d.coords,d,!1),e.getTileBounds(d.bounds,d,!0),this._tileMap.set(q,d),g.push(d),l.push(d));t.add(q)}}for(a=g.length-1;0<=a;a--)b=g[a],t.has(b.id)||(g.splice(a,1),m.push(b),this._tileMap.delete(b.id));if(l.length||m.length)this.tilesChanged(l,m),l.length=m.length=0;t.clear();this.requestRender()};c.moveStart=function(){};c.viewChange=function(){this.requestUpdate()};c.moveEnd=function(){};k._createClass(f,[{key:"_tileInfoView",get:function(){const a=this.layer&&
this.layer.tileInfo;return a?new z(a):null}}]);return f}(D.RefreshableLayerView(A.LayerView2DMixin(C)));r.__decorate([u.property()],h.prototype,"_tileInfoView",null);r.__decorate([u.property()],h.prototype,"layer",void 0);return h=r.__decorate([x.subclass("esri.views.2d.layers.BaseLayerView2D")],h)});