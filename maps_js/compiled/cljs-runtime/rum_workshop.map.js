goog.provide('rum_workshop.map');
var module$node_modules$react_leaflet$cjs$index=shadow.js.require("module$node_modules$react_leaflet$cjs$index", {});
var module$node_modules$leaflet$dist$leaflet_src=shadow.js.require("module$node_modules$leaflet$dist$leaflet_src", {});
var module$node_modules$esri_leaflet$dist$esri_leaflet_debug=shadow.js.require("module$node_modules$esri_leaflet$dist$esri_leaflet_debug", {});
cljs.core.enable_console_print_BANG_();
rum_workshop.map.root_element = document.getElementById("app");
rum_workshop.map.position = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [51.505,-0.09], null));
rum_workshop.map.app = rum.core.lazy_build(rum.core.build_defc,(function (){
return daiquiri.core.create_element("div",{'id':"mapid"},null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (state){
return module$node_modules$esri_leaflet$dist$esri_leaflet_debug.basemapLayer("Gray").addTo(module$node_modules$leaflet$dist$leaflet_src.map("mapid",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"preferCanvas","preferCanvas",2025330405),true], null)).setView([51.505,-0.09],(13)));
})], null)], null),"rum-workshop.map/app");
rum_workshop.map.refresh = (function rum_workshop$map$refresh(){
return rum.core.mount(rum_workshop.map.app(),rum_workshop.map.root_element);
});
rum_workshop.map.init = (function rum_workshop$map$init(){
return rum_workshop.map.refresh();
});
goog.exportSymbol('rum_workshop.map.init', rum_workshop.map.init);

//# sourceMappingURL=rum_workshop.map.js.map
