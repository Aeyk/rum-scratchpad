(ns rfe-bug
  (:require [rum.core :as rum]
            [reitit.frontend :as rf]
            [reitit.frontend.easy :as rfe]
            [reitit.coercion.spec :as rss]))

(rum/defc a-form []
  [:div "A"])

(rum/defc b-form []
  [:div "B"])

(def routes
  [["/a" {:name ::a :view a-form}]
   ["/b"
    {:name ::b
     :view
     b-form}]])

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
   [:a {:href (rfe/href ::a)
        :on-click #(rfe/push-state ::a)} "A"]
   [:a {:href (rfe/href ::b)
        :on-click #(rfe/push-state ::b)} "B"]
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
