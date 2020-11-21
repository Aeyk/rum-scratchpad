(ns rum-workshop.map
  (:require [rum.core :as rum]
            [keybind.core :as key]
            ;; https://shadow-cljs.github.io/docs/UsersGuide.html#_conditional_reading
            ;; shadow-cljs example for import libraries
            ["react-leaflet" :as react-leaflet]
            ["leaflet" :as leaflet]
            ["esri-leaflet" :as esri-leaflet]))
;; https://gist.github.com/orolle/21902cc4a58f2a97c7ab27c2fb7b2503

(enable-console-print!)

(def root-element (.getElementById js/document "app"))
(def position (atom [51.505, -0.09]))
(rum/defc app < rum/reactive
  {:did-mount
   (fn [state]
     #_(js/console.log rain-leaflet)
     (.addTo
      (esri-leaflet/basemapLayer "Gray")
      (.setView
       (leaflet/map
        "mapid"
        #js
        {:preferCanvas true
         :keyboard false})
       #js [51.505, -0.09], 13)) )}
  []
  [:div#mapid
   ]
   )
(def location (atom []))
(defn init-keybindings []
  (letfn [(left [] (js/console.log "LEFT"))
          (right [] (js/console.log "RIGHT"))
          (up [] (js/console.log "UP"))
          (down [] (js/console.log "DOWN"))
          (space []
            (js/console.log
             (js/navigator.geolocation.getCurrentPosition
              #(reset! location (.-coords %))
              js/console.log))
            (if-not js/navigator.geolocation
              (js/navigator.geolocation.getCurrentPosition
               #(reset! location %)
               js/console.log))
            (js/console.log @location))]
    (key/bind! "space" ::left
               space)

    (key/bind! "left" ::left
     left)
    (key/bind!
     "right"
     ::right
     right)
    (key/bind!
     "up"
     ::up
     up)
    (key/bind!
     "down"
     ::down
     down)))

(defn refresh []
  (init-keybindings)
  (rum/mount (app) root-element))

(defn ^:export init []
  (refresh))

