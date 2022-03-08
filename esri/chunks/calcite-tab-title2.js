// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define("exports ./componentsUtils ./dom ./key ./observers ./calcite-icon2".split(" "),function(e,b,d,g,h,k){function f(){["calcite-tab-title","calcite-icon"].forEach(a=>{switch(a){case "calcite-tab-title":customElements.get(a)||customElements.define(a,e.CalciteTabTitle);break;case "calcite-icon":customElements.get(a)||k.defineCustomElement()}})}e.CalciteTabTitle=class extends HTMLElement{constructor(){super();this.__registerHost();this.__attachShadow();this.calciteTabsActivate=b.createEvent(this,
"calciteTabsActivate",7);this.calciteTabsFocusNext=b.createEvent(this,"calciteTabsFocusNext",7);this.calciteTabsFocusPrevious=b.createEvent(this,"calciteTabsFocusPrevious",7);this.calciteTabTitleRegister=b.createEvent(this,"calciteTabTitleRegister",7);this.bordered=this.disabled=this.active=!1;this.mutationObserver=h.createObserver("mutation",()=>this.updateHasText());this.hasText=!1;this.guid=`calcite-tab-title-${d.guid()}`}activeTabChanged(){this.active&&this.emitActiveTab()}connectedCallback(){this.setupTextContentObserver();
this.parentTabNavEl=this.el.closest("calcite-tab-nav");this.parentTabsEl=this.el.closest("calcite-tabs")}disconnectedCallback(){var a,c;null===(a=this.mutationObserver)||void 0===a?void 0:a.disconnect();null===(c=document.body)||void 0===c?void 0:c.dispatchEvent(new CustomEvent("calciteTabTitleUnregister",{detail:this.el}))}componentWillLoad(){b.Build.isBrowser&&this.updateHasText();this.tab&&this.active&&this.emitActiveTab()}componentWillRender(){this.parentTabsEl&&(this.layout=this.parentTabsEl.layout,
this.position=this.parentTabsEl.position,this.scale=this.parentTabsEl.scale,this.bordered=this.parentTabsEl.bordered);!this.parentTabsEl&&this.parentTabNavEl&&(this.position=d.getElementProp(this.parentTabNavEl,"position",this.position),this.scale=d.getElementProp(this.parentTabNavEl,"scale",this.scale))}render(){const a=d.getElementDir(this.el),c=this.el.id||this.guid,l=this.disabled?"span":"a",m=this.bordered&&!this.disabled&&"center"!==this.layout,n=b.h("calcite-icon",{class:"calcite-tab-title--icon icon-start",
dir:a,flipRtl:"start"===this.iconFlipRtl||"both"===this.iconFlipRtl,icon:this.iconStart,scale:"s"}),p=b.h("calcite-icon",{class:"calcite-tab-title--icon icon-end",dir:a,flipRtl:"end"===this.iconFlipRtl||"both"===this.iconFlipRtl,icon:this.iconEnd,scale:"s"});return b.h(b.Host,{"aria-controls":this.controls,"aria-expanded":this.active.toString(),id:c,role:"tab",tabindex:this.disabled?"-1":"0"},b.h(l,{class:{container:!0,"container--has-text":this.hasText,[d.CSS_UTILITY.rtl]:"rtl"===a},style:m&&{width:`${this.parentTabNavEl.indicatorWidth}px`}},
this.iconStart?n:null,b.h("slot",null),this.iconEnd?p:null))}async componentDidLoad(){this.calciteTabTitleRegister.emit(await this.getTabIdentifier())}tabChangeHandler(a){this.parentTabNavEl===a.target&&(this.tab?this.active=this.tab===a.detail.tab:this.getTabIndex().then(c=>{this.active=c===a.detail.tab}))}onClick(){this.emitActiveTab()}keyDownHandler(a){switch(g.getKey(a.key)){case " ":case "Enter":this.emitActiveTab();a.preventDefault();break;case "ArrowRight":"ltr"===d.getElementDir(this.el)?
this.calciteTabsFocusNext.emit():this.calciteTabsFocusPrevious.emit();break;case "ArrowLeft":"ltr"===d.getElementDir(this.el)?this.calciteTabsFocusPrevious.emit():this.calciteTabsFocusNext.emit()}}async getTabIndex(){return Array.prototype.indexOf.call(this.el.parentElement.querySelectorAll("calcite-tab-title"),this.el)}async getTabIdentifier(){return this.tab?this.tab:this.getTabIndex()}async updateAriaInfo(a=[],c=[]){this.controls=a[c.indexOf(this.el.id)]||null}updateHasText(){this.hasText=0<this.el.textContent.trim().length}setupTextContentObserver(){var a;
null===(a=this.mutationObserver)||void 0===a?void 0:a.observe(this.el,{childList:!0,subtree:!0})}emitActiveTab(){this.disabled||this.calciteTabsActivate.emit({tab:this.tab})}get el(){return this}static get watchers(){return{active:["activeTabChanged"]}}static get style(){return"@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:300ms}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{display:block;-ms-flex:0 1 auto;flex:0 1 auto;outline:2px solid transparent;outline-offset:2px;margin-right:1.25rem;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:1.25rem;margin-inline-end:1.25rem}:host([layout\x3dcenter]){text-align:center;margin-top:0;margin-bottom:0;margin-left:1.25rem;margin-right:1.25rem;-ms-flex-preferred-size:12rem;flex-basis:12rem}:host([position\x3dbelow]) a{border-bottom-width:0;border-top-width:2px;border-top-color:transparent;border-top-style:solid}:host a{outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out}:host(:focus) a{outline:2px solid var(--calcite-ui-brand);outline-offset:2px}:host(:active) a,:host(:focus) a,:host(:hover) a{text-decoration:none;color:var(--calcite-ui-text-1);border-color:var(--calcite-ui-border-2)}:host([active]) a{color:var(--calcite-ui-text-1);border-color:transparent}:host([disabled]){pointer-events:none}:host([disabled]) span,:host([disabled]) a{pointer-events:none;opacity:0.5}:host([scale\x3ds]){-webkit-margin-end:1rem;margin-inline-end:1rem}:host([scale\x3ds]) a,:host([scale\x3ds]) span{font-size:var(--calcite-font-size--2);line-height:1rem;padding-top:0.25rem;padding-bottom:0.25rem}:host([scale\x3dm]) a,:host([scale\x3dm]) span{font-size:var(--calcite-font-size--1);line-height:1rem;padding-top:0.5rem;padding-bottom:0.5rem}:host([scale\x3dl]){-webkit-margin-end:1.5rem;margin-inline-end:1.5rem}:host([scale\x3dl]) a,:host([scale\x3dl]) span{font-size:var(--calcite-font-size-0);line-height:1.25rem;padding-top:0.75rem;padding-bottom:0.75rem}a,span{-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-appearance:none;-moz-appearance:none;appearance:none;cursor:pointer;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;border-bottom-width:2px;border-bottom-color:transparent;width:100%;height:100%;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;color:var(--calcite-ui-text-3);font-size:var(--calcite-font-size--1);line-height:1rem;-webkit-transition-property:all;transition-property:all;-webkit-transition-duration:150ms;transition-duration:150ms;-webkit-transition-timing-function:ease-in-out;transition-timing-function:ease-in-out;-webkit-transition-delay:0s;transition-delay:0s;padding-left:0;padding-right:0;padding-top:0.5rem;padding-bottom:0.5rem;border-bottom-style:solid}span{cursor:default}.calcite-tab-title--icon{display:-ms-inline-flexbox;display:inline-flex;position:relative;margin:0;-ms-flex-item-align:center;align-self:center}.calcite-tab-title--icon svg{-webkit-transition-property:all;transition-property:all;-webkit-transition-duration:150ms;transition-duration:150ms;-webkit-transition-timing-function:ease-in-out;transition-timing-function:ease-in-out;-webkit-transition-delay:0s;transition-delay:0s}.container--has-text .calcite-tab-title--icon.icon-start{margin-right:0.5rem}.container--has-text .calcite-tab-title--icon.icon-end{margin-left:0.5rem}:host([icon-start][icon-end]) .calcite-tab-title--icon:first-child{margin-right:0.5rem}.container--has-text.calcite--rtl .calcite-tab-title--icon.icon-end{margin-left:0;margin-right:0.5rem}.container--has-text.calcite--rtl .calcite-tab-title--icon.icon-start{margin-left:0.5rem;margin-right:0}:host([icon-start][icon-end]) .calcite--rtl .calcite-tab-title--icon:first-child{margin-left:0.5rem;margin-right:0}:host([bordered]){-webkit-margin-end:0;margin-inline-end:0}:host([bordered][active]){-webkit-box-shadow:inset 0px -2px var(--calcite-ui-foreground-1);box-shadow:inset 0px -2px var(--calcite-ui-foreground-1)}:host([bordered][active][position\x3dbelow]){-webkit-box-shadow:inset 0 2px 0 var(--calcite-ui-foreground-1);box-shadow:inset 0 2px 0 var(--calcite-ui-foreground-1)}:host([bordered]:hover) a,:host([bordered]:focus) a,:host([bordered]:active) a{position:relative}:host([bordered]:hover) a{background-color:var(--calcite-button-transparent-hover);-webkit-transition-property:all;transition-property:all;-webkit-transition-duration:150ms;transition-duration:150ms;-webkit-transition-timing-function:ease-in-out;transition-timing-function:ease-in-out;-webkit-transition-delay:0s;transition-delay:0s}:host([bordered]) a{border-bottom-style:unset}:host([bordered][position\x3dbelow]) a{border-top-style:unset}:host([active][bordered]) a{border-left:1px solid var(--calcite-ui-border-1);border-right:1px solid var(--calcite-ui-border-1)}:host([bordered]) a,:host([bordered]) span{padding-left:0.75rem;padding-right:0.75rem}:host([bordered][scale\x3ds]) a,:host([bordered][scale\x3ds]) span{padding-left:0.5rem;padding-right:0.5rem}:host([bordered][scale\x3dl]) a,:host([bordered][scale\x3dl]) span{padding-left:1rem;padding-right:1rem}"}};
e.CalciteTabTitle=b.proxyCustomElement(e.CalciteTabTitle,[1,"calcite-tab-title",{active:[1540],disabled:[516],iconEnd:[513,"icon-end"],iconFlipRtl:[513,"icon-flip-rtl"],iconStart:[513,"icon-start"],layout:[1537],position:[1537],scale:[1537],bordered:[1540],tab:[513],controls:[32],hasText:[32],getTabIndex:[64],getTabIdentifier:[64],updateAriaInfo:[64]},[[16,"calciteTabChange","tabChangeHandler"],[0,"click","onClick"],[0,"keydown","keyDownHandler"]]]);f();e.defineCustomElement=f});