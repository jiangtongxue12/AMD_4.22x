// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define("exports ../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../Graphic ../core/Logger ../core/accessorSupport/ensureType ../core/arrayUtils ../core/has ../core/accessorSupport/set ../core/accessorSupport/decorators/shared ../core/accessorSupport/decorators/subclass ../core/support/OwningCollection".split(" "),function(b,h,d,e,p,k,q,r,t,l,m,n){b.GraphicsCollection=function(f){function c(){return f.apply(this,arguments)||this}h._inheritsLoose(c,f);var g=c.prototype;g._own=function(a){a.layer&&
"remove"in a.layer&&a.layer!==this.owner&&a.layer.remove(a);a.layer=this.owner};g._release=function(a){a.layer===this.owner&&(a.layer=null)};return c}(n.OwningCollection);d.__decorate([l.shared({Type:e,ensureType:k.ensureType(e)})],b.GraphicsCollection.prototype,"itemType",void 0);b.GraphicsCollection=d.__decorate([m.subclass("esri.support.GraphicsCollection")],b.GraphicsCollection);Object.defineProperty(b,"__esModule",{value:!0})});