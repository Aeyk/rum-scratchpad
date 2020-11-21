goog.provide('rum_workshop.music');
var module$node_modules$tone$build$Tone=shadow.js.require("module$node_modules$tone$build$Tone", {});
cljs.core.enable_console_print_BANG_();
rum_workshop.music.root_element = document.getElementById("app");
rum_workshop.music.psynth = (new module$node_modules$tone$build$Tone.PolySynth(module$node_modules$tone$build$Tone.Synth,(6)));
rum_workshop.music.init_psynth = (function rum_workshop$music$init_psynth(){
return (
rum_workshop.music.audio_out = rum_workshop.music.psynth.toDestination())
;
});
rum_workshop.music.play_note = (function rum_workshop$music$play_note(notes,duration){
return rum_workshop.music.audio_out.triggerAttackRelease(notes,duration);
});
rum_workshop.music.set_bpm = (function rum_workshop$music$set_bpm(bpm){
return (module$node_modules$tone$build$Tone.Transport.bpm.value = bpm);
});
rum_workshop.music.random_chord = (function rum_workshop$music$random_chord(){
return cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.shuffle)(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [["C4","E4","G4"],["D4","B4","G4"],["D4","F#4","A4"],["G4","B4","D4"],["D4","F#4","A4"],["C4","E4","G4"],["C4","E4","G4"],["Bb4","D4","F4"],["F4","A4","C4"]], null));
});
rum_workshop.music.play_random_chord = (function rum_workshop$music$play_random_chord(){
var chord = rum_workshop.music.random_chord();
rum_workshop.music.play_note(chord,"16n");

return console.log(chord);
});
rum_workshop.music.four_random_loop = cljs.core.atom.cljs$core$IFn$_invoke$arity$1([["D4","F#4","A4"],["C4","E4","G4"],["G4","B4","D4"],["C4","E4","G4"]]);
rum_workshop.music.cycle_chords_loop = (function rum_workshop$music$cycle_chords_loop(){
(rum_workshop.music.four_random_loop = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.rest(cljs.core.deref(rum_workshop.music.four_random_loop)),cljs.core.first(cljs.core.deref(rum_workshop.music.four_random_loop))));

return rum_workshop.music.four_random_loop;
});
rum_workshop.music.sample = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.shuffle);
rum_workshop.music.transpose = (function rum_workshop$music$transpose(notes,delta){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__27621_SHARP_){
var $$ = p1__27621_SHARP_;
var $$__$1 = (new module$node_modules$tone$build$Tone.Midi($$));
return $$__$1.transpose(delta);
}),notes));
});
rum_workshop.music.init_clock = (function rum_workshop$music$init_clock(){
rum_workshop.music.set_bpm((200));

return module$node_modules$tone$build$Tone.Transport.start();
});
rum_workshop.music.init_keybinding = (function rum_workshop$music$init_keybinding(){
rum_workshop.music.s = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));

keybind.core.bind_BANG_("f",new cljs.core.Keyword("rum-workshop.music","my-trigger","rum-workshop.music/my-trigger",969138751),(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(rum_workshop.music.s,cljs.core._PLUS_,(7));

return console.log(cljs.core.deref(rum_workshop.music.s));
}));

keybind.core.bind_BANG_("g",new cljs.core.Keyword("rum-workshop.music","my-trigger","rum-workshop.music/my-trigger",969138751),(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(rum_workshop.music.s,cljs.core._,(5));

return console.log(cljs.core.deref(rum_workshop.music.s));
}));

keybind.core.bind_BANG_("q",new cljs.core.Keyword("rum-workshop.music","my-trigger","rum-workshop.music/my-trigger",969138751),(function (){
return rum_workshop.music.play_note(rum_workshop.music.transpose(["D4","F#4","A4"],((0) + cljs.core.deref(rum_workshop.music.s))),"16n");
}));

keybind.core.bind_BANG_("w",new cljs.core.Keyword("rum-workshop.music","my-trigger","rum-workshop.music/my-trigger",969138751),(function (){
return cljs.core.comp.cljs$core$IFn$_invoke$arity$2(console.log,rum_workshop.music.play_note)(rum_workshop.music.transpose(["D4","F#4","A4"],((5) + cljs.core.deref(rum_workshop.music.s))),"16n");
}));

