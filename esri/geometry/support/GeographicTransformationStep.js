// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define(["../../chunks/_rollupPluginBabelHelpers"],function(e){let c=0;return function(){function b(a=null){this.uid=c++;a?(this._wkt=void 0!==a.wkt?a.wkt:null,this._wkid=void 0!==a.wkid?a.wkid:-1,this._isInverse=void 0!==a.isInverse?!0===a.isInverse:!1):(this._wkt=null,this._wkid=-1,this._isInverse=!1)}b.fromGE=function(a){const d=new b;d._wkt=a.wkt;d._wkid=a.wkid;d._isInverse=a.isInverse;return d};b.prototype.getInverse=function(){const a=new b;a._wkt=this.wkt;a._wkid=this._wkid;a._isInverse=!this.isInverse;
return a};e._createClass(b,[{key:"wkt",get:function(){return this._wkt},set:function(a){this._wkt=a;this.uid=c++}},{key:"wkid",get:function(){return this._wkid},set:function(a){this._wkid=a;this.uid=c++}},{key:"isInverse",get:function(){return this._isInverse},set:function(a){this._isInverse=a;this.uid=c++}}]);return b}()});