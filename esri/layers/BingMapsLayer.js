// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../request ../core/Error ../core/jsonMap ../core/maybe ../core/MultiOriginJSONSupport ../core/accessorSupport/decorators/property ../core/arrayUtils ../core/has ../core/accessorSupport/ensureType ../core/accessorSupport/decorators/subclass ../geometry/SpatialReference ./BaseTileLayer ./mixins/BlendLayer ./mixins/OperationalLayer ./support/TileInfo".split(" "),function(p,c,r,f,b,m,x,d,C,D,E,y,t,z,A,B,u){const q=new b.JSONMap({BingMapsAerial:"aerial",
BingMapsRoad:"road",BingMapsHybrid:"hybrid"});b=function(v){function n(a){a=v.call(this,a)||this;a.type="bing-maps";a.tileInfo=new u({size:[256,256],dpi:96,origin:{x:-2.0037508342787E7,y:2.0037508342787E7,spatialReference:t.WebMercator},spatialReference:t.WebMercator,lods:[{level:1,resolution:78271.5169639999,scale:2.95828763795777E8},{level:2,resolution:39135.7584820001,scale:1.47914381897889E8},{level:3,resolution:19567.8792409999,scale:7.3957190948944E7},{level:4,resolution:9783.93962049996,scale:3.6978595474472E7},
{level:5,resolution:4891.96981024998,scale:1.8489297737236E7},{level:6,resolution:2445.98490512499,scale:9244648.868618},{level:7,resolution:1222.99245256249,scale:4622324.434309},{level:8,resolution:611.49622628138,scale:2311162.217155},{level:9,resolution:305.748113140558,scale:1155581.108577},{level:10,resolution:152.874056570411,scale:577790.554289},{level:11,resolution:76.4370282850732,scale:288895.277144},{level:12,resolution:38.2185141425366,scale:144447.638572},{level:13,resolution:19.1092570712683,
scale:72223.819286},{level:14,resolution:9.55462853563415,scale:36111.909643},{level:15,resolution:4.77731426794937,scale:18055.954822},{level:16,resolution:2.38865713397468,scale:9027.977411},{level:17,resolution:1.19432856685505,scale:4513.988705},{level:18,resolution:.597164283559817,scale:2256.994353},{level:19,resolution:.298582141647617,scale:1128.497176},{level:20,resolution:.1492910708238085,scale:564.248588}]});a.key=null;a.style="road";a.culture="en-US";a.region=null;a.portalUrl=null;a.hasAttributionData=
!0;return a}p._inheritsLoose(n,v);var h=n.prototype;h.load=function(a){this.key?this.addResolvingPromise(this._getMetadata()):this.portalUrl?this.addResolvingPromise(this._getPortalBingKey().then(()=>this._getMetadata())):this.addResolvingPromise(Promise.reject(new f("bingmapslayer:load","Bing layer must have bing key.")));return Promise.resolve(this)};h.getTileUrl=function(a,g,e){if(!this.loaded||m.isNone(this.bingMetadata))return null;const k=this.bingMetadata.resourceSets[0].resources[0],l=k.imageUrlSubdomains[g%
k.imageUrlSubdomains.length];a=this._getQuadKey(a,g,e);return k.imageUrl.replace("{subdomain}",l).replace("{quadkey}",a)};h.fetchAttributionData=function(){var a=p._asyncToGenerator(function*(){return this.load().then(()=>m.isNone(this.bingMetadata)?null:{contributors:this.bingMetadata.resourceSets[0].resources[0].imageryProviders.map(g=>({attribution:g.attribution,coverageAreas:g.coverageAreas.map(e=>({zoomMin:e.zoomMin,zoomMax:e.zoomMax,score:1,bbox:[e.bbox[0],e.bbox[1],e.bbox[2],e.bbox[3]]}))}))})});
return function(){return a.apply(this,arguments)}}();h._getMetadata=function(){return r(`${"https://dev.virtualearth.net"}/REST/v1/Imagery/Metadata/${({road:"roadOnDemand",aerial:"aerial",hybrid:"aerialWithLabelsOnDemand"})[this.style]}`,{responseType:"json",query:{include:"ImageryProviders",uriScheme:"https",key:this.key,suppressStatus:!0,output:"json",culture:this.culture,userRegion:this.region}}).then(a=>{a=a.data;if(200!==a.statusCode)throw new f("bingmapslayer:getmetadata",a.statusDescription);
this.bingMetadata=a;if(0===this.bingMetadata.resourceSets.length)throw new f("bingmapslayer:getmetadata","no bing resourcesets");if(0===this.bingMetadata.resourceSets[0].resources.length)throw new f("bingmapslayer:getmetadata","no bing resources");}).catch(a=>{throw new f("bingmapslayer:getmetadata",a.message);})};h._getPortalBingKey=function(){return r(this.portalUrl,{responseType:"json",authMode:"no-prompt",query:{f:"json"}}).then(a=>{if(!a.data.bingKey)throw new f("bingmapslayer:getportalbingkey",
"The referenced Portal does not contain a valid bing key");this.key=a.data.bingKey}).catch(a=>{throw new f("bingmapslayer:getportalbingkey",a.message);})};h._getQuadKey=function(a,g,e){let k="";for(;0<a;a--){let l=0;const w=1<<a-1;0!==(e&w)&&(l+=1);0!==(g&w)&&(l+=2);k+=l.toString()}return k};p._createClass(n,[{key:"bingMetadata",get:function(){return this._get("bingMetadata")},set:function(a){this._set("bingMetadata",a)}},{key:"copyright",get:function(){return m.isSome(this.bingMetadata)?this.bingMetadata.copyright:
null}},{key:"operationalLayerType",get:function(){return q.toJSON(this.style)}},{key:"bingLogo",get:function(){return m.isSome(this.bingMetadata)?this.bingMetadata.brandLogoUri:null}}]);return n}(A.BlendLayer(B.OperationalLayer(x.MultiOriginJSONMixin(z))));c.__decorate([d.property({json:{read:!1,write:!1},value:null})],b.prototype,"bingMetadata",null);c.__decorate([d.property({json:{read:!1,write:!1},value:"bing-maps",readOnly:!0})],b.prototype,"type",void 0);c.__decorate([d.property({type:u})],b.prototype,
"tileInfo",void 0);c.__decorate([d.property({type:String,readOnly:!0,json:{read:!1,write:!1}})],b.prototype,"copyright",null);c.__decorate([d.property({type:String,json:{write:!1,read:!1}})],b.prototype,"key",void 0);c.__decorate([d.property({type:q.apiValues,nonNullable:!0,json:{read:{source:"layerType",reader:q.read}}})],b.prototype,"style",void 0);c.__decorate([d.property({type:["BingMapsAerial","BingMapsHybrid","BingMapsRoad"]})],b.prototype,"operationalLayerType",null);c.__decorate([d.property({type:String,
json:{write:!1,read:!1}})],b.prototype,"culture",void 0);c.__decorate([d.property({type:String,json:{write:!1,read:!1}})],b.prototype,"region",void 0);c.__decorate([d.property({type:String,json:{write:!0,read:!0}})],b.prototype,"portalUrl",void 0);c.__decorate([d.property({type:Boolean,json:{write:!1,read:!1}})],b.prototype,"hasAttributionData",void 0);c.__decorate([d.property({type:String,readOnly:!0})],b.prototype,"bingLogo",null);return b=c.__decorate([y.subclass("esri.layers.BingMapsLayer")],
b)});