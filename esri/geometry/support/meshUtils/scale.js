// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define("exports ../../../core/Logger ../../../core/maybe ../../../chunks/vec3 ../../../chunks/vec3f64 ../../projection ../../projectionEllipsoid ./geographicUtils ./projection".split(" "),function(r,y,f,k,l,q,z,A,m){function t(b,g,a=l.ZEROS){if(b)for(let c=0;c<b.length;c+=3){for(var d=0;3>d;d++)n[d]=b[c+d]-a[d];k.scale(n,n,g);for(d=0;3>d;d++)b[c+d]=n[d]+a[d]}}const u=y.getLogger("esri.geometry.support.meshUtils.scale"),n=l.create(),v=l.create(),e=l.create();r.scale=function(b,g,a){if(b.vertexAttributes&&
b.vertexAttributes.position){var d=b.spatialReference;if(f.isSome(b.transform)){var c;null!=(null==a?void 0:a.geographic)&&a.geographic!==b.transform.geographic&&u.warn(`Specifying the 'geographic' parameter (${a.geographic}) different from the Mesh transform setting (${b.transform.geographic}) is not supported`);a=null!=(c=null==a?void 0:a.origin)?c:b.transform.getOriginPoint(d);b=b.transform;a=k.set(n,a.x,a.y,a.z);a=k.subtract(n,a,b.origin);b.applyLocalInverse(a,v);g=k.scale(l.create(),b.scale,
g);b.scale=g;b.applyLocalInverse(a,a);k.subtract(a,a,v);b.translation=k.add(l.create(),b.translation,a)}else if(c=A.isGeographicMesh(b.spatialReference,a),a=a&&a.origin||b.origin,c){{c=a;a=b.spatialReference;d=z.getSphericalPCPF(a);q.projectPointToVector(c,e,d)||q.projectPointToVector(b.origin,e,d);c=b.vertexAttributes.position;d=b.vertexAttributes.normal;const p=b.vertexAttributes.tangent,h=new Float64Array(c.length),w=f.isSome(d)?new Float32Array(d.length):null,x=f.isSome(p)?new Float32Array(p.length):
null;m.projectToPCPF(c,a,h);f.isSome(d)&&m.projectNormalToPCPF(d,c,h,a,w);f.isSome(p)&&m.projectTangentToPCPF(p,c,h,a,x);t(h,g,e);m.projectFromPCPF(h,c,a);f.isSome(d)&&m.projectNormalFromPCPF(w,c,h,a,d);f.isSome(p)&&m.projectTangentFromPCPF(x,c,h,a,p);b.vertexAttributesChanged()}}else q.projectPointToVector(a,e,b.spatialReference)||(c=b.origin,e[0]=c.x,e[1]=c.y,e[2]=c.z,u.error(`Failed to project specified origin (wkid:${a.spatialReference.wkid}) to mesh spatial reference (wkid:${b.spatialReference.wkid}).`)),
t(b.vertexAttributes.position,g,e),b.vertexAttributesChanged()}};Object.defineProperty(r,"__esModule",{value:!0})});