goog.provide('shadow.cljs.devtools.client.hud');
/**
 * @define {boolean}
 */
shadow.cljs.devtools.client.hud.show_progress = goog.define("shadow.cljs.devtools.client.hud.show_progress",true);
/**
 * @define {boolean}
 */
shadow.cljs.devtools.client.hud.show_warnings = goog.define("shadow.cljs.devtools.client.hud.show_warnings",true);
/**
 * @define {boolean}
 */
shadow.cljs.devtools.client.hud.show_errors = goog.define("shadow.cljs.devtools.client.hud.show_errors",true);
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.hud !== 'undefined') && (typeof shadow.cljs.devtools.client.hud.dom_available_QMARK_ !== 'undefined')){
} else {
shadow.cljs.devtools.client.hud.dom_available_QMARK_ = (!((goog.global.document == null)));
}
shadow.cljs.devtools.client.hud.open_file = (function shadow$cljs$devtools$client$hud$open_file(file,line,column){
console.log("opening file",file,line,column);

var req = shadow.xhr.chan.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"POST","POST",110456857),[shadow.cljs.devtools.client.env.get_url_base(),"/api/open-file"].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"file","file",-1269645878),file,new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false,new cljs.core.Keyword(null,"body-only","body-only",-698120682),true], null));
var c__32297__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32298__auto__ = (function (){var switch__32252__auto__ = (function (state_35847){
var state_val_35848 = (state_35847[(1)]);
if((state_val_35848 === (7))){
var state_35847__$1 = state_35847;
var statearr_35849_35999 = state_35847__$1;
(statearr_35849_35999[(2)] = false);

(statearr_35849_35999[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35848 === (1))){
var state_35847__$1 = state_35847;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35847__$1,(2),req);
} else {
if((state_val_35848 === (4))){
var inst_35811 = (state_35847[(7)]);
var inst_35817 = (inst_35811 == null);
var inst_35818 = cljs.core.not(inst_35817);
var state_35847__$1 = state_35847;
if(inst_35818){
var statearr_35850_36000 = state_35847__$1;
(statearr_35850_36000[(1)] = (6));

} else {
var statearr_35851_36001 = state_35847__$1;
(statearr_35851_36001[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35848 === (15))){
var state_35847__$1 = state_35847;
var statearr_35852_36002 = state_35847__$1;
(statearr_35852_36002[(2)] = null);

(statearr_35852_36002[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35848 === (13))){
var inst_35811 = (state_35847[(7)]);
var state_35847__$1 = state_35847;
var statearr_35853_36003 = state_35847__$1;
(statearr_35853_36003[(2)] = inst_35811);

(statearr_35853_36003[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35848 === (6))){
var inst_35811 = (state_35847[(7)]);
var inst_35820 = inst_35811.cljs$lang$protocol_mask$partition0$;
var inst_35821 = (inst_35820 & (64));
var inst_35822 = inst_35811.cljs$core$ISeq$;
var inst_35823 = (cljs.core.PROTOCOL_SENTINEL === inst_35822);
var inst_35824 = ((inst_35821) || (inst_35823));
var state_35847__$1 = state_35847;
if(cljs.core.truth_(inst_35824)){
var statearr_35854_36011 = state_35847__$1;
(statearr_35854_36011[(1)] = (9));

} else {
var statearr_35855_36012 = state_35847__$1;
(statearr_35855_36012[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35848 === (17))){
var inst_35843 = (state_35847[(2)]);
var state_35847__$1 = state_35847;
var statearr_35856_36013 = state_35847__$1;
(statearr_35856_36013[(2)] = inst_35843);

(statearr_35856_36013[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35848 === (3))){
var state_35847__$1 = state_35847;
var statearr_35857_36014 = state_35847__$1;
(statearr_35857_36014[(2)] = null);

(statearr_35857_36014[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35848 === (12))){
var inst_35811 = (state_35847[(7)]);
var inst_35833 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_35811);
var state_35847__$1 = state_35847;
var statearr_35858_36015 = state_35847__$1;
(statearr_35858_36015[(2)] = inst_35833);

(statearr_35858_36015[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35848 === (2))){
var inst_35811 = (state_35847[(7)]);
var inst_35811__$1 = (state_35847[(2)]);
var inst_35812 = (inst_35811__$1 == null);
var state_35847__$1 = (function (){var statearr_35860 = state_35847;
(statearr_35860[(7)] = inst_35811__$1);

return statearr_35860;
})();
if(cljs.core.truth_(inst_35812)){
var statearr_35861_36016 = state_35847__$1;
(statearr_35861_36016[(1)] = (3));

} else {
var statearr_35863_36017 = state_35847__$1;
(statearr_35863_36017[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35848 === (11))){
var inst_35828 = (state_35847[(2)]);
var state_35847__$1 = state_35847;
var statearr_35864_36018 = state_35847__$1;
(statearr_35864_36018[(2)] = inst_35828);

(statearr_35864_36018[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35848 === (9))){
var state_35847__$1 = state_35847;
var statearr_35865_36019 = state_35847__$1;
(statearr_35865_36019[(2)] = true);

(statearr_35865_36019[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35848 === (5))){
var inst_35845 = (state_35847[(2)]);
var state_35847__$1 = state_35847;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35847__$1,inst_35845);
} else {
if((state_val_35848 === (14))){
var inst_35836 = (state_35847[(8)]);
var inst_35836__$1 = (state_35847[(2)]);
var inst_35837 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35836__$1,new cljs.core.Keyword(null,"exit","exit",351849638));
var inst_35838 = (inst_35837 === (0));
var state_35847__$1 = (function (){var statearr_35866 = state_35847;
(statearr_35866[(8)] = inst_35836__$1);

return statearr_35866;
})();
if(cljs.core.truth_(inst_35838)){
var statearr_35867_36020 = state_35847__$1;
(statearr_35867_36020[(1)] = (15));

} else {
var statearr_35868_36021 = state_35847__$1;
(statearr_35868_36021[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35848 === (16))){
var inst_35836 = (state_35847[(8)]);
var inst_35841 = console.warn("file open failed",inst_35836);
var state_35847__$1 = state_35847;
var statearr_35869_36022 = state_35847__$1;
(statearr_35869_36022[(2)] = inst_35841);

(statearr_35869_36022[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35848 === (10))){
var state_35847__$1 = state_35847;
var statearr_35870_36023 = state_35847__$1;
(statearr_35870_36023[(2)] = false);

(statearr_35870_36023[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35848 === (8))){
var inst_35831 = (state_35847[(2)]);
var state_35847__$1 = state_35847;
if(cljs.core.truth_(inst_35831)){
var statearr_35871_36024 = state_35847__$1;
(statearr_35871_36024[(1)] = (12));

} else {
var statearr_35872_36025 = state_35847__$1;
(statearr_35872_36025[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var shadow$cljs$devtools$client$hud$open_file_$_state_machine__32253__auto__ = null;
var shadow$cljs$devtools$client$hud$open_file_$_state_machine__32253__auto____0 = (function (){
var statearr_35873 = [null,null,null,null,null,null,null,null,null];
(statearr_35873[(0)] = shadow$cljs$devtools$client$hud$open_file_$_state_machine__32253__auto__);

(statearr_35873[(1)] = (1));

return statearr_35873;
});
var shadow$cljs$devtools$client$hud$open_file_$_state_machine__32253__auto____1 = (function (state_35847){
while(true){
var ret_value__32254__auto__ = (function (){try{while(true){
var result__32255__auto__ = switch__32252__auto__(state_35847);
if(cljs.core.keyword_identical_QMARK_(result__32255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32255__auto__;
}
break;
}
}catch (e35874){var ex__32256__auto__ = e35874;
var statearr_35875_36026 = state_35847;
(statearr_35875_36026[(2)] = ex__32256__auto__);


if(cljs.core.seq((state_35847[(4)]))){
var statearr_35876_36027 = state_35847;
(statearr_35876_36027[(1)] = cljs.core.first((state_35847[(4)])));

} else {
throw ex__32256__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36028 = state_35847;
state_35847 = G__36028;
continue;
} else {
return ret_value__32254__auto__;
}
break;
}
});
shadow$cljs$devtools$client$hud$open_file_$_state_machine__32253__auto__ = function(state_35847){
switch(arguments.length){
case 0:
return shadow$cljs$devtools$client$hud$open_file_$_state_machine__32253__auto____0.call(this);
case 1:
return shadow$cljs$devtools$client$hud$open_file_$_state_machine__32253__auto____1.call(this,state_35847);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$cljs$devtools$client$hud$open_file_$_state_machine__32253__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$cljs$devtools$client$hud$open_file_$_state_machine__32253__auto____0;
shadow$cljs$devtools$client$hud$open_file_$_state_machine__32253__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$cljs$devtools$client$hud$open_file_$_state_machine__32253__auto____1;
return shadow$cljs$devtools$client$hud$open_file_$_state_machine__32253__auto__;
})()
})();
var state__32299__auto__ = (function (){var statearr_35877 = f__32298__auto__();
(statearr_35877[(6)] = c__32297__auto__);

return statearr_35877;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32299__auto__);
}));

return c__32297__auto__;
});
shadow.cljs.devtools.client.hud.dom_insert = (function shadow$cljs$devtools$client$hud$dom_insert(var_args){
var G__35879 = arguments.length;
switch (G__35879) {
case 1:
return shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$1 = (function (node){
return shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$2(document.body,node);
}));

(shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$2 = (function (where,node){
var el = shadow.dom.dom_node(node);
var id = el.id;
if(cljs.core.seq(id)){
} else {
throw (new Error("Assert failed: (seq id)"));
}

var temp__5739__auto___36031 = shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1(id);
if((temp__5739__auto___36031 == null)){
} else {
var x_36033 = temp__5739__auto___36031;
shadow.dom.remove(x_36033);
}

return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(where,el);
}));

(shadow.cljs.devtools.client.hud.dom_insert.cljs$lang$maxFixedArity = 2);

shadow.cljs.devtools.client.hud.hud_id = "shadow-hud-container";
shadow.cljs.devtools.client.hud.load_id = "shadow-hud-loading-container";
shadow.cljs.devtools.client.hud.logo_svg = (new cljs.core.Delay((function (){
var s_path = "M247.183941,141.416413 C247.183941,74.7839971 148.383423,78.9723529 148.383423,141.416413 C148.383423,203.860473 265.090698,171.864644 265.090698,248.900057 C265.090698,325.93547 135,325.851749 135,251.708304";
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),"shadow-cljs-logo",new cljs.core.Keyword(null,"version","version",425292698),"1.1",new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 400 400",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"block"], null),new cljs.core.Keyword(null,"height","height",1025178622),"60px",new cljs.core.Keyword(null,"width","width",-384071477),"60px"], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"title","title",636505583),"shadow-cljs"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"defs","defs",1398449717),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mask#shadow-cljs-logo-mask","mask#shadow-cljs-logo-mask",1690487509),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),"#fff"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"r","r",-471384190),"200",new cljs.core.Keyword(null,"cy","cy",755331060),"200",new cljs.core.Keyword(null,"cx","cx",1272694324),"200"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fill-rule","fill-rule",-1824841598),"evenodd",new cljs.core.Keyword(null,"fill","fill",883462889),"none",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"0",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"none",new cljs.core.Keyword(null,"mask","mask",-585748447),"url(#shadow-cljs-logo-mask)"], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g.circles","g.circles",374463200),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle.blue","circle.blue",1902916291),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"r","r",-471384190),"200",new cljs.core.Keyword(null,"cy","cy",755331060),"200",new cljs.core.Keyword(null,"cx","cx",1272694324),"200",new cljs.core.Keyword(null,"fill","fill",883462889),"#4F80DF"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle.light-blue","circle.light-blue",438137342),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"r","r",-471384190),"71.5",new cljs.core.Keyword(null,"cy","cy",755331060),"200",new cljs.core.Keyword(null,"cx","cx",1272694324),"370",new cljs.core.Keyword(null,"fill","fill",883462889),"#89B4FF"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle.dark-green","circle.dark-green",608465767),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"r","r",-471384190),"180",new cljs.core.Keyword(null,"cy","cy",755331060),"360",new cljs.core.Keyword(null,"cx","cx",1272694324),"60",new cljs.core.Keyword(null,"fill","fill",883462889),"#40B400"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle.light-green","circle.light-green",-1663041285),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"r","r",-471384190),"129",new cljs.core.Keyword(null,"cy","cy",755331060),"320",new cljs.core.Keyword(null,"cx","cx",1272694324),"280",new cljs.core.Keyword(null,"fill","fill",883462889),"#76E013"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"animateTransform","animateTransform",759329815),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"attributeType","attributeType",1055561918),"xml",new cljs.core.Keyword(null,"attributeName","attributeName",-400177890),"transform",new cljs.core.Keyword(null,"type","type",1174270348),"rotate",new cljs.core.Keyword(null,"from","from",1815293044),"0 200 200",new cljs.core.Keyword(null,"to","to",192099007),"360 200 200",new cljs.core.Keyword(null,"dur","dur",1464522452),"3s",new cljs.core.Keyword(null,"repeatCount","repeatCount",1447663848),"indefinite"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),"translate(10,10)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),"square",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"16",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#aaa",new cljs.core.Keyword(null,"d","d",1972142424),s_path], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),"square",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"16",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#FFFFFF",new cljs.core.Keyword(null,"d","d",1972142424),s_path], null)], null)], null)], 0));
}),null));
shadow.cljs.devtools.client.hud.load_start = (function shadow$cljs$devtools$client$hud$load_start(){
if(shadow.cljs.devtools.client.hud.dom_available_QMARK_){
if(shadow.cljs.devtools.client.hud.show_progress){
return shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),shadow.cljs.devtools.client.hud.load_id,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"position","position",-2011731912),"fixed",new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),"none",new cljs.core.Keyword(null,"left","left",-399115937),"0px",new cljs.core.Keyword(null,"bottom","bottom",-1550509018),"20px",new cljs.core.Keyword(null,"z-index","z-index",1892827090),"10000"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"background","background",-863952629),"#eee",new cljs.core.Keyword(null,"border-top-right-radius","border-top-right-radius",1678770792),"40px",new cljs.core.Keyword(null,"border-bottom-right-radius","border-bottom-right-radius",414899772),"40px",new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),"2px 2px 10px #aaa",new cljs.core.Keyword(null,"padding","padding",1660304693),"10px"], null)], null),cljs.core.deref(shadow.cljs.devtools.client.hud.logo_svg)], null)], null));
} else {
return null;
}
} else {
return null;
}
});
shadow.cljs.devtools.client.hud.load_end_success = (function shadow$cljs$devtools$client$hud$load_end_success(){
if(shadow.cljs.devtools.client.hud.dom_available_QMARK_){
if(shadow.cljs.devtools.client.hud.show_progress){
var temp__5739__auto__ = shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.hud.load_id);
if((temp__5739__auto__ == null)){
return null;
} else {
var container_el = temp__5739__auto__;
var el = container_el.firstChild;
shadow.animate.start((500),cljs.core.PersistentArrayMap.createAsIfByAssoc([el,shadow.animate.transition.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"background","background",-863952629),"#eee","#40B400","ease-out")]));

var c__32297__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32298__auto__ = (function (){var switch__32252__auto__ = (function (state_35897){
var state_val_35898 = (state_35897[(1)]);
if((state_val_35898 === (1))){
var inst_35885 = cljs.core.async.timeout((250));
var state_35897__$1 = state_35897;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35897__$1,(2),inst_35885);
} else {
if((state_val_35898 === (2))){
var inst_35887 = (state_35897[(2)]);
var inst_35888 = [el];
var inst_35889 = shadow.animate.transition.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"opacity","opacity",397153780),"1","0","ease-in");
var inst_35890 = [inst_35889];
var inst_35891 = cljs.core.PersistentHashMap.fromArrays(inst_35888,inst_35890);
var inst_35892 = shadow.animate.start((250),inst_35891);
var state_35897__$1 = (function (){var statearr_35902 = state_35897;
(statearr_35902[(7)] = inst_35887);

return statearr_35902;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35897__$1,(3),inst_35892);
} else {
if((state_val_35898 === (3))){
var inst_35894 = (state_35897[(2)]);
var inst_35895 = shadow.dom.remove(container_el);
var state_35897__$1 = (function (){var statearr_35903 = state_35897;
(statearr_35903[(8)] = inst_35894);

return statearr_35903;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_35897__$1,inst_35895);
} else {
return null;
}
}
}
});
return (function() {
var shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__32253__auto__ = null;
var shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__32253__auto____0 = (function (){
var statearr_35904 = [null,null,null,null,null,null,null,null,null];
(statearr_35904[(0)] = shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__32253__auto__);

(statearr_35904[(1)] = (1));

return statearr_35904;
});
var shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__32253__auto____1 = (function (state_35897){
while(true){
var ret_value__32254__auto__ = (function (){try{while(true){
var result__32255__auto__ = switch__32252__auto__(state_35897);
if(cljs.core.keyword_identical_QMARK_(result__32255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32255__auto__;
}
break;
}
}catch (e35905){var ex__32256__auto__ = e35905;
var statearr_35906_36068 = state_35897;
(statearr_35906_36068[(2)] = ex__32256__auto__);


if(cljs.core.seq((state_35897[(4)]))){
var statearr_35907_36070 = state_35897;
(statearr_35907_36070[(1)] = cljs.core.first((state_35897[(4)])));

} else {
throw ex__32256__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36071 = state_35897;
state_35897 = G__36071;
continue;
} else {
return ret_value__32254__auto__;
}
break;
}
});
shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__32253__auto__ = function(state_35897){
switch(arguments.length){
case 0:
return shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__32253__auto____0.call(this);
case 1:
return shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__32253__auto____1.call(this,state_35897);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__32253__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__32253__auto____0;
shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__32253__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__32253__auto____1;
return shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__32253__auto__;
})()
})();
var state__32299__auto__ = (function (){var statearr_35909 = f__32298__auto__();
(statearr_35909[(6)] = c__32297__auto__);

return statearr_35909;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32299__auto__);
}));

return c__32297__auto__;
}
} else {
return null;
}
} else {
return null;
}
});
shadow.cljs.devtools.client.hud.load_end = (function shadow$cljs$devtools$client$hud$load_end(){
if(shadow.cljs.devtools.client.hud.dom_available_QMARK_){
var temp__5739__auto__ = shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.hud.load_id);
if((temp__5739__auto__ == null)){
return null;
} else {
var el = temp__5739__auto__;
return shadow.dom.remove(el);
}
} else {
return null;
}
});
shadow.cljs.devtools.client.hud.hud_hide = (function shadow$cljs$devtools$client$hud$hud_hide(){
if(shadow.cljs.devtools.client.hud.dom_available_QMARK_){
var temp__5739__auto__ = shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.hud.hud_id);
if((temp__5739__auto__ == null)){
return null;
} else {
var d = temp__5739__auto__;
return shadow.dom.remove(d);
}
} else {
return null;
}
});
shadow.cljs.devtools.client.hud.source_line_styles = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding","padding",1660304693),"0",new cljs.core.Keyword(null,"margin","margin",-995903681),"0"], null);
shadow.cljs.devtools.client.hud.source_highlight_styles = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(shadow.cljs.devtools.client.hud.source_line_styles,new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold");
shadow.cljs.devtools.client.hud.source_line_html = (function shadow$cljs$devtools$client$hud$source_line_html(start_idx,lines,styles){
var iter__4529__auto__ = (function shadow$cljs$devtools$client$hud$source_line_html_$_iter__35911(s__35912){
return (new cljs.core.LazySeq(null,(function (){
var s__35912__$1 = s__35912;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__35912__$1);
if(temp__5735__auto__){
var s__35912__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__35912__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__35912__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__35914 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__35913 = (0);
while(true){
if((i__35913 < size__4528__auto__)){
var vec__35915 = cljs.core._nth(c__4527__auto__,i__35913);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35915,(0),null);
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35915,(1),null);
cljs.core.chunk_append(b__35914,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),styles], null),goog.string.format("%4d | %s",(((1) + idx) + start_idx),text)], null));

var G__36096 = (i__35913 + (1));
i__35913 = G__36096;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35914),shadow$cljs$devtools$client$hud$source_line_html_$_iter__35911(cljs.core.chunk_rest(s__35912__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35914),null);
}
} else {
var vec__35918 = cljs.core.first(s__35912__$2);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35918,(0),null);
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35918,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),styles], null),goog.string.format("%4d | %s",(((1) + idx) + start_idx),text)], null),shadow$cljs$devtools$client$hud$source_line_html_$_iter__35911(cljs.core.rest(s__35912__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,lines));
});
shadow.cljs.devtools.client.hud.sep_length = (80);
shadow.cljs.devtools.client.hud.sep_line = (function shadow$cljs$devtools$client$hud$sep_line(var_args){
var G__35922 = arguments.length;
switch (G__35922) {
case 0:
return shadow.cljs.devtools.client.hud.sep_line.cljs$core$IFn$_invoke$arity$0();

break;
case 2:
return shadow.cljs.devtools.client.hud.sep_line.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.cljs.devtools.client.hud.sep_line.cljs$core$IFn$_invoke$arity$0 = (function (){
return shadow.cljs.devtools.client.hud.sep_line.cljs$core$IFn$_invoke$arity$2("",(0));
}));

(shadow.cljs.devtools.client.hud.sep_line.cljs$core$IFn$_invoke$arity$2 = (function (label,offset){
var sep_len = Math.max(shadow.cljs.devtools.client.hud.sep_length,offset);
var len = cljs.core.count(label);
var sep = (function (c){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("",cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(c,"-"));
});
return [sep(offset),cljs.core.str.cljs$core$IFn$_invoke$arity$1(label),sep((sep_len - (offset + len)))].join('');
}));

(shadow.cljs.devtools.client.hud.sep_line.cljs$lang$maxFixedArity = 2);

shadow.cljs.devtools.client.hud.file_link = (function shadow$cljs$devtools$client$hud$file_link(p__35933){
var map__35934 = p__35933;
var map__35934__$1 = (((((!((map__35934 == null))))?(((((map__35934.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35934.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35934):map__35934);
var warning = map__35934__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35934__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35934__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35934__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35934__$1,new cljs.core.Keyword(null,"column","column",2078222095));
if(cljs.core.not(file)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),resource_name], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),"underline",new cljs.core.Keyword(null,"color","color",1011675173),"blue",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"click","click",1912301393),(function (e){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return shadow.cljs.devtools.client.hud.open_file(file,line,column);
})], null)], null),resource_name], null);
}
});
shadow.cljs.devtools.client.hud.html_for_warning = (function shadow$cljs$devtools$client$hud$html_for_warning(p__35942){
var map__35943 = p__35942;
var map__35943__$1 = (((((!((map__35943 == null))))?(((((map__35943.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35943.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35943):map__35943);
var warning = map__35943__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35943__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var msg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35943__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35943__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35943__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35943__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var source_excerpt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35943__$1,new cljs.core.Keyword(null,"source-excerpt","source-excerpt",5665576));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border","border",1444987323),"2px solid #ccc",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"10px"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"line-height","line-height",1870784992),"16px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"#fadb64",new cljs.core.Keyword(null,"padding","padding",1660304693),"10px",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1.2em",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"WARNING in "], null),shadow.cljs.devtools.client.hud.file_link(warning)], null),(cljs.core.truth_(source_excerpt)?(function (){var map__35945 = source_excerpt;
var map__35945__$1 = (((((!((map__35945 == null))))?(((((map__35945.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35945.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35945):map__35945);
var start_idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35945__$1,new cljs.core.Keyword(null,"start-idx","start-idx",-1600773745));
var before = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35945__$1,new cljs.core.Keyword(null,"before","before",-1633692388));
var line__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35945__$1,new cljs.core.Keyword(null,"line","line",212345235));
var after = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35945__$1,new cljs.core.Keyword(null,"after","after",594996914));
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"padding","padding",1660304693),"10px 10px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"#fff",new cljs.core.Keyword(null,"border-top","border-top",-158897573),"2px solid #ccc"], null)], null),shadow.cljs.devtools.client.hud.source_line_html(start_idx,before,shadow.cljs.devtools.client.hud.source_line_styles),shadow.cljs.devtools.client.hud.source_line_html((start_idx + cljs.core.count(before)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line__$1], null),shadow.cljs.devtools.client.hud.source_highlight_styles),(function (){var arrow_idx = ((6) + (function (){var or__4126__auto__ = column;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})());
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),shadow.cljs.devtools.client.hud.source_highlight_styles], null),shadow.cljs.devtools.client.hud.sep_line.cljs$core$IFn$_invoke$arity$2("^",arrow_idx)], null);
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1.2em",new cljs.core.Keyword(null,"padding","padding",1660304693),"10px 0"], null)], null),msg], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),shadow.cljs.devtools.client.hud.source_highlight_styles], null),shadow.cljs.devtools.client.hud.sep_line.cljs$core$IFn$_invoke$arity$0()], null),shadow.cljs.devtools.client.hud.source_line_html(((start_idx + cljs.core.count(before)) + (1)),after,shadow.cljs.devtools.client.hud.source_line_styles)], null);
})():null)], null);
});
shadow.cljs.devtools.client.hud.hud_warnings = (function shadow$cljs$devtools$client$hud$hud_warnings(p__35949){
var map__35950 = p__35949;
var map__35950__$1 = (((((!((map__35950 == null))))?(((((map__35950.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35950.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35950):map__35950);
var msg = map__35950__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35950__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35950__$1,new cljs.core.Keyword(null,"info","info",-317069002));
if(shadow.cljs.devtools.client.hud.dom_available_QMARK_){
var map__35953 = info;
var map__35953__$1 = (((((!((map__35953 == null))))?(((((map__35953.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35953.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35953):map__35953);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35953__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var sources_with_warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__35947_SHARP_){
return cljs.core.seq(new cljs.core.Keyword(null,"warnings","warnings",-735437651).cljs$core$IFn$_invoke$arity$1(p1__35947_SHARP_));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827),sources)));
if(cljs.core.seq(sources_with_warnings)){
shadow.cljs.devtools.client.hud.load_end();

if(shadow.cljs.devtools.client.hud.show_warnings){
return shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),shadow.cljs.devtools.client.hud.hud_id,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"z-index","z-index",1892827090),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"font-family","font-family",-667419874),new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"left","left",-399115937)],["#000","0px","12px","10000","0px","flex","fixed","monospace","column","0px"])], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"align-self","align-self",1475936794),"flex-end",new cljs.core.Keyword(null,"background","background",-863952629),"#fff",new cljs.core.Keyword(null,"border","border",1444987323),"2px solid #ccc",new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),"0px",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"padding","padding",1660304693),"6px",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"-2px",new cljs.core.Keyword(null,"z-index","z-index",1892827090),"10000"], null),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"click","click",1912301393),shadow.cljs.devtools.client.hud.hud_hide], null)], null),"Close"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"background","background",-863952629),"#fff",new cljs.core.Keyword(null,"border-top","border-top",-158897573),"2px solid #ccc",new cljs.core.Keyword(null,"flex","flex",-1425124628),"1",new cljs.core.Keyword(null,"max-height","max-height",-612563804),"300px",new cljs.core.Keyword(null,"padding","padding",1660304693),"10px 10px 0",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"auto"], null)], null),(function (){var iter__4529__auto__ = (function shadow$cljs$devtools$client$hud$hud_warnings_$_iter__35956(s__35957){
return (new cljs.core.LazySeq(null,(function (){
var s__35957__$1 = s__35957;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__35957__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__35962 = cljs.core.first(xs__6292__auto__);
var map__35962__$1 = (((((!((map__35962 == null))))?(((((map__35962.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35962.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35962):map__35962);
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35962__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
var iterys__4525__auto__ = ((function (s__35957__$1,map__35962,map__35962__$1,warnings,xs__6292__auto__,temp__5735__auto__,map__35953,map__35953__$1,sources,sources_with_warnings,map__35950,map__35950__$1,msg,type,info){
return (function shadow$cljs$devtools$client$hud$hud_warnings_$_iter__35956_$_iter__35958(s__35959){
return (new cljs.core.LazySeq(null,((function (s__35957__$1,map__35962,map__35962__$1,warnings,xs__6292__auto__,temp__5735__auto__,map__35953,map__35953__$1,sources,sources_with_warnings,map__35950,map__35950__$1,msg,type,info){
return (function (){
var s__35959__$1 = s__35959;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__35959__$1);
if(temp__5735__auto____$1){
var s__35959__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__35959__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__35959__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__35961 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__35960 = (0);
while(true){
if((i__35960 < size__4528__auto__)){
var warning = cljs.core._nth(c__4527__auto__,i__35960);
cljs.core.chunk_append(b__35961,shadow.cljs.devtools.client.hud.html_for_warning(warning));

var G__36219 = (i__35960 + (1));
i__35960 = G__36219;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35961),shadow$cljs$devtools$client$hud$hud_warnings_$_iter__35956_$_iter__35958(cljs.core.chunk_rest(s__35959__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35961),null);
}
} else {
var warning = cljs.core.first(s__35959__$2);
return cljs.core.cons(shadow.cljs.devtools.client.hud.html_for_warning(warning),shadow$cljs$devtools$client$hud$hud_warnings_$_iter__35956_$_iter__35958(cljs.core.rest(s__35959__$2)));
}
} else {
return null;
}
break;
}
});})(s__35957__$1,map__35962,map__35962__$1,warnings,xs__6292__auto__,temp__5735__auto__,map__35953,map__35953__$1,sources,sources_with_warnings,map__35950,map__35950__$1,msg,type,info))
,null,null));
});})(s__35957__$1,map__35962,map__35962__$1,warnings,xs__6292__auto__,temp__5735__auto__,map__35953,map__35953__$1,sources,sources_with_warnings,map__35950,map__35950__$1,msg,type,info))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(warnings));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,shadow$cljs$devtools$client$hud$hud_warnings_$_iter__35956(cljs.core.rest(s__35957__$1)));
} else {
var G__36220 = cljs.core.rest(s__35957__$1);
s__35957__$1 = G__36220;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(sources_with_warnings);
})()], null)], null));
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
shadow.cljs.devtools.client.hud.hud_error = (function shadow$cljs$devtools$client$hud$hud_error(p__35975){
var map__35978 = p__35975;
var map__35978__$1 = (((((!((map__35978 == null))))?(((((map__35978.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35978.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35978):map__35978);
var msg = map__35978__$1;
var report = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35978__$1,new cljs.core.Keyword(null,"report","report",1394055010));
if(shadow.cljs.devtools.client.hud.dom_available_QMARK_){
if(shadow.cljs.devtools.client.hud.show_errors){
return shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),shadow.cljs.devtools.client.hud.hud_id,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"overflow","overflow",2058931880),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"z-index","z-index",1892827090),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"font-family","font-family",-667419874),new cljs.core.Keyword(null,"left","left",-399115937)],["#000","0px","12px","0px","auto","#fff","10000","20px","0px","fixed","5px solid red","monospace","0px"])], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),"color: red; margin-bottom: 10px; font-size: 2em;"], null),"Compilation failed!"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),report], null)], null));
} else {
return null;
}
} else {
return null;
}
});
shadow.cljs.devtools.client.hud.connection_error_id = "shadow-connection-error";
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_ = (function shadow$cljs$devtools$client$hud$connection_error_clear_BANG_(){
if(shadow.cljs.devtools.client.hud.dom_available_QMARK_){
var temp__5739__auto__ = shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.hud.connection_error_id);
if((temp__5739__auto__ == null)){
return null;
} else {
var x = temp__5739__auto__;
return shadow.dom.remove(x);
}
} else {
return null;
}
});
shadow.cljs.devtools.client.hud.connection_error = (function shadow$cljs$devtools$client$hud$connection_error(msg){
if(shadow.cljs.devtools.client.hud.dom_available_QMARK_){
if(shadow.cljs.devtools.client.hud.show_errors){
return shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),shadow.cljs.devtools.client.hud.connection_error_id,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"position","position",-2011731912),"fixed",new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),"none",new cljs.core.Keyword(null,"left","left",-399115937),"0px",new cljs.core.Keyword(null,"bottom","bottom",-1550509018),"20px",new cljs.core.Keyword(null,"z-index","z-index",1892827090),"10000"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"border-top-right-radius","border-top-right-radius",1678770792),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"border-bottom-right-radius","border-bottom-right-radius",414899772),new cljs.core.Keyword(null,"font-family","font-family",-667419874)],["2px 2px 10px #aaa","#fff","14px","bold","40px","#c00","10px","40px","monospace"])], null),["shadow-cljs - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null)], null));
} else {
return null;
}
} else {
return null;
}
});
shadow.cljs.devtools.client.hud.load_failure = (function shadow$cljs$devtools$client$hud$load_failure(error,task,remaining){
shadow.cljs.devtools.client.hud.load_end();

console.error("reload-failed",error);

return shadow.cljs.devtools.client.hud.connection_error(["[reload failed] ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(error.message)].join(''));
});

//# sourceMappingURL=shadow.cljs.devtools.client.hud.js.map
