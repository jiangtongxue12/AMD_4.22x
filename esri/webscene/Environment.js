// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../core/JSONSupport ../core/lang ../core/accessorSupport/decorators/property ../core/accessorSupport/ensureType ../core/accessorSupport/decorators/subclass ./Lighting ./background/utils".split(" "),function(m,c,a,n,e,g,p,h,q){var k;g=(l,f,d)=>({enabled:!d||!d.isPresentation});a=k=function(l){function f(b){b=l.call(this,b)||this;b.lighting=new h;b.background=null;b.atmosphereEnabled=!0;b.starsEnabled=!0;return b}m._inheritsLoose(f,l);
var d=f.prototype;d.clone=function(){return new k(this.cloneConstructProperties())};d.cloneConstructProperties=function(){return{lighting:h.prototype.clone.call(this.lighting),background:n.clone(this.background),atmosphereEnabled:this.atmosphereEnabled,starsEnabled:this.starsEnabled}};return f}(a.JSONSupport);c.__decorate([e.property({type:h,json:{write:!0}})],a.prototype,"lighting",void 0);c.__decorate([e.property(q.backgroundProperty)],a.prototype,"background",void 0);c.__decorate([e.property({type:Boolean,
nonNullable:!0,json:{write:{overridePolicy:g}}})],a.prototype,"atmosphereEnabled",void 0);c.__decorate([e.property({type:Boolean,nonNullable:!0,json:{write:{overridePolicy:g}}})],a.prototype,"starsEnabled",void 0);return a=k=c.__decorate([p.subclass("esri.webscene.Environment")],a)});