// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/jsonMap ../../core/JSONSupport ../../core/accessorSupport/decorators/property ../../core/arrayUtils ../../core/has ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/enumeration ../../core/accessorSupport/decorators/reader ../../core/accessorSupport/decorators/subclass ./domains ./fieldType".split(" "),function(p,c,a,q,d,y,z,r,t,l,u,m,v){var f;const w=new a.JSONMap({binary:"binary",coordinate:"coordinate",
countOrAmount:"count-or-amount",dateAndTime:"date-and-time",description:"description",locationOrPlaceName:"location-or-place-name",measurement:"measurement",nameOrTitle:"name-or-title",none:"none",orderedOrRanked:"ordered-or-ranked",percentageOrRatio:"percentage-or-ratio",typeOrCategory:"type-or-category",uniqueIdentifier:"unique-identifier"});a=f=function(n){function g(b){b=n.call(this,b)||this;b.alias=null;b.defaultValue=void 0;b.description=null;b.domain=null;b.editable=!0;b.length=-1;b.name=null;
b.nullable=!0;b.type=null;b.valueType=null;return b}p._inheritsLoose(g,n);var h=g.prototype;h.readDescription=function(b,{description:k}){let e;try{e=JSON.parse(k)}catch(x){}return e?e.value:null};h.readValueType=function(b,{description:k}){let e;try{e=JSON.parse(k)}catch(x){}return e?w.fromJSON(e.fieldValueType):null};h.clone=function(){return new f({alias:this.alias,defaultValue:this.defaultValue,description:this.description,domain:this.domain&&this.domain.clone()||null,editable:this.editable,length:this.length,
name:this.name,nullable:this.nullable,type:this.type,valueType:this.valueType})};return g}(q.JSONSupport);c.__decorate([d.property({type:String,json:{write:!0}})],a.prototype,"alias",void 0);c.__decorate([d.property({type:[String,Number],json:{write:{allowNull:!0}}})],a.prototype,"defaultValue",void 0);c.__decorate([d.property()],a.prototype,"description",void 0);c.__decorate([l.reader("description")],a.prototype,"readDescription",null);c.__decorate([d.property({types:m.types,json:{read:{reader:m.fromJSON},
write:!0}})],a.prototype,"domain",void 0);c.__decorate([d.property({type:Boolean,json:{write:!0}})],a.prototype,"editable",void 0);c.__decorate([d.property({type:r.Integer,json:{write:!0}})],a.prototype,"length",void 0);c.__decorate([d.property({type:String,json:{write:!0}})],a.prototype,"name",void 0);c.__decorate([d.property({type:Boolean,json:{write:!0}})],a.prototype,"nullable",void 0);c.__decorate([t.enumeration(v.kebabDict)],a.prototype,"type",void 0);c.__decorate([d.property()],a.prototype,
"valueType",void 0);c.__decorate([l.reader("valueType",["description"])],a.prototype,"readValueType",null);return a=f=c.__decorate([u.subclass("esri.layers.support.Field")],a)});