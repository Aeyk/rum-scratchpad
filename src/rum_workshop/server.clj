(ns rum-workshop.server
  (:require [org.httpkit.server :as http]            
            [taoensso.sente :as sente]            
            [taoensso.sente.server-adapters.http-kit 
             :refer (get-sch-adapter)]
            [clojure.core.async :as async  
             :refer (<! <!! >! >!! put! chan go go-loop)]
            [ring.middleware.cors :refer [wrap-cors]]))

(defn baby-small-app [req] 
  {:status  200
   :headers {"Content-Type" "text/html"}
   :body    (slurp "public/index.html")})  

(http/run-server (wrap-cors #'baby-small-app)
  :access-control-allow-origin [#"https://api.etebase.com"]
  :access-control-allow-methods [:get :put :post :delete]
                       {:port 8888})
