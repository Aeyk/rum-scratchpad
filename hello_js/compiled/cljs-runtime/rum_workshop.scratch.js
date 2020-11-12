goog.provide('rum_workshop.scratch');
cljs.core.enable_console_print_BANG_();
rum_workshop.scratch.enter_key_code = (13);
rum_workshop.scratch.my_name = cljs.core.atom.cljs$core$IFn$_invoke$arity$1("");
rum_workshop.scratch.db = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"input-text","input-text",-1336297114),"",new cljs.core.Keyword(null,"todo-list","todo-list",653205378),cljs.core.PersistentVector.EMPTY], null));
rum_workshop.scratch.input_text = rum.core.cursor_in(rum_workshop.scratch.db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input-text","input-text",-1336297114)], null));
rum_workshop.scratch.todo_list = rum.core.cursor_in(rum_workshop.scratch.db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"todo-list","todo-list",653205378)], null));
rum_workshop.scratch.root_element = document.getElementById("app");
rum_workshop.scratch.counts = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
cljs.core.add_watch(rum_workshop.scratch.counts,new cljs.core.Keyword("rum-workshop.scratch","key","rum-workshop.scratch/key",-1452633037),(function (_,___$1,___$2,___$3){
return (rum_workshop.scratch.refresh.cljs$core$IFn$_invoke$arity$0 ? rum_workshop.scratch.refresh.cljs$core$IFn$_invoke$arity$0() : rum_workshop.scratch.refresh.call(null));
}));
rum_workshop.scratch.clicker_counter = rum.core.build_defc((function (){
return React.createElement("div",({"onClick": (function (e){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(rum_workshop.scratch.counts,cljs.core.inc);
}), "className": "clicker"}),sablono.interpreter.interpret(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.deref(rum_workshop.scratch.counts)], 0))));
}),null,"clicker-counter");
rum_workshop.scratch.input_text_area = rum.core.build_defc((function (){
return React.createElement("div",null,sablono.interpreter.create_element("input",({"value": rum.core.react(rum_workshop.scratch.input_text), "onChange": (function (e){
return cljs.core.reset_BANG_(rum_workshop.scratch.input_text,e.target.value);
}), "onKeyDown": (function (e){
console.log(e.keyCode,cljs.core.deref(rum_workshop.scratch.input_text));

if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e.keyCode,rum_workshop.scratch.enter_key_code)) && (cljs.core.seq(cljs.core.deref(rum_workshop.scratch.input_text))))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(rum_workshop.scratch.todo_list,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"done","done",-889844188),false,new cljs.core.Keyword(null,"text","text",-1790561697),cljs.core.deref(rum_workshop.scratch.input_text)], null));

return cljs.core.reset_BANG_(rum_workshop.scratch.input_text,"");
} else {
return null;
}
})})),React.createElement("button",({"onMouseDown": (function (e){
e.preventDefault();

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(rum_workshop.scratch.todo_list,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),cljs.core.deref(rum_workshop.scratch.input_text)], null));

return cljs.core.reset_BANG_(rum_workshop.scratch.input_text,"");
})}),"Submit"));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"input-text-area");
rum_workshop.scratch.todo_list_items = rum.core.build_defc((function (){
return React.createElement("ul",null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function rum_workshop$scratch$iter__28663(s__28664){
return (new cljs.core.LazySeq(null,(function (){
var s__28664__$1 = s__28664;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__28664__$1);
if(temp__5735__auto__){
var s__28664__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28664__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__28664__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__28666 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__28665 = (0);
while(true){
if((i__28665 < size__4528__auto__)){
var todo = cljs.core._nth(c__4527__auto__,i__28665);
cljs.core.chunk_append(b__28666,React.createElement("li",({"key": cljs.core.gensym.cljs$core$IFn$_invoke$arity$0(), "onMouseDown": ((function (i__28665,todo,c__4527__auto__,size__4528__auto__,b__28666,s__28664__$2,temp__5735__auto__){
return (function (e){
return null;
});})(i__28665,todo,c__4527__auto__,size__4528__auto__,b__28666,s__28664__$2,temp__5735__auto__))
}),sablono.interpreter.interpret(todo)));

var G__28668 = (i__28665 + (1));
i__28665 = G__28668;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28666),rum_workshop$scratch$iter__28663(cljs.core.chunk_rest(s__28664__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28666),null);
}
} else {
var todo = cljs.core.first(s__28664__$2);
return cljs.core.cons(React.createElement("li",({"key": cljs.core.gensym.cljs$core$IFn$_invoke$arity$0(), "onMouseDown": ((function (todo,s__28664__$2,temp__5735__auto__){
return (function (e){
return null;
});})(todo,s__28664__$2,temp__5735__auto__))
}),sablono.interpreter.interpret(todo)),rum_workshop$scratch$iter__28663(cljs.core.rest(s__28664__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.deref(rum_workshop.scratch.todo_list));
})()));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"todo-list-items");
rum_workshop.scratch.state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
rum_workshop.scratch.app_STAR_ = rum.core.build_defc((function (){
var attrs28667 = (rum_workshop.scratch.input_text_area.cljs$core$IFn$_invoke$arity$0 ? rum_workshop.scratch.input_text_area.cljs$core$IFn$_invoke$arity$0() : rum_workshop.scratch.input_text_area.call(null));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs28667))?sablono.interpreter.attributes(attrs28667):null),((cljs.core.map_QMARK_(attrs28667))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret((rum_workshop.scratch.todo_list_items.cljs$core$IFn$_invoke$arity$0 ? rum_workshop.scratch.todo_list_items.cljs$core$IFn$_invoke$arity$0() : rum_workshop.scratch.todo_list_items.call(null))),React.createElement("p",({"value": rum.core.react(rum_workshop.scratch.input_text)}),sablono.interpreter.interpret(cljs.core.deref(rum_workshop.scratch.input_text)))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs28667),sablono.interpreter.interpret((rum_workshop.scratch.todo_list_items.cljs$core$IFn$_invoke$arity$0 ? rum_workshop.scratch.todo_list_items.cljs$core$IFn$_invoke$arity$0() : rum_workshop.scratch.todo_list_items.call(null))),React.createElement("p",({"value": rum.core.react(rum_workshop.scratch.input_text)}),sablono.interpreter.interpret(cljs.core.deref(rum_workshop.scratch.input_text)))], null)));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"app*");
rum_workshop.scratch.refresh = (function rum_workshop$scratch$refresh(){
return rum.core.mount((rum_workshop.scratch.app_STAR_.cljs$core$IFn$_invoke$arity$0 ? rum_workshop.scratch.app_STAR_.cljs$core$IFn$_invoke$arity$0() : rum_workshop.scratch.app_STAR_.call(null)),rum_workshop.scratch.root_element);
});
rum_workshop.scratch.init = (function rum_workshop$scratch$init(){
return rum_workshop.scratch.refresh();
});
goog.exportSymbol('rum_workshop.scratch.init', rum_workshop.scratch.init);

//# sourceMappingURL=rum_workshop.scratch.js.map
