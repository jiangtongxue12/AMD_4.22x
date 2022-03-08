// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../intl ../../../core/Handles ../../../core/maybe ../../../core/accessorSupport/decorators/property ../../../core/arrayUtils ../../../core/has ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/subclass ../SmartMappingSliderViewModel ../../../intl/locale ../../../intl/messages".split(" "),function(h,d,c,p,k,e,v,w,x,q,r,t,u){c=function(l){function g(b){var a=l.call(this,b)||this;a._handles=
new p;a.hasTimeData=!1;a.labelFormatFunction=(f,m)=>"min"===m?a.messages.bottomLabel:"max"===m?a.messages.topLabel:f.toString();a.max=1;a.messages=null;a.min=0;a.zoomingEnabled=!1;return a}h._inheritsLoose(g,l);var n=g.prototype;n.initialize=function(){var b=this;const a=function(){var f=h._asyncToGenerator(function*(){return b.messages=yield u.fetchMessageBundle("esri/widgets/smartMapping/HeatmapSlider/t9n/HeatmapSlider")});return function(){return f.apply(this,arguments)}}();a();this._handles.add(t.onLocaleChange(a))};
n.getStopInfo=function(){const {stops:b}=this;return b&&b.length?b.map(a=>({color:a.color,offset:1-a.ratio})):[]};h._createClass(g,[{key:"state",get:function(){const {messages:b,max:a,min:f}=this;return b&&k.isSome(a)&&k.isSome(f)?"ready":"disabled"}},{key:"stops",get:function(){return this.stops}},{key:"values",get:function(){const {stops:b}=this;return!b||!b.length||2>b.length?[]:[b[0].ratio,b[b.length-1].ratio]}}]);return g}(r);d.__decorate([e.property({readOnly:!0})],c.prototype,"hasTimeData",
void 0);d.__decorate([e.property({readOnly:!0})],c.prototype,"labelFormatFunction",void 0);d.__decorate([e.property({readOnly:!0})],c.prototype,"max",void 0);d.__decorate([e.property()],c.prototype,"messages",void 0);d.__decorate([e.property({readOnly:!0})],c.prototype,"min",void 0);d.__decorate([e.property({readOnly:!0})],c.prototype,"state",null);d.__decorate([e.property()],c.prototype,"stops",null);d.__decorate([e.property({readOnly:!0})],c.prototype,"values",null);d.__decorate([e.property({readOnly:!0})],
c.prototype,"zoomingEnabled",void 0);return c=d.__decorate([q.subclass("esri.widgets.smartMapping.HeatmapSlider.HeatmapSliderViewModel")],c)});