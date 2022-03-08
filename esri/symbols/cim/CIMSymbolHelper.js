// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define("exports ../../Color ../../core/BidiText ../../core/floatRGBA ../../core/lang ../../core/Logger ../../core/mathUtils ../../core/maybe ../../core/screenUtils ../../geometry/support/aaBoundingRect ../../geometry/support/boundsUtils ./CIMPlacements ./CIMSymbolDrawHelper ./utils ../../views/2d/engine/vectorTiles/GeometryUtils ../../views/2d/engine/webgl/definitions ../../views/2d/engine/webgl/mesh/templates/shapingUtils".split(" "),function(w,V,L,W,M,G,N,X,D,A,Y,O,B,n,E,P,Z){function F(d,a){switch(a.type){case "CIMSymbolReference":return F(d,
a.symbol);case "CIMPointSymbol":d.drawSymbol(a,{x:0,y:0});break;case "CIMLineSymbol":d.drawSymbol(a,{paths:[[[0,0],[0,1]]]});break;case "CIMPolygonSymbol":d.drawSymbol(a,{rings:[[[0,0],[0,1],[0,0]]]});break;case "CIMTextSymbol":d.drawSymbol(a,{x:0,y:0});break;case "CIMVectorMarker":{const b=new O.Placement;d.drawMarker(a,b)}}return d.envelope()}function aa(d){if(!d)return 0;switch(d.type){case "CIMMarkerPlacementAlongLineSameSize":return Math.abs(d.offset);case "CIMMarkerPlacementAlongLineRandomSize":return Math.abs(d.offset);
case "CIMMarkerPlacementAtExtremities":return Math.abs(d.offset);case "CIMMarkerPlacementAtMeasuredUnits":return Math.abs(d.offset);case "CIMMarkerPlacementAtRatioPositions":return Math.abs(d.offset);case "CIMMarkerPlacementInsidePolygon":return 0;case "CIMMarkerPlacementOnLine":return Math.abs(d.offset);case "CIMMarkerPlacementOnVertices":return Math.abs(d.offset);case "CIMMarkerPlacementPolygonCenter":return 0;default:return 0}}function ba(d){if(!d)return 0;switch(d.type){case "CIMGeometricEffectArrow":return Math.abs(.5*
d.width);case "CIMGeometricEffectBuffer":return Math.abs(d.size);case "CIMGeometricEffectExtension":return Math.abs(d.length);case "CIMGeometricEffectJog":return Math.abs(.5*d.length);case "CIMGeometricEffectMove":return Math.max(Math.abs(n.getValue(d.offsetX)),Math.abs(n.getValue(d.offsetY)));case "CIMGeometricEffectOffset":return Math.abs(d.offset);case "CIMGeometricEffectOffsetTangent":return Math.abs(d.offset);case "CIMGeometricEffectRadial":return Math.abs(d.length);case "CIMGeometricEffectRegularPolygon":return Math.abs(d.radius);
case "CIMGeometricEffectRotate":return 0;case "CIMGeometricEffectScale":return 0;case "CIMGeometricEffectTaperedPolygon":return.5*Math.max(Math.abs(d.fromWidth),Math.abs(d.toWidth));case "CIMGeometricEffectWave":return Math.abs(d.amplitude);default:return 0}}function Q(d){if(!d)return 0;let a=0;for(const b of d)a+=ba(b);return a}const R=Math.PI,ca=R/2,u=96/72,S=Math.PI/180,H=G.getLogger("esri.symbols.cim.CIMSymbolHelper");G=function(){function d(){}var a=d.prototype;a.getSymbolInflateSize=function(b,
c,e,h,g){b||(b=[0,0,0,0]);return c?this._getInflateSize(b,c,e,h,g):b};d.SafeSize=function(b){const c=Math.max(Math.abs(b[0]),Math.abs(b[2]));b=Math.max(Math.abs(b[1]),Math.abs(b[3]));return Math.sqrt(c*c+b*b)};a._vectorMarkerBounds=function(b,c,e,h){let g=!0;const l=A.create();if(c&&c.markerGraphics)for(const f of c.markerGraphics)c=[0,0,0,0],f.geometry&&(Y.getBoundsXY(l,f.geometry),c[0]=0,c[1]=0,c[2]=0,c[3]=0,this.getSymbolInflateSize(c,f.symbol,e,0,h),l[0]+=c[0],l[1]+=c[1],l[2]+=c[2],l[3]+=c[3],
g?(b[0]=l[0],b[1]=l[1],b[2]=l[2],b[3]=l[3],g=!1):(b[0]=Math.min(b[0],l[0]),b[1]=Math.min(b[1],l[1]),b[2]=Math.max(b[2],l[2]),b[3]=Math.max(b[3],l[3])));return b};a._getInflateSize=function(b,c,e,h,g){return void 0!==c.symbolLayers?(b=this._getLayersInflateSize(b,c.symbolLayers,e,h,g),c=Q(c.effects),0<c&&(b[0]-=c,b[1]-=c,b[2]+=c,b[3]+=c),b):this._getTextInflatedSize(b,c,g)};a._getLayersInflateSize=function(b,c,e,h,g){let l=!0;if(!c)return b;for(const r of c)if(r){var f=[0,0,0,0];switch(r.type){case "CIMSolidStroke":case "CIMPictureStroke":case "CIMGradientStroke":c=
r;var k=c.width;k="Square"===c.capStyle||"Miter"===c.joinStyle?k/1.4142135623730951:k/2;f[0]=-k;f[1]=-k;f[2]=k;f[3]=k;break;case "CIMCharacterMarker":case "CIMVectorMarker":case "CIMPictureMarker":c=r;if("CIMVectorMarker"===r.type){if(k=r,f=this._vectorMarkerBounds(f,k,e,g),k.frame){var m=(k.frame.xmin+k.frame.xmax)/2,p=(k.frame.ymin+k.frame.ymax)/2;f[0]-=m;f[1]-=p;f[2]-=m;f[3]-=p;k=k.size/(k.frame.ymax-k.frame.ymin);f[0]*=k;f[1]*=k;f[2]*=k;f[3]*=k}}else"CIMPictureMarker"===r.type?(f=r,m=e.getResource(f.url),
k=1,X.isSome(m)&&m.height&&(k=m.width/m.height),m=c.size/2,f=c.size*k*f.scaleX/2,f=[-f,-m,f,m]):(f=c.size/2,f=[-f,-f,f,f]);c.anchorPoint&&("Absolute"===c.anchorPointUnits?(k=c.anchorPoint.x,m=c.anchorPoint.y):(k=c.anchorPoint.x*(f[2]-f[0]),m=c.anchorPoint.y*(f[3]-f[1])),f[0]-=k,f[1]-=m,f[2]-=k,f[3]-=m);k=n.getValue(c.rotation);c.rotateClockwise&&(k=-k);h&&(k-=h);k&&(m=S*k,k=Math.cos(m),m=Math.sin(m),p=A.create([E.C_INFINITY,E.C_INFINITY,-E.C_INFINITY,-E.C_INFINITY]),A.expandPointInPlace(p,[f[0]*k-
f[1]*m,f[0]*m+f[1]*k]),A.expandPointInPlace(p,[f[0]*k-f[3]*m,f[0]*m+f[3]*k]),A.expandPointInPlace(p,[f[2]*k-f[1]*m,f[2]*m+f[1]*k]),A.expandPointInPlace(p,[f[2]*k-f[3]*m,f[2]*m+f[3]*k]),f=p);k=n.getValue(c.offsetX);m=n.getValue(c.offsetY);if(h){var q=S*h;p=Math.cos(q);q=Math.sin(q);const x=k*q+m*p;k=k*p-m*q;m=x}f[0]+=k;f[1]+=m;f[2]+=k;f[3]+=m;c=aa(c.markerPlacement);0<c&&(f[0]-=c,f[1]-=c,f[2]+=c,f[3]+=c)}c=Q(r.effects);0<c&&(f[0]-=c,f[1]-=c,f[2]+=c,f[3]+=c);l?(b[0]=f[0],b[1]=f[1],b[2]=f[2],b[3]=f[3],
l=!1):(b[0]=Math.min(b[0],f[0]),b[1]=Math.min(b[1],f[1]),b[2]=Math.max(b[2],f[2]),b[3]=Math.max(b[3],f[3]))}return b};a._getTextInflatedSize=function(b,c,e){var h,g;const l=null!=(h=c.height)?h:10;b[0]=-l/2;b[1]=-l/2;b[2]=l/2;b[3]=l/2;if(!e)return b;e=e.get(c);if(!e)return b;const {text:f,mosaicItem:k}=e;if(!k||0===k.glyphMosaicItems.length)return b;e=B.lineGapType2LineHeight(c.lineGapType,null!=(g=c.lineGap)?g:0,l);g=L.bidiText(f)[1];c=Z.shapeGlyphs(k.glyphMosaicItems,g,{scale:l/P.GLYPH_SIZE,angle:n.getValue(c.angle),
xOffset:n.getValue(c.offsetX),yOffset:n.getValue(c.offsetY),hAlign:B.horizontalAlignment2HAlign(c.horizontalAlignment),vAlign:B.verticalAlignment2VAlign(c.verticalAlignment),maxLineWidth:512,lineHeight:P.MAGIC_LABEL_LINE_HEIGHT*Math.max(.25,Math.min(e||1,4)),decoration:c.font.decoration||"none",isCIM:!0}).boundsT;b[0]=c.x-c.halfWidth;b[1]=-c.y-c.halfHeight;b[2]=c.x+c.halfWidth;b[3]=-c.y+c.halfHeight;return b};return d}();let z=function(){function d(){}d.getEnvelope=function(a,b){b=new B.EnvDrawHelper(b);
if(Array.isArray(a)){let c;for(const e of a)c?c.union(F(b,e)):c=F(b,e);return c}return F(b,a)};d.getTextureAnchor=function(a,b){a=this.getEnvelope(a,b);if(!a)return[0,0,0];b=a.height*u+2;return[(a.x+.5*a.width)*u/(a.width*u+2),-(a.y+.5*a.height)*u/b,b]};d.rasterize=function(a,b,c,e,h=!0){var g=c||this.getEnvelope(b,e);if(!g)return[null,0,0,0,0];const l=(g.x+.5*g.width)*u,f=(g.y+.5*g.height)*u;a.width=g.width*u;a.height=g.height*u;c||(a.width+=2,a.height+=2);c=a.getContext("2d");g=B.Transformation.createScale(u,
-u);g.translate(.5*a.width-l,.5*a.height+f);e=new B.CanvasDrawHelper(c,e,g);switch(b.type){case "CIMPointSymbol":e.drawSymbol(b,{type:"point",x:0,y:0});break;case "CIMVectorMarker":g=new O.Placement,e.drawMarker(b,g)}b=c.getImageData(0,0,a.width,a.height);b=new Uint8Array(b.data);if(h)for(e=0;e<b.length;e+=4)h=b[e+3]/255,b[e]*=h,b[e+1]*=h,b[e+2]*=h;return[b,a.width,a.height,-l/a.width,-f/a.height]};d.fromTextSymbol=function(a){const {angle:b,color:c,font:e,haloColor:h,haloSize:g,horizontalAlignment:l,
kerning:f,text:k,verticalAlignment:m,xoffset:p,yoffset:q}=a;let r,x;if(e){var C=e.family;var y=e.style;var v=e.weight;r=e.size;x=e.decoration}a=!1;k&&(a=L.bidiText(k)[1]);C=C||"Tahoma";b:{if(v)switch(v.toLowerCase()){case "bold":case "bolder":v="bold";break b}v=""}b:{if(y)switch(y.toLowerCase()){case "italic":case "oblique":y="italic";break b}y=""}v=v&&y?`${v}-${y}`:`${v}${y}`;return{type:"CIMPointSymbol",symbolLayers:[{type:"CIMVectorMarker",enable:!0,anchorPointUnits:"Relative",dominantSizeAxis3D:"Y",
size:10,billboardMode3D:"FaceNearPlane",frame:{xmin:-5,ymin:-5,xmax:5,ymax:5},markerGraphics:[{type:"CIMMarkerGraphic",geometry:{x:0,y:0},symbol:{type:"CIMTextSymbol",angle:b,blockProgression:2,depth3D:1,extrapolateBaselines:!0,fontEffects:0,fontEncoding:1,fontFamilyName:C,fontStyleName:v,fontType:0,haloSize:g,height:r,hinting:1,horizontalAlignment:da(null!=l?l:"center"),kerning:f,letterWidth:100,ligatures:!0,lineGapType:"Multiple",offsetX:n.getValue(p),offsetY:n.getValue(q),strikethrough:"line-through"===
x,underline:"underline"===x,symbol:{type:"CIMPolygonSymbol",symbolLayers:[{type:"CIMSolidFill",enable:!0,color:t(c)}]},haloSymbol:{type:"CIMPolygonSymbol",symbolLayers:[{type:"CIMSolidFill",enable:!0,color:t(h)}]},shadowColor:[0,0,0,255],shadowOffsetX:1,shadowOffsetY:1,textCase:"Normal",textDirection:a?1:0,verticalAlignment:ea(null!=m?m:"baseline"),verticalGlyphOrientation:0,wordSpacing:100,billboardMode3D:2},textString:k}],scaleSymbolsProportionally:!0,respectFrame:!0}],scaleX:1,angleAlignment:"Display"}};
d.fromPictureFillSymbol=function(a){const {height:b,outline:c,width:e,xoffset:h,xscale:g,yoffset:l,yscale:f}=a,k=[],m={type:"CIMPolygonSymbol",symbolLayers:k};if(c){const {cap:q,join:r,miterLimit:x,width:C}=c;k.push({type:"CIMSolidStroke",color:t(c.color),capStyle:I(q),joinStyle:J(r),miterLimit:x,width:C})}let p=a.url;"esriPFS"===a.type&&a.imageData&&(p=a.imageData);a="angle"in a?a.angle:0;k.push({type:"CIMPictureFill",invertBackfaceTexture:!1,scaleX:1,textureFilter:"Picture",tintColor:null,url:p,
height:b*(f||1),width:e*(g||1),offsetX:n.getValue(h),offsetY:n.getValue(l),rotation:n.getValue(-a),colorSubstitutions:null});return m};d.fromSimpleFillSymbol=function(a){const {color:b,style:c,outline:e}=a;a=[];const h={type:"CIMPolygonSymbol",symbolLayers:a};var g=null;if(e){const {cap:f,join:k,style:m}=e;"solid"!==m&&"none"!==m&&"esriSLSSolid"!==m&&"esriSLSNull"!==m&&(g=[{type:"CIMGeometricEffectDashes",dashTemplate:K(m,f),lineDashEnding:"NoConstraint",scaleDash:!0}]);a.push({type:"CIMSolidStroke",
color:t(e.color),capStyle:I(f),joinStyle:J(k),miterLimit:e.miterLimit,width:e.width,effects:g})}if(c&&"solid"!==c&&"none"!==c&&"esriSFSSolid"!==c&&"esriSFSNull"!==c){g={type:"CIMLineSymbol",symbolLayers:[{type:"CIMSolidStroke",color:t(b),capStyle:"Butt",joinStyle:"Miter",width:.75}]};let f=0;var l=N.nextPowerOfTwo(Math.ceil(window.devicePixelRatio));l=T(c)?8*l:10*l;switch(c){case "vertical":case "esriSFSVertical":f=90;break;case "forward-diagonal":case "esriSFSForwardDiagonal":f=-45;break;case "backward-diagonal":case "esriSFSBackwardDiagonal":f=
45;break;case "cross":case "esriSFSCross":f=0;break;case "diagonal-cross":case "esriSFSDiagonalCross":f=-45}a.push({type:"CIMHatchFill",lineSymbol:g,offsetX:0,offsetY:0,rotation:f,separation:l});"cross"===c||"esriSFSCross"===c?a.push({type:"CIMHatchFill",lineSymbol:M.clone(g),offsetX:0,offsetY:0,rotation:90,separation:l}):("diagonal-cross"===c||"esriSFSDiagonalCross"===c)&&a.push({type:"CIMHatchFill",lineSymbol:M.clone(g),offsetX:0,offsetY:0,rotation:45,separation:l})}else!c||"solid"!==c&&"esriSFSSolid"!==
c||a.push({type:"CIMSolidFill",enable:!0,color:t(b)});return h};d.fromSimpleLineSymbol=function(a){const {cap:b,color:c,join:e,marker:h,miterLimit:g,style:l,width:f}=a;a=null;"solid"!==l&&"none"!==l&&"esriSLSSolid"!==l&&"esriSLSNull"!==l&&(a=[{type:"CIMGeometricEffectDashes",dashTemplate:K(l,b),lineDashEnding:"NoConstraint",scaleDash:!0}]);const k=[];if(h){let m;switch(h.placement){case "begin-end":m="Both";break;case "begin":m="JustBegin";break;case "end":m="JustEnd";break;default:m="None"}const p=
d.fromSimpleMarker(h,f,c).symbolLayers[0];p.markerPlacement={type:"CIMMarkerPlacementAtExtremities",angleToLine:!0,offset:0,extremityPlacement:m,offsetAlongLine:0};k.push(p)}"none"!==l&&"esriSLSNull"!==l&&k.push({type:"CIMSolidStroke",color:t(c),capStyle:I(b),joinStyle:J(e),miterLimit:g,width:f,effects:a});return{type:"CIMLineSymbol",symbolLayers:k}};d.fromPictureMarker=function(a){const {angle:b,height:c,width:e,xoffset:h,yoffset:g}=a;let l=a.url;"esriPMS"===a.type&&a.imageData&&(l=a.imageData);
return{type:"CIMPointSymbol",symbolLayers:[{type:"CIMPictureMarker",invertBackfaceTexture:!1,scaleX:1,textureFilter:"Picture",tintColor:null,url:l,size:c,width:e,offsetX:n.getValue(h),offsetY:n.getValue(g),rotation:n.getValue(-b)}]}};d.fromSimpleMarker=function(a,b,c){var e,{style:h}=a;c=null!=(e=a.color)?e:c;if("path"===h){b=[];"outline"in a&&a.outline&&(e=a.outline,b.push({type:"CIMSolidStroke",enable:!0,width:D.pt2px(Math.round(D.px2pt(e.width))),color:t(e.color)}));b.push({type:"CIMSolidFill",
enable:!0,color:t(c),path:a.path});const [k,m]=U("square");return{type:"CIMPointSymbol",symbolLayers:[{type:"CIMVectorMarker",enable:!0,rotation:n.getValue(-a.angle),size:n.getValue(a.size||6),offsetX:n.getValue(a.xoffset),offsetY:n.getValue(a.yoffset),frame:k,markerGraphics:[{type:"CIMMarkerGraphic",geometry:m,symbol:{type:"CIMPolygonSymbol",symbolLayers:b}}]}]}}const [g,l]=U(h);let f;l&&g&&(e=[],"outline"in a&&a.outline?(h=a.outline,e.push({type:"CIMSolidStroke",enable:!0,width:D.pt2px(Math.round(D.px2pt(h.width))),
color:t(h.color)})):!b||"line-marker"!==a.type||"cross"!==a.style&&"x"!==a.style||e.push({type:"CIMSolidStroke",enable:!0,width:b,color:t(c)}),e.push({type:"CIMSolidFill",enable:!0,color:t(c)}),c={type:"CIMPolygonSymbol",symbolLayers:e},f={type:"CIMPointSymbol",symbolLayers:[{type:"CIMVectorMarker",enable:!0,rotation:n.getValue(-a.angle),size:n.getValue(a.size||6*b),offsetX:n.getValue(a.xoffset),offsetY:n.getValue(a.yoffset),frame:g,markerGraphics:[{type:"CIMMarkerGraphic",geometry:l,symbol:c}]}]});
return f};d.fromCIMHatchFill=function(a){var b;const c=null!=(b=a.separation)?b:4;b=c/2;for(var e=this._getLineSymbolPeriod(a.lineSymbol)||4;4>e;)e*=2;e/=2;return{type:"CIMVectorMarker",frame:{xmin:-e,xmax:e,ymin:-b,ymax:b},markerGraphics:[{type:"CIMMarkerGraphic",geometry:{paths:[[[-e,0],[e,0]]]},symbol:a.lineSymbol}],size:c}};d._getLineSymbolPeriod=function(a){if(a){const b=this._getEffectsRepeat(a.effects);if(b)return b;if(a.symbolLayers)for(const c of a.symbolLayers)if((a=this._getEffectsRepeat(c.effects))||
c&&(a=this._getPlacementRepeat(c.markerPlacement)))return a}return 0};d._getEffectsRepeat=function(a){if(a)for(var b of a)if(b)switch(b.type){case "CIMGeometricEffectDashes":if((a=b.dashTemplate)&&a.length){b=0;for(const c of a)b+=c;a.length&1&&(b*=2);return b}break;case "CIMGeometricEffectWave":return b.period;default:H.error(`unsupported geometric effect type ${b.type}`)}return 0};d._getPlacementRepeat=function(a){if(a)switch(a.type){case "CIMMarkerPlacementAlongLineSameSize":case "CIMMarkerPlacementAlongLineRandomSize":case "CIMMarkerPlacementAlongLineVariableSize":if((a=
a.placementTemplate)&&a.length){let b=0;for(const c of a)b+=c;a.length&1&&(b*=2);return b}}return 0};d.fromCIMInsidePolygon=function(a){var b=a.markerPlacement;const c={type:a.type,...a,markerPlacement:null,anchorPoint:null};let e,h;!0===b.shiftOddRows?(a=b.stepX/2,e=b.stepY,h=2*b.stepY,b=[{x:-a,y:0},{x:a,y:0},{x:0,y:e},{x:0,y:-e}].map(g=>({type:"CIMMarkerGraphic",geometry:g,symbol:{type:"CIMPointSymbol",symbolLayers:[c]}}))):(a=b.stepX/2,e=b.stepY/2,h=b.stepY,b=[{type:"CIMMarkerGraphic",geometry:{x:0,
y:0},symbol:{type:"CIMPointSymbol",symbolLayers:[c]}}]);return{type:"CIMVectorMarker",frame:{xmin:-a,xmax:a,ymin:-e,ymax:e},markerGraphics:b,size:h}};d.getFillColor=function(a){if(!a)return null;switch(a.type){case "CIMPolygonSymbol":if(a.symbolLayers)for(const b of a.symbolLayers)if(a=d.getFillColor(b),null!=a)return a;break;case "CIMTextSymbol":return d.getFillColor(a.symbol);case "CIMSolidFill":return a.color}};d.getStrokeColor=function(a){if(a)switch(a.type){case "CIMPolygonSymbol":case "CIMLineSymbol":if(a.symbolLayers)for(const b of a.symbolLayers)if(a=
d.getStrokeColor(b),void 0!==a)return a;break;case "CIMTextSymbol":return d.getStrokeColor(a.symbol);case "CIMSolidStroke":return a.color}};d.getStrokeWidth=function(a){if(a)switch(a.type){case "CIMPolygonSymbol":case "CIMLineSymbol":if(a.symbolLayers)for(const b of a.symbolLayers)if(a=d.getStrokeWidth(b),void 0!==a)return a;break;case "CIMTextSymbol":return d.getStrokeWidth(a.symbol);case "CIMSolidStroke":case "CIMGradientStroke":case "CIMPictureStroke":return a.width}};d.getSize=function(a){if(a)switch(a.type){case "CIMPointSymbol":case "CIMLineSymbol":case "CIMPolygonSymbol":{let b=
0;if(a.symbolLayers)for(const c of a.symbolLayers)a=d.getSize(c),a>b&&(b=a);return b}case "CIMSolidStroke":case "CIMPictureStroke":case "CIMGradientStroke":return a.width;case "CIMCharacterMarker":case "CIMPictureMarker":case "CIMVectorMarker":return a.size}};d.getMarkerScaleRatio=function(a){if(a)switch(a.type){case "CIMVectorMarker":if(!1!==a.scaleSymbolsProportionally&&a.frame)return a.size/(a.frame.ymax-a.frame.ymin)}return 1};return d}(),fa=function(){function d(){}d.rasterizeSimpleFill=function(a,
b,c){"solid"!==b&&"none"!==b&&"esriSFSSolid"!==b&&"esriSFSNull"!==b||console.error("Unexpected: style does not require rasterization");c=N.nextPowerOfTwo(Math.ceil(c));var e=T(b)?8*c:16*c;const h=2*c;a.width=e;a.height=e;const g=a.getContext("2d");g.strokeStyle="#FFFFFF";g.lineWidth=c;g.beginPath();if("vertical"===b||"cross"===b||"esriSFSCross"===b||"esriSFSVertical"===b)g.moveTo(e/2,-h),g.lineTo(e/2,e+h);if("horizontal"===b||"cross"===b||"esriSFSCross"===b||"esriSFSHorizontal"===b)g.moveTo(-h,e/
2),g.lineTo(e+h,e/2);if("forward-diagonal"===b||"diagonal-cross"===b||"esriSFSDiagonalCross"===b||"esriSFSForwardDiagonal"===b)g.moveTo(-h,-h),g.lineTo(e+h,e+h),g.moveTo(e-h,-h),g.lineTo(e+h,h),g.moveTo(-h,e-h),g.lineTo(h,e+h);if("backward-diagonal"===b||"diagonal-cross"===b||"esriSFSBackwardDiagonal"===b||"esriSFSDiagonalCross"===b)g.moveTo(e+h,-h),g.lineTo(-h,e+h),g.moveTo(h,-h),g.lineTo(-h,h),g.moveTo(e+h,e-h),g.lineTo(e-h,e+h);g.stroke();b=g.getImageData(0,0,a.width,a.height);b=new Uint8Array(b.data);
for(e=0;e<b.length;e+=4)c=b[e+3]/255,b[e]*=c,b[e+1]*=c,b[e+2]*=c;return[b,a.width,a.height]};d.rasterizeSimpleLine=function(a,b){return this.rasterizeDash(a,b)};d.rasterizeDash=function(a,b){var c="Butt"===b,e="Square"===b;b=!c&&!e;1===a.length%2&&(a=[...a,...a]);var h=0;for(var g of a)h+=g;g=Math.round(15.5*h);h=new Float32Array(31*g);let l=0,f=0,k=.5,m=!0;for(var p of a){l=f;for(f+=15.5*p;k<=f;){for(a=.5;31>a;){const q=b?(a-15.5)*(a-15.5):Math.abs(a-15.5);h[(a-.5)*g+k-.5]=m?c?Math.max(Math.max(l+
7.75-k,q),Math.max(k-f+7.75,q)):q:b?Math.min((k-l)*(k-l)+q,(k-f)*(k-f)+q):e?Math.min(Math.max(k-l,q),Math.max(f-k,q)):Math.min(Math.max(k-l+7.75,q),Math.max(f+7.75-k,q));a++}k++}m=!m}c=h.length;p=new Uint8Array(4*c);for(e=0;e<c;++e)W.packFloatRGBA((b?Math.sqrt(h[e]):h[e])/15.5,p,4*e);return[p,g,31]};return d}(),ha=function(){function d(){}d.findApplicableOverrides=function(a,b,c){if(b){if(a.primitiveName){let e=!1;for(const h of c)if(h.primitiveName===a.primitiveName){e=!0;break}if(!e)for(const h of b)h.primitiveName===
a.primitiveName&&c.push(h)}switch(a.type){case "CIMPointSymbol":case "CIMLineSymbol":case "CIMPolygonSymbol":if(a.effects)for(const e of a.effects)d.findApplicableOverrides(e,b,c);if(a.symbolLayers)for(const e of a.symbolLayers)d.findApplicableOverrides(e,b,c);break;case "CIMSolidStroke":case "CIMPictureStroke":case "CIMGradientStroke":case "CIMSolidFill":case "CIMPictureFill":case "CIMHatchFill":case "CIMGradientFill":case "CIMVectorMarker":case "CIMCharacterMarker":case "CIMPictureMarker":if(a.effects)for(const e of a.effects)d.findApplicableOverrides(e,
b,c);a.markerPlacement&&d.findApplicableOverrides(a.markerPlacement,b,c);if("CIMVectorMarker"===a.type){if(a.markerGraphics)for(const e of a.markerGraphics)d.findApplicableOverrides(e,b,c),d.findApplicableOverrides(e.symbol,b,c)}else"CIMCharacterMarker"===a.type?d.findApplicableOverrides(a.symbol,b,c):"CIMHatchFill"===a.type&&d.findApplicableOverrides(a.lineSymbol,b,c)}}};d.applyOverrides=function(a,b,c,e){if(b){if(a.primitiveName)for(const g of b)if(g.primitiveName===a.primitiveName){var h=(h=g.propertyName)?
h.charAt(0).toLowerCase()+h.substr(1):h;e&&e.push({cim:a,nocapPropertyName:h,value:a[h]});g.expression&&(g.value=d.toValue(g.propertyName,g.expression));if(c){let l=!1;for(const f of c)f.primitiveName===a.primitiveName&&(l=!0);l||c.push(g)}a[h]=g.value}switch(a.type){case "CIMPointSymbol":case "CIMLineSymbol":case "CIMPolygonSymbol":if(a.effects)for(const g of a.effects)d.applyOverrides(g,b,c,e);if(a.symbolLayers)for(const g of a.symbolLayers)d.applyOverrides(g,b,c,e);break;case "CIMSolidStroke":case "CIMSolidFill":case "CIMVectorMarker":if(a.effects)for(const g of a.effects)d.applyOverrides(g,
b,c,e);if("CIMVectorMarker"===a.type&&a.markerGraphics)for(const g of a.markerGraphics)d.applyOverrides(g,b,c,e),d.applyOverrides(g.symbol,b,c,e)}}};d.restoreOverrides=function(a){for(const b of a)b.cim[b.nocapPropertyName]=b.value};d.buildOverrideKey=function(a){let b="";for(const c of a)void 0!==c.value&&(b+=`${c.primitiveName}${c.propertyName}${JSON.stringify(c.value)}`);return b};d.toValue=function(a,b){return"DashTemplate"===a?b.split(" ").map(c=>Number(c)):"Color"===a?(a=(new V(b)).toRgba(),
a[3]*=255,a):b};return d}();const I=d=>{if(!d)return"Butt";switch(d){case "butt":return"Butt";case "square":return"Square";case "round":return"Round"}},J=d=>{if(!d)return"Miter";switch(d){case "miter":return"Miter";case "round":return"Round";case "bevel":return"Bevel"}},da=d=>{if(!d)return"Center";switch(d){case "left":return"Left";case "right":return"Right";case "center":return"Center";case "justify":return"Justify"}},ea=d=>{if(!d)return"Center";switch(d){case "baseline":return"Baseline";case "top":return"Top";
case "middle":return"Center";case "bottom":return"Bottom"}},t=d=>{if(!d)return[0,0,0,0];const {r:a,g:b,b:c,a:e}=d;return[a,b,c,255*e]},K=(d,a)=>{a="butt"===a;switch(d){case "dash":case "esriSLSDash":return a?[4,3]:[3,4];case "dash-dot":case "esriSLSDashDot":return a?[4,3,1,3]:[3,4,0,4];case "dot":case "esriSLSDot":return a?[1,3]:[0,4];case "long-dash":case "esriSLSLongDash":return a?[8,3]:[7,4];case "long-dash-dot":case "esriSLSLongDashDot":return a?[8,3,1,3]:[7,4,0,4];case "long-dash-dot-dot":case "esriSLSDashDotDot":return a?
[8,3,1,3,1,3]:[7,4,0,4,0,4];case "short-dash":case "esriSLSShortDash":return a?[4,1]:[3,2];case "short-dash-dot":case "esriSLSShortDashDot":return a?[4,1,1,1]:[3,2,0,2];case "short-dash-dot-dot":case "esriSLSShortDashDotDot":return a?[4,1,1,1,1,1]:[3,2,0,2,0,2];case "short-dot":case "esriSLSShortDot":return a?[1,1]:[0,2];case "solid":case "esriSLSSolid":case "none":return H.error("Unexpected: style does not require rasterization"),[0,0];default:return H.error(`Tried to rasterize SLS, but found an unexpected style: ${d}!`),
[0,0]}},U=d=>{if("circle"===d||"esriSMSCircle"===d){var a=Math.acos(.995);d=Math.ceil(R/a/4);0===d&&(d=1);a=ca/d;d*=4;var b=[];b.push([50,0]);for(let c=1;c<d;c++)b.push([50*Math.cos(c*a),-50*Math.sin(c*a)]);b.push([50,0]);a={rings:[b]};b={xmin:-50,ymin:-50,xmax:50,ymax:50}}else"cross"===d||"esriSMSCross"===d?(a={rings:[[[0,50],[0,0],[50,0],[50,-0],[0,-0],[0,-50],[-0,-50],[-0,-0],[-50,-0],[-50,0],[-0,0],[-0,50],[0,50]]]},b={xmin:-50,ymin:-50,xmax:50,ymax:50}):"diamond"===d||"esriSMSDiamond"===d?(a=
{rings:[[[-50,0],[0,50],[50,0],[0,-50],[-50,0]]]},b={xmin:-50,ymin:-50,xmax:50,ymax:50}):"square"===d||"esriSMSSquare"===d?(a={rings:[[[-50,-50],[-50,50],[50,50],[50,-50],[-50,-50]]]},b={xmin:-50,ymin:-50,xmax:50,ymax:50}):"x"===d||"esriSMSX"===d?(a={rings:[[[0,0],[50,50],[50,50],[0,0],[50,-50],[50,-50],[0,-0],[-50,-50],[-50,-50],[-0,0],[-50,50],[-50,50],[0,0]]]},b={xmin:-50,ymin:-50,xmax:50,ymax:50}):"triangle"===d||"esriSMSTriangle"===d?(d=2/3*100,b=d-100,a={rings:[[[-57.735026918962575,b],[0,d],
[57.735026918962575,b],[-57.735026918962575,b]]]},b={xmin:-57.735026918962575,ymin:b,xmax:57.735026918962575,ymax:d}):"arrow"===d&&(a={rings:[[[-50,50],[50,0],[-50,-50],[-33,-20],[-33,20],[-50,50]]]},b={xmin:-50,ymin:-50,xmax:50,ymax:50});return[b,a]},T=d=>"vertical"===d||"horizontal"===d||"cross"===d||"esriSFSCross"===d||"esriSFSVertical"===d||"esriSFSHorizontal"===d;w.CIMSimbolInflatedSizeHelper=G;w.CIMSymbolHelper=z;w.OverrideHelper=ha;w.SymbolHelper=fa;w.slsDashToTemplateArray=K;w.symbolToCIM=
function(d){if(!d||!d.type)return null;let a;switch(d.type){case "cim":return d.data;case "web-style":return d;case "simple-marker":a=z.fromSimpleMarker(d);break;case "picture-marker":a=z.fromPictureMarker(d);break;case "simple-line":a=z.fromSimpleLineSymbol(d);break;case "simple-fill":a=z.fromSimpleFillSymbol(d);break;case "picture-fill":a=z.fromPictureFillSymbol(d);break;case "text":a=z.fromTextSymbol(d)}return{type:"CIMSymbolReference",symbol:a}};Object.defineProperty(w,"__esModule",{value:!0})});