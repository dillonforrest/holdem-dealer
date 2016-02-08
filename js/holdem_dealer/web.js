// Compiled by ClojureScript 0.0-2311
goog.provide('holdem_dealer.web');
goog.require('cljs.core');
goog.require('holdem_dealer.log');
goog.require('quile.component');
goog.require('quile.component');
goog.require('holdem_dealer.log');
goog.require('holdem_dealer.log');
goog.require('cljs.nodejs');
goog.require('cljs.nodejs');
holdem_dealer.web.express = cljs.nodejs.require.call(null,"express");

/**
* @constructor
* @param {*} config
* @param {*} fpga
* @param {*} queue
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
holdem_dealer.web.WebComponent = (function (config,fpga,queue,__meta,__extmap){
this.config = config;
this.fpga = fpga;
this.queue = queue;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>3){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
holdem_dealer.web.WebComponent.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4147__auto__,k__4148__auto__){var self__ = this;
var this__4147__auto____$1 = this;return cljs.core._lookup.call(null,this__4147__auto____$1,k__4148__auto__,null);
});
holdem_dealer.web.WebComponent.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4149__auto__,k5074,else__4150__auto__){var self__ = this;
var this__4149__auto____$1 = this;var G__5076 = (((k5074 instanceof cljs.core.Keyword))?k5074.fqn:null);switch (G__5076) {
case "queue":
return self__.queue;

break;
case "fpga":
return self__.fpga;

break;
case "config":
return self__.config;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k5074,else__4150__auto__);

}
});
holdem_dealer.web.WebComponent.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4161__auto__,writer__4162__auto__,opts__4163__auto__){var self__ = this;
var this__4161__auto____$1 = this;var pr_pair__4164__auto__ = ((function (this__4161__auto____$1){
return (function (keyval__4165__auto__){return cljs.core.pr_sequential_writer.call(null,writer__4162__auto__,cljs.core.pr_writer,""," ","",opts__4163__auto__,keyval__4165__auto__);
});})(this__4161__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__4162__auto__,pr_pair__4164__auto__,"#holdem-dealer.web.WebComponent{",", ","}",opts__4163__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"config","config",994861415),self__.config],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fpga","fpga",2082873291),self__.fpga],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"queue","queue",1455835879),self__.queue],null))], null),self__.__extmap));
});
holdem_dealer.web.WebComponent.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4145__auto__){var self__ = this;
var this__4145__auto____$1 = this;return self__.__meta;
});
holdem_dealer.web.WebComponent.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4141__auto__){var self__ = this;
var this__4141__auto____$1 = this;return (new holdem_dealer.web.WebComponent(self__.config,self__.fpga,self__.queue,self__.__meta,self__.__extmap,self__.__hash));
});
holdem_dealer.web.WebComponent.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4151__auto__){var self__ = this;
var this__4151__auto____$1 = this;return (3 + cljs.core.count.call(null,self__.__extmap));
});
holdem_dealer.web.WebComponent.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4142__auto__){var self__ = this;
var this__4142__auto____$1 = this;var h__3972__auto__ = self__.__hash;if(!((h__3972__auto__ == null)))
{return h__3972__auto__;
} else
{var h__3972__auto____$1 = cljs.core.hash_imap.call(null,this__4142__auto____$1);self__.__hash = h__3972__auto____$1;
return h__3972__auto____$1;
}
});
holdem_dealer.web.WebComponent.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4143__auto__,other__4144__auto__){var self__ = this;
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
holdem_dealer.web.WebComponent.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4156__auto__,k__4157__auto__){var self__ = this;
var this__4156__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"config","config",994861415),null,new cljs.core.Keyword(null,"queue","queue",1455835879),null,new cljs.core.Keyword(null,"fpga","fpga",2082873291),null], null), null),k__4157__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4156__auto____$1),self__.__meta),k__4157__auto__);
} else
{return (new holdem_dealer.web.WebComponent(self__.config,self__.fpga,self__.queue,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4157__auto__)),null));
}
});
holdem_dealer.web.WebComponent.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4154__auto__,k__4155__auto__,G__5073){var self__ = this;
var this__4154__auto____$1 = this;var pred__5077 = cljs.core.keyword_identical_QMARK_;var expr__5078 = k__4155__auto__;if(cljs.core.truth_(pred__5077.call(null,new cljs.core.Keyword(null,"config","config",994861415),expr__5078)))
{return (new holdem_dealer.web.WebComponent(G__5073,self__.fpga,self__.queue,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__5077.call(null,new cljs.core.Keyword(null,"fpga","fpga",2082873291),expr__5078)))
{return (new holdem_dealer.web.WebComponent(self__.config,G__5073,self__.queue,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__5077.call(null,new cljs.core.Keyword(null,"queue","queue",1455835879),expr__5078)))
{return (new holdem_dealer.web.WebComponent(self__.config,self__.fpga,G__5073,self__.__meta,self__.__extmap,null));
} else
{return (new holdem_dealer.web.WebComponent(self__.config,self__.fpga,self__.queue,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4155__auto__,G__5073),null));
}
}
}
});
holdem_dealer.web.WebComponent.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4159__auto__){var self__ = this;
var this__4159__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"config","config",994861415),self__.config],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fpga","fpga",2082873291),self__.fpga],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"queue","queue",1455835879),self__.queue],null))], null),self__.__extmap));
});
holdem_dealer.web.WebComponent.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4146__auto__,G__5073){var self__ = this;
var this__4146__auto____$1 = this;return (new holdem_dealer.web.WebComponent(self__.config,self__.fpga,self__.queue,G__5073,self__.__extmap,self__.__hash));
});
holdem_dealer.web.WebComponent.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4152__auto__,entry__4153__auto__){var self__ = this;
var this__4152__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__4153__auto__))
{return cljs.core._assoc.call(null,this__4152__auto____$1,cljs.core._nth.call(null,entry__4153__auto__,(0)),cljs.core._nth.call(null,entry__4153__auto__,(1)));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__4152__auto____$1,entry__4153__auto__);
}
});
holdem_dealer.web.WebComponent.prototype.quile$component$Lifecycle$ = true;
holdem_dealer.web.WebComponent.prototype.quile$component$Lifecycle$start$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;holdem_dealer.log.info.call(null,";; Starting WebComponent");
var port = new cljs.core.Keyword(null,"port","port",1534937262).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"web","web",-654701153).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"-config","-config",1985268249).cljs$core$IFn$_invoke$arity$1(self__.config)));var app = holdem_dealer.web.express.call(null);var G__5080_5082 = app;G__5080_5082.get("/",((function (G__5080_5082,port,app,this$__$1){
return (function (req,res){return res.send("Hello World");
});})(G__5080_5082,port,app,this$__$1))
);
G__5080_5082.listen(port);
return cljs.core.assoc.call(null,this$__$1,new cljs.core.Keyword(null,"app","app",-560961707),app);
});
holdem_dealer.web.WebComponent.prototype.quile$component$Lifecycle$stop$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;holdem_dealer.log.info.call(null,";; Stopping WebComponent");
return cljs.core.dissoc.call(null,this$__$1,new cljs.core.Keyword(null,"app","app",-560961707));
});
holdem_dealer.web.WebComponent.cljs$lang$type = true;
holdem_dealer.web.WebComponent.cljs$lang$ctorPrSeq = (function (this__4181__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"holdem-dealer.web/WebComponent");
});
holdem_dealer.web.WebComponent.cljs$lang$ctorPrWriter = (function (this__4181__auto__,writer__4182__auto__){return cljs.core._write.call(null,writer__4182__auto__,"holdem-dealer.web/WebComponent");
});
holdem_dealer.web.__GT_WebComponent = (function __GT_WebComponent(config,fpga,queue){return (new holdem_dealer.web.WebComponent(config,fpga,queue));
});
holdem_dealer.web.map__GT_WebComponent = (function map__GT_WebComponent(G__5075){return (new holdem_dealer.web.WebComponent(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(G__5075),new cljs.core.Keyword(null,"fpga","fpga",2082873291).cljs$core$IFn$_invoke$arity$1(G__5075),new cljs.core.Keyword(null,"queue","queue",1455835879).cljs$core$IFn$_invoke$arity$1(G__5075),null,cljs.core.dissoc.call(null,G__5075,new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"fpga","fpga",2082873291),new cljs.core.Keyword(null,"queue","queue",1455835879))));
});
holdem_dealer.web.new_web = (function new_web(){return holdem_dealer.web.map__GT_WebComponent.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

//# sourceMappingURL=web.js.map