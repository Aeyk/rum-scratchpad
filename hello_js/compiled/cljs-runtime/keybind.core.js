goog.provide('keybind.core');
keybind.core.MODS = cljs.core.PersistentHashMap.fromArrays(["option","M","S","super","win","C","shift","alt","control","cmd","meta","ctrl","defmod"],[new cljs.core.Keyword(null,"alt","alt",-3214426),new cljs.core.Keyword(null,"alt","alt",-3214426),new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.Keyword(null,"ctrl","ctrl",361402094),new cljs.core.Keyword(null,"shift","shift",997140064),new cljs.core.Keyword(null,"alt","alt",-3214426),new cljs.core.Keyword(null,"ctrl","ctrl",361402094),new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.Keyword(null,"ctrl","ctrl",361402094),(((navigator.userAgent.indexOf("Mac OS X") < (0)))?new cljs.core.Keyword(null,"ctrl","ctrl",361402094):new cljs.core.Keyword(null,"meta","meta",1499536964))]);
keybind.core.KEYATTRS = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"shift","shift",997140064),"shiftKey",new cljs.core.Keyword(null,"ctrl","ctrl",361402094),"ctrlKey",new cljs.core.Keyword(null,"alt","alt",-3214426),"altKey",new cljs.core.Keyword(null,"meta","meta",1499536964),"metaKey",new cljs.core.Keyword(null,"code","code",1586293142),"keyCode"], null);
keybind.core.DEFCHORD = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"shift","shift",997140064),false,new cljs.core.Keyword(null,"ctrl","ctrl",361402094),false,new cljs.core.Keyword(null,"alt","alt",-3214426),false,new cljs.core.Keyword(null,"meta","meta",1499536964),false], null);
keybind.core.KEYS = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentHashMap.fromArrays(["]","'","space","tab","=","`","right","*","kpplus","up","delete","caps","/","plus","return","-","ins","backspace","minus","capslock","escape","del","pgdown","pageup","pause","down","home",".",";",",","insert","pagedown","[","pgup","kpminus","\\","enter","+","end","esc","left"],[(221),(222),(32),(9),(187),(192),(39),(106),(107),(38),(46),(20),(191),(107),(13),(189),(45),(8),(189),(20),(27),(46),(34),(33),(19),(40),(36),(190),(186),(188),(45),(34),(219),(33),(109),(220),(13),(107),(35),(27),(37)]),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4529__auto__ = (function keybind$core$iter__37017(s__37018){
return (new cljs.core.LazySeq(null,(function (){
var s__37018__$1 = s__37018;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__37018__$1);
if(temp__5735__auto__){
var s__37018__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__37018__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__37018__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__37020 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__37019 = (0);
while(true){
if((i__37019 < size__4528__auto__)){
var i = cljs.core._nth(c__4527__auto__,i__37019);
cljs.core.chunk_append(b__37020,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["num-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''),((95) + i)], null));

var G__37233 = (i__37019 + (1));
i__37019 = G__37233;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37020),keybind$core$iter__37017(cljs.core.chunk_rest(s__37018__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37020),null);
}
} else {
var i = cljs.core.first(s__37018__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["num-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''),((95) + i)], null),keybind$core$iter__37017(cljs.core.rest(s__37018__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((10)));
})()),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4529__auto__ = (function keybind$core$iter__37029(s__37030){
return (new cljs.core.LazySeq(null,(function (){
var s__37030__$1 = s__37030;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__37030__$1);
if(temp__5735__auto__){
var s__37030__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__37030__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__37030__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__37032 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__37031 = (0);
while(true){
if((i__37031 < size__4528__auto__)){
var i = cljs.core._nth(c__4527__auto__,i__37031);
cljs.core.chunk_append(b__37032,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.str.cljs$core$IFn$_invoke$arity$1(i),((48) + i)], null));

var G__37270 = (i__37031 + (1));
i__37031 = G__37270;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37032),keybind$core$iter__37029(cljs.core.chunk_rest(s__37030__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37032),null);
}
} else {
var i = cljs.core.first(s__37030__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.str.cljs$core$IFn$_invoke$arity$1(i),((48) + i)], null),keybind$core$iter__37029(cljs.core.rest(s__37030__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((10)));
})()),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4529__auto__ = (function keybind$core$iter__37033(s__37034){
return (new cljs.core.LazySeq(null,(function (){
var s__37034__$1 = s__37034;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__37034__$1);
if(temp__5735__auto__){
var s__37034__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__37034__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__37034__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__37036 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__37035 = (0);
while(true){
if((i__37035 < size__4528__auto__)){
var i = cljs.core._nth(c__4527__auto__,i__37035);
cljs.core.chunk_append(b__37036,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["f",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''),((111) + i)], null));

var G__37273 = (i__37035 + (1));
i__37035 = G__37273;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37036),keybind$core$iter__37033(cljs.core.chunk_rest(s__37034__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37036),null);
}
} else {
var i = cljs.core.first(s__37034__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["f",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''),((111) + i)], null),keybind$core$iter__37033(cljs.core.rest(s__37034__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(25)));
})()),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4529__auto__ = (function keybind$core$iter__37043(s__37044){
return (new cljs.core.LazySeq(null,(function (){
var s__37044__$1 = s__37044;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__37044__$1);
if(temp__5735__auto__){
var s__37044__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__37044__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__37044__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__37046 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__37045 = (0);
while(true){
if((i__37045 < size__4528__auto__)){
var i = cljs.core._nth(c__4527__auto__,i__37045);
cljs.core.chunk_append(b__37046,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [String.fromCharCode(i).toLowerCase(),i], null));

var G__37280 = (i__37045 + (1));
i__37045 = G__37280;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37046),keybind$core$iter__37043(cljs.core.chunk_rest(s__37044__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37046),null);
}
} else {
var i = cljs.core.first(s__37044__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [String.fromCharCode(i).toLowerCase(),i], null),keybind$core$iter__37043(cljs.core.rest(s__37044__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((65),(91)));
})())], 0));
keybind.core.KNOWN_KEYS = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4529__auto__ = (function keybind$core$iter__37052(s__37053){
return (new cljs.core.LazySeq(null,(function (){
var s__37053__$1 = s__37053;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__37053__$1);
if(temp__5735__auto__){
var s__37053__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__37053__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__37053__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__37055 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__37054 = (0);
while(true){
if((i__37054 < size__4528__auto__)){
var vec__37063 = cljs.core._nth(c__4527__auto__,i__37054);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37063,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37063,(1),null);
cljs.core.chunk_append(b__37055,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,k], null));

var G__37287 = (i__37054 + (1));
i__37054 = G__37287;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37055),keybind$core$iter__37052(cljs.core.chunk_rest(s__37053__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37055),null);
}
} else {
var vec__37072 = cljs.core.first(s__37053__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37072,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37072,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,k], null),keybind$core$iter__37052(cljs.core.rest(s__37053__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(keybind.core.KEYS);
})());
if((typeof keybind !== 'undefined') && (typeof keybind.core !== 'undefined') && (typeof keybind.core.BINDINGS !== 'undefined')){
} else {
keybind.core.BINDINGS = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof keybind !== 'undefined') && (typeof keybind.core !== 'undefined') && (typeof keybind.core.PRESSED !== 'undefined')){
} else {
keybind.core.PRESSED = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof keybind !== 'undefined') && (typeof keybind.core !== 'undefined') && (typeof keybind.core.ENABLED_QMARK_ !== 'undefined')){
} else {
keybind.core.ENABLED_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
}
keybind.core.button__GT_code = (function keybind$core$button__GT_code(button){
var temp__5733__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(keybind.core.KEYS,button);
if(cljs.core.truth_(temp__5733__auto__)){
var code = temp__5733__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [code,null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.cljs$core$IFn$_invoke$arity$2(keybind.core.KEYS,button.toLowerCase()),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"shift","shift",997140064),true], null)], null);
}
});
keybind.core.parse_chord = (function keybind$core$parse_chord(keystring){
var bits = keystring.split(/-(?!$)/);
var button = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(bits,(cljs.core.count(bits) - (1)));
var vec__37084 = keybind.core.button__GT_code(button);
var code = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37084,(0),null);
var mods = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37084,(1),null);
if(cljs.core.truth_(code)){
} else {
throw (new Error(["Unknown key '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(button),"' in keystring '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(keystring),"'"].join('')));
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (mods__$1,mod){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(mods__$1,mod,true);
}),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keybind.core.DEFCHORD,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"code","code",1586293142),code], null),mods], 0)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__37083_SHARP_){
var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(keybind.core.MODS,p1__37083_SHARP_);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
throw (new Error(["Unknown modifier '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.mod),"' in keystring '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(keystring),"'"].join('')));
}
}),cljs.core.drop_last.cljs$core$IFn$_invoke$arity$1(bits)));
});
keybind.core.parse = (function keybind$core$parse(chain){
var bits = chain.split(" ");
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(keybind.core.parse_chord,bits);
});
keybind.core.e__GT_chord = (function keybind$core$e__GT_chord(e){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4529__auto__ = (function keybind$core$e__GT_chord_$_iter__37087(s__37088){
return (new cljs.core.LazySeq(null,(function (){
var s__37088__$1 = s__37088;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__37088__$1);
if(temp__5735__auto__){
var s__37088__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__37088__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__37088__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__37090 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__37089 = (0);
while(true){
if((i__37089 < size__4528__auto__)){
var vec__37099 = cljs.core._nth(c__4527__auto__,i__37089);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37099,(0),null);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37099,(1),null);
cljs.core.chunk_append(b__37090,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,(e[attr])], null));

var G__37300 = (i__37089 + (1));
i__37089 = G__37300;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37090),keybind$core$e__GT_chord_$_iter__37087(cljs.core.chunk_rest(s__37088__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37090),null);
}
} else {
var vec__37109 = cljs.core.first(s__37088__$2);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37109,(0),null);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37109,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,(e[attr])], null),keybind$core$e__GT_chord_$_iter__37087(cljs.core.rest(s__37088__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(keybind.core.KEYATTRS);
})());
});
keybind.core.reset_sequence_BANG_ = (function keybind$core$reset_sequence_BANG_(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(keybind.core.PRESSED,cljs.core.empty);
});
keybind.core.dispatch = (function keybind$core$dispatch(e,bindings){
var chord = keybind.core.e__GT_chord(e);
var sequence = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(keybind.core.PRESSED),chord);
var inner = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(bindings,sequence);
var handlers = new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(inner);
if(cljs.core.not(inner)){
return keybind.core.reset_sequence_BANG_();
} else {
if(cljs.core.truth_(handlers)){
var seq__37131_37307 = cljs.core.seq(new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(inner));
var chunk__37132_37308 = null;
var count__37133_37309 = (0);
var i__37134_37310 = (0);
while(true){
if((i__37134_37310 < count__37133_37309)){
var vec__37151_37315 = chunk__37132_37308.cljs$core$IIndexed$_nth$arity$2(null,i__37134_37310);
var __37316 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37151_37315,(0),null);
var handler_37317 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37151_37315,(1),null);
(handler_37317.cljs$core$IFn$_invoke$arity$2 ? handler_37317.cljs$core$IFn$_invoke$arity$2(e,sequence) : handler_37317.call(null,e,sequence));


var G__37318 = seq__37131_37307;
var G__37319 = chunk__37132_37308;
var G__37320 = count__37133_37309;
var G__37321 = (i__37134_37310 + (1));
seq__37131_37307 = G__37318;
chunk__37132_37308 = G__37319;
count__37133_37309 = G__37320;
i__37134_37310 = G__37321;
continue;
} else {
var temp__5735__auto___37322 = cljs.core.seq(seq__37131_37307);
if(temp__5735__auto___37322){
var seq__37131_37324__$1 = temp__5735__auto___37322;
if(cljs.core.chunked_seq_QMARK_(seq__37131_37324__$1)){
var c__4556__auto___37325 = cljs.core.chunk_first(seq__37131_37324__$1);
var G__37327 = cljs.core.chunk_rest(seq__37131_37324__$1);
var G__37328 = c__4556__auto___37325;
var G__37329 = cljs.core.count(c__4556__auto___37325);
var G__37330 = (0);
seq__37131_37307 = G__37327;
chunk__37132_37308 = G__37328;
count__37133_37309 = G__37329;
i__37134_37310 = G__37330;
continue;
} else {
var vec__37157_37332 = cljs.core.first(seq__37131_37324__$1);
var __37333 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37157_37332,(0),null);
var handler_37334 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37157_37332,(1),null);
(handler_37334.cljs$core$IFn$_invoke$arity$2 ? handler_37334.cljs$core$IFn$_invoke$arity$2(e,sequence) : handler_37334.call(null,e,sequence));


var G__37336 = cljs.core.next(seq__37131_37324__$1);
var G__37337 = null;
var G__37338 = (0);
var G__37339 = (0);
seq__37131_37307 = G__37336;
chunk__37132_37308 = G__37337;
count__37133_37309 = G__37338;
i__37134_37310 = G__37339;
continue;
}
} else {
}
}
break;
}

