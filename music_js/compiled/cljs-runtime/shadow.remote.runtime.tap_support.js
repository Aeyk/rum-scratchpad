goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__36402,p__36403){
var map__36404 = p__36402;
var map__36404__$1 = (((((!((map__36404 == null))))?(((((map__36404.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36404.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36404):map__36404);
var svc = map__36404__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36404__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36404__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36404__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__36405 = p__36403;
var map__36405__$1 = (((((!((map__36405 == null))))?(((((map__36405.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36405.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36405):map__36405);
var msg = map__36405__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36405__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36405__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36405__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__36405__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__36413,p__36414){
var map__36415 = p__36413;
var map__36415__$1 = (((((!((map__36415 == null))))?(((((map__36415.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36415.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36415):map__36415);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36415__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__36416 = p__36414;
var map__36416__$1 = (((((!((map__36416 == null))))?(((((map__36416.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36416.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36416):map__36416);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36416__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__36423,p__36424){
var map__36425 = p__36423;
var map__36425__$1 = (((((!((map__36425 == null))))?(((((map__36425.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36425.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36425):map__36425);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36425__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36425__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__36426 = p__36424;
var map__36426__$1 = (((((!((map__36426 == null))))?(((((map__36426.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36426.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36426):map__36426);
var msg = map__36426__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__36426__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__36434,tid){
var map__36435 = p__36434;
var map__36435__$1 = (((((!((map__36435 == null))))?(((((map__36435.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36435.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36435):map__36435);
var svc = map__36435__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36435__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__36445 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__36446 = null;
var count__36447 = (0);
var i__36448 = (0);
while(true){
if((i__36448 < count__36447)){
var vec__36460 = chunk__36446.cljs$core$IIndexed$_nth$arity$2(null,i__36448);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36460,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36460,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__36480 = seq__36445;
var G__36481 = chunk__36446;
var G__36482 = count__36447;
var G__36483 = (i__36448 + (1));
seq__36445 = G__36480;
chunk__36446 = G__36481;
count__36447 = G__36482;
i__36448 = G__36483;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__36445);
if(temp__5735__auto__){
var seq__36445__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36445__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__36445__$1);
var G__36484 = cljs.core.chunk_rest(seq__36445__$1);
var G__36485 = c__4556__auto__;
var G__36486 = cljs.core.count(c__4556__auto__);
var G__36487 = (0);
seq__36445 = G__36484;
chunk__36446 = G__36485;
count__36447 = G__36486;
i__36448 = G__36487;
continue;
} else {
var vec__36465 = cljs.core.first(seq__36445__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36465,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36465,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__36488 = cljs.core.next(seq__36445__$1);
var G__36489 = null;
var G__36490 = (0);
var G__36491 = (0);
seq__36445 = G__36488;
chunk__36446 = G__36489;
count__36447 = G__36490;
i__36448 = G__36491;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__36439_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__36439_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__36440_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__36440_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__36441_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__36441_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__36442_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__36442_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__36470){
var map__36471 = p__36470;
var map__36471__$1 = (((((!((map__36471 == null))))?(((((map__36471.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36471.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36471):map__36471);
var svc = map__36471__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36471__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36471__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
