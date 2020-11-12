goog.provide('sablono.core');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__38834__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
var vec__38649 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var seq__38651 = cljs.core.seq(vec__38649);
var first__38652 = cljs.core.first(seq__38651);
var seq__38651__$1 = cljs.core.next(seq__38651);
var tag = first__38652;
var body = seq__38651__$1;
if(cljs.core.map_QMARK_(cljs.core.first(body))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.first(body),cljs.core.first(args)], 0))], null),cljs.core.rest(body));
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first(args)], null),body);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__38834 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38835__i = 0, G__38835__a = new Array(arguments.length -  0);
while (G__38835__i < G__38835__a.length) {G__38835__a[G__38835__i] = arguments[G__38835__i + 0]; ++G__38835__i;}
  args = new cljs.core.IndexedSeq(G__38835__a,0,null);
} 
return G__38834__delegate.call(this,args);};
G__38834.cljs$lang$maxFixedArity = 0;
G__38834.cljs$lang$applyTo = (function (arglist__38836){
var args = cljs.core.seq(arglist__38836);
return G__38834__delegate(args);
});
G__38834.cljs$core$IFn$_invoke$arity$variadic = G__38834__delegate;
return G__38834;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__4529__auto__ = (function sablono$core$update_arglists_$_iter__38654(s__38655){
return (new cljs.core.LazySeq(null,(function (){
var s__38655__$1 = s__38655;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__38655__$1);
if(temp__5735__auto__){
var s__38655__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__38655__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__38655__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__38657 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__38656 = (0);
while(true){
if((i__38656 < size__4528__auto__)){
var args = cljs.core._nth(c__4527__auto__,i__38656);
cljs.core.chunk_append(b__38657,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__38837 = (i__38656 + (1));
i__38656 = G__38837;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38657),sablono$core$update_arglists_$_iter__38654(cljs.core.chunk_rest(s__38655__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38657),null);
}
} else {
var args = cljs.core.first(s__38655__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__38654(cljs.core.rest(s__38655__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__4742__auto__ = [];
var len__4736__auto___38838 = arguments.length;
var i__4737__auto___38839 = (0);
while(true){
if((i__4737__auto___38839 < len__4736__auto___38838)){
args__4742__auto__.push((arguments[i__4737__auto___38839]));

var G__38840 = (i__4737__auto___38839 + (1));
i__4737__auto___38839 = G__38840;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__4529__auto__ = (function sablono$core$iter__38680(s__38681){
return (new cljs.core.LazySeq(null,(function (){
var s__38681__$1 = s__38681;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__38681__$1);
if(temp__5735__auto__){
var s__38681__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__38681__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__38681__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__38683 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__38682 = (0);
while(true){
if((i__38682 < size__4528__auto__)){
var style = cljs.core._nth(c__4527__auto__,i__38682);
cljs.core.chunk_append(b__38683,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__38845 = (i__38682 + (1));
i__38682 = G__38845;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38683),sablono$core$iter__38680(cljs.core.chunk_rest(s__38681__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38683),null);
}
} else {
var style = cljs.core.first(s__38681__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__38680(cljs.core.rest(s__38681__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(styles);
}));

(sablono.core.include_css.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sablono.core.include_css.cljs$lang$applyTo = (function (seq38673){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq38673));
}));

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",({"src": src})));
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js("http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to38695 = (function sablono$core$link_to38695(var_args){
var args__4742__auto__ = [];
var len__4736__auto___38848 = arguments.length;
var i__4737__auto___38849 = (0);
while(true){
if((i__4737__auto___38849 < len__4736__auto___38848)){
args__4742__auto__.push((arguments[i__4737__auto___38849]));

var G__38850 = (i__4737__auto___38849 + (1));
i__4737__auto___38849 = G__38850;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to38695.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sablono.core.link_to38695.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([url], 0))], null),content], null);
}));

(sablono.core.link_to38695.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.link_to38695.cljs$lang$applyTo = (function (seq38696){
var G__38697 = cljs.core.first(seq38696);
var seq38696__$1 = cljs.core.next(seq38696);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38697,seq38696__$1);
}));


sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to38695);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to38701 = (function sablono$core$mail_to38701(var_args){
var args__4742__auto__ = [];
var len__4736__auto___38851 = arguments.length;
var i__4737__auto___38852 = (0);
while(true){
if((i__4737__auto___38852 < len__4736__auto___38851)){
args__4742__auto__.push((arguments[i__4737__auto___38852]));

var G__38853 = (i__4737__auto___38852 + (1));
i__4737__auto___38852 = G__38853;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to38701.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sablono.core.mail_to38701.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__38704){
var vec__38705 = p__38704;
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38705,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__4126__auto__ = content;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return e_mail;
}
})()], null);
}));

(sablono.core.mail_to38701.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.mail_to38701.cljs$lang$applyTo = (function (seq38702){
var G__38703 = cljs.core.first(seq38702);
var seq38702__$1 = cljs.core.next(seq38702);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38703,seq38702__$1);
}));


sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to38701);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list38708 = (function sablono$core$unordered_list38708(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4529__auto__ = (function sablono$core$unordered_list38708_$_iter__38709(s__38710){
return (new cljs.core.LazySeq(null,(function (){
var s__38710__$1 = s__38710;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__38710__$1);
if(temp__5735__auto__){
var s__38710__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__38710__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__38710__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__38712 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__38711 = (0);
while(true){
if((i__38711 < size__4528__auto__)){
var x = cljs.core._nth(c__4527__auto__,i__38711);
cljs.core.chunk_append(b__38712,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__38861 = (i__38711 + (1));
i__38711 = G__38861;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38712),sablono$core$unordered_list38708_$_iter__38709(cljs.core.chunk_rest(s__38710__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38712),null);
}
} else {
var x = cljs.core.first(s__38710__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list38708_$_iter__38709(cljs.core.rest(s__38710__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list38708);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list38715 = (function sablono$core$ordered_list38715(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4529__auto__ = (function sablono$core$ordered_list38715_$_iter__38716(s__38717){
return (new cljs.core.LazySeq(null,(function (){
var s__38717__$1 = s__38717;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__38717__$1);
if(temp__5735__auto__){
var s__38717__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__38717__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__38717__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__38719 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__38718 = (0);
while(true){
if((i__38718 < size__4528__auto__)){
var x = cljs.core._nth(c__4527__auto__,i__38718);
cljs.core.chunk_append(b__38719,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__38866 = (i__38718 + (1));
i__38718 = G__38866;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38719),sablono$core$ordered_list38715_$_iter__38716(cljs.core.chunk_rest(s__38717__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38719),null);
}
} else {
var x = cljs.core.first(s__38717__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list38715_$_iter__38716(cljs.core.rest(s__38717__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list38715);
/**
 * Create an image element.
 */
sablono.core.image38724 = (function sablono$core$image38724(var_args){
var G__38733 = arguments.length;
switch (G__38733) {
case 1:
return sablono.core.image38724.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image38724.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.image38724.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0))], null)], null);
}));

(sablono.core.image38724.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0)),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
}));

(sablono.core.image38724.cljs$lang$maxFixedArity = 2);


sablono.core.image = sablono.core.wrap_attrs(sablono.core.image38724);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__38740_SHARP_,p2__38741_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__38740_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__38741_SHARP_),"]"].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__38746_SHARP_,p2__38747_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__38746_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__38747_SHARP_)].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(var_args){
var G__38749 = arguments.length;
switch (G__38749) {
case 2:
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (type,name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4126__auto__ = value;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return undefined;
}
})()], null)], null);
}));

(sablono.core.input_field_STAR_.cljs$lang$maxFixedArity = 3);

/**
 * Creates a color input field.
 */
sablono.core.color_field38750 = (function sablono$core$color_field38750(var_args){
var G__38752 = arguments.length;
switch (G__38752) {
case 1:
return sablono.core.color_field38750.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field38750.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.color_field38750.cljs$core$IFn$_invoke$arity$1 = (function (name__38641__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__38641__auto__);
}));

(sablono.core.color_field38750.cljs$core$IFn$_invoke$arity$2 = (function (name__38641__auto__,value__38642__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__38641__auto__,value__38642__auto__);
}));

(sablono.core.color_field38750.cljs$lang$maxFixedArity = 2);


sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field38750);

/**
 * Creates a date input field.
 */
sablono.core.date_field38753 = (function sablono$core$date_field38753(var_args){
var G__38755 = arguments.length;
switch (G__38755) {
case 1:
return sablono.core.date_field38753.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field38753.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.date_field38753.cljs$core$IFn$_invoke$arity$1 = (function (name__38641__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__38641__auto__);
}));

(sablono.core.date_field38753.cljs$core$IFn$_invoke$arity$2 = (function (name__38641__auto__,value__38642__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__38641__auto__,value__38642__auto__);
}));

(sablono.core.date_field38753.cljs$lang$maxFixedArity = 2);


sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field38753);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field38756 = (function sablono$core$datetime_field38756(var_args){
var G__38758 = arguments.length;
switch (G__38758) {
case 1:
return sablono.core.datetime_field38756.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field38756.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_field38756.cljs$core$IFn$_invoke$arity$1 = (function (name__38641__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__38641__auto__);
}));

(sablono.core.datetime_field38756.cljs$core$IFn$_invoke$arity$2 = (function (name__38641__auto__,value__38642__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__38641__auto__,value__38642__auto__);
}));

(sablono.core.datetime_field38756.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field38756);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field38759 = (function sablono$core$datetime_local_field38759(var_args){
var G__38761 = arguments.length;
switch (G__38761) {
case 1:
return sablono.core.datetime_local_field38759.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field38759.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_local_field38759.cljs$core$IFn$_invoke$arity$1 = (function (name__38641__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__38641__auto__);
}));

(sablono.core.datetime_local_field38759.cljs$core$IFn$_invoke$arity$2 = (function (name__38641__auto__,value__38642__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__38641__auto__,value__38642__auto__);
}));

(sablono.core.datetime_local_field38759.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field38759);

/**
 * Creates a email input field.
 */
sablono.core.email_field38762 = (function sablono$core$email_field38762(var_args){
var G__38764 = arguments.length;
switch (G__38764) {
case 1:
return sablono.core.email_field38762.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field38762.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.email_field38762.cljs$core$IFn$_invoke$arity$1 = (function (name__38641__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__38641__auto__);
}));

(sablono.core.email_field38762.cljs$core$IFn$_invoke$arity$2 = (function (name__38641__auto__,value__38642__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__38641__auto__,value__38642__auto__);
}));

(sablono.core.email_field38762.cljs$lang$maxFixedArity = 2);


sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field38762);

/**
 * Creates a file input field.
 */
sablono.core.file_field38765 = (function sablono$core$file_field38765(var_args){
var G__38767 = arguments.length;
switch (G__38767) {
case 1:
return sablono.core.file_field38765.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field38765.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.file_field38765.cljs$core$IFn$_invoke$arity$1 = (function (name__38641__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__38641__auto__);
}));

(sablono.core.file_field38765.cljs$core$IFn$_invoke$arity$2 = (function (name__38641__auto__,value__38642__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__38641__auto__,value__38642__auto__);
}));

(sablono.core.file_field38765.cljs$lang$maxFixedArity = 2);


sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field38765);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field38768 = (function sablono$core$hidden_field38768(var_args){
var G__38770 = arguments.length;
switch (G__38770) {
case 1:
return sablono.core.hidden_field38768.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field38768.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.hidden_field38768.cljs$core$IFn$_invoke$arity$1 = (function (name__38641__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__38641__auto__);
}));

(sablono.core.hidden_field38768.cljs$core$IFn$_invoke$arity$2 = (function (name__38641__auto__,value__38642__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__38641__auto__,value__38642__auto__);
}));

(sablono.core.hidden_field38768.cljs$lang$maxFixedArity = 2);


sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field38768);

