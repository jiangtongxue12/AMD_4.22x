// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define("exports ../../../../../chunks/_rollupPluginBabelHelpers ../shaders/VTLBackgroundMaterial ../shaders/VTLCircleMaterial ../shaders/VTLFillMaterial ../shaders/VTLLineMaterial ../shaders/VTLSymbolMaterial ./Filter ./StyleDefinition ./StyleProperty ../../webgl/definitions".split(" "),function(p,y,z,A,q,B,w,G,l,C,H){let x=function(){function g(a,b,d,e){this.type=a;this.typeName=b.type;this.id=b.id;this.source=b.source;this.sourceLayer=b["source-layer"];this.minzoom=b.minzoom;this.maxzoom=b.maxzoom;
this.filter=b.filter;this.layout=b.layout;this.paint=b.paint;this.z=d;this.uid=e;switch(a){case 0:this._layoutDefinition=l.StyleDefinition.backgroundLayoutDefinition;this._paintDefinition=l.StyleDefinition.backgroundPaintDefinition;break;case 1:this._layoutDefinition=l.StyleDefinition.fillLayoutDefinition;this._paintDefinition=l.StyleDefinition.fillPaintDefinition;break;case 2:this._layoutDefinition=l.StyleDefinition.lineLayoutDefinition;this._paintDefinition=l.StyleDefinition.linePaintDefinition;
break;case 3:this._layoutDefinition=l.StyleDefinition.symbolLayoutDefinition;this._paintDefinition=l.StyleDefinition.symbolPaintDefinition;break;case 4:this._layoutDefinition=l.StyleDefinition.circleLayoutDefinition,this._paintDefinition=l.StyleDefinition.circlePaintDefinition}this._layoutProperties=this._parseLayout(this.layout);this._paintProperties=this._parsePaint(this.paint)}var c=g.prototype;c.getFeatureFilter=function(){return void 0!==this._featureFilter?this._featureFilter:this._featureFilter=
G.createFilter(this.filter)};c.getLayoutProperty=function(a){return this._layoutProperties[a]};c.getPaintProperty=function(a){return this._paintProperties[a]};c.getLayoutValue=function(a,b,d){let e;const f=this._layoutProperties[a];f&&(e=f.getValue(b,d));void 0===e&&(e=this._layoutDefinition[a]["default"]);return e};c.getPaintValue=function(a,b,d){let e;const f=this._paintProperties[a];f&&(e=f.getValue(b,d));void 0===e&&(e=this._paintDefinition[a]["default"]);return e};c.isPainterDataDriven=function(){const a=
this._paintProperties;if(a)for(const b in a)if(a[b].isDataDriven)return!0;return!1};c._parseLayout=function(a){const b={};for(const d in a){const e=this._layoutDefinition[d];e&&(b[d]=new C(e,a[d]))}return b};c._parsePaint=function(a){const b={};for(const d in a){const e=this._paintDefinition[d];e&&(b[d]=new C(e,a[d]))}return b};c.computeAttributesKey=function(a,b,d,e){let f=0,k=0;for(const h of b){b=3;if(!h||h!==e){const {isLayout:m,isOptional:n}=d[h];b=m?this.getLayoutProperty(h):this.getPaintProperty(h);
b=null!=b&&b.interpolator?2:null!=b&&b.isDataDriven?1:n&&!b?3:0}k|=b<<f;f+=2}return k<<3|a};return g}(),I=function(g){function c(a,b,d,e){a=g.call(this,a,b,d,e)||this;a.backgroundMaterial=new z.VTLBackgroundMaterial(a.computeAttributesKey(0,z.VTLBackgroundMaterial.ATTRIBUTES,z.VTLBackgroundMaterial.ATTRIBUTES_INFO));return a}y._inheritsLoose(c,g);return c}(x),J=function(g){function c(a,b,d,e){a=g.call(this,a,b,d,e)||this;b=a.getPaintProperty("fill-color");d=a.getPaintProperty("fill-opacity");e=a.getPaintProperty("fill-pattern");
a.hasDataDrivenColor=null==b?void 0:b.isDataDriven;a.hasDataDrivenOpacity=null==d?void 0:d.isDataDriven;a.hasDataDrivenFill=a.hasDataDrivenColor||a.hasDataDrivenOpacity||(null==e?void 0:e.isDataDriven);d=a.getPaintProperty("fill-outline-color");a.outlineUsesFillColor=!d;a.hasDataDrivenOutlineColor=null==d?void 0:d.isDataDriven;a.hasDataDrivenOutline=d?d.isDataDriven:b?b.isDataDriven:!1;a.hasDataDrivenOutline=(d?a.hasDataDrivenOutlineColor:a.hasDataDrivenColor)||a.hasDataDrivenOpacity;a.fillMaterial=
new q.VTLFillMaterial(a.computeAttributesKey(1,q.VTLFillMaterial.ATTRIBUTES,q.VTLFillMaterial.ATTRIBUTES_INFO));a.outlineMaterial=new q.VTLOutlineMaterial(a.computeAttributesKey(2,a.outlineUsesFillColor?q.VTLOutlineMaterial.ATTRIBUTES_FILL:q.VTLOutlineMaterial.ATTRIBUTES_OUTLINE,a.outlineUsesFillColor?q.VTLOutlineMaterial.ATTRIBUTES_INFO_FILL:q.VTLOutlineMaterial.ATTRIBUTES_INFO_OUTLINE),a.outlineUsesFillColor);return a}y._inheritsLoose(c,g);return c}(x),K=function(g){function c(a,b,d,e){var f,k,
h,m,n,r,t,u,v;a=g.call(this,a,b,d,e)||this;b=a.getPaintProperty("line-pattern");a.lineMaterial=new B.VTLLineMaterial(a.computeAttributesKey(3,B.VTLLineMaterial.ATTRIBUTES,B.VTLLineMaterial.ATTRIBUTES_INFO,b?"line-dasharray":""));a.hasDataDrivenLine=(null==(f=a.getPaintProperty("line-blur"))?void 0:f.isDataDriven)||(null==(k=a.getPaintProperty("line-color"))?void 0:k.isDataDriven)||(null==(h=a.getPaintProperty("line-gap-width"))?void 0:h.isDataDriven)||(null==(m=a.getPaintProperty("line-offset"))?
void 0:m.isDataDriven)||(null==(n=a.getPaintProperty("line-opacity"))?void 0:n.isDataDriven)||(null==(r=a.getPaintProperty("line-pattern"))?void 0:r.isDataDriven)||(null==(t=a.getPaintProperty("line-dasharray"))?void 0:t.isDataDriven)||(null==(u=a.getLayoutProperty("line-cap"))?void 0:u.isDataDriven)||(null==(v=a.getPaintProperty("line-width"))?void 0:v.isDataDriven);a.canUseThinTessellation=!1;!a.hasDataDrivenLine&&(f=a.getPaintProperty("line-width"),!f||"number"===typeof f&&.5*f<H.THIN_LINE_HALF_WIDTH_THRESHOLD)&&
(f=a.getPaintProperty("line-offset"),!f||"number"===typeof f&&0===f)&&(a.canUseThinTessellation=!0);return a}y._inheritsLoose(c,g);c.prototype.getDashKey=function(a,b){switch(b){case 0:b="Butt";break;case 1:b="Round";break;case 2:b="Square";break;default:b="Butt"}return`dasharray-[${a.toString()}]-${b}`};return c}(x),L=function(g){function c(a,b,d,e){var f,k,h,m,n,r,t,u,v,D,E,F;a=g.call(this,a,b,d,e)||this;a.iconMaterial=new w.VTLIconMaterial(a.computeAttributesKey(4,w.VTLIconMaterial.ATTRIBUTES,
w.VTLIconMaterial.ATTRIBUTES_INFO));a.textMaterial=new w.VTLTextMaterial(a.computeAttributesKey(6,w.VTLTextMaterial.ATTRIBUTES,w.VTLTextMaterial.ATTRIBUTES_INFO));a.hasDataDrivenIcon=(null==(f=a.getPaintProperty("icon-color"))?void 0:f.isDataDriven)||(null==(k=a.getPaintProperty("icon-halo-blur"))?void 0:k.isDataDriven)||(null==(h=a.getPaintProperty("icon-halo-color"))?void 0:h.isDataDriven)||(null==(m=a.getPaintProperty("icon-halo-width"))?void 0:m.isDataDriven)||(null==(n=a.getPaintProperty("icon-opacity"))?
void 0:n.isDataDriven)||(null==(r=a.getLayoutProperty("icon-size"))?void 0:r.isDataDriven);a.hasDataDrivenText=(null==(t=a.getPaintProperty("text-color"))?void 0:t.isDataDriven)||(null==(u=a.getPaintProperty("text-halo-blur"))?void 0:u.isDataDriven)||(null==(v=a.getPaintProperty("text-halo-color"))?void 0:v.isDataDriven)||(null==(D=a.getPaintProperty("text-halo-width"))?void 0:D.isDataDriven)||(null==(E=a.getPaintProperty("text-opacity"))?void 0:E.isDataDriven)||(null==(F=a.getLayoutProperty("text-size"))?
void 0:F.isDataDriven);return a}y._inheritsLoose(c,g);return c}(x),M=function(g){function c(a,b,d,e){a=g.call(this,a,b,d,e)||this;a.circleMaterial=new A.VTLCircleMaterial(a.computeAttributesKey(5,A.VTLCircleMaterial.ATTRIBUTES,A.VTLCircleMaterial.ATTRIBUTES_INFO));return a}y._inheritsLoose(c,g);return c}(x),N=function(){function g(c,a,b){var d,e,f,k,h;this.allowOverlap=c.getLayoutValue("icon-allow-overlap",a);this.ignorePlacement=c.getLayoutValue("icon-ignore-placement",a);this.keepUpright=c.getLayoutValue("icon-keep-upright",
a);this.optional=c.getLayoutValue("icon-optional",a);this.rotationAlignment=c.getLayoutValue("icon-rotation-alignment",a);2===this.rotationAlignment&&(this.rotationAlignment=b?0:1);b=c.getLayoutProperty("icon-anchor");null!=(d=b)&&d.isDataDriven?this._anchorProp=b:this.anchor=c.getLayoutValue("icon-anchor",a);b=c.getLayoutProperty("icon-offset");null!=(e=b)&&e.isDataDriven?this._offsetProp=b:this.offset=c.getLayoutValue("icon-offset",a);b=c.getLayoutProperty("icon-padding");null!=(f=b)&&f.isDataDriven?
this._paddingProp=b:this.padding=c.getLayoutValue("icon-padding",a);b=c.getLayoutProperty("icon-rotate");null!=(k=b)&&k.isDataDriven?this._rotateProp=b:this.rotate=c.getLayoutValue("icon-rotate",a);b=c.getLayoutProperty("icon-size");null!=(h=b)&&h.isDataDriven?this._sizeProp=b:this.size=c.getLayoutValue("icon-size",a)}g.prototype.update=function(c,a){this._anchorProp&&(this.anchor=this._anchorProp.getValue(c,a));this._offsetProp&&(this.offset=this._offsetProp.getValue(c,a));this._paddingProp&&(this.padding=
this._paddingProp.getValue(c,a));this._rotateProp&&(this.rotate=this._rotateProp.getValue(c,a));this._sizeProp&&(this.size=this._sizeProp.getValue(c,a))};return g}(),O=function(){function g(c,a,b){var d,e,f,k,h,m,n,r,t,u,v;this.allowOverlap=c.getLayoutValue("text-allow-overlap",a);this.ignorePlacement=c.getLayoutValue("text-ignore-placement",a);this.keepUpright=c.getLayoutValue("text-keep-upright",a);this.optional=c.getLayoutValue("text-optional",a);this.rotationAlignment=c.getLayoutValue("text-rotation-alignment",
a);2===this.rotationAlignment&&(this.rotationAlignment=b?0:1);b=c.getLayoutProperty("text-anchor");null!=(d=b)&&d.isDataDriven?this._anchorProp=b:this.anchor=c.getLayoutValue("text-anchor",a);b=c.getLayoutProperty("text-justify");null!=(e=b)&&e.isDataDriven?this._justifyProp=b:this.justify=c.getLayoutValue("text-justify",a);b=c.getLayoutProperty("text-letter-spacing");null!=(f=b)&&f.isDataDriven?this._letterSpacingProp=b:this.letterSpacing=c.getLayoutValue("text-letter-spacing",a);b=c.getLayoutProperty("text-line-height");
null!=(k=b)&&k.isDataDriven?this._lineHeightProp=b:this.lineHeight=c.getLayoutValue("text-line-height",a);b=c.getLayoutProperty("text-max-angle");null!=(h=b)&&h.isDataDriven?this._maxAngleProp=b:this.maxAngle=c.getLayoutValue("text-max-angle",a);b=c.getLayoutProperty("text-max-width");null!=(m=b)&&m.isDataDriven?this._maxWidthProp=b:this.maxWidth=c.getLayoutValue("text-max-width",a);b=c.getLayoutProperty("text-offset");null!=(n=b)&&n.isDataDriven?this._offsetProp=b:this.offset=c.getLayoutValue("text-offset",
a);b=c.getLayoutProperty("text-padding");null!=(r=b)&&r.isDataDriven?this._paddingProp=b:this.padding=c.getLayoutValue("text-padding",a);b=c.getLayoutProperty("text-rotate");null!=(t=b)&&t.isDataDriven?this._rotateProp=b:this.rotate=c.getLayoutValue("text-rotate",a);b=c.getLayoutProperty("text-size");null!=(u=b)&&u.isDataDriven?this._sizeProp=b:this.size=c.getLayoutValue("text-size",a);b=c.getLayoutProperty("text-writing-mode");null!=(v=b)&&v.isDataDriven?this._writingModeProp=b:this.writingMode=
c.getLayoutValue("text-writing-mode",a)}g.prototype.update=function(c,a){this._anchorProp&&(this.anchor=this._anchorProp.getValue(c,a));this._justifyProp&&(this.justify=this._justifyProp.getValue(c,a));this._letterSpacingProp&&(this.letterSpacing=this._letterSpacingProp.getValue(c,a));this._lineHeightProp&&(this.lineHeight=this._lineHeightProp.getValue(c,a));this._maxAngleProp&&(this.maxAngle=this._maxAngleProp.getValue(c,a));this._maxWidthProp&&(this.maxWidth=this._maxWidthProp.getValue(c,a));this._offsetProp&&
(this.offset=this._offsetProp.getValue(c,a));this._paddingProp&&(this.padding=this._paddingProp.getValue(c,a));this._rotateProp&&(this.rotate=this._rotateProp.getValue(c,a));this._sizeProp&&(this.size=this._sizeProp.getValue(c,a));this._writingModeProp&&(this.writingMode=this._writingModeProp.getValue(c,a))};return g}();p.BackgroundStyleLayer=I;p.CircleStyleLayer=M;p.FillStyleLayer=J;p.IconLayout=N;p.LineStyleLayer=K;p.StyleLayer=x;p.SymbolStyleLayer=L;p.TextLayout=O;Object.defineProperty(p,"__esModule",
{value:!0})});