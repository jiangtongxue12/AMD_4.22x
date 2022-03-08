// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../core/mathUtils ../../../core/maybe ../../../chunks/vec2f64 ../../../chunks/vec3 ../../../chunks/vec3f64 ../../../chunks/vec4 ../../../chunks/vec4f64 ../../../geometry/support/clipRay ../../../geometry/support/frustum ../../../geometry/support/lineSegment ../../../geometry/support/plane ../../../geometry/support/ray ../../../chunks/sphere ./LaserlinePathData ../webgl-engine/lib/glUtil3D ../webgl-engine/lib/Util ../webgl-engine/materials/internal/MaterialUtil ../webgl-engine/shaders/LaserlinePathTechnique ../webgl-engine/shaders/LaserlineTechnique".split(" "),
function(u,E,r,h,F,e,g,v,t,p,G,l,w,H,I,x,J,K,y,z,A){function B(m,f,a,d){const b=L,c=M;e.transformMat4(b,f,d);e.copy(c,a);c[3]=0;v.transformMat4(c,c,d);w.fromPositionAndNormal(b,c,m)}const L=g.create(),M=t.create(),N={glowColor:[1,.5,0],glowWidth:8,glowFalloff:8,innerColor:[1,1,1],innerWidth:1,globalAlpha:.75,angleCutoff:r.deg2rad(6),globalAlphaContrastBoost:2};r=function(){function m(a,d={},b={contrastControlEnabled:!1}){this._renderCoordsHelper=a;this._config=b;this._technique=null;this._projInfo=
t.create();this._zScale=F.create();this._heightManifoldEnabled=!1;this._heightManifoldTarget=g.create();this._pointDistanceEnabled=!1;this._pointDistanceOrigin=g.create();this._pointDistanceTarget=g.create();this._lineVerticalPlaneEnabled=!1;this._lineVerticalPlaneSegment=l.create();this._intersectsLineEnabled=!1;this._intersectsLineSegment=l.create();this._intersectsLineRadius=3;this._pathVerticalPlaneEnabled=this._intersectsLineInfinite=!1;this._pathTechnique=this._pathVerticalPlaneData=null;this.canRender=
!0;this._tempNormal=g.create();this._tempDir=g.create();this._tempUp=g.create();this._tempVec3A=g.create();this._tempVec3B=g.create();this._tempVec4=t.create();this._tempPlane=w.create();this._tempSphere=I.create();this._params=y.copyParameters(d,N)}var f=m.prototype;f.setParameters=function(a){y.updateParameters(this._params,a)&&this._requestRender()};f.initializeRenderContext=function(a){this._context=a;this._quadVAO=J.createQuadVAO(a.renderContext.rctx);this._techniqueRepository=a.shaderTechniqueRep;
this._techniqueConfig=new A.LaserlineTechniqueConfiguration;a=new z.LaserlinePathTechniqueConfiguration;a.contrastControlEnabled=this._config.contrastControlEnabled;this._pathTechnique=this._techniqueRepository.acquire(z.LaserlinePathTechnique,a)};f.uninitializeRenderContext=function(){this._quadVAO=h.disposeMaybe(this._quadVAO);this._technique=h.releaseMaybe(this._technique);this._pathVerticalPlaneData=h.disposeMaybe(this._pathVerticalPlaneData);this._pathTechnique=h.releaseMaybe(this._pathTechnique)};
f.render=function(a){const d=this.heightManifoldEnabled||this.pointDistanceEnabled||this.lineVerticalPlaneSegment||this.intersectsLineEnabled,b=this.pathVerticalPlaneEnabled;if(!d&&!b)return!1;const c=a.camera;K.inverseProjectionInfo(c.projectionMatrix,c.fullWidth,c.fullHeight,this._projInfo,this._zScale);d&&this.renderUnified(a);b&&this.renderPath(a);return!0};f.renderUnified=function(a){const d=a.rctx,b=this._selectTechnique(),c=b.program;d.useProgram(c);b.bindPipelineState(d);this._bindGlobalUniforms(a,
c);this.bindHeightManifoldUniforms(a,c);this.bindPointDistanceUniforms(a,c);this.bindLineVerticalPlaneUniforms(a,c);this.bindIntersectsLineUniforms(a,c);b.bind(this._params,a.camera);d.bindVAO(this._quadVAO);d.drawArrays(5,0,4)};f.renderPath=function(a){if(!h.isNone(this._pathVerticalPlaneData)&&!h.isNone(this._pathTechnique)){var d=a.rctx,b=this._pathTechnique,c=b.program;d.useProgram(c);b.bindPipelineState(d);this._bindGlobalUniforms(a,c);b.bind(this._params,this._pathVerticalPlaneData.origin,a.camera);
this._pathVerticalPlaneData.draw(a.rctx)}};f.bindHeightManifoldUniforms=function(a,d){if(this.heightManifoldEnabled){var b=this._tempVec3A,c=this._tempPlane;this._renderCoordsHelper.worldUpAtPosition(this._heightManifoldTarget,b);B(c,this._heightManifoldTarget,b,a.camera.viewMatrix);d.setUniform4fv("heightPlane",c)}};f.bindPointDistanceUniforms=function(a,d){if(this._pointDistanceEnabled){a=a.camera;var b=this._tempSphere;e.copy(b,this._pointDistanceOrigin);e.transformMat4(b,b,a.viewMatrix);b[3]=
e.distance(this._pointDistanceOrigin,this._pointDistanceTarget);d.setUniform4f("pointDistanceSphere",b[0],b[1],b[2],b[3])}};f.bindLineVerticalPlaneUniforms=function(a,d){if(this._lineVerticalPlaneEnabled){var b=this._renderCoordsHelper;a=a.camera;var c=this._tempPlane,k=this._tempVec3A,C=this._tempUp,D=this._tempDir,q=this._tempNormal;l.pointAt(this._lineVerticalPlaneSegment,.5,k);b.worldUpAtPosition(k,C);e.normalize(D,this._lineVerticalPlaneSegment.vector);e.cross(q,C,D);e.normalize(q,q);B(c,this._lineVerticalPlaneSegment.origin,
q,a.viewMatrix);d.setUniform4fv("lineVerticalPlane",c);c=this._tempVec3A;e.copy(c,this._lineVerticalPlaneSegment.origin);b.setAltitude(c,0);e.transformMat4(c,c,a.viewMatrix);d.setUniform3fv("lineVerticalStart",c);c=this._tempVec3B;e.add(c,this._lineVerticalPlaneSegment.origin,this._lineVerticalPlaneSegment.vector);b.setAltitude(c,0);e.transformMat4(c,c,a.viewMatrix);d.setUniform3fv("lineVerticalEnd",c)}};f.bindIntersectsLineUniforms=function(a,d){if(this._intersectsLineEnabled){var b=O,c=P;if(this._intersectsLineInfinite){var k=
a.camera;p.fromRay(H.wrap(this._intersectsLineSegment.origin,this._intersectsLineSegment.vector),n);n.c0=-Number.MAX_VALUE;if(!G.intersectClipRay(k.frustum,n))return;p.getStart(n,b);p.getEnd(n,c)}else e.copy(b,this._intersectsLineSegment.origin),e.add(c,this._intersectsLineSegment.origin,this._intersectsLineSegment.vector);k=this._tempVec3A;e.transformMat4(k,b,a.camera.viewMatrix);d.setUniform3fv("intersectsLineStart",k);b=this._tempVec4;e.copy(b,this._intersectsLineSegment.vector);this._tempVec4[3]=
0;v.transformMat4(this._tempVec4,this._tempVec4,a.camera.viewMatrix);e.transformMat4(c,c,a.camera.viewMatrix);d.setUniform3fv("intersectsLineEnd",c);e.normalize(b,b);d.setUniform3f("intersectsLineDirection",b[0],b[1],b[2]);d.setUniform1f("intersectsLineRadius",this._intersectsLineRadius)}};f._bindGlobalUniforms=function(a,d){const b=a.camera;d.setUniform4fv("projInfo",this._projInfo);d.setUniform2fv("zScale",this._zScale);d.setUniform2f("nearFar",b.near,b.far);this._heightManifoldEnabled?d.setUniform1f("maxPixelDistance",
2*b.computeScreenPixelSizeAt(this._heightManifoldTarget)):this._pointDistanceEnabled?d.setUniform1f("maxPixelDistance",2*b.computeScreenPixelSizeAt(this._pointDistanceTarget)):this._lineVerticalPlaneEnabled&&d.setUniform1f("maxPixelDistance",2*b.computeScreenPixelSizeAt(this._lineVerticalPlaneSegment.origin));d.bindTexture(a.offscreenRenderingHelper.linearDepthTexture,"depthMap");d.bindTexture(a.offscreenRenderingHelper.mainColorTexture,"frameColor")};f._requestRender=function(){this._context&&this._context.requestRender()};
f._selectTechnique=function(){this._techniqueConfig.heightManifoldEnabled=this.heightManifoldEnabled;this._techniqueConfig.lineVerticalPlaneEnabled=this.lineVerticalPlaneEnabled;this._techniqueConfig.pointDistanceEnabled=this.pointDistanceEnabled;this._techniqueConfig.intersectsLineEnabled=this.intersectsLineEnabled;this._techniqueConfig.contrastControlEnabled=this._config.contrastControlEnabled;return this._technique=this._techniqueRepository.releaseAndAcquire(A.LaserlineTechnique,this._techniqueConfig,
this._technique)};E._createClass(m,[{key:"renderSlots",get:function(){return[this._config.contrastControlEnabled?15:14]}},{key:"needsLinearDepth",get:function(){return!0}},{key:"heightManifoldEnabled",get:function(){return this._heightManifoldEnabled},set:function(a){this._heightManifoldEnabled!==a&&(this._heightManifoldEnabled=a,this._requestRender())}},{key:"heightManifoldTarget",get:function(){return this._heightManifoldTarget},set:function(a){e.copy(this._heightManifoldTarget,a);this._requestRender()}},
{key:"pointDistanceEnabled",get:function(){return this._pointDistanceEnabled},set:function(a){a!==this._pointDistanceEnabled&&(this._pointDistanceEnabled=a,this._requestRender())}},{key:"pointDistanceTarget",get:function(){return this._pointDistanceTarget},set:function(a){e.copy(this._pointDistanceTarget,a);this._requestRender()}},{key:"pointDistanceOrigin",get:function(){return this._pointDistanceOrigin},set:function(a){e.copy(this._pointDistanceOrigin,a);this._requestRender()}},{key:"lineVerticalPlaneEnabled",
get:function(){return this._lineVerticalPlaneEnabled},set:function(a){a!==this._lineVerticalPlaneEnabled&&(this._lineVerticalPlaneEnabled=a,this._requestRender())}},{key:"lineVerticalPlaneSegment",get:function(){return this._lineVerticalPlaneSegment},set:function(a){l.copy(a,this._lineVerticalPlaneSegment);this._requestRender()}},{key:"intersectsLineEnabled",get:function(){return this._intersectsLineEnabled},set:function(a){a!==this._intersectsLineEnabled&&(this._intersectsLineEnabled=a,this._requestRender())}},
{key:"intersectsLineSegment",get:function(){return this._intersectsLineSegment},set:function(a){l.copy(a,this._intersectsLineSegment);this._requestRender()}},{key:"intersectsLineRadius",get:function(){return this._intersectsLineRadius},set:function(a){a!==this._intersectsLineRadius&&(this._intersectsLineRadius=a,this._requestRender())}},{key:"intersectsLineInfinite",get:function(){return this._intersectsLineInfinite},set:function(a){a!==this._intersectsLineInfinite&&(this._intersectsLineInfinite=
a,this._requestRender())}},{key:"pathVerticalPlaneEnabled",get:function(){return this._pathVerticalPlaneEnabled},set:function(a){a!==this._pathVerticalPlaneEnabled&&(this._pathVerticalPlaneEnabled=a,h.isSome(this._pathVerticalPlaneData)&&this._requestRender())}},{key:"pathVerticalPlaneVertices",set:function(a){h.isNone(this._pathVerticalPlaneData)&&(this._pathVerticalPlaneData=new x.LaserlinePathData(this._renderCoordsHelper));this._pathVerticalPlaneData.vertices=a;this.pathVerticalPlaneEnabled&&
this._requestRender()}},{key:"pathVerticalPlaneBuffers",set:function(a){h.isNone(this._pathVerticalPlaneData)&&(this._pathVerticalPlaneData=new x.LaserlinePathData(this._renderCoordsHelper));this._pathVerticalPlaneData.buffers=a;this.pathVerticalPlaneEnabled&&this._requestRender()}}]);return m}();const n=p.create(),O=g.create(),P=g.create();u.LaserLineRenderer=r;Object.defineProperty(u,"__esModule",{value:!0})});