/**
 * Creates a month input field.
 */
sablono.core.month_field38771 = (function sablono$core$month_field38771(var_args){
var G__38773 = arguments.length;
switch (G__38773) {
case 1:
return sablono.core.month_field38771.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field38771.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.month_field38771.cljs$core$IFn$_invoke$arity$1 = (function (name__38641__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__38641__auto__);
}));

(sablono.core.month_field38771.cljs$core$IFn$_invoke$arity$2 = (function (name__38641__auto__,value__38642__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__38641__auto__,value__38642__auto__);
}));

(sablono.core.month_field38771.cljs$lang$maxFixedArity = 2);


sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field38771);

/**
 * Creates a number input field.
 */
sablono.core.number_field38774 = (function sablono$core$number_field38774(var_args){
var G__38776 = arguments.length;
switch (G__38776) {
case 1:
return sablono.core.number_field38774.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field38774.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.number_field38774.cljs$core$IFn$_invoke$arity$1 = (function (name__38641__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__38641__auto__);
}));

(sablono.core.number_field38774.cljs$core$IFn$_invoke$arity$2 = (function (name__38641__auto__,value__38642__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__38641__auto__,value__38642__auto__);
}));

(sablono.core.number_field38774.cljs$lang$maxFixedArity = 2);


sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field38774);

