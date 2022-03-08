// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/Accessor ../../core/Error ../../core/Handles ../../core/maybe ../../core/promiseUtils ../../core/reactiveUtils ../../core/accessorSupport/decorators/property ../../core/arrayUtils ../../core/has ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass ../../views/interactive/interactiveToolUtils".split(" "),function(e,m,f,v,w,x,a,k,n,h,A,B,C,y,z){e.InteractiveToolViewModel=function(t){function p(b){var c=
t.call(this,b)||this;c.analysis=null;c.tool=null;c._baseHandles=new x;c._loggedUnsupportedErrorOnce=!1;c._reconnectViewTask=null;c._isAnalysisOwner=!0;c._parentChangeFromReconnect=!1;c._toolCreationTask=null;b&&null!=b.visible&&(c.visible=b.visible);return c}m._inheritsLoose(p,t);var g=p.prototype;g.initialize=function(){this._baseHandles.add([n.react(()=>({ready:a.isSome(this.view)&&this.view.ready,supported:this.supported}),({ready:b,supported:c})=>{!b||c||this._loggedUnsupportedErrorOnce||(this.logError(this.unsupportedErrorMessage),
this._loggedUnsupportedErrorOnce=!0);this._scheduleViewReconnect()},n.syncAndInitial),n.react(()=>a.isSome(this.analysis)?this.analysis.parent:null,b=>{this._isAnalysisOwner&&a.isSome(b)&&b!==this.view&&(this._isAnalysisOwner=!1);this._parentChangeFromReconnect||this._scheduleViewReconnect()},{sync:!0})])};g.destroy=function(){this.removeTool();this._reconnectViewTask=a.abortMaybe(this._reconnectViewTask);this._disconnectFromView(this.view);this.view=null;this._baseHandles=a.destroyMaybe(this._baseHandles);
this._isAnalysisOwner&&a.isSome(this.analysis)&&(this.analysis.destroy(),this._set("analysis",null))};g.onConnectToAnalysisView=function(b){};g.onDisconnectFromAnalysisView=function(){};g.createTool=function(){var b=m._asyncToGenerator(function*(){var c=this;a.isSome(this.tool)&&this.tool.rejectCreation("Tool creation was interrupted by another tool being created.");this.removeTool();if(a.isNone(this.view)||!this.supported)return Promise.reject(new w("tool:create","The view does not support the tool.",
this.unsupportedErrorMessage));this._toolCreationTask=k.createTask(function(){var r=m._asyncToGenerator(function*(q){yield a.unwrap(c.view).whenReady();k.throwIfAborted(q,"Tool creation was interrupted by another tool being created.");var l=c.createToolParams();const u=z.evaluateToolConstructorArguments(l.constructorArguments);a.isSome(c.analysis)&&(u.analysis=c.analysis);l=new l.toolConstructor({visible:c.visible,...u,view:c.view});yield l.whenCreationStarted();k.isAborted(q)&&l.rejectCreation("Tool creation was interrupted by another tool being created.");
k.throwIfAborted(q,"Tool creation was interrupted by another tool being created.");return l});return function(q){return r.apply(this,arguments)}}());const d=yield this._toolCreationTask.promise;this._set("tool",d);d.completed?this.view.tools.add(d):(this.view.addAndActivateTool(d),n.reactTruthy(()=>d.completed,()=>{d.active&&a.isSome(this.view)&&(this.view.activeTool=null)},{initial:!0,once:!0}))});return function(){return b.apply(this,arguments)}}();g.removeTool=function(){this._toolCreationTask=
a.abortMaybe(this._toolCreationTask);a.isNone(this.tool)||(a.isSome(this.view)&&this.view.tools&&this.view.tools.remove(this.tool),this.tool.rejectCreation("Rejecting creation because tool is removed."),this.tool.destroyed||this.tool.destroy(),this._set("tool",null))};g._scheduleViewReconnect=function(){this._reconnectViewTask=a.abortMaybe(this._reconnectViewTask);this._reconnectViewTask=k.createTask(b=>this._reconnectView(b))};g._reconnectView=function(){var b=m._asyncToGenerator(function*(c){var d=
a.isSome(this.view)&&this.view.ready&&this.supported;if(!k.isAborted(c)&&(this._disconnectFromView(this.view),d&&!a.isNone(this.view)&&(d=this.view,a.isSome(this.analysis)))){if(this._isAnalysisOwner){if(a.isSome(this.analysis.parent)){this.logError("expected owned analysis to have null parent when connecting to view");return}this._parentChangeFromReconnect=!0;d.analyses.add(this.analysis);this._parentChangeFromReconnect=!1}const r=yield d.whenAnalysisView(this.analysis);if(k.isAborted(c))this._disconnectFromView(d);
else if(a.isNone(r))this.logError("Unable to retrieve analysis view for analysis. Analysis may not be part of the scene.");else this.onConnectToAnalysisView(r)}});return function(c){return b.apply(this,arguments)}}();g._disconnectFromView=function(b){a.isSome(this.analysis)&&(a.isSome(b)&&this._isAnalysisOwner&&(this._parentChangeFromReconnect=!0,b.analyses.remove(this.analysis),this._parentChangeFromReconnect=!1),this.onDisconnectFromAnalysisView())};g.logError=function(...b){this.logger.error(...b)};
m._createClass(p,[{key:"supported",get:function(){return a.isNone(this.view)||this.view.type===this.supportedViewType}},{key:"view",get:function(){return this._get("view")},set:function(b){b!==this.view&&(this._disconnectFromView(this.view),this.removeTool(),this._set("view",b),this._baseHandles.remove("tools"),a.isNone(b)||this._baseHandles.add(b.tools.on("change",c=>{if(this.tool)for(const d of c.removed)if(this.tool===d){d.destroyed||d.destroy();this._set("tool",null);break}}),"tools"))}},{key:"visible",
set:function(b){this._set("visible",b);a.isSome(this.tool)&&(this.tool.visible=b);b||(this._toolCreationTask=a.abortMaybe(this._toolCreationTask))}},{key:"active",get:function(){return a.isSome(this._toolCreationTask)&&!this._toolCreationTask.finished||a.isSome(this.tool)&&this.tool.active}},{key:"disabled",get:function(){return a.isNone(this.view)||!this.view.ready||!this.supported}},{key:"creatingTool",get:function(){return a.isSome(this._toolCreationTask)&&!this._toolCreationTask.finished}}]);
return p}(v);f.__decorate([h.property({constructOnly:!0})],e.InteractiveToolViewModel.prototype,"analysis",void 0);f.__decorate([h.property({constructOnly:!0})],e.InteractiveToolViewModel.prototype,"tool",void 0);f.__decorate([h.property()],e.InteractiveToolViewModel.prototype,"supported",null);f.__decorate([h.property({value:null})],e.InteractiveToolViewModel.prototype,"view",null);f.__decorate([h.property({type:Boolean,value:!0})],e.InteractiveToolViewModel.prototype,"visible",null);f.__decorate([h.property()],
e.InteractiveToolViewModel.prototype,"active",null);f.__decorate([h.property()],e.InteractiveToolViewModel.prototype,"disabled",null);f.__decorate([h.property()],e.InteractiveToolViewModel.prototype,"_toolCreationTask",void 0);f.__decorate([h.property({readOnly:!0})],e.InteractiveToolViewModel.prototype,"creatingTool",null);e.InteractiveToolViewModel=f.__decorate([y.subclass("esri.widgets.support.InteractiveToolViewModel")],e.InteractiveToolViewModel);Object.defineProperty(e,"__esModule",{value:!0})});