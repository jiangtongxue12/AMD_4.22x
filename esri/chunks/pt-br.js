// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define(["exports","./_commonjsHelpers","./moment"],function(k,h,l){var d={};(function(e,f){(function(b,a){"function"===typeof h.commonjsRequire?a(l.moment$1.exports):a(b.moment)})(h.commonjsGlobal,function(b){return b.defineLocale("pt-br",{months:"janeiro fevereiro mar\u00e7o abril maio junho julho agosto setembro outubro novembro dezembro".split(" "),monthsShort:"jan fev mar abr mai jun jul ago set out nov dez".split(" "),weekdays:"domingo segunda-feira ter\u00e7a-feira quarta-feira quinta-feira sexta-feira s\u00e1bado".split(" "),
weekdaysShort:"dom seg ter qua qui sex s\u00e1b".split(" "),weekdaysMin:"do 2\u00aa 3\u00aa 4\u00aa 5\u00aa 6\u00aa s\u00e1".split(" "),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY [\u00e0s] HH:mm",LLLL:"dddd, D [de] MMMM [de] YYYY [\u00e0s] HH:mm"},calendar:{sameDay:"[Hoje \u00e0s] LT",nextDay:"[Amanh\u00e3 \u00e0s] LT",nextWeek:"dddd [\u00e0s] LT",lastDay:"[Ontem \u00e0s] LT",lastWeek:function(){return 0===this.day()||
6===this.day()?"[\u00daltimo] dddd [\u00e0s] LT":"[\u00daltima] dddd [\u00e0s] LT"},sameElse:"L"},relativeTime:{future:"em %s",past:"h\u00e1 %s",s:"poucos segundos",ss:"%d segundos",m:"um minuto",mm:"%d minutos",h:"uma hora",hh:"%d horas",d:"um dia",dd:"%d dias",M:"um m\u00eas",MM:"%d meses",y:"um ano",yy:"%d anos"},dayOfMonthOrdinalParse:/\d{1,2}\u00ba/,ordinal:"%d\u00ba",invalidDate:"Data inv\u00e1lida"})})})();d=Object.freeze(function(e,f){for(var b=0;b<f.length;b++){const a=f[b];if("string"!==
typeof a&&!Array.isArray(a))for(const c in a)if("default"!==c&&!(c in e)){const g=Object.getOwnPropertyDescriptor(a,c);g&&Object.defineProperty(e,c,g.get?g:{enumerable:!0,get:()=>a[c]})}}return Object.freeze(e)}({__proto__:null,default:d},[d]));k.ptBr=d});