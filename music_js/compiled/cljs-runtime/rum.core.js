goog.provide('rum.core');
/**
 * Given React component, returns Rum state associated with it.
 */
rum.core.state = (function rum$core$state(comp){
return goog.object.get(comp.state,":rum/state");
});
rum.core.extend_BANG_ = (function rum$core$extend_BANG_(obj,props){
var seq__38095 = cljs.core.seq(props);
var chunk__38097 = null;
var count__38098 = (0);
var i__38099 = (0);
while(true){
if((i__38099 < count__38098)){
var vec__38107 = chunk__38097.cljs$core$IIndexed$_nth$arity$2(null,i__38099);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38107,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38107,(1),null);
if((!((v == null)))){
goog.object.set(obj,cljs.core.name(k),cljs.core.clj__GT_js(v));


var G__38162 = seq__38095;
var G__38163 = chunk__38097;
var G__38164 = count__38098;
var G__38165 = (i__38099 + (1));
seq__38095 = G__38162;
chunk__38097 = G__38163;
count__38098 = G__38164;
i__38099 = G__38165;
continue;
} else {
var G__38166 = seq__38095;
var G__38167 = chunk__38097;
var G__38168 = count__38098;
var G__38169 = (i__38099 + (1));
seq__38095 = G__38166;
chunk__38097 = G__38167;
count__38098 = G__38168;
i__38099 = G__38169;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38095);
if(temp__5735__auto__){
var seq__38095__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38095__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__38095__$1);
var G__38170 = cljs.core.chunk_rest(seq__38095__$1);
var G__38171 = c__4556__auto__;
var G__38172 = cljs.core.count(c__4556__auto__);
var G__38173 = (0);
seq__38095 = G__38170;
chunk__38097 = G__38171;
count__38098 = G__38172;
i__38099 = G__38173;
continue;
} else {
var vec__38110 = cljs.core.first(seq__38095__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38110,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38110,(1),null);
if((!((v == null)))){
goog.object.set(obj,cljs.core.name(k),cljs.core.clj__GT_js(v));


var G__38174 = cljs.core.next(seq__38095__$1);
var G__38175 = null;
var G__38176 = (0);
var G__38177 = (0);
seq__38095 = G__38174;
chunk__38097 = G__38175;
count__38098 = G__38176;
i__38099 = G__38177;
continue;
} else {
var G__38178 = cljs.core.next(seq__38095__$1);
var G__38179 = null;
var G__38180 = (0);
var G__38181 = (0);
seq__38095 = G__38178;
chunk__38097 = G__38179;
count__38098 = G__38180;
i__38099 = G__38181;
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
rum.core.build_class = (function rum$core$build_class(render,mixins,display_name){
var mixins_38182__$1 = cljs.core.set(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.keys,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([mixins], 0)));
if(clojure.set.subset_QMARK_(mixins_38182__$1,rum.specs.mixins)){
} else {
throw (new Error(["Assert failed: ",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(display_name)," declares invalid mixin keys ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(mixins_38182__$1,rum.specs.mixins)),", ","did you mean one of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(rum.specs.mixins)].join(''),"\n","(set/subset? mixins rum.specs/mixins)"].join('')));
}

var init = rum.util.collect(new cljs.core.Keyword(null,"init","init",-1875481434),mixins);
var will_mount = rum.util.collect_STAR_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"will-mount","will-mount",-434633071),new cljs.core.Keyword(null,"before-render","before-render",71256781)], null),mixins);
var render__$1 = render;
var wrap_render = rum.util.collect(new cljs.core.Keyword(null,"wrap-render","wrap-render",1782000986),mixins);
var wrapped_render = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__38114_SHARP_,p2__38113_SHARP_){
return (p2__38113_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p2__38113_SHARP_.cljs$core$IFn$_invoke$arity$1(p1__38114_SHARP_) : p2__38113_SHARP_.call(null,p1__38114_SHARP_));
}),render__$1,wrap_render);
var did_mount = rum.util.collect_STAR_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),new cljs.core.Keyword(null,"after-render","after-render",1997533433)], null),mixins);
var did_remount = rum.util.collect(new cljs.core.Keyword(null,"did-remount","did-remount",1362550500),mixins);
var should_update = rum.util.collect(new cljs.core.Keyword(null,"should-update","should-update",-1292781795),mixins);
var will_update = rum.util.collect_STAR_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"will-update","will-update",328062998),new cljs.core.Keyword(null,"before-render","before-render",71256781)], null),mixins);
var did_update = rum.util.collect_STAR_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"did-update","did-update",-2143702256),new cljs.core.Keyword(null,"after-render","after-render",1997533433)], null),mixins);
var did_catch = rum.util.collect(new cljs.core.Keyword(null,"did-catch","did-catch",2139522313),mixins);
var will_unmount = rum.util.collect(new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),mixins);
var child_context = rum.util.collect(new cljs.core.Keyword(null,"child-context","child-context",-1375270295),mixins);
var class_props = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,rum.util.collect(new cljs.core.Keyword(null,"class-properties","class-properties",1351279702),mixins));
var static_props = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,rum.util.collect(new cljs.core.Keyword(null,"static-properties","static-properties",-577838503),mixins));
var ctor = (function (props){
var this$ = this;
goog.object.set(this$,"state",({":rum/state": cljs.core.volatile_BANG_(rum.util.call_all.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(goog.object.get(props,":rum/initial-state"),new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248),this$),init,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props], 0)))}));

