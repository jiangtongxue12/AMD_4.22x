// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../has ../metadata ../tracking ../extensions/serializableProperty".split(" "),function(l,m,y,r,v,w){function x(d,e){return null==e.get?function(){const c=this.__accessor__.properties.get(d);if(void 0!==c){v.trackAccess(c);var b=this.__accessor__.store;return b.has(d)?b.get(d):c.metadata.value}}:function(){const c=this.__accessor__.properties.get(d);if(void 0!==c)return c.getComputed()}}function t(d){const e=r.getOwnClassMetadata(d.prototype).properties,
c={};for(const b of Object.getOwnPropertyNames(e)){const a=e[b];w.processPrototypePropertyMetadata(a);c[b]={enumerable:!0,configurable:!0,get:x(b,a),set(k){const f=this.__accessor__;if(void 0===f)Object.defineProperty(this,b,{enumerable:!0,configurable:!0,writable:!0,value:k});else if(!Object.isFrozen(this)){if(f.initialized&&a.readOnly)throw new TypeError(`[accessor] cannot assign to read-only property '${b}' of ${this.declaredClass}`);if(2===f.lifecycle&&a.constructOnly)throw new TypeError(`[accessor] cannot assign to construct-only property '${b}' of ${this.declaredClass}`);
f.set(b,k)}}}}Object.defineProperties(d.prototype,c)}const n=new Set,p=new Set;l.finalizeClass=t;l.subclass=function(d){return e=>{e.prototype.declaredClass=d;t(e);const c=[],b=[];for(var a=e.prototype;a;)a.hasOwnProperty("initialize")&&!n.has(a.initialize)&&(n.add(a.initialize),c.push(a.initialize)),a.hasOwnProperty("destroy")&&!p.has(a.destroy)&&(p.add(a.destroy),b.push(a.destroy)),a=Object.getPrototypeOf(a);n.clear();p.clear();a=function(k){function f(...u){var g=k.call(this,...u)||this;if(g.constructor===
f&&"function"===typeof g.postscript){c.length&&Object.defineProperty(m._assertThisInitialized(g),"initialize",{enumerable:!1,configurable:!0,value(){for(let h=c.length-1;0<=h;h--)c[h].call(this)}});if(b.length){let h=!1;Object.defineProperty(m._assertThisInitialized(g),"destroy",{enumerable:!1,configurable:!0,value(){if(!h){h=!0;for(let q=0;q<b.length;q++)b[q].call(this)}}})}g.postscript(...u)}return g}m._inheritsLoose(f,k);return f}(e);a.__accessorMetadata__=r.getOwnClassMetadata(e.prototype);a.prototype.declaredClass=
d;return a}};Object.defineProperty(l,"__esModule",{value:!0})});