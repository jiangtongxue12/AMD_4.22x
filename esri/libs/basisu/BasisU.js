// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define(["require","exports","../../assets","../../core/maybe"],function(e,d,f,g){let c;d.getBasisTranscoder=function(){if(g.isNone(c)){const h=a=>f.getAssetUrl(`esri/libs/basisu/${a}`);c=(new Promise((a,b)=>e(["../../chunks/basis_transcoder"],a,b))).then(a=>a.basis_transcoder).then(({default:a})=>a({locateFile:h}).then(b=>{b.initializeBasis();delete b.then;return b}))}return c};Object.defineProperty(d,"__esModule",{value:!0})});