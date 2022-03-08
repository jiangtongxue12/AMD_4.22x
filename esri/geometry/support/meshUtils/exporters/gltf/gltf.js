// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define("exports ../../../../../core/MapUtils ../../../../../core/maybe ../../../../../chunks/quat ../../../../../chunks/quatf64 ../../../../../chunks/vec3 ../../../../../chunks/vec3f64 ../../../MeshMaterialMetallicRoughness ../../georeference ./buffer ./geometry ./types ./imageutils".split(" "),function(E,K,p,L,F,G,u,M,N,H,I,f,B){let O=function(){function J(a,b,c){this.params={};this.materialMap=[];this.imageMap=new Map;this.textureMap=new Map;this.gltf={asset:{version:"2.0",copyright:a.copyright,
generator:a.generator},extras:{options:b,binChunkBuffer:null,promises:[]}};c&&(this.params=c);this.addScenes(a)}var m=J.prototype;m.addScenes=function(a){this.gltf.scene=a.defaultScene;const b=this.gltf.extras.options.bufferOutputType===f.BufferOutputType.GLB||this.gltf.extras.options.imageOutputType===f.ImageOutputType.GLB;b&&(this.gltf.extras.binChunkBuffer=new H.Buffer(this.gltf));a.forEachScene(c=>{this.addScene(c)});b&&this.gltf.extras.binChunkBuffer.finalize()};m.addScene=function(a){this.gltf.scenes||
(this.gltf.scenes=[]);const b={};a.name&&(b.name=a.name);a.forEachNode(c=>{b.nodes||(b.nodes=[]);c=this.addNode(c);b.nodes.push(c)});this.gltf.scenes.push(b)};m.addNode=function(a){this.gltf.nodes||(this.gltf.nodes=[]);const b={};a.name&&(b.name=a.name);var c=a.translation;G.exactEquals(c,u.ZEROS)||(b.translation=u.clone(c));c=a.rotation;L.exactEquals(c,F.IDENTITY)||(b.rotation=F.clone(c));c=a.scale;G.exactEquals(c,u.ONES)||(b.scale=u.clone(c));a.mesh&&a.mesh.vertexAttributes.position?b.mesh=this.addMesh(a.mesh):
a.forEachNode(d=>{b.children||(b.children=[]);d=this.addNode(d);b.children.push(d)});a=this.gltf.nodes.length;this.gltf.nodes.push(b);return a};m.addMesh=function(a){this.gltf.meshes||(this.gltf.meshes=[]);const b={primitives:[]},c=this.gltf.extras.options.bufferOutputType===f.BufferOutputType.GLB;let d;d=c?this.gltf.extras.binChunkBuffer:new H.Buffer(this.gltf);this.params.origin||(this.params.origin=I.computeOrigin(a));var e=N.ungeoreferenceByTransform(a.vertexAttributes,a.transform,this.params.origin,
{geographic:this.params.geographic,unit:"meters"});I.smoothNormals(a,e);this.flipYZAxis(e);const k=d.addBufferView(5126,f.AttributeType.VEC3,f.TargetBuffer.ARRAY_BUFFER);let h;e.normal&&(h=d.addBufferView(5126,f.AttributeType.VEC3,f.TargetBuffer.ARRAY_BUFFER));let l;a.vertexAttributes.uv&&(l=d.addBufferView(5126,f.AttributeType.VEC2,f.TargetBuffer.ARRAY_BUFFER));let g;e.tangent&&(g=d.addBufferView(5126,f.AttributeType.VEC4,f.TargetBuffer.ARRAY_BUFFER));let n;a.vertexAttributes.color&&(n=d.addBufferView(5121,
f.AttributeType.VEC4,f.TargetBuffer.ARRAY_BUFFER));k.startAccessor("POSITION");h&&h.startAccessor("NORMAL");l&&l.startAccessor("TEXCOORD_0");g&&g.startAccessor("TANGENT");n&&n.startAccessor("COLOR_0");var q=e.position.length/3;const {position:C,normal:v,tangent:r}=e,{color:t,uv:D}=a.vertexAttributes;for(e=0;e<q;++e)k.push(C[3*e]),k.push(C[3*e+1]),k.push(C[3*e+2]),h&&p.isSome(v)&&(h.push(v[3*e]),h.push(v[3*e+1]),h.push(v[3*e+2])),l&&p.isSome(D)&&(l.push(D[2*e]),l.push(D[2*e+1])),g&&p.isSome(r)&&(g.push(r[4*
e]),g.push(r[4*e+1]),g.push(r[4*e+2]),g.push(r[4*e+3])),n&&p.isSome(t)&&(n.push(t[4*e]),n.push(t[4*e+1]),n.push(t[4*e+2]),n.push(t[4*e+3]));q=k.endAccessor();q=this.addAccessor(k.index,q);if(h){var w=h.endAccessor();w=this.addAccessor(h.index,w)}if(l){var x=l.endAccessor();x=this.addAccessor(l.index,x)}if(g){var y=g.endAccessor();y=this.addAccessor(g.index,y)}if(n){var z=n.endAccessor();z=this.addAccessor(n.index,z)}let A;a.components&&0<a.components.length&&a.components[0].faces?(A=d.addBufferView(5125,
f.AttributeType.SCALAR,f.TargetBuffer.ELEMENT_ARRAY_BUFFER),this.addMeshVertexIndexed(A,a.components,b,q,w,x,y,z)):this.addMeshVertexNonIndexed(a.components,b,q,w,x,y,z);k.finalize();h&&h.finalize();l&&l.finalize();g&&g.finalize();A&&A.finalize();n&&n.finalize();c||d.finalize();a=this.gltf.meshes.length;this.gltf.meshes.push(b);return a};m.flipYZAxis=function({position:a,normal:b,tangent:c}){this.flipYZBuffer(a,3);this.flipYZBuffer(b,3);this.flipYZBuffer(c,4)};m.flipYZBuffer=function(a,b){if(!p.isNone(a))for(let c=
1,d=2;c<a.length;c+=b,d+=b){const e=a[c];a[c]=a[d];a[d]=-e}};m.addMaterial=function(a){if(null!==a){var b=this.materialMap.indexOf(a);if(-1!==b)return b;this.gltf.materials||(this.gltf.materials=[]);b={};switch(a.alphaMode){case "mask":b.alphaMode=f.AlphaMode.MASK;break;case "auto":case "blend":b.alphaMode=f.AlphaMode.BLEND}.5!==a.alphaCutoff&&(b.alphaCutoff=a.alphaCutoff);a.doubleSided&&(b.doubleSided=a.doubleSided);b.pbrMetallicRoughness={};var c=d=>{d=d.toRgba();d[0]=(d[0]/255)**2.1;d[1]=(d[1]/
255)**2.1;d[2]=(d[2]/255)**2.1;return d};p.isSome(a.color)&&(b.pbrMetallicRoughness.baseColorFactor=c(a.color));p.isSome(a.colorTexture)&&(b.pbrMetallicRoughness.baseColorTexture={index:this.addTexture(a.colorTexture)});p.isSome(a.normalTexture)&&(b.normalTexture={index:this.addTexture(a.normalTexture)});a instanceof M?(p.isSome(a.emissiveTexture)&&(b.emissiveTexture={index:this.addTexture(a.emissiveTexture)}),p.isSome(a.emissiveColor)&&(c=c(a.emissiveColor),b.emissiveFactor=[c[0],c[1],c[2]]),p.isSome(a.occlusionTexture)&&
(b.occlusionTexture={index:this.addTexture(a.occlusionTexture)}),p.isSome(a.metallicRoughnessTexture)&&(b.pbrMetallicRoughness.metallicRoughnessTexture={index:this.addTexture(a.metallicRoughnessTexture)}),b.pbrMetallicRoughness.metallicFactor=a.metallic,b.pbrMetallicRoughness.roughnessFactor=a.roughness):(b.pbrMetallicRoughness.metallicFactor=1,b.pbrMetallicRoughness.roughnessFactor=1);c=this.gltf.materials.length;this.gltf.materials.push(b);this.materialMap.push(a);return c}};m.addTexture=function(a){this.gltf.textures||
(this.gltf.textures=[]);return K.getOrCreateMapValue(this.textureMap,a,()=>{const b={sampler:this.addSampler(a),source:this.addImage(a)},c=this.gltf.textures.length;this.gltf.textures.push(b);return c})};m.addImage=function(a){var b=this.imageMap.get(a);if(null!=b)return b;this.gltf.images||(this.gltf.images=[]);const c={};if(a.url)c.uri=a.url;else{c.extras=a.data;for(b=0;b<this.gltf.images.length;++b)if(a.data===this.gltf.images[b].extras)return b;switch(this.gltf.extras.options.imageOutputType){case f.ImageOutputType.GLB:{const d=
this.gltf.extras.binChunkBuffer.addBufferView(5121,f.AttributeType.SCALAR);b=B.imageToArrayBuffer(a.data).then(({data:e,type:k})=>{c.mimeType=k;return e});d.writeAsync(b).then(()=>{d.finalize()});c.bufferView=d.index;break}case f.ImageOutputType.DataURI:c.uri=B.imageToDataURI(a.data);break;default:this.gltf.extras.promises.push(B.imageToArrayBuffer(a.data).then(({data:d,type:e})=>{c.uri=d;c.mimeType=e}))}}b=this.gltf.images.length;this.gltf.images.push(c);this.imageMap.set(a,b);return b};m.addSampler=
function(a){this.gltf.samplers||(this.gltf.samplers=[]);var b=10497;let c=10497;if("string"===typeof a.wrap)switch(a.wrap){case "clamp":c=b=33071;break;case "mirror":c=b=33648}else{switch(a.wrap.vertical){case "clamp":c=33071;break;case "mirror":c=33648}switch(a.wrap.horizontal){case "clamp":b=33071;break;case "mirror":b=33648}}a={wrapS:b,wrapT:c};for(b=0;b<this.gltf.samplers.length;++b)if(JSON.stringify(a)===JSON.stringify(this.gltf.samplers[b]))return b;b=this.gltf.samplers.length;this.gltf.samplers.push(a);
return b};m.addAccessor=function(a,b){this.gltf.accessors||(this.gltf.accessors=[]);a={bufferView:a,byteOffset:b.byteOffset,componentType:b.componentType,count:b.count,type:b.type,min:b.min,max:b.max,name:b.name};b.normalized&&(a.normalized=!0);b=this.gltf.accessors.length;this.gltf.accessors.push(a);return b};m.addMeshVertexIndexed=function(a,b,c,d,e,k,h,l){for(const g of b){a.startAccessor("INDICES");for(b=0;b<g.faces.length;++b)a.push(g.faces[b]);b=a.endAccessor();b={attributes:{POSITION:d},indices:this.addAccessor(a.index,
b),material:this.addMaterial(g.material)};e&&"flat"!==g.shading&&(b.attributes.NORMAL=e);k&&(b.attributes.TEXCOORD_0=k);h&&"flat"!==g.shading&&(b.attributes.TANGENT=h);l&&(b.attributes.COLOR_0=l);c.primitives.push(b)}};m.addMeshVertexNonIndexed=function(a,b,c,d,e,k,h){c={attributes:{POSITION:c}};d&&(c.attributes.NORMAL=d);e&&(c.attributes.TEXCOORD_0=e);k&&(c.attributes.TANGENT=k);h&&(c.attributes.COLOR_0=h);a&&(c.material=this.addMaterial(a[0].material));b.primitives.push(c)};return J}();E.GLTF=O;
Object.defineProperty(E,"__esModule",{value:!0})});