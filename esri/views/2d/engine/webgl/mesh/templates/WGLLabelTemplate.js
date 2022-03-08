// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define("../../../../../../chunks/_rollupPluginBabelHelpers ../../../../../../core/Error ../../../../../../core/Logger ../../../../../../core/mathUtils ../../../../../../core/maybe ../../../../../../core/screenUtils ../../alignmentUtils ../../color ../../definitions ../../enums ../../number ../../materialKey/MaterialKey ./meshUtils ./segmentUtils ./WGLTextTemplate".split(" "),function(w,C,D,x,u,y,v,z,E,F,r,G,H,A,I){const J=D.getLogger("esri.views.2d.engine.webgl.WGLLabelTemplate"),K=(n,l="mapview-labeling")=>
J.error(new C(l,n)),L=function(n){const l=new Map;return k=>{l.has(k)||l.set(k,n(k));return l.get(k)}}(n=>{let l=0;if(0===n)return Infinity;for(;!(n%2);)l++,n/=2;return l});return function(n){function l(a,c,b,d){var f,e,h;var g=n.call(this,a,b.font.size,b.haloSize||0,b.font.size,b.color&&z.premultiplyAlphaRGBAArray(b.color)||0,b.haloColor&&z.premultiplyAlphaRGBAArray(b.haloColor)||0,b.horizontalAlignment,b.verticalAlignment,H.isMapAligned(c.labelPlacement)?1:0,b.font.decoration,!1,b.angle||0,b.xoffset,
b.yoffset,b.lineWidth,b.lineHeight,null,null,null,null,null)||this;g._outLineLabelAngle=0;g._refPlacementPadding=0;g._refPlacementDirX=0;g._refPlacementDirY=0;g._refOffsetX=0;g._refOffsetY=0;g._zoomLevel=0;g.geometryType=F.WGLGeometryType.LABEL;g._allowOverrun=null!=(f=c.allowOverrun)?f:!1;g._repeatLabel=null!=(e=c.repeatLabel)?e:!0;g._labelPosition=null!=(h=c.labelPosition)?h:"curved";f=!!c.minScale&&d.scaleToZoom(c.minScale)||0;f=x.clamp(f,0,25.5);d=!!c.maxScale&&d.scaleToZoom(c.maxScale)||255;
d=x.clamp(d,0,25.5);const [q,m]=v.getAlignmentFromPlacement(c.labelPlacement);g._xAlignD=q;g._yAlignD=m;g._minZoom=f;g._maxZoom=d;g._refPlacementPadding=y.pt2px(b.haloSize)+E.TEXT_PLACEMENT_PADDING;g._repeatLabelDistance=c.repeatLabelDistance?y.pt2px(c.repeatLabelDistance):128;a=G.LabelMaterialKey.load(a);a.sdf=!0;g._materialKey=a.data;return g}w._inheritsLoose(l,n);l.fromLabelClass=function(a,c){if("esriServerLinePlacementCenterAlong"===a.labelPlacement){const b=a.symbol;b.xoffset=0;b.yoffset=0;
b.angle=0;b.font.decoration="none"}return new l(a.materialKey,a,a.symbol,c)};var k=l.prototype;k.setZoomLevel=function(a){this._zoomLevel=a};k.bindReferenceTemplate=function(a){let c=v.getXDirection(this._xAlignD),b=v.getYDirection(this._yAlignD);this._refOffsetY=this._refOffsetX=0;if(u.isNone(a))this._refSymbolAndPlacementOffset=r.i8888to32(0,0,Math.floor(127*c+127),Math.floor(127*b+127));else{if("circle"===a.boundsType&&(c||b)){var d=Math.sqrt(c*c+b*b);c/=d;b/=d}d=Math.max(a.height,a.width);this._refSymbolAndPlacementOffset=
r.i8888to32(4*this._refPlacementPadding,d,Math.floor(127*c+127),Math.floor(127*b+127));this._referenceSize=d;this._refPlacementDirX=c;this._refPlacementDirY=b;this._refOffsetX=a.xOffset;this._refOffsetY=a.yOffset}};k._write=function(a,c){if(!u.isNone(this._shapingInfo)){var b=this._shapingInfo,d=c.getDisplayId(),f="esriGeometryPolygon"===c.geometryType?c.readLegacyCentroid():c.readLegacyGeometry();if(f)switch(this.current={out:a,inId:d,inShaping:b,zoomLevel:this._zoomLevel},c.geometryType){case "esriGeometryPolyline":this._placeLineLabels(f);
break;case "esriGeometryPoint":case "esriGeometryPolygon":this._placePointLabels(f);break;default:K("mapview-labeling",`Geometry of type ${c.geometryType} is not supported`)}}};k._isVisible=function(a,c){const b=Math.floor(10*this.current.zoomLevel);return Math.floor(10*a)<=b&&b<=Math.floor(10*c)};k._placePointLabels=function(a){const {out:c,inId:b,inShaping:d}=this.current;this._writeGlyphs(c,b,a,d)};k._placeLineLabels=function(a){a=A.smoothPaths(a.paths,this.current.inShaping.bounds.width);const c=
this._placeSubdivGlyphs.bind(this),b=(this._shapedBox.width+this._repeatLabelDistance)/2;for(const d of a)A.pathDivide(d,b,c,this._repeatLabel)};k._placeSubdivGlyphs=function(a,c,b,d){var f=L(c);b=Math.log2(Math.min(b,d-b)/(Math.sqrt(this._repeatLabelDistance)/2+this._shapedBox.width/2/2));f=Math.max(this._minZoom,this.current.zoomLevel+1-(0===c?b:Math.min(f,b)));b=this.current.zoomLevel-f;d=this._shapedBox.width/2*2**b;this.current.inShaping.isMultiline?0===c&&this._placeStraight(a,f):this._allowOverrun&&
0>b?this._placeStraightAlong(a,this._minZoom):"parallel"===this._labelPosition?this._placeStraightAlong(a,f):"curved"===this._labelPosition&&this._placeCurved(a,f,d)};k._placeStraight=function(a,c){const {out:b,inId:d,inShaping:f}=this.current;this._writeGlyphs(b,d,a,f,c)};k._placeCurved=function(a,c,b){const {out:d,inId:f}=this.current;d.metricStart(f,c,a.x,a.y,0,0,0,0);const e=a.clone(),h=(180/Math.PI*a.angle+180)%360;this._outLineLabelAngle=Math.round(180/Math.PI*a.angle%360*(254/360));this._placeFirst(e,
c,1);this._placeBack(a,e,c,b,1);this._placeForward(a,e,c,b,1);this._outLineLabelAngle=Math.round(254/360*h);this._placeFirst(e,c,0);this._placeBack(a,e,c,b,0);this._placeForward(a,e,c,b,0);d.metricEnd()};k._placeStraightAlong=function(a,c){const {out:b,inId:d}=this.current;b.metricStart(d,c,a.x,a.y,0,0,0,0);const f=a.clone(),e=(180/Math.PI*a.angle+180)%360;this._outLineLabelAngle=Math.round(180/Math.PI*a.angle%360*(254/360));this._placeFirst(f,c,1,!0);this._outLineLabelAngle=Math.round(254/360*e);
this._placeFirst(f,c,0,!0);b.metricEnd()};k._placeBack=function(a,c,b,d,f){const e=a.clone();for(a=a.backwardLength+0;e.prev()&&!(a>=d);)this._placeOnSegment(e,c,a,b,-1,f),a+=e.length+0};k._placeForward=function(a,c,b,d,f){const e=a.clone();for(a=a.remainingLength+0;e.next()&&!(a>=d);)this._placeOnSegment(e,c,a,b,1,f),a+=e.length+0};k._placeFirst=function(a,c,b,d=!1){const f=this.current.inShaping;var e=f.glyphs;const h=this.current.zoomLevel,{out:g,inId:q}=this.current;for(const m of e)e=m.x>f.bounds.x?
b:1-b,e=Math.max(0,h+Math.log2(Math.abs(m.x+m.width/2-f.bounds.x)/(e*a.remainingLength+(1-e)*a.backwardLength))),e=Math.max(c,d?0:e),m.maxZoom=25,m.angle=a.angle+(1-b)*Math.PI,m.minZoom=e,this._writeGlyph(g,q,a.x,a.y,m),b&&this._isVisible(m.minZoom,m.maxZoom)&&(e=m.bounds,g.metricBoxWrite(e.center[0],e.center[1],e.width,e.height))};k._placeOnSegment=function(a,c,b,d,f,e){var h=this.current.inShaping.glyphs;const {out:g,inId:q}=this.current,m=this.current.inShaping,B=this.current.zoomLevel;var M=a.x+
a.dx/a.length*-f*b,N=a.y+a.dy/a.length*-f*b;for(const p of h)if((h=p.x>m.bounds.x?e:1-e)&&1===f||!h&&-1===f){var t=Math.abs(p.x+p.width/2-m.bounds.x);h=Math.max(0,B+Math.log2(t/b)-.1);t=Math.max(d,B+Math.log2(t/(b+a.length+0)));0!==h&&(p.angle=a.angle+(1-e)*Math.PI,p.minZoom=t,p.maxZoom=h,this._writeGlyph(g,q,M,N,p),e&&this._isVisible(p.minZoom,p.maxZoom)&&(h=p.bounds,g.metricBoxWrite(h.center[0]+(a.x-c.x),h.center[1]+(a.y-c.y),h.width,h.height)))}};k._writeGlyphs=function(a,c,b,d,f=this._minZoom){if(!(0>
b.x||512<=b.x||0>b.y||512<=b.y)){var e=b.x+this._refOffsetX;b=b.y-this._refOffsetY;for(const h of d.glyphs)h.minZoom=f,h.maxZoom=this._maxZoom,this._writeGlyph(a,c,e,b,h);d=d.boundsT;a.metricStart(c,f,e,b,this._refPlacementDirX,this._refPlacementDirY,this._referenceSize,this._materialKey);a.metricBoxWrite(d.center[0],d.center[1],d.width,d.height);a.metricEnd()}};k._writeVertexCommon=function(a,c,b,d){const f=this._color,e=this._haloColor,h=r.i8888to32(0,0,this._size,this._haloSize);d=r.i8888to32(Math.floor(10*
Math.max(d.minZoom,this._minZoom)),Math.floor(10*Math.min(d.maxZoom,this._maxZoom)),this._outLineLabelAngle,0);a.vertexWrite(b);a.vertexWrite(c);a.vertexWrite(f);a.vertexWrite(e);a.vertexWrite(h);a.vertexWrite(this._refSymbolAndPlacementOffset);a.vertexWrite(d)};w._createClass(l,[{key:"_shapedBox",get:function(){return u.unwrap(this._shapingInfo).bounds}}]);return l}(I)});