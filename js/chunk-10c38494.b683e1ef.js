(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-10c38494"],{"4f3a":function(e,s,t){"use strict";t.r(s);var a=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"forget"},[t("header",[t("router-link",{attrs:{to:"/info"}},[t("i",{staticClass:"el-icon-arrow-left"})]),t("span",[e._v("重置密码")])],1),t("section",[t("div",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],attrs:{type:"text",placeholder:"账号"},domProps:{value:e.username},on:{input:function(s){s.target.composing||(e.username=s.target.value)}}})]),t("div",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.oldpassWord,expression:"oldpassWord"}],attrs:{type:"text",placeholder:"旧密码"},domProps:{value:e.oldpassWord},on:{input:function(s){s.target.composing||(e.oldpassWord=s.target.value)}}})]),t("div",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.newpassword,expression:"newpassword"}],attrs:{type:"text",placeholder:"请输入新密码"},domProps:{value:e.newpassword},on:{input:function(s){s.target.composing||(e.newpassword=s.target.value)}}})]),t("div",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.confirmpassword,expression:"confirmpassword"}],attrs:{type:"text",placeholder:"请确认密码"},domProps:{value:e.confirmpassword},on:{input:function(s){s.target.composing||(e.confirmpassword=s.target.value)}}})]),t("div",{staticClass:"input_c"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.captcha_code,expression:"captcha_code"}],attrs:{type:"text",placeholder:"验证码"},domProps:{value:e.captcha_code},on:{input:function(s){s.target.composing||(e.captcha_code=s.target.value)}}}),t("div",[t("img",{attrs:{src:e.capUrl}}),t("div",[t("p",[e._v("看不清")]),t("p",{on:{click:e.changeCode}},[e._v("换一张")])])])])]),t("div",{staticClass:"change",on:{click:e.changepassword}},[e._v("确认修改")]),e.isShow?t("div",{staticClass:"yinying"}):e._e(),e.isShow?t("div",{staticClass:"changeS"},[e._m(0),t("p",[e._v(e._s(e.p))]),t("div",{on:{click:function(s){e.isShow=!e.isShow}}},[e._v("确认")])]):e._e()])},o=[function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("p",[t("i",{staticClass:"el-icon-warning-outline"})])}],n={name:"Forget",data:function(){return{username:"",oldpassWord:"",newpassword:"",confirmpassword:"",captcha_code:"",capUrl:"",p:"",isShow:!1}},created:function(){this.requestCode()},methods:{changepassword:function(){var e=this;this.axios.post("/v2/changepassword",{username:this.username,oldpassWord:this.oldpassWord,newpassword:this.newpassword,confirmpassword:this.confirmpassword,captcha_code:this.captcha_code}).then((function(s){console.log(s),s.success?e.p=s.success:e.p=s.message,e.isShow=!e.isShow})).catch((function(e){}))},changeCode:function(){this.requestCode()},requestCode:function(){var e=this;this.axios.post("/v1/captchas").then((function(s){e.capUrl=s.code})).catch((function(e){}))}}},i=n,c=(t("84df"),t("2877")),r=Object(c["a"])(i,a,o,!1,null,"10d5b940",null);s["default"]=r.exports},"84df":function(e,s,t){"use strict";var a=t("f1fd"),o=t.n(a);o.a},f1fd:function(e,s,t){}}]);
//# sourceMappingURL=chunk-10c38494.b683e1ef.js.map