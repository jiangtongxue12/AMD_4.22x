// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define(["exports","../Dictionary","../../chunks/languageUtils"],function(r,K,l){function z(a){if(!1===l.isString(a))throw Error("Invalid Parameter");return a}function D(a,d){d=10**d;return Math.round(a*d)/d}function t(a){const d=parseFloat(a.toString().replace(Math.trunc(a).toString(),"0"))*Math.sign(a);return 0>a?{fraction:d,integer:Math.ceil(a)}:{fraction:d,integer:Math.floor(a)}}function u(a,d){switch(a){case 0:return"SHORT"===d?"N":"North";case 1:return"SHORT"===d?"E":"East";case 2:return"SHORT"===
d?"S":"South";case 3:return"SHORT"===d?"W":"West"}}function E(a,d,b){for(;a.length<b;)a=d+a;return a}function F(a,d){return a-Math.floor(a/d)*d}function G(a){switch(a){case 6:case 1:return 360;case 4:return S;case 5:return 400;case 2:return 1296E3;case 7:return 60;case 8:return 60;default:throw Error("Unnexpected evaluations");}}function L(a){switch(a.toUpperCase().trim()){case "NORTH":case "NORTHAZIMUTH":case "NORTH AZIMUTH":return 1;case "POLAR":return 2;case "QUADRANT":return 3;case "SOUTH":case "SOUTHAZIMUTH":case "SOUTH AZIMUTH":return 4}throw Error("Unsupported direction type");
}function M(a){switch(a.toUpperCase().trim()){case "D":case "DD":case "DECIMALDEGREE":case "DECIMAL DEGREE":case "DEGREE":case "DECIMALDEGREES":case "DECIMAL DEGREES":case "DEGREES":return 1;case "DMS":case "DEGREESMINUTESSECONDS":case "DEGREES MINUTES SECONDS":return 3;case "R":case "RAD":case "RADS":case "RADIAN":case "RADIANS":return 4;case "G":case "GON":case "GONS":case "GRAD":case "GRADS":case "GRADIAN":case "GRADIANS":return 5}throw Error("Unsupported units");}function N(a,d,b){let c=null;
switch(d){case 1:c=q(a,3600);break;case 2:c=a;break;case 5:c=q(a,3240);break;case 4:c=q(a,O);break;default:throw Error("Unnexpected evaluation");}switch(b){case 1:return A(c,3600);case 2:return c;case 5:return A(c,3240);case 4:return c/O;default:throw Error("Unnexpected evaluation");}}function B(a){switch(a){case 1:case 6:case 3:return 1;case 5:return 5;case 7:return 7;case 4:return 4;case 2:case 8:return 2}}function T(a){switch(l.toNumber(a)){case 1:return{first:0,second:1};case 2:return{first:2,
second:1};case 3:return{first:2,second:3};case 4:return{first:0,second:3}}return null}function P(a){switch(a.toUpperCase().trim()){case "N":case "NORTH":return 0;case "E":case "EAST":return 1;case "S":case "SOUTH":return 2;case "W":case "WEST":return 3}return null}function v(a){a=parseFloat(a);if(l.isNumber(a)){if(isNaN(a))throw Error("Invalid conversion");return a}throw Error("Invalid conversion");}function H(a,d,b){const c=3===b;let e=null;var f=null;let h=0;var g=0;g=0;if(c){if(2>a.length)throw Error("Conversion Error");
g=1;(f=T(l.toString(a[a.length-1])))?(e=f.first,f=f.second):(h=1,e=P(l.toString(a[0])),f=P(l.toString(a[a.length-1])));if(null===e||null===f)throw Error("Invalid Conversion");}switch(d){case 1:case 4:case 5:if(0===a.length)throw Error("Invalid Conversion");return c?p.createFromAngleMeridianAndDirection(n.createFromAngleAndUnits(v(a[h]),B(d)),e,f):p.createFromAngleAndDirection(n.createFromAngleAndUnits(v(a[h]),B(d)),b);case 3:g=a.length-g-h;if(3===g)return a=n.createFromDegreesMinutesSeconds(v(a[h]),
v(a[h+1]),v(a[h+2])),c?p.createFromAngleMeridianAndDirection(a,e,f):p.createFromAngleAndDirection(a,b);if(1===g)return a=v(a[h]),a=w.number_to_dms(a),a=n.createFromDegreesMinutesSeconds(a.m_degrees,a.m_minutes,a.m_seconds),c?p.createFromAngleMeridianAndDirection(a,e,f):p.createFromAngleAndDirection(a,b)}throw Error("Conversion Error");}function U(a){const d=[" ","-","/","'",'"',"\\","^","\u00b0",Q,"\t","\r","\n","*"];let b="";for(let c=0;c<a.length;c++){const e=a.charAt(c);b=-1!==d.indexOf(e)?b+"RRSPLITRRSPLITRR":
b+e}return b.split("RRSPLITRRSPLITRR").filter(c=>""!==c)}function I(a,d,b){const c={padding:0,rounding:0,newpos:d};let e=!1;for(;d<a.length;){const f=a[d];if(f===b)e?c.rounding++:c.padding++,d++;else if("."===f)e=!0,d++;else break}c.newpos=d-1;return c}const C=a=>(d,b,c)=>{c=c||14;return+a(d,b).toFixed(c)},V=(a,d)=>a+d,W=(a,d)=>a-d,X=(a,d)=>a*d,Y=(a,d)=>a/d,J=(a,d,b)=>C(V)(a,d,b),q=(a,d,b)=>C(X)(a,d,b),A=(a,d,b)=>C(Y)(a,d,b),S=2*Math.PI,O=648E3/Math.PI,Q=String.fromCharCode(7501);let w=function(){function a(b,
c,e){this.m_degrees=b;this.m_minutes=c;this.m_seconds=e}var d=a.prototype;d.get_field=function(b){switch(b){case 1:case 6:return this.m_degrees;case 7:return this.m_minutes;case 2:case 8:return this.m_seconds;default:throw Error("Unnexpected evaluation");}};a.seconds_to_DMS=function(b){const c=t(b).fraction;b=t(b).integer;const e=Math.floor(b/3600);b-=3600*e;const f=Math.floor(b/60);return new a(e,f,b-60*f+c)};a.number_to_dms=function(b){var c=t(b).fraction;b=t(b).integer;const e=q(t(100*c).fraction,
100);c=t(100*c).integer;return new a(b,c,e)};d.format=function(b,c){c=D(this.m_seconds,c);let e=this.m_minutes,f=this.m_degrees;if(2===b||8===b)60<=c&&(c-=60,++e),60<=e&&(e=0,++f),360<=f&&(f=0);else if(7===b)c=0,e=30<=this.m_seconds?this.m_minutes+1:this.m_minutes,f=this.m_degrees,60<=e&&(e=0,++f),360<=f&&(f=0);else if(1===b||6===b)b=A(this.m_seconds,3600),c=A(this.m_minutes,60),f=Math.round(this.m_degrees+c+b),c=e=0;return new a(f,e,c)};a.DMS_to_seconds=function(b,c,e){return 3600*b+60*c+e};return a}(),
Z=function(){function a(d,b,c){this.meridian=d;this.angle=b;this.direction=c}a.prototype.fetch_azimuth=function(d){return 0===d?this.meridian:this.direction};return a}(),p=function(){function a(b){this.m_angle=b}a.createFromAngleAndDirection=function(b,c){return new a(new n(a.convertDirectionFormat(b.extract_angular_units(2),c,1)))};var d=a.prototype;d.getAngle=function(b){const c=this.m_angle.extract_angular_units(2);switch(b){case 1:case 4:case 2:return new n(a.convertDirectionFormat(c,1,b));case 3:return b=
a.seconds_north_azimuth_to_quadrant(c),new n(b.angle)}};d.getMeridian=function(b){const c=this.m_angle.extract_angular_units(2);switch(b){case 1:return 0;case 4:return 2;case 2:return 1;case 3:return a.seconds_north_azimuth_to_quadrant(c).meridian}};d.getDirection=function(b){const c=this.m_angle.extract_angular_units(2);switch(b){case 1:return 1;case 4:return 3;case 2:return 0;case 3:return a.seconds_north_azimuth_to_quadrant(c).direction}};a.seconds_north_azimuth_to_quadrant=function(b){const c=
324E3>=b||972E3<=b?0:2;return new Z(c,0===c?Math.min(1296E3-b,b):Math.abs(b-648E3),648E3<b?3:1)};a.createFromAngleMeridianAndDirection=function(b,c,e){return new a(new n(a.secondsQuadrantToNorthAzimuth(b.extract_angular_units(2),c,e)))};a.secondsQuadrantToNorthAzimuth=function(b,c,e){return 0===c?1===e?b:1296E3-b:1===e?648E3-b:648E3+b};a.convertDirectionFormat=function(b,c,e){let f=0;switch(c){case 1:f=b;break;case 2:f=324E3-b;break;case 3:throw Error("Unnexpected evaluation");case 4:f=b+648E3}b=
0;switch(e){case 1:b=f;break;case 2:b=324E3-f;break;case 3:throw Error("Unnexpected evaluation");case 4:b=f-648E3}b%=1296E3;return 0>b?1296E3+b:b};return a}(),n=function(){function a(d){this.m_seconds=d}a.createFromAngleAndUnits=function(d,b){return new a(N(d,b,2))};a.prototype.extract_angular_units=function(d){return N(this.m_seconds,2,B(d))};a.createFromDegreesMinutesSeconds=function(d,b,c){return new a(J(J(q(d,3600),q(b,60)),c))};return a}(),aa=function(){function a(b,c,e,f){this.m_view=b;this.m_angle=
c;this.m_merdian=e;this.m_direction=f;this.m_formatted_dms=this.m_dms=null}a.createFromStringAndBearing=function(b,c,e){return new a(b,c.getAngle(e),c.getMeridian(e),c.getDirection(e))};var d=a.prototype;d.fetch_angle=function(){return this.m_angle};d.fetch_meridian=function(){return this.m_merdian};d.fetch_direction=function(){return this.m_direction};d.fetch_m_view=function(){return this.m_view};d.fetch_dms=function(){null===this.m_dms&&this.calculate_dms();return this.m_dms};d.fetch_formatted_dms=
function(){null===this.m_formatted_dms&&this.calculate_dms();return this.m_formatted_dms};d.calculate_dms=function(){var b=null;let c=6,e=0;for(b=0;b<this.m_view.length;b++){const f=this.m_view[b];switch(f){case "m":b=I(this.m_view,b,f);c=6===c?7:c;b=b.newpos;continue;case "s":b=I(this.m_view,b,f),c=8,e=e<b.rounding?b.rounding:e,b=b.newpos}}this.m_dms=w.seconds_to_DMS(this.m_angle.extract_angular_units(2));this.m_formatted_dms=w.seconds_to_DMS(this.m_angle.extract_angular_units(2)).format(c,e)};return a}();
r.convertDirection=function(a,d,b){if(!(d instanceof K))throw Error("Invalid Parameter");if(!1===d.hasField("directionType"))throw Error("Invalid Parameter - Missing directionType");if(!1===d.hasField("angleType"))throw Error("Invalid Parameter - Missing directionType");var c=L(z(d.field("directiontype")));d=M(z(d.field("angletype")));if(l.isNumber(a)){a=l.toNumber(a);if(3===c)throw Error("Conversion error");3===d?(a=w.number_to_dms(a),c=p.createFromAngleAndDirection(n.createFromDegreesMinutesSeconds(a.m_degrees,
a.m_minutes,a.m_seconds),c)):c=p.createFromAngleAndDirection(n.createFromAngleAndUnits(a,B(d)),c)}else if(l.isString(a))c=H(U(a),d,c);else if(l.isArray(a))c=H(a,d,c);else if(l.isImmutableArray(a))c=H(a.toArray(),d,c);else throw Error("Conversion Error");if(!(b instanceof K))throw Error("Invalid Parameter");if(!1===b.hasField("directionType"))throw Error("Invalid Parameter - Missing directionType");if(!1===b.hasField("outputType"))throw Error("Invalid Parameter - Missing directionType");a=L(z(b.field("directiontype")));
d=b.hasField("angleType")?M(z(b.field("angletype"))):null;var e=z(b.field("outputType")).toUpperCase().trim();if(!a||!e)throw Error("Conversion error");if(!(d||"TEXT"===e&&b.hasField("format")))throw Error("Invalid unit");switch(e){case "VALUE":if(3===a||3===d)return b=c.getAngle(a),3===a&&3===d?(b=w.seconds_to_DMS(b.extract_angular_units(2)),c=[u(c.getMeridian(a),"SHORT"),b.m_degrees,b.m_minutes,b.m_seconds,u(c.getDirection(a),"SHORT")]):3===d?(c=w.seconds_to_DMS(b.extract_angular_units(2)),c=[c.m_degrees,
c.m_minutes,c.m_seconds]):c=3===a?[u(c.getMeridian(a),"SHORT"),b.extract_angular_units(d),u(c.getDirection(a),"SHORT")]:[b.extract_angular_units(d)],c;if((b=B(d))&&3!==d)c=c.getAngle(a).extract_angular_units(b);else throw Error("Conversion Error");return c;case "TEXT":e="";b.hasField("format")&&(e=l.toString(b.field("format")));if(null===e||""===e){b="";switch(d){case 1:b=3===a?"DD.DD\u00b0":"DDD.DD\u00b0";break;case 3:b=3===a?"dd\u00b0 mm' ss\"":"ddd\u00b0 mm' ss.ss\"";break;case 4:b="R.RR";break;
case 5:b="GGG.GG"+Q;break;default:throw Error("Conversion error");}3===a&&(b="p "+b+" b");e=b}b=e;var f="",h=null,g=null;d=aa.createFromStringAndBearing(b,c,a);e={D:1,d:6,m:7,s:8,R:4,G:5};for(g=0;g<b.length;g++){var k=b[g];switch(k){case "[":h=b;k={escaped:"",newpos:g};for(g++;g<h.length;){var x=h[g];g++;if("]"===x)break;k.escaped+=x}k.newpos=g-1;h=k;f+=h.escaped;g=h.newpos;continue;case "D":case "d":case "m":case "s":case "R":case "G":h=I(b,g,k);g=c.getAngle(a);a:{k=e[k];x=h.padding;var m=h.rounding,
R=d;let y=null;switch(k){case 1:case 4:case 5:y=F(D(g.extract_angular_units(k),m),G(k));g=E(y.toFixed(m),"0",x+m+(0<m?1:0));break a;case 6:case 7:y=F(R.fetch_formatted_dms().get_field(k),G(k));g=E(y.toFixed(m),"0",x+m+(0<m?1:0));break a;case 8:y=F(D(R.fetch_dms().get_field(k),m),G(k));g=E(y.toFixed(m),"0",x+m+(0<m?1:0));break a;default:throw Error("Unnexepected evaluation");}}f+=g;g=h.newpos;continue;case "P":case "p":f+=u(d.fetch_meridian(),"p"===k?"SHORT":"LONG");continue;case "B":case "b":f+=u(d.fetch_direction(),
"b"===k?"SHORT":"LONG");continue;default:f+=k}}return c=f;default:throw Error("Invalid Parameter");}};r.preciseAdd=J;r.preciseDivide=A;r.preciseMinus=(a,d,b)=>C(W)(a,d,b);r.preciseMultiply=q;Object.defineProperty(r,"__esModule",{value:!0})});