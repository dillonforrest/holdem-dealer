// Compiled by ClojureScript 0.0-2311
goog.provide('quile.component');
goog.require('cljs.core');
goog.require('quile.dependency');
goog.require('quile.dependency');
quile.component.Lifecycle = (function (){var obj6286 = {};return obj6286;
})();
quile.component.start = (function start(component){if((function (){var and__3549__auto__ = component;if(and__3549__auto__)
{return component.quile$component$Lifecycle$start$arity$1;
} else
{return and__3549__auto__;
}
})())
{return component.quile$component$Lifecycle$start$arity$1(component);
} else
{var x__4188__auto__ = (((component == null))?null:component);return (function (){var or__3561__auto__ = (quile.component.start[goog.typeOf(x__4188__auto__)]);if(or__3561__auto__)
{return or__3561__auto__;
} else
{var or__3561__auto____$1 = (quile.component.start["_"]);if(or__3561__auto____$1)
{return or__3561__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Lifecycle.start",component);
}
}
})().call(null,component);
}
});
quile.component.stop = (function stop(component){if((function (){var and__3549__auto__ = component;if(and__3549__auto__)
{return component.quile$component$Lifecycle$stop$arity$1;
} else
{return and__3549__auto__;
}
})())
{return component.quile$component$Lifecycle$stop$arity$1(component);
} else
{var x__4188__auto__ = (((component == null))?null:component);return (function (){var or__3561__auto__ = (quile.component.stop[goog.typeOf(x__4188__auto__)]);if(or__3561__auto__)
{return or__3561__auto__;
} else
{var or__3561__auto____$1 = (quile.component.stop["_"]);if(or__3561__auto____$1)
{return or__3561__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Lifecycle.stop",component);
}
}
})().call(null,component);
}
});
(quile.component.Lifecycle["object"] = true);
(quile.component.start["object"] = (function (this$){return this$;
}));
(quile.component.stop["object"] = (function (this$){return this$;
}));
/**
* Returns the map of other components on which this component depends.
*/
quile.component.dependencies = (function dependencies(component){return new cljs.core.Keyword("quile.component","dependencies","quile.component/dependencies",-1993399470).cljs$core$IFn$_invoke$arity$2(cljs.core.meta.call(null,component),cljs.core.PersistentArrayMap.EMPTY);
});
/**
* Associates metadata with component describing the other components
* on which it depends. Component dependencies are specified as a map.
* Keys in the map correspond to keys in this component which must be
* provided by its containing system. Values in the map are the keys in
* the system at which those components may be found. Alternatively, if
* the keys are the same in both the component and its enclosing
* system, they may be specified as a vector of keys.
*/
quile.component.using = (function using(component,dependencies){return cljs.core.vary_meta.call(null,component,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("quile.component","dependencies","quile.component/dependencies",-1993399470)], null),cljs.core.fnil.call(null,cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY),((cljs.core.map_QMARK_.call(null,dependencies))?dependencies:((cljs.core.vector_QMARK_.call(null,dependencies))?cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (x){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,x], null);
}),dependencies)):(function(){throw cljs.core.ex_info.call(null,"Dependencies must be a map or vector",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reason","reason",-2070751759),new cljs.core.Keyword("quile.component","invalid-dependencies","quile.component/invalid-dependencies",-1680843552),new cljs.core.Keyword(null,"component","component",1555936782),component,new cljs.core.Keyword(null,"dependencies","dependencies",1108064605),dependencies], null))})()
)));
});
/**
* Associates dependency metadata with multiple components in the
* system. dependency-map is a map of keys in the system to maps or
* vectors specifying the dependencies of the component at that key in
* the system, as per 'using'.
*/
quile.component.system_using = (function system_using(system,dependency_map){return cljs.core.reduce_kv.call(null,(function (system__$1,key,dependencies){var component = cljs.core.get.call(null,system__$1,key);if(cljs.core.truth_(component))
{} else
{throw cljs.core.ex_info.call(null,("Missing component "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)+" from system"),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reason","reason",-2070751759),new cljs.core.Keyword("quile.component","missing-component","quile.component/missing-component",-346372691),new cljs.core.Keyword(null,"system-key","system-key",-334147604),key,new cljs.core.Keyword(null,"system","system",-29381724),system__$1], null));
}
return cljs.core.assoc.call(null,system__$1,key,quile.component.using.call(null,component,dependencies));
}),system,dependency_map);
});
/**
* Returns a dependency graph, using the data structures defined in
* quile.dependency, for the components found by
* (select-keys system component-keys)
*/
quile.component.dependency_graph = (function dependency_graph(system,component_keys){return cljs.core.reduce_kv.call(null,(function (graph,key,component){return cljs.core.reduce.call(null,(function (p1__6287_SHARP_,p2__6288_SHARP_){return quile.dependency.depend.call(null,p1__6287_SHARP_,key,p2__6288_SHARP_);
}),graph,cljs.core.vals.call(null,quile.component.dependencies.call(null,component)));
}),quile.dependency.graph.call(null),cljs.core.select_keys.call(null,system,component_keys));
});
quile.component.assoc_dependency = (function assoc_dependency(system,component,dependency_key,system_key){var dependency = cljs.core.get.call(null,system,system_key);if(cljs.core.truth_(dependency))
{} else
{throw cljs.core.ex_info.call(null,("Missing dependency "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dependency_key)+" of "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(component)+" expected in system at "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(system_key)),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"reason","reason",-2070751759),new cljs.core.Keyword("quile.component","missing-dependency","quile.component/missing-dependency",-10352268),new cljs.core.Keyword(null,"system-key","system-key",-334147604),system_key,new cljs.core.Keyword(null,"dependency-key","dependency-key",684780755),dependency_key,new cljs.core.Keyword(null,"component","component",1555936782),component,new cljs.core.Keyword(null,"system","system",-29381724),system], null));
}
return cljs.core.assoc.call(null,component,dependency_key,dependency);
});
quile.component.assoc_dependencies = (function assoc_dependencies(component,system){return cljs.core.reduce_kv.call(null,(function (p1__6289_SHARP_,p2__6290_SHARP_,p3__6291_SHARP_){return quile.component.assoc_dependency.call(null,system,p1__6289_SHARP_,p2__6290_SHARP_,p3__6291_SHARP_);
}),component,quile.component.dependencies.call(null,component));
});
quile.component.try_action = (function try_action(component,system,key,f,args){try{return cljs.core.apply.call(null,f,component,args);
}catch (e6293){if((e6293 instanceof Error))
{var t = e6293;throw cljs.core.ex_info.call(null,("Error in component "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core._PLUS_)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reason","reason",-2070751759),new cljs.core.Keyword("quile.component","component-function-threw-exception","quile.component/component-function-threw-exception",440688658),new cljs.core.Keyword(null,"function","function",-2127255473),f,new cljs.core.Keyword(null,"component","component",1555936782),component,new cljs.core.Keyword(null,"system","system",-29381724),system], null),t);
} else
{throw e6293;

}
}});
quile.component.get_component = (function get_component(system,key){var or__3561__auto__ = cljs.core.get.call(null,system,key);if(cljs.core.truth_(or__3561__auto__))
{return or__3561__auto__;
} else
{throw cljs.core.ex_info.call(null,("Missing component "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)+" from system"),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reason","reason",-2070751759),new cljs.core.Keyword("quile.component","missing-component","quile.component/missing-component",-346372691),new cljs.core.Keyword(null,"system-key","system-key",-334147604),key,new cljs.core.Keyword(null,"system","system",-29381724),system], null));
}
});
/**
* Invokes (apply f component args) on each of the components at
* component-keys in the system, in dependency order. Before invoking
* f, assoc's updated dependencies of the component.
* @param {...*} var_args
*/
quile.component.update_system = (function() { 
var update_system__delegate = function (system,component_keys,f,args){var graph = quile.component.dependency_graph.call(null,system,component_keys);return cljs.core.reduce.call(null,((function (graph){
return (function (system__$1,key){return cljs.core.assoc.call(null,system__$1,key,quile.component.try_action.call(null,quile.component.assoc_dependencies.call(null,quile.component.get_component.call(null,system__$1,key),system__$1),system__$1,key,f,args));
});})(graph))
,system,cljs.core.sort.call(null,quile.dependency.topo_comparator.call(null,graph),component_keys));
};
var update_system = function (system,component_keys,f,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return update_system__delegate.call(this,system,component_keys,f,args);};
update_system.cljs$lang$maxFixedArity = 3;
update_system.cljs$lang$applyTo = (function (arglist__6294){
var system = cljs.core.first(arglist__6294);
arglist__6294 = cljs.core.next(arglist__6294);
var component_keys = cljs.core.first(arglist__6294);
arglist__6294 = cljs.core.next(arglist__6294);
var f = cljs.core.first(arglist__6294);
var args = cljs.core.rest(arglist__6294);
return update_system__delegate(system,component_keys,f,args);
});
update_system.cljs$core$IFn$_invoke$arity$variadic = update_system__delegate;
return update_system;
})()
;
/**
* Like update-system but operates in reverse dependency order.
* @param {...*} var_args
*/
quile.component.update_system_reverse = (function() { 
var update_system_reverse__delegate = function (system,component_keys,f,args){var graph = quile.component.dependency_graph.call(null,system,component_keys);return cljs.core.reduce.call(null,((function (graph){
return (function (system__$1,key){return cljs.core.assoc.call(null,system__$1,key,quile.component.try_action.call(null,quile.component.assoc_dependencies.call(null,quile.component.get_component.call(null,system__$1,key),system__$1),system__$1,key,f,args));
});})(graph))
,system,cljs.core.reverse.call(null,cljs.core.sort.call(null,quile.dependency.topo_comparator.call(null,graph),component_keys)));
};
var update_system_reverse = function (system,component_keys,f,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return update_system_reverse__delegate.call(this,system,component_keys,f,args);};
update_system_reverse.cljs$lang$maxFixedArity = 3;
update_system_reverse.cljs$lang$applyTo = (function (arglist__6295){
var system = cljs.core.first(arglist__6295);
arglist__6295 = cljs.core.next(arglist__6295);
var component_keys = cljs.core.first(arglist__6295);
arglist__6295 = cljs.core.next(arglist__6295);
var f = cljs.core.first(arglist__6295);
var args = cljs.core.rest(arglist__6295);
return update_system_reverse__delegate(system,component_keys,f,args);
});
update_system_reverse.cljs$core$IFn$_invoke$arity$variadic = update_system_reverse__delegate;
return update_system_reverse;
})()
;
/**
* Recursively starts components in the system, in dependency order,
* assoc'ing in their dependencies along the way. component-keys is a
* collection of keys (order doesn't matter) in the system specifying
* the components to start, defaults to all keys in the system.
*/
quile.component.start_system = (function() {
var start_system = null;
var start_system__1 = (function (system){return start_system.call(null,system,cljs.core.keys.call(null,system));
});
var start_system__2 = (function (system,component_keys){return quile.component.update_system.call(null,system,component_keys,(quile.component["start"]));
});
start_system = function(system,component_keys){
switch(arguments.length){
case 1:
return start_system__1.call(this,system);
case 2:
return start_system__2.call(this,system,component_keys);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
start_system.cljs$core$IFn$_invoke$arity$1 = start_system__1;
start_system.cljs$core$IFn$_invoke$arity$2 = start_system__2;
return start_system;
})()
;
/**
* Recursively stops components in the system, in reverse dependency
* order. component-keys is a collection of keys (order doesn't matter)
* in the system specifying the components to stop, defaults to all
* keys in the system.
*/
quile.component.stop_system = (function() {
var stop_system = null;
var stop_system__1 = (function (system){return stop_system.call(null,system,cljs.core.keys.call(null,system));
});
var stop_system__2 = (function (system,component_keys){return quile.component.update_system_reverse.call(null,system,component_keys,(quile.component["stop"]));
});
stop_system = function(system,component_keys){
switch(arguments.length){
case 1:
return stop_system__1.call(this,system);
case 2:
return stop_system__2.call(this,system,component_keys);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
stop_system.cljs$core$IFn$_invoke$arity$1 = stop_system__1;
stop_system.cljs$core$IFn$_invoke$arity$2 = stop_system__2;
return stop_system;
})()
;

/**
* @constructor
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
quile.component.SystemMap = (function (__meta,__extmap){
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>0){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
quile.component.SystemMap.prototype.quile$component$Lifecycle$ = true;
quile.component.SystemMap.prototype.quile$component$Lifecycle$start$arity$1 = (function (system){var self__ = this;
var system__$1 = this;return quile.component.start_system.call(null,system__$1);
});
quile.component.SystemMap.prototype.quile$component$Lifecycle$stop$arity$1 = (function (system){var self__ = this;
var system__$1 = this;return quile.component.stop_system.call(null,system__$1);
});
quile.component.SystemMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4147__auto__,k__4148__auto__){var self__ = this;
var this__4147__auto____$1 = this;return cljs.core._lookup.call(null,this__4147__auto____$1,k__4148__auto__,null);
});
quile.component.SystemMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4149__auto__,k6297,else__4150__auto__){var self__ = this;
var this__4149__auto____$1 = this;var G__6299 = k6297;switch (G__6299) {
default:
return cljs.core.get.call(null,self__.__extmap,k6297,else__4150__auto__);

}
});
quile.component.SystemMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4161__auto__,writer__4162__auto__,opts__4163__auto__){var self__ = this;
var this__4161__auto____$1 = this;var pr_pair__4164__auto__ = ((function (this__4161__auto____$1){
return (function (keyval__4165__auto__){return cljs.core.pr_sequential_writer.call(null,writer__4162__auto__,cljs.core.pr_writer,""," ","",opts__4163__auto__,keyval__4165__auto__);
});})(this__4161__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__4162__auto__,pr_pair__4164__auto__,"#quile.component.SystemMap{",", ","}",opts__4163__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});
quile.component.SystemMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4145__auto__){var self__ = this;
var this__4145__auto____$1 = this;return self__.__meta;
});
quile.component.SystemMap.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4141__auto__){var self__ = this;
var this__4141__auto____$1 = this;return (new quile.component.SystemMap(self__.__meta,self__.__extmap,self__.__hash));
});
quile.component.SystemMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4151__auto__){var self__ = this;
var this__4151__auto____$1 = this;return (0 + cljs.core.count.call(null,self__.__extmap));
});
quile.component.SystemMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4142__auto__){var self__ = this;
var this__4142__auto____$1 = this;var h__3972__auto__ = self__.__hash;if(!((h__3972__auto__ == null)))
{return h__3972__auto__;
} else
{var h__3972__auto____$1 = cljs.core.hash_imap.call(null,this__4142__auto____$1);self__.__hash = h__3972__auto____$1;
return h__3972__auto____$1;
}
});
quile.component.SystemMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4143__auto__,other__4144__auto__){var self__ = this;
var this__4143__auto____$1 = this;if(cljs.core.truth_((function (){var and__3549__auto__ = other__4144__auto__;if(cljs.core.truth_(and__3549__auto__))
{return ((this__4143__auto____$1.constructor === other__4144__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__4143__auto____$1,other__4144__auto__));
} else
{return and__3549__auto__;
}
})()))
{return true;
} else
{return false;
}
});
quile.component.SystemMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4156__auto__,k__4157__auto__){var self__ = this;
var this__4156__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__4157__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4156__auto____$1),self__.__meta),k__4157__auto__);
} else
{return (new quile.component.SystemMap(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4157__auto__)),null));
}
});
quile.component.SystemMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4154__auto__,k__4155__auto__,G__6296){var self__ = this;
var this__4154__auto____$1 = this;var pred__6300 = cljs.core.keyword_identical_QMARK_;var expr__6301 = k__4155__auto__;return (new quile.component.SystemMap(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4155__auto__,G__6296),null));
});
quile.component.SystemMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4159__auto__){var self__ = this;
var this__4159__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});
quile.component.SystemMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4146__auto__,G__6296){var self__ = this;
var this__4146__auto____$1 = this;return (new quile.component.SystemMap(G__6296,self__.__extmap,self__.__hash));
});
quile.component.SystemMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4152__auto__,entry__4153__auto__){var self__ = this;
var this__4152__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__4153__auto__))
{return cljs.core._assoc.call(null,this__4152__auto____$1,cljs.core._nth.call(null,entry__4153__auto__,(0)),cljs.core._nth.call(null,entry__4153__auto__,(1)));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__4152__auto____$1,entry__4153__auto__);
}
});
quile.component.SystemMap.cljs$lang$type = true;
quile.component.SystemMap.cljs$lang$ctorPrSeq = (function (this__4181__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"quile.component/SystemMap");
});
quile.component.SystemMap.cljs$lang$ctorPrWriter = (function (this__4181__auto__,writer__4182__auto__){return cljs.core._write.call(null,writer__4182__auto__,"quile.component/SystemMap");
});
quile.component.__GT_SystemMap = (function __GT_SystemMap(){return (new quile.component.SystemMap());
});
quile.component.map__GT_SystemMap = (function map__GT_SystemMap(G__6298){return (new quile.component.SystemMap(null,cljs.core.dissoc.call(null,G__6298)));
});
/**
* Returns a system constructed of key/value pairs. The system has
* default implementations of the Lifecycle 'start' and 'stop' methods
* which recursively start/stop all components in the system.
* 
* System maps print as #<SystemMap> to avoid overwhelming the printer
* with large objects. As a consequence, printed system maps cannot be
* 'read'. To disable this behavior and print system maps like normal
* records, call
* (remove-method clojure.core/print-method quile.component.SystemMap)
* @param {...*} var_args
*/
quile.component.system_map = (function() { 
var system_map__delegate = function (keyvals){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,keyvals)))
{} else
{throw Error("system-map requires an even number of arguments");
}
return quile.component.map__GT_SystemMap.call(null,cljs.core.apply.call(null,cljs.core.array_map,keyvals));
};
var system_map = function (var_args){
var keyvals = null;if (arguments.length > 0) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return system_map__delegate.call(this,keyvals);};
system_map.cljs$lang$maxFixedArity = 0;
system_map.cljs$lang$applyTo = (function (arglist__6304){
var keyvals = cljs.core.seq(arglist__6304);
return system_map__delegate(keyvals);
});
system_map.cljs$core$IFn$_invoke$arity$variadic = system_map__delegate;
return system_map;
})()
;
/**
* True if the java.lang.Throwable has ex-data indicating it was
* thrown by something in the quile.component namespace.
*/
quile.component.ex_component_QMARK_ = (function ex_component_QMARK_(throwable){var map__6306 = cljs.core.ex_data.call(null,throwable);var map__6306__$1 = ((cljs.core.seq_QMARK_.call(null,map__6306))?cljs.core.apply.call(null,cljs.core.hash_map,map__6306):map__6306);var reason = cljs.core.get.call(null,map__6306__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));return ((reason instanceof cljs.core.Keyword)) && (cljs.core._EQ_.call(null,"quile.component",cljs.core.namespace.call(null,reason)));
});
/**
* If the java.lang.Throwable has ex-data provided by the
* quile.component namespace, returns a new exception
* instance with the :component and :system removed from its ex-data.
* Preserves the message, cause, and stacktrace of the original
* throwable. If the throwable was not created by this namespace,
* returns it unchanged. Use this when you want to catch and rethrow
* exceptions without including the full component or system.
*/
quile.component.ex_without_components = (function ex_without_components(throwable){if(quile.component.ex_component_QMARK_.call(null,throwable))
{var ex = cljs.core.ex_info.call(null,throwable.getMessage(),cljs.core.dissoc.call(null,cljs.core.ex_data.call(null,throwable),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"system","system",-29381724)),throwable.getCause());var temp__4126__auto___6307 = throwable.getStackTrace();if(cljs.core.truth_(temp__4126__auto___6307))
{var stacktrace_6308 = temp__4126__auto___6307;ex.setStackTrace(stacktrace_6308);
} else
{}
return ex;
} else
{return throwable;
}
});

//# sourceMappingURL=component.js.map