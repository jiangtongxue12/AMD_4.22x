// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define("exports ../../../../core/maybe ../../layers/i3s/Intersector ../../terrain/Intersector ./intersectorUtils ./lodRendering/Intersector".split(" "),function(h,d,e,k,f,n){function m(a,b){if(d.isNone(a)||d.isNone(a.graphicUid))return null;const c=g(a,b);return d.isNone(c)?null:c===b.graphics?d.isSome(b.graphicsView)?b.graphicsView.getGraphicFromGraphicUid(a.graphicUid):null:(b=b.allLayerViews.find(l=>l.layer===c))&&!b.suspended&&"getGraphicFromGraphicUid"in b&&d.isSome(a.graphicUid)?b.getGraphicFromGraphicUid(a.graphicUid):
null}function p(a,b){const c=g(a,b);return d.isNone(c)?null:(b=b.allLayerViews.find(l=>l.layer===c))&&!b.suspended&&"getGraphicFromIntersectorTarget"in b?b.getGraphicFromIntersectorTarget(a):null}function g(a,b){return d.isNone(a.layerUid)?null:d.isSome(b.graphicsView)&&a.layerUid===b.graphicsView.graphics3d.layer.id?b.graphics:b.map.findLayerByUid(a.layerUid)}h.toGraphic=function(a,b){return f.isObjectIntersectorResult(a)||f.isHudIntersectorResult(a)?m(a.target.object.metadata,b):e.isPclIntersectorResult(a)?
a.target.createGraphic():k.isOverlayIntersectorResult(a)||n.isLodIntersectorResult(a)?m(a.target,b):e.isI3sIntersectorResult(a)?p(a.target,b):null};h.toOwner=function(a,b){if(f.isObjectIntersectorResult(a)||f.isHudIntersectorResult(a))return g(a.target.object.metadata,b);if(k.isTerrainIntersectorResult(a)){var c;return null==(c=b.map)?void 0:c.ground}return e.isPclIntersectorResult(a)||e.isI3sIntersectorResult(a)||k.isOverlayIntersectorResult(a)?g(a.target,b):null};Object.defineProperty(h,"__esModule",
{value:!0})});