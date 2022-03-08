// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../core/maybe ../core/screenUtils ../core/accessorSupport/decorators/property ../core/arrayUtils ../core/has ../core/accessorSupport/ensureType ../core/accessorSupport/decorators/enumeration ../core/accessorSupport/decorators/subclass ./Symbol3DLayer ./patterns/LineStylePattern3D ./patterns/utils ./support/colors ./support/materialUtils ./support/Symbol3DMaterial ./support/symbolLayerUtils3D".split(" "),function(m,c,g,n,d,b,x,y,p,q,r,
t,u,v,w,h,k){var e;b=e=function(l){function f(a){a=l.call(this,a)||this;a.material=null;a.type="line";a.join="miter";a.cap="butt";a.size=n.px2pt(1);a.pattern=null;return a}m._inheritsLoose(f,l);f.prototype.clone=function(){const a={enabled:this.enabled,material:g.isSome(this.material)?this.material.clone():null,size:this.size,join:this.join,cap:this.cap,pattern:g.isSome(this.pattern)?this.pattern.clone():null};return new e(a)};f.fromSimpleLineSymbol=function(a){a={enabled:!0,size:a.width||1,cap:a.cap||
"butt",join:a.join||"miter",pattern:a.style&&"inside-frame"!==a.style?new t({style:a.style}):null,material:new h.Symbol3DMaterial({color:(a.color||v.white).clone()})};return new e(a)};return f}(r);c.__decorate([d.property({type:h.Symbol3DMaterial,json:{write:!0}})],b.prototype,"material",void 0);c.__decorate([p.enumeration({Line:"line"},{readOnly:!0})],b.prototype,"type",void 0);c.__decorate([d.property({type:k.lineJoins,json:{write:!0,default:"miter"}})],b.prototype,"join",void 0);c.__decorate([d.property({type:k.lineCaps,
json:{write:!0,default:"butt"}})],b.prototype,"cap",void 0);c.__decorate([d.property(w.screenSizeProperty)],b.prototype,"size",void 0);c.__decorate([d.property(u.symbol3dLinePatternProperty)],b.prototype,"pattern",void 0);return b=e=c.__decorate([q.subclass("esri.symbols.LineSymbol3DLayer")],b)});