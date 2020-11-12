goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__39058){
var map__39059 = p__39058;
var map__39059__$1 = (((((!((map__39059 == null))))?(((((map__39059.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39059.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39059):map__39059);
var m = map__39059__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39059__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39059__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__39064_39280 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__39065_39281 = null;
var count__39066_39282 = (0);
var i__39067_39283 = (0);
while(true){
if((i__39067_39283 < count__39066_39282)){
var f_39284 = chunk__39065_39281.cljs$core$IIndexed$_nth$arity$2(null,i__39067_39283);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_39284], 0));


var G__39285 = seq__39064_39280;
var G__39286 = chunk__39065_39281;
var G__39287 = count__39066_39282;
var G__39288 = (i__39067_39283 + (1));
seq__39064_39280 = G__39285;
chunk__39065_39281 = G__39286;
count__39066_39282 = G__39287;
i__39067_39283 = G__39288;
continue;
} else {
var temp__5735__auto___39289 = cljs.core.seq(seq__39064_39280);
if(temp__5735__auto___39289){
var seq__39064_39290__$1 = temp__5735__auto___39289;
if(cljs.core.chunked_seq_QMARK_(seq__39064_39290__$1)){
var c__4556__auto___39292 = cljs.core.chunk_first(seq__39064_39290__$1);
var G__39293 = cljs.core.chunk_rest(seq__39064_39290__$1);
var G__39294 = c__4556__auto___39292;
var G__39295 = cljs.core.count(c__4556__auto___39292);
var G__39296 = (0);
seq__39064_39280 = G__39293;
chunk__39065_39281 = G__39294;
count__39066_39282 = G__39295;
i__39067_39283 = G__39296;
continue;
} else {
var f_39297 = cljs.core.first(seq__39064_39290__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_39297], 0));


var G__39298 = cljs.core.next(seq__39064_39290__$1);
var G__39299 = null;
var G__39300 = (0);
var G__39301 = (0);
seq__39064_39280 = G__39298;
chunk__39065_39281 = G__39299;
count__39066_39282 = G__39300;
i__39067_39283 = G__39301;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_39302 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_39302], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_39302)))?cljs.core.second(arglists_39302):arglists_39302)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__39069_39303 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__39070_39304 = null;
var count__39071_39305 = (0);
var i__39072_39306 = (0);
while(true){
if((i__39072_39306 < count__39071_39305)){
var vec__39086_39307 = chunk__39070_39304.cljs$core$IIndexed$_nth$arity$2(null,i__39072_39306);
var name_39308 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39086_39307,(0),null);
var map__39089_39309 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39086_39307,(1),null);
var map__39089_39310__$1 = (((((!((map__39089_39309 == null))))?(((((map__39089_39309.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39089_39309.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39089_39309):map__39089_39309);
var doc_39311 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39089_39310__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_39312 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39089_39310__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_39308], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_39312], 0));

if(cljs.core.truth_(doc_39311)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_39311], 0));
} else {
}


var G__39313 = seq__39069_39303;
var G__39314 = chunk__39070_39304;
var G__39315 = count__39071_39305;
var G__39316 = (i__39072_39306 + (1));
seq__39069_39303 = G__39313;
chunk__39070_39304 = G__39314;
count__39071_39305 = G__39315;
i__39072_39306 = G__39316;
continue;
} else {
var temp__5735__auto___39317 = cljs.core.seq(seq__39069_39303);
if(temp__5735__auto___39317){
var seq__39069_39318__$1 = temp__5735__auto___39317;
if(cljs.core.chunked_seq_QMARK_(seq__39069_39318__$1)){
var c__4556__auto___39319 = cljs.core.chunk_first(seq__39069_39318__$1);
var G__39320 = cljs.core.chunk_rest(seq__39069_39318__$1);
var G__39321 = c__4556__auto___39319;
var G__39322 = cljs.core.count(c__4556__auto___39319);
var G__39323 = (0);
seq__39069_39303 = G__39320;
chunk__39070_39304 = G__39321;
count__39071_39305 = G__39322;
i__39072_39306 = G__39323;
continue;
} else {
var vec__39093_39324 = cljs.core.first(seq__39069_39318__$1);
var name_39325 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39093_39324,(0),null);
var map__39096_39326 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39093_39324,(1),null);
var map__39096_39327__$1 = (((((!((map__39096_39326 == null))))?(((((map__39096_39326.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39096_39326.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39096_39326):map__39096_39326);
var doc_39328 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39096_39327__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_39329 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39096_39327__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_39325], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_39329], 0));

if(cljs.core.truth_(doc_39328)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_39328], 0));
} else {
}


