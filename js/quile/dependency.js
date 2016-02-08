// Compiled by ClojureScript 0.0-2311
goog.provide('quile.dependency');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('clojure.set');
quile.dependency.DependencyGraph = (function (){var obj6310 = {};return obj6310;
})();
quile.dependency.immediate_dependencies = (function immediate_dependencies(graph,node){if((function (){var and__3549__auto__ = graph;if(and__3549__auto__)
{return graph.quile$dependency$DependencyGraph$immediate_dependencies$arity$2;
} else
{return and__3549__auto__;
}
})())
{return graph.quile$dependency$DependencyGraph$immediate_dependencies$arity$2(graph,node);
} else
{var x__4188__auto__ = (((graph == null))?null:graph);return (function (){var or__3561__auto__ = (quile.dependency.immediate_dependencies[goog.typeOf(x__4188__auto__)]);if(or__3561__auto__)
{return or__3561__auto__;
} else
{var or__3561__auto____$1 = (quile.dependency.immediate_dependencies["_"]);if(or__3561__auto____$1)
{return or__3561__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DependencyGraph.immediate-dependencies",graph);
}
}
})().call(null,graph,node);
}
});
quile.dependency.immediate_dependents = (function immediate_dependents(graph,node){if((function (){var and__3549__auto__ = graph;if(and__3549__auto__)
{return graph.quile$dependency$DependencyGraph$immediate_dependents$arity$2;
} else
{return and__3549__auto__;
}
})())
{return graph.quile$dependency$DependencyGraph$immediate_dependents$arity$2(graph,node);
} else
{var x__4188__auto__ = (((graph == null))?null:graph);return (function (){var or__3561__auto__ = (quile.dependency.immediate_dependents[goog.typeOf(x__4188__auto__)]);if(or__3561__auto__)
{return or__3561__auto__;
} else
{var or__3561__auto____$1 = (quile.dependency.immediate_dependents["_"]);if(or__3561__auto____$1)
{return or__3561__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DependencyGraph.immediate-dependents",graph);
}
}
})().call(null,graph,node);
}
});
quile.dependency.transitive_dependencies = (function transitive_dependencies(graph,node){if((function (){var and__3549__auto__ = graph;if(and__3549__auto__)
{return graph.quile$dependency$DependencyGraph$transitive_dependencies$arity$2;
} else
{return and__3549__auto__;
}
})())
{return graph.quile$dependency$DependencyGraph$transitive_dependencies$arity$2(graph,node);
} else
{var x__4188__auto__ = (((graph == null))?null:graph);return (function (){var or__3561__auto__ = (quile.dependency.transitive_dependencies[goog.typeOf(x__4188__auto__)]);if(or__3561__auto__)
{return or__3561__auto__;
} else
{var or__3561__auto____$1 = (quile.dependency.transitive_dependencies["_"]);if(or__3561__auto____$1)
{return or__3561__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DependencyGraph.transitive-dependencies",graph);
}
}
})().call(null,graph,node);
}
});
quile.dependency.transitive_dependents = (function transitive_dependents(graph,node){if((function (){var and__3549__auto__ = graph;if(and__3549__auto__)
{return graph.quile$dependency$DependencyGraph$transitive_dependents$arity$2;
} else
{return and__3549__auto__;
}
})())
{return graph.quile$dependency$DependencyGraph$transitive_dependents$arity$2(graph,node);
} else
{var x__4188__auto__ = (((graph == null))?null:graph);return (function (){var or__3561__auto__ = (quile.dependency.transitive_dependents[goog.typeOf(x__4188__auto__)]);if(or__3561__auto__)
{return or__3561__auto__;
} else
{var or__3561__auto____$1 = (quile.dependency.transitive_dependents["_"]);if(or__3561__auto____$1)
{return or__3561__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DependencyGraph.transitive-dependents",graph);
}
}
})().call(null,graph,node);
}
});
quile.dependency.nodes = (function nodes(graph){if((function (){var and__3549__auto__ = graph;if(and__3549__auto__)
{return graph.quile$dependency$DependencyGraph$nodes$arity$1;
} else
{return and__3549__auto__;
}
})())
{return graph.quile$dependency$DependencyGraph$nodes$arity$1(graph);
} else
{var x__4188__auto__ = (((graph == null))?null:graph);return (function (){var or__3561__auto__ = (quile.dependency.nodes[goog.typeOf(x__4188__auto__)]);if(or__3561__auto__)
{return or__3561__auto__;
} else
{var or__3561__auto____$1 = (quile.dependency.nodes["_"]);if(or__3561__auto____$1)
{return or__3561__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DependencyGraph.nodes",graph);
}
}
})().call(null,graph);
}
});
quile.dependency.DependencyGraphUpdate = (function (){var obj6312 = {};return obj6312;
})();
quile.dependency.depend = (function depend(graph,node,dep){if((function (){var and__3549__auto__ = graph;if(and__3549__auto__)
{return graph.quile$dependency$DependencyGraphUpdate$depend$arity$3;
} else
{return and__3549__auto__;
}
})())
{return graph.quile$dependency$DependencyGraphUpdate$depend$arity$3(graph,node,dep);
} else
{var x__4188__auto__ = (((graph == null))?null:graph);return (function (){var or__3561__auto__ = (quile.dependency.depend[goog.typeOf(x__4188__auto__)]);if(or__3561__auto__)
{return or__3561__auto__;
} else
{var or__3561__auto____$1 = (quile.dependency.depend["_"]);if(or__3561__auto____$1)
{return or__3561__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DependencyGraphUpdate.depend",graph);
}
}
})().call(null,graph,node,dep);
}
});
quile.dependency.remove_edge = (function remove_edge(graph,node,dep){if((function (){var and__3549__auto__ = graph;if(and__3549__auto__)
{return graph.quile$dependency$DependencyGraphUpdate$remove_edge$arity$3;
} else
{return and__3549__auto__;
}
})())
{return graph.quile$dependency$DependencyGraphUpdate$remove_edge$arity$3(graph,node,dep);
} else
{var x__4188__auto__ = (((graph == null))?null:graph);return (function (){var or__3561__auto__ = (quile.dependency.remove_edge[goog.typeOf(x__4188__auto__)]);if(or__3561__auto__)
{return or__3561__auto__;
} else
{var or__3561__auto____$1 = (quile.dependency.remove_edge["_"]);if(or__3561__auto____$1)
{return or__3561__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DependencyGraphUpdate.remove-edge",graph);
}
}
})().call(null,graph,node,dep);
}
});
quile.dependency.remove_all = (function remove_all(graph,node){if((function (){var and__3549__auto__ = graph;if(and__3549__auto__)
{return graph.quile$dependency$DependencyGraphUpdate$remove_all$arity$2;
} else
{return and__3549__auto__;
}
})())
{return graph.quile$dependency$DependencyGraphUpdate$remove_all$arity$2(graph,node);
} else
{var x__4188__auto__ = (((graph == null))?null:graph);return (function (){var or__3561__auto__ = (quile.dependency.remove_all[goog.typeOf(x__4188__auto__)]);if(or__3561__auto__)
{return or__3561__auto__;
} else
{var or__3561__auto____$1 = (quile.dependency.remove_all["_"]);if(or__3561__auto____$1)
{return or__3561__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DependencyGraphUpdate.remove-all",graph);
}
}
})().call(null,graph,node);
}
});
quile.dependency.remove_node = (function remove_node(graph,node){if((function (){var and__3549__auto__ = graph;if(and__3549__auto__)
{return graph.quile$dependency$DependencyGraphUpdate$remove_node$arity$2;
} else
{return and__3549__auto__;
}
})())
{return graph.quile$dependency$DependencyGraphUpdate$remove_node$arity$2(graph,node);
} else
{var x__4188__auto__ = (((graph == null))?null:graph);return (function (){var or__3561__auto__ = (quile.dependency.remove_node[goog.typeOf(x__4188__auto__)]);if(or__3561__auto__)
{return or__3561__auto__;
} else
{var or__3561__auto____$1 = (quile.dependency.remove_node["_"]);if(or__3561__auto____$1)
{return or__3561__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DependencyGraphUpdate.remove-node",graph);
}
}
})().call(null,graph,node);
}
});
quile.dependency.remove_from_map = (function remove_from_map(amap,x){return cljs.core.reduce.call(null,(function (m,p__6315){var vec__6316 = p__6315;var k = cljs.core.nth.call(null,vec__6316,(0),null);var vs = cljs.core.nth.call(null,vec__6316,(1),null);return cljs.core.assoc.call(null,m,k,cljs.core.disj.call(null,vs,x));
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.dissoc.call(null,amap,x));
});
/**
* Recursively expands the set of dependency relationships starting
* at (get m x)
*/
quile.dependency.transitive = (function transitive(m,x){return cljs.core.reduce.call(null,(function (s,k){return clojure.set.union.call(null,s,transitive.call(null,m,k));
}),cljs.core.get.call(null,m,x),cljs.core.get.call(null,m,x));
});
quile.dependency.set_conj = cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY);

/**
* @constructor
*/
quile.dependency.MapDependencyGraph = (function (dependencies,dependents){
this.dependencies = dependencies;
this.dependents = dependents;
})
quile.dependency.MapDependencyGraph.cljs$lang$type = true;
quile.dependency.MapDependencyGraph.cljs$lang$ctorStr = "quile.dependency/MapDependencyGraph";
quile.dependency.MapDependencyGraph.cljs$lang$ctorPrWriter = (function (this__4128__auto__,writer__4129__auto__,opt__4130__auto__){return cljs.core._write.call(null,writer__4129__auto__,"quile.dependency/MapDependencyGraph");
});
quile.dependency.MapDependencyGraph.prototype.quile$dependency$DependencyGraphUpdate$ = true;
quile.dependency.MapDependencyGraph.prototype.quile$dependency$DependencyGraphUpdate$depend$arity$3 = (function (graph,node,dep){var self__ = this;
var graph__$1 = this;if(cljs.core.truth_((function (){var or__3561__auto__ = cljs.core._EQ_.call(null,node,dep);if(or__3561__auto__)
{return or__3561__auto__;
} else
{return quile.dependency.depends_QMARK_.call(null,graph__$1,dep,node);
}
})()))
{throw (new Error(("Circular dependency between "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,node))+" and "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,dep)))));
} else
{}
return (new quile.dependency.MapDependencyGraph(cljs.core.update_in.call(null,self__.dependencies,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [node], null),quile.dependency.set_conj,dep),cljs.core.update_in.call(null,self__.dependents,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep], null),quile.dependency.set_conj,node)));
});
quile.dependency.MapDependencyGraph.prototype.quile$dependency$DependencyGraphUpdate$remove_edge$arity$3 = (function (graph,node,dep){var self__ = this;
var graph__$1 = this;return (new quile.dependency.MapDependencyGraph(cljs.core.update_in.call(null,self__.dependencies,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [node], null),cljs.core.disj,dep),cljs.core.update_in.call(null,self__.dependents,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep], null),cljs.core.disj,node)));
});
quile.dependency.MapDependencyGraph.prototype.quile$dependency$DependencyGraphUpdate$remove_all$arity$2 = (function (graph,node){var self__ = this;
var graph__$1 = this;return (new quile.dependency.MapDependencyGraph(quile.dependency.remove_from_map.call(null,self__.dependencies,node),quile.dependency.remove_from_map.call(null,self__.dependents,node)));
});
quile.dependency.MapDependencyGraph.prototype.quile$dependency$DependencyGraphUpdate$remove_node$arity$2 = (function (graph,node){var self__ = this;
var graph__$1 = this;return (new quile.dependency.MapDependencyGraph(cljs.core.dissoc.call(null,self__.dependencies,node),self__.dependents));
});
quile.dependency.MapDependencyGraph.prototype.quile$dependency$DependencyGraph$ = true;
quile.dependency.MapDependencyGraph.prototype.quile$dependency$DependencyGraph$immediate_dependencies$arity$2 = (function (graph,node){var self__ = this;
var graph__$1 = this;return cljs.core.get.call(null,self__.dependencies,node,cljs.core.PersistentHashSet.EMPTY);
});
quile.dependency.MapDependencyGraph.prototype.quile$dependency$DependencyGraph$immediate_dependents$arity$2 = (function (graph,node){var self__ = this;
var graph__$1 = this;return cljs.core.get.call(null,self__.dependents,node,cljs.core.PersistentHashSet.EMPTY);
});
quile.dependency.MapDependencyGraph.prototype.quile$dependency$DependencyGraph$transitive_dependencies$arity$2 = (function (graph,node){var self__ = this;
var graph__$1 = this;return quile.dependency.transitive.call(null,self__.dependencies,node);
});
quile.dependency.MapDependencyGraph.prototype.quile$dependency$DependencyGraph$transitive_dependents$arity$2 = (function (graph,node){var self__ = this;
var graph__$1 = this;return quile.dependency.transitive.call(null,self__.dependents,node);
});
quile.dependency.MapDependencyGraph.prototype.quile$dependency$DependencyGraph$nodes$arity$1 = (function (graph){var self__ = this;
var graph__$1 = this;return clojure.set.union.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,self__.dependencies)),cljs.core.set.call(null,cljs.core.keys.call(null,self__.dependents)));
});
quile.dependency.__GT_MapDependencyGraph = (function __GT_MapDependencyGraph(dependencies,dependents){return (new quile.dependency.MapDependencyGraph(dependencies,dependents));
});
/**
* Returns a new, empty, dependency graph. A graph contains nodes,
* which may be any type which supports Clojure's equality semantics.
* Edges are represented as pairs of nodes. An edge between two nodes X
* and Y indicates that X depends on Y or, conversely, that Y is a
* dependent of X. A dependency graph may not have cycles.
*/
quile.dependency.graph = (function graph(){return (new quile.dependency.MapDependencyGraph(cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* True if x is directly or transitively dependent on y.
*/
quile.dependency.depends_QMARK_ = (function depends_QMARK_(graph,x,y){return cljs.core.contains_QMARK_.call(null,quile.dependency.transitive_dependencies.call(null,graph,x),y);
});
/**
* True if y is a direct or transitive dependent of x.
*/
quile.dependency.dependent_QMARK_ = (function dependent_QMARK_(graph,x,y){return cljs.core.contains_QMARK_.call(null,quile.dependency.transitive_dependents.call(null,graph,x),y);
});
/**
* Returns a topologically-sorted list of nodes in graph.
*/
quile.dependency.topo_sort = (function topo_sort(graph){var sorted = cljs.core.List.EMPTY;var g = graph;var todo = cljs.core.set.call(null,cljs.core.filter.call(null,((function (sorted,g){
return (function (p1__6317_SHARP_){return cljs.core.empty_QMARK_.call(null,quile.dependency.immediate_dependents.call(null,graph,p1__6317_SHARP_));
});})(sorted,g))
,quile.dependency.nodes.call(null,graph)));while(true){
if(cljs.core.empty_QMARK_.call(null,todo))
{return sorted;
} else
{var vec__6320 = cljs.core.seq.call(null,todo);var node = cljs.core.nth.call(null,vec__6320,(0),null);var more = cljs.core.nthnext.call(null,vec__6320,(1));var deps = quile.dependency.immediate_dependencies.call(null,g,node);var vec__6321 = (function (){var deps__$1 = deps;var g__$1 = g;var add = cljs.core.PersistentHashSet.EMPTY;while(true){
if(cljs.core.seq.call(null,deps__$1))
{var d = cljs.core.first.call(null,deps__$1);var g_SINGLEQUOTE_ = quile.dependency.remove_edge.call(null,g__$1,node,d);if(cljs.core.empty_QMARK_.call(null,quile.dependency.immediate_dependents.call(null,g_SINGLEQUOTE_,d)))
{{
var G__6322 = cljs.core.rest.call(null,deps__$1);
var G__6323 = g_SINGLEQUOTE_;
var G__6324 = cljs.core.conj.call(null,add,d);
deps__$1 = G__6322;
g__$1 = G__6323;
add = G__6324;
continue;
}
} else
{{
var G__6325 = cljs.core.rest.call(null,deps__$1);
var G__6326 = g_SINGLEQUOTE_;
var G__6327 = add;
deps__$1 = G__6325;
g__$1 = G__6326;
add = G__6327;
continue;
}
}
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [add,g__$1], null);
}
break;
}
})();var add = cljs.core.nth.call(null,vec__6321,(0),null);var g_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__6321,(1),null);{
var G__6328 = cljs.core.cons.call(null,node,sorted);
var G__6329 = quile.dependency.remove_node.call(null,g_SINGLEQUOTE_,node);
var G__6330 = clojure.set.union.call(null,cljs.core.set.call(null,more),cljs.core.set.call(null,add));
sorted = G__6328;
g = G__6329;
todo = G__6330;
continue;
}
}
break;
}
});
/**
* Returns a comparator fn which produces a topological sort based on
* the dependencies in graph. Nodes not present in the graph will sort
* after nodes in the graph.
*/
quile.dependency.topo_comparator = (function topo_comparator(graph){var pos = cljs.core.zipmap.call(null,quile.dependency.topo_sort.call(null,graph),cljs.core.range.call(null));return ((function (pos){
return (function (a,b){return cljs.core.compare.call(null,cljs.core.get.call(null,pos,a,(Number["MAX_VALUE"])),cljs.core.get.call(null,pos,b,(Number["MAX_VALUE"])));
});
;})(pos))
});

//# sourceMappingURL=dependency.js.map