// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define(["exports","../../../support/buffer/InterleavedLayout","./bufferWriterUtils"],function(b,c,f){const g=c.newLayout().vec3f("position"),h=c.newLayout().vec3f("position").vec2f("uv0");c=c.newLayout().vec3f("position").vec4u8("color");let n=function(){function e(a){this.vertexBufferLayout=a}var d=e.prototype;d.allocate=function(a){return this.vertexBufferLayout.createBuffer(a)};d.elementCount=function(a){return a.indices.get("position").length};d.write=function(a,k,l,m){f.writeDefaultAttributes(k,
this.vertexBufferLayout,a.transformation,a.invTranspTransformation,l,m)};return e}();b.DefaultBufferWriter=n;b.PositionColorLayout=c;b.PositionLayout=g;b.PositionUVLayout=h;Object.defineProperty(b,"__esModule",{value:!0})});