return React.Component.call(this$,props);
});
var _ = goog.inherits(ctor,React.Component);
var prototype = goog.object.get(ctor,"prototype");
if(cljs.core.empty_QMARK_(will_mount)){
} else {
goog.object.set(prototype,"componentWillMount",(function (){
var this$ = this;
return cljs.core._vreset_BANG_(rum.core.state(this$),rum.util.call_all(cljs.core._deref(rum.core.state(this$)),will_mount));
}));
}

if(cljs.core.empty_QMARK_(did_mount)){
} else {
goog.object.set(prototype,"componentDidMount",(function (){
var this$ = this;
return cljs.core._vreset_BANG_(rum.core.state(this$),rum.util.call_all(cljs.core._deref(rum.core.state(this$)),did_mount));
}));
}

goog.object.set(prototype,"componentWillReceiveProps",(function (next_props){
var this$ = this;
var old_state = cljs.core.deref(rum.core.state(this$));
var state = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([old_state,goog.object.get(next_props,":rum/initial-state")], 0));
var next_state = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__38116_SHARP_,p2__38115_SHARP_){
return (p2__38115_SHARP_.cljs$core$IFn$_invoke$arity$2 ? p2__38115_SHARP_.cljs$core$IFn$_invoke$arity$2(old_state,p1__38116_SHARP_) : p2__38115_SHARP_.call(null,old_state,p1__38116_SHARP_));
}),state,did_remount);
return this$.setState(({":rum/state": cljs.core.volatile_BANG_(next_state)}));
}));

if(cljs.core.empty_QMARK_(should_update)){
} else {
goog.object.set(prototype,"shouldComponentUpdate",(function (next_props,next_state){
var this$ = this;
var old_state = cljs.core.deref(rum.core.state(this$));
var new_state = cljs.core.deref(goog.object.get(next_state,":rum/state"));
var or__4126__auto__ = cljs.core.some((function (p1__38117_SHARP_){
return (p1__38117_SHARP_.cljs$core$IFn$_invoke$arity$2 ? p1__38117_SHARP_.cljs$core$IFn$_invoke$arity$2(old_state,new_state) : p1__38117_SHARP_.call(null,old_state,new_state));
}),should_update);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return false;
}
}));
}

if(cljs.core.empty_QMARK_(will_update)){
} else {
goog.object.set(prototype,"componentWillUpdate",(function (___$1,next_state){
var this$ = this;
var new_state = goog.object.get(next_state,":rum/state");
return cljs.core._vreset_BANG_(new_state,rum.util.call_all(cljs.core._deref(new_state),will_update));
}));
}

goog.object.set(prototype,"render",(function (){
var this$ = this;
var state = rum.core.state(this$);
var vec__38119 = (function (){var G__38122 = cljs.core.deref(state);
return (wrapped_render.cljs$core$IFn$_invoke$arity$1 ? wrapped_render.cljs$core$IFn$_invoke$arity$1(G__38122) : wrapped_render.call(null,G__38122));
})();
var dom = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38119,(0),null);
var next_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38119,(1),null);
cljs.core.vreset_BANG_(state,next_state);

return dom;
}));

if(cljs.core.empty_QMARK_(did_update)){
} else {
goog.object.set(prototype,"componentDidUpdate",(function (___$1,___$2){
var this$ = this;
return cljs.core._vreset_BANG_(rum.core.state(this$),rum.util.call_all(cljs.core._deref(rum.core.state(this$)),did_update));
}));
}

if(cljs.core.empty_QMARK_(did_catch)){
} else {
goog.object.set(prototype,"componentDidCatch",(function (error,info){
var this$ = this;
cljs.core._vreset_BANG_(rum.core.state(this$),rum.util.call_all.cljs$core$IFn$_invoke$arity$variadic(cljs.core._deref(rum.core.state(this$)),did_catch,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([error,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","component-stack","rum/component-stack",2037541138),goog.object.get(info,"componentStack")], null)], 0)));

return this$.forceUpdate();
}));
}

goog.object.set(prototype,"componentWillUnmount",(function (){
var this$ = this;
if(cljs.core.empty_QMARK_(will_unmount)){
} else {
cljs.core._vreset_BANG_(rum.core.state(this$),rum.util.call_all(cljs.core._deref(rum.core.state(this$)),will_unmount));
}

return goog.object.set(this$,":rum/unmounted?",true);
}));

if(cljs.core.empty_QMARK_(child_context)){
} else {
goog.object.set(prototype,"getChildContext",(function (){
var this$ = this;
var state = cljs.core.deref(rum.core.state(this$));
return cljs.core.clj__GT_js(cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__38118_SHARP_){
return (p1__38118_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__38118_SHARP_.cljs$core$IFn$_invoke$arity$1(state) : p1__38118_SHARP_.call(null,state));
})),cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY,child_context));
}));
}

rum.core.extend_BANG_(prototype,class_props);

goog.object.set(ctor,"displayName",display_name);

rum.core.extend_BANG_(ctor,static_props);

return ctor;
});
rum.core.set_meta_BANG_ = (function rum$core$set_meta_BANG_(c){
var f = (function (){
var ctr = (c.cljs$core$IFn$_invoke$arity$0 ? c.cljs$core$IFn$_invoke$arity$0() : c.call(null));
return ctr.apply(ctr,arguments);
});
var x38123_38183 = f;
(x38123_38183.cljs$core$IMeta$ = cljs.core.PROTOCOL_SENTINEL);

(x38123_38183.cljs$core$IMeta$_meta$arity$1 = (function (_){
var ___$1 = this;
return cljs.core.meta((c.cljs$core$IFn$_invoke$arity$0 ? c.cljs$core$IFn$_invoke$arity$0() : c.call(null)));
}));


return f;
});
/**
 * Wraps component construction in a way so that Google Closure Compiler
 * can properly recognize and elide unused components. The extra `set-meta`
 * fn is needed so that the compiler can properly detect that all functions
 * are side effect free.
 */
