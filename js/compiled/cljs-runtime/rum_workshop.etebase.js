goog.provide('rum_workshop.etebase');
var module$node_modules$etebase$dist$umd$Etebase=shadow.js.require("module$node_modules$etebase$dist$umd$Etebase", {});
cljs.core.enable_console_print_BANG_();
rum_workshop.etebase.etebase_url = "https://api.etebase.com/developer/mksybr/";
rum_workshop.etebase.init_etebase_account = (function rum_workshop$etebase$init_etebase_account(){
return console.log(module$node_modules$etebase$dist$umd$Etebase.Account.login("mksybr","FzqNFBzg5uoEt3cKgHT64A",rum_workshop.etebase.etebase_url).then((function (e){
return console.log(e);
})));
});
rum_workshop.etebase.root_element = document.getElementById("app");
rum_workshop.etebase.app = rum.core.lazy_build(rum.core.build_defc,(function (){
return daiquiri.core.create_element("div",null,["Hello world"]);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"rum-workshop.etebase/app");
rum_workshop.etebase.refresh = (function rum_workshop$etebase$refresh(){
rum_workshop.etebase.init_etebase_account();

return rum.core.mount(rum_workshop.etebase.app(),rum_workshop.etebase.root_element);
});
rum_workshop.etebase.init = (function rum_workshop$etebase$init(){
return rum_workshop.etebase.refresh();
});
goog.exportSymbol('rum_workshop.etebase.init', rum_workshop.etebase.init);

//# sourceMappingURL=rum_workshop.etebase.js.map
