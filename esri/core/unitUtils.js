// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define("exports ./has ./jsonMap ./maybe ../geometry/projectionEllipsoid ../geometry/SpatialReference ../geometry/support/Ellipsoid ../geometry/support/spatialReferenceUtils ../geometry/support/WKIDUnitConversion".split(" "),function(d,p,k,J,K,L,q,r,m){function n(a){if(a=M[a])return a;throw Error("unknown measure");}function w(a){return l[a].baseUnit}function t(a,b=null){b=b||n(a);return l[b].baseUnit===a}function f(a,b,c){if(b===c)return a;const e=n(b);if(e!==n(c))throw Error("incompatible units");
a=t(b,e)?a:a*l[e].units[b].inBaseUnits;return t(c,e)?a:a/l[e].units[c].inBaseUnits}function x(a,b){return 3E3>f(a,b,"meters")?"meters":"kilometers"}function y(a,b){return 1E5>f(a,b,"meters")?"meters":"kilometers"}function z(a,b){return 1E3>f(a,b,"feet")?"feet":"miles"}function A(a,b){return 1E5>f(a,b,"feet")?"feet":"miles"}function B(a){return C.fromJSON(a.toLowerCase())||null}function u(a,b=q.earth.metersPerDegree){return D(a,!0)||b}function D(a,b=!1){let c,e,g=null;null!=a&&("object"===typeof a?
(c=a.wkid,e=a.wkt):"number"===typeof a?c=a:"string"===typeof a&&(e=a));if(c){if(r.isWKIDFromMars(c))return q.mars.metersPerDegree;if(r.isWKIDFromMoon(c))return q.moon.metersPerDegree;g=h.values[h[c]];!g&&b&&N.has(c)&&(g=O)}else e&&(/^PROJCS/i.test(e)?g=E(F.exec(e),g):/^GEOCCS/i.test(e)&&(g=E(G.exec(e),g)));return g}function E(a,b){return a&&a[1]?parseFloat(a[1].split(",")[1]):b}function v(a){var b=null;if(null!=a)if("object"===typeof a){var c=a.wkid;var e=a.wkt}else"number"===typeof a?c=a:"string"===
typeof a&&(e=a);if(c)b=h.units[h[c]];else if(e&&(a=/^PROJCS/i.test(e)?F:/^GEOCCS/i.test(e)?G:null)&&(e=a.exec(e))&&e[1]&&(e=e[1],b=(b=/[\\"\\']{1}([^\\"\\']+)/.exec(e))&&b[1],!b||-1===h.units.indexOf(b)))for(e=parseFloat(e.split(",")[1]),b=null,a=h.values,c=0;c<a.length;++c)if(1E-7>Math.abs(e-a[c])){b=h.units[c];break}return J.isSome(b)?B(b):null}const O=q.earth.radius*Math.PI/200,F=/UNIT\[([^\]]+)\]\]$/i,h=m,G=/UNIT\[([^\]]+)\]/i,N=new Set([4261,4305,4807,4810,4811,4812,4816,4819,4821,4901,4902,
37225,104139,104140]),C=k.strict()({meter:"meters",foot:"feet",foot_us:"us-feet",foot_clarke:"clarke-feet",yard_clarke:"clarke-yards",link_clarke:"clarke-links",yard_sears:"sears-yards",foot_sears:"sears-feet",chain_sears:"sears-chains",chain_benoit_1895_b:"benoit-1895-b-chains",yard_indian:"indian-yards",yard_indian_1937:"indian-1937-yards",foot_gold_coast:"gold-coast-feet",chain_sears_1922_truncated:"sears-1922-truncated-chains","50_kilometers":"50-kilometers","150_kilometers":"150-kilometers"});
p={millimeters:{inBaseUnits:.001},centimeters:{inBaseUnits:.01},decimeters:{inBaseUnits:.1},meters:{inBaseUnits:1},kilometers:{inBaseUnits:1E3},inches:{inBaseUnits:.0254},feet:{inBaseUnits:.3048},yards:{inBaseUnits:.9144},miles:{inBaseUnits:1609.344},"nautical-miles":{inBaseUnits:1852},"us-feet":{inBaseUnits:1200/3937}};m={"square-millimeters":{inBaseUnits:1E-6},"square-centimeters":{inBaseUnits:1E-4},"square-decimeters":{inBaseUnits:.1*.1},"square-meters":{inBaseUnits:1},"square-kilometers":{inBaseUnits:1E6},
"square-inches":{inBaseUnits:6.4516E-4},"square-feet":{inBaseUnits:.09290304},"square-yards":{inBaseUnits:.83612736},"square-miles":{inBaseUnits:2589988.110336},"square-us-feet":{inBaseUnits:(a=>a*a)(1200/3937)},acres:{inBaseUnits:4046.8564224},ares:{inBaseUnits:100},hectares:{inBaseUnits:1E4}};const l={length:{baseUnit:"meters",units:p},area:{baseUnit:"square-meters",units:m},volume:{baseUnit:"liters",units:{liters:{inBaseUnits:1},"cubic-millimeters":{inBaseUnits:1E3*1E-9},"cubic-centimeters":{inBaseUnits:.001},
"cubic-decimeters":{inBaseUnits:1},"cubic-meters":{inBaseUnits:1E3},"cubic-kilometers":{inBaseUnits:1E12},"cubic-inches":{inBaseUnits:.016387064},"cubic-feet":{inBaseUnits:.09290304*304.8},"cubic-yards":{inBaseUnits:764.554857984},"cubic-miles":{inBaseUnits:4.16818182544058E12}}},angle:{baseUnit:"radians",units:{radians:{inBaseUnits:1},degrees:{inBaseUnits:Math.PI/180}}}},M=function(){const a={};for(const b in l)for(const c in l[b].units)a[c]=b;return a}(),H={esriAcres:"acres",esriAres:"ares",esriHectares:"hectares",
esriSquareCentimeters:"square-centimeters",esriSquareDecimeters:"square-decimeters",esriSquareFeet:"square-feet",esriSquareInches:"square-inches",esriSquareKilometers:"square-kilometers",esriSquareMeters:"square-meters",esriSquareMiles:"square-miles",esriSquareMillimeters:"square-millimeters",esriSquareUsFeet:"square-us-feet",esriSquareYards:"square-yards"},I={esriCentimeters:"centimeters",esriDecimeters:"decimeters",esriFeet:"feet",esriInches:"inches",esriKilometers:"kilometers",esriMeters:"meters",
esriMiles:"miles",esriMillimeters:"millimeters",esriNauticalMiles:"nautical-miles",esriYards:"yards"};p=k.strict()(H);m=k.strict()(I);k=k.strict()({...H,...I});d.areaUnitsJSONMap=p;d.baseUnitForMeasure=w;d.baseUnitForUnit=function(a){return w(n(a))};d.convertUnit=f;d.getDefaultUnitSystem=function(a){if(!a)return null;switch(v(a)){case "feet":case "us-feet":case "clarke-feet":case "clarke-yards":case "clarke-links":case "sears-yards":case "sears-feet":case "sears-chains":case "benoit-1895-b-chains":case "indian-yards":case "indian-1937-yards":case "gold-coast-feet":case "sears-1922-truncated-chains":return"imperial";
case "50-kilometers":case "150-kilometers":case "meters":return"metric"}return null};d.getMetersPerUnit=D;d.getMetersPerUnitForSR=u;d.getMetersPerVerticalUnitForSR=function(a){if(a&&"object"===typeof a&&!r.isEarth(a))return 1;a=u(a);return 1E5<a?1:a};d.getUnitString=v;d.getVerticalUnitStringForSR=function(a){const b=u(a),c=a instanceof L?K.getReferenceEllipsoid(a).metersPerDegree:1E5;return b>=c?"meters":v(a)};d.inchesPerMeter=39.37;d.isBaseUnit=t;d.isMeasurementSystem=function(a){return"imperial"===
a||"metric"===a};d.lengthToDegrees=function(a,b,c){return f(a,b,"meters")/(c*Math.PI/180)};d.lengthUnitsJSONMap=m;d.measureForUnit=n;d.measurementAreaUnits="metric imperial square-inches square-feet square-yards square-miles square-us-feet square-meters square-kilometers acres ares hectares".split(" ");d.measurementLengthUnits="metric imperial inches feet yards miles nautical-miles us-feet meters kilometers".split(" ");d.preferredImperialAreaUnit=function(a,b){return 1E6>f(a,b,"square-feet")?"square-feet":
"square-miles"};d.preferredImperialLengthUnit=z;d.preferredImperialVerticalLengthUnit=A;d.preferredLengthUnit=function(a,b,c){switch(c){case "metric":return x(a,b);case "imperial":return z(a,b);default:return c}};d.preferredMetricAreaUnit=function(a,b){return 3E6>f(a,b,"square-meters")?"square-meters":"square-kilometers"};d.preferredMetricLengthUnit=x;d.preferredMetricVerticalLengthUnit=y;d.preferredVerticalLengthUnit=function(a,b,c){switch(c){case "metric":return y(a,b);case "imperial":return A(a,
b);default:return c}};d.unitFromRESTJSON=B;d.unitToRESTJSON=function(a){return C.toJSON(a)||null};d.unitsJSONMap=k;Object.defineProperty(d,"__esModule",{value:!0})});