rum.core.lazy_build = (function rum$core$lazy_build(ctor,render,mixins,display_name){
var bf = (function (){
return (ctor.cljs$core$IFn$_invoke$arity$3 ? ctor.cljs$core$IFn$_invoke$arity$3(render,mixins,display_name) : ctor.call(null,render,mixins,display_name));
});
var c = goog.functions.cacheReturnValue(bf);
return rum.core.set_meta_BANG_(c);
});
rum.core.build_ctor = (function rum$core$build_ctor(render,mixins,display_name){
var class$ = rum.core.build_class(render,mixins,display_name);
var key_fn = cljs.core.first(rum.util.collect(new cljs.core.Keyword(null,"key-fn","key-fn",-636154479),mixins));
var ctor = (((!((key_fn == null))))?(function() { 
var G__38184__delegate = function (args){
var props = ({":rum/initial-state": new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","args","rum/args",1315791754),args], null), "key": cljs.core.apply.cljs$core$IFn$_invoke$arity$2(key_fn,args)});
return React.createElement(class$,props);
};
var G__38184 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38185__i = 0, G__38185__a = new Array(arguments.length -  0);
while (G__38185__i < G__38185__a.length) {G__38185__a[G__38185__i] = arguments[G__38185__i + 0]; ++G__38185__i;}
  args = new cljs.core.IndexedSeq(G__38185__a,0,null);
} 
return G__38184__delegate.call(this,args);};
G__38184.cljs$lang$maxFixedArity = 0;
G__38184.cljs$lang$applyTo = (function (arglist__38186){
var args = cljs.core.seq(arglist__38186);
return G__38184__delegate(args);
});
G__38184.cljs$core$IFn$_invoke$arity$variadic = G__38184__delegate;
return G__38184;
})()
:(function() { 
var G__38187__delegate = function (args){
var props = ({":rum/initial-state": new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","args","rum/args",1315791754),args], null)});
return React.createElement(class$,props);
};
var G__38187 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38188__i = 0, G__38188__a = new Array(arguments.length -  0);
while (G__38188__i < G__38188__a.length) {G__38188__a[G__38188__i] = arguments[G__38188__i + 0]; ++G__38188__i;}
  args = new cljs.core.IndexedSeq(G__38188__a,0,null);
} 
return G__38187__delegate.call(this,args);};
G__38187.cljs$lang$maxFixedArity = 0;
G__38187.cljs$lang$applyTo = (function (arglist__38189){
var args = cljs.core.seq(arglist__38189);
return G__38187__delegate(args);
});
G__38187.cljs$core$IFn$_invoke$arity$variadic = G__38187__delegate;
return G__38187;
})()
);
return cljs.core.with_meta(ctor,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class$], null));
});
rum.core.memo_compare_props = (function rum$core$memo_compare_props(prev_props,next_props){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((prev_props[":rum/args"]),(next_props[":rum/args"]));
});
rum.core.react_memo = (function rum$core$react_memo(f){
var temp__5737__auto__ = React.memo;
if((temp__5737__auto__ == null)){
return f;
} else {
var memo = temp__5737__auto__;
return (memo.cljs$core$IFn$_invoke$arity$2 ? memo.cljs$core$IFn$_invoke$arity$2(f,rum.core.memo_compare_props) : memo.call(null,f,rum.core.memo_compare_props));
}
});
rum.core.build_defc = (function rum$core$build_defc(render_body,mixins,display_name){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mixins,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$], null))){
var class$ = (function (props){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_body,(props[":rum/args"]));
});
var _ = (class$["displayName"] = display_name);
var memo_class = rum.core.react_memo(class$);
var ctor = (function() { 
var G__38190__delegate = function (args){
return React.createElement(memo_class,({":rum/args": args}));
};
var G__38190 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38191__i = 0, G__38191__a = new Array(arguments.length -  0);
while (G__38191__i < G__38191__a.length) {G__38191__a[G__38191__i] = arguments[G__38191__i + 0]; ++G__38191__i;}
  args = new cljs.core.IndexedSeq(G__38191__a,0,null);
} 
return G__38190__delegate.call(this,args);};
G__38190.cljs$lang$maxFixedArity = 0;
G__38190.cljs$lang$applyTo = (function (arglist__38192){
var args = cljs.core.seq(arglist__38192);
return G__38190__delegate(args);
});
G__38190.cljs$core$IFn$_invoke$arity$variadic = G__38190__delegate;
return G__38190;
})()
;
return cljs.core.with_meta(ctor,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),memo_class], null));
} else {
if(cljs.core.empty_QMARK_(mixins)){
var class$ = (function (props){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_body,(props[":rum/args"]));
});
var _ = (class$["displayName"] = display_name);
var ctor = (function() { 
var G__38193__delegate = function (args){
return React.createElement(class$,({":rum/args": args}));
};
var G__38193 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38194__i = 0, G__38194__a = new Array(arguments.length -  0);
while (G__38194__i < G__38194__a.length) {G__38194__a[G__38194__i] = arguments[G__38194__i + 0]; ++G__38194__i;}
  args = new cljs.core.IndexedSeq(G__38194__a,0,null);
} 
return G__38193__delegate.call(this,args);};
G__38193.cljs$lang$maxFixedArity = 0;
G__38193.cljs$lang$applyTo = (function (arglist__38195){
var args = cljs.core.seq(arglist__38195);
return G__38193__delegate(args);
});
G__38193.cljs$core$IFn$_invoke$arity$variadic = G__38193__delegate;
return G__38193;
})()
;
return cljs.core.with_meta(ctor,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class$], null));
} else {
var render = (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_body,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)),state], null);
});
return rum.core.build_ctor(render,mixins,display_name);

}
}
});
rum.core.build_defcs = (function rum$core$build_defcs(render_body,mixins,display_name){
var render = (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.cljs$core$IFn$_invoke$arity$3(render_body,state,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)),state], null);
});
return rum.core.build_ctor(render,mixins,display_name);
});
rum.core.build_defcc = (function rum$core$build_defcc(render_body,mixins,display_name){
var render = (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.cljs$core$IFn$_invoke$arity$3(render_body,new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)),state], null);
});
return rum.core.build_ctor(render,mixins,display_name);
});
rum.core.request_render = (function rum$core$request_render(comp){
return comp.forceUpdate();
});
/**
 * Add element to the DOM tree. Idempotent. Subsequent mounts will just update element.
 */
