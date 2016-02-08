// Compiled by ClojureScript 0.0-2311
goog.provide('holdem_dealer.log');
goog.require('cljs.core');
goog.require('cljs.nodejs');
goog.require('cljs.nodejs');
holdem_dealer.log.util = cljs.nodejs.require.call(null,"util");
holdem_dealer.log.moment = cljs.nodejs.require.call(null,"moment");
holdem_dealer.log.date = (function date(){var d = (new Date());return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(holdem_dealer.log.moment.call(null,d).format("YYYY-MM-DD HH:mm:ss.SSS")));
});
/**
* @param {...*} var_args
*/
holdem_dealer.log.format = (function() { 
var format__delegate = function (args){var date_str = holdem_dealer.log.date.call(null);var formatted = cljs.core.apply.call(null,(holdem_dealer.log.util["format"]),args);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(date_str)+" - "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(formatted));
};
var format = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return format__delegate.call(this,args);};
format.cljs$lang$maxFixedArity = 0;
format.cljs$lang$applyTo = (function (arglist__6927){
var args = cljs.core.seq(arglist__6927);
return format__delegate(args);
});
format.cljs$core$IFn$_invoke$arity$variadic = format__delegate;
return format;
})()
;
/**
* @param {...*} var_args
*/
holdem_dealer.log.log = (function() { 
var log__delegate = function (args){var string = cljs.core.apply.call(null,(holdem_dealer.log.util["format"]),args);return console.log(holdem_dealer.log.format.call(null,string));
};
var log = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log__delegate.call(this,args);};
log.cljs$lang$maxFixedArity = 0;
log.cljs$lang$applyTo = (function (arglist__6928){
var args = cljs.core.seq(arglist__6928);
return log__delegate(args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
/**
* @param {...*} var_args
*/
holdem_dealer.log.info = (function() { 
var info__delegate = function (args){return cljs.core.apply.call(null,holdem_dealer.log.log,args);
};
var info = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return info__delegate.call(this,args);};
info.cljs$lang$maxFixedArity = 0;
info.cljs$lang$applyTo = (function (arglist__6929){
var args = cljs.core.seq(arglist__6929);
return info__delegate(args);
});
info.cljs$core$IFn$_invoke$arity$variadic = info__delegate;
return info;
})()
;
/**
* @param {...*} var_args
*/
holdem_dealer.log.error = (function() { 
var error__delegate = function (args){var string = cljs.core.apply.call(null,(holdem_dealer.log.util["format"]),args);return console.error(holdem_dealer.log.format.call(null,string));
};
var error = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return error__delegate.call(this,args);};
error.cljs$lang$maxFixedArity = 0;
error.cljs$lang$applyTo = (function (arglist__6930){
var args = cljs.core.seq(arglist__6930);
return error__delegate(args);
});
error.cljs$core$IFn$_invoke$arity$variadic = error__delegate;
return error;
})()
;
/**
* @param {...*} var_args
*/
holdem_dealer.log.info = (function() { 
var info__delegate = function (args){return cljs.core.apply.call(null,holdem_dealer.log.log,args);
};
var info = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return info__delegate.call(this,args);};
info.cljs$lang$maxFixedArity = 0;
info.cljs$lang$applyTo = (function (arglist__6931){
var args = cljs.core.seq(arglist__6931);
return info__delegate(args);
});
info.cljs$core$IFn$_invoke$arity$variadic = info__delegate;
return info;
})()
;
