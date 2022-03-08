// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/maybe ../../core/Logger ../../core/accessorSupport/ensureType ../../core/arrayUtils ../../core/has ../../core/accessorSupport/set ../../core/accessorSupport/decorators/subclass ./CreateWorkflowData ./Edits ./Workflow ./workflowUtils".split(" "),function(e,z,w,r,F,G,H,I,A,B,C,D,f){var t;r=t=function(x){function q(c){c=x.call(this,c)||this;c.type="create";return c}e._inheritsLoose(q,x);q.create=function(c,u,a){c=new t({data:new B({edits:new C.Edits,
viewModel:c}),onCommit:function(){var h=e._asyncToGenerator(function*(b){yield a(b.creationInfo.layer,{addFeatures:[b.edits.feature]})});return function(b){return h.apply(this,arguments)}}()});c._set("steps",this._createWorkflowSteps(c,u));return c};q._createWorkflowSteps=function(c,u="awaiting-feature-creation-info"){const {data:a,handles:h}=c;c=f.createWorkflowSteps(["awaiting-feature-creation-info","awaiting-feature-to-create","editing-new-feature"],u,{"awaiting-feature-creation-info":()=>({id:"awaiting-feature-creation-info",
setUp(){var b=this;return e._asyncToGenerator(function*(){a.creationInfo=null;a.edits.feature=null;a.viewModel.featureTemplatesViewModel.select(null);h.add(a.viewModel.featureTemplatesViewModel.on("select",({item:d})=>{a.creationInfo={layer:d.layer,template:d.template};a.viewModel.activeWorkflow.next()}),b.id)})()},tearDown(){var b=this;return e._asyncToGenerator(function*(){h.remove(b.id)})()}}),"awaiting-feature-to-create":()=>({id:"awaiting-feature-to-create",setUp(){var b=this;return e._asyncToGenerator(function*(){h.add(yield f.setUpFeatureAdd(a.viewModel.sketchViewModel,
a.creationInfo,d=>{a.edits.feature=d;a.viewModel.activeWorkflow.next()}),b.id)})()},tearDown(){var b=this;return e._asyncToGenerator(function*(){h.remove(b.id)})()}}),"editing-new-feature":()=>({id:"editing-new-feature",setUp(){var b=this;return e._asyncToGenerator(function*(){const d=a.edits.feature,v=d.sourceLayer,p=a.viewModel,m=p.sketchViewModel;var n=f.findLayerInfo(p.layerInfos,v);const y=null==n?void 0:n.formTemplate;p.featureFormViewModel.set({feature:d,fieldConfig:y?null:null==n?void 0:n.fieldConfig,
formTemplate:y});m.allowDeleteKey=!1;const k=f.getVisualVariableAttributes(d);yield f.startUpdatingFeature(m,d,v,k);n=m.on("update",function(){var E=e._asyncToGenerator(function*(l){var g=l.graphics[0];if("complete"===l.state)return f.startUpdatingFeature(m,g,v,k);yield f.visualVariableInteractiveUpdate(m.view,g,l,k);l=g.attributes;w.isSome(k.rotation)&&({field:g}=k.rotation,p.featureFormViewModel.setValue(g,l[g]));w.isSome(k.size)&&({field:g}=k.size,p.featureFormViewModel.setValue(g,l[g]))});return function(l){return E.apply(this,
arguments)}}());h.add([a.viewModel.featureFormViewModel.on("value-change",e._asyncToGenerator(function*(){a.edits.updateAttributes(a.viewModel.featureFormViewModel.getValues());d.attributes=a.edits.feature.attributes;"3d"===m.view.type&&(yield f.updateGraphicSymbolWhenRequired(d))})),n],b.id)})()},tearDown(b){var d=this;return e._asyncToGenerator(function*(){b.cancelled&&a.viewModel.sketchViewModel.layer.removeAll();h.remove(d.id)})()}})});return f.avoidFeatureTemplateSelectionWithOnlyOneItem(a,c)};
return q}(D);return r=t=z.__decorate([A.subclass("esri.widgets.Editor.CreateWorkflow")],r)});