// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers","./VTLMaterial"],function(d,f,a){a=function(e){function b(g){return e.call(this,g)||this}f._inheritsLoose(b,e);var c=b.prototype;c.geometryInfo=function(){return b.GEOMETRY_LAYOUT};c.opacityInfo=function(){return null};c.attributes=function(){return b.ATTRIBUTES};c.attributesInfo=function(){return b.ATTRIBUTES_INFO};return b}(a.VTLMaterial);a.ATTRIBUTES="line-blur line-color line-gap-width line-offset line-opacity line-width line-pattern line-dasharray".split(" ");
a.GEOMETRY_LAYOUT=[{name:"a_pos",count:2,type:5122,offset:0,stride:16,normalized:!1,divisor:0},{name:"a_extrude_offset",count:4,type:5120,offset:4,stride:16,normalized:!1,divisor:0},{name:"a_dir_normal",count:4,type:5120,offset:8,stride:16,normalized:!1,divisor:0},{name:"a_accumulatedDistance",count:2,type:5123,offset:12,stride:16,normalized:!1,divisor:0}];a.ATTRIBUTES_INFO={"line-width":{name:"width",type:1,precisionFactor:2},"line-gap-width":{name:"gap_width",type:1,precisionFactor:2},"line-offset":{name:"offset",
type:0,precisionFactor:2},"line-color":{name:"color",type:10},"line-opacity":{name:"opacity",type:1,precisionFactor:100},"line-blur":{name:"blur",type:1,precisionFactor:4},"line-pattern":{name:"tlbr",type:12,isOptional:!0},"line-dasharray":{name:"tlbr",type:11,isOptional:!0}};d.VTLLineMaterial=a;Object.defineProperty(d,"__esModule",{value:!0})});