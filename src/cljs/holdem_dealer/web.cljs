(ns holdem-dealer.web
  (:require [cljs.nodejs :as node]
            [holdem-dealer.log :as log :refer [info error]]
            [quile.component :as component]))

(def express (node/require "express"))

(defrecord WebComponent [config fpga queue]
  component/Lifecycle

  (start [this]
    (info ";; Starting WebComponent")
    (let [port (-> config :-config :web :port)
          app (express)]
      (doto app
        (.get "/" (fn [req res]
                    (.send res "Hello World")))
        (.listen port))
      (assoc this :app app)))

  (stop [this]
    (info ";; Stopping WebComponent")
    (dissoc this :app)))

(defn new-web []
  (map->WebComponent {}))
