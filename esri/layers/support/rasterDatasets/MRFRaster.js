// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../geometry ../../../core/Error ../../../core/maybe ../../../core/accessorSupport/decorators/property ../../../core/arrayUtils ../../../core/has ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/subclass ../PixelBlock ../RasterInfo ../RasterStorageInfo ./BaseRaster ./pamParser ./xmlUtilities ../rasterFormats/utils ../rasterFunctions/pixelUtils ../../../geometry/SpatialReference ../../../geometry/Extent ../../../geometry/Point".split(" "),
function(B,C,z,A,D,E,T,U,V,J,K,L,M,N,G,r,O,P,Q,R,H){const u=new Map;u.set("Int8","s8");u.set("UInt8","u8");u.set("Int16","s16");u.set("UInt16","u16");u.set("Int32","s32");u.set("UInt32","u32");u.set("Float32","f32");u.set("Float64","f32");u.set("Double64","f32");const v=new Map;v.set("none",{blobExtension:".til",isOneSegment:!0,decoderFormat:"bip"});v.set("lerc",{blobExtension:".lrc",isOneSegment:!1,decoderFormat:"lerc"});v.set("deflate",{blobExtension:".pzp",isOneSegment:!0,decoderFormat:"deflate"});
v.set("jpeg",{blobExtension:".pjg",isOneSegment:!0,decoderFormat:"jpg"});z=function(I){function F(){var d=I.apply(this,arguments)||this;d._files=null;d._storageIndex=null;d.datasetFormat="MRF";return d}B._inheritsLoose(F,I);var y=F.prototype;y.open=function(){var d=B._asyncToGenerator(function*(a){var c;yield this.init();this.datasetName=this.url.slice(this.url.lastIndexOf("/")+1);var e=a?D.unwrap(a.signal):null,b=yield this.request(this.url,{responseType:"xml",signal:e});const {rasterInfo:g,files:l}=
this._parseHeader(b.data);if(-1===(null==(c=this.ioConfig.skipExtensions)?void 0:c.indexOf("aux.xml"))&&(a=yield this._fetchAuxiliaryData(a),null!=a)){var p;g.statistics=null!=(p=a.statistics)?p:g.statistics;(g.histograms=a.histograms)&&!D.isSome(g.statistics)&&(g.statistics=P.estimateStatisticsFromHistograms(a.histograms))}this._set("rasterInfo",g);this._files=l;e=yield this.request(l.index,{responseType:"array-buffer",signal:e});this._storageIndex=this._parseIndex(e.data);const {blockWidth:f,blockHeight:t}=
this.rasterInfo.storageInfo;e=this.rasterInfo.storageInfo.pyramidScalingFactor;const {width:q,height:h}=this.rasterInfo;p=[];a=this._getBandSegmentCount();c=0;for(b=-1;c<this._storageIndex.length;){b++;const m=Math.ceil(q/f/e**b)-1,n=Math.ceil(h/t/e**b)-1;c+=1*m*n*a*4;p.push({maxRow:n,maxCol:m,minCol:0,minRow:0})}this.rasterInfo.storageInfo.blockBoundary=p;0<b&&(this.rasterInfo.storageInfo.firstPyramidLevel=1,this.rasterInfo.storageInfo.maximumPyramidLevel=b);this.updateTileInfo()});return function(a){return d.apply(this,
arguments)}}();y.fetchRawTile=function(){var d=B._asyncToGenerator(function*(a,c,e,b={}){const {blockWidth:g,blockHeight:l,blockBoundary:p}=this.rasterInfo.storageInfo;var f=p[a];if(!f||f.maxRow<c||f.maxCol<e||f.minRow>c||f.minCol>e)return null;const {bandCount:t,pixelType:q}=this.rasterInfo,{ranges:h,actualTileWidth:m,actualTileHeight:n}=this._getTileLocation(a,c,e);if(!h||0===h.length)return null;if(0===h[0].from&&0===h[0].to)return a=new Uint8Array(g*l),new K({width:g,height:l,pixels:null,mask:a,
validPixelCount:0});({bandIds:c}=this.ioConfig);e=this._getBandSegmentCount();f=[];for(a=a=0;a<e;a++)(!c||-1<c.indexOf[a])&&f.push(this.request(this._files.data,{range:{from:h[a].from,to:h[a].to},responseType:"array-buffer",signal:b.signal}));b=yield Promise.all(f);a=b.map(k=>k.data.byteLength).reduce((k,w)=>k+w);f=new Uint8Array(a);let x=0;for(a=0;a<e;a++)f.set(new Uint8Array(b[a].data),x),x+=b[a].data.byteLength;a=v.get(this.rasterInfo.storageInfo.compression).decoderFormat;c=yield this.decodePixelBlock(f.buffer,
{width:g,height:l,format:a,planes:(null==c?void 0:c.length)||t,pixelType:q});if(D.isSome(this.rasterInfo.noDataValue)&&"lerc"!==a&&!c.mask&&(b=this.rasterInfo.noDataValue[0],null!=b)){e=c.width*c.height;f=new Uint8Array(e);if(1E24<Math.abs(b))for(a=0;a<e;a++)1E-6<Math.abs((c.pixels[0][a]-b)/b)&&(f[a]=1);else for(a=0;a<e;a++)c.pixels[0][a]!==b&&(f[a]=1);c.mask=f}e=b=0;if(m!==g||n!==l)if(f=c.mask)for(a=0;a<l;a++)for(e=a*g,b=a<n?m:0;b<g;b++)f[e+b]=0;else for(f=new Uint8Array(g*l),c.mask=f,a=0;a<n;a++)for(e=
a*g,b=0;b<m;b++)f[e+b]=1;return c});return function(a,c,e){return d.apply(this,arguments)}}();y._parseIndex=function(d){if(0<d.byteLength%16)throw"invalid array buffer must be multiples of 16";let a,c,e,b,g;if(O.isPlatformLittleEndian){a=new Uint8Array(d);e=new ArrayBuffer(d.byteLength);c=new Uint8Array(e);for(b=0;b<d.byteLength/4;b++)for(g=0;4>g;g++)c[4*b+g]=a[4*b+3-g];d=new Uint32Array(e)}else d=new Uint32Array(d);return d};y._getBandSegmentCount=function(){return v.get(this.rasterInfo.storageInfo.compression).isOneSegment?
1:this.rasterInfo.bandCount};y._getTileLocation=function(d,a,c){const {blockWidth:e,blockHeight:b,pyramidScalingFactor:g}=this.rasterInfo.storageInfo,{width:l,height:p}=this.rasterInfo,f=this._getBandSegmentCount();let t,q;var h,m=0;let n=0;for(h=0;h<d;h++)n=g**h,t=Math.ceil(l/e/n),q=Math.ceil(p/b/n),m+=t*q;n=g**d;t=Math.ceil(l/e/n);q=Math.ceil(p/b/n);m=4*(m+(a*t+c))*f;d=this._storageIndex.subarray(m,m+4*f);m=h=0;const x=[];for(let k=0;k<f;k++)h=d[4*k]*2**32+d[4*k+1],m=h+d[4*k+2]*2**32+d[4*k+3],x.push({from:h,
to:m});return{ranges:x,actualTileWidth:c<t-1?e:Math.ceil(l/n)-e*(t-1),actualTileHeight:a<q-1?b:Math.ceil(p/n)-b*(q-1)}};y._parseHeader=function(d){var a=r.getElement(d,"MRF_META/Raster");if(!a)throw new A("mrf:open","not a valid MRF format");var c=r.getElement(a,"Size"),e=parseInt(c.getAttribute("x"),10),b=parseInt(c.getAttribute("y"),10);const g=parseInt(c.getAttribute("c"),10);c=(r.getElementValue(a,"Compression")||"none").toLowerCase();if(!v.has(c))throw new A("mrf:open","currently does not support compression "+
c);var l=r.getElementValue(a,"DataType")||"UInt8";const p=u.get(l);if(null==p)throw new A("mrf:open","currently does not support pixel type "+l);var f=r.getElement(a,"PageSize");l=parseInt(f.getAttribute("x"),10);f=parseInt(f.getAttribute("y"),10);a=r.getElement(a,"DataValues");let t;a&&(a=a.getAttribute("NoData"),null!=a&&(t=a.trim().split(" ").map(S=>parseFloat(S))));if(r.getElement(d,"MRF_META/CachedSource"))throw new A("mrf:open","currently does not support MRF referencing other data files");
var q=r.getElement(d,"MRF_META/GeoTags"),h=r.getElement(q,"BoundingBox");if(null==h)throw new A("mrf:open","missing node MRF_META/GeoTags/BoundingBox");a=parseFloat(h.getAttribute("minx"));const m=parseFloat(h.getAttribute("miny")),n=parseFloat(h.getAttribute("maxx")),x=parseFloat(h.getAttribute("maxy"));var k=r.getElementValue(q,"Projection")||"";q=r.getElementValue(d,"datafile");h=r.getElementValue(d,"IndexFile");let w;"LOCAL_CS[]"!==k&&(k.toLowerCase().startsWith("epsg:")?(k=Number(k.slice(5)),
isNaN(k)||0===k||(w=new Q({wkid:k}))):w=G.parseSpatialReference(k));k=new R(a,m,n,x);k.spatialReference=w;d=r.getElement(d,"MRF_META/Rsets");d=parseInt(d&&d.getAttribute("scale")||"2",10);d=new M({origin:new H({x:k.xmin,y:k.ymax,spatialReference:w}),blockWidth:l,blockHeight:f,pyramidBlockWidth:l,pyramidBlockHeight:f,compression:c,pyramidScalingFactor:d});l=new H({x:(n-a)/e,y:(x-m)/b,spatialReference:w});e=new L({width:e,height:b,extent:k,spatialReference:w,bandCount:g,pixelType:p,pixelSize:l,noDataValue:t,
storageInfo:d});b={mrf:this.url,index:h||this.url.replace(".mrf",".idx"),data:q||this.url.replace(".mrf",v.get(c).blobExtension)};return{rasterInfo:e,files:b}};y._fetchAuxiliaryData=function(){var d=B._asyncToGenerator(function*(a){try{const {data:c}=yield this.request(this.url+".aux.xml",{responseType:"xml",signal:null==a?void 0:a.signal});return G.parsePAMInfo(c)}catch{return null}});return function(a){return d.apply(this,arguments)}}();return F}(N);C.__decorate([E.property()],z.prototype,"_files",
void 0);C.__decorate([E.property()],z.prototype,"_storageIndex",void 0);C.__decorate([E.property({type:String,json:{write:!0}})],z.prototype,"datasetFormat",void 0);return z=C.__decorate([J.subclass("esri.layers.support.rasterIO.MRFRaster")],z)});