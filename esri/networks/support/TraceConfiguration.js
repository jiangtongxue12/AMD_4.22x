// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/JSONSupport ../../core/accessorSupport/decorators/property ../../core/arrayUtils ../../core/has ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass".split(" "),function(g,c,a,d,k,l,m,h){a=function(e){function f(b){b=e.call(this,b)||this;b.conditionBarriers=[];b.outputConditions=[];b.functions=[];b.functionBarriers=[];b.traversabilityScope=null;b.shortestPathNetworkAttributeName=null;b.includeBarriers=
null;b.validateConsistency=null;b.ignoreBarriersAtStartingPoints=null;return b}g._inheritsLoose(f,e);return f}(a.JSONSupport);c.__decorate([d.property({type:[Object],json:{write:!0}})],a.prototype,"conditionBarriers",void 0);c.__decorate([d.property({type:[Object],json:{write:!0}})],a.prototype,"outputConditions",void 0);c.__decorate([d.property({type:[Object],json:{write:!0}})],a.prototype,"functions",void 0);c.__decorate([d.property({type:[Object],json:{write:!0}})],a.prototype,"functionBarriers",
void 0);c.__decorate([d.property({type:["junctions","edges","junctionsAndEdges"],json:{write:!0}})],a.prototype,"traversabilityScope",void 0);c.__decorate([d.property({type:String,json:{write:!0}})],a.prototype,"shortestPathNetworkAttributeName",void 0);c.__decorate([d.property({type:Boolean,json:{write:!0}})],a.prototype,"includeBarriers",void 0);c.__decorate([d.property({type:Boolean,json:{write:!0}})],a.prototype,"validateConsistency",void 0);c.__decorate([d.property({type:Boolean,json:{write:!0}})],
a.prototype,"ignoreBarriersAtStartingPoints",void 0);return a=c.__decorate([h.subclass("esri.networks.support.TraceConfiguration")],a)});