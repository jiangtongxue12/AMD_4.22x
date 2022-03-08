// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../symbols ../../../core/Evented ../../../core/Handles ../../../core/lang ../../../core/maybe ../../../core/watchUtils ../../../core/accessorSupport/decorators/property ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/subclass ../../../layers/GraphicsLayer ./drawUtils ./layerUtils ./input/GraphicMoverEvents ../../input/InputManager ../../interactive/GraphicManipulator ../../support/screenUtils ../../../symbols/SimpleMarkerSymbol ../../../symbols/SimpleLineSymbol ../../../symbols/SimpleFillSymbol".split(" "),
function(z,k,h,E,A,F,r,B,n,N,G,H,C,I,l,q,J,t,u,K,L){h=function(D){function v(a){a=D.call(this,a)||this;a._activeGraphic=null;a._indicators=[];a._dragEvent=null;a._handles=new A;a._hoverGraphic=null;a._initialDragGeometry=null;a._viewHandles=new A;a._manipulators=[];a._layerViews=null;a.type="graphic-mover";a.callbacks={onGraphicClick(){},onGraphicDoubleClick(){},onGraphicMoveStart(){},onGraphicMove(){},onGraphicMoveStop(){},onGraphicPointerOver(){},onGraphicPointerOut(){},onGraphicPointerDown(){},
onGraphicPointerUp(){}};a.enableMoveAllGraphics=!1;a.graphics=[];a.indicatorsEnabled=!0;a.layer=new H({listMode:"hide",internal:!0,title:"GraphicMover highlight layer"});a.view=null;return a}z._inheritsLoose(v,D);var f=v.prototype;f.initialize=function(){I.addUniqueLayer(this.view,this.layer);this.refresh();this._handles.add([B.watch(this,["graphics","graphics.length"],()=>this.refresh()),B.whenOnce(this,"view.ready",()=>{this._viewHandles.add([this.view.on("immediate-click",a=>this._clickHandler(a),
q.ViewEventPriorities.TOOL),this.view.on("double-click",a=>this._doubleClickHandler(a),q.ViewEventPriorities.TOOL),this.view.on("pointer-down",a=>this._pointerDownHandler(a),q.ViewEventPriorities.TOOL),this.view.on("pointer-move",a=>this._pointerMoveHandler(a),q.ViewEventPriorities.TOOL),this.view.on("pointer-up",a=>this._pointerUpHandler(a),q.ViewEventPriorities.TOOL),this.view.on("drag",a=>this._dragHandler(a),q.ViewEventPriorities.TOOL),this.view.on("key-down",a=>this._keyDownHandler(a),q.ViewEventPriorities.TOOL)])})])};
f.destroy=function(){var a;this._removeIndicators();null==(a=this.view.map)?void 0:a.remove(this.layer);this.layer.destroy();this.reset();this._manipulators.forEach(b=>b.destroy());this._manipulators=null;this._handles=r.destroyMaybe(this._handles);this._viewHandles=r.destroyMaybe(this._viewHandles)};f.refresh=function(){this._setUpIndicators();this._setUpManipulators();this._syncLayerViews()};f.reset=function(){this._dragEvent=this._hoverGraphic=this._activeGraphic=null};f.updateGeometry=function(a,
b){if(a=this.graphics[a])a.set("geometry",b),this._setUpIndicators()};f._clickHandler=function(a){const b=this._findTargetGraphic(t.createScreenPointFromEvent(a));b&&(a=new l.GraphicClickEvent(b,this.graphics.indexOf(b),a.x,a.y,a),this.emit("graphic-click",a),this.callbacks.onGraphicClick&&this.callbacks.onGraphicClick(a))};f._doubleClickHandler=function(a){const b=this._findTargetGraphic(t.createScreenPointFromEvent(a));b&&(a=new l.GraphicDoubleClickEvent(b,this.graphics.indexOf(b),a.x,a.y,a),this.emit("graphic-double-click",
a),this.callbacks.onGraphicDoubleClick&&this.callbacks.onGraphicDoubleClick(a))};f._pointerDownHandler=function(a){const b=this._findTargetGraphic(t.createScreenPointFromEvent(a));if(b){this._activeGraphic=b;const {x:c,y:d}=a;a=new l.GraphicPointerDownEvent(b,this.graphics.indexOf(b),c,d,a);this.emit("graphic-pointer-down",a);this.callbacks.onGraphicPointerDown&&this.callbacks.onGraphicPointerDown(a)}else this._activeGraphic=null};f._pointerUpHandler=function(a){if(this._activeGraphic){const {x:b,
y:c}=a,d=this.graphics.indexOf(this._activeGraphic);a=new l.GraphicPointerUpEvent(this._activeGraphic,d,b,c,a);this.emit("graphic-pointer-up",a);this.callbacks.onGraphicPointerUp&&this.callbacks.onGraphicPointerUp(a)}};f._pointerMoveHandler=function(a){if(!this._dragEvent){var b=this._findTargetGraphic(t.createScreenPointFromEvent(a));if(b){const {x:d,y:e}=a;if(this._hoverGraphic){if(this._hoverGraphic===b)return;var c=this.graphics.indexOf(this._hoverGraphic);c=new l.GraphicPointerOutEvent(this.graphics[c],
c,d,e,a);this._hoverGraphic=null;this.emit("graphic-pointer-out",c);this.callbacks.onGraphicPointerOut&&this.callbacks.onGraphicPointerOut(c)}c=this.graphics.indexOf(b);a=new l.GraphicPointerOverEvent(b,c,d,e,a);this._hoverGraphic=b;this.emit("graphic-pointer-over",a);this.callbacks.onGraphicPointerOver&&this.callbacks.onGraphicPointerOver(a)}else if(this._hoverGraphic){const {x:d,y:e}=a;b=this.graphics.indexOf(this._hoverGraphic);a=new l.GraphicPointerOutEvent(this.graphics[b],b,d,e,a);this._hoverGraphic=
null;this.emit("graphic-pointer-out",a);this.callbacks.onGraphicPointerOut&&this.callbacks.onGraphicPointerOut(a)}}};f._dragHandler=function(a){if(("start"===a.action||this._dragEvent)&&this._activeGraphic&&this._activeGraphic.geometry){"start"===a.action&&this._removeIndicators();a.stopPropagation();var {action:b,x:c,y:d}=a,e=this.graphics.indexOf(this._activeGraphic),g=this._dragEvent?c-this._dragEvent.x:0,m=this._dragEvent?d-this._dragEvent.y:0,w=c-a.origin.x,x=d-a.origin.y,p="start"===b?this._activeGraphic.geometry:
this._initialDragGeometry,M=C.cloneMove(p,w,x,this.view);this._activeGraphic.geometry=M;this.enableMoveAllGraphics&&this.graphics.forEach(y=>{y!==this._activeGraphic&&(y.geometry=C.cloneMove(y.geometry,g,m,this.view))});this._dragEvent=a;"start"===b?(this._initialDragGeometry=F.clone(p),e=new l.GraphicMoveStartEvent(this._activeGraphic,this.graphics,e,c,d,g,m,w,x,a),this.emit("graphic-move-start",e),this.callbacks.onGraphicMoveStart&&this.callbacks.onGraphicMoveStart(e),e.defaultPrevented&&this._activeGraphic.set("geometry",
p)):"update"===b?(e=new l.GraphicMoveEvent(this._activeGraphic,this.graphics,e,c,d,g,m,w,x,a),this.emit("graphic-move",e),this.callbacks.onGraphicMove&&this.callbacks.onGraphicMove(e),e.defaultPrevented&&(this._activeGraphic.geometry=p)):(p=new l.GraphicMoveStopEvent(this._activeGraphic,this.graphics,e,c,d,g,m,w,x,a),this._activeGraphic=this._dragEvent=null,this._setUpIndicators(),this.emit("graphic-move-stop",p),this.callbacks.onGraphicMoveStop&&this.callbacks.onGraphicMoveStop(p),p.defaultPrevented&&
(this.graphics[e].set("geometry",this._initialDragGeometry),this._setUpIndicators()),this._initialDragGeometry=null)}};f._keyDownHandler=function(a){"a"!==a.key&&"d"!==a.key&&"n"!==a.key||"moving"!==this.state||a.stopPropagation()};f._findTargetGraphic=function(a){const b=this.view.toMap(a);let c=null,d=Number.MAX_VALUE;this._syncLayerViews();const e=this._layerViews.flatMap(g=>"graphicsViews"in g?Array.from(g.graphicsViews(),m=>m.hitTest(b)).flat():g.graphicsView.hitTest(b)).filter(g=>-1<this.graphics.indexOf(g));
if(e.length)return e[0];this._manipulators.forEach(g=>{const m=g.intersectionDistance(a);r.isSome(m)&&m<d&&(d=m,c=g.graphic)});return c};f._syncLayerViews=function(){this._layerViews=[];const a=new Set;for(const b of this.graphics){const c=this.view.allLayerViews.find(d=>{d=d.layer;return"sublayers"in d&&r.isSome(d.sublayers)&&!!d.sublayers.find(e=>e===b.layer)||d===b.layer});c&&a.add(c)}this._layerViews=[...a]};f._setUpManipulators=function(){const {graphics:a,view:b}=this;this._manipulators.forEach(c=>
c.destroy());this._manipulators=null!=a&&a.length?a.map(c=>new J.GraphicManipulator({graphic:c,view:b})):[]};f._setUpIndicators=function(){var a;this._removeIndicators();this.indicatorsEnabled&&(this._indicators=(null==(a=this.graphics)?void 0:a.map(b=>{const c=b.clone();c.symbol=this._getSymbolForIndicator(b);return c}))||[],this.layer.addMany(this._indicators))};f._removeIndicators=function(){this._indicators.length&&(this.layer.removeMany(this._indicators),this._indicators.forEach(a=>a.destroy()),
this._indicators=[])};f._getSymbolForIndicator=function(a){if(r.isNone(a.symbol))return null;switch(a.symbol.type){case "cim":return new u({style:"circle",size:12,color:[0,0,0,0],outline:{color:[255,127,0,1],width:1}});case "picture-marker":{const {xoffset:b,yoffset:c,height:d,width:e}=a.symbol;return new u({xoffset:b,yoffset:c,size:d===e?e:Math.max(d,e),style:"square",color:[0,0,0,0],outline:{color:[255,127,0,1],width:1}})}case "simple-marker":{const {xoffset:b,yoffset:c,size:d,style:e}=a.symbol;
return new u({xoffset:b,yoffset:c,style:"circle"===e?"circle":"square",size:d+2,color:[0,0,0,0],outline:{color:[255,127,0,1],width:1}})}case "simple-fill":return new L({color:[0,0,0,0],outline:{style:"dash",color:[255,127,0,1],width:1}});case "simple-line":return new K({color:[255,127,0,1],style:"dash",width:1});case "text":{const {xoffset:b,yoffset:c}=a.symbol;return new u({xoffset:b,yoffset:c,size:12,color:[0,0,0,0],outline:{color:[255,127,0,1],width:1}})}default:return null}};z._createClass(v,
[{key:"state",get:function(){const a=!!this.get("view.ready"),b=!!this.get("graphics.length"),c=this._activeGraphic;return a&&b?c?"moving":"active":a?"ready":"disabled"}}]);return v}(E.EventedAccessor);k.__decorate([n.property()],h.prototype,"_activeGraphic",void 0);k.__decorate([n.property({readOnly:!0})],h.prototype,"type",void 0);k.__decorate([n.property()],h.prototype,"callbacks",void 0);k.__decorate([n.property()],h.prototype,"enableMoveAllGraphics",void 0);k.__decorate([n.property()],h.prototype,
"graphics",void 0);k.__decorate([n.property()],h.prototype,"indicatorsEnabled",void 0);k.__decorate([n.property()],h.prototype,"layer",void 0);k.__decorate([n.property({readOnly:!0})],h.prototype,"state",null);k.__decorate([n.property()],h.prototype,"view",void 0);return h=k.__decorate([G.subclass("esri.views.draw.support.GraphicMover")],h)});