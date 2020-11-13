(ns rum-workshop.template
  (:require [rum.core :as rum]))

(enable-console-print!)

(def root-element (.getElementById js/document "app"))

(rum/defc app < rum/reactive
  []
  [:div 
   "Hello world"])

(defn refresh [] (rum/mount (app) root-element))

(defn ^:export init []
  (refresh))
