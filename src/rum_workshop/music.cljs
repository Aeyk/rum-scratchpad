(ns rum-workshop.music
  (:require [rum.core :as rum :refer [adapt-class]]
            [keybind.core :as key]
            ["tone" :as tone :default Synth]
            ["@tonejs/piano" :as piano :default Piano]))

(enable-console-print!)

(def root-element (.getElementById js/document "app"))

(defn play-note [note duration]
  (.triggerAttackRelease 
       (.toDestination (new tone/Synth.))
       note duration))

(defn init-keybinding []
  (key/bind! "c" ::my-trigger 
    (fn [_]
      (play-note "C4" "8n"))))

(rum/defc app < 
  {:did-mount 
   (fn [e]
     (init-keybinding)
     (js/console.log tone)
     (play-note "C4" "8n")
     )}
  []
  
   )

(defn refresh [] 
  (rum/mount 
    (app) root-element))

(defn ^:export init []
  (refresh))
