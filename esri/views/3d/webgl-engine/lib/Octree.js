// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define("../../../../chunks/_rollupPluginBabelHelpers ../../../../core/maybe ../../../../core/ObjectPool ../../../../core/PooledArray ../../../../chunks/vec3 ../../../../chunks/vec3f64 ../../../../geometry/support/frustum ../../../../geometry/support/ray ../../../../chunks/sphere ./Util".split(" "),function(aa,N,ba,E,y,l,I,T,q,U){function J(f,e,a){a[0]=f[0]+e;a[1]=f[1]+e;a[2]=f[2]+e}function V(f,e,a,b){if(1===e)f=a(f[0]),q.copy(f,b);else{r[0]=Infinity;r[1]=Infinity;r[2]=Infinity;t[0]=-Infinity;t[1]=
-Infinity;t[2]=-Infinity;for(let h=0;h<e;h++){var c=a(f[h]);if(F(c[3])){var d=r,g=c;d[0]=Math.min(d[0],g[0]-g[3]);d[1]=Math.min(d[1],g[1]-g[3]);d[2]=Math.min(d[2],g[2]-g[3]);d=t;d[0]=Math.max(d[0],c[0]+c[3]);d[1]=Math.max(d[1],c[1]+c[3]);d[2]=Math.max(d[2],c[2]+c[3])}}y.lerp(b,r,t,.5);b[3]=Math.max(t[0]-r[0],t[1]-r[1],t[2]-r[2])/2}}function ca(f,e,a){if(!C.length)for(var b=0;8>b;++b)C.push({index:0,distance:0});for(b=0;8>b;++b){const c=W[b];C.data[b].index=b;C.data[b].distance=z(f,e,c)}C.sort((c,
d)=>c.distance-d.distance);for(f=0;8>f;++f)a[f]=C.data[f].index}function O(f,e){let a=Infinity,b=null;for(let c=0;8>c;++c){const d=z(f,e,X[c]);d<a&&(a=d,b=X[c])}return b}function z(f,e,a){return e*(f[0]*a[0]+f[1]*a[1]+f[2]*a[2])}function F(f){return!isNaN(f)&&-Infinity!==f&&Infinity!==f&&0<f}let fa=function(){function f(a,b){this._objectToBoundingSphere=a;this._maximumObjectsPerNode=10;this._maximumDepth=20;this._degenerateObjects=new Set;this._root=new k;this._objectCount=0;b&&(void 0!==b.maximumObjectsPerNode&&
(this._maximumObjectsPerNode=b.maximumObjectsPerNode),void 0!==b.maximumDepth&&(this._maximumDepth=b.maximumDepth))}var e=f.prototype;e.destroy=function(){this._degenerateObjects.clear();k.clearPool();P[0]=null;D.prune();C.prune()};e.add=function(a,b=a.length){this._objectCount+=b;this._grow(a,b);const c=k.acquire();for(let d=0;d<b;d++){const g=a[d];this._isDegenerate(g)?this._degenerateObjects.add(g):(c.init(this._root),this._add(g,c))}k.release(c)};e.remove=function(a,b=null){this._objectCount-=
a.length;const c=k.acquire();for(const d of a)a=N.isSome(b)?b:q.copy(this._objectToBoundingSphere(d),da),F(a[3])?(c.init(this._root),this._remove(d,a,c)):this._degenerateObjects.delete(d);k.release(c);this._shrink()};e.update=function(a,b){if(F(b[3])||!this._isDegenerate(a))P[0]=a,a=P,this.remove(a,b),this.add(a)};e.forEachAlongRay=function(a,b,c){const d=T.wrap(a,b);this._forEachNode(this._root,g=>{if(!this._intersectsNode(d,g))return!1;g=g.node;g.terminals.forAll(h=>{this._intersectsObject(d,h)&&
c(h)});null!==g.residents&&g.residents.forAll(h=>{this._intersectsObject(d,h)&&c(h)});return!0})};e.forEachAlongRayWithVerticalOffset=function(a,b,c,d){const g=T.wrap(a,b);this._forEachNode(this._root,h=>{if(!this._intersectsNodeWithOffset(g,h,d))return!1;h=h.node;h.terminals.forAll(n=>{this._intersectsObjectWithOffset(g,n,d)&&c(n)});null!==h.residents&&h.residents.forAll(n=>{this._intersectsObjectWithOffset(g,n,d)&&c(n)});return!0})};e.forEach=function(a){this._forEachNode(this._root,b=>{b=b.node;
b.terminals.forAll(a);null!==b.residents&&b.residents.forAll(a);return!0});this._degenerateObjects.forEach(a)};e.forEachDegenerateObject=function(a){this._degenerateObjects.forEach(a)};e.findClosest=function(a,b,c,d=()=>!0,g=Infinity){let h=Infinity,n=Infinity,u=null;const A=O(a,b),H=p=>{--g;if(d(p)){var v=this._objectToBoundingSphere(p);if(I.intersectsSphere(c,v)){var K=z(a,b,q.getCenter(v)),G=K-v[3];v=K+v[3];G<h&&(h=G,n=v,u=p)}}};this._forEachNodeDepthOrdered(this._root,p=>{if(0>=g||!I.intersectsSphere(c,
p.bounds))return!1;y.scale(w,A,p.halfSize);y.add(w,w,p.bounds);if(z(a,b,w)>n)return!1;p=p.node;p.terminals.forAll(v=>H(v));null!==p.residents&&p.residents.forAll(v=>H(v));return!0},a,b);return u};e.forEachInDepthRange=function(a,b,c,d,g,h,n){let u=-Infinity,A=Infinity;const H={setRange:m=>{1===c?(u=Math.max(u,m.near),A=Math.min(A,m.far)):(u=Math.max(u,-m.far),A=Math.min(A,-m.near))}};H.setRange(d);const p=z(b,c,a),v=O(b,c),K=O(b,-c),G=m=>{if(n(m)){var B=this._objectToBoundingSphere(m),L=q.getCenter(B);
L=z(b,c,L)-p;var ea=L+B[3];L-B[3]>A||ea<u||!I.intersectsSphere(h,B)||g(m,H)}};this._forEachNodeDepthOrdered(this._root,m=>{if(!I.intersectsSphere(h,m.bounds))return!1;y.scale(w,v,m.halfSize);y.add(w,w,m.bounds);if(z(b,c,w)-p>A)return!1;y.scale(w,K,m.halfSize);y.add(w,w,m.bounds);if(z(b,c,w)-p<u)return!1;m=m.node;m.terminals.forAll(B=>G(B));null!==m.residents&&m.residents.forAll(B=>G(B));return!0},b,c)};e.forEachNode=function(a){this._forEachNode(this._root,b=>a(b.node,b.bounds,b.halfSize))};e._intersectsNode=
function(a,b){J(b.bounds,2*-b.halfSize,r);J(b.bounds,2*b.halfSize,t);return U.rayBoxTest(a.origin,a.direction,r,t)};e._intersectsNodeWithOffset=function(a,b,c){J(b.bounds,2*-b.halfSize,r);J(b.bounds,2*b.halfSize,t);c.applyToMinMax(r,t);return U.rayBoxTest(a.origin,a.direction,r,t)};e._intersectsObject=function(a,b){b=this._objectToBoundingSphere(b);return 0<b[3]?q.intersectsRay(b,a):!0};e._intersectsObjectWithOffset=function(a,b,c){b=this._objectToBoundingSphere(b);return 0<b[3]?q.intersectsRay(c.applyToBoundingSphere(b),
a):!0};e._forEachNode=function(a,b){a=k.acquire().init(a);const c=[a];for(;0!==c.length;){a=c.pop();if(b(a)&&!a.isLeaf())for(let d=0;d<a.node.children.length;d++)a.node.children[d]&&c.push(k.acquire().init(a).advance(d));k.release(a)}};e._forEachNodeDepthOrdered=function(a,b,c,d=1){a=k.acquire().init(a);const g=[a];for(ca(c,d,Y);0!==g.length;){a=g.pop();if(b(a)&&!a.isLeaf())for(c=7;0<=c;--c)d=Y[c],a.node.children[d]&&g.push(k.acquire().init(a).advance(d));k.release(a)}};e._remove=function(a,b,c){D.clear();
b=c.advanceTo(b,(d,g)=>{D.push(d.node);D.push(g)})?c.node.terminals:c.node.residents;b.removeUnordered(a);if(0===b.length)for(a=D.length-2;0<=a&&this._purge(D.data[a],D.data[a+1]);a-=2);};e._nodeIsEmpty=function(a){if(0!==a.terminals.length)return!1;if(null!==a.residents)return 0===a.residents.length;for(let b=0;b<a.children.length;b++)if(a.children[b])return!1;return!0};e._purge=function(a,b){0<=b&&(a.children[b]=null);return this._nodeIsEmpty(a)?(null===a.residents&&(a.residents=new E({shrink:!0})),
!0):!1};e._add=function(a,b){b.advanceTo(this._objectToBoundingSphere(a))?b.node.terminals.push(a):(b.node.residents.push(a),b.node.residents.length>this._maximumObjectsPerNode&&b.depth<this._maximumDepth&&this._split(b))};e._split=function(a){const b=a.node.residents;a.node.residents=null;for(let c=0;c<b.length;c++){const d=k.acquire().init(a);this._add(b.getItemAt(c),d);k.release(d)}};e._grow=function(a,b){0!==b&&(V(a,b,c=>this._objectToBoundingSphere(c),x),F(x[3])&&!this._fitsInsideTree(x)&&(this._nodeIsEmpty(this._root.node)?
(q.copy(x,this._root.bounds),this._root.halfSize=1.25*x[3]):(a=this._rootBoundsForRootAsSubNode(x),this._placingRootViolatesMaxDepth(a)?this._rebuildTree(x,a):this._growRootAsSubNode(a),k.release(a))))};e._rebuildTree=function(a,b){y.copy(Q,b.bounds);Q[3]=b.halfSize;V([a,Q],2,c=>c,R);a=k.acquire().init(this._root);this._root.initFrom(null,R,1.25*R[3]);this._forEachNode(a,c=>{this.add(c.node.terminals.data,c.node.terminals.length);null!==c.node.residents&&this.add(c.node.residents.data,c.node.residents.length);
return!0});k.release(a)};e._placingRootViolatesMaxDepth=function(a){const b=Math.log(a.halfSize/this._root.halfSize)*Math.LOG2E;let c=0;this._forEachNode(this._root,d=>{c=Math.max(c,d.depth);return c+b<=this._maximumDepth});return c+b>this._maximumDepth};e._rootBoundsForRootAsSubNode=function(a){var b=a[3];let c=-Infinity;const d=this._root.bounds,g=this._root.halfSize;for(var h=0;3>h;h++){var n=Math.max(0,Math.ceil((d[h]-g-(a[h]-b))/(2*g)));const u=Math.max(0,Math.ceil((a[h]+b-(d[h]+g))/(2*g)))+
1;c=Math.max(c,2**Math.ceil(Math.log(n+u)*Math.LOG2E));M[h].min=n;M[h].max=u}for(a=0;3>a;a++)b=M[a].min,h=M[a].max,n=(c-(b+h))/2,b+=Math.ceil(n),h+=Math.floor(n),S[a]=d[a]-g-b*g*2+(h+b)*g;S[3]=c*g*Z;return k.acquire().initFrom(null,S,c*g,0)};e._growRootAsSubNode=function(a){const b=this._root.node;y.copy(x,this._root.bounds);x[3]=this._root.halfSize;this._root.init(a);a.advanceTo(x,null,!0);a.node.children=b.children;a.node.residents=b.residents;a.node.terminals=b.terminals};e._shrink=function(){for(;;){const a=
this._findShrinkIndex();if(-1===a)break;this._root.advance(a);this._root.depth=0}};e._findShrinkIndex=function(){if(0!==this._root.node.terminals.length||this._root.isLeaf())return-1;let a=null;const b=this._root.node.children;let c=0,d=0;for(;d<b.length&&null==a;)c=d++,a=b[c];for(;d<b.length;)if(b[d++])return-1;return c};e._isDegenerate=function(a){a=this._objectToBoundingSphere(a)[3];return!F(a)};e._fitsInsideTree=function(a){const b=this._root.bounds,c=this._root.halfSize;return a[3]<=c&&a[0]>=
b[0]-c&&a[0]<=b[0]+c&&a[1]>=b[1]-c&&a[1]<=b[1]+c&&a[2]>=b[2]-c&&a[2]<=b[2]+c};aa._createClass(f,[{key:"bounds",get:function(){return this._root.bounds}},{key:"halfSize",get:function(){return this._root.halfSize}},{key:"root",get:function(){return this._root.node}},{key:"maximumObjectsPerNode",get:function(){return this._maximumObjectsPerNode}},{key:"maximumDepth",get:function(){return this._maximumDepth}},{key:"objectCount",get:function(){return this._objectCount}}]);return f}(),k=function(){function f(){this.bounds=
q.create();this.halfSize=0;this.initFrom(null,null,0,0)}var e=f.prototype;e.init=function(a){return this.initFrom(a.node,a.bounds,a.halfSize,a.depth)};e.initFrom=function(a,b,c,d=this.depth){this.node=N.isSome(a)?a:f.createEmptyNode();N.isSome(b)&&q.copy(b,this.bounds);this.halfSize=c;this.depth=d;return this};e.advance=function(a){let b=this.node.children[a];b||(b=f.createEmptyNode(),this.node.children[a]=b);this.node=b;this.halfSize/=2;this.depth++;a=W[a];this.bounds[0]+=a[0]*this.halfSize;this.bounds[1]+=
a[1]*this.halfSize;this.bounds[2]+=a[2]*this.halfSize;this.bounds[3]=this.halfSize*Z;return this};e.advanceTo=function(a,b,c=!1){for(;;){if(this.isTerminalFor(a))return b&&b(this,-1),!0;if(this.isLeaf()){if(!c)return b&&b(this,-1),!1;this.node.residents=null}const d=this._childIndex(a);b&&b(this,d);this.advance(d)}};e.isLeaf=function(){return null!=this.node.residents};e.isTerminalFor=function(a){return a[3]>this.halfSize/2};e._childIndex=function(a){const b=this.bounds;return(b[0]<a[0]?1:0)+(b[1]<
a[1]?2:0)+(b[2]<a[2]?4:0)};f.createEmptyNode=function(){return{children:[null,null,null,null,null,null,null,null],terminals:new E({shrink:!0}),residents:new E({shrink:!0})}};f.acquire=function(){return f._pool.acquire()};f.release=function(a){f._pool.release(a)};f.clearPool=function(){f._pool.prune()};return f}();k._pool=new ba(k);const W=[l.fromValues(-1,-1,-1),l.fromValues(1,-1,-1),l.fromValues(-1,1,-1),l.fromValues(1,1,-1),l.fromValues(-1,-1,1),l.fromValues(1,-1,1),l.fromValues(-1,1,1),l.fromValues(1,
1,1)],X=[l.fromValues(-1,-1,-1),l.fromValues(-1,-1,1),l.fromValues(-1,1,-1),l.fromValues(-1,1,1),l.fromValues(1,-1,-1),l.fromValues(1,-1,1),l.fromValues(1,1,-1),l.fromValues(1,1,1)],Z=Math.sqrt(3),P=[null],S=q.create(),w=l.create(),r=l.create(),t=l.create(),D=new E,da=q.create(),x=q.create(),Q=q.create(),R=q.create(),M=[{min:0,max:0},{min:0,max:0},{min:0,max:0}],C=new E,Y=[0,0,0,0,0,0,0,0];return fa});