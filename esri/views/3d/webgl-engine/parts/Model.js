// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/tslib.es6 ../../../../core/Accessor ../../../../core/maybe ../../../../core/accessorSupport/decorators/property ../../../../core/arrayUtils ../../../../core/has ../../../../core/accessorSupport/ensureType ../../../../core/accessorSupport/decorators/subclass ../lib/GridLocalOriginFactory ../lib/ModelDirtySet ../lib/RenderGeometry ../lib/Util ../lib/WebGLLayer".split(" "),function(e,l,n,t,p,u,D,E,F,v,w,x,y,h,q){e.Model=
function(r){function k(){var a=r.apply(this,arguments)||this;a.dirtySet=new x({model:l._assertThisInitialized(a)});a._content=new Map;a._originFactory=new w.GridLocalOriginFactory(null,75E4);return a}l._inheritsLoose(k,r);var d=k.prototype;d.getObject=function(a){return this._content.get(a)};d.add=function(a){const b=a.id;h.assert(!this._content.has(b),"Model/Stage already contains object to be added");this._content.set(b,a);q.isWebGLLayer(a)&&this.dirtySet.layerAdded(a)};d.remove=function(a){h.assert(this._content.has(a.id),
"Model/Stage doesn't contain object to be removed");this._content.delete(a.id);a.unload();q.isWebGLLayer(a)&&this.dirtySet.layerRemoved(a)};d.addMany=function(a){for(const b of a)p.isSome(b)&&(h.assert(!this._content.has(b.id),"Model/Stage already contains object to be added"),this._content.set(b.id,b))};d.removeMany=function(a){for(const b of a)h.assert(this._content.has(b.id),"Model/Stage doesn't contain object to be removed"),this._content.delete(b.id),b.unload()};d.has=function(a){return this._content.has(a.id)};
d.forEachOfType=function(a,b){this._content.forEach(c=>{c.type===a&&b(c)})};d.getRenderGeometry=function(a,b){const {geometry:c,material:f,id:m,shaderTransformation:z,origin:A,instanceParameters:B}=b,g=new y.RenderGeometry(c,f,null,null,m,c.boundingInfo,z,a.castShadow);g.updateTransformation(C=>a.getCombinedStaticTransformation(b,C));g.origin=A||this._originFactory.getOrigin(g.boundingSphere);g.instanceParameters=B;return g};d.updateRenderGeometryTransformation=function(a,b,c){if(p.isNone(a))return!1;
c.updateTransformation(m=>a.getCombinedStaticTransformation(b,m));const f=this._originFactory.getOrigin(c.boundingSphere);return c.origin!==f};d.getStats=function(){const a={},b=Array.from(this._content.values());for(let c=0;5>c;++c)a[c]=b.filter(f=>f.type===c).length;return{contentTypes:a,dirtySet:this.dirtySet.formatDebugInfo()}};l._createClass(k,[{key:"test",get:function(){return{content:Array.from(this._content.values())}}}]);return k}(t);n.__decorate([u.property({constructOnly:!0})],e.Model.prototype,
"dirtySet",void 0);e.Model=n.__decorate([v.subclass("esri.views.3d.webgl-engine.parts.Model")],e.Model);Object.defineProperty(e,"__esModule",{value:!0})});