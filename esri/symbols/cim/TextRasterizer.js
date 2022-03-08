// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define(["exports","../../core/screenUtils"],function(p,v){let u=function(){function n(){}var m=n.prototype;m.rasterizeText=function(b,a){this._textRasterizationCanvas||(this._textRasterizationCanvas=document.createElement("canvas"));var d=this._textRasterizationCanvas,c=d.getContext("2d");this.setFontProperties(c,a);this.parameters=a;this.textLines=b.split(/\r?\n/);this.lineHeight=this.computeLineHeight();b=this.computeTextWidth(c,a);const {decoration:k,weight:g}=a.font;this.lineThroughWidthOffset=
k&&"line-through"===k?.1*this.lineHeight:0;var e=this.lineHeight*this.textLines.length;d.width=b+2*this.lineThroughWidthOffset;d.height=e;this.renderedLineHeight=Math.round(this.lineHeight*a.pixelRatio);this.renderedHaloSize=a.halo.size*a.pixelRatio;this.renderedWidth=b*a.pixelRatio;this.renderedHeight=e*a.pixelRatio;this.lineThroughWidthOffset*=a.pixelRatio;d=a.color;this.fillStyle=`rgba(${d.slice(0,3).toString()},${d[3]})`;this.haloStyle=`rgb(${a.halo.color.slice(0,3).toString()})`;d=this.renderedLineHeight;
b=this.renderedHaloSize;this.setFontProperties(c,a);e=c.textAlign;var h=this.renderedWidth;e=("center"===e?.5*h:"right"===e?h:0)+b;h=this.lineThroughWidthOffset;let l=0;0<b&&this.renderHalo(c,e,b,h,l,a);l+=b;h+=e;for(var f of this.textLines)c.globalCompositeOperation="destination-out",c.fillStyle="rgb(0, 0, 0)",c.fillText(f,h,l),c.globalCompositeOperation="source-over",c.fillStyle=this.fillStyle,c.fillText(f,h,l),k&&"none"!==k&&this.renderDecoration(c,h,l,k,g),l+=d;f=this.renderedWidth+2*this.lineThroughWidthOffset;
d=this.renderedHeight;c=c.getImageData(0,0,f,d);c=new Uint8Array(c.data);if(a.premultiplyColors)for(b=0;b<c.length;b+=4)a=c[b+3]/255,c[b]*=a,c[b+1]*=a,c[b+2]*=a;return{size:[f,d],image:new Uint32Array(c.buffer),sdf:!1,simplePattern:!1,anchorX:0,anchorY:0}};m.renderHalo=function(b,a,d,c,k,g){const e=this.renderedWidth,h=this.renderedHeight;this._haloRasterizationCanvas||(this._haloRasterizationCanvas=document.createElement("canvas"));this._haloRasterizationCanvas.width=e;this._haloRasterizationCanvas.height=
h;const l=this._haloRasterizationCanvas,f=l.getContext("2d");f.clearRect(0,0,e,h);this.setFontProperties(f,g);const {decoration:q,weight:r}=g.font;f.fillStyle=this.haloStyle;f.strokeStyle=this.haloStyle;g=3>this.renderedHaloSize;f.lineJoin=g?"miter":"round";g?this.renderHaloEmulated(f,a,d,q,r):this.renderHaloNative(f,a,d,q,r);b.globalAlpha=this.parameters.halo.color[3];b.drawImage(l,0,0,e,h,c,k,e,h);b.globalAlpha=1};m.renderHaloEmulated=function(b,a,d,c,k){const g=this.renderedLineHeight,e=this.renderedHaloSize;
for(const h of this.textLines){for(const [l,f]of t)b.fillText(h,a+e*l,d+e*f);c&&"none"!==c&&this.renderDecoration(b,a,d,c,k);d+=g}};m.renderHaloNative=function(b,a,d,c,k){const g=this.renderedLineHeight,e=this.renderedHaloSize;for(const h of this.textLines){const l=2*e;for(let f=0;5>f;f++)b.lineWidth=(.6+.1*f)*l,b.strokeText(h,a,d),c&&"none"!==c&&this.renderDecoration(b,a,d,c,k);d+=g}};m.setFontProperties=function(b,a){var d=a.font;d=`${d.style} ${d.weight} ${v.pt2px(a.size*a.pixelRatio)}px ${d.family}, sans-serif`;
b.font=d;b.textBaseline="top";switch(a.horizontalAlignment){case "left":a="left";break;case "right":a="right";break;case "center":a="center";break;default:a="left"}b.textAlign=a};m.computeTextSize=function(b,a){this._textRasterizationCanvas||(this._textRasterizationCanvas=document.createElement("canvas"));const d=this._textRasterizationCanvas;var c=d.getContext("2d");this.setFontProperties(c,a);this.parameters=a;this.textLines=b.split(/\r?\n/);this.lineHeight=this.computeLineHeight();b=this.computeTextWidth(c,
a);c=this.lineHeight*this.textLines.length;d.width=b;d.height=c;return[b*a.pixelRatio,c*a.pixelRatio]};m.computeTextWidth=function(b,a){let d=0;for(const c of this.textLines)d=Math.max(d,b.measureText(c).width);a=a.font;if("italic"===a.style||"oblique"===a.style||"string"===typeof a.weight&&("bold"===a.weight||"bolder"===a.weight)||"number"===typeof a.weight&&600<a.weight)d+=.3*b.measureText("w").width;d+=2*this.parameters.halo.size;return Math.round(d)};m.computeLineHeight=function(){let b=1.275*
this.parameters.size;const a=this.parameters.font.decoration;a&&"underline"===a&&(b*=1.3);return Math.round(b+2*this.parameters.halo.size)};m.renderDecoration=function(b,a,d,c,k){const g=.9*this.lineHeight;k="bold"===k?.06:"bolder"===k?.09:.04;switch(b.textAlign){case "center":a-=this.renderedWidth/2;break;case "right":a-=this.renderedWidth}const e=b.textBaseline;if("underline"===c)switch(e){case "top":d+=g;break;case "middle":d+=g/2}else if("line-through"===c)switch(e){case "top":d+=g/1.5;break;
case "middle":d+=g/3}b.save();b.beginPath();b.strokeStyle=b.fillStyle;b.lineWidth=Math.ceil(g*k);b.moveTo(a-this.lineThroughWidthOffset,d);b.lineTo(a+this.renderedWidth+2*this.lineThroughWidthOffset,d);b.stroke();b.restore()};return n}();const t=[];for(let n=0;360>n;n+=22.5)t.push([Math.cos(Math.PI*n/180),Math.sin(Math.PI*n/180)]);p.TextRasterizer=u;p.default=u;Object.defineProperty(p,"__esModule",{value:!0})});