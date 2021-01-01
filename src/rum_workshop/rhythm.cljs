(ns rum-workshop.rhythm
  (:require [rum.core :as rum]
            ["tone" :as tone]
            ["beet.js" :as beet]))


(defn init-audio
  []
  )

(defn rhythm []
  [:h2 "Hello"])

(rum/defc app <
  {:did-mount
   (fn [state]
     (let [context (js/AudioContext.)
           my-beet
           (beet. #js
                  {:context
                   context
                   :tempo 120})
           pattern (my-beet.pattern 4 4) ;; 4/4 on the floor
           layer
           (my-beet.layer
            pattern
            (fn [time]
              (let [osc (context.createOscillator())]
                (osc.connect context.destination)
                (osc.start time)
                (osc.stop (+ 0.1 time) ))))])
     (js/console.log state))}
  []
  (rhythm)
  [:div "Hello"])
b
(defn start []
  (rum/mount
   (app)
   (js/document.getElementById "app")))

(defn ^:export init []
  (start))

(defn stop []
  (js/console.log "stop"))
