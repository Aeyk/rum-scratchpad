goog.provide('wscljs.format');

/**
 * Protocol used to define encoding format for socket messages.
 * @interface
 */
wscljs.format.Format = function(){};

var wscljs$format$Format$read$dyn_27944 = (function (formatter,string){
var x__4428__auto__ = (((formatter == null))?null:formatter);
var m__4429__auto__ = (wscljs.format.read[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(formatter,string) : m__4429__auto__.call(null,formatter,string));
} else {
var m__4426__auto__ = (wscljs.format.read["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(formatter,string) : m__4426__auto__.call(null,formatter,string));
} else {
throw cljs.core.missing_protocol("Format.read",formatter);
}
}
});
wscljs.format.read = (function wscljs$format$read(formatter,string){
if((((!((formatter == null)))) && ((!((formatter.wscljs$format$Format$read$arity$2 == null)))))){
return formatter.wscljs$format$Format$read$arity$2(formatter,string);
} else {
return wscljs$format$Format$read$dyn_27944(formatter,string);
}
});

var wscljs$format$Format$write$dyn_28000 = (function (formatter,value){
var x__4428__auto__ = (((formatter == null))?null:formatter);
var m__4429__auto__ = (wscljs.format.write[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(formatter,value) : m__4429__auto__.call(null,formatter,value));
} else {
var m__4426__auto__ = (wscljs.format.write["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(formatter,value) : m__4426__auto__.call(null,formatter,value));
} else {
throw cljs.core.missing_protocol("Format.write",formatter);
}
}
});
wscljs.format.write = (function wscljs$format$write(formatter,value){
if((((!((formatter == null)))) && ((!((formatter.wscljs$format$Format$write$arity$2 == null)))))){
return formatter.wscljs$format$Format$write$arity$2(formatter,value);
} else {
return wscljs$format$Format$write$dyn_28000(formatter,value);
}
});

/**
 * The identity formatter. Does nothing to the input or output.
 */
wscljs.format.identity = (function (){
if((typeof wscljs !== 'undefined') && (typeof wscljs.format !== 'undefined') && (typeof wscljs.format.t_wscljs$format27676 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {wscljs.format.Format}
 * @implements {cljs.core.IWithMeta}
*/
wscljs.format.t_wscljs$format27676 = (function (meta27677){
this.meta27677 = meta27677;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(wscljs.format.t_wscljs$format27676.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27678,meta27677__$1){
var self__ = this;
var _27678__$1 = this;
return (new wscljs.format.t_wscljs$format27676(meta27677__$1));
}));

(wscljs.format.t_wscljs$format27676.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27678){
var self__ = this;
var _27678__$1 = this;
return self__.meta27677;
}));

(wscljs.format.t_wscljs$format27676.prototype.wscljs$format$Format$ = cljs.core.PROTOCOL_SENTINEL);

(wscljs.format.t_wscljs$format27676.prototype.wscljs$format$Format$read$arity$2 = (function (_,s){
var self__ = this;
var ___$1 = this;
return s;
}));

(wscljs.format.t_wscljs$format27676.prototype.wscljs$format$Format$write$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
return v;
}));

(wscljs.format.t_wscljs$format27676.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta27677","meta27677",-1423874968,null)], null);
}));

(wscljs.format.t_wscljs$format27676.cljs$lang$type = true);

(wscljs.format.t_wscljs$format27676.cljs$lang$ctorStr = "wscljs.format/t_wscljs$format27676");

(wscljs.format.t_wscljs$format27676.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"wscljs.format/t_wscljs$format27676");
}));

/**
 * Positional factory function for wscljs.format/t_wscljs$format27676.
 */
wscljs.format.__GT_t_wscljs$format27676 = (function wscljs$format$__GT_t_wscljs$format27676(meta27677){
return (new wscljs.format.t_wscljs$format27676(meta27677));
});

}

return (new wscljs.format.t_wscljs$format27676(cljs.core.PersistentArrayMap.EMPTY));
})()
;
/**
 * Read and write data encoded in JSON.
 */
