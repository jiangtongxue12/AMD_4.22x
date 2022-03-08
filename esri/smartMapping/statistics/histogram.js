// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../core/Error ../../core/maybe ../../layers/support/fieldUtils ./support/utils ../support/utils ../support/adapters/support/layerUtils".split(" "),function(m,c,t,n,p,q,f){function u(a){return g.apply(this,arguments)}function g(){g=m._asyncToGenerator(function*(a){if(!(a&&a.layer&&(a.field||a.valueExpression||a.sqlExpression)))throw new c("histogram:missing-parameters","'layer' and 'field', 'valueExpression' or 'sqlExpression' parameters are required");
if(a.valueExpression&&!a.sqlExpression&&!a.view)throw new c("histogram:missing-parameters","View is required when 'valueExpression' is specified");const {layer:h,...k}=a;var b=f.createLayerAdapter(h,f.defaultSupportedLayerTypes);a={layerAdapter:b,...k};a.normalizationType=q.getNormalizationType(a);if(!b)throw new c("histogram:invalid-parameters","'layer' must be one of these types: "+f.getLayerTypeLabels(f.defaultSupportedLayerTypes).join(", "));var e=t.isSome(a.signal)?{signal:a.signal}:null;yield b.load(e);
const v=a.valueExpression||a.sqlExpression;var d=a.field;e=d?b.getField(d):null;const r=!a.classificationMethod||"equal-interval"===a.classificationMethod;d=yield q.getFieldsList({field:d,normalizationField:a.normalizationField,valueExpression:a.valueExpression});if(d=p.verifyBasicFieldValidity(b,d,"histogram:invalid-parameters"))throw d;if(e){if(b=p.verifyFieldType(b,e,"histogram:invalid-parameters",w))throw b;if(n.isDateField(e)){if(a.normalizationType)throw new c("histogram:invalid-parameters",
"Normalization is not allowed for date fields");if(!r)throw new c("histogram:invalid-parameters","'classificationMethod' other than 'equal-interval' is not allowed for date fields");}}else if(v){if(a.normalizationType)throw new c("histogram:invalid-parameters","Normalization is not allowed when 'valueExpression' or 'sqlExpression' is specified");if(!r)throw new c("histogram:invalid-parameters","'classificationMethod' other than 'equal-interval' is not allowed when 'valueExpression' or 'sqlExpression' is specified");
}return a});return g.apply(this,arguments)}function l(){l=m._asyncToGenerator(function*(a){const {layerAdapter:h,...k}=yield u(a);return h.histogram(k)});return l.apply(this,arguments)}const w=["date",...n.numericTypes];return function(a){return l.apply(this,arguments)}});