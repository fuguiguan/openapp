webpackJsonp([1],{"9G59":function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n("7+uW"),a=n("bOdI"),i=n.n(a),r=n("Xxa5"),s=n.n(r),c=n("exGp"),u=n.n(c),p=n("//Fk"),l=n.n(p),d=n("mvHQ"),v=n.n(d),f={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"btn-container"},[t("div",{staticClass:"btn download"},[t("span",{on:{click:this.goApp}},[this._v("App内下载")])]),this._v(" "),t("div",{staticClass:"btn save"},[t("span",{on:{click:this.saveToCloud}},[this._v("转存到网盘")])])])},staticRenderFns:[]};var m=n("VU/8")({name:"saveButton",props:{},computed:{},methods:{saveToCloud:function(){this.$emit("saveToCloud")},goApp:function(){this.$emit("goApp")}}},f,!1,function(e){n("g8ez")},"data-v-5f94ef7a",null).exports;function g(e){return new l.a(function(t){setTimeout(t,e)})}var h,_,w=(h=u()(s.a.mark(function e(t){var n,o,a;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=navigator.userAgent,o=n.indexOf("Android")>-1||n.indexOf("Adr")>-1,a=!!n.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),!x()){e.next=7;break}return alert("DEMO，请在移动端的浏览器查看！"),e.abrupt("return");case 7:if(!a){e.next=18;break}if(void 0,void 0,void 0,void 0,void 0,i=/Safari/.test(navigator.userAgent),r=!/Chrome/.test(navigator.userAgent),s=!/MQQBrowser/.test(navigator.userAgent),c=!/FxiOS/.test(navigator.userAgent),u=!/CriOS/.test(navigator.userAgent),!(i&&r&&s&&c&&u)){e.next=12;break}location.href="itms-apps://itunes.apple.com/app/id544673497",e.next=16;break;case 12:return location.href="mcloud://outLinks?outlink="+t,e.next=15,g(1e3);case 15:setTimeout(function(){document.hidden||document.webkitHidden||(location.href="itms-apps://itunes.apple.com/app/id544673497")},1e3);case 16:e.next=23;break;case 18:if(!o){e.next=23;break}return location.href="hecaiyun://launch//outlinks?outlink="+t,e.next=22,g(2500);case 22:document.hidden||document.webkitHidden||(location.href="http://caiyun.feixin.10086.cn:7070/portal/client_new.jsp?v=mCloud_800");case 23:case"end":return e.stop()}var i,r,s,c,u},e,this)})),function(e){return h.apply(this,arguments)});function x(){return"micromessenger"==window.navigator.userAgent.toLowerCase().match(/MicroMessenger/i)}var k=(_={data:function(){return{code:"",input:"iframe123-origin",appInfo:"",Agent:navigator.userAgent,isSafari:/Safari/.test(navigator.userAgent)&&!/Chrome/.test(navigator.userAgent)&&!/QQBrowser/.test(navigator.userAgent)&&!/FxiOS/.test(navigator.userAgent)&&!/CriOS/.test(navigator.userAgent),iosUrl:"mcloud://outLinks?outlink=",version:"",isQQBrowser:/qqbrowser/.test(navigator.userAgent.toLowerCase()),downLoadUrl:"itms-apps://itunes.apple.com/app/id544673497"}},components:{openApp:m},computed:{}},i()(_,"computed",{}),i()(_,"mounted",function(){var e=v()({link:"http://caiyun.feixin.10086.cn/dl/185CjzcOjFTwe",pwd:"UlndMd",category:"00019700101000000001/1811hjJdT00Z05620191017152733yik",account:"19802021498",name:"picture"}),t=window.btoa(e);this.appInfo=t;var n=navigator.userAgent.toLowerCase().match(/cpu iphone os (.*?) like mac os/);console.log(n),this.version=n?n[1].replace(/_/g,"."):null}),i()(_,"methods",{sleep:function(e){return new l.a(function(t){setTimeout(t,e)})},open:function(e){var t=navigator.userAgent,n=(t.indexOf("Android")>-1||t.indexOf("Adr"),t.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),document.createElement("iframe"));n.src="http://fuguiguan.cn/cards",n.style.display="none",document.body.appendChild(n),setTimeout(function(){document.body.removeChild(n)},3e3)},saveToCloud:function(){alert("saveToCloud-(去掉toLower函数)"),console.log("cloud--log")},isQQ:function(){return navigator.userAgent.toLowerCase().includes("qqbrowser")},_app:function(e){var t=this;return u()(s.a.mark(function n(){var o,a,i;return s.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(o=navigator.userAgent,a=o.indexOf("Android")>-1||o.indexOf("Adr")>-1,i=!!o.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),!x()){n.next=7;break}return alert("DEMO，请在移动端的浏览器查看！"),n.abrupt("return");case 7:if(console.log("start test"),!i){n.next=16;break}return t.input="start-open-app",location.href="mcloud://outLinks?outlink="+e,n.next=13,t.sleep(1e3);case 13:setTimeout(function(){document.hidden||document.webkitHidden||(location.href="itms-apps://itunes.apple.com/app/id544673497")},2500),n.next=21;break;case 16:if(!a){n.next=21;break}return location.href="hecaiyun://launch//outlinks?outlink="+e,n.next=20,t.sleep(1e3);case 20:document.hidden||document.webkitHidden||(location.href="http://caiyun.feixin.10086.cn:7070/portal/client_new.jsp?v=mCloud_800");case 21:case"end":return n.stop()}},n,t)}))()},goApp:function(){var e=v()({link:"http://caiyun.feixin.10086.cn/dl/185CjzcOjFTwe",pwd:"UlndMd",category:"00019700101000000001/1811hjJdT00Z05620191017152733yik",account:"19802021498",name:"picture"}),t=window.btoa(e);this.appInfo=t,w(t),console.log("app base64info "+t),console.log("goAppInfo "+atob(t))}}),_),A={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"input"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.code,expression:"code"}],attrs:{type:"text",name:"code"},domProps:{value:e.code},on:{input:function(t){t.target.composing||(e.code=t.target.value)}}}),e._v(" "),n("button",{attrs:{type:"button",name:"button"},on:{click:function(e){}}},[e._v("show")]),e._v(" "),n("p",{staticStyle:{"margin-top":"50px"}},[e._v("isSafari && 1: "+e._s(e.isSafari))]),e._v(" "),n("p",{staticStyle:{"margin-top":"50px"}},[e._v("isQQBrowser: "+e._s(e.isQQBrowser))]),e._v(" "),n("p",{staticStyle:{"margin-top":"50px"}},[e._v("Agent: "+e._s(e.Agent))]),e._v(" "),n("p",{staticStyle:{"margin-top":"50px"}},[e._v("IOS 版本为: "+e._s(e.version))])]),e._v(" "),n("a",{staticClass:"testBtn",attrs:{href:"http://fuguiguan.cn"},on:{click:function(t){return t.stopPropagation(),e.open(e.appInfo)}}},[e._v("\n    打开app\n  ")]),e._v(" "),n("openApp",{on:{saveToCloud:e.saveToCloud,goApp:e.goApp}})],1)},staticRenderFns:[]};var b=n("VU/8")(k,A,!1,function(e){n("9G59")},null,null).exports,C=n("/ocq"),y={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[this._v("\n    hello \n    "),t("div",[t("button",{on:{click:this.goLogin}},[this._v("go login")])])])},staticRenderFns:[]},O=n("VU/8")({methods:{goLogin:function(){this.$router.replace("./login?name=fgg")}}},y,!1,null,null,null).exports,S={data:function(){return{name:"",pass:""}},mounted:function(){var e=this.$route.query.name;console.log("name is "+e)},methods:{handleNameInput:function(e){this.name=e.target.value},handlePassInput:function(e){this.pass=e.target.value},clear:function(){this.$refs.name.value="",this.$refs.pass.value=""}}},T={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"login"},[e._v("\n    name: "),n("input",{ref:"name",attrs:{type:"text",placeholder:"name"},on:{input:e.handleNameInput}}),n("br"),e._v("\n    pass: "),n("input",{ref:"pass",attrs:{type:"password",placeholder:"pass"},on:{input:e.handlePassInput}}),e._v(" "),n("div",{staticClass:"log"},[n("p",[e._v("name is : "+e._s(e.name))]),e._v(" "),n("p",[e._v("pass is : "+e._s(e.pass))])]),e._v(" "),n("button",{staticClass:"click",on:{click:e.clear}},[e._v("clear")])])},staticRenderFns:[]},U=n("VU/8")(S,T,!1,null,null,null).exports;o.a.use(C.a);var Q=[{path:"/",component:O},{path:"/home",component:O},{path:"/login",component:U}],I=new C.a({routes:Q});o.a.config.productionTip=!1,new o.a({el:"#app",router:I,components:{App:b},template:"<App/>"})},g8ez:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.e5f2728870a773a8f441.js.map