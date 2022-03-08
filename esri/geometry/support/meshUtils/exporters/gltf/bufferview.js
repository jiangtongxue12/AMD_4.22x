// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers","../../../../../core/promiseUtils","./types"],function(h,l,m,e){let n=function(){function g(a,b,c,f,k){this.buffer=a;this.componentType=c;this.dataType=f;this.data=[];this.isFinalized=!1;this.accessorIndex=-1;this.accessorMax=this.accessorMin=this.accessorAttribute=null;b.bufferViews||(b.bufferViews=[]);this.index=b.bufferViews.length;this.bufferView={buffer:a.index,byteLength:-1,target:k};a=this.getElementSize();4<=a&&k!==e.TargetBuffer.ELEMENT_ARRAY_BUFFER&&
(this.bufferView.byteStride=a);b.bufferViews.push(this.bufferView);this.numComponentsForDataType=this.calculateNumComponentsForDataType()}var d=g.prototype;d.push=function(a){var b=this.data.length;this.data.push(a);if(0<=this.accessorIndex){b%=this.numComponentsForDataType;var c=this.accessorMin[b];this.accessorMin[b]="number"!==typeof c?a:Math.min(c,a);c=this.accessorMax[b];this.accessorMax[b]="number"!==typeof c?a:Math.max(c,a)}};d.getByteOffset=function(){if(!this.isFinalized)throw Error("Cannot get BufferView offset until it is finalized");
return this.buffer.getByteOffset(this)};d.createTypedArray=function(a,b){switch(this.componentType){case 5120:return new Int8Array(a,b);case 5126:return new Float32Array(a,b);case 5122:return new Int16Array(a,b);case 5121:return new Uint8Array(a,b);case 5125:return new Uint32Array(a,b);case 5123:return new Uint16Array(a,b)}};d.writeOutToBuffer=function(a,b){this.createTypedArray(a,b).set(this.data)};d.writeAsync=function(a){if(this.asyncWritePromise)throw Error("Can't write multiple bufferView values asynchronously");
return this.asyncWritePromise=a.then(b=>{b=new Uint8Array(b);for(let c=0;c<b.length;++c)this.data.push(b[c]);delete this.asyncWritePromise})};d.startAccessor=function(a){if(0<=this.accessorIndex)throw Error("Accessor was started without ending the previous one");this.accessorIndex=this.data.length;this.accessorAttribute=a;a=this.numComponentsForDataType;this.accessorMin=Array(a);this.accessorMax=Array(a)};d.endAccessor=function(){if(0>this.accessorIndex)throw Error("An accessor was not started, but was attempted to be ended");
var a=this.getElementSize();const b=this.numComponentsForDataType,c=(this.data.length-this.accessorIndex)/b;if(c%1)throw Error("An accessor was ended with missing component values");for(let f=0;f<this.accessorMin.length;++f)"number"!==typeof this.accessorMin[f]&&(this.accessorMin[f]=0),"number"!==typeof this.accessorMax[f]&&(this.accessorMax[f]=0);a={byteOffset:this.accessorIndex/b*a,componentType:this.componentType,count:c,type:this.dataType,min:this.accessorMin,max:this.accessorMax,name:this.accessorAttribute};
switch(this.accessorAttribute){case "TEXCOORD_0":case "TEXCOORD_1":case "COLOR_0":case "WEIGHTS_0":switch(this.componentType){case 5121:case 5123:a.normalized=!0}}this.accessorIndex=-1;this.accessorMax=this.accessorMin=this.accessorAttribute=null;return a};d.finalize=function(){const a=this.bufferView;return(new Promise(b=>{const c=this.buffer.getViewFinalizePromises(this);this.asyncWritePromise&&c.push(this.asyncWritePromise);b(m.eachAlways(c))})).then(()=>{this.isFinalized=!0;a.byteOffset=this.getByteOffset();
a.byteLength=this.dataSize;this.finalizedPromiseResolve&&this.finalizedPromiseResolve()})};d.getElementSize=function(){return this.sizeComponentType()*this.numComponentsForDataType};d.sizeComponentType=function(){switch(this.componentType){case 5120:case 5121:return 1;case 5122:case 5123:return 2;case 5125:case 5126:return 4}};d.calculateNumComponentsForDataType=function(){switch(this.dataType){case e.AttributeType.SCALAR:return 1;case e.AttributeType.VEC2:return 2;case e.AttributeType.VEC3:return 3;
case e.AttributeType.VEC4:case e.AttributeType.MAT2:return 4;case e.AttributeType.MAT3:return 9;case e.AttributeType.MAT4:return 16}};l._createClass(g,[{key:"dataSize",get:function(){return this.data.length*this.sizeComponentType()}},{key:"byteSize",get:function(){return 4*Math.ceil(this.dataSize/4)}},{key:"byteOffset",get:function(){if(!this.isFinalized)throw Error("Cannot get BufferView offset until it is finalized");return this.buffer.getByteOffset(this)}},{key:"finalized",get:function(){return this.finalizedPromise?
this.finalizedPromise:this.isFinalized?this.finalizedPromise=Promise.resolve():this.finalizedPromise=new Promise(a=>this.finalizedPromiseResolve=a)}}]);return g}();h.BufferView=n;Object.defineProperty(h,"__esModule",{value:!0})});