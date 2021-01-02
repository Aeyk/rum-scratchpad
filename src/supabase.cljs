(ns supabase
  (:require [rum.core :as rum]
            [reitit.frontend :as rf]
            [reitit.frontend.easy :as rfe]
            [reitit.coercion.spec :as rss]
            ["@supabase/supabase-js" :as supabase]))
(declare refresh)
(def url "https://lftzhklytmxclipatzas.supabase.co")
(def api-key "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYwOTQ2MzEzMCwiZXhwIjoxOTI1MDM5MTMwfQ.E8xL2CntGMqVwqzVYsMaXc50Jt7ztZ-6Cmow4hS1zU8")

(def form-data (atom {:email "" :password ""
                      :password_confirmation "" :notify ""
                      :todo "" :todos []}))
(def email (rum/cursor-in form-data [:email]))
(def password (rum/cursor-in form-data [:password]))
(def password_confirmation (rum/cursor-in form-data [:password_confirmation]))
(def notify (rum/cursor-in form-data [:notify]))
(def todo (rum/cursor-in form-data [:todo]))
(def todos (rum/cursor-in form-data [:todos]))

(defn input
  ([name atom]
   (input name atom ""))
  ([name atom id]
   [:.field>.control
    [:label.label name]
    [:input.input {:type :text
                   :id id
                   :value (rum/react atom)
                   :on-change (fn [e] (reset! atom (.. e -target -value)))}]])
  ([name atom id type]
   [:.field>.control
    [:label.label name]
    [:input.input {:type type
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
   (input "Password" password  :password  :password)
   (input "Password Confirmation" password_confirmation :password :password)
   [:button.button.is-primary.is-fullwidth#signup
    "Sign Up"]
   [:button.button.is-fullwidth "Cancel"]])

(rum/defc account-links < []
  [:div
   [:a  "Login"]
   [:a "Create Account"]])

(rum/defc login-form < rum/reactive
  []
  [:div
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
    (input "Password" password password :password)
    [:button.button.is-primary.is-fullwidth#signup
     "Sign Up"]
    [:button.button.is-fullwidth "Cancel"]]])



(rum/defc todos-form < rum/reactive
  []
  [:div
   [:form
    {:on-submit
     (fn [e]
       (.preventDefault e)

       (let [res
             (.select
              (.from client "todos")
              "user_id")]
         (reset! todos res.data))

       (let [res
             (.insert
              (.from client "todos")
              {:task @todo})]
         (js/console.log (clj->js res.body.arr)))
       #_(swap! todos conj @todo)
       (reset!
        todo "")

       )}
    [:label.label "Todo Item"]
    [:input.input {:type :text
                   :value
                   (rum/react todo)
                   :on-change
                   (fn [e] (reset! todo (.. e -target -value)))}]
    [:div
     #_(for [todo @todos]
         [:p todo])]
    [:button.button.is-primary.is-fullwidth#add-todo
     "Add"]
    [:button.button.is-fullwidth "Cancel"]]])

(def routes
  {"#login" (login-form)
   "#signup" (signup-form)
   "#todo/new" (todos-form)
   "default" (login-form) })

(defn handleroutes [routes event]
  (let [loc (.-location.hash js/window)
        newpage (get routes loc (get routes "default"))]
    (.history.replaceState js/window {} nil loc)
    (js/console.log loc newpage)
    (rum/mount [newpage] (js/document.getElementById "app"))))

(defn setup-router [routes]
  (.addEventListener js/window "hashchange" #(handleroutes routes %))
  (handleroutes routes nil))

(defn ^:export init []
  (setup-router routes))

(defn stop []
  (js/console.log "stop"))
