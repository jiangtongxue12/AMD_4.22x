// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/_rollupPluginBabelHelpers ../utils ./operations/pbfJSONFeatureSet ./operations/query ../support/FeatureSet ../support/Query".split(" "),function(d,g,k,l,m,n,p){function e(){e=g._asyncToGenerator(function*(b,a,c){b=yield h(b,a,c);return n.fromJSON(b)});return e.apply(this,arguments)}function h(b,a,c){return f.apply(this,arguments)}function f(){f=g._asyncToGenerator(function*(b,a,c){b=k.parseUrl(b);c={...c};a=p.from(a);({data:a}=yield m.executeQueryPBF(b,a,new l.JSONFeatureSetParserContext({sourceSpatialReference:a.sourceSpatialReference,
applyTransform:!a.quantizationParameters}),c));return a});return f.apply(this,arguments)}d.executeQueryPBF=function(b,a,c){return e.apply(this,arguments)};d.executeRawQueryPBF=h;Object.defineProperty(d,"__esModule",{value:!0})});