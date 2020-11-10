(ns rum-workshop.scratch
  (:require [rum.core :as rum]))

(enable-console-print!)

(def root-element (.getElementById js/document "app"))

(rum/defc app < rum/reactive
  []
  [:div "Hello World"])

(rum/mount (app) root-element)
