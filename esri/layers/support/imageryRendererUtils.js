// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define("exports ../../core/lang ./RasterFunction ../../renderers/support/colorRampUtils ../../renderers/support/stretchRendererUtils ../../renderers/visualVariables/SizeVariable".split(" "),function(t,z,m,y,E,F){function A(a){const b=a.Raster;return b&&"esri.layers.support.RasterFunction"===b.declaredClass?A(b.functionArguments):a}function G(a,b){const c=new m;c.functionName="VectorFieldRenderer";const {dataType:f,bandProperties:d}=b;b="vector-uv"===f?!0:!1;let g,l;d&&2===d.length&&(g=d.map(e=>e.BandName.toLowerCase()).indexOf("magnitude"),
l=d.map(e=>e.BandName.toLowerCase()).indexOf("direction"));if(-1===g||null===g)g=0,l=1;const n="arithmetic"===a.rotationType?1:2,q="flow-from"===a.flowRepresentation?0:1,h=a.visualVariables?a.visualVariables.filter(e=>"Magnitude"===e.field)[0]:new F;a={magnitudeBandID:g,directionBandID:l,isUVComponents:b,referenceSystem:n,massFlowAngleRepresentation:q,symbolTileSize:50,symbolTileSizeUnits:100,calculationMethod:"Vector Average",symbologyName:H[a.style.toLowerCase().replace("-","_")],minimumMagnitude:h.minDataValue,
maximumMagnitude:h.maxDataValue,minimumSymbolSize:h.minSize,maximumSymbolSize:h.maxSize};c.functionArguments=a;return c}function I(a,b){const c=[],f=[],d=[],g=[],{pixelType:l,rasterAttributeTable:n}=b,q=n&&n.features,h=B(n);if(q&&Array.isArray(q)&&a.classBreakInfos){a.classBreakInfos.forEach((k,u)=>{const p=k.symbol.color;let w;p.a&&q.forEach(C=>{w=C.attributes[a.field];(w>=k.minValue&&w<k.maxValue||u===a.classBreakInfos.length-1&&w>=k.minValue)&&g.push([C.attributes[h],p.r,p.g,p.b])})});b=l?x(g,
l):g;var e=new m;e.functionName="Colormap";e.functionArguments={};e.functionArguments.Colormap=b;e.variableName="Raster";return e}a.classBreakInfos.forEach((k,u)=>{const p=k.symbol&&k.symbol.color;p.a?(0===u?c.push(k.minValue,k.maxValue+1E-6):c.push(k.minValue+1E-6,k.maxValue+1E-6),f.push(u),g.push([u,p.r,p.g,p.b])):d.push(k.minValue,k.maxValue)});b=l?x(g,l):g;e=new m;e.functionName="Remap";e.functionArguments={InputRanges:c,OutputValues:f,NoDataRanges:d};e.variableName="Raster";const r=new m;r.functionName=
"Colormap";r.functionArguments={Colormap:b,Raster:e};return r}function x(a,b){(b=D[String(b).toLowerCase()])&&a.push([Math.floor(b[0]-1),0,0,0],[Math.ceil(b[1]+1),0,0,0]);return a}function B(a){if(a)return{fields:a}=a,(a=a&&a.find(b=>b&&b.name&&"value"===b.name.toLowerCase()))&&a.name}function J(a,b){var c;const f=[],{pixelType:d,rasterAttributeTable:g}=b;b=g&&g.features;const l=B(g),n=null==(c=a.defaultSymbol)?void 0:c.color;let q=!1;a.uniqueValueInfos&&(b?b.forEach(h=>{var e;const r=null==(e=a.uniqueValueInfos.find(k=>
String(h.attributes[a.field])===String(k.value)))?void 0:e.symbol.color;r?f.push([h.attributes[l],r.r,r.g,r.b]):n&&f.push([h.attributes[l],n.r,n.g,n.b])}):a.uniqueValueInfos.forEach(h=>{var e;null!=(e=h.symbol.color)&&e.a&&(e=h.symbol.color,isNaN(+h.value)?q=!0:f.push([+h.value,e.r,e.g,e.b]))}));if(q)return null;c=d&&0<f.length?x(f,d):f;b=new m;b.functionName="Colormap";b.functionArguments={};b.functionArguments.Colormap=c;b.variableName="Raster";return b}function K(a){const b=[];a.forEach(c=>{Array.isArray(c)?
b.push(c):null!=c.min&&null!=c.max&&b.push([c.min,c.max,c.avg||0,c.stddev||0])});return b}const D={u1:[0,1],u2:[0,3],u4:[0,15],u8:[0,255],s8:[-128,127],u16:[0,65535],s16:[-32768,32767]},H={simple_scalar:"Simple Scalar",wind_barb:"Wind Barb",single_arrow:"Single Arrow",beaufort_kn:"Beaufort Wind (Knots)",beaufort_m:"Beaufort Wind (MetersPerSecond)",ocean_current_m:"Ocean Current (MetersPerSecond)",ocean_current_kn:"Ocean Current (Knots)"},L=new Set("raster-stretch unique-value class-breaks raster-shaded-relief vector-field raster-colormap".split(" ")),
v={none:0,standardDeviation:3,histogramEqualization:4,minMax:5,percentClip:6,sigmoid:9};t.combineRenderingRules=function(a,b){if(!a||!b)return z.clone(a||b);a=z.clone(a);"none"!==b.functionName.toLowerCase()&&(A(a.functionArguments).Raster=b);return a};t.convertRendererToRenderingRule=function(a,b){b=b||{};switch(a.type){case "raster-stretch":var c=new m;c.functionName="Stretch";var f=v[E.stretchTypeJSONDict.toJSON(a.stretchType)],d=K(a.statistics);d={StretchType:f,Statistics:d,DRA:a.dynamicRangeAdjustment,
UseGamma:a.useGamma,Gamma:a.gamma,ComputeGamma:a.computeGamma};null!=a.outputMin&&(d.Min=a.outputMin);null!=a.outputMax&&(d.Max=a.outputMax);f===v.standardDeviation?(d.NumberOfStandardDeviations=a.numberOfStandardDeviations,c.outputPixelType="u8"):f===v.percentClip?(d.MinPercent=a.minPercent,d.MaxPercent=a.maxPercent,c.outputPixelType="u8"):f===v.minMax?c.outputPixelType="u8":f===v.sigmoid&&(d.SigmoidStrengthLevel=a.sigmoidStrengthLevel);c.functionArguments=d;c.variableName="Raster";if(a.colorRamp){f=
a.colorRamp;d=new m;const g=y.getColorRampName(f);d.functionArguments=g?{colorRamp:g}:!b.convertColorRampToColormap||"algorithmic"!==f.type&&"multipart"!==f.type?{colorRamp:a.colorRamp.toJSON()}:{Colormap:y.convertColorRampToColormap(f,256)};d.variableName="Raster";d.functionName="Colormap";d.functionArguments.Raster=c;a=d}else a=c;return a;case "class-breaks":return I(a,b);case "unique-value":return J(a,b);case "raster-colormap":return(a=a.extractColormap())&&0!==a.length?({pixelType:b}=b,a=b?x(a,
b):a,b=new m,b.functionName="Colormap",b.functionArguments={},b.functionArguments.Colormap=a,a=b):a=void 0,a;case "vector-field":return G(a,b);case "raster-shaded-relief":return"elevation"!==b.dataType?a=new m:(b=new m,b.functionName="Hillshade",c="traditional"===a.hillshadeType?0:1,f="none"===a.scalingType?1:3,d={HillshadeType:c,SlopeType:f,ZFactor:a.zFactor},0===c&&(d.Azimuth=a.azimuth,d.Altitude=a.altitude),3===f&&(d.PSPower=a.pixelSizePower,d.PSZFactor=a.pixelSizeFactor),b.functionArguments=d,
b.variableName="Raster",a.colorRamp&&(b.functionName="ShadedRelief",d.Colormap=y.convertColorRampToColormap(a.colorRamp,256)),a=b),a;case "animated-flow":throw Error("Unsupported rendering rule.");}};t.isSupportedRendererType=function(a){return L.has(a.type)};t.pixelTypeRanges=D;Object.defineProperty(t,"__esModule",{value:!0})});