/**
 * Creates a password input field.
 */
sablono.core.password_field38777 = (function sablono$core$password_field38777(var_args){
var G__38779 = arguments.length;
switch (G__38779) {
case 1:
return sablono.core.password_field38777.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field38777.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.password_field38777.cljs$core$IFn$_invoke$arity$1 = (function (name__38641__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__38641__auto__);
}));

(sablono.core.password_field38777.cljs$core$IFn$_invoke$arity$2 = (function (name__38641__auto__,value__38642__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__38641__auto__,value__38642__auto__);
}));

(sablono.core.password_field38777.cljs$lang$maxFixedArity = 2);


sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field38777);

/**
 * Creates a range input field.
 */
sablono.core.range_field38780 = (function sablono$core$range_field38780(var_args){
var G__38782 = arguments.length;
switch (G__38782) {
case 1:
return sablono.core.range_field38780.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field38780.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.range_field38780.cljs$core$IFn$_invoke$arity$1 = (function (name__38641__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__38641__auto__);
}));

(sablono.core.range_field38780.cljs$core$IFn$_invoke$arity$2 = (function (name__38641__auto__,value__38642__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__38641__auto__,value__38642__auto__);
}));

(sablono.core.range_field38780.cljs$lang$maxFixedArity = 2);


sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field38780);

