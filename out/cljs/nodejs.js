// Compiled by ClojureScript 1.9.473 {:target :nodejs}
goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__50__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__50 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__51__i = 0, G__51__a = new Array(arguments.length -  0);
while (G__51__i < G__51__a.length) {G__51__a[G__51__i] = arguments[G__51__i + 0]; ++G__51__i;}
  args = new cljs.core.IndexedSeq(G__51__a,0);
} 
return G__50__delegate.call(this,args);};
G__50.cljs$lang$maxFixedArity = 0;
G__50.cljs$lang$applyTo = (function (arglist__52){
var args = cljs.core.seq(arglist__52);
return G__50__delegate(args);
});
G__50.cljs$core$IFn$_invoke$arity$variadic = G__50__delegate;
return G__50;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__53__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__53 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__54__i = 0, G__54__a = new Array(arguments.length -  0);
while (G__54__i < G__54__a.length) {G__54__a[G__54__i] = arguments[G__54__i + 0]; ++G__54__i;}
  args = new cljs.core.IndexedSeq(G__54__a,0);
} 
return G__53__delegate.call(this,args);};
G__53.cljs$lang$maxFixedArity = 0;
G__53.cljs$lang$applyTo = (function (arglist__55){
var args = cljs.core.seq(arglist__55);
return G__53__delegate(args);
});
G__53.cljs$core$IFn$_invoke$arity$variadic = G__53__delegate;
return G__53;
})()
;

return null;
});

//# sourceMappingURL=nodejs.js.map