;; * NS declaration
(ns rum-workshop.parallax
  (:require [keybind.core :as key]
            [quil.core :as quil
             :include-macros true]))

;; * JavaScript Canvas API
(def canvas (js/document.getElementById "canvas"))
(def context (.getContext canvas "2d"))

;; * User Data
(def user-position (atom {:x 10 :y 10}))
(defn move-user [{:keys [xvel yvel]}]
  (swap!
   user-position
   (fn [x y]
     [(+ x xvel
         (+ y yvel))])))
;; * Keybindings
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

;; * Initalize
(defn ^:export init []
  (init-keybindings)  
  #_(set! context.fillStyle "green"))

(defn draw [])
(quil/defsketch parallax-sketch
  :host "canvas"
  :draw draw
  :renderer :p2d
  :size [300 300])
