// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define(["exports","./_commonjsHelpers","./moment"],function(q,p,r){var k={};(function(l,n){(function(f,a){"function"===typeof p.commonjsRequire?a(r.moment$1.exports):a(f.moment)})(p.commonjsGlobal,function(f){function a(b,g,d,h){return g?c(d)[0]:h?c(d)[1]:c(d)[2]}function c(b){return t[b].split("_")}function e(b,g,d,h){var m=b+" ";return 1===b?m+a(b,g,d[0],h):g?m+(0===b%10||10<b&&20>b?c(d)[1]:c(d)[0]):h?m+c(d)[1]:m+(0===b%10||10<b&&20>b?c(d)[1]:c(d)[2])}var t={ss:"sekund\u0117_sekund\u017ei\u0173_sekundes",
m:"minut\u0117_minut\u0117s_minut\u0119",mm:"minut\u0117s_minu\u010di\u0173_minutes",h:"valanda_valandos_valand\u0105",hh:"valandos_valand\u0173_valandas",d:"diena_dienos_dien\u0105",dd:"dienos_dien\u0173_dienas",M:"m\u0117nuo_m\u0117nesio_m\u0117nes\u012f",MM:"m\u0117nesiai_m\u0117nesi\u0173_m\u0117nesius",y:"metai_met\u0173_metus",yy:"metai_met\u0173_metus"};return f.defineLocale("lt",{months:{format:"sausio vasario kovo baland\u017eio gegu\u017e\u0117s bir\u017eelio liepos rugpj\u016b\u010dio rugs\u0117jo spalio lapkri\u010dio gruod\u017eio".split(" "),
standalone:"sausis vasaris kovas balandis gegu\u017e\u0117 bir\u017eelis liepa rugpj\u016btis rugs\u0117jis spalis lapkritis gruodis".split(" "),isFormat:/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/},monthsShort:"sau vas kov bal geg bir lie rgp rgs spa lap grd".split(" "),weekdays:{format:"sekmadien\u012f pirmadien\u012f antradien\u012f tre\u010diadien\u012f ketvirtadien\u012f penktadien\u012f \u0161e\u0161tadien\u012f".split(" "),standalone:"sekmadienis pirmadienis antradienis tre\u010diadienis ketvirtadienis penktadienis \u0161e\u0161tadienis".split(" "),
isFormat:/dddd HH:mm/},weekdaysShort:"Sek Pir Ant Tre Ket Pen \u0160e\u0161".split(" "),weekdaysMin:"S P A T K Pn \u0160".split(" "),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"YYYY [m.] MMMM D [d.]",LLL:"YYYY [m.] MMMM D [d.], HH:mm [val.]",LLLL:"YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]",l:"YYYY-MM-DD",ll:"YYYY [m.] MMMM D [d.]",lll:"YYYY [m.] MMMM D [d.], HH:mm [val.]",llll:"YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]"},calendar:{sameDay:"[\u0160iandien] LT",
nextDay:"[Rytoj] LT",nextWeek:"dddd LT",lastDay:"[Vakar] LT",lastWeek:"[Pra\u0117jus\u012f] dddd LT",sameElse:"L"},relativeTime:{future:"po %s",past:"prie\u0161 %s",s:function(b,g,d,h){return g?"kelios sekund\u0117s":h?"keli\u0173 sekund\u017ei\u0173":"kelias sekundes"},ss:e,m:a,mm:e,h:a,hh:e,d:a,dd:e,M:a,MM:e,y:a,yy:e},dayOfMonthOrdinalParse:/\d{1,2}-oji/,ordinal:function(b){return b+"-oji"},week:{dow:1,doy:4}})})})();k=Object.freeze(function(l,n){for(var f=0;f<n.length;f++){const a=n[f];if("string"!==
typeof a&&!Array.isArray(a))for(const c in a)if("default"!==c&&!(c in l)){const e=Object.getOwnPropertyDescriptor(a,c);e&&Object.defineProperty(l,c,e.get?e:{enumerable:!0,get:()=>a[c]})}}return Object.freeze(l)}({__proto__:null,default:k},[k]));q.lt=k});