// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../Color ../../core/JSONSupport ../../core/maybe ../../core/screenUtils ../../core/accessorSupport/decorators/property ../../core/arrayUtils ../../core/has ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass ./materialUtils".split(" "),function(k,c,l,b,m,n,f,q,r,t,p,g){var d;b=d=function(h){function e(a){a=h.call(this,a)||this;a.color=new l([0,0,0,1]);a.size=n.px2pt(1);return a}k._inheritsLoose(e,
h);e.prototype.clone=function(){const a={color:m.isSome(this.color)?this.color.clone():null,size:this.size};return new d(a)};return e}(b.JSONSupport);c.__decorate([f.property(g.colorAndTransparencyProperty)],b.prototype,"color",void 0);c.__decorate([f.property(g.screenSizeProperty)],b.prototype,"size",void 0);return b=d=c.__decorate([p.subclass("esri.symbols.support.Symbol3DIconOutline")],b)});