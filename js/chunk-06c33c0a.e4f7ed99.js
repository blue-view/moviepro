(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-06c33c0a"],{"2cf3":function(t,n,i){"use strict";i.r(n);var e=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"city"},[i("div",{staticClass:"nav"},[i("span",{staticClass:"nav-link",on:{click:t.go}},[t._v("<")]),i("span",{staticClass:"nav-city"},[t._v("选择城市")])]),i("div",{staticClass:"city-list"},[i("van-list",{attrs:{finished:t.finished,"finished-text":""},on:{load:t.onLoad},model:{value:t.loading,callback:function(n){t.loading=n},expression:"loading"}},t._l(t.cities,function(n,e){return i("div",{directives:[{name:"show",rawName:"v-show",value:0!=n.length,expression:"item.length==0?false:true"}],key:e},[i("div",{staticClass:"letter"},[t._v(t._s(e))]),t._l(n,function(n,e){return i("div",{key:e,staticClass:"letter-city"},[i("router-link",{attrs:{to:{path:n.path,query:{city:n.name}}}},[t._v(t._s(n.name))])],1)})],2)}),0)],1)])},a=[],s=(i("673e"),i("7f7f"),i("5081")),c=i("ad5c"),o=i("2b0e"),l={name:"city",data:function(){return{cities:{},list:[],loading:!1,finished:!0,value:""}},methods:{onSearch:function(){},onCancel:function(){},onLoad:function(){},go:function(){this.$router.go(-1)}},created:function(){for(var t=this,n=o["a"].localStorage.get("path"),i="ABCDEFGHIJKLMNOPQRSTUVWXYZ",e=0;e<i.length;e++)this.cities[i[e]]=[];s.map(function(i){i.name==t.$route.query.city&&i.sub.map(function(i){var e=Object(c["a"])(i.name)[0].substring(0,1);for(var a in t.cities)a===e&&(i.path=n,t.cities[a].push(i))})})}},r=l,u=(i("ee52"),i("2877")),f=Object(u["a"])(r,e,a,!1,null,"71b7146a",null);n["default"]=f.exports},"34e1":function(t,n,i){},ee52:function(t,n,i){"use strict";var e=i("34e1"),a=i.n(e);a.a}}]);
//# sourceMappingURL=chunk-06c33c0a.e4f7ed99.js.map