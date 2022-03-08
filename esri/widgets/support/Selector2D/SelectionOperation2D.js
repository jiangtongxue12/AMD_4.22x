// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../symbols ../../../core/Collection ../../../core/Evented ../../../core/Handles ../../../core/accessorSupport/decorators/property ../../../core/arrayUtils ../../../core/has ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/subclass ../../../layers/GraphicsLayer ../../Sketch/SketchViewModel ./selectorUtils ../../../symbols/SimpleFillSymbol ../../../symbols/SimpleLineSymbol ../../../symbols/SimpleMarkerSymbol".split(" "),
function(m,e,d,v,w,x,f,F,G,H,y,z,A,B,C,D,E){d=function(u){function n({candidates:b,options:c,view:k}){var a=u.call(this)||this;a._activeOptions=null;a._dashedFillSymbol=new C({color:[0,0,0,0],outline:{style:"dash",color:[12,207,255],width:2}});a._dashedLineSymbol=new D({style:"dash",color:[12,207,255],width:2});a._defaultOptions={createTool:"rectangle",createOptions:null,selectionOptions:{overlaps:!0,intersects:!0,contains:!1}};a._completed=!1;a._handles=new x;a._sketchViewModel=new A;a._sketchGraphicsLayer=
new z({listMode:"hide",internal:!0});a._transparentPointSymbol=new E({color:[0,0,0,0],outline:{style:"none",width:0}});a.candidates=null;a.geometry=null;a.options=null;a.selection=new v;a.view=null;a.candidates=b;a.options=c;a.view=k;const {_dashedFillSymbol:p,_dashedLineSymbol:q,_sketchViewModel:l,_sketchGraphicsLayer:r,_transparentPointSymbol:g}=m._assertThisInitialized(a);l.set({layer:r,view:a.view,activePointSymbol:g,activeLineSymbol:q,activeVertexSymbol:g,activeFillSymbol:p,pointSymbol:g,polygonSymbol:p,
polylineSymbol:q,vertexSymbol:g});a._handles.add([l.on("create",t=>a._onSketchEvent(t)),l.on(["undo","redo"],t=>a._onSketchEvent(t))]);return a}m._inheritsLoose(n,u);var h=n.prototype;h.initialize=function(){this._load()};h.destroy=function(){this._handles.destroy();this._handles=null};h.cancel=function(){this._sketchViewModel.cancel()};h._load=function(){var b=m._asyncToGenerator(function*(){yield this.view.whenReady();const {options:c}=this,{createTool:k,createOptions:a}=this._activeOptions={...this._defaultOptions,
...c};this._sketchViewModel.create(k,a)});return function(){return b.apply(this,arguments)}}();h._onSketchEvent=function(b){const c="create"===b.type?b.graphic:b.graphics[0];this._processSelectionGeometry((null==c?void 0:c.geometry)||null,"create"===b.type&&"complete"===b.state,"create"===b.type&&"cancel"===b.state)};h._processSelectionGeometry=function(b,c,k){this._set("geometry",b);if(c||k)this._completed=!0;if(k)this._onComplete([],!0);else{var {_activeOptions:a,candidates:p,selection:q,view:l}=
this;B.updateSelection({selector:b,candidates:p,currentSelection:q,options:a.selectionOptions,view:l}).then(({added:r,removed:g})=>{c?this._onComplete(this.selection.toArray(),!1):(r.length||g.length)&&this.emit("selection-change",{added:r,removed:g,type:"selection-change"})})}};h._onComplete=function(b,c){this._handles.removeAll();this.notifyChange("state");this.emit("complete",{aborted:c,selection:b,type:"complete"})};m._createClass(n,[{key:"state",get:function(){const {_completed:b,_sketchViewModel:{state:c}}=
this;return b?"complete":"active"===c?"active":"disabled"}}]);return n}(w.EventedAccessor);e.__decorate([f.property()],d.prototype,"_completed",void 0);e.__decorate([f.property()],d.prototype,"candidates",void 0);e.__decorate([f.property({readOnly:!0})],d.prototype,"geometry",void 0);e.__decorate([f.property()],d.prototype,"options",void 0);e.__decorate([f.property({readOnly:!0})],d.prototype,"selection",void 0);e.__decorate([f.property({readOnly:!0})],d.prototype,"state",null);e.__decorate([f.property({value:null})],
d.prototype,"view",void 0);return d=e.__decorate([y.subclass("esri.widgets.support.Selector2D.SelectionOperation2D")],d)});