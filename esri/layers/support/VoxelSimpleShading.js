// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/JSONSupport ../../core/accessorSupport/decorators/property ../../core/arrayUtils ../../core/has ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass".split(" "),function(g,b,a,d,k,l,m,h){a=function(e){function f(){var c=e.apply(this,arguments)||this;c.diffuseFactor=.5;c.specularFactor=.5;return c}g._inheritsLoose(f,e);return f}(a.JSONSupport);b.__decorate([d.property({type:Number,range:{min:0,
max:1},json:{default:.5,write:!0}})],a.prototype,"diffuseFactor",void 0);b.__decorate([d.property({type:Number,range:{min:0,max:1},json:{default:.5,write:!0}})],a.prototype,"specularFactor",void 0);return a=b.__decorate([h.subclass("esri.layers.support.VoxelSimpleShading")],a)});