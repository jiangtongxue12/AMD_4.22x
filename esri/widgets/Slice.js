// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define("require ../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../core/promiseUtils ../core/accessorSupport/decorators/aliasOf ../core/arrayUtils ../core/has ../core/accessorSupport/ensureType ../core/accessorSupport/decorators/property ../core/accessorSupport/decorators/subclass ./Widget ./Slice/SliceViewModel ./support/Heading ./support/widgetUtils ./support/decorators/messageBundle ../core/Logger ./support/jsxFactory".split(" "),function(v,y,d,z,h,c,F,G,k,A,B,w,C,H,D,I,b){c=function(x){function t(a,
e){a=x.call(this,a,e)||this;a.messages=null;a.headingLevel=3;a.iconClass="esri-icon-slice";a.label=void 0;a.view=null;a.viewModel=new w;return a}y._inheritsLoose(t,x);var q=t.prototype;q.loadDependencies=function(){return Promise.all([new Promise((a,e)=>v(["../chunks/calcite-button"],a,e)),new Promise((a,e)=>v(["../chunks/calcite-icon"],a,e))])};q.render=function(){var a=this.viewModel.supported,e=this.viewModel.active,g="disabled"===this.viewModel.state,l="ready"===this.viewModel.state,m="slicing"===
this.viewModel.state||"sliced"===this.viewModel.state;const n="exclude"===this.viewModel.layersMode;var {messages:f}=this,p=g&&"esri-button--disabled";g=e&&!m||n?null:b.tsx("button",{disabled:g,class:this.classes("esri-slice__clear-button esri-button esri-button--primary",p),bind:this,onclick:this._onNewSliceClick,key:"esri-slice__clear",type:"button"},f.newSlice);const E=m&&!n?b.tsx("button",{class:this.classes("esri-slice__exclude-button esri-button esri-button--secondary",p),bind:this,onclick:()=>
{this.viewModel.enterExcludeLayerMode()},key:"esri-slice__exclude",type:"button"},f.excludeLayer):null;p=e&&n?b.tsx("button",{class:this.classes("esri-slice__cancel-button esri-button esri-button--secondary",p),bind:this,onclick:()=>{this.viewModel.exitExcludeLayerMode()},key:"esri-slice__cancel-exclude",type:"button"},f.cancel):null;let r=null;e&&(n?r=f.excludeHint:l&&(r=f.hint));e=r?b.tsx("div",{class:"esri-slice__hint",key:"esri-slice__hint"},b.tsx("p",{class:"esri-slice__hint-text"},r)):null;
l=this.excludedLayers?this.excludedLayers.toArray().map(u=>this._renderLayerItem({uid:u.uid,title:u.title,onClick:()=>{this.excludedLayers.remove(u);return!1}})):[];this.excludeGroundSurface&&l.push(this._renderLayerItem({uid:"ground",title:f.ground,onClick:()=>this.excludeGroundSurface=!1}));m=!n&&m&&0<l.length?b.tsx("div",{class:"esri-slice__settings",key:"esri-slice__settings"},b.tsx(C.Heading,{class:"esri-slice__settings-title",level:this.headingLevel},f.excludedLayers),b.tsx("ul",null,l)):null;
f=b.tsx("div",{class:"esri-slice__panel--error",key:"esri-slice__unsupported"},b.tsx("p",null,f.unsupported));g=b.tsx("div",{class:"esri-slice__actions"},E,p,g);a=this.visible?b.tsx("div",{class:"esri-slice__container"},a?[e,m,g]:f):null;return b.tsx("div",{class:"esri-slice esri-widget esri-widget--panel",role:"presentation"},a)};q._renderLayerItem=function(a){return b.tsx("li",{class:"esri-slice__layer-item",key:a.uid},b.tsx("calcite-button",{appearance:"transparent",class:"esri-slice__cross","icon-start":"x",
scale:"s",title:this.messages.includeLayer,bind:this,onclick:a.onClick}),b.tsx("div",{class:"esri-slice__layer-item__title"},a.title))};q._onNewSliceClick=function(){z.ignoreAbortErrors(this.viewModel.removeSliceAndStart())};return t}(B);d.__decorate([k.property(),D.messageBundle("esri/widgets/Slice/t9n/Slice")],c.prototype,"messages",void 0);d.__decorate([k.property()],c.prototype,"headingLevel",void 0);d.__decorate([k.property()],c.prototype,"iconClass",void 0);d.__decorate([k.property({aliasOf:{source:"messages.widgetLabel",
overridable:!0}})],c.prototype,"label",void 0);d.__decorate([h.aliasOf("viewModel.view")],c.prototype,"view",void 0);d.__decorate([h.aliasOf("viewModel.visible")],c.prototype,"visible",void 0);d.__decorate([h.aliasOf("viewModel.active")],c.prototype,"active",void 0);d.__decorate([k.property({type:w})],c.prototype,"viewModel",void 0);d.__decorate([h.aliasOf("viewModel.excludedLayers")],c.prototype,"excludedLayers",void 0);d.__decorate([h.aliasOf("viewModel.excludeGroundSurface")],c.prototype,"excludeGroundSurface",
void 0);return c=d.__decorate([A.subclass("esri.widgets.Slice")],c)});