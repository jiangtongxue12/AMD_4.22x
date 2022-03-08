// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../sources/Empty ../support/FeatureSet ../support/IdSet ../support/shared ../../../core/promiseUtils ../../../geometry/geometryEngineAsync".split(" "),function(v,m,l,r,p,q,n){return function(u){function f(a){var b=u.call(this,a)||this;b._relation="";b._relationGeom=null;b._relationString="";b.declaredClass="esri.arcade.featureset.actions.SpatialFilter";b._relationString=a.relationString;b._parent=a.parentfeatureset;b._maxProcessing=40;b._relation=
a.relation;b._relationGeom=a.relationGeom;return b}v._inheritsLoose(f,u);var h=f.prototype;h._getSet=function(a){return null===this._wset?this._ensureLoaded().then(()=>this._parent._getFilteredSet("esriSpatialRelRelation"!==this._relation?this._relation:this._relation+":"+this._relationString,this._relationGeom,null,null,a)).then(b=>{this._checkCancelled(a);return this._wset=new r(b._candidates.slice(0),b._known.slice(0),b._ordered,this._clonePageDefinition(b.pagesDefinition))}):q.resolve(this._wset)};
h._isInFeatureSet=function(a){let b=this._parent._isInFeatureSet(a);if(b===p.IdState.NotInFeatureSet)return b;b=this._idstates[a];return void 0===b?p.IdState.Unknown:b};h._getFeature=function(a,b,d){return this._parent._getFeature(a,b,d)};h._getFeatures=function(a,b,d,k){return this._parent._getFeatures(a,b,d,k)};h._featureFromCache=function(a){return this._parent._featureFromCache(a)};h.executeSpatialRelationTest=function(a){if(null===a.geometry)return q.resolve(!1);switch(this._relation){case "esriSpatialRelEnvelopeIntersects":{const b=
p.shapeExtent(this._relationGeom);a=p.shapeExtent(a.geometry);return n.intersects(b,a)}case "esriSpatialRelIntersects":return n.intersects(this._relationGeom,a.geometry);case "esriSpatialRelContains":return n.contains(this._relationGeom,a.geometry);case "esriSpatialRelOverlaps":return n.overlaps(this._relationGeom,a.geometry);case "esriSpatialRelWithin":return n.within(this._relationGeom,a.geometry);case "esriSpatialRelTouches":return n.touches(this._relationGeom,a.geometry);case "esriSpatialRelCrosses":return n.crosses(this._relationGeom,
a.geometry);case "esriSpatialRelRelation":return n.relate(this._relationGeom,a.geometry,this._relationString)}};h._fetchAndRefineFeatures=function(a,b,d){const k=new r([],a,!1,null),g=Math.min(b,a.length);return this._parent._getFeatures(k,-1,g,d).then(()=>{this._checkCancelled(d);const c=[];for(let e=0;e<g;e++){const t=this._parent._featureFromCache(a[e]);c.push(this.executeSpatialRelationTest(t))}return q.all(c)}).then(c=>{for(let e=0;e<b;e++)this._idstates[a[e]]=!0===c[e]?p.IdState.InFeatureSet:
p.IdState.NotInFeatureSet;return"success"})};h._getFilteredSet=function(a,b,d,k,g){return this._ensureLoaded().then(()=>this._parent._getFilteredSet("esriSpatialRelRelation"!==this._relation?this._relation:this._relation+":"+this._relationString,this._relationGeom,d,k,g)).then(c=>{this._checkCancelled(g);return null!==b?new r(c._candidates.slice(0).concat(c._known.slice(0)),[],c._ordered,this._clonePageDefinition(c.pagesDefinition)):new r(c._candidates.slice(0),c._known.slice(0),c._ordered,this._clonePageDefinition(c.pagesDefinition))})};
h._stat=function(a,b,d,k,g,c,e){return""!==d?q.resolve({calculated:!1}):this._parent._stat(a,b,"esriSpatialRelRelation"!==this._relation?this._relation:this._relation+":"+this._relationString,this._relationGeom,g,c,e).then(t=>!1===t.calculated?null===g&&""===d&&null===k?this._manualStat(a,b,c,e):{calculated:!1}:t)};h._canDoAggregates=function(a,b,d,k,g){return""!==d||null!==k||null===this._parent?q.resolve(!1):this._parent._canDoAggregates(a,b,"esriSpatialRelRelation"!==this._relation?this._relation:
this._relation+":"+this._relationString,this._relationGeom,g)};h._getAggregatePagesDataSourceDefinition=function(a,b,d,k,g,c,e){return null===this._parent?q.reject(Error("Should never be called")):this._parent._getAggregatePagesDataSourceDefinition(a,b,"esriSpatialRelRelation"!==this._relation?this._relation:this._relation+":"+this._relationString,this._relationGeom,g,c,e)};f.registerAction=function(){l._featuresetFunctions.intersects=function(a){return null===a||void 0===a?new m({parentfeatureset:this}):
new f({parentfeatureset:this,relation:"esriSpatialRelIntersects",relationGeom:a})};l._featuresetFunctions.envelopeIntersects=function(a){return null===a||void 0===a?new m({parentfeatureset:this}):new f({parentfeatureset:this,relation:"esriSpatialRelEnvelopeIntersects",relationGeom:a})};l._featuresetFunctions.contains=function(a){return null===a||void 0===a?new m({parentfeatureset:this}):new f({parentfeatureset:this,relation:"esriSpatialRelContains",relationGeom:a})};l._featuresetFunctions.overlaps=
function(a){return null===a||void 0===a?new m({parentfeatureset:this}):new f({parentfeatureset:this,relation:"esriSpatialRelOverlaps",relationGeom:a})};l._featuresetFunctions.within=function(a){return null===a||void 0===a?new m({parentfeatureset:this}):new f({parentfeatureset:this,relation:"esriSpatialRelWithin",relationGeom:a})};l._featuresetFunctions.touches=function(a){return null===a||void 0===a?new m({parentfeatureset:this}):new f({parentfeatureset:this,relation:"esriSpatialRelTouches",relationGeom:a})};
l._featuresetFunctions.crosses=function(a){return null===a||void 0===a?new m({parentfeatureset:this}):new f({parentfeatureset:this,relation:"esriSpatialRelCrosses",relationGeom:a})};l._featuresetFunctions.relate=function(a,b){return null===a||void 0===a?new m({parentfeatureset:this}):new f({parentfeatureset:this,relation:"esriSpatialRelRelation",relationGeom:a,relationString:b})}};return f}(l)});