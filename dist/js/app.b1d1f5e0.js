(function(t){function e(e){for(var n,s,r=e[0],c=e[1],l=e[2],d=0,p=[];d<r.length;d++)s=r[d],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&p.push(a[s][0]),a[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(p.length)p.shift()();return o.push.apply(o,l||[]),i()}function i(){for(var t,e=0;e<o.length;e++){for(var i=o[e],n=!0,r=1;r<i.length;r++){var c=i[r];0!==a[c]&&(n=!1)}n&&(o.splice(e--,1),t=s(s.s=i[0]))}return t}var n={},a={app:0},o=[];function s(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,s),i.l=!0,i.exports}s.m=t,s.c=n,s.d=function(t,e,i){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(i,n,function(e){return t[e]}.bind(null,n));return i},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/FE-Dev-Exercise/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=c;o.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"1e83":function(t,e,i){"use strict";var n=i("c812"),a=i.n(n);a.a},"3bac":function(t,e,i){"use strict";var n=i("d470"),a=i.n(n);a.a},"3e86":function(t,e,i){},"56d7":function(t,e,i){"use strict";i.r(e);i("cadf"),i("551c"),i("f751"),i("097d");var n=i("2b0e"),a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"app",attrs:{id:"app"}},[!t.onTop&&t.showNotif?i("div",{staticClass:"bumper"}):t._e(),t.showNotif?i("notif-panel",{style:t.styleNotif,on:{close:function(e){t.showNotif=!1}}},[t._v("`")]):t._e(),i("app-header",{attrs:{name:t.fullname}}),i("highlight-panel"),i("app-footer",{attrs:{name:t.fullname}}),t.showModal?i("newsletter-panel",{attrs:{expiredTime:t.expiredTime,newsletterToggle:t.newsletterToggle},on:{"update:expiredTime":function(e){t.expiredTime=e},"update:expired-time":function(e){t.expiredTime=e},"update:newsletterToggle":function(e){t.newsletterToggle=e},"update:newsletter-toggle":function(e){t.newsletterToggle=e},close:function(e){t.showModal=!1}}}):t._e()],1)},o=[],s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("transition",{attrs:{name:"slide",mode:"out-in"}},[i("div",{staticClass:"background-component"},[i("div",{staticClass:"flex-center content"},[i("div",{staticClass:"flex-center content-text"},[t._v("\n        By accessing and using this website, you acknowledge that you have read and\n        understand our\n        "),i("span",{staticClass:"blue-text"},[t._v("Cookie Policy")]),t._v(",\n        "),i("span",{staticClass:"blue-text"},[t._v("Privacy Policy")]),t._v(", and our\n        "),i("span",{staticClass:"blue-text"},[t._v("Terms of Service")])]),i("div",[i("button",{staticClass:"button-notif",on:{click:function(e){return t.$emit("close")}}},[t._v("Got it")])])])])])},r=[],c={},l=c,u=(i("1e83"),i("2877")),d=Object(u["a"])(l,s,r,!1,null,"4070b8da",null),p=d.exports,f=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"background-component"},[i("div",{staticClass:"layer"},[i("div",{staticClass:"container"},[t._m(0),i("div",{staticClass:"hero-shot"},[i("div",{staticClass:"hero-shot-title"},[i("span",[t._v("Hello! I'm "+t._s(t.name))])]),t._m(1),t._m(2),t._m(3)]),i("div",{staticClass:"bumper"})])])])},h=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"logo"},[n("img",{staticStyle:{width:"50px",height:"auto"},attrs:{src:i("e06f"),alt:""}})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"hero-shot-subtitle"},[i("span",[t._v("Consult, Design, and Develop Websites")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"hero-shot-description"},[i("span",[t._v("\n            Have something great in mind? Feel free to contact me.\n            I'll help you to make it happen.\n          ")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"hero-shot-button"},[i("button",{staticClass:"button-contact"},[t._v("LET'S MAKE CONTACT")])])}],m={props:["name"],data:function(){return{}}},v=m,g=(i("8c4e"),Object(u["a"])(v,f,h,!1,null,"1d6b816b",null)),b=g.exports,w=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"background-component"},[i("div",{staticClass:"highlight-title"},[t._v("How Can I Help You?")]),i("div",{staticClass:"highlight-description"},[t._v("\n    Our work then targeted, best practices outcomes social innovation synergy.\n    Venture philanthropy, revolutionary inclusive policymaker relief. User-centered\n    program areas scale.\n  ")]),i("div",{staticClass:"highlight-content"},t._l(t.datas,(function(t,e){return i("highlight-card",{key:e,attrs:{title:t.title,icon:t.icon,description:t.description}})})),1)])},_=[],y=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"background-component-child"},[i("div",{staticClass:"first-row"},[i("div",{staticClass:"card-title"},[t._v(t._s(t.title))]),i("div",{staticClass:"card-icon"},[i("i",{staticClass:"fa-lg",class:t.icon})])]),i("div",{staticClass:"card-description"},[t._v(t._s(t.description))])])},C=[],x={props:["title","icon","description"],data:function(){return{}}},T=x,k=(i("c5ef"),Object(u["a"])(T,y,C,!1,null,"5b6b0366",null)),j=k.exports,O={components:{"highlight-card":j},data:function(){return{datas:[{title:"Consult",icon:"fa fa-comments-o",description:"Co-create, design thinking; strengthen infrastructure resist granular. Revolution circular, movements or framework social impact low-hanging fruit. Save the world compelling revolutionary progress."},{title:"Design",icon:"fa fa-paint-brush",description:"Policymaker collaborates collective impact humanitarian shared value vocabulary inspire issue outcomes agile. Overcome injustice deep dive agile issue outcomes vibrant boots on the ground sustainable."},{title:"Develop",icon:"fa fa-cubes",description:"Revolutionary circular, movements a or impact framework social impact low-hanging. Save the compelling revolutionary inspire progress. Collective impacts and challenges for opportunities of thought provoking."},{title:"Marketing",icon:"fa fa-bullhorn",description:"Peaceful; vibrant paradigm, collaborative cities. Shared vocabulary agile, replicable, effective altruism youth. Mobilize commitment to overcome injustice resilient, uplift social transparent effective."},{title:"Manage",icon:"fa fa-bars",description:"Change-makers innovation or shared unit of analysis. Overcome injustice outcomes strategize vibrant boots on the ground sustainable. Optimism, effective altruism invest optimism corporate social."},{title:"Evolve",icon:"fa fa-line-chart",description:"Activate catalyze and impact contextualize humanitarian. Unit of analysis overcome injustice storytelling altruism. Thought leadership mass incarceration. Outcomes big data, fairness, social game-changer."}]}}},E=O,S=(i("3bac"),Object(u["a"])(E,w,_,!1,null,"aad92882",null)),$=S.exports,M=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"background-component"},[t._v("\n    © 2019 "+t._s(t.name)+". All rights reserved. \n")])},P=[],N={props:["name"],data:function(){return{}}},D=N,z=(i("923d"),Object(u["a"])(D,M,P,!1,null,"61bc3dad",null)),H=z.exports,I=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("transition",{attrs:{name:"slide-fade"}},[i("div",{staticClass:"modal-mask"},[i("div",{staticClass:"modal-wrapper"},[i("div",{staticClass:"modal-container"},[i("div",{staticClass:"modal-close"},[t._t("close",[i("span",{staticClass:"exit-icon",on:{click:t.closeModal}},[t._v("x")])])],2),i("div",{staticClass:"content-container"},[i("div",{staticClass:"modal-header"},[t._t("header",[i("span",{staticClass:"modal-header-content"},[t._v("Get latest updates in web technologies")])])],2),i("div",{staticClass:"modal-body"},[t._t("body",[i("span",{staticClass:"modal-body-content"},[t._v("I write articles related to web technologies, such as design trends, development tools, UI/UX case studies and reviews, and more. Sign up to my newsletter to get them all.")])])],2),i("div",{staticClass:"modal-footer"},[t._t("footer",[i("input",{staticClass:"modal-input-text",attrs:{type:"text",placeholder:"Email address"}}),i("button",{staticClass:"modal-button"},[t._v("Count me in!")])])],2)])])])])])},W=[],A={props:["expiredTime","newsletterToggle"],data:function(){return{}},methods:{closeModal:function(){var t=new Date;this.$emit("update:expiredTime",t.getTime()),this.$emit("update:newsletterToggle",!1),this.$emit("close")}}},U=A,Y=(i("b790"),Object(u["a"])(U,I,W,!1,null,"66c52d74",null)),L=Y.exports,F={components:{"notif-panel":p,"app-header":b,"highlight-panel":$,"app-footer":H,"newsletter-panel":L},name:"app",mounted:function(){localStorage.expiredTime&&(this.expiredTime=localStorage.expiredTime)},created:function(){window.addEventListener("scroll",this.adjustComponent),window.onresize=this.adjustComponent},destroyed:function(){window.removeEventListener("scroll",this.adjustComponent)},data:function(){return{fullname:"Dennis Harley",expiredTime:"",height:0,newsletterToggle:!1,showModal:!1,showNotif:!0,styleNotif:"",bodyWidth:0,onTop:!0}},methods:{getSize:function(){var t=this.$refs.app;this.height=t.clientHeight,this.bodyWidth=t.clientWidth},adjustComponent:function(){this.getSize(),this.checkNewsletter(),this.notificationStyle()},checkNewsletter:function(){var t=new Date;!this.expiredTime&&window.scrollY>this.height/3||this.newsletterToggle||parseInt(this.expiredTime)+6e5<=t.getTime()&&window.scrollY>this.height/3?(this.newsletterToggle=!0,this.showModal=!0):this.showModal=!1},notificationStyle:function(){0===window.scrollY?(this.styleNotif="position: relative; width: ".concat(this.bodyWidth,"px"),this.onTop=!0):(this.styleNotif="position: fixed; width: ".concat(this.bodyWidth,"px"),this.onTop=!1)}},computed:{},watch:{expiredTime:function(){localStorage.expiredTime=this.expiredTime}}},G=F,J=(i("6362"),Object(u["a"])(G,a,o,!1,null,null,null)),R=J.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(R)}}).$mount("#app")},6362:function(t,e,i){"use strict";var n=i("ba2d"),a=i.n(n);a.a},"65f0":function(t,e,i){},"8c4e":function(t,e,i){"use strict";var n=i("ad82"),a=i.n(n);a.a},"923d":function(t,e,i){"use strict";var n=i("65f0"),a=i.n(n);a.a},ad82:function(t,e,i){},b790:function(t,e,i){"use strict";var n=i("3e86"),a=i.n(n);a.a},ba2d:function(t,e,i){},c0a7:function(t,e,i){},c5ef:function(t,e,i){"use strict";var n=i("c0a7"),a=i.n(n);a.a},c812:function(t,e,i){},d470:function(t,e,i){},e06f:function(t,e,i){t.exports=i.p+"img/y-logo-white.6d7c4fcc.png"}});
//# sourceMappingURL=app.b1d1f5e0.js.map