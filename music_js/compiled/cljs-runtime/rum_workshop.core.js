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
var map__34899_34916 = taoensso.sente.make_channel_socket_client_BANG_.cljs$core$IFn$_invoke$arity$variadic("/ws",rum_workshop.core._QMARK_csrf_token,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"auto","auto",-566279492)], null)], 0));
var map__34899_34917__$1 = (((((!((map__34899_34916 == null))))?(((((map__34899_34916.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34899_34916.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34899_34916):map__34899_34916);
var chsk_34918 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34899_34917__$1,new cljs.core.Keyword(null,"chsk","chsk",-863703081));
var ch_recv_34919 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34899_34917__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
var send_fn_34920 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34899_34917__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var state_34921 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34899_34917__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
rum_workshop.core.chsk = chsk_34918;

rum_workshop.core.ch_chsk = ch_recv_34919;

rum_workshop.core.chsk_send_BANG_ = send_fn_34920;

rum_workshop.core.chsk_state = state_34921;
cljs.core.enable_console_print_BANG_();
if((typeof rum_workshop !== 'undefined') && (typeof rum_workshop.core !== 'undefined') && (typeof rum_workshop.core.app_state !== 'undefined')){
} else {
rum_workshop.core.app_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"Hello world!"], null));
}
rum_workshop.core.hello = rum.core.build_defc((function (text){
var attrs34901 = ["<em>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(text),"</em>"].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"pre",((cljs.core.map_QMARK_(attrs34901))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["app"], null)], null),attrs34901], 0))):({"className": "app"})),((cljs.core.map_QMARK_(attrs34901))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs34901)], null)));
}),null,"hello");
rum_workshop.core.numbered_list = rum.core.build_defc((function (n){
return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function rum_workshop$core$iter__34903(s__34904){
return (new cljs.core.LazySeq(null,(function (){
var s__34904__$1 = s__34904;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__34904__$1);
if(temp__5735__auto__){
var s__34904__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__34904__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__34904__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__34906 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__34905 = (0);
while(true){
if((i__34905 < size__4528__auto__)){
var x = cljs.core._nth(c__4527__auto__,i__34905);
cljs.core.chunk_append(b__34906,(function (){var attrs34902 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(x);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs34902))?sablono.interpreter.attributes(attrs34902):null),((cljs.core.map_QMARK_(attrs34902))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs34902)], null)));
})());

var G__34922 = (i__34905 + (1));
i__34905 = G__34922;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__34906),rum_workshop$core$iter__34903(cljs.core.chunk_rest(s__34904__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__34906),null);
}
} else {
var x = cljs.core.first(s__34904__$2);
return cljs.core.cons((function (){var attrs34902 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(x);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs34902))?sablono.interpreter.attributes(attrs34902):null),((cljs.core.map_QMARK_(attrs34902))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs34902)], null)));
})(),rum_workshop$core$iter__34903(cljs.core.rest(s__34904__$2)));
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
}),null,"numbered-list");
rum_workshop.core.comments = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
rum_workshop.core.add_comment = (function rum_workshop$core$add_comment(comment){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(rum_workshop.core.comments,cljs.core.conj,comment);
});
rum_workshop.core.comment_list = rum.core.build_defc((function (){
return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function rum_workshop$core$iter__34908(s__34909){
return (new cljs.core.LazySeq(null,(function (){
var s__34909__$1 = s__34909;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__34909__$1);
if(temp__5735__auto__){
var s__34909__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__34909__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__34909__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__34911 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__34910 = (0);
while(true){
if((i__34910 < size__4528__auto__)){
var comment = cljs.core._nth(c__4527__auto__,i__34910);
cljs.core.chunk_append(b__34911,(function (){var attrs34907 = comment;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"li",((cljs.core.map_QMARK_(attrs34907))?sablono.interpreter.attributes(attrs34907):null),((cljs.core.map_QMARK_(attrs34907))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs34907)], null)));
})());

var G__34923 = (i__34910 + (1));
i__34910 = G__34923;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__34911),rum_workshop$core$iter__34908(cljs.core.chunk_rest(s__34909__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__34911),null);
}
} else {
var comment = cljs.core.first(s__34909__$2);
return cljs.core.cons((function (){var attrs34907 = comment;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"li",((cljs.core.map_QMARK_(attrs34907))?sablono.interpreter.attributes(attrs34907):null),((cljs.core.map_QMARK_(attrs34907))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs34907)], null)));
})(),rum_workshop$core$iter__34908(cljs.core.rest(s__34909__$2)));
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
}),null,"comment-list");
rum_workshop.core.button = rum.core.build_defc((function (){
return React.createElement("button",({"onClick": (function (e){
rum_workshop.core.add_comment("hello");

return console.log(rum_workshop.core.comments);
})}),"click me");
}),null,"button");
rum_workshop.core.stateful_component = rum.core.build_defcs((function (state,_,___$1){
var attrs34912 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([state], 0));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs34912))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["app"], null)], null),attrs34912], 0))):({"className": "app"})),((cljs.core.map_QMARK_(attrs34912))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret((rum_workshop.core.comment_list.cljs$core$IFn$_invoke$arity$0 ? rum_workshop.core.comment_list.cljs$core$IFn$_invoke$arity$0() : rum_workshop.core.comment_list.call(null))),sablono.interpreter.interpret((rum_workshop.core.button.cljs$core$IFn$_invoke$arity$0 ? rum_workshop.core.button.cljs$core$IFn$_invoke$arity$0() : rum_workshop.core.button.call(null)))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs34912),sablono.interpreter.interpret((rum_workshop.core.comment_list.cljs$core$IFn$_invoke$arity$0 ? rum_workshop.core.comment_list.cljs$core$IFn$_invoke$arity$0() : rum_workshop.core.comment_list.call(null))),sablono.interpreter.interpret((rum_workshop.core.button.cljs$core$IFn$_invoke$arity$0 ? rum_workshop.core.button.cljs$core$IFn$_invoke$arity$0() : rum_workshop.core.button.call(null)))], null)));
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
})], null)], null),"stateful-component");
rum_workshop.core.unmount_stateful_component = rum.core.build_defcs((function (state,_,___$1){
var attrs34913 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([state], 0));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs34913))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["app"], null)], null),attrs34913], 0))):({"className": "app"})),((cljs.core.map_QMARK_(attrs34913))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret((rum_workshop.core.comment_list.cljs$core$IFn$_invoke$arity$0 ? rum_workshop.core.comment_list.cljs$core$IFn$_invoke$arity$0() : rum_workshop.core.comment_list.call(null))),sablono.interpreter.interpret((rum_workshop.core.button.cljs$core$IFn$_invoke$arity$0 ? rum_workshop.core.button.cljs$core$IFn$_invoke$arity$0() : rum_workshop.core.button.call(null)))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs34913),sablono.interpreter.interpret((rum_workshop.core.comment_list.cljs$core$IFn$_invoke$arity$0 ? rum_workshop.core.comment_list.cljs$core$IFn$_invoke$arity$0() : rum_workshop.core.comment_list.call(null))),sablono.interpreter.interpret((rum_workshop.core.button.cljs$core$IFn$_invoke$arity$0 ? rum_workshop.core.button.cljs$core$IFn$_invoke$arity$0() : rum_workshop.core.button.call(null)))], null)));
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
})], null)], null),"unmount-stateful-component");
rum_workshop.core.websocket_connected_component = rum.core.build_defcs((function (){
return React.createElement("div",null,"");
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (state){
return null;
})], null)], null),"websocket-connected-component");
rum_workshop.core.start = (function rum_workshop$core$start(){
return rum.core.mount(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(rum_workshop.core.hello.cljs$core$IFn$_invoke$arity$1 ? rum_workshop.core.hello.cljs$core$IFn$_invoke$arity$1("Hello") : rum_workshop.core.hello.call(null,"Hello")),(rum_workshop.core.stateful_component.cljs$core$IFn$_invoke$arity$1 ? rum_workshop.core.stateful_component.cljs$core$IFn$_invoke$arity$1((10)) : rum_workshop.core.stateful_component.call(null,(10))),(rum_workshop.core.numbered_list.cljs$core$IFn$_invoke$arity$1 ? rum_workshop.core.numbered_list.cljs$core$IFn$_invoke$arity$1((10)) : rum_workshop.core.numbered_list.call(null,(10))),(rum_workshop.core.unmount_stateful_component.cljs$core$IFn$_invoke$arity$0 ? rum_workshop.core.unmount_stateful_component.cljs$core$IFn$_invoke$arity$0() : rum_workshop.core.unmount_stateful_component.call(null))], null),document.getElementById("app"));
});
rum_workshop.core.init = (function rum_workshop$core$init(){
return rum_workshop.core.start();
});
goog.exportSymbol('rum_workshop.core.init', rum_workshop.core.init);
rum_workshop.core.stop = (function rum_workshop$core$stop(){
return console.log("stop");
});

//# sourceMappingURL=rum_workshop.core.js.map
