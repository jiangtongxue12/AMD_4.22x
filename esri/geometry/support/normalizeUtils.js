// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/_rollupPluginBabelHelpers ../../config ../../core/Error ../../core/Logger ../../core/maybe ../Polygon ../Polyline ./normalizeUtilsCommon ./spatialReferenceUtils ./webMercatorUtils ../../tasks/geometry/cut ../../tasks/geometry/simplify".split(" "),function(w,I,J,K,L,C,y,z,r,A,x,M,N){function D(a){const b=[];let c=0,d=0;for(let f=0;f<a.length;f++){const h=a[f];let k=null;for(let g=0;g<h.length;g++)k=h[g],b.push(k),0===g?d=c=k[0]:(c=Math.min(c,k[0]),d=Math.max(d,k[0]));k&&
b.push([(c+d)/2,0])}return b}function E(a,b){if(!(a instanceof z||a instanceof y))throw O.error("straightLineDensify: the input geometry is neither polyline nor polygon"),new K("straightLineDensify: the input geometry is neither polyline nor polygon");var c=r.getGeometryParts(a);const d=[];for(const h of c){c=[];d.push(c);c.push([h[0][0],h[0][1]]);for(let k=0;k<h.length-1;k++){const g=h[k][0],l=h[k][1],e=h[k+1][0],m=h[k+1][1];var f=Math.sqrt((e-g)*(e-g)+(m-l)*(m-l));const p=(m-l)/f,q=(e-g)/f,t=f/
b;if(1<t){for(let n=1;n<=t-1;n++){const u=n*b;c.push([q*u+g,p*u+l])}f=(f+Math.floor(t-1)*b)/2;c.push([q*f+g,p*f+l])}c.push([e,m])}}return"polygon"===a.type?new y({rings:d,spatialReference:a.spatialReference}):new z({paths:d,spatialReference:a.spatialReference})}function F(a,b,c){b&&(a=E(a,1E6),a=x.webMercatorToGeographic(a,!0));c&&(a=r.updatePolyGeometry(a,c));return a}function G(a,b,c){if(Array.isArray(a)){var d=a[0];d>b?(c=r.offsetMagnitude(d,b),a[0]=d+-2*c*b):d<c&&(b=r.offsetMagnitude(d,c),a[0]=
d+-2*b*c)}else d=a.x,d>b?(c=r.offsetMagnitude(d,b),a=a.clone().offset(-2*c*b,0)):d<c&&(b=r.offsetMagnitude(d,c),a=a.clone().offset(-2*b*c,0));return a}function P(a,b){let c=-1;for(let d=0;d<b.cutIndexes.length;d++){const f=b.cutIndexes[d],h=b.geometries[d],k=r.getGeometryParts(h);for(let g=0;g<k.length;g++){const l=k[g];l.some(e=>{if(180>e[0])return!0;e=0;for(var m=0;m<l.length;m++){var p=l[m][0];e=p>e?p:e}e=Number(e.toFixed(9));e=-360*r.offsetMagnitude(e,180);for(m=0;m<l.length;m++)p=h.getPoint(g,
m),h.setPoint(g,m,p.clone().offset(e,0));return!0})}if(f===c)if("polygon"===a[0].type)for(const g of r.getGeometryParts(h))a[f]=a[f].addRing(g);else{if("polyline"===a[0].type)for(const g of r.getGeometryParts(h))a[f]=a[f].addPath(g)}else c=f,a[f]=h}return a}function H(a,b,c){return B.apply(this,arguments)}function B(){B=I._asyncToGenerator(function*(a,b,c){var d;if(!Array.isArray(a))return H([a],b);b=null!=(d=null==b?void 0:b.url)?d:J.geometryServiceUrl;let f,h,k;let g=0;var l=[];d=[];for(var e of a)if(C.isNone(e))d.push(e);
else{if(!m){var m=e.spatialReference;var p=A.getInfo(m);var q=(f=m.isWebMercator)?102100:4326;h=r.cutParams[q].maxX;k=r.cutParams[q].minX;var t=r.cutParams[q].plus180Line;q=r.cutParams[q].minus180Line}if(p)if("mesh"===e.type)d.push(e);else if("point"===e.type)d.push(G(e.clone(),h,k));else if("multipoint"===e.type){var n=e.clone();n.points=n.points.map(u=>G(u,h,k));d.push(n)}else if("extent"===e.type)n=e.clone()._normalize(!1,!1,p),d.push(n.rings?new y(n):n);else if(e.extent){n=e.extent;const u=2*
r.offsetMagnitude(n.xmin,k)*h;let v=0===u?e.clone():r.updatePolyGeometry(e.clone(),u);n.offset(u,0);n.intersects(t)&&n.xmax!==h?(g=n.xmax>g?n.xmax:g,v=F(v,f),l.push(v),d.push("cut")):n.intersects(q)&&n.xmin!==k?(g=2*n.xmax*h>g?2*n.xmax*h:g,v=F(v,f,360),l.push(v),d.push("cut")):d.push(v)}else d.push(e.clone());else d.push(e)}m=r.offsetMagnitude(g,h);p=-90;t=m;for(e=new z;0<m;)q=-180+360*m,e.addPath([[q,p],[q,-1*p]]),p*=-1,m--;if(0<l.length&&0<t){m=yield M.cut(b,l,e,c);m=P(l,m);p=[];l=[];for(t=0;t<
d.length;t++)e=d[t],"cut"!==e?l.push(e):(e=m.shift(),q=a[t],C.isSome(q)&&"polygon"===q.type&&q.rings&&1<q.rings.length&&e.rings.length>=q.rings.length?(p.push(e),l.push("simplify")):l.push(f?x.geographicToWebMercator(e):e));if(!p.length)return l;d=yield N.simplify(b,p,c);a=[];for(c=0;c<l.length;c++)b=l[c],"simplify"!==b?a.push(b):a.push(f?x.geographicToWebMercator(d.shift()):d.shift());return a}a=[];for(c=0;c<d.length;c++)b=d[c],"cut"!==b?a.push(b):(b=l.shift(),a.push(!0===f?x.geographicToWebMercator(b):
b));return Promise.resolve(a)});return B.apply(this,arguments)}const O=L.getLogger("esri.geometry.support.normalizeUtils");w.getDenormalizedExtent=function(a){if(!a)return null;const b=a.extent;if(!b)return null;var c=a.spatialReference&&A.getInfo(a.spatialReference);if(!c)return b;const [d,f]=c.valid;({width:c}=b);let {xmin:h,xmax:k}=b;[h,k]=[k,h];if("extent"===a.type||0===c||c<=f||c>2*f||h<d||k>f)return b;let g;switch(a.type){case "polygon":if(1<a.rings.length)g=D(a.rings);else return b;break;case "polyline":if(1<
a.paths.length)g=D(a.paths);else return b;break;case "multipoint":g=a.points}a=b.clone();for(let l=0;l<g.length;l++){let e=g[l][0];0>e?(e+=f,k=Math.max(e,k)):(e-=f,h=Math.min(e,h))}a.xmin=h;a.xmax=k;return a.width<c?(a.xmin-=f,a.xmax-=f,a):b};w.normalizeCentralMeridian=H;w.normalizeMapX=function(a,b){if(b=A.getInfo(b)){const [c,d]=b.valid;b=d-c;if(a<c)for(;a<c;)a+=b;if(a>d)for(;a>d;)a-=b}return a};w.straightLineDensify=E;Object.defineProperty(w,"__esModule",{value:!0})});