(ns rum-workshop.music
  (:require [rum.core :as rum :refer [adapt-class]]
            [keybind.core :as key]
            ["tone" :as tone]))

(enable-console-print!)

(def root-element (.getElementById js/document "app"))

(defn metronome [bpm]
  )
(def psynth (new tone/PolySynth tone/Synth 6))

(defn init-psynth []
  (def audio-out (.toDestination psynth)))

(defn play-note [notes duration]
  (.triggerAttackRelease 
    audio-out
    notes duration))

(defn init-keybinding []
  (key/bind! "c" ::my-trigger 
    (fn [_]
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
        (js/console.log chord)))))

(rum/defc app < 
  {:did-mount 
   (fn [e]
     (init-psynth)
     (init-keybinding)
     )}
  []
  
   )

(defn refresh [] 
  (rum/mount 
    (app) root-element))

(defn ^:export init []
  (refresh))
