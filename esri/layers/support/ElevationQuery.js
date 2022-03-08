// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/_rollupPluginBabelHelpers ../../core/asyncUtils ../../core/Error ../../core/maybe ../../core/promiseUtils ../../core/unitUtils ../../geometry/Multipoint ../../geometry/Point ../../geometry/Polyline ../../geometry/projection ../../geometry/support/aaBoundingRect ./ElevationSampler ./ElevationTile".split(" "),function(w,p,I,r,t,u,C,A,D,J,v,y,E,F){function B(m,k){let e=m.lods.length-1;0<k&&(m=m.lods.findIndex(a=>a.resolution<k),0===m?e=0:0<m&&(e=m-1));return e}let G=function(){function m(){}
var k=m.prototype;k.queryAll=function(){var e=p._asyncToGenerator(function*(a,b,c){a=c&&c.ignoreInvisibleLayers?a.filter(f=>f.visible):a.slice();if(!a.length)throw new r("elevation-query:invalid-layer","Elevation queries require at least one elevation layer to fetch tiles from");var d=x.fromGeometry(b);b=!1;c&&c.returnSampleInfo||(b=!0);c={...z,...c,returnSampleInfo:!0};d=yield this.query(a[a.length-1],d,c);a=yield this._queryAllContinue(a,d,c);a.geometry=a.geometry.export();b&&delete a.sampleInfo;
return a});return function(a,b,c){return e.apply(this,arguments)}}();k.query=function(){var e=p._asyncToGenerator(function*(a,b,c){if(!a)throw new r("elevation-query:invalid-layer","Elevation queries require an elevation layer to fetch tiles from");if(!b||!(b instanceof x)&&"point"!==b.type&&"multipoint"!==b.type&&"polyline"!==b.type)throw new r("elevation-query:invalid-geometry","Only point, polyline and multipoint geometries can be used to query elevation");var d={...z,...c};c=new K(a,b.spatialReference,
d);d=d.signal;yield a.load({signal:d});yield this._createGeometryDescriptor(c,b,d);yield this._selectTiles(c,d);yield this._populateElevationTiles(c,d);this._sampleGeometryWithElevation(c);return this._createQueryResult(c,d)});return function(a,b,c){return e.apply(this,arguments)}}();k.createSampler=function(){var e=p._asyncToGenerator(function*(a,b,c){if(!a)throw new r("elevation-query:invalid-layer","Elevation queries require an elevation layer to fetch tiles from");if(!b||"extent"!==b.type)throw new r("elevation-query:invalid-extent",
"Invalid or undefined extent");return this._createSampler(a,b,{...z,...c})});return function(a,b,c){return e.apply(this,arguments)}}();k.createSamplerAll=function(){var e=p._asyncToGenerator(function*(a,b,c){a=c&&c.ignoreInvisibleLayers?a.filter(f=>f.visible):a.slice();if(!a.length)throw new r("elevation-query:invalid-layer","Elevation queries require at least one elevation layer to fetch tiles from");if(!b||"extent"!==b.type)throw new r("elevation-query:invalid-extent","Invalid or undefined extent");
c={...z,...c,returnSampleInfo:!0};const d=yield this._createSampler(a[a.length-1],b,c);return this._createSamplerAllContinue(a,b,d,c)});return function(a,b,c){return e.apply(this,arguments)}}();k._createSampler=function(){var e=p._asyncToGenerator(function*(a,b,c,d){const f=c.signal;yield a.load({signal:f});const g=b.spatialReference,h=a.tileInfo.spatialReference;g.equals(h)||(yield v.initializeProjection([{source:g,dest:h}],{signal:f}),b=v.project(b,h));a=new L(a,b,c,d);yield this._selectTiles(a,
f);yield this._populateElevationTiles(a,f);return new E.MultiTileElevationSampler(a.elevationTiles,a.layer.tileInfo,a.options.noDataValue)});return function(a,b,c,d){return e.apply(this,arguments)}}();k._createSamplerAllContinue=function(){var e=p._asyncToGenerator(function*(a,b,c,d){a.pop();if(!a.length)return c;var f=c.samplers.map(g=>y.fromExtent(g.extent));f=yield this._createSampler(a[a.length-1],b,d,f);if(0===f.samplers.length)return c;c=c.samplers.concat(f.samplers);c=new E.MultiTileElevationSampler(c,
d.noDataValue);return this._createSamplerAllContinue(a,b,c,d)});return function(a,b,c,d){return e.apply(this,arguments)}}();k._queryAllContinue=function(){var e=p._asyncToGenerator(function*(a,b,c){var d=a.pop();const f=b.geometry.coordinates,g=[],h=[];for(let q=0;q<f.length;q++){const n=b.sampleInfo[q];0<=n.demResolution?n.source||(n.source=d):a.length&&(g.push(f[q]),h.push(q))}if(!a.length||0===g.length)return b;d=b.geometry.clone(g);const l=yield this.query(a[a.length-1],d,c);h.forEach((q,n)=>
{f[q].z=l.geometry.coordinates[n].z;b.sampleInfo[q].demResolution=l.sampleInfo[n].demResolution});return this._queryAllContinue(a,b,c)});return function(a,b,c){return e.apply(this,arguments)}}();k._createQueryResult=function(){var e=p._asyncToGenerator(function*(a,b){b={geometry:(yield a.geometry.project(a.outSpatialReference,b)).export(),noDataValue:a.options.noDataValue};a.options.returnSampleInfo&&(b.sampleInfo=this._extractSampleInfo(a));a.geometry.coordinates.forEach(c=>{c.tile=null;c.elevationTile=
null});return b});return function(a,b){return e.apply(this,arguments)}}();k._createGeometryDescriptor=function(){var e=p._asyncToGenerator(function*(a,b,c){const d=a.layer.tileInfo.spatialReference;b instanceof x?c=yield b.project(d,c):(yield v.initializeProjection([{source:b.spatialReference,dest:d}],{signal:c}),c=v.project(b,d));if(!c)throw new r("elevation-query:spatial-reference-mismatch",`Cannot query elevation in '${b.spatialReference.wkid}' on an elevation service in '${d.wkid}'`);a.geometry=
x.fromGeometry(c)});return function(a,b,c){return e.apply(this,arguments)}}();k._selectTiles=function(){var e=p._asyncToGenerator(function*(a,b){const c=a.options.demResolution;"geometry"===a.type&&this._preselectOutsideLayerExtent(a);if("number"===typeof c)this._selectTilesClosestResolution(a);else if("finest-contiguous"===c)yield this._selectTilesFinestContiguous(a,b);else if("auto"===c)yield this._selectTilesAuto(a,b);else throw new r("elevation-query:invalid-dem-resolution",`Invalid dem resolution value '${c}', expected a number, "finest-contiguous" or "auto"`);
});return function(a,b){return e.apply(this,arguments)}}();k._preselectOutsideLayerExtent=function(e){if(!t.isNone(e.layer.fullExtent)){var a=new F.ElevationTile(null);a.sample=()=>e.options.noDataValue;e.outsideExtentTile=a;var b=e.layer.fullExtent;e.geometry.coordinates.forEach(c=>{const d=c.x,f=c.y;if(d<b.xmin||d>b.xmax||f<b.ymin||f>b.ymax)c.elevationTile=a})}};k._selectTilesClosestResolution=function(e){const a=this._findNearestDemResolutionLODIndex(e.layer.tileInfo,e.options.demResolution);e.selectTilesAtLOD(a)};
k._findNearestDemResolutionLODIndex=function(e,a){var b=C.getMetersPerUnitForSR(e.spatialReference);a/=b;b=e.lods[0];let c=0;for(let d=1;d<e.lods.length;d++){const f=e.lods[d];Math.abs(f.resolution-a)<Math.abs(b.resolution-a)&&(b=f,c=d)}return c};k._selectTilesFinestContiguous=function(){var e=p._asyncToGenerator(function*(a,b){const c=B(a.layer.tileInfo,a.options.minDemResolution);yield this._selectTilesFinestContiguousAt(a,c,b)});return function(a,b){return e.apply(this,arguments)}}();k._selectTilesFinestContiguousAt=
function(){var e=p._asyncToGenerator(function*(a,b,c){var d=a.layer;a.selectTilesAtLOD(b);if(!(0>b)){var f=d.tilemapCache;d=a.getTilesToFetch();try{if(f)yield u.whenOrAbort(Promise.all(d.map(g=>f.fetchAvailability(g.level,g.row,g.col,{signal:c}))),c);else if(yield this._populateElevationTiles(a,c),!a.allElevationTilesFetched())throw a.clearElevationTiles(),new r("elevation-query:has-unavailable-tiles");}catch(g){u.throwIfAbortError(g),yield this._selectTilesFinestContiguousAt(a,b-1,c)}}});return function(a,
b,c){return e.apply(this,arguments)}}();k._populateElevationTiles=function(){var e=p._asyncToGenerator(function*(a,b){var c=a.getTilesToFetch();const d={},f=a.options.cache,g=a.options.noDataValue;c=c.map(function(){var h=p._asyncToGenerator(function*(l){const q=`${a.layer.uid}:${l.id}:${g}`;var n=t.isSome(f)?f.get(q):null;n=t.isSome(n)?n:yield a.layer.fetchTile(l.level,l.row,l.col,{noDataValue:g,signal:b});t.isSome(f)&&f.put(q,n);d[l.id]=new F.ElevationTile(l,n)});return function(l){return h.apply(this,
arguments)}}());yield u.whenOrAbort(u.eachAlways(c),b);a.populateElevationTiles(d)});return function(a,b){return e.apply(this,arguments)}}();k._selectTilesAuto=function(){var e=p._asyncToGenerator(function*(a,b){this._selectTilesAutoFinest(a);this._reduceTilesForMaximumRequests(a);const c=a.layer.tilemapCache;if(!c)return this._selectTilesAutoPrefetchUpsample(a,b);const d={},f=a.getTilesToFetch().map(function(){var g=p._asyncToGenerator(function*(h){const l={id:null,level:0,row:0,col:0,extent:y.create()},
q=yield I.result(c.fetchAvailabilityUpsample(h.level,h.row,h.col,l,{signal:b}));!1===q.ok?u.throwIfAbortError(q.error):d[h.id]=l});return function(h){return g.apply(this,arguments)}}());yield u.whenOrAbort(Promise.all(f),b);a.remapTiles(d)});return function(a,b){return e.apply(this,arguments)}}();k._reduceTilesForMaximumRequests=function(e){const a=e.layer.tileInfo;let b=0;const c={},d=h=>{h.id in c?c[h.id]++:(c[h.id]=1,b++)},f=h=>{const l=c[h.id];1===l?(delete c[h.id],b--):c[h.id]=l-1};e.forEachTileToFetch(d,
f);let g=!0;for(;g&&(g=!1,e.forEachTileToFetch(h=>{b<=e.options.maximumAutoTileRequests||(f(h),a.upsampleTile(h)&&(g=!0),d(h))},f),g););};k._selectTilesAutoFinest=function(e){const a=B(e.layer.tileInfo,e.options.minDemResolution);e.selectTilesAtLOD(a,e.options.maximumAutoTileRequests)};k._selectTilesAutoPrefetchUpsample=function(){var e=p._asyncToGenerator(function*(a,b){const c=a.layer.tileInfo;yield this._populateElevationTiles(a,b);let d=!1;a.forEachTileToFetch((f,g)=>{c.upsampleTile(f)?d=!0:g()});
d&&(yield this._selectTilesAutoPrefetchUpsample(a,b))});return function(a,b){return e.apply(this,arguments)}}();k._sampleGeometryWithElevation=function(e){e.geometry.coordinates.forEach(a=>{var b=a.elevationTile;let c=e.options.noDataValue;b&&(b=b.sample(a.x,a.y),t.isSome(b)?c=b:a.elevationTile=null);a.z=c})};k._extractSampleInfo=function(e){const a=e.layer.tileInfo,b=C.getMetersPerUnitForSR(a.spatialReference);return e.geometry.coordinates.map(c=>{let d=-1;c.elevationTile&&c.elevationTile!==e.outsideExtentTile&&
(d=a.lodAt(c.elevationTile.tile.level).resolution*b);return{demResolution:d}})};return m}(),x=function(){function m(){}var k=m.prototype;k.export=function(){return this._exporter(this.coordinates,this.spatialReference)};k.clone=function(e){const a=new m;a.geometry=this.geometry;a.spatialReference=this.spatialReference;a.coordinates=e||this.coordinates.map(b=>this._cloneCoordinate(b));a._exporter=this._exporter;return a};k.project=function(){var e=p._asyncToGenerator(function*(a,b){if(this.spatialReference.equals(a))return this.clone();
yield v.initializeProjection([{source:this.spatialReference,dest:a}],{signal:b});b=new A({spatialReference:this.spatialReference,points:this.coordinates.map(d=>[d.x,d.y])});const c=v.project(b,a);if(!c)return null;b=this.coordinates.map((d,f)=>{d=this._cloneCoordinate(d);f=c.points[f];d.x=f[0];d.y=f[1];return d});b=this.clone(b);b.spatialReference=a;return b});return function(a,b){return e.apply(this,arguments)}}();k._cloneCoordinate=function(e){return{x:e.x,y:e.y,z:e.z,m:e.m,tile:null,elevationTile:null}};
m.fromGeometry=function(e){const a=new m;a.geometry=e;a.spatialReference=e.spatialReference;if(e instanceof m)a.coordinates=e.coordinates.map(b=>a._cloneCoordinate(b)),a._exporter=(b,c)=>{b=e.clone(b);b.spatialReference=c;return b};else switch(e.type){case "point":{const {hasZ:b,hasM:c}=e;a.coordinates=b&&c?[{x:e.x,y:e.y,z:e.z,m:e.m}]:b?[{x:e.x,y:e.y,z:e.z}]:c?[{x:e.x,y:e.y,m:e.m}]:[{x:e.x,y:e.y}];a._exporter=(d,f)=>e.hasM?new D(d[0].x,d[0].y,d[0].z,d[0].m,f):new D(d[0].x,d[0].y,d[0].z,f);break}case "multipoint":{const {hasZ:b,
hasM:c}=e;a.coordinates=b&&c?e.points.map(d=>({x:d[0],y:d[1],z:d[2],m:d[3]})):b?e.points.map(d=>({x:d[0],y:d[1],z:d[2]})):c?e.points.map(d=>({x:d[0],y:d[1],m:d[2]})):e.points.map(d=>({x:d[0],y:d[1]}));a._exporter=(d,f)=>e.hasM?new A({points:d.map(g=>[g.x,g.y,g.z,g.m]),hasZ:!0,hasM:!0,spatiaReference:f}):new A(d.map(g=>[g.x,g.y,g.z]),f);break}case "polyline":{const b=[],c=[],{hasZ:d,hasM:f}=e;let g=0;for(const h of e.paths)if(c.push([g,g+h.length]),g+=h.length,d&&f)for(const l of h)b.push({x:l[0],
y:l[1],z:l[2],m:l[3]});else if(d)for(const l of h)b.push({x:l[0],y:l[1],z:l[2]});else if(f)for(const l of h)b.push({x:l[0],y:l[1],m:l[2]});else for(const l of h)b.push({x:l[0],y:l[1]});a.coordinates=b;a._exporter=(h,l)=>{const q=e.hasM?h.map(n=>[n.x,n.y,n.z,n.m]):h.map(n=>[n.x,n.y,n.z]);h=c.map(n=>q.slice(n[0],n[1]));return new J({paths:h,hasM:e.hasM,hasZ:!0,spatialReference:l})}}}return a};return m}(),H=function(m,k){this.layer=m;this.options=k},K=function(m){function k(a,b,c){a=m.call(this,a,c)||
this;a.outSpatialReference=b;a.type="geometry";return a}p._inheritsLoose(k,m);var e=k.prototype;e.selectTilesAtLOD=function(a){if(0>a)this.geometry.coordinates.forEach(b=>b.tile=null);else{const b=this.layer.tileInfo,c=b.lods[a].level;this.geometry.coordinates.forEach(d=>{d.tile=b.tileAt(c,d.x,d.y)})}};e.allElevationTilesFetched=function(){return!this.geometry.coordinates.some(a=>!a.elevationTile)};e.clearElevationTiles=function(){for(const a of this.geometry.coordinates)a.elevationTile!==this.outsideExtentTile&&
(a.elevationTile=null)};e.populateElevationTiles=function(a){for(const b of this.geometry.coordinates)!b.elevationTile&&b.tile&&(b.elevationTile=a[b.tile.id])};e.remapTiles=function(a){for(const b of this.geometry.coordinates)b.tile=a[b.tile.id]};e.getTilesToFetch=function(){const a={},b=[];for(const c of this.geometry.coordinates){const d=c.tile;c.elevationTile||!c.tile||a[d.id]||(a[d.id]=d,b.push(d))}return b};e.forEachTileToFetch=function(a){for(const b of this.geometry.coordinates)b.tile&&!b.elevationTile&&
a(b.tile,()=>b.tile=null)};return k}(H),L=function(m){function k(a,b,c,d){c=m.call(this,a,c)||this;c.type="extent";c.elevationTiles=[];c.candidateTiles=[];c.fetchedCandidates=new Set;c.extent=b.intersection(a.fullExtent);c.maskExtents=d;return c}p._inheritsLoose(k,m);var e=k.prototype;e.selectTilesAtLOD=function(a,b){b=this._maximumLodForRequests(b);a=Math.min(b,a);0>a?this.candidateTiles.length=0:this._selectCandidateTilesCoveringExtentAt(a)};e._maximumLodForRequests=function(a){const b=this.layer.tileInfo;
if(!a)return b.lods.length-1;const c=this.extent;if(t.isNone(c))return-1;for(let d=b.lods.length-1;0<=d;d--){const f=b.lods[d];if(Math.ceil(c.width/(f.resolution*b.size[0]))*Math.ceil(c.height/(f.resolution*b.size[1]))<=a)return d}return-1};e.allElevationTilesFetched=function(){return this.candidateTiles.length===this.elevationTiles.length};e.clearElevationTiles=function(){this.elevationTiles.length=0;this.fetchedCandidates.clear()};e.populateElevationTiles=function(a){for(const b of this.candidateTiles){const c=
a[b.id];c&&(this.fetchedCandidates.add(b),this.elevationTiles.push(c))}};e.remapTiles=function(a){this.candidateTiles=this._uniqueNonOverlappingTiles(this.candidateTiles.map(b=>a[b.id]))};e.getTilesToFetch=function(){return this.candidateTiles};e.forEachTileToFetch=function(a,b){const c=this.candidateTiles;this.candidateTiles=[];c.forEach(d=>{if(this.fetchedCandidates.has(d))b&&b(d);else{var f=!1;a(d,()=>f=!0);f?b&&b(d):this.candidateTiles.push(d)}});this.candidateTiles=this._uniqueNonOverlappingTiles(this.candidateTiles,
b)};e._uniqueNonOverlappingTiles=function(a,b){const c={},d=[];for(const g of a)c[g.id]?b&&b(g):(c[g.id]=g,d.push(g));const f=d.sort((g,h)=>g.level-h.level);return f.filter((g,h)=>{for(let l=0;l<h;l++)if(y.contains(f[l].extent,g.extent))return b&&b(g),!1;return!0})};e._selectCandidateTilesCoveringExtentAt=function(a){this.candidateTiles.length=0;var b=this.extent;if(!t.isNone(b)){var c=this.layer.tileInfo,d=c.lods[a];a=c.tileAt(d.level,b.xmin,b.ymin);var f=Math.ceil((b.xmax-a.extent[0])/(d.resolution*
c.size[0]));b=Math.ceil((b.ymax-a.extent[1])/(d.resolution*c.size[1]));for(d=0;d<b;d++)for(let g=0;g<f;g++){const h={id:null,level:a.level,row:a.row-d,col:a.col+g};c.updateTileInfo(h);this._tileIsMasked(h)||this.candidateTiles.push(h)}}};e._tileIsMasked=function(a){return this.maskExtents?this.maskExtents.some(b=>y.contains(b,a.extent)):!1};return k}(H);const z={maximumAutoTileRequests:20,noDataValue:0,returnSampleInfo:!1,demResolution:"auto",minDemResolution:0};w.ElevationQuery=G;w.GeometryDescriptor=
x;w.default=G;w.getFinestLodIndex=B;Object.defineProperty(w,"__esModule",{value:!0})});