(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-51ffe0c8"],{"138f":function(e,t,s){"use strict";var a=s("f0bf"),i=s.n(a);i.a},"2d3d":function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"addAddress"},[e._m(0),s("section",[s("div",{staticClass:"s1"},[s("span",[e._v("联系人")]),s("div",{staticClass:"s11"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{type:"text",placeholder:"你的名字"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}}),s("div",{staticClass:"s12"},[s("span",[s("i",{staticClass:"el-icon-success",style:{color:1==e.sex?"#4cd964":"#ccc"},on:{click:function(t){e.sex=1}}}),s("span",[e._v("先生")])]),s("span",[s("i",{staticClass:"el-icon-success",style:{color:2==e.sex?"#4cd964":"#ccc"},on:{click:function(t){e.sex=2}}}),s("span",[e._v("女士")])])])])]),s("div",{staticClass:"s2"},[s("span",[e._v("联系电话")]),s("div",{staticClass:"s21"},[s("div",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.phone,expression:"phone"}],attrs:{type:"text",placeholder:"你的手机号"},domProps:{value:e.phone},on:{input:function(t){t.target.composing||(e.phone=t.target.value)}}}),s("i",{staticClass:"el-icon-plus",on:{click:function(t){e.isShow=!0}}})]),e.isShow?s("input",{directives:[{name:"model",rawName:"v-model",value:e.phone_bk,expression:"phone_bk"}],attrs:{type:"text",placeholder:"备选电话"},domProps:{value:e.phone_bk},on:{input:function(t){t.target.composing||(e.phone_bk=t.target.value)}}}):e._e()])]),s("div",{staticClass:"s3"},[s("span",[e._v("送餐地址")]),s("div",{staticClass:"s31"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.address,expression:"address"}],attrs:{type:"text",placeholder:"小区/写字楼/学校等"},domProps:{value:e.address},on:{click:e.toAddDetail,input:function(t){t.target.composing||(e.address=t.target.value)}}}),s("input",{directives:[{name:"model",rawName:"v-model",value:e.address_detail,expression:"address_detail"}],attrs:{type:"text",placeholder:"详细地址（如门牌号等）"},domProps:{value:e.address_detail},on:{input:function(t){t.target.composing||(e.address_detail=t.target.value)}}})])]),s("div",{staticClass:"s4"},[s("span",[e._v("标签")]),s("div",{staticClass:"s41"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.tags,expression:"tags"}],attrs:{type:"text",placeholder:"无/家/学校/公司"},domProps:{value:e.tags},on:{input:function(t){t.target.composing||(e.tags=t.target.value)}}})])])]),s("div",{staticClass:"addAdd",on:{click:e.addAdd}},[e._v("确定")])])},i=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("header",[s("a",{staticClass:"h_a_1",attrs:{href:"javascript:history.back(-1)"}},[s("i",{staticClass:"el-icon-arrow-left"})]),s("span",[e._v("添加地址")])])}],n=(s("b0c0"),{name:"AddAddress",data:function(){return{isShow:!1,sex:1,input:[],addressS:[],user_id:"",address:"",address_detail:"",geohash:"",name:"",phone:"",tags:"",tag:"null",tag_type:"",phone_bk:""}},created:function(){this.user_id=localStorage.getItem("user_id"),localStorage.getItem("address")&&(this.addressS=JSON.parse(localStorage.getItem("address")),this.address=this.addressS.name,this.geohash=this.addressS.geohash),localStorage.getItem("input")&&(this.input=JSON.parse(localStorage.getItem("input"))[0],this.name=this.input.name,this.sex=this.input.sex,this.address_detail=this.input.address_detail,this.phone=this.input.phone,this.phone_bk=this.input.phone_bk,this.tag_type=this.input.tag_type,localStorage.removeItem("input"))},methods:{addAdd:function(){var e=this;switch(this.tags){case"家":this.tag_type=2;break;case"学校":this.tag_type=3;break;case"公司":this.tag_type=4;break}this.address!=[]&&""!=this.address_detail&&""!=this.name&&""!=this.phone&&this.axios.post("/v1/users/"+this.user_id+"/addresses",{user_id:this.user_id,address:this.address,address_detail:this.address_detail,geohash:this.geohash,name:this.name,phone:this.phone,tag:this.tag,sex:this.sex,phone_bk:this.phone_bk,tag_type:this.tag_type}).then((function(t){"地址信息错误"!=t.message&&(e.$router.go(-1),localStorage.removeItem("address"))})).catch((function(e){}))},toAddDetail:function(){this.$router.push({path:"/addDetail",query:{name:this.address}});var e=[];e.push({name:this.name,sex:this.sex,tag_type:this.tag_type,address_detail:this.address_detail,phone:this.phone,phone_bk:this.phone_bk}),localStorage.setItem("input",JSON.stringify(e))}}}),o=n,d=(s("138f"),s("2877")),r=Object(d["a"])(o,a,i,!1,null,"36656a36",null);t["default"]=r.exports},b0c0:function(e,t,s){var a=s("83ab"),i=s("9bf2").f,n=Function.prototype,o=n.toString,d=/^\s*function ([^ (]*)/,r="name";a&&!(r in n)&&i(n,r,{configurable:!0,get:function(){try{return o.call(this).match(d)[1]}catch(e){return""}}})},f0bf:function(e,t,s){}}]);
//# sourceMappingURL=chunk-51ffe0c8.e85f1337.js.map