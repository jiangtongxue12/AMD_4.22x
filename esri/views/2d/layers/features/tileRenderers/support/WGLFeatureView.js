// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define("exports ../../../../../../chunks/_rollupPluginBabelHelpers ../../../../../../core/has ../../../../../../core/promiseUtils ../../../../engine/brushes ../../../../engine/FeatureContainer ../../../../engine/webgl/enums".split(" "),function(m,n,k,p,e,q,l){const r=k("featurelayer-order-by-server-enabled");k=function(g){function h(a,b,c,f){a=g.call(this,a)||this;a._pointToCallbacks=new Map;a._layer=c;a._layerView=b;a._onUpdate=f;return a}n._inheritsLoose(h,g);var d=h.prototype;d.renderChildren=
function(a){this.attributeView.update();this.hasAnimation&&a.painter.effects.integrate.draw(a,a.attributeView);g.prototype.renderChildren.call(this,a)};d.hasEmptyAttributeView=function(){return this.attributeView.isEmpty()};d.isUpdating=function(){return this.attributeView.isUpdating()};d.hitTest=function(a){const b=p.createResolver();this._pointToCallbacks.set(a,b);this.requestRender();return b.promise};d.onTileData=function(a,b){const c=r&&"orderBy"in this._layer&&this._layer.orderBy,f=(null==c?
void 0:c.length)&&!c[0].valueExpression&&c[0].field;a.patch(b,c&&this._layerView.orderByFields===f);this.contains(a)||this.addChild(a);this.requestRender()};d.onTileError=function(a){this.contains(a)||this.addChild(a)};d.updateTransitionProperties=function(a,b){g.prototype.updateTransitionProperties.call(this,a,b);this._layerView.featureEffectView.transitionStep(a,b);this._layerView.featureEffectView.transitioning&&this.requestRender()};d.doRender=function(a){const {minScale:b,maxScale:c}=this._layer,
f=a.state.scale;f<=(b||Infinity)&&f>=c&&g.prototype.doRender.call(this,a)};d.onAttributeStoreUpdate=function(){this.hasLabels&&this._layerView.view.labelManager.requestUpdate();this._onUpdate()};d.prepareRenderPasses=function(a){const b=a.registerRenderPass({name:"label",brushes:[e.brushes.label],target:()=>this.hasLabels?this.children:null,drawPhase:l.WGLDrawPhase.LABEL|l.WGLDrawPhase.LABEL_ALPHA}),c=a.registerRenderPass({name:"geometry",brushes:[e.brushes.fill,e.brushes.line,e.brushes.marker,e.brushes.text],
target:()=>this.children,enableDefaultDraw:()=>!this._layerView.featureEffectView.hasEffects,effects:[{apply:a.effects.outsideEffect,enable:()=>this._layerView.featureEffectView.hasEffects,args:()=>this._layerView.featureEffectView.excludedEffects},{apply:a.effects.insideEffect,enable:()=>this._layerView.featureEffectView.hasEffects,args:()=>this._layerView.featureEffectView.includedEffects},{apply:a.effects.hittest,enable:()=>!!this._pointToCallbacks.size,args:()=>this._pointToCallbacks}]}),f=a.registerRenderPass({name:"highlight",
brushes:[e.brushes.fill,e.brushes.line,e.brushes.marker,e.brushes.text],target:()=>this.children,drawPhase:l.WGLDrawPhase.HIGHLIGHT,enableDefaultDraw:()=>!1,effects:[{apply:a.effects.highlight,enable:()=>!!this._layerView.hasHighlight()}]});return[...g.prototype.prepareRenderPasses.call(this,a),c,f,b]};n._createClass(h,[{key:"hasAnimation",get:function(){return this.hasLabels}},{key:"hasLabels",get:function(){if("sublayers"in this._layer)return this._layer.sublayers.some(b=>b.labelingInfo&&b.labelingInfo.length&&
b.labelsVisible);var a=this._layer.featureReduction;a=a&&"cluster"===a.type&&a.labelsVisible&&a.labelingInfo&&a.labelingInfo.length;return this._layer.labelingInfo&&this._layer.labelingInfo.length&&this._layer.labelsVisible||!!a}}]);return h}(q.FeatureContainer);m.WGLFeatureView=k;Object.defineProperty(m,"__esModule",{value:!0})});