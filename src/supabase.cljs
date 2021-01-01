(ns supabase
  (:require [rum.core :as rum]
            ["@supabase/supabase-js" :as supabase]))

(def url "https://lftzhklytmxclipatzas.supabase.co")
(def api-key "***REMOVED***")
 
(def form-data (atom {:email "" :password "" :password_confirmation ""}))
(def email (rum/cursor-in form-data [:email]))
(def password (rum/cursor-in form-data [:password]))
(def password_confirmation (rum/cursor-in form-data [:password_confirmation]))

(defn input
  ([name atom]
   (input name atom ""))
  ([name atom id]
   [:.field>.control
    [:label.label name]
    [:input.input {:type :text
                   :id id
                   :value (rum/react atom)
                   :on-change (fn [e] (reset! atom (.. e -target -value)))}]]))

(defn set-button-to-spinner [el]
  (.add (.-classList (js/document.querySelector el)) "is-loading"))

(rum/defc app <
  rum/reactive
  []
  {:will-mount
   (fn [e]
     (defonce client (supabase/createClient url  api-key))
     )}
  []
  [:div.card
   [:form
    {:on-submit
     (fn [e]
       (.preventDefault e)
       (set-button-to-spinner "#signup")
       (js/console.log
        (map #(clj->js %) [email password password_confirmation])))}
    (input "Email" email)
    (input "Password" password)
    (input "Password Confirmation" password_confirmation)
    [:button.button.is-primary.is-fullwidth#signup
     "Sign Up"]
    [:button.button.is-fullwidth "Cancel"]]])

(defn start []
  (rum/mount
   (app)
   (js/document.getElementById "app")))

(defn ^:export init []
  (start))

(defn stop []
  (js/console.log "stop"))
