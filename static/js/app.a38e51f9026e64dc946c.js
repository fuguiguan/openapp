webpackJsonp([1],{EVSo:function(n,e){},NHnr:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=t("7+uW"),a=t("mvHQ"),i=t.n(a),s={render:function(){var n=this.$createElement,e=this._self._c||n;return e("div",{staticClass:"btn-container"},[e("div",{staticClass:"btn download"},[e("span",{on:{click:this.goApp}},[this._v("App内下载")])]),this._v(" "),e("div",{staticClass:"btn save"},[e("span",{on:{click:this.saveToCloud}},[this._v("转存到网盘")])])])},staticRenderFns:[]};var r=t("VU/8")({name:"saveButton",props:{},computed:{},methods:{saveToCloud:function(){this.$emit("saveToCloud")},goApp:function(){this.$emit("goApp")}}},s,!1,function(n){t("g8ez")},"data-v-5f94ef7a",null).exports;var c=navigator.userAgent.toLowerCase(),l=(c.indexOf("Android")>-1||c.indexOf("Adr"),c.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),""),u="";function p(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=navigator.userAgent,t=e.indexOf("Android")>-1||e.indexOf("Adr")>-1,o=!!e.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);"micromessenger"==window.navigator.userAgent.toLowerCase().match(/MicroMessenger/i)?alert("请点击右上角用浏览器查看！"):o?(u="mcloud://outlinks?outlink="+n,l="itms-apps://itunes.apple.com/app/id544673497"):t?(u="hecaiyun://launch/outlinks?outlink="+n,l="http://caiyun.feixin.10086.cn:7070/portal/client_new.jsp?v=mCloud_800"):alert("DEMO，请在移动端的浏览器查看！"),d(u)}var d=function(n){location.href=n,v(function(n){1===n&&(location.href=l)})},v=function(n){var e=+new Date,t=0,o=0;o=setInterval(function(){t++;var a=+new Date-e;(t>=125||a>5e3)&&(clearInterval(o),a>5e3||document.hidden||document.webkitHidden?n(0):n(1))},20)},h={data:function(){return{}},components:{openApp:r},methods:{saveToCloud:function(){alert("saveToCloud-(去掉toLower函数)"),console.log("cloud")},goApp:function(){var n=i()({link:"http://caiyun.feixin.10086.cn/dl/185CjzcOjFTwe",pwd:"UlndMd",category:"00019700101000000001/1811hjJdT00Z05620191017152733yik",account:"19802021498",name:"picture"});p(window.btoa(n)),console.log("app")}}},f={render:function(){var n=this.$createElement,e=this._self._c||n;return e("div",{attrs:{id:"app"}},[e("openApp",{on:{saveToCloud:this.saveToCloud,goApp:this.goApp}})],1)},staticRenderFns:[]};var m=t("VU/8")(h,f,!1,function(n){t("EVSo")},null,null).exports,g=t("/ocq"),_={render:function(){var n=this.$createElement,e=this._self._c||n;return e("div",[this._v("\n    hello \n    "),e("div",[e("button",{on:{click:this.goLogin}},[this._v("go login")])])])},staticRenderFns:[]},C=t("VU/8")({methods:{goLogin:function(){this.$router.replace("./login?name=fgg")}}},_,!1,null,null,null).exports,w={data:function(){return{name:"",pass:""}},mounted:function(){var n=this.$route.query.name;console.log("name is "+n)},methods:{handleNameInput:function(n){this.name=n.target.value},handlePassInput:function(n){this.pass=n.target.value},clear:function(){this.$refs.name.value="",this.$refs.pass.value=""}}},A={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"login"},[n._v("\n    name: "),t("input",{ref:"name",attrs:{type:"text",placeholder:"name"},on:{input:n.handleNameInput}}),t("br"),n._v("\n    pass: "),t("input",{ref:"pass",attrs:{type:"password",placeholder:"pass"},on:{input:n.handlePassInput}}),n._v(" "),t("div",{staticClass:"log"},[t("p",[n._v("name is : "+n._s(n.name))]),n._v(" "),t("p",[n._v("pass is : "+n._s(n.pass))])]),n._v(" "),t("button",{staticClass:"click",on:{click:n.clear}},[n._v("clear")])])},staticRenderFns:[]},k=t("VU/8")(w,A,!1,null,null,null).exports;o.a.use(g.a);var x=[{path:"/",component:C},{path:"/home",component:C},{path:"/login",component:k}],b=new g.a({routes:x});o.a.config.productionTip=!1,new o.a({el:"#app",router:b,components:{App:m},template:"<App/>"})},g8ez:function(n,e){}},["NHnr"]);
//# sourceMappingURL=app.a38e51f9026e64dc946c.js.map