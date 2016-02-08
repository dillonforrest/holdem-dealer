// Compiled by ClojureScript 0.0-2311
goog.provide('holdem_dealer.config');
goog.require('cljs.core');
goog.require('holdem_dealer.log');
goog.require('quile.component');
goog.require('quile.component');
goog.require('holdem_dealer.log');
goog.require('holdem_dealer.log');
goog.require('cljs.nodejs');
goog.require('cljs.nodejs');
holdem_dealer.config.__dirname = __dirname;
holdem_dealer.config.config = cljs.core.atom.call(null,null);

/**
* @constructor
* @param {*} _config
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
holdem_dealer.config.ConfigComponent = (function (_config,__meta,__extmap){
this._config = _config;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>1){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
holdem_dealer.config.ConfigComponent.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4147__auto__,k__4148__auto__){var self__ = this;
var this__4147__auto____$1 = this;return cljs.core._lookup.call(null,this__4147__auto____$1,k__4148__auto__,null);
});
holdem_dealer.config.ConfigComponent.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4149__auto__,k5034,else__4150__auto__){var self__ = this;
var this__4149__auto____$1 = this;var G__5036 = (((k5034 instanceof cljs.core.Keyword))?k5034.fqn:null);switch (G__5036) {
case "-config":
return self__._config;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k5034,else__4150__auto__);

}
});
holdem_dealer.config.ConfigComponent.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4161__auto__,writer__4162__auto__,opts__4163__auto__){var self__ = this;
var this__4161__auto____$1 = this;var pr_pair__4164__auto__ = ((function (this__4161__auto____$1){
return (function (keyval__4165__auto__){return cljs.core.pr_sequential_writer.call(null,writer__4162__auto__,cljs.core.pr_writer,""," ","",opts__4163__auto__,keyval__4165__auto__);
});})(this__4161__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__4162__auto__,pr_pair__4164__auto__,"#holdem-dealer.config.ConfigComponent{",", ","}",opts__4163__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"-config","-config",1985268249),self__._config],null))], null),self__.__extmap));
});
holdem_dealer.config.ConfigComponent.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4145__auto__){var self__ = this;
var this__4145__auto____$1 = this;return self__.__meta;
});
holdem_dealer.config.ConfigComponent.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4141__auto__){var self__ = this;
var this__4141__auto____$1 = this;return (new holdem_dealer.config.ConfigComponent(self__._config,self__.__meta,self__.__extmap,self__.__hash));
});
holdem_dealer.config.ConfigComponent.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4151__auto__){var self__ = this;
var this__4151__auto____$1 = this;return (1 + cljs.core.count.call(null,self__.__extmap));
});
holdem_dealer.config.ConfigComponent.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4142__auto__){var self__ = this;
var this__4142__auto____$1 = this;var h__3972__auto__ = self__.__hash;if(!((h__3972__auto__ == null)))
{return h__3972__auto__;
} else
{var h__3972__auto____$1 = cljs.core.hash_imap.call(null,this__4142__auto____$1);self__.__hash = h__3972__auto____$1;
return h__3972__auto____$1;
}
});
holdem_dealer.config.ConfigComponent.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4143__auto__,other__4144__auto__){var self__ = this;
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
holdem_dealer.config.ConfigComponent.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4156__auto__,k__4157__auto__){var self__ = this;
var this__4156__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"-config","-config",1985268249),null], null), null),k__4157__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4156__auto____$1),self__.__meta),k__4157__auto__);
} else
{return (new holdem_dealer.config.ConfigComponent(self__._config,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4157__auto__)),null));
}
});
holdem_dealer.config.ConfigComponent.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4154__auto__,k__4155__auto__,G__5033){var self__ = this;
var this__4154__auto____$1 = this;var pred__5037 = cljs.core.keyword_identical_QMARK_;var expr__5038 = k__4155__auto__;if(cljs.core.truth_(pred__5037.call(null,new cljs.core.Keyword(null,"-config","-config",1985268249),expr__5038)))
{return (new holdem_dealer.config.ConfigComponent(G__5033,self__.__meta,self__.__extmap,null));
} else
{return (new holdem_dealer.config.ConfigComponent(self__._config,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4155__auto__,G__5033),null));
}
});
holdem_dealer.config.ConfigComponent.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4159__auto__){var self__ = this;
var this__4159__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"-config","-config",1985268249),self__._config],null))], null),self__.__extmap));
});
holdem_dealer.config.ConfigComponent.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4146__auto__,G__5033){var self__ = this;
var this__4146__auto____$1 = this;return (new holdem_dealer.config.ConfigComponent(self__._config,G__5033,self__.__extmap,self__.__hash));
});
holdem_dealer.config.ConfigComponent.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4152__auto__,entry__4153__auto__){var self__ = this;
var this__4152__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__4153__auto__))
{return cljs.core._assoc.call(null,this__4152__auto____$1,cljs.core._nth.call(null,entry__4153__auto__,(0)),cljs.core._nth.call(null,entry__4153__auto__,(1)));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__4152__auto____$1,entry__4153__auto__);
}
});
holdem_dealer.config.ConfigComponent.prototype.quile$component$Lifecycle$ = true;
holdem_dealer.config.ConfigComponent.prototype.quile$component$Lifecycle$start$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;holdem_dealer.log.info.call(null,";; Starting ConfigComponent");
return this$__$1;
});
holdem_dealer.config.ConfigComponent.prototype.quile$component$Lifecycle$stop$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;holdem_dealer.log.info.call(null,";; Stopping ConfigComponent");
return this$__$1;
});
holdem_dealer.config.ConfigComponent.cljs$lang$type = true;
holdem_dealer.config.ConfigComponent.cljs$lang$ctorPrSeq = (function (this__4181__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"holdem-dealer.config/ConfigComponent");
});
holdem_dealer.config.ConfigComponent.cljs$lang$ctorPrWriter = (function (this__4181__auto__,writer__4182__auto__){return cljs.core._write.call(null,writer__4182__auto__,"holdem-dealer.config/ConfigComponent");
});
holdem_dealer.config.__GT_ConfigComponent = (function __GT_ConfigComponent(_config){return (new holdem_dealer.config.ConfigComponent(_config));
});
holdem_dealer.config.map__GT_ConfigComponent = (function map__GT_ConfigComponent(G__5035){return (new holdem_dealer.config.ConfigComponent(new cljs.core.Keyword(null,"-config","-config",1985268249).cljs$core$IFn$_invoke$arity$1(G__5035),null,cljs.core.dissoc.call(null,G__5035,new cljs.core.Keyword(null,"-config","-config",1985268249))));
});
holdem_dealer.config.new_config = (function new_config(cfg){return holdem_dealer.config.map__GT_ConfigComponent.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"-config","-config",1985268249),cfg], null));
});
holdem_dealer.config.load_config = (function load_config(){var config_path = (function (){var or__3561__auto__ = new cljs.core.Keyword(null,"CONFIG","CONFIG",-27487790).cljs$core$IFn$_invoke$arity$1(cljs.core.js__GT_clj.call(null,cljs.nodejs.process.env));if(cljs.core.truth_(or__3561__auto__))
{return or__3561__auto__;
} else
{return "../resources/config/development";
}
})();return cljs.core.reset_BANG_.call(null,holdem_dealer.config.config,new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(cljs.core.js__GT_clj.call(null,cljs.nodejs.require.call(null,config_path),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true)));
});

//# sourceMappingURL=config.js.map