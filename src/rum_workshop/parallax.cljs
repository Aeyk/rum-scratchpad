(ns rum-workshop.parallax)

(def canvas (js/document.getElementById "canvas"))
(def context (js/canvas.getContext "2d"))

(js/context.fillStyle "green")
(js/context.fillRect 10 10 150 150)

