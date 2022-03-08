// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define(["exports"],function(b){function q(a){return a}function c(a){const e=2*(a-Math.sqrt((a-1)*a)),g=e/2/a;return f=>f<g?a*f*f:e*f-e+1}function d(a,e){return(g,f)=>g<e?e*a(g/e,f):1-a((1-g)/(1-e),f)*(1-e)}const h=a=>a*a,r=a=>1-h(1-a),t=a=>.5>a?h(2*a)/2:(1-h(1-2*(a-.5))+1)/2,k=a=>a*a*a,u=a=>1-k(1-a),v=a=>.5>a?k(2*a)/2:(1-k(1-2*(a-.5))+1)/2,l=a=>a*a*a*a,w=a=>1-l(1-a),x=a=>.5>a?l(2*a)/2:(1-l(1-2*(a-.5))+1)/2,m=a=>a*a*a*a*a,y=a=>1-m(1-a),z=a=>.5>a?m(2*a)/2:(1-m(1-2*(a-.5))+1)/2,n=a=>-Math.cos(a*Math.PI/
2)+1,A=a=>1-n(1-a),B=a=>.5>a?n(2*a)/2:(1-n(1-2*(a-.5))+1)/2,C=a=>2**(10*(a-1)),D=a=>1-2**(10*(1-a-1)),E=a=>.5>a?2**(10*(2*a-1))/2:(1-2**(10*(1-2*(a-.5)-1))+1)/2,p=a=>-(Math.sqrt(1-a*a)-1),F=a=>1-p(1-a),G=a=>.5>a?p(2*a)/2:(1-p(1-2*(a-.5))+1)/2,H=d(c(1),1),I=d(c(1),0),J=d(c(1),.5),K=d(c(2),1),L=d(c(2),0),M=d(c(2),.5),N=d(c(3),1),O=d(c(3),0),P=d(c(3),.5),Q=d(c(4),1),R=d(c(4),0),S=d(c(4),.5);b.EasingFunctions={linear:q,"in-quad":h,"out-quad":r,"in-out-quad":t,"in-coast-quad":H,"out-coast-quad":I,"in-out-coast-quad":J,
"in-cubic":k,"out-cubic":u,"in-out-cubic":v,"in-coast-cubic":K,"out-coast-cubic":L,"in-out-coast-cubic":M,"in-quart":l,"out-quart":w,"in-out-quart":x,"in-coast-quart":N,"out-coast-quart":O,"in-out-coast-quart":P,"in-quint":m,"out-quint":y,"in-out-quint":z,"in-coast-quint":Q,"out-coast-quint":R,"in-out-coast-quint":S,"in-sine":n,"out-sine":A,"in-out-sine":B,"in-expo":C,"out-expo":D,"in-out-expo":E,"in-circ":p,"out-circ":F,"in-out-circ":G};b.inCirc=p;b.inCoastCubic=K;b.inCoastQuad=H;b.inCoastQuart=
N;b.inCoastQuint=Q;b.inCubic=k;b.inExpo=C;b.inOutCirc=G;b.inOutCoastCubic=M;b.inOutCoastQuad=J;b.inOutCoastQuart=P;b.inOutCoastQuint=S;b.inOutCubic=v;b.inOutExpo=E;b.inOutQuad=t;b.inOutQuart=x;b.inOutQuint=z;b.inOutSine=B;b.inQuad=h;b.inQuart=l;b.inQuint=m;b.inSine=n;b.linear=q;b.outCirc=F;b.outCoastCubic=L;b.outCoastQuad=I;b.outCoastQuart=O;b.outCoastQuint=R;b.outCubic=u;b.outExpo=D;b.outQuad=r;b.outQuart=w;b.outQuint=y;b.outSine=A;Object.defineProperty(b,"__esModule",{value:!0})});