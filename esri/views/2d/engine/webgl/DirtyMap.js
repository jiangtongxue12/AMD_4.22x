// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define(function(){return function(){function h(){this._dirties=[{vertexFrom:-1,vertexCount:-1,indexFrom:-1,indexCount:-1,allDirty:!1},{vertexFrom:-1,vertexCount:-1,indexFrom:-1,indexCount:-1,allDirty:!1},{vertexFrom:-1,vertexCount:-1,indexFrom:-1,indexCount:-1,allDirty:!1},{vertexFrom:-1,vertexCount:-1,indexFrom:-1,indexCount:-1,allDirty:!1},{vertexFrom:-1,vertexCount:-1,indexFrom:-1,indexCount:-1,allDirty:!1}]}var e=h.prototype;e.hasDirty=function(){return this._dirties.some(a=>-1!==a.indexCount||
a.allDirty)};e.markAllClean=function(){for(const a of this._dirties)a.indexFrom=-1,a.indexCount=-1,a.vertexFrom=-1,a.vertexCount=-1,a.allDirty=!1};e.markAllDirty=function(){for(const a of this._dirties)a.allDirty=!0};e.forEach=function(a){for(let b=0;b<this._dirties.length;++b){const {indexCount:c,indexFrom:d,vertexCount:k,vertexFrom:l,allDirty:f}=this._dirties[b],m={};let n=void 0,g=!1;if(f||-1!==l&&0<k)m.geometry={count:k,from:l,allDirty:f},g=!0;if(f||-1!==d&&0<c)n={count:c,from:d,allDirty:f},g=
!0;g&&a({indices:n,vertices:m},b)}};e.markDirtyIndices=function(a,b,c){a=this._dirties[a];if(!a.allDirty)if(-1!==a.indexCount){const d=Math.min(a.indexFrom,b);b=Math.max(a.indexFrom+a.indexCount,b+c)-d;a.indexFrom=d;a.indexCount=b}else a.indexFrom=b,a.indexCount=c};e.markDirtyVertices=function(a,b,c,d){a=this._dirties[a];a.allDirty||(-1!==a.vertexCount?(b=Math.min(a.vertexFrom,c),c=Math.max(a.vertexFrom+a.vertexCount,c+d)-b,a.vertexFrom=b,a.vertexCount=c):(a.vertexFrom=c,a.vertexCount=d))};return h}()});