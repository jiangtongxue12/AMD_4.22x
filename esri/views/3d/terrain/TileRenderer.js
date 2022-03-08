// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../core/mathUtils ../../../core/maybe ../../../chunks/vec2 ../../../chunks/vec2f64 ../../../chunks/vec3f64 ../../../chunks/vec4f64 ../../../layers/support/layerUtils ../../webgl/BufferObject ../../webgl/FramebufferObject ../../../core/has ../../webgl/checkWebGLError ../../webgl/enums ../../../chunks/builtins ../../webgl/Texture ../../webgl/VertexArrayObject ../../2d/engine/vectorTiles/VectorTileRendererHelper3D ../support/StreamDataLoader ./BlendLayersTechnique ./RasterColorizerTechnique ./terrainUtils ./TextureReference ./TileTexture ./support/FBOPool ../webgl-engine/lib/DefaultVertexBufferLayouts ../webgl-engine/lib/glUtil3D ../../webgl/Util".split(" "),
function(F,L,M,m,G,H,N,O,P,I,V,W,X,Y,Z,u,aa,Q,R,y,J,x,A,w,S,T,z,U){function B(q,h,a){a.layerIndex=h;const c=q.layerInfo[1][h];return c.data?(G.set(a.offset,0,0),a.tile=q,a.scale=1,a.sourceLod=q.lij,a.sourceLayerInfo=c,a):(q=c.upsampleInfo)?(h=q.tile.layerInfo[1][h],a.tile=q.tile,G.copy(a.offset,q.offset),a.scale=q.scale,a.sourceLod=q.tile.lij,a.sourceLayerInfo=h,a):null}I=function(){function q(a,c,b){this._rctx=a;this.tileSize=c;this._techniqueRepository=b;this._backgroundIsGrid=!1;this._blackTex=
this._backgroundColor=this._backgroundTexture=null;this._vectorTileHelper=new Q.VectorTileRendererHelper3D;this._maxAnisotropy=this._rctx.parameters.maxMaxAnisotropy;this._vaoQuad=z.createQuadVAO(this._rctx,T.Pos2Tex);this._blackTex=new w(z.createColorTexture(this._rctx,[0,0,0,1]));this._fboPool=new S.FBOPool(this._rctx)}var h=q.prototype;h.dispose=function(){this._fboPool&&(this._fboPool.clear(),this._fboPool=null);this._vaoQuad=m.disposeMaybe(this._vaoQuad);this._backgroundTexture=m.releaseMaybe(this._backgroundTexture);
this._blackTex=m.releaseMaybe(this._blackTex);this._blendLayersTechnique=m.disposeMaybe(this._blendLayersTechnique);this._applyOpacityTechnique=m.disposeMaybe(this._applyOpacityTechnique);this._vectorTileHelper=m.disposeMaybe(this._vectorTileHelper)};h.updateTileTexture=function(a,c){var b=a.layerInfo[1];for(var d of b)d.pendingUpdates&=-1;if(a.renderData){for(var e=a.surface,g=e.baseOpacity,k=d=0,f=this.tileSize,l=!1,t=e.view.pixelRatio,r=b.length,n=0;n<b.length&&!l;n++){const v=e.layerViewByIndex(n,
1),p=v.fullOpacity;C[n]=p;P.isBaseLayer(v.layer)&&r>=b.length&&(r=n);if(0===p)continue;++k;const E=B(a,n,D);E&&(x.isVectorTileLayerView(v)?f=Math.max(f,this.tileSize*t):1===g&&1===p&&(v.isOpaque||this._dataToTexture(E)&&E.sourceLayerInfo.data.descriptor.isOpaque)&&(l=!0),++d)}this._cleanupFBOPool(t,b.length);g=f;f=M.nextHighestPowerOfTwo(g);b=f*f;e=g*g;b===e?f=g:(g=f/2,f=b-e<e-g*g?f:g);b=f/this.tileSize;--n;0===d?this._useBackgroundTexture(a,k):1===d&&(l||this._backgroundIsGrid||m.isSome(this._backgroundColor))&&
this._useLayerTexture(a,n,r,C[n])||this._composeMapLayers(a,c,n,r,l,C,f,b)}};h._useBackgroundTexture=function(a,c){let b=0;if(a.surface.view.layerViewManager.updating||0<c)b=5E3;this._backgroundTexture&&m.isNone(a.renderData.textureReference)&&(b=0);a.renderData.setTextureReference(m.isSome(this._backgroundTexture)?new A.TextureReference(this._backgroundTexture,0,K,a.surface.baseOpacity,1,1,!1):null,b)};h._useLayerTexture=function(a,c,b,d){var e=c<b;b=e?1:a.surface.baseOpacity;e=e?a.surface.baseOpacity:
1;c=B(a,c,D);return this._dataToTexture(c)?(a.renderData.setTextureReference(new A.TextureReference(c.sourceLayerInfo.data,0,c,b,d,e,!0)),!0):!1};h._composeMapLayers=function(a,c,b,d,e,g,k,f){const l=this._rctx,t=this._fboPool.acquire(k);l.bindFramebuffer(t);l.setViewport(0,0,k,k);l.setClearColor(0,0,0,0);l.setClearDepth(1);l.clearSafe(16640);let r=!1;!e&&m.isSome(this._backgroundTexture)&&this._drawRasterData(this.blendLayersTechnique,this._backgroundTexture.texture,1,H.ZEROS);e=a.surface.baseOpacity;
let n=!1,v=9987;for(;0<=b;b--){const p=B(a,b,D);p&&(b<d&&1>e&&!n&&(this._drawRasterData(this.applyOpacityTechnique,this._blackTex.texture,1,H.ZEROS,e),n=!0),0!==g[b]&&(x.isVectorTileRenderInfo(p)?r=this._drawVectorData(this.blendLayersTechnique,p,f,g[b],k,t,r):x.isImageryTileRenderInfo(p)?(this._drawImageryTileData(p,g[b]),this.hasNearestInterpolation(p)&&(v=9728)):this._dataToTexture(p)&&this._drawRasterData(this.blendLayersTechnique,p.sourceLayerInfo.data.texture,p.scale,p.offset,g[b])))}d=a.renderData.ensureTexture(k,
()=>this._buildTexture(k,v));g=l.bindTexture(d.texture,u.TEXTURE_UNIT_FOR_UPDATES);f=d.descriptor;l.gl.copyTexImage2D(l.gl.TEXTURE_2D,0,f.pixelFormat,0,0,f.width,f.height,0);d.generateMipmap();l.bindTexture(g,u.TEXTURE_UNIT_FOR_UPDATES);l.bindFramebuffer(null);this._fboPool.release(t);a.renderData.setTextureReference(new A.TextureReference(d,c,K,n?1:e,1,1,!1))};h._drawQuad=function(a){this._rctx.bindVAO(this._vaoQuad);a.assertCompatibleVertexAttributeLocations(this._vaoQuad);this._rctx.drawArrays(5,
0,U.vertexCount(this._vaoQuad,"geometry"))};h._drawRasterData=function(a,c,b,d,e=1){if(!m.isNone(c)){var g=this._rctx,k=a.program;a.bindPipelineState(g);g.useProgram(k);k.bindTexture(c,"tex");k.setUniform1f("scale",b);k.setUniform2f("offset",d[0],d[1]);k.setUniform1f("opacity",e);this._drawQuad(k)}};h.hasNearestInterpolation=function(a){a=a.sourceLayerInfo.data;return a.source?"nearest"===a.interpolation:!1};h._drawImageryTileData=function(a,c=1){const b=a.sourceLayerInfo.data;if(b.source){a.tile.surface.layerViewByIndex(a.layerIndex,
1).ensureSymbolizerParameters(b);var d=this._getRasterColorizerTechnique(b),e=this._rctx,g=d.program;d.bindPipelineState(e);e.useProgram(g);if(b.bind(e)){b.opacity=c;b.scale=a.scale;b.offset=a.offset;var {names:k,textures:f}=b.getTextures();k.forEach((l,t)=>g.bindTexture(f[t],l));d.bindPass(b.getUniforms());this._drawQuad(g);e.bindVAO()}}};h._getRasterColorizerTechnique=function(a){const c=a.symbolizerParameters,b=["stretch","lut","hillshade"].indexOf(c.type);m.isNone(this._rasterColorizerConfig)&&
(this._rasterColorizerConfig=new J.RasterColorizerTechniqueConfiguration,this._rctx.gl.getExtension("WEBGL_color_buffer_float"),this._rctx.gl.getExtension("OES_texture_float"));this._rasterColorizerConfig.colorizerType=b;this._rasterColorizerConfig.applyColormap=!!c.colormap;this._rasterColorizerConfig.stretchType=a.hasStretchTypeNone()?0:1;return this._rasterColorizerTechnique=this._techniqueRepository.releaseAndAcquire(J.RasterColorizerTechnique,this._rasterColorizerConfig,this._rasterColorizerTechnique)};
h._drawVectorData=function(a,c,b,d,e,g,k){const f=this._rctx,l=c.sourceLayerInfo.data,t=c.tile.surface.layerViewByIndex(c.layerIndex,1);let r;a.bindPipelineState(f);1>d?(r=this._fboPool.acquire(e),f.bindFramebuffer(r),f.setClearColor(1,1,1,0),f.clearSafe(16640)):k&&f.clearSafe(256);this._vectorTileHelper.render(f,c.sourceLod,l,t.painter,t.layer.styleRepository,t.schemaHelper,Math.round(1/c.scale),c.offset,this.tileSize,b);return m.isSome(r)?(f.bindFramebuffer(g),this._drawRasterData(a,r.colorTexture,
1,[0,0],d),this._fboPool.release(r),k):!0};h._dataToTexture=function(a){x.isRasterTileRenderInfo(a)&&this._rasterDataToTexture(a);return x.isTextureTileRenderInfo(a)};h._rasterDataToTexture=function(a){const c=a.sourceLayerInfo;c.data=this._buildTexture(c.data);a.tile.setMemoryDirty()};h.setBackground=function(a,c){m.releaseMaybe(this._backgroundTexture);this._backgroundIsGrid=c;a instanceof HTMLImageElement?(this._backgroundTexture=this._buildTexture(a),this._backgroundColor=null):(this._backgroundTexture=
new w(z.createColorTexture(this._rctx,O.fromValues(a[0]||0,a[1]||0,a[2]||0,1))),this._backgroundColor=N.fromValues(a[0]||0,a[1]||0,a[2]||0))};h._buildTexture=function(a,c=9987){if(m.isNone(a))return null;const b={target:3553,pixelFormat:6408,dataType:5121,wrapMode:33071,samplingMode:c,maxAnisotropy:this._maxAnisotropy,flipped:!0,hasMipmap:!0};c=this._rctx;let d;if("number"===typeof a)b.width=b.height=a,d=new w(new u(c,b));else if(a instanceof R.ImageWithType)b.isOpaque=a.isOpaque,d=new w(new u(c,
b,a.image)),a.release();else try{d=new w(new u(c,b,a))}catch(e){d=new w(z.createEmptyTexture(c)),console.warn("TileRenderer: failed to execute 'texImage2D', cross-origin image may not be loaded.")}a=c.bindTexture(d.texture,u.TEXTURE_UNIT_FOR_UPDATES);d.generateMipmap();c.bindTexture(a,u.TEXTURE_UNIT_FOR_UPDATES);return d};h._cleanupFBOPool=function(a,c){if(a!==this._lastPixelRatio||c!==this._lastNumLayers)this._fboPool.clear(),this._lastPixelRatio=a,this._lastNumLayers=c};L._createClass(q,[{key:"blendLayersTechnique",
get:function(){if(m.isNone(this._blendLayersTechnique)){const a=new y.BlendLayersTechniqueConfiguration;a.mode=2;this._blendLayersTechnique=this._techniqueRepository.acquire(y.BlendLayersTechnique,a)}return this._blendLayersTechnique}},{key:"applyOpacityTechnique",get:function(){if(m.isNone(this._applyOpacityTechnique)){const a=new y.BlendLayersTechniqueConfiguration;a.mode=1;this._applyOpacityTechnique=this._techniqueRepository.acquire(y.BlendLayersTechnique,a)}return this._applyOpacityTechnique}},
{key:"backgroundIsGrid",get:function(){return this._backgroundIsGrid}},{key:"backgroundColor",get:function(){return this._backgroundColor}},{key:"test",get:function(){return{backgroundTexture:this._backgroundTexture}}}]);return q}();const C=[],D={tile:null,sourceLayerInfo:null,sourceLod:null,offset:[0,0],scale:1,layerIndex:0},K={offset:[0,0],scale:1};F.TileRenderer=I;Object.defineProperty(F,"__esModule",{value:!0})});