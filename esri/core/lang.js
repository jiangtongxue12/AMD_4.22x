// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define(["exports","./arrayUtils","./has","./typedArrayUtil"],function(g,l,m,d){function k(a,b){let c;if(b)for(c in a)a.hasOwnProperty(c)&&(void 0===a[c]?delete a[c]:a[c]instanceof Object&&k(a[c],!0));else for(c in a)a.hasOwnProperty(c)&&void 0===a[c]&&delete a[c];return a}function h(a){if(!a||"object"!==typeof a||"function"===typeof a)return a;if(d.isInt8Array(a)||d.isUint8Array(a)||d.isUint8ClampedArray(a)||d.isInt16Array(a)||d.isUint16Array(a)||d.isInt32Array(a)||d.isUint32Array(a)||d.isFloat32Array(a)||
d.isFloat64Array(a))return d.slice(a);if(a instanceof Date)return new Date(a.getTime());if(a instanceof ArrayBuffer)return a.slice(0,a.byteLength);if(a instanceof Map){const c=new Map;a.forEach((e,f)=>{c.set(f,h(e))});return c}if(a instanceof Set){const c=new Set;a.forEach(e=>{c.add(h(e))});return c}let b;if("function"===typeof a.clone)b=a.clone();else if("function"===typeof a.map&&"function"===typeof a.forEach)b=a.map(h);else if("function"===typeof a.notifyChange&&"function"===typeof a.watch)b=a.clone();
else{b={};for(const c of Object.getOwnPropertyNames(a))b[c]=h(a[c])}return b}function n(a,b){if(null===a||null===b)return!1;const c=Object.keys(a),e=c.length;if(null===b||Object.keys(b).length!==e)return!1;for(const f of c)if(a[f]!==b[f]||!Object.prototype.hasOwnProperty.call(b,f))return!1;return!0}g.clone=h;g.equals=function(a,b){return a===b||"number"===typeof a&&isNaN(a)&&"number"===typeof b&&isNaN(b)||"function"===typeof(a||{}).getTime&&"function"===typeof(b||{}).getTime&&a.getTime()===b.getTime()||
!1};g.equalsShallow=function(a,b){if(a===b)return!0;if(null===a||void 0===a||"string"===typeof a)return a===b;if("number"===typeof a)return a===b||"number"===typeof b&&isNaN(a)&&isNaN(b);if(a instanceof Date)return b instanceof Date&&a.getTime()===b.getTime();if(Array.isArray(a))return Array.isArray(b)&&l.equals(a,b);if(a instanceof Set){var c;if(c=b instanceof Set)a:if(a.size!==b.size)c=!1;else{for(const e of a)if(!b.has(e)){c=!1;break a}c=!0}return c}if(a instanceof Map){if(c=b instanceof Map)a:if(a.size!==
b.size)c=!1;else{for(const [e,f]of a)if(a=b.get(e),a!==f||void 0===a&&!b.has(e)){c=!1;break a}c=!0}return c}return"object"===typeof a?"object"===typeof b&&n(a,b):!1};g.fixJson=k;g.mixin=function(a={},...b){m("esri-deprecation-warnings")&&console.warn("[esri.core.lang] \ud83d\uded1 DEPRECATED - Function: mixin()\n\t\ud83d\udee0\ufe0f Replacement: Use Object.assign() directly\n\t\u2699\ufe0f Version: 4.19");return Object.assign(a,...b)};Object.defineProperty(g,"__esModule",{value:!0})});