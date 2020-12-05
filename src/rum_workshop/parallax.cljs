(ns rum-workshop.parallax
  (:require [keybind.core :as key]))

(def canvas (js/document.getElementById "canvas"))
(def context (.getContext canvas "2d"))

(defn init-keybindings []
  (letfn [(left []
            (js/console.log "LEFT"))
          (right []
            (js/console.log "RIGHT"))
          (up []
            (js/console.log "UP"))
          (down []
            (js/console.log "DOWN"))
          (space []
            (js/console.log"SPACE"))]
    (key/bind! "space" ::space space)
    (key/bind! "left"  ::left  left)
    (key/bind! "right" ::right right)
    (key/bind! "up"    ::up    up)
    (key/bind! "down"  ::down  down)))

(defn ^:export init []
  (init-keybindings)
  (set! context.fillStyle "green")
  (.fillRect context 10 10 150 150))

