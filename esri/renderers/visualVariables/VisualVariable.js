// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/jsonMap ../../core/JSONSupport ../../core/Logger ../../core/accessorSupport/decorators/property ../../core/arrayUtils ../../core/has ../../core/accessorSupport/decorators/cast ../../core/accessorSupport/decorators/subclass ../../core/accessorSupport/ensureType ./support/VisualVariableLegendOptions".split(" "),function(h,c,e,b,l,d,t,u,m,n,p,q){const r=l.getLogger("esri.renderers.visualVariables.VisualVariable");e=new e.JSONMap({colorInfo:"color",
transparencyInfo:"opacity",rotationInfo:"rotation",sizeInfo:"size"});b=function(k){function f(a){a=k.call(this,a)||this;a.index=null;a.type=null;a.field=null;a.valueExpression=null;a.valueExpressionTitle=null;a.legendOptions=null;return a}h._inheritsLoose(f,k);var g=f.prototype;g.castField=function(a){return null==a?a:"function"===typeof a?(r.error(".field: field must be a string value"),null):p.ensureString(a)};g.clone=function(){};g.getAttributeHash=function(){return`${this.type}-${this.field}-${this.valueExpression}`};
h._createClass(f,[{key:"arcadeRequired",get:function(){return!!this.valueExpression}}]);return f}(b.JSONSupport);c.__decorate([d.property()],b.prototype,"index",void 0);c.__decorate([d.property({type:e.apiValues,readOnly:!0,json:{read:e.read,write:e.write}})],b.prototype,"type",void 0);c.__decorate([d.property({type:String,json:{write:!0}})],b.prototype,"field",void 0);c.__decorate([m.cast("field")],b.prototype,"castField",null);c.__decorate([d.property({type:String,json:{write:!0}})],b.prototype,
"valueExpression",void 0);c.__decorate([d.property({type:String,json:{write:!0}})],b.prototype,"valueExpressionTitle",void 0);c.__decorate([d.property({readOnly:!0})],b.prototype,"arcadeRequired",null);c.__decorate([d.property({type:q,json:{write:!0}})],b.prototype,"legendOptions",void 0);return b=c.__decorate([n.subclass("esri.renderers.visualVariables.VisualVariable")],b)});