/**
 * Creates a search input field.
 */
sablono.core.search_field38783 = (function sablono$core$search_field38783(var_args){
var G__38785 = arguments.length;
switch (G__38785) {
case 1:
return sablono.core.search_field38783.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field38783.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.search_field38783.cljs$core$IFn$_invoke$arity$1 = (function (name__38641__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__38641__auto__);
}));

(sablono.core.search_field38783.cljs$core$IFn$_invoke$arity$2 = (function (name__38641__auto__,value__38642__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__38641__auto__,value__38642__auto__);
}));

(sablono.core.search_field38783.cljs$lang$maxFixedArity = 2);


sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field38783);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field38786 = (function sablono$core$tel_field38786(var_args){
var G__38788 = arguments.length;
switch (G__38788) {
case 1:
return sablono.core.tel_field38786.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field38786.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.tel_field38786.cljs$core$IFn$_invoke$arity$1 = (function (name__38641__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__38641__auto__);
}));

(sablono.core.tel_field38786.cljs$core$IFn$_invoke$arity$2 = (function (name__38641__auto__,value__38642__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__38641__auto__,value__38642__auto__);
}));

(sablono.core.tel_field38786.cljs$lang$maxFixedArity = 2);


sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field38786);

/**
 * Creates a text input field.
 */
sablono.core.text_field38789 = (function sablono$core$text_field38789(var_args){
var G__38791 = arguments.length;
switch (G__38791) {
case 1:
return sablono.core.text_field38789.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field38789.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_field38789.cljs$core$IFn$_invoke$arity$1 = (function (name__38641__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__38641__auto__);
}));

(sablono.core.text_field38789.cljs$core$IFn$_invoke$arity$2 = (function (name__38641__auto__,value__38642__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__38641__auto__,value__38642__auto__);
}));

(sablono.core.text_field38789.cljs$lang$maxFixedArity = 2);


sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field38789);

/**
 * Creates a time input field.
 */
sablono.core.time_field38792 = (function sablono$core$time_field38792(var_args){
var G__38794 = arguments.length;
switch (G__38794) {
case 1:
return sablono.core.time_field38792.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field38792.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.time_field38792.cljs$core$IFn$_invoke$arity$1 = (function (name__38641__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__38641__auto__);
}));

(sablono.core.time_field38792.cljs$core$IFn$_invoke$arity$2 = (function (name__38641__auto__,value__38642__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__38641__auto__,value__38642__auto__);
}));

(sablono.core.time_field38792.cljs$lang$maxFixedArity = 2);


sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field38792);

/**
 * Creates a url input field.
 */
sablono.core.url_field38795 = (function sablono$core$url_field38795(var_args){
var G__38797 = arguments.length;
switch (G__38797) {
case 1:
return sablono.core.url_field38795.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field38795.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.url_field38795.cljs$core$IFn$_invoke$arity$1 = (function (name__38641__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__38641__auto__);
}));

(sablono.core.url_field38795.cljs$core$IFn$_invoke$arity$2 = (function (name__38641__auto__,value__38642__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__38641__auto__,value__38642__auto__);
}));

(sablono.core.url_field38795.cljs$lang$maxFixedArity = 2);


sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field38795);

/**
 * Creates a week input field.
 */
sablono.core.week_field38798 = (function sablono$core$week_field38798(var_args){
var G__38800 = arguments.length;
switch (G__38800) {
case 1:
return sablono.core.week_field38798.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field38798.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.week_field38798.cljs$core$IFn$_invoke$arity$1 = (function (name__38641__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__38641__auto__);
}));

(sablono.core.week_field38798.cljs$core$IFn$_invoke$arity$2 = (function (name__38641__auto__,value__38642__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__38641__auto__,value__38642__auto__);
}));

