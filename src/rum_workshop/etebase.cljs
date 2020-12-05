(ns rum-workshop.etebase
  (:require [rum.core :as rum]
            ["etebase" :as etebase]))

(enable-console-print!)

(def etebase-url "https://api.etebase.com/developer/mksybr/")

(defn init-etebase-account []
  (js/console.log 
    (.then
      (etebase/Account.login "mksybr" "FzqNFBzg5uoEt3cKgHT64A" etebase-url)
      (fn [e] (js/console.log e)))))  

(def root-element (.getElementById js/document "app"))

(rum/defc app < rum/reactive
  []
  [:div 
   "Hello world"])

(defn refresh [] 
  (init-etebase-account)
  (rum/mount (app) root-element))

(defn ^:export init []
  (refresh))
