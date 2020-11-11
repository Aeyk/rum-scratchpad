(ns rum-workshop.music
  (:require [rum.core :as rum :refer [adapt-class]]
            ["tone" :as tone]))

(enable-console-print!)

(def root-element (.getElementById js/document "app"))

(rum/defcs app < rum/reactive
  [state _ _]
  {:did-mount 
   (fn [e]
     (js/console.log tone))}
   )

(defn refresh [] 
  (rum/mount 
    (app) root-element))

(defn ^:export init []
  (refresh))
