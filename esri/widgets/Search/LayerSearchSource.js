// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/lang ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass ./SearchSource ./support/layerSearchUtils".split(" "),function(k,d,n,e,c,r,t,p){var m;c=m=function(q){function l(a){var b=q.call(this,a)||this;b.displayField=null;b.exactMatch=null;b.orderByFields=null;b.searchFields=null;b.searchTemplate=null;b.suggestionTemplate=null;b.getResults=
(f,g)=>p.getResults({source:k._assertThisInitialized(b),...f},g);b.getSuggestions=(f,g)=>p.getSuggestions({source:k._assertThisInitialized(b),...f},g);return b}k._inheritsLoose(l,q);var h=l.prototype;h.clone=function(){return new m({autoNavigate:this.autoNavigate,filter:this.filter,maxResults:this.maxResults,maxSuggestions:this.maxSuggestions,minSuggestCharacters:this.minSuggestCharacters,outFields:this.outFields?n.clone(this.outFields):null,placeholder:this.placeholder,popupEnabled:this.popupEnabled,
prefix:this.prefix,resultGraphicEnabled:this.resultGraphicEnabled,resultSymbol:this.resultSymbol?this.resultSymbol.clone():null,suggestionsEnabled:this.suggestionsEnabled,suffix:this.suffix,withinViewEnabled:this.withinViewEnabled,displayField:this.displayField,exactMatch:this.exactMatch,layer:this.layer,searchFields:this.searchFields?n.clone(this.searchFields):null,suggestionTemplate:this.suggestionTemplate,zoomScale:this.zoomScale})};h._getFirstStringField=function(){var a,b;return null!=(a=null==
(b=this.layer.fieldsIndex.fields.find(f=>"string"===f.type))?void 0:b.name)?a:""};h._getDisplayField=function(){return this.displayField||this.layer.displayField||this._getFirstStringField()};h._getSearchFieldsString=function(){const {layer:a,searchFields:b}=this;return a.loaded?`: ${(b||[this._getDisplayField()]).map(f=>{const g=a.getField(f);return g&&g.alias||f}).join(", ")}`:""};h._getLayerTitle=function(){var {layer:a}=this;if(a&&({title:a}=a,a))return`${a}${this._getSearchFieldsString()}`};
k._createClass(l,[{key:"layer",set:function(a){this._set("layer",a);a&&a.load().catch(()=>{})}},{key:"name",get:function(){return this._getLayerTitle()||""},set:function(a){void 0===a?this._clearOverride("name"):this._override("name",a)}}]);return l}(t);d.__decorate([e.property({json:{read:{source:"field.name"},write:{target:"field.name"}}})],c.prototype,"displayField",void 0);d.__decorate([e.property({json:{read:{source:"field.exactMatch"},write:{target:"field.exactMatch"}}})],c.prototype,"exactMatch",
void 0);d.__decorate([e.property({value:null})],c.prototype,"layer",null);d.__decorate([e.property()],c.prototype,"name",null);d.__decorate([e.property({type:[String],json:{write:!0}})],c.prototype,"orderByFields",void 0);d.__decorate([e.property()],c.prototype,"searchFields",void 0);d.__decorate([e.property()],c.prototype,"searchTemplate",void 0);d.__decorate([e.property()],c.prototype,"suggestionTemplate",void 0);return c=m=d.__decorate([r.subclass("esri.widgets.Search.LayerSearchSource")],c)});