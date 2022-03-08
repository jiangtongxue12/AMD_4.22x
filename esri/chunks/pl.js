// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define(["exports","./_commonjsHelpers","./moment"],function(p,n,q){var g={};(function(h,l){(function(d,a){"function"===typeof n.commonjsRequire?a(q.moment$1.exports):a(d.moment)})(n.commonjsGlobal,function(d){function a(b){return 5>b%10&&1<b%10&&1!==~~(b/10)%10}function c(b,k,r){var e=b+" ";switch(r){case "ss":return e+(a(b)?"sekundy":"sekund");case "m":return k?"minuta":"minut\u0119";case "mm":return e+(a(b)?"minuty":"minut");case "h":return k?"godzina":"godzin\u0119";case "hh":return e+(a(b)?"godziny":
"godzin");case "ww":return e+(a(b)?"tygodnie":"tygodni");case "MM":return e+(a(b)?"miesi\u0105ce":"miesi\u0119cy");case "yy":return e+(a(b)?"lata":"lat")}}var f="stycze\u0144 luty marzec kwiecie\u0144 maj czerwiec lipiec sierpie\u0144 wrzesie\u0144 pa\u017adziernik listopad grudzie\u0144".split(" "),t="stycznia lutego marca kwietnia maja czerwca lipca sierpnia wrze\u015bnia pa\u017adziernika listopada grudnia".split(" "),m=[/^sty/i,/^lut/i,/^mar/i,/^kwi/i,/^maj/i,/^cze/i,/^lip/i,/^sie/i,/^wrz/i,/^pa\u017a/i,
/^lis/i,/^gru/i];return d.defineLocale("pl",{months:function(b,k){return b?/D MMMM/.test(k)?t[b.month()]:f[b.month()]:f},monthsShort:"sty lut mar kwi maj cze lip sie wrz pa\u017a lis gru".split(" "),monthsParse:m,longMonthsParse:m,shortMonthsParse:m,weekdays:"niedziela poniedzia\u0142ek wtorek \u015broda czwartek pi\u0105tek sobota".split(" "),weekdaysShort:"ndz pon wt \u015br czw pt sob".split(" "),weekdaysMin:"Nd Pn Wt \u015ar Cz Pt So".split(" "),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",
LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Dzi\u015b o] LT",nextDay:"[Jutro o] LT",nextWeek:function(){switch(this.day()){case 0:return"[W niedziel\u0119 o] LT";case 2:return"[We wtorek o] LT";case 3:return"[W \u015brod\u0119 o] LT";case 6:return"[W sobot\u0119 o] LT";default:return"[W] dddd [o] LT"}},lastDay:"[Wczoraj o] LT",lastWeek:function(){switch(this.day()){case 0:return"[W zesz\u0142\u0105 niedziel\u0119 o] LT";case 3:return"[W zesz\u0142\u0105 \u015brod\u0119 o] LT";
case 6:return"[W zesz\u0142\u0105 sobot\u0119 o] LT";default:return"[W zesz\u0142y] dddd [o] LT"}},sameElse:"L"},relativeTime:{future:"za %s",past:"%s temu",s:"kilka sekund",ss:c,m:c,mm:c,h:c,hh:c,d:"1 dzie\u0144",dd:"%d dni",w:"tydzie\u0144",ww:c,M:"miesi\u0105c",MM:c,y:"rok",yy:c},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})})})();g=Object.freeze(function(h,l){for(var d=0;d<l.length;d++){const a=l[d];if("string"!==typeof a&&!Array.isArray(a))for(const c in a)if("default"!==
c&&!(c in h)){const f=Object.getOwnPropertyDescriptor(a,c);f&&Object.defineProperty(h,c,f.get?f:{enumerable:!0,get:()=>a[c]})}}return Object.freeze(h)}({__proto__:null,default:g},[g]));p.pl=g});