(ns rum-workshop.map
  (:require [rum.core :as rum] 
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
     #_(js/console.log react-leaflet/MapContainer)
     (.addTo
      (esri-leaflet/basemapLayer "Gray")
      (.setView
       (leaflet/map "mapid" {:preferCanvas true})
       #js [51.505, -0.09], 13)) )}
  []
  [:div#mapid
   ]
   )

(defn refresh []
  (rum/mount (app) root-element))

(defn ^:export init []
  (refresh))

