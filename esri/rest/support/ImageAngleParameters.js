// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../geometry ../../core/JSONSupport ../../core/lang ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass ../../geometry/Point ../../geometry/SpatialReference".split(" "),function(h,b,a,k,l,d,m,n,p,q){var e;a=e=function(g){function f(){var c=g.apply(this,arguments)||this;c.angleNames=null;c.point=null;c.spatialReference=null;c.rasterId=null;return c}
h._inheritsLoose(f,g);f.prototype.clone=function(){return new e(l.clone({angleNames:this.angleNames,point:this.point,spatialReference:this.spatialReference,rasterId:this.rasterId}))};return f}(k.JSONSupport);b.__decorate([d.property({type:[String],json:{name:"angleName",write:!0}})],a.prototype,"angleNames",void 0);b.__decorate([d.property({type:p,json:{write:!0}})],a.prototype,"point",void 0);b.__decorate([d.property({type:q,json:{write:!0}})],a.prototype,"spatialReference",void 0);b.__decorate([d.property({type:m.Integer,
json:{write:!0}})],a.prototype,"rasterId",void 0);return a=e=b.__decorate([n.subclass("esri.rest.support.ImageAngleParameters")],a)});