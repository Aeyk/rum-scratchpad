goog.provide('leipzig.melody');
/**
 * Returns a function that translates a beat number into seconds.
 *   e.g. ((bpm 90) 5)
 */
leipzig.melody.bpm = (function leipzig$melody$bpm(beats){
return (function (beat){
return ((beat / beats) * (60));
});
});
/**
 * Zips an arbitrary quality onto a melody.
 *   e.g. (->> (rhythm [1 1/2]) (having :drum [:kick :snare]))
 */
leipzig.melody.having = (function leipzig$melody$having(k,values,notes){
return cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__28563_SHARP_,p2__28564_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__28563_SHARP_,k,p2__28564_SHARP_);
}),notes,values);
});
leipzig.melody.utter = (function leipzig$melody$utter(object,time,duration,velocity){
if(typeof object === 'number'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"pitch","pitch",1495126700),object,new cljs.core.Keyword(null,"time","time",1385887882),time,new cljs.core.Keyword(null,"duration","duration",1444101068),duration,new cljs.core.Keyword(null,"velocity","velocity",-581524355),velocity], null)], null);
} else {
if(cljs.core.sequential_QMARK_(object)){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__28565_SHARP_){
return (leipzig.melody.utter.cljs$core$IFn$_invoke$arity$4 ? leipzig.melody.utter.cljs$core$IFn$_invoke$arity$4(p1__28565_SHARP_,time,duration,velocity) : leipzig.melody.utter.call(null,p1__28565_SHARP_,time,duration,velocity));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([object], 0));
} else {
if(cljs.core.map_QMARK_(object)){
var G__28566 = cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.vals(object));
var G__28567 = time;
var G__28568 = duration;
var G__28569 = velocity;
return (leipzig.melody.utter.cljs$core$IFn$_invoke$arity$4 ? leipzig.melody.utter.cljs$core$IFn$_invoke$arity$4(G__28566,G__28567,G__28568,G__28569) : leipzig.melody.utter.call(null,G__28566,G__28567,G__28568,G__28569));
} else {
if((object == null)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"time","time",1385887882),time,new cljs.core.Keyword(null,"duration","duration",1444101068),duration], null)], null);
} else {
return null;
}
}
}
}
});
/**
 * Translates a sequence of durations and pitches into a melody.
 *   nil pitches signify rests, vectors represent clusters, and maps
 *   represent chords. Vector durations represent repeated notes.
 *   e.g. (phrase [1/2 1/2 3/2 3/2] [0 1 nil 4])
 *   (phrase [1 1 2] [4 3 [0 2]])
 *   (phrase [1 [1 2]] [4 3])
 *   (phrase (repeat 4) (map #(-> triad (root %))) [0 3 4 3])
 */
leipzig.melody.phrase = (function leipzig$melody$phrase(var_args){
var G__28572 = arguments.length;
switch (G__28572) {
case 3:
return leipzig.melody.phrase.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return leipzig.melody.phrase.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(leipzig.melody.phrase.cljs$core$IFn$_invoke$arity$3 = (function (durations,pitches,velocities){
var wrap = (function (x){
if(cljs.core.sequential_QMARK_(x)){
return x;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}
});
var counts = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.count,wrap),durations);
var normalised_pitches = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.repeat,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([counts,pitches], 0));
var normalised_durations = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(wrap,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([durations], 0));
var times = cljs.core.reductions.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,(0),normalised_durations);
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(leipzig.melody.utter,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([normalised_pitches,times,normalised_durations,velocities], 0));
}));

(leipzig.melody.phrase.cljs$core$IFn$_invoke$arity$2 = (function (durations,pitches){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__28570_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__28570_SHARP_,new cljs.core.Keyword(null,"velocity","velocity",-581524355));
}),leipzig.melody.phrase.cljs$core$IFn$_invoke$arity$3(durations,pitches,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null)));
}));

(leipzig.melody.phrase.cljs$lang$maxFixedArity = 3);

/**
 * Translates a sequence of durations into a rhythm.
 *   e.g. (rhythm [1 1 2])
 */
leipzig.melody.rhythm = (function leipzig$melody$rhythm(durations){
return leipzig.melody.phrase.cljs$core$IFn$_invoke$arity$2(durations,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null));
});
/**
 * Synonym for constantly.
 *   e.g. (->> notes (wherever (comp not :part), :part (is :bass)))
 */
leipzig.melody.is = cljs.core.constantly;
leipzig.melody.if_applicable = (function leipzig$melody$if_applicable(applies_QMARK_,f){
return (function (x){
if(cljs.core.truth_((applies_QMARK_.cljs$core$IFn$_invoke$arity$1 ? applies_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : applies_QMARK_.call(null,x)))){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x));
} else {
return x;
}
});
});
/**
 * Applies f to the k key of each note wherever condition? returns true.
 *   e.g. (->> notes (wherever (comp not :part), :part (is :piano))
 */
