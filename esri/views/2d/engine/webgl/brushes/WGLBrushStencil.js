// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define("../../../../../chunks/_rollupPluginBabelHelpers ../../../../../chunks/vec4f32 ../../../../webgl/BufferObject ../../../../webgl/FramebufferObject ../../../../../core/has ../../../../webgl/checkWebGLError ../../../../webgl/enums ../../../../../chunks/builtins ../../../../webgl/programUtils ../../../../webgl/Texture ../../../../webgl/VertexArrayObject ./WGLBrush ../shaders/BackgroundPrograms".split(" "),function(h,k,l,q,r,t,u,v,m,w,n,p,f){return function(g){function d(){var a=g.apply(this,arguments)||
this;a._color=k.fromValues(1,0,0,1);a._initialized=!1;return a}h._inheritsLoose(d,g);var c=d.prototype;c.dispose=function(){this._solidProgram&&(this._solidProgram.dispose(),this._solidProgram=null);this._solidVertexArrayObject&&(this._solidVertexArrayObject.dispose(),this._solidVertexArrayObject=null)};c.prepareState=function({context:a},b){a.setDepthWriteEnabled(!1);a.setDepthTestEnabled(!1);a.setStencilTestEnabled(!0);a.setBlendingEnabled(!1);a.setColorMask(!1,!1,!1,!1);a.setStencilOp(7680,7680,
7681);a.setStencilWriteMask(255);a.setStencilFunctionSeparate(1032,516,b.stencilRef,255)};c.draw=function(a,b){({context:a}=a);this._initialized||this._initialize(a);a.bindVAO(this._solidVertexArrayObject);a.useProgram(this._solidProgram);this._solidProgram.setUniformMatrix3fv("u_dvsMat3",b.transforms.dvs);this._solidProgram.setUniform2fv("u_coord_range",[b.rangeX,b.rangeY]);this._solidProgram.setUniform1f("u_depth",0);this._solidProgram.setUniform4fv("u_color",this._color);a.drawArrays(5,0,4);a.bindVAO()};
c._initialize=function(a){if(this._initialized)return!0;const b=m.createProgram(a,f.background);if(!b)return!1;var e=new Int8Array([0,0,1,0,0,1,1,1]);e=l.createVertex(a,35044,e);a=new n(a,f.background.attributes,{geometry:[{name:"a_pos",count:2,type:5120,offset:0,stride:2,normalized:!1,divisor:0}]},{geometry:e});this._solidProgram=b;this._solidVertexArrayObject=a;return this._initialized=!0};return d}(p)});