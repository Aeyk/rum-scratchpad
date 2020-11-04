(ns rum-workshop.server
  (:require [org.httpkit.server :as http]
            
            [taoensso.sente :as sente]            
            [taoensso.sente.server-adapters.http-kit 
             :refer (get-sch-adapter)]
            [clojure.core.async :as async  
             :refer (<! <!! >! >!! put! chan go go-loop)]))

(defn baby-small-app [req] 
  {:status  200
   :headers {"Content-Type" "text/html"}
   :body    "Pew pew!"})  

(server/run-server #'baby-small-app {:port 8888})
