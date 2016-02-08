// Compiled by ClojureScript 0.0-2311
goog.provide('foo');
goog.require('cljs.core');
goog.require('cemerick.cljs.test');
goog.require('cemerick.cljs.test');
foo.foo_bar_test = (function foo_bar_test(){return cemerick.cljs.test.test_function.call(null,cemerick.cljs.test.init_test_environment.call(null),foo.foo_bar_test);
});
foo.foo_bar_test = cljs.core.with_meta.call(null,foo.foo_bar_test,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),23,new cljs.core.Keyword(null,"end-line","end-line",1837326455),5,new cljs.core.Keyword(null,"column","column",2078222095),10,new cljs.core.Keyword(null,"line","line",212345235),5,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/dillon/code/holdem-dealer/test/foo.cljs"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.with_meta.call(null,new cljs.core.Symbol("foo","foo-bar-test","foo/foo-bar-test",1395553195,null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),23,new cljs.core.Keyword(null,"end-line","end-line",1837326455),5,new cljs.core.Keyword(null,"column","column",2078222095),10,new cljs.core.Keyword(null,"line","line",212345235),5,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/dillon/code/holdem-dealer/test/foo.cljs"], null)),new cljs.core.Keyword(null,"test","test",577538877),(function foo_bar_test_test(test_ctx__7045__auto__){var _test_ctx = test_ctx__7045__auto__;var async_QMARK___6960__auto__ = new cljs.core.Keyword(null,"async","async",1050769601).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,new cljs.core.Keyword(null,"test-name","test-name",-675595913).cljs$core$IFn$_invoke$arity$1(_test_ctx)));var _STAR_test_ctx_STAR_7217 = cemerick.cljs.test._STAR_test_ctx_STAR_;try{cemerick.cljs.test._STAR_test_ctx_STAR_ = (cljs.core.truth_(async_QMARK___6960__auto__)?null:_test_ctx);
try{var _test_ctx__$1 = _test_ctx;var async_QMARK___6960__auto____$1 = new cljs.core.Keyword(null,"async","async",1050769601).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,new cljs.core.Keyword(null,"test-name","test-name",-675595913).cljs$core$IFn$_invoke$arity$1(_test_ctx__$1)));var _STAR_test_ctx_STAR_7219 = cemerick.cljs.test._STAR_test_ctx_STAR_;try{cemerick.cljs.test._STAR_test_ctx_STAR_ = (cljs.core.truth_(async_QMARK___6960__auto____$1)?null:_test_ctx__$1);
try{try{var values__6980__auto__ = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,false),true);var result__6981__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__6980__auto__);if((result__6981__auto__ instanceof cemerick.cljs.test.TestContext))
{throw (new Error("TestContext provided as [form] in `is` assertion. If using `is` with an explicit test context, use the 3-arg arity."));
} else
{}
if(cljs.core.truth_(result__6981__auto__))
{cemerick.cljs.test.do_report.call(null,_test_ctx__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),true,false),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__6980__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else
{cemerick.cljs.test.do_report.call(null,_test_ctx__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),true,false),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__6980__auto__)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
return result__6981__auto__;
}catch (e7221){if((e7221 instanceof Error))
{var t__7017__auto__ = e7221;return cemerick.cljs.test.do_report.call(null,_test_ctx__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),true,false),new cljs.core.Keyword(null,"actual","actual",107306363),t__7017__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else
{throw e7221;

}
}}catch (e7220){if((e7220 instanceof Error))
{var e__6961__auto__ = e7220;if(cljs.core.truth_(async_QMARK___6960__auto____$1))
{return cemerick.cljs.test.done_STAR_.call(null,_test_ctx__$1,e__6961__auto__);
} else
{throw e__6961__auto__;
}
} else
{throw e7220;

}
}}finally {cemerick.cljs.test._STAR_test_ctx_STAR_ = _STAR_test_ctx_STAR_7219;
}}catch (e7218){if((e7218 instanceof Error))
{var e__6961__auto__ = e7218;if(cljs.core.truth_(async_QMARK___6960__auto__))
{return cemerick.cljs.test.done_STAR_.call(null,_test_ctx,e__6961__auto__);
} else
{throw e__6961__auto__;
}
} else
{throw e7218;

}
}}finally {cemerick.cljs.test._STAR_test_ctx_STAR_ = _STAR_test_ctx_STAR_7217;
}})], null)));
cemerick.cljs.test.register_test_BANG_.call(null,new cljs.core.Symbol(null,"foo","foo",-1385541733,null),new cljs.core.Symbol("foo","foo-bar-test","foo/foo-bar-test",1395553195,null),foo.foo_bar_test);
cljs.core._STAR_main_cli_fn_STAR_ = (function (){return cljs.core.List.EMPTY;
});
