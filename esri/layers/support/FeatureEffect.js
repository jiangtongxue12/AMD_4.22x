// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/Error ../../core/JSONSupport ../../core/maybe ../../core/object ../../core/accessorSupport/decorators/property ../../core/arrayUtils ../../core/has ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass ../effects/jsonUtils ./FeatureFilter".split(" "),function(t,f,m,c,u,n,h,x,y,z,v,k,w){var l;c=l=function(b){function e(a){a=b.call(this,a)||this;a.filter=null;a.includedEffect=null;a.excludedEffect=
null;a.excludedLabelsVisible=!1;return a}t._inheritsLoose(e,b);var g=e.prototype;g.write=function(a,d){a=b.prototype.write.call(this,a,d);if(null!=d&&d.origin){if(a.filter){const p=Object.keys(a.filter);if(1<p.length||"where"!==p[0]){var q;null==(q=d.messages)?void 0:q.push(new m("web-document-write:unsupported-feature-effect","Invalid feature effect 'filter'. A filter can only contain a 'where' property",{layer:d.layer,effect:this}));return null}}if("showExcludedLabels"in a){var r;null==(r=d.messages)?
void 0:r.push(new m("web-document-write:unsupported-feature-effect","Invalid value for property 'excludedLabelsVisible' which should always be 'true'",{layer:d.layer,effect:this}));return null}}return a};g.clone=function(){return new l({filter:u.isSome(this.filter)&&this.filter.clone(),includedEffect:this.includedEffect,excludedEffect:this.excludedEffect,excludedLabelsVisible:this.excludedLabelsVisible})};return e}(c.JSONSupport);f.__decorate([h.property({type:w,json:{write:{allowNull:!0,writer(b,
e,g,a){(b=null==b?void 0:b.write({},a))&&0!==Object.keys(b).length?n.setDeepValue(g,b,e):n.setDeepValue(g,null,e)}}}})],c.prototype,"filter",void 0);f.__decorate([h.property({json:{write:!0,origins:{"web-map":{read:{reader:k.read},write:{writer:k.write,overridePolicy(){return{allowNull:null!=this.excludedEffect,isRequired:null==this.excludedEffect}}}}}}})],c.prototype,"includedEffect",void 0);f.__decorate([h.property({json:{write:!0,origins:{"web-map":{read:{reader:k.read},write:{writer:k.write,overridePolicy(){return{allowNull:null!=
this.includedEffect,isRequired:null==this.includedEffect}}}}}}})],c.prototype,"excludedEffect",void 0);f.__decorate([h.property({type:Boolean,json:{write:!0,name:"showExcludedLabels",origins:{"web-map":{name:"showExcludedLabels",default:!0}}}})],c.prototype,"excludedLabelsVisible",void 0);return c=l=f.__decorate([v.subclass("esri.layers.support.FeatureEffect")],c)});