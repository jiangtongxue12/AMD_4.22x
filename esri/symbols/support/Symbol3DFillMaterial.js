// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/maybe ../../core/Logger ../../core/accessorSupport/ensureType ../../core/arrayUtils ../../core/has ../../core/accessorSupport/set ../../core/accessorSupport/decorators/enumeration ../../core/accessorSupport/decorators/subclass ./Symbol3DMaterial".split(" "),function(a,g,e,h,n,p,q,r,t,k,l,m){var c;a.Symbol3DFillMaterial=c=function(f){function d(b){b=f.call(this,b)||this;b.colorMixMode=null;return b}g._inheritsLoose(d,
f);d.prototype.clone=function(){const b={color:h.isSome(this.color)?this.color.clone():null,colorMixMode:this.colorMixMode};return new c(b)};return d}(m.Symbol3DMaterial);e.__decorate([k.enumeration({multiply:"multiply",replace:"replace",tint:"tint"})],a.Symbol3DFillMaterial.prototype,"colorMixMode",void 0);a.Symbol3DFillMaterial=c=e.__decorate([l.subclass("esri.symbols.support.Symbol3DFillMaterial")],a.Symbol3DFillMaterial);a.default=a.Symbol3DFillMaterial;Object.defineProperty(a,"__esModule",{value:!0})});