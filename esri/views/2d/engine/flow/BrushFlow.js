// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define(["../../../../chunks/_rollupPluginBabelHelpers","../../../../core/maybe","../webgl/brushes/WGLBrush"],function(n,p,f){f=function(l){function g(){return l.apply(this,arguments)||this}n._inheritsLoose(g,l);var h=g.prototype;h.dispose=function(){};h.prepareState=function(a){({context:a}=a);a.setColorMask(!0,!0,!0,!0);a.setStencilFunction(514,0,255)};h.draw=function(a,k){const {context:d}=a,{displayData:b}=k;if(!p.isNone(b)&&("loaded"===b.state.name&&b.prepareForRendering(d,e,q),"attached"===b.state.name)){var m=
b.state.resources,c=a.painter.materialManager.getProgram(a,{vsPath:"raster/flow",fsPath:"raster/flow",attributes:e});d.setFaceCullingEnabled(!1);d.setBlendingEnabled(!0);d.setBlendFunctionSeparate(1,771,1,1);d.useProgram(c);c.setUniform1f("u_time",a.time/1E3);c.setUniform1f("u_fadeDuration",b.flowStyle.renderSettings.fadeDuration);c.setUniform1f("u_lineSpeed",b.flowStyle.renderSettings.lineSpeed);c.setUniformMatrix3fv("u_dvsMat3",k.transforms.dvs);c.setUniformMatrix3fv("u_displayViewMat3",a.state.displayViewMat3);
c.setUniform4f("u_lineColor",b.flowStyle.renderSettings.lineColor[0]*a.globalOpacity,b.flowStyle.renderSettings.lineColor[1]*a.globalOpacity,b.flowStyle.renderSettings.lineColor[2]*a.globalOpacity,b.flowStyle.renderSettings.lineColor[3]*a.globalOpacity);c.setUniform1f("u_lineHalfWidth",b.flowStyle.renderSettings.lineRenderWidth/2);d.bindVAO(m.vertexArray);d.drawElements(4,m.indexBuffer.size,5125,0);b.flowStyle.animated&&k.requestRender()}};return g}(f);const e=new Map;e.set("a_positionAndSide",0);
e.set("a_timeInfo",1);e.set("a_extrude",2);const q={geometry:[{name:"a_positionAndSide",count:3,type:5126,offset:0,stride:32,normalized:!1},{name:"a_timeInfo",count:3,type:5126,offset:12,stride:32,normalized:!1},{name:"a_extrude",count:2,type:5126,offset:24,stride:32,normalized:!1}]};return f});