rum.core.mount = (function rum$core$mount(element,node){
ReactDOM.render(element,node);

return null;
});
/**
 * Removes component from the DOM tree.
 */
rum.core.unmount = (function rum$core$unmount(node){
return ReactDOM.unmountComponentAtNode(node);
});
/**
 * Same as [[mount]] but must be called on DOM tree already rendered by a server via [[render-html]].
 */
rum.core.hydrate = (function rum$core$hydrate(element,node){
return ReactDOM.hydrate(element,node);
});
/**
 * Render `element` in a DOM `node` that is ouside of current DOM hierarchy.
 */
rum.core.portal = (function rum$core$portal(element,node){
return ReactDOM.createPortal(element,node);
});
rum.core.create_context = (function rum$core$create_context(default_value){
return React.createContext(default_value);
});
/**
 * Adds React key to element.
 * 
 * ```
 * (rum/defc label [text] [:div text])
 * 
 * (-> (label)
 *     (rum/with-key "abc")
 *     (rum/mount js/document.body))
 * ```
 */
rum.core.with_key = (function rum$core$with_key(element,key){
return React.cloneElement(element,({"key": key}),null);
});
/**
 * Adds React ref (string or callback) to element.
 * 
 * ```
 * (rum/defc label [text] [:div text])
 * 
 * (-> (label)
 *     (rum/with-ref "abc")
 *     (rum/mount js/document.body))
 * ```
 */
rum.core.with_ref = (function rum$core$with_ref(element,ref){
return React.cloneElement(element,({"ref": ref}),null);
});
/**
 * Usage of this function is discouraged. Use :ref callback instead.
 *   Given state, returns top-level DOM node of component. Call it during lifecycle callbacks. Can’t be called during render.
 */
rum.core.dom_node = (function rum$core$dom_node(state){
return ReactDOM.findDOMNode(new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state));
});
/**
 * DEPRECATED: Use :ref (fn [dom-or-nil]) callback instead. See rum issue #124
 *   Given state and ref handle, returns React component.
 */
rum.core.ref = (function rum$core$ref(state,key){
return ((new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state)["refs"])[cljs.core.name(key)]);
});
/**
 * DEPRECATED: Use :ref (fn [dom-or-nil]) callback instead. See rum issue #124
 *   Given state and ref handle, returns DOM node associated with ref.
 */
rum.core.ref_node = (function rum$core$ref_node(state,key){
return ReactDOM.findDOMNode(rum.core.ref(state,cljs.core.name(key)));
});
/**
 * Mixin. Will avoid re-render if none of component’s arguments have changed. Does equality check (`=`) on all arguments.
 *   
 * ```
 * (rum/defc label < rum/static
 *   [text]
 *   [:div text])
 *   
 * (rum/mount (label "abc") js/document.body)
 * 
 * ;; def != abc, will re-render
 * (rum/mount (label "def") js/document.body)
 * 
 * ;; def == def, won’t re-render
 * (rum/mount (label "def") js/document.body)
 * ```
 */
rum.core.static$ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"should-update","should-update",-1292781795),(function (old_state,new_state){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(old_state),new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(new_state));
})], null);
/**
 * Mixin constructor. Adds an atom to component’s state that can be used to keep stuff during component’s lifecycle. Component will be re-rendered if atom’s value changes. Atom is stored under user-provided key or under `:rum/local` by default.
 *   
 * ```
 * (rum/defcs counter < (rum/local 0 :cnt)
 *   [state label]
 *   (let [*cnt (:cnt state)]
 *     [:div {:on-click (fn [_] (swap! *cnt inc))}
 *       label @*cnt]))
 * 
 * (rum/mount (counter "Click count: "))
 * ```
 */
rum.core.local = (function rum$core$local(var_args){
var G__38125 = arguments.length;
switch (G__38125) {
case 1:
return rum.core.local.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rum.core.local.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rum.core.local.cljs$core$IFn$_invoke$arity$1 = (function (initial){
return rum.core.local.cljs$core$IFn$_invoke$arity$2(initial,new cljs.core.Keyword("rum","local","rum/local",-1497916586));
}));

(rum.core.local.cljs$core$IFn$_invoke$arity$2 = (function (initial,key){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"will-mount","will-mount",-434633071),(function (state){
var local_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(initial);
var component = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
cljs.core.add_watch(local_state,key,(function (_,___$1,p,n){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(p,n)){
return component.forceUpdate();
} else {
return null;
}
}));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,key,local_state);
})], null);
}));

(rum.core.local.cljs$lang$maxFixedArity = 2);

/**
 * Mixin. Works in conjunction with [[react]].
 *   
 * ```
 * (rum/defc comp < rum/reactive
 *   [*counter]
 *   [:div (rum/react counter)])
 * 
 * (def *counter (atom 0))
 * (rum/mount (comp *counter) js/document.body)
 * (swap! *counter inc) ;; will force comp to re-render
 * ```
 */
