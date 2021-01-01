(ns rfe-bug
  (:require [rum.core :as rum]
            [reitit.frontend :as rf]
            [reitit.frontend.easy :as rfe]
            [reitit.coercion.spec :as rss]
            ["@supabase/supabase-js" :as supabase]))



(def routes
  [["/" {:name ::login :view login-form}]
   ["/signup"
    {:name ::signup
     :view
     signup-form}]])

(def router
  (rf/router routes {:data {:coercion rss/coercion}}))

(defonce route-match (atom nil))

(defn on-navigate
  [m history]
  (reset! route-match m))

(defn init-routes! []
  (rfe/start!
   router
   on-navigate
   {:use-fragment true}))

(rum/defc app []
  [:div
   (account-links)
   (if @route-match
     (let [view (:view (:data @route-match))]
       (view @route-match)))])

(defn start []
  (rum/mount
   [(app)]
   (js/document.getElementById "app")))
(init-routes!)

(defn ^:export init []
  (start))

(defn stop []
  (js/console.log "stop"))
g
