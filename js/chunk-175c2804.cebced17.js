(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-175c2804"],{2469:function(t,s,i){"use strict";i.r(s);var a=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"info"},[i("header",[i("router-link",{attrs:{to:"profile"}},[i("i",{staticClass:"el-icon-arrow-left"})]),i("span",[t._v("账户信息")])],1),i("section",{staticClass:"s1"},[t._m(0),i("router-link",{attrs:{to:""}},[i("div",[i("h2",[t._v("用户名")]),i("p",[t._v(t._s(t.user.username))]),i("i",{staticClass:"el-icon-arrow-right"})])]),i("router-link",{attrs:{to:"/address"}},[i("div",[i("h2",[t._v("收货地址")]),i("i",{staticClass:"el-icon-arrow-right"})])])],1),i("section",{staticClass:"s2"},[i("p",[t._v("账号绑定")]),i("router-link",{attrs:{to:""}},[i("div",[i("i",{staticClass:"el-icon-mobile-phone"}),t._v("手机")]),i("i",{staticClass:"el-icon-arrow-right s21"})])],1),i("section",{staticClass:"s3"},[i("p",[t._v("安全设置")]),i("router-link",{attrs:{to:"/forget"}},[i("div",[t._v("登录密码")]),i("span",[t._v("修改")]),i("i",{staticClass:"el-icon-arrow-right s31"})])],1),i("section",{staticClass:"btn",on:{click:function(s){t.isShow=!t.isShow}}},[t._v("注销登录")]),t.isShow?i("section",{staticClass:"ss"},[i("div",{staticClass:"ss1"}),i("div",{staticClass:"s4"},[t._m(1),i("p",[t._v("是否退出登录")]),i("div",{staticClass:"s42"},[i("button",{staticClass:"btn1",on:{click:function(s){t.isShow=!t.isShow}}},[t._v("再等等")]),i("button",{staticClass:"btn2",on:{click:t.Cancellation}},[t._v("退出登录")])])])]):t._e()])},n=[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",[i("h2",[t._v("头像")]),i("img",{staticClass:"img",attrs:{src:"https://elm.cangdu.org/img/default.jpg"}}),i("i",{staticClass:"el-icon-arrow-right"})])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"s41"},[i("i",{staticClass:"el-icon-warning-outline"})])}],o={name:"Info",data:function(){return{user:[],isShow:!1}},created:function(){var t=this;this.axios.get("/v1/user").then((function(s){console.log(s),t.user=s})).then((function(t){}))},methods:{Cancellation:function(){localStorage.removeItem("user_id"),localStorage.removeItem("user"),this.axios.get("/v2/signout").then((function(t){console.log(t),localStorage.removeItem("shops")})).catch((function(t){})),this.$router.go(-1)}}},e=o,c=(i("aad3"),i("2877")),r=Object(c["a"])(e,a,n,!1,null,"d46a3c46",null);s["default"]=r.exports},aad3:function(t,s,i){"use strict";var a=i("b91c"),n=i.n(a);n.a},b91c:function(t,s,i){}}]);
//# sourceMappingURL=chunk-175c2804.cebced17.js.map