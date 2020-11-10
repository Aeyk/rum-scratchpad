(ns rum-workshop.scratch
  (:require [rum.core :as rum]))

(enable-console-print!)

(def enter-key-code 13)

(def my-name (atom ""))

(def db (atom {:input-text ""
               :todo-list []}))

(def input-text (rum/cursor-in db [:input-text]))

(def todo-list (rum/cursor-in db [:todo-list]))

(def root-element (.getElementById js/document "app"))

(rum/defc input-text-area < rum/reactive 
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
         (do       
           (swap! todo-list conj @input-text)
           (reset! input-text ""))))}]
   [:button
   {:on-mouse-down
    (fn [e]
      (.preventDefault e)
      (swap! todo-list conj @input-text)
      (reset! input-text ""))} 
    "Add to list!"
    ]])

(rum/defc todo-list-items < rum/reactive
  []
  [:ul
   (for [todo @todo-list]
     [:li 
      {:key (gensym)
       :on-mouse-down
       (fn [e]
         (js/console.log #_(-> .-color .-style .-target)   
           (set! (-> e .-target .-style .-color) "#ccc")))}      
       todo])])

(rum/defc app < rum/reactive
  []
  [:div 
   (input-text-area)
   (todo-list-items)
   [:p 
    {:value (rum/react input-text)}
    @input-text]])

(rum/mount (app) root-element)
