// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define(["exports"],function(b){function d(a,c,e){return Math.round(Math.max(Math.min(a,e),c))}const f=new Float32Array(1),g=new Uint32Array(f.buffer);b.i16=function(a){return d(a,-32768,32767)};b.i1616to32=function(a,c){return 65535&a|c<<16};b.i32=function(a){return d(a,-2147483648,2147483647)};b.i8=function(a){return d(a,-128,127)};b.i8816to32=function(a,c,e){return a&255|(c&255)<<8|e<<16};b.i8888to32=function(a,c,e,h){return a&255|(c&255)<<8|(e&255)<<16|h<<24};b.numTo32=function(a){return a|0};
b.toFloat32=function(a){g[0]=a;return f[0]};b.toUint32=function(a){f[0]=a;return g[0]};b.u16=function(a){return d(a,0,65535)};b.u32=function(a){return d(a,0,4294967295)};b.u32to4Xu8=function(a){return[a&255,(a&65280)>>>8,(a&16711680)>>>16,(a&4278190080)>>>24]};b.u4u4to8=function(a,c){return 15&a|(15&c)<<4};b.u8=function(a){return d(a,0,255)};Object.defineProperty(b,"__esModule",{value:!0})});