// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define(["exports", "../../../../../core/maybe", "../../../../../chunks/vec3", "../../../../../chunks/vec3f64", "../shaderModules/interfaces"], function (f, l, m, g, e) {
  function h(a, c, b, d) {
    c.slicePlaneEnabled && (l.isSome(b) ? (d ? (m.subtract(k, b.origin, d),
      a.setUniform3fv("slicePlaneOrigin", k)) :
      a.setUniform3fv("slicePlaneOrigin", b.origin),
      a.setUniform3fv("slicePlaneBasis1", b.basis1),
      a.setUniform3fv("slicePlaneBasis2", b.basis2),
      b.cut ? a.setUniform1f("isCut", b.cut) : a.setUniform1f("isCut", false),
      b.num && a.setUniform1f("pNum", b.num),
      b.polygon && a.setUniform3fv("slicePoint1", [b.polygon[0].x, b.polygon[0].y, b.polygon[0].z]),
      b.polygon && a.setUniform3fv("slicePoint2", [b.polygon[1].x, b.polygon[1].y, b.polygon[1].z]),
      b.polygon && a.setUniform3fv("slicePoint3", [b.polygon[2].x, b.polygon[2].y, b.polygon[2].z]),
      b.polygon && a.setUniform3fv("slicePoint4", [b.polygon[3].x, b.polygon[3].y, b.polygon[3].z]),
      b.polygon && a.setUniform3fv("slicePoint5", [b.polygon[4].x, b.polygon[4].y, b.polygon[4].z]),
      b.polygon && a.setUniform3fv("slicePoint6", [b.polygon[5].x, b.polygon[5].y, b.polygon[5].z]),
      b.polygon && a.setUniform3fv("slicePoint7", [b.polygon[6].x, b.polygon[6].y, b.polygon[6].z]),
      b.polygon && a.setUniform3fv("slicePoint8", [b.polygon[7].x, b.polygon[7].y, b.polygon[7].z]),
      b.polygon && a.setUniform3fv("slicePoint9", [b.polygon[8].x, b.polygon[8].y, b.polygon[8].z]),
      b.polygon && a.setUniform3fv("slicePoint10", [b.polygon[9].x, b.polygon[9].y, b.polygon[9].z])
    ) : (a.setUniform3fv("slicePlaneBasis1", g.ZEROS),
      a.setUniform3fv("slicePlaneBasis2", g.ZEROS),
      a.setUniform3fv("slicePlaneOrigin", g.ZEROS),
      a.setUniform1f("isCut", false),
      a.setUniform1f("pNum", 0.0),
      a.setUniform3fv("slicePoint1", g.ZEROS),
      a.setUniform3fv("slicePoint2", g.ZEROS),
      a.setUniform3fv("slicePoint3", g.ZEROS),
      a.setUniform3fv("slicePoint4", g.ZEROS),
      a.setUniform3fv("slicePoint5", g.ZEROS),
      a.setUniform3fv("slicePoint6", g.ZEROS),
      a.setUniform3fv("slicePoint7", g.ZEROS),
      a.setUniform3fv("slicePoint8", g.ZEROS),
      a.setUniform3fv("slicePoint9", g.ZEROS),
      a.setUniform3fv("slicePoint10", g.ZEROS)
      ))
  } const k = g.create(); f.Slice = function (a, c) {
    if (c.slicePlaneEnabled) {
      a.extensions.add("GL_OES_standard_derivatives");
      c.sliceEnabledForVertexPrograms && (a.vertex.uniforms.add("slicePlaneOrigin", "vec3"),
        a.vertex.uniforms.add("slicePlaneBasis1", "vec3"),
        a.vertex.uniforms.add("slicePlaneBasis2", "vec3"),
        a.vertex.uniforms.add("isCut", "bool"),
        a.vertex.uniforms.add("pNum", "float"),
        a.vertex.uniforms.add("slicePoint1", "vec3"),
        a.vertex.uniforms.add("slicePoint2", "vec3"),
        a.vertex.uniforms.add("slicePoint3", "vec3"),
        a.vertex.uniforms.add("slicePoint4", "vec3"),
        a.vertex.uniforms.add("slicePoint5", "vec3"),
        a.vertex.uniforms.add("slicePoint6", "vec3"),
        a.vertex.uniforms.add("slicePoint7", "vec3"),
        a.vertex.uniforms.add("slicePoint8", "vec3"),
        a.vertex.uniforms.add("slicePoint9", "vec3"),
        a.vertex.uniforms.add("slicePoint10", "vec3")
      );
      a.fragment.uniforms.add("slicePlaneOrigin", "vec3");
      a.fragment.uniforms.add("slicePlaneBasis1", "vec3");
      a.fragment.uniforms.add("slicePlaneBasis2", "vec3");
      a.fragment.uniforms.add("isCut", "bool");
      a.fragment.uniforms.add("pNum", "float");
      a.fragment.uniforms.add("slicePoint1", "vec3");
      a.fragment.uniforms.add("slicePoint2", "vec3");
      a.fragment.uniforms.add("slicePoint3", "vec3");
      a.fragment.uniforms.add("slicePoint4", "vec3");
      a.fragment.uniforms.add("slicePoint5", "vec3");
      a.fragment.uniforms.add("slicePoint6", "vec3");
      a.fragment.uniforms.add("slicePoint7", "vec3");
      a.fragment.uniforms.add("slicePoint8", "vec3");
      a.fragment.uniforms.add("slicePoint9", "vec3");
      a.fragment.uniforms.add("slicePoint10", "vec3");
      var b = e.glsl`struct SliceFactors {
float front;
float side0;
float side1;
float side2;
float side3;
bool inside;
bool iscut;
};
bool caculateSide(vec3 VecPoint1, vec3 VecPoint2, vec3 Rel){
  float L1=length(VecPoint1);
  float L2= length(VecPoint2);
  float LR= length(Rel);
  float m1=L1/LR;
  float m2=L2/LR;
 
  vec3 v1 = cross(VecPoint1,VecPoint2);
  vec3 v2 = cross(VecPoint1,Rel);
  float dot_1=dot(v1,v2);

  vec3 v3 = cross(VecPoint2,VecPoint1);
  vec3 v4 = cross(VecPoint2,Rel);
  float dot_2=dot(v3,v4);

  vec3 v5 = cross(VecPoint1-VecPoint2,-VecPoint2);
  vec3 v6 = cross(VecPoint1-VecPoint2,Rel-VecPoint2);
  float dot_3=dot(v5,v6);

  bool line1=(m1*Rel.x==VecPoint1.x)&&dot(VecPoint1,Rel)>0.0;
  bool line2=(m2*Rel.x==VecPoint2.x)&&dot(VecPoint2,Rel)>0.0;

  return (dot_1>0.0&&dot_2>0.0&&dot_3>0.0)||line1||line2;
}

vec3 P=pos;
bool inside=false;
if(isCut){
  if(pNum==3.0){
    inside=caculateSide(slicePoint2,slicePoint3,rel);
  }else if(pNum==4.0){
    inside=caculateSide(slicePoint2,slicePoint3,rel)||caculateSide(slicePoint3,slicePoint4,rel);
  }else if(pNum==5.0){
    inside=caculateSide(slicePoint2,slicePoint3,rel)||caculateSide(slicePoint3,slicePoint4,rel)||caculateSide(slicePoint4,slicePoint5,rel);
  }else if(pNum==6.0){
    inside=caculateSide(slicePoint2,slicePoint3,rel)||caculateSide(slicePoint3,slicePoint4,rel)||caculateSide(slicePoint4,slicePoint5,rel)||caculateSide(slicePoint5,slicePoint6,rel);
  }else if(pNum==7.0){
    inside=caculateSide(slicePoint2,slicePoint3,rel)||caculateSide(slicePoint3,slicePoint4,rel)||caculateSide(slicePoint4,slicePoint5,rel)||caculateSide(slicePoint5,slicePoint6,rel)||caculateSide(slicePoint6,slicePoint7,rel);
  }else if(pNum==8.0){
    inside=caculateSide(slicePoint2,slicePoint3,rel)||caculateSide(slicePoint3,slicePoint4,rel)||caculateSide(slicePoint4,slicePoint5,rel)||caculateSide(slicePoint5,slicePoint6,rel)||caculateSide(slicePoint6,slicePoint7,rel)||caculateSide(slicePoint7,slicePoint8,rel);
  }else if(pNum==9.0){
    inside=caculateSide(slicePoint2,slicePoint3,rel)||caculateSide(slicePoint3,slicePoint4,rel)||caculateSide(slicePoint4,slicePoint5,rel)||caculateSide(slicePoint5,slicePoint6,rel)||caculateSide(slicePoint6,slicePoint7,rel)||caculateSide(slicePoint7,slicePoint8,rel)||caculateSide(slicePoint8,slicePoint9,rel);
  }else if(pNum==10.0){
    inside=caculateSide(slicePoint2,slicePoint3,rel)||caculateSide(slicePoint3,slicePoint4,rel)||caculateSide(slicePoint4,slicePoint5,rel)||caculateSide(slicePoint5,slicePoint6,rel)||caculateSide(slicePoint6,slicePoint7,rel)||caculateSide(slicePoint7,slicePoint8,rel)||caculateSide(slicePoint8,slicePoint9,rel)||caculateSide(slicePoint9,slicePoint10,rel);
  }
}

SliceFactors calculateSliceFactors(vec3 pos) {
vec3 rel = pos - slicePlaneOrigin;
vec3 slicePlaneNormal = -cross(slicePlaneBasis1, slicePlaneBasis2);
float slicePlaneW = -dot(slicePlaneNormal, slicePlaneOrigin);
float basis1Len2 = dot(slicePlaneBasis1, slicePlaneBasis1);
float basis2Len2 = dot(slicePlaneBasis2, slicePlaneBasis2);
float basis1Dot = dot(slicePlaneBasis1, rel);
float basis2Dot = dot(slicePlaneBasis2, rel);
return SliceFactors(
dot(slicePlaneNormal, pos) + slicePlaneW,
-basis1Dot - basis1Len2,
basis1Dot - basis1Len2,
-basis2Dot - basis2Len2,
basis2Dot - basis2Len2,
inside,
isCut
);
}
bool sliceByFactors(SliceFactors factors) {
  if(factors.iscut){
    return factors.inside;
  }else{
    return factors.front < 0.0
    &&factors.side0 < 0.0
    && factors.side1 < 0.0
    && factors.side2 < 0.0
    && factors.side3 < 0.0;
  }
}
bool sliceEnabled() {
return dot(slicePlaneBasis1, slicePlaneBasis1) != 0.0;
}
bool sliceByPlane(vec3 pos) {
return sliceEnabled() && sliceByFactors(calculateSliceFactors(pos));
}
#define rejectBySlice(_pos_) sliceByPlane(_pos_)
#define discardBySlice(_pos_) { if (sliceByPlane(_pos_)) discard; }`, d = e.glsl`vec4 applySliceHighlight(vec4 color, vec3 pos) {
SliceFactors factors = calculateSliceFactors(pos);
if (sliceByFactors(factors)) {
  if(factors.iscut){
    return vec4(0.0,0.0,0.0,0.0);
  }else{
    return color;
  }
}
const float HIGHLIGHT_WIDTH = 1.0;
const vec4 HIGHLIGHT_COLOR = vec4(0.0, 0.0, 0.0, 0.3);
factors.front /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.front);
factors.side0 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side0);
factors.side1 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side1);
factors.side2 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side2);
factors.side3 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side3);
float highlightFactor = (1.0 - step(0.5, factors.front))
* (1.0 - step(0.5, factors.side0))
* (1.0 - step(0.5, factors.side1))
* (1.0 - step(0.5, factors.side2))
* (1.0 - step(0.5, factors.side3));
return mix(color, vec4(HIGHLIGHT_COLOR.rgb, color.a), highlightFactor * HIGHLIGHT_COLOR.a);
}`; d = c.sliceHighlightDisabled ? e.glsl`#define highlightSlice(_color_, _pos_) (_color_)` : e.glsl`
        ${d}
        #define highlightSlice(_color_, _pos_) (sliceEnabled() ? applySliceHighlight(_color_, _pos_) : (_color_))
      `; c.sliceEnabledForVertexPrograms && a.vertex.code.add(b); a.fragment.code.add(b); a.fragment.code.add(d)
    } else b = e.glsl`#define rejectBySlice(_pos_) false
#define discardBySlice(_pos_) {}
#define highlightSlice(_color_, _pos_) (_color_)`, c.sliceEnabledForVertexPrograms && a.vertex.code.add(b), a.fragment.code.add(b)
  }; f.bindSliceUniforms = h; f.bindSliceUniformsWithOrigin = function (a, c, b) { h(a, c, b.slicePlane, b.origin) }; Object.defineProperty(f, "__esModule", { value: !0 })
});