return keybind.core.reset_sequence_BANG_();
} else {
return cljs.core.reset_BANG_(keybind.core.PRESSED,sequence);

}
}
});
keybind.core.bind = (function keybind$core$bind(bindings,spec,key,cb){

var parsed = keybind.core.parse(spec);
return cljs.core.assoc_in(bindings,cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(parsed,new cljs.core.Keyword(null,"handlers","handlers",79528781),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([key], 0)),cb);
});
keybind.core.unbind = (function keybind$core$unbind(bindings,spec,key){

var parsed = keybind.core.parse(spec);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(bindings,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(parsed,new cljs.core.Keyword(null,"handlers","handlers",79528781)),cljs.core.dissoc,key);
});
keybind.core.bind_BANG_ = (function keybind$core$bind_BANG_(spec,key,cb){

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(keybind.core.BINDINGS,keybind.core.bind,spec,key,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cb], 0));
});
keybind.core.unbind_BANG_ = (function keybind$core$unbind_BANG_(spec,key){

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(keybind.core.BINDINGS,keybind.core.unbind,spec,key);
});
keybind.core.unbind_all_BANG_ = (function keybind$core$unbind_all_BANG_(){

keybind.core.reset_sequence_BANG_();

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(keybind.core.BINDINGS,cljs.core.empty);
});
keybind.core.disable_BANG_ = (function keybind$core$disable_BANG_(){

return cljs.core.reset_BANG_(keybind.core.ENABLED_QMARK_,false);
});
keybind.core.enable_BANG_ = (function keybind$core$enable_BANG_(){

return cljs.core.reset_BANG_(keybind.core.ENABLED_QMARK_,true);
});
keybind.core.dispatcher_BANG_ = (function keybind$core$dispatcher_BANG_(bindings){

return (function (e){
if(cljs.core.truth_((function (){var and__4115__auto__ = cljs.core.deref(keybind.core.ENABLED_QMARK_);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(keybind.core.KNOWN_KEYS,e.keyCode);
} else {
return and__4115__auto__;
}
})())){
return keybind.core.dispatch(e,cljs.core.deref(bindings));
} else {
return null;
}
});
});
if((typeof keybind !== 'undefined') && (typeof keybind.core !== 'undefined') && (typeof keybind.core.bind_keypress_listener !== 'undefined')){
} else {
keybind.core.bind_keypress_listener = addEventListener("keydown",keybind.core.dispatcher_BANG_(keybind.core.BINDINGS),false);
}

//# sourceMappingURL=keybind.core.js.map
