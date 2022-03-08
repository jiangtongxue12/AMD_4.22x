// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/Accessor ../../core/HandleOwner ../../core/accessorSupport/decorators/aliasOf ../../core/arrayUtils ../../core/has ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/property ../../core/accessorSupport/decorators/subclass".split(" "),function(h,c,b,l,e,n,p,q,d,m){b=function(k){function f(a){a=k.call(this,a)||this;a.arcade=null;a.config=null;a.description=null;a.feature=null;a.label=null;a.state=
null;a.visibilityExpression=null;return a}h._inheritsLoose(f,k);f.prototype._dirtyEvaluatedVisibility=function(){this.visibilityExpression&&this.notifyChange("evaluatedVisibility")};h._createClass(f,[{key:"compiledFunc",get:function(){const {arcade:a}=this;return a&&a.arcadeUtils.createFunction(this.visibilityExpression)}},{key:"evaluatedVisibility",get:function(){const a=this.compiledFunc;if(a){var {arcade:g}=this;return g.arcadeUtils.executeFunction(a,g.arcadeUtils.createExecContext(this.feature))}}},
{key:"inputFields",get:function(){return this._get("inputFields")},set:function(a){this.handles.removeAll();a&&this.handles.add(a.map(g=>g.watch("visible",this._dirtyEvaluatedVisibility)));this._set("inputFields",a)}},{key:"visible",get:function(){return!1!==this.evaluatedVisibility&&this.inputFields&&this.inputFields.some(a=>a.visible)}}]);return f}(l.HandleOwnerMixin(b));c.__decorate([d.property()],b.prototype,"arcade",void 0);c.__decorate([d.property()],b.prototype,"compiledFunc",null);c.__decorate([d.property()],
b.prototype,"config",void 0);c.__decorate([d.property()],b.prototype,"evaluatedVisibility",null);c.__decorate([e.aliasOf("config.description")],b.prototype,"description",void 0);c.__decorate([d.property()],b.prototype,"feature",void 0);c.__decorate([d.property()],b.prototype,"inputFields",null);c.__decorate([e.aliasOf("config.label")],b.prototype,"label",void 0);c.__decorate([e.aliasOf("config.state")],b.prototype,"state",void 0);c.__decorate([e.aliasOf("config.visibilityExpression")],b.prototype,
"visibilityExpression",void 0);c.__decorate([d.property()],b.prototype,"visible",null);return b=c.__decorate([m.subclass("esri.widgets.FeatureForm.InputFieldGroup")],b)});