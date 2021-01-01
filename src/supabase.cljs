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

(defn flash
  ([e]
   (reset! notify e))
  ([e timeout]
   (js/setTimeout #(flash "") timeout)
   (reset! notify e)))


(defonce client (supabase/createClient url  api-key))
(rum/defc signup-form < rum/reactive
  []
  [:form
   {:on-submit
    (fn [e]
      (.preventDefault e)
      (set-button-to-spinner "#signup")
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
           (js/console.log
            res)
           (if res.error 
             (error res.error)
             (do
               (if (and res.data res.data.email)
                 (flash (str "Logged in as: " res.data.email) 10000))
               ))))
        ))}
   (input "Email" email)
   (input "Password" password)
   (input "Password Confirmation" password_confirmation)
   [:button.button.is-primary.is-fullwidth#signup
    "Sign Up"]
   [:button.button.is-fullwidth "Cancel"]])

(rum/defc login-form < rum/reactive
  []
  [:form
   {:on-submit
    (fn [e]
      (.preventDefault e)
      #_(set-button-to-spinner "#signup")

      (.then
       (.signIn client.auth
                #js
                {:email @email
                 :password @password})
       (fn [res]
         (js/console.log
          res)
         (if res.error 
           (error res.error)
           (do
             (if (and res.data.user res.data.user.email)
               (flash (str "Logged in as: " res.data.user.email) 10000))))))
        )}
   (input "Email" email)
   (input "Password" password)
   [:button.button.is-primary.is-fullwidth#signup
    "Sign Up"]
   [:button.button.is-fullwidth "Cancel"]])





(rum/defc app <
  rum/reactive
  []
  [:div.card
   [:p.notify
    {:on-change passwords-dont-match}
    (str (rum/react notify))]
   (login-form)])

(defn start []
  (rum/mount
   (app)
   (js/document.getElementById "app")))

(defn ^:export init []
  (start))

(defn stop []
  (js/console.log "stop"))
