// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/JSONSupport","../../core/accessorSupport/decorators/property","../../core/accessorSupport/decorators/subclass"],function(g,c,a,d,h){a=function(e){function f(b){b=e.call(this,b)||this;b.description=null;b.label=null;b.type=null;b.visibilityExpression=null;return b}g._inheritsLoose(f,e);return f}(a.JSONSupport);c.__decorate([d.property({type:String,json:{write:!0}})],a.prototype,"description",void 0);c.__decorate([d.property({type:String,
json:{write:!0}})],a.prototype,"label",void 0);c.__decorate([d.property()],a.prototype,"type",void 0);c.__decorate([d.property({type:String,json:{write:!0}})],a.prototype,"visibilityExpression",void 0);return a=c.__decorate([h.subclass("esri.form.elements.Element")],a)});