var G__39331 = cljs.core.next(seq__39069_39318__$1);
var G__39332 = null;
var G__39333 = (0);
var G__39334 = (0);
seq__39069_39303 = G__39331;
chunk__39070_39304 = G__39332;
count__39071_39305 = G__39333;
i__39072_39306 = G__39334;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__39098 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__39099 = null;
var count__39100 = (0);
var i__39101 = (0);
while(true){
if((i__39101 < count__39100)){
var role = chunk__39099.cljs$core$IIndexed$_nth$arity$2(null,i__39101);
var temp__5735__auto___39335__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___39335__$1)){
var spec_39336 = temp__5735__auto___39335__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_39336)], 0));
} else {
}


var G__39337 = seq__39098;
var G__39338 = chunk__39099;
var G__39339 = count__39100;
var G__39340 = (i__39101 + (1));
seq__39098 = G__39337;
chunk__39099 = G__39338;
count__39100 = G__39339;
i__39101 = G__39340;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__39098);
if(temp__5735__auto____$1){
var seq__39098__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__39098__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__39098__$1);
var G__39341 = cljs.core.chunk_rest(seq__39098__$1);
var G__39342 = c__4556__auto__;
var G__39343 = cljs.core.count(c__4556__auto__);
var G__39344 = (0);
seq__39098 = G__39341;
chunk__39099 = G__39342;
count__39100 = G__39343;
i__39101 = G__39344;
continue;
} else {
var role = cljs.core.first(seq__39098__$1);
var temp__5735__auto___39345__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___39345__$2)){
var spec_39346 = temp__5735__auto___39345__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_39346)], 0));
} else {
}


