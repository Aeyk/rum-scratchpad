goog.provide('rum_workshop.core');
rum_workshop.core.handlers = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-message","on-message",1662987808),(function (e){
return cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e.data], 0));
}),new cljs.core.Keyword(null,"on-open","on-open",-1391088163),(function (){
return cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Opening a new connection"], 0));
}),new cljs.core.Keyword(null,"on-close","on-close",-761178394),(function (){
return cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Closing a connection"], 0));
})], null);
rum_workshop.core.socket_uri = "ws://localhost:8888/ws";
rum_workshop.core._QMARK_csrf_token = (function (){var temp__5735__auto__ = document.getElementById("sente-csrf-token");
if(cljs.core.truth_(temp__5735__auto__)){
var el = temp__5735__auto__;
return el.getAttribute("data-csrf-token");
} else {
return null;
}
})();
var map__17490_17514 = taoensso.sente.make_channel_socket_client_BANG_.cljs$core$IFn$_invoke$arity$variadic("/ws",rum_workshop.core._QMARK_csrf_token,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"auto","auto",-566279492)], null)], 0));
var map__17490_17515__$1 = (((((!((map__17490_17514 == null))))?(((((map__17490_17514.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17490_17514.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17490_17514):map__17490_17514);
var chsk_17516 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17490_17515__$1,new cljs.core.Keyword(null,"chsk","chsk",-863703081));
var ch_recv_17517 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17490_17515__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
var send_fn_17518 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17490_17515__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var state_17519 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17490_17515__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
rum_workshop.core.chsk = chsk_17516;

rum_workshop.core.ch_chsk = ch_recv_17517;

rum_workshop.core.chsk_send_BANG_ = send_fn_17518;

rum_workshop.core.chsk_state = state_17519;
cljs.core.enable_console_print_BANG_();
if((typeof rum_workshop !== 'undefined') && (typeof rum_workshop.core !== 'undefined') && (typeof rum_workshop.core.app_state !== 'undefined')){
} else {
rum_workshop.core.app_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"Hello world!"], null));
}
rum_workshop.core.hello = rum.core.lazy_build(rum.core.build_defc,(function (text){
return daiquiri.core.create_element("pre",{'className':"app"},[["<em>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(text),"</em>"].join('')]);
}),null,"rum-workshop.core/hello");
rum_workshop.core.numbered_list = rum.core.lazy_build(rum.core.build_defc,(function (n){
return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function rum_workshop$core$iter__17493(s__17494){
return (new cljs.core.LazySeq(null,(function (){
var s__17494__$1 = s__17494;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__17494__$1);
if(temp__5735__auto__){
var s__17494__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__17494__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__17494__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__17496 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__17495 = (0);
while(true){
if((i__17495 < size__4528__auto__)){
var x = cljs.core._nth(c__4527__auto__,i__17495);
cljs.core.chunk_append(b__17496,daiquiri.core.create_element("div",null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)]));

var G__17527 = (i__17495 + (1));
i__17495 = G__17527;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17496),rum_workshop$core$iter__17493(cljs.core.chunk_rest(s__17494__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17496),null);
}
} else {
var x = cljs.core.first(s__17494__$2);
return cljs.core.cons(daiquiri.core.create_element("div",null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)]),rum_workshop$core$iter__17493(cljs.core.rest(s__17494__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(n + (1))));
})());
}),null,"rum-workshop.core/numbered-list");
rum_workshop.core.comments = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
rum_workshop.core.add_comment = (function rum_workshop$core$add_comment(comment){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(rum_workshop.core.comments,cljs.core.conj,comment);
});
rum_workshop.core.comment_list = rum.core.lazy_build(rum.core.build_defc,(function (){
return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function rum_workshop$core$iter__17501(s__17502){
return (new cljs.core.LazySeq(null,(function (){
var s__17502__$1 = s__17502;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__17502__$1);
if(temp__5735__auto__){
var s__17502__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__17502__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__17502__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__17504 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__17503 = (0);
while(true){
if((i__17503 < size__4528__auto__)){
var comment = cljs.core._nth(c__4527__auto__,i__17503);
cljs.core.chunk_append(b__17504,(function (){var attrs17500 = comment;
return daiquiri.core.create_element("li",((cljs.core.map_QMARK_(attrs17500))?daiquiri.interpreter.attributes(attrs17500):null),((cljs.core.map_QMARK_(attrs17500))?null:[daiquiri.interpreter.interpret(attrs17500)]));
})());

var G__17561 = (i__17503 + (1));
i__17503 = G__17561;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17504),rum_workshop$core$iter__17501(cljs.core.chunk_rest(s__17502__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17504),null);
}
} else {
var comment = cljs.core.first(s__17502__$2);
return cljs.core.cons((function (){var attrs17500 = comment;
return daiquiri.core.create_element("li",((cljs.core.map_QMARK_(attrs17500))?daiquiri.interpreter.attributes(attrs17500):null),((cljs.core.map_QMARK_(attrs17500))?null:[daiquiri.interpreter.interpret(attrs17500)]));
})(),rum_workshop$core$iter__17501(cljs.core.rest(s__17502__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.deref(rum_workshop.core.comments));
})());
}),null,"rum-workshop.core/comment-list");
rum_workshop.core.button = rum.core.lazy_build(rum.core.build_defc,(function (){
return daiquiri.core.create_element("button",{'onClick':(function (e){
rum_workshop.core.add_comment("hello");

return console.log(rum_workshop.core.comments);
})},["click me"]);
}),null,"rum-workshop.core/button");
rum_workshop.core.stateful_component = rum.core.lazy_build(rum.core.build_defcs,(function (state,_,___$1){
return daiquiri.core.create_element("div",{'className':"app"},[cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([state], 0)),rum_workshop.core.comment_list(),rum_workshop.core.button()]);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"will-mount","will-mount",-434633071),(function (state){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword("rum-workshop.core","handle","rum-workshop.core/handle",624202387),cljs.core.deref(rum_workshop.core.comments));
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function (state){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([state], 0));
}),new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (state){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([state], 0));
}),new cljs.core.Keyword(null,"should-update","should-update",-1292781795),(function (state){
return null;
}),new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (state){
return null;
})], null)], null),"rum-workshop.core/stateful-component");
rum_workshop.core.unmount_stateful_component = rum.core.lazy_build(rum.core.build_defcs,(function (state,_,___$1){
return daiquiri.core.create_element("div",{'className':"app"},[cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([state], 0)),rum_workshop.core.comment_list(),rum_workshop.core.button()]);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"will-mount","will-mount",-434633071),(function (state){
var h = setTimeout((function (){
return console.log("x");
}),(10000));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword("rum-workshop.core","handle","rum-workshop.core/handle",624202387),h);
}),new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (state){
var h = new cljs.core.Keyword("rum-workshop.core","handle","rum-workshop.core/handle",624202387).cljs$core$IFn$_invoke$arity$1(state);
return clearTimeout(h);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function (state){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([state], 0));
}),new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (state){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([state], 0));
}),new cljs.core.Keyword(null,"should-update","should-update",-1292781795),(function (state){
return null;
})], null)], null),"rum-workshop.core/unmount-stateful-component");
rum_workshop.core.websocket_connected_component = rum.core.lazy_build(rum.core.build_defcs,(function (){
return daiquiri.core.create_element("div",null,[""]);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (state){
return null;
})], null)], null),"rum-workshop.core/websocket-connected-component");
rum_workshop.core.start = (function rum_workshop$core$start(){
return rum.core.mount(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum_workshop.core.hello("Hello"),rum_workshop.core.stateful_component((10)),rum_workshop.core.numbered_list((10)),rum_workshop.core.unmount_stateful_component()], null),document.getElementById("app"));
});
rum_workshop.core.init = (function rum_workshop$core$init(){
return rum_workshop.core.start();
});
goog.exportSymbol('rum_workshop.core.init', rum_workshop.core.init);
rum_workshop.core.stop = (function rum_workshop$core$stop(){
return console.log("stop");
});

//# sourceMappingURL=rum_workshop.core.js.map
