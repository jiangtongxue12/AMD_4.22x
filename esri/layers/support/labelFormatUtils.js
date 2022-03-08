// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define("require exports ../../chunks/_rollupPluginBabelHelpers ../../core/Error ../../core/Logger ../../intl/date ../../intl/number ./fieldUtils ./labelUtils ../../support/arcadeOnDemand".split(" "),function(r,k,t,u,v,m,w,x,n,y){function l(){l=t._asyncToGenerator(function*(b,f,a){if(!b||!b.symbol)return p;const g=b.where,h=n.getLabelExpression(b);b=g?yield new Promise((e,c)=>r(["../../core/sql/WhereClause"],e,c)):null;if("arcade"===h.type){const e=yield y.createLabelExpression(h.expression,a,f);a=
{type:"arcade",evaluate(c){try{const d=e.evaluate({$feature:"attributes"in c?e.repurposeFeature(c):e.repurposeAdapter(c)});if(null!=d)return d.toString()}catch(d){z.error(new u("bad-arcade-expression","Encountered an error when evaluating label expression for feature",{feature:c,expression:h}))}return null},needsHydrationToEvaluate(){return null==n.getSingleFieldArcadeExpression(h.expression)}}}else a={type:"simple",evaluate(e){return h.expression.replace(/{[^}]*}/g,c=>{var d=c.slice(1,-1);d=f.get(d);
if(!d)return c;c=null;"attributes"in e?e&&e.attributes&&(c=e.attributes[d.name]):c=e.field(d.name);return null==c?"":q(c,d)})}};if(g){let e;try{e=b.WhereClause.create(g,f)}catch(d){return p}const c=a.evaluate;a.evaluate=d=>e.testFeature(d,"attributes"in d?void 0:A)?c(d):null}return a});return l.apply(this,arguments)}function q(b,f){if(null==b)return"";const a=f.domain;if(a)if("codedValue"===a.type||"coded-value"===a.type)for(var g of a.codedValues){if(g.code===b)return g.name}else if("range"===a.type){g=
+b;const h="range"in a?a.range[1]:a.maxValue;if(("range"in a?a.range[0]:a.minValue)<=g&&g<=h)return a.name}"date"===f.type||"esriFieldTypeDate"===f.type?b=m.formatDate(b,m.convertDateFormatToIntlOptions("short-date")):x.isNumericField(f)&&(b=w.formatNumber(+b));return b?b:""}const z=v.getLogger("esri.layers.support.labelFormatUtils"),p={type:"simple",evaluate(){return null}},A={getAttribute(b,f){return b.field(f)}};k.createLabelFunction=function(b,f,a){return l.apply(this,arguments)};k.formatField=
q;Object.defineProperty(k,"__esModule",{value:!0})});