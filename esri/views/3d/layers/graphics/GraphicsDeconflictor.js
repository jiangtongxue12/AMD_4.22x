// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/tslib.es6 ../../../../core/Handles ../../../../core/MapUtils ../../../../core/maybe ../../../../core/watchUtils ../../../../core/Logger ../../../../core/accessorSupport/ensureType ../../../../core/arrayUtils ../../../../core/has ../../../../core/accessorSupport/set ../../../../core/accessorSupport/decorators/subclass ../../../../chunks/boundedPlane ./Deconflictor ./LabelDeconflictor ../../../support/Scheduler".split(" "),
function(g,m,p,q,r,n,t,z,A,B,C,D,u,v,h,w,x){function k(e){e=e.layer;return!(!e||!e.featureReduction||"selection"!==e.featureReduction.type)}function y(e){(e=e.graphics3DGraphics)&&e.forEach(f=>f.clearVisibilityFlag(3))}g.GraphicsDeconflictor=function(e){function f(){var a=e.apply(this,arguments)||this;a._handles=new q;a._contexts=new Map;a._viewState=new h.DeconflictorViewState;a.visibilityGroup=0;a._iconMarginFactor=-.1;return a}m._inheritsLoose(f,e);var d=f.prototype;d.initialize=function(){this._handles.add([this.view.watch("state.camera",
()=>{this.updateViewState();this.setDirty()}),this.view.watch("map.ground.opacity",(a,b)=>{1!==a&&1!==b||this.setDirty()}),t.init(this.view,"slicePlane",()=>{this.updateSlicePlane();this.slicePlaneChanged()})]);this._frameTask=this.view.resourceController.scheduler.registerTask(x.TaskPriority.GRAPHICS_DECONFLICTOR,this);this._labels=new w.LabelDeconflictor({view:this.view,parent:this})};d.destroy=function(){this._labels.destroy();this._labels=null;this._handles.destroy();this._handles=null;this._frameTask&&
(this._frameTask.remove(),this._frameTask=null)};d.setDirty=function(){0<this._contexts.size&&(e.prototype.setDirty.call(this),this._labels.setDirty())};d.runTask=function(a){e.prototype.runTask.call(this,a);this.running||this._labels.setDirty()};d.setInitialIconVisibilityFlag=function(a,b){a=!(this._graphicSupportsDeconfliction(b)&&k(a));b.setVisibilityFlag(3,a,0)};d.updateViewState=function(){this.view&&this.view.state&&(this._viewState.camera.copyFrom(this.view.state.camera),this.updateSlicePlane())};
d.updateSlicePlane=function(){const a=this.view?this.view.slicePlane:null;n.isSome(a)&&v.transform(a,this._viewState.camera.viewMatrix,this._viewState.slicePlane);this._viewState.slicePlaneEnabled=n.isSome(a)};d.slicePlaneChanged=function(){r.someMap(this._contexts,(a,b)=>b.symbolCreationContext.slicePlaneEnabled)&&this.setDirty()};d.addGraphicsOwner=function(a){let b=this._contexts.get(a);null==b&&(b=new Map,this._contexts.set(a,b),this.setDirty());return{addGraphic:c=>this.addGraphic(a,b,c),removeGraphic:c=>
this.removeGraphic(b,c),labelingInfoChange:()=>this._labels.enabledChanged(a,b),featureReductionChange:()=>this.enabledChanged(a,b),slicePlaneEnabledChange:()=>this._slicePlaneEnabledChanged(a,b),clear:()=>b.forEach(c=>this.removeGraphic(b,c.graphics3DGraphic))}};d.removeGraphicsOwner=function(a){const b=this._contexts.get(a);b&&(b.forEach(c=>this.removeGraphic(b,c.graphics3DGraphic)),this._contexts.delete(a),this.setDirty())};d.addGraphic=function(a,b,c){const l=c.graphic.uid;c=new h.DeconflictorGraphic(c,
a.symbolCreationContext.slicePlaneEnabled);b.set(l,c);k(a)&&this.addToActiveGraphics(c);a.labelsEnabled&&this._labels.addToActiveGraphics(c)};d.removeGraphic=function(a,b){b=b.graphic.uid;const c=a.get(b);c&&(this.removeFromActiveGraphics(c),this._labels.removeFromActiveGraphics(c),a.delete(b),this.setDirty())};d.enabledChanged=function(a,b){const c=k(a);c||y(a);this.modifyGraphics(b,c)};d._slicePlaneEnabledChanged=function(a,b){const c=a.symbolCreationContext.slicePlaneEnabled;b.forEach(l=>l.slicePlaneEnabled=
c);this.setDirty()};d.getGraphicsLayers=function(a){return a.graphics};d._graphicSupportsDeconfliction=function(a){if(a.isDraped)return!1;a=a.graphics;if(!a||!a.length)return!1;for(const b of a)if(this.layerSupportsDeconfliction(b))return!0;return!1};m._createClass(f,[{key:"labels",get:function(){return this._labels}},{key:"viewState",get:function(){return this._viewState}},{key:"iconMarginFactor",get:function(){return this._iconMarginFactor},set:function(a){this._iconMarginFactor=a;this.setDirty()}}]);
return f}(h.Deconflictor);g.GraphicsDeconflictor=p.__decorate([u.subclass("esri.views.3d.layers.graphics.GraphicsDeconflictor")],g.GraphicsDeconflictor);Object.defineProperty(g,"__esModule",{value:!0})});