keybind.core.bind_BANG_("e",new cljs.core.Keyword("rum-workshop.music","my-trigger","rum-workshop.music/my-trigger",969138751),(function (){
return cljs.core.comp.cljs$core$IFn$_invoke$arity$2(console.log,rum_workshop.music.play_note)(rum_workshop.music.transpose(["D4","F#4","A4"],((7) + cljs.core.deref(rum_workshop.music.s))),"16n");
}));

keybind.core.bind_BANG_("c",new cljs.core.Keyword("rum-workshop.music","my-trigger","rum-workshop.music/my-trigger",969138751),(function (){
return rum_workshop.music.play_note(rum_workshop.music.transpose(["C4","E4","G4"],((0) + cljs.core.deref(rum_workshop.music.s))),"16n");
}));

keybind.core.bind_BANG_("x",new cljs.core.Keyword("rum-workshop.music","my-trigger","rum-workshop.music/my-trigger",969138751),(function (){
return cljs.core.comp.cljs$core$IFn$_invoke$arity$2(console.log,rum_workshop.music.play_note)(rum_workshop.music.transpose(["C4","E4","G4"],((5) + cljs.core.deref(rum_workshop.music.s))),"16n");
}));

keybind.core.bind_BANG_("z",new cljs.core.Keyword("rum-workshop.music","my-trigger","rum-workshop.music/my-trigger",969138751),(function (){
return cljs.core.comp.cljs$core$IFn$_invoke$arity$2(console.log,rum_workshop.music.play_note)(rum_workshop.music.transpose(["C4","E4","G4"],((7) + cljs.core.deref(rum_workshop.music.s))),"16n");
}));

keybind.core.bind_BANG_("a",new cljs.core.Keyword("rum-workshop.music","my-trigger","rum-workshop.music/my-trigger",969138751),(function (){
return cljs.core.comp.cljs$core$IFn$_invoke$arity$2(console.log,rum_workshop.music.play_note)(rum_workshop.music.transpose(["E4","B4","G4"],((2) + cljs.core.deref(rum_workshop.music.s))),"16n");
}));

keybind.core.bind_BANG_("s",new cljs.core.Keyword("rum-workshop.music","my-trigger","rum-workshop.music/my-trigger",969138751),(function (){
return cljs.core.comp.cljs$core$IFn$_invoke$arity$2(console.log,rum_workshop.music.play_note)(rum_workshop.music.transpose(["E4","G4","B4"],((3) + cljs.core.deref(rum_workshop.music.s))),"16n");
}));

keybind.core.bind_BANG_("d",new cljs.core.Keyword("rum-workshop.music","my-trigger","rum-workshop.music/my-trigger",969138751),(function (){
return cljs.core.comp.cljs$core$IFn$_invoke$arity$2(console.log,rum_workshop.music.play_note)(rum_workshop.music.transpose(["E4","G4","B4"],((4) + cljs.core.deref(rum_workshop.music.s))),"16n");
}));

keybind.core.bind_BANG_("h",new cljs.core.Keyword("rum-workshop.music","my-trigger","rum-workshop.music/my-trigger",969138751),(function (){
return cljs.core.comp.cljs$core$IFn$_invoke$arity$2(console.log,rum_workshop.music.play_note)(rum_workshop.music.transpose([cljs.core.first(["E4","B4","G4"])],((14) + cljs.core.deref(rum_workshop.music.s))),"16n");
}));

keybind.core.bind_BANG_("j",new cljs.core.Keyword("rum-workshop.music","my-trigger","rum-workshop.music/my-trigger",969138751),(function (){
return cljs.core.comp.cljs$core$IFn$_invoke$arity$2(console.log,rum_workshop.music.play_note)(rum_workshop.music.transpose([cljs.core.first(["E4","B4","G4"])],((15) + cljs.core.deref(rum_workshop.music.s))),"16n");
}));

