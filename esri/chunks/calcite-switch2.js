// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define("exports ./componentsUtils ./dom ./form ./key ./label".split(" "),function(c,b,d,g,h,e){function f(){["calcite-switch"].forEach(a=>{switch(a){case "calcite-switch":customElements.get(a)||customElements.define(a,c.CalciteSwitch)}})}c.CalciteSwitch=class extends HTMLElement{constructor(){super();this.__registerHost();this.__attachShadow();this.calciteSwitchChange=b.createEvent(this,"calciteSwitchChange",7);this.disabled=!1;this.scale="m";this.checked=this.switched=!1;this.inputEl=document.createElement("input");
this.clickHandler=()=>{this.toggle()}}disabledWatcher(a){this.tabindex=(this.inputEl.disabled=a)?-1:0}nameChanged(a){this.inputEl.name=a}switchedWatcher(a){this.checked=a}checkedWatcher(a){this.inputEl.checked=a}async setFocus(){this.el.focus()}onLabelClick(){this.disabled||(this.toggle(),this.setFocus())}setupInput(){this.checked&&this.inputEl.setAttribute("checked","");this.inputEl.disabled=this.disabled;this.inputEl.id=`${this.guid}-input`;this.inputEl.name=this.name;this.inputEl.style.cssText=
g.hiddenInputStyle;this.inputEl.type="checkbox";this.value&&(this.inputEl.value=null!=this.value?this.value.toString():"");this.el.appendChild(this.inputEl)}toggle(){this.checked=!this.checked;this.calciteSwitchChange.emit({switched:this.checked})}keyDownHandler(a){a=h.getKey(a.key);this.disabled||" "!==a&&"Enter"!==a||this.toggle()}connectedCallback(){e.connectLabel(this);const a=this.checked||this.switched;a&&(this.switched=this.checked=a)}disconnectedCallback(){e.disconnectLabel(this)}componentWillLoad(){this.guid=
this.el.id||`calcite-switch-${d.guid()}`;this.tabindex=this.el.getAttribute("tabindex")||this.disabled?-1:0;this.setupInput()}render(){const a=d.getElementDir(this.el);return b.h(b.Host,{"aria-checked":this.checked.toString(),"aria-label":e.getLabelText(this),onClick:this.clickHandler,role:"switch",tabindex:this.tabindex},b.h("div",{class:{container:!0,[d.CSS_UTILITY.rtl]:"rtl"===a}},b.h("div",{class:"track"},b.h("div",{class:"handle"}))))}get el(){return this}static get watchers(){return{disabled:["disabledWatcher"],
name:["nameChanged"],switched:["switchedWatcher"],checked:["checkedWatcher"]}}static get style(){return"@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:300ms}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host([scale\x3ds]) .container{height:0.75rem}:host([scale\x3ds]) .track{width:1.5rem;height:0.75rem}:host([scale\x3ds]) .handle{width:0.5rem;height:0.5rem}:host([scale\x3dm]) .container{height:1rem}:host([scale\x3dm]) .track{width:2rem;height:1rem}:host([scale\x3dm]) .handle{width:0.75rem;height:0.75rem}:host([scale\x3dl]) .container{height:1.5rem}:host([scale\x3dl]) .track{width:3rem;height:1.5rem}:host([scale\x3dl]) .handle{width:1.25rem;height:1.25rem}:host{display:inline-block;position:relative;width:auto;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;vertical-align:middle;tap-highlight-color:transparent}:host([disabled]){opacity:var(--calcite-ui-opacity-disabled);pointer-events:none;cursor:default}:host{outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;width:auto}:host(:focus){outline:2px solid var(--calcite-ui-brand);outline-offset:2px}.track{position:relative;display:inline-block;vertical-align:top;background-color:var(--calcite-ui-foreground-2);border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-2);-webkit-box-sizing:border-box;box-sizing:border-box;pointer-events:none;-webkit-transition-property:all;transition-property:all;-webkit-transition-duration:150ms;transition-duration:150ms;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);border-radius:9999px}.handle{position:absolute;display:block;right:auto;background-color:var(--calcite-ui-foreground-1);border-width:2px;border-style:solid;border-color:var(--calcite-ui-border-input);-webkit-transition-property:all;transition-property:all;-webkit-transition-duration:150ms;transition-duration:150ms;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);border-radius:9999px;pointer-events:none;top:-1px;left:-1px}:host(:hover) .handle,:host(:focus) .handle{border-color:var(--calcite-ui-brand);-webkit-box-shadow:inset 0 0 0 1px var(--calcite-ui-brand);box-shadow:inset 0 0 0 1px var(--calcite-ui-brand)}:host([checked]) .track{background-color:var(--calcite-ui-brand);border-color:var(--calcite-ui-brand-hover)}:host([checked]) .handle{left:auto;border-color:var(--calcite-ui-brand);right:-1px}:host([checked]:hover) .track{background-color:var(--calcite-ui-brand);border-color:var(--calcite-ui-brand-hover)}:host([checked]:hover) .handle{border-color:var(--calcite-ui-brand-hover);-webkit-box-shadow:inset 0 0 0 1px var(--calcite-ui-brand-hover);box-shadow:inset 0 0 0 1px var(--calcite-ui-brand-hover)}.calcite--rtl .handle{left:auto;right:-1px}:host([checked]) .calcite--rtl .handle{right:auto;left:-1px}:host([checked]:active) .calcite--rtl .handle{right:auto;left:-1px}:host([checked]:focus) .calcite--rtl .handle{right:auto;left:-1px}"}};
c.CalciteSwitch=b.proxyCustomElement(c.CalciteSwitch,[1,"calcite-switch",{disabled:[516],label:[1],name:[513],scale:[513],switched:[1028],checked:[1540],value:[520],guid:[32],tabindex:[32],setFocus:[64]},[[0,"keydown","keyDownHandler"]]]);f();c.defineCustomElement=f});