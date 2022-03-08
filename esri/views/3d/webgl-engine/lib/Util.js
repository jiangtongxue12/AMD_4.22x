// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define("exports ../../../../core/mathUtils ../../../../chunks/mat4 ../../../../chunks/vec2 ../../../../chunks/vec2f64 ../../../../chunks/vec3f64 ../../../../chunks/vec4 ../../../../chunks/vec4f64".split(" "),function(f,p,E,v,F,w,x,G){function y(a,b){if(!a)throw b=b||"assert",a=Error(b),a.stack&&console.log(a.stack),new z(b);}function A(a,b){a[12]=b[0];a[13]=b[1];a[14]=b[2]}const l=G.create();let z=function(){function a(b){this.message=b}a.prototype.toString=function(){return`AssertException: ${this.message}`};
return a}();f.AssertException=z;f.assert=y;f.createTranslationMatrix=function(a,b){a=E.identity(a);A(a,b);return a};f.dec2hex=function(a){a=a.toString(16);return"00000000".substr(0,8-a.length)+a};f.encodeInt16=function(a){return p.clamp(Math.round(32767*a),-32767,32767)};f.encodeNormal=function(a,b){const c=Math.abs(a[0]),e=Math.abs(a[1]),d=1/(c+e+Math.abs(a[2])),g=Math.min(a[2]*d,0);b[0]=(0>a[0]?-1:1)*(c*d-g);b[1]=(0>a[1]?-1:1)*(e*d-g)};f.fallbackIfUndefined=function(a,b){return void 0===a?b:a};
f.fovd2fovx=function(a,b,c){return 2*Math.atan(b*Math.tan(.5*a)/Math.sqrt(b*b+c*c))};f.fovd2fovy=function(a,b,c){return 2*Math.atan(c*Math.tan(.5*a)/Math.sqrt(b*b+c*c))};f.fovx2fovd=function(a,b,c){return 2*Math.atan(Math.sqrt(b*b+c*c)*Math.tan(.5*a)/b)};f.fovx2fovy=function(a,b,c){return 2*Math.atan(c*Math.tan(.5*a)/b)};f.fovy2fovd=function(a,b,c){return 2*Math.atan(Math.sqrt(b*b+c*c)*Math.tan(.5*a)/c)};f.fovy2fovx=function(a,b,c){return 2*Math.atan(b*Math.tan(.5*a)/c)};f.getFirstObjectKey=function(a){for(const b in a)return b};
f.getMatrixTranslation=function(a,b=w.create()){b[0]=a[12];b[1]=a[13];b[2]=a[14];return b};f.hex2rgb=function(a){a=Math.floor(a);return[(a>>16&255)/255,(a>>8&255)/255,(a&255)/255]};f.inverseProjectionInfo=function(a,b,c,e,d){0===a[11]?(e[0]=2/(b*a[0]),e[1]=2/(c*a[5]),e[2]=(1+a[12])/a[0],e[3]=(1+a[13])/a[5],v.set(d,0,1)):(e[0]=-2/(b*a[0]),e[1]=-2/(c*a[5]),e[2]=(1-a[8])/a[0],e[3]=(1-a[9])/a[5],v.set(d,1,0))};f.isTranslationMatrix=function(a){return 1===a[0]&&0===a[1]&&0===a[2]&&0===a[3]&&0===a[4]&&
1===a[5]&&0===a[6]&&0===a[7]&&0===a[8]&&0===a[9]&&1===a[10]&&0===a[11]&&1===a[15]};f.logWithBase=function(a,b){return Math.log(a)/Math.log(b)};f.objectEmpty=function(a){for(const b in a)return!1;return!0};f.project=function(a,b,c,e,d){d||(d=a);l[0]=a[0];l[1]=a[1];l[2]=a[2];l[3]=1;x.transformMat4(l,l,b);2<d.length&&(d[2]=-l[2]);x.transformMat4(l,l,c);y(0!==l[3]);d[0]=l[0]/l[3];d[1]=l[1]/l[3];d[2]=l[2]/l[3];d[0]=(.5*d[0]+.5)*e[2]+e[0];d[1]=(.5*d[1]+.5)*e[3]+e[1]};f.rayBoxTest=function(a,b,c,e){let d,
g=(c[0]-a[0])/b[0],h=(e[0]-a[0])/b[0];g>h&&(d=g,g=h,h=d);let k=(c[1]-a[1])/b[1],m=(e[1]-a[1])/b[1];k>m&&(d=k,k=m,m=d);if(g>m||k>h)return!1;k>g&&(g=k);m<h&&(h=m);c=(c[2]-a[2])/b[2];a=(e[2]-a[2])/b[2];c>a&&(d=c,c=a,a=d);if(g>a||c>h)return!1;a<h&&(h=a);return 0>h?!1:!0};f.rayRay2D=function(a,b,c,e,d,g=F.create()){const h=(e[d]-c[d])*(b[0]-a[0])-(e[0]-c[0])*(b[d]-a[d]);if(0===h)return!1;c=((e[0]-c[0])*(a[d]-c[d])-(e[d]-c[d])*(a[0]-c[0]))/h;g[0]=a[0]+c*(b[0]-a[0]);g[1]=a[d]+c*(b[d]-a[d]);return!0};f.rayTriangle3D=
function(a,b,c,e,d,g,h,k,m=w.create()){var n=e[h]-c[g];const q=e[h+1]-c[g+1],r=e[h+2]-c[g+2];e=d[k]-c[g];h=d[k+1]-c[g+1];d=d[k+2]-c[g+2];const B=b[1]*d-h*b[2],C=b[2]*e-d*b[0],D=b[0]*h-e*b[1];k=n*B+q*C+r*D;if(-1E-5<k&&1E-5>k)return!1;k=1/k;const t=a[0]-c[g],u=a[1]-c[g+1];a=a[2]-c[g+2];m[1]=k*(t*B+u*C+a*D);if(0>m[1]||1<m[1])return!1;c=u*r-q*a;a=a*n-r*t;n=t*q-n*u;m[2]=k*(b[0]*c+b[1]*a+b[2]*n);if(0>m[2]||1<m[1]+m[2])return!1;m[0]=k*(e*c+h*a+d*n);return!0};f.rgb2hex=function(a){const b=p.clamp(Math.round(255*
a[0]),0,255),c=p.clamp(Math.round(255*a[1]),0,255);a=p.clamp(Math.round(255*a[2]),0,255);return"0x"+((b<<16)+(c<<8)+a).toString(16)};f.setMatrixTranslation=A;f.setMatrixTranslation3=function(a,b,c,e){a[12]=b;a[13]=c;a[14]=e};f.verify=function(a,b){a||console.warn("Verify failed: "+(b||"")+"\n"+Error("verify").stack)};Object.defineProperty(f,"__esModule",{value:!0})});