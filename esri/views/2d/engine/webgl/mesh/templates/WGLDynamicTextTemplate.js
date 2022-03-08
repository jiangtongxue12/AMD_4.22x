// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define("../../../../../../chunks/_rollupPluginBabelHelpers ../../../../../../core/screenUtils ../../alignmentUtils ../../color ../../definitions ../../number ../../materialKey/MaterialKey ./util ./WGLBaseTextTemplate ./WGLDynamicMeshTemplate ../../../../layers/features/textUtils".split(" "),function(u,h,v,q,r,x,y,d,z,A,B){return function(t){function p(a,c,k){var b=t.call(this,a)||this;b._horizontalAlignment="center";b._verticalAlignment="middle";b._textToGlyphs=new Map;b._minMaxZoom=x.i1616to32(Math.round(c*
r.MIN_MAX_ZOOM_PRECISION_FACTOR),Math.round(k*r.MIN_MAX_ZOOM_PRECISION_FACTOR));c=a.scaleFactor||1;b._cimTextLayer=a;d.isFunction(a.color)?b._dynamicPropertyMap.set("_color",(e,f,g)=>q.premultiplyAlphaRGBA(a.color(e,f,g))):b._color=q.premultiplyAlphaRGBA(a.color);d.isFunction(a.color)?b._dynamicPropertyMap.set("_haloColor",(e,f,g)=>q.premultiplyAlphaRGBA(a.outlineColor(e,f,g))):b._haloColor=q.premultiplyAlphaRGBA(a.outlineColor);let m;d.isFunction(a.size)||(m=Math.min(Math.round(h.pt2px(a.size*a.sizeRatio)),
127));b._dynamicPropertyMap.set("_size",(e,f,g)=>d.isFunction(a.size)?Math.min(Math.round(h.pt2px(a.size(e,f,g)*a.sizeRatio)),127):m);d.isFunction(a.outlineSize)?b._dynamicPropertyMap.set("_haloSize",(e,f,g)=>Math.min(Math.floor(5*h.pt2px(a.outlineSize(e,f,g)*a.sizeRatio)),127)):b._haloSize=Math.min(Math.floor(5*h.pt2px(a.outlineSize*a.sizeRatio)),127);let l;d.isFunction(a.offsetX)||(l=Math.round(h.pt2px(a.offsetX*a.sizeRatio)));b._dynamicPropertyMap.set("_xOffset",(e,f,g)=>d.isFunction(a.offsetX)?
Math.round(h.pt2px(a.offsetX(e,f,g)*a.sizeRatio)):l);let n;d.isFunction(a.offsetY)||(n=Math.round(h.pt2px(a.offsetY*a.sizeRatio)));b._dynamicPropertyMap.set("_yOffset",(e,f,g)=>d.isFunction(a.offsetY)?Math.round(h.pt2px(a.offsetY(e,f,g)*a.sizeRatio)):n);d.isFunction(a.angle)?b._dynamicPropertyMap.set("_angle",a.angle):b._angle=a.angle;d.isFunction(a.horizontalAlignment)?b._dynamicPropertyMap.set("_horizontalAlignment",a.horizontalAlignment):b._horizontalAlignment=a.horizontalAlignment;d.isFunction(a.verticalAlignment)?
b._dynamicPropertyMap.set("_verticalAlignment",a.verticalAlignment):b._verticalAlignment=a.verticalAlignment;b._scaleFactor=c;d.isFunction(a.text)?b._dynamicPropertyMap.set("_text",a.text):b._text=a.text;c=Math.min(Math.round(h.pt2px(a.referenceSize*a.sizeRatio)),127);b._referenceSize=Math.round(Math.sqrt(256*c));b._materialKey=a.materialKey;c=y.TextMaterialKey.load(b._materialKey);c.sdf=!0;b._bitset=(1===a.alignment?1:0)|(a.colorLocked?1:0)<<1;b._materialKey=c.data;b._decoration="none";b._lineHeight=
1;b._lineWidth=512;b._textPlacement=a.markerPlacement;b._effects=a.effects;b._isCIM=!0;return b}u._inheritsLoose(p,t);p.fromCIMText=function(a,c){const [k,b]=d.getMinMaxZoom(a.scaleInfo,c);return new p(a,k,b)};var w=p.prototype;w.analyze=function(){var a=u._asyncToGenerator(function*(c,k,b,m){var l=k.readLegacyFeature();var n=this._cimTextLayer;l="string"===typeof n.text?n.text:"function"===typeof n.text?n.text(l,b,m):"";c=yield t.prototype.analyze.call(this,c,k,b,m,B.codepoints(l));this._textToGlyphs.set(l,
c.glyphMosaicItems);return c});return function(c,k,b,m){return a.apply(this,arguments)}}();w.bindFeature=function(a,c,k){const b=a.readLegacyFeature();this._dynamicPropertyMap.forEach((m,l)=>{this[l]=m(b,c,k)});this._text&&0!==this._text.length?(this._size*=this._scaleFactor,this._scale=this._size/r.GLYPH_SIZE,this._xOffset*=this._scaleFactor,this._yOffset*=this._scaleFactor,this._xAlignD=v.getXAnchorDirection(this._horizontalAlignment||"center"),this._yAlignD=v.getYAnchorDirection(this._verticalAlignment||
"baseline"),a=this._textToGlyphs.get(this._text),this.bindTextInfo(a,!1)):this._shapingInfo=null};return p}(z(A))});