rum.core.reactive = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),(function (state,props){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142),cljs.core.random_uuid());
}),new cljs.core.Keyword(null,"wrap-render","wrap-render",1782000986),(function (render_fn){
return (function (state){
var _STAR_reactions_STAR__orig_val__38126 = rum.core._STAR_reactions_STAR_;
var _STAR_reactions_STAR__temp_val__38127 = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);
(rum.core._STAR_reactions_STAR_ = _STAR_reactions_STAR__temp_val__38127);

try{var comp = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
var old_reactions = new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325).cljs$core$IFn$_invoke$arity$2(state,cljs.core.PersistentHashSet.EMPTY);
var vec__38128 = (render_fn.cljs$core$IFn$_invoke$arity$1 ? render_fn.cljs$core$IFn$_invoke$arity$1(state) : render_fn.call(null,state));
var dom = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38128,(0),null);
var next_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38128,(1),null);
var new_reactions = cljs.core.deref(rum.core._STAR_reactions_STAR_);
var key = new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142).cljs$core$IFn$_invoke$arity$1(state);
var seq__38131_38197 = cljs.core.seq(old_reactions);
var chunk__38132_38198 = null;
var count__38133_38199 = (0);
var i__38134_38200 = (0);
while(true){
if((i__38134_38200 < count__38133_38199)){
var ref_38201 = chunk__38132_38198.cljs$core$IIndexed$_nth$arity$2(null,i__38134_38200);
if(cljs.core.contains_QMARK_(new_reactions,ref_38201)){
} else {
cljs.core.remove_watch(ref_38201,key);
}


var G__38202 = seq__38131_38197;
var G__38203 = chunk__38132_38198;
var G__38204 = count__38133_38199;
var G__38205 = (i__38134_38200 + (1));
seq__38131_38197 = G__38202;
chunk__38132_38198 = G__38203;
count__38133_38199 = G__38204;
i__38134_38200 = G__38205;
continue;
} else {
var temp__5735__auto___38206 = cljs.core.seq(seq__38131_38197);
if(temp__5735__auto___38206){
var seq__38131_38207__$1 = temp__5735__auto___38206;
if(cljs.core.chunked_seq_QMARK_(seq__38131_38207__$1)){
var c__4556__auto___38208 = cljs.core.chunk_first(seq__38131_38207__$1);
var G__38209 = cljs.core.chunk_rest(seq__38131_38207__$1);
var G__38210 = c__4556__auto___38208;
var G__38211 = cljs.core.count(c__4556__auto___38208);
var G__38212 = (0);
seq__38131_38197 = G__38209;
chunk__38132_38198 = G__38210;
count__38133_38199 = G__38211;
i__38134_38200 = G__38212;
continue;
} else {
var ref_38213 = cljs.core.first(seq__38131_38207__$1);
if(cljs.core.contains_QMARK_(new_reactions,ref_38213)){
} else {
cljs.core.remove_watch(ref_38213,key);
}


var G__38214 = cljs.core.next(seq__38131_38207__$1);
var G__38215 = null;
var G__38216 = (0);
var G__38217 = (0);
seq__38131_38197 = G__38214;
chunk__38132_38198 = G__38215;
count__38133_38199 = G__38216;
i__38134_38200 = G__38217;
continue;
}
} else {
}
}
break;
}

