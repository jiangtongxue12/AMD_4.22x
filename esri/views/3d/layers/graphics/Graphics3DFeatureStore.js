// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/tslib.es6 ../../../../core/Accessor ../../../../core/Evented ../../../../core/maybe ../../../../core/accessorSupport/decorators/property ../../../../core/arrayUtils ../../../../core/has ../../../../core/accessorSupport/ensureType ../../../../core/accessorSupport/decorators/subclass ../../../../geometry/projection ../../../../layers/graphics/dehydratedFeatures ../../../../layers/graphics/OptimizedFeature ../../../../layers/graphics/OptimizedGeometry ../../../../layers/graphics/data/optimizedFeatureQueryEngineAdapter".split(" "),
function(d,r,g,t,u,l,h,A,B,C,v,w,x,y,z,k){d.Graphics3DFeatureStore=function(p){function m(f){var b=p.call(this,f)||this;b.events=new u;b.hasZ=null;b.hasM=null;b.objectIdField=null;b.spatialReference=null;b.featureAdapter={getAttribute(a,c){return"graphic"in a?a.graphic.attributes[c]:k.optimizedFeatureQueryEngineAdapter.getAttribute(a,c)},getAttributes(a){return"graphic"in a?a.graphic.attributes:k.optimizedFeatureQueryEngineAdapter.getAttributes(a)},getObjectId:a=>"graphic"in a?x.getObjectId(a.graphic,
b.objectIdField):k.optimizedFeatureQueryEngineAdapter.getObjectId(a),getGeometry:a=>"graphic"in a?a.getAsOptimizedGeometry(b.hasZ,b.hasM):k.optimizedFeatureQueryEngineAdapter.getGeometry(a),getCentroid:(a,c)=>{if("graphic"in a){let e=null;l.isSome(a.centroid)?e=a.centroid:"point"===a.graphic.geometry.type&&w.projectPoint(a.graphic.geometry,q,b.spatialReference)&&(e=q);a=Array(2+(c.hasZ?1:0)+(c.hasM?1:0));l.isNone(e)?(a[0]=0,a[1]=0,a[2]=0,a[3]=0):(a[0]=e.x,a[1]=e.y,c.hasZ&&(a[2]=e.hasZ?e.z:0),c.hasM&&
(a[c.hasZ?3:2]=e.hasM?e.m:0));return new z([],a)}return k.optimizedFeatureQueryEngineAdapter.getCentroid(a,c)},cloneWithGeometry:(a,c)=>"graphic"in a?new y.default(c,b.featureAdapter.getAttributes(a),null,b.featureAdapter.getObjectId(a)):k.optimizedFeatureQueryEngineAdapter.cloneWithGeometry(a,c)};return b}r._inheritsLoose(m,p);var n=m.prototype;n.forEach=function(f){this.forAllGraphics(b=>{f(b)})};n.forEachInBounds=function(f,b){this.getSpatialIndex().forEachInBounds(f,b)};n.forEachBounds=function(f,
b,a){const c=this.getSpatialIndex();for(const e of f)f=this.featureAdapter.getObjectId(e),l.isSome(c.getBounds(f,a))&&b(a)};return m}(t);g.__decorate([h.property({constructOnly:!0})],d.Graphics3DFeatureStore.prototype,"getSpatialIndex",void 0);g.__decorate([h.property({constructOnly:!0})],d.Graphics3DFeatureStore.prototype,"forAllGraphics",void 0);g.__decorate([h.property({constructOnly:!0})],d.Graphics3DFeatureStore.prototype,"hasZ",void 0);g.__decorate([h.property({constructOnly:!0})],d.Graphics3DFeatureStore.prototype,
"hasM",void 0);g.__decorate([h.property({constructOnly:!0})],d.Graphics3DFeatureStore.prototype,"objectIdField",void 0);g.__decorate([h.property({constructOnly:!0})],d.Graphics3DFeatureStore.prototype,"spatialReference",void 0);d.Graphics3DFeatureStore=g.__decorate([v.subclass("esri.views.3d.layers.graphics.Graphics3DFeatureStore")],d.Graphics3DFeatureStore);const q={type:"point",x:0,y:0,hasZ:!1,hasM:!1,spatialReference:null};d.default=d.Graphics3DFeatureStore;Object.defineProperty(d,"__esModule",
{value:!0})});