wscljs.format.json = (function (){
if((typeof wscljs !== 'undefined') && (typeof wscljs.format !== 'undefined') && (typeof wscljs.format.t_wscljs$format27802 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {wscljs.format.Format}
 * @implements {cljs.core.IWithMeta}
*/
wscljs.format.t_wscljs$format27802 = (function (meta27803){
this.meta27803 = meta27803;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(wscljs.format.t_wscljs$format27802.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27804,meta27803__$1){
var self__ = this;
var _27804__$1 = this;
return (new wscljs.format.t_wscljs$format27802(meta27803__$1));
}));

(wscljs.format.t_wscljs$format27802.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27804){
var self__ = this;
var _27804__$1 = this;
return self__.meta27803;
}));

(wscljs.format.t_wscljs$format27802.prototype.wscljs$format$Format$ = cljs.core.PROTOCOL_SENTINEL);

(wscljs.format.t_wscljs$format27802.prototype.wscljs$format$Format$read$arity$2 = (function (_,s){
var self__ = this;
var ___$1 = this;
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(JSON.parse(s),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
}));

(wscljs.format.t_wscljs$format27802.prototype.wscljs$format$Format$write$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
return JSON.stringify(cljs.core.clj__GT_js(v));
}));

(wscljs.format.t_wscljs$format27802.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta27803","meta27803",1187591507,null)], null);
}));

(wscljs.format.t_wscljs$format27802.cljs$lang$type = true);

(wscljs.format.t_wscljs$format27802.cljs$lang$ctorStr = "wscljs.format/t_wscljs$format27802");

(wscljs.format.t_wscljs$format27802.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"wscljs.format/t_wscljs$format27802");
}));

/**
 * Positional factory function for wscljs.format/t_wscljs$format27802.
 */
wscljs.format.__GT_t_wscljs$format27802 = (function wscljs$format$__GT_t_wscljs$format27802(meta27803){
return (new wscljs.format.t_wscljs$format27802(meta27803));
});

}

return (new wscljs.format.t_wscljs$format27802(cljs.core.PersistentArrayMap.EMPTY));
})()
;
/**
 * Read and write data serialized as EDN.
 */
wscljs.format.edn = (function (){
if((typeof wscljs !== 'undefined') && (typeof wscljs.format !== 'undefined') && (typeof wscljs.format.t_wscljs$format27860 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {wscljs.format.Format}
 * @implements {cljs.core.IWithMeta}
*/
wscljs.format.t_wscljs$format27860 = (function (meta27861){
this.meta27861 = meta27861;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(wscljs.format.t_wscljs$format27860.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27862,meta27861__$1){
var self__ = this;
var _27862__$1 = this;
return (new wscljs.format.t_wscljs$format27860(meta27861__$1));
}));

(wscljs.format.t_wscljs$format27860.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27862){
var self__ = this;
var _27862__$1 = this;
return self__.meta27861;
}));

(wscljs.format.t_wscljs$format27860.prototype.wscljs$format$Format$ = cljs.core.PROTOCOL_SENTINEL);

(wscljs.format.t_wscljs$format27860.prototype.wscljs$format$Format$read$arity$2 = (function (_,s){
var self__ = this;
var ___$1 = this;
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(s);
}));

(wscljs.format.t_wscljs$format27860.prototype.wscljs$format$Format$write$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
return cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0));
}));

(wscljs.format.t_wscljs$format27860.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta27861","meta27861",1607424993,null)], null);
}));

(wscljs.format.t_wscljs$format27860.cljs$lang$type = true);

(wscljs.format.t_wscljs$format27860.cljs$lang$ctorStr = "wscljs.format/t_wscljs$format27860");

(wscljs.format.t_wscljs$format27860.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"wscljs.format/t_wscljs$format27860");
}));

/**
 * Positional factory function for wscljs.format/t_wscljs$format27860.
 */
wscljs.format.__GT_t_wscljs$format27860 = (function wscljs$format$__GT_t_wscljs$format27860(meta27861){
return (new wscljs.format.t_wscljs$format27860(meta27861));
});

}

return (new wscljs.format.t_wscljs$format27860(cljs.core.PersistentArrayMap.EMPTY));
})()
;

//# sourceMappingURL=wscljs.format.js.map
