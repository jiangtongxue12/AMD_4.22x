// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/_rollupPluginBabelHelpers ../../Color ../../renderers/ClassBreaksRenderer ../../renderers/DictionaryRenderer ../../renderers/DotDensityRenderer ../../renderers/HeatmapRenderer ../../renderers/Renderer ../../renderers/SimpleRenderer ../../renderers/UniqueValueRenderer ../../renderers/support/jsonUtils ../../core/Error ../../core/maybe ../../renderers/support/HeatmapColorStop ./support/utils ../statistics/heatmapStatistics ../support/utils ../support/adapters/support/layerUtils ../../chunks/heatmap".split(" "),
function(w,k,x,T,U,V,E,W,X,Y,Z,y,n,l,p,F,G,z,q){function H(a){return r.apply(this,arguments)}function r(){r=k._asyncToGenerator(function*(a){if(!(a&&a.layer&&a.view))throw new y("heatmap-renderer:missing-parameters","'layer' and 'view' parameters are required");const {blurRadius:c,minRatio:d,maxRatio:b,fadeToTransparent:m}=a;a={...a};a.blurRadius=null==c?10:c;a.minRatio=null==d?.01:d;a.maxRatio=null==b?1:b;a.fadeToTransparent=null==m?!0:m;var f=[0,2,3,1,6],e=z.createLayerAdapter(a.layer,f);a.layer=
e;if(!e)throw new y("heatmap-renderer:invalid-parameters","'layer' must be one of these types: "+z.getLayerTypeLabels(f).join(", "));f=n.isSome(a.signal)?{signal:a.signal}:null;yield e.load(f);f=yield G.getFieldsList({field:a.field});if(e=p.verifyBasicFieldValidity(e,f,"heatmap-renderer:invalid-parameters"))throw e;return a});return r.apply(this,arguments)}function I(a){return t.apply(this,arguments)}function t(){t=k._asyncToGenerator(function*(a){let c=a.scheme,d=null;var b=null;b=yield p.getBasemapInfo(a.basemap,
a.view);d=n.isSome(b.basemapId)?b.basemapId:null;b=n.isSome(b.basemapTheme)?b.basemapTheme:null;if(c)return{scheme:q.cloneScheme(c),basemapId:d,basemapTheme:b};if(a=q.getSchemes({basemap:d,basemapTheme:b}))c=a.primaryScheme,d=a.basemapId,b=a.basemapTheme;return{scheme:c,basemapId:d,basemapTheme:b}});return t.apply(this,arguments)}function J(a,c){return u.apply(this,arguments)}function u(){u=k._asyncToGenerator(function*(a,c){const {fieldOffset:d}=a,{field:b,basemap:m,blurRadius:f,minRatio:e,maxRatio:K,
fadeToTransparent:L,heatmapScheme:M,view:N}=c,{scheme:A,basemapId:O,basemapTheme:P}=yield I({basemap:m,scheme:M,view:N});var h=A.colors;const B=h.length,C=(c=!a.count)?[0,100]:[a.min,a.max],Q=(K-e)/(B-1),g=h[0],D=[new l({ratio:0,color:new x([g.r,g.g,g.b,0])}),new l({ratio:.01,color:new x([g.r,g.g,g.b,0])}),new l({ratio:L?e:.01,color:g})];p.createColors(h,B).forEach((R,S)=>{D.push(new l({ratio:e+Q*S,color:R}))});h=new E({blurRadius:f,colorStops:D,field:b,minPixelIntensity:C[0],maxPixelIntensity:C[1]});
null!=d&&(h.fieldOffset=d);return{renderer:h,statistics:a,defaultValuesUsed:c,scheme:q.cloneScheme(A),basemapId:O,basemapTheme:P}});return u.apply(this,arguments)}function v(){v=k._asyncToGenerator(function*(a){a=yield H(a);const c=a.statistics?a.statistics:yield F({layer:a.layer,field:a.field,fieldOffset:a.fieldOffset,blurRadius:a.blurRadius,view:a.view,signal:a.signal});return J(c,a)});return v.apply(this,arguments)}w.createRenderer=function(a){return v.apply(this,arguments)};Object.defineProperty(w,
"__esModule",{value:!0})});