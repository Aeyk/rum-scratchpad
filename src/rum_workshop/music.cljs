(ns rum-workshop.music
  (:require [rum.core :as rum :refer [adapt-class]]
            [keybind.core :as key]
            ["tone" :as tone]))

(enable-console-print!)

(def root-element (.getElementById js/document "app"))

(def psynth (new tone/PolySynth tone/Synth 6))

(defn init-psynth []
  (def audio-out (.toDestination psynth)))

(defn play-note [notes duration]
  (.triggerAttackRelease 
    audio-out
    notes duration))

(defn set-bpm [bpm]
    (set! (.. tone/Transport -bpm -value) bpm))

(defn random-chord []
  ((comp first shuffle) 
   [#js ["C4" "E4" "G4"]
    #js ["D4" "B4" "G4"]
    #js ["D4" "F#4" "A4"]         
    #js ["G4" "B4" "D4"]
    #js ["D4" "F#4" "A4"]
    #js ["C4" "E4" "G4"]
    #js ["C4" "E4" "G4"]
    #js ["Bb4" "D4" "F4"]
    #js ["F4" "A4" "C4"]]))

(defn play-random-chord []
  (let [chord (random-chord)]
    (play-note 
      chord
      "16n")
    (js/console.log chord)))

(def four-random-loop
  (atom 
    #js [#js ["D4" "F#4" "A4"]
         #js ["C4" "E4" "G4"]
         #js ["G4" "B4" "D4"]
         #js ["C4" "E4" "G4"]]))

(defn cycle-chords-loop []
  (set! four-random-loop 
    (conj (rest @four-random-loop) (first @four-random-loop)))
  four-random-loop)

(def sample (comp first shuffle))

(defn transpose [notes delta]
  (apply array 
    (map #(as-> % $$ 
            (tone/Midi. $$) 
            (.transpose $$ delta))
      notes)))

(defn init-clock []
  (set-bpm 200)
  (.start tone/Transport))


(defn init-keybinding []
  (def s (atom 0)) 

  (key/bind! "f" ::my-trigger 
    #(do 
       (swap! s + 7)
      (js/console.log @s)))


  (key/bind! "g" ::my-trigger 
    #(do 
       (swap! s - 5)
      (js/console.log @s)))


  (key/bind! "q" ::my-trigger 
    #(play-note
       (transpose #js ["D4" "F#4" "A4"]  (+ 0 @s))
       "16n"))
  (key/bind! "w" ::my-trigger 
    #((comp js/console.log play-note) 
      (transpose #js ["D4" "F#4" "A4"] (+ 5 @s))
      "16n"))
  (key/bind! "e" ::my-trigger 
    #((comp js/console.log play-note) 
      (transpose #js ["D4" "F#4" "A4"] (+ 7 @s))
      "16n"))

  (key/bind! "c" ::my-trigger 
    #(play-note
       (transpose #js ["C4" "E4" "G4"]  (+ 0 @s))
       "16n"))
  (key/bind! "x" ::my-trigger 
    #((comp js/console.log play-note) 
      (transpose #js ["C4" "E4" "G4"] (+ 5 @s))
      "16n"))
  (key/bind! "z" ::my-trigger 
    #((comp js/console.log play-note) 
      (transpose #js ["C4" "E4" "G4"] (+ 7 @s))
      "16n"))

  (key/bind! "a" ::my-trigger 
    #((comp js/console.log play-note) 
      (transpose #js ["E4" "B4" "G4"] (+ 2 @s))
      "16n"))

  (key/bind! "s" ::my-trigger 
    #((comp js/console.log play-note) 
      (transpose #js ["E4" "G4" "B4"] (+ 3 @s))
      "16n"))
  (key/bind! "d" ::my-trigger 
    #((comp js/console.log play-note) 
      (transpose #js ["E4" "G4" "B4"] (+ 4 @s))
      "16n"))

  (key/bind! "h" ::my-trigger 
    #((comp js/console.log play-note) 
      (transpose (array (first #js ["E4" "B4" "G4"])) (+ 14 @s))
      "16n"))
  (key/bind! "j" ::my-trigger 
    #((comp js/console.log play-note) 
      (transpose (array (first  #js ["E4" "B4" "G4"])) (+ 15 @s))
      "16n"))
  (key/bind! "k" ::my-trigger 
    #((comp js/console.log play-note) 
      (transpose (array (first  #js ["E4" "B4" "G4"])) (+ 16 @s))
      "16n"))

  (key/bind! "y" ::my-trigger 
    #(play-note
       (transpose (array (first  #js ["D4" "F#4" "A4"]))  (+ 12 @s))
       "16n"))
  (key/bind! "u" ::my-trigger 
    #((comp js/console.log play-note) 
      (transpose (array (first #js ["D4" "F#4" "A4"])) (+ 17 @s))
      "16n"))
  (key/bind! "i" ::my-trigger 
    #((comp js/console.log play-note) 
      (transpose (array (first #js ["D4" "F#4" "A4"])) (+ 19 @s))
      "16n"))

  (key/bind! "n" ::my-trigger 
    #(play-note
       (transpose (array (first ["C4" "E4" "G4"]))  (+ 12 @s))
       "16n"))
  (key/bind! "m" ::my-trigger 
    #((comp js/console.log play-note) 
      (transpose (array (first #js ["C4" "E4" "G4"])) (+ 7 @s))
      "16n"))
  (key/bind! "," ::my-trigger 
    #((comp js/console.log play-note) 
      (transpose (array (first #js ["C4" "E4" "G4"])) (+ 9 @s))
      "16n"))
  
  

  
  )


(rum/defc app < 
  {:did-mount 
   (fn [e]
     (init-psynth)
     (init-keybinding)
     (init-clock))}
  []
  [:div 
   [:pre "QWE ASD ZXC for chords"] 
   [:pre "YUI HJK NM, for melody"]
   [:pre "F G for transpose"]
   
   ] )

(defn refresh [] 
  (rum/mount 
    (app) root-element))

(defn ^:export init []
  (refresh))
