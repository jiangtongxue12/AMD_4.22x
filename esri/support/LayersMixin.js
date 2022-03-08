// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define("exports ../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../core/Collection ../core/collectionUtils ../core/Logger ../core/promiseUtils ../core/accessorSupport/decorators/property ../core/arrayUtils ../core/has ../core/accessorSupport/ensureType ../core/accessorSupport/decorators/subclass ../layers/Layer".split(" "),function(m,k,n,q,r,t,u,v,y,z,A,w,x){function l(e,g,f){if(e)for(let a=0,b=e.length;a<b;a++){var d=e.getItemAt(a);if(d[g]===f||d&&"group"===d.type&&(d=l(d.layers,g,f)))return d}}
const p=t.getLogger("esri.support.LayersMixin");m.LayersMixin=e=>{e=function(g){function f(...a){var b=g.call(this,...a)||this;b.layers=new q;b.layers.on("before-add",c=>{c=c.item;c.parent&&"remove"in c.parent&&c.parent.remove(c)});b.layers.on("after-add",c=>{c=c.item;c.parent=k._assertThisInitialized(b);b.layerAdded(c);"elevation"!==c.type&&"base-elevation"!==c.type||p.error(`Layer 'title:${c.title}, id:${c.id}' of type '${c.type}' is not supported as an operational layer and will therefore be ignored.`)});
b.layers.on("after-remove",c=>{c=c.item;c.parent=null;b.layerRemoved(c)});return b}k._inheritsLoose(f,g);var d=f.prototype;d.destroy=function(){const a=this.layers.removeAll();for(const b of a)this.layerRemoved(b),b.destroy();this.layers.destroy()};d.add=function(a,b){const c=this.layers;b=c.getNextIndex(b);a instanceof x?a.parent===this?this.reorder(a,b):c.add(a,b):u.isPromiseLike(a)?a.then(h=>{this.destroyed||this.add(h,b)}):p.error("#add()","The item being added is not a Layer or a Promise that resolves to a Layer.")};
d.addMany=function(a,b){const c=this.layers;b=c.getNextIndex(b);a.slice().forEach(h=>{h.parent===this?this.reorder(h,b):(c.add(h,b),b+=1)})};d.findLayerById=function(a){return l(this.layers,"id",a)};d.findLayerByUid=function(a){return l(this.layers,"uid",a)};d.remove=function(a){return this.layers.remove(a)};d.removeMany=function(a){return this.layers.removeMany(a)};d.removeAll=function(){return this.layers.removeAll()};d.reorder=function(a,b){return this.layers.reorder(a,b)};d.layerAdded=function(a){};
d.layerRemoved=function(a){};k._createClass(f,[{key:"layers",set:function(a){this._set("layers",r.referenceSetter(a,this._get("layers")))}}]);return f}(e);n.__decorate([v.property()],e.prototype,"layers",null);return e=n.__decorate([w.subclass("esri.support.LayersMixin")],e)};Object.defineProperty(m,"__esModule",{value:!0})});