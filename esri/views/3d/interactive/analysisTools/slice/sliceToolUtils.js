// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define("exports ../../../../../geometry ../../../../../core/compilerUtils ../../../../../core/Logger ../../../../../core/mathUtils ../../../../../core/maybe ../../../../../core/screenUtils ../../../../../chunks/mat4 ../../../../../chunks/mat4f64 ../../../../../chunks/quat ../../../../../chunks/vec3 ../../../../../chunks/vec3f64 ../../../../../geometry/projection ../../../../../chunks/boundedPlane ../../../../../geometry/support/plane ../../../../../geometry/support/ray ../../../../../geometry/support/vector ../../../../../geometry/support/vectorStacks ../../Manipulator3D ../../manipulatorUtils ./sliceToolConfig ../../visualElements/LineVisualElement ../../visualElements/SlicePlaneVisualElement ../../../support/ElevationProvider ../../../support/RenderCoordsHelper ../../../support/geometryUtils/ray ../../../webgl-engine/lib/Geometry ../../../webgl-engine/lib/GeometryUtil ../../../webgl-engine/materials/ColorMaterial ../../../webgl-engine/materials/ImageMaterial ../../../webgl-engine/materials/NativeLineMaterial ../../../webgl-engine/materials/RibbonLineMaterial ../../../../../widgets/Slice/SlicePlane ../../../../../geometry/Extent".split(" "),
function(q,ta,da,ea,E,x,K,w,L,R,f,y,S,A,F,fa,G,l,M,ha,p,ia,ja,ka,T,la,ma,B,H,na,N,oa,pa,qa){function U(a,b,d,c,e,h){const g=f.dot(a,b),k=l.sv3d.get(),n=l.sv3d.get();switch(0===c?Math.abs(g)>p.VERTICAL_DOT_THRESHOLD?1:2:c){case 2:f.cross(k,Math.abs(g)<=p.SMALL_ANGLE_DOT_THRESHOLD?a:d.viewUp,b);f.copy(n,b);break;case 1:f.cross(k,d.viewUp,b);f.cross(n,b,k);break;case 3:f.cross(k,Math.abs(g)<=p.SMALL_ANGLE_DOT_THRESHOLD?b:d.viewUp,a),f.cross(n,a,k)}a=f.cross(l.sv3d.get(),k,n);0<f.dot(a,d.viewForward)&&
f.scale(n,n,-1);f.normalize(e,k);f.normalize(h,n)}function V(a,b,d){var c=b.worldUpAtPosition(a.origin,l.sv3d.get());b=a.basis1;c=G.angleAroundAxis(c,a.basis2,a.basis1)+C;return A.rotate(a,Math.round(c/C)*C-c,b,d)}function O(a,b){switch(b){case 0:return{basis:a.basis1,direction:1,position:f.add(l.sv3d.get(),a.origin,a.basis1),edge:b};case 1:return{basis:a.basis2,direction:1,position:f.add(l.sv3d.get(),a.origin,a.basis2),edge:b};case 2:return{basis:a.basis1,direction:-1,position:f.subtract(l.sv3d.get(),
a.origin,a.basis1),edge:b};case 3:return{basis:a.basis2,direction:-1,position:f.subtract(l.sv3d.get(),a.origin,a.basis2),edge:b}}}function P(a,b,d){const c=d.projectToRenderScreen(f.add(l.sv3d.get(),a,b),K.castRenderScreenPointArray3(l.sv3d.get()));a=d.projectToRenderScreen(f.subtract(l.sv3d.get(),a,b),K.castRenderScreenPointArray3(l.sv3d.get()));return f.squaredLength(f.subtract(c,c,a))}function D(a){const b=f.length(a.basis1);a=f.length(a.basis2);return p.RESIZE_HANDLE_EDGE_PADDING_FRAC*Math.min(b,
a)}function I(a){return 0!==a.direction[0]&&0!==a.direction[1]}function W(a,b,d){const c=e=>{const h=(e?b:a).slice(0);var g=f.subtract(l.sv3d.get(),h[0],h[1]);f.normalize(g,g);var k=f.subtract(l.sv3d.get(),h[h.length-1],h[h.length-2]);f.normalize(k,k);if(0<d.padding){var n=f.scale(y.create(),k,-d.padding);h[h.length-1]=f.add(n,n,h[h.length-1]);d.bothEnds&&(n=f.scale(y.create(),g,-d.padding),h[0]=f.add(n,n,h[0]))}var m=e?d.tipFocusMultiplier:1;n=d.tipLength*(d.focusTipLength?m:1);const u=d.tipRadius*
m;m=w.identity(l.sm4d.get());if(0<d.padding){var r=n/4,t=f.set(l.sv3d.get(),0,r,0);r=1+d.padding/r;w.translate(m,m,t);w.scale(m,m,f.set(l.sv3d.get(),r,r,r));w.translate(m,m,f.scale(t,t,-1/r))}r=w.identity(L.create());t=y.fromValues(0,1,0);k=w.fromQuat(L.create(),R.rotationTo(l.sq4d.get(),t,k));k[12]=h[h.length-1][0];k[13]=h[h.length-1][1];k[14]=h[h.length-1][2];w.multiply(k,k,m);{e=d.tubeRadius*(e?d.tubeFocusMultiplier:1)+d.padding;var v=d.flat;const Q=[];if(x.isSome(v))Q.push([e,v.thickness/2],[-e,
v.thickness/2],[-e,-v.thickness/2],[e,-v.thickness/2]);else for(v=0;12>v;v++){const X=v/12*2*Math.PI;Q.push([Math.cos(X)*e,Math.sin(X)*e])}e=B.createPathExtrusionGeometry(Q,h,[],[],!1)}e=[{part:"tube",geometry:e,transform:r}];let z;x.isSome(d.flat)?r=B.createExtrudedTriangle(n,u,u,d.flat.thickness):(r=B.createConeGeometry(n,u,24,!1,!1,!0),z=B.createConeGeometry(n,u,24,!1,!0,!1));e.push({part:"tip",geometry:r,transform:k});z&&e.push({part:"cap",geometry:z,transform:k});d.bothEnds&&(g=w.fromQuat(L.create(),
R.rotationTo(l.sq4d.get(),t,g)),g[12]=h[0][0],g[13]=h[0][1],g[14]=h[0][2],w.multiply(g,g,m),e.push({part:"tip",geometry:r,transform:g}),z&&e.push({part:"cap",geometry:z,transform:g}));return e};return{normal:c(!1),focused:c(!0)}}function Y(a,b){const d=f.subtract(y.create(),a[a.length-1],a[a.length-2]);f.normalize(d,d);f.scale(d,d,p.ROTATE_HEADING_TIP_LENGTH);f.add(d,d,a[a.length-1]);return b?(b=f.subtract(y.create(),a[0],a[1]),f.normalize(b,b),f.scale(b,b,p.ROTATE_HEADING_TIP_LENGTH),f.add(b,b,a[0]),
[b,...a,d]):[...a,d]}function Z(a,b,d){if(x.isNone(a))return null;const c=a.origin,e=l.sv3d.get(),h=l.sv3d.get(),g=l.sv3d.get(),k=l.sv3d.get();f.add(e,c,a.basis1);f.add(e,e,a.basis2);f.add(h,c,a.basis1);f.sub(h,h,a.basis2);f.sub(g,c,a.basis1);f.sub(g,g,a.basis2);f.sub(k,c,a.basis1);f.add(k,k,a.basis2);let n,m,u,r,t,v;for(const z of[e,h,g,k]){a=b.fromRenderCoords(z,z,d);if(x.isNone(a))return null;n=null==n?a[0]:Math.min(n,a[0]);m=null==m?a[0]:Math.max(m,a[0]);u=null==u?a[1]:Math.min(u,a[1]);r=null==
r?a[1]:Math.max(r,a[1]);t=null==t?a[2]:Math.min(t,a[2]);v=null==v?a[2]:Math.max(v,a[2])}return new qa({xmin:n,xmax:m,ymin:u,ymax:r,zmin:t,zmax:v,spatialReference:d})}function ra(a,b,d,c,e,h,g=A.create()){if(!h.toRenderCoords(a,g.origin))return sa.error(`Failed to project slice plane position, projection from ${a.spatialReference.wkid} is not supported`),null;h.worldBasisAtPosition(g.origin,0,g.basis1);h.worldBasisAtPosition(g.origin,1,g.basis2);F.fromVectorsAndPoint(g.basis2,g.basis1,g.origin,g.plane);
A.rotate(g,-E.deg2rad(b),A.normal(g),g);A.rotate(g,E.deg2rad(d),g.basis1,g);f.scale(g.basis1,g.basis1,c/2);f.scale(g.basis2,g.basis2,e/2);A.updateUnboundedPlane(g);return g}function aa(a,b){if(x.isNone(a)||x.isNone(a.position))return null;const d=S.tryProjectWithZConversion(a.position,b);if(x.isNone(d))return null;b=T.RenderCoordsHelper.renderUnitScaleFactor(a.position.spatialReference,b);return{position:d,heading:a.heading,tilt:a.tilt,renderWidth:a.width*b,renderHeight:a.height*b}}function ba(a,
b,d,c=A.create()){a=aa(a,b.spatialReference);return x.isNone(a)?null:ca(a,b,d,c)}function ca(a,b,d,c=A.create()){if(x.isNone(a))return null;let e=a.position;!a.position.hasZ&&x.isSome(b.elevationProvider)&&(e=a.position.clone(),e.z=x.unwrapOr(ka.getElevationAtPoint(b.elevationProvider,a.position),0));a=ra(e,a.heading,a.tilt,a.renderWidth,a.renderHeight,b.renderCoordsHelper,c);!d.tiltEnabled&&x.isSome(a)&&V(a,b.renderCoordsHelper,a);return a}const sa=ea.getLogger("esri.views.3d.interactive.analysisTools.slice.sliceToolUtils"),
J=fa.create(),C=Math.PI/2;q.DidPointerMoveRecentlyFlag=16;q.IsShiftEdgeOnScreenFlag=32;q.addArrowTips=Y;q.calculateBoundedPlaneTranslateRotate=function(a,b){return ha.calculateTranslateRotateFromBases(a.basis1,a.basis2,a.origin,b)};q.calculateDiagonalResizeHandleScale=function(a){return D(a)};q.calculatePlaneHalfSize=function(a,b){return p.INITIAL_PLANE_HALF_SIZE_VIEW_PROPORTION*Math.min(b.width,b.height)*b.computeRenderPixelSizeAt(a)};q.calculateResizeHandlePadding=D;q.calculateScreenSpaceBasisLength2=
P;q.createArrowGeometry=W;q.createGridVisualElement=function(a){return new ja.SlicePlaneVisualElement({view:a,attached:!0,backgroundColor:[...p.PLANE_BACKGROUND_COLOR],gridColor:p.GRID_COLOR,gridWidth:4,renderOccluded:4})};q.createOutlineVisualElement=function(a){return new ia.LineVisualElement({view:a,attached:!0,color:p.PLANE_OUTLINE_COLOR,width:p.PLANE_OUTLINE_WIDTH,writeDepthEnabled:!1,renderOccluded:4,geometry:[[[-1,-1,0],[1,-1,0],[1,1,0],[-1,1,0],[-1,-1,0]]]})};q.createPlane=function(a,b,d,
c,e,h,g,k){g=g.worldUpAtPosition(a,l.sv3d.get());U(b,g,e,h,k.basis1,k.basis2);f.scale(k.basis1,k.basis1,d);f.scale(k.basis2,k.basis2,c);f.copy(k.origin,a);F.fromVectorsAndPoint(k.basis2,k.basis1,k.origin,k.plane);return k};q.createResizeManipulator=function(a,b){const d=(b=I(b))?[y.fromValues(1,0,0),y.fromValues(0,0,0),y.fromValues(0,1,0)]:[y.fromValues(1,0,0),y.fromValues(-1,0,0)];var c=B.createPolylineGeometry(d);const e=p.RESIZE_HANDLE_COLOR,h=u=>new oa.RibbonLineMaterial({color:e,width:u,renderOccluded:4}),
g=()=>new N.NativeLineMaterial({color:e,renderOccluded:4}),k=b?p.RESIZE_HANDLE_CORNER_WIDTH:p.RESIZE_HANDLE_EDGE_WIDTH,n=k*p.DISPLAY_FOCUS_MULTIPLIER,m=p.RESIZE_HANDLE_EDGE_WIDTH;c=[{geometry:c,material:1<k?h(k):g(),stateMask:17},{geometry:c,material:1<n?h(n):g(),stateMask:18},{geometry:c,material:1<m?h(m):g(),stateMask:32}];a=new M.Manipulator3D({view:a,renderObjects:c,collisionType:{type:"line",paths:[d]},autoScaleRenderObjects:!1,worldSized:!0,radius:b?p.RESIZE_HANDLE_CORNER_INPUT_RADIUS:p.RESIZE_HANDLE_EDGE_INPUT_RADIUS});
a.state=16;return a};q.createRotateManipulator=function(a,b){var d=new na.ImageMaterial({transparent:!0,writeDepth:!1,textureId:b.id,renderOccluded:16});const c=p.ROTATE_HEADING_OFFSET_DISTANCE;b=p.ROTATE_HEADING_DISC_RADIUS;const e=b*p.ROTATE_HEADING_DISC_RADIUS_FOCUS_MULTIPLIER,h=m=>{const u=new Uint32Array([0,1,2,2,3,0]);return new ma.Geometry([["position",{size:3,data:[c-m,-m,0,c+m,-m,0,c+m,m,0,c-m,m,0],exclusive:!0}],["uv0",{size:2,data:[0,0,1,0,1,1,0,1]}]],[["position",u],["uv0",u]])},g=B.createPolylineGeometry([[0,
0,0],[c-b,0,0]]),k=B.createPolylineGeometry([[0,0,0],[c-e,0,0]]),n=new N.NativeLineMaterial({color:p.ROTATE_HEADING_CALLOUT_COLOR,renderOccluded:4});d=[{geometry:h(b),material:d,stateMask:17},{geometry:g,material:n,stateMask:17},{geometry:h(e),material:d,stateMask:18},{geometry:k,material:n,stateMask:18}];return new M.Manipulator3D({view:a,renderObjects:d,autoScaleRenderObjects:!1,collisionType:{type:"disc",direction:[0,0,1],offset:[c,0,0]},collisionPriority:1,radius:b/2,state:16})};q.createRotatePlane=
function(a,b,d,c){b=b.worldUpAtPosition(a.origin,l.sv3d.get());const e=l.sv3d.get();switch(d){case 1:f.copy(e,b);break;case 2:f.copy(e,a.basis1)}return F.fromPositionAndNormal(a.origin,e,c)};q.createShiftManipulator=function(a,b=1){var d=0===b?p.SHIFT_RESTART_OFFSET_DISTANCE:0;const c=[y.fromValues(d,0,-p.SHIFT_RESTART_ARROW_LENGTH/2),y.fromValues(d,0,p.SHIFT_RESTART_ARROW_LENGTH/2)];b=Y(c,!0);var e=(t,v)=>W(c,c,{tubeRadius:p.SHIFT_RESTART_TUBE_RADIUS,tipRadius:p.SHIFT_RESTART_TIP_RADIUS,tipLength:p.SHIFT_RESTART_TIP_LENGTH,
tubeFocusMultiplier:p.SHIFT_RESTART_TUBE_FOCUS_MULTIPLIER,tipFocusMultiplier:p.SHIFT_RESTART_TIP_FOCUS_MULTIPLIER,padding:t,bothEnds:!0,flat:null,focusTipLength:!0,addCap:v});const h=e(0,!1);e=e(p.SHIFT_RESTART_ARROW_OUTLINE_WIDTH,!0);const g=new H.ColorMaterial({color:p.SHIFT_RESTART_ARROW_TIP_COLOR,cullFace:2,renderOccluded:16}),k=new H.ColorMaterial({color:p.SHIFT_RESTART_ARROW_CAP_COLOR,cullFace:2,renderOccluded:16}),n=new H.ColorMaterial({color:p.SHIFT_RESTART_TUBE_COLOR,cullFace:2,renderOccluded:16}),
m=new H.ColorMaterial({color:p.SHIFT_RESTART_OUTLINE_COLOR,transparent:!0,writeDepth:!1,cullFace:1,renderOccluded:2}),u=B.createPolylineGeometry([[d,0,0],[d-p.SHIFT_RESTART_OFFSET_DISTANCE,0,0]]);d=B.createPolylineGeometry([[d,0,0],[d-p.SHIFT_RESTART_OFFSET_DISTANCE,0,0]]);const r=new N.NativeLineMaterial({color:p.SHIFT_RESTART_CALLOUT_COLOR,renderOccluded:4});return new M.Manipulator3D({view:a,renderObjects:[...h.normal.map(({part:t,geometry:v,transform:z})=>({geometry:v,material:"tip"===t?g:"cap"===
t?k:n,transform:z,stateMask:17})),...e.normal.map(({geometry:t,transform:v})=>({geometry:t,material:m,transform:v,stateMask:17})),{geometry:u,material:r,stateMask:49},...h.focused.map(({part:t,geometry:v,transform:z})=>({geometry:v,material:"tip"===t?g:"cap"===t?k:n,transform:z,stateMask:18})),...e.focused.map(({geometry:t,transform:v})=>({geometry:t,material:m,transform:v,stateMask:18})),{geometry:d,material:r,stateMask:50}],autoScaleRenderObjects:!1,collisionType:{type:"line",paths:[b]},collisionPriority:1,
radius:p.SHIFT_RESTART_TIP_RADIUS,state:16})};q.createShiftPlane=function(a,b,d,c){d=f.cross(l.sv3d.get(),b,d);f.cross(d,d,b);return F.fromPositionAndNormal(a,d,c)};q.forceHorizontalOrVertical=V;q.isAlwaysDrapedLayer=function(a){switch(a.type){case "analysis":case "building-scene":case "csv":case "feature":case "geo-rss":case "geojson":case "graphics":case "group":case "integrated-mesh":case "kml":case "map-notes":case "ogc-feature":case "point-cloud":case "route":case "scene":case "stream":case "voxel":case "subtype-group":case "unknown":case "unsupported":case "wfs":case null:return!1;
case "base-dynamic":case "base-elevation":case "base-tile":case "bing-maps":case "elevation":case "imagery":case "imagery-tile":case "map-image":case "open-street-map":case "tile":case "vector-tile":case "wcs":case "web-tile":case "wms":case "wmts":return!0;default:return da.neverReached(a.type),!1}};q.isDiagonalResizeHandle=I;q.isIBuildingSceneLayerView3D=function(a){return x.isSome("building-scene-3d"===a.type?a:null)};q.normalToBases=U;q.planeToExtent=Z;q.planeToShape=function(a,b,d,c=new pa){if(x.isNone(a))return null;
var {renderCoordsHelper:e}=b,h=e.fromRenderCoords(a.origin,b.spatialReference);if(x.isNone(h))return null;h=S.tryProjectWithZConversion(h,d);if(x.isNone(h))return null;c.position=h;h=e.worldUpAtPosition(a.origin,l.sv3d.get());e=e.worldBasisAtPosition(a.origin,1,l.sv3d.get());const g=2*f.length(a.basis1),k=2*f.length(a.basis2);b=T.RenderCoordsHelper.renderUnitScaleFactor(b.spatialReference,d);c.width=g*b;c.height=k*b;c.tilt=E.rad2deg(G.angleAroundAxis(h,a.basis2,a.basis1)+C);c.heading=E.rad2deg(G.angleAroundAxis(a.basis1,
e,h)-C);return c};q.projectShape=aa;q.projectedShapeToPlane=ca;q.resizeNormal=16;q.resizeOutlineOnly=32;q.resizePlane=function(a,b,d,c,e,h){const g=f.copy(l.sv3d.get(),e.origin);f.add(g,g,f.scale(l.sv3d.get(),e.basis1,0>a.direction[0]?1:-1));f.add(g,g,f.scale(l.sv3d.get(),e.basis2,0>a.direction[1]?1:-1));var k=f.length(e.basis1);const n=f.length(e.basis2);d=f.subtract(l.sv3d.get(),d,g);var m=f.subtract(l.sv3d.get(),b,g);let u=0;b=0;if(I(a)){var r=D(e);const t=D(h);u=k-.5*a.direction[0]*f.dot(e.basis1,
m)/k;b=n-.5*a.direction[1]*f.dot(e.basis2,m)/n;m=t/r;u*=m;b*=m}m=.5*a.direction[0]*f.dot(e.basis1,d)/k;r=.5*a.direction[1]*f.dot(e.basis2,d)/n;d=u+m;b+=r;k=f.scale(l.sv3d.get(),e.basis1,d/k);e=f.scale(l.sv3d.get(),e.basis2,b/n);(0>=d||P(h.origin,k,c)<=p.PLANE_MIN_BASIS_SCREEN_LEN2)&&f.copy(k,h.basis1);(0>=b||P(h.origin,e,c)<=p.PLANE_MIN_BASIS_SCREEN_LEN2)&&f.copy(e,h.basis2);c=f.copy(l.sv3d.get(),g);f.add(c,c,f.scale(l.sv3d.get(),k,0>a.direction[0]?-1:1));f.add(c,c,f.scale(l.sv3d.get(),e,0>a.direction[1]?
-1:1));return A.fromValues(c,k,e,h)};q.shapeToExtent=function(a,b,d){if(x.isNone(a)||x.isNone(a.position))return null;const {spatialReference:c}=a.position;d=ba(a,{renderCoordsHelper:b,spatialReference:c},d);b=Z(d,b,c);!a.position.hasZ&&x.isSome(b)&&(b.zmin=null,b.zmax=null);return b};q.shapeToPlane=ba;q.updateResizeHandle=function(a,b,d,c){var e=f.length(c.basis1);const h=f.length(c.basis2);var g=D(c);const k=D(c),n=f.set(l.sv3d.get(),0,0,0);f.add(n,f.scale(l.sv3d.get(),c.basis1,b.direction[0]),
f.scale(l.sv3d.get(),c.basis2,b.direction[1]));f.add(n,c.origin,n);c=0;let m=1;I(b)?(1===b.direction[0]&&-1===b.direction[1]?c=C:1===b.direction[0]&&1===b.direction[1]?c=Math.PI:-1===b.direction[0]&&1===b.direction[1]&&(c=3*Math.PI/2),m=k):(c=0!==b.direction[0]?1:2,e=1===c?h:e,c=1===c?C:0,m=e-g);g=w.identity(l.sm4d.get());w.rotateZ(g,g,c);w.scale(g,g,f.set(l.sv3d.get(),m,m,m));w.multiply(g,d,g);g[12]=0;g[13]=0;g[14]=0;a.modelTransform=g;a.renderLocation=n};q.updateRotateHeadingHandle=function(a,b,
d,c){c=c.worldUpAtPosition(d.origin,l.sv3d.get());const e=O(d,0),h=w.identity(l.sm4d.get());w.rotateZ(h,h,e.edge*Math.PI/2);w.rotateX(h,h,-(G.angleAroundAxis(c,d.basis2,d.basis1)+C));w.multiply(h,b,h);h[12]=0;h[13]=0;h[14]=0;a.modelTransform=h;a.renderLocation=e.position};q.updateRotateTiltHandle=function(a,b,d){d=O(d,1);const c=w.identity(l.sm4d.get());w.rotateZ(c,c,d.edge*Math.PI/2);w.rotateX(c,c,C);w.multiply(c,b,c);c[12]=0;c[13]=0;c[14]=0;a.modelTransform=c;a.renderLocation=d.position};q.updateShiftRestartHandle=
function(a,b,d,c){var e=O(d,2);const h=l.sm4d.get();w.rotateZ(h,b,e.edge*Math.PI/2);b=f.normalize(l.sv3d.get(),e.basis);b=f.scale(l.sv3d.get(),b,e.direction*c.computeScreenPixelSizeAt(e.position)*p.SHIFT_RESTART_OFFSET_DISTANCE);f.add(b,b,e.position);e=c.projectToRenderScreen(b,K.castRenderScreenPointArray3(l.sv3d.get()));{const [k,n,m,u]=c.viewport;var g=Math.min(m,u)/16;let r=!0;e[0]<k+g?(e[0]=k+g,r=!1):e[0]>k+m-g&&(e[0]=k+m-g,r=!1);e[1]<n+g?(e[1]=n+g,r=!1):e[1]>n+u-g&&(e[1]=n+u-g,r=!1);g=r}la.fromRender(c,
e,J);f.normalize(J.direction,J.direction);c=l.sv3d.get();!g&&A.intersectRay(d,J,c)&&(b=c);h[12]=0;h[13]=0;h[14]=0;a.modelTransform=h;a.renderLocation=y.clone(b);a.state=g?a.state|32:a.state&-33};Object.defineProperty(q,"__esModule",{value:!0})});