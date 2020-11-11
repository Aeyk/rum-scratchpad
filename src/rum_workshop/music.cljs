(ns rum-workshop.music
  (:require [rum.core :as rum :refer [adapt-class]]
            ["tone" :as tone :default Synth]
            ["@tonejs/piano" :as piano :default Piano]
            ["webmidi" :as webmidi :default WebMidi]))

(enable-console-print!)

(def root-element (.getElementById js/document "app"))

(defn init-webmidi []
  (.enable webmidi
    (fn [err]
      (if err
        (js/console.log "WebMidi could not be enabled.", err)
        (js/console.log "WebMidi enabled!"))
      )))

(rum/defc app < 
  {:did-mount 
   (fn [e]
     (init-webmidi)
     (js/console.log tone)
     (.triggerAttackRelease 
       (.toDestination (new tone/Synth.))
       "C4" "8n")
     )}
  []
  
   )

(defn refresh [] 
  (rum/mount 
    (app) root-element))

(defn ^:export init []
  (refresh))
