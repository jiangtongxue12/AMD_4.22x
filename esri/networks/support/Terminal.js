// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/JSONSupport ../../core/accessorSupport/decorators/property ../../core/arrayUtils ../../core/has ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass".split(" "),function(g,c,a,d,k,l,m,h){a=function(e){function f(b){b=e.call(this,b)||this;b.id=null;b.name=null;return b}g._inheritsLoose(f,e);return f}(a.JSONSupport);c.__decorate([d.property({type:Number,json:{read:{source:"terminalId"},write:{target:"terminalId"}}})],
a.prototype,"id",void 0);c.__decorate([d.property({type:String,json:{read:{source:"terminalName"},write:{target:"terminalName"}}})],a.prototype,"name",void 0);c.__decorate([d.property({type:Boolean,json:{write:!0}})],a.prototype,"isUpstreamTerminal",void 0);return a=c.__decorate([h.subclass("esri.networks.support.Terminal")],a)});