// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define(["exports","./_commonjsHelpers","./moment"],function(q,n,r){var k={};(function(l,m){(function(g,b){"function"===typeof n.commonjsRequire?b(r.moment$1.exports):b(g.moment)})(n.commonjsGlobal,function(g){function b(f){return 1<f&&5>f&&1!==~~(f/10)}function a(f,c,t,d){var e=f+" ";switch(t){case "s":return c||d?"p\u00e1r sekund":"p\u00e1r sekundami";case "ss":return c||d?e+(b(f)?"sekundy":"sekund"):e+"sekundami";case "m":return c?"minuta":d?"minutu":"minutou";case "mm":return c||d?e+(b(f)?"minuty":
"minut"):e+"minutami";case "h":return c?"hodina":d?"hodinu":"hodinou";case "hh":return c||d?e+(b(f)?"hodiny":"hodin"):e+"hodinami";case "d":return c||d?"den":"dnem";case "dd":return c||d?e+(b(f)?"dny":"dn\u00ed"):e+"dny";case "M":return c||d?"m\u011bs\u00edc":"m\u011bs\u00edcem";case "MM":return c||d?e+(b(f)?"m\u011bs\u00edce":"m\u011bs\u00edc\u016f"):e+"m\u011bs\u00edci";case "y":return c||d?"rok":"rokem";case "yy":return c||d?e+(b(f)?"roky":"let"):e+"lety"}}var h=[/^led/i,/^\u00fano/i,/^b\u0159e/i,
/^dub/i,/^kv\u011b/i,/^(\u010dvn|\u010derven$|\u010dervna)/i,/^(\u010dvc|\u010dervenec|\u010dervence)/i,/^srp/i,/^z\u00e1\u0159/i,/^\u0159\u00edj/i,/^lis/i,/^pro/i],p=/^(leden|\u00fanor|b\u0159ezen|duben|kv\u011bten|\u010dervenec|\u010dervence|\u010derven|\u010dervna|srpen|z\u00e1\u0159\u00ed|\u0159\u00edjen|listopad|prosinec|led|\u00fano|b\u0159e|dub|kv\u011b|\u010dvn|\u010dvc|srp|z\u00e1\u0159|\u0159\u00edj|lis|pro)/i;return g.defineLocale("cs",{months:"leden \u00fanor b\u0159ezen duben kv\u011bten \u010derven \u010dervenec srpen z\u00e1\u0159\u00ed \u0159\u00edjen listopad prosinec".split(" "),
monthsShort:"led \u00fano b\u0159e dub kv\u011b \u010dvn \u010dvc srp z\u00e1\u0159 \u0159\u00edj lis pro".split(" "),monthsRegex:p,monthsShortRegex:p,monthsStrictRegex:/^(leden|ledna|\u00fanora|\u00fanor|b\u0159ezen|b\u0159ezna|duben|dubna|kv\u011bten|kv\u011btna|\u010dervenec|\u010dervence|\u010derven|\u010dervna|srpen|srpna|z\u00e1\u0159\u00ed|\u0159\u00edjen|\u0159\u00edjna|listopadu|listopad|prosinec|prosince)/i,monthsShortStrictRegex:/^(led|\u00fano|b\u0159e|dub|kv\u011b|\u010dvn|\u010dvc|srp|z\u00e1\u0159|\u0159\u00edj|lis|pro)/i,
monthsParse:h,longMonthsParse:h,shortMonthsParse:h,weekdays:"ned\u011ble pond\u011bl\u00ed \u00fater\u00fd st\u0159eda \u010dtvrtek p\u00e1tek sobota".split(" "),weekdaysShort:"ne po \u00fat st \u010dt p\u00e1 so".split(" "),weekdaysMin:"ne po \u00fat st \u010dt p\u00e1 so".split(" "),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd D. MMMM YYYY H:mm",l:"D. M. YYYY"},calendar:{sameDay:"[dnes v] LT",nextDay:"[z\u00edtra v] LT",nextWeek:function(){switch(this.day()){case 0:return"[v ned\u011bli v] LT";
case 1:case 2:return"[v] dddd [v] LT";case 3:return"[ve st\u0159edu v] LT";case 4:return"[ve \u010dtvrtek v] LT";case 5:return"[v p\u00e1tek v] LT";case 6:return"[v sobotu v] LT"}},lastDay:"[v\u010dera v] LT",lastWeek:function(){switch(this.day()){case 0:return"[minulou ned\u011bli v] LT";case 1:case 2:return"[minul\u00e9] dddd [v] LT";case 3:return"[minulou st\u0159edu v] LT";case 4:case 5:return"[minul\u00fd] dddd [v] LT";case 6:return"[minulou sobotu v] LT"}},sameElse:"L"},relativeTime:{future:"za %s",
past:"p\u0159ed %s",s:a,ss:a,m:a,mm:a,h:a,hh:a,d:a,dd:a,M:a,MM:a,y:a,yy:a},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})})})();k=Object.freeze(function(l,m){for(var g=0;g<m.length;g++){const b=m[g];if("string"!==typeof b&&!Array.isArray(b))for(const a in b)if("default"!==a&&!(a in l)){const h=Object.getOwnPropertyDescriptor(b,a);h&&Object.defineProperty(l,a,h.get?h:{enumerable:!0,get:()=>b[a]})}}return Object.freeze(l)}({__proto__:null,default:k},[k]));q.cs=k});