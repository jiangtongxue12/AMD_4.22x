// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../core/promiseUtils ../core/unitUtils ../core/accessorSupport/decorators/aliasOf ../core/arrayUtils ../core/has ../core/accessorSupport/ensureType ../core/accessorSupport/decorators/property ../core/accessorSupport/decorators/subclass ./Widget ./DirectLineMeasurement3D/DirectLineMeasurement3DViewModel ./support/decorators/accessibleHandler ./support/decorators/messageBundle ../core/Logger ./support/jsxFactory ./support/widgetUtils".split(" "),
function(E,d,F,G,h,c,L,M,g,H,I,y,z,A,N,b,O){c=function(B){function t(a,n){a=B.call(this,a,n)||this;a.view=null;a.visible=null;a.iconClass="esri-icon-measure-line";a.label=void 0;a.messages=null;a.messagesUnits=null;a.viewModel=new y;a.unitOptions=null;a.unit=null;return a}E._inheritsLoose(t,B);var u=t.prototype;u.render=function(){const {supported:a,active:n,state:p,measurement:v,unit:J}=this.viewModel;var q="disabled"===p;const w="measuring"===p||"measured"===p,{messages:f,messagesUnits:C}=this;
var x=n&&"ready"===p?b.tsx("section",{key:"esri-direct-line-measurement-3d__hint",class:"esri-direct-line-measurement-3d__hint"},b.tsx("p",{class:"esri-direct-line-measurement-3d__hint-text"},f.hint)):null;const K=a?null:b.tsx("section",{key:"esri-direct-line-measurement-3d__unsupported",class:"esri-direct-line-measurement-3d__panel--error"},b.tsx("p",null,f.unsupported));var l=(e,k,D)=>{switch(k.state){case "available":return b.tsx("div",{key:`${D}-enabled`,class:"esri-direct-line-measurement-3d__measurement-item"},
b.tsx("span",{class:"esri-direct-line-measurement-3d__measurement-item-title"},e),b.tsx("span",{class:"esri-direct-line-measurement-3d__measurement-item-value"},k.text));case "unavailable":return b.tsx("div",{key:`${D}-disabled`,class:this.classes("esri-direct-line-measurement-3d__measurement-item","esri-direct-line-measurement-3d__measurement-item--disabled")},b.tsx("span",{class:"esri-direct-line-measurement-3d__measurement-item-title"},e))}};l=w?b.tsx("section",{key:"esri-direct-line-measurement-3d__measurement",
class:"esri-direct-line-measurement-3d__measurement"},l(f.direct,v.directDistance,"direct"),l(f.horizontal,v.horizontalDistance,"horizontal"),l(f.vertical,v.verticalDistance,"vertical")):null;var r=`${this.id}__units`,m=b.tsx("label",{class:"esri-direct-line-measurement-3d__units-label",for:r},f.unit);r=b.tsx("div",{class:"esri-direct-line-measurement-3d__units-select-wrapper"},b.tsx("select",{class:"esri-direct-line-measurement-3d__units-select esri-select",id:r,onchange:this._changeUnit,bind:this,
value:J},this.viewModel.unitOptions.map(e=>{var k;return b.tsx("option",{key:e,value:e},G.isMeasurementSystem(e)?C.systems[e]:null==(k=C.units[e])?void 0:k.pluralCapitalized)})));m=b.tsx("section",{key:"esri-direct-line-measurement-3d__units",class:"esri-direct-line-measurement-3d__units"},m,r);m=w?b.tsx("div",{key:"settings",class:"esri-direct-line-measurement-3d__settings"},m):null;q=!a||n&&!w?null:b.tsx("div",{class:"esri-direct-line-measurement-3d__actions"},b.tsx("button",{disabled:q,class:this.classes("esri-direct-line-measurement-3d__clear-button esri-button esri-button--primary",
q&&"esri-button--disabled"),bind:this,onclick:this._newMeasurement,type:"button"},f.newMeasurement));x=this.visible?b.tsx("div",{class:"esri-direct-line-measurement-3d__container"},K,x,m,l,q):null;return b.tsx("div",{key:this,class:"esri-direct-line-measurement-3d esri-widget esri-widget--panel",role:"presentation"},x)};u._newMeasurement=function(){F.ignoreAbortErrors(this.viewModel.start())};u._changeUnit=function(a){a=a.target;if(a=a.options[a.selectedIndex])this.unit=a.value};return t}(I);d.__decorate([h.aliasOf("viewModel.view")],
c.prototype,"view",void 0);d.__decorate([h.aliasOf("viewModel.visible")],c.prototype,"visible",void 0);d.__decorate([h.aliasOf("viewModel.active")],c.prototype,"active",void 0);d.__decorate([g.property()],c.prototype,"iconClass",void 0);d.__decorate([g.property({aliasOf:{source:"messages.widgetLabel",overridable:!0}})],c.prototype,"label",void 0);d.__decorate([g.property(),A.messageBundle("esri/widgets/DirectLineMeasurement3D/t9n/DirectLineMeasurement3D")],c.prototype,"messages",void 0);d.__decorate([g.property(),
A.messageBundle("esri/core/t9n/Units")],c.prototype,"messagesUnits",void 0);d.__decorate([g.property()],c.prototype,"uiStrings",void 0);d.__decorate([g.property({type:y})],c.prototype,"viewModel",void 0);d.__decorate([h.aliasOf("viewModel.unitOptions")],c.prototype,"unitOptions",void 0);d.__decorate([h.aliasOf("viewModel.unit")],c.prototype,"unit",void 0);d.__decorate([z.accessibleHandler()],c.prototype,"_newMeasurement",null);d.__decorate([z.accessibleHandler()],c.prototype,"_changeUnit",null);return c=
d.__decorate([H.subclass("esri.widgets.DirectLineMeasurement3D")],c)});