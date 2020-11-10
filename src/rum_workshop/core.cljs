(ns rum-workshop.core
  (:require [rum.core :as rum]
            [taoensso.sente  :as sente :refer (cb-success?)]))

(def handlers {:on-message (fn [e] (prn (.-data e)))
               :on-open    #(prn "Opening a new connection")
               :on-close   #(prn "Closing a connection")})

(def socket-uri "ws://localhost:8888/ws")

(def ?csrf-token
  (when-let [el (.getElementById js/document "sente-csrf-token")]
    (.getAttribute el "data-csrf-token")))

(let [{:keys [chsk ch-recv send-fn state]}
      (sente/make-channel-socket-client!
       "/ws" ; Note the same path as before
       ?csrf-token
       {:type :auto ; e/o #{:auto :ajax :ws}
       })]

  (def chsk       chsk)
  (def ch-chsk    ch-recv) ; ChannelSocket's receive channel
  (def chsk-send! send-fn) ; ChannelSocket's send API fn
  (def chsk-state state)   ; Watchable, read-only atom
  )
(enable-console-print!)

(defonce app-state (atom {:text "Hello world!"}))

(rum/defc hello [text]
  [:pre.app 
   (str "<em>"text"</em>")])

(rum/defc numbered-list [n]
  (for [x (range 1 (inc n))]
    [:div (str x)]))

(def comments (atom []))

(defn add-comment 
  [comment]
  (swap! comments conj comment))

(rum/defc comment-list []
  (for [comment @comments]
    [:li comment]))

(rum/defc button []
  [:button 
   {:on-click 
    (fn [e] 
      (add-comment "hello")
      (js/console.log comments))}
   "click me"])

(rum/defcs stateful-component < 
  {:will-mount
   (fn [state]
     (assoc state ::handle @comments))
   :render (fn [state] (pr-str state))
   :did-mount (fn [state] 
                (pr-str state))  
   :should-update (fn [state])
   :will-unmount (fn [state])
   }
  [state _ _] 
  [:div.app (pr-str state)
   (comment-list)
   (button)
   ])

(rum/defcs unmount-stateful-component < 
  {:will-mount
   (fn [state]
     (let [h (js/setTimeout #(js/console.log "x") 10000)]       
       (assoc state ::handle h)))   
   :will-unmount (fn [state]
                   (let [h (::handle state)]
                     (js/clearTimeout h)))
   :render (fn [state] (pr-str state))
   :did-mount (fn [state] (pr-str state))  
   :should-update (fn [state])   }
  [state _ _] 
  [:div.app (pr-str state)
   (comment-list)
   (button)
   ])

(rum/defcs websocket-connected-component < 
  {:did-mount (fn [state])
   
   }
  []
  [:div ""])

(defn start []
  (rum/mount 
    [(hello "Hello")
     (stateful-component 10)
     (numbered-list 10)
     (unmount-stateful-component)]
    (js/document.getElementById "app")))

(defn ^:export init []
  (start))

(defn stop []
  (js/console.log "stop"))

