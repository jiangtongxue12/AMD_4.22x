// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../core/has ../../../../core/Handles ../../../../core/maybe ../../../../chunks/vec3 ../../../../chunks/vec3f64 ../../../../chunks/vec4 ../../../../chunks/vec4f32 ../../../../geometry/support/clipRay ../../../../geometry/support/frustum ../../../../geometry/support/lineSegment ../../../../geometry/support/ray ./LaserlineVisualElement ./Object3DVisualElement ../../webgl-engine/lib/GeometryUtil ../../webgl-engine/materials/RibbonLineMaterial".split(" "),
function(w,x,y,B,e,l,h,n,u,p,C,g,q,D,r,E,F){y=function(v){function t(a){var b=v.call(this,a)||this;b._ray=q.create();b._externalResources=null;b._handles=new B;b._isWorldDown=!1;b._start=h.create();b._end=h.fromValues(1,0,0);b._width=1;b._color=u.fromValues(1,0,1,1);b._polygonOffset=!1;b._writeDepthEnabled=!0;b._innerWidth=0;b._innerColor=u.fromValues(1,1,1,1);b._stipplePattern=null;b._stippleOffColor=null;b._stipplePreferContinuous=!0;b._falloff=0;b._extensionType=0;b._laserlineStyle=null;b._laserlineEnabled=
!1;b._renderOccluded=4;b._fadedExtensions=z;b.applyProps(a);return b}x._inheritsLoose(t,v);var f=t.prototype;f.createExternalResources=function(){const a=new F.RibbonLineMaterial(this.materialParameters);this._handles.add(this.view.state.watch("camera",()=>{this.updateGeometry()}));const b=new D.LaserlineVisualElement({view:this.view,attached:this._laserlineEnabled});this._externalResources={material:a,laserline:b}};f.destroyExternalResources=function(){e.isSome(this._externalResources)&&this._externalResources.laserline.destroy();
this._externalResources=null;this._handles.removeAll()};f.forEachExternalMaterial=function(a){e.isSome(this._externalResources)&&a(this._externalResources.material)};f.createGeometries=function(a){var b=[h.create(),h.create()],c=3===this.extensionType;c&&b.push(h.create(),h.create());c=c?new Float32Array([1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,0]):null;b=E.createPolylineGeometry(b,null,c);a.addGeometry(b,e.unwrap(this._externalResources).material);this.updateVertices(a)};f.updateVisibility=function(a){v.prototype.updateVisibility.call(this,
a);e.isSome(this._externalResources)&&(this._externalResources.laserline.visible=a)};f.setStartEndFromWorldDownAtLocation=function(a){this._isWorldDown=!0;l.copy(this._start,a);this.view.renderCoordsHelper.worldUpAtPosition(a,this._end);l.subtract(this._end,a,this._end);q.fromPoints(this._start,this._end,this._ray);this.updateGeometry()};f.updateMaterial=function(){e.isNone(this._externalResources)||this._externalResources.material.setParameters(this.materialParameters)};f.updateGeometry=function(){e.isSome(this.object)&&
this.updateVertices(this.object)};f.updateVertices=function(a){const b=3===this._extensionType?this.updateLineSegmentFinite(A):this.updateLineSegmentInfinite(this._extensionType,A);this.updateVertexAttributes(a,b);e.isSome(this._externalResources)&&(this._externalResources.laserline.intersectsLine=b)};f.updateLineSegmentFinite=function(a){return g.fromPoints(this._start,this._end,a)};f.updateLineSegmentInfinite=function(a,b){var c=this.view.state.camera;p.fromRay(this._ray,k);switch(a){case 0:k.c0=
-Number.MAX_VALUE;break;case 1:case 2:var d=this._ray.origin;a=e.unwrapOr(this.view.elevationProvider.getElevation(d[0],d[1],d[2],this.view.renderCoordsHelper.spatialReference,"ground"),0);d=this.view.renderCoordsHelper.getAltitude(d);this._isWorldDown&&d<a&&l.negate(k.ray.direction,k.ray.direction);2===this._extensionType&&null!=a&&(k.c1=Math.abs(d-a))}if(!C.intersectClipRay(c.frustum,k))return g.fromPoints(this._start,this._end,b);c=p.getStart(k,m);a=p.getEnd(k,G);return g.fromPoints(c,a,b)};f.updateVertexAttributes=
function(a,b){const c=a.geometries[0].getMutableAttribute("position").data;if(3===this.extensionType){var d=g.pointAt(b,-this.fadedExtensions.start,m);c[0]=d[0];c[1]=d[1];c[2]=d[2];d=g.pointAt(b,0,m);c[3]=d[0];c[4]=d[1];c[5]=d[2];d=g.pointAt(b,1,m);c[6]=d[0];c[7]=d[1];c[8]=d[2];b=g.pointAt(b,1+this.fadedExtensions.end,m);c[9]=b[0];c[10]=b[1];c[11]=b[2]}else d=g.pointAt(b,0,m),c[0]=d[0],c[1]=d[1],c[2]=d[2],b=g.pointAt(b,1,m),c[3]=b[0],c[4]=b[1],c[5]=b[2];a.geometryVertexAttrsUpdated(a.geometryRecords[0])};
x._createClass(t,[{key:"start",get:function(){return this._start},set:function(a){this._isWorldDown=!1;l.exactEquals(this._start,a)||(l.copy(this._start,a),q.fromPoints(this._start,this._end,this._ray),this.updateGeometry())}},{key:"end",get:function(){return this._end},set:function(a){this._isWorldDown=!1;l.exactEquals(this._end,a)||(l.copy(this._end,a),q.fromPoints(this._start,this._end,this._ray),this.updateGeometry())}},{key:"width",get:function(){return this._width},set:function(a){a!==this._width&&
(this._width=a,this.updateMaterial())}},{key:"color",get:function(){return this._color},set:function(a){n.exactEquals(a,this._color)||(n.copy(this._color,a),this.updateMaterial())}},{key:"polygonOffset",get:function(){return this._polygonOffset},set:function(a){a!==this._polygonOffset&&(this._polygonOffset=a,this.updateMaterial())}},{key:"writeDepthEnabled",get:function(){return this._writeDepthEnabled},set:function(a){this._writeDepthEnabled!==a&&(this._writeDepthEnabled=a,this.updateMaterial())}},
{key:"innerWidth",get:function(){return this._innerWidth},set:function(a){a!==this._innerWidth&&(this._innerWidth=a,this.updateMaterial())}},{key:"innerColor",get:function(){return this._innerColor},set:function(a){n.exactEquals(a,this._innerColor)||(n.copy(this._innerColor,a),this.updateMaterial())}},{key:"stipplePattern",get:function(){return this._stipplePattern},set:function(a){const b=e.isSome(a)!==e.isSome(this._stipplePattern);this._stipplePattern=a;b?this.recreate():this.updateMaterial()}},
{key:"stippleOffColor",get:function(){return this._stippleOffColor},set:function(a){if(e.isNone(a)||e.isNone(this._stippleOffColor)||!n.exactEquals(a,this._stippleOffColor))this._stippleOffColor=e.isSome(a)?u.clone(a):null,this.updateMaterial()}},{key:"stipplePreferContinuous",get:function(){return this._stipplePreferContinuous},set:function(a){a!==this._stipplePreferContinuous&&(this._stipplePreferContinuous=a,this.updateMaterial())}},{key:"falloff",get:function(){return this._falloff},set:function(a){a!==
this._falloff&&(this._falloff=a,this.updateMaterial())}},{key:"extensionType",get:function(){return this._extensionType},set:function(a){a!==this._extensionType&&(this._extensionType=a,this.updateGeometry())}},{key:"_laserlineAttached",get:function(){return this._laserlineEnabled&&e.isSome(this._laserlineStyle)}},{key:"laserlineStyle",get:function(){return this._laserlineStyle},set:function(a){this._laserlineStyle=a;e.isSome(this._externalResources)&&(this._externalResources.laserline.attached=this._laserlineAttached,
e.isSome(a)&&(this._externalResources.laserline.style=a))}},{key:"laserlineEnabled",get:function(){return this._laserlineEnabled},set:function(a){this._laserlineEnabled!==a&&(this._laserlineEnabled=a,e.isSome(this._externalResources)&&(this._externalResources.laserline.attached=this._laserlineAttached))}},{key:"renderOccluded",get:function(){return this._renderOccluded},set:function(a){a!==this._renderOccluded&&(this._renderOccluded=a,this.updateMaterial())}},{key:"fadedExtensions",get:function(){return this._fadedExtensions},
set:function(a){this._fadedExtensions=e.unwrapOr(a,z);this.recreateGeometry()}},{key:"materialParameters",get:function(){return{width:this._width,color:this._color,stippleOffColor:this._stippleOffColor,stipplePattern:this._stipplePattern,stipplePreferContinuous:this._stipplePreferContinuous,innerWidth:this._innerWidth,innerColor:this._innerColor,falloff:this._falloff,polygonOffset:this._polygonOffset,renderOccluded:this._renderOccluded,writeDepth:this._writeDepthEnabled}}}]);return t}(r.Object3DVisualElement);
const k=p.create(),m=h.create(),G=h.create(),A=g.create();r=1/3;const z={start:r,end:r};w.ExtendedLineVisualElement=y;Object.defineProperty(w,"__esModule",{value:!0})});