;; Browser REPL
;; (ns hello-world.core
;;   (:require [clojure.browser.repl :as repl]))
;;
;; (defonce conn
;;   (repl/connect "http://localhost:9000/repl"))
;;
;; (enable-console-print!)
;;
;; (println "Hello world!")


;; Node REPL
;; (ns hello-world.core
;;   (:require [cljs.nodejs :as nodejs]))

;; (nodejs/enable-util-print!)

;; (defn -main [& args]
;;   (println "Hello world!"))

;; (set! *main-cli-fn* -main)



(ns hello-world.core)

(enable-console-print!)

(defn say-hello []
  (js/alert "Hello!!"))
