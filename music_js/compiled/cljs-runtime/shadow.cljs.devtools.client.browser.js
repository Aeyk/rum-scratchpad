goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___36788 = arguments.length;
var i__4737__auto___36789 = (0);
while(true){
if((i__4737__auto___36789 < len__4736__auto___36788)){
args__4742__auto__.push((arguments[i__4737__auto___36789]));

var G__36790 = (i__4737__auto___36789 + (1));
i__4737__auto___36789 = G__36790;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq36610){
var G__36611 = cljs.core.first(seq36610);
var seq36610__$1 = cljs.core.next(seq36610);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36611,seq36610__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__36613 = cljs.core.seq(sources);
var chunk__36614 = null;
var count__36615 = (0);
var i__36616 = (0);
while(true){
if((i__36616 < count__36615)){
var map__36626 = chunk__36614.cljs$core$IIndexed$_nth$arity$2(null,i__36616);
var map__36626__$1 = (((((!((map__36626 == null))))?(((((map__36626.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36626.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36626):map__36626);
var src = map__36626__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36626__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36626__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36626__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36626__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e36628){var e_36800 = e36628;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_36800);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_36800.message)].join('')));
}

var G__36801 = seq__36613;
var G__36802 = chunk__36614;
var G__36803 = count__36615;
var G__36804 = (i__36616 + (1));
seq__36613 = G__36801;
chunk__36614 = G__36802;
count__36615 = G__36803;
i__36616 = G__36804;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__36613);
if(temp__5735__auto__){
var seq__36613__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36613__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__36613__$1);
var G__36805 = cljs.core.chunk_rest(seq__36613__$1);
var G__36806 = c__4556__auto__;
var G__36807 = cljs.core.count(c__4556__auto__);
var G__36808 = (0);
seq__36613 = G__36805;
chunk__36614 = G__36806;
count__36615 = G__36807;
i__36616 = G__36808;
continue;
} else {
var map__36629 = cljs.core.first(seq__36613__$1);
var map__36629__$1 = (((((!((map__36629 == null))))?(((((map__36629.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36629.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36629):map__36629);
var src = map__36629__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36629__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36629__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36629__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36629__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e36634){var e_36809 = e36634;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_36809);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_36809.message)].join('')));
}

var G__36810 = cljs.core.next(seq__36613__$1);
var G__36811 = null;
var G__36812 = (0);
var G__36813 = (0);
seq__36613 = G__36810;
chunk__36614 = G__36811;
count__36615 = G__36812;
i__36616 = G__36813;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__36636 = cljs.core.seq(js_requires);
var chunk__36637 = null;
var count__36638 = (0);
var i__36639 = (0);
while(true){
if((i__36639 < count__36638)){
var js_ns = chunk__36637.cljs$core$IIndexed$_nth$arity$2(null,i__36639);
var require_str_36814 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_36814);


var G__36815 = seq__36636;
var G__36816 = chunk__36637;
var G__36817 = count__36638;
var G__36818 = (i__36639 + (1));
seq__36636 = G__36815;
chunk__36637 = G__36816;
count__36638 = G__36817;
i__36639 = G__36818;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__36636);
if(temp__5735__auto__){
var seq__36636__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36636__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__36636__$1);
var G__36819 = cljs.core.chunk_rest(seq__36636__$1);
var G__36820 = c__4556__auto__;
var G__36821 = cljs.core.count(c__4556__auto__);
var G__36822 = (0);
seq__36636 = G__36819;
chunk__36637 = G__36820;
count__36638 = G__36821;
i__36639 = G__36822;
continue;
} else {
var js_ns = cljs.core.first(seq__36636__$1);
var require_str_36823 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_36823);


var G__36824 = cljs.core.next(seq__36636__$1);
var G__36825 = null;
var G__36826 = (0);
var G__36827 = (0);
seq__36636 = G__36824;
chunk__36637 = G__36825;
count__36638 = G__36826;
i__36639 = G__36827;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__36641){
var map__36642 = p__36641;
var map__36642__$1 = (((((!((map__36642 == null))))?(((((map__36642.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36642.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36642):map__36642);
var msg = map__36642__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36642__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36642__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36644(s__36645){
return (new cljs.core.LazySeq(null,(function (){
var s__36645__$1 = s__36645;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__36645__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__36650 = cljs.core.first(xs__6292__auto__);
var map__36650__$1 = (((((!((map__36650 == null))))?(((((map__36650.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36650.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36650):map__36650);
var src = map__36650__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36650__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36650__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4525__auto__ = ((function (s__36645__$1,map__36650,map__36650__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__36642,map__36642__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36644_$_iter__36646(s__36647){
return (new cljs.core.LazySeq(null,((function (s__36645__$1,map__36650,map__36650__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__36642,map__36642__$1,msg,info,reload_info){
return (function (){
var s__36647__$1 = s__36647;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__36647__$1);
if(temp__5735__auto____$1){
var s__36647__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__36647__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__36647__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__36649 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__36648 = (0);
while(true){
if((i__36648 < size__4528__auto__)){
var warning = cljs.core._nth(c__4527__auto__,i__36648);
cljs.core.chunk_append(b__36649,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__36831 = (i__36648 + (1));
i__36648 = G__36831;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36649),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36644_$_iter__36646(cljs.core.chunk_rest(s__36647__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36649),null);
}
} else {
var warning = cljs.core.first(s__36647__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36644_$_iter__36646(cljs.core.rest(s__36647__$2)));
}
} else {
return null;
}
break;
}
});})(s__36645__$1,map__36650,map__36650__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__36642,map__36642__$1,msg,info,reload_info))
,null,null));
});})(s__36645__$1,map__36650,map__36650__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__36642,map__36642__$1,msg,info,reload_info))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(warnings));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36644(cljs.core.rest(s__36645__$1)));
} else {
var G__36832 = cljs.core.rest(s__36645__$1);
s__36645__$1 = G__36832;
continue;
}
} else {
var G__36833 = cljs.core.rest(s__36645__$1);
s__36645__$1 = G__36833;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__36653_36834 = cljs.core.seq(warnings);
var chunk__36654_36835 = null;
var count__36655_36836 = (0);
var i__36656_36837 = (0);
while(true){
if((i__36656_36837 < count__36655_36836)){
var map__36661_36838 = chunk__36654_36835.cljs$core$IIndexed$_nth$arity$2(null,i__36656_36837);
var map__36661_36839__$1 = (((((!((map__36661_36838 == null))))?(((((map__36661_36838.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36661_36838.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36661_36838):map__36661_36838);
var w_36840 = map__36661_36839__$1;
var msg_36841__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36661_36839__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_36842 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36661_36839__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_36843 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36661_36839__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_36844 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36661_36839__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_36844)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_36842),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_36843),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_36841__$1)].join(''));


var G__36847 = seq__36653_36834;
var G__36848 = chunk__36654_36835;
var G__36849 = count__36655_36836;
var G__36850 = (i__36656_36837 + (1));
seq__36653_36834 = G__36847;
chunk__36654_36835 = G__36848;
count__36655_36836 = G__36849;
i__36656_36837 = G__36850;
continue;
} else {
var temp__5735__auto___36851 = cljs.core.seq(seq__36653_36834);
if(temp__5735__auto___36851){
var seq__36653_36852__$1 = temp__5735__auto___36851;
if(cljs.core.chunked_seq_QMARK_(seq__36653_36852__$1)){
var c__4556__auto___36853 = cljs.core.chunk_first(seq__36653_36852__$1);
var G__36854 = cljs.core.chunk_rest(seq__36653_36852__$1);
var G__36855 = c__4556__auto___36853;
var G__36856 = cljs.core.count(c__4556__auto___36853);
var G__36857 = (0);
seq__36653_36834 = G__36854;
chunk__36654_36835 = G__36855;
count__36655_36836 = G__36856;
i__36656_36837 = G__36857;
continue;
} else {
var map__36663_36858 = cljs.core.first(seq__36653_36852__$1);
var map__36663_36859__$1 = (((((!((map__36663_36858 == null))))?(((((map__36663_36858.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36663_36858.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36663_36858):map__36663_36858);
var w_36860 = map__36663_36859__$1;
var msg_36861__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36663_36859__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_36862 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36663_36859__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_36863 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36663_36859__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_36864 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36663_36859__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_36864)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_36862),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_36863),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_36861__$1)].join(''));


var G__36867 = cljs.core.next(seq__36653_36852__$1);
var G__36868 = null;
var G__36869 = (0);
var G__36870 = (0);
seq__36653_36834 = G__36867;
chunk__36654_36835 = G__36868;
count__36655_36836 = G__36869;
i__36656_36837 = G__36870;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__36640_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__36640_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__36666){
var map__36667 = p__36666;
var map__36667__$1 = (((((!((map__36667 == null))))?(((((map__36667.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36667.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36667):map__36667);
var msg = map__36667__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36667__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__36669 = cljs.core.seq(updates);
var chunk__36671 = null;
var count__36672 = (0);
var i__36673 = (0);
while(true){
if((i__36673 < count__36672)){
var path = chunk__36671.cljs$core$IIndexed$_nth$arity$2(null,i__36673);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__36722_36888 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__36726_36889 = null;
var count__36727_36890 = (0);
var i__36728_36891 = (0);
while(true){
if((i__36728_36891 < count__36727_36890)){
var node_36892 = chunk__36726_36889.cljs$core$IIndexed$_nth$arity$2(null,i__36728_36891);
if(cljs.core.not(node_36892.shadow$old)){
var path_match_36893 = shadow.cljs.devtools.client.browser.match_paths(node_36892.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36893)){
var new_link_36894 = (function (){var G__36737 = node_36892.cloneNode(true);
G__36737.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36893),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36737;
})();
(node_36892.shadow$old = true);

(new_link_36894.onload = ((function (seq__36722_36888,chunk__36726_36889,count__36727_36890,i__36728_36891,seq__36669,chunk__36671,count__36672,i__36673,new_link_36894,path_match_36893,node_36892,path,map__36667,map__36667__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_36892);
});})(seq__36722_36888,chunk__36726_36889,count__36727_36890,i__36728_36891,seq__36669,chunk__36671,count__36672,i__36673,new_link_36894,path_match_36893,node_36892,path,map__36667,map__36667__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36893], 0));

goog.dom.insertSiblingAfter(new_link_36894,node_36892);


var G__36899 = seq__36722_36888;
var G__36900 = chunk__36726_36889;
var G__36901 = count__36727_36890;
var G__36902 = (i__36728_36891 + (1));
seq__36722_36888 = G__36899;
chunk__36726_36889 = G__36900;
count__36727_36890 = G__36901;
i__36728_36891 = G__36902;
continue;
} else {
var G__36903 = seq__36722_36888;
var G__36904 = chunk__36726_36889;
var G__36905 = count__36727_36890;
var G__36906 = (i__36728_36891 + (1));
seq__36722_36888 = G__36903;
chunk__36726_36889 = G__36904;
count__36727_36890 = G__36905;
i__36728_36891 = G__36906;
continue;
}
} else {
var G__36907 = seq__36722_36888;
var G__36908 = chunk__36726_36889;
var G__36909 = count__36727_36890;
var G__36910 = (i__36728_36891 + (1));
seq__36722_36888 = G__36907;
chunk__36726_36889 = G__36908;
count__36727_36890 = G__36909;
i__36728_36891 = G__36910;
continue;
}
} else {
var temp__5735__auto___36911 = cljs.core.seq(seq__36722_36888);
if(temp__5735__auto___36911){
var seq__36722_36912__$1 = temp__5735__auto___36911;
if(cljs.core.chunked_seq_QMARK_(seq__36722_36912__$1)){
var c__4556__auto___36913 = cljs.core.chunk_first(seq__36722_36912__$1);
var G__36914 = cljs.core.chunk_rest(seq__36722_36912__$1);
var G__36915 = c__4556__auto___36913;
var G__36916 = cljs.core.count(c__4556__auto___36913);
var G__36917 = (0);
seq__36722_36888 = G__36914;
chunk__36726_36889 = G__36915;
count__36727_36890 = G__36916;
i__36728_36891 = G__36917;
continue;
} else {
var node_36918 = cljs.core.first(seq__36722_36912__$1);
if(cljs.core.not(node_36918.shadow$old)){
var path_match_36919 = shadow.cljs.devtools.client.browser.match_paths(node_36918.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36919)){
var new_link_36920 = (function (){var G__36738 = node_36918.cloneNode(true);
G__36738.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36919),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36738;
})();
(node_36918.shadow$old = true);

(new_link_36920.onload = ((function (seq__36722_36888,chunk__36726_36889,count__36727_36890,i__36728_36891,seq__36669,chunk__36671,count__36672,i__36673,new_link_36920,path_match_36919,node_36918,seq__36722_36912__$1,temp__5735__auto___36911,path,map__36667,map__36667__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_36918);
});})(seq__36722_36888,chunk__36726_36889,count__36727_36890,i__36728_36891,seq__36669,chunk__36671,count__36672,i__36673,new_link_36920,path_match_36919,node_36918,seq__36722_36912__$1,temp__5735__auto___36911,path,map__36667,map__36667__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36919], 0));

goog.dom.insertSiblingAfter(new_link_36920,node_36918);


var G__36921 = cljs.core.next(seq__36722_36912__$1);
var G__36922 = null;
var G__36923 = (0);
var G__36924 = (0);
seq__36722_36888 = G__36921;
chunk__36726_36889 = G__36922;
count__36727_36890 = G__36923;
i__36728_36891 = G__36924;
continue;
} else {
var G__36925 = cljs.core.next(seq__36722_36912__$1);
var G__36926 = null;
var G__36927 = (0);
var G__36928 = (0);
seq__36722_36888 = G__36925;
chunk__36726_36889 = G__36926;
count__36727_36890 = G__36927;
i__36728_36891 = G__36928;
continue;
}
} else {
var G__36929 = cljs.core.next(seq__36722_36912__$1);
var G__36930 = null;
var G__36931 = (0);
var G__36932 = (0);
seq__36722_36888 = G__36929;
chunk__36726_36889 = G__36930;
count__36727_36890 = G__36931;
i__36728_36891 = G__36932;
continue;
}
}
} else {
}
}
break;
}


var G__36933 = seq__36669;
var G__36934 = chunk__36671;
var G__36935 = count__36672;
var G__36936 = (i__36673 + (1));
seq__36669 = G__36933;
chunk__36671 = G__36934;
count__36672 = G__36935;
i__36673 = G__36936;
continue;
} else {
var G__36937 = seq__36669;
var G__36938 = chunk__36671;
var G__36939 = count__36672;
var G__36940 = (i__36673 + (1));
seq__36669 = G__36937;
chunk__36671 = G__36938;
count__36672 = G__36939;
i__36673 = G__36940;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__36669);
if(temp__5735__auto__){
var seq__36669__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36669__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__36669__$1);
var G__36941 = cljs.core.chunk_rest(seq__36669__$1);
var G__36942 = c__4556__auto__;
var G__36943 = cljs.core.count(c__4556__auto__);
var G__36944 = (0);
seq__36669 = G__36941;
chunk__36671 = G__36942;
count__36672 = G__36943;
i__36673 = G__36944;
continue;
} else {
var path = cljs.core.first(seq__36669__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__36742_36945 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__36746_36946 = null;
var count__36747_36947 = (0);
var i__36748_36948 = (0);
while(true){
if((i__36748_36948 < count__36747_36947)){
var node_36950 = chunk__36746_36946.cljs$core$IIndexed$_nth$arity$2(null,i__36748_36948);
if(cljs.core.not(node_36950.shadow$old)){
var path_match_36951 = shadow.cljs.devtools.client.browser.match_paths(node_36950.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36951)){
var new_link_36952 = (function (){var G__36754 = node_36950.cloneNode(true);
G__36754.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36951),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36754;
})();
(node_36950.shadow$old = true);

(new_link_36952.onload = ((function (seq__36742_36945,chunk__36746_36946,count__36747_36947,i__36748_36948,seq__36669,chunk__36671,count__36672,i__36673,new_link_36952,path_match_36951,node_36950,path,seq__36669__$1,temp__5735__auto__,map__36667,map__36667__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_36950);
});})(seq__36742_36945,chunk__36746_36946,count__36747_36947,i__36748_36948,seq__36669,chunk__36671,count__36672,i__36673,new_link_36952,path_match_36951,node_36950,path,seq__36669__$1,temp__5735__auto__,map__36667,map__36667__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36951], 0));

goog.dom.insertSiblingAfter(new_link_36952,node_36950);


var G__36954 = seq__36742_36945;
var G__36955 = chunk__36746_36946;
var G__36956 = count__36747_36947;
var G__36957 = (i__36748_36948 + (1));
seq__36742_36945 = G__36954;
chunk__36746_36946 = G__36955;
count__36747_36947 = G__36956;
i__36748_36948 = G__36957;
continue;
} else {
var G__36958 = seq__36742_36945;
var G__36959 = chunk__36746_36946;
var G__36960 = count__36747_36947;
var G__36961 = (i__36748_36948 + (1));
seq__36742_36945 = G__36958;
chunk__36746_36946 = G__36959;
count__36747_36947 = G__36960;
i__36748_36948 = G__36961;
continue;
}
} else {
var G__36962 = seq__36742_36945;
var G__36963 = chunk__36746_36946;
var G__36964 = count__36747_36947;
var G__36965 = (i__36748_36948 + (1));
seq__36742_36945 = G__36962;
chunk__36746_36946 = G__36963;
count__36747_36947 = G__36964;
i__36748_36948 = G__36965;
continue;
}
} else {
var temp__5735__auto___36966__$1 = cljs.core.seq(seq__36742_36945);
if(temp__5735__auto___36966__$1){
var seq__36742_36971__$1 = temp__5735__auto___36966__$1;
if(cljs.core.chunked_seq_QMARK_(seq__36742_36971__$1)){
var c__4556__auto___36972 = cljs.core.chunk_first(seq__36742_36971__$1);
var G__36974 = cljs.core.chunk_rest(seq__36742_36971__$1);
var G__36975 = c__4556__auto___36972;
var G__36976 = cljs.core.count(c__4556__auto___36972);
var G__36977 = (0);
seq__36742_36945 = G__36974;
chunk__36746_36946 = G__36975;
count__36747_36947 = G__36976;
i__36748_36948 = G__36977;
continue;
} else {
var node_36982 = cljs.core.first(seq__36742_36971__$1);
if(cljs.core.not(node_36982.shadow$old)){
var path_match_36984 = shadow.cljs.devtools.client.browser.match_paths(node_36982.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36984)){
var new_link_36987 = (function (){var G__36755 = node_36982.cloneNode(true);
G__36755.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36984),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36755;
})();
(node_36982.shadow$old = true);

(new_link_36987.onload = ((function (seq__36742_36945,chunk__36746_36946,count__36747_36947,i__36748_36948,seq__36669,chunk__36671,count__36672,i__36673,new_link_36987,path_match_36984,node_36982,seq__36742_36971__$1,temp__5735__auto___36966__$1,path,seq__36669__$1,temp__5735__auto__,map__36667,map__36667__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_36982);
});})(seq__36742_36945,chunk__36746_36946,count__36747_36947,i__36748_36948,seq__36669,chunk__36671,count__36672,i__36673,new_link_36987,path_match_36984,node_36982,seq__36742_36971__$1,temp__5735__auto___36966__$1,path,seq__36669__$1,temp__5735__auto__,map__36667,map__36667__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36984], 0));

goog.dom.insertSiblingAfter(new_link_36987,node_36982);


var G__36997 = cljs.core.next(seq__36742_36971__$1);
var G__36998 = null;
var G__36999 = (0);
var G__37000 = (0);
seq__36742_36945 = G__36997;
chunk__36746_36946 = G__36998;
count__36747_36947 = G__36999;
i__36748_36948 = G__37000;
continue;
} else {
var G__37001 = cljs.core.next(seq__36742_36971__$1);
var G__37002 = null;
var G__37003 = (0);
var G__37004 = (0);
seq__36742_36945 = G__37001;
chunk__36746_36946 = G__37002;
count__36747_36947 = G__37003;
i__36748_36948 = G__37004;
continue;
}
} else {
var G__37005 = cljs.core.next(seq__36742_36971__$1);
var G__37006 = null;
var G__37007 = (0);
var G__37008 = (0);
seq__36742_36945 = G__37005;
chunk__36746_36946 = G__37006;
count__36747_36947 = G__37007;
i__36748_36948 = G__37008;
continue;
}
}
} else {
}
}
break;
}


var G__37009 = cljs.core.next(seq__36669__$1);
var G__37010 = null;
var G__37011 = (0);
var G__37012 = (0);
seq__36669 = G__37009;
chunk__36671 = G__37010;
count__36672 = G__37011;
i__36673 = G__37012;
continue;
} else {
var G__37013 = cljs.core.next(seq__36669__$1);
var G__37014 = null;
var G__37015 = (0);
var G__37016 = (0);
seq__36669 = G__37013;
chunk__36671 = G__37014;
count__36672 = G__37015;
i__36673 = G__37016;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__36756){
var map__36757 = p__36756;
var map__36757__$1 = (((((!((map__36757 == null))))?(((((map__36757.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36757.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36757):map__36757);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36757__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.client_info = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null);
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__36759){
var map__36760 = p__36759;
var map__36760__$1 = (((((!((map__36760 == null))))?(((((map__36760.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36760.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36760):map__36760);
var _ = map__36760__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36760__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__36762,done,error){
var map__36763 = p__36762;
var map__36763__$1 = (((((!((map__36763 == null))))?(((((map__36763.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36763.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36763):map__36763);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36763__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__36765,done,error){
var map__36766 = p__36765;
var map__36766__$1 = (((((!((map__36766 == null))))?(((((map__36766.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36766.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36766):map__36766);
var msg = map__36766__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36766__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36766__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36766__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__36768){
var map__36769 = p__36768;
var map__36769__$1 = (((((!((map__36769 == null))))?(((((map__36769.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36769.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36769):map__36769);
var src = map__36769__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36769__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4115__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4115__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__36771 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__36771) : done.call(null,G__36771));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__36772){
var map__36773 = p__36772;
var map__36773__$1 = (((((!((map__36773 == null))))?(((((map__36773.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36773.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36773):map__36773);
var msg__$1 = map__36773__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36773__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e36775){var ex = e36775;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__36776){
var map__36777 = p__36776;
var map__36777__$1 = (((((!((map__36777 == null))))?(((((map__36777.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36777.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36777):map__36777);
var env = map__36777__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36777__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__36779){
var map__36780 = p__36779;
var map__36780__$1 = (((((!((map__36780 == null))))?(((((map__36780.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36780.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36780):map__36780);
var msg = map__36780__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36780__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__36782){
var map__36783 = p__36782;
var map__36783__$1 = (((((!((map__36783 == null))))?(((((map__36783.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36783.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36783):map__36783);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36783__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36783__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__36785){
var map__36786 = p__36785;
var map__36786__$1 = (((((!((map__36786 == null))))?(((((map__36786.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36786.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36786):map__36786);
var svc = map__36786__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36786__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
