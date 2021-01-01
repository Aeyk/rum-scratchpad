(ns supabase
  (:require [rum.core :as rum]
            ["@supabase/supabase-js" :as supabase]))

(def url "https://lftzhklytmxclipatzas.supabase.co")
(def api-key "***REMOVED***")
 
(def form-data (atom {:email "" :password ""
                      :password_confirmation "" :notify ""}))
(def email (rum/cursor-in form-data [:email]))
(def password (rum/cursor-in form-data [:password]))
(def password_confirmation (rum/cursor-in form-data [:password_confirmation]))
(def notify (rum/cursor-in form-data [:notify]))

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

(defn passwords-dont-match []
  (reset! notify "Sorry the passwords don't match"))

(defn error [e]
  (js/setTimeout #(error "") 3000)
  (reset! notify e))

(defonce client (supabase/createClient url  api-key))

(rum/defc app <
  rum/reactive
  []
  [:div.card
   [:p.notify
    {:on-change passwords-dont-match}
    (str (rum/react notify))]
   [:form
    {:on-submit
     (fn [e]
       (.preventDefault e)
       #_(set-button-to-spinner "#signup")
       (js/console.log
        (clj->js [@email @password @password_confirmation]))
       (if-not (== @password @password_confirmation)
         (passwords-dont-match)
         (.then
          (.signUp client.auth
                   #js
                   {:email @email
                    :password @password})
          (fn [res]
            (error res.error)
            (js/console.log
             res.error)))
         ))}
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
