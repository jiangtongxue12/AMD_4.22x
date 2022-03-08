// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../Graphic ../../../core/Collection ../../../core/accessorSupport/decorators/property ../../../core/arrayUtils ../../../core/has ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/subclass ./LayerView2D ./graphics/GraphicContainer ./graphics/GraphicsView2D ../../layers/LayerView".split(" "),function(g,k,m,n,p,f,x,y,q,r,t,u,v){const w={remove(){},pause(){},resume(){}};f=function(l){function h(){return l.apply(this,
arguments)||this}g._inheritsLoose(h,l);var b=h.prototype;b.initialize=function(){this.graphicsView=new u({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this.layer.graphics,container:new t(this.view.featuresTilingScheme)})};b.attach=function(){this.container.addChild(this.graphicsView.container);this.handles.add(this.layer.on("graphic-update",this.graphicsView.graphicUpdateHandler),"graphicslayerview2d")};b.detach=function(){this.container.removeAllChildren();this.graphicsView.destroy();
this.handles.remove("graphicslayerview2d")};b.hitTest=function(){var a=g._asyncToGenerator(function*(d){return this.graphicsView?this.graphicsView.hitTest(d):null});return function(d){return a.apply(this,arguments)}}();b.fetchPopupFeatures=function(){var a=g._asyncToGenerator(function*(d){if(this.graphicsView)return this.graphicsView.hitTest(d).filter(c=>!!c.popupTemplate)});return function(d){return a.apply(this,arguments)}}();b.update=function(a){this.graphicsView.processUpdate(a)};b.moveStart=
function(){};b.viewChange=function(){this.graphicsView.viewChange()};b.moveEnd=function(){};b.isUpdating=function(){return!this.graphicsView||this.graphicsView.updating};b.highlight=function(a){var d;let c;"number"===typeof a?c=[a]:a instanceof m?c=[a.uid]:Array.isArray(a)&&0<a.length?c="number"===typeof a[0]?a:a.map(e=>e&&e.uid):n.isCollection(a)&&0<a.length&&(c=a.map(e=>e&&e.uid).toArray());c=null==(d=c)?void 0:d.filter(e=>null!=e);if(!c.length)return w;this.graphicsView.addHighlight(c);return{remove:()=>
this.graphicsView.removeHighlight(c)}};b.queryGraphics=function(){return Promise.resolve(this.graphicsView.graphics)};return h}(r.LayerView2DMixin(v));k.__decorate([p.property()],f.prototype,"graphicsView",void 0);return f=k.__decorate([q.subclass("esri.views.2d.layers.GraphicsLayerView2D")],f)});