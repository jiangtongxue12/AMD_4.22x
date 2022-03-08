// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define("exports ./DisjointTimerQuery ./DrawBuffers ./Instancing ./isWebGL2Context ./LoseContext ./VertexArrayObjects".split(" "),function(D,E,F,G,e,H,I){function n(b,p,c,v,f){if(v&&e(b))return!0;if(p[c])return!1;for(const g of f)if(b.getExtension(g))return!0;return!1}D.loadCapabilities=function(b,p){const c=p.disabledExtensions||{},v=p.debugWebGLExtensions||{};let f,g,q,r,t,w,h,k,l,x,y,u,z=null,A=null,B=null,C=null;return{get drawBuffers(){y||(y=F.load(b,c));return y},get instancing(){f||(f=G.load(b));
return f},get vao(){g||(g=I.load(b,c));return g},get compressedTextureETC(){if(!q)if(c.compressedTextureETC)q=null;else{var a=b.getExtension("WEBGL_compressed_texture_etc");q=a?{COMPRESSED_R11_EAC:a.COMPRESSED_R11_EAC,COMPRESSED_SIGNED_R11_EAC:a.COMPRESSED_SIGNED_R11_EAC,COMPRESSED_RG11_EAC:a.COMPRESSED_RG11_EAC,COMPRESSED_SIGNED_RG11_EAC:a.COMPRESSED_SIGNED_RG11_EAC,COMPRESSED_RGB8_ETC2:a.COMPRESSED_RGB8_ETC2,COMPRESSED_SRGB8_ETC2:a.COMPRESSED_SRGB8_ETC2,COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2:a.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2,
COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2:a.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2,COMPRESSED_RGBA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC,COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC}:null}return q},get compressedTextureS3TC(){if(!r)if(c.compressedTextureS3TC)r=null;else{var a=b.getExtension("WEBGL_compressed_texture_s3tc");r=a?{COMPRESSED_RGB_S3TC_DXT1:a.COMPRESSED_RGB_S3TC_DXT1_EXT,COMPRESSED_RGBA_S3TC_DXT1:a.COMPRESSED_RGBA_S3TC_DXT1_EXT,COMPRESSED_RGBA_S3TC_DXT3:a.COMPRESSED_RGBA_S3TC_DXT3_EXT,
COMPRESSED_RGBA_S3TC_DXT5:a.COMPRESSED_RGBA_S3TC_DXT5_EXT}:null}return r},get textureFilterAnisotropic(){if(!t)if(c.textureFilterAnisotropic)t=null;else{var a=b.getExtension("EXT_texture_filter_anisotropic")||b.getExtension("MOZ_EXT_texture_filter_anisotropic")||b.getExtension("WEBKIT_EXT_texture_filter_anisotropic");t=a?{MAX_TEXTURE_MAX_ANISOTROPY:a.MAX_TEXTURE_MAX_ANISOTROPY_EXT,TEXTURE_MAX_ANISOTROPY:a.TEXTURE_MAX_ANISOTROPY_EXT}:null}return t},get disjointTimerQuery(){w||(w=E.createDisjointTimerQuery(b,
c));return w},get textureFloat(){if(!h)if(e(b))h={textureFloat:!0,textureFloatLinear:!c.textureFloatLinear&&!!b.getExtension("OES_texture_float_linear"),textureHalfFloat:!0,textureHalfFloatLinear:!c.textureHalfFloatLinear&&!!b.getExtension("OES_texture_half_float_linear"),HALF_FLOAT:b.HALF_FLOAT};else if(b instanceof WebGLRenderingContext){const a=!c.textureHalfFloat&&b.getExtension("OES_texture_half_float");h={textureFloat:!c.textureFloat&&!!b.getExtension("OES_texture_float"),textureFloatLinear:!c.textureFloatLinear&&
!!b.getExtension("OES_texture_float_linear"),textureHalfFloat:!!a,textureHalfFloatLinear:!c.textureHalfFloatLinear&&!!b.getExtension("OES_texture_half_float_linear"),HALF_FLOAT:a?a.HALF_FLOAT_OES:void 0}}else h=null;return h},get colorBufferFloat(){if(!k)if(e(b)){var a=!c.colorBufferFloat&&b.getExtension("EXT_color_buffer_half_float"),d=!c.colorBufferFloat&&b.getExtension("EXT_color_buffer_float"),m=!c.colorBufferFloat&&b.getExtension("EXT_float_blend");k=a||d||m?{textureFloat:!!d,textureHalfFloat:!!a,
floatBlend:!!m,R16F:b.R16F,RG16F:b.RG16F,RGBA16F:b.RGBA16F,R32F:b.R32F,RG32F:b.RG32F,RGBA32F:b.RGBA32F,R11F_G11F_B10F:b.R11F_G11F_B10F,RGB16F:b.RGB16F}:null}else b instanceof WebGLRenderingContext?(a=!c.colorBufferFloat&&b.getExtension("EXT_color_buffer_half_float"),d=!c.colorBufferFloat&&b.getExtension("WEBGL_color_buffer_float"),m=!c.colorBufferFloat&&b.getExtension("EXT_float_blend"),k=a||d||m?{textureFloat:!!d,textureHalfFloat:!!a,floatBlend:!!m,RGBA16F:a?a.RGBA16F_EXT:void 0,RGB16F:a?a.RGB16F_EXT:
void 0,RGBA32F:d?d.RGBA32F_EXT:void 0}:null):k=null;return k},get blendMinMax(){if(!l)if(e(b))l={MIN:b.MIN,MAX:b.MAX};else if(c.blendMinMax)l=null;else{{const a=b.getExtension("EXT_blend_minmax");l=a?{MIN:a.MIN_EXT,MAX:a.MAX_EXT}:null}}return l},get depthTexture(){null===z&&(z=n(b,c,"depthTexture",!0,["WEBGL_depth_texture","MOZ_WEBGL_depth_texture","WEBKIT_WEBGL_depth_texture"]));return z},get standardDerivatives(){null===A&&(A=n(b,c,"standardDerivatives",!0,["OES_standard_derivatives"]));return A},
get shaderTextureLOD(){null===B&&(B=n(b,c,"shaderTextureLOD",!0,["EXT_shader_texture_lod"]));return B},get fragDepth(){null===C&&(C=n(b,c,"fragDepth",!0,["EXT_frag_depth"]));return C},get loseContext(){x||(x=H.load(b,v));return x},get textureNorm16(){if(!u)if(!e(b)||c.textureNorm16)u=null;else{var a=b.getExtension("EXT_texture_norm16");u=a?{R16:a.R16,RG16:a.RG16,RGB16:a.RGB16,RGBA16:a.RGBA16,R16_SNORM:a.R16_SNORM,RG16_SNORM:a.RG16_SNORM,RGB16_SNORM:a.RGB16_SNORM,RGBA16_SNORM:a.RGBA16_SNORM}:null}return u},
enable(a){return this[a]}}};Object.defineProperty(D,"__esModule",{value:!0})});