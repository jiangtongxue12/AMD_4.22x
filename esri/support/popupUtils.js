// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define("exports ../PopupTemplate ../layers/support/fieldUtils ../popup/content/AttachmentsContent ../popup/content/Content ../popup/content/CustomContent ../popup/content/ExpressionContent ../popup/content/FieldsContent ../popup/content/MediaContent ../popup/content/TextContent ../popup/FieldInfo ../popup/support/FieldInfoFormat".split(" "),function(g,p,q,r,D,E,F,l,G,H,t,h){function u(a,c){const b=a;c&&(a=a.filter(d=>-1===c.indexOf(d.type)));a===b&&(a=a.slice());a.sort(v);return a}function v(a,c){return"oid"===
a.type?-1:"oid"===c.type?1:m(a)?-1:m(c)?1:(a.alias||a.name).toLocaleLowerCase().localeCompare((c.alias||c.name).toLocaleLowerCase())}function n(a,c){if(!a||!c)return!1;const {creationDateField:b,creatorField:d,editDateField:e,editorField:f}=c;return-1!==[b&&b.toLowerCase(),d&&d.toLowerCase(),e&&e.toLowerCase(),f&&f.toLowerCase()].indexOf(a.toLowerCase())}function k({editFieldsInfo:a,fields:c,objectIdField:b},d){return u(c,(null==d?void 0:d.ignoreFieldTypes)||w).map(e=>{var f=e.name;var y=e.editable&&
-1===x.indexOf(e.type)&&!n(e.name,a);return new t({fieldName:f,isEditable:y,label:e.alias,format:z(e),visible:A(e,{editFieldsInfo:a,objectIdField:b,visibleFieldNames:null==d?void 0:d.visibleFieldNames})})})}function z(a){switch(a.type){case "small-integer":case "integer":case "single":return new h({digitSeparator:!0,places:0});case "double":return new h({digitSeparator:!0,places:2});case "date":return new h({dateFormat:"long-month-day-year"});default:return null}}function m(a){if("name"===(a.name&&
a.name.toLowerCase())||"name"===(a.alias&&a.alias.toLowerCase()))return!0}const B=["oid","global-id"],x=["oid","global-id","guid"],C=[/^fnode_$/i,/^tnode_$/i,/^lpoly_$/i,/^rpoly_$/i,/^poly_$/i,/^subclass$/i,/^subclass_$/i,/^rings_ok$/i,/^rings_nok$/i,/shape/i,/perimeter/i,/objectid/i,/_i$/i],A=(a,{editFieldsInfo:c,objectIdField:b,visibleFieldNames:d})=>d?d.has(a.name):n(a.name,c)?!1:b&&a.name===b?!1:-1<B.indexOf(a.type)?!1:!C.some(e=>e.test(a.name)),w=["geometry","blob","raster","guid","xml"];g.createFieldInfos=
k;g.createFieldsContent=function(a,c){return new l({fieldInfos:k(a,c).filter(b=>b.visible)})};g.createPopupTemplate=function({displayField:a,editFieldsInfo:c,fields:b,objectIdField:d,title:e},f){if(!b)return null;c=k({editFieldsInfo:c,fields:b,objectIdField:d},f);if(!c.length)return null;b={titleBase:e,fields:b,displayField:a};a=q.getDisplayFieldName(b);({titleBase:b}=b);a=a?`${b}: {${a.trim()}}`:b;b=[new l,new r];return new p({title:a,content:b,fieldInfos:c})};Object.defineProperty(g,"__esModule",
{value:!0})});