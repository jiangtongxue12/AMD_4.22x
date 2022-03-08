// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../analysis/Slice ../../core/Collection ../../core/Handles ../../core/Logger ../../core/maybe ../../core/promiseUtils ../../core/watchUtils ../../core/accessorSupport/decorators/aliasOf ../../core/arrayUtils ../../core/has ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/property ../../core/accessorSupport/decorators/subclass ../../views/3d/interactive/analysisTools/slice/SliceTool ../support/InteractiveToolViewModel".split(" "),
    function (h, d, n, p, q, b, e, r, t, u, z, A, B, f, v, w, x) {
        const y = b.getLogger("esri.widgets.Slice.SliceViewModel"), l = new Set; b = function (m) {
            let cut = false;
            function k(a) { a = m.call(this, a) || this; a.analysisView = null; a.logger = y; a.supportedViewType = "3d"; a.unsupportedErrorMessage = "SliceViewModel is only supported in 3D views."; a.handles = new q; a.analysis = new n; a.shape = null; a.tiltEnabled = !1; a.ready = !1; l.add(h._assertThisInitialized(a)); return a } h._inheritsLoose(k, m); var c = k.prototype; c.initialize = function () {
                this.handles.add(this.watch("shape",
                    (a, g) => { e.isNone(g) && e.isSome(a) ? e.isNone(this.tool) && !this.creatingTool && !cut&& this.createTool() : e.isSome(g) && e.isNone(a) && this.removeTool() }, !0)); this.handles.add(this.watch("tiltEnabled", a => this._updateToolOrRecreate(g => g.tiltEnabled = a), !0))
            }; c.destroy = function () { l.delete(this); this.handles = e.destroyMaybe(this.handles) }; c.start = function () {
                var a = h._asyncToGenerator(function* () { this.removeTool(); this.ready || (yield t.whenTrueOnce(this, "ready")); l.forEach(g => { g.view === this.view && g !== this && g.clear() }); return this.createTool() });
                return function () { return a.apply(this, arguments) }
            }(); c.startCut = function (plane) { var a = h._asyncToGenerator(function* (plane) {
                this.removeTool(); this.ready || (yield t.whenTrueOnce(this, "ready"));
                var ethis = null;
                l.forEach(g => { g.view === this.view && g !== this && g.clear(); ethis = g; });
                if (ethis) {cut = true;plane.cut = cut;ethis.view.slicePlane = plane;ethis.view.cutPolygon = plane;ethis.analysisView.slicePlaneEnabled = true;ethis.analysisView.analysisViewData.plane = plane;
                }
            });
            return function () { return a.apply(this, arguments) }
        }();c.clear = function () { this.removeTool(); this.shape = null; this.excludeGroundSurface = !1; this.excludedLayers = new p }; c.removeSliceAndStart = function () { this.removeTool(); this.shape = null; return this.start() }; c.enterExcludeLayerMode = function () { e.isSome(this.tool) && this.tool.enterExcludeLayerMode() }; c.exitExcludeLayerMode = function () { e.isSome(this.tool) && this.tool.exitExcludeLayerMode() }; c._updateToolOrRecreate = function (a) {
                e.isSome(this.tool) ? a(this.tool) : this.creatingTool &&
                    r.ignoreAbortErrors(this.createTool())
            }; c.onConnectToAnalysisView = function (a) { this.analysisView = a; this.ready = !0 }; c.onDisconnectFromAnalysisView = function () { this.ready = !1; this.analysisView = null }; c.createToolParams = function () { return { toolConstructor: w, constructorArguments: () => ({ tiltEnabled: this.tiltEnabled }) } }; h._createClass(k, [{ key: "state", get: function () { return this.disabled || !this.ready ? "disabled" : e.isNone(this.tool) || "pending" === this.tool.toolState ? "ready" : this.tool.state } }, {
                key: "excludedLayers", get: function () { return this.analysis.excludedLayers },
                set: function (a) { this.analysis.excludedLayers = a }
            }, { key: "excludeGroundSurface", get: function () { return this.analysis.excludeGroundSurface }, set: function (a) { this.analysis.excludeGroundSurface = a } }]); return k
        }(x.InteractiveToolViewModel); d.__decorate([f.property()], b.prototype, "analysisView", void 0); d.__decorate([f.property()], b.prototype, "analysis", void 0); d.__decorate([f.property({ readOnly: !0 })], b.prototype, "state", null); d.__decorate([f.property({ aliasOf: "analysis.shape" })], b.prototype, "shape", void 0);
        d.__decorate([f.property({ aliasOf: "analysis.tiltEnabled" })], b.prototype, "tiltEnabled", void 0); d.__decorate([u.aliasOf("tool.layersMode")], b.prototype, "layersMode", void 0); d.__decorate([f.property()], b.prototype, "excludedLayers", null); d.__decorate([f.property({ nonNullable: !0 })], b.prototype, "excludeGroundSurface", null); d.__decorate([f.property()], b.prototype, "ready", void 0); return b = d.__decorate([v.subclass("esri.widgets.slice.SliceViewModel")], b)
    });