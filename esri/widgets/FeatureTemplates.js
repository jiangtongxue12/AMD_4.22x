// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../core/HandleOwner ../core/watchUtils ../core/accessorSupport/decorators/aliasOf ../core/arrayUtils ../core/has ../core/accessorSupport/decorators/cast ../core/accessorSupport/decorators/property ../core/accessorSupport/decorators/subclass ./Widget ./FeatureTemplates/FeatureTemplatesViewModel ./FeatureTemplates/ItemList ./support/widgetUtils ./support/decorators/messageBundle ../core/Logger ./support/decorators/vmEvent ./support/jsxFactory".split(" "),
function(n,d,b,w,p,F,G,x,h,y,z,A,B,H,C,I,D,q){function E(k){const {label:l}=k;return"items"in k?l:`${l}\u2013${k.layer.id}`}const v={filter:!0};b=function(k){function l(a,f){a=k.call(this,a,f)||this;a._iconIntersectionObserver=new IntersectionObserver((e,r)=>{e.forEach(function(){var t=n._asyncToGenerator(function*(c){if(c.isIntersecting&&(c=c.target,!c["data-has-icon"])){const m=c["data-item"];c["data-has-icon"]=!0;r.unobserve(c);yield m.fetchThumbnail();c["data-item"]===m&&m.thumbnail?c.appendChild(m.thumbnail):
(c["data-has-icon"]=!1,r.observe(c))}});return function(c){return t.apply(this,arguments)}}())});a.filterFunction=null;a.filterText="";a.groupBy=null;a.headingLevel=4;a.label=void 0;a.layers=null;a.messages=null;a.selectedItem=null;a.viewModel=new A;a.visibleElements={...v};a.renderItemIcon=a.renderItemIcon.bind(n._assertThisInitialized(a));a._afterItemCreateOrUpdate=a._afterItemCreateOrUpdate.bind(n._assertThisInitialized(a));a._afterItemRemoved=a._afterItemRemoved.bind(n._assertThisInitialized(a));
return a}n._inheritsLoose(l,k);var g=l.prototype;g.initialize=function(){const a=({label:f})=>!this.filterText||-1<f.toLowerCase().indexOf(this.filterText.toLowerCase());this.own(w.init(this,"viewModel",(f,e)=>{f&&!f.filterFunction&&(this.filterFunction=a);e&&e!==f&&e.filterFunction===a&&(e.filterFunction=null)}))};g.destroy=function(){this._iconIntersectionObserver&&(this._iconIntersectionObserver.disconnect(),this._iconIntersectionObserver=null)};g.castVisibleElements=function(a){return{...v,...a}};
g.select=function(a){return null};g.render=function(){const {filterText:a,headingLevel:f,messages:e,viewModel:{items:r,selectedItem:t,state:c}}=this,m=this.visibleElements.filter;return q.tsx("div",{class:this.classes("esri-feature-templates","esri-widget"),"aria-label":e.widgetLabel},"loading"===c?this.renderLoader():"ready"===c?q.tsx(B.ItemList,{id:this.id,identify:E,filterText:a,items:r,headingLevel:f,messages:{filterPlaceholder:e.filterPlaceholder,noItems:e.noItems,noMatches:e.noMatches},filterEnabled:m,
onItemSelect:u=>{this.viewModel.select(u)},onFilterChange:u=>{this.filterText=u;this.viewModel.refresh()},renderIcon:this.renderItemIcon,selectedItem:t}):null)};g.renderItemIcon=function({item:a}){return q.tsx("span",{key:"icon",class:"esri-feature-templates__list-item-icon",afterCreate:this._afterItemCreateOrUpdate,afterUpdate:this._afterItemCreateOrUpdate,afterRemoved:this._afterItemRemoved,"data-item":a,"data-has-icon":!1})};g.renderLoader=function(){return q.tsx("div",{class:"esri-feature-templates__loader",
key:"loader"})};g._afterItemCreateOrUpdate=function(a){this._iconIntersectionObserver.observe(a)};g._afterItemRemoved=function(a){this._iconIntersectionObserver.unobserve(a)};return l}(b.HandleOwnerMixin(z));d.__decorate([p.aliasOf("viewModel.filterFunction")],b.prototype,"filterFunction",void 0);d.__decorate([h.property()],b.prototype,"filterText",void 0);d.__decorate([p.aliasOf("viewModel.groupBy")],b.prototype,"groupBy",void 0);d.__decorate([h.property()],b.prototype,"headingLevel",void 0);d.__decorate([h.property({aliasOf:{source:"messages.widgetLabel",
overridable:!0}})],b.prototype,"label",void 0);d.__decorate([p.aliasOf("viewModel.layers")],b.prototype,"layers",void 0);d.__decorate([h.property(),C.messageBundle("esri/widgets/FeatureTemplates/t9n/FeatureTemplates")],b.prototype,"messages",void 0);d.__decorate([p.aliasOf("viewModel.selectedItem")],b.prototype,"selectedItem",void 0);d.__decorate([h.property(),D.vmEvent("select")],b.prototype,"viewModel",void 0);d.__decorate([h.property()],b.prototype,"visibleElements",void 0);d.__decorate([x.cast("visibleElements")],
b.prototype,"castVisibleElements",null);d.__decorate([p.aliasOf("viewModel.select")],b.prototype,"select",null);return b=d.__decorate([y.subclass("esri.widgets.FeatureTemplates")],b)});