var seq__38135_38218 = cljs.core.seq(new_reactions);
var chunk__38136_38219 = null;
var count__38137_38220 = (0);
var i__38138_38221 = (0);
while(true){
if((i__38138_38221 < count__38137_38220)){
var ref_38222 = chunk__38136_38219.cljs$core$IIndexed$_nth$arity$2(null,i__38138_38221);
if(cljs.core.contains_QMARK_(old_reactions,ref_38222)){
} else {
cljs.core.add_watch(ref_38222,key,((function (seq__38135_38218,chunk__38136_38219,count__38137_38220,i__38138_38221,ref_38222,comp,old_reactions,vec__38128,dom,next_state,new_reactions,key,_STAR_reactions_STAR__orig_val__38126,_STAR_reactions_STAR__temp_val__38127){
return (function (_,___$1,p,n){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(p,n)){
return comp.forceUpdate();
} else {
return null;
}
});})(seq__38135_38218,chunk__38136_38219,count__38137_38220,i__38138_38221,ref_38222,comp,old_reactions,vec__38128,dom,next_state,new_reactions,key,_STAR_reactions_STAR__orig_val__38126,_STAR_reactions_STAR__temp_val__38127))
);
}


var G__38223 = seq__38135_38218;
var G__38224 = chunk__38136_38219;
var G__38225 = count__38137_38220;
var G__38226 = (i__38138_38221 + (1));
seq__38135_38218 = G__38223;
chunk__38136_38219 = G__38224;
count__38137_38220 = G__38225;
i__38138_38221 = G__38226;
continue;
} else {
var temp__5735__auto___38227 = cljs.core.seq(seq__38135_38218);
if(temp__5735__auto___38227){
var seq__38135_38228__$1 = temp__5735__auto___38227;
if(cljs.core.chunked_seq_QMARK_(seq__38135_38228__$1)){
var c__4556__auto___38229 = cljs.core.chunk_first(seq__38135_38228__$1);
var G__38230 = cljs.core.chunk_rest(seq__38135_38228__$1);
var G__38231 = c__4556__auto___38229;
var G__38232 = cljs.core.count(c__4556__auto___38229);
var G__38233 = (0);
seq__38135_38218 = G__38230;
chunk__38136_38219 = G__38231;
count__38137_38220 = G__38232;
i__38138_38221 = G__38233;
continue;
} else {
var ref_38234 = cljs.core.first(seq__38135_38228__$1);
if(cljs.core.contains_QMARK_(old_reactions,ref_38234)){
} else {
cljs.core.add_watch(ref_38234,key,((function (seq__38135_38218,chunk__38136_38219,count__38137_38220,i__38138_38221,ref_38234,seq__38135_38228__$1,temp__5735__auto___38227,comp,old_reactions,vec__38128,dom,next_state,new_reactions,key,_STAR_reactions_STAR__orig_val__38126,_STAR_reactions_STAR__temp_val__38127){
return (function (_,___$1,p,n){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(p,n)){
return comp.forceUpdate();
} else {
return null;
}
});})(seq__38135_38218,chunk__38136_38219,count__38137_38220,i__38138_38221,ref_38234,seq__38135_38228__$1,temp__5735__auto___38227,comp,old_reactions,vec__38128,dom,next_state,new_reactions,key,_STAR_reactions_STAR__orig_val__38126,_STAR_reactions_STAR__temp_val__38127))
);
}


var G__38235 = cljs.core.next(seq__38135_38228__$1);
var G__38236 = null;
var G__38237 = (0);
var G__38238 = (0);
seq__38135_38218 = G__38235;
chunk__38136_38219 = G__38236;
count__38137_38220 = G__38237;
i__38138_38221 = G__38238;
continue;
}
} else {
}
}
break;
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dom,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(next_state,new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325),new_reactions)], null);
}finally {(rum.core._STAR_reactions_STAR_ = _STAR_reactions_STAR__orig_val__38126);
}});
}),new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (state){
var key_38239 = new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142).cljs$core$IFn$_invoke$arity$1(state);
var seq__38139_38240 = cljs.core.seq(new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325).cljs$core$IFn$_invoke$arity$1(state));
var chunk__38140_38241 = null;
var count__38141_38242 = (0);
var i__38142_38243 = (0);
while(true){
if((i__38142_38243 < count__38141_38242)){
var ref_38244 = chunk__38140_38241.cljs$core$IIndexed$_nth$arity$2(null,i__38142_38243);
cljs.core.remove_watch(ref_38244,key_38239);


var G__38245 = seq__38139_38240;
var G__38246 = chunk__38140_38241;
var G__38247 = count__38141_38242;
var G__38248 = (i__38142_38243 + (1));
seq__38139_38240 = G__38245;
chunk__38140_38241 = G__38246;
count__38141_38242 = G__38247;
i__38142_38243 = G__38248;
continue;
} else {
var temp__5735__auto___38249 = cljs.core.seq(seq__38139_38240);
if(temp__5735__auto___38249){
var seq__38139_38250__$1 = temp__5735__auto___38249;
if(cljs.core.chunked_seq_QMARK_(seq__38139_38250__$1)){
var c__4556__auto___38251 = cljs.core.chunk_first(seq__38139_38250__$1);
var G__38252 = cljs.core.chunk_rest(seq__38139_38250__$1);
var G__38253 = c__4556__auto___38251;
var G__38254 = cljs.core.count(c__4556__auto___38251);
var G__38255 = (0);
seq__38139_38240 = G__38252;
chunk__38140_38241 = G__38253;
count__38141_38242 = G__38254;
i__38142_38243 = G__38255;
continue;
} else {
var ref_38256 = cljs.core.first(seq__38139_38250__$1);
cljs.core.remove_watch(ref_38256,key_38239);


var G__38257 = cljs.core.next(seq__38139_38250__$1);
var G__38258 = null;
var G__38259 = (0);
var G__38260 = (0);
seq__38139_38240 = G__38257;
chunk__38140_38241 = G__38258;
count__38141_38242 = G__38259;
i__38142_38243 = G__38260;
continue;
}
} else {
}
}
break;
}

return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142)], 0));
})], null);
/**
 * Works in conjunction with [[reactive]] mixin. Use this function instead of `deref` inside render, and your component will subscribe to changes happening to the derefed atom.
 */
rum.core.react = (function rum$core$react(ref){
if(cljs.core.truth_(rum.core._STAR_reactions_STAR_)){
} else {
throw (new Error(["Assert failed: ","rum.core/react is only supported in conjunction with rum.core/reactive","\n","*reactions*"].join('')));
}

cljs.core._vreset_BANG_(rum.core._STAR_reactions_STAR_,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core._deref(rum.core._STAR_reactions_STAR_),ref));

return cljs.core.deref(ref);
});
/**
 * Use this to create “chains” and acyclic graphs of dependent atoms.
 * 
 *           [[derived-atom]] will:
 *        
 *           - Take N “source” refs.
 *           - Set up a watch on each of them.
 *           - Create “sink” atom.
 *           - When any of source refs changes:
 *              - re-run function `f`, passing N dereferenced values of source refs.
 *              - `reset!` result of `f` to the sink atom.
 *           - Return sink atom.
 * 
 *           Example:
 * 
 *           ```
 *           (def *a (atom 0))
 *           (def *b (atom 1))
 *           (def *x (derived-atom [*a *b] ::key
 *                     (fn [a b]
 *                       (str a ":" b))))
 *           
 *           (type *x)  ;; => clojure.lang.Atom
 *           (deref *x) ;; => "0:1"
 *           
 *           (swap! *a inc)
 *           (deref *x) ;; => "1:1"
 *           
 *           (reset! *b 7)
 *           (deref *x) ;; => "1:7"
 *           ```
 * 
 *           Arguments:
 *        
 *           - `refs` - sequence of source refs,
 *           - `key`  - unique key to register watcher, same as in `clojure.core/add-watch`,
 *           - `f`    - function that must accept N arguments (same as number of source refs) and return a value to be written to the sink ref. Note: `f` will be called with already dereferenced values,
 *           - `opts` - optional. Map of:
 *             - `:ref` - use this as sink ref. By default creates new atom,
 *             - `:check-equals?` - Defaults to `true`. If equality check should be run on each source update: `(= @sink (f new-vals))`. When result of recalculating `f` equals to the old value, `reset!` won’t be called. Set to `false` if checking for equality can be expensive.
 */
