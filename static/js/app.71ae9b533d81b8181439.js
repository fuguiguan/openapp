webpackJsonp([1],{NHnr:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=e("7+uW"),a=e("Xxa5"),i=e.n(a),s=e("exGp"),r=e.n(s),c=e("//Fk"),u=e.n(c),p=e("mvHQ"),l=e.n(p),d={render:function(){var n=this.$createElement,t=this._self._c||n;return t("div",{staticClass:"btn-container"},[t("div",{staticClass:"btn download"},[t("span",{on:{click:this.goApp}},[this._v("App内下载")])]),this._v(" "),t("div",{staticClass:"btn save"},[t("span",{on:{click:this.saveToCloud}},[this._v("转存到网盘")])])])},staticRenderFns:[]};var f=e("VU/8")({name:"saveButton",props:{},computed:{},methods:{saveToCloud:function(){this.$emit("saveToCloud")},goApp:function(){this.$emit("goApp")}}},d,!1,function(n){e("g8ez")},"data-v-5f94ef7a",null).exports;function m(n){return new u.a(function(t){setTimeout(t,n)})}var h;h=r()(i.a.mark(function n(t){var e,o,a;return i.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(e=navigator.userAgent,o=e.indexOf("Android")>-1||e.indexOf("Adr")>-1,a=!!e.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),!v()){n.next=7;break}return alert("DEMO，请在移动端的浏览器查看！"),n.abrupt("return");case 7:if(!a){n.next=14;break}return location.href="mcloud://outLinks?outlink="+t,n.next=11,m(2500);case 11:setTimeout(function(){document.hidden||document.webkitHidden||(location.href="itms-apps://itunes.apple.com/app/id544673497")},2500),n.next=19;break;case 14:if(!o){n.next=19;break}return location.href="hecaiyun://launch//outlinks?outlink="+t,n.next=18,m(2500);case 18:document.hidden||document.webkitHidden||(location.href="http://caiyun.feixin.10086.cn:7070/portal/client_new.jsp?v=mCloud_800");case 19:case"end":return n.stop()}},n,this)}));function v(){return"micromessenger"==window.navigator.userAgent.toLowerCase().match(/MicroMessenger/i)}e("Rp5f");var g={data:function(){return{code:"",input:"iframe123",appInfo:"",iosUrl:"mcloud://outLinks?outlink="}},components:{openApp:f},computed:{},mounted:function(){var n=l()({link:"http://caiyun.feixin.10086.cn/dl/185CjzcOjFTwe",pwd:"UlndMd",category:"00019700101000000001/1811hjJdT00Z05620191017152733yik",account:"19802021498",name:"picture"}),t=window.btoa(n);this.appInfo=t},methods:{sleep:function(n){return new u.a(function(t){setTimeout(t,n)})},test:function(n){var t=this;return r()(i.a.mark(function e(){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("open app1"),e.next=3,t.sleep(2500);case 3:location.href="http://fuguiguan.cn?outlink="+n,setTimeout(function(){console.log("end app1")},3e3);case 5:case"end":return e.stop()}},e,t)}))()},open:function(n){var t=navigator.userAgent;t.indexOf("Android")>-1||t.indexOf("Adr");!!t.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)?(location.href="mcloud://outLinks?outlink="+n,setTimeout(function(){location.href="itms-apps://itunes.apple.com/app/id544673497"},250),setTimeout(function(){location.reload()},1e3)):alert("not ios")},show:function(){this.input=this.code.replace(/\s+/g,"")},saveToCloud:function(){alert("saveToCloud-(去掉toLower函数)"),console.log("cloud--log")},isQQ:function(){return navigator.userAgent.toLowerCase().includes("qqbrowser")},_app:function(n){var t=this;return r()(i.a.mark(function e(){var o,a,s;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(o=navigator.userAgent,a=o.indexOf("Android")>-1||o.indexOf("Adr")>-1,s=!!o.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),!v()){e.next=7;break}return alert("DEMO，请在移动端的浏览器查看！"),e.abrupt("return");case 7:if(console.log("start test"),!s){e.next=16;break}return t.input="start-open-app",location.href="mcloud://outLinks?outlink="+n,e.next=13,t.sleep(2500);case 13:setTimeout(function(){document.hidden||document.webkitHidden||(location.href="itms-apps://itunes.apple.com/app/id544673497")},2500),e.next=21;break;case 16:if(!a){e.next=21;break}return location.href="hecaiyun://launch//outlinks?outlink="+n,e.next=20,sleep(2500);case 20:document.hidden||document.webkitHidden||(location.href="http://caiyun.feixin.10086.cn:7070/portal/client_new.jsp?v=mCloud_800");case 21:case"end":return e.stop()}},e,t)}))()},goApp:function(){var n=l()({link:"http://caiyun.feixin.10086.cn/dl/185CjzcOjFTwe",pwd:"UlndMd",category:"00019700101000000001/1811hjJdT00Z05620191017152733yik",account:"19802021498",name:"picture"}),t=window.btoa(n);this.appInfo=t,this._app(t),console.log("app base64info "+t),console.log("goAppInfo "+atob(t))}}},k={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{attrs:{id:"app"}},[e("div",{staticClass:"input"},[e("input",{directives:[{name:"model",rawName:"v-model",value:n.code,expression:"code"}],attrs:{type:"text",name:"code"},domProps:{value:n.code},on:{input:function(t){t.target.composing||(n.code=t.target.value)}}}),n._v(" "),e("button",{attrs:{type:"button",name:"button"},on:{click:n.show}},[n._v("show")]),n._v(" "),e("p",{staticStyle:{"margin-top":"50px"}},[n._v("input: "+n._s(n.input))])]),n._v(" "),e("a",{staticClass:"testBtn",attrs:{href:"itms-apps://itunes.apple.com/app/id544673497"},on:{click:function(t){return n.open(n.appInfo)}}},[n._v("\n    打开app\n  ")]),n._v(" "),e("openApp",{on:{saveToCloud:n.saveToCloud,goApp:n.goApp}})],1)},staticRenderFns:[]};var _=e("VU/8")(g,k,!1,function(n){e("hM6Q")},null,null).exports,w=e("/ocq"),x={render:function(){var n=this.$createElement,t=this._self._c||n;return t("div",[this._v("\n    hello \n    "),t("div",[t("button",{on:{click:this.goLogin}},[this._v("go login")])])])},staticRenderFns:[]},b=e("VU/8")({methods:{goLogin:function(){this.$router.replace("./login?name=fgg")}}},x,!1,null,null,null).exports,C={data:function(){return{name:"",pass:""}},mounted:function(){var n=this.$route.query.name;console.log("name is "+n)},methods:{handleNameInput:function(n){this.name=n.target.value},handlePassInput:function(n){this.pass=n.target.value},clear:function(){this.$refs.name.value="",this.$refs.pass.value=""}}},A={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"login"},[n._v("\n    name: "),e("input",{ref:"name",attrs:{type:"text",placeholder:"name"},on:{input:n.handleNameInput}}),e("br"),n._v("\n    pass: "),e("input",{ref:"pass",attrs:{type:"password",placeholder:"pass"},on:{input:n.handlePassInput}}),n._v(" "),e("div",{staticClass:"log"},[e("p",[n._v("name is : "+n._s(n.name))]),n._v(" "),e("p",[n._v("pass is : "+n._s(n.pass))])]),n._v(" "),e("button",{staticClass:"click",on:{click:n.clear}},[n._v("clear")])])},staticRenderFns:[]},T=e("VU/8")(C,A,!1,null,null,null).exports;o.a.use(w.a);var y=[{path:"/",component:b},{path:"/home",component:b},{path:"/login",component:T}],O=new w.a({routes:y});o.a.config.productionTip=!1,new o.a({el:"#app",router:O,components:{App:_},template:"<App/>"})},g8ez:function(n,t){},hM6Q:function(n,t){}},["NHnr"]);
//# sourceMappingURL=app.71ae9b533d81b8181439.js.map