goog.provide('leipzig.chord');
leipzig.chord.update_all = (function leipzig$chord$update_all(m,p__28556,f){
var vec__28557 = p__28556;
var seq__28558 = cljs.core.seq(vec__28557);
var first__28559 = cljs.core.first(seq__28558);
var seq__28558__$1 = cljs.core.next(seq__28558);
var k = first__28559;
var ks = seq__28558__$1;
if(cljs.core.truth_(k)){
var G__28560 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null),f);
var G__28561 = ks;
var G__28562 = f;
return (leipzig.chord.update_all.cljs$core$IFn$_invoke$arity$3 ? leipzig.chord.update_all.cljs$core$IFn$_invoke$arity$3(G__28560,G__28561,G__28562) : leipzig.chord.update_all.call(null,G__28560,G__28561,G__28562));
} else {
return m;
}
});
leipzig.chord.mapval = (function leipzig$chord$mapval(m,f){
return leipzig.chord.update_all(m,cljs.core.keys(m),f);
});
/**
 * Translates a chord so that its root is at tonic.
 *   e.g. (-> triad (root 4))
 */
leipzig.chord.root = (function leipzig$chord$root(chord,tonic){
return leipzig.chord.mapval(chord,leipzig.scale.from(tonic));
});
/**
 * A three-tone chord.
 */
leipzig.chord.triad = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"i","i",-1386841315),(0),new cljs.core.Keyword(null,"iii","iii",341851243),(2),new cljs.core.Keyword(null,"v","v",21465059),(4)], null);
/**
 * A four-tone chord.
 */
leipzig.chord.seventh = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(leipzig.chord.triad,new cljs.core.Keyword(null,"vii","vii",324924996),(6));
/**
 * A five-tone chord.
 */
leipzig.chord.ninth = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(leipzig.chord.seventh,new cljs.core.Keyword(null,"ix","ix",-268822678),(8));
leipzig.chord.inversion = (function leipzig$chord$inversion(chord,n){

var stable = cljs.core.set(cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.Keyword(null,"iii","iii",341851243),new cljs.core.Keyword(null,"v","v",21465059)], null)));
var lowered = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(chord)),stable);
return leipzig.chord.update_all(chord,cljs.core.seq(lowered),leipzig.scale.lower);
});
/**
 * Adds n to key k in the chord.
 */
leipzig.chord.augment = (function leipzig$chord$augment(chord,k,n){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(chord,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null),leipzig.scale.from(n));
});

//# sourceMappingURL=leipzig.chord.js.map
