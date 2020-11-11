(ns rum-workshop.music
  (:require [rum.core :as rum :refer [adapt-class]]
            ["tone" :as tone :default Synth]
            ["@tonejs/piano" :as piano :default Piano]))

(enable-console-print!)

(def root-element (.getElementById js/document "app"))

(rum/defc app < 
  {:did-mount 
   (fn [e]
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