keybind.core.bind_BANG_("k",new cljs.core.Keyword("rum-workshop.music","my-trigger","rum-workshop.music/my-trigger",969138751),(function (){
return cljs.core.comp.cljs$core$IFn$_invoke$arity$2(console.log,rum_workshop.music.play_note)(rum_workshop.music.transpose([cljs.core.first(["E4","B4","G4"])],((16) + cljs.core.deref(rum_workshop.music.s))),"16n");
}));

keybind.core.bind_BANG_("y",new cljs.core.Keyword("rum-workshop.music","my-trigger","rum-workshop.music/my-trigger",969138751),(function (){
return rum_workshop.music.play_note(rum_workshop.music.transpose([cljs.core.first(["D4","F#4","A4"])],((12) + cljs.core.deref(rum_workshop.music.s))),"16n");
}));

keybind.core.bind_BANG_("u",new cljs.core.Keyword("rum-workshop.music","my-trigger","rum-workshop.music/my-trigger",969138751),(function (){
return cljs.core.comp.cljs$core$IFn$_invoke$arity$2(console.log,rum_workshop.music.play_note)(rum_workshop.music.transpose([cljs.core.first(["D4","F#4","A4"])],((17) + cljs.core.deref(rum_workshop.music.s))),"16n");
}));

keybind.core.bind_BANG_("i",new cljs.core.Keyword("rum-workshop.music","my-trigger","rum-workshop.music/my-trigger",969138751),(function (){
return cljs.core.comp.cljs$core$IFn$_invoke$arity$2(console.log,rum_workshop.music.play_note)(rum_workshop.music.transpose([cljs.core.first(["D4","F#4","A4"])],((19) + cljs.core.deref(rum_workshop.music.s))),"16n");
}));

keybind.core.bind_BANG_("n",new cljs.core.Keyword("rum-workshop.music","my-trigger","rum-workshop.music/my-trigger",969138751),(function (){
return rum_workshop.music.play_note(rum_workshop.music.transpose([cljs.core.first(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["C4","E4","G4"], null))],((12) + cljs.core.deref(rum_workshop.music.s))),"16n");
}));

keybind.core.bind_BANG_("m",new cljs.core.Keyword("rum-workshop.music","my-trigger","rum-workshop.music/my-trigger",969138751),(function (){
return cljs.core.comp.cljs$core$IFn$_invoke$arity$2(console.log,rum_workshop.music.play_note)(rum_workshop.music.transpose([cljs.core.first(["C4","E4","G4"])],((7) + cljs.core.deref(rum_workshop.music.s))),"16n");
}));

return keybind.core.bind_BANG_(",",new cljs.core.Keyword("rum-workshop.music","my-trigger","rum-workshop.music/my-trigger",969138751),(function (){
return cljs.core.comp.cljs$core$IFn$_invoke$arity$2(console.log,rum_workshop.music.play_note)(rum_workshop.music.transpose([cljs.core.first(["C4","E4","G4"])],((9) + cljs.core.deref(rum_workshop.music.s))),"16n");
}));
});
rum_workshop.music.app = rum.core.lazy_build(rum.core.build_defc,(function (){
return daiquiri.core.create_element("div",null,[daiquiri.core.create_element("pre",null,["QWE ASD ZXC for chords"]),daiquiri.core.create_element("pre",null,["YUI HJK NM, for melody"]),daiquiri.core.create_element("pre",null,["F G for transpose"]),daiquiri.core.create_element("br",null,null),daiquiri.core.create_element("pre",null,[daiquiri.core.create_element("a",{'href':"https://github.com/Aeyk/rum-scratchpad"},["Click here"])," to view the source."])]);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (e){
rum_workshop.music.init_psynth();

rum_workshop.music.init_keybinding();

return rum_workshop.music.init_clock();
})], null)], null),"rum-workshop.music/app");
rum_workshop.music.refresh = (function rum_workshop$music$refresh(){
return rum.core.mount(rum_workshop.music.app(),rum_workshop.music.root_element);
});
rum_workshop.music.init = (function rum_workshop$music$init(){
return rum_workshop.music.refresh();
});
goog.exportSymbol('rum_workshop.music.init', rum_workshop.music.init);

//# sourceMappingURL=rum_workshop.music.js.map
