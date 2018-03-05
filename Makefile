
.PHONY: build
build:
	java -cp cljs.jar:src clojure.main build.clj


.PHONY: watch
watch:
	java -cp cljs.jar:src clojure.main watch.clj


.PHONY: repl
repl:
	rlwrap java -cp cljs.jar:src clojure.main repl.clj


.PHONY: release
release:
	java -cp cljs.jar:src clojure.main release.clj


.PHONY: node
node:
	npm install source-map-support
	java -cp cljs.jar:src clojure.main node.clj


.PHONY: node-repl
node-repl:
	npm install source-map-support
	rlwrap java -cp cljs.jar:src clojure.main node_repl.clj
