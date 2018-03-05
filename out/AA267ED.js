goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__2838__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__2838 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__2839__i = 0, G__2839__a = new Array(arguments.length -  0);
while (G__2839__i < G__2839__a.length) {G__2839__a[G__2839__i] = arguments[G__2839__i + 0]; ++G__2839__i;}
  args = new cljs.core.IndexedSeq(G__2839__a,0);
} 
return G__2838__delegate.call(this,args);};
G__2838.cljs$lang$maxFixedArity = 0;
G__2838.cljs$lang$applyTo = (function (arglist__2840){
var args = cljs.core.seq(arglist__2840);
return G__2838__delegate(args);
});
G__2838.cljs$core$IFn$_invoke$arity$variadic = G__2838__delegate;
return G__2838;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__2841__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__2841 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__2842__i = 0, G__2842__a = new Array(arguments.length -  0);
while (G__2842__i < G__2842__a.length) {G__2842__a[G__2842__i] = arguments[G__2842__i + 0]; ++G__2842__i;}
  args = new cljs.core.IndexedSeq(G__2842__a,0);
} 
return G__2841__delegate.call(this,args);};
G__2841.cljs$lang$maxFixedArity = 0;
G__2841.cljs$lang$applyTo = (function (arglist__2843){
var args = cljs.core.seq(arglist__2843);
return G__2841__delegate(args);
});
G__2841.cljs$core$IFn$_invoke$arity$variadic = G__2841__delegate;
return G__2841;
})()
;

return null;
});
