goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__32366 = arguments.length;
switch (G__32366) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32368 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32368 = (function (f,blockable,meta32369){
this.f = f;
this.blockable = blockable;
this.meta32369 = meta32369;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32368.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32370,meta32369__$1){
var self__ = this;
var _32370__$1 = this;
return (new cljs.core.async.t_cljs$core$async32368(self__.f,self__.blockable,meta32369__$1));
}));

(cljs.core.async.t_cljs$core$async32368.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32370){
var self__ = this;
var _32370__$1 = this;
return self__.meta32369;
}));

(cljs.core.async.t_cljs$core$async32368.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32368.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32368.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async32368.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async32368.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta32369","meta32369",-313801746,null)], null);
}));

(cljs.core.async.t_cljs$core$async32368.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32368.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32368");

(cljs.core.async.t_cljs$core$async32368.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async32368");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32368.
 */
cljs.core.async.__GT_t_cljs$core$async32368 = (function cljs$core$async$__GT_t_cljs$core$async32368(f__$1,blockable__$1,meta32369){
return (new cljs.core.async.t_cljs$core$async32368(f__$1,blockable__$1,meta32369));
});

}

return (new cljs.core.async.t_cljs$core$async32368(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__32379 = arguments.length;
switch (G__32379) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__32382 = arguments.length;
switch (G__32382) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__32386 = arguments.length;
switch (G__32386) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_34053 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_34053) : fn1.call(null,val_34053));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_34053) : fn1.call(null,val_34053));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__32391 = arguments.length;
switch (G__32391) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4613__auto___34061 = n;
var x_34062 = (0);
while(true){
if((x_34062 < n__4613__auto___34061)){
(a[x_34062] = x_34062);

var G__34063 = (x_34062 + (1));
x_34062 = G__34063;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32398 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32398 = (function (flag,meta32399){
this.flag = flag;
this.meta32399 = meta32399;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32398.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32400,meta32399__$1){
var self__ = this;
var _32400__$1 = this;
return (new cljs.core.async.t_cljs$core$async32398(self__.flag,meta32399__$1));
}));

(cljs.core.async.t_cljs$core$async32398.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32400){
var self__ = this;
var _32400__$1 = this;
return self__.meta32399;
}));

(cljs.core.async.t_cljs$core$async32398.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32398.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async32398.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32398.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async32398.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta32399","meta32399",-1676543641,null)], null);
}));

(cljs.core.async.t_cljs$core$async32398.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32398.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32398");

(cljs.core.async.t_cljs$core$async32398.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async32398");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32398.
 */
cljs.core.async.__GT_t_cljs$core$async32398 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async32398(flag__$1,meta32399){
return (new cljs.core.async.t_cljs$core$async32398(flag__$1,meta32399));
});

}

return (new cljs.core.async.t_cljs$core$async32398(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32404 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32404 = (function (flag,cb,meta32405){
this.flag = flag;
this.cb = cb;
this.meta32405 = meta32405;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32404.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32406,meta32405__$1){
var self__ = this;
var _32406__$1 = this;
return (new cljs.core.async.t_cljs$core$async32404(self__.flag,self__.cb,meta32405__$1));
}));

(cljs.core.async.t_cljs$core$async32404.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32406){
var self__ = this;
var _32406__$1 = this;
return self__.meta32405;
}));

(cljs.core.async.t_cljs$core$async32404.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32404.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async32404.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32404.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async32404.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta32405","meta32405",120143907,null)], null);
}));

(cljs.core.async.t_cljs$core$async32404.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32404.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32404");

(cljs.core.async.t_cljs$core$async32404.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async32404");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32404.
 */
cljs.core.async.__GT_t_cljs$core$async32404 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async32404(flag__$1,cb__$1,meta32405){
return (new cljs.core.async.t_cljs$core$async32404(flag__$1,cb__$1,meta32405));
});

}