leipzig.melody.wherever = (function leipzig$melody$wherever(applies_QMARK_,k,f,notes){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(leipzig.melody.if_applicable(applies_QMARK_,(function (p1__28573_SHARP_){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(p1__28573_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null),f);
})),notes);
});
/**
 * Applies f to the k key of each note in notes, ignoring missing keys.
 *   e.g. (->> notes (where :time (bpm 90)))
 */
leipzig.melody.where = (function leipzig$melody$where(k,f,notes){
return leipzig.melody.wherever((function (p1__28574_SHARP_){
return cljs.core.contains_QMARK_(p1__28574_SHARP_,k);
}),k,f,notes);
});
/**
 * Sets a constant value for each note of a melody.
 *   e.g. (->> notes (all :part :drum))
 */
leipzig.melody.all = (function leipzig$melody$all(k,v,notes){
return leipzig.melody.wherever((leipzig.melody.is.cljs$core$IFn$_invoke$arity$1 ? leipzig.melody.is.cljs$core$IFn$_invoke$arity$1(true) : leipzig.melody.is.call(null,true)),k,(leipzig.melody.is.cljs$core$IFn$_invoke$arity$1 ? leipzig.melody.is.cljs$core$IFn$_invoke$arity$1(v) : leipzig.melody.is.call(null,v)),notes);
});
/**
 * Delay notes by wait.
 *   e.g. (->> melody (after 3))
 */
leipzig.melody.after = (function leipzig$melody$after(wait,notes){
return leipzig.melody.where(new cljs.core.Keyword(null,"time","time",1385887882),leipzig.scale.from(wait),notes);
});
leipzig.melody.before_QMARK_ = (function leipzig$melody$before_QMARK_(a,b){
return (new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(a) <= new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(b));
});
/**
 * Blends melodies.
 *   e.g. (->> melody (with bass drums))
 */
leipzig.melody.with$ = (function leipzig$melody$with(var_args){
var G__28579 = arguments.length;
switch (G__28579) {
case 2:
return leipzig.melody.with$.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___28607 = arguments.length;
var i__4737__auto___28608 = (0);
while(true){
if((i__4737__auto___28608 < len__4736__auto___28607)){
args_arr__4757__auto__.push((arguments[i__4737__auto___28608]));

var G__28609 = (i__4737__auto___28608 + (1));
i__4737__auto___28608 = G__28609;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((2)),(0),null));
return leipzig.melody.with$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4758__auto__);

}
});

(leipzig.melody.with$.cljs$core$IFn$_invoke$arity$2 = (function (p__28580,p__28581){
var vec__28582 = p__28580;
var seq__28583 = cljs.core.seq(vec__28582);
var first__28584 = cljs.core.first(seq__28583);
var seq__28583__$1 = cljs.core.next(seq__28583);
var a = first__28584;
var other_as = seq__28583__$1;
var as = vec__28582;
var vec__28585 = p__28581;
var seq__28586 = cljs.core.seq(vec__28585);
var first__28587 = cljs.core.first(seq__28586);
var seq__28586__$1 = cljs.core.next(seq__28586);
var b = first__28587;
var other_bs = seq__28586__$1;
var bs = vec__28585;
if(cljs.core.empty_QMARK_(as)){
return bs;
} else {
if(cljs.core.empty_QMARK_(bs)){
return as;
} else {
if(leipzig.melody.before_QMARK_(a,b)){
return cljs.core.cons(a,(new cljs.core.LazySeq(null,(function (){
return leipzig.melody.with$.cljs$core$IFn$_invoke$arity$2(other_as,bs);
}),null,null)));
} else {
return cljs.core.cons(b,(new cljs.core.LazySeq(null,(function (){
return leipzig.melody.with$.cljs$core$IFn$_invoke$arity$2(as,other_bs);
}),null,null)));

}
}
}
}));

(leipzig.melody.with$.cljs$core$IFn$_invoke$arity$variadic = (function (as,bs,others){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(leipzig.melody.with$,cljs.core.cons(as,cljs.core.cons(bs,others)));
}));

/** @this {Function} */
(leipzig.melody.with$.cljs$lang$applyTo = (function (seq28576){
var G__28577 = cljs.core.first(seq28576);
var seq28576__$1 = cljs.core.next(seq28576);
var G__28578 = cljs.core.first(seq28576__$1);
var seq28576__$2 = cljs.core.next(seq28576__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28577,G__28578,seq28576__$2);
}));

(leipzig.melody.with$.cljs$lang$maxFixedArity = (2));

/**
 * Replaces part of a melody with another.
 *   e.g. (->> notes (but 2 4 variation))
 */
