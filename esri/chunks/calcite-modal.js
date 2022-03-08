// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define("exports ./componentsUtils ./dom ./key ./observers ./calcite-icon2 ./calcite-loader2 ./calcite-scrim2".split(" "),function(p,c,e,t,u,v,w,x){function g(a,b,h,k=20,l=0){let f=[];if(l>=k)return f;const z=d=>{d=d.assignedNodes().filter(y=>1===y.nodeType);return 0<d.length?g(d[0].parentElement,b,h,k,l+1):[]};a=Array.from(a.children||[]);for(const d of a)b(d)||(h(d)&&f.push(d),null!=d.shadowRoot?f.push(...g(d.shadowRoot,b,h,k,l+1)):"SLOT"===d.tagName?f.push(...z(d)):f.push(...g(d,b,h,k,l+1)));return f}
function n(a){return a.hasAttribute("hidden")||a.hasAttribute("aria-hidden")&&"false"!==a.getAttribute("aria-hidden")||"none"===a.style.display||"0"===a.style.opacity||"hidden"===a.style.visibility||"collapse"===a.style.visibility}function q(){["calcite-modal","calcite-icon","calcite-loader","calcite-scrim"].forEach(a=>{switch(a){case "calcite-modal":customElements.get(a)||customElements.define(a,m);break;case "calcite-icon":customElements.get(a)||v.defineCustomElement();break;case "calcite-loader":customElements.get(a)||
w.defineCustomElement();break;case "calcite-scrim":customElements.get(a)||x.defineCustomElement()}})}const r=a=>{var b;(b=e.isCalciteFocusable(a))||((b="-1"===a.getAttribute("tabindex")||n(a))||(b=a.hasAttribute("disabled")||a.hasAttribute("aria-disabled")&&"false"!==a.getAttribute("aria-disabled")),b=b?!1:a.hasAttribute("tabindex")||(a instanceof HTMLAnchorElement||a instanceof HTMLAreaElement)&&a.hasAttribute("href")||a instanceof HTMLButtonElement||a instanceof HTMLInputElement||a instanceof HTMLTextAreaElement||
a instanceof HTMLSelectElement||a instanceof HTMLIFrameElement);return b};let m=class extends HTMLElement{constructor(){super();this.__registerHost();this.__attachShadow();this.calciteModalOpen=c.createEvent(this,"calciteModalOpen",7);this.calciteModalClose=c.createEvent(this,"calciteModalClose",7);this.active=!1;this.beforeClose=()=>Promise.resolve();this.disableOutsideClose=this.disableCloseButton=!1;this.intlClose="Close";this.disableEscape=!1;this.width=this.scale="m";this.backgroundColor="white";
this.noPadding=!1;this.hasFooter=!0;this.mutationObserver=u.createObserver("mutation",()=>this.updateFooterVisibility());this.activeTransitionProp="opacity";this.transitionEnd=a=>{a.propertyName===this.activeTransitionProp&&(this.active?this.calciteModalOpen.emit():this.calciteModalClose.emit())};this.openEnd=()=>{this.setFocus();this.el.removeEventListener("calciteModalOpen",this.openEnd)};this.handleOutsideClose=()=>{this.disableOutsideClose||this.close()};this.close=()=>this.beforeClose(this.el).then(()=>
{this.active=!1;e.focusElement(this.previousActiveElement);this.removeOverflowHiddenClass()});this.focusFirstElement=()=>{e.focusElement(this.closeButtonEl)};this.focusLastElement=()=>{const a=g(this.el,n,r).filter(b=>!b.getAttribute("data-focus-fence"));0<a.length?e.focusElement(a[a.length-1]):e.focusElement(this.closeButtonEl)};this.updateFooterVisibility=()=>{this.hasFooter=!!this.el.querySelector("[slot\x3dback], [slot\x3dsecondary], [slot\x3dprimary]")}}componentWillLoad(){this.active&&this.open()}connectedCallback(){var a;
null===(a=this.mutationObserver)||void 0===a?void 0:a.observe(this.el,{childList:!0,subtree:!0});this.updateFooterVisibility()}disconnectedCallback(){var a;this.removeOverflowHiddenClass();null===(a=this.mutationObserver)||void 0===a?void 0:a.disconnect()}render(){const a=e.getElementDir(this.el);return c.h(c.Host,{"aria-describedby":this.contentId,"aria-labelledby":this.titleId,"aria-modal":"true",role:"dialog"},c.h("calcite-scrim",{class:"scrim",onClick:this.handleOutsideClose}),this.renderStyle(),
c.h("div",{class:{modal:!0,[e.CSS_UTILITY.rtl]:"rtl"===a},onTransitionEnd:this.transitionEnd},c.h("div",{"data-focus-fence":!0,onFocus:this.focusLastElement,tabindex:"0"}),c.h("div",{class:"header"},this.renderCloseButton(),c.h("header",{class:"title"},c.h("slot",{name:"header"}))),c.h("div",{class:{content:!0,"content--spaced":!this.noPadding,"content--no-footer":!this.hasFooter},ref:b=>this.modalContent=b},c.h("slot",{name:"content"})),this.renderFooter(),c.h("div",{"data-focus-fence":!0,onFocus:this.focusFirstElement,
tabindex:"0"})))}renderFooter(){return this.hasFooter?c.h("div",{class:"footer"},c.h("span",{class:"back"},c.h("slot",{name:"back"})),c.h("span",{class:"secondary"},c.h("slot",{name:"secondary"})),c.h("span",{class:"primary"},c.h("slot",{name:"primary"}))):null}renderCloseButton(){return this.disableCloseButton?null:c.h("button",{"aria-label":this.intlClose,class:"close",onClick:this.close,ref:a=>this.closeButtonEl=a,title:this.intlClose},c.h("calcite-icon",{icon:"x",scale:"s"===this.scale?"s":"l"}))}renderStyle(){return isNaN(parseInt(`${this.width}`))?
null:c.h("style",null,`\n        .modal {\n          max-width: ${this.width}px !important;\n        }\n        @media screen and (max-width: ${this.width}px) {\n          .modal {\n            height: 100% !important;\n            max-height: 100% !important;\n            width: 100% !important;\n            max-width: 100% !important;\n            margin: 0 !important;\n            border-radius: 0 !important;\n          }\n          .content {\n            flex: 1 1 auto !important;\n            max-height: unset !important;\n          }\n        }\n      `)}handleEscape(a){this.active&&
!this.disableEscape&&"Escape"===t.getKey(a.key)&&this.close()}async focusElement(a){a&&a.focus();return this.setFocus()}async setFocus(a){const b=this.closeButtonEl;return e.focusElement("close-button"===a?b:g(this.el,n,r)[0]||b)}async scrollContent(a=0,b=0){this.modalContent&&(this.modalContent.scrollTo?this.modalContent.scrollTo({top:a,left:b,behavior:"smooth"}):(this.modalContent.scrollTop=a,this.modalContent.scrollLeft=b))}async toggleModal(a,b){a!==b&&(a?this.open():a||this.close())}open(){this.previousActiveElement=
document.activeElement;this.el.addEventListener("calciteModalOpen",this.openEnd);this.active=!0;const a=e.getSlotted(this.el,"header"),b=e.getSlotted(this.el,"content");this.titleId=e.ensureId(a);this.contentId=e.ensureId(b);document.documentElement.classList.add("overflow-hidden")}removeOverflowHiddenClass(){document.documentElement.classList.remove("overflow-hidden")}get el(){return this}static get watchers(){return{active:["toggleModal"]}}static get style(){return"@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:300ms}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{position:fixed;top:0;right:0;bottom:0;left:0;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;overflow-y:hidden;color:var(--calcite-ui-text-2);opacity:0;visibility:hidden !important;-webkit-transition:visibility 0ms linear 300ms, opacity 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88);transition:visibility 0ms linear 300ms, opacity 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88);z-index:101}:host([scale\x3ds]){--calcite-modal-padding:0.75rem;--calcite-modal-padding-large:1rem;--calcite-modal-title-text:var(--calcite-font-size-1);--calcite-modal-content-text:var(--calcite-font-size--1)}:host([scale\x3dm]){--calcite-modal-padding:1rem;--calcite-modal-padding-large:1.25rem;--calcite-modal-title-text:var(--calcite-font-size-2);--calcite-modal-content-text:var(--calcite-font-size-0)}:host([scale\x3dl]){--calcite-modal-padding:1.25rem;--calcite-modal-padding-large:1.5rem;--calcite-modal-title-text:var(--calcite-font-size-3);--calcite-modal-content-text:var(--calcite-font-size-1)}.scrim{--calcite-scrim-background:rgba(0, 0, 0, 0.75);position:fixed;top:0;right:0;bottom:0;left:0;display:-ms-flexbox;display:flex;overflow-y:hidden}.modal{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-webkit-box-shadow:0 2px 12px -4px rgba(0, 0, 0, 0.2), 0 2px 4px -2px rgba(0, 0, 0, 0.16);box-shadow:0 2px 12px -4px rgba(0, 0, 0, 0.2), 0 2px 4px -2px rgba(0, 0, 0, 0.16);-webkit-box-sizing:border-box;box-sizing:border-box;float:none;margin:1.5rem;border-radius:0.25rem;background-color:var(--calcite-ui-foreground-1);width:100%;opacity:0;pointer-events:none;overflow:hidden;z-index:102;-webkit-overflow-scrolling:touch;visibility:hidden;-webkit-transition:visibility 0ms linear 300ms, opacity 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88), -webkit-transform 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88);transition:visibility 0ms linear 300ms, opacity 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88), -webkit-transform 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88);transition:transform 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88), visibility 0ms linear 300ms, opacity 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88);transition:transform 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88), visibility 0ms linear 300ms, opacity 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88), -webkit-transform 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88);-webkit-transform:translate3d(0, 20px, 0);transform:translate3d(0, 20px, 0)}:host([active]){opacity:1;visibility:visible !important;-webkit-transition-delay:0ms;transition-delay:0ms}:host([active]) .modal{opacity:1;pointer-events:auto;visibility:visible;-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0);-webkit-transition:visibility 0ms linear, opacity 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88), max-width 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88), max-height 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88), -webkit-transform 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88);transition:visibility 0ms linear, opacity 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88), max-width 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88), max-height 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88), -webkit-transform 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88);transition:transform 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88), visibility 0ms linear, opacity 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88), max-width 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88), max-height 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88);transition:transform 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88), visibility 0ms linear, opacity 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88), max-width 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88), max-height 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88), -webkit-transform 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88);-webkit-transition-delay:0ms;transition-delay:0ms}.header{display:-ms-flexbox;display:flex;max-width:100%;min-width:0;border-top-left-radius:0.25rem;border-top-right-radius:0.25rem;background-color:var(--calcite-ui-foreground-1);border-width:0;border-bottom-width:1px;border-style:solid;border-color:var(--calcite-ui-border-3);-ms-flex:0 0 auto;flex:0 0 auto;z-index:2}.close{margin:0;-webkit-appearance:none;-moz-appearance:none;appearance:none;border-style:none;color:var(--calcite-ui-text-3);-ms-flex-order:2;order:2;cursor:pointer;border-top-right-radius:0.25rem;background-color:transparent;outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;padding:var(--calcite-modal-padding);-ms-flex:0 0 auto;flex:0 0 auto;-webkit-transition:all 0.15s ease-in-out;transition:all 0.15s ease-in-out}.close calcite-icon{pointer-events:none;vertical-align:-2px}.close:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}.close:hover,.close:focus,.close:active{background-color:var(--calcite-ui-foreground-2);color:var(--calcite-ui-text-1)}.calcite--rtl .close{border-top-left-radius:0.25rem;border-top-right-radius:0}.title{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-order:1;order:1;min-width:0;-ms-flex:1 1 auto;flex:1 1 auto;padding:var(--calcite-modal-padding) var(--calcite-modal-padding-large)}slot[name\x3dheader]::slotted(*),*::slotted([slot\x3dheader]){margin:0;font-weight:var(--calcite-font-weight-normal);color:var(--calcite-ui-text-1);font-size:var(--calcite-modal-title-text)}.content{position:relative;padding:0;height:100%;overflow:auto;display:block;background-color:var(--calcite-ui-foreground-1);-webkit-box-sizing:border-box;box-sizing:border-box;max-height:calc(100vh - 12rem);z-index:1}.content--spaced{padding:var(--calcite-modal-padding) var(--calcite-modal-padding-large)}.content--no-footer{border-bottom-right-radius:0.25rem;border-bottom-left-radius:0.25rem}slot[name\x3dcontent]::slotted(*),*::slotted([slot\x3dcontent]){font-size:var(--calcite-modal-content-text)}:host([background-color\x3dgrey]) .content{background-color:var(--calcite-ui-background)}.footer{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;margin-top:auto;-webkit-box-sizing:border-box;box-sizing:border-box;border-bottom-right-radius:0.25rem;border-bottom-left-radius:0.25rem;width:100%;background-color:var(--calcite-ui-foreground-1);border-width:0;border-top-width:1px;border-style:solid;border-color:var(--calcite-ui-border-3);-ms-flex:0 0 auto;flex:0 0 auto;padding:var(--calcite-modal-padding) var(--calcite-modal-padding-large);z-index:2}.footer--hide-back .back,.footer--hide-secondary .secondary{display:none}.back{display:block;margin-right:auto}.calcite--rtl .back{margin-left:auto;margin-right:0}.secondary{display:block;margin-left:0.25rem;margin-right:0.25rem}slot[name\x3dprimary]{display:block}:host([width\x3dsmall]) .modal{width:auto}:host([width\x3ds]) .modal{max-width:32rem}@media screen and (max-width: 35rem){:host([width\x3ds]) .modal{height:100%;max-height:100%;width:100%;max-width:100%;margin:0;border-radius:0}:host([width\x3ds]) .content{-ms-flex:1 1 auto;flex:1 1 auto;max-height:unset}:host([width\x3ds][docked]){-ms-flex-align:end;align-items:flex-end}}:host([width\x3dm]) .modal{max-width:48rem}@media screen and (max-width: 51rem){:host([width\x3dm]) .modal{height:100%;max-height:100%;width:100%;max-width:100%;margin:0;border-radius:0}:host([width\x3dm]) .content{-ms-flex:1 1 auto;flex:1 1 auto;max-height:unset}:host([width\x3dm][docked]){-ms-flex-align:end;align-items:flex-end}}:host([width\x3dl]) .modal{max-width:94rem}@media screen and (max-width: 97rem){:host([width\x3dl]) .modal{height:100%;max-height:100%;width:100%;max-width:100%;margin:0;border-radius:0}:host([width\x3dl]) .content{-ms-flex:1 1 auto;flex:1 1 auto;max-height:unset}:host([width\x3dl][docked]){-ms-flex-align:end;align-items:flex-end}}:host([fullscreen]){background-color:transparent}:host([fullscreen]) .modal{height:100%;max-height:100%;width:100%;max-width:100%;margin:0;-webkit-transform:translate3D(0, 20px, 0) scale(0.95);transform:translate3D(0, 20px, 0) scale(0.95)}:host([fullscreen]) .content{max-height:100%;-ms-flex:1 1 auto;flex:1 1 auto}:host([active][fullscreen]) .modal{-webkit-transform:translate3D(0, 0, 0) scale(1);transform:translate3D(0, 0, 0) scale(1)}:host([active][fullscreen]) .header{border-radius:0}:host([active][fullscreen]) .footer{border-radius:0}:host([docked]) .modal{height:auto}:host([docked]) .content{height:auto;-ms-flex:1 1 auto;flex:1 1 auto}@media screen and (max-width: 860px){:host([docked]) .modal{border-radius:var(--calcite-border-radius) var(--calcite-border-radius) 0 0}:host([docked]) .close{border-radius:0 var(--calcite-border-radius) 0 0}}@media screen and (max-width: 860px){:host([docked]) .calcite--rtl .close{border-radius:var(--calcite-border-radius) var(--calcite-border-radius) 0 0}}:host([color\x3dred]) .modal{border-color:var(--calcite-ui-danger)}:host([color\x3dblue]) .modal{border-color:var(--calcite-ui-info)}:host([color\x3dred]) .modal,:host([color\x3dblue]) .modal{border-width:0;border-top-width:4px;border-style:solid}:host([color\x3dred]) .header,:host([color\x3dblue]) .header{border-radius:0.25rem;border-bottom-right-radius:0;border-bottom-left-radius:0}@media screen and (max-width: 860px){slot[name\x3dheader]::slotted(*),*::slotted([slot\x3dheader]){font-size:var(--calcite-font-size-1)}.footer{position:-webkit-sticky;position:sticky;bottom:0}}@media screen and (max-width: 480px){.footer{-ms-flex-direction:column;flex-direction:column}.calcite--rtl .back,.back,.secondary{margin:0;margin-bottom:0.25rem}}"}};
m=c.proxyCustomElement(m,[1,"calcite-modal",{active:[1540],beforeClose:[16],disableCloseButton:[4,"disable-close-button"],disableOutsideClose:[4,"disable-outside-close"],intlClose:[1,"intl-close"],docked:[516],firstFocus:[16],disableEscape:[4,"disable-escape"],scale:[513],width:[520],fullscreen:[516],color:[513],backgroundColor:[513,"background-color"],noPadding:[4,"no-padding"],hasFooter:[32],focusElement:[64],setFocus:[64],scrollContent:[64]},[[8,"keyup","handleEscape"]]]);q();p.CalciteModal=m;
p.defineCustomElement=q});