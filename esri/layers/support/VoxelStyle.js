// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/Collection ../../core/collectionUtils ../../core/JSONSupport ../../core/accessorSupport/decorators/property ../../core/arrayUtils ../../core/has ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass ./VoxelSimpleShading ./VoxelVariableStyle ./VoxelVolumeStyle".split(" "),function(g,c,e,h,b,d,r,t,p,q,k,l,m){b=function(n){function f(a){a=n.call(this,a)||this;a.currentVariableId=0;a.renderMode=
"volume";a.enableSlices=!0;a.enableSections=!0;a.enableDynamicSections=!0;a.enableIsosurfaces=!0;a.shading=new k;a.volumeStyles=new e;a.variableStyles=new e;return a}g._inheritsLoose(f,n);g._createClass(f,[{key:"volumeStyles",set:function(a){this._set("volumeStyles",h.referenceSetter(a,this._get("volumeStyles"),e.ofType(m)))}},{key:"variableStyles",set:function(a){this._set("variableStyles",h.referenceSetter(a,this._get("variableStyles"),e.ofType(l)))}}]);return f}(b.JSONSupport);c.__decorate([d.property({type:e.ofType(m),
json:{write:!0}})],b.prototype,"volumeStyles",null);c.__decorate([d.property({type:p.Integer,json:{write:{enabled:!0,isRequired:!0}}})],b.prototype,"currentVariableId",void 0);c.__decorate([d.property({type:["volume","surfaces"],json:{write:!0}})],b.prototype,"renderMode",void 0);c.__decorate([d.property({type:e.ofType(l),json:{write:!0}})],b.prototype,"variableStyles",null);c.__decorate([d.property({type:Boolean,json:{write:!0}})],b.prototype,"enableSlices",void 0);c.__decorate([d.property({type:Boolean,
json:{write:!0}})],b.prototype,"enableSections",void 0);c.__decorate([d.property({type:Boolean,json:{write:!0}})],b.prototype,"enableDynamicSections",void 0);c.__decorate([d.property({type:Boolean,json:{write:!0}})],b.prototype,"enableIsosurfaces",void 0);c.__decorate([d.property({type:k,json:{write:!0}})],b.prototype,"shading",void 0);return b=c.__decorate([q.subclass("esri.layers.support.VoxelStyle")],b)});