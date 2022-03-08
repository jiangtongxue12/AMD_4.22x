// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define(["exports","./index","./node","./asset","./scene"],function(g,h,l,m,n){let p=function(){function c(d,b){this.file={type:"model/gltf-binary",data:d};this.origin=b}var f=c.prototype;f.buffer=function(){return Promise.resolve(this.file)};f.download=function(d){return new Promise(()=>{const b=new Blob([this.file.data],{type:this.file.type});let a=d;a||(a="model.glb");"glb"!==a.split(".").pop()&&(a+=".glb");if(window.navigator.msSaveOrOpenBlob)window.navigator.msSaveOrOpenBlob(b,a);else{const e=
document.createElement("a"),k=URL.createObjectURL(b);e.href=k;e.download=a;document.body.appendChild(e);e.click();setTimeout(function(){document.body.removeChild(e);window.URL.revokeObjectURL(k)},0)}})};return c}();g.toBinaryGLTF=function(c,f){const d=new m.Asset,b=new n.Scene;d.addScene(b);c=new l.Node(c);b.addNode(c);return h.exportGLB(d,f).then(a=>new p(a[h.MODEL_NAME_GLB],a.origin))};Object.defineProperty(g,"__esModule",{value:!0})});