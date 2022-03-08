// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../core/compilerUtils ../../../../core/MapUtils ../../../../core/urlUtils ../../../../core/Version ../../../../chunks/mat4 ../../../../chunks/mat4f64 ../../../../chunks/quat ../../../../chunks/quatf64 ../../../../geometry/support/buffer/BufferView ../../../../chunks/scalar ./BinaryStreamReader ./fillDefaults ./pathUtils".split(" "),function(C,l,F,G,t,D,r,x,H,I,k,y,E,z,J){function K(f){switch(f.componentType){case 5120:return new k.BufferViewVec2i8(f.raw,
f.byteOffset,f.byteStride,f.byteOffset+f.byteStride*f.entryCount);case 5121:return new k.BufferViewVec2u8(f.raw,f.byteOffset,f.byteStride,f.byteOffset+f.byteStride*f.entryCount);case 5122:return new k.BufferViewVec2i16(f.raw,f.byteOffset,f.byteStride,f.byteOffset+f.byteStride*f.entryCount);case 5123:return new k.BufferViewVec2u16(f.raw,f.byteOffset,f.byteStride,f.byteOffset+f.byteStride*f.entryCount);case 5125:return new k.BufferViewVec2u32(f.raw,f.byteOffset,f.byteStride,f.byteOffset+f.byteStride*
f.entryCount);case 5126:return new k.BufferViewVec2f(f.raw,f.byteOffset,f.byteStride,f.byteOffset+f.byteStride*f.entryCount);default:F.neverReached(f.componentType)}}function L(f){return A.apply(this,arguments)}function A(){A=l._asyncToGenerator(function*(f){return new Promise((h,d)=>{const a=new Blob([f]),b=new FileReader;b.onload=()=>{h(JSON.parse(b.result))};b.onerror=c=>{d(c)};b.readAsText(a)})});return A.apply(this,arguments)}function M(f,h){return B.apply(this,arguments)}function B(){B=l._asyncToGenerator(function*(f,
h){return new Promise((d,a)=>{const b=new Blob([f],{type:h}),c=URL.createObjectURL(b),e=new Image;e.addEventListener("load",()=>{URL.revokeObjectURL(c);"decode"in e?e.decode().then(()=>d(e),()=>d(e)):d(e)});e.addEventListener("error",g=>{URL.revokeObjectURL(c);a(g)});e.src=c})});return B.apply(this,arguments)}let R=function(){function f(d,a,b,c,e){this.context=d;this.errorContext=a;this.uri=b;this.json=c;this.glbBuffer=e;this.bufferLoaders=new Map;this.textureLoaders=new Map;this.textureCache=new Map;
this.materialCache=new Map;this.nodeParentMap=new Map;this.nodeTransformCache=new Map;this.baseUri=J.splitURI(this.uri).dirPart;this.checkVersionSupported();this.checkRequiredExtensionsSupported();a.errorUnsupportedIf(null==c.scenes,"Scenes must be defined.");a.errorUnsupportedIf(null==c.meshes,"Meshes must be defined");a.errorUnsupportedIf(null==c.nodes,"Nodes must be defined.");this.computeNodeParents()}f.load=function(){var d=l._asyncToGenerator(function*(a,b,c,e){if(t.isDataProtocol(c)){var g=
t.dataComponents(c);if("model/gltf-binary"!==g.mediaType)try{const m=JSON.parse(g.isBase64?atob(g.data):g.data);return new f(a,b,c,m)}catch{}g=t.dataToArrayBuffer(c);if(f.isGLBData(g))return this.fromGLBData(a,b,c,g)}if(c.endsWith(".gltf"))return e=yield a.loadJSON(c,e),new f(a,b,c,e);g=yield a.loadBinary(c,e);if(f.isGLBData(g))return this.fromGLBData(a,b,c,g);e=yield a.loadJSON(c,e);return new f(a,b,c,e)});return function(a,b,c,e){return d.apply(this,arguments)}}();f.isGLBData=function(d){d=new E.BinaryStreamReader(d);
return 4<=d.remainingBytes()&&1179937895===d.readUint32()};f.fromGLBData=function(){var d=l._asyncToGenerator(function*(a,b,c,e){e=yield f.parseGLBData(b,e);return new f(a,b,c,e.json,e.binaryData)});return function(a,b,c,e){return d.apply(this,arguments)}}();f.parseGLBData=function(){var d=l._asyncToGenerator(function*(a,b){const c=new E.BinaryStreamReader(b);a.assert(12<=c.remainingBytes(),"GLB binary data is insufficiently large.");var e=c.readUint32(),g=c.readUint32();const m=c.readUint32();a.assert(1179937895===
e,"Magic first 4 bytes do not fit to expected GLB value.");a.assert(b.byteLength>=m,"GLB binary data is smaller than header specifies.");a.errorUnsupportedIf(2!==g,"An unsupported GLB container version was detected. Only version 2 is supported.");b=0;let n,p;for(;8<=c.remainingBytes();)e=c.readUint32(),g=c.readUint32(),0===b?(a.assert(1313821514===g,"First GLB chunk must be JSON."),a.assert(0<=e,"No JSON data found."),n=yield L(c.readUint8Array(e))):1===b?(a.errorUnsupportedIf(5130562!==g,"Second GLB chunk expected to be BIN."),
p=c.readUint8Array(e)):a.warnUnsupported("More than 2 GLB chunks detected. Skipping."),b+=1;n||a.error("No GLB JSON chunk detected.");return{json:n,binaryData:p}});return function(a,b){return d.apply(this,arguments)}}();var h=f.prototype;h.getBuffer=function(){var d=l._asyncToGenerator(function*(a,b){const c=this.json.buffers[a],e=this.errorContext;if(null==c.uri)return e.assert(null!=this.glbBuffer,"GLB buffer not present"),this.glbBuffer;a=yield this.getBufferLoader(a,b);e.assert(a.byteLength===
c.byteLength,"Buffer byte lengths should match.");return a});return function(a,b){return d.apply(this,arguments)}}();h.getBufferLoader=function(){var d=l._asyncToGenerator(function*(a,b){const c=this.bufferLoaders.get(a);if(c)return c;b=this.context.loadBinary(this.resolveUri(this.json.buffers[a].uri),b).then(e=>new Uint8Array(e));this.bufferLoaders.set(a,b);return b});return function(a,b){return d.apply(this,arguments)}}();h.getAccessor=function(){var d=l._asyncToGenerator(function*(a,b){var c=this.errorContext;
c.errorUnsupportedIf(!this.json.accessors,"Accessors missing.");a=this.json.accessors[a];c.errorUnsupportedIf(null==(null==a?void 0:a.bufferView),"Some accessor does not specify a bufferView.");c.errorUnsupportedIf(a.type in["MAT2","MAT3","MAT4"],`AttributeType ${a.type} is not supported`);c=this.json.bufferViews[a.bufferView];b=yield this.getBuffer(c.buffer,b);const e=N[a.type],g=O[a.componentType],m=e*g,n=c.byteStride||m;return{raw:b.buffer,byteStride:n,byteOffset:b.byteOffset+(c.byteOffset||0)+
(a.byteOffset||0),entryCount:a.count,isDenselyPacked:n===m,componentCount:e,componentByteSize:g,componentType:a.componentType,min:a.min,max:a.max,normalized:!!a.normalized}});return function(a,b){return d.apply(this,arguments)}}();h.getIndexData=function(){var d=l._asyncToGenerator(function*(a,b){if(null==a.indices)return null;a=yield this.getAccessor(a.indices,b);if(a.isDenselyPacked)switch(a.componentType){case 5121:return new Uint8Array(a.raw,a.byteOffset,a.entryCount);case 5123:return new Uint16Array(a.raw,
a.byteOffset,a.entryCount);case 5125:return new Uint32Array(a.raw,a.byteOffset,a.entryCount)}else switch(a.componentType){case 5121:return y.makeDense(this.wrapAccessor(k.BufferViewUint8,a));case 5123:return y.makeDense(this.wrapAccessor(k.BufferViewUint16,a));case 5125:return y.makeDense(this.wrapAccessor(k.BufferViewUint32,a))}});return function(a,b){return d.apply(this,arguments)}}();h.getPositionData=function(){var d=l._asyncToGenerator(function*(a,b){const c=this.errorContext;c.errorUnsupportedIf(null==
a.attributes.POSITION,"No POSITION vertex data found.");a=yield this.getAccessor(a.attributes.POSITION,b);c.errorUnsupportedIf(5126!==a.componentType,"Expected type FLOAT for POSITION vertex attribute, but found "+u[a.componentType]);c.errorUnsupportedIf(3!==a.componentCount,"POSITION vertex attribute must have 3 components, but found "+a.componentCount.toFixed());return this.wrapAccessor(k.BufferViewVec3f,a)});return function(a,b){return d.apply(this,arguments)}}();h.getNormalData=function(){var d=
l._asyncToGenerator(function*(a,b){const c=this.errorContext;c.assert(null!=a.attributes.NORMAL,"No NORMAL vertex data found.");a=yield this.getAccessor(a.attributes.NORMAL,b);c.errorUnsupportedIf(5126!==a.componentType,"Expected type FLOAT for NORMAL vertex attribute, but found "+u[a.componentType]);c.errorUnsupportedIf(3!==a.componentCount,"NORMAL vertex attribute must have 3 components, but found "+a.componentCount.toFixed());return this.wrapAccessor(k.BufferViewVec3f,a)});return function(a,b){return d.apply(this,
arguments)}}();h.getTangentData=function(){var d=l._asyncToGenerator(function*(a,b){const c=this.errorContext;c.assert(null!=a.attributes.TANGENT,"No TANGENT vertex data found.");a=yield this.getAccessor(a.attributes.TANGENT,b);c.errorUnsupportedIf(5126!==a.componentType,"Expected type FLOAT for TANGENT vertex attribute, but found "+u[a.componentType]);c.errorUnsupportedIf(4!==a.componentCount,"TANGENT vertex attribute must have 4 components, but found "+a.componentCount.toFixed());return new k.BufferViewVec4f(a.raw,
a.byteOffset,a.byteStride,a.byteOffset+a.byteStride*a.entryCount)});return function(a,b){return d.apply(this,arguments)}}();h.getTextureCoordinates=function(){var d=l._asyncToGenerator(function*(a,b){const c=this.errorContext;c.assert(null!=a.attributes.TEXCOORD_0,"No TEXCOORD_0 vertex data found.");a=yield this.getAccessor(a.attributes.TEXCOORD_0,b);c.errorUnsupportedIf(2!==a.componentCount,"TEXCOORD_0 vertex attribute must have 2 components, but found "+a.componentCount.toFixed());if(5126===a.componentType)return this.wrapAccessor(k.BufferViewVec2f,
a);c.errorUnsupportedIf(!a.normalized,"Integer component types are only supported for a normalized accessor for TEXCOORD_0.");return K(a)});return function(a,b){return d.apply(this,arguments)}}();h.getVertexColors=function(){var d=l._asyncToGenerator(function*(a,b){const c=this.errorContext;c.assert(null!=a.attributes.COLOR_0,"No COLOR_0 vertex data found.");a=yield this.getAccessor(a.attributes.COLOR_0,b);c.errorUnsupportedIf(4!==a.componentCount&&3!==a.componentCount,"COLOR_0 attribute must have 3 or 4 components, but found "+
a.componentCount.toFixed());if(4===a.componentCount){if(5126===a.componentType)return this.wrapAccessor(k.BufferViewVec4f,a);if(5121===a.componentType)return this.wrapAccessor(k.BufferViewVec4u8,a);if(5123===a.componentType)return this.wrapAccessor(k.BufferViewVec4u16,a)}else if(3===a.componentCount){if(5126===a.componentType)return this.wrapAccessor(k.BufferViewVec3f,a);if(5121===a.componentType)return this.wrapAccessor(k.BufferViewVec3u8,a);if(5123===a.componentType)return this.wrapAccessor(k.BufferViewVec3u16,
a)}c.errorUnsupported("Unsupported component type for COLOR_0 attribute: "+u[a.componentType])});return function(a,b){return d.apply(this,arguments)}}();h.hasPositions=function(d){return void 0!==d.attributes.POSITION};h.hasNormals=function(d){return void 0!==d.attributes.NORMAL};h.hasVertexColors=function(d){return void 0!==d.attributes.COLOR_0};h.hasTextureCoordinates=function(d){return void 0!==d.attributes.TEXCOORD_0};h.hasTangents=function(d){return void 0!==d.attributes.TANGENT};h.getMaterial=
function(){var d=l._asyncToGenerator(function*(a,b,c){var e=this.materialCache.get(a.material);if(!e){e=null!=a.material?z.material(this.json.materials[a.material]):z.material();const g=e.pbrMetallicRoughness,m=this.hasVertexColors(a),n=this.getTexture(g.baseColorTexture,b),p=this.getTexture(e.normalTexture,b),v=c?this.getTexture(e.occlusionTexture,b):null,q=c?this.getTexture(e.emissiveTexture,b):null;b=c?this.getTexture(g.metallicRoughnessTexture,b):null;a=null!=a.material?a.material:-1;e={alphaMode:e.alphaMode,
alphaCutoff:e.alphaCutoff,color:g.baseColorFactor,doubleSided:!!e.doubleSided,colorTexture:yield n,normalTexture:yield p,name:e.name,id:a,occlusionTexture:yield v,emissiveTexture:yield q,emissiveFactor:e.emissiveFactor,metallicFactor:g.metallicFactor,roughnessFactor:g.roughnessFactor,metallicRoughnessTexture:yield b,vertexColors:m,ESRI_externalColorMixMode:e.extras.ESRI_externalColorMixMode}}return e});return function(a,b,c){return d.apply(this,arguments)}}();h.getTexture=function(){var d=l._asyncToGenerator(function*(a,
b){if(!a)return null;this.errorContext.errorUnsupportedIf(0!==(a.texCoord||0),"Only TEXCOORD with index 0 is supported.");const c=a.index,e=this.errorContext;a=this.json.textures[c];const g=z.textureSampler(null!=a.sampler?this.json.samplers[a.sampler]:{});e.errorUnsupportedIf(null==a.source,"Source is expected to be defined for a texture.");const m=this.json.images[a.source],n=yield this.loadTextureImageData(c,a,b);return G.getOrCreateMapValue(this.textureCache,c,()=>{const p=q=>33071===q||33648===
q||10497===q,v=q=>{e.error(`Unexpected TextureSampler WrapMode: ${q}. Using default REPEAT(10497).`);return 10497};return{data:n,wrapS:p(g.wrapS)?g.wrapS:v(g.wrapS),wrapT:p(g.wrapT)?g.wrapT:v(g.wrapT),minFilter:g.minFilter,name:m.name,id:c}})});return function(a,b){return d.apply(this,arguments)}}();h.getNodeTransform=function(d){if(void 0===d)return P;var a=this.nodeTransformCache.get(d);if(!a){a=this.getNodeTransform(this.getNodeParent(d));const b=this.json.nodes[d];if(b.matrix)a=r.multiply(x.create(),
a,b.matrix);else if(b.translation||b.rotation||b.scale)a=x.clone(a),b.translation&&r.translate(a,a,b.translation),b.rotation&&(w[3]=H.getAxisAngle(w,b.rotation),r.rotate(a,a,w[3],w)),b.scale&&r.scale(a,a,b.scale);this.nodeTransformCache.set(d,a)}return a};h.wrapAccessor=function(d,a){return new d(a.raw,a.byteOffset,a.byteStride,a.byteOffset+a.byteStride*(a.entryCount-1)+a.componentByteSize*a.componentCount)};h.resolveUri=function(d){return t.makeAbsolute(d,this.baseUri)};h.getNodeParent=function(d){return this.nodeParentMap.get(d)};
h.checkVersionSupported=function(){const d=D.Version.parse(this.json.asset.version,"glTF");Q.validate(d)};h.checkRequiredExtensionsSupported=function(){const d=this.json,a=this.errorContext;d.extensionsRequired&&0!==d.extensionsRequired.length&&a.errorUnsupported("gltf loader was not able to load unsupported feature. Required extensions: "+d.extensionsRequired.join(", "))};h.computeNodeParents=function(){this.json.nodes.forEach((d,a)=>{d.children&&d.children.forEach(b=>{this.nodeParentMap.set(b,a)})})};
h.loadTextureImageData=function(){var d=l._asyncToGenerator(function*(a,b,c){const e=this.textureLoaders.get(a);if(e)return e;b=this.createTextureLoader(b,c);this.textureLoaders.set(a,b);return b});return function(a,b,c){return d.apply(this,arguments)}}();h.createTextureLoader=function(){var d=l._asyncToGenerator(function*(a,b){a=this.json.images[a.source];if(a.uri)return this.context.loadImage(this.resolveUri(a.uri),b);const c=this.errorContext;c.errorUnsupportedIf(null==a.bufferView,"Image bufferView must be defined.");
c.errorUnsupportedIf(null==a.mimeType,"Image mimeType must be defined.");const e=this.json.bufferViews[a.bufferView];b=yield this.getBuffer(e.buffer,b);c.errorUnsupportedIf(null!=e.byteStride,"byteStride not supported for image buffer");return M(new Uint8Array(b.buffer,b.byteOffset+(e.byteOffset||0),e.byteLength),a.mimeType)});return function(a,b){return d.apply(this,arguments)}}();return f}();const Q=new D.Version(2,0,"glTF"),P=r.fromXRotation(x.create(),Math.PI/2),w=I.create(),N={SCALAR:1,VEC2:2,
VEC3:3,VEC4:4},O={[5120]:1,[5121]:1,[5122]:2,[5123]:2,[5126]:4,[5125]:4},u={5120:"BYTE",5121:"UNSIGNED_BYTE",5122:"SHORT",5123:"UNSIGNED_SHORT",5125:"UNSIGNED_INT",5126:"FLOAT"};C.Resource=R;Object.defineProperty(C,"__esModule",{value:!0})});