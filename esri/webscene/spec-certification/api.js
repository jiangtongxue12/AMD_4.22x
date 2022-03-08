// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/_rollupPluginBabelHelpers ../../Basemap ../../Ground ../../WebScene ../../core/has ../../core/accessorSupport/ensureType ../../core/accessorSupport/extensions/serializableProperty/type ../../layers/GroupLayer ../../layers/KMLLayer ../../layers/mixins/operationalLayerModuleMap ../../layers/mixins/operationalLayers ../../layers/support/Sublayer ../../layers/support/source/DataLayerSource ../../layers/support/source/MapLayerSource ./utils".split(" "),function(L,h,M,S,T,la,
v,U,N,V,W,X,q,O,Y,Z){function w(){w=h._asyncToGenerator(function*(a){const b=new Z.ScanContext;return P(null,{typeName:"json",type:a},b)});return w.apply(this,arguments)}function r(a,b,c){return x.apply(this,arguments)}function x(){x=h._asyncToGenerator(function*(a,b,c){switch(b.typeName){case "array":yield aa(a,b,c);break;case "union":yield ba(a,b,c);break;case "json":yield P(a,b,c);break;case "native":yield ca(a,b,c);break;case "enum":yield da(a,b,c)}});return x.apply(this,arguments)}function ca(a,
b,c){return y.apply(this,arguments)}function y(){y=h._asyncToGenerator(function*(a,b,c){c.addProperty({name:a,type:n(b),default:b.default})});return y.apply(this,arguments)}function ea(a){a=a.slice();a.sort();return a}function da(a,b,c){return z.apply(this,arguments)}function z(){z=h._asyncToGenerator(function*(a,b,c){const e=b.values.slice();b.nullable&&e.push(null);c.currentClass&&c.currentClass.typeValue&&"type"===a?c.addProperty({name:a,type:"string",enum:`"${c.currentClass.typeValue}"`}):c.addProperty({name:a,
type:n(b),enum:ea(e).map(d=>"string"===typeof d?`"${d}"`:`${d}`).join("|"),default:b.default})});return z.apply(this,arguments)}function aa(a,b,c){return A.apply(this,arguments)}function A(){A=h._asyncToGenerator(function*(a,b,c){yield r(`${a}[]`,b.elementType,c)});return A.apply(this,arguments)}function ba(a,b,c){return B.apply(this,arguments)}function B(){B=h._asyncToGenerator(function*(a,b,c){var e=[];for(const f of b.types)if("native"!==f.type.typeName&&b.key){var d=f.type;var g=f.value;if("json"===
d.typeName){var k=(d=(d=d.type.__accessorMetadata__)&&d.properties&&d.properties&&d.properties.type)&&t(d);const l=(k=k&&k.type)||d&&d.type;l&&Array.isArray(l)&&1===l.length&&"string"===typeof l[0]&&(g=k?l[0]:C(d,l[0]))}yield r(`${a}<${g}>`,f.type,c)}else e.push(f.type);e.length&&(e=e.map(n),b.nullable&&e.push("null"),e.sort(),c.addProperty({type:e.join("|"),name:a,default:b.default}))});return B.apply(this,arguments)}function Q(a,b){return D.apply(this,arguments)}function D(){D=h._asyncToGenerator(function*(a,
b){return a.type===T&&"layers"===b?u("web-scene/operational-layers"):a.type!==M||"baseLayers"!==b&&"baseMapLayers"!==b?a.type===M&&"elevationLayers"===b||a.type===S&&"layers"===b?u("web-scene/ground"):a.type===N&&"layers"===b?u("web-scene/operational-layers",c=>c!==N):a.type!==O.JoinTableDataSource||"leftTableSource"!==b&&"rightTableSource"!==b?null:p({key:"type",base:null,typeMap:{"data-layer":O.DataLayerSource,"map-layer":Y.MapLayerSource}}):u("web-scene/basemap")});return D.apply(this,arguments)}
function fa(a,b,c){return E.apply(this,arguments)}function E(){E=h._asyncToGenerator(function*(a,b,c){if(a=yield Q(a,b))return a;a=t(c);if(a.types)c=p(a.types);else if(!a.type&&c.types)c=p(c.types);else{{a=t(c);b=F(c);const e=m(a&&a.type||c.type);a&&void 0!==a.default&&"function"!==typeof a.default&&(e.default=C(c,a.default));b.allowNull&&(e.nullable=!0);c=e}c=G(c);c=c.nullable&&"native"===c.typeName?{typeName:"union",key:null,types:[{value:null,type:c}],nullable:!0}:c}return c});return E.apply(this,
arguments)}function P(a,b,c){return H.apply(this,arguments)}function H(){H=h._asyncToGenerator(function*(a,b,c){var e=b.type.__accessorMetadata__,d=b.type.prototype.declaredClass.replace(/\./g,"/");e=e&&e.properties;if(!e)return a&&c.addProperty({name:a,type:"unknown"}),null;let g=d;var k=null,f=a&&a.match(/<([^>]+)>$/);f&&(g+=`--${f[1]}`,k=f[1]);b.type===q&&(g+=`--${c.currentClass.name}`,k=c.currentClass.name);if((f=c.seen.get(g))&&a)return c.addProperty({name:a,type:f}),f;d={type:b.type,name:d,
id:g,properties:[]};a&&(c.addProperty({name:a,type:d}),d.typeValue=k);c.push(a,d);for(const l in e)if(a=e[l],(d=F(a))&&d.enabled){if(b.type===q&&((k="esri/layers/TileLayer"===c.stack[c.stack.length-2].klass.name)&&q.test.isMapImageLayerOverridePolicy(d.overridePolicy)||!k&&q.test.isTileImageLayerOverridePolicy(d.overridePolicy)))continue;d=d.target;"string"===typeof d||null==d?(a=yield fa(b,l,a))&&(yield r("string"===typeof d?d:l,a,c)):yield ha(b,d,c)}return c.pop()});return H.apply(this,arguments)}
function ha(a,b,c){return I.apply(this,arguments)}function I(){I=h._asyncToGenerator(function*(a,b,c){for(const e in b){let d=yield Q(a,e);if(!d){const g=b[e];d=g.types?p(g.types):m(g.type);d.default=g.default;d=G(d)}yield r(e,d,c)}});return I.apply(this,arguments)}function u(a,b){return J.apply(this,arguments)}function J(){J=h._asyncToGenerator(function*(a,b){const c={typeName:"union",key:"layerType",types:[]};for(const e in X.supportedTypes[a]){if("web-scene/operational-layers"===a&&"ArcGISTiledElevationServiceLayer"===
e)continue;const d=yield W.typeModuleMap[e]();d&&(!b||b(d))&&d!==V&&c.types.push({type:{typeName:"json",type:d},value:e})}return 0===c.types.length?null:{typeName:"array",elementType:1===c.types.length?c.types[0].type:c}});return J.apply(this,arguments)}function n(a){switch(a.typeName){case "array":return`${n(a.elementType)}[]`;case "union":{const b=a.types.map(c=>n(c.type));a.nullable&&b.push("null");b.sort();return`${b.join(" | ")}`}case "native":switch(a.type){case Number:return"number";case v.Integer:return"integer";
case String:return"string";case Boolean:return"boolean";case Object:return"object";default:return"unknown"}case "json":return a.type.prototype.declaredClass;case "enum":return"string"}}function ia(a){a=a.prototype.itemType&&a.prototype.itemType.Type;if(!a)return{typeName:"array",elementType:{typeName:"native",type:null}};if("function"===typeof a)return{typeName:"array",elementType:m(a)};if(a.typeMap){const b=[];for(const c in a.typeMap){const e=a.typeMap[c];b.push({type:m(e),value:K(e)?null:c})}return{typeName:"array",
elementType:{typeName:"union",key:"string"===typeof a.key?a.key:"type",types:b}}}}function ja(a){if("json"!==a.typeName)return null;const b=(a=a.type.__accessorMetadata__)&&a.properties&&a.properties.type,c=(a=(a=b&&t(b))&&a.type)||b&&b.type;return c&&Array.isArray(c)&&"string"===typeof c[0]?a?a:b.type.map(e=>C(b,e)):null}function G(a){if("array"===a.typeName)return a.elementType=G(a.elementType),a;const b=ja(a);return b?{typeName:"union",key:"type",nullable:a.nullable,types:b.map(c=>({value:c,type:a}))}:
a}function p(a){if(Array.isArray(a))return{typeName:"array",elementType:p(a[0])};const b=[];for(const c in a.typeMap){const e=a.typeMap[c];b.push({type:m(e),value:K(e)?null:c})}return{typeName:"union",key:"string"===typeof a.key?a.key:"type",types:b}}function C(a,b){a=F(a);var c=a.writer;return null!=c&&c.isJSONMapWriter?(c={value:""},a.writer(b,c,"value"),c.value):b}function m(a){return a?v.isLongFormType(a)?R(a):Array.isArray(a)?"string"===typeof a[0]||"number"===typeof a[0]?{typeName:"enum",values:a}:
1<a.length?{typeName:"union",key:null,types:a.map(b=>({type:m(b),value:null}))}:{typeName:"array",elementType:m(a[0])}:U.isCollection(a)?ia(a):K(a)?{typeName:"native",type:a}:ka(a)?{typeName:"json",type:a}:{typeName:"native",type:null}:{typeName:"native",type:null}}function R(a){switch(a.type){case "native":return{typeName:"native",type:a.value};case "array":return{typeName:"array",elementType:m(a.value)};case "one-of":return{typeName:"union",key:null,types:a.values.map(b=>({type:R(b),value:null}))}}}
function ka(a){for(;a;){if(a.prototype&&("esri.core.JSONSupport"===a.prototype.declaredClass||"esri.core.MultiOriginJSONSupport"===a.prototype.declaredClass))return!0;a=Object.getPrototypeOf(a)}return!1}function K(a){return a===String||a===Boolean||a===Number||a===v.Integer||a===Object}function t(a){if(!a.json)return null;const b=a.json.origins;a=a.json;const c=b&&b["web-document"];return b&&b["web-scene"]||c||a||null}function F(a){if(!a.json)return null;const b=a.json.origins;a=a.json.write;const c=
b&&b["web-document"]&&b["web-document"].write;return b&&b["web-scene"]&&b["web-scene"].write||c||a||null}L.scan=function(a){return w.apply(this,arguments)};Object.defineProperty(L,"__esModule",{value:!0})});