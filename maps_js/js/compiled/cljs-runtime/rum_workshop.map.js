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
return module$node_modules$esri_leaflet$dist$esri_leaflet_debug.basemapLayer("Gray").addTo(module$node_modules$leaflet$dist$leaflet_src.map("mapid",({"preferCanvas": true, "keyboard": false})).setView([51.505,-0.09],(13)));
})], null)], null),"rum-workshop.map/app");
rum_workshop.map.location = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
rum_workshop.map.init_keybindings = (function rum_workshop$map$init_keybindings(){
var left = (function rum_workshop$map$init_keybindings_$_left(){
return console.log("LEFT");
});
var right = (function rum_workshop$map$init_keybindings_$_right(){
return console.log("RIGHT");
});
var up = (function rum_workshop$map$init_keybindings_$_up(){
return console.log("UP");
});
var down = (function rum_workshop$map$init_keybindings_$_down(){
return console.log("DOWN");
});
var space = (function rum_workshop$map$init_keybindings_$_space(){
console.log(navigator.geolocation.getCurrentPosition((function (p1__27608_SHARP_){
return cljs.core.reset_BANG_(rum_workshop.map.location,p1__27608_SHARP_.coords);
}),console.log));

if(cljs.core.not(navigator.geolocation)){
navigator.geolocation.getCurrentPosition((function (p1__27609_SHARP_){
return cljs.core.reset_BANG_(rum_workshop.map.location,p1__27609_SHARP_);
}),console.log);
} else {
}

return console.log(cljs.core.deref(rum_workshop.map.location));
});
keybind.core.bind_BANG_("space",new cljs.core.Keyword("rum-workshop.map","left","rum-workshop.map/left",-1676708201),space);

keybind.core.bind_BANG_("left",new cljs.core.Keyword("rum-workshop.map","left","rum-workshop.map/left",-1676708201),left);

keybind.core.bind_BANG_("right",new cljs.core.Keyword("rum-workshop.map","right","rum-workshop.map/right",-925391601),right);

keybind.core.bind_BANG_("up",new cljs.core.Keyword("rum-workshop.map","up","rum-workshop.map/up",1670841895),up);

return keybind.core.bind_BANG_("down",new cljs.core.Keyword("rum-workshop.map","down","rum-workshop.map/down",-918142630),down);
});
rum_workshop.map.refresh = (function rum_workshop$map$refresh(){
rum_workshop.map.init_keybindings();

return rum.core.mount(rum_workshop.map.app(),rum_workshop.map.root_element);
});
rum_workshop.map.init = (function rum_workshop$map$init(){
return rum_workshop.map.refresh();
});
goog.exportSymbol('rum_workshop.map.init', rum_workshop.map.init);

//# sourceMappingURL=rum_workshop.map.js.map
