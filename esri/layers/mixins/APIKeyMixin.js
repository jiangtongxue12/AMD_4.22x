// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/accessorSupport/decorators/property ../../core/arrayUtils ../../core/has ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass".split(" "),function(d,e,f,h,l,m,n,k){d.APIKeyMixin=a=>{a=function(g){function c(){return g.apply(this,arguments)||this}e._inheritsLoose(c,g);e._createClass(c,[{key:"apiKey",get:function(){var b;return this._isOverridden("apiKey")?this._get("apiKey"):"portalItem"in
this?null==(b=this.portalItem)?void 0:b.apiKey:null},set:function(b){null!=b?this._override("apiKey",b):(this._clearOverride("apiKey"),this.clear("apiKey","user"))}}]);return c}(a);f.__decorate([h.property({type:String})],a.prototype,"apiKey",null);return a=f.__decorate([k.subclass("esri.layers.mixins.APIKeyMixin")],a)};Object.defineProperty(d,"__esModule",{value:!0})});