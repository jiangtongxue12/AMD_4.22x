// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../core/arrayUtils ../../../core/maybe ../../../geometry/support/aaBoundingBox ../support/buffer/glUtil ./PatchGeometryFactory ./TextureFader ./TileOverlayData ./tileUtils ../webgl-engine/lib/DefaultVertexAttributeLocations ../../webgl/BufferObject ../../webgl/VertexArrayObject".split(" "),function(q,u,v,g,w,x,r,y,z,A,B,t,C){let D=function(){function p(){this.geometryInfo=new r.PatchGeometry;this.skirtIntersectionData=this.intersectionData=
null;this._textureRef=new y(()=>this.tile.surface.textureFadeDuration);this.overlay=new z}var f=p.prototype;f.init=function(a){this.tile=a;this.clear();a=this.geometryInfo;a.indices=null;a.vertexAttributes=null;w.empty(a.boundingBox);a.numSurfaceIndices=0;a.numSkirtIndices=0;a.numWithoutSkirtIndices=0;a.numVertsPerRow=0;this.skirtIntersectionData=this.intersectionData=null;this.geometryState={numVertsPerRow:0,samplerData:null,clippingArea:null,wireframe:!1};this.localOrigin=null;this.overlay.clear()};
f.clear=function(){this.releaseGeometry();this.releaseTexture();this._textureRef.clear()};f.updateGeometry=function(a,b){if(!this._updateGeometryState(b))return!1;this._releaseGeometry();this._createGeometry(a);return!0};f.releaseGeometry=function(){return this._releaseGeometry()?(this.geometryState={numVertsPerRow:0,samplerData:null,clippingArea:null,wireframe:!1},!0):!1};f.ensureTexture=function(a,b){g.isSome(this._texture)&&this._texture.descriptor.width!==a&&this.releaseTexture();g.isNone(this._texture)&&
(this._texture=b(),this.tile.setMemoryDirty());return this._texture};f.releaseTexture=function(){g.isSome(this._texture)&&(this._texture.release(),this._texture=null,this.tile.setMemoryDirty())};f._updateGeometryState=function(a){const b=this._getElevationInfo(),h=b.samplerData?this.tile.getElevationBasedVerticesPerRow(b.maxTileLevel):this.tile.getDefaultVerticesPerRowOnLevel();let e=this.tile.clippingArea;if(!this.tile.intersectsClippingArea||this.tile.isWithinClippingArea)e=null;const c=this.geometryState;
let d=!1;c.numVertsPerRow!==h&&(c.numVertsPerRow=h,d=!0);b.changed&&(c.samplerData=b.samplerData,d=!0);v.equals(c.clippingArea,e)||(c.clippingArea=e,d=!0);c.wireframe!==a&&(c.wireframe=a,d=!0);return d};f._createGeometry=function(a){this.tile.createGeometry(this.geometryState,this.localOrigin);const b=this.geometryInfo.vertexAttributes,h=this.geometryInfo.indices,e=a.gl;this._vao=new C(a,B.Default3D,{geometry:x.glLayout(b.layout)},{geometry:t.createVertex(a,e.STATIC_DRAW,b.buffer)},t.createIndex(a,
e.STATIC_DRAW,h))};f._releaseGeometry=function(){if(!this._vao)return!1;this._vao.dispose();this._vao=null;r.releaseGeometry(this.geometryInfo);return!0};f.setTextureReference=function(a,b=0){g.isSome(a)&&a.texture!==this._texture&&this.releaseTexture();this._textureRef.push(a,b)};f._getElevationInfo=function(){const a=this.geometryState.samplerData,b=this.tile.layerInfo[0],h=b.length;let e=Array(h),c=0;var d=0;let n=!1;for(let m=0;m<h;m++){var k=b[m];if(k.upsampleInfo){k=k.upsampleInfo.tile;var l=
k.layerInfo[0][m].data;l=l&&l.samplerData;a&&a[c]===l||(n=!0);e[c++]=l;d=Math.max(d,k.lij[0])}else k.data&&(l=this.tile.surface.layerViewByIndex(m,0),A.fallsWithinLayer(this.tile,l.layer,!1)&&(d=k.data,a&&a[c]===d.samplerData||(n=!0),e[c++]=d.samplerData,d=this.tile.level))}a&&a.length!==c&&(n=!0);0<c?e.length=c:e=null;return{changed:n,samplerData:e,maxTileLevel:d}};u._createClass(p,[{key:"vao",get:function(){return this._vao}},{key:"textureReference",get:function(){return this._textureRef.current}},
{key:"nextTextureReference",get:function(){return this._textureRef.next}},{key:"textureFadeFactor",get:function(){return this._textureRef.fadeFactor}},{key:"textureIsFading",get:function(){return this._textureRef.isFading}},{key:"estimatedGeometryMemoryUsage",get:function(){const a=g.mapOr(this.intersectionData,0,b=>b.estimatedMemoryUsage)+g.mapOr(this.skirtIntersectionData,0,b=>b.estimatedMemoryUsage+b.vertexPositionBuffer.byteLength);return this.geometryInfo.indices.byteLength+this.geometryInfo.vertexAttributes.byteLength+
a}},{key:"textureDescriptor",get:function(){return g.isSome(this._texture)?this._texture.descriptor:null}},{key:"test",get:function(){return{hasTexture:null!=this._texture}}}]);return p}();q.PatchRenderData=D;Object.defineProperty(q,"__esModule",{value:!0})});