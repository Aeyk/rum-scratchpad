(ns rum-workshop.scratch
  (:require [rum.core :as rum]))

(enable-console-print!)

(def enter-key-code 13)

(def my-name (atom ""))

(def db (atom {:input-text ""}))

(def input-text (rum/cursor-in db [:input-text]))

(def root-element (.getElementById js/document "app"))

(rum/defc app < rum/reactive
  []
  [:div 
   [:input 
    {:value (rum/react input-text)
     :on-change (fn [e] (reset! input-text (.. e -target -value)))
     :on-key-down 
     (fn [e] 
       (js/console.log (.-keyCode e) @input-text)
       (when (and (= (.-keyCode e) enter-key-code)
               (seq @input-text))        
         (reset! input-text "")))}]
   [:p (str "Hello, "@input-text)]])

(rum/mount (app) root-element)
