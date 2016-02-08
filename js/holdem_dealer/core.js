// Compiled by ClojureScript 0.0-2311
goog.provide('holdem_dealer.core');
goog.require('cljs.core');
goog.require('holdem_dealer.log');
goog.require('holdem_dealer.log');
goog.require('holdem_dealer.web');
goog.require('holdem_dealer.config');
goog.require('holdem_dealer.web');
goog.require('cljs.nodejs');
goog.require('quile.component');
goog.require('quile.component');
goog.require('holdem_dealer.log');
goog.require('cljs.nodejs');
goog.require('holdem_dealer.config');
console.log("dirname is ",__dirname);
holdem_dealer.core.some_node_module = cljs.core.apply.call(null,require,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["../../src/js/some_node_module"], null));

/**
* @constructor
* @param {*} options
* @param {*} config
* @param {*} queue
* @param {*} web
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
holdem_dealer.core.NodeComponent = (function (options,config,queue,web,__meta,__extmap){
this.options = options;
this.config = config;
this.queue = queue;
this.web = web;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>4){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
holdem_dealer.core.NodeComponent.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4147__auto__,k__4148__auto__){var self__ = this;
var this__4147__auto____$1 = this;return cljs.core._lookup.call(null,this__4147__auto____$1,k__4148__auto__,null);
});
holdem_dealer.core.NodeComponent.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4149__auto__,k5050,else__4150__auto__){var self__ = this;
var this__4149__auto____$1 = this;var G__5052 = (((k5050 instanceof cljs.core.Keyword))?k5050.fqn:null);switch (G__5052) {
case "web":
return self__.web;

break;
case "queue":
return self__.queue;

break;
case "config":
return self__.config;

break;
case "options":
return self__.options;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k5050,else__4150__auto__);

}
});
holdem_dealer.core.NodeComponent.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4161__auto__,writer__4162__auto__,opts__4163__auto__){var self__ = this;
var this__4161__auto____$1 = this;var pr_pair__4164__auto__ = ((function (this__4161__auto____$1){
return (function (keyval__4165__auto__){return cljs.core.pr_sequential_writer.call(null,writer__4162__auto__,cljs.core.pr_writer,""," ","",opts__4163__auto__,keyval__4165__auto__);
});})(this__4161__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__4162__auto__,pr_pair__4164__auto__,"#holdem-dealer.core.NodeComponent{",", ","}",opts__4163__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"options","options",99638489),self__.options],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"config","config",994861415),self__.config],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"queue","queue",1455835879),self__.queue],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"web","web",-654701153),self__.web],null))], null),self__.__extmap));
});
holdem_dealer.core.NodeComponent.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4145__auto__){var self__ = this;
var this__4145__auto____$1 = this;return self__.__meta;
});
holdem_dealer.core.NodeComponent.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4141__auto__){var self__ = this;
var this__4141__auto____$1 = this;return (new holdem_dealer.core.NodeComponent(self__.options,self__.config,self__.queue,self__.web,self__.__meta,self__.__extmap,self__.__hash));
});
holdem_dealer.core.NodeComponent.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4151__auto__){var self__ = this;
var this__4151__auto____$1 = this;return (4 + cljs.core.count.call(null,self__.__extmap));
});
holdem_dealer.core.NodeComponent.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4142__auto__){var self__ = this;
var this__4142__auto____$1 = this;var h__3972__auto__ = self__.__hash;if(!((h__3972__auto__ == null)))
{return h__3972__auto__;
} else
{var h__3972__auto____$1 = cljs.core.hash_imap.call(null,this__4142__auto____$1);self__.__hash = h__3972__auto____$1;
return h__3972__auto____$1;
}
});
holdem_dealer.core.NodeComponent.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4143__auto__,other__4144__auto__){var self__ = this;
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
holdem_dealer.core.NodeComponent.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4156__auto__,k__4157__auto__){var self__ = this;
var this__4156__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"config","config",994861415),null,new cljs.core.Keyword(null,"queue","queue",1455835879),null,new cljs.core.Keyword(null,"options","options",99638489),null,new cljs.core.Keyword(null,"web","web",-654701153),null], null), null),k__4157__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4156__auto____$1),self__.__meta),k__4157__auto__);
} else
{return (new holdem_dealer.core.NodeComponent(self__.options,self__.config,self__.queue,self__.web,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4157__auto__)),null));
}
});
holdem_dealer.core.NodeComponent.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4154__auto__,k__4155__auto__,G__5049){var self__ = this;
var this__4154__auto____$1 = this;var pred__5053 = cljs.core.keyword_identical_QMARK_;var expr__5054 = k__4155__auto__;if(cljs.core.truth_(pred__5053.call(null,new cljs.core.Keyword(null,"options","options",99638489),expr__5054)))
{return (new holdem_dealer.core.NodeComponent(G__5049,self__.config,self__.queue,self__.web,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__5053.call(null,new cljs.core.Keyword(null,"config","config",994861415),expr__5054)))
{return (new holdem_dealer.core.NodeComponent(self__.options,G__5049,self__.queue,self__.web,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__5053.call(null,new cljs.core.Keyword(null,"queue","queue",1455835879),expr__5054)))
{return (new holdem_dealer.core.NodeComponent(self__.options,self__.config,G__5049,self__.web,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__5053.call(null,new cljs.core.Keyword(null,"web","web",-654701153),expr__5054)))
{return (new holdem_dealer.core.NodeComponent(self__.options,self__.config,self__.queue,G__5049,self__.__meta,self__.__extmap,null));
} else
{return (new holdem_dealer.core.NodeComponent(self__.options,self__.config,self__.queue,self__.web,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4155__auto__,G__5049),null));
}
}
}
}
});
holdem_dealer.core.NodeComponent.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4159__auto__){var self__ = this;
var this__4159__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"options","options",99638489),self__.options],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"config","config",994861415),self__.config],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"queue","queue",1455835879),self__.queue],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"web","web",-654701153),self__.web],null))], null),self__.__extmap));
});
holdem_dealer.core.NodeComponent.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4146__auto__,G__5049){var self__ = this;
var this__4146__auto____$1 = this;return (new holdem_dealer.core.NodeComponent(self__.options,self__.config,self__.queue,self__.web,G__5049,self__.__extmap,self__.__hash));
});
holdem_dealer.core.NodeComponent.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4152__auto__,entry__4153__auto__){var self__ = this;
var this__4152__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__4153__auto__))
{return cljs.core._assoc.call(null,this__4152__auto____$1,cljs.core._nth.call(null,entry__4153__auto__,(0)),cljs.core._nth.call(null,entry__4153__auto__,(1)));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__4152__auto____$1,entry__4153__auto__);
}
});
holdem_dealer.core.NodeComponent.prototype.quile$component$Lifecycle$ = true;
holdem_dealer.core.NodeComponent.prototype.quile$component$Lifecycle$start$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;holdem_dealer.log.info.call(null,";; Starting NodeComponent");
return cljs.core.assoc.call(null,this$__$1,new cljs.core.Keyword(null,"foo","foo",1268894036),"bar!");
});
holdem_dealer.core.NodeComponent.prototype.quile$component$Lifecycle$stop$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;holdem_dealer.log.info.call(null,";; Stopping NodeComponent");
return this$__$1;
});
holdem_dealer.core.NodeComponent.cljs$lang$type = true;
holdem_dealer.core.NodeComponent.cljs$lang$ctorPrSeq = (function (this__4181__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"holdem-dealer.core/NodeComponent");
});
holdem_dealer.core.NodeComponent.cljs$lang$ctorPrWriter = (function (this__4181__auto__,writer__4182__auto__){return cljs.core._write.call(null,writer__4182__auto__,"holdem-dealer.core/NodeComponent");
});
holdem_dealer.core.__GT_NodeComponent = (function __GT_NodeComponent(options,config,queue,web){return (new holdem_dealer.core.NodeComponent(options,config,queue,web));
});
holdem_dealer.core.map__GT_NodeComponent = (function map__GT_NodeComponent(G__5051){return (new holdem_dealer.core.NodeComponent(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(G__5051),new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(G__5051),new cljs.core.Keyword(null,"queue","queue",1455835879).cljs$core$IFn$_invoke$arity$1(G__5051),new cljs.core.Keyword(null,"web","web",-654701153).cljs$core$IFn$_invoke$arity$1(G__5051),null,cljs.core.dissoc.call(null,G__5051,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"queue","queue",1455835879),new cljs.core.Keyword(null,"web","web",-654701153))));
});
holdem_dealer.core.node_component = (function node_component(config_options){return holdem_dealer.core.map__GT_NodeComponent.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"options","options",99638489),config_options], null));
});

/**
* @constructor
* @param {*} config_options
* @param {*} web
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
holdem_dealer.core.NodeSystem = (function (config_options,web,__meta,__extmap){
this.config_options = config_options;
this.web = web;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>2){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
holdem_dealer.core.NodeSystem.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4147__auto__,k__4148__auto__){var self__ = this;
var this__4147__auto____$1 = this;return cljs.core._lookup.call(null,this__4147__auto____$1,k__4148__auto__,null);
});
holdem_dealer.core.NodeSystem.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4149__auto__,k5058,else__4150__auto__){var self__ = this;
var this__4149__auto____$1 = this;var G__5060 = (((k5058 instanceof cljs.core.Keyword))?k5058.fqn:null);switch (G__5060) {
case "web":
return self__.web;

break;
case "config-options":
return self__.config_options;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k5058,else__4150__auto__);

}
});
holdem_dealer.core.NodeSystem.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4161__auto__,writer__4162__auto__,opts__4163__auto__){var self__ = this;
var this__4161__auto____$1 = this;var pr_pair__4164__auto__ = ((function (this__4161__auto____$1){
return (function (keyval__4165__auto__){return cljs.core.pr_sequential_writer.call(null,writer__4162__auto__,cljs.core.pr_writer,""," ","",opts__4163__auto__,keyval__4165__auto__);
});})(this__4161__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__4162__auto__,pr_pair__4164__auto__,"#holdem-dealer.core.NodeSystem{",", ","}",opts__4163__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"config-options","config-options",-448864674),self__.config_options],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"web","web",-654701153),self__.web],null))], null),self__.__extmap));
});
holdem_dealer.core.NodeSystem.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4145__auto__){var self__ = this;
var this__4145__auto____$1 = this;return self__.__meta;
});
holdem_dealer.core.NodeSystem.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4141__auto__){var self__ = this;
var this__4141__auto____$1 = this;return (new holdem_dealer.core.NodeSystem(self__.config_options,self__.web,self__.__meta,self__.__extmap,self__.__hash));
});
holdem_dealer.core.NodeSystem.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4151__auto__){var self__ = this;
var this__4151__auto____$1 = this;return (2 + cljs.core.count.call(null,self__.__extmap));
});
holdem_dealer.core.NodeSystem.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4142__auto__){var self__ = this;
var this__4142__auto____$1 = this;var h__3972__auto__ = self__.__hash;if(!((h__3972__auto__ == null)))
{return h__3972__auto__;
} else
{var h__3972__auto____$1 = cljs.core.hash_imap.call(null,this__4142__auto____$1);self__.__hash = h__3972__auto____$1;
return h__3972__auto____$1;
}
});
holdem_dealer.core.NodeSystem.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4143__auto__,other__4144__auto__){var self__ = this;
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
holdem_dealer.core.NodeSystem.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4156__auto__,k__4157__auto__){var self__ = this;
var this__4156__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"config-options","config-options",-448864674),null,new cljs.core.Keyword(null,"web","web",-654701153),null], null), null),k__4157__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4156__auto____$1),self__.__meta),k__4157__auto__);
} else
{return (new holdem_dealer.core.NodeSystem(self__.config_options,self__.web,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4157__auto__)),null));
}
});
holdem_dealer.core.NodeSystem.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4154__auto__,k__4155__auto__,G__5057){var self__ = this;
var this__4154__auto____$1 = this;var pred__5061 = cljs.core.keyword_identical_QMARK_;var expr__5062 = k__4155__auto__;if(cljs.core.truth_(pred__5061.call(null,new cljs.core.Keyword(null,"config-options","config-options",-448864674),expr__5062)))
{return (new holdem_dealer.core.NodeSystem(G__5057,self__.web,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__5061.call(null,new cljs.core.Keyword(null,"web","web",-654701153),expr__5062)))
{return (new holdem_dealer.core.NodeSystem(self__.config_options,G__5057,self__.__meta,self__.__extmap,null));
} else
{return (new holdem_dealer.core.NodeSystem(self__.config_options,self__.web,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4155__auto__,G__5057),null));
}
}
});
holdem_dealer.core.NodeSystem.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4159__auto__){var self__ = this;
var this__4159__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"config-options","config-options",-448864674),self__.config_options],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"web","web",-654701153),self__.web],null))], null),self__.__extmap));
});
holdem_dealer.core.NodeSystem.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4146__auto__,G__5057){var self__ = this;
var this__4146__auto____$1 = this;return (new holdem_dealer.core.NodeSystem(self__.config_options,self__.web,G__5057,self__.__extmap,self__.__hash));
});
holdem_dealer.core.NodeSystem.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4152__auto__,entry__4153__auto__){var self__ = this;
var this__4152__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__4153__auto__))
{return cljs.core._assoc.call(null,this__4152__auto____$1,cljs.core._nth.call(null,entry__4153__auto__,(0)),cljs.core._nth.call(null,entry__4153__auto__,(1)));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__4152__auto____$1,entry__4153__auto__);
}
});
holdem_dealer.core.NodeSystem.prototype.quile$component$Lifecycle$ = true;
holdem_dealer.core.NodeSystem.prototype.quile$component$Lifecycle$start$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return quile.component.start_system.call(null,this$__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"web","web",-654701153),new cljs.core.Keyword(null,"config","config",994861415)], null));
});
holdem_dealer.core.NodeSystem.prototype.quile$component$Lifecycle$stop$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return quile.component.stop_system.call(null,this$__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"web","web",-654701153),new cljs.core.Keyword(null,"config","config",994861415)], null));
});
holdem_dealer.core.NodeSystem.cljs$lang$type = true;
holdem_dealer.core.NodeSystem.cljs$lang$ctorPrSeq = (function (this__4181__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"holdem-dealer.core/NodeSystem");
});
holdem_dealer.core.NodeSystem.cljs$lang$ctorPrWriter = (function (this__4181__auto__,writer__4182__auto__){return cljs.core._write.call(null,writer__4182__auto__,"holdem-dealer.core/NodeSystem");
});
holdem_dealer.core.__GT_NodeSystem = (function __GT_NodeSystem(config_options,web){return (new holdem_dealer.core.NodeSystem(config_options,web));
});
holdem_dealer.core.map__GT_NodeSystem = (function map__GT_NodeSystem(G__5059){return (new holdem_dealer.core.NodeSystem(new cljs.core.Keyword(null,"config-options","config-options",-448864674).cljs$core$IFn$_invoke$arity$1(G__5059),new cljs.core.Keyword(null,"web","web",-654701153).cljs$core$IFn$_invoke$arity$1(G__5059),null,cljs.core.dissoc.call(null,G__5059,new cljs.core.Keyword(null,"config-options","config-options",-448864674),new cljs.core.Keyword(null,"web","web",-654701153))));
});
holdem_dealer.core.n_system = (function n_system(config_options){var port = new cljs.core.Keyword(null,"port","port",1534937262).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"web","web",-654701153).cljs$core$IFn$_invoke$arity$1(config_options));return holdem_dealer.core.map__GT_NodeSystem.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"config-options","config-options",-448864674),config_options,new cljs.core.Keyword(null,"config","config",994861415),holdem_dealer.config.new_config.call(null,config_options),new cljs.core.Keyword(null,"web","web",-654701153),quile.component.using.call(null,holdem_dealer.web.new_web.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"config","config",994861415)], null)),new cljs.core.Keyword(null,"app","app",-560961707),quile.component.using.call(null,holdem_dealer.core.node_component.call(null,config_options),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"web","web",-654701153),new cljs.core.Keyword(null,"web","web",-654701153),new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"config","config",994861415)], null))], null));
});
holdem_dealer.core.app = cljs.core.atom.call(null,null);
/**
* @param {...*} var_args
*/
holdem_dealer.core._main = (function() { 
var _main__delegate = function (args){var foo_5065 = (holdem_dealer.core.some_node_module["foo"]);var bar_5066 = (holdem_dealer.core.some_node_module["bar"]);foo_5065.call(null);
bar_5066.call(null);
var cfg = holdem_dealer.config.load_config.call(null);var systems = cljs.core.reset_BANG_.call(null,holdem_dealer.core.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"system","system",-29381724),holdem_dealer.core.n_system.call(null,cfg)], null));var started = quile.component.start_system.call(null,new cljs.core.Keyword(null,"system","system",-29381724).cljs$core$IFn$_invoke$arity$1(systems));cljs.core.swap_BANG_.call(null,holdem_dealer.core.app,cljs.core.assoc,new cljs.core.Keyword(null,"system","system",-29381724),started);
return setTimeout(((function (cfg,systems,started){
return (function (){quile.component.stop_system.call(null,new cljs.core.Keyword(null,"system","system",-29381724).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,holdem_dealer.core.app)));
return process.exit();
});})(cfg,systems,started))
,(5000));
};
var _main = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return _main__delegate.call(this,args);};
_main.cljs$lang$maxFixedArity = 0;
_main.cljs$lang$applyTo = (function (arglist__5067){
var args = cljs.core.seq(arglist__5067);
return _main__delegate(args);
});
_main.cljs$core$IFn$_invoke$arity$variadic = _main__delegate;
return _main;
})()
;
cljs.core.enable_console_print_BANG_.call(null);

//# sourceMappingURL=core.js.map