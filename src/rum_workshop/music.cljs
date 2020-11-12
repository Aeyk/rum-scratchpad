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
  (let [chord ((comp first shuffle) 
               [#js ["C4" "E4" "G4"]
                #js ["D4" "B4" "G4"]
                #js ["D4" "F#4" "A4"]         
                #js ["G4" "B4" "D4"]
                #js ["D4" "F#4" "A4"]
                #js ["C4" "E4" "G4"]
                #js ["C4" "E4" "G4"]
                #js ["Bb4" "D4" "F4"]
                #js ["F4" "A4" "C4"]])]
    (play-note 
      chord
      "16n")
    (js/console.log chord)))

(defn random-chord-closure []
  (fn []
    (random-chord)))

(defn init-clock []
  (set-bpm 100)
  (.scheduleRepeat tone/Transport 
    (fn [time]
      (let [osc (.toDestination (new tone/Oscillator))
            chord-a (random-chord-closure)
            chord-b (random-chord-closure)
            chord-c (random-chord-closure)
            ]
        (((comp first shuffle) [chord-a chord-b chord-c]))
        #_(.stop 
          (.start osc time) 
          (+ time 0.0175))))
    ((comp first shuffle) ["4n" "4n" "2n"]))
  (.start tone/Transport))

(defn init-keybinding []
  (key/bind! "c" ::my-trigger 
    random-chord))

(rum/defc app < 
  {:did-mount 
   (fn [e]
     (init-psynth)
     (init-keybinding)
     (init-clock)
     )}
  []
  [:div "Hello"] )

(defn refresh [] 
  (rum/mount 
    (app) root-element))

(defn ^:export init []
  (refresh))
