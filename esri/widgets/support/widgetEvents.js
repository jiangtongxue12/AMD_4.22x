// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define(["exports"],function(b){const c="blur change click dblclick focus input keydown keypress keyup load mousedown mouseenter mouseleave mousemove mouseout mouseover mouseup mousewheel scroll submit touchcancel touchend touchmove touchstart".split(" ");b.domEvents=function(a){const d={};c.forEach(e=>{d[`on${e}`]=function(f){a.emit.call(a,e,f)}});return d};b.isVNodeEvent=function(a){return!!c[a]};Object.defineProperty(b,"__esModule",{value:!0})});