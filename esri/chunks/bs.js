// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define(["exports","./_commonjsHelpers","./moment"],function(l,k,m){var f={};(function(g,h){(function(d,b){"function"===typeof k.commonjsRequire?b(m.moment$1.exports):b(d.moment)})(k.commonjsGlobal,function(d){function b(a,e,n){var c=a+" ";switch(n){case "ss":return 1===a?c+"sekunda":2===a||3===a||4===a?c+"sekunde":c+"sekundi";case "m":return e?"jedna minuta":"jedne minute";case "mm":return 1===a?c+"minuta":2===a||3===a||4===a?c+"minute":c+"minuta";case "h":return e?"jedan sat":"jednog sata";case "hh":return 1===
a?c+"sat":2===a||3===a||4===a?c+"sata":c+"sati";case "dd":return 1===a?c+"dan":c+"dana";case "MM":return 1===a?c+"mjesec":2===a||3===a||4===a?c+"mjeseca":c+"mjeseci";case "yy":return 1===a?c+"godina":2===a||3===a||4===a?c+"godine":c+"godina"}}return d.defineLocale("bs",{months:"januar februar mart april maj juni juli august septembar oktobar novembar decembar".split(" "),monthsShort:"jan. feb. mar. apr. maj. jun. jul. aug. sep. okt. nov. dec.".split(" "),monthsParseExact:!0,weekdays:"nedjelja ponedjeljak utorak srijeda \u010detvrtak petak subota".split(" "),
weekdaysShort:"ned. pon. uto. sri. \u010det. pet. sub.".split(" "),weekdaysMin:"ne po ut sr \u010de pe su".split(" "),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd, D. MMMM YYYY H:mm"},calendar:{sameDay:"[danas u] LT",nextDay:"[sutra u] LT",nextWeek:function(){switch(this.day()){case 0:return"[u] [nedjelju] [u] LT";case 3:return"[u] [srijedu] [u] LT";case 6:return"[u] [subotu] [u] LT";case 1:case 2:case 4:case 5:return"[u] dddd [u] LT"}},
lastDay:"[ju\u010der u] LT",lastWeek:function(){switch(this.day()){case 0:case 3:return"[pro\u0161lu] dddd [u] LT";case 6:return"[pro\u0161le] [subote] [u] LT";case 1:case 2:case 4:case 5:return"[pro\u0161li] dddd [u] LT"}},sameElse:"L"},relativeTime:{future:"za %s",past:"prije %s",s:"par sekundi",ss:b,m:b,mm:b,h:b,hh:b,d:"dan",dd:b,M:"mjesec",MM:b,y:"godinu",yy:b},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:7}})})})();f=Object.freeze(function(g,h){for(var d=0;d<h.length;d++){const b=
h[d];if("string"!==typeof b&&!Array.isArray(b))for(const a in b)if("default"!==a&&!(a in g)){const e=Object.getOwnPropertyDescriptor(b,a);e&&Object.defineProperty(g,a,e.get?e:{enumerable:!0,get:()=>b[a]})}}return Object.freeze(g)}({__proto__:null,default:f},[f]));l.bs=f});