leipzig.melody.but = (function leipzig$melody$but(start,end,variation,notes){
var starts_in_QMARK_ = (function (p__28588){
var map__28589 = p__28588;
var map__28589__$1 = (((((!((map__28589 == null))))?(((((map__28589.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28589.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28589):map__28589);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28589__$1,new cljs.core.Keyword(null,"time","time",1385887882));
return (((start <= time)) && ((time < end)));
});
var clip = (function (p__28591){
var map__28592 = p__28591;
var map__28592__$1 = (((((!((map__28592 == null))))?(((((map__28592.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28592.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28592):map__28592);
var note = map__28592__$1;
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28592__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var duration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28592__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
if((((time < start)) && ((start <= (time + duration))))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(note,new cljs.core.Keyword(null,"duration","duration",1444101068),(start - time));
} else {
return note;
}
});
return leipzig.melody.with$.cljs$core$IFn$_invoke$arity$2(leipzig.melody.after(start,variation),cljs.core.map.cljs$core$IFn$_invoke$arity$2(clip,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(starts_in_QMARK_),notes)));
});
/**
 * Returns the total duration of notes.
 *   e.g. (->> melody duration)
 */
leipzig.melody.duration = (function leipzig$melody$duration(notes){
var length = (function (p__28594){
var map__28595 = p__28594;
var map__28595__$1 = (((((!((map__28595 == null))))?(((((map__28595.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28595.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28595):map__28595);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28595__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var duration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28595__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
return (time + duration);
});
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.max,(0),cljs.core.map.cljs$core$IFn$_invoke$arity$2(length,notes));
});
/**
 * Sequences later after earlier.
 *   e.g. (->> call (then response))
 */
leipzig.melody.then = (function leipzig$melody$then(later,earlier){
return leipzig.melody.with$.cljs$core$IFn$_invoke$arity$2(earlier,leipzig.melody.after(leipzig.melody.duration(earlier),later));
});
leipzig.melody.mapthen = (function leipzig$melody$mapthen(var_args){
var args__4742__auto__ = [];
var len__4736__auto___28610 = arguments.length;
var i__4737__auto___28611 = (0);
while(true){
if((i__4737__auto___28611 < len__4736__auto___28610)){
args__4742__auto__.push((arguments[i__4737__auto___28611]));

var G__28612 = (i__4737__auto___28611 + (1));
i__4737__auto___28611 = G__28612;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return leipzig.melody.mapthen.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(leipzig.melody.mapthen.cljs$core$IFn$_invoke$arity$variadic = (function (f,melodies){

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__28598_SHARP_,p2__28597_SHARP_){
return leipzig.melody.then(p2__28597_SHARP_,p1__28598_SHARP_);
}),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.map,f,melodies));
}));

(leipzig.melody.mapthen.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(leipzig.melody.mapthen.cljs$lang$applyTo = (function (seq28599){
var G__28600 = cljs.core.first(seq28599);
var seq28599__$1 = cljs.core.next(seq28599);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28600,seq28599__$1);
}));

/**
 * Repeats notes n times.
 *   e.g. (->> bassline (times 4))
 */
leipzig.melody.times = (function leipzig$melody$times(n,notes){
return leipzig.melody.mapthen.cljs$core$IFn$_invoke$arity$variadic(cljs.core.identity,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(n,notes)], 0));
});
/**
 * Transform both :time and :duration according to timing.
 *   e.g. (->> notes (tempo (bpm 120)))
 */
leipzig.melody.tempo = (function leipzig$melody$tempo(timing,notes){
return leipzig.melody.where(new cljs.core.Keyword(null,"time","time",1385887882),timing,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__28601){
var map__28602 = p__28601;
var map__28602__$1 = (((((!((map__28602 == null))))?(((((map__28602.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28602.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28602):map__28602);
var note = map__28602__$1;
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28602__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var duration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28602__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(note,new cljs.core.Keyword(null,"duration","duration",1444101068),((function (){var G__28604 = (start + duration);
return (timing.cljs$core$IFn$_invoke$arity$1 ? timing.cljs$core$IFn$_invoke$arity$1(G__28604) : timing.call(null,G__28604));
})() - (timing.cljs$core$IFn$_invoke$arity$1 ? timing.cljs$core$IFn$_invoke$arity$1(start) : timing.call(null,start))));
}),notes));
});
/**
 * Linearly interpolated change between from and to.
 *   e.g. (->> notes (tempo (accelerando 0 4 3/2))))
 */
leipzig.melody.accelerando = (function leipzig$melody$accelerando(from,to,by){
return (function leipzig$melody$accelerando_$_rate(t){
if((from >= t)){
return t;
} else {
if((to >= t)){
var duration = (to - from);
var position = (t - from);
var completion = (position / duration);
var extent = (by - (1));
var base = t;
var extra = (((position * 0.5) * completion) * extent);
return (base + extra);
} else {
return (leipzig$melody$accelerando_$_rate(to) + (by * (t - to)));

}
}
});
});

//# sourceMappingURL=leipzig.melody.js.map
