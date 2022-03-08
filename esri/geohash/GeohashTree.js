// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define("exports ../chunks/_rollupPluginBabelHelpers ../core/CircularArray ../core/maybe ./geohashUtils ../views/2d/layers/features/support/FeatureSetReaderJSON".split(" "),function(E,J,K,D,L,F){let M=function(){function z(c=[],a=8096){this._nodes=0;this._root=new G(0,0,0);this._statisticFields=c;this._pool=a?new K(8096):null}var u=z.prototype;u._acquire=function(c,a,h){this._nodes++;let e=null;D.isSome(this._pool)&&(e=this._pool.dequeue());return D.isSome(e)?e.realloc(c,a,h):new G(c,a,h)};u._release=
function(c){this._nodes--;D.isSome(this._pool)&&this._pool.enqueue(c)};u.dropLevels=function(c){this._forEachNode(a=>{if(a.depth>=c)for(let h=0;h<a.children.length;h++){const e=a.children[h];a.children[h]=null;e&&this._release(e)}})};u.clear=function(){this.dropLevels(0)};u.insert=function(c,a,h=0){const e=F.FeatureSetReaderJSON.fromOptimizedFeatures([c],"esriGeometryPoint").getCursor();e.next();const l=e.readGeometry();if(l){var [b,f]=l.coords;this.insertCursor(e,c.displayId,b,f,c.geohashX,c.geohashY,
a,h)}};u.insertCursor=function(c,a,h,e,l,b,f,d=0){let g=this._root,k=0,n=0,m=0;for(;null!==g;){g.depth>=d&&(g.count+=1,g.xTotal+=h,g.yTotal+=e,g.xGeohashTotal+=l,g.yGeohashTotal+=b,g.displayId=a,this._updateStatisticsCursor(c,g,1));if(k>=f){g.add(a);break}var p=Math.ceil((k+1)/2),t=Math.floor((k+1)/2);const r=1-k%2;var q=30-(3*p+2*t);p=30-(2*p+3*t);q=(l&7*r+3*(1-r)<<q)>>q;p=(b&3*r+7*(1-r)<<p)>>p;t=q+p*(8*r+4*(1-r));const v=2*r+3*(1-r);n=n<<3*r+2*(1-r)|q;m=m<<v|p;null==g.children[t]&&(g.children[t]=
this._acquire(n,m,k+1));k+=1;g=g.children[t]}};u.remove=function(c,a){const h=F.FeatureSetReaderJSON.fromOptimizedFeatures([c],"esriGeometryPoint").getCursor();h.next();const e=h.readGeometry();if(e){var [l,b]=e.coords;this.removeCursor(h,l,b,c.geohashX,c.geohashY,a)}};u.removeCursor=function(c,a,h,e,l,b){let f=this._root,d=0;for(;null!==f;){--f.count;f.xTotal-=a;f.yTotal-=h;f.xGeohashTotal-=e;f.yGeohashTotal-=l;this._updateStatisticsCursor(c,f,-1);if(d>=b){f.remove(c.getDisplayId());break}var g=
Math.ceil((d+1)/2);const m=Math.floor((d+1)/2);var k=1-d%2,n=30-(3*g+2*m);g=30-(2*g+3*m);k=((e&7*k+3*(1-k)<<n)>>n)+((l&3*k+7*(1-k)<<g)>>g)*(8*k+4*(1-k));n=f.children[k];1===n.count&&(this._release(n),f.children[k]=null);d+=1;f=n}};u.find=function(c,a,h){return this._root.find(c,a,h,0,0,0)};u.findSingleOccupancyNode=function(c,a,h,e,l){let b=this._root;for(;null!==b;){var f=b.depth,d=b.xNode,g=b.yNode;const q=1-f%2;var k=b.xGeohashTotal/b.count,n=b.yGeohashTotal/b.count;if(1===b.count&&c<k&&k<=h&&
a<n&&n<=e)return b;if(f>=l)b=b.next;else{n=Math.ceil((f+1)/2);f=Math.floor((f+1)/2);k=30-(3*n+2*f);var m=30-(2*n+3*f),p=~((1<<k)-1),t=~((1<<m)-1);d<<=3*q+2*(1-q);g<<=2*q+3*(1-q);f=Math.max(d,(c&p)>>k);n=Math.max(g,(a&t)>>m);k=Math.min(d+8*q+4*(1-q),(h&p)>>k);m=Math.min(g+4*q+8*(1-q),(e&t)>>m);for(p=t=null;n<=m;n++)for(let r=f;r<=k;r++){const v=b.children[r-d+(n-g)*(8*q+4*(1-q))];v&&(t||(t=v,t.next=b.next),p&&(p.next=v),p=v,v.next=b.next)}b=t||b.next}}return null};u.getRegionDisplayIds=function(c,
a,h,e,l){let b=this._root;const f=[];for(;null!==b;){var d=b.depth,g=b.xNode,k=b.yNode;if(d>=l)d=b.xGeohashTotal/b.count,g=b.yGeohashTotal/b.count,c<=d&&d<=h&&a<=g&&g<=e&&b.displayIds.forEach(v=>f.push(v)),b=b.next;else{var n=Math.ceil((d+1)/2),m=Math.floor((d+1)/2);d=1-d%2;var p=30-(3*n+2*m),t=30-(2*n+3*m),q=~((1<<p)-1),r=~((1<<t)-1);g<<=3*d+2*(1-d);k<<=2*d+3*(1-d);n=Math.max(g,(c&q)>>p);m=Math.max(k,(a&r)>>t);p=Math.min(g+8*d+4*(1-d),(h&q)>>p);t=Math.min(k+4*d+8*(1-d),(e&r)>>t);for(q=r=null;m<=
t;m++)for(let v=n;v<=p;v++){const x=b.children[v-g+(m-k)*(8*d+4*(1-d))];x&&(r||(r=x,r.next=b.next),q&&(q.next=x),q=x,x.next=b.next)}b=r||b.next}}return f};u.getRegionStatistics=function(c,a,h,e,l){let b=this._root,f=0,d=0,g=0;const k={};let n=0;for(;null!==b;){var m=b.depth,p=b.xNode,t=b.yNode;if(m>=l)m=b.xGeohashTotal/b.count,p=b.yGeohashTotal/b.count,c<m&&m<=h&&a<p&&p<=e&&(f+=b.count,d+=b.xTotal,g+=b.yTotal,1===b.count&&(n=b.displayId),this._aggregateStatistics(k,b.statistics)),b=b.next;else{var q=
Math.ceil((m+1)/2),r=Math.floor((m+1)/2);m=1-m%2;var v=30-(3*q+2*r),x=30-(2*q+3*r),A=~((1<<v)-1),y=~((1<<x)-1);p<<=3*m+2*(1-m);t<<=2*m+3*(1-m);q=Math.max(p,(c&A)>>v);r=Math.max(t,(a&y)>>x);v=Math.min(p+8*m+4*(1-m),(h&A)>>v);x=Math.min(t+4*m+8*(1-m),(e&y)>>x);A=y=null;for(let B=r;B<=x;B++)for(let C=q;C<=v;C++){const w=b.children[C-p+(B-t)*(8*m+4*(1-m))];if(w)if(B!==r&&B!==x&&C!==q&&C!==v){const H=w.xGeohashTotal/w.count,I=w.yGeohashTotal/w.count;c<H&&H<=h&&a<I&&I<=e&&(f+=w.count,d+=w.xTotal,g+=w.yTotal,
1===w.count&&(n=w.displayId),this._aggregateStatistics(k,w.statistics))}else y||(y=w,y.next=b.next),A&&(A.next=w),A=w,w.next=b.next}b=y||b.next}}c=this._normalizeStatistics(k,f);return{count:f,attributes:c,xTotal:d,yTotal:g,referenceId:n}};u._forEachNode=function(c){let a=this._root;for(;null!==a;){const h=this._linkChildren(a)||a.next;c(a);a=h}};u._linkChildren=function(c){let a=null,h=null;for(let e=0;e<=c.children.length;e++){const l=c.children[e];l&&(a||(a=l,a.next=c.next),h&&(h.next=l),h=l,l.next=
c.next)}return a};u._updateStatisticsCursor=function(c,a,h){for(const f of this._statisticFields){const d=f.name,g=f.inField?c.readAttribute(f.inField):c.getComputedNumericAtIndex(f.inFieldIndex);switch(f.statisticType){case "norm":a.statistics[d]||(a.statistics[d]={});var e=c.readAttribute(f.inNormalizationField),l=a.statistics[d].onStatisticField||0,b=a.statistics[d].onStatisticNormalizationField||0;null==g||isNaN(g)||null==e||0===e||isNaN(e)||(a.statistics[d].onStatisticField=l+h*g,a.statistics[d].onStatisticNormalizationField=
b+h*e);break;case "sum":case "avg":a.statistics[d]||(a.statistics[d]={value:0,nanCount:0});e=a.statistics[d].value;l=a.statistics[d].nanCount;null==g||isNaN(g)?a.statistics[d].nanCount=l+h:a.statistics[d].value=e+h*g;break;case "avg_angle":{a.statistics[d]||(a.statistics[d]={x:0,y:0,nanCount:0});e=a.statistics[d].x;l=a.statistics[d].y;b=a.statistics[d].nanCount;const k=Math.PI/180;null==g||isNaN(g)?a.statistics[d].nanCount=b+h:(a.statistics[d].x=e+h*Math.cos(g*k),a.statistics[d].y=l+h*Math.sin(g*
k));break}case "mode":a.statistics[d]||(a.statistics[d]={}),a.statistics[d][g]=(a.statistics[d][g]||0)+h}}};u._aggregateStatistics=function(c,a){for(const h of this._statisticFields){const e=h.name;switch(h.statisticType){case "sum":case "avg":case "avg_angle":case "mode":case "norm":c[e]||(c[e]={});for(const l in a[e])c[e][l]=(c[e][l]||0)+a[e][l]}}};u._normalizeStatistics=function(c,a){const h={};for(const l of this._statisticFields){const b=l.name;switch(l.statisticType){case "norm":var e=c[b];
if(a&&null==e.onStatisticNormalizationField)break;if(a&&e.onStatisticNormalizationField){h[b]=e.onStatisticField/e.onStatisticNormalizationField;break}h[b]=0;break;case "sum":{if(!a)break;const {value:f,nanCount:d}=c[b];if(!(a-d))break;h[b]=f;break}case "avg":{if(!a)break;const {value:f,nanCount:d}=c[b];if(!(a-d))break;h[b]=f/(a-d);break}case "avg_angle":{if(!a)break;const {x:f,y:d,nanCount:g}=c[b];if(!(a-g))break;h[b]=180/Math.PI*Math.atan2(d/(a-g),f/(a-g));break}case "mode":{e=c[b];let f=0,d=null;
for(const g in e){const k=e[g];k>f&&(f=k,d=g)}h[b]="null"===d?null:d}}}return h};J._createClass(z,[{key:"count",get:function(){return this._root.count}},{key:"size",get:function(){return this._nodes}},{key:"poolSize",get:function(){return D.mapOr(this._pool,0,c=>c.size)}},{key:"depth",get:function(){let c=0;this._forEachNode(a=>c=Math.max(c,a.depth));return c}}]);return z}(),G=function(){function z(c,a,h){this.yTotal=this.xTotal=this.count=0;this.statistics={};this.displayId=0;this.displayIds=new Set;
this.next=null;this.yGeohashTotal=this.xGeohashTotal=this.yNode=this.xNode=this.depth=0;this.children=Array(32);for(let e=0;e<this.children.length;e++)this.children[e]=null;this.xNode=c;this.yNode=a;this.depth=h}var u=z.prototype;u.realloc=function(c,a,h){for(let e=0;e<this.children.length;e++)this.children[e]=null;this.xNode=c;this.yNode=a;this.depth=h;this.next=null;this.count=this.yTotal=this.xTotal=this.yGeohashTotal=this.xGeohashTotal=0;this.statistics={};this.displayIds.clear();return this};
u.add=function(c){this.displayIds.add(c)};u.remove=function(c){this.displayIds.delete(c)};u.getLngLatBounds=function(){var c=this.depth;const a=Math.ceil(c/2);c=Math.floor(c/2);return L.decodeGeohashXY({geohashX:this.xNode<<30-(3*a+2*c),geohashY:this.yNode<<30-(2*a+3*c)},this.depth)};u.find=function(c,a,h,e,l,b){if(e>=h)return this;var f=1-e%2;const d=3*f+2*(1-f),g=2*f+3*(1-f),k=30-l-d,n=30-b-g;f=this.children[((c&7*f+3*(1-f)<<k)>>k)+((a&3*f+7*(1-f)<<n)>>n)*(8*f+4*(1-f))];return null==f?null:f.find(c,
a,h,e+1,l+d,b+g)};return z}();E.GeohashTree=M;Object.defineProperty(E,"__esModule",{value:!0})});