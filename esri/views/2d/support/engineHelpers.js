// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../core/BidiText ../../../core/screenUtils ../engine/webgl/alignmentUtils ../engine/webgl/definitions ../engine/webgl/mesh/templates/shapingUtils".split(" "),function(f,n,p,c,g,h,q){function e(){e=n._asyncToGenerator(function*(a,d,b){var k,l,m;const r=g.getXAnchorDirection("center"),t=g.getYAnchorDirection("middle");b=d.textureManager.rasterizeItem(a.toJSON(),window.devicePixelRatio||1,null,b);[,d]=p.bidiText(a.text);b=(yield b).glyphMosaicItems;
return q.shapeGlyphs(b,d,{angle:null!=(k=a.angle)?k:0,xOffset:c.pt2px(null!=(l=a.xoffset)?l:0),yOffset:c.pt2px(null!=(m=a.yoffset)?m:0),lineHeight:h.MAGIC_LABEL_LINE_HEIGHT*Math.max(.25,Math.min(a.lineHeight,4)),maxLineWidth:Math.max(32,Math.min(c.pt2px(a.lineWidth),512)),decoration:a.font.decoration,scale:Math.min(Math.round(c.pt2px(a.font.size)),127)/h.GLYPH_SIZE,hAlign:r,vAlign:t,isCIM:!1}).boundsT});return e.apply(this,arguments)}f.getTextBounds=function(a,d,b){return e.apply(this,arguments)};
Object.defineProperty(f,"__esModule",{value:!0})});