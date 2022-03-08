// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define("exports ../../../../../chunks/_rollupPluginBabelHelpers ../../../../../Color ../../../../../core/Evented ../../../../../core/Handles ../../../../../core/handleUtils ../../../../../core/maybe ../../../../../chunks/mat4 ../../../../../chunks/mat4f64 ../../../../../chunks/vec3 ../../../../../chunks/vec3f64 ../../../../../geometry/support/vectorStacks ../../../../../support/elevationInfoUtils ../../Manipulator3D ../dragEventPipeline3D ../settings ./config ./Manipulation ./moveUtils ../../../webgl-engine/lib/GeometryUtil ../../../webgl-engine/materials/ColorMaterial ../../../../interactive/dragEventPipeline".split(" "),
function(y,z,E,F,G,H,A,e,I,t,B,g,J,K,L,M,n,u,N,C,O,p){u=function(D){function q(a){var b=D.call(this)||this;b._handles=new G;b._arrowManipulatorInfos=[];b._opaqueMaterial=b.createMaterial();b._transparentMaterial=b.createMaterial(.5);b._angle=0;b._scale=1;b._radius=n.DISC_RADIUS;b._updateAfterDrag=!1;b.events=new F;b._tool=a.tool;b._view=a.view;null!=a.radius&&(b._radius=a.radius);b._createManipulators();b.forEachManipulator(c=>b._tool.manipulators.add(c));return b}z._inheritsLoose(q,D);var h=q.prototype;
h.destroy=function(){this.forEachManipulator(a=>{this._tool.manipulators.remove(a);a.destroy()});this._handles=A.destroyMaybe(this._handles);this._view=this._tool=null;this._arrowManipulatorInfos.length=0};h.forEachManipulator=function(a){for(const {manipulator:b}of this._arrowManipulatorInfos)a(b,1)};h.createGraphicDragPipeline=function(a,b,c){const d=b.graphic,f=J.getGraphicEffectiveElevationInfo(d),k=A.unwrap(d.geometry).spatialReference;return N.createGraphicMoveDragPipeline(b,c,l=>this.createDragPipeline((m,
v,r,w,x)=>l(m,a(m,v,r,w,x),r),f,k,d),this._view.state.viewingMode)};h.createDragPipeline=function(a,b,c,d){return H.handlesGroup(this._arrowManipulatorInfos.map(({manipulator:f},k)=>p.createManipulatorDragEventPipeline(f,(l,m,v,r,w)=>{m=m.next(x=>({...x,manipulatorType:1})).next(p.dragAtLocation(this._view,l.elevationAlignedLocation)).next(L.screenToMapXYAtLocation(this._view,l.elevationAlignedLocation,b,c,d)).next(p.constrainToMapAxis(l.location,this.angle+(k+1)*Math.PI*.5)).next(p.addScreenDelta());
a(l,m,v,r,w)})))};h._updateManipulators=function(){for(let a=0;a<this._arrowManipulatorInfos.length;a++)this._updateArrowManipulator(this._arrowManipulatorInfos[a],a);this._updateManipulatorTransform()};h._updateArrowManipulator=function({manipulator:a,transform:b},c){const d=this._radius/n.DISC_RADIUS;var f=n.DISC_TRANSLATE_ARROW_SIZE*d;const k=f*Math.sqrt(3)/2;f=C.createExtrudedTriangle(k,f/2,f/2,n.DISC_HEIGHT);C.transformInPlace(f,e.fromTranslation(g.sm4d.get(),t.set(g.sv3d.get(),0,-k/3,0)));a.renderObjects=
[{geometry:f,material:this._opaqueMaterial,stateMask:2},{geometry:f,material:this._transparentMaterial,stateMask:1}];a.radius=k/3*2.4;a=e.identity(g.sm4d.get());e.fromZRotation(a,c*Math.PI/2);c=e.identity(g.sm4d.get());e.fromTranslation(c,t.set(g.sv3d.get(),0,n.DISC_TRANSLATE_ARROW_OFFSET*d,0));e.multiply(b,a,c)};h._createManipulators=function(){for(let a=0;4>a;a++){const b=this._createArrowManipulator(a);this._arrowManipulatorInfos.push(b)}this._updateManipulatorTransform()};h._updateManipulatorTransform=
function(){var a=this.angle,b=e.identity(g.sm4d.get());e.rotate(b,b,a,B.fromValues(0,0,1));const c=e.fromScaling(g.sm4d.get(),t.set(g.sv3d.get(),this.displayScale,this.displayScale,this.displayScale));a=e.identity(g.sm4d.get());e.multiply(a,c,b);for(const d of this._arrowManipulatorInfos)b=e.multiply(g.sm4d.get(),a,d.transform),d.manipulator.modelTransform=b};h._createArrowManipulator=function(a){const b=new K.Manipulator3D({view:this._view,autoScaleRenderObjects:!1,worldOriented:!0,focusMultiplier:1,
touchMultiplier:1,collisionType:{type:"disc",direction:B.fromValues(0,0,1)}}),c={manipulator:b,transform:I.create()};this._updateArrowManipulator(c,a);this._handles.add(b.events.on("drag",d=>{this._updateAfterDrag&&"end"===d.action&&!this.dragging&&(this._updateManipulatorTransform(),this._updateAfterDrag=!1)}));return c};h.createMaterial=function(a=1){const b=E.toUnitRGBA(M.colors.main);b[3]*=a;return new O.ColorMaterial({color:b,transparent:1!==a,cullFace:2,renderOccluded:2})};z._createClass(q,
[{key:"orthogonalAvailable",set:function(a){this._arrowManipulatorInfos[1].manipulator.available=a;this._arrowManipulatorInfos[3].manipulator.available=a}},{key:"angle",get:function(){return this._angle},set:function(a){this._angle=a;this.dragging?this._updateAfterDrag=!0:this._updateManipulatorTransform()}},{key:"displayScale",get:function(){return this._scale},set:function(a){this._scale=a;this._updateManipulatorTransform()}},{key:"radius",get:function(){return this._radius},set:function(a){this._radius!==
a&&(this._radius=a,this._updateManipulators())}},{key:"test",get:function(){return{arrowManipulators:this._arrowManipulatorInfos.map(({manipulator:a})=>a)}}}]);return q}(u.Manipulation);y.MoveXYAxisManipulation=u;Object.defineProperty(y,"__esModule",{value:!0})});