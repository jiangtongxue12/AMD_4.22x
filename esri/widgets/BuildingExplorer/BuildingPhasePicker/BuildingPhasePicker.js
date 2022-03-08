// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/maybe ../../../core/accessorSupport/decorators/aliasOf ../../../core/arrayUtils ../../../core/has ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/property ../../../core/accessorSupport/decorators/subclass ../../Widget ../BuildingPhase ../../support/widgetUtils ../../../core/Logger ../../support/jsxFactory".split(" "),function(n,h,k,t,e,x,y,l,u,v,p,q,z,f){const w={nextPhase:"nextPhase",
previousPhase:"previousPhase",currentPhase:"{{value}}"};e=function(r){function m(a,b){a=r.call(this,a,b)||this;a._defaultViewModel=new p;a.viewModel=a._defaultViewModel;a.messages=w;a._phasesContainer=null;a._shouldScrollCurrentPhaseIntoView=!0;a._shouldFocusCurrentPhase=!1;return a}n._inheritsLoose(m,r);var d=m.prototype;d.initialize=function(){this.own(this.watch(["_currentPhase","_container"],()=>{this._shouldScrollCurrentPhaseIntoView=!0}))};d.destroy=function(){this.viewModel!==this._defaultViewModel&&
this._defaultViewModel.destroy()};d.render=function(){if(2>this._phases.length)return f.tsx("div",null);const a=q.isRTL(this.container),b=this.messages.previousPhase,c=this.messages.nextPhase;return f.tsx("div",{bind:this,key:this,class:this.classes("esri-widget","esri-building-phase-picker"),onkeydown:this._onKeyDown},f.tsx("button",{bind:this,class:a?"esri-building-phase-picker__arrow-right":"esri-building-phase-picker__arrow-left",disabled:!this.viewModel.hasPrevious,onclick:this._onArrowLeftClick,
"aria-label":b,title:b,type:"button"}),f.tsx("div",{bind:this,class:"esri-building-phase-picker__phases-container",afterCreate:q.storeNode,"data-node-ref":"_phasesContainer",afterUpdate:this._onPhasesContainerAfterUpdate},this._renderPhaseButtons()),f.tsx("button",{bind:this,class:a?"esri-building-phase-picker__arrow-left":"esri-building-phase-picker__arrow-right",disabled:!this.viewModel.hasNext,onclick:this._onArrowRightClick,"aria-label":c,title:c,type:"button"}))};d._renderPhaseButtons=function(){const a=
this._phases,b=[];for(let g=0;g<a.length;++g){var c=a[g];c={phase:c,active:k.isSome(this._currentPhase)?c<=this._currentPhase:!1,current:k.isSome(this._currentPhase)?c===this._currentPhase:!1};0<g&&b.push(this._renderDivider(c));b.push(this._renderPhaseButton(c))}return b};d._renderPhaseButton=function({phase:a,active:b,current:c}){const g=k.unwrap(this.viewModel.getValueLabel(a));return f.tsx("button",{key:`phase-${a}`,class:this.classes("esri-building-phase-picker__phase",{["esri-building-phase-picker__phase--active"]:b,
["esri-building-phase-picker__phase--current"]:c}),"aria-label":g,title:g,onclick:()=>this.viewModel.select(a),type:"button"},a)};d._renderDivider=function({phase:a,active:b}){return f.tsx("div",{key:`phase-divider-${a}`,class:this.classes("esri-building-phase-picker__divider",{["esri-building-phase-picker__divider--active"]:b})})};d._onKeyDown=function(a){switch(a.key){case "ArrowDown":case "ArrowLeft":a.stopPropagation();a.preventDefault();this.viewModel.previous();this._shouldFocusCurrentPhase=
!0;break;case "ArrowUp":case "ArrowRight":a.stopPropagation(),a.preventDefault(),this.viewModel.next(),this._shouldFocusCurrentPhase=!0}};d._onArrowLeftClick=function(){this.viewModel.previous()};d._onArrowRightClick=function(){this.viewModel.next()};d._onPhasesContainerAfterUpdate=function(){if(!k.isNone(this._phasesContainer)){var a=this._phasesContainer.querySelector(".esri-building-phase-picker__phase--current");k.isNone(a)||(this._shouldScrollCurrentPhaseIntoView&&(this._phasesContainer.scrollLeft=
-(this._phasesContainer.offsetWidth/2)+a.offsetLeft-a.offsetWidth/2,this._shouldScrollCurrentPhaseIntoView=!1),this._shouldFocusCurrentPhase&&(a.focus(),this._shouldFocusCurrentPhase=!1))}};n._createClass(m,[{key:"_currentPhase",get:function(){return this.viewModel.enabled?this.viewModel.value:null}}]);return m}(v);h.__decorate([l.property({type:p})],e.prototype,"viewModel",void 0);h.__decorate([l.property()],e.prototype,"messages",void 0);h.__decorate([t.aliasOf("viewModel.allowedValues")],e.prototype,
"_phases",void 0);h.__decorate([l.property({readOnly:!0})],e.prototype,"_currentPhase",null);h.__decorate([l.property()],e.prototype,"_phasesContainer",void 0);return e=h.__decorate([u.subclass("esri.widgets.BuildingExplorer.BuildingPhasePicker.BuildingPhasePicker")],e)});