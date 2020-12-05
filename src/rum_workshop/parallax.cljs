(ns rum-workshop.parallax)

(def canvas (js/document.getElementById "canvas"))
(def context (.getContext canvas "2d"))


(defn ^:export init []
  (set! context.fillStyle "green")
  (.fillRect context 10 10 150 150))

