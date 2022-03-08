// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/_rollupPluginBabelHelpers ../../renderers/ClassBreaksRenderer ../../renderers/DictionaryRenderer ../../renderers/DotDensityRenderer ../../renderers/HeatmapRenderer ../../renderers/Renderer ../../renderers/SimpleRenderer ../../renderers/UniqueValueRenderer ../../renderers/support/jsonUtils ../../core/Error ../../core/maybe ../../core/screenUtils ../../intl/messages ../../intl/substitute ../../renderers/support/AuthoringInfo ../../renderers/support/AuthoringInfoVisualVariable ../../renderers/support/utils ../../renderers/visualVariables/SizeVariable ../heuristics/ageUnit ../heuristics/outline ../heuristics/sizeRange ./support/utils ../statistics/support/ageUtils ../support/utils ../support/adapters/support/layerUtils ../../chunks/size".split(" "),
function(C,w,V,va,wa,xa,ya,za,Aa,Ba,h,A,W,G,fa,X,ha,ia,Y,ja,Z,ka,g,E,F,r,B){function la(a){return H.apply(this,arguments)}function H(){H=w._asyncToGenerator(function*(a){if(!(a&&a.layer&&(a.field||a.valueExpression||a.sqlExpression)))throw new h("size-visual-variable:missing-parameters","'layer' and 'field', 'valueExpression' or 'sqlExpression' parameters are required");if(a.valueExpression&&!a.sqlExpression&&!a.view)throw new h("size-visual-variable:missing-parameters","View is required when 'valueExpression' is specified");
a={...a};if("90-10"===a.theme)throw new h("size-visual-variable:not-supported","Only 'high-to-low', 'above', 'below' themes are supported.");var b=r.createLayerAdapter(a.layer,r.featureCapableLayerTypes);a.layer=b;if(!b)throw new h("size-visual-variable:invalid-parameters","'layer' must be one of these types: "+r.getLayerTypeLabels(r.featureCapableLayerTypes).join(", "));"height"===a.axis&&(a.sizeOptimizationEnabled=!1);var c=A.isSome(a.signal)?{signal:a.signal}:null;yield b.load(c);c=b.geometryType;
if("mesh"===c)throw new h("size-visual-variable:invalid-parameters","Size visualization is not applicable to layers with 'mesh' geometry type");if(a.worldScale){if("polyline"===c||"polygon"===c)throw new h("size-visual-variable:not-supported","'worldScale' sizing is not supported for polyline and polygon layers");if(!a.view||"3d"!==a.view.type)throw new h("size-visual-variable:invalid-parameters","'view' parameter should be an instance of SceneView when 'worldScale' parameter is true");}c=yield F.getFieldsList({field:a.field,
normalizationField:a.normalizationField,valueExpression:a.valueExpression});if(b=g.verifyBasicFieldValidity(b,c,"size-visual-variable:invalid-parameters"))throw b;return a});return H.apply(this,arguments)}function ma(a){return I.apply(this,arguments)}function I(){I=w._asyncToGenerator(function*(a){if(!(a&&a.layer&&(a.field||a.valueExpression||a.sqlExpression)))throw new h("size-continuous-renderer:missing-parameters","'layer' and 'field', 'valueExpression' or 'sqlExpression' parameters are required");
if(a.valueExpression&&!a.sqlExpression&&!a.view)throw new h("size-continuous-renderer:missing-parameters","View is required when 'valueExpression' is specified");a={...a};a.symbolType=a.symbolType||"2d";a.defaultSymbolEnabled=null==a.defaultSymbolEnabled?!0:a.defaultSymbolEnabled;var b=r.createLayerAdapter(a.layer,r.featureCapableLayerTypes);a.layer=b;if(!b)throw new h("size-continuous-renderer:invalid-parameters","'layer' must be one of these types: "+r.getLayerTypeLabels(r.featureCapableLayerTypes).join(", "));
var c=A.isSome(a.signal)?{signal:a.signal}:null;yield b.load(c);c=b.geometryType;const d=-1<a.symbolType.indexOf("3d");a.outlineOptimizationEnabled="polygon"===c?a.outlineOptimizationEnabled:!1;if("mesh"===c)throw new h("size-continuous-renderer:invalid-parameters","Size visualization is not applicable to layers with 'mesh' geometry type");if(d&&("polyline"===c||"polygon"===c))throw new h("size-continuous-renderer:not-supported","3d symbols are not supported for polyline and polygon layers");if(-1<
a.symbolType.indexOf("3d-volumetric")&&(!a.view||"3d"!==a.view.type))throw new h("size-continuous-renderer:invalid-parameters","'view' parameter should be an instance of SceneView when 'symbolType' parameter is '3d-volumetric' or 3d-volumetric-uniform");c=yield F.getFieldsList({field:a.field,normalizationField:a.normalizationField,valueExpression:a.valueExpression});if(b=g.verifyBasicFieldValidity(b,c,"size-continuous-renderer:invalid-parameters"))throw b;return a});return I.apply(this,arguments)}
function na(a){return J.apply(this,arguments)}function J(){J=w._asyncToGenerator(function*(a){if(!a||!a.layer||!a.field&&!a.valueExpression)throw new h("size-class-breaks-renderer:missing-parameters","'layer' and 'field' or 'valueExpression' parameters are required");if(a.valueExpression&&!a.view)throw new h("size-class-breaks-renderer:missing-parameters","View is required when 'valueExpression' is specified");a={...a};a.symbolType=a.symbolType||"2d";a.defaultSymbolEnabled=null==a.defaultSymbolEnabled?
!0:a.defaultSymbolEnabled;a.classificationMethod=a.classificationMethod||"equal-interval";a.normalizationType=F.getNormalizationType(a);var b=r.createLayerAdapter(a.layer,r.featureCapableLayerTypes);a.layer=b;if(!b)throw new h("size-class-breaks-renderer:invalid-parameters","'layer' must be one of these types: "+r.getLayerTypeLabels(r.featureCapableLayerTypes).join(", "));if(!(null!=a.minValue&&null!=a.maxValue||null==a.minValue&&null==a.maxValue))throw new h("size-class-breaks-renderer:missing-parameters",
"Both 'minValue' and 'maxValue' are required when specifying custom data range");var c=A.isSome(a.signal)?{signal:a.signal}:null;yield b.load(c);c=b.geometryType;const d=-1<a.symbolType.indexOf("3d");a.outlineOptimizationEnabled="polygon"===c?a.outlineOptimizationEnabled:!1;if("mesh"===c)throw new h("size-class-breaks-renderer:invalid-parameters","Size visualization is not applicable to layers with 'mesh' geometry type");if(d&&("polyline"===c||"polygon"===c))throw new h("size-class-breaks-renderer:not-supported",
"3d symbols are not supported for polyline and polygon layers");if(-1<a.symbolType.indexOf("3d-volumetric")&&(!a.view||"3d"!==a.view.type))throw new h("size-class-breaks-renderer:invalid-parameters","'view' parameter should be an instance of SceneView when 'symbolType' parameter is '3d-volumetric' or 3d-volumetric-uniform");c=yield F.getFieldsList({field:a.field,normalizationField:a.normalizationField});if(b=g.verifyBasicFieldValidity(b,c,"size-class-breaks-renderer:invalid-parameters"))throw b;return a});
return J.apply(this,arguments)}function oa(a){a={...a};delete a.basemap;delete a.sizeScheme;delete a.legendOptions;delete a.symbolType;delete a.defaultSymbolEnabled;a.analyzeData=!(null!=a.minValue&&null!=a.maxValue);return a}function aa(a){a={...a};const b=-1<a.symbolType.indexOf("3d-volumetric");if(a.worldScale=b)a.axis="3d-volumetric-uniform"===a.symbolType?"all":"height";delete a.symbolType;delete a.defaultSymbolEnabled;return a}function pa(a){return K.apply(this,arguments)}function K(){K=w._asyncToGenerator(function*(a){if(!(a&&
a.layer&&a.view&&a.startTime&&a.endTime))throw new h("size-age-renderer:missing-parameters","'layer', 'view', 'startTime', 'endTime' parameters are required");a={...a};a.symbolType=a.symbolType||"2d";a.defaultSymbolEnabled=null==a.defaultSymbolEnabled?!0:a.defaultSymbolEnabled;var b=r.createLayerAdapter(a.layer,r.featureCapableLayerTypes);a.layer=b;if(!b)throw new h("size-age-renderer:invalid-parameters","'layer' must be one of these types: "+r.getLayerTypeLabels(r.featureCapableLayerTypes).join(", "));
var c=A.isSome(a.signal)?{signal:a.signal}:null;yield b.load(c);c=b.geometryType;const d=-1<a.symbolType.indexOf("3d");a.outlineOptimizationEnabled="polygon"===c?a.outlineOptimizationEnabled:!1;if("mesh"===c)throw new h("size-age-renderer:invalid-parameters","Size visualization is not applicable to layers with 'mesh' geometry type");if(d&&("polyline"===c||"polygon"===c))throw new h("size-age-renderer:not-supported","3d symbols are not supported for polyline and polygon layers");if(-1<a.symbolType.indexOf("3d-volumetric")&&
(!a.view||"3d"!==a.view.type))throw new h("size-age-renderer:invalid-parameters","'view' parameter should be an instance of SceneView when 'symbolType' parameter is '3d-volumetric' or 3d-volumetric-uniform");if(b=E.verifyDates(b,a.startTime,a.endTime,"size-age-renderer:invalid-parameters"))throw b;if(a.unit&&-1===E.supportedAgeUnits.indexOf(a.unit))throw new h("size-age-renderer:invalid-unit",`Supported units are: ${E.supportedAgeUnits.join(", ")}`);return a});return K.apply(this,arguments)}function ba(a){return L.apply(this,
arguments)}function L(){L=w._asyncToGenerator(function*(a){let b=a.sizeScheme,c=null;var d=null;d=yield g.getBasemapInfo(a.basemap,a.view);c=A.isSome(d.basemapId)?d.basemapId:null;d=A.isSome(d.basemapTheme)?d.basemapTheme:null;if(b)return{scheme:B.cloneScheme(b),basemapId:c,basemapTheme:d};if(a=B.getSchemes({basemap:c,basemapTheme:d,geometryType:a.geometryType,worldScale:a.worldScale,view:a.view}))b=a.primaryScheme,c=a.basemapId,d=a.basemapTheme;return{scheme:b,basemapId:c,basemapTheme:d}});return L.apply(this,
arguments)}function ca(a,b){let c;switch(b){case "point":case "multipoint":c=[a.minSize,a.maxSize];break;case "polyline":c=[a.minWidth,a.maxWidth];break;case "polygon":c=[a.marker.minSize,a.marker.maxSize]}return c}function qa(a,b,c,d){return M.apply(this,arguments)}function M(){M=w._asyncToGenerator(function*(a,b,c,d){const {theme:e,field:k,normalizationField:v,minValue:p,maxValue:q,axis:l}=a;var f=a.layer,m=k&&"function"!==typeof k?f.getField(k):null,t=m&&"date"===m.type,n=f.geometryType;f=yield ba({basemap:a.basemap,
geometryType:n,sizeScheme:a.sizeScheme,worldScale:a.worldScale,view:a.view});m=f.scheme;if(!m)throw new h("size-visual-variable:insufficient-info","Unable to find size scheme");d=d&&[d.minSize,d.maxSize]||ca(m,n);const {minDataValue:u,maxDataValue:y,defaultValuesUsed:x}=g.getDataRange(b,c,e,t,"above"===e||"below"===e);c=[];const z="height"===l;t=z?l:void 0;n=d[0];d=d[1];z&&"number"===typeof n&&"number"===typeof d&&(d=g.getSizeRangeForAxis({minSize:n,maxSize:d},t),c.push(new Y({axis:"width-and-depth",
minSize:d.minSize})),d=d.maxSize);a=new Y({field:k,valueExpression:a.valueExpression,valueExpressionTitle:a.valueExpressionTitle,valueUnit:"unknown",normalizationField:v,axis:t,minSize:n,maxSize:d,minDataValue:u,maxDataValue:y,legendOptions:a.legendOptions});"clamped-linear"===a.transformationType&&"below"===e&&a.flipSizes();c.unshift(a);a=new ha({type:"size",theme:e,minSliderValue:null!=p?p:b.min,maxSliderValue:null!=q?q:b.max});a=new X({visualVariables:[a]});return{basemapId:f.basemapId,basemapTheme:f.basemapTheme,
visualVariables:c,statistics:b,defaultValuesUsed:x,sizeScheme:B.cloneScheme(m),authoringInfo:a}});return M.apply(this,arguments)}function da(a,b,c,d,e){return N.apply(this,arguments)}function N(){N=w._asyncToGenerator(function*(a,b,c,d,e){const k=yield G.fetchMessageBundle("esri/smartMapping/t9n/smartMapping"),v=e.field,p=e.layer.geometryType,q=e.defaultSymbolEnabled;var l=B.cloneScheme(a.sizeScheme),f="polygon"===p;const m=f?l.marker:l;l=f?l.background:null;f=f?"point":p;const t=b&&b.opacity,n=a.visualVariables.map(u=>
u.clone());b&&b.visualVariables&&b.visualVariables.length&&n.push(...b.visualVariables.map(u=>u.clone()));return{renderer:new V({backgroundFillSymbol:l&&g.createSymbol(p,{type:e.symbolType,color:l.color,outline:g.getSymbolOutlineFromScheme(l,p,t)}),classBreakInfos:[{minValue:-ea,maxValue:ea,symbol:g.createSymbol(f,{type:e.symbolType,color:m.color,size:g.getSymbolSizeFromScheme(m,f),outline:g.getSymbolOutlineFromScheme(m,f,t)})}],defaultLabel:q?k.other:null,defaultSymbol:q?g.createSymbol(f,{type:e.symbolType,
color:m.noDataColor,size:g.getSymbolSizeFromScheme(m,f,!0),outline:g.getSymbolOutlineFromScheme(m,f,t)}):null,field:v,normalizationField:d,normalizationType:c,valueExpression:e.valueExpression,valueExpressionTitle:e.valueExpressionTitle,visualVariables:n,authoringInfo:a.authoringInfo&&a.authoringInfo.clone()}),visualVariables:a.visualVariables.map(u=>u.clone()),statistics:a.statistics,defaultValuesUsed:a.defaultValuesUsed,sizeScheme:B.cloneScheme(a.sizeScheme),basemapId:a.basemapId,basemapTheme:a.basemapTheme}});
return N.apply(this,arguments)}function ra(a,b){const c=W.toPt(a.minSize);a=(W.toPt(a.maxSize)-c)/(4<=b?b-1:b);const d=[];for(let e=0;e<b;e++)d.push(c+a*e);return d}function sa(a,b){return O.apply(this,arguments)}function O(){O=w._asyncToGenerator(function*(a,b){var c=yield G.fetchMessageBundle("esri/smartMapping/t9n/smartMapping");const d=a.defaultSymbolEnabled,e=a.layer.geometryType;var k="polygon"===e;const v=-1<a.symbolType.indexOf("3d-volumetric"),p=yield ba({basemap:a.basemap,geometryType:e,
sizeScheme:a.sizeScheme,worldScale:v,view:a.view}),q=p.scheme,{result:l,outlineResult:f}=b,m=l.classBreakInfos,t=a.classificationMethod,n=a.normalizationType,u=k?q.marker:q,y=k?q.background:null,x=k?"point":e;k=ca(u,x);const z=v&&g.getSizeRangeForAxis({minSize:k[0],maxSize:k[1]},"height"),ta=ra({minSize:k[0],maxSize:v?z.maxSize:k[1]},m.length),P=f&&f.opacity;c=new V({backgroundFillSymbol:y&&g.createSymbol(e,{type:a.symbolType,color:y.color,outline:g.getSymbolOutlineFromScheme(y,e,P)}),classBreakInfos:m.map((D,
ua)=>({minValue:D.minValue,maxValue:D.maxValue,symbol:g.createSymbol(x,{type:a.symbolType,color:u.color,size:ta[ua],widthAndDepth:z&&z.minSize,outline:g.getSymbolOutlineFromScheme(u,x,P)}),label:D.label})),defaultLabel:d?c.other:null,defaultSymbol:d?g.createSymbol(x,{type:a.symbolType,color:u.noDataColor,size:g.getSymbolSizeFromScheme(u,x,!0),widthAndDepth:z&&z.minSize,outline:g.getSymbolOutlineFromScheme(u,x,P)}):null,field:a.field,valueExpression:a.valueExpression,valueExpressionTitle:a.valueExpressionTitle,
normalizationType:n,normalizationField:a.normalizationField,normalizationTotal:"percent-of-total"===n?l.normalizationTotal:void 0,legendOptions:a.legendOptions,authoringInfo:new X({type:"class-breaks-size",classificationMethod:t,standardDeviationInterval:a.standardDeviationInterval})});"standard-deviation"!==t&&ia.setLabelsForClassBreaks({classBreakInfos:c.classBreakInfos,classificationMethod:t,normalizationType:n,round:!0});f&&f.visualVariables&&f.visualVariables.length&&(c.visualVariables=f.visualVariables.map(D=>
D.clone()));return{renderer:c,sizeScheme:B.cloneScheme(q),classBreaksResult:l,defaultValuesUsed:b.defaultValuesUsed,basemapId:p.basemapId,basemapTheme:p.basemapTheme}});return O.apply(this,arguments)}function Q(a){return R.apply(this,arguments)}function R(){R=w._asyncToGenerator(function*(a){a=yield la(a);const {view:b,field:c,valueExpression:d,minValue:e,maxValue:k,layer:v,normalizationField:p,signal:q,statistics:l}=a,[f,m,t]=yield Promise.all([l?l:g.getSummaryStatistics({layer:v,field:c,valueExpression:d,
sqlExpression:a.sqlExpression,sqlWhere:a.sqlWhere,normalizationType:p?"field":void 0,normalizationField:p,minValue:e,maxValue:k,view:b,signal:q}),"90-10"===a.theme?g.getClassBreaks({layer:v,field:c,normalizationField:p,valueExpression:d,classificationMethod:"quantile",minValue:e,maxValue:k,view:b,numClasses:10,signal:q}):null,a.sizeOptimizationEnabled?ka({view:b,layer:v,signal:q}):null]);return qa(a,f,null==m?void 0:m.result,t)});return R.apply(this,arguments)}function S(){S=w._asyncToGenerator(function*(a){a=
yield ma(a);var b={layer:a.layer,view:a.view,signal:a.signal};const [c,d]=yield Promise.all([Q(aa(a)),a.outlineOptimizationEnabled?Z(b):null]);b=a.normalizationField;return da(c,d,b?"field":void 0,b,a)});return S.apply(this,arguments)}function T(){T=w._asyncToGenerator(function*(a){a=yield na(a);const b=yield g.getClassBreaks(oa(a),a.outlineOptimizationEnabled);return sa(a,b)});return T.apply(this,arguments)}function U(){U=w._asyncToGenerator(function*(a){var b=yield pa(a);const {defaultSymbolEnabled:c,
view:d,startTime:e,endTime:k,symbolType:v,minValue:p,maxValue:q,signal:l}=b;a=b.layer;var f={layer:b.layer,view:b.view,signal:l};const [m,t]=yield Promise.all([b.unit?{unit:b.unit,statistics:null,valueExpression:null}:yield ja({view:d,layer:a,startTime:e,endTime:k,minValue:p,maxValue:q,signal:l}),b.outlineOptimizationEnabled?Z(f):null]),{unit:n,statistics:u}=m;f=E.getAgeExpressions({layer:a,startTime:e,endTime:k,unit:n}).valueExpression;var y=yield G.fetchMessageBundle("esri/smartMapping/t9n/smartMapping");
y=fa.substitute(y[`ageInfo_${n}`],{unit:n,startTime:g.formatDate(e,n,a),endTime:g.formatDate(k,n,a)});b=yield Q(aa({layer:a,basemap:b.basemap,valueExpression:f,symbolType:v,statistics:u,legendOptions:{title:y},theme:b.theme,sizeScheme:b.sizeScheme,sizeOptimizationEnabled:b.sizeOptimizationEnabled,view:b.view,minValue:p,maxValue:q,signal:l}));a=yield da(b,t,null,null,{layer:a,valueExpression:f,defaultSymbolEnabled:c,symbolType:v});a.renderer.authoringInfo.visualVariables.forEach(x=>g.updateAgeRendererAuthoringInfoVV(x,
e,k,n));return{...a,unit:n}});return U.apply(this,arguments)}const ea=2**53-1;C.createAgeRenderer=function(a){return U.apply(this,arguments)};C.createClassBreaksRenderer=function(a){return T.apply(this,arguments)};C.createContinuousRenderer=function(a){return S.apply(this,arguments)};C.createVisualVariables=Q;Object.defineProperty(C,"__esModule",{value:!0})});