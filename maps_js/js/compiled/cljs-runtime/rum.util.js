goog.provide('rum.util');
rum.util.collect = (function rum$util$collect(key,mixins){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$1((function (m){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,key);
})),mixins);
});
rum.util.collect_STAR_ = (function rum$util$collect_STAR_(keys,mixins){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1((function (m){
return cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (k){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
}),keys);
})),mixins);
});
rum.util.call_all = (function rum$util$call_all(var_args){
var args__4742__auto__ = [];
var len__4736__auto___36828 = arguments.length;
var i__4737__auto___36829 = (0);
while(true){
if((i__4737__auto___36829 < len__4736__auto___36828)){
args__4742__auto__.push((arguments[i__4737__auto___36829]));

var G__36830 = (i__4737__auto___36829 + (1));
i__4737__auto___36829 = G__36830;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return rum.util.call_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(rum.util.call_all.cljs$core$IFn$_invoke$arity$variadic = (function (state,fns,args){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (state__$1,fn){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(fn,state__$1,args);
}),state,fns);
}));

(rum.util.call_all.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(rum.util.call_all.cljs$lang$applyTo = (function (seq36797){
var G__36798 = cljs.core.first(seq36797);
var seq36797__$1 = cljs.core.next(seq36797);
var G__36799 = cljs.core.first(seq36797__$1);
var seq36797__$2 = cljs.core.next(seq36797__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36798,G__36799,seq36797__$2);
}));


//# sourceMappingURL=rum.util.js.map