var G__39347 = cljs.core.next(seq__39098__$1);
var G__39348 = null;
var G__39349 = (0);
var G__39350 = (0);
seq__39098 = G__39347;
chunk__39099 = G__39348;
count__39100 = G__39349;
i__39101 = G__39350;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__39351 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__39352 = cljs.core.ex_cause(t);
via = G__39351;
t = G__39352;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__39195 = datafied_throwable;
var map__39195__$1 = (((((!((map__39195 == null))))?(((((map__39195.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39195.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39195):map__39195);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39195__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39195__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__39195__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__39196 = cljs.core.last(via);
var map__39196__$1 = (((((!((map__39196 == null))))?(((((map__39196.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39196.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39196):map__39196);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39196__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39196__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39196__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__39197 = data;
var map__39197__$1 = (((((!((map__39197 == null))))?(((((map__39197.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39197.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39197):map__39197);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39197__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39197__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39197__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__39198 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__39198__$1 = (((((!((map__39198 == null))))?(((((map__39198.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39198.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39198):map__39198);
var top_data = map__39198__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39198__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__39209 = phase;
var G__39209__$1 = (((G__39209 instanceof cljs.core.Keyword))?G__39209.fqn:null);
switch (G__39209__$1) {
case "read-source":
var map__39210 = data;
var map__39210__$1 = (((((!((map__39210 == null))))?(((((map__39210.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39210.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39210):map__39210);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39210__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39210__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__39212 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__39212__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39212,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__39212);
var G__39212__$2 = (cljs.core.truth_((function (){var fexpr__39213 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__39213.cljs$core$IFn$_invoke$arity$1 ? fexpr__39213.cljs$core$IFn$_invoke$arity$1(source) : fexpr__39213.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__39212__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__39212__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39212__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__39212__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__39215 = top_data;
var G__39215__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39215,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__39215);
var G__39215__$2 = (cljs.core.truth_((function (){var fexpr__39216 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__39216.cljs$core$IFn$_invoke$arity$1 ? fexpr__39216.cljs$core$IFn$_invoke$arity$1(source) : fexpr__39216.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__39215__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__39215__$1);
var G__39215__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39215__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__39215__$2);
var G__39215__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39215__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__39215__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39215__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__39215__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__39218 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39218,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39218,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39218,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39218,(3),null);
var G__39221 = top_data;
var G__39221__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39221,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__39221);
var G__39221__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39221__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__39221__$1);
var G__39221__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39221__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__39221__$2);
var G__39221__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39221__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__39221__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39221__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__39221__$4;
}

break;
case "execution":
var vec__39223 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39223,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39223,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39223,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39223,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__39190_SHARP_){
var or__4126__auto__ = (p1__39190_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var fexpr__39227 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__39227.cljs$core$IFn$_invoke$arity$1 ? fexpr__39227.cljs$core$IFn$_invoke$arity$1(p1__39190_SHARP_) : fexpr__39227.call(null,p1__39190_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__39229 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__39229__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39229,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__39229);
var G__39229__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39229__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__39229__$1);
var G__39229__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39229__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__39229__$2);
var G__39229__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39229__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__39229__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39229__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__39229__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39209__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__39232){
var map__39233 = p__39232;
var map__39233__$1 = (((((!((map__39233 == null))))?(((((map__39233.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39233.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39233):map__39233);
var triage_data = map__39233__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39233__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39233__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39233__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39233__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39233__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39233__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39233__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39233__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__39239 = phase;
var G__39239__$1 = (((G__39239 instanceof cljs.core.Keyword))?G__39239.fqn:null);
switch (G__39239__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__39240 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__39241 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__39242 = loc;
var G__39243 = (cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__39244_39362 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__39245_39363 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__39246_39364 = true;
var _STAR_print_fn_STAR__temp_val__39247_39365 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__39246_39364);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__39247_39365);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__39230_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__39230_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__39245_39363);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__39244_39362);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__39240,G__39241,G__39242,G__39243) : format.call(null,G__39240,G__39241,G__39242,G__39243));

break;
case "macroexpansion":
var G__39252 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__39253 = cause_type;
var G__39254 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__39255 = loc;
var G__39256 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__39252,G__39253,G__39254,G__39255,G__39256) : format.call(null,G__39252,G__39253,G__39254,G__39255,G__39256));

break;
case "compile-syntax-check":
var G__39257 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__39258 = cause_type;
var G__39259 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__39260 = loc;
var G__39261 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__39257,G__39258,G__39259,G__39260,G__39261) : format.call(null,G__39257,G__39258,G__39259,G__39260,G__39261));

break;
case "compilation":
var G__39262 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__39263 = cause_type;
var G__39264 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__39265 = loc;
var G__39266 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__39262,G__39263,G__39264,G__39265,G__39266) : format.call(null,G__39262,G__39263,G__39264,G__39265,G__39266));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__39267 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__39268 = symbol;
var G__39269 = loc;
var G__39270 = (function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__39271_39366 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__39272_39367 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__39273_39368 = true;
var _STAR_print_fn_STAR__temp_val__39274_39369 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__39273_39368);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__39274_39369);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__39231_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__39231_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__39272_39367);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__39271_39366);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__39267,G__39268,G__39269,G__39270) : format.call(null,G__39267,G__39268,G__39269,G__39270));
} else {
var G__39275 = "Execution error%s at %s(%s).\n%s\n";
var G__39276 = cause_type;
var G__39277 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__39278 = loc;
var G__39279 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__39275,G__39276,G__39277,G__39278,G__39279) : format.call(null,G__39275,G__39276,G__39277,G__39278,G__39279));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39239__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
