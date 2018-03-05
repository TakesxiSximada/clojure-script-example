goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__64__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__64 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__65__i = 0, G__65__a = new Array(arguments.length -  0);
while (G__65__i < G__65__a.length) {G__65__a[G__65__i] = arguments[G__65__i + 0]; ++G__65__i;}
  args = new cljs.core.IndexedSeq(G__65__a,0);
} 
return G__64__delegate.call(this,args);};
G__64.cljs$lang$maxFixedArity = 0;
G__64.cljs$lang$applyTo = (function (arglist__66){
var args = cljs.core.seq(arglist__66);
return G__64__delegate(args);
});
G__64.cljs$core$IFn$_invoke$arity$variadic = G__64__delegate;
return G__64;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__67__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__67 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__68__i = 0, G__68__a = new Array(arguments.length -  0);
while (G__68__i < G__68__a.length) {G__68__a[G__68__i] = arguments[G__68__i + 0]; ++G__68__i;}
  args = new cljs.core.IndexedSeq(G__68__a,0);
} 
return G__67__delegate.call(this,args);};
G__67.cljs$lang$maxFixedArity = 0;
G__67.cljs$lang$applyTo = (function (arglist__69){
var args = cljs.core.seq(arglist__69);
return G__67__delegate(args);
});
G__67.cljs$core$IFn$_invoke$arity$variadic = G__67__delegate;
return G__67;
})()
;

return null;
});
