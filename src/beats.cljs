(ns beats
  (:require
   [rum.core :as rum]
   [quil.core :as q]))

(rum/defc app <
  {:did-mount
   (fn [state]
     (js/console.log (q/mouse-x) (js/document.getElementById "canvas")))}
  []
  [:canvas#canvas {:on-change (fn [e] )}])

(defn start []
  (rum/mount
   (app)
   (js/document.getElementById "app")))

(defn ^:export init []
  (q/sketch :no-start true :host "canvas#canvas")
  (start))

(defn stop []
  (js/console.log "stop"))
