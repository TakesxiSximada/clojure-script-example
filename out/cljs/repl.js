// Compiled by ClojureScript 1.9.473 {:target :nodejs}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__1597){
var map__1622 = p__1597;
var map__1622__$1 = ((((!((map__1622 == null)))?((((map__1622.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1622.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1622):map__1622);
var m = map__1622__$1;
var n = cljs.core.get.call(null,map__1622__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__1622__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/")].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__1624_1646 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__1625_1647 = null;
var count__1626_1648 = (0);
var i__1627_1649 = (0);
while(true){
if((i__1627_1649 < count__1626_1648)){
var f_1650 = cljs.core._nth.call(null,chunk__1625_1647,i__1627_1649);
cljs.core.println.call(null,"  ",f_1650);

var G__1651 = seq__1624_1646;
var G__1652 = chunk__1625_1647;
var G__1653 = count__1626_1648;
var G__1654 = (i__1627_1649 + (1));
seq__1624_1646 = G__1651;
chunk__1625_1647 = G__1652;
count__1626_1648 = G__1653;
i__1627_1649 = G__1654;
continue;
} else {
var temp__4657__auto___1655 = cljs.core.seq.call(null,seq__1624_1646);
if(temp__4657__auto___1655){
var seq__1624_1656__$1 = temp__4657__auto___1655;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1624_1656__$1)){
var c__3830__auto___1657 = cljs.core.chunk_first.call(null,seq__1624_1656__$1);
var G__1658 = cljs.core.chunk_rest.call(null,seq__1624_1656__$1);
var G__1659 = c__3830__auto___1657;
var G__1660 = cljs.core.count.call(null,c__3830__auto___1657);
var G__1661 = (0);
seq__1624_1646 = G__1658;
chunk__1625_1647 = G__1659;
count__1626_1648 = G__1660;
i__1627_1649 = G__1661;
continue;
} else {
var f_1662 = cljs.core.first.call(null,seq__1624_1656__$1);
cljs.core.println.call(null,"  ",f_1662);

var G__1663 = cljs.core.next.call(null,seq__1624_1656__$1);
var G__1664 = null;
var G__1665 = (0);
var G__1666 = (0);
seq__1624_1646 = G__1663;
chunk__1625_1647 = G__1664;
count__1626_1648 = G__1665;
i__1627_1649 = G__1666;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_1667 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3443__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3443__auto__)){
return or__3443__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_1667);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_1667)))?cljs.core.second.call(null,arglists_1667):arglists_1667));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n  Please see http://clojure.org/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n  Please see http://clojure.org/special_forms#"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__1628_1668 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__1629_1669 = null;
var count__1630_1670 = (0);
var i__1631_1671 = (0);
while(true){
if((i__1631_1671 < count__1630_1670)){
var vec__1632_1672 = cljs.core._nth.call(null,chunk__1629_1669,i__1631_1671);
var name_1673 = cljs.core.nth.call(null,vec__1632_1672,(0),null);
var map__1635_1674 = cljs.core.nth.call(null,vec__1632_1672,(1),null);
var map__1635_1675__$1 = ((((!((map__1635_1674 == null)))?((((map__1635_1674.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1635_1674.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1635_1674):map__1635_1674);
var doc_1676 = cljs.core.get.call(null,map__1635_1675__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_1677 = cljs.core.get.call(null,map__1635_1675__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_1673);

cljs.core.println.call(null," ",arglists_1677);

if(cljs.core.truth_(doc_1676)){
cljs.core.println.call(null," ",doc_1676);
} else {
}

var G__1678 = seq__1628_1668;
var G__1679 = chunk__1629_1669;
var G__1680 = count__1630_1670;
var G__1681 = (i__1631_1671 + (1));
seq__1628_1668 = G__1678;
chunk__1629_1669 = G__1679;
count__1630_1670 = G__1680;
i__1631_1671 = G__1681;
continue;
} else {
var temp__4657__auto___1682 = cljs.core.seq.call(null,seq__1628_1668);
if(temp__4657__auto___1682){
var seq__1628_1683__$1 = temp__4657__auto___1682;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1628_1683__$1)){
var c__3830__auto___1684 = cljs.core.chunk_first.call(null,seq__1628_1683__$1);
var G__1685 = cljs.core.chunk_rest.call(null,seq__1628_1683__$1);
var G__1686 = c__3830__auto___1684;
var G__1687 = cljs.core.count.call(null,c__3830__auto___1684);
var G__1688 = (0);
seq__1628_1668 = G__1685;
chunk__1629_1669 = G__1686;
count__1630_1670 = G__1687;
i__1631_1671 = G__1688;
continue;
} else {
var vec__1637_1689 = cljs.core.first.call(null,seq__1628_1683__$1);
var name_1690 = cljs.core.nth.call(null,vec__1637_1689,(0),null);
var map__1640_1691 = cljs.core.nth.call(null,vec__1637_1689,(1),null);
var map__1640_1692__$1 = ((((!((map__1640_1691 == null)))?((((map__1640_1691.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1640_1691.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1640_1691):map__1640_1691);
var doc_1693 = cljs.core.get.call(null,map__1640_1692__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_1694 = cljs.core.get.call(null,map__1640_1692__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_1690);

cljs.core.println.call(null," ",arglists_1694);

if(cljs.core.truth_(doc_1693)){
cljs.core.println.call(null," ",doc_1693);
} else {
}

var G__1695 = cljs.core.next.call(null,seq__1628_1683__$1);
var G__1696 = null;
var G__1697 = (0);
var G__1698 = (0);
seq__1628_1668 = G__1695;
chunk__1629_1669 = G__1696;
count__1630_1670 = G__1697;
i__1631_1671 = G__1698;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__1642 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__1643 = null;
var count__1644 = (0);
var i__1645 = (0);
while(true){
if((i__1645 < count__1644)){
var role = cljs.core._nth.call(null,chunk__1643,i__1645);
var temp__4657__auto___1699__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___1699__$1)){
var spec_1700 = temp__4657__auto___1699__$1;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.describe.call(null,spec_1700));
} else {
}

var G__1701 = seq__1642;
var G__1702 = chunk__1643;
var G__1703 = count__1644;
var G__1704 = (i__1645 + (1));
seq__1642 = G__1701;
chunk__1643 = G__1702;
count__1644 = G__1703;
i__1645 = G__1704;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__1642);
if(temp__4657__auto____$1){
var seq__1642__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1642__$1)){
var c__3830__auto__ = cljs.core.chunk_first.call(null,seq__1642__$1);
var G__1705 = cljs.core.chunk_rest.call(null,seq__1642__$1);
var G__1706 = c__3830__auto__;
var G__1707 = cljs.core.count.call(null,c__3830__auto__);
var G__1708 = (0);
seq__1642 = G__1705;
chunk__1643 = G__1706;
count__1644 = G__1707;
i__1645 = G__1708;
continue;
} else {
var role = cljs.core.first.call(null,seq__1642__$1);
var temp__4657__auto___1709__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___1709__$2)){
var spec_1710 = temp__4657__auto___1709__$2;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.describe.call(null,spec_1710));
} else {
}

var G__1711 = cljs.core.next.call(null,seq__1642__$1);
var G__1712 = null;
var G__1713 = (0);
var G__1714 = (0);
seq__1642 = G__1711;
chunk__1643 = G__1712;
count__1644 = G__1713;
i__1645 = G__1714;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map