return (new cljs.core.async.t_cljs$core$async32404(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__32414_SHARP_){
var G__32418 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32414_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__32418) : fret.call(null,G__32418));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__32415_SHARP_){
var G__32420 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32415_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__32420) : fret.call(null,G__32420));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4126__auto__ = wport;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return port;
}
})()], null));
} else {
var G__34077 = (i + (1));
i = G__34077;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4126__auto__ = ret;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4115__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4115__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___34078 = arguments.length;
var i__4737__auto___34079 = (0);
while(true){
if((i__4737__auto___34079 < len__4736__auto___34078)){
args__4742__auto__.push((arguments[i__4737__auto___34079]));

var G__34080 = (i__4737__auto___34079 + (1));
i__4737__auto___34079 = G__34080;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__32433){
var map__32434 = p__32433;
var map__32434__$1 = (((((!((map__32434 == null))))?(((((map__32434.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32434.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32434):map__32434);
var opts = map__32434__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq32429){
var G__32430 = cljs.core.first(seq32429);
var seq32429__$1 = cljs.core.next(seq32429);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32430,seq32429__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__32456 = arguments.length;
switch (G__32456) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__32297__auto___34082 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32298__auto__ = (function (){var switch__32252__auto__ = (function (state_32481){
var state_val_32485 = (state_32481[(1)]);
if((state_val_32485 === (7))){
var inst_32476 = (state_32481[(2)]);
var state_32481__$1 = state_32481;
var statearr_32487_34083 = state_32481__$1;
(statearr_32487_34083[(2)] = inst_32476);

(statearr_32487_34083[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32485 === (1))){
var state_32481__$1 = state_32481;
var statearr_32488_34084 = state_32481__$1;
(statearr_32488_34084[(2)] = null);

(statearr_32488_34084[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32485 === (4))){
var inst_32459 = (state_32481[(7)]);
var inst_32459__$1 = (state_32481[(2)]);
var inst_32460 = (inst_32459__$1 == null);
var state_32481__$1 = (function (){var statearr_32490 = state_32481;
(statearr_32490[(7)] = inst_32459__$1);

return statearr_32490;
})();
if(cljs.core.truth_(inst_32460)){
var statearr_32491_34087 = state_32481__$1;
(statearr_32491_34087[(1)] = (5));

} else {
var statearr_32492_34088 = state_32481__$1;
(statearr_32492_34088[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32485 === (13))){
var state_32481__$1 = state_32481;
var statearr_32493_34089 = state_32481__$1;
(statearr_32493_34089[(2)] = null);

(statearr_32493_34089[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32485 === (6))){
var inst_32459 = (state_32481[(7)]);
var state_32481__$1 = state_32481;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32481__$1,(11),to,inst_32459);
} else {
if((state_val_32485 === (3))){
var inst_32478 = (state_32481[(2)]);
var state_32481__$1 = state_32481;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32481__$1,inst_32478);
} else {
if((state_val_32485 === (12))){
var state_32481__$1 = state_32481;
var statearr_32497_34090 = state_32481__$1;
(statearr_32497_34090[(2)] = null);

(statearr_32497_34090[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32485 === (2))){
var state_32481__$1 = state_32481;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32481__$1,(4),from);
} else {
if((state_val_32485 === (11))){
var inst_32469 = (state_32481[(2)]);
var state_32481__$1 = state_32481;
if(cljs.core.truth_(inst_32469)){
var statearr_32499_34091 = state_32481__$1;
(statearr_32499_34091[(1)] = (12));

} else {
var statearr_32500_34092 = state_32481__$1;
(statearr_32500_34092[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32485 === (9))){
var state_32481__$1 = state_32481;
var statearr_32501_34093 = state_32481__$1;
(statearr_32501_34093[(2)] = null);

(statearr_32501_34093[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32485 === (5))){
var state_32481__$1 = state_32481;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32502_34094 = state_32481__$1;
(statearr_32502_34094[(1)] = (8));

} else {
var statearr_32503_34095 = state_32481__$1;
(statearr_32503_34095[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32485 === (14))){
var inst_32474 = (state_32481[(2)]);
var state_32481__$1 = state_32481;
var statearr_32508_34096 = state_32481__$1;
(statearr_32508_34096[(2)] = inst_32474);

(statearr_32508_34096[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32485 === (10))){
var inst_32466 = (state_32481[(2)]);
var state_32481__$1 = state_32481;
var statearr_32509_34097 = state_32481__$1;
(statearr_32509_34097[(2)] = inst_32466);

(statearr_32509_34097[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32485 === (8))){
var inst_32463 = cljs.core.async.close_BANG_(to);
var state_32481__$1 = state_32481;
var statearr_32510_34098 = state_32481__$1;
(statearr_32510_34098[(2)] = inst_32463);

(statearr_32510_34098[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__32253__auto__ = null;
var cljs$core$async$state_machine__32253__auto____0 = (function (){
var statearr_32511 = [null,null,null,null,null,null,null,null];
(statearr_32511[(0)] = cljs$core$async$state_machine__32253__auto__);

(statearr_32511[(1)] = (1));

return statearr_32511;
});
var cljs$core$async$state_machine__32253__auto____1 = (function (state_32481){
while(true){
var ret_value__32254__auto__ = (function (){try{while(true){
var result__32255__auto__ = switch__32252__auto__(state_32481);
if(cljs.core.keyword_identical_QMARK_(result__32255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32255__auto__;
}
break;
}
}catch (e32512){var ex__32256__auto__ = e32512;
var statearr_32513_34099 = state_32481;
(statearr_32513_34099[(2)] = ex__32256__auto__);


if(cljs.core.seq((state_32481[(4)]))){
var statearr_32520_34100 = state_32481;
(statearr_32520_34100[(1)] = cljs.core.first((state_32481[(4)])));

} else {
throw ex__32256__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34101 = state_32481;
state_32481 = G__34101;
continue;
} else {
return ret_value__32254__auto__;
}
break;
}
});
cljs$core$async$state_machine__32253__auto__ = function(state_32481){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32253__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32253__auto____1.call(this,state_32481);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32253__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32253__auto____0;
cljs$core$async$state_machine__32253__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32253__auto____1;
return cljs$core$async$state_machine__32253__auto__;
})()
})();
var state__32299__auto__ = (function (){var statearr_32524 = f__32298__auto__();
(statearr_32524[(6)] = c__32297__auto___34082);

return statearr_32524;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32299__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__32534){
var vec__32535 = p__32534;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32535,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32535,(1),null);
var job = vec__32535;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__32297__auto___34103 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32298__auto__ = (function (){var switch__32252__auto__ = (function (state_32542){
var state_val_32543 = (state_32542[(1)]);
if((state_val_32543 === (1))){
var state_32542__$1 = state_32542;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32542__$1,(2),res,v);
} else {
if((state_val_32543 === (2))){
var inst_32539 = (state_32542[(2)]);
var inst_32540 = cljs.core.async.close_BANG_(res);
var state_32542__$1 = (function (){var statearr_32544 = state_32542;
(statearr_32544[(7)] = inst_32539);

return statearr_32544;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32542__$1,inst_32540);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32253__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32253__auto____0 = (function (){
var statearr_32545 = [null,null,null,null,null,null,null,null];
(statearr_32545[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32253__auto__);

(statearr_32545[(1)] = (1));

return statearr_32545;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32253__auto____1 = (function (state_32542){
while(true){
var ret_value__32254__auto__ = (function (){try{while(true){
var result__32255__auto__ = switch__32252__auto__(state_32542);
if(cljs.core.keyword_identical_QMARK_(result__32255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32255__auto__;
}
break;
}
}catch (e32546){var ex__32256__auto__ = e32546;
var statearr_32547_34106 = state_32542;
(statearr_32547_34106[(2)] = ex__32256__auto__);


if(cljs.core.seq((state_32542[(4)]))){
var statearr_32548_34107 = state_32542;
(statearr_32548_34107[(1)] = cljs.core.first((state_32542[(4)])));

} else {
throw ex__32256__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34108 = state_32542;
state_32542 = G__34108;
continue;
} else {
return ret_value__32254__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32253__auto__ = function(state_32542){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32253__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32253__auto____1.call(this,state_32542);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32253__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32253__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32253__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32253__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32253__auto__;
})()
})();
var state__32299__auto__ = (function (){var statearr_32549 = f__32298__auto__();
(statearr_32549[(6)] = c__32297__auto___34103);

return statearr_32549;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32299__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__32552){
var vec__32553 = p__32552;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32553,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32553,(1),null);
var job = vec__32553;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4613__auto___34111 = n;
var __34112 = (0);
while(true){
if((__34112 < n__4613__auto___34111)){
var G__32559_34113 = type;
var G__32559_34114__$1 = (((G__32559_34113 instanceof cljs.core.Keyword))?G__32559_34113.fqn:null);
switch (G__32559_34114__$1) {
case "compute":
var c__32297__auto___34116 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__34112,c__32297__auto___34116,G__32559_34113,G__32559_34114__$1,n__4613__auto___34111,jobs,results,process,async){
return (function (){
var f__32298__auto__ = (function (){var switch__32252__auto__ = ((function (__34112,c__32297__auto___34116,G__32559_34113,G__32559_34114__$1,n__4613__auto___34111,jobs,results,process,async){
return (function (state_32572){
var state_val_32573 = (state_32572[(1)]);
if((state_val_32573 === (1))){
var state_32572__$1 = state_32572;
var statearr_32576_34117 = state_32572__$1;
(statearr_32576_34117[(2)] = null);

(statearr_32576_34117[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32573 === (2))){
var state_32572__$1 = state_32572;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32572__$1,(4),jobs);
} else {
if((state_val_32573 === (3))){
var inst_32570 = (state_32572[(2)]);
var state_32572__$1 = state_32572;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32572__$1,inst_32570);
} else {
if((state_val_32573 === (4))){
var inst_32562 = (state_32572[(2)]);
var inst_32563 = process(inst_32562);
var state_32572__$1 = state_32572;
if(cljs.core.truth_(inst_32563)){
var statearr_32578_34119 = state_32572__$1;
(statearr_32578_34119[(1)] = (5));

} else {
var statearr_32579_34120 = state_32572__$1;
(statearr_32579_34120[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32573 === (5))){
var state_32572__$1 = state_32572;
var statearr_32586_34122 = state_32572__$1;
(statearr_32586_34122[(2)] = null);

(statearr_32586_34122[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32573 === (6))){
var state_32572__$1 = state_32572;
var statearr_32587_34123 = state_32572__$1;
(statearr_32587_34123[(2)] = null);

(statearr_32587_34123[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32573 === (7))){
var inst_32568 = (state_32572[(2)]);
var state_32572__$1 = state_32572;
var statearr_32588_34124 = state_32572__$1;
(statearr_32588_34124[(2)] = inst_32568);

(statearr_32588_34124[(1)] = (3));


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
});})(__34112,c__32297__auto___34116,G__32559_34113,G__32559_34114__$1,n__4613__auto___34111,jobs,results,process,async))
;
return ((function (__34112,switch__32252__auto__,c__32297__auto___34116,G__32559_34113,G__32559_34114__$1,n__4613__auto___34111,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32253__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32253__auto____0 = (function (){
var statearr_32594 = [null,null,null,null,null,null,null];
(statearr_32594[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32253__auto__);

(statearr_32594[(1)] = (1));

return statearr_32594;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32253__auto____1 = (function (state_32572){
while(true){
var ret_value__32254__auto__ = (function (){try{while(true){
var result__32255__auto__ = switch__32252__auto__(state_32572);
if(cljs.core.keyword_identical_QMARK_(result__32255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32255__auto__;
}
break;
}
}catch (e32595){var ex__32256__auto__ = e32595;
var statearr_32596_34125 = state_32572;
(statearr_32596_34125[(2)] = ex__32256__auto__);


if(cljs.core.seq((state_32572[(4)]))){
var statearr_32597_34126 = state_32572;
(statearr_32597_34126[(1)] = cljs.core.first((state_32572[(4)])));

} else {
throw ex__32256__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34127 = state_32572;
state_32572 = G__34127;
continue;
} else {
return ret_value__32254__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32253__auto__ = function(state_32572){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32253__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32253__auto____1.call(this,state_32572);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32253__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32253__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32253__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32253__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32253__auto__;
})()
;})(__34112,switch__32252__auto__,c__32297__auto___34116,G__32559_34113,G__32559_34114__$1,n__4613__auto___34111,jobs,results,process,async))
})();
var state__32299__auto__ = (function (){var statearr_32598 = f__32298__auto__();
(statearr_32598[(6)] = c__32297__auto___34116);

return statearr_32598;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32299__auto__);
});})(__34112,c__32297__auto___34116,G__32559_34113,G__32559_34114__$1,n__4613__auto___34111,jobs,results,process,async))
);


break;
case "async":
var c__32297__auto___34130 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__34112,c__32297__auto___34130,G__32559_34113,G__32559_34114__$1,n__4613__auto___34111,jobs,results,process,async){
return (function (){
var f__32298__auto__ = (function (){var switch__32252__auto__ = ((function (__34112,c__32297__auto___34130,G__32559_34113,G__32559_34114__$1,n__4613__auto___34111,jobs,results,process,async){
return (function (state_32658){
var state_val_32659 = (state_32658[(1)]);
if((state_val_32659 === (1))){
var state_32658__$1 = state_32658;
var statearr_32693_34131 = state_32658__$1;
(statearr_32693_34131[(2)] = null);

(statearr_32693_34131[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32659 === (2))){
var state_32658__$1 = state_32658;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32658__$1,(4),jobs);
} else {
if((state_val_32659 === (3))){
var inst_32652 = (state_32658[(2)]);
var state_32658__$1 = state_32658;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32658__$1,inst_32652);
} else {
if((state_val_32659 === (4))){
var inst_32642 = (state_32658[(2)]);
var inst_32644 = async(inst_32642);
var state_32658__$1 = state_32658;
if(cljs.core.truth_(inst_32644)){
var statearr_32698_34132 = state_32658__$1;
(statearr_32698_34132[(1)] = (5));

} else {
var statearr_32699_34133 = state_32658__$1;
(statearr_32699_34133[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32659 === (5))){
var state_32658__$1 = state_32658;
var statearr_32700_34134 = state_32658__$1;
(statearr_32700_34134[(2)] = null);

(statearr_32700_34134[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32659 === (6))){
var state_32658__$1 = state_32658;
var statearr_32701_34135 = state_32658__$1;
(statearr_32701_34135[(2)] = null);

(statearr_32701_34135[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32659 === (7))){
var inst_32650 = (state_32658[(2)]);
var state_32658__$1 = state_32658;
var statearr_32703_34136 = state_32658__$1;
(statearr_32703_34136[(2)] = inst_32650);

(statearr_32703_34136[(1)] = (3));


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
});})(__34112,c__32297__auto___34130,G__32559_34113,G__32559_34114__$1,n__4613__auto___34111,jobs,results,process,async))
;
return ((function (__34112,switch__32252__auto__,c__32297__auto___34130,G__32559_34113,G__32559_34114__$1,n__4613__auto___34111,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32253__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32253__auto____0 = (function (){
var statearr_32704 = [null,null,null,null,null,null,null];
(statearr_32704[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32253__auto__);

(statearr_32704[(1)] = (1));

return statearr_32704;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32253__auto____1 = (function (state_32658){
while(true){
var ret_value__32254__auto__ = (function (){try{while(true){
var result__32255__auto__ = switch__32252__auto__(state_32658);
if(cljs.core.keyword_identical_QMARK_(result__32255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32255__auto__;
}
break;
}
}catch (e32705){var ex__32256__auto__ = e32705;
var statearr_32706_34139 = state_32658;
(statearr_32706_34139[(2)] = ex__32256__auto__);


if(cljs.core.seq((state_32658[(4)]))){
var statearr_32707_34140 = state_32658;
(statearr_32707_34140[(1)] = cljs.core.first((state_32658[(4)])));

} else {
throw ex__32256__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34141 = state_32658;
state_32658 = G__34141;
continue;
} else {
return ret_value__32254__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32253__auto__ = function(state_32658){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32253__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32253__auto____1.call(this,state_32658);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32253__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32253__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32253__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32253__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32253__auto__;
})()
;})(__34112,switch__32252__auto__,c__32297__auto___34130,G__32559_34113,G__32559_34114__$1,n__4613__auto___34111,jobs,results,process,async))
})();
var state__32299__auto__ = (function (){var statearr_32717 = f__32298__auto__();
(statearr_32717[(6)] = c__32297__auto___34130);

return statearr_32717;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32299__auto__);
});})(__34112,c__32297__auto___34130,G__32559_34113,G__32559_34114__$1,n__4613__auto___34111,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32559_34114__$1)].join('')));

}

var G__34142 = (__34112 + (1));
__34112 = G__34142;
continue;
} else {
}
break;
}

var c__32297__auto___34143 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32298__auto__ = (function (){var switch__32252__auto__ = (function (state_32739){
var state_val_32740 = (state_32739[(1)]);
if((state_val_32740 === (7))){
var inst_32735 = (state_32739[(2)]);
var state_32739__$1 = state_32739;
var statearr_32741_34144 = state_32739__$1;
(statearr_32741_34144[(2)] = inst_32735);

(statearr_32741_34144[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32740 === (1))){
var state_32739__$1 = state_32739;
var statearr_32743_34145 = state_32739__$1;
(statearr_32743_34145[(2)] = null);

(statearr_32743_34145[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32740 === (4))){
var inst_32720 = (state_32739[(7)]);
var inst_32720__$1 = (state_32739[(2)]);
var inst_32721 = (inst_32720__$1 == null);
var state_32739__$1 = (function (){var statearr_32747 = state_32739;
(statearr_32747[(7)] = inst_32720__$1);

return statearr_32747;
})();
if(cljs.core.truth_(inst_32721)){
var statearr_32748_34146 = state_32739__$1;
(statearr_32748_34146[(1)] = (5));

} else {
var statearr_32750_34147 = state_32739__$1;
(statearr_32750_34147[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32740 === (6))){
var inst_32720 = (state_32739[(7)]);
var inst_32725 = (state_32739[(8)]);
var inst_32725__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_32726 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32727 = [inst_32720,inst_32725__$1];
var inst_32728 = (new cljs.core.PersistentVector(null,2,(5),inst_32726,inst_32727,null));
var state_32739__$1 = (function (){var statearr_32752 = state_32739;
(statearr_32752[(8)] = inst_32725__$1);

return statearr_32752;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32739__$1,(8),jobs,inst_32728);
} else {
if((state_val_32740 === (3))){
var inst_32737 = (state_32739[(2)]);
var state_32739__$1 = state_32739;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32739__$1,inst_32737);
} else {
if((state_val_32740 === (2))){
var state_32739__$1 = state_32739;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32739__$1,(4),from);
} else {
if((state_val_32740 === (9))){
var inst_32732 = (state_32739[(2)]);
var state_32739__$1 = (function (){var statearr_32754 = state_32739;
(statearr_32754[(9)] = inst_32732);

return statearr_32754;
})();
var statearr_32755_34150 = state_32739__$1;
(statearr_32755_34150[(2)] = null);

(statearr_32755_34150[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32740 === (5))){
var inst_32723 = cljs.core.async.close_BANG_(jobs);
var state_32739__$1 = state_32739;
var statearr_32756_34151 = state_32739__$1;
(statearr_32756_34151[(2)] = inst_32723);

(statearr_32756_34151[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32740 === (8))){
var inst_32725 = (state_32739[(8)]);
var inst_32730 = (state_32739[(2)]);
var state_32739__$1 = (function (){var statearr_32757 = state_32739;
(statearr_32757[(10)] = inst_32730);

return statearr_32757;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32739__$1,(9),results,inst_32725);
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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32253__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32253__auto____0 = (function (){
var statearr_32758 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32758[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32253__auto__);

(statearr_32758[(1)] = (1));

return statearr_32758;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32253__auto____1 = (function (state_32739){
while(true){
var ret_value__32254__auto__ = (function (){try{while(true){
var result__32255__auto__ = switch__32252__auto__(state_32739);
if(cljs.core.keyword_identical_QMARK_(result__32255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32255__auto__;
}
break;
}
}catch (e32760){var ex__32256__auto__ = e32760;
var statearr_32761_34152 = state_32739;
(statearr_32761_34152[(2)] = ex__32256__auto__);


if(cljs.core.seq((state_32739[(4)]))){
var statearr_32762_34153 = state_32739;
(statearr_32762_34153[(1)] = cljs.core.first((state_32739[(4)])));

} else {
throw ex__32256__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34155 = state_32739;
state_32739 = G__34155;
continue;
} else {
return ret_value__32254__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32253__auto__ = function(state_32739){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32253__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32253__auto____1.call(this,state_32739);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32253__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32253__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32253__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32253__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32253__auto__;
})()
})();
var state__32299__auto__ = (function (){var statearr_32765 = f__32298__auto__();
(statearr_32765[(6)] = c__32297__auto___34143);

return statearr_32765;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32299__auto__);
}));


var c__32297__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32298__auto__ = (function (){var switch__32252__auto__ = (function (state_32804){
var state_val_32805 = (state_32804[(1)]);
if((state_val_32805 === (7))){
var inst_32800 = (state_32804[(2)]);
var state_32804__$1 = state_32804;
var statearr_32806_34156 = state_32804__$1;
(statearr_32806_34156[(2)] = inst_32800);

(statearr_32806_34156[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32805 === (20))){
var state_32804__$1 = state_32804;
var statearr_32807_34157 = state_32804__$1;
(statearr_32807_34157[(2)] = null);

(statearr_32807_34157[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32805 === (1))){
var state_32804__$1 = state_32804;
var statearr_32808_34158 = state_32804__$1;
(statearr_32808_34158[(2)] = null);

(statearr_32808_34158[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32805 === (4))){
var inst_32769 = (state_32804[(7)]);
var inst_32769__$1 = (state_32804[(2)]);
var inst_32770 = (inst_32769__$1 == null);
var state_32804__$1 = (function (){var statearr_32809 = state_32804;
(statearr_32809[(7)] = inst_32769__$1);

return statearr_32809;
})();
if(cljs.core.truth_(inst_32770)){
var statearr_32810_34159 = state_32804__$1;
(statearr_32810_34159[(1)] = (5));

} else {
var statearr_32811_34160 = state_32804__$1;
(statearr_32811_34160[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32805 === (15))){
var inst_32782 = (state_32804[(8)]);
var state_32804__$1 = state_32804;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32804__$1,(18),to,inst_32782);
} else {
if((state_val_32805 === (21))){
var inst_32795 = (state_32804[(2)]);
var state_32804__$1 = state_32804;
var statearr_32812_34161 = state_32804__$1;
(statearr_32812_34161[(2)] = inst_32795);

(statearr_32812_34161[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32805 === (13))){
var inst_32797 = (state_32804[(2)]);
var state_32804__$1 = (function (){var statearr_32813 = state_32804;
(statearr_32813[(9)] = inst_32797);

return statearr_32813;
})();
var statearr_32814_34166 = state_32804__$1;
(statearr_32814_34166[(2)] = null);

(statearr_32814_34166[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32805 === (6))){
var inst_32769 = (state_32804[(7)]);
var state_32804__$1 = state_32804;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32804__$1,(11),inst_32769);
} else {
if((state_val_32805 === (17))){
var inst_32790 = (state_32804[(2)]);
var state_32804__$1 = state_32804;
if(cljs.core.truth_(inst_32790)){
var statearr_32815_34167 = state_32804__$1;
(statearr_32815_34167[(1)] = (19));

} else {
var statearr_32816_34168 = state_32804__$1;
(statearr_32816_34168[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32805 === (3))){
var inst_32802 = (state_32804[(2)]);
var state_32804__$1 = state_32804;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32804__$1,inst_32802);
} else {
if((state_val_32805 === (12))){
var inst_32779 = (state_32804[(10)]);
var state_32804__$1 = state_32804;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32804__$1,(14),inst_32779);
} else {
if((state_val_32805 === (2))){
var state_32804__$1 = state_32804;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32804__$1,(4),results);
} else {
if((state_val_32805 === (19))){
var state_32804__$1 = state_32804;
var statearr_32817_34169 = state_32804__$1;
(statearr_32817_34169[(2)] = null);

(statearr_32817_34169[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32805 === (11))){
var inst_32779 = (state_32804[(2)]);
var state_32804__$1 = (function (){var statearr_32818 = state_32804;
(statearr_32818[(10)] = inst_32779);

return statearr_32818;
})();
var statearr_32819_34170 = state_32804__$1;
(statearr_32819_34170[(2)] = null);

(statearr_32819_34170[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32805 === (9))){
var state_32804__$1 = state_32804;
var statearr_32820_34171 = state_32804__$1;
(statearr_32820_34171[(2)] = null);

(statearr_32820_34171[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32805 === (5))){
var state_32804__$1 = state_32804;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32821_34172 = state_32804__$1;
(statearr_32821_34172[(1)] = (8));

} else {
var statearr_32822_34173 = state_32804__$1;
(statearr_32822_34173[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32805 === (14))){
var inst_32782 = (state_32804[(8)]);
var inst_32782__$1 = (state_32804[(2)]);
var inst_32783 = (inst_32782__$1 == null);
var inst_32784 = cljs.core.not(inst_32783);
var state_32804__$1 = (function (){var statearr_32823 = state_32804;
(statearr_32823[(8)] = inst_32782__$1);

return statearr_32823;
})();
if(inst_32784){
var statearr_32824_34174 = state_32804__$1;
(statearr_32824_34174[(1)] = (15));

} else {
var statearr_32825_34175 = state_32804__$1;
(statearr_32825_34175[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32805 === (16))){
var state_32804__$1 = state_32804;
var statearr_32826_34176 = state_32804__$1;
(statearr_32826_34176[(2)] = false);

(statearr_32826_34176[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32805 === (10))){
var inst_32776 = (state_32804[(2)]);
var state_32804__$1 = state_32804;
var statearr_32827_34177 = state_32804__$1;
(statearr_32827_34177[(2)] = inst_32776);

(statearr_32827_34177[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32805 === (18))){
var inst_32787 = (state_32804[(2)]);
var state_32804__$1 = state_32804;
var statearr_32828_34178 = state_32804__$1;
(statearr_32828_34178[(2)] = inst_32787);

(statearr_32828_34178[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32805 === (8))){
var inst_32773 = cljs.core.async.close_BANG_(to);
var state_32804__$1 = state_32804;
var statearr_32829_34179 = state_32804__$1;
(statearr_32829_34179[(2)] = inst_32773);

(statearr_32829_34179[(1)] = (10));


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
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32253__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32253__auto____0 = (function (){
var statearr_32830 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32830[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32253__auto__);

(statearr_32830[(1)] = (1));

return statearr_32830;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32253__auto____1 = (function (state_32804){
while(true){
var ret_value__32254__auto__ = (function (){try{while(true){
var result__32255__auto__ = switch__32252__auto__(state_32804);
if(cljs.core.keyword_identical_QMARK_(result__32255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32255__auto__;
}
break;
}
}catch (e32831){var ex__32256__auto__ = e32831;
var statearr_32832_34182 = state_32804;
(statearr_32832_34182[(2)] = ex__32256__auto__);


if(cljs.core.seq((state_32804[(4)]))){
var statearr_32833_34183 = state_32804;
(statearr_32833_34183[(1)] = cljs.core.first((state_32804[(4)])));

} else {
throw ex__32256__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34184 = state_32804;
state_32804 = G__34184;
continue;
} else {
return ret_value__32254__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32253__auto__ = function(state_32804){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32253__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32253__auto____1.call(this,state_32804);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32253__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32253__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32253__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32253__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32253__auto__;
})()
})();
var state__32299__auto__ = (function (){var statearr_32834 = f__32298__auto__();
(statearr_32834[(6)] = c__32297__auto__);

return statearr_32834;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32299__auto__);
}));

return c__32297__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__32836 = arguments.length;
switch (G__32836) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__32838 = arguments.length;
switch (G__32838) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__32840 = arguments.length;
switch (G__32840) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__32297__auto___34201 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32298__auto__ = (function (){var switch__32252__auto__ = (function (state_32866){
var state_val_32867 = (state_32866[(1)]);
if((state_val_32867 === (7))){
var inst_32862 = (state_32866[(2)]);
var state_32866__$1 = state_32866;
var statearr_32868_34202 = state_32866__$1;
(statearr_32868_34202[(2)] = inst_32862);

(statearr_32868_34202[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32867 === (1))){
var state_32866__$1 = state_32866;
var statearr_32869_34203 = state_32866__$1;
(statearr_32869_34203[(2)] = null);

(statearr_32869_34203[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32867 === (4))){
var inst_32843 = (state_32866[(7)]);
var inst_32843__$1 = (state_32866[(2)]);
var inst_32844 = (inst_32843__$1 == null);
var state_32866__$1 = (function (){var statearr_32870 = state_32866;
(statearr_32870[(7)] = inst_32843__$1);

return statearr_32870;
})();
if(cljs.core.truth_(inst_32844)){
var statearr_32871_34207 = state_32866__$1;
(statearr_32871_34207[(1)] = (5));

} else {
var statearr_32872_34208 = state_32866__$1;
(statearr_32872_34208[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32867 === (13))){
var state_32866__$1 = state_32866;
var statearr_32873_34209 = state_32866__$1;
(statearr_32873_34209[(2)] = null);

(statearr_32873_34209[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32867 === (6))){
var inst_32843 = (state_32866[(7)]);
var inst_32849 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_32843) : p.call(null,inst_32843));
var state_32866__$1 = state_32866;
if(cljs.core.truth_(inst_32849)){
var statearr_32874_34214 = state_32866__$1;
(statearr_32874_34214[(1)] = (9));

} else {
var statearr_32875_34215 = state_32866__$1;
(statearr_32875_34215[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32867 === (3))){
var inst_32864 = (state_32866[(2)]);
var state_32866__$1 = state_32866;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32866__$1,inst_32864);
} else {
if((state_val_32867 === (12))){
var state_32866__$1 = state_32866;
var statearr_32876_34219 = state_32866__$1;
(statearr_32876_34219[(2)] = null);

(statearr_32876_34219[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32867 === (2))){
var state_32866__$1 = state_32866;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32866__$1,(4),ch);
} else {
if((state_val_32867 === (11))){
var inst_32843 = (state_32866[(7)]);
var inst_32853 = (state_32866[(2)]);
var state_32866__$1 = state_32866;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32866__$1,(8),inst_32853,inst_32843);
} else {
if((state_val_32867 === (9))){
var state_32866__$1 = state_32866;
var statearr_32877_34220 = state_32866__$1;
(statearr_32877_34220[(2)] = tc);

(statearr_32877_34220[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32867 === (5))){
var inst_32846 = cljs.core.async.close_BANG_(tc);
var inst_32847 = cljs.core.async.close_BANG_(fc);
var state_32866__$1 = (function (){var statearr_32878 = state_32866;
(statearr_32878[(8)] = inst_32846);

return statearr_32878;
})();
var statearr_32879_34224 = state_32866__$1;
(statearr_32879_34224[(2)] = inst_32847);

(statearr_32879_34224[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32867 === (14))){
var inst_32860 = (state_32866[(2)]);
var state_32866__$1 = state_32866;
var statearr_32880_34225 = state_32866__$1;
(statearr_32880_34225[(2)] = inst_32860);

(statearr_32880_34225[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32867 === (10))){
var state_32866__$1 = state_32866;
var statearr_32881_34226 = state_32866__$1;
(statearr_32881_34226[(2)] = fc);

(statearr_32881_34226[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32867 === (8))){
var inst_32855 = (state_32866[(2)]);
var state_32866__$1 = state_32866;
if(cljs.core.truth_(inst_32855)){
var statearr_32882_34230 = state_32866__$1;
(statearr_32882_34230[(1)] = (12));

} else {
var statearr_32883_34231 = state_32866__$1;
(statearr_32883_34231[(1)] = (13));

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
});
return (function() {
var cljs$core$async$state_machine__32253__auto__ = null;
var cljs$core$async$state_machine__32253__auto____0 = (function (){
var statearr_32884 = [null,null,null,null,null,null,null,null,null];
(statearr_32884[(0)] = cljs$core$async$state_machine__32253__auto__);

(statearr_32884[(1)] = (1));

return statearr_32884;
});
var cljs$core$async$state_machine__32253__auto____1 = (function (state_32866){
while(true){
var ret_value__32254__auto__ = (function (){try{while(true){
var result__32255__auto__ = switch__32252__auto__(state_32866);
if(cljs.core.keyword_identical_QMARK_(result__32255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32255__auto__;
}
break;
}
}catch (e32885){var ex__32256__auto__ = e32885;
var statearr_32886_34235 = state_32866;
(statearr_32886_34235[(2)] = ex__32256__auto__);


if(cljs.core.seq((state_32866[(4)]))){
var statearr_32887_34236 = state_32866;
(statearr_32887_34236[(1)] = cljs.core.first((state_32866[(4)])));

} else {
throw ex__32256__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34237 = state_32866;
state_32866 = G__34237;
continue;
} else {
return ret_value__32254__auto__;
}
break;
}
});
cljs$core$async$state_machine__32253__auto__ = function(state_32866){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32253__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32253__auto____1.call(this,state_32866);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32253__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32253__auto____0;
cljs$core$async$state_machine__32253__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32253__auto____1;
return cljs$core$async$state_machine__32253__auto__;
})()
})();
var state__32299__auto__ = (function (){var statearr_32888 = f__32298__auto__();
(statearr_32888[(6)] = c__32297__auto___34201);

return statearr_32888;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32299__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__32297__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32298__auto__ = (function (){var switch__32252__auto__ = (function (state_32910){
var state_val_32911 = (state_32910[(1)]);
if((state_val_32911 === (7))){
var inst_32906 = (state_32910[(2)]);
var state_32910__$1 = state_32910;
var statearr_32912_34238 = state_32910__$1;
(statearr_32912_34238[(2)] = inst_32906);

(statearr_32912_34238[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32911 === (1))){
var inst_32889 = init;
var inst_32890 = inst_32889;
var state_32910__$1 = (function (){var statearr_32913 = state_32910;
(statearr_32913[(7)] = inst_32890);

return statearr_32913;
})();
var statearr_32914_34240 = state_32910__$1;
(statearr_32914_34240[(2)] = null);

(statearr_32914_34240[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32911 === (4))){
var inst_32893 = (state_32910[(8)]);
var inst_32893__$1 = (state_32910[(2)]);
var inst_32894 = (inst_32893__$1 == null);
var state_32910__$1 = (function (){var statearr_32915 = state_32910;
(statearr_32915[(8)] = inst_32893__$1);

return statearr_32915;
})();
if(cljs.core.truth_(inst_32894)){
var statearr_32916_34241 = state_32910__$1;
(statearr_32916_34241[(1)] = (5));

} else {
var statearr_32917_34242 = state_32910__$1;
(statearr_32917_34242[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32911 === (6))){
var inst_32890 = (state_32910[(7)]);
var inst_32893 = (state_32910[(8)]);
var inst_32897 = (state_32910[(9)]);
var inst_32897__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_32890,inst_32893) : f.call(null,inst_32890,inst_32893));
var inst_32898 = cljs.core.reduced_QMARK_(inst_32897__$1);
var state_32910__$1 = (function (){var statearr_32918 = state_32910;
(statearr_32918[(9)] = inst_32897__$1);

return statearr_32918;
})();
if(inst_32898){
var statearr_32919_34243 = state_32910__$1;
(statearr_32919_34243[(1)] = (8));

} else {
var statearr_32920_34244 = state_32910__$1;
(statearr_32920_34244[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32911 === (3))){
var inst_32908 = (state_32910[(2)]);
var state_32910__$1 = state_32910;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32910__$1,inst_32908);
} else {
if((state_val_32911 === (2))){
var state_32910__$1 = state_32910;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32910__$1,(4),ch);
} else {
if((state_val_32911 === (9))){
var inst_32897 = (state_32910[(9)]);
var inst_32890 = inst_32897;
var state_32910__$1 = (function (){var statearr_32921 = state_32910;
(statearr_32921[(7)] = inst_32890);

return statearr_32921;
})();
var statearr_32922_34245 = state_32910__$1;
(statearr_32922_34245[(2)] = null);

(statearr_32922_34245[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32911 === (5))){
var inst_32890 = (state_32910[(7)]);
var state_32910__$1 = state_32910;
var statearr_32923_34246 = state_32910__$1;
(statearr_32923_34246[(2)] = inst_32890);

(statearr_32923_34246[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32911 === (10))){
var inst_32904 = (state_32910[(2)]);
var state_32910__$1 = state_32910;
var statearr_32924_34247 = state_32910__$1;
(statearr_32924_34247[(2)] = inst_32904);

(statearr_32924_34247[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32911 === (8))){
var inst_32897 = (state_32910[(9)]);
var inst_32900 = cljs.core.deref(inst_32897);
var state_32910__$1 = state_32910;
var statearr_32925_34248 = state_32910__$1;
(statearr_32925_34248[(2)] = inst_32900);

(statearr_32925_34248[(1)] = (10));


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
});
return (function() {
var cljs$core$async$reduce_$_state_machine__32253__auto__ = null;
var cljs$core$async$reduce_$_state_machine__32253__auto____0 = (function (){
var statearr_32926 = [null,null,null,null,null,null,null,null,null,null];
(statearr_32926[(0)] = cljs$core$async$reduce_$_state_machine__32253__auto__);

(statearr_32926[(1)] = (1));

return statearr_32926;
});
var cljs$core$async$reduce_$_state_machine__32253__auto____1 = (function (state_32910){
while(true){
var ret_value__32254__auto__ = (function (){try{while(true){
var result__32255__auto__ = switch__32252__auto__(state_32910);
if(cljs.core.keyword_identical_QMARK_(result__32255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32255__auto__;
}
break;
}
}catch (e32927){var ex__32256__auto__ = e32927;
var statearr_32928_34249 = state_32910;
(statearr_32928_34249[(2)] = ex__32256__auto__);


if(cljs.core.seq((state_32910[(4)]))){
var statearr_32929_34250 = state_32910;
(statearr_32929_34250[(1)] = cljs.core.first((state_32910[(4)])));

} else {
throw ex__32256__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34251 = state_32910;
state_32910 = G__34251;
continue;
} else {
return ret_value__32254__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__32253__auto__ = function(state_32910){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__32253__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__32253__auto____1.call(this,state_32910);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__32253__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__32253__auto____0;
cljs$core$async$reduce_$_state_machine__32253__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__32253__auto____1;
return cljs$core$async$reduce_$_state_machine__32253__auto__;
})()
})();
var state__32299__auto__ = (function (){var statearr_32930 = f__32298__auto__();
(statearr_32930[(6)] = c__32297__auto__);

return statearr_32930;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32299__auto__);
}));

return c__32297__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__32297__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32298__auto__ = (function (){var switch__32252__auto__ = (function (state_32936){
var state_val_32937 = (state_32936[(1)]);
if((state_val_32937 === (1))){
var inst_32931 = cljs.core.async.reduce(f__$1,init,ch);
var state_32936__$1 = state_32936;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32936__$1,(2),inst_32931);
} else {
if((state_val_32937 === (2))){
var inst_32933 = (state_32936[(2)]);
var inst_32934 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_32933) : f__$1.call(null,inst_32933));
var state_32936__$1 = state_32936;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32936__$1,inst_32934);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__32253__auto__ = null;
var cljs$core$async$transduce_$_state_machine__32253__auto____0 = (function (){
var statearr_32938 = [null,null,null,null,null,null,null];
(statearr_32938[(0)] = cljs$core$async$transduce_$_state_machine__32253__auto__);

(statearr_32938[(1)] = (1));

return statearr_32938;
});
var cljs$core$async$transduce_$_state_machine__32253__auto____1 = (function (state_32936){
while(true){
var ret_value__32254__auto__ = (function (){try{while(true){
var result__32255__auto__ = switch__32252__auto__(state_32936);
if(cljs.core.keyword_identical_QMARK_(result__32255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32255__auto__;
}
break;
}
}catch (e32939){var ex__32256__auto__ = e32939;
var statearr_32940_34252 = state_32936;
(statearr_32940_34252[(2)] = ex__32256__auto__);


if(cljs.core.seq((state_32936[(4)]))){
var statearr_32941_34253 = state_32936;
(statearr_32941_34253[(1)] = cljs.core.first((state_32936[(4)])));

} else {
throw ex__32256__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34256 = state_32936;
state_32936 = G__34256;
continue;
} else {
return ret_value__32254__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__32253__auto__ = function(state_32936){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__32253__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__32253__auto____1.call(this,state_32936);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__32253__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__32253__auto____0;
cljs$core$async$transduce_$_state_machine__32253__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__32253__auto____1;
return cljs$core$async$transduce_$_state_machine__32253__auto__;
})()
})();
var state__32299__auto__ = (function (){var statearr_32942 = f__32298__auto__();
(statearr_32942[(6)] = c__32297__auto__);

return statearr_32942;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32299__auto__);
}));

return c__32297__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__32944 = arguments.length;
switch (G__32944) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__32297__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32298__auto__ = (function (){var switch__32252__auto__ = (function (state_32969){
var state_val_32970 = (state_32969[(1)]);
if((state_val_32970 === (7))){
var inst_32951 = (state_32969[(2)]);
var state_32969__$1 = state_32969;
var statearr_32971_34263 = state_32969__$1;
(statearr_32971_34263[(2)] = inst_32951);

(statearr_32971_34263[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32970 === (1))){
var inst_32945 = cljs.core.seq(coll);
var inst_32946 = inst_32945;
var state_32969__$1 = (function (){var statearr_32972 = state_32969;
(statearr_32972[(7)] = inst_32946);

return statearr_32972;
})();
var statearr_32973_34265 = state_32969__$1;
(statearr_32973_34265[(2)] = null);

(statearr_32973_34265[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32970 === (4))){
var inst_32946 = (state_32969[(7)]);
var inst_32949 = cljs.core.first(inst_32946);
var state_32969__$1 = state_32969;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32969__$1,(7),ch,inst_32949);
} else {
if((state_val_32970 === (13))){
var inst_32963 = (state_32969[(2)]);
var state_32969__$1 = state_32969;
var statearr_32974_34267 = state_32969__$1;
(statearr_32974_34267[(2)] = inst_32963);

(statearr_32974_34267[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32970 === (6))){
var inst_32954 = (state_32969[(2)]);
var state_32969__$1 = state_32969;
if(cljs.core.truth_(inst_32954)){
var statearr_32975_34268 = state_32969__$1;
(statearr_32975_34268[(1)] = (8));

} else {
var statearr_32976_34269 = state_32969__$1;
(statearr_32976_34269[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32970 === (3))){
var inst_32967 = (state_32969[(2)]);
var state_32969__$1 = state_32969;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32969__$1,inst_32967);
} else {
if((state_val_32970 === (12))){
var state_32969__$1 = state_32969;
var statearr_32977_34270 = state_32969__$1;
(statearr_32977_34270[(2)] = null);

(statearr_32977_34270[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32970 === (2))){
var inst_32946 = (state_32969[(7)]);
var state_32969__$1 = state_32969;
if(cljs.core.truth_(inst_32946)){
var statearr_32978_34271 = state_32969__$1;
(statearr_32978_34271[(1)] = (4));

} else {
var statearr_32979_34272 = state_32969__$1;
(statearr_32979_34272[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32970 === (11))){
var inst_32960 = cljs.core.async.close_BANG_(ch);
var state_32969__$1 = state_32969;
var statearr_32980_34273 = state_32969__$1;
(statearr_32980_34273[(2)] = inst_32960);

(statearr_32980_34273[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32970 === (9))){
var state_32969__$1 = state_32969;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32981_34274 = state_32969__$1;
(statearr_32981_34274[(1)] = (11));

} else {
var statearr_32982_34275 = state_32969__$1;
(statearr_32982_34275[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32970 === (5))){
var inst_32946 = (state_32969[(7)]);
var state_32969__$1 = state_32969;
var statearr_32983_34276 = state_32969__$1;
(statearr_32983_34276[(2)] = inst_32946);

(statearr_32983_34276[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32970 === (10))){
var inst_32965 = (state_32969[(2)]);
var state_32969__$1 = state_32969;
var statearr_32984_34278 = state_32969__$1;
(statearr_32984_34278[(2)] = inst_32965);

(statearr_32984_34278[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32970 === (8))){
var inst_32946 = (state_32969[(7)]);
var inst_32956 = cljs.core.next(inst_32946);
var inst_32946__$1 = inst_32956;
var state_32969__$1 = (function (){var statearr_32985 = state_32969;
(statearr_32985[(7)] = inst_32946__$1);

return statearr_32985;
})();
var statearr_32986_34282 = state_32969__$1;
(statearr_32986_34282[(2)] = null);

(statearr_32986_34282[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__32253__auto__ = null;
var cljs$core$async$state_machine__32253__auto____0 = (function (){
var statearr_32987 = [null,null,null,null,null,null,null,null];
(statearr_32987[(0)] = cljs$core$async$state_machine__32253__auto__);

(statearr_32987[(1)] = (1));

return statearr_32987;
});
var cljs$core$async$state_machine__32253__auto____1 = (function (state_32969){
while(true){
var ret_value__32254__auto__ = (function (){try{while(true){
var result__32255__auto__ = switch__32252__auto__(state_32969);
if(cljs.core.keyword_identical_QMARK_(result__32255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32255__auto__;
}
break;
}
}catch (e32988){var ex__32256__auto__ = e32988;
var statearr_32989_34287 = state_32969;
(statearr_32989_34287[(2)] = ex__32256__auto__);


if(cljs.core.seq((state_32969[(4)]))){
var statearr_32990_34288 = state_32969;
(statearr_32990_34288[(1)] = cljs.core.first((state_32969[(4)])));

} else {
throw ex__32256__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34289 = state_32969;
state_32969 = G__34289;
continue;
} else {
return ret_value__32254__auto__;
}
break;
}
});
cljs$core$async$state_machine__32253__auto__ = function(state_32969){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32253__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32253__auto____1.call(this,state_32969);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32253__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32253__auto____0;
cljs$core$async$state_machine__32253__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32253__auto____1;
return cljs$core$async$state_machine__32253__auto__;
})()
})();
var state__32299__auto__ = (function (){var statearr_32991 = f__32298__auto__();
(statearr_32991[(6)] = c__32297__auto__);

return statearr_32991;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32299__auto__);
}));

return c__32297__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__32993 = arguments.length;
switch (G__32993) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_34304 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_34304(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_34305 = (function (m,ch,close_QMARK_){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4429__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4426__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_34305(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_34306 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_34306(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_34307 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_34307(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32994 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32994 = (function (ch,cs,meta32995){
this.ch = ch;
this.cs = cs;
this.meta32995 = meta32995;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32994.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32996,meta32995__$1){
var self__ = this;
var _32996__$1 = this;
return (new cljs.core.async.t_cljs$core$async32994(self__.ch,self__.cs,meta32995__$1));
}));

(cljs.core.async.t_cljs$core$async32994.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32996){
var self__ = this;
var _32996__$1 = this;
return self__.meta32995;
}));

(cljs.core.async.t_cljs$core$async32994.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32994.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async32994.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32994.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async32994.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async32994.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async32994.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta32995","meta32995",-400217025,null)], null);
}));

(cljs.core.async.t_cljs$core$async32994.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32994.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32994");

(cljs.core.async.t_cljs$core$async32994.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async32994");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32994.
 */
cljs.core.async.__GT_t_cljs$core$async32994 = (function cljs$core$async$mult_$___GT_t_cljs$core$async32994(ch__$1,cs__$1,meta32995){
return (new cljs.core.async.t_cljs$core$async32994(ch__$1,cs__$1,meta32995));
});

}

return (new cljs.core.async.t_cljs$core$async32994(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__32297__auto___34314 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32298__auto__ = (function (){var switch__32252__auto__ = (function (state_33129){
var state_val_33130 = (state_33129[(1)]);
if((state_val_33130 === (7))){
var inst_33125 = (state_33129[(2)]);
var state_33129__$1 = state_33129;
var statearr_33131_34315 = state_33129__$1;
(statearr_33131_34315[(2)] = inst_33125);

(statearr_33131_34315[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33130 === (20))){
var inst_33030 = (state_33129[(7)]);
var inst_33042 = cljs.core.first(inst_33030);
var inst_33043 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33042,(0),null);
var inst_33044 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33042,(1),null);
var state_33129__$1 = (function (){var statearr_33132 = state_33129;
(statearr_33132[(8)] = inst_33043);

return statearr_33132;
})();
if(cljs.core.truth_(inst_33044)){
var statearr_33133_34322 = state_33129__$1;
(statearr_33133_34322[(1)] = (22));

} else {
var statearr_33134_34323 = state_33129__$1;
(statearr_33134_34323[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33130 === (27))){
var inst_33074 = (state_33129[(9)]);
var inst_32999 = (state_33129[(10)]);
var inst_33072 = (state_33129[(11)]);
var inst_33079 = (state_33129[(12)]);
var inst_33079__$1 = cljs.core._nth(inst_33072,inst_33074);
var inst_33080 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_33079__$1,inst_32999,done);
var state_33129__$1 = (function (){var statearr_33135 = state_33129;
(statearr_33135[(12)] = inst_33079__$1);

return statearr_33135;
})();
if(cljs.core.truth_(inst_33080)){
var statearr_33136_34324 = state_33129__$1;
(statearr_33136_34324[(1)] = (30));

} else {
var statearr_33137_34325 = state_33129__$1;
(statearr_33137_34325[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33130 === (1))){
var state_33129__$1 = state_33129;
var statearr_33138_34326 = state_33129__$1;
(statearr_33138_34326[(2)] = null);

(statearr_33138_34326[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33130 === (24))){
var inst_33030 = (state_33129[(7)]);
var inst_33049 = (state_33129[(2)]);
var inst_33050 = cljs.core.next(inst_33030);
var inst_33008 = inst_33050;
var inst_33009 = null;
var inst_33010 = (0);
var inst_33011 = (0);
var state_33129__$1 = (function (){var statearr_33139 = state_33129;
(statearr_33139[(13)] = inst_33008);

(statearr_33139[(14)] = inst_33009);

(statearr_33139[(15)] = inst_33010);

(statearr_33139[(16)] = inst_33049);

(statearr_33139[(17)] = inst_33011);

return statearr_33139;
})();
var statearr_33140_34327 = state_33129__$1;
(statearr_33140_34327[(2)] = null);

(statearr_33140_34327[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33130 === (39))){
var state_33129__$1 = state_33129;
var statearr_33144_34328 = state_33129__$1;
(statearr_33144_34328[(2)] = null);

(statearr_33144_34328[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33130 === (4))){
var inst_32999 = (state_33129[(10)]);
var inst_32999__$1 = (state_33129[(2)]);
var inst_33000 = (inst_32999__$1 == null);
var state_33129__$1 = (function (){var statearr_33145 = state_33129;
(statearr_33145[(10)] = inst_32999__$1);

return statearr_33145;
})();
if(cljs.core.truth_(inst_33000)){
var statearr_33146_34329 = state_33129__$1;
(statearr_33146_34329[(1)] = (5));

} else {
var statearr_33147_34330 = state_33129__$1;
(statearr_33147_34330[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33130 === (15))){
var inst_33008 = (state_33129[(13)]);
var inst_33009 = (state_33129[(14)]);
var inst_33010 = (state_33129[(15)]);
var inst_33011 = (state_33129[(17)]);
var inst_33026 = (state_33129[(2)]);
var inst_33027 = (inst_33011 + (1));
var tmp33141 = inst_33008;
var tmp33142 = inst_33009;
var tmp33143 = inst_33010;
var inst_33008__$1 = tmp33141;
var inst_33009__$1 = tmp33142;
var inst_33010__$1 = tmp33143;
var inst_33011__$1 = inst_33027;
var state_33129__$1 = (function (){var statearr_33148 = state_33129;
(statearr_33148[(13)] = inst_33008__$1);

(statearr_33148[(18)] = inst_33026);

(statearr_33148[(14)] = inst_33009__$1);

(statearr_33148[(15)] = inst_33010__$1);

(statearr_33148[(17)] = inst_33011__$1);

return statearr_33148;
})();
var statearr_33149_34337 = state_33129__$1;
(statearr_33149_34337[(2)] = null);

(statearr_33149_34337[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33130 === (21))){
var inst_33053 = (state_33129[(2)]);
var state_33129__$1 = state_33129;
var statearr_33153_34338 = state_33129__$1;
(statearr_33153_34338[(2)] = inst_33053);

(statearr_33153_34338[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33130 === (31))){
var inst_33079 = (state_33129[(12)]);
var inst_33083 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_33079);
var state_33129__$1 = state_33129;
var statearr_33154_34339 = state_33129__$1;
(statearr_33154_34339[(2)] = inst_33083);

(statearr_33154_34339[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33130 === (32))){
var inst_33071 = (state_33129[(19)]);
var inst_33074 = (state_33129[(9)]);
var inst_33073 = (state_33129[(20)]);
var inst_33072 = (state_33129[(11)]);
var inst_33085 = (state_33129[(2)]);
var inst_33086 = (inst_33074 + (1));
var tmp33150 = inst_33071;
var tmp33151 = inst_33073;
var tmp33152 = inst_33072;
var inst_33071__$1 = tmp33150;
var inst_33072__$1 = tmp33152;
var inst_33073__$1 = tmp33151;
var inst_33074__$1 = inst_33086;
var state_33129__$1 = (function (){var statearr_33155 = state_33129;
(statearr_33155[(19)] = inst_33071__$1);

(statearr_33155[(9)] = inst_33074__$1);

(statearr_33155[(20)] = inst_33073__$1);

(statearr_33155[(11)] = inst_33072__$1);

(statearr_33155[(21)] = inst_33085);

return statearr_33155;
})();
var statearr_33156_34340 = state_33129__$1;
(statearr_33156_34340[(2)] = null);

(statearr_33156_34340[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33130 === (40))){
var inst_33098 = (state_33129[(22)]);
var inst_33102 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_33098);
var state_33129__$1 = state_33129;
var statearr_33157_34341 = state_33129__$1;
(statearr_33157_34341[(2)] = inst_33102);

(statearr_33157_34341[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33130 === (33))){
var inst_33089 = (state_33129[(23)]);
var inst_33091 = cljs.core.chunked_seq_QMARK_(inst_33089);
var state_33129__$1 = state_33129;
if(inst_33091){
var statearr_33158_34342 = state_33129__$1;
(statearr_33158_34342[(1)] = (36));

} else {
var statearr_33159_34343 = state_33129__$1;
(statearr_33159_34343[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33130 === (13))){
var inst_33020 = (state_33129[(24)]);
var inst_33023 = cljs.core.async.close_BANG_(inst_33020);
var state_33129__$1 = state_33129;
var statearr_33160_34344 = state_33129__$1;
(statearr_33160_34344[(2)] = inst_33023);

(statearr_33160_34344[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33130 === (22))){
var inst_33043 = (state_33129[(8)]);
var inst_33046 = cljs.core.async.close_BANG_(inst_33043);
var state_33129__$1 = state_33129;
var statearr_33161_34345 = state_33129__$1;
(statearr_33161_34345[(2)] = inst_33046);

(statearr_33161_34345[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33130 === (36))){
var inst_33089 = (state_33129[(23)]);
var inst_33093 = cljs.core.chunk_first(inst_33089);
var inst_33094 = cljs.core.chunk_rest(inst_33089);
var inst_33095 = cljs.core.count(inst_33093);
var inst_33071 = inst_33094;
var inst_33072 = inst_33093;
var inst_33073 = inst_33095;
var inst_33074 = (0);
var state_33129__$1 = (function (){var statearr_33162 = state_33129;
(statearr_33162[(19)] = inst_33071);

(statearr_33162[(9)] = inst_33074);

(statearr_33162[(20)] = inst_33073);

(statearr_33162[(11)] = inst_33072);

return statearr_33162;
})();
var statearr_33163_34346 = state_33129__$1;
(statearr_33163_34346[(2)] = null);

(statearr_33163_34346[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33130 === (41))){
var inst_33089 = (state_33129[(23)]);
var inst_33104 = (state_33129[(2)]);
var inst_33105 = cljs.core.next(inst_33089);
var inst_33071 = inst_33105;
var inst_33072 = null;
var inst_33073 = (0);
var inst_33074 = (0);
var state_33129__$1 = (function (){var statearr_33164 = state_33129;
(statearr_33164[(19)] = inst_33071);

(statearr_33164[(9)] = inst_33074);

(statearr_33164[(20)] = inst_33073);

(statearr_33164[(25)] = inst_33104);

(statearr_33164[(11)] = inst_33072);

return statearr_33164;
})();
var statearr_33165_34347 = state_33129__$1;
(statearr_33165_34347[(2)] = null);

(statearr_33165_34347[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33130 === (43))){
var state_33129__$1 = state_33129;
var statearr_33166_34348 = state_33129__$1;
(statearr_33166_34348[(2)] = null);

(statearr_33166_34348[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33130 === (29))){
var inst_33113 = (state_33129[(2)]);
var state_33129__$1 = state_33129;
var statearr_33167_34349 = state_33129__$1;
(statearr_33167_34349[(2)] = inst_33113);

(statearr_33167_34349[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33130 === (44))){
var inst_33122 = (state_33129[(2)]);
var state_33129__$1 = (function (){var statearr_33168 = state_33129;
(statearr_33168[(26)] = inst_33122);

return statearr_33168;
})();
var statearr_33169_34350 = state_33129__$1;
(statearr_33169_34350[(2)] = null);

(statearr_33169_34350[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33130 === (6))){
var inst_33063 = (state_33129[(27)]);
var inst_33062 = cljs.core.deref(cs);
var inst_33063__$1 = cljs.core.keys(inst_33062);
var inst_33064 = cljs.core.count(inst_33063__$1);
var inst_33065 = cljs.core.reset_BANG_(dctr,inst_33064);
var inst_33070 = cljs.core.seq(inst_33063__$1);
var inst_33071 = inst_33070;
var inst_33072 = null;
var inst_33073 = (0);
var inst_33074 = (0);
var state_33129__$1 = (function (){var statearr_33170 = state_33129;
(statearr_33170[(28)] = inst_33065);

(statearr_33170[(19)] = inst_33071);

(statearr_33170[(9)] = inst_33074);

(statearr_33170[(27)] = inst_33063__$1);

(statearr_33170[(20)] = inst_33073);

(statearr_33170[(11)] = inst_33072);

return statearr_33170;
})();
var statearr_33171_34351 = state_33129__$1;
(statearr_33171_34351[(2)] = null);

(statearr_33171_34351[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33130 === (28))){
var inst_33071 = (state_33129[(19)]);
var inst_33089 = (state_33129[(23)]);
var inst_33089__$1 = cljs.core.seq(inst_33071);
var state_33129__$1 = (function (){var statearr_33172 = state_33129;
(statearr_33172[(23)] = inst_33089__$1);

return statearr_33172;
})();
if(inst_33089__$1){
var statearr_33173_34352 = state_33129__$1;
(statearr_33173_34352[(1)] = (33));

} else {
var statearr_33174_34353 = state_33129__$1;
(statearr_33174_34353[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33130 === (25))){
var inst_33074 = (state_33129[(9)]);
var inst_33073 = (state_33129[(20)]);
var inst_33076 = (inst_33074 < inst_33073);
var inst_33077 = inst_33076;
var state_33129__$1 = state_33129;
if(cljs.core.truth_(inst_33077)){
var statearr_33175_34355 = state_33129__$1;
(statearr_33175_34355[(1)] = (27));

} else {
var statearr_33176_34356 = state_33129__$1;
(statearr_33176_34356[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33130 === (34))){
var state_33129__$1 = state_33129;
var statearr_33177_34361 = state_33129__$1;
(statearr_33177_34361[(2)] = null);

(statearr_33177_34361[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33130 === (17))){
var state_33129__$1 = state_33129;
var statearr_33178_34362 = state_33129__$1;
(statearr_33178_34362[(2)] = null);

(statearr_33178_34362[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33130 === (3))){
var inst_33127 = (state_33129[(2)]);
var state_33129__$1 = state_33129;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33129__$1,inst_33127);
} else {
if((state_val_33130 === (12))){
var inst_33058 = (state_33129[(2)]);
var state_33129__$1 = state_33129;
var statearr_33179_34363 = state_33129__$1;
(statearr_33179_34363[(2)] = inst_33058);

(statearr_33179_34363[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33130 === (2))){
var state_33129__$1 = state_33129;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33129__$1,(4),ch);
} else {
if((state_val_33130 === (23))){
var state_33129__$1 = state_33129;
var statearr_33180_34364 = state_33129__$1;
(statearr_33180_34364[(2)] = null);

(statearr_33180_34364[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33130 === (35))){
var inst_33111 = (state_33129[(2)]);
var state_33129__$1 = state_33129;
var statearr_33181_34365 = state_33129__$1;
(statearr_33181_34365[(2)] = inst_33111);

(statearr_33181_34365[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33130 === (19))){
var inst_33030 = (state_33129[(7)]);
var inst_33034 = cljs.core.chunk_first(inst_33030);
var inst_33035 = cljs.core.chunk_rest(inst_33030);
var inst_33036 = cljs.core.count(inst_33034);
var inst_33008 = inst_33035;
var inst_33009 = inst_33034;
var inst_33010 = inst_33036;
var inst_33011 = (0);
var state_33129__$1 = (function (){var statearr_33182 = state_33129;
(statearr_33182[(13)] = inst_33008);

(statearr_33182[(14)] = inst_33009);

(statearr_33182[(15)] = inst_33010);

(statearr_33182[(17)] = inst_33011);

return statearr_33182;
})();
var statearr_33183_34366 = state_33129__$1;
(statearr_33183_34366[(2)] = null);

(statearr_33183_34366[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33130 === (11))){
var inst_33008 = (state_33129[(13)]);
var inst_33030 = (state_33129[(7)]);
var inst_33030__$1 = cljs.core.seq(inst_33008);
var state_33129__$1 = (function (){var statearr_33184 = state_33129;
(statearr_33184[(7)] = inst_33030__$1);

return statearr_33184;
})();
if(inst_33030__$1){
var statearr_33185_34367 = state_33129__$1;
(statearr_33185_34367[(1)] = (16));

} else {
var statearr_33186_34368 = state_33129__$1;
(statearr_33186_34368[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33130 === (9))){
var inst_33060 = (state_33129[(2)]);
var state_33129__$1 = state_33129;
var statearr_33187_34369 = state_33129__$1;
(statearr_33187_34369[(2)] = inst_33060);

(statearr_33187_34369[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33130 === (5))){
var inst_33006 = cljs.core.deref(cs);
var inst_33007 = cljs.core.seq(inst_33006);
var inst_33008 = inst_33007;
var inst_33009 = null;
var inst_33010 = (0);
var inst_33011 = (0);
var state_33129__$1 = (function (){var statearr_33188 = state_33129;
(statearr_33188[(13)] = inst_33008);

(statearr_33188[(14)] = inst_33009);

(statearr_33188[(15)] = inst_33010);

(statearr_33188[(17)] = inst_33011);

return statearr_33188;
})();
var statearr_33189_34372 = state_33129__$1;
(statearr_33189_34372[(2)] = null);

(statearr_33189_34372[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33130 === (14))){
var state_33129__$1 = state_33129;
var statearr_33190_34373 = state_33129__$1;
(statearr_33190_34373[(2)] = null);

(statearr_33190_34373[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33130 === (45))){
var inst_33119 = (state_33129[(2)]);
var state_33129__$1 = state_33129;
var statearr_33191_34374 = state_33129__$1;
(statearr_33191_34374[(2)] = inst_33119);

(statearr_33191_34374[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33130 === (26))){
var inst_33063 = (state_33129[(27)]);
var inst_33115 = (state_33129[(2)]);
var inst_33116 = cljs.core.seq(inst_33063);
var state_33129__$1 = (function (){var statearr_33192 = state_33129;
(statearr_33192[(29)] = inst_33115);

return statearr_33192;
})();
if(inst_33116){
var statearr_33193_34375 = state_33129__$1;
(statearr_33193_34375[(1)] = (42));

} else {
var statearr_33194_34376 = state_33129__$1;
(statearr_33194_34376[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33130 === (16))){
var inst_33030 = (state_33129[(7)]);
var inst_33032 = cljs.core.chunked_seq_QMARK_(inst_33030);
var state_33129__$1 = state_33129;
if(inst_33032){
var statearr_33195_34379 = state_33129__$1;
(statearr_33195_34379[(1)] = (19));

} else {
var statearr_33196_34380 = state_33129__$1;
(statearr_33196_34380[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33130 === (38))){
var inst_33108 = (state_33129[(2)]);
var state_33129__$1 = state_33129;
var statearr_33197_34381 = state_33129__$1;
(statearr_33197_34381[(2)] = inst_33108);

(statearr_33197_34381[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33130 === (30))){
var state_33129__$1 = state_33129;
var statearr_33198_34382 = state_33129__$1;
(statearr_33198_34382[(2)] = null);

(statearr_33198_34382[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33130 === (10))){
var inst_33009 = (state_33129[(14)]);
var inst_33011 = (state_33129[(17)]);
var inst_33019 = cljs.core._nth(inst_33009,inst_33011);
var inst_33020 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33019,(0),null);
var inst_33021 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33019,(1),null);
var state_33129__$1 = (function (){var statearr_33199 = state_33129;
(statearr_33199[(24)] = inst_33020);

return statearr_33199;
})();
if(cljs.core.truth_(inst_33021)){
var statearr_33200_34383 = state_33129__$1;
(statearr_33200_34383[(1)] = (13));

} else {
var statearr_33201_34384 = state_33129__$1;
(statearr_33201_34384[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33130 === (18))){
var inst_33056 = (state_33129[(2)]);
var state_33129__$1 = state_33129;
var statearr_33202_34385 = state_33129__$1;
(statearr_33202_34385[(2)] = inst_33056);

(statearr_33202_34385[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33130 === (42))){
var state_33129__$1 = state_33129;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33129__$1,(45),dchan);
} else {
if((state_val_33130 === (37))){
var inst_33089 = (state_33129[(23)]);
var inst_33098 = (state_33129[(22)]);
var inst_32999 = (state_33129[(10)]);
var inst_33098__$1 = cljs.core.first(inst_33089);
var inst_33099 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_33098__$1,inst_32999,done);
var state_33129__$1 = (function (){var statearr_33203 = state_33129;
(statearr_33203[(22)] = inst_33098__$1);

return statearr_33203;
})();
if(cljs.core.truth_(inst_33099)){
var statearr_33204_34386 = state_33129__$1;
(statearr_33204_34386[(1)] = (39));

} else {
var statearr_33205_34387 = state_33129__$1;
(statearr_33205_34387[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33130 === (8))){
var inst_33010 = (state_33129[(15)]);
var inst_33011 = (state_33129[(17)]);
var inst_33013 = (inst_33011 < inst_33010);
var inst_33014 = inst_33013;
var state_33129__$1 = state_33129;
if(cljs.core.truth_(inst_33014)){
var statearr_33206_34388 = state_33129__$1;
(statearr_33206_34388[(1)] = (10));

} else {
var statearr_33207_34389 = state_33129__$1;
(statearr_33207_34389[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__32253__auto__ = null;
var cljs$core$async$mult_$_state_machine__32253__auto____0 = (function (){
var statearr_33208 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33208[(0)] = cljs$core$async$mult_$_state_machine__32253__auto__);

(statearr_33208[(1)] = (1));

return statearr_33208;
});
var cljs$core$async$mult_$_state_machine__32253__auto____1 = (function (state_33129){
while(true){
var ret_value__32254__auto__ = (function (){try{while(true){
var result__32255__auto__ = switch__32252__auto__(state_33129);
if(cljs.core.keyword_identical_QMARK_(result__32255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32255__auto__;
}
break;
}
}catch (e33209){var ex__32256__auto__ = e33209;
var statearr_33210_34392 = state_33129;
(statearr_33210_34392[(2)] = ex__32256__auto__);


if(cljs.core.seq((state_33129[(4)]))){
var statearr_33211_34393 = state_33129;
(statearr_33211_34393[(1)] = cljs.core.first((state_33129[(4)])));

} else {
throw ex__32256__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34394 = state_33129;
state_33129 = G__34394;
continue;
} else {
return ret_value__32254__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__32253__auto__ = function(state_33129){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__32253__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__32253__auto____1.call(this,state_33129);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__32253__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__32253__auto____0;
cljs$core$async$mult_$_state_machine__32253__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__32253__auto____1;
return cljs$core$async$mult_$_state_machine__32253__auto__;
})()
})();
var state__32299__auto__ = (function (){var statearr_33212 = f__32298__auto__();
(statearr_33212[(6)] = c__32297__auto___34314);

return statearr_33212;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32299__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__33214 = arguments.length;
switch (G__33214) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_34396 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_34396(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_34397 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_34397(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_34398 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_34398(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_34400 = (function (m,state_map){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4429__auto__.call(null,m,state_map));
} else {
var m__4426__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4426__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_34400(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_34401 = (function (m,mode){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4429__auto__.call(null,m,mode));
} else {
var m__4426__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4426__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_34401(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___34406 = arguments.length;
var i__4737__auto___34407 = (0);
while(true){
if((i__4737__auto___34407 < len__4736__auto___34406)){
args__4742__auto__.push((arguments[i__4737__auto___34407]));

var G__34408 = (i__4737__auto___34407 + (1));
i__4737__auto___34407 = G__34408;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__33219){
var map__33220 = p__33219;
var map__33220__$1 = (((((!((map__33220 == null))))?(((((map__33220.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33220.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33220):map__33220);
var opts = map__33220__$1;
var statearr_33222_34409 = state;
(statearr_33222_34409[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_33223_34410 = state;
(statearr_33223_34410[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_33224_34411 = state;
(statearr_33224_34411[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq33215){
var G__33216 = cljs.core.first(seq33215);
var seq33215__$1 = cljs.core.next(seq33215);
var G__33217 = cljs.core.first(seq33215__$1);
var seq33215__$2 = cljs.core.next(seq33215__$1);
var G__33218 = cljs.core.first(seq33215__$2);
var seq33215__$3 = cljs.core.next(seq33215__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33216,G__33217,G__33218,seq33215__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33225 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33225 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta33226){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta33226 = meta33226;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33225.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33227,meta33226__$1){
var self__ = this;
var _33227__$1 = this;
return (new cljs.core.async.t_cljs$core$async33225(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta33226__$1));
}));

(cljs.core.async.t_cljs$core$async33225.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33227){
var self__ = this;
var _33227__$1 = this;
return self__.meta33226;
}));

(cljs.core.async.t_cljs$core$async33225.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33225.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async33225.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33225.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33225.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33225.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33225.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33225.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33225.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta33226","meta33226",726552479,null)], null);
}));

(cljs.core.async.t_cljs$core$async33225.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33225.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33225");

(cljs.core.async.t_cljs$core$async33225.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async33225");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33225.
 */
cljs.core.async.__GT_t_cljs$core$async33225 = (function cljs$core$async$mix_$___GT_t_cljs$core$async33225(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta33226){
return (new cljs.core.async.t_cljs$core$async33225(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta33226));
});

}

return (new cljs.core.async.t_cljs$core$async33225(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__32297__auto___34432 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32298__auto__ = (function (){var switch__32252__auto__ = (function (state_33329){
var state_val_33330 = (state_33329[(1)]);
if((state_val_33330 === (7))){
var inst_33244 = (state_33329[(2)]);
var state_33329__$1 = state_33329;
var statearr_33331_34433 = state_33329__$1;
(statearr_33331_34433[(2)] = inst_33244);

(statearr_33331_34433[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33330 === (20))){
var inst_33256 = (state_33329[(7)]);
var state_33329__$1 = state_33329;
var statearr_33332_34434 = state_33329__$1;
(statearr_33332_34434[(2)] = inst_33256);

(statearr_33332_34434[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33330 === (27))){
var state_33329__$1 = state_33329;
var statearr_33333_34435 = state_33329__$1;
(statearr_33333_34435[(2)] = null);

(statearr_33333_34435[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33330 === (1))){
var inst_33231 = (state_33329[(8)]);
var inst_33231__$1 = calc_state();
var inst_33233 = (inst_33231__$1 == null);
var inst_33234 = cljs.core.not(inst_33233);
var state_33329__$1 = (function (){var statearr_33334 = state_33329;
(statearr_33334[(8)] = inst_33231__$1);

return statearr_33334;
})();
if(inst_33234){
var statearr_33335_34438 = state_33329__$1;
(statearr_33335_34438[(1)] = (2));

} else {
var statearr_33336_34439 = state_33329__$1;
(statearr_33336_34439[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33330 === (24))){
var inst_33280 = (state_33329[(9)]);
var inst_33289 = (state_33329[(10)]);
var inst_33303 = (state_33329[(11)]);
var inst_33303__$1 = (inst_33280.cljs$core$IFn$_invoke$arity$1 ? inst_33280.cljs$core$IFn$_invoke$arity$1(inst_33289) : inst_33280.call(null,inst_33289));
var state_33329__$1 = (function (){var statearr_33337 = state_33329;
(statearr_33337[(11)] = inst_33303__$1);

return statearr_33337;
})();
if(cljs.core.truth_(inst_33303__$1)){
var statearr_33338_34440 = state_33329__$1;
(statearr_33338_34440[(1)] = (29));

} else {
var statearr_33339_34441 = state_33329__$1;
(statearr_33339_34441[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33330 === (4))){
var inst_33247 = (state_33329[(2)]);
var state_33329__$1 = state_33329;
if(cljs.core.truth_(inst_33247)){
var statearr_33340_34442 = state_33329__$1;
(statearr_33340_34442[(1)] = (8));

} else {
var statearr_33341_34443 = state_33329__$1;
(statearr_33341_34443[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33330 === (15))){
var inst_33274 = (state_33329[(2)]);
var state_33329__$1 = state_33329;
if(cljs.core.truth_(inst_33274)){
var statearr_33342_34444 = state_33329__$1;
(statearr_33342_34444[(1)] = (19));

} else {
var statearr_33343_34445 = state_33329__$1;
(statearr_33343_34445[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33330 === (21))){
var inst_33279 = (state_33329[(12)]);
var inst_33279__$1 = (state_33329[(2)]);
var inst_33280 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33279__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33281 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33279__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33282 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33279__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_33329__$1 = (function (){var statearr_33344 = state_33329;
(statearr_33344[(9)] = inst_33280);

(statearr_33344[(13)] = inst_33281);

(statearr_33344[(12)] = inst_33279__$1);

return statearr_33344;
})();
return cljs.core.async.ioc_alts_BANG_(state_33329__$1,(22),inst_33282);
} else {
if((state_val_33330 === (31))){
var inst_33311 = (state_33329[(2)]);
var state_33329__$1 = state_33329;
if(cljs.core.truth_(inst_33311)){
var statearr_33345_34446 = state_33329__$1;
(statearr_33345_34446[(1)] = (32));

} else {
var statearr_33346_34447 = state_33329__$1;
(statearr_33346_34447[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33330 === (32))){
var inst_33288 = (state_33329[(14)]);
var state_33329__$1 = state_33329;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33329__$1,(35),out,inst_33288);
} else {
if((state_val_33330 === (33))){
var inst_33279 = (state_33329[(12)]);
var inst_33256 = inst_33279;
var state_33329__$1 = (function (){var statearr_33347 = state_33329;
(statearr_33347[(7)] = inst_33256);

return statearr_33347;
})();
var statearr_33348_34448 = state_33329__$1;
(statearr_33348_34448[(2)] = null);

(statearr_33348_34448[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33330 === (13))){
var inst_33256 = (state_33329[(7)]);
var inst_33263 = inst_33256.cljs$lang$protocol_mask$partition0$;
var inst_33264 = (inst_33263 & (64));
var inst_33265 = inst_33256.cljs$core$ISeq$;
var inst_33266 = (cljs.core.PROTOCOL_SENTINEL === inst_33265);
var inst_33267 = ((inst_33264) || (inst_33266));
var state_33329__$1 = state_33329;
if(cljs.core.truth_(inst_33267)){
var statearr_33349_34449 = state_33329__$1;
(statearr_33349_34449[(1)] = (16));

} else {
var statearr_33350_34450 = state_33329__$1;
(statearr_33350_34450[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33330 === (22))){
var inst_33288 = (state_33329[(14)]);
var inst_33289 = (state_33329[(10)]);
var inst_33287 = (state_33329[(2)]);
var inst_33288__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33287,(0),null);
var inst_33289__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33287,(1),null);
var inst_33290 = (inst_33288__$1 == null);
var inst_33291 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33289__$1,change);
var inst_33292 = ((inst_33290) || (inst_33291));
var state_33329__$1 = (function (){var statearr_33351 = state_33329;
(statearr_33351[(14)] = inst_33288__$1);

(statearr_33351[(10)] = inst_33289__$1);

return statearr_33351;
})();
if(cljs.core.truth_(inst_33292)){
var statearr_33352_34451 = state_33329__$1;
(statearr_33352_34451[(1)] = (23));

} else {
var statearr_33353_34452 = state_33329__$1;
(statearr_33353_34452[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33330 === (36))){
var inst_33279 = (state_33329[(12)]);
var inst_33256 = inst_33279;
var state_33329__$1 = (function (){var statearr_33354 = state_33329;
(statearr_33354[(7)] = inst_33256);

return statearr_33354;
})();
var statearr_33355_34457 = state_33329__$1;
(statearr_33355_34457[(2)] = null);

(statearr_33355_34457[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33330 === (29))){
var inst_33303 = (state_33329[(11)]);
var state_33329__$1 = state_33329;
var statearr_33356_34458 = state_33329__$1;
(statearr_33356_34458[(2)] = inst_33303);

(statearr_33356_34458[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33330 === (6))){
var state_33329__$1 = state_33329;
var statearr_33357_34459 = state_33329__$1;
(statearr_33357_34459[(2)] = false);

(statearr_33357_34459[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33330 === (28))){
var inst_33299 = (state_33329[(2)]);
var inst_33300 = calc_state();
var inst_33256 = inst_33300;
var state_33329__$1 = (function (){var statearr_33358 = state_33329;
(statearr_33358[(7)] = inst_33256);

(statearr_33358[(15)] = inst_33299);

return statearr_33358;
})();
var statearr_33359_34460 = state_33329__$1;
(statearr_33359_34460[(2)] = null);

(statearr_33359_34460[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33330 === (25))){
var inst_33325 = (state_33329[(2)]);
var state_33329__$1 = state_33329;
var statearr_33360_34461 = state_33329__$1;
(statearr_33360_34461[(2)] = inst_33325);

(statearr_33360_34461[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33330 === (34))){
var inst_33323 = (state_33329[(2)]);
var state_33329__$1 = state_33329;
var statearr_33361_34462 = state_33329__$1;
(statearr_33361_34462[(2)] = inst_33323);

(statearr_33361_34462[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33330 === (17))){
var state_33329__$1 = state_33329;
var statearr_33362_34463 = state_33329__$1;
(statearr_33362_34463[(2)] = false);

(statearr_33362_34463[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33330 === (3))){
var state_33329__$1 = state_33329;
var statearr_33363_34464 = state_33329__$1;
(statearr_33363_34464[(2)] = false);

(statearr_33363_34464[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33330 === (12))){
var inst_33327 = (state_33329[(2)]);
var state_33329__$1 = state_33329;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33329__$1,inst_33327);
} else {
if((state_val_33330 === (2))){
var inst_33231 = (state_33329[(8)]);
var inst_33236 = inst_33231.cljs$lang$protocol_mask$partition0$;
var inst_33237 = (inst_33236 & (64));
var inst_33238 = inst_33231.cljs$core$ISeq$;
var inst_33239 = (cljs.core.PROTOCOL_SENTINEL === inst_33238);
var inst_33240 = ((inst_33237) || (inst_33239));
var state_33329__$1 = state_33329;
if(cljs.core.truth_(inst_33240)){
var statearr_33364_34465 = state_33329__$1;
(statearr_33364_34465[(1)] = (5));

} else {
var statearr_33365_34466 = state_33329__$1;
(statearr_33365_34466[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33330 === (23))){
var inst_33288 = (state_33329[(14)]);
var inst_33294 = (inst_33288 == null);
var state_33329__$1 = state_33329;
if(cljs.core.truth_(inst_33294)){
var statearr_33366_34467 = state_33329__$1;
(statearr_33366_34467[(1)] = (26));

} else {
var statearr_33367_34468 = state_33329__$1;
(statearr_33367_34468[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33330 === (35))){
var inst_33314 = (state_33329[(2)]);
var state_33329__$1 = state_33329;
if(cljs.core.truth_(inst_33314)){
var statearr_33368_34479 = state_33329__$1;
(statearr_33368_34479[(1)] = (36));

} else {
var statearr_33369_34480 = state_33329__$1;
(statearr_33369_34480[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33330 === (19))){
var inst_33256 = (state_33329[(7)]);
var inst_33276 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_33256);
var state_33329__$1 = state_33329;
var statearr_33370_34481 = state_33329__$1;
(statearr_33370_34481[(2)] = inst_33276);

(statearr_33370_34481[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33330 === (11))){
var inst_33256 = (state_33329[(7)]);
var inst_33260 = (inst_33256 == null);
var inst_33261 = cljs.core.not(inst_33260);
var state_33329__$1 = state_33329;
if(inst_33261){
var statearr_33371_34482 = state_33329__$1;
(statearr_33371_34482[(1)] = (13));

} else {
var statearr_33372_34483 = state_33329__$1;
(statearr_33372_34483[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33330 === (9))){
var inst_33231 = (state_33329[(8)]);
var state_33329__$1 = state_33329;
var statearr_33373_34484 = state_33329__$1;
(statearr_33373_34484[(2)] = inst_33231);

(statearr_33373_34484[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33330 === (5))){
var state_33329__$1 = state_33329;
var statearr_33374_34485 = state_33329__$1;
(statearr_33374_34485[(2)] = true);

(statearr_33374_34485[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33330 === (14))){
var state_33329__$1 = state_33329;
var statearr_33375_34486 = state_33329__$1;
(statearr_33375_34486[(2)] = false);

(statearr_33375_34486[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33330 === (26))){
var inst_33289 = (state_33329[(10)]);
var inst_33296 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_33289);
var state_33329__$1 = state_33329;
var statearr_33376_34487 = state_33329__$1;
(statearr_33376_34487[(2)] = inst_33296);

(statearr_33376_34487[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33330 === (16))){
var state_33329__$1 = state_33329;
var statearr_33377_34488 = state_33329__$1;
(statearr_33377_34488[(2)] = true);

(statearr_33377_34488[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33330 === (38))){
var inst_33319 = (state_33329[(2)]);
var state_33329__$1 = state_33329;
var statearr_33378_34489 = state_33329__$1;
(statearr_33378_34489[(2)] = inst_33319);

(statearr_33378_34489[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33330 === (30))){
var inst_33280 = (state_33329[(9)]);
var inst_33289 = (state_33329[(10)]);
var inst_33281 = (state_33329[(13)]);
var inst_33306 = cljs.core.empty_QMARK_(inst_33280);
var inst_33307 = (inst_33281.cljs$core$IFn$_invoke$arity$1 ? inst_33281.cljs$core$IFn$_invoke$arity$1(inst_33289) : inst_33281.call(null,inst_33289));
var inst_33308 = cljs.core.not(inst_33307);
var inst_33309 = ((inst_33306) && (inst_33308));
var state_33329__$1 = state_33329;
var statearr_33379_34490 = state_33329__$1;
(statearr_33379_34490[(2)] = inst_33309);

(statearr_33379_34490[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33330 === (10))){
var inst_33231 = (state_33329[(8)]);
var inst_33252 = (state_33329[(2)]);
var inst_33253 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33252,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33254 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33252,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33255 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33252,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_33256 = inst_33231;
var state_33329__$1 = (function (){var statearr_33380 = state_33329;
(statearr_33380[(16)] = inst_33255);

(statearr_33380[(7)] = inst_33256);

(statearr_33380[(17)] = inst_33254);

(statearr_33380[(18)] = inst_33253);

return statearr_33380;
})();
var statearr_33381_34491 = state_33329__$1;
(statearr_33381_34491[(2)] = null);

(statearr_33381_34491[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33330 === (18))){
var inst_33271 = (state_33329[(2)]);
var state_33329__$1 = state_33329;
var statearr_33382_34492 = state_33329__$1;
(statearr_33382_34492[(2)] = inst_33271);

(statearr_33382_34492[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33330 === (37))){
var state_33329__$1 = state_33329;
var statearr_33383_34493 = state_33329__$1;
(statearr_33383_34493[(2)] = null);

(statearr_33383_34493[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33330 === (8))){
var inst_33231 = (state_33329[(8)]);
var inst_33249 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_33231);
var state_33329__$1 = state_33329;
var statearr_33384_34497 = state_33329__$1;
(statearr_33384_34497[(2)] = inst_33249);

(statearr_33384_34497[(1)] = (10));


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
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__32253__auto__ = null;
var cljs$core$async$mix_$_state_machine__32253__auto____0 = (function (){
var statearr_33385 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33385[(0)] = cljs$core$async$mix_$_state_machine__32253__auto__);

(statearr_33385[(1)] = (1));

return statearr_33385;
});
var cljs$core$async$mix_$_state_machine__32253__auto____1 = (function (state_33329){
while(true){
var ret_value__32254__auto__ = (function (){try{while(true){
var result__32255__auto__ = switch__32252__auto__(state_33329);
if(cljs.core.keyword_identical_QMARK_(result__32255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32255__auto__;
}
break;
}
}catch (e33386){var ex__32256__auto__ = e33386;
var statearr_33387_34498 = state_33329;
(statearr_33387_34498[(2)] = ex__32256__auto__);


if(cljs.core.seq((state_33329[(4)]))){
var statearr_33388_34499 = state_33329;
(statearr_33388_34499[(1)] = cljs.core.first((state_33329[(4)])));

} else {
throw ex__32256__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34500 = state_33329;
state_33329 = G__34500;
continue;
} else {
return ret_value__32254__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__32253__auto__ = function(state_33329){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__32253__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__32253__auto____1.call(this,state_33329);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__32253__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__32253__auto____0;
cljs$core$async$mix_$_state_machine__32253__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__32253__auto____1;
return cljs$core$async$mix_$_state_machine__32253__auto__;
})()
})();
var state__32299__auto__ = (function (){var statearr_33389 = f__32298__auto__();
(statearr_33389[(6)] = c__32297__auto___34432);

return statearr_33389;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32299__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_34501 = (function (p,v,ch,close_QMARK_){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4429__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4426__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_34501(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_34503 = (function (p,v,ch){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4429__auto__.call(null,p,v,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4426__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_34503(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_34504 = (function() {
var G__34505 = null;
var G__34505__1 = (function (p){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4429__auto__.call(null,p));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4426__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__34505__2 = (function (p,v){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4429__auto__.call(null,p,v));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4426__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__34505 = function(p,v){
switch(arguments.length){
case 1:
return G__34505__1.call(this,p);
case 2:
return G__34505__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__34505.cljs$core$IFn$_invoke$arity$1 = G__34505__1;
G__34505.cljs$core$IFn$_invoke$arity$2 = G__34505__2;
return G__34505;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__33391 = arguments.length;
switch (G__33391) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_34504(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_34504(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__33394 = arguments.length;
switch (G__33394) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__33392_SHARP_){
if(cljs.core.truth_((p1__33392_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__33392_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__33392_SHARP_.call(null,topic)))){
return p1__33392_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__33392_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33395 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33395 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta33396){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta33396 = meta33396;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33395.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33397,meta33396__$1){
var self__ = this;
var _33397__$1 = this;
return (new cljs.core.async.t_cljs$core$async33395(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta33396__$1));
}));

(cljs.core.async.t_cljs$core$async33395.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33397){
var self__ = this;
var _33397__$1 = this;
return self__.meta33396;
}));

(cljs.core.async.t_cljs$core$async33395.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33395.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async33395.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33395.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async33395.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async33395.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async33395.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async33395.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta33396","meta33396",-993102943,null)], null);
}));

(cljs.core.async.t_cljs$core$async33395.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33395.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33395");

(cljs.core.async.t_cljs$core$async33395.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async33395");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33395.
 */
cljs.core.async.__GT_t_cljs$core$async33395 = (function cljs$core$async$__GT_t_cljs$core$async33395(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta33396){
return (new cljs.core.async.t_cljs$core$async33395(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta33396));
});

}

return (new cljs.core.async.t_cljs$core$async33395(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__32297__auto___34518 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32298__auto__ = (function (){var switch__32252__auto__ = (function (state_33469){
var state_val_33470 = (state_33469[(1)]);
if((state_val_33470 === (7))){
var inst_33465 = (state_33469[(2)]);
var state_33469__$1 = state_33469;
var statearr_33471_34519 = state_33469__$1;
(statearr_33471_34519[(2)] = inst_33465);

(statearr_33471_34519[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33470 === (20))){
var state_33469__$1 = state_33469;
var statearr_33472_34520 = state_33469__$1;
(statearr_33472_34520[(2)] = null);

(statearr_33472_34520[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33470 === (1))){
var state_33469__$1 = state_33469;
var statearr_33473_34521 = state_33469__$1;
(statearr_33473_34521[(2)] = null);

(statearr_33473_34521[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33470 === (24))){
var inst_33448 = (state_33469[(7)]);
var inst_33457 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_33448);
var state_33469__$1 = state_33469;
var statearr_33474_34522 = state_33469__$1;
(statearr_33474_34522[(2)] = inst_33457);

(statearr_33474_34522[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33470 === (4))){
var inst_33400 = (state_33469[(8)]);
var inst_33400__$1 = (state_33469[(2)]);
var inst_33401 = (inst_33400__$1 == null);
var state_33469__$1 = (function (){var statearr_33475 = state_33469;
(statearr_33475[(8)] = inst_33400__$1);

return statearr_33475;
})();
if(cljs.core.truth_(inst_33401)){
var statearr_33476_34523 = state_33469__$1;
(statearr_33476_34523[(1)] = (5));

} else {
var statearr_33477_34524 = state_33469__$1;
(statearr_33477_34524[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33470 === (15))){
var inst_33442 = (state_33469[(2)]);
var state_33469__$1 = state_33469;
var statearr_33478_34525 = state_33469__$1;
(statearr_33478_34525[(2)] = inst_33442);

(statearr_33478_34525[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33470 === (21))){
var inst_33462 = (state_33469[(2)]);
var state_33469__$1 = (function (){var statearr_33479 = state_33469;
(statearr_33479[(9)] = inst_33462);

return statearr_33479;
})();
var statearr_33480_34526 = state_33469__$1;
(statearr_33480_34526[(2)] = null);

(statearr_33480_34526[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33470 === (13))){
var inst_33424 = (state_33469[(10)]);
var inst_33426 = cljs.core.chunked_seq_QMARK_(inst_33424);
var state_33469__$1 = state_33469;
if(inst_33426){
var statearr_33481_34530 = state_33469__$1;
(statearr_33481_34530[(1)] = (16));

} else {
var statearr_33482_34531 = state_33469__$1;
(statearr_33482_34531[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33470 === (22))){
var inst_33454 = (state_33469[(2)]);
var state_33469__$1 = state_33469;
if(cljs.core.truth_(inst_33454)){
var statearr_33483_34532 = state_33469__$1;
(statearr_33483_34532[(1)] = (23));

} else {
var statearr_33484_34533 = state_33469__$1;
(statearr_33484_34533[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33470 === (6))){
var inst_33448 = (state_33469[(7)]);
var inst_33450 = (state_33469[(11)]);
var inst_33400 = (state_33469[(8)]);
var inst_33448__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_33400) : topic_fn.call(null,inst_33400));
var inst_33449 = cljs.core.deref(mults);
var inst_33450__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33449,inst_33448__$1);
var state_33469__$1 = (function (){var statearr_33485 = state_33469;
(statearr_33485[(7)] = inst_33448__$1);

(statearr_33485[(11)] = inst_33450__$1);

return statearr_33485;
})();
if(cljs.core.truth_(inst_33450__$1)){
var statearr_33486_34534 = state_33469__$1;
(statearr_33486_34534[(1)] = (19));

} else {
var statearr_33487_34535 = state_33469__$1;
(statearr_33487_34535[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33470 === (25))){
var inst_33459 = (state_33469[(2)]);
var state_33469__$1 = state_33469;
var statearr_33488_34536 = state_33469__$1;
(statearr_33488_34536[(2)] = inst_33459);

(statearr_33488_34536[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33470 === (17))){
var inst_33424 = (state_33469[(10)]);
var inst_33433 = cljs.core.first(inst_33424);
var inst_33434 = cljs.core.async.muxch_STAR_(inst_33433);
var inst_33435 = cljs.core.async.close_BANG_(inst_33434);
var inst_33436 = cljs.core.next(inst_33424);
var inst_33410 = inst_33436;
var inst_33411 = null;
var inst_33412 = (0);
var inst_33413 = (0);
var state_33469__$1 = (function (){var statearr_33489 = state_33469;
(statearr_33489[(12)] = inst_33413);

(statearr_33489[(13)] = inst_33411);

(statearr_33489[(14)] = inst_33410);

(statearr_33489[(15)] = inst_33412);

(statearr_33489[(16)] = inst_33435);

return statearr_33489;
})();
var statearr_33490_34537 = state_33469__$1;
(statearr_33490_34537[(2)] = null);

(statearr_33490_34537[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33470 === (3))){
var inst_33467 = (state_33469[(2)]);
var state_33469__$1 = state_33469;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33469__$1,inst_33467);
} else {
if((state_val_33470 === (12))){
var inst_33444 = (state_33469[(2)]);
var state_33469__$1 = state_33469;
var statearr_33491_34538 = state_33469__$1;
(statearr_33491_34538[(2)] = inst_33444);

(statearr_33491_34538[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33470 === (2))){
var state_33469__$1 = state_33469;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33469__$1,(4),ch);
} else {
if((state_val_33470 === (23))){
var state_33469__$1 = state_33469;
var statearr_33492_34540 = state_33469__$1;
(statearr_33492_34540[(2)] = null);

(statearr_33492_34540[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33470 === (19))){
var inst_33450 = (state_33469[(11)]);
var inst_33400 = (state_33469[(8)]);
var inst_33452 = cljs.core.async.muxch_STAR_(inst_33450);
var state_33469__$1 = state_33469;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33469__$1,(22),inst_33452,inst_33400);
} else {
if((state_val_33470 === (11))){
var inst_33410 = (state_33469[(14)]);
var inst_33424 = (state_33469[(10)]);
var inst_33424__$1 = cljs.core.seq(inst_33410);
var state_33469__$1 = (function (){var statearr_33493 = state_33469;
(statearr_33493[(10)] = inst_33424__$1);

return statearr_33493;
})();
if(inst_33424__$1){
var statearr_33494_34541 = state_33469__$1;
(statearr_33494_34541[(1)] = (13));

} else {
var statearr_33495_34542 = state_33469__$1;
(statearr_33495_34542[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33470 === (9))){
var inst_33446 = (state_33469[(2)]);
var state_33469__$1 = state_33469;
var statearr_33496_34543 = state_33469__$1;
(statearr_33496_34543[(2)] = inst_33446);

(statearr_33496_34543[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33470 === (5))){
var inst_33407 = cljs.core.deref(mults);
var inst_33408 = cljs.core.vals(inst_33407);
var inst_33409 = cljs.core.seq(inst_33408);
var inst_33410 = inst_33409;
var inst_33411 = null;
var inst_33412 = (0);
var inst_33413 = (0);
var state_33469__$1 = (function (){var statearr_33497 = state_33469;
(statearr_33497[(12)] = inst_33413);

(statearr_33497[(13)] = inst_33411);

(statearr_33497[(14)] = inst_33410);

(statearr_33497[(15)] = inst_33412);

return statearr_33497;
})();
var statearr_33498_34544 = state_33469__$1;
(statearr_33498_34544[(2)] = null);

(statearr_33498_34544[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33470 === (14))){
var state_33469__$1 = state_33469;
var statearr_33502_34545 = state_33469__$1;
(statearr_33502_34545[(2)] = null);

(statearr_33502_34545[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33470 === (16))){
var inst_33424 = (state_33469[(10)]);
var inst_33428 = cljs.core.chunk_first(inst_33424);
var inst_33429 = cljs.core.chunk_rest(inst_33424);
var inst_33430 = cljs.core.count(inst_33428);
var inst_33410 = inst_33429;
var inst_33411 = inst_33428;
var inst_33412 = inst_33430;
var inst_33413 = (0);
var state_33469__$1 = (function (){var statearr_33503 = state_33469;
(statearr_33503[(12)] = inst_33413);

(statearr_33503[(13)] = inst_33411);

(statearr_33503[(14)] = inst_33410);

(statearr_33503[(15)] = inst_33412);

return statearr_33503;
})();
var statearr_33504_34546 = state_33469__$1;
(statearr_33504_34546[(2)] = null);

(statearr_33504_34546[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33470 === (10))){
var inst_33413 = (state_33469[(12)]);
var inst_33411 = (state_33469[(13)]);
var inst_33410 = (state_33469[(14)]);
var inst_33412 = (state_33469[(15)]);
var inst_33418 = cljs.core._nth(inst_33411,inst_33413);
var inst_33419 = cljs.core.async.muxch_STAR_(inst_33418);
var inst_33420 = cljs.core.async.close_BANG_(inst_33419);
var inst_33421 = (inst_33413 + (1));
var tmp33499 = inst_33411;
var tmp33500 = inst_33410;
var tmp33501 = inst_33412;
var inst_33410__$1 = tmp33500;
var inst_33411__$1 = tmp33499;
var inst_33412__$1 = tmp33501;
var inst_33413__$1 = inst_33421;
var state_33469__$1 = (function (){var statearr_33505 = state_33469;
(statearr_33505[(12)] = inst_33413__$1);

(statearr_33505[(17)] = inst_33420);

(statearr_33505[(13)] = inst_33411__$1);

(statearr_33505[(14)] = inst_33410__$1);

(statearr_33505[(15)] = inst_33412__$1);

return statearr_33505;
})();
var statearr_33506_34547 = state_33469__$1;
(statearr_33506_34547[(2)] = null);

(statearr_33506_34547[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33470 === (18))){
var inst_33439 = (state_33469[(2)]);
var state_33469__$1 = state_33469;
var statearr_33507_34548 = state_33469__$1;
(statearr_33507_34548[(2)] = inst_33439);

(statearr_33507_34548[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33470 === (8))){
var inst_33413 = (state_33469[(12)]);
var inst_33412 = (state_33469[(15)]);
var inst_33415 = (inst_33413 < inst_33412);
var inst_33416 = inst_33415;
var state_33469__$1 = state_33469;
if(cljs.core.truth_(inst_33416)){
var statearr_33508_34553 = state_33469__$1;
(statearr_33508_34553[(1)] = (10));

} else {
var statearr_33509_34554 = state_33469__$1;
(statearr_33509_34554[(1)] = (11));

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
var cljs$core$async$state_machine__32253__auto__ = null;
var cljs$core$async$state_machine__32253__auto____0 = (function (){
var statearr_33510 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33510[(0)] = cljs$core$async$state_machine__32253__auto__);

(statearr_33510[(1)] = (1));

return statearr_33510;
});
var cljs$core$async$state_machine__32253__auto____1 = (function (state_33469){
while(true){
var ret_value__32254__auto__ = (function (){try{while(true){
var result__32255__auto__ = switch__32252__auto__(state_33469);
if(cljs.core.keyword_identical_QMARK_(result__32255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32255__auto__;
}
break;
}
}catch (e33511){var ex__32256__auto__ = e33511;
var statearr_33512_34559 = state_33469;
(statearr_33512_34559[(2)] = ex__32256__auto__);


if(cljs.core.seq((state_33469[(4)]))){
var statearr_33513_34560 = state_33469;
(statearr_33513_34560[(1)] = cljs.core.first((state_33469[(4)])));

} else {
throw ex__32256__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34562 = state_33469;
state_33469 = G__34562;
continue;
} else {
return ret_value__32254__auto__;
}
break;
}
});
cljs$core$async$state_machine__32253__auto__ = function(state_33469){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32253__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32253__auto____1.call(this,state_33469);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32253__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32253__auto____0;
cljs$core$async$state_machine__32253__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32253__auto____1;
return cljs$core$async$state_machine__32253__auto__;
})()
})();
var state__32299__auto__ = (function (){var statearr_33514 = f__32298__auto__();
(statearr_33514[(6)] = c__32297__auto___34518);

return statearr_33514;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32299__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__33516 = arguments.length;
switch (G__33516) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__33518 = arguments.length;
switch (G__33518) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__33520 = arguments.length;
switch (G__33520) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__32297__auto___34567 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32298__auto__ = (function (){var switch__32252__auto__ = (function (state_33563){
var state_val_33564 = (state_33563[(1)]);
if((state_val_33564 === (7))){
var state_33563__$1 = state_33563;
var statearr_33565_34568 = state_33563__$1;
(statearr_33565_34568[(2)] = null);

(statearr_33565_34568[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33564 === (1))){
var state_33563__$1 = state_33563;
var statearr_33566_34569 = state_33563__$1;
(statearr_33566_34569[(2)] = null);

(statearr_33566_34569[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33564 === (4))){
var inst_33524 = (state_33563[(7)]);
var inst_33523 = (state_33563[(8)]);
var inst_33526 = (inst_33524 < inst_33523);
var state_33563__$1 = state_33563;
if(cljs.core.truth_(inst_33526)){
var statearr_33567_34570 = state_33563__$1;
(statearr_33567_34570[(1)] = (6));

} else {
var statearr_33568_34571 = state_33563__$1;
(statearr_33568_34571[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33564 === (15))){
var inst_33549 = (state_33563[(9)]);
var inst_33554 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_33549);
var state_33563__$1 = state_33563;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33563__$1,(17),out,inst_33554);
} else {
if((state_val_33564 === (13))){
var inst_33549 = (state_33563[(9)]);
var inst_33549__$1 = (state_33563[(2)]);
var inst_33550 = cljs.core.some(cljs.core.nil_QMARK_,inst_33549__$1);
var state_33563__$1 = (function (){var statearr_33569 = state_33563;
(statearr_33569[(9)] = inst_33549__$1);

return statearr_33569;
})();
if(cljs.core.truth_(inst_33550)){
var statearr_33570_34572 = state_33563__$1;
(statearr_33570_34572[(1)] = (14));

} else {
var statearr_33571_34573 = state_33563__$1;
(statearr_33571_34573[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33564 === (6))){
var state_33563__$1 = state_33563;
var statearr_33572_34574 = state_33563__$1;
(statearr_33572_34574[(2)] = null);

(statearr_33572_34574[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33564 === (17))){
var inst_33556 = (state_33563[(2)]);
var state_33563__$1 = (function (){var statearr_33574 = state_33563;
(statearr_33574[(10)] = inst_33556);

return statearr_33574;
})();
var statearr_33575_34575 = state_33563__$1;
(statearr_33575_34575[(2)] = null);

(statearr_33575_34575[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33564 === (3))){
var inst_33561 = (state_33563[(2)]);
var state_33563__$1 = state_33563;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33563__$1,inst_33561);
} else {
if((state_val_33564 === (12))){
var _ = (function (){var statearr_33576 = state_33563;
(statearr_33576[(4)] = cljs.core.rest((state_33563[(4)])));

return statearr_33576;
})();
var state_33563__$1 = state_33563;
var ex33573 = (state_33563__$1[(2)]);
var statearr_33577_34576 = state_33563__$1;
(statearr_33577_34576[(5)] = ex33573);


if((ex33573 instanceof Object)){
var statearr_33578_34577 = state_33563__$1;
(statearr_33578_34577[(1)] = (11));

(statearr_33578_34577[(5)] = null);

} else {
throw ex33573;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33564 === (2))){
var inst_33522 = cljs.core.reset_BANG_(dctr,cnt);
var inst_33523 = cnt;
var inst_33524 = (0);
var state_33563__$1 = (function (){var statearr_33579 = state_33563;
(statearr_33579[(7)] = inst_33524);

(statearr_33579[(8)] = inst_33523);

(statearr_33579[(11)] = inst_33522);

return statearr_33579;
})();
var statearr_33580_34581 = state_33563__$1;
(statearr_33580_34581[(2)] = null);

(statearr_33580_34581[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33564 === (11))){
var inst_33528 = (state_33563[(2)]);
var inst_33529 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_33563__$1 = (function (){var statearr_33581 = state_33563;
(statearr_33581[(12)] = inst_33528);

return statearr_33581;
})();
var statearr_33582_34582 = state_33563__$1;
(statearr_33582_34582[(2)] = inst_33529);

(statearr_33582_34582[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33564 === (9))){
var inst_33524 = (state_33563[(7)]);
var _ = (function (){var statearr_33583 = state_33563;
(statearr_33583[(4)] = cljs.core.cons((12),(state_33563[(4)])));

return statearr_33583;
})();
var inst_33535 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_33524) : chs__$1.call(null,inst_33524));
var inst_33536 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_33524) : done.call(null,inst_33524));
var inst_33537 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_33535,inst_33536);
var ___$1 = (function (){var statearr_33584 = state_33563;
(statearr_33584[(4)] = cljs.core.rest((state_33563[(4)])));

return statearr_33584;
})();
var state_33563__$1 = state_33563;
var statearr_33585_34590 = state_33563__$1;
(statearr_33585_34590[(2)] = inst_33537);

(statearr_33585_34590[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33564 === (5))){
var inst_33547 = (state_33563[(2)]);
var state_33563__$1 = (function (){var statearr_33586 = state_33563;
(statearr_33586[(13)] = inst_33547);

return statearr_33586;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33563__$1,(13),dchan);
} else {
if((state_val_33564 === (14))){
var inst_33552 = cljs.core.async.close_BANG_(out);
var state_33563__$1 = state_33563;
var statearr_33587_34594 = state_33563__$1;
(statearr_33587_34594[(2)] = inst_33552);

(statearr_33587_34594[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33564 === (16))){
var inst_33559 = (state_33563[(2)]);
var state_33563__$1 = state_33563;
var statearr_33588_34595 = state_33563__$1;
(statearr_33588_34595[(2)] = inst_33559);

(statearr_33588_34595[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33564 === (10))){
var inst_33524 = (state_33563[(7)]);
var inst_33540 = (state_33563[(2)]);
var inst_33541 = (inst_33524 + (1));
var inst_33524__$1 = inst_33541;
var state_33563__$1 = (function (){var statearr_33589 = state_33563;
(statearr_33589[(7)] = inst_33524__$1);

(statearr_33589[(14)] = inst_33540);

return statearr_33589;
})();
var statearr_33590_34599 = state_33563__$1;
(statearr_33590_34599[(2)] = null);

(statearr_33590_34599[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33564 === (8))){
var inst_33545 = (state_33563[(2)]);
var state_33563__$1 = state_33563;
var statearr_33591_34600 = state_33563__$1;
(statearr_33591_34600[(2)] = inst_33545);

(statearr_33591_34600[(1)] = (5));


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
var cljs$core$async$state_machine__32253__auto__ = null;
var cljs$core$async$state_machine__32253__auto____0 = (function (){
var statearr_33592 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33592[(0)] = cljs$core$async$state_machine__32253__auto__);

(statearr_33592[(1)] = (1));

return statearr_33592;
});
var cljs$core$async$state_machine__32253__auto____1 = (function (state_33563){
while(true){
var ret_value__32254__auto__ = (function (){try{while(true){
var result__32255__auto__ = switch__32252__auto__(state_33563);
if(cljs.core.keyword_identical_QMARK_(result__32255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32255__auto__;
}
break;
}
}catch (e33593){var ex__32256__auto__ = e33593;
var statearr_33594_34604 = state_33563;
(statearr_33594_34604[(2)] = ex__32256__auto__);


if(cljs.core.seq((state_33563[(4)]))){
var statearr_33595_34605 = state_33563;
(statearr_33595_34605[(1)] = cljs.core.first((state_33563[(4)])));

} else {
throw ex__32256__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34606 = state_33563;
state_33563 = G__34606;
continue;
} else {
return ret_value__32254__auto__;
}
break;
}
});
cljs$core$async$state_machine__32253__auto__ = function(state_33563){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32253__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32253__auto____1.call(this,state_33563);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32253__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32253__auto____0;
cljs$core$async$state_machine__32253__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32253__auto____1;
return cljs$core$async$state_machine__32253__auto__;
})()
})();
var state__32299__auto__ = (function (){var statearr_33596 = f__32298__auto__();
(statearr_33596[(6)] = c__32297__auto___34567);

return statearr_33596;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32299__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__33599 = arguments.length;
switch (G__33599) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32297__auto___34612 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32298__auto__ = (function (){var switch__32252__auto__ = (function (state_33631){
var state_val_33632 = (state_33631[(1)]);
if((state_val_33632 === (7))){
var inst_33610 = (state_33631[(7)]);
var inst_33611 = (state_33631[(8)]);
var inst_33610__$1 = (state_33631[(2)]);
var inst_33611__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33610__$1,(0),null);
var inst_33612 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33610__$1,(1),null);
var inst_33613 = (inst_33611__$1 == null);
var state_33631__$1 = (function (){var statearr_33633 = state_33631;
(statearr_33633[(7)] = inst_33610__$1);

(statearr_33633[(8)] = inst_33611__$1);

(statearr_33633[(9)] = inst_33612);

return statearr_33633;
})();
if(cljs.core.truth_(inst_33613)){
var statearr_33634_34625 = state_33631__$1;
(statearr_33634_34625[(1)] = (8));

} else {
var statearr_33635_34626 = state_33631__$1;
(statearr_33635_34626[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33632 === (1))){
var inst_33600 = cljs.core.vec(chs);
var inst_33601 = inst_33600;
var state_33631__$1 = (function (){var statearr_33636 = state_33631;
(statearr_33636[(10)] = inst_33601);

return statearr_33636;
})();
var statearr_33637_34627 = state_33631__$1;
(statearr_33637_34627[(2)] = null);

(statearr_33637_34627[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33632 === (4))){
var inst_33601 = (state_33631[(10)]);
var state_33631__$1 = state_33631;
return cljs.core.async.ioc_alts_BANG_(state_33631__$1,(7),inst_33601);
} else {
if((state_val_33632 === (6))){
var inst_33627 = (state_33631[(2)]);
var state_33631__$1 = state_33631;
var statearr_33638_34628 = state_33631__$1;
(statearr_33638_34628[(2)] = inst_33627);

(statearr_33638_34628[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33632 === (3))){
var inst_33629 = (state_33631[(2)]);
var state_33631__$1 = state_33631;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33631__$1,inst_33629);
} else {
if((state_val_33632 === (2))){
var inst_33601 = (state_33631[(10)]);
var inst_33603 = cljs.core.count(inst_33601);
var inst_33604 = (inst_33603 > (0));
var state_33631__$1 = state_33631;
if(cljs.core.truth_(inst_33604)){
var statearr_33640_34629 = state_33631__$1;
(statearr_33640_34629[(1)] = (4));

} else {
var statearr_33641_34630 = state_33631__$1;
(statearr_33641_34630[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33632 === (11))){
var inst_33601 = (state_33631[(10)]);
var inst_33620 = (state_33631[(2)]);
var tmp33639 = inst_33601;
var inst_33601__$1 = tmp33639;
var state_33631__$1 = (function (){var statearr_33642 = state_33631;
(statearr_33642[(10)] = inst_33601__$1);

(statearr_33642[(11)] = inst_33620);

return statearr_33642;
})();
var statearr_33643_34631 = state_33631__$1;
(statearr_33643_34631[(2)] = null);

(statearr_33643_34631[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33632 === (9))){
var inst_33611 = (state_33631[(8)]);
var state_33631__$1 = state_33631;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33631__$1,(11),out,inst_33611);
} else {
if((state_val_33632 === (5))){
var inst_33625 = cljs.core.async.close_BANG_(out);
var state_33631__$1 = state_33631;
var statearr_33644_34638 = state_33631__$1;
(statearr_33644_34638[(2)] = inst_33625);

(statearr_33644_34638[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33632 === (10))){
var inst_33623 = (state_33631[(2)]);
var state_33631__$1 = state_33631;
var statearr_33645_34639 = state_33631__$1;
(statearr_33645_34639[(2)] = inst_33623);

(statearr_33645_34639[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33632 === (8))){
var inst_33610 = (state_33631[(7)]);
var inst_33611 = (state_33631[(8)]);
var inst_33601 = (state_33631[(10)]);
var inst_33612 = (state_33631[(9)]);
var inst_33615 = (function (){var cs = inst_33601;
var vec__33606 = inst_33610;
var v = inst_33611;
var c = inst_33612;
return (function (p1__33597_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__33597_SHARP_);
});
})();
var inst_33616 = cljs.core.filterv(inst_33615,inst_33601);
var inst_33601__$1 = inst_33616;
var state_33631__$1 = (function (){var statearr_33646 = state_33631;
(statearr_33646[(10)] = inst_33601__$1);

return statearr_33646;
})();
var statearr_33647_34640 = state_33631__$1;
(statearr_33647_34640[(2)] = null);

(statearr_33647_34640[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__32253__auto__ = null;
var cljs$core$async$state_machine__32253__auto____0 = (function (){
var statearr_33648 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33648[(0)] = cljs$core$async$state_machine__32253__auto__);

(statearr_33648[(1)] = (1));

return statearr_33648;
});
var cljs$core$async$state_machine__32253__auto____1 = (function (state_33631){
while(true){
var ret_value__32254__auto__ = (function (){try{while(true){
var result__32255__auto__ = switch__32252__auto__(state_33631);
if(cljs.core.keyword_identical_QMARK_(result__32255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32255__auto__;
}
break;
}
}catch (e33649){var ex__32256__auto__ = e33649;
var statearr_33650_34641 = state_33631;
(statearr_33650_34641[(2)] = ex__32256__auto__);


if(cljs.core.seq((state_33631[(4)]))){
var statearr_33651_34642 = state_33631;
(statearr_33651_34642[(1)] = cljs.core.first((state_33631[(4)])));

} else {
throw ex__32256__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34643 = state_33631;
state_33631 = G__34643;
continue;
} else {
return ret_value__32254__auto__;
}
break;
}
});
cljs$core$async$state_machine__32253__auto__ = function(state_33631){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32253__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32253__auto____1.call(this,state_33631);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32253__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32253__auto____0;
cljs$core$async$state_machine__32253__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32253__auto____1;
return cljs$core$async$state_machine__32253__auto__;
})()
})();
var state__32299__auto__ = (function (){var statearr_33652 = f__32298__auto__();
(statearr_33652[(6)] = c__32297__auto___34612);

return statearr_33652;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32299__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__33654 = arguments.length;
switch (G__33654) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32297__auto___34651 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32298__auto__ = (function (){var switch__32252__auto__ = (function (state_33678){
var state_val_33679 = (state_33678[(1)]);
if((state_val_33679 === (7))){
var inst_33660 = (state_33678[(7)]);
var inst_33660__$1 = (state_33678[(2)]);
var inst_33661 = (inst_33660__$1 == null);
var inst_33662 = cljs.core.not(inst_33661);
var state_33678__$1 = (function (){var statearr_33680 = state_33678;
(statearr_33680[(7)] = inst_33660__$1);

return statearr_33680;
})();
if(inst_33662){
var statearr_33681_34652 = state_33678__$1;
(statearr_33681_34652[(1)] = (8));

} else {
var statearr_33682_34653 = state_33678__$1;
(statearr_33682_34653[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33679 === (1))){
var inst_33655 = (0);
var state_33678__$1 = (function (){var statearr_33683 = state_33678;
(statearr_33683[(8)] = inst_33655);

return statearr_33683;
})();
var statearr_33684_34654 = state_33678__$1;
(statearr_33684_34654[(2)] = null);

(statearr_33684_34654[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33679 === (4))){
var state_33678__$1 = state_33678;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33678__$1,(7),ch);
} else {
if((state_val_33679 === (6))){
var inst_33673 = (state_33678[(2)]);
var state_33678__$1 = state_33678;
var statearr_33685_34655 = state_33678__$1;
(statearr_33685_34655[(2)] = inst_33673);

(statearr_33685_34655[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33679 === (3))){
var inst_33675 = (state_33678[(2)]);
var inst_33676 = cljs.core.async.close_BANG_(out);
var state_33678__$1 = (function (){var statearr_33686 = state_33678;
(statearr_33686[(9)] = inst_33675);

return statearr_33686;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33678__$1,inst_33676);
} else {
if((state_val_33679 === (2))){
var inst_33655 = (state_33678[(8)]);
var inst_33657 = (inst_33655 < n);
var state_33678__$1 = state_33678;
if(cljs.core.truth_(inst_33657)){
var statearr_33687_34662 = state_33678__$1;
(statearr_33687_34662[(1)] = (4));

} else {
var statearr_33688_34663 = state_33678__$1;
(statearr_33688_34663[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33679 === (11))){
var inst_33655 = (state_33678[(8)]);
var inst_33665 = (state_33678[(2)]);
var inst_33666 = (inst_33655 + (1));
var inst_33655__$1 = inst_33666;
var state_33678__$1 = (function (){var statearr_33689 = state_33678;
(statearr_33689[(8)] = inst_33655__$1);

(statearr_33689[(10)] = inst_33665);

return statearr_33689;
})();
var statearr_33690_34664 = state_33678__$1;
(statearr_33690_34664[(2)] = null);

(statearr_33690_34664[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33679 === (9))){
var state_33678__$1 = state_33678;
var statearr_33691_34665 = state_33678__$1;
(statearr_33691_34665[(2)] = null);

(statearr_33691_34665[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33679 === (5))){
var state_33678__$1 = state_33678;
var statearr_33692_34666 = state_33678__$1;
(statearr_33692_34666[(2)] = null);

(statearr_33692_34666[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33679 === (10))){
var inst_33670 = (state_33678[(2)]);
var state_33678__$1 = state_33678;
var statearr_33693_34667 = state_33678__$1;
(statearr_33693_34667[(2)] = inst_33670);

(statearr_33693_34667[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33679 === (8))){
var inst_33660 = (state_33678[(7)]);
var state_33678__$1 = state_33678;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33678__$1,(11),out,inst_33660);
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
});
return (function() {
var cljs$core$async$state_machine__32253__auto__ = null;
var cljs$core$async$state_machine__32253__auto____0 = (function (){
var statearr_33694 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33694[(0)] = cljs$core$async$state_machine__32253__auto__);

(statearr_33694[(1)] = (1));

return statearr_33694;
});
var cljs$core$async$state_machine__32253__auto____1 = (function (state_33678){
while(true){
var ret_value__32254__auto__ = (function (){try{while(true){
var result__32255__auto__ = switch__32252__auto__(state_33678);
if(cljs.core.keyword_identical_QMARK_(result__32255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32255__auto__;
}
break;
}
}catch (e33695){var ex__32256__auto__ = e33695;
var statearr_33696_34668 = state_33678;
(statearr_33696_34668[(2)] = ex__32256__auto__);


if(cljs.core.seq((state_33678[(4)]))){
var statearr_33697_34669 = state_33678;
(statearr_33697_34669[(1)] = cljs.core.first((state_33678[(4)])));

} else {
throw ex__32256__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34670 = state_33678;
state_33678 = G__34670;
continue;
} else {
return ret_value__32254__auto__;
}
break;
}
});
cljs$core$async$state_machine__32253__auto__ = function(state_33678){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32253__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32253__auto____1.call(this,state_33678);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32253__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32253__auto____0;
cljs$core$async$state_machine__32253__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32253__auto____1;
return cljs$core$async$state_machine__32253__auto__;
})()
})();
var state__32299__auto__ = (function (){var statearr_33698 = f__32298__auto__();
(statearr_33698[(6)] = c__32297__auto___34651);

return statearr_33698;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32299__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33700 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33700 = (function (f,ch,meta33701){
this.f = f;
this.ch = ch;
this.meta33701 = meta33701;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33700.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33702,meta33701__$1){
var self__ = this;
var _33702__$1 = this;
return (new cljs.core.async.t_cljs$core$async33700(self__.f,self__.ch,meta33701__$1));
}));

(cljs.core.async.t_cljs$core$async33700.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33702){
var self__ = this;
var _33702__$1 = this;
return self__.meta33701;
}));

(cljs.core.async.t_cljs$core$async33700.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33700.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33700.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33700.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33700.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33703 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33703 = (function (f,ch,meta33701,_,fn1,meta33704){
this.f = f;
this.ch = ch;
this.meta33701 = meta33701;
this._ = _;
this.fn1 = fn1;
this.meta33704 = meta33704;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33703.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33705,meta33704__$1){
var self__ = this;
var _33705__$1 = this;
return (new cljs.core.async.t_cljs$core$async33703(self__.f,self__.ch,self__.meta33701,self__._,self__.fn1,meta33704__$1));
}));

(cljs.core.async.t_cljs$core$async33703.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33705){
var self__ = this;
var _33705__$1 = this;
return self__.meta33704;
}));

(cljs.core.async.t_cljs$core$async33703.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33703.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async33703.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33703.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__33699_SHARP_){
var G__33706 = (((p1__33699_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__33699_SHARP_) : self__.f.call(null,p1__33699_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__33706) : f1.call(null,G__33706));
});
}));

(cljs.core.async.t_cljs$core$async33703.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33701","meta33701",-777355571,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async33700","cljs.core.async/t_cljs$core$async33700",1335133841,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta33704","meta33704",-1233332078,null)], null);
}));

(cljs.core.async.t_cljs$core$async33703.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33703.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33703");

(cljs.core.async.t_cljs$core$async33703.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async33703");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33703.
 */
cljs.core.async.__GT_t_cljs$core$async33703 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async33703(f__$1,ch__$1,meta33701__$1,___$2,fn1__$1,meta33704){
return (new cljs.core.async.t_cljs$core$async33703(f__$1,ch__$1,meta33701__$1,___$2,fn1__$1,meta33704));
});

}

return (new cljs.core.async.t_cljs$core$async33703(self__.f,self__.ch,self__.meta33701,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__33707 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__33707) : self__.f.call(null,G__33707));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async33700.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33700.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async33700.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33701","meta33701",-777355571,null)], null);
}));

(cljs.core.async.t_cljs$core$async33700.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33700.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33700");

(cljs.core.async.t_cljs$core$async33700.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async33700");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33700.
 */
cljs.core.async.__GT_t_cljs$core$async33700 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async33700(f__$1,ch__$1,meta33701){
return (new cljs.core.async.t_cljs$core$async33700(f__$1,ch__$1,meta33701));
});

}

return (new cljs.core.async.t_cljs$core$async33700(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33708 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33708 = (function (f,ch,meta33709){
this.f = f;
this.ch = ch;
this.meta33709 = meta33709;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33708.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33710,meta33709__$1){
var self__ = this;
var _33710__$1 = this;
return (new cljs.core.async.t_cljs$core$async33708(self__.f,self__.ch,meta33709__$1));
}));

(cljs.core.async.t_cljs$core$async33708.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33710){
var self__ = this;
var _33710__$1 = this;
return self__.meta33709;
}));

(cljs.core.async.t_cljs$core$async33708.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33708.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33708.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33708.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async33708.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33708.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async33708.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33709","meta33709",-1887881681,null)], null);
}));

(cljs.core.async.t_cljs$core$async33708.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33708.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33708");

(cljs.core.async.t_cljs$core$async33708.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async33708");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33708.
 */
cljs.core.async.__GT_t_cljs$core$async33708 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async33708(f__$1,ch__$1,meta33709){
return (new cljs.core.async.t_cljs$core$async33708(f__$1,ch__$1,meta33709));
});

}

return (new cljs.core.async.t_cljs$core$async33708(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33711 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33711 = (function (p,ch,meta33712){
this.p = p;
this.ch = ch;
this.meta33712 = meta33712;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33711.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33713,meta33712__$1){
var self__ = this;
var _33713__$1 = this;
return (new cljs.core.async.t_cljs$core$async33711(self__.p,self__.ch,meta33712__$1));
}));

(cljs.core.async.t_cljs$core$async33711.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33713){
var self__ = this;
var _33713__$1 = this;
return self__.meta33712;
}));

(cljs.core.async.t_cljs$core$async33711.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33711.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33711.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33711.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33711.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async33711.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33711.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async33711.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33712","meta33712",-1305672356,null)], null);
}));

(cljs.core.async.t_cljs$core$async33711.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33711.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33711");

(cljs.core.async.t_cljs$core$async33711.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async33711");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33711.
 */
cljs.core.async.__GT_t_cljs$core$async33711 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async33711(p__$1,ch__$1,meta33712){
return (new cljs.core.async.t_cljs$core$async33711(p__$1,ch__$1,meta33712));
});

}

return (new cljs.core.async.t_cljs$core$async33711(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__33715 = arguments.length;
switch (G__33715) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32297__auto___34689 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32298__auto__ = (function (){var switch__32252__auto__ = (function (state_33736){
var state_val_33737 = (state_33736[(1)]);
if((state_val_33737 === (7))){
var inst_33732 = (state_33736[(2)]);
var state_33736__$1 = state_33736;
var statearr_33738_34690 = state_33736__$1;
(statearr_33738_34690[(2)] = inst_33732);

(statearr_33738_34690[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33737 === (1))){
var state_33736__$1 = state_33736;
var statearr_33739_34692 = state_33736__$1;
(statearr_33739_34692[(2)] = null);

(statearr_33739_34692[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33737 === (4))){
var inst_33718 = (state_33736[(7)]);
var inst_33718__$1 = (state_33736[(2)]);
var inst_33719 = (inst_33718__$1 == null);
var state_33736__$1 = (function (){var statearr_33740 = state_33736;
(statearr_33740[(7)] = inst_33718__$1);

return statearr_33740;
})();
if(cljs.core.truth_(inst_33719)){
var statearr_33741_34693 = state_33736__$1;
(statearr_33741_34693[(1)] = (5));

} else {
var statearr_33742_34694 = state_33736__$1;
(statearr_33742_34694[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33737 === (6))){
var inst_33718 = (state_33736[(7)]);
var inst_33723 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_33718) : p.call(null,inst_33718));
var state_33736__$1 = state_33736;
if(cljs.core.truth_(inst_33723)){
var statearr_33743_34695 = state_33736__$1;
(statearr_33743_34695[(1)] = (8));

} else {
var statearr_33744_34696 = state_33736__$1;
(statearr_33744_34696[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33737 === (3))){
var inst_33734 = (state_33736[(2)]);
var state_33736__$1 = state_33736;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33736__$1,inst_33734);
} else {
if((state_val_33737 === (2))){
var state_33736__$1 = state_33736;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33736__$1,(4),ch);
} else {
if((state_val_33737 === (11))){
var inst_33726 = (state_33736[(2)]);
var state_33736__$1 = state_33736;
var statearr_33745_34697 = state_33736__$1;
(statearr_33745_34697[(2)] = inst_33726);

(statearr_33745_34697[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33737 === (9))){
var state_33736__$1 = state_33736;
var statearr_33746_34698 = state_33736__$1;
(statearr_33746_34698[(2)] = null);

(statearr_33746_34698[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33737 === (5))){
var inst_33721 = cljs.core.async.close_BANG_(out);
var state_33736__$1 = state_33736;
var statearr_33747_34699 = state_33736__$1;
(statearr_33747_34699[(2)] = inst_33721);

(statearr_33747_34699[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33737 === (10))){
var inst_33729 = (state_33736[(2)]);
var state_33736__$1 = (function (){var statearr_33748 = state_33736;
(statearr_33748[(8)] = inst_33729);

return statearr_33748;
})();
var statearr_33749_34700 = state_33736__$1;
(statearr_33749_34700[(2)] = null);

(statearr_33749_34700[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33737 === (8))){
var inst_33718 = (state_33736[(7)]);
var state_33736__$1 = state_33736;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33736__$1,(11),out,inst_33718);
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
});
return (function() {
var cljs$core$async$state_machine__32253__auto__ = null;
var cljs$core$async$state_machine__32253__auto____0 = (function (){
var statearr_33750 = [null,null,null,null,null,null,null,null,null];
(statearr_33750[(0)] = cljs$core$async$state_machine__32253__auto__);

(statearr_33750[(1)] = (1));

return statearr_33750;
});
var cljs$core$async$state_machine__32253__auto____1 = (function (state_33736){
while(true){
var ret_value__32254__auto__ = (function (){try{while(true){
var result__32255__auto__ = switch__32252__auto__(state_33736);
if(cljs.core.keyword_identical_QMARK_(result__32255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32255__auto__;
}
break;
}
}catch (e33751){var ex__32256__auto__ = e33751;
var statearr_33752_34702 = state_33736;
(statearr_33752_34702[(2)] = ex__32256__auto__);


if(cljs.core.seq((state_33736[(4)]))){
var statearr_33753_34703 = state_33736;
(statearr_33753_34703[(1)] = cljs.core.first((state_33736[(4)])));

} else {
throw ex__32256__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34705 = state_33736;
state_33736 = G__34705;
continue;
} else {
return ret_value__32254__auto__;
}
break;
}
});
cljs$core$async$state_machine__32253__auto__ = function(state_33736){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32253__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32253__auto____1.call(this,state_33736);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32253__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32253__auto____0;
cljs$core$async$state_machine__32253__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32253__auto____1;
return cljs$core$async$state_machine__32253__auto__;
})()
})();
var state__32299__auto__ = (function (){var statearr_33754 = f__32298__auto__();
(statearr_33754[(6)] = c__32297__auto___34689);

return statearr_33754;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32299__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__33756 = arguments.length;
switch (G__33756) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__32297__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32298__auto__ = (function (){var switch__32252__auto__ = (function (state_33818){
var state_val_33819 = (state_33818[(1)]);
if((state_val_33819 === (7))){
var inst_33814 = (state_33818[(2)]);
var state_33818__$1 = state_33818;
var statearr_33820_34709 = state_33818__$1;
(statearr_33820_34709[(2)] = inst_33814);

(statearr_33820_34709[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33819 === (20))){
var inst_33784 = (state_33818[(7)]);
var inst_33795 = (state_33818[(2)]);
var inst_33796 = cljs.core.next(inst_33784);
var inst_33770 = inst_33796;
var inst_33771 = null;
var inst_33772 = (0);
var inst_33773 = (0);
var state_33818__$1 = (function (){var statearr_33821 = state_33818;
(statearr_33821[(8)] = inst_33770);

(statearr_33821[(9)] = inst_33773);

(statearr_33821[(10)] = inst_33772);

(statearr_33821[(11)] = inst_33795);

(statearr_33821[(12)] = inst_33771);

return statearr_33821;
})();
var statearr_33822_34711 = state_33818__$1;
(statearr_33822_34711[(2)] = null);

(statearr_33822_34711[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33819 === (1))){
var state_33818__$1 = state_33818;
var statearr_33823_34712 = state_33818__$1;
(statearr_33823_34712[(2)] = null);

(statearr_33823_34712[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33819 === (4))){
var inst_33759 = (state_33818[(13)]);
var inst_33759__$1 = (state_33818[(2)]);
var inst_33760 = (inst_33759__$1 == null);
var state_33818__$1 = (function (){var statearr_33824 = state_33818;
(statearr_33824[(13)] = inst_33759__$1);

return statearr_33824;
})();
if(cljs.core.truth_(inst_33760)){
var statearr_33825_34713 = state_33818__$1;
(statearr_33825_34713[(1)] = (5));

} else {
var statearr_33826_34714 = state_33818__$1;
(statearr_33826_34714[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33819 === (15))){
var state_33818__$1 = state_33818;
var statearr_33830_34716 = state_33818__$1;
(statearr_33830_34716[(2)] = null);

(statearr_33830_34716[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33819 === (21))){
var state_33818__$1 = state_33818;
var statearr_33831_34717 = state_33818__$1;
(statearr_33831_34717[(2)] = null);

(statearr_33831_34717[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33819 === (13))){
var inst_33770 = (state_33818[(8)]);
var inst_33773 = (state_33818[(9)]);
var inst_33772 = (state_33818[(10)]);
var inst_33771 = (state_33818[(12)]);
var inst_33780 = (state_33818[(2)]);
var inst_33781 = (inst_33773 + (1));
var tmp33827 = inst_33770;
var tmp33828 = inst_33772;
var tmp33829 = inst_33771;
var inst_33770__$1 = tmp33827;
var inst_33771__$1 = tmp33829;
var inst_33772__$1 = tmp33828;
var inst_33773__$1 = inst_33781;
var state_33818__$1 = (function (){var statearr_33832 = state_33818;
(statearr_33832[(8)] = inst_33770__$1);

(statearr_33832[(9)] = inst_33773__$1);

(statearr_33832[(14)] = inst_33780);

(statearr_33832[(10)] = inst_33772__$1);

(statearr_33832[(12)] = inst_33771__$1);

return statearr_33832;
})();
var statearr_33833_34718 = state_33818__$1;
(statearr_33833_34718[(2)] = null);

(statearr_33833_34718[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33819 === (22))){
var state_33818__$1 = state_33818;
var statearr_33834_34719 = state_33818__$1;
(statearr_33834_34719[(2)] = null);

(statearr_33834_34719[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33819 === (6))){
var inst_33759 = (state_33818[(13)]);
var inst_33768 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_33759) : f.call(null,inst_33759));
var inst_33769 = cljs.core.seq(inst_33768);
var inst_33770 = inst_33769;
var inst_33771 = null;
var inst_33772 = (0);
var inst_33773 = (0);
var state_33818__$1 = (function (){var statearr_33835 = state_33818;
(statearr_33835[(8)] = inst_33770);

(statearr_33835[(9)] = inst_33773);

(statearr_33835[(10)] = inst_33772);

(statearr_33835[(12)] = inst_33771);

return statearr_33835;
})();
var statearr_33836_34720 = state_33818__$1;
(statearr_33836_34720[(2)] = null);

(statearr_33836_34720[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33819 === (17))){
var inst_33784 = (state_33818[(7)]);
var inst_33788 = cljs.core.chunk_first(inst_33784);
var inst_33789 = cljs.core.chunk_rest(inst_33784);
var inst_33790 = cljs.core.count(inst_33788);
var inst_33770 = inst_33789;
var inst_33771 = inst_33788;
var inst_33772 = inst_33790;
var inst_33773 = (0);
var state_33818__$1 = (function (){var statearr_33837 = state_33818;
(statearr_33837[(8)] = inst_33770);

(statearr_33837[(9)] = inst_33773);

(statearr_33837[(10)] = inst_33772);

(statearr_33837[(12)] = inst_33771);

return statearr_33837;
})();
var statearr_33838_34730 = state_33818__$1;
(statearr_33838_34730[(2)] = null);

(statearr_33838_34730[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33819 === (3))){
var inst_33816 = (state_33818[(2)]);
var state_33818__$1 = state_33818;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33818__$1,inst_33816);
} else {
if((state_val_33819 === (12))){
var inst_33804 = (state_33818[(2)]);
var state_33818__$1 = state_33818;
var statearr_33839_34741 = state_33818__$1;
(statearr_33839_34741[(2)] = inst_33804);

(statearr_33839_34741[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33819 === (2))){
var state_33818__$1 = state_33818;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33818__$1,(4),in$);
} else {
if((state_val_33819 === (23))){
var inst_33812 = (state_33818[(2)]);
var state_33818__$1 = state_33818;
var statearr_33840_34746 = state_33818__$1;
(statearr_33840_34746[(2)] = inst_33812);

(statearr_33840_34746[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33819 === (19))){
var inst_33799 = (state_33818[(2)]);
var state_33818__$1 = state_33818;
var statearr_33841_34747 = state_33818__$1;
(statearr_33841_34747[(2)] = inst_33799);

(statearr_33841_34747[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33819 === (11))){
var inst_33770 = (state_33818[(8)]);
var inst_33784 = (state_33818[(7)]);
var inst_33784__$1 = cljs.core.seq(inst_33770);
var state_33818__$1 = (function (){var statearr_33842 = state_33818;
(statearr_33842[(7)] = inst_33784__$1);

return statearr_33842;
})();
if(inst_33784__$1){
var statearr_33843_34752 = state_33818__$1;
(statearr_33843_34752[(1)] = (14));

} else {
var statearr_33844_34753 = state_33818__$1;
(statearr_33844_34753[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33819 === (9))){
var inst_33806 = (state_33818[(2)]);
var inst_33807 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_33818__$1 = (function (){var statearr_33845 = state_33818;
(statearr_33845[(15)] = inst_33806);

return statearr_33845;
})();
if(cljs.core.truth_(inst_33807)){
var statearr_33846_34758 = state_33818__$1;
(statearr_33846_34758[(1)] = (21));

} else {
var statearr_33847_34759 = state_33818__$1;
(statearr_33847_34759[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33819 === (5))){
var inst_33762 = cljs.core.async.close_BANG_(out);
var state_33818__$1 = state_33818;
var statearr_33848_34764 = state_33818__$1;
(statearr_33848_34764[(2)] = inst_33762);

(statearr_33848_34764[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33819 === (14))){
var inst_33784 = (state_33818[(7)]);
var inst_33786 = cljs.core.chunked_seq_QMARK_(inst_33784);
var state_33818__$1 = state_33818;
if(inst_33786){
var statearr_33849_34769 = state_33818__$1;
(statearr_33849_34769[(1)] = (17));

} else {
var statearr_33850_34770 = state_33818__$1;
(statearr_33850_34770[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33819 === (16))){
var inst_33802 = (state_33818[(2)]);
var state_33818__$1 = state_33818;
var statearr_33851_34774 = state_33818__$1;
(statearr_33851_34774[(2)] = inst_33802);

(statearr_33851_34774[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33819 === (10))){
var inst_33773 = (state_33818[(9)]);
var inst_33771 = (state_33818[(12)]);
var inst_33778 = cljs.core._nth(inst_33771,inst_33773);
var state_33818__$1 = state_33818;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33818__$1,(13),out,inst_33778);
} else {
if((state_val_33819 === (18))){
var inst_33784 = (state_33818[(7)]);
var inst_33793 = cljs.core.first(inst_33784);
var state_33818__$1 = state_33818;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33818__$1,(20),out,inst_33793);
} else {
if((state_val_33819 === (8))){
var inst_33773 = (state_33818[(9)]);
var inst_33772 = (state_33818[(10)]);
var inst_33775 = (inst_33773 < inst_33772);
var inst_33776 = inst_33775;
var state_33818__$1 = state_33818;
if(cljs.core.truth_(inst_33776)){
var statearr_33852_34775 = state_33818__$1;
(statearr_33852_34775[(1)] = (10));

} else {
var statearr_33853_34776 = state_33818__$1;
(statearr_33853_34776[(1)] = (11));

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
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__32253__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__32253__auto____0 = (function (){
var statearr_33854 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33854[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__32253__auto__);

(statearr_33854[(1)] = (1));

return statearr_33854;
});
var cljs$core$async$mapcat_STAR__$_state_machine__32253__auto____1 = (function (state_33818){
while(true){
var ret_value__32254__auto__ = (function (){try{while(true){
var result__32255__auto__ = switch__32252__auto__(state_33818);
if(cljs.core.keyword_identical_QMARK_(result__32255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32255__auto__;
}
break;
}
}catch (e33855){var ex__32256__auto__ = e33855;
var statearr_33856_34778 = state_33818;
(statearr_33856_34778[(2)] = ex__32256__auto__);


if(cljs.core.seq((state_33818[(4)]))){
var statearr_33857_34779 = state_33818;
(statearr_33857_34779[(1)] = cljs.core.first((state_33818[(4)])));

} else {
throw ex__32256__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34780 = state_33818;
state_33818 = G__34780;
continue;
} else {
return ret_value__32254__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__32253__auto__ = function(state_33818){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__32253__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__32253__auto____1.call(this,state_33818);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__32253__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__32253__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__32253__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__32253__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__32253__auto__;
})()
})();
var state__32299__auto__ = (function (){var statearr_33858 = f__32298__auto__();
(statearr_33858[(6)] = c__32297__auto__);

return statearr_33858;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32299__auto__);
}));

return c__32297__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__33860 = arguments.length;
switch (G__33860) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__33862 = arguments.length;
switch (G__33862) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__33864 = arguments.length;
switch (G__33864) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32297__auto___34785 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32298__auto__ = (function (){var switch__32252__auto__ = (function (state_33888){
var state_val_33889 = (state_33888[(1)]);
if((state_val_33889 === (7))){
var inst_33883 = (state_33888[(2)]);
var state_33888__$1 = state_33888;
var statearr_33890_34786 = state_33888__$1;
(statearr_33890_34786[(2)] = inst_33883);

(statearr_33890_34786[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33889 === (1))){
var inst_33865 = null;
var state_33888__$1 = (function (){var statearr_33891 = state_33888;
(statearr_33891[(7)] = inst_33865);

return statearr_33891;
})();
var statearr_33892_34788 = state_33888__$1;
(statearr_33892_34788[(2)] = null);

(statearr_33892_34788[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33889 === (4))){
var inst_33868 = (state_33888[(8)]);
var inst_33868__$1 = (state_33888[(2)]);
var inst_33869 = (inst_33868__$1 == null);
var inst_33870 = cljs.core.not(inst_33869);
var state_33888__$1 = (function (){var statearr_33893 = state_33888;
(statearr_33893[(8)] = inst_33868__$1);

return statearr_33893;
})();
if(inst_33870){
var statearr_33894_34789 = state_33888__$1;
(statearr_33894_34789[(1)] = (5));

} else {
var statearr_33895_34791 = state_33888__$1;
(statearr_33895_34791[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33889 === (6))){
var state_33888__$1 = state_33888;
var statearr_33896_34792 = state_33888__$1;
(statearr_33896_34792[(2)] = null);

(statearr_33896_34792[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33889 === (3))){
var inst_33885 = (state_33888[(2)]);
var inst_33886 = cljs.core.async.close_BANG_(out);
var state_33888__$1 = (function (){var statearr_33897 = state_33888;
(statearr_33897[(9)] = inst_33885);

return statearr_33897;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33888__$1,inst_33886);
} else {
if((state_val_33889 === (2))){
var state_33888__$1 = state_33888;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33888__$1,(4),ch);
} else {
if((state_val_33889 === (11))){
var inst_33868 = (state_33888[(8)]);
var inst_33877 = (state_33888[(2)]);
var inst_33865 = inst_33868;
var state_33888__$1 = (function (){var statearr_33898 = state_33888;
(statearr_33898[(7)] = inst_33865);

(statearr_33898[(10)] = inst_33877);

return statearr_33898;
})();
var statearr_33899_34797 = state_33888__$1;
(statearr_33899_34797[(2)] = null);

(statearr_33899_34797[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33889 === (9))){
var inst_33868 = (state_33888[(8)]);
var state_33888__$1 = state_33888;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33888__$1,(11),out,inst_33868);
} else {
if((state_val_33889 === (5))){
var inst_33865 = (state_33888[(7)]);
var inst_33868 = (state_33888[(8)]);
var inst_33872 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33868,inst_33865);
var state_33888__$1 = state_33888;
if(inst_33872){
var statearr_33901_34805 = state_33888__$1;
(statearr_33901_34805[(1)] = (8));

} else {
var statearr_33902_34806 = state_33888__$1;
(statearr_33902_34806[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33889 === (10))){
var inst_33880 = (state_33888[(2)]);
var state_33888__$1 = state_33888;
var statearr_33903_34815 = state_33888__$1;
(statearr_33903_34815[(2)] = inst_33880);

(statearr_33903_34815[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33889 === (8))){
var inst_33865 = (state_33888[(7)]);
var tmp33900 = inst_33865;
var inst_33865__$1 = tmp33900;
var state_33888__$1 = (function (){var statearr_33904 = state_33888;
(statearr_33904[(7)] = inst_33865__$1);

return statearr_33904;
})();
var statearr_33905_34824 = state_33888__$1;
(statearr_33905_34824[(2)] = null);

(statearr_33905_34824[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__32253__auto__ = null;
var cljs$core$async$state_machine__32253__auto____0 = (function (){
var statearr_33906 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33906[(0)] = cljs$core$async$state_machine__32253__auto__);

(statearr_33906[(1)] = (1));

return statearr_33906;
});
var cljs$core$async$state_machine__32253__auto____1 = (function (state_33888){
while(true){
var ret_value__32254__auto__ = (function (){try{while(true){
var result__32255__auto__ = switch__32252__auto__(state_33888);
if(cljs.core.keyword_identical_QMARK_(result__32255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32255__auto__;
}
break;
}
}catch (e33907){var ex__32256__auto__ = e33907;
var statearr_33908_34842 = state_33888;
(statearr_33908_34842[(2)] = ex__32256__auto__);


if(cljs.core.seq((state_33888[(4)]))){
var statearr_33909_34843 = state_33888;
(statearr_33909_34843[(1)] = cljs.core.first((state_33888[(4)])));

} else {
throw ex__32256__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34844 = state_33888;
state_33888 = G__34844;
continue;
} else {
return ret_value__32254__auto__;
}
break;
}
});
cljs$core$async$state_machine__32253__auto__ = function(state_33888){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32253__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32253__auto____1.call(this,state_33888);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32253__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32253__auto____0;
cljs$core$async$state_machine__32253__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32253__auto____1;
return cljs$core$async$state_machine__32253__auto__;
})()
})();
var state__32299__auto__ = (function (){var statearr_33910 = f__32298__auto__();
(statearr_33910[(6)] = c__32297__auto___34785);

return statearr_33910;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32299__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__33912 = arguments.length;
switch (G__33912) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32297__auto___34858 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32298__auto__ = (function (){var switch__32252__auto__ = (function (state_33950){
var state_val_33951 = (state_33950[(1)]);
if((state_val_33951 === (7))){
var inst_33946 = (state_33950[(2)]);
var state_33950__$1 = state_33950;
var statearr_33952_34879 = state_33950__$1;
(statearr_33952_34879[(2)] = inst_33946);

(statearr_33952_34879[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33951 === (1))){
var inst_33913 = (new Array(n));
var inst_33914 = inst_33913;
var inst_33915 = (0);
var state_33950__$1 = (function (){var statearr_33953 = state_33950;
(statearr_33953[(7)] = inst_33914);

(statearr_33953[(8)] = inst_33915);

return statearr_33953;
})();
var statearr_33954_34889 = state_33950__$1;
(statearr_33954_34889[(2)] = null);

(statearr_33954_34889[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33951 === (4))){
var inst_33918 = (state_33950[(9)]);
var inst_33918__$1 = (state_33950[(2)]);
var inst_33919 = (inst_33918__$1 == null);
var inst_33920 = cljs.core.not(inst_33919);
var state_33950__$1 = (function (){var statearr_33955 = state_33950;
(statearr_33955[(9)] = inst_33918__$1);

return statearr_33955;
})();
if(inst_33920){
var statearr_33956_34890 = state_33950__$1;
(statearr_33956_34890[(1)] = (5));

} else {
var statearr_33957_34891 = state_33950__$1;
(statearr_33957_34891[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33951 === (15))){
var inst_33940 = (state_33950[(2)]);
var state_33950__$1 = state_33950;
var statearr_33958_34892 = state_33950__$1;
(statearr_33958_34892[(2)] = inst_33940);

(statearr_33958_34892[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33951 === (13))){
var state_33950__$1 = state_33950;
var statearr_33959_34893 = state_33950__$1;
(statearr_33959_34893[(2)] = null);

(statearr_33959_34893[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33951 === (6))){
var inst_33915 = (state_33950[(8)]);
var inst_33936 = (inst_33915 > (0));
var state_33950__$1 = state_33950;
if(cljs.core.truth_(inst_33936)){
var statearr_33960_34894 = state_33950__$1;
(statearr_33960_34894[(1)] = (12));

} else {
var statearr_33961_34895 = state_33950__$1;
(statearr_33961_34895[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33951 === (3))){
var inst_33948 = (state_33950[(2)]);
var state_33950__$1 = state_33950;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33950__$1,inst_33948);
} else {
if((state_val_33951 === (12))){
var inst_33914 = (state_33950[(7)]);
var inst_33938 = cljs.core.vec(inst_33914);
var state_33950__$1 = state_33950;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33950__$1,(15),out,inst_33938);
} else {
if((state_val_33951 === (2))){
var state_33950__$1 = state_33950;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33950__$1,(4),ch);
} else {
if((state_val_33951 === (11))){
var inst_33930 = (state_33950[(2)]);
var inst_33931 = (new Array(n));
var inst_33914 = inst_33931;
var inst_33915 = (0);
var state_33950__$1 = (function (){var statearr_33962 = state_33950;
(statearr_33962[(10)] = inst_33930);

(statearr_33962[(7)] = inst_33914);

(statearr_33962[(8)] = inst_33915);

return statearr_33962;
})();
var statearr_33963_34896 = state_33950__$1;
(statearr_33963_34896[(2)] = null);

(statearr_33963_34896[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33951 === (9))){
var inst_33914 = (state_33950[(7)]);
var inst_33928 = cljs.core.vec(inst_33914);
var state_33950__$1 = state_33950;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33950__$1,(11),out,inst_33928);
} else {
if((state_val_33951 === (5))){
var inst_33918 = (state_33950[(9)]);
var inst_33923 = (state_33950[(11)]);
var inst_33914 = (state_33950[(7)]);
var inst_33915 = (state_33950[(8)]);
var inst_33922 = (inst_33914[inst_33915] = inst_33918);
var inst_33923__$1 = (inst_33915 + (1));
var inst_33924 = (inst_33923__$1 < n);
var state_33950__$1 = (function (){var statearr_33964 = state_33950;
(statearr_33964[(11)] = inst_33923__$1);

(statearr_33964[(12)] = inst_33922);

return statearr_33964;
})();
if(cljs.core.truth_(inst_33924)){
var statearr_33965_34908 = state_33950__$1;
(statearr_33965_34908[(1)] = (8));

} else {
var statearr_33966_34909 = state_33950__$1;
(statearr_33966_34909[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33951 === (14))){
var inst_33943 = (state_33950[(2)]);
var inst_33944 = cljs.core.async.close_BANG_(out);
var state_33950__$1 = (function (){var statearr_33968 = state_33950;
(statearr_33968[(13)] = inst_33943);

return statearr_33968;
})();
var statearr_33969_34910 = state_33950__$1;
(statearr_33969_34910[(2)] = inst_33944);

(statearr_33969_34910[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33951 === (10))){
var inst_33934 = (state_33950[(2)]);
var state_33950__$1 = state_33950;
var statearr_33970_34911 = state_33950__$1;
(statearr_33970_34911[(2)] = inst_33934);

(statearr_33970_34911[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33951 === (8))){
var inst_33923 = (state_33950[(11)]);
var inst_33914 = (state_33950[(7)]);
var tmp33967 = inst_33914;
var inst_33914__$1 = tmp33967;
var inst_33915 = inst_33923;
var state_33950__$1 = (function (){var statearr_33971 = state_33950;
(statearr_33971[(7)] = inst_33914__$1);

(statearr_33971[(8)] = inst_33915);

return statearr_33971;
})();
var statearr_33972_34916 = state_33950__$1;
(statearr_33972_34916[(2)] = null);

(statearr_33972_34916[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__32253__auto__ = null;
var cljs$core$async$state_machine__32253__auto____0 = (function (){
var statearr_33973 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33973[(0)] = cljs$core$async$state_machine__32253__auto__);

(statearr_33973[(1)] = (1));

return statearr_33973;
});
var cljs$core$async$state_machine__32253__auto____1 = (function (state_33950){
while(true){
var ret_value__32254__auto__ = (function (){try{while(true){
var result__32255__auto__ = switch__32252__auto__(state_33950);
if(cljs.core.keyword_identical_QMARK_(result__32255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32255__auto__;
}
break;
}
}catch (e33974){var ex__32256__auto__ = e33974;
var statearr_33975_34919 = state_33950;
(statearr_33975_34919[(2)] = ex__32256__auto__);


if(cljs.core.seq((state_33950[(4)]))){
var statearr_33976_34920 = state_33950;
(statearr_33976_34920[(1)] = cljs.core.first((state_33950[(4)])));

} else {
throw ex__32256__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34921 = state_33950;
state_33950 = G__34921;
continue;
} else {
return ret_value__32254__auto__;
}
break;
}
});
cljs$core$async$state_machine__32253__auto__ = function(state_33950){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32253__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32253__auto____1.call(this,state_33950);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32253__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32253__auto____0;
cljs$core$async$state_machine__32253__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32253__auto____1;
return cljs$core$async$state_machine__32253__auto__;
})()
})();
var state__32299__auto__ = (function (){var statearr_33977 = f__32298__auto__();
(statearr_33977[(6)] = c__32297__auto___34858);

return statearr_33977;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32299__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__33979 = arguments.length;
switch (G__33979) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32297__auto___34927 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32298__auto__ = (function (){var switch__32252__auto__ = (function (state_34021){
var state_val_34022 = (state_34021[(1)]);
if((state_val_34022 === (7))){
var inst_34017 = (state_34021[(2)]);
var state_34021__$1 = state_34021;
var statearr_34023_34929 = state_34021__$1;
(statearr_34023_34929[(2)] = inst_34017);

(statearr_34023_34929[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34022 === (1))){
var inst_33980 = [];
var inst_33981 = inst_33980;
var inst_33982 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_34021__$1 = (function (){var statearr_34024 = state_34021;
(statearr_34024[(7)] = inst_33981);

(statearr_34024[(8)] = inst_33982);

return statearr_34024;
})();
var statearr_34025_34930 = state_34021__$1;
(statearr_34025_34930[(2)] = null);

(statearr_34025_34930[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34022 === (4))){
var inst_33985 = (state_34021[(9)]);
var inst_33985__$1 = (state_34021[(2)]);
var inst_33986 = (inst_33985__$1 == null);
var inst_33987 = cljs.core.not(inst_33986);
var state_34021__$1 = (function (){var statearr_34026 = state_34021;
(statearr_34026[(9)] = inst_33985__$1);

return statearr_34026;
})();
if(inst_33987){
var statearr_34027_34931 = state_34021__$1;
(statearr_34027_34931[(1)] = (5));

} else {
var statearr_34028_34932 = state_34021__$1;
(statearr_34028_34932[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34022 === (15))){
var inst_34011 = (state_34021[(2)]);
var state_34021__$1 = state_34021;
var statearr_34029_34934 = state_34021__$1;
(statearr_34029_34934[(2)] = inst_34011);

(statearr_34029_34934[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34022 === (13))){
var state_34021__$1 = state_34021;
var statearr_34030_34936 = state_34021__$1;
(statearr_34030_34936[(2)] = null);

(statearr_34030_34936[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34022 === (6))){
var inst_33981 = (state_34021[(7)]);
var inst_34006 = inst_33981.length;
var inst_34007 = (inst_34006 > (0));
var state_34021__$1 = state_34021;
if(cljs.core.truth_(inst_34007)){
var statearr_34031_34938 = state_34021__$1;
(statearr_34031_34938[(1)] = (12));

} else {
var statearr_34032_34939 = state_34021__$1;
(statearr_34032_34939[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34022 === (3))){
var inst_34019 = (state_34021[(2)]);
var state_34021__$1 = state_34021;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34021__$1,inst_34019);
} else {
if((state_val_34022 === (12))){
var inst_33981 = (state_34021[(7)]);
var inst_34009 = cljs.core.vec(inst_33981);
var state_34021__$1 = state_34021;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34021__$1,(15),out,inst_34009);
} else {
if((state_val_34022 === (2))){
var state_34021__$1 = state_34021;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34021__$1,(4),ch);
} else {
if((state_val_34022 === (11))){
var inst_33989 = (state_34021[(10)]);
var inst_33985 = (state_34021[(9)]);
var inst_33999 = (state_34021[(2)]);
var inst_34000 = [];
var inst_34001 = inst_34000.push(inst_33985);
var inst_33981 = inst_34000;
var inst_33982 = inst_33989;
var state_34021__$1 = (function (){var statearr_34033 = state_34021;
(statearr_34033[(7)] = inst_33981);

(statearr_34033[(11)] = inst_34001);

(statearr_34033[(12)] = inst_33999);

(statearr_34033[(8)] = inst_33982);

return statearr_34033;
})();
var statearr_34034_34940 = state_34021__$1;
(statearr_34034_34940[(2)] = null);

(statearr_34034_34940[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34022 === (9))){
var inst_33981 = (state_34021[(7)]);
var inst_33997 = cljs.core.vec(inst_33981);
var state_34021__$1 = state_34021;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34021__$1,(11),out,inst_33997);
} else {
if((state_val_34022 === (5))){
var inst_33989 = (state_34021[(10)]);
var inst_33985 = (state_34021[(9)]);
var inst_33982 = (state_34021[(8)]);
var inst_33989__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_33985) : f.call(null,inst_33985));
var inst_33990 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33989__$1,inst_33982);
var inst_33991 = cljs.core.keyword_identical_QMARK_(inst_33982,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_33992 = ((inst_33990) || (inst_33991));
var state_34021__$1 = (function (){var statearr_34035 = state_34021;
(statearr_34035[(10)] = inst_33989__$1);

return statearr_34035;
})();
if(cljs.core.truth_(inst_33992)){
var statearr_34036_34943 = state_34021__$1;
(statearr_34036_34943[(1)] = (8));

} else {
var statearr_34037_34944 = state_34021__$1;
(statearr_34037_34944[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34022 === (14))){
var inst_34014 = (state_34021[(2)]);
var inst_34015 = cljs.core.async.close_BANG_(out);
var state_34021__$1 = (function (){var statearr_34039 = state_34021;
(statearr_34039[(13)] = inst_34014);

return statearr_34039;
})();
var statearr_34040_34946 = state_34021__$1;
(statearr_34040_34946[(2)] = inst_34015);

(statearr_34040_34946[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34022 === (10))){
var inst_34004 = (state_34021[(2)]);
var state_34021__$1 = state_34021;
var statearr_34041_34947 = state_34021__$1;
(statearr_34041_34947[(2)] = inst_34004);

(statearr_34041_34947[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34022 === (8))){
var inst_33989 = (state_34021[(10)]);
var inst_33981 = (state_34021[(7)]);
var inst_33985 = (state_34021[(9)]);
var inst_33994 = inst_33981.push(inst_33985);
var tmp34038 = inst_33981;
var inst_33981__$1 = tmp34038;
var inst_33982 = inst_33989;
var state_34021__$1 = (function (){var statearr_34042 = state_34021;
(statearr_34042[(7)] = inst_33981__$1);

(statearr_34042[(8)] = inst_33982);

(statearr_34042[(14)] = inst_33994);

return statearr_34042;
})();
var statearr_34043_34948 = state_34021__$1;
(statearr_34043_34948[(2)] = null);

(statearr_34043_34948[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__32253__auto__ = null;
var cljs$core$async$state_machine__32253__auto____0 = (function (){
var statearr_34044 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34044[(0)] = cljs$core$async$state_machine__32253__auto__);

(statearr_34044[(1)] = (1));

return statearr_34044;
});
var cljs$core$async$state_machine__32253__auto____1 = (function (state_34021){
while(true){
var ret_value__32254__auto__ = (function (){try{while(true){
var result__32255__auto__ = switch__32252__auto__(state_34021);
if(cljs.core.keyword_identical_QMARK_(result__32255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32255__auto__;
}
break;
}
}catch (e34045){var ex__32256__auto__ = e34045;
var statearr_34046_34953 = state_34021;
(statearr_34046_34953[(2)] = ex__32256__auto__);


if(cljs.core.seq((state_34021[(4)]))){
var statearr_34047_34955 = state_34021;
(statearr_34047_34955[(1)] = cljs.core.first((state_34021[(4)])));

} else {
throw ex__32256__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34960 = state_34021;
state_34021 = G__34960;
continue;
} else {
return ret_value__32254__auto__;
}
break;
}
});
cljs$core$async$state_machine__32253__auto__ = function(state_34021){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32253__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32253__auto____1.call(this,state_34021);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32253__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32253__auto____0;
cljs$core$async$state_machine__32253__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32253__auto____1;
return cljs$core$async$state_machine__32253__auto__;
})()
})();
var state__32299__auto__ = (function (){var statearr_34048 = f__32298__auto__();
(statearr_34048[(6)] = c__32297__auto___34927);

return statearr_34048;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32299__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
