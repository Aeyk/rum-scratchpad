goog.provide('rum.derived_atom');
rum.derived_atom.derived_atom = (function rum$derived_atom$derived_atom(var_args){
var G__36846 = arguments.length;
switch (G__36846) {
case 3:
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$3 = (function (refs,key,f){
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4(refs,key,f,cljs.core.PersistentArrayMap.EMPTY);
}));

(rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4 = (function (refs,key,f,opts){
var map__36865 = opts;
var map__36865__$1 = (((((!((map__36865 == null))))?(((((map__36865.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36865.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36865):map__36865);
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36865__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var check_equals_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__36865__$1,new cljs.core.Keyword(null,"check-equals?","check-equals?",-2005755315),true);
var recalc = (function (){var G__36871 = cljs.core.count(refs);
switch (G__36871) {
case (1):
var vec__36872 = refs;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36872,(0),null);
return (function (){
var G__36875 = cljs.core.deref(a);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__36875) : f.call(null,G__36875));
});

break;
case (2):
var vec__36876 = refs;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36876,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36876,(1),null);
return (function (){
var G__36879 = cljs.core.deref(a);
var G__36880 = cljs.core.deref(b);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__36879,G__36880) : f.call(null,G__36879,G__36880));
});

break;
case (3):
var vec__36881 = refs;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36881,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36881,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36881,(2),null);
return (function (){
var G__36884 = cljs.core.deref(a);
var G__36885 = cljs.core.deref(b);
var G__36886 = cljs.core.deref(c);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__36884,G__36885,G__36886) : f.call(null,G__36884,G__36885,G__36886));
});

break;
default:
return (function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.deref,refs));
});

}
})();
var sink = (cljs.core.truth_(ref)?(function (){var G__36887 = ref;
cljs.core.reset_BANG_(G__36887,(recalc.cljs$core$IFn$_invoke$arity$0 ? recalc.cljs$core$IFn$_invoke$arity$0() : recalc.call(null)));

return G__36887;
})():cljs.core.atom.cljs$core$IFn$_invoke$arity$1((recalc.cljs$core$IFn$_invoke$arity$0 ? recalc.cljs$core$IFn$_invoke$arity$0() : recalc.call(null))));
var watch = (cljs.core.truth_(check_equals_QMARK_)?(function (_,___$1,___$2,___$3){
var new_val = (recalc.cljs$core$IFn$_invoke$arity$0 ? recalc.cljs$core$IFn$_invoke$arity$0() : recalc.call(null));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(sink),new_val)){
return cljs.core.reset_BANG_(sink,new_val);
} else {
return null;
}
}):(function (_,___$1,___$2,___$3){
return cljs.core.reset_BANG_(sink,(recalc.cljs$core$IFn$_invoke$arity$0 ? recalc.cljs$core$IFn$_invoke$arity$0() : recalc.call(null)));
}));
var seq__36895_36967 = cljs.core.seq(refs);
var chunk__36896_36968 = null;
var count__36897_36969 = (0);
var i__36898_36970 = (0);
while(true){
if((i__36898_36970 < count__36897_36969)){
var ref_36973__$1 = chunk__36896_36968.cljs$core$IIndexed$_nth$arity$2(null,i__36898_36970);
cljs.core.add_watch(ref_36973__$1,key,watch);


var G__36978 = seq__36895_36967;
var G__36979 = chunk__36896_36968;
var G__36980 = count__36897_36969;
var G__36981 = (i__36898_36970 + (1));
seq__36895_36967 = G__36978;
chunk__36896_36968 = G__36979;
count__36897_36969 = G__36980;
i__36898_36970 = G__36981;
continue;
} else {
var temp__5735__auto___36983 = cljs.core.seq(seq__36895_36967);
if(temp__5735__auto___36983){
var seq__36895_36985__$1 = temp__5735__auto___36983;
if(cljs.core.chunked_seq_QMARK_(seq__36895_36985__$1)){
var c__4556__auto___36986 = cljs.core.chunk_first(seq__36895_36985__$1);
var G__36988 = cljs.core.chunk_rest(seq__36895_36985__$1);
var G__36989 = c__4556__auto___36986;
var G__36990 = cljs.core.count(c__4556__auto___36986);
var G__36991 = (0);
seq__36895_36967 = G__36988;
chunk__36896_36968 = G__36989;
count__36897_36969 = G__36990;
i__36898_36970 = G__36991;
continue;
} else {
var ref_36992__$1 = cljs.core.first(seq__36895_36985__$1);
cljs.core.add_watch(ref_36992__$1,key,watch);


var G__36993 = cljs.core.next(seq__36895_36985__$1);
var G__36994 = null;
var G__36995 = (0);
var G__36996 = (0);
seq__36895_36967 = G__36993;
chunk__36896_36968 = G__36994;
count__36897_36969 = G__36995;
i__36898_36970 = G__36996;
continue;
}
} else {
}
}
break;
}

return sink;
}));

(rum.derived_atom.derived_atom.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=rum.derived_atom.js.map
