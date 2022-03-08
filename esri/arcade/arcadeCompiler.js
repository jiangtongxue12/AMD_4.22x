// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define("require exports ./ArcadePortal ./Attachment ./Dictionary ./Feature ./ImmutablePathArray ./ImmutablePointArray ../chunks/languageUtils ./treeAnalysis ../chunks/array ./functions/date ./functions/geometry ./functions/geomsync ./functions/maths ./functions/stats ./functions/string ../core/promiseUtils ../geometry/Extent ../geometry/Geometry ../geometry/Multipoint ../geometry/Point ../geometry/Polygon ../geometry/Polyline ../geometry/SpatialReference ../views/2d/layers/features/support/FeatureSetReader".split(" "),
function(Y,y,Z,aa,B,D,Q,ba,e,l,R,K,ca,da,ea,fa,ha,A,ia,ja,ka,la,ma,na,oa,pa){function x(a,b,c){try{return c(a,null,b.arguments)}catch(d){throw d;}}function qa(a){return a instanceof Error?A.reject(a):A.reject(Error(a))}function h(a,b){try{switch(b.type){case "EmptyStatement":return"lc.voidOperation";case "VariableDeclarator":return ra(a,b);case "VariableDeclaration":var c,d=[];for(var f=0;f<b.declarations.length;f++)d.push(h(a,b.declarations[f]));return c=d.join("\n")+" \n lastStatement\x3d  lc.voidOperation; \n";
case "BlockStatement":return L(a,b);case "FunctionDeclaration":{const g=b.id.name.toLowerCase(),t={isAsync:a.isAsync,spatialReference:a.spatialReference,console:a.console,lrucache:a.lrucache,interceptor:a.interceptor,services:a.services,symbols:a.symbols,mangleMap:a.mangleMap,localScope:{_SymbolsMap:{}},depthCounter:a.depthCounter+1,globalScope:a.globalScope};if(64<t.depthCounter)throw Error("Exceeded maximum function depth");d="new lc.SizzleFunction( lang.functionDepthchecker(function() { var lastStatement \x3d lc.voidOperation; \n   var lscope \x3d runtimeCtx.localStack[runtimeCtx.localStack.length-1];\n";
for(c=0;c<b.params.length;c++){const q=b.params[c].name.toLowerCase(),m=H(a);t.localScope._SymbolsMap[q]=m;t.mangleMap[q]=m;d+="lscope['"+m+"']\x3darguments["+c.toString()+"];\n"}!0===a.isAsync?(d=d+"return lang.__awaiter(this, void 0, void 0, function* () {\n"+(L(t,b.body)+"\n return lastStatement; "),d=d+"});  }, runtimeCtx),"+(b.params.length+")")):d+=L(t,b.body)+"\n return lastStatement; }, runtimeCtx),"+b.params.length+")";d+="\n lastStatement \x3d lc.voidOperation; \n";if(void 0!==a.globalScope[g])f=
"gscope['"+g+"']\x3d"+d;else if(void 0!==a.globalScope._SymbolsMap[g])f="gscope['"+a.globalScope._SymbolsMap[g]+"']\x3d"+d;else{{const q=H(a);a.globalScope._SymbolsMap[g]=q;a.mangleMap[g]=q;f="gscope['"+q+"']\x3d"+d}}}return f;case "ReturnStatement":var u=null===b.argument?"return lc.voidOperation":"return "+h(a,b.argument);return u;case "IfStatement":{if("AssignmentExpression"===b.test.type||"UpdateExpression"===b.test.type)throw Error(l.nodeErrorMessage(b.test,"RUNTIME","CANNOT_USE_ASSIGNMENT_IN_CONDITION"));
const g=h(a,b.test),t=F(a);let q="var "+t+" \x3d "+g+";\n if ("+t+" \x3d\x3d\x3d true) {\n"+S(a,b.consequent)+"\n }\n";q=null!==b.alternate?q+("else if ("+t+"\x3d\x3d\x3dfalse)   { \n"+S(a,b.alternate)+"}\n"):q+("else if ("+t+"\x3d\x3d\x3dfalse) { \n lastStatement \x3d lc.voidOperation;\n }\n");var r=q+="else { lang.error({type: '"+b.type+"'},'RUNTIME','CANNOT_USE_NONBOOLEAN_IN_CONDITION'); \n}\n"}return r;case "ExpressionStatement":var w="AssignmentExpression"===b.expression.type?"lastStatement \x3d lc.voidOperation; "+
h(a,b.expression)+"; \n ":"lastStatement \x3d "+h(a,b.expression)+"; ";return w;case "AssignmentExpression":return sa(a,b);case "UpdateExpression":return ta(a,b);case "BreakStatement":return"break";case "ContinueStatement":return"continue";case "TemplateLiteral":try{d=[];c=0;for(const g of b.quasis)d.push(g.value?JSON.stringify(g.value.cooked):JSON.stringify("")),!1===g.tail&&(d.push(b.expressions[c]?"lang.castString(lang.aCheck("+h(a,b.expressions[c])+", 'TemplateLiteral'))":""),c++);var n="(["+
d.join(",")+"]).join('')"}catch(g){throw g;}return n;case "TemplateElement":return JSON.stringify(b.value?b.value.cooked:"");case "ForStatement":{d="lastStatement \x3d lc.voidOperation; \n";null!==b.init&&(d+=h(a,b.init)+"; ");const g=F(a),t=F(a);d+="var "+g+" \x3d true; \n do { ";null!==b.update&&(d+=" if ("+g+"\x3d\x3d\x3dfalse) {\n "+h(a,b.update)+"  \n}\n "+g+"\x3dfalse; \n");null!==b.test&&(d+="var "+t+" \x3d "+h(a,b.test)+"; ",d+="if ("+t+"\x3d\x3d\x3dfalse) { break; } else if ("+t+"!\x3d\x3dtrue) { lang.error({type: '"+
b.type+"'},'RUNTIME','CANNOT_USE_NONBOOLEAN_IN_CONDITION');   }\n");d+=h(a,b.body);null!==b.update&&(d+="\n "+h(a,b.update));var p=d+("\n"+g+" \x3d true; \n} while(true);  lastStatement \x3d lc.voidOperation; ")}return p;case "ForInStatement":{const g=F(a),t=F(a),q=F(a);let m="var "+g+" \x3d "+h(a,b.right)+";\n";"VariableDeclaration"===b.left.type&&(m+=h(a,b.left));let z="VariableDeclaration"===b.left.type?b.left.declarations[0].id.name:b.left.name;z=z.toLowerCase();d="";null!==a.localScope&&(void 0!==
a.localScope[z]?d="lscope['"+z+"']":void 0!==a.localScope._SymbolsMap[z]&&(d="lscope['"+a.localScope._SymbolsMap[z]+"']"));""===d&&(void 0!==a.globalScope[z]?d="gscope['"+z+"']":void 0!==a.globalScope._SymbolsMap[z]&&(d="gscope['"+a.globalScope._SymbolsMap[z]+"']"));m=m+("if ("+g+"\x3d\x3d\x3dnull) {  lastStatement \x3d lc.voidOperation; }\n else if (lc.isArray(")+(g+") || lc.isString("+g+")) {var ")+(t+"\x3d"+g+".length; \nfor(var ")+(q+"\x3d0; "+q+"\x3c"+t+"; "+q+"++) {\n");m+=d+"\x3d"+q+";\n";
m+=h(a,b.body);m+="\n}\n";m+=" lastStatement \x3d lc.voidOperation; \n";m+=" \n}\n";m+="else if (lc.isImmutableArray("+g+")) {";m=m+("var "+t+"\x3d"+g+".length(); \nfor(var ")+(q+"\x3d0; "+q+"\x3c"+t+"; "+q+"++) {\n");m+=d+"\x3d"+q+";\n";m+=h(a,b.body);m+="\n}\n";m+=" lastStatement \x3d lc.voidOperation; \n";m+=" \n}\n";m+="else if (( "+g+" instanceof lang.Dictionary) || ( "+g+" instanceof lang.Feature)) {";m=m+("var "+t+"\x3d"+g+".keys(); \nfor(var ")+(q+"\x3d0; "+q+"\x3c"+t+".length; "+q+"++) {\n");
m+=d+"\x3d"+t+"["+q+"];\n";m+=h(a,b.body);m+="\n}\n";m+=" lastStatement \x3d lc.voidOperation; \n";m+=" \n}\n";a.isAsync&&(m+="else if (lc.isFeatureSet("+g+")) {",m=m+("var "+t+"\x3d"+g+".iterator(runtimeCtx.abortSignal); \nfor(var ")+(q+"\x3dlang. graphicToFeature( yield "+t+".next(),"+g+"); "+q+"!\x3dnull; "+q+"\x3dlang. graphicToFeature( yield "+t+".next(),"+g+")) {\n")+(d+"\x3d"+q+";\n"),m+=h(a,b.body),m+="\n}\n",m+=" lastStatement \x3d lc.voidOperation; \n",m+=" \n}\n");var k=m+="else { lastStatement \x3d lc.voidOperation; } \n"}return k;
case "Identifier":return ua(a,b);case "MemberExpression":try{let g;g=!0===b.computed?h(a,b.property):"'"+b.property.name+"'";var va="lang.member("+h(a,b.object)+","+g+")"}catch(g){throw g;}return va;case "Literal":return null===b.value||void 0===b.value?"null":JSON.stringify(b.value);case "ThisExpression":throw Error(l.nodeErrorMessage(b,"RUNTIME","NOTSUPPORTED"));case "CallExpression":try{if("Identifier"!==b.callee.type)throw Error(l.nodeErrorMessage(b,"RUNTIME","ONLYNODESSUPPORTED"));const g=b.callee.name.toLowerCase();
c="";null!==a.localScope&&(void 0!==a.localScope[g]?c="lscope['"+g+"']":void 0!==a.localScope._SymbolsMap[g]&&(c="lscope['"+a.localScope._SymbolsMap[g]+"']"));""===c&&(void 0!==a.globalScope[g]?c="gscope['"+g+"']":void 0!==a.globalScope._SymbolsMap[g]&&(c="gscope['"+a.globalScope._SymbolsMap[g]+"']"));if(""!==c){f="[";for(n=0;n<b.arguments.length;n++)0<n&&(f+=", "),f+=h(a,b.arguments[n]);f+="]";d=a.isAsync?"(yield lang.callfunc("+c+","+f+",runtimeCtx) )":"lang.callfunc("+c+","+f+",runtimeCtx)"}else throw Error(l.nodeErrorMessage(b,
"RUNTIME","NOTFOUND"));}catch(g){throw g;}return d;case "UnaryExpression":try{var wa="lang.unary("+h(a,b.argument)+",'"+b.operator+"')"}catch(g){throw g;}return wa;case "BinaryExpression":try{var xa="lang.binary("+h(a,b.left)+","+h(a,b.right)+",'"+b.operator+"')"}catch(g){throw g;}return xa;case "LogicalExpression":try{if("AssignmentExpression"===b.left.type||"UpdateExpression"===b.left.type)throw Error(l.nodeErrorMessage(b.left,"RUNTIME","CANNOT_USE_ASSIGNMENT_IN_CONDITION"));if("AssignmentExpression"===
b.right.type||"UpdateExpression"===b.right.type)throw Error(l.nodeErrorMessage(b.right,"RUNTIME","CANNOT_USE_ASSIGNMENT_IN_CONDITION"));if("\x26\x26"===b.operator||"||"===b.operator)var ya="(lang.logicalCheck("+h(a,b.left)+") "+b.operator+" lang.logicalCheck("+h(a,b.right)+"))";else throw Error(l.nodeErrorMessage(b,"RUNTIME","ONLYORORAND"));}catch(g){throw g;}return ya;case "ConditionalExpression":throw Error(l.nodeErrorMessage(b,"RUNTIME","NOTSUPPORTED"));case "ArrayExpression":try{d=[];for(c=0;c<
b.elements.length;c++)"Literal"===b.elements[c].type?d.push(h(a,b.elements[c])):d.push("lang.aCheck("+h(a,b.elements[c])+",'ArrayExpression')");var za="["+d.join(",")+"]"}catch(g){throw g;}return za;case "ObjectExpression":var Aa;d="lang.dictionary([";for(c=0;c<b.properties.length;c++){const g=b.properties[c],t="Identifier"===g.key.type?"'"+g.key.name+"'":h(a,g.key),q=h(a,g.value);0<c&&(d+=",");d+="lang.strCheck("+t+",'ObjectExpression'),lang.aCheck("+q+", 'ObjectExpression')"}return Aa=d+"])";case "Property":throw Error("Should not get here");
case "Array":throw Error(l.nodeErrorMessage(b,"RUNTIME","NOTSUPPORTED"));default:throw Error(l.nodeErrorMessage(b,"RUNTIME","UNREOGNISED"));}}catch(g){throw g;}}function ta(a,b){let c=null,d="";if("MemberExpression"===b.argument.type)return c=h(a,b.argument.object),d=!0===b.argument.computed?h(a,b.argument.property):"'"+b.argument.property.name+"'","lang.memberupdate("+c+","+d+",'"+b.operator+"',"+b.prefix+")";c=b.argument.name.toLowerCase();if(null!==a.localScope){if(void 0!==a.localScope[c])return"lang.update(lscope, '"+
c+"','"+b.operator+"',"+b.prefix+")";if(void 0!==a.localScope._SymbolsMap[c])return"lang.update(lscope, '"+a.localScope._SymbolsMap[c]+"','"+b.operator+"',"+b.prefix+")"}if(void 0!==a.globalScope[c])return"lang.update(gscope, '"+c+"','"+b.operator+"',"+b.prefix+")";if(void 0!==a.globalScope._SymbolsMap[c])return"lang.update(gscope, '"+a.globalScope._SymbolsMap[c]+"','"+b.operator+"',"+b.prefix+")";throw Error("Variable not recognised");}function sa(a,b){const c=h(a,b.right);let d=null,f="";if("MemberExpression"===
b.left.type)return d=h(a,b.left.object),f=!0===b.left.computed?h(a,b.left.property):"'"+b.left.property.name+"'","lang.assignmember("+d+","+f+",'"+b.operator+"',"+c+")";d=b.left.name.toLowerCase();if(null!==a.localScope){if(void 0!==a.localScope[d])return"lscope['"+d+"']\x3dlang.assign("+c+",'"+b.operator+"', lscope['"+d+"'])";if(void 0!==a.localScope._SymbolsMap[d])return"lscope['"+a.localScope._SymbolsMap[d]+"']\x3dlang.assign("+c+",'"+b.operator+"', lscope['"+a.localScope._SymbolsMap[d]+"'])"}if(void 0!==
a.globalScope[d])return"gscope['"+d+"']\x3dlang.assign("+c+",'"+b.operator+"', gscope['"+d+"'])";if(void 0!==a.globalScope._SymbolsMap[d])return"gscope['"+a.globalScope._SymbolsMap[d]+"']\x3dlang.assign("+c+",'"+b.operator+"', gscope['"+a.globalScope._SymbolsMap[d]+"'])";throw Error("Variable not recognised");}function S(a,b){return"BlockStatement"===b.type?h(a,b):"ReturnStatement"===b.type||"BreakStatement"===b.type||"ContinueStatement"===b.type?h(a,b)+"; ":"UpdateExpression"===b.type?"lastStatement \x3d "+
h(a,b)+"; ":"ExpressionStatement"===b.type?h(a,b):"ObjectExpression"===b.type?"lastStatement \x3d "+h(a,b)+"; ":h(a,b)+"; "}function L(a,b){let c="";for(let d=0;d<b.body.length;d++)c="ReturnStatement"===b.body[d].type?c+(h(a,b.body[d])+"; \n"):"BreakStatement"===b.body[d].type?c+(h(a,b.body[d])+"; \n"):"ContinueStatement"===b.body[d].type?c+(h(a,b.body[d])+"; \n"):"UpdateExpression"===b.body[d].type?c+("lastStatement \x3d "+h(a,b.body[d])+"; \n"):"ObjectExpression"===b.body[d].type?c+("lastStatement \x3d "+
h(a,b.body[d])+"; \n"):c+(h(a,b.body[d])+" \n");return c}function ra(a,b){let c=null===b.init?null:h(a,b.init);c===e.voidOperation&&(c=null);b=b.id.name.toLowerCase();if(null!==a.localScope){if(void 0!==a.localScope[b])return"lscope['"+b+"']\x3d"+c+"; ";if(void 0!==a.localScope._SymbolsMap[b])return"lscope['"+a.localScope._SymbolsMap[b]+"']\x3d"+c+"; ";var d=H(a);a.localScope._SymbolsMap[b]=d;a.mangleMap[b]=d;return"lscope['"+d+"']\x3d"+c+"; "}if(void 0!==a.globalScope[b])return"gscope['"+b+"']\x3d"+
c+"; ";if(void 0!==a.globalScope._SymbolsMap[b])return"gscope['"+a.globalScope._SymbolsMap[b]+"']\x3d"+c+"; ";d=H(a);a.globalScope._SymbolsMap[b]=d;a.mangleMap[b]=d;return"gscope['"+d+"']\x3d"+c+"; "}function Ba(a,b,c){b=b.toLowerCase();switch(b){case "hasz":return a=a.hasZ,void 0===a?!1:a;case "hasm":return a=a.hasM,void 0===a?!1:a;case "spatialreference":return b=a.spatialReference._arcadeCacheId,void 0===b&&(c=!0,Object.freeze&&Object.isFrozen(a.spatialReference)&&(c=!1),c&&(C++,b=a.spatialReference._arcadeCacheId=
C)),a=new B({wkt:a.spatialReference.wkt,wkid:a.spatialReference.wkid}),void 0!==b&&(a._arcadeCacheId="SPREF"+b.toString()),a}switch(a.type){case "extent":switch(b){case "xmin":case "xmax":case "ymin":case "ymax":case "zmin":case "zmax":case "mmin":case "mmax":return a=a[b],void 0!==a?a:null;case "type":return"Extent"}break;case "polygon":switch(b){case "rings":return b=a.cache._arcadeCacheId,void 0===b&&(C++,b=C,a.cache._arcadeCacheId=b),new Q(a.rings,a.spatialReference,!0===a.hasZ,!0===a.hasM,b);
case "type":return"Polygon"}break;case "point":switch(b){case "x":case "y":case "z":case "m":return void 0!==a[b]?a[b]:null;case "type":return"Point"}break;case "polyline":switch(b){case "paths":return b=a.cache._arcadeCacheId,void 0===b&&(C++,b=C,a.cache._arcadeCacheId=b),new Q(a.paths,a.spatialReference,!0===a.hasZ,!0===a.hasM,b);case "type":return"Polyline"}break;case "multipoint":switch(b){case "points":return b=a.cache._arcadeCacheId,void 0===b&&(C++,b=C,a.cache._arcadeCacheId=b),new ba(a.points,
a.spatialReference,!0===a.hasZ,!0===a.hasM,b,1);case "type":return"Multipoint"}}throw Error(l.nodeErrorMessage(c,"RUNTIME","PROPERTYNOTFOUND"));}function ua(a,b){try{const c=b.name.toLowerCase();if(null!==a.localScope){if(void 0!==a.localScope[c])return"lscope['"+c+"']";if(void 0!==a.localScope._SymbolsMap[c])return"lscope['"+a.localScope._SymbolsMap[c]+"']"}if(void 0!==a.globalScope[c])return"gscope['"+c+"']";if(void 0!==a.globalScope._SymbolsMap[c])return"gscope['"+a.globalScope._SymbolsMap[c]+
"']";throw Error(l.nodeErrorMessage(b,"RUNTIME","VARIABLENOTFOUND"));}catch(c){throw c;}}function T(a){return null===a?"":e.isArray(a)||e.isImmutableArray(a)?"Array":e.isDate(a)?"Date":e.isString(a)?"String":e.isBoolean(a)?"Boolean":e.isNumber(a)?"Number":a instanceof aa?"Attachment":a instanceof Z?"Portal":a instanceof B?"Dictionary":a instanceof D?"Feature":a instanceof la?"Point":a instanceof ma?"Polygon":a instanceof na?"Polyline":a instanceof ka?"Multipoint":a instanceof ia?"Extent":e.isFunctionParameter(a)?
"Function":e.isFeatureSet(a)?"FeatureSet":e.isFeatureSetCollection(a)?"FeatureSetCollection":a===e.voidOperation?"":"number"===typeof a&&isNaN(a)?"Number":"Unrecognised Type"}function U(a,b,c,d){try{if(e.equalityTest(b[c],d))return b[c+1];{const f=b.length-c;return 1===f?b[c]:2===f?null:3===f?b[c+2]:U(a,b,c+2,d)}}catch(f){throw f;}}function V(a,b,c,d){try{if(!0===d)return b[c+1];if(3===b.length-c)return b[c+2];{const f=b[c+2];if(!1===e.isBoolean(f))throw Error("WHEN needs boolean test conditions");
return V(a,b,c+2,f)}}catch(f){throw f;}}function E(a,b){var c=a.length,d=Math.floor(c/2);if(0===c)return[];if(1===c)return[a[0]];var f=E(a.slice(0,d),b);a=E(a.slice(d,c),b);for(c=[];0<f.length||0<a.length;)0<f.length&&0<a.length?(d=b(f[0],a[0]),isNaN(d)&&(d=0),0>=d?(c.push(f[0]),f=f.slice(1)):(c.push(a[0]),a=a.slice(1))):0<f.length?(c.push(f[0]),f=f.slice(1)):0<a.length&&(c.push(a[0]),a=a.slice(1));return b=c}function M(a,b){try{const c=a.length,d=Math.floor(c/2);if(0===c)return A.resolve([]);if(1===
c)return A.resolve([a[0]]);const f=[M(a.slice(0,d),b),M(a.slice(d,c),b)];return A.all(f).then(u=>I(u[0],u[1],b,[]))}catch(c){return A.reject(c)}}function I(a,b,c,d){return A.create((f,u)=>{0<a.length||0<b.length?0<a.length&&0<b.length?c(a[0],b[0]).then(r=>{try{isNaN(r)&&(r=1),0>=r?(d.push(a[0]),a=a.slice(1)):(d.push(b[0]),b=b.slice(1)),I(a,b,c,d).then(w=>{f(w)},u)}catch(w){u(w)}},u):0<a.length?(d.push(a[0]),a=a.slice(1),I(a,b,c,d).then(r=>{f(r)},u)):0<b.length&&(d.push(b[0]),b=b.slice(1),I(a,b,c,
d).then(r=>{f(r)},u)):f(d)})}function H(a){a.symbols.symbolCounter++;return"_T"+a.symbols.symbolCounter.toString()}function F(a){a.symbols.symbolCounter++;return"_Tvar"+a.symbols.symbolCounter.toString()}function Ca(a,b,c){const d={};a||(a={});c||(c={});d._SymbolsMap={};d.textformatting=1;d.infinity=1;d.pi=1;for(const f in b)d[f]=1;for(const f in c)d[f]=1;for(const f in a)d[f]=1;return d}function J(a,b){const c={mode:b,compiled:!0,functions:{},signatures:[],failDefferred:qa,standardFunction:x,standardFunctionAsync:x,
evaluateIdentifier:Da};for(let d=0;d<a.length;d++)a[d].registerFunctions(c);if("sync"===b){for(const d in c.functions)v[d]=new e.NativeFunction(c.functions[d]),N.prototype[d]=v[d];for(a=0;a<c.signatures.length;a++)l.addFunctionDeclaration(c.signatures[a],"sync")}else{for(const d in c.functions)G[d]=new e.NativeFunction(c.functions[d]),O.prototype[d]=G[d];for(a=0;a<c.signatures.length;a++)l.addFunctionDeclaration(c.signatures[a],"async")}}function Da(a,b){b=b.name;if("_SymbolsMap"===b)throw"Illegal";
if(0<a.localStack.length){if("_t"!==b.substr(0,2).toLowerCase()&&void 0!==a.localStack[a.localStack.length-1][b])return a.localStack[a.localStack.length-1][b];const c=a.mangleMap[b];if(void 0!==c&&void 0!==a.localStack[a.localStack.length-1][c])return a.localStack[a.localStack.length-1][c]}if("_t"!==b.substr(0,2).toLowerCase()&&void 0!==a.globalScope[b]||1===a.globalScope._SymbolsMap[b])return a.globalScope[b];b=a.mangleMap[b];if(void 0!==b)return a.globalScope[b]}function W(a){console.log(a)}let C=
0;const v={};K.registerFunctions(v,x);ha.registerFunctions(v,x);ea.registerFunctions(v,x);ca.registerFunctions(v,x);fa.registerFunctions(v,x);v["typeof"]=function(a,b){return x(a,b,function(c,d,f){e.pcCheck(f,1,1);c=T(f[0]);if("Unrecognised Type"===c)throw Error("Unrecognised Type");return c})};v.iif=function(a,b){try{return x(a,b,function(c,d,f){e.pcCheck(f,3,3);if(!1===e.isBoolean(f[0]))throw Error("IF Function must have a boolean test condition");return f[0]?f[1]:f[2]})}catch(c){throw c;}};v.decode=
function(a,b){try{return x(a,b,function(c,d,f){if(2>f.length)throw Error("Missing Parameters");if(2===f.length)return f[1];if(0===(f.length-1)%2)throw Error("Must have a default value result.");return U(a,f,1,f[0])})}catch(c){throw c;}};v.when=function(a,b){try{return x(a,b,function(c,d,f){if(3>f.length)throw Error("Missing Parameters");if(0===f.length%2)throw Error("Must have a default value result.");c=f[0];if(!1===e.isBoolean(c))throw Error("WHEN needs boolean test conditions");return V(a,f,0,
c)})}catch(c){throw c;}};v.top=function(a,b){return x(a,b,function(c,d,f){e.pcCheck(f,2,2);if(e.isArray(f[0]))return e.toNumber(f[1])>=f[0].length?f[0].slice(0):f[0].slice(0,e.toNumber(f[1]));if(e.isImmutableArray(f[0]))return e.toNumber(f[1])>=f[0].length()?f[0].slice(0):f[0].slice(0,e.toNumber(f[1]));throw Error("Top cannot accept this parameter type");})};v.first=function(a,b){return x(a,b,function(c,d,f){e.pcCheck(f,1,1);return e.isArray(f[0])?0===f[0].length?null:f[0][0]:e.isImmutableArray(f[0])?
0===f[0].length()?null:f[0].get(0):null})};v.sort=function(a,b){return x(a,b,function(c,d,f){e.pcCheck(f,1,2);d=f[0];e.isImmutableArray(d)&&(d=d.toArray());if(!1===e.isArray(d))throw Error("Illegal Argument");if(1<f.length){if(!1===e.isFunctionParameter(f[1]))throw Error("Illegal Argument");var u=d;const n=function(p,k){return X.callfunc(f[1],[p,k],c)};return a.isAsync?M(u,n):u=E(u,function(p,k){return n(p,k)})}{if(0===d.length)return[];const n={};for(var r=0;r<d.length;r++){var w=T(d[r]);""!==w&&
(n[w]=!0)}if(!0===n.Array||!0===n.Dictionary||!0===n.Feature||!0===n.Point||!0===n.Polygon||!0===n.Polyline||!0===n.Multipoint||!0===n.Extent||!0===n.Function)return d.slice(0);r=0;w="";for(u in n)r++,w=u;return d=1<r||"String"===w?E(d,function(p,k){if(null===p||void 0===p||p===e.voidOperation)return null===k||void 0===k||k===e.voidOperation?0:1;if(null===k||void 0===k||k===e.voidOperation)return-1;p=e.toString(p);k=e.toString(k);return p<k?-1:p===k?0:1}):"Number"===w?E(d,function(p,k){return p-k}):
"Boolean"===w?E(d,function(p,k){return p===k?0:k?-1:1}):"Date"===w?E(d,function(p,k){return k-p}):d.slice(0)}})};const G={};for(const a in v)G[a]=new e.NativeFunction(v[a]);da.registerFunctions(v,x);for(const a in v)v[a]=new e.NativeFunction(v[a]);const N=function(){};N.prototype=v;const O=function(){};O.prototype=G;K={fixSpatialReference:e.fixSpatialReference,parseArguments:function(a,b){const c=[];for(let d=0;d<b.arguments.length;d++)c.push(h(a,b.arguments[d]));return c},standardFunction:x};J([R.ArrayFunctions],
"sync");J([R.ArrayFunctions],"async");let P=0;const X={error(a,b,c){throw Error(l.nodeErrorMessage(a,b,c));},__awaiter(a,b,c,d){return A.create((f,u)=>{function r(p){try{n(d.next(p))}catch(k){u(k)}}function w(p){try{n(d["throw"](p))}catch(k){u(k)}}function n(p){p.done?f(p.value):p.value&&p.value.then?p.value.then(r,w):(P++,0===P%100?setTimeout(()=>{P=0;r(p.value)},0):r(p.value))}n((d=d.apply(a,b||[])).next())})},functionDepthchecker(a,b){return function(){b.depthCounter++;b.localStack.push([]);if(64<
b.depthCounter)throw Error("Exceeded maximum function depth");const c=a.apply(this,arguments);if(A.isPromiseLike(c))return c.then(d=>{b.depthCounter--;--b.localStack.length;return d});b.depthCounter--;--b.localStack.length;return c}},castString(a){return e.toString(a)},aCheck(a,b){if(e.isFunctionParameter(a))throw Error(l.nodeErrorMessage({type:b},"RUNTIME","FUNCTIONCONTEXTILLEGAL"));return a===e.voidOperation?null:a},Dictionary:B,Feature:D,dictionary(a){const b={};for(let c=0;c<a.length;c+=2){if(e.isFunctionParameter(a[c+
1]))throw Error("Illegal Argument");if(!1===e.isString(a[c]))throw Error("Illegal Argument");b[a[c].toString()]=a[c+1]===e.voidOperation?null:a[c+1]}a=new B(b);a.immutable=!1;return a},strCheck(a){if(!1===e.isString(a))throw Error("Illegal Argument");return a},unary(a,b){if(e.isBoolean(a)){if("!"===b)return!a;if("-"===b)return-1*e.toNumber(a);if("+"===b)return 1*e.toNumber(a);if("~"===b)return~e.toNumber(a);throw Error(l.nodeErrorMessage({type:"UnaryExpression",operator:b,prefix:null,argument:null},
"RUNTIME","NOTSUPPORTEDUNARYOPERATOR"));}if("-"===b)return-1*e.toNumber(a);if("+"===b)return 1*e.toNumber(a);if("~"===b)return~e.toNumber(a);throw Error(l.nodeErrorMessage({type:"UnaryExpression",operator:b,prefix:null,argument:null},"RUNTIME","NOTSUPPORTEDUNARYOPERATOR"));},logicalCheck(a){if(!1===e.isBoolean(a))throw Error(l.nodeErrorMessage({type:"LogicalExpression",operator:null,left:null,right:null},"RUNTIME","ONLYORORAND"));return a},logical(a,b,c){if(e.isBoolean(a)&&e.isBoolean(b))switch(c){case "||":return a||
b;case "\x26\x26":return a&&b}throw Error(l.nodeErrorMessage({type:"LogicalExpression",operator:null,left:null,right:null},"RUNTIME","ONLYORORAND"));},binary(a,b,c){switch(c){case "|":case "\x3c\x3c":case "\x3e\x3e":case "\x3e\x3e\x3e":case "^":case "\x26":return e.binaryOperator(e.toNumber(a),e.toNumber(b),c);case "\x3d\x3d":return e.equalityTest(a,b);case "\x3d":return e.equalityTest(a,b);case "!\x3d":return!e.equalityTest(a,b);case "\x3c":return e.greaterThanLessThan(a,b,c);case "\x3e":return e.greaterThanLessThan(a,
b,c);case "\x3c\x3d":return e.greaterThanLessThan(a,b,c);case "\x3e\x3d":return e.greaterThanLessThan(a,b,c);case "+":return e.isString(a)||e.isString(b)?e.toString(a)+e.toString(b):e.toNumber(a)+e.toNumber(b);case "-":return e.toNumber(a)-e.toNumber(b);case "*":return e.toNumber(a)*e.toNumber(b);case "/":return e.toNumber(a)/e.toNumber(b);case "%":return e.toNumber(a)%e.toNumber(b);default:throw Error(l.nodeErrorMessage({type:"BinaryExpression",operator:c,left:a,right:b},"RUNTIME","OPERATORNOTRECOGNISED"));
}},assign(a,b,c){switch(b){case "\x3d":return a===e.voidOperation?null:a;case "/\x3d":return e.toNumber(c)/e.toNumber(a);case "*\x3d":return e.toNumber(c)*e.toNumber(a);case "-\x3d":return e.toNumber(c)-e.toNumber(a);case "+\x3d":return e.isString(c)||e.isString(a)?e.toString(c)+e.toString(a):e.toNumber(c)+e.toNumber(a);case "%\x3d":return e.toNumber(c)%e.toNumber(a);default:throw Error(l.nodeErrorMessage({type:"AssignmentExpression",operator:b,left:null,right:null},"RUNTIME","OPERATORNOTRECOGNISED"));
}},update(a,b,c,d){const f=e.toNumber(a[b]);a[b]="++"===c?f+1:f-1;return!1===d?f:"++"===c?f+1:f-1},graphicToFeature(a,b){return null===a?null:D.createFromGraphicLikeObject(a.geometry,a.attributes,b)},memberupdate(a,b,c,d){let f;if(e.isArray(a))if(e.isNumber(b)){0>b&&(b=a.length+b);if(0>b||b>=a.length)throw Error("Assignment outside of array bounds");f=e.toNumber(a[b]);a[b]="++"===c?f+1:f-1}else throw Error("Invalid Parameter");else if(a instanceof B){if(!1===e.isString(b))throw Error("Dictionary accessor must be a string");
if(!0===a.hasField(b))f=e.toNumber(a.field(b)),a.setField(b,"++"===c?f+1:f-1);else throw Error("Invalid Parameter");}else if(a instanceof D){if(!1===e.isString(b))throw Error("Feature accessor must be a string");if(!0===a.hasField(b))f=e.toNumber(a.field(b)),a.setField(b,"++"===c?f+1:f-1);else throw Error("Invalid Parameter");}else{if(e.isImmutableArray(a))throw Error("Array is Immutable");throw Error("Invalid Parameter");}return!1===d?f:"++"===c?f+1:f-1},assignmember(a,b,c,d){if(e.isArray(a))if(e.isNumber(b)){0>
b&&(b=a.length+b);if(0>b||b>a.length)throw Error("Assignment outside of array bounds");if(b===a.length&&"\x3d"!==c)throw Error("Invalid Parameter");a[b]=this.assign(d,c,a[b])}else throw Error("Invalid Parameter");else if(a instanceof B){if(!1===e.isString(b))throw Error("Dictionary accessor must be a string");if(!0===a.hasField(b))a.setField(b,this.assign(d,c,a.field(b)));else{if("\x3d"!==c)throw Error("Invalid Parameter");a.setField(b,this.assign(d,c,null))}}else if(a instanceof D){if(!1===e.isString(b))throw Error("Feature accessor must be a string");
if(!0===a.hasField(b))a.setField(b,this.assign(d,c,a.field(b)));else{if("\x3d"!==c)throw Error("Invalid Parameter");a.setField(b,this.assign(d,c,null))}}else{if(e.isImmutableArray(a))throw Error("Array is Immutable");throw Error("Invalid Parameter");}},member(a,b){if(null===a)throw Error(l.nodeErrorMessage({type:"MemberExpression",object:null,property:null,computed:null},"RUNTIME","NOTFOUND"));if(a instanceof pa.FeatureSetReader){if(e.isString(b))return a.field(b);throw Error(l.nodeErrorMessage({type:"MemberExpression",
object:null,property:null,computed:null},"RUNTIME","INVALIDTYPE"));}if(a instanceof B||a instanceof D){if(e.isString(b))return a.field(b);throw Error(l.nodeErrorMessage({type:"MemberExpression",object:null,property:null,computed:null},"RUNTIME","INVALIDTYPE"));}if(a instanceof ja){if(e.isString(b))return Ba(a,b,"MemberExpression");throw Error(l.nodeErrorMessage({type:"MemberExpression",object:null,property:null,computed:null},"RUNTIME","INVALIDTYPE"));}if(e.isArray(a)){if(e.isNumber(b)&&isFinite(b)&&
Math.floor(b)===b){0>b&&(b=a.length+b);if(b>=a.length||0>b)throw Error(l.nodeErrorMessage({type:"MemberExpression",object:null,property:null,computed:null},"RUNTIME","OUTOFBOUNDS"));return a[b]}throw Error(l.nodeErrorMessage({type:"MemberExpression",object:null,property:null,computed:null},"RUNTIME","INVALIDTYPE"));}if(e.isString(a)){if(e.isNumber(b)&&isFinite(b)&&Math.floor(b)===b){0>b&&(b=a.length+b);if(b>=a.length||0>b)throw Error(l.nodeErrorMessage({type:"MemberExpression",object:null,property:null,
computed:null},"RUNTIME","OUTOFBOUNDS"));return a[b]}throw Error(l.nodeErrorMessage({type:"MemberExpression",object:null,property:null,computed:null},"RUNTIME","INVALIDTYPE"));}if(e.isImmutableArray(a)&&e.isNumber(b)&&isFinite(b)&&Math.floor(b)===b){0>b&&(b=a.length()+b);if(b>=a.length()||0>b)throw Error(l.nodeErrorMessage({type:"MemberExpression",object:null,property:null,computed:null},"RUNTIME","OUTOFBOUNDS"));return a.get(b)}throw Error(l.nodeErrorMessage({type:"MemberExpression",object:null,
property:null,computed:null},"RUNTIME","INVALIDTYPE"));},callfunc(a,b,c){return a instanceof e.NativeFunction?a.fn(c,{arguments:b,preparsed:!0}):a instanceof e.SizzleFunction?a.fn.apply(this,b):a.apply(this,b)}};y.compileScript=function(a,b=null,c=!1){null===b&&(b={vars:{},customfunctions:{}});b={isAsync:c,globalScope:Ca(b.vars,c?G:v,b.customfunctions),localScope:null,mangleMap:{},console:W,lrucache:b.lrucache,interceptor:b.interceptor,services:b.services,symbols:{symbolCounter:0}};a=h(b,a.body[0].body);
""===a&&(a="lc.voidOperation; ");b={lc:e.lc,lang:X,mangles:b.mangleMap,postProcess(d){d instanceof e.ReturnResult&&(d=d.value);d instanceof e.ImplicitResult&&(d=d.value);d===e.voidOperation&&(d=null);if(d===e.breakResult)throw Error("Cannot return BREAK");if(d===e.continueResult)throw Error("Cannot return CONTINUE");if(e.isFunctionParameter(d))throw Error("Cannot return FUNCTION");return d},prepare(d,f){let u=d.spatialReference;if(null===u||void 0===u)u=new oa({wkid:102100});{var r=d.vars;var w=d.customfunctions;
const n=f?new O:new N;r||(r={});w||(w={});const p=new B({newline:"\n",tab:"\t",singlequote:"'",doublequote:'"',forwardslash:"/",backwardslash:"\\"});p.immutable=!1;n._SymbolsMap={textformatting:1,infinity:1,pi:1};n.textformatting=p;n.infinity=Number.POSITIVE_INFINITY;n.pi=Math.PI;for(const k in w)n[k]=w[k],n._SymbolsMap[k]=1;for(const k in r)n._SymbolsMap[k]=1,n[k]=r[k]&&"esri.Graphic"===r[k].declaredClass?D.createFromGraphic(r[k]):r[k];r=n}return{localStack:[],isAsync:f,mangleMap:this.mangles,spatialReference:u,
globalScope:r,abortSignal:void 0===d.abortSignal||null===d.abortSignal?{aborted:!1}:d.abortSignal,localScope:null,services:d.services,console:d.console?d.console:W,lrucache:d.lrucache,interceptor:d.interceptor,symbols:{symbolCounter:0},depthCounter:1}}};return(new Function("context","spatialReference",c?"var runtimeCtx\x3dthis.prepare(context, true);\n var lc \x3d this.lc;  var lang \x3d this.lang; var gscope\x3druntimeCtx.globalScope; \nreturn lang.__awaiter(this, void 0, void 0, function* () {\n\n function mainBody() {\n var lastStatement\x3dlc.voidOperation;\n return lang.__awaiter(this, void 0, void 0, function* () {\n"+
a+"\n return lastStatement; }); } \n return this.postProcess(yield mainBody()); }); ":"var runtimeCtx\x3dthis.prepare(context, false);\n var lc \x3d this.lc;  var lang \x3d this.lang; var gscope\x3druntimeCtx.globalScope; \n function mainBody() {\n var lastStatement\x3dlc.voidOperation;\n "+a+"\n return lastStatement; } \n return this.postProcess(mainBody()); ")).bind(b)};y.enableAsyncSupport=function(){return(new Promise((a,b)=>Y(["./functions/geomasync"],a,b))).then(a=>{J([a],"async");return!0})};
y.executeScript=function(a,b){return a(b)};y.extend=J;y.extractExpectedFieldLiterals=function(a){return l.findExpectedFieldLiterals(a)};y.extractFieldLiterals=function(a,b){return l.findFieldLiterals(a)};y.functionHelper=K;y.referencesFunction=function(a,b){return l.referencesFunction(a,b)};y.referencesMember=function(a,b){return l.referencesMember(a,b)};y.validateScript=function(a,b){return l.validateScript(a,b,"sync")};Object.defineProperty(y,"__esModule",{value:!0})});