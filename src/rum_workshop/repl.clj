(ns rum-workshop.repl
  (:require [shadow.cljs.devtools.api]
            [shadow.cljs.devtools.server]))

(defn watch-app! []
  (shadow.cljs.devtools.server/start!)
  (shadow.cljs.devtools.api/watch :app)
  (shadow.cljs.devtools.api/nrepl-select :app))
