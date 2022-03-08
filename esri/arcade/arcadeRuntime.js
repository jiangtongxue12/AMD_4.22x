// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define("exports ./ArcadePortal ./Attachment ./Dictionary ./Feature ./FunctionWrapper ./ImmutablePathArray ./ImmutablePointArray ../chunks/languageUtils ./treeAnalysis ../chunks/array ./functions/date ./functions/geometry ./functions/geomsync ./functions/maths ./functions/stats ./functions/string ../geometry/Extent ../geometry/Geometry ../geometry/Multipoint ../geometry/Point ../geometry/Polygon ../geometry/Polyline ../geometry/SpatialReference".split(" "),function(u,U,V,y,A,G,I,W,e,l,X,H,Y,Z,aa,ba,
ca,da,J,ea,fa,ha,ia,ja){function K(b,a){const c=[];for(let d=0;d<a.arguments.length;d++)c.push(k(b,a.arguments[d]));return c}function t(b,a,c){try{return!0===a.preparsed?c(b,null,a.arguments):c(b,a,K(b,a))}catch(d){throw d;}}function k(b,a){try{switch(a.type){case "EmptyStatement":return e.voidOperation;case "VariableDeclarator":{let g=null===a.init?null:k(b,a.init);g===e.voidOperation&&(g=null);if("Identifier"!==a.id.type)throw Error("Can only assign a regular variable");const v=a.id.name.toLowerCase();
null!==b.localScope?b.localScope[v]={value:g,valueset:!0,node:a.init}:b.globalScope[v]={value:g,valueset:!0,node:a.init};var c=e.voidOperation}return c;case "VariableDeclaration":for(var d=0;d<a.declarations.length;d++)k(b,a.declarations[d]);return e.voidOperation;case "BlockStatement":a:{let g=e.voidOperation;for(d=0;d<a.body.length;d++)if(g=k(b,a.body[d]),g instanceof e.ReturnResult||g===e.breakResult||g===e.continueResult){var f=g;break a}f=g}return f;case "FunctionDeclaration":{const g=a.id.name.toLowerCase();
b.globalScope[g]={valueset:!0,node:null,value:new G(a,b)};var m=e.voidOperation}return m;case "ReturnStatement":if(null===a.argument)var r=new e.ReturnResult(e.voidOperation);else{var n=k(b,a.argument);r=new e.ReturnResult(n)}return r;case "IfStatement":{if("AssignmentExpression"===a.test.type||"UpdateExpression"===a.test.type)throw Error(l.nodeErrorMessage(a.test,"RUNTIME","CANNOT_USE_ASSIGNMENT_IN_CONDITION"));const g=k(b,a.test);if(!0===g)var p=k(b,a.consequent);else if(!1===g)p=null!==a.alternate?
k(b,a.alternate):e.voidOperation;else throw Error(l.nodeErrorMessage(a,"RUNTIME","CANNOT_USE_NONBOOLEAN_IN_CONDITION"));}return p;case "ExpressionStatement":if("AssignmentExpression"===a.expression.type||"UpdateExpression"===a.expression.type)var E=k(b,a.expression);else if("CallExpression"===a.expression.type){const g=k(b,a.expression);E=g===e.voidOperation?e.voidOperation:new e.ImplicitResult(g)}else{{const g=k(b,a.expression);E=g===e.voidOperation?e.voidOperation:new e.ImplicitResult(g)}}return E;
case "AssignmentExpression":{const g=k(b,a.right);d=null;var h="";if("MemberExpression"===a.left.type){d=k(b,a.left.object);!0===a.left.computed?h=k(b,a.left.property):"Identifier"===a.left.property.type&&(h=a.left.property.name);if(e.isArray(d))if(e.isNumber(h)){0>h&&(h=d.length+h);if(0>h||h>d.length)throw Error("Assignment outside of array bounds");if(h===d.length&&"\x3d"!==a.operator)throw Error("Invalid Parameter");d[h]=B(g,a.operator,d[h],a)}else throw Error("Invalid Parameter");else if(d instanceof
y){if(!1===e.isString(h))throw Error("Dictionary accessor must be a string");if(!0===d.hasField(h))d.setField(h,B(g,a.operator,d.field(h),a));else{if("\x3d"!==a.operator)throw Error("Invalid Parameter");d.setField(h,B(g,a.operator,null,a))}}else if(d instanceof A){if(!1===e.isString(h))throw Error("Feature accessor must be a string");if(!0===d.hasField(h))d.setField(h,B(g,a.operator,d.field(h),a));else{if("\x3d"!==a.operator)throw Error("Invalid Parameter");d.setField(h,B(g,a.operator,null,a))}}else{if(e.isImmutableArray(d))throw Error("Array is Immutable");
throw Error("Invalid Parameter");}var C=e.voidOperation}else if(d=a.left.name.toLowerCase(),null!==b.localScope&&void 0!==b.localScope[d])b.localScope[d]={value:B(g,a.operator,b.localScope[d].value,a),valueset:!0,node:a.right},C=e.voidOperation;else if(void 0!==b.globalScope[d])b.globalScope[d]={value:B(g,a.operator,b.globalScope[d].value,a),valueset:!0,node:a.right},C=e.voidOperation;else throw Error("Variable not recognised");}return C;case "UpdateExpression":{let g;d=null;h="";if("MemberExpression"===
a.argument.type){d=k(b,a.argument.object);!0===a.argument.computed?h=k(b,a.argument.property):"Identifier"===a.argument.property.type&&(h=a.argument.property.name);if(e.isArray(d))if(e.isNumber(h)){0>h&&(h=d.length+h);if(0>h||h>=d.length)throw Error("Assignment outside of array bounds");g=e.toNumber(d[h]);d[h]="++"===a.operator?g+1:g-1}else throw Error("Invalid Parameter");else if(d instanceof y){if(!1===e.isString(h))throw Error("Dictionary accessor must be a string");if(!0===d.hasField(h))g=e.toNumber(d.field(h)),
d.setField(h,"++"===a.operator?g+1:g-1);else throw Error("Invalid Parameter");}else if(d instanceof A){if(!1===e.isString(h))throw Error("Feature accessor must be a string");if(!0===d.hasField(h))g=e.toNumber(d.field(h)),d.setField(h,"++"===a.operator?g+1:g-1);else throw Error("Invalid Parameter");}else{if(e.isImmutableArray(d))throw Error("Array is Immutable");throw Error("Invalid Parameter");}var w=!1===a.prefix?g:"++"===a.operator?g+1:g-1}else{d="Identifier"===a.argument.type?a.argument.name.toLowerCase():
"";if(!d)throw Error("Invalid identifier");if(null!==b.localScope&&void 0!==b.localScope[d])g=e.toNumber(b.localScope[d].value),b.localScope[d]={value:"++"===a.operator?g+1:g-1,valueset:!0,node:a},w=!1===a.prefix?g:"++"===a.operator?g+1:g-1;else if(void 0!==b.globalScope[d])g=e.toNumber(b.globalScope[d].value),b.globalScope[d]={value:"++"===a.operator?g+1:g-1,valueset:!0,node:a},w=!1===a.prefix?g:"++"===a.operator?g+1:g-1;else throw Error("Variable not recognised");}}return w;case "BreakStatement":return e.breakResult;
case "ContinueStatement":return e.continueResult;case "TemplateElement":return a.value?a.value.cooked:"";case "TemplateLiteral":var x;d="";h=0;for(const g of a.quasis)if(d+=g.value?g.value.cooked:"",!1===g.tail){const v=a.expressions[h]?e.toString(k(b,a.expressions[h])):"";d+=v;h++}return x=d;case "ForStatement":null!==a.init&&k(b,a.init);h={testResult:!0,lastAction:e.voidOperation};do b:{C=b;w=a;x=h;if(null!==w.test){x.testResult=k(C,w.test);if(!1===x.testResult)break b;if(!0!==x.testResult)throw Error(l.nodeErrorMessage(w,
"RUNTIME","CANNOT_USE_NONBOOLEAN_IN_CONDITION"));}x.lastAction=k(C,w.body);x.lastAction===e.breakResult?x.testResult=!1:x.lastAction instanceof e.ReturnResult?x.testResult=!1:null!==w.update&&k(C,w.update)}while(!0===h.testResult);d=h.lastAction instanceof e.ReturnResult?h.lastAction:e.voidOperation;return d;case "ForInStatement":return ka(b,a);case "Identifier":return L(b,a);case "MemberExpression":return la(b,a);case "Literal":return a.value;case "CallExpression":return ma(b,a);case "UnaryExpression":return na(b,
a);case "BinaryExpression":return oa(b,a);case "LogicalExpression":return pa(b,a);case "ArrayExpression":try{d=[];for(h=0;h<a.elements.length;h++){const g=k(b,a.elements[h]);if(e.isFunctionParameter(g))throw Error(l.nodeErrorMessage(a,"RUNTIME","FUNCTIONCONTEXTILLEGAL"));g===e.voidOperation?d.push(null):d.push(g)}var qa=d}catch(g){throw g;}return qa;case "ObjectExpression":{d={};for(h=0;h<a.properties.length;h++){const v=k(b,a.properties[h]);if(e.isFunctionParameter(v.value))throw Error("Illegal Argument");
if(!1===e.isString(v.key))throw Error("Illegal Argument");d[v.key.toString()]=v.value===e.voidOperation?null:v.value}const g=new y(d);g.immutable=!1;var ra=g}return ra;case "Property":return{key:"Identifier"===a.key.type?a.key.name:k(b,a.key),value:k(b,a.value)};default:throw Error(l.nodeErrorMessage(a,"RUNTIME","UNREOGNISED"));}}catch(g){throw g;}}function ka(b,a){var c=k(b,a.right);"VariableDeclaration"===a.left.type&&k(b,a.left);let d=null;var f="";if("VariableDeclaration"===a.left.type){var m=
a.left.declarations[0].id;"Identifier"===m.type&&(f=m.name)}else"Identifier"===a.left.type&&(f=a.left.name);if(!f)throw Error(l.nodeErrorMessage(a,"RUNTIME","INVALIDVARIABLE"));f=f.toLowerCase();null!==b.localScope&&void 0!==b.localScope[f]&&(d=b.localScope[f]);null===d&&void 0!==b.globalScope[f]&&(d=b.globalScope[f]);if(null===d)throw Error(l.nodeErrorMessage(a,"RUNTIME","VARIABLENOTDECLARED"));if(e.isArray(c)||e.isString(c)){c=c.length;for(f=0;f<c;f++){d.value=f;m=k(b,a.body);if(m===e.breakResult)break;
if(m instanceof e.ReturnResult)return m}return e.voidOperation}if(e.isImmutableArray(c)){for(f=0;f<c.length();f++){d.value=f;m=k(b,a.body);if(m===e.breakResult)break;if(m instanceof e.ReturnResult)return m}return e.voidOperation}if(c instanceof y||c instanceof A)for(c=c.keys(),f=0;f<c.length;f++){d.value=c[f];m=k(b,a.body);if(m===e.breakResult)break;if(m instanceof e.ReturnResult)return m}else return e.voidOperation}function B(b,a,c,d){switch(a){case "\x3d":return b===e.voidOperation?null:b;case "/\x3d":return e.toNumber(c)/
e.toNumber(b);case "*\x3d":return e.toNumber(c)*e.toNumber(b);case "-\x3d":return e.toNumber(c)-e.toNumber(b);case "+\x3d":return e.isString(c)||e.isString(b)?e.toString(c)+e.toString(b):e.toNumber(c)+e.toNumber(b);case "%\x3d":return e.toNumber(c)%e.toNumber(b);default:throw Error(l.nodeErrorMessage(d,"RUNTIME","OPERATORNOTRECOGNISED"));}}function M(b,a,c){a=a.toLowerCase();switch(a){case "hasz":return b=b.hasZ,void 0===b?!1:b;case "hasm":return b=b.hasM,void 0===b?!1:b;case "spatialreference":return a=
b.spatialReference._arcadeCacheId,void 0===a&&(c=!0,Object.freeze&&Object.isFrozen(b.spatialReference)&&(c=!1),c&&(z++,a=b.spatialReference._arcadeCacheId=z)),b=new y({wkt:b.spatialReference.wkt,wkid:b.spatialReference.wkid}),void 0!==a&&(b._arcadeCacheId="SPREF"+a.toString()),b}switch(b.type){case "extent":switch(a){case "xmin":case "xmax":case "ymin":case "ymax":case "zmin":case "zmax":case "mmin":case "mmax":return b=b[a],void 0!==b?b:null;case "type":return"Extent"}break;case "polygon":switch(a){case "rings":return a=
b.cache._arcadeCacheId,void 0===a&&(z++,a=z,b.cache._arcadeCacheId=a),new I(b.rings,b.spatialReference,!0===b.hasZ,!0===b.hasM,a);case "type":return"Polygon"}break;case "point":switch(a){case "x":case "y":case "z":case "m":return void 0!==b[a]?b[a]:null;case "type":return"Point"}break;case "polyline":switch(a){case "paths":return a=b.cache._arcadeCacheId,void 0===a&&(z++,a=z,b.cache._arcadeCacheId=a),new I(b.paths,b.spatialReference,!0===b.hasZ,!0===b.hasM,a);case "type":return"Polyline"}break;case "multipoint":switch(a){case "points":return a=
b.cache._arcadeCacheId,void 0===a&&(z++,a=z,b.cache._arcadeCacheId=a),new W(b.points,b.spatialReference,!0===b.hasZ,!0===b.hasM,a,1);case "type":return"Multipoint"}}throw Error(l.nodeErrorMessage(c,"RUNTIME","PROPERTYNOTFOUND"));}function la(b,a){try{const c=k(b,a.object);if(null===c)throw Error(l.nodeErrorMessage(a,"RUNTIME","NOTFOUND"));if(!1===a.computed){if("Identifier"===a.property.type){if(c instanceof y||c instanceof A)return c.field(a.property.name);if(c instanceof J)return M(c,a.property.name,
a)}throw Error(l.nodeErrorMessage(a,"RUNTIME","INVALIDTYPE"));}{let d=k(b,a.property);if(c instanceof y||c instanceof A){if(e.isString(d))return c.field(d);throw Error(l.nodeErrorMessage(a,"RUNTIME","INVALIDTYPE"));}if(c instanceof J){if(e.isString(d))return M(c,d,a);throw Error(l.nodeErrorMessage(a,"RUNTIME","INVALIDTYPE"));}if(e.isArray(c)){if(e.isNumber(d)&&isFinite(d)&&Math.floor(d)===d){0>d&&(d=c.length+d);if(d>=c.length||0>d)throw Error(l.nodeErrorMessage(a,"RUNTIME","OUTOFBOUNDS"));return c[d]}throw Error(l.nodeErrorMessage(a,
"RUNTIME","INVALIDTYPE"));}if(e.isString(c)){if(e.isNumber(d)&&isFinite(d)&&Math.floor(d)===d){0>d&&(d=c.length+d);if(d>=c.length||0>d)throw Error(l.nodeErrorMessage(a,"RUNTIME","OUTOFBOUNDS"));return c[d]}throw Error(l.nodeErrorMessage(a,"RUNTIME","INVALIDTYPE"));}if(e.isImmutableArray(c)&&e.isNumber(d)&&isFinite(d)&&Math.floor(d)===d){0>d&&(d=c.length()+d);if(d>=c.length()||0>d)throw Error(l.nodeErrorMessage(a,"RUNTIME","OUTOFBOUNDS"));return c.get(d)}throw Error(l.nodeErrorMessage(a,"RUNTIME",
"INVALIDTYPE"));}}catch(c){throw c;}}function na(b,a){try{const c=k(b,a.argument);if(e.isBoolean(c)){if("!"===a.operator)return!c;if("-"===a.operator)return-1*e.toNumber(c);if("+"===a.operator)return 1*e.toNumber(c);if("~"===a.operator)return~e.toNumber(c);throw Error(l.nodeErrorMessage(a,"RUNTIME","NOTSUPPORTEDUNARYOPERATOR"));}if("~"===a.operator)return~e.toNumber(c);if("-"===a.operator)return-1*e.toNumber(c);if("+"===a.operator)return 1*e.toNumber(c);throw Error(l.nodeErrorMessage(a,"RUNTIME",
"NOTSUPPORTEDUNARYOPERATOR"));}catch(c){throw c;}}function oa(b,a){try{const c=[k(b,a.left),k(b,a.right)],d=c[0],f=c[1];switch(a.operator){case "|":case "\x3c\x3c":case "\x3e\x3e":case "\x3e\x3e\x3e":case "^":case "\x26":return e.binaryOperator(e.toNumber(d),e.toNumber(f),a.operator);case "\x3d\x3d":return e.equalityTest(d,f);case "!\x3d":return!e.equalityTest(d,f);case "\x3c":return e.greaterThanLessThan(d,f,a.operator);case "\x3e":return e.greaterThanLessThan(d,f,a.operator);case "\x3c\x3d":return e.greaterThanLessThan(d,
f,a.operator);case "\x3e\x3d":return e.greaterThanLessThan(d,f,a.operator);case "+":return e.isString(d)||e.isString(f)?e.toString(d)+e.toString(f):e.toNumber(d)+e.toNumber(f);case "-":return e.toNumber(d)-e.toNumber(f);case "*":return e.toNumber(d)*e.toNumber(f);case "/":return e.toNumber(d)/e.toNumber(f);case "%":return e.toNumber(d)%e.toNumber(f);default:throw Error(l.nodeErrorMessage(a,"RUNTIME","OPERATORNOTRECOGNISED"));}}catch(c){throw c;}}function pa(b,a){try{if("AssignmentExpression"===a.left.type||
"UpdateExpression"===a.left.type)throw Error(l.nodeErrorMessage(a.left,"RUNTIME","CANNOT_USE_ASSIGNMENT_IN_CONDITION"));if("AssignmentExpression"===a.right.type||"UpdateExpression"===a.right.type)throw Error(l.nodeErrorMessage(a.right,"RUNTIME","CANNOT_USE_ASSIGNMENT_IN_CONDITION"));const c=k(b,a.left);if(e.isBoolean(c))switch(a.operator){case "||":if(!0===c)return c;{const d=k(b,a.right);if(e.isBoolean(d))return d;throw Error(l.nodeErrorMessage(a,"RUNTIME","ONLYORORAND"));}case "\x26\x26":if(!1===
c)return c;{const d=k(b,a.right);if(e.isBoolean(d))return d;throw Error(l.nodeErrorMessage(a,"RUNTIME","ONLYORORAND"));}default:throw Error(l.nodeErrorMessage(a,"RUNTIME","ONLYORORAND"));}throw Error(l.nodeErrorMessage(a,"RUNTIME","ONLYBOOLEAN"));}catch(c){throw c;}}function L(b,a){let c;try{const d=a.name.toLowerCase();if(null!==b.localScope&&void 0!==b.localScope[d]){c=b.localScope[d];if(!0===c.valueset)return c.value;c.value=k(b,c.node);c.valueset=!0;return c.value}if(void 0!==b.globalScope[d]){c=
b.globalScope[d];if(!0===c.valueset)return c.value;c.value=k(b,c.node);c.valueset=!0;return c.value}throw Error(l.nodeErrorMessage(a,"RUNTIME","VARIABLENOTFOUND"));}catch(d){throw d;}}function ma(b,a){try{if("Identifier"!==a.callee.type)throw Error(l.nodeErrorMessage(a,"RUNTIME","ONLYNODESSUPPORTED"));if(null!==b.localScope&&void 0!==b.localScope[a.callee.name.toLowerCase()]){const c=b.localScope[a.callee.name.toLowerCase()];if(c.value instanceof e.NativeFunction)return c.value.fn(b,a);if(c.value instanceof
G)return N(b,a,c.value.definition);throw Error(l.nodeErrorMessage(a,"RUNTIME","NOTAFUNCTION"));}if(void 0!==b.globalScope[a.callee.name.toLowerCase()]){const c=b.globalScope[a.callee.name.toLowerCase()];if(c.value instanceof e.NativeFunction)return c.value.fn(b,a);if(c.value instanceof G)return N(b,a,c.value.definition);throw Error(l.nodeErrorMessage(a,"RUNTIME","NOTAFUNCTION"));}throw Error(l.nodeErrorMessage(a,"RUNTIME","NOTFOUND"));}catch(c){throw c;}}function O(b){return null==b?"":e.isArray(b)||
e.isImmutableArray(b)?"Array":e.isDate(b)?"Date":e.isString(b)?"String":e.isBoolean(b)?"Boolean":e.isNumber(b)?"Number":b instanceof V?"Attachment":b instanceof U?"Portal":b instanceof y?"Dictionary":b instanceof A?"Feature":b instanceof fa?"Point":b instanceof ha?"Polygon":b instanceof ia?"Polyline":b instanceof ea?"Multipoint":b instanceof da?"Extent":e.isFunctionParameter(b)?"Function":e.isFeatureSet(b)?"FeatureSet":e.isFeatureSetCollection(b)?"FeatureSetCollection":b===e.voidOperation?"":"number"===
typeof b&&isNaN(b)?"Number":"Unrecognised Type"}function P(b,a,c,d){try{const f=k(b,a.arguments[c]);if(e.equalityTest(f,d))return k(b,a.arguments[c+1]);{const m=a.arguments.length-c;return 1===m?k(b,a.arguments[c]):2===m?null:3===m?k(b,a.arguments[c+2]):P(b,a,c+2,d)}}catch(f){throw f;}}function Q(b,a,c,d){try{if(!0===d)return k(b,a.arguments[c+1]);if(3===a.arguments.length-c)return k(b,a.arguments[c+2]);{const f=k(b,a.arguments[c+2]);if(!1===e.isBoolean(f))throw Error("WHEN needs boolean test conditions");
return Q(b,a,c+2,f)}}catch(f){throw f;}}function D(b,a){var c=b.length,d=Math.floor(c/2);if(0===c)return[];if(1===c)return[b[0]];var f=D(b.slice(0,d),a);b=D(b.slice(d,c),a);for(c=[];0<f.length||0<b.length;)0<f.length&&0<b.length?(d=a(f[0],b[0]),isNaN(d)&&(d=0),0>=d?(c.push(f[0]),f=f.slice(1)):(c.push(b[0]),b=b.slice(1))):0<f.length?(c.push(f[0]),f=f.slice(1)):0<b.length&&(c.push(b[0]),b=b.slice(1));return a=c}function R(b,a,c){try{const d=b.body;if(c.length!==b.params.length)throw Error("Invalid Parameter calls to function.");
for(let m=0;m<c.length;m++)a.localScope[b.params[m].name.toLowerCase()]={value:c[m],valueset:!0,node:null};const f=k(a,d);if(f instanceof e.ReturnResult)return f.value;if(f===e.breakResult)throw Error("Cannot Break from a Function");if(f===e.continueResult)throw Error("Cannot Continue from a Function");return f instanceof e.ImplicitResult?f.value:f}catch(d){throw d;}}function N(b,a,c){return t(b,a,function(d,f,m){d={spatialReference:b.spatialReference,globalScope:b.globalScope,depthCounter:b.depthCounter+
1,console:b.console,lrucache:b.lrucache,interceptor:b.interceptor,localScope:{}};if(64<d.depthCounter)throw Error("Exceeded maximum function depth");return R(c,d,m)})}function S(b){return function(){const a={spatialReference:b.context.spatialReference,console:b.context.console,lrucache:b.context.lrucache,interceptor:b.context.interceptor,localScope:{},depthCounter:b.context.depthCounter+1,globalScope:b.context.globalScope};if(64<a.depthCounter)throw Error("Exceeded maximum function depth");return R(b.definition,
a,arguments)}}function sa(b){console.log(b)}function T(b){const a={mode:"sync",compiled:!1,functions:{},signatures:[],standardFunction:t,evaluateIdentifier:L,arcadeCustomFunctionHandler:S};for(let c=0;c<b.length;c++)b[c].registerFunctions(a);for(const c in a.functions)q[c]={value:new e.NativeFunction(a.functions[c]),valueset:!0,node:null},F.prototype[c]=q[c];for(b=0;b<a.signatures.length;b++)l.addFunctionDeclaration(a.signatures[b],"async")}let z=0;const q={};H.registerFunctions(q,t);ca.registerFunctions(q,
t);aa.registerFunctions(q,t);Y.registerFunctions(q,t);ba.registerFunctions(q,t);Z.registerFunctions(q,t);q["typeof"]=function(b,a){return t(b,a,function(c,d,f){e.pcCheck(f,1,1);c=O(f[0]);if("Unrecognised Type"===c)throw Error("Unrecognised Type");return c})};q.iif=function(b,a){try{e.pcCheck(null===a.arguments?[]:a.arguments,3,3);const c=k(b,a.arguments[0]);if(!1===e.isBoolean(c))throw Error("IF Function must have a boolean test condition");const d=k(b,a.arguments[1]),f=k(b,a.arguments[2]);return!0===
c?d:f}catch(c){throw c;}};q.decode=function(b,a){try{if(2>a.arguments.length)throw Error("Missing Parameters");if(2===a.arguments.length)return k(b,a.arguments[1]);{if(0===(a.arguments.length-1)%2)throw Error("Must have a default value result.");const c=k(b,a.arguments[0]);return P(b,a,1,c)}}catch(c){throw c;}};q.when=function(b,a){try{if(3>a.arguments.length)throw Error("Missing Parameters");if(0===a.arguments.length%2)throw Error("Must have a default value result.");const c=k(b,a.arguments[0]);
if(!1===e.isBoolean(c))throw Error("WHEN needs boolean test conditions");return Q(b,a,0,c)}catch(c){throw c;}};q.top=function(b,a){return t(b,a,function(c,d,f){e.pcCheck(f,2,2);if(e.isArray(f[0]))return e.toNumber(f[1])>=f[0].length?f[0].slice(0):f[0].slice(0,e.toNumber(f[1]));if(e.isImmutableArray(f[0]))return e.toNumber(f[1])>=f[0].length()?f[0].slice(0):f[0].slice(0,e.toNumber(f[1]));throw Error("Top cannot accept this parameter type");})};q.first=function(b,a){return t(b,a,function(c,d,f){e.pcCheck(f,
1,1);return e.isArray(f[0])?0===f[0].length?null:f[0][0]:e.isImmutableArray(f[0])?0===f[0].length()?null:f[0].get(0):null})};q.sort=function(b,a){return t(b,a,function(c,d,f){e.pcCheck(f,1,2);c=f[0];e.isImmutableArray(c)&&(c=c.toArray());if(!1===e.isArray(c))throw Error("Illegal Argument");if(1<f.length){if(!1===e.isFunctionParameter(f[1]))throw Error("Illegal Argument");var m=c;const n=S(f[1]);return m=D(m,function(p,E){return n(p,E)})}f=c;if(0===f.length)return[];c={};for(d=0;d<f.length;d++){var r=
O(f[d]);""!==r&&(c[r]=!0)}if(!0===c.Array||!0===c.Dictionary||!0===c.Feature||!0===c.Point||!0===c.Polygon||!0===c.Polyline||!0===c.Multipoint||!0===c.Extent||!0===c.Function)return f.slice(0);d=0;r="";for(m in c)d++,r=m;return f=1<d||"String"===r?D(f,function(n,p){if(null===n||void 0===n||n===e.voidOperation)return null===p||void 0===p||p===e.voidOperation?0:1;if(null===p||void 0===p||p===e.voidOperation)return-1;n=e.toString(n);p=e.toString(p);return n<p?-1:n===p?0:1}):"Number"===r?D(f,function(n,
p){return n-p}):"Boolean"===r?D(f,function(n,p){return n===p?0:p?-1:1}):"Date"===r?D(f,function(n,p){return p-n}):f.slice(0)})};for(const b in q)q[b]={value:new e.NativeFunction(q[b]),valueset:!0,node:null};const F=function(){};F.prototype=q;F.prototype.infinity={value:Number.POSITIVE_INFINITY,valueset:!0,node:null};F.prototype.pi={value:Math.PI,valueset:!0,node:null};H={fixSpatialReference:e.fixSpatialReference,parseArguments:K,standardFunction:t};T([X.ArrayFunctions]);u.executeScript=function(b,
a){let c=a.spatialReference;if(null===c||void 0===c)c=new ja({wkid:102100});{var d=a.vars;var f=a.customfunctions;const m=new F;d||(d={});f||(f={});const r=new y({newline:"\n",tab:"\t",singlequote:"'",doublequote:'"',forwardslash:"/",backwardslash:"\\"});r.immutable=!1;m.textformatting={value:r,valueset:!0,node:null};for(const n in f)m[n]={value:new e.NativeFunction(f[n]),native:!0,valueset:!0,node:null};for(const n in d)m[n]=d[n]&&"esri.Graphic"===d[n].declaredClass?{value:A.createFromGraphic(d[n]),
valueset:!0,node:null}:{value:d[n],valueset:!0,node:null};d=m}b=k({spatialReference:c,globalScope:d,localScope:null,console:a.console?a.console:sa,lrucache:a.lrucache,interceptor:a.interceptor,depthCounter:1},b.body[0].body);b instanceof e.ReturnResult&&(b=b.value);b instanceof e.ImplicitResult&&(b=b.value);b===e.voidOperation&&(b=null);if(b===e.breakResult)throw Error("Cannot return BREAK");if(b===e.continueResult)throw Error("Cannot return CONTINUE");if(b instanceof G)throw Error("Cannot return FUNCTION");
if(b instanceof e.NativeFunction)throw Error("Cannot return FUNCTION");return b};u.extend=T;u.extractExpectedFieldLiterals=function(b){return l.findExpectedFieldLiterals(b)};u.extractFieldLiterals=function(b,a){return l.findFieldLiterals(b)};u.findFunctionCalls=function(b){return l.findFunctionCalls(b)};u.functionHelper=H;u.referencesFunction=function(b,a){return l.referencesFunction(b,a)};u.referencesMember=function(b,a){return l.referencesMember(b,a)};u.validateScript=function(b,a){return l.validateScript(b,
a,"simple")};Object.defineProperty(u,"__esModule",{value:!0})});