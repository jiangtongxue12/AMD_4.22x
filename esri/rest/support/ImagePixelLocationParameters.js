// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../geometry ../../core/JSONSupport ../../core/accessorSupport/decorators/property ../../core/arrayUtils ../../core/has ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass ../../core/accessorSupport/decorators/writer ../../geometry/Point".split(" "),function(k,c,b,l,f,u,v,m,n,p,q){var d;b=d=function(g){function e(){var a=g.apply(this,arguments)||this;a.geometries=null;a.rasterId=null;return a}
k._inheritsLoose(e,g);var h=e.prototype;h.writeGeometry=function(a,r,w){r.geometries={geometryType:"esriGeometryPoint",geometries:a.map(t=>t.toJSON())}};h.clone=function(){return new d({geometries:this.geometries.map(a=>a.clone()),rasterId:this.rasterId})};return e}(l.JSONSupport);c.__decorate([f.property({type:[q],json:{write:!0}})],b.prototype,"geometries",void 0);c.__decorate([p.writer("geometries")],b.prototype,"writeGeometry",null);c.__decorate([f.property({type:m.Integer,json:{write:!0}})],
b.prototype,"rasterId",void 0);return b=d=c.__decorate([n.subclass("esri.rest.support.ImagePixelLocationParameters")],b)});