goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_34688 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_34688(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_34691 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_34691(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__34085 = coll;
var G__34086 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__34085,G__34086) : shadow.dom.lazy_native_coll_seq.call(null,G__34085,G__34086));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4126__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__34105 = arguments.length;
switch (G__34105) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__34110 = arguments.length;
switch (G__34110) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__34121 = arguments.length;
switch (G__34121) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__34129 = arguments.length;
switch (G__34129) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__34138 = arguments.length;
switch (G__34138) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__34149 = arguments.length;
switch (G__34149) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e34154){if((e34154 instanceof Object)){
var e = e34154;
return console.log("didnt support attachEvent",el,e);
} else {
throw e34154;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__34162 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__34163 = null;
var count__34164 = (0);
var i__34165 = (0);
while(true){
if((i__34165 < count__34164)){
var el = chunk__34163.cljs$core$IIndexed$_nth$arity$2(null,i__34165);
var handler_34721__$1 = ((function (seq__34162,chunk__34163,count__34164,i__34165,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__34162,chunk__34163,count__34164,i__34165,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_34721__$1);


var G__34722 = seq__34162;
var G__34723 = chunk__34163;
var G__34724 = count__34164;
var G__34725 = (i__34165 + (1));
seq__34162 = G__34722;
chunk__34163 = G__34723;
count__34164 = G__34724;
i__34165 = G__34725;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34162);
if(temp__5735__auto__){
var seq__34162__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34162__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__34162__$1);
var G__34726 = cljs.core.chunk_rest(seq__34162__$1);
var G__34727 = c__4556__auto__;
var G__34728 = cljs.core.count(c__4556__auto__);
var G__34729 = (0);
seq__34162 = G__34726;
chunk__34163 = G__34727;
count__34164 = G__34728;
i__34165 = G__34729;
continue;
} else {
var el = cljs.core.first(seq__34162__$1);
var handler_34731__$1 = ((function (seq__34162,chunk__34163,count__34164,i__34165,el,seq__34162__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__34162,chunk__34163,count__34164,i__34165,el,seq__34162__$1,temp__5735__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_34731__$1);


var G__34732 = cljs.core.next(seq__34162__$1);
var G__34733 = null;
var G__34734 = (0);
var G__34735 = (0);
seq__34162 = G__34732;
chunk__34163 = G__34733;
count__34164 = G__34734;
i__34165 = G__34735;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__34181 = arguments.length;
switch (G__34181) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__34187 = cljs.core.seq(events);
var chunk__34188 = null;
var count__34189 = (0);
var i__34190 = (0);
while(true){
if((i__34190 < count__34189)){
var vec__34198 = chunk__34188.cljs$core$IIndexed$_nth$arity$2(null,i__34190);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34198,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34198,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__34737 = seq__34187;
var G__34738 = chunk__34188;
var G__34739 = count__34189;
var G__34740 = (i__34190 + (1));
seq__34187 = G__34737;
chunk__34188 = G__34738;
count__34189 = G__34739;
i__34190 = G__34740;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34187);
if(temp__5735__auto__){
var seq__34187__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34187__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__34187__$1);
var G__34742 = cljs.core.chunk_rest(seq__34187__$1);
var G__34743 = c__4556__auto__;
var G__34744 = cljs.core.count(c__4556__auto__);
var G__34745 = (0);
seq__34187 = G__34742;
chunk__34188 = G__34743;
count__34189 = G__34744;
i__34190 = G__34745;
continue;
} else {
var vec__34204 = cljs.core.first(seq__34187__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34204,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34204,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__34748 = cljs.core.next(seq__34187__$1);
var G__34749 = null;
var G__34750 = (0);
var G__34751 = (0);
seq__34187 = G__34748;
chunk__34188 = G__34749;
count__34189 = G__34750;
i__34190 = G__34751;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__34210 = cljs.core.seq(styles);
var chunk__34211 = null;
var count__34212 = (0);
var i__34213 = (0);
while(true){
if((i__34213 < count__34212)){
var vec__34227 = chunk__34211.cljs$core$IIndexed$_nth$arity$2(null,i__34213);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34227,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34227,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__34754 = seq__34210;
var G__34755 = chunk__34211;
var G__34756 = count__34212;
var G__34757 = (i__34213 + (1));
seq__34210 = G__34754;
chunk__34211 = G__34755;
count__34212 = G__34756;
i__34213 = G__34757;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34210);
if(temp__5735__auto__){
var seq__34210__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34210__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__34210__$1);
var G__34760 = cljs.core.chunk_rest(seq__34210__$1);
var G__34761 = c__4556__auto__;
var G__34762 = cljs.core.count(c__4556__auto__);
var G__34763 = (0);
seq__34210 = G__34760;
chunk__34211 = G__34761;
count__34212 = G__34762;
i__34213 = G__34763;
continue;
} else {
var vec__34232 = cljs.core.first(seq__34210__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34232,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34232,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__34765 = cljs.core.next(seq__34210__$1);
var G__34766 = null;
var G__34767 = (0);
var G__34768 = (0);
seq__34210 = G__34765;
chunk__34211 = G__34766;
count__34212 = G__34767;
i__34213 = G__34768;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__34239_34771 = key;
var G__34239_34772__$1 = (((G__34239_34771 instanceof cljs.core.Keyword))?G__34239_34771.fqn:null);
switch (G__34239_34772__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_34777 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4126__auto__ = goog.string.startsWith(ks_34777,"data-");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return goog.string.startsWith(ks_34777,"aria-");
}
})())){
el.setAttribute(ks_34777,value);
} else {
(el[ks_34777] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__34254){
var map__34255 = p__34254;
var map__34255__$1 = (((((!((map__34255 == null))))?(((((map__34255.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34255.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34255):map__34255);
var props = map__34255__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34255__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__34259 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34259,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34259,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34259,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__34262 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__34262,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__34262;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__34266 = arguments.length;
switch (G__34266) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__34277){
var vec__34279 = p__34277;
var seq__34280 = cljs.core.seq(vec__34279);
var first__34281 = cljs.core.first(seq__34280);
var seq__34280__$1 = cljs.core.next(seq__34280);
var nn = first__34281;
var first__34281__$1 = cljs.core.first(seq__34280__$1);
var seq__34280__$2 = cljs.core.next(seq__34280__$1);
var np = first__34281__$1;
var nc = seq__34280__$2;
var node = vec__34279;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__34283 = nn;
var G__34284 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__34283,G__34284) : create_fn.call(null,G__34283,G__34284));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__34285 = nn;
var G__34286 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__34285,G__34286) : create_fn.call(null,G__34285,G__34286));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__34290 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34290,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34290,(1),null);
var seq__34293_34793 = cljs.core.seq(node_children);
var chunk__34294_34794 = null;
var count__34295_34795 = (0);
var i__34296_34796 = (0);
while(true){
if((i__34296_34796 < count__34295_34795)){
var child_struct_34798 = chunk__34294_34794.cljs$core$IIndexed$_nth$arity$2(null,i__34296_34796);
var children_34799 = shadow.dom.dom_node(child_struct_34798);
if(cljs.core.seq_QMARK_(children_34799)){
var seq__34316_34800 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_34799));
var chunk__34318_34801 = null;
var count__34319_34802 = (0);
var i__34320_34803 = (0);
while(true){
if((i__34320_34803 < count__34319_34802)){
var child_34804 = chunk__34318_34801.cljs$core$IIndexed$_nth$arity$2(null,i__34320_34803);
if(cljs.core.truth_(child_34804)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34804);


var G__34807 = seq__34316_34800;
var G__34808 = chunk__34318_34801;
var G__34809 = count__34319_34802;
var G__34810 = (i__34320_34803 + (1));
seq__34316_34800 = G__34807;
chunk__34318_34801 = G__34808;
count__34319_34802 = G__34809;
i__34320_34803 = G__34810;
continue;
} else {
var G__34811 = seq__34316_34800;
var G__34812 = chunk__34318_34801;
var G__34813 = count__34319_34802;
var G__34814 = (i__34320_34803 + (1));
seq__34316_34800 = G__34811;
chunk__34318_34801 = G__34812;
count__34319_34802 = G__34813;
i__34320_34803 = G__34814;
continue;
}
} else {
var temp__5735__auto___34816 = cljs.core.seq(seq__34316_34800);
if(temp__5735__auto___34816){
var seq__34316_34817__$1 = temp__5735__auto___34816;
if(cljs.core.chunked_seq_QMARK_(seq__34316_34817__$1)){
var c__4556__auto___34818 = cljs.core.chunk_first(seq__34316_34817__$1);
var G__34819 = cljs.core.chunk_rest(seq__34316_34817__$1);
var G__34820 = c__4556__auto___34818;
var G__34821 = cljs.core.count(c__4556__auto___34818);
var G__34822 = (0);
seq__34316_34800 = G__34819;
chunk__34318_34801 = G__34820;
count__34319_34802 = G__34821;
i__34320_34803 = G__34822;
continue;
} else {
var child_34823 = cljs.core.first(seq__34316_34817__$1);
if(cljs.core.truth_(child_34823)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34823);


var G__34825 = cljs.core.next(seq__34316_34817__$1);
var G__34826 = null;
var G__34827 = (0);
var G__34828 = (0);
seq__34316_34800 = G__34825;
chunk__34318_34801 = G__34826;
count__34319_34802 = G__34827;
i__34320_34803 = G__34828;
continue;
} else {
var G__34829 = cljs.core.next(seq__34316_34817__$1);
var G__34830 = null;
var G__34831 = (0);
var G__34832 = (0);
seq__34316_34800 = G__34829;
chunk__34318_34801 = G__34830;
count__34319_34802 = G__34831;
i__34320_34803 = G__34832;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_34799);
}


var G__34833 = seq__34293_34793;
var G__34834 = chunk__34294_34794;
var G__34835 = count__34295_34795;
var G__34836 = (i__34296_34796 + (1));
seq__34293_34793 = G__34833;
chunk__34294_34794 = G__34834;
count__34295_34795 = G__34835;
i__34296_34796 = G__34836;
continue;
} else {
var temp__5735__auto___34837 = cljs.core.seq(seq__34293_34793);
if(temp__5735__auto___34837){
var seq__34293_34838__$1 = temp__5735__auto___34837;
if(cljs.core.chunked_seq_QMARK_(seq__34293_34838__$1)){
var c__4556__auto___34839 = cljs.core.chunk_first(seq__34293_34838__$1);
var G__34846 = cljs.core.chunk_rest(seq__34293_34838__$1);
var G__34847 = c__4556__auto___34839;
var G__34848 = cljs.core.count(c__4556__auto___34839);
var G__34849 = (0);
seq__34293_34793 = G__34846;
chunk__34294_34794 = G__34847;
count__34295_34795 = G__34848;
i__34296_34796 = G__34849;
continue;
} else {
var child_struct_34851 = cljs.core.first(seq__34293_34838__$1);
var children_34852 = shadow.dom.dom_node(child_struct_34851);
if(cljs.core.seq_QMARK_(children_34852)){
var seq__34331_34853 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_34852));
var chunk__34333_34854 = null;
var count__34334_34855 = (0);
var i__34335_34856 = (0);
while(true){
if((i__34335_34856 < count__34334_34855)){
var child_34857 = chunk__34333_34854.cljs$core$IIndexed$_nth$arity$2(null,i__34335_34856);
if(cljs.core.truth_(child_34857)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34857);


var G__34859 = seq__34331_34853;
var G__34860 = chunk__34333_34854;
var G__34861 = count__34334_34855;
var G__34862 = (i__34335_34856 + (1));
seq__34331_34853 = G__34859;
chunk__34333_34854 = G__34860;
count__34334_34855 = G__34861;
i__34335_34856 = G__34862;
continue;
} else {
var G__34863 = seq__34331_34853;
var G__34864 = chunk__34333_34854;
var G__34865 = count__34334_34855;
var G__34866 = (i__34335_34856 + (1));
seq__34331_34853 = G__34863;
chunk__34333_34854 = G__34864;
count__34334_34855 = G__34865;
i__34335_34856 = G__34866;
continue;
}
} else {
var temp__5735__auto___34867__$1 = cljs.core.seq(seq__34331_34853);
if(temp__5735__auto___34867__$1){
var seq__34331_34868__$1 = temp__5735__auto___34867__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34331_34868__$1)){
var c__4556__auto___34869 = cljs.core.chunk_first(seq__34331_34868__$1);
var G__34870 = cljs.core.chunk_rest(seq__34331_34868__$1);
var G__34871 = c__4556__auto___34869;
var G__34872 = cljs.core.count(c__4556__auto___34869);
var G__34873 = (0);
seq__34331_34853 = G__34870;
chunk__34333_34854 = G__34871;
count__34334_34855 = G__34872;
i__34335_34856 = G__34873;
continue;
} else {
var child_34874 = cljs.core.first(seq__34331_34868__$1);
if(cljs.core.truth_(child_34874)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34874);


var G__34875 = cljs.core.next(seq__34331_34868__$1);
var G__34876 = null;
var G__34877 = (0);
var G__34878 = (0);
seq__34331_34853 = G__34875;
chunk__34333_34854 = G__34876;
count__34334_34855 = G__34877;
i__34335_34856 = G__34878;
continue;
} else {
var G__34880 = cljs.core.next(seq__34331_34868__$1);
var G__34881 = null;
var G__34882 = (0);
var G__34883 = (0);
seq__34331_34853 = G__34880;
chunk__34333_34854 = G__34881;
count__34334_34855 = G__34882;
i__34335_34856 = G__34883;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_34852);
}


var G__34885 = cljs.core.next(seq__34293_34838__$1);
var G__34886 = null;
var G__34887 = (0);
var G__34888 = (0);
seq__34293_34793 = G__34885;
chunk__34294_34794 = G__34886;
count__34295_34795 = G__34887;
i__34296_34796 = G__34888;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__34357 = cljs.core.seq(node);
var chunk__34358 = null;
var count__34359 = (0);
var i__34360 = (0);
while(true){
if((i__34360 < count__34359)){
var n = chunk__34358.cljs$core$IIndexed$_nth$arity$2(null,i__34360);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__34898 = seq__34357;
var G__34899 = chunk__34358;
var G__34900 = count__34359;
var G__34901 = (i__34360 + (1));
seq__34357 = G__34898;
chunk__34358 = G__34899;
count__34359 = G__34900;
i__34360 = G__34901;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34357);
if(temp__5735__auto__){
var seq__34357__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34357__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__34357__$1);
var G__34902 = cljs.core.chunk_rest(seq__34357__$1);
var G__34903 = c__4556__auto__;
var G__34904 = cljs.core.count(c__4556__auto__);
var G__34905 = (0);
seq__34357 = G__34902;
chunk__34358 = G__34903;
count__34359 = G__34904;
i__34360 = G__34905;
continue;
} else {
var n = cljs.core.first(seq__34357__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__34912 = cljs.core.next(seq__34357__$1);
var G__34913 = null;
var G__34914 = (0);
var G__34915 = (0);
seq__34357 = G__34912;
chunk__34358 = G__34913;
count__34359 = G__34914;
i__34360 = G__34915;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__34371 = arguments.length;
switch (G__34371) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__34378 = arguments.length;
switch (G__34378) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__34391 = arguments.length;
switch (G__34391) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4126__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4742__auto__ = [];
var len__4736__auto___34941 = arguments.length;
var i__4737__auto___34942 = (0);
while(true){
if((i__4737__auto___34942 < len__4736__auto___34941)){
args__4742__auto__.push((arguments[i__4737__auto___34942]));

var G__34945 = (i__4737__auto___34942 + (1));
i__4737__auto___34942 = G__34945;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__34402_34949 = cljs.core.seq(nodes);
var chunk__34403_34950 = null;
var count__34404_34951 = (0);
var i__34405_34952 = (0);
while(true){
if((i__34405_34952 < count__34404_34951)){
var node_34954 = chunk__34403_34950.cljs$core$IIndexed$_nth$arity$2(null,i__34405_34952);
fragment.appendChild(shadow.dom._to_dom(node_34954));


var G__34956 = seq__34402_34949;
var G__34957 = chunk__34403_34950;
var G__34958 = count__34404_34951;
var G__34959 = (i__34405_34952 + (1));
seq__34402_34949 = G__34956;
chunk__34403_34950 = G__34957;
count__34404_34951 = G__34958;
i__34405_34952 = G__34959;
continue;
} else {
var temp__5735__auto___34964 = cljs.core.seq(seq__34402_34949);
if(temp__5735__auto___34964){
var seq__34402_34965__$1 = temp__5735__auto___34964;
if(cljs.core.chunked_seq_QMARK_(seq__34402_34965__$1)){
var c__4556__auto___34966 = cljs.core.chunk_first(seq__34402_34965__$1);
var G__34967 = cljs.core.chunk_rest(seq__34402_34965__$1);
var G__34968 = c__4556__auto___34966;
var G__34969 = cljs.core.count(c__4556__auto___34966);
var G__34970 = (0);
seq__34402_34949 = G__34967;
chunk__34403_34950 = G__34968;
count__34404_34951 = G__34969;
i__34405_34952 = G__34970;
continue;
} else {
var node_34971 = cljs.core.first(seq__34402_34965__$1);
fragment.appendChild(shadow.dom._to_dom(node_34971));


var G__34976 = cljs.core.next(seq__34402_34965__$1);
var G__34977 = null;
var G__34978 = (0);
var G__34979 = (0);
seq__34402_34949 = G__34976;
chunk__34403_34950 = G__34977;
count__34404_34951 = G__34978;
i__34405_34952 = G__34979;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq34399){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq34399));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__34412_34980 = cljs.core.seq(scripts);
var chunk__34413_34981 = null;
var count__34414_34982 = (0);
var i__34415_34983 = (0);
while(true){
if((i__34415_34983 < count__34414_34982)){
var vec__34422_34984 = chunk__34413_34981.cljs$core$IIndexed$_nth$arity$2(null,i__34415_34983);
var script_tag_34985 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34422_34984,(0),null);
var script_body_34986 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34422_34984,(1),null);
eval(script_body_34986);


var G__34987 = seq__34412_34980;
var G__34988 = chunk__34413_34981;
var G__34989 = count__34414_34982;
var G__34990 = (i__34415_34983 + (1));
seq__34412_34980 = G__34987;
chunk__34413_34981 = G__34988;
count__34414_34982 = G__34989;
i__34415_34983 = G__34990;
continue;
} else {
var temp__5735__auto___34991 = cljs.core.seq(seq__34412_34980);
if(temp__5735__auto___34991){
var seq__34412_34992__$1 = temp__5735__auto___34991;
if(cljs.core.chunked_seq_QMARK_(seq__34412_34992__$1)){
var c__4556__auto___34993 = cljs.core.chunk_first(seq__34412_34992__$1);
var G__34994 = cljs.core.chunk_rest(seq__34412_34992__$1);
var G__34995 = c__4556__auto___34993;
var G__34996 = cljs.core.count(c__4556__auto___34993);
var G__34997 = (0);
seq__34412_34980 = G__34994;
chunk__34413_34981 = G__34995;
count__34414_34982 = G__34996;
i__34415_34983 = G__34997;
continue;
} else {
var vec__34425_34998 = cljs.core.first(seq__34412_34992__$1);
var script_tag_34999 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34425_34998,(0),null);
var script_body_35000 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34425_34998,(1),null);
eval(script_body_35000);


var G__35001 = cljs.core.next(seq__34412_34992__$1);
var G__35002 = null;
var G__35003 = (0);
var G__35004 = (0);
seq__34412_34980 = G__35001;
chunk__34413_34981 = G__35002;
count__34414_34982 = G__35003;
i__34415_34983 = G__35004;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__34428){
var vec__34429 = p__34428;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34429,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34429,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__34437 = arguments.length;
switch (G__34437) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__34453 = cljs.core.seq(style_keys);
var chunk__34454 = null;
var count__34455 = (0);
var i__34456 = (0);
while(true){
if((i__34456 < count__34455)){
var it = chunk__34454.cljs$core$IIndexed$_nth$arity$2(null,i__34456);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__35010 = seq__34453;
var G__35011 = chunk__34454;
var G__35012 = count__34455;
var G__35013 = (i__34456 + (1));
seq__34453 = G__35010;
chunk__34454 = G__35011;
count__34455 = G__35012;
i__34456 = G__35013;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34453);
if(temp__5735__auto__){
var seq__34453__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34453__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__34453__$1);
var G__35014 = cljs.core.chunk_rest(seq__34453__$1);
var G__35015 = c__4556__auto__;
var G__35016 = cljs.core.count(c__4556__auto__);
var G__35017 = (0);
seq__34453 = G__35014;
chunk__34454 = G__35015;
count__34455 = G__35016;
i__34456 = G__35017;
continue;
} else {
var it = cljs.core.first(seq__34453__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__35018 = cljs.core.next(seq__34453__$1);
var G__35019 = null;
var G__35020 = (0);
var G__35021 = (0);
seq__34453 = G__35018;
chunk__34454 = G__35019;
count__34455 = G__35020;
i__34456 = G__35021;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k34470,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__34474 = k34470;
var G__34474__$1 = (((G__34474 instanceof cljs.core.Keyword))?G__34474.fqn:null);
switch (G__34474__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k34470,else__4383__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__34475){
var vec__34476 = p__34475;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34476,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34476,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__34469){
var self__ = this;
var G__34469__$1 = this;
return (new cljs.core.RecordIter((0),G__34469__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this34471,other34472){
var self__ = this;
var this34471__$1 = this;
return (((!((other34472 == null)))) && ((this34471__$1.constructor === other34472.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34471__$1.x,other34472.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34471__$1.y,other34472.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34471__$1.__extmap,other34472.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__34469){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__34494 = cljs.core.keyword_identical_QMARK_;
var expr__34495 = k__4388__auto__;
if(cljs.core.truth_((pred__34494.cljs$core$IFn$_invoke$arity$2 ? pred__34494.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__34495) : pred__34494.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__34495)))){
return (new shadow.dom.Coordinate(G__34469,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__34494.cljs$core$IFn$_invoke$arity$2 ? pred__34494.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__34495) : pred__34494.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__34495)))){
return (new shadow.dom.Coordinate(self__.x,G__34469,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__34469),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__34469){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__34469,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__34473){
var extmap__4419__auto__ = (function (){var G__34502 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__34473,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__34473)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__34502);
} else {
return G__34502;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__34473),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__34473),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k34507,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__34513 = k34507;
var G__34513__$1 = (((G__34513 instanceof cljs.core.Keyword))?G__34513.fqn:null);
switch (G__34513__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k34507,else__4383__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__34514){
var vec__34515 = p__34514;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34515,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34515,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Size{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__34506){
var self__ = this;
var G__34506__$1 = this;
return (new cljs.core.RecordIter((0),G__34506__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this34508,other34509){
var self__ = this;
var this34508__$1 = this;
return (((!((other34509 == null)))) && ((this34508__$1.constructor === other34509.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34508__$1.w,other34509.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34508__$1.h,other34509.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34508__$1.__extmap,other34509.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__34506){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__34527 = cljs.core.keyword_identical_QMARK_;
var expr__34528 = k__4388__auto__;
if(cljs.core.truth_((pred__34527.cljs$core$IFn$_invoke$arity$2 ? pred__34527.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__34528) : pred__34527.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__34528)))){
return (new shadow.dom.Size(G__34506,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__34527.cljs$core$IFn$_invoke$arity$2 ? pred__34527.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__34528) : pred__34527.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__34528)))){
return (new shadow.dom.Size(self__.w,G__34506,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__34506),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__34506){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__34506,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__34511){
var extmap__4419__auto__ = (function (){var G__34539 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__34511,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__34511)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__34539);
} else {
return G__34539;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__34511),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__34511),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4610__auto__ = opts;
var l__4611__auto__ = a__4610__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4611__auto__)){
var G__35044 = (i + (1));
var G__35045 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__35044;
ret = G__35045;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__34555){
var vec__34556 = p__34555;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34556,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34556,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__34563 = arguments.length;
switch (G__34563) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__35047 = ps;
var G__35048 = (i + (1));
el__$1 = G__35047;
i = G__35048;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__34578 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34578,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34578,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34578,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__34583_35052 = cljs.core.seq(props);
var chunk__34584_35053 = null;
var count__34585_35054 = (0);
var i__34586_35055 = (0);
while(true){
if((i__34586_35055 < count__34585_35054)){
var vec__34596_35056 = chunk__34584_35053.cljs$core$IIndexed$_nth$arity$2(null,i__34586_35055);
var k_35057 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34596_35056,(0),null);
var v_35058 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34596_35056,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_35057);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_35057),v_35058);


var G__35059 = seq__34583_35052;
var G__35060 = chunk__34584_35053;
var G__35061 = count__34585_35054;
var G__35062 = (i__34586_35055 + (1));
seq__34583_35052 = G__35059;
chunk__34584_35053 = G__35060;
count__34585_35054 = G__35061;
i__34586_35055 = G__35062;
continue;
} else {
var temp__5735__auto___35063 = cljs.core.seq(seq__34583_35052);
if(temp__5735__auto___35063){
var seq__34583_35064__$1 = temp__5735__auto___35063;
if(cljs.core.chunked_seq_QMARK_(seq__34583_35064__$1)){
var c__4556__auto___35065 = cljs.core.chunk_first(seq__34583_35064__$1);
var G__35066 = cljs.core.chunk_rest(seq__34583_35064__$1);
var G__35067 = c__4556__auto___35065;
var G__35068 = cljs.core.count(c__4556__auto___35065);
var G__35069 = (0);
seq__34583_35052 = G__35066;
chunk__34584_35053 = G__35067;
count__34585_35054 = G__35068;
i__34586_35055 = G__35069;
continue;
} else {
var vec__34601_35073 = cljs.core.first(seq__34583_35064__$1);
var k_35074 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34601_35073,(0),null);
var v_35075 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34601_35073,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_35074);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_35074),v_35075);


var G__35076 = cljs.core.next(seq__34583_35064__$1);
var G__35077 = null;
var G__35078 = (0);
var G__35079 = (0);
seq__34583_35052 = G__35076;
chunk__34584_35053 = G__35077;
count__34585_35054 = G__35078;
i__34586_35055 = G__35079;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__34609 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34609,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34609,(1),null);
var seq__34613_35080 = cljs.core.seq(node_children);
var chunk__34615_35081 = null;
var count__34616_35082 = (0);
var i__34617_35083 = (0);
while(true){
if((i__34617_35083 < count__34616_35082)){
var child_struct_35084 = chunk__34615_35081.cljs$core$IIndexed$_nth$arity$2(null,i__34617_35083);
if((!((child_struct_35084 == null)))){
if(typeof child_struct_35084 === 'string'){
var text_35085 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_35085),child_struct_35084].join(''));
} else {
var children_35086 = shadow.dom.svg_node(child_struct_35084);
if(cljs.core.seq_QMARK_(children_35086)){
var seq__34644_35087 = cljs.core.seq(children_35086);
var chunk__34646_35088 = null;
var count__34647_35089 = (0);
var i__34648_35090 = (0);
while(true){
if((i__34648_35090 < count__34647_35089)){
var child_35091 = chunk__34646_35088.cljs$core$IIndexed$_nth$arity$2(null,i__34648_35090);
if(cljs.core.truth_(child_35091)){
node.appendChild(child_35091);


var G__35095 = seq__34644_35087;
var G__35096 = chunk__34646_35088;
var G__35097 = count__34647_35089;
var G__35098 = (i__34648_35090 + (1));
seq__34644_35087 = G__35095;
chunk__34646_35088 = G__35096;
count__34647_35089 = G__35097;
i__34648_35090 = G__35098;
continue;
} else {
var G__35099 = seq__34644_35087;
var G__35100 = chunk__34646_35088;
var G__35101 = count__34647_35089;
var G__35102 = (i__34648_35090 + (1));
seq__34644_35087 = G__35099;
chunk__34646_35088 = G__35100;
count__34647_35089 = G__35101;
i__34648_35090 = G__35102;
continue;
}
} else {
var temp__5735__auto___35103 = cljs.core.seq(seq__34644_35087);
if(temp__5735__auto___35103){
var seq__34644_35104__$1 = temp__5735__auto___35103;
if(cljs.core.chunked_seq_QMARK_(seq__34644_35104__$1)){
var c__4556__auto___35105 = cljs.core.chunk_first(seq__34644_35104__$1);
var G__35106 = cljs.core.chunk_rest(seq__34644_35104__$1);
var G__35107 = c__4556__auto___35105;
var G__35108 = cljs.core.count(c__4556__auto___35105);
var G__35109 = (0);
seq__34644_35087 = G__35106;
chunk__34646_35088 = G__35107;
count__34647_35089 = G__35108;
i__34648_35090 = G__35109;
continue;
} else {
var child_35110 = cljs.core.first(seq__34644_35104__$1);
if(cljs.core.truth_(child_35110)){
node.appendChild(child_35110);


var G__35111 = cljs.core.next(seq__34644_35104__$1);
var G__35112 = null;
var G__35113 = (0);
var G__35114 = (0);
seq__34644_35087 = G__35111;
chunk__34646_35088 = G__35112;
count__34647_35089 = G__35113;
i__34648_35090 = G__35114;
continue;
} else {
var G__35115 = cljs.core.next(seq__34644_35104__$1);
var G__35116 = null;
var G__35117 = (0);
var G__35118 = (0);
seq__34644_35087 = G__35115;
chunk__34646_35088 = G__35116;
count__34647_35089 = G__35117;
i__34648_35090 = G__35118;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_35086);
}
}


var G__35119 = seq__34613_35080;
var G__35120 = chunk__34615_35081;
var G__35121 = count__34616_35082;
var G__35122 = (i__34617_35083 + (1));
seq__34613_35080 = G__35119;
chunk__34615_35081 = G__35120;
count__34616_35082 = G__35121;
i__34617_35083 = G__35122;
continue;
} else {
var G__35123 = seq__34613_35080;
var G__35124 = chunk__34615_35081;
var G__35125 = count__34616_35082;
var G__35126 = (i__34617_35083 + (1));
seq__34613_35080 = G__35123;
chunk__34615_35081 = G__35124;
count__34616_35082 = G__35125;
i__34617_35083 = G__35126;
continue;
}
} else {
var temp__5735__auto___35127 = cljs.core.seq(seq__34613_35080);
if(temp__5735__auto___35127){
var seq__34613_35128__$1 = temp__5735__auto___35127;
if(cljs.core.chunked_seq_QMARK_(seq__34613_35128__$1)){
var c__4556__auto___35129 = cljs.core.chunk_first(seq__34613_35128__$1);
var G__35130 = cljs.core.chunk_rest(seq__34613_35128__$1);
var G__35131 = c__4556__auto___35129;
var G__35132 = cljs.core.count(c__4556__auto___35129);
var G__35133 = (0);
seq__34613_35080 = G__35130;
chunk__34615_35081 = G__35131;
count__34616_35082 = G__35132;
i__34617_35083 = G__35133;
continue;
} else {
var child_struct_35134 = cljs.core.first(seq__34613_35128__$1);
if((!((child_struct_35134 == null)))){
if(typeof child_struct_35134 === 'string'){
var text_35135 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_35135),child_struct_35134].join(''));
} else {
var children_35136 = shadow.dom.svg_node(child_struct_35134);
if(cljs.core.seq_QMARK_(children_35136)){
var seq__34656_35137 = cljs.core.seq(children_35136);
var chunk__34658_35138 = null;
var count__34659_35139 = (0);
var i__34660_35140 = (0);
while(true){
if((i__34660_35140 < count__34659_35139)){
var child_35141 = chunk__34658_35138.cljs$core$IIndexed$_nth$arity$2(null,i__34660_35140);
if(cljs.core.truth_(child_35141)){
node.appendChild(child_35141);


var G__35143 = seq__34656_35137;
var G__35144 = chunk__34658_35138;
var G__35145 = count__34659_35139;
var G__35146 = (i__34660_35140 + (1));
seq__34656_35137 = G__35143;
chunk__34658_35138 = G__35144;
count__34659_35139 = G__35145;
i__34660_35140 = G__35146;
continue;
} else {
var G__35150 = seq__34656_35137;
var G__35151 = chunk__34658_35138;
var G__35152 = count__34659_35139;
var G__35153 = (i__34660_35140 + (1));
seq__34656_35137 = G__35150;
chunk__34658_35138 = G__35151;
count__34659_35139 = G__35152;
i__34660_35140 = G__35153;
continue;
}
} else {
var temp__5735__auto___35154__$1 = cljs.core.seq(seq__34656_35137);
if(temp__5735__auto___35154__$1){
var seq__34656_35155__$1 = temp__5735__auto___35154__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34656_35155__$1)){
var c__4556__auto___35156 = cljs.core.chunk_first(seq__34656_35155__$1);
var G__35157 = cljs.core.chunk_rest(seq__34656_35155__$1);
var G__35158 = c__4556__auto___35156;
var G__35159 = cljs.core.count(c__4556__auto___35156);
var G__35160 = (0);
seq__34656_35137 = G__35157;
chunk__34658_35138 = G__35158;
count__34659_35139 = G__35159;
i__34660_35140 = G__35160;
continue;
} else {
var child_35161 = cljs.core.first(seq__34656_35155__$1);
if(cljs.core.truth_(child_35161)){
node.appendChild(child_35161);


var G__35162 = cljs.core.next(seq__34656_35155__$1);
var G__35163 = null;
var G__35164 = (0);
var G__35165 = (0);
seq__34656_35137 = G__35162;
chunk__34658_35138 = G__35163;
count__34659_35139 = G__35164;
i__34660_35140 = G__35165;
continue;
} else {
var G__35166 = cljs.core.next(seq__34656_35155__$1);
var G__35167 = null;
var G__35168 = (0);
var G__35169 = (0);
seq__34656_35137 = G__35166;
chunk__34658_35138 = G__35167;
count__34659_35139 = G__35168;
i__34660_35140 = G__35169;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_35136);
}
}


var G__35170 = cljs.core.next(seq__34613_35128__$1);
var G__35171 = null;
var G__35172 = (0);
var G__35173 = (0);
seq__34613_35080 = G__35170;
chunk__34615_35081 = G__35171;
count__34616_35082 = G__35172;
i__34617_35083 = G__35173;
continue;
} else {
var G__35174 = cljs.core.next(seq__34613_35128__$1);
var G__35175 = null;
var G__35176 = (0);
var G__35177 = (0);
seq__34613_35080 = G__35174;
chunk__34615_35081 = G__35175;
count__34616_35082 = G__35176;
i__34617_35083 = G__35177;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___35178 = arguments.length;
var i__4737__auto___35179 = (0);
while(true){
if((i__4737__auto___35179 < len__4736__auto___35178)){
args__4742__auto__.push((arguments[i__4737__auto___35179]));

var G__35180 = (i__4737__auto___35179 + (1));
i__4737__auto___35179 = G__35180;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq34671){
var G__34672 = cljs.core.first(seq34671);
var seq34671__$1 = cljs.core.next(seq34671);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34672,seq34671__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__34674 = arguments.length;
switch (G__34674) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4115__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4115__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4115__auto__;
}
})())){
var c__32297__auto___35185 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32298__auto__ = (function (){var switch__32252__auto__ = (function (state_34679){
var state_val_34680 = (state_34679[(1)]);
if((state_val_34680 === (1))){
var state_34679__$1 = state_34679;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34679__$1,(2),once_or_cleanup);
} else {
if((state_val_34680 === (2))){
var inst_34676 = (state_34679[(2)]);
var inst_34677 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_34679__$1 = (function (){var statearr_34681 = state_34679;
(statearr_34681[(7)] = inst_34676);

return statearr_34681;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34679__$1,inst_34677);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__32253__auto__ = null;
var shadow$dom$state_machine__32253__auto____0 = (function (){
var statearr_34682 = [null,null,null,null,null,null,null,null];
(statearr_34682[(0)] = shadow$dom$state_machine__32253__auto__);

(statearr_34682[(1)] = (1));

return statearr_34682;
});
var shadow$dom$state_machine__32253__auto____1 = (function (state_34679){
while(true){
var ret_value__32254__auto__ = (function (){try{while(true){
var result__32255__auto__ = switch__32252__auto__(state_34679);
if(cljs.core.keyword_identical_QMARK_(result__32255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32255__auto__;
}
break;
}
}catch (e34683){var ex__32256__auto__ = e34683;
var statearr_34684_35186 = state_34679;
(statearr_34684_35186[(2)] = ex__32256__auto__);


if(cljs.core.seq((state_34679[(4)]))){
var statearr_34685_35187 = state_34679;
(statearr_34685_35187[(1)] = cljs.core.first((state_34679[(4)])));

} else {
throw ex__32256__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35188 = state_34679;
state_34679 = G__35188;
continue;
} else {
return ret_value__32254__auto__;
}
break;
}
});
shadow$dom$state_machine__32253__auto__ = function(state_34679){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__32253__auto____0.call(this);
case 1:
return shadow$dom$state_machine__32253__auto____1.call(this,state_34679);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__32253__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__32253__auto____0;
shadow$dom$state_machine__32253__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__32253__auto____1;
return shadow$dom$state_machine__32253__auto__;
})()
})();
var state__32299__auto__ = (function (){var statearr_34686 = f__32298__auto__();
(statearr_34686[(6)] = c__32297__auto___35185);

return statearr_34686;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32299__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
