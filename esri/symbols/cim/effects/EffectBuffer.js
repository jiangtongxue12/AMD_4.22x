// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define(["exports","../../../geometry/support/jsonUtils","../CurveHelper"],function(k,f,l){let m=function(){function d(){}d.local=function(){null===d.instance&&(d.instance=new d);return d.instance};d.prototype.execute=function(a,b,c){return new n(a,b,c)};return d}();m.instance=null;let n=function(){function d(a,b,c){this._inputGeometries=a;this._curveHelper=new l.CurveHelper;this._size=(void 0!==b.size?b.size:1)*c;this._offsetFlattenError=l.PIXEL_TOLERANCE*c}d.prototype.next=function(){let a=this._inputGeometries.next();
for(;a;){if(f.isExtent(a))if(0<this._size){var b=this._curveHelper.offset([[a.xmin,a.ymin],[a.xmin,a.ymax],[a.xmax,a.ymax],[a.xmax,a.ymin],[a.xmin,a.ymin]],this._size,"Rounded",4,this._offsetFlattenError);if(b)return{rings:[b]}}else if(0>this._size){if(0<Math.min(a.xmax-a.xmin,a.ymax-a.ymin)+2*this._size)return{xmin:a.xmin-this._size,xmax:a.xmax+this._size,ymin:a.ymin-this._size,ymax:a.ymax+this._size}}else return a;if(f.isPolygon(a)){if(0===this._size)return a;b=[];for(const e of a.rings){var c=
this._curveHelper.offset(e,this._size,"Rounded",4,this._offsetFlattenError);c&&b.push(c)}if(b.length)return{rings:b}}if(f.isPolyline(a)&&0<this._size){b=[];for(const e of a.paths)if(e&&1<e.length){c=this._curveHelper.offset(e,this._size,"Rounded",4,this._offsetFlattenError);const g=this._curveHelper.offset(e,-this._size,"Rounded",4,this._offsetFlattenError);if(c&&g){for(let h=g.length-1;0<=h;h--)c.push(g[h]);c.push([c[0][0],c[0][1]]);b.push(c)}}if(b.length)return{rings:b}}f.isPoint(a);a=this._inputGeometries.next()}return null};
return d}();k.EffectBuffer=m;Object.defineProperty(k,"__esModule",{value:!0})});