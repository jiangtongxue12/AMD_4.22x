// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../core/maybe ../../../../libs/basisu/BasisU ../../../webgl/Texture ../../../webgl/Util".split(" "),function(k,p,l,A,B,C){function q(){return r.apply(this,arguments)}function r(){r=p._asyncToGenerator(function*(){l.isNone(n)&&(n=A.getBasisTranscoder(),e=yield n);return n});return r.apply(this,arguments)}function v(a,c,d,b,f){c=C.getBytesPerElementFormat(c?37496:37492);return Math.ceil(d*b*c*(f&&1<a?(4**a-1)/(3*4**(a-1)):1))}function w(a){return 1<=
a.getNumImages()&&!a.isUASTC()}function x(a){return 1<=a.getFaces()&&a.isETC1S()}function t(){t=p._asyncToGenerator(function*(a,c,d){l.isNone(e)&&(e=yield q());const b=new e.BasisFile(new Uint8Array(d));if(!w(b))return null;b.startTranscoding();a=y(a,c,b.getNumLevels(0),b.getHasAlpha(),b.getImageWidth(0,0),b.getImageHeight(0,0),(f,g)=>b.getImageTranscodedSizeInBytes(0,f,g),(f,g,h)=>b.transcodeImage(h,0,f,g,0,0));b.close();b.delete();return a});return t.apply(this,arguments)}function u(){u=p._asyncToGenerator(function*(a,
c,d){l.isNone(e)&&(e=yield q());const b=new e.KTX2File(new Uint8Array(d));if(!x(b))return null;b.startTranscoding();a=y(a,c,b.getLevels(),b.getHasAlpha(),b.getWidth(),b.getHeight(),(f,g)=>b.getImageTranscodedSizeInBytes(f,0,0,g),(f,g,h)=>b.transcodeImage(h,f,0,0,g,0,-1,-1));b.close();b.delete();return a});return u.apply(this,arguments)}function y(a,c,d,b,f,g,h,D){const {compressedTextureETC:E,compressedTextureS3TC:F}=a.capabilities,[z,G]=E?b?[1,37496]:[0,37492]:F?b?[3,33779]:[2,33776]:[13,6408];b=
c.hasMipmap?d:Math.min(1,d);d=[];for(let m=0;m<b;m++)d.push(new Uint8Array(h(m,z))),D(m,z,d[m]);h=1<d.length;return new B(a,{...c,samplingMode:h?9987:9729,hasMipmap:h,internalFormat:G,width:f,height:g},{type:"compressed",levels:d})}let e=null,n=null;k.createTextureBasis=function(a,c,d){return t.apply(this,arguments)};k.createTextureKTX2=function(a,c,d){return u.apply(this,arguments)};k.estimateMemoryBasis=function(a,c){if(l.isNone(e))return a.byteLength;a=new e.BasisFile(new Uint8Array(a));c=w(a)?
v(a.getNumLevels(0),a.getHasAlpha(),a.getImageWidth(0,0),a.getImageHeight(0,0),c):0;a.close();a.delete();return c};k.estimateMemoryKTX2=function(a,c){if(l.isNone(e))return a.byteLength;a=new e.KTX2File(new Uint8Array(a));c=x(a)?v(a.getLevels(),a.getHasAlpha(),a.getWidth(),a.getHeight(),c):0;a.close();a.delete();return c};k.loadBasis=q;Object.defineProperty(k,"__esModule",{value:!0})});