rum.core.derived_atom = rum.derived_atom.derived_atom;
/**
 * Given atom with deep nested value and path inside it, creates an atom-like structure
 * that can be used separately from main atom, but will sync changes both ways:
 *   
 * ```
 * (def db (atom { :users { "Ivan" { :age 30 }}}))
 * 
 * (def ivan (rum/cursor db [:users "Ivan"]))
 * (deref ivan) ;; => { :age 30 }
 * 
 * (swap! ivan update :age inc) ;; => { :age 31 }
 * (deref db) ;; => { :users { "Ivan" { :age 31 }}}
 * 
 * (swap! db update-in [:users "Ivan" :age] inc)
 * ;; => { :users { "Ivan" { :age 32 }}}
 * 
 * (deref ivan) ;; => { :age 32 }
 * ```
 *   
 * Returned value supports `deref`, `swap!`, `reset!`, watches and metadata.
 *   
 * The only supported option is `:meta`
 */
rum.core.cursor_in = (function rum$core$cursor_in(var_args){
var args__4742__auto__ = [];
var len__4736__auto___38261 = arguments.length;
var i__4737__auto___38262 = (0);
while(true){
if((i__4737__auto___38262 < len__4736__auto___38261)){
args__4742__auto__.push((arguments[i__4737__auto___38262]));

var G__38263 = (i__4737__auto___38262 + (1));
i__4737__auto___38262 = G__38263;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic = (function (ref,path,p__38146){
var map__38147 = p__38146;
var map__38147__$1 = (((((!((map__38147 == null))))?(((((map__38147.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38147.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38147):map__38147);
var options = map__38147__$1;
if((ref instanceof rum.cursor.Cursor)){
return (new rum.cursor.Cursor(ref.ref,cljs.core.into.cljs$core$IFn$_invoke$arity$2(ref.path,path),new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(options)));
} else {
return (new rum.cursor.Cursor(ref,path,new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(options)));
}
}));

(rum.core.cursor_in.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(rum.core.cursor_in.cljs$lang$applyTo = (function (seq38143){
var G__38144 = cljs.core.first(seq38143);
var seq38143__$1 = cljs.core.next(seq38143);
var G__38145 = cljs.core.first(seq38143__$1);
var seq38143__$2 = cljs.core.next(seq38143__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38144,G__38145,seq38143__$2);
}));

/**
 * Same as [[cursor-in]] but accepts single key instead of path vector.
 */
rum.core.cursor = (function rum$core$cursor(var_args){
var args__4742__auto__ = [];
var len__4736__auto___38264 = arguments.length;
var i__4737__auto___38265 = (0);
while(true){
if((i__4737__auto___38265 < len__4736__auto___38264)){
args__4742__auto__.push((arguments[i__4737__auto___38265]));

var G__38266 = (i__4737__auto___38265 + (1));
i__4737__auto___38265 = G__38266;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return rum.core.cursor.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(rum.core.cursor.cljs$core$IFn$_invoke$arity$variadic = (function (ref,key,options){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(rum.core.cursor_in,ref,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null),options);
}));

(rum.core.cursor.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(rum.core.cursor.cljs$lang$applyTo = (function (seq38149){
var G__38150 = cljs.core.first(seq38149);
var seq38149__$1 = cljs.core.next(seq38149);
var G__38151 = cljs.core.first(seq38149__$1);
var seq38149__$2 = cljs.core.next(seq38149__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38150,G__38151,seq38149__$2);
}));

/**
 * Takes initial value or value returning fn and returns a tuple of [value set-value!],
 *   where `value` is current state value and `set-value!` is a function that schedules re-render.
 * 
 *   (let [[value set-state!] (rum/use-state 0)]
 *  [:button {:on-click #(set-state! (inc value))}
 *    value])
 */
rum.core.use_state = (function rum$core$use_state(value_or_fn){
return React.useState(value_or_fn);
});
/**
 * Takes reducing function and initial state value.
 *   Returns a tuple of [value dispatch!], where `value` is current state value and `dispatch` is a function that schedules re-render.
 * 
 *   (defmulti value-reducer (fn [value event] event))
 * 
 *   (defmethod value-reducer :inc [value _]
 *  (inc value))
 * 
 *   (let [[value dispatch!] (rum/use-reducer value-reducer 0)]
 *  [:button {:on-click #(dispatch! :inc)}
 *    value])
 * 
 *   Read more at https://reactjs.org/docs/hooks-reference.html#usereducer
 */
rum.core.use_reducer = (function rum$core$use_reducer(reducer_fn,initial_value){
return React.useReducer((function (p1__38152_SHARP_,p2__38153_SHARP_){
return (reducer_fn.cljs$core$IFn$_invoke$arity$2 ? reducer_fn.cljs$core$IFn$_invoke$arity$2(p1__38152_SHARP_,p2__38153_SHARP_) : reducer_fn.call(null,p1__38152_SHARP_,p2__38153_SHARP_));
}),initial_value,cljs.core.identity);
});
/**
 * Takes setup-fn that executes either on the first render or after every update.
 *   The function may return cleanup-fn to cleanup the effect, either before unmount or before every next update.
 *   Calling behavior is controlled by deps argument.
 * 
 *   (rum/use-effect!
 *  (fn []
 *    (.addEventListener js/window "load" handler)
 *    #(.removeEventListener js/window "load" handler))
 *  []) ;; empty deps collection instructs React to run setup-fn only once on initial render
 *      ;; and cleanup-fn only once before unmounting
 * 
 *   Read more at https://reactjs.org/docs/hooks-effect.html
 */
rum.core.use_effect_BANG_ = (function rum$core$use_effect_BANG_(var_args){
var G__38155 = arguments.length;
switch (G__38155) {
case 1:
return rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (setup_fn){
return React.useEffect((function (){
var or__4126__auto__ = (setup_fn.cljs$core$IFn$_invoke$arity$0 ? setup_fn.cljs$core$IFn$_invoke$arity$0() : setup_fn.call(null));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return undefined;
}
}));
}));

(rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (setup_fn,deps){
return React.useEffect((function (){
var or__4126__auto__ = (setup_fn.cljs$core$IFn$_invoke$arity$0 ? setup_fn.cljs$core$IFn$_invoke$arity$0() : setup_fn.call(null));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return undefined;
}
}),((cljs.core.array_QMARK_(deps))?deps:cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(deps)));
}));

(rum.core.use_effect_BANG_.cljs$lang$maxFixedArity = 2);

/**
 * Takes callback function and returns memoized variant, memoization is done based on provided deps collection.
 * 
 *   (rum/defc button < rum/static
 *  [{:keys [on-click]} text]
 *  [:button {:on-click on-click}
 *    text])
 * 
 *   (rum/defc app [v]
 *  (let [on-click (rum/use-callback #(do-stuff v) [v])]
 *    ;; because on-click callback is memoized here based on v argument
 *    ;; the callback won't be re-created on every render, unless v changes
 *    ;; which means that underlying `button` component won't re-render wastefully
 *    [button {:on-click on-click}
 *      "press me"]))
 * 
 *   Read more at https://reactjs.org/docs/hooks-reference.html#usecallback
 */
rum.core.use_callback = (function rum$core$use_callback(var_args){
var G__38157 = arguments.length;
switch (G__38157) {
case 1:
return rum.core.use_callback.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rum.core.use_callback.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rum.core.use_callback.cljs$core$IFn$_invoke$arity$1 = (function (callback){
return React.useCallback(callback);
}));

(rum.core.use_callback.cljs$core$IFn$_invoke$arity$2 = (function (callback,deps){
return React.useCallback(callback,((cljs.core.array_QMARK_(deps))?deps:cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(deps)));
}));

(rum.core.use_callback.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function, memoizes it based on provided deps collection and executes immediately returning a result.
 *   Read more at https://reactjs.org/docs/hooks-reference.html#usememo
 */
rum.core.use_memo = (function rum$core$use_memo(var_args){
var G__38159 = arguments.length;
switch (G__38159) {
case 1:
return rum.core.use_memo.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rum.core.use_memo.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rum.core.use_memo.cljs$core$IFn$_invoke$arity$1 = (function (f){
return React.useMemo(f);
}));

(rum.core.use_memo.cljs$core$IFn$_invoke$arity$2 = (function (f,deps){
return React.useMemo(f,((cljs.core.array_QMARK_(deps))?deps:cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(deps)));
}));

(rum.core.use_memo.cljs$lang$maxFixedArity = 2);

/**
 * Takes a value and puts it into a mutable container which is persisted for the full lifetime of the component.
 *   https://reactjs.org/docs/hooks-reference.html#useref
 */
rum.core.use_ref = (function rum$core$use_ref(initial_value){
return React.useRef(initial_value);
});
rum.core.create_ref = (function rum$core$create_ref(){
return React.createRef();
});
/**
 * Takes a ref returned from use-ref and returns its current value.
 */
rum.core.deref = (function rum$core$deref(ref){
return ref.current;
});
rum.core.set_ref_BANG_ = (function rum$core$set_ref_BANG_(ref,value){
return (ref.current = value);
});
/**
 * Main server-side rendering method. Given component, returns HTML string with static markup of that component.
 *   Serve that string to the browser and [[hydrate]] same Rum component over it. React will be able to reuse already existing DOM and will initialize much faster.
 *   No opts are supported at the moment.
 */
rum.core.render_html = (function rum$core$render_html(var_args){
var G__38161 = arguments.length;
switch (G__38161) {
case 1:
return rum.core.render_html.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rum.core.render_html.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rum.core.render_html.cljs$core$IFn$_invoke$arity$1 = (function (element){
return rum.core.render_html.cljs$core$IFn$_invoke$arity$2(element,null);
}));

(rum.core.render_html.cljs$core$IFn$_invoke$arity$2 = (function (element,opts){
if((!((cljs.core._STAR_target_STAR_ === "nodejs")))){
return ReactDOMServer.renderToString(element);
} else {
var react_dom_server = require("react-dom/server");
return react_dom_server.renderToString(element);
}
}));

(rum.core.render_html.cljs$lang$maxFixedArity = 2);

/**
 * Same as [[render-html]] but returned string has nothing React-specific.
 *   This allows Rum to be used as traditional server-side templating engine.
 */
rum.core.render_static_markup = (function rum$core$render_static_markup(src){
if((!((cljs.core._STAR_target_STAR_ === "nodejs")))){
return ReactDOMServer.renderToStaticMarkup(src);
} else {
var react_dom_server = require("react-dom/server");
return react_dom_server.renderToStaticMarkup(src);
}
});
rum.core.adapt_class_helper = (function rum$core$adapt_class_helper(type,attrs,children){
var args = [type,attrs].concat(children);
return React.createElement.apply(React,args);
});

//# sourceMappingURL=rum.core.js.map
