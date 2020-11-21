(ns rum-workshop.map
  (:require [rum.core :as rum] 
            ;; https://shadow-cljs.github.io/docs/UsersGuide.html#_conditional_reading
            ;; shadow-cljs example for import libraries
            ["react-leaflet" :as react-leaflet]))
;; https://gist.github.com/orolle/21902cc4a58f2a97c7ab27c2fb7b2503

(enable-console-print!)

(def root-element (.getElementById js/document "app"))

(rum/defc app < rum/reactive
  []
  [:div 
   "Hello world"])

(defn refresh [] (rum/mount (app) root-element))

(defn ^:export init []
  (refresh))

