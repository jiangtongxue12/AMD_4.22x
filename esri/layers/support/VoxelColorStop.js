// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../Color ../../core/JSONSupport ../../core/accessorSupport/decorators/property ../../core/arrayUtils ../../core/has ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass".split(" "),function(g,b,h,a,d,m,n,k,l){a=function(e){function f(){var c=e.apply(this,arguments)||this;c.color=null;c.position=0;return c}g._inheritsLoose(f,e);return f}(a.JSONSupport);b.__decorate([d.property({type:h,json:{type:[k.Integer],
write:{enabled:!0,isRequired:!0}}})],a.prototype,"color",void 0);b.__decorate([d.property({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],a.prototype,"position",void 0);return a=b.__decorate([l.subclass("esri.layers.support.VoxelColorStop")],a)});