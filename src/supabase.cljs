(ns supabase
  (:require [rum.core :as rum]
            ["@supabase/supabase-js" :as supabase]))

(def url "https://lftzhklytmxclipatzas.supabase.co")


(rum/defc app <
  {}
  []
  [:div "Hello"])

(defn start []
  (rum/mount
   (app)
   (js/document.getElementById "app")))

(defn ^:export init []
  (start))

(defn stop []
  (js/console.log "stop"))