(sablono.core.week_field38798.cljs$lang$maxFixedArity = 2);


sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field38798);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box38801 = (function sablono$core$check_box38801(var_args){
var G__38803 = arguments.length;
switch (G__38803) {
case 1:
return sablono.core.check_box38801.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box38801.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box38801.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.check_box38801.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.check_box38801.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box38801.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box38801.cljs$lang$maxFixedArity = 3);


sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box38801);
/**
 * Creates a radio button.
 */
sablono.core.radio_button38804 = (function sablono$core$radio_button38804(var_args){
var G__38806 = arguments.length;
switch (G__38806) {
case 1:
return sablono.core.radio_button38804.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button38804.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button38804.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.radio_button38804.cljs$core$IFn$_invoke$arity$1 = (function (group){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)))], null)], null);
}));

(sablono.core.radio_button38804.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0))),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button38804.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id([sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)),"-",sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button38804.cljs$lang$maxFixedArity = 3);


sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button38804);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0)));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options38807 = (function sablono$core$select_options38807(coll){
var iter__4529__auto__ = (function sablono$core$select_options38807_$_iter__38808(s__38809){
return (new cljs.core.LazySeq(null,(function (){
var s__38809__$1 = s__38809;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__38809__$1);
if(temp__5735__auto__){
var s__38809__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__38809__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__38809__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__38811 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__38810 = (0);
while(true){
if((i__38810 < size__4528__auto__)){
var x = cljs.core._nth(c__4527__auto__,i__38810);
cljs.core.chunk_append(b__38811,((cljs.core.sequential_QMARK_(x))?(function (){var vec__38812 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38812,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38812,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38812,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),(sablono.core.select_options38807.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options38807.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options38807.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__38999 = (i__38810 + (1));
i__38810 = G__38999;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38811),sablono$core$select_options38807_$_iter__38808(cljs.core.chunk_rest(s__38809__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38811),null);
}
} else {
var x = cljs.core.first(s__38809__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__38815 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38815,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38815,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38815,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),(sablono.core.select_options38807.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options38807.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options38807.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options38807_$_iter__38808(cljs.core.rest(s__38809__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(coll);
});

sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options38807);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down38818 = (function sablono$core$drop_down38818(var_args){
var G__38820 = arguments.length;
switch (G__38820) {
case 2:
return sablono.core.drop_down38818.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down38818.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.drop_down38818.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down38818.cljs$core$IFn$_invoke$arity$3(name,options,null);
}));

(sablono.core.drop_down38818.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null),sablono.core.select_options(options,selected)], null);
}));

(sablono.core.drop_down38818.cljs$lang$maxFixedArity = 3);


sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down38818);
/**
 * Creates a text area element.
 */
sablono.core.text_area38821 = (function sablono$core$text_area38821(var_args){
var G__38823 = arguments.length;
switch (G__38823) {
case 1:
return sablono.core.text_area38821.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area38821.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_area38821.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.text_area38821.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4126__auto__ = value;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return undefined;
}
})()], null)], null);
}));

(sablono.core.text_area38821.cljs$lang$maxFixedArity = 2);


sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area38821);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label38824 = (function sablono$core$label38824(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id(name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs(sablono.core.label38824);
/**
 * Creates a submit button.
 */
sablono.core.submit_button38825 = (function sablono$core$submit_button38825(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button38825);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button38826 = (function sablono$core$reset_button38826(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button38826);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to38827 = (function sablono$core$form_to38827(var_args){
var args__4742__auto__ = [];
var len__4736__auto___39020 = arguments.length;
var i__4737__auto___39021 = (0);
while(true){
if((i__4737__auto___39021 < len__4736__auto___39020)){
args__4742__auto__.push((arguments[i__4737__auto___39021]));

var G__39022 = (i__4737__auto___39021 + (1));
i__4737__auto___39021 = G__39022;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to38827.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sablono.core.form_to38827.cljs$core$IFn$_invoke$arity$variadic = (function (p__38830,body){
var vec__38831 = p__38830;
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38831,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38831,(1),null);
var method_str = clojure.string.upper_case(cljs.core.name(method));
var action_uri = sablono.util.to_uri(action);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
}));

(sablono.core.form_to38827.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.form_to38827.cljs$lang$applyTo = (function (seq38828){
var G__38829 = cljs.core.first(seq38828);
var seq38828__$1 = cljs.core.next(seq38828);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38829,seq38828__$1);
}));


sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to38827);

//# sourceMappingURL=sablono.core.js.map
