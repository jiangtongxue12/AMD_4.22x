// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define(["exports","./componentsUtils","./dom"],function(c,b,e){function f(){["calcite-tab"].forEach(a=>{switch(a){case "calcite-tab":customElements.get(a)||customElements.define(a,c.CalciteTab)}})}c.CalciteTab=class extends HTMLElement{constructor(){super();this.__registerHost();this.__attachShadow();this.calciteTabRegister=b.createEvent(this,"calciteTabRegister",7);this.active=!1;this.scale="m";this.guid=`calcite-tab-title-${e.guid()}`}render(){return b.h(b.Host,{"aria-expanded":this.active.toString(),
"aria-labelledby":this.labeledBy,id:this.el.id||this.guid,role:"tabpanel"},b.h("section",null,b.h("slot",null)))}componentDidLoad(){this.calciteTabRegister.emit()}componentWillRender(){var a;this.scale=null===(a=this.el.closest("calcite-tabs"))||void 0===a?void 0:a.scale}disconnectedCallback(){var a;null===(a=document.body)||void 0===a?void 0:a.dispatchEvent(new CustomEvent("calciteTabUnregister",{detail:this.el}))}tabChangeHandler(a){a.target.closest("calcite-tabs")===this.el.closest("calcite-tabs")&&
(this.tab?this.active=this.tab===a.detail.tab:this.getTabIndex().then(d=>{this.active=d===a.detail.tab}))}async getTabIndex(){return Array.prototype.indexOf.call(e.nodeListToArray(this.el.parentElement.children).filter(a=>a.matches("calcite-tab")),this.el)}async updateAriaInfo(a=[],d=[]){this.labeledBy=d[a.indexOf(this.el.id)]||null}get el(){return this}static get style(){return"@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:300ms}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host([active]) section{display:block}:host{display:none;color:var(--calcite-ui-text-3)}:host([active]){display:block}section{height:100%;width:100%;display:none}:host([scale\x3ds]){font-size:var(--calcite-font-size--2);line-height:1rem;padding-top:0.25rem;padding-bottom:0.25rem}:host([scale\x3dm]){font-size:var(--calcite-font-size--1);line-height:1rem;padding-top:0.5rem;padding-bottom:0.5rem}:host([scale\x3dl]){font-size:var(--calcite-font-size-0);line-height:1.25rem;padding-top:0.75rem;padding-bottom:0.75rem}"}};
c.CalciteTab=b.proxyCustomElement(c.CalciteTab,[1,"calcite-tab",{tab:[513],active:[1540],scale:[1537],labeledBy:[32],getTabIndex:[64],updateAriaInfo:[64]},[[16,"calciteTabChange","tabChangeHandler"]]]);f();c.defineCustomElement=f});