(function(e){function t(t){for(var n,a,s=t[0],c=t[1],u=t[2],l=0,f=[];l<s.length;l++)a=s[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);p&&p(t);while(f.length)f.shift()();return i.push.apply(i,u||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],n=!0,a=1;a<r.length;a++){var s=r[a];0!==o[s]&&(n=!1)}n&&(i.splice(t--,1),e=c(c.s=r[0]))}return e}var n={},a={app:0},o={app:0},i=[];function s(e){return c.p+"js/"+({Certificates:"Certificates",Email:"Email",Projects:"Projects",about:"about"}[e]||e)+"."+{Certificates:"ece8029c",Email:"07e3cc4a",Projects:"de41e937",about:"b2de2d00"}[e]+".js"}function c(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.e=function(e){var t=[],r={Certificates:1,Email:1,Projects:1,about:1};a[e]?t.push(a[e]):0!==a[e]&&r[e]&&t.push(a[e]=new Promise((function(t,r){for(var n="css/"+({Certificates:"Certificates",Email:"Email",Projects:"Projects",about:"about"}[e]||e)+"."+{Certificates:"d201c4f2",Email:"67b87b30",Projects:"2719f064",about:"7bbde8ec"}[e]+".css",o=c.p+n,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var u=i[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===n||l===o))return t()}var f=document.getElementsByTagName("style");for(s=0;s<f.length;s++){u=f[s],l=u.getAttribute("data-href");if(l===n||l===o)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var n=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete a[e],p.parentNode.removeChild(p),r(i)},p.href=o;var d=document.getElementsByTagName("head")[0];d.appendChild(p)})).then((function(){a[e]=0})));var n=o[e];if(0!==n)if(n)t.push(n[2]);else{var i=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=s(e);var f=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(p);var r=o[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",f.name="ChunkLoadError",f.type=n,f.request=a,r[1](f)}o[e]=void 0}};var p=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=n,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(r,n,function(t){return e[t]}.bind(null,n));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var f=0;f<u.length;f++)t(u[f]);var p=l;i.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},2120:function(e,t,r){"use strict";r("56ff")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("div",[r("b-navbar",{staticClass:"navbar navbar-dark",staticStyle:{"background-color":"#282D37"}},[r("b-navbar-nav",[r("b-navbar-brand",[e._v("José González")]),r("b-nav-item",{attrs:{to:{name:"Home"},exact:""}},[e._v("Home")]),r("b-nav-item",{attrs:{to:{name:"About"}}},[e._v("About")]),r("b-nav-item",{attrs:{to:{name:"Projects"}}},[e._v("Projects")]),r("b-nav-item",{attrs:{to:{name:"Certificates"}}},[e._v("Certificates")]),r("b-nav-item-dropdown",{attrs:{text:"Contact",right:""}},[r("b-dropdown-item",{attrs:{to:{name:"Email"}}},[e._v("Email")]),r("b-dropdown-item",{attrs:{href:"https://www.linkedin.com/in/jos%C3%A9-alberto-gonz%C3%A1lez-arteaga-1117b7153/",target:"_blank"}},[e._v("Linkedin")]),r("b-dropdown-item",{attrs:{href:"https://github.com/josegzza",target:"_blank"}},[e._v("Github")]),r("b-dropdown-item",{attrs:{href:"https://www.kaggle.com/josegzza",target:"_blank"}},[e._v("Kaggle")])],1)],1)],1)],1),r("router-view")],1)},o=[],i=r("2877"),s={},c=Object(i["a"])(s,a,o,!1,null,null,null),u=c.exports,l=(r("d3b7"),r("8c4f"));r("bb51");n["default"].use(l["a"]);var f=[{path:"/",name:"Home",component:function(){return r.e("about").then(r.bind(null,"bb51"))}},{path:"/About",name:"About",component:function(){return r.e("about").then(r.bind(null,"f820"))}},{path:"/Projects",name:"Projects",component:function(){return r.e("Projects").then(r.bind(null,"acca"))}},{path:"/Email",name:"Email",component:function(){return r.e("Email").then(r.bind(null,"4fdd"))}},{path:"/Certificates",name:"Certificates",component:function(){return r.e("Certificates").then(r.bind(null,"41f3"))}}],p=new l["a"]({mode:"history",base:"",routes:f}),d=p,m=r("2f62");n["default"].use(m["a"]);var b=new m["a"].Store({state:{},mutations:{},actions:{},modules:{}}),v=r("5f5b");r("f9e3"),r("2dd8");n["default"].use(v["a"]),n["default"].config.productionTip=!1,new n["default"]({router:d,store:b,render:function(e){return e(u)}}).$mount("#app")},"56ff":function(e,t,r){},bb51:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"wrapper"},[r("div",{staticClass:"flex-column"},[r("typical",{staticClass:"vt-title",attrs:{steps:["Hi, I am José González! :-) 👋",500],wrapper:"h1"}}),r("typical",{staticClass:"vt-subTitle",attrs:{steps:["I am",1e3,"I am Data Science Enthusiast. ⛏",1e3,"I am Computer Science Student. 🖥",1e3,"I am Philosophy lover. 🕉️","I am self-Learner. 📚",1e3,"I am Proud music geek. 🎵",1e3,"I am Coffee addict. 🍵",1e3],loop:1/0,wrapper:"h3"}})],1),e._m(0)])},a=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("footer",{staticClass:"footerContainer"},[r("p",[e._v("Copyright © José Gzz")])])}],o=r("4140"),i=r.n(o),s={name:"app",data:function(){return{msg:"vue typical"}},components:{typical:i.a}},c=s,u=(r("2120"),r("2877")),l=Object(u["a"])(c,n,a,!1,null,"2e0b21c0",null);t["default"]=l.exports}});
//# sourceMappingURL=app.ed1e05fd.js.map