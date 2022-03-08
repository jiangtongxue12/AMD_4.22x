// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../intl ../core/Collection ../core/events ../core/Handles ../core/watchUtils ../core/accessorSupport/decorators/aliasOf ../core/arrayUtils ../core/has ../core/accessorSupport/ensureType ../core/accessorSupport/decorators/property ../core/accessorSupport/decorators/subclass ./Search ./Widget ./Directions/DirectionsViewModel ./Directions/support/CostSummary ./Directions/support/directionsUtils ./Directions/support/maneuverUtils ./Directions/support/resources ./Directions/support/RouteSections ./Search/support/locatorUtils ./support/DatePicker ./support/Heading ./support/TimePicker ./support/decorators/accessibleHandler ./support/decorators/messageBundle ../core/Logger ./support/jsxFactory ./support/widgetUtils ../chunks/sortable.esm ../intl/substitute ../intl/date ../intl/number".split(" "),
function(P,m,h,Q,B,R,u,t,ja,ka,la,v,S,T,U,I,V,D,W,d,X,J,Y,y,Z,z,G,ma,e,na,aa,H,ba,K){function ca(r){r=r.getTimezoneOffset();const A=Math.abs(Math.floor(r)%60);return`GMT${0<r?"-":"+"}${K.formatNumber(Math.abs(Math.floor(r/60)),L)}${K.formatNumber(A,L)}`}function M(r){return!(null==r.composedPath||!r.composedPath().find(A=>{var f;return null==(f=A.classList)?void 0:f.contains("esri-search__suggestions-list")}))}const da={hour:"numeric",minute:"numeric"},L={minimumIntegerDigits:2};h=function(r){function A(a,
c){var b=r.call(this,a,c)||this;b._autoStopRemovalDelay=100;b._costSummary=new V;b._departureTime="now";b._datePicker=new Y;b._handles=new R;b._newPlaceholderStop=null;b._pointerPressedSearchSuggestionStop=null;b._routeSections=new X;b._stops=new Q([{},{}]);b._stopsToSearches=new Map;b._timePicker=new Z;b.apiKey=null;b.goToOverride=null;b.headingLevel=2;b.iconClass=d.CSS.widgetIcon;b.label=void 0;b.lastRoute=null;b.maxStops=null;b.messages=null;b.messagesCommon=null;b.messagesUnits=null;b.routeServiceUrl=
void 0;b.routeSymbol=null;b.searchProperties=null;b.stopSymbols=null;b.view=null;b.viewModel=new I;b._setUpDragAndDropStops=g=>{b._sortable=aa.Sortable.create(g,{draggable:`.${d.CSS.validStopRow}`,ghostClass:d.CSS.stopRowGhost,handle:`.${d.CSS.stopHandle}`,onEnd:b._handleStopInputDragEnd})};b._handleDragHandlePointerDown=()=>b._stops.forEach(g=>b._acquireSearch(g).activeMenu="none");b._handleStopInputDragEnd=({oldIndex:g,newIndex:k,target:p})=>{if(g!==k){var {children:n}=p,l=n[g];p.insertBefore(n[k],
0>k-g?l.nextElementSibling:l);p=b._stops;p.reorder(p.getItemAt(g),k);b._processStops()}};return b}P._inheritsLoose(A,r);var f=A.prototype;f.initialize=function(){this.own([u.init(this,"viewModel.lastRoute",()=>{this._routeSections.routePath=this.get("viewModel.directionLines");this._focusedManeuver=this._activeManeuver=null;this.scheduleRender()}),u.init(this,"viewModel.selectedTravelMode, viewModel.departureTime",()=>{1<this.get("viewModel.stops.length")&&this.getDirections()}),u.when(this,"view",
(a,c)=>{c&&(this._viewClickHandle=null,this._handles.remove(c));if(a){c=this._prepPointerDownUpClick();const b=this._prepViewClick();c.pause();b.pause();this._handles.add([B.on(a.surface,"mousedown",()=>this._autoStopRemovalDelay=500),B.on(a.surface,"mouseup",()=>this._autoStopRemovalDelay=100),c,b],this.view.surface);this._pointerDownUpHandle=c;this._viewClickHandle=b}}),u.whenOnce(this,"routeServiceUrl",()=>this.viewModel.load()),u.watch(this,"viewModel.stops.length",a=>{0===a&&(this._stops.toArray().forEach(c=>
this._removeStop(c,!0)),this._stops.addMany([{},{}]),this.scheduleRender())})])};f.destroy=function(){this._datePicker.destroy();this._timePicker.destroy();this._stopsToSearches.forEach(a=>a.destroy());this._sortable&&this._sortable.destroy()};f.getDirections=function(){return null};f.zoomToRoute=function(){};f.render=function(){return e.tsx("div",{class:this.classes(d.CSS.base,d.CSS.scroller)},this._renderPanelContent())};f._renderPanelContent=function(){var {viewModel:{state:a}}=this,c="initializing"===
a;const b="error"===a&&!this.viewModel.serviceDescription,g="unauthenticated"===a;a={[d.CSS.panelContentLoading]:c,[d.CSS.panelContentError]:b,[d.CSS.panelContentSignIn]:g};const k=c?"presentation":"group";c=g?this._renderSignIn():b?this._renderMessage(this._getErrorMessage()):c?this._renderLoader():this._renderReadyContent();return e.tsx("div",{class:this.classes(d.CSS.panelContent,a),role:k},c)};f._renderReadyContent=function(){return[this._renderStopsContainer(),this._renderTravelModeOptions(),
this._renderDepartureTimeControls(),this._renderSectionSplitter(),this._renderDirectionsContainer(),this._renderDisclaimer()]};f._renderSignIn=function(){return e.tsx("div",{key:"sign-in",class:d.CSS.signInContent},e.tsx(y.Heading,{class:d.CSS.contentTitle,level:this.headingLevel},this.messages.widgetLabel),this._renderPlaceholder(),e.tsx(y.Heading,{level:this.headingLevel+1},this.messages.signInRequired),e.tsx("button",{class:this.classes(d.CSS.button,d.CSS.buttonSecondary,d.CSS.signInButton),tabIndex:0,
onclick:this._handleSignInClick,bind:this,type:"button"},this.messagesCommon.auth.signIn))};f._handleSignInClick=function(){this.viewModel.load().catch(()=>{})};f._renderTravelModeOptions=function(){const {travelModes:a}=this.viewModel;if(0===a.length)return null;const {selectedTravelMode:c}=this.viewModel,b=c.name||this.messages.travelMode;return e.tsx("select",{"aria-label":b,bind:this,class:this.classes(d.CSS.travelModeSelect,d.CSS.select),key:"esri-directions__travel-mode-options",onchange:this._handleTravelModeChange,
title:b},a.map(g=>e.tsx("option",{key:g,"data-mode":g,selected:g.id===c.id,value:g.id},g.name)))};f._handleTravelModeChange=function(a){a=a.currentTarget;a=a.item(a.selectedIndex);this.viewModel.selectedTravelMode=a["data-mode"]};f._renderStopsContainer=function(){return e.tsx("div",{class:d.CSS.section,key:"esri-directions__stops-container",role:"group"},this._renderStops())};f._renderDepartureTimeControls=function(){const a=this._departureTime,{messages:c}=this,b=c.departureTime;return e.tsx("div",
{class:d.CSS.departureTime,key:"esri-directions__departure-time-controls",role:"group"},e.tsx("select",{"aria-label":b,bind:this,class:this.classes(d.CSS.departureTimeSelect,d.CSS.select),onchange:this._handleDepartureOptionChange,title:b},e.tsx("option",{value:"now",selected:"now"===a},c.leaveNow),e.tsx("option",{value:"depart-by",selected:"depart-by"===a},c.departBy),e.tsx("option",{value:"unspecified",selected:"unspecified"===a},c.timeUnspecified)),"depart-by"===a?this._renderTimeControls():null)};
f._renderStops=function(){const a=this._stops;let c=0;a.forEach(n=>{"none"!==this._acquireSearch(n).activeMenu&&(c+=1)});const b=a.toArray().map((n,l)=>{var q=a.length,w=1<l&&!n.result;const ea={[d.CSS.stopsIcon]:0<=l&&l<q-1,[d.CSS.lastStopIcon]:l===q-1},fa={[d.CSS.lastStopIconContainer]:l===q-1},ha={[d.CSS.validStopRow]:!w};var x=a.getItemAt(q-1),C=x&&x.result;x=(x=a.getItemAt(l+1))&&x.result;var E=l===q-1,F=l===q-2;x=2===q&&0===l||2<q&&!E&&!F||2<q&&F&&x||2<q&&E&&!n.result;q=2===q||3===q&&!C||w;
w=this._acquireSearch(n);({messages:C}=this);const {removeStop:N,reverseStops:O,unlocated:ia}=C;C=H.substitute(C.stopLabelTemplate,{number:l+1,label:n.result?n.result.name:ia});E=`${this.id}__stop--${l}`;n=!!w.searchTerm&&!!w.selectedResult&&!!n.result&&w.selectedResult===n.result;F={zIndex:"none"!==w.activeMenu?`${c--}`:""};return e.tsx("li",{"aria-label":C,afterCreate:this._handleStopFieldCreation,bind:this,class:this.classes(d.CSS.stopRow,ha),id:E,key:l,"data-stop-index":l,styles:F},e.tsx("div",
{class:d.CSS.stopHandle},e.tsx("span",{"aria-hidden":"true",class:this.classes(d.CSS.stopIcon,d.CSS.handleIcon,d.CSS.stopHandleIcon,d.CSS.interactiveStopIcon),onpointerdown:this._handleDragHandlePointerDown}),e.tsx("div",{bind:this,"aria-labelledby":E,class:this.classes(d.CSS.stopIconContainer,fa),"data-stop-index":l,onclick:this._handleStopIconClick,onkeydown:this._handleStopIconClick,role:"button"},e.tsx("span",{class:this.classes(d.CSS.stopIcon,ea),tabindex:n?"0":null}))),e.tsx("div",{class:d.CSS.stopInput},
w.render()),e.tsx("div",{class:d.CSS.stopOptions,role:"group"},e.tsx("div",{"aria-label":N,class:d.CSS.removeStopButton,bind:this,"data-stop-index":l,hidden:q,onkeydown:this._handleRemoveStop,onclick:this._handleRemoveStop,role:"button",tabIndex:0,title:N},e.tsx("span",{"aria-hidden":"true",class:this.classes(d.CSS.stopIcon,d.CSS.removeStop,d.CSS.removeStopIcon,d.CSS.interactiveStopIcon)}),e.tsx("span",{class:d.CSS.screenReaderText},"removeStopTitle")),e.tsx("div",{"aria-label":O,class:d.CSS.reverseStops,
bind:this,hidden:x,onkeydown:this._handleReverseStops,onclick:this._handleReverseStops,role:"button",tabIndex:0,title:O},e.tsx("span",{"aria-hidden":"true",class:this.classes(d.CSS.stopIcon,d.CSS.reverseStopIcon,d.CSS.interactiveStopIcon)}),e.tsx("span",{class:d.CSS.screenReaderText},"removeStopTitle"))))});var g=a.every(n=>{const l=this._stopsToSearches.get(n);return n.result&&l.selectedResult===n.result});const k=this._stops.length>=this.maxStops,p=this.messages.addStop;g=2<=a.length&&g&&!k?e.tsx("div",
{"aria-label":p,bind:this,class:d.CSS.addStop,key:"esri-directions__add-stop",onfocus:this._handleAddStopFocus,tabIndex:0},e.tsx("span",{"aria-hidden":"true",class:this.classes(d.CSS.addStopIcon,d.CSS.stopIcon,d.CSS.interactiveStopIcon)}),e.tsx("div",{"aria-hidden":"true",class:d.CSS.addStopText},p)):null;return e.tsx("div",null,e.tsx("ol",{class:d.CSS.stops,role:"group",afterCreate:this._setUpDragAndDropStops},b),g)};f._handleStopIconClick=function(a){(a=this._stops.getItemAt(a.currentTarget["data-stop-index"]))&&
a.result&&this._centerAtStop(a)};f._handleClearRouteClick=function(){this.viewModel.reset()};f._centerAtStop=function(a){this.viewModel.centerAt(a.result.feature)};f._handleStopFieldCreation=function(a){const c=this._newPlaceholderStop;if(c){a=this._stops.getItemAt(a["data-stop-index"]);if(c===a){const b=this._acquireSearch(a);b.when(()=>{this.renderNow();b.focus()})}this._newPlaceholderStop=null}};f._handleStopInputBlur=function(a,c){this._handles.remove("awaiting-view-click-stop");this.view.cursor=
this._previousCursor;a.selectedResult&&c.result&&a.selectedResult===c.result?this._pointerDownUpHandle.pause():"none"!==a.activeMenu||!a.searchTerm||a.selectedResult===c.result&&(a.selectedResult||c.result)?a.searchTerm||(this._viewClickHandle.resume(),clearTimeout(this._autoStopRemovalTimeoutId),this._autoStopRemovalTimeoutId=setTimeout(()=>{this.destroyed||(this._viewClickHandle.pause(),"searching"===a.viewModel.state?this._pointerDownUpHandle.pause():this._pointerPressedSearchSuggestionStop||(this._removeStop(c),
c.result&&(c.result=null,this._processStops()),this.scheduleRender()))},this._autoStopRemovalDelay)):(a.search(),this._pointerDownUpHandle.pause())};f._handleStopInputFocus=function(a,c){this._pointerDownUpHandle.resume();if(!this._handles.has("awaiting-view-click-stop")){var {view:b,view:{cursor:g}}=this;this._previousCursor=g;this._handles.add(u.init(a,"searchTerm",k=>{b.cursor=0===k.length?"copy":g}),"awaiting-view-click-stop");this._activeStop=c}};f._prepViewClick=function(){const a=this.get("viewModel.view"),
c=B.pausable(a,"click",this._handleViewClick.bind(this)),b=B.pausable(a.surface,"click",()=>{clearTimeout(this._autoStopRemovalTimeoutId);b.pause()});return{remove(){b.remove();c.remove()},pause(){b.pause();c.pause()},resume(){b.resume();c.resume()}}};f._prepPointerDownUpClick=function(){const a=B.pausable(document,"pointerdown",b=>{this._pointerPressedSearchSuggestionStop=M(b)?this._activeStop:null}),c=B.pausable(document,"pointerup",b=>{this._pointerDownUpHandle.pause();b=M(b);const g=this._activeStop;
b||g!==this._pointerPressedSearchSuggestionStop||this._removeStop(g);this.scheduleRender();this._pointerPressedSearchSuggestionStop=b?this._activeStop:null});return{remove(){c.remove();a.remove()},pause(){c.pause();a.pause()},resume(){a.resume()}}};f._handleViewClick=function(a){const c=this._stopsToSearches.get(this._activeStop);c&&!c.searchTerm&&(c.search(a.mapPoint).then(b=>{b=b.results[0].results[0];const g=this._activeStop;g.result=b;g.result.feature.attributes.Name=b.name;c.searchTerm=b.name}),
this.scheduleRender());this._viewClickHandle.pause();clearTimeout(this._autoStopRemovalTimeoutId)};f._handleAddStopFocus=function(){this._addNewPlaceholder()};f._addNewPlaceholder=function(){this._pointerDownUpHandle.pause();if(!this._newPlaceholderStop){var a={};this._stops.add(a);this._newPlaceholderStop=a}};f._handleReverseStops=function(){this._reverseStops()};f._reverseStops=function(){this._stops.reverse();this._processStops()};f._handleRemoveStop=function(a){this._removeStop(this._stops.getItemAt(a.currentTarget["data-stop-index"]));
this._processStops()};f._removeStop=function(a,c=!1){2>=this._stops.length&&!c||(this._disposeSearch(a),this._stops.remove(a))};f._handleDepartureOptionChange=function(a){a=a.currentTarget;a=a.item(a.selectedIndex);"now"===a.value?(this._departureTime="now",this.viewModel.departureTime="now",this._handles.remove("departure-time-controls")):"depart-by"===a.value?(this._departureTime="depart-by",this._handles.add([u.init(this._datePicker,"value",()=>this._updateDepartureTime()),u.init(this._timePicker,
"value",()=>this._updateDepartureTime())],"departure-time-controls")):(this._departureTime="unspecified",this.viewModel.departureTime=null)};f._updateDepartureTime=function(){const a=this._datePicker.value,c=this._timePicker.value;this.viewModel.departureTime=new Date(a.getFullYear(),a.getMonth(),a.getDate(),c.getHours(),c.getMinutes())};f._renderTimeControls=function(){return e.tsx("div",{class:d.CSS.departureTimeControls,key:"esri-directions__time-controls",role:"group"},this._datePicker.render(),
this._timePicker.render())};f._renderSectionSplitter=function(){return e.tsx("div",{class:d.CSS.sectionSplitter})};f._renderDisclaimer=function(){var {messages:a}=this;a=H.substitute(a.disclaimer,{esriTerms:`<a class="${d.CSS.anchor}" href="http://www.esri.com/legal/software-license" rel="noreferrer" target="_blank">${a.esriTerms}</a>`});return e.tsx("div",{class:d.CSS.disclaimer,innerHTML:a,key:"esri-directions__disclaimer"})};f._renderDirectionsContainer=function(){return e.tsx("div",{class:this.classes(d.CSS.directionsSection,
d.CSS.section),key:"esri-directions__container"},this._renderDirectionsContainerContent())};f._renderLoader=function(){return e.tsx("div",{class:d.CSS.loader,key:"loader"})};f._renderWarningCard=function(){return e.tsx("div",{class:d.CSS.warningCard,role:"alert"},e.tsx("div",{class:d.CSS.warningHeader},e.tsx("span",{class:d.CSS.warningIcon,"aria-hidden":"true"}),e.tsx(y.Heading,{class:d.CSS.warningHeading,level:this.headingLevel},this.messagesCommon.warning)),e.tsx("div",{class:d.CSS.warningMessage},
this._getErrorMessage()))};f._renderDirectionsContainerContent=function(){const {lastRoute:a,state:c}=this.viewModel,b="routing"===c;return"error"===c?this._renderWarningCard():b?this._renderLoader():a?e.tsx("div",{class:d.CSS.summary,key:"esri-directions__summary",role:"group"},this._renderCosts(),this._renderRouteActions(),this._renderManeuverSections()):e.tsx("div",{key:"esri-directions__placeholder",class:d.CSS.emptyContent},this._renderPlaceholder(),e.tsx(y.Heading,{class:d.CSS.message,level:this.headingLevel},
this.messages.directionsPlaceholder))};f._renderPlaceholder=function(){return e.tsx("svg",{class:d.CSS.emptyIllustration,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 256 256"},e.tsx("path",{fill:"currentcolor",d:"M192 36c-15.477 0-24 6.034-24 16.99v45.822l24 24 24-24v-45.82C216 42.033 207.477 36 192 36zm20 61.155l-20 20-20-20V52.99c0-8.62 6.73-12.99 20-12.99s20 4.37 20 12.99zM192 52a12 12 0 1 0 12 12 12.013 12.013 0 0 0-12-12zm0 20a8 8 0 1 1 8-8 8.008 8.008 0 0 1-8 8zM92 140.99C92 130.035 83.477 124 68 124s-24 6.034-24 16.99v45.822l24 24 24-24zm-4 44.165l-20 20-20-20V140.99c0-8.62 6.73-12.99 20-12.99s20 4.37 20 12.99zM68 140a12 12 0 1 0 12 12 12.013 12.013 0 0 0-12-12zm0 20a8 8 0 1 1 8-8 8.008 8.008 0 0 1-8 8zm84-44h16v4h-16zm-24 80h4v12h-12v-4h8zm0-28h4v16h-4zm0-52h12v4h-8v8h-4zm0 24h4v16h-4zm-36 64h16v4H92z"}))};
f._renderMessage=function(a){return e.tsx(y.Heading,{level:this.headingLevel},a)};f._renderRouteActions=function(){return e.tsx("div",{class:d.CSS.routeActions},e.tsx("button",{"aria-label":this.messages.clearRoute,class:this.classes(d.CSS.clearRouteButton,d.CSS.button,d.CSS.buttonTertiary),tabIndex:0,onclick:this._handleClearRouteClick,bind:this,type:"button"},this.messages.clearRoute))};f._renderManeuverSections=function(){const {sections:a}=this._routeSections;return e.tsx("div",{class:d.CSS.maneuvers,
role:"group"},a.map((c,b)=>{const {open:g}=c;let k;0<c.maneuvers.length&&g&&(k=e.tsx("ol",{class:d.CSS.maneuverList},c.maneuvers.map(q=>this._renderManeuver(q))));var p=2<a.length;const n=b===a.length-1;b={[d.CSS.collapsibleSection]:p};const l={[d.CSS.openIcon]:!g,[d.CSS.closeIcon]:g};p&&!n?(p=g?this.messagesCommon.open:this.messagesCommon.close,c=e.tsx("header",{class:this.classes(d.CSS.maneuverSectionHeader,d.CSS.maneuverSectionToggle),key:"esri-directions__maneuver-section-header"},e.tsx("div",
{"aria-expanded":g.toString(),"aria-label":p,bind:this,class:d.CSS.maneuverSectionHeaderButton,"data-maneuver-section":c,onkeydown:this._handleSectionToggle,onclick:this._handleSectionToggle,role:"button",tabIndex:0,title:p},e.tsx(y.Heading,{class:d.CSS.maneuverSectionTitle,level:this.headingLevel},c.name),e.tsx("span",{"aria-hidden":"true",class:this.classes(l)})))):c=e.tsx("header",{class:d.CSS.maneuverSectionHeader,key:"esri-directions__maneuver-section-header"},e.tsx(y.Heading,{class:d.CSS.maneuverSectionTitle,
level:this.headingLevel},c.name));return e.tsx("section",{class:this.classes(d.CSS.maneuverSection,b)},c,k)}))};f._handleSectionToggle=function(a){a=a.currentTarget["data-maneuver-section"];a.open=!a.open};f._renderCosts=function(){var a=this.get("viewModel.directionLines"),c=new Date(a[a.length-1].attributes.arriveTimeUTC);a=this._costSummary.set({directionsViewModel:this.viewModel,messages:this.messages,messagesUnits:this.messagesUnits});var {messages:b}=this;const g=b.zoomToRoute;var k=ba.formatDate(c,
da);c=H.substitute(b.etaTemplate,{time:`<strong>${k}</strong>`,gmt:`${ca(c)}`});k=b.primaryCosts;const p=b.secondaryCosts;b=b.eta;return e.tsx("div",{"aria-label":g,bind:this,class:d.CSS.directionCosts,onkeydown:this._handleSummaryInteraction,onclick:this._handleSummaryInteraction,role:"button",tabIndex:0,title:g},e.tsx("div",{class:d.CSS.costsDetails,role:"group"},e.tsx("div",{"aria-label":k,class:d.CSS.primaryCosts,title:k},a.primary),e.tsx("div",{class:d.CSS.verticalSplitter}),e.tsx("div",{"aria-label":p,
class:d.CSS.secondaryCosts,title:p},a.secondary)),e.tsx("div",{"aria-label":b,innerHTML:c,title:b}))};f._handleSummaryInteraction=function(){this._focusedManeuver=this._activeManeuver=null;this.viewModel.clearHighlights();this.zoomToRoute()};f._getErrorMessage=function(){const {messages:a}=this,{error:c}=this.viewModel;return"directions-view-model:unable-to-route"===c.name?a.errors.unableToRoute:"directions-view-model:service-metadata-unavailable"===c.name?a.errors.unableToLoadServiceMetadata:a.errors.unknownError};
f._normalizeSearchSources=function(a){this._overrideDefaultSources(a);this._applyLocatorSourceOverrides(a)};f._overrideDefaultSources=function(a){a.viewModel.defaultSources.forEach(c=>{c.autoNavigate=!1})};f._applyLocatorSourceOverrides=function({allSources:a}){0!==a.length&&a.forEach(c=>{"url"in c&&c.url&&(null===c.locationType&&(c.locationType="street"),J.isArcGISWorldGeocoder(c.url)&&this.apiKey&&null==c.apiKey&&(c.apiKey=this.apiKey,c.url=J.meteredArcGISLocatorUrl))})};f._acquireSearch=function(a){const c=
this.get("viewModel.view");if(this._stopsToSearches.has(a)){const g=this._stopsToSearches.get(a);g.view=c;this._overrideDefaultSources(g);return g}const b=new T({view:c,resultGraphicEnabled:!1,popupEnabled:!1,...this.searchProperties});this._normalizeSearchSources(b);this._handles.add([u.on(b,"allSources","change",()=>this._normalizeSearchSources(b)),b.on("select-result",()=>{a.result=b.selectedResult;a.result.feature.attributes.Name=b.selectedResult.name;this._processStops();this.scheduleRender()}),
b.on("search-focus",()=>this._handleStopInputFocus(b,a)),b.on("search-blur",()=>this._handleStopInputBlur(b,a))],b);this._stopsToSearches.set(a,b);return b};f._disposeSearch=function(a){this._stopsToSearches.get(a).destroy();this._stopsToSearches.delete(a)};f._processStops=function(){const a=this.viewModel;a.stops.removeAll();a.stops.addMany(this._stops.filter(c=>!!c.result).map(c=>c.result.feature));1<a.stops.length&&a.getDirections()};f._renderManeuver=function(a){let c;var {attributes:b}=a,g=this.get("viewModel.routeParameters.directionsLengthUnits");
const {messages:k,messagesUnits:p}=this;g=D.formatDistance(k,p,b.length,{toUnits:g});var n=D.formatTime(b.time),l=D.getAssociatedStop(a);D.useSpatiallyLocalTime(a,this.get("viewModel.routeParameters.startTime"))?c=D.toSpatiallyLocalTimeString(k,b.arriveTimeUTC,b.ETA,"now"===this._departureTime):g&&(c=n?`${g}&nbsp;&middot;&nbsp;${n}`:g);g=this._getFormattedManeuverText(a);b=this._getIconPath(b.maneuverType);if(l)return e.tsx("li",{class:d.CSS.maneuver,key:a},e.tsx("header",null,l.attributes.Name));
l=`esri-directions__maneuver-${a.uid}`;n=`esri-directions__cumulative-costs-${a.uid}`;const q=`esri-directions__intermediate-costs-${a.uid}`;return e.tsx("li",{"aria-labelledby":`${l} ${n} ${q}`,bind:this,class:this.classes(d.CSS.maneuver,{[d.CSS.maneuverActive]:this._activeManeuver===a}),"data-maneuver":a,key:a,onclick:this._handleManeuverClick,onkeydown:this._handleManeuverClick,onfocus:this._handleManeuverFocus,onmouseover:this._handleManeuverMouseOver,onmouseout:this._handleManeuverMouseOut,onblur:this._handleManeuverBlur,
tabIndex:0},e.tsx("img",{alt:"",class:d.CSS.maneuverIcon,src:b}),e.tsx("div",{class:d.CSS.maneuverCostsContainer},e.tsx("span",{id:l,innerHTML:g}),e.tsx("div",{class:d.CSS.maneuverCosts},e.tsx("div",{class:d.CSS.horizontalSplitter}),e.tsx("div",{id:n,"aria-label":k.cumulativeCosts,class:d.CSS.cumulativeCost,innerHTML:"",title:k.cumulativeCosts}),e.tsx("div",{id:q,"aria-label":k.intermediateCosts,class:d.CSS.intermediateCost,innerHTML:c,title:k.intermediateCosts}))))};f._getIconPath=function(a){a=
W.toIconName(a);const c=2===window.devicePixelRatio?"@2x":"";return`${d.getManeuversIconDir()}${a}${c}.png`};f._handleManeuverClick=function(a){a=a.currentTarget["data-maneuver"];this._activeManeuver===a?(this._activeManeuver=null,this.zoomToRoute()):(this._activeManeuver=a,this.viewModel.centerAt(a),this.viewModel.highlightSegment(a))};f._handleManeuverMouseOver=function(a){this._activeManeuver||this._focusedManeuver||this.viewModel.highlightSegment(a.currentTarget["data-maneuver"])};f._handleManeuverMouseOut=
function(){this._activeManeuver||this._focusedManeuver||this.viewModel.clearHighlights()};f._handleManeuverBlur=function(){this._activeManeuver||(this._focusedManeuver=null,this.viewModel.clearHighlights())};f._handleManeuverFocus=function(a){this._activeManeuver||(this._focusedManeuver=a=a.currentTarget["data-maneuver"],this.viewModel.highlightSegment(a))};f._getFormattedManeuverText=function(a){const {attributes:{text:c},strings:b}=a;if(!b)return c;let g=c;b.forEach(k=>{g=g.replace(k.string,`<strong>${k.string}</strong>`)});
return g};return A}(U);m.__decorate([t.aliasOf("viewModel.apiKey")],h.prototype,"apiKey",void 0);m.__decorate([t.aliasOf("viewModel.goToOverride")],h.prototype,"goToOverride",void 0);m.__decorate([v.property()],h.prototype,"headingLevel",void 0);m.__decorate([v.property()],h.prototype,"iconClass",void 0);m.__decorate([v.property({aliasOf:{source:"messages.widgetLabel",overridable:!0}})],h.prototype,"label",void 0);m.__decorate([t.aliasOf("viewModel.lastRoute")],h.prototype,"lastRoute",void 0);m.__decorate([t.aliasOf("viewModel.maxStops")],
h.prototype,"maxStops",void 0);m.__decorate([v.property(),G.messageBundle("esri/widgets/Directions/t9n/Directions")],h.prototype,"messages",void 0);m.__decorate([v.property(),G.messageBundle("esri/t9n/common")],h.prototype,"messagesCommon",void 0);m.__decorate([v.property(),G.messageBundle("esri/core/t9n/Units")],h.prototype,"messagesUnits",void 0);m.__decorate([t.aliasOf("viewModel.routeServiceUrl")],h.prototype,"routeServiceUrl",void 0);m.__decorate([t.aliasOf("viewModel.routeSymbol")],h.prototype,
"routeSymbol",void 0);m.__decorate([v.property()],h.prototype,"searchProperties",void 0);m.__decorate([t.aliasOf("viewModel.stopSymbols")],h.prototype,"stopSymbols",void 0);m.__decorate([t.aliasOf("viewModel.view")],h.prototype,"view",void 0);m.__decorate([v.property({type:I})],h.prototype,"viewModel",void 0);m.__decorate([t.aliasOf("viewModel.getDirections")],h.prototype,"getDirections",null);m.__decorate([t.aliasOf("viewModel.zoomToRoute")],h.prototype,"zoomToRoute",null);m.__decorate([z.accessibleHandler()],
h.prototype,"_handleStopIconClick",null);m.__decorate([z.accessibleHandler()],h.prototype,"_handleClearRouteClick",null);m.__decorate([z.accessibleHandler()],h.prototype,"_handleReverseStops",null);m.__decorate([z.accessibleHandler()],h.prototype,"_handleRemoveStop",null);m.__decorate([z.accessibleHandler()],h.prototype,"_handleSectionToggle",null);m.__decorate([z.accessibleHandler()],h.prototype,"_handleSummaryInteraction",null);m.__decorate([z.accessibleHandler()],h.prototype,"_handleManeuverClick",
null);return h=m.__decorate([S.subclass("esri.widgets.Directions")],h)});