(function(){"use strict";var n={6256:function(n,e,t){var r={};t.r(r),t.d(r,{home:function(){return x}});var o=t(9242),a=t(3396);function i(n,e,t,r,o,i){const s=(0,a.up)("feeds");return(0,a.wg)(),(0,a.j4)(s)}const s={class:"topline"},c={class:"icon"},u={class:"stories"};function l(n,e,t,r,o,i){const l=(0,a.up)("icon"),p=(0,a.up)("storyUserItem"),d=(0,a.up)("topline");return(0,a.wg)(),(0,a.iD)("div",s,[(0,a.Wm)(d,null,{headline:(0,a.w5)((()=>[(0,a._)("div",c,[(0,a.Wm)(l,{name:"home"})])])),content:(0,a.w5)((()=>[(0,a._)("ul",u,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(o.stories,(n=>((0,a.wg)(),(0,a.iD)("li",{class:"stories-item",key:n.id},[(0,a.Wm)(p,{avatar:n.avatar,username:n.username,onOnPress:e=>i.handlePress(n.id)},null,8,["avatar","username","onOnPress"])])))),128))])])),_:1})])}const p={class:"c-topline"},d={class:"x-container"},f={class:"headline"},v={key:0,class:"content"};function m(n,e,t,r,o,i){return(0,a.wg)(),(0,a.iD)("div",p,[(0,a._)("div",d,[(0,a._)("div",f,[(0,a.WI)(n.$slots,"headline",{},void 0,!0)]),n.$slots.content?((0,a.wg)(),(0,a.iD)("div",v,[(0,a.WI)(n.$slots,"content",{},void 0,!0)])):(0,a.kq)("",!0)])])}var g={name:"topline"},h=t(89);const w=(0,h.Z)(g,[["render",m],["__scopeId","data-v-1042a73e"]]);var y=w;function b(n,e,t,r,o,i){return(0,a.wg)(),(0,a.j4)((0,a.LL)(t.name))}const _={preserveAspectRatio:"none",viewBox:"0 0 32 33",fill:"none",xmlns:"http://www.w3.org/2000/svg"},O=(0,a._)("path",{d:"M14.0692 4.06704C15.1853 3.12849 16.8147 3.12849 17.9308 4.06704L26.9308 11.6352C27.6087 12.2052 28 13.0456 28 13.9313V26.5C28 27.6046 27.1046 28.5 26 28.5H20.5C19.3954 28.5 18.5 27.6046 18.5 26.5V19.5H13.5V26.5C13.5 27.6046 12.6046 28.5 11.5 28.5H6C4.89543 28.5 4 27.6046 4 26.5V13.9313C4 13.0456 4.39135 12.2052 5.0692 11.6352L14.0692 4.06704Z",fill:"currentColor"},null,-1),j=[O];function C(n,e){return(0,a.wg)(),(0,a.iD)("svg",_,j)}const S={},k=(0,h.Z)(S,[["render",C]]);var x=k,P={name:"icon",components:{...r},props:{name:{type:String,required:!0,validator(n){return Object.keys(r).includes(n)}}}};const I=(0,h.Z)(P,[["render",b]]);var D=I,T=t(7139);const Z={class:"avatar"},W=["src"],q={class:"username"};function H(n,e,t,r,o,i){return(0,a.wg)(),(0,a.iD)("button",{class:"c-story-user-item",onClick:e[0]||(e[0]=e=>n.$emit("onPress"))},[(0,a._)("div",Z,[(0,a._)("img",{src:t.avatar,class:"img",alt:"username avatar"},null,8,W)]),(0,a._)("div",q,(0,T.zw)(t.username),1)])}var L={name:"storyUserItem",props:{avatar:{type:String,required:!0},username:{type:String,required:!0}}};const M=(0,h.Z)(L,[["render",H],["__scopeId","data-v-7791a970"]]);var V=M,$=JSON.parse('[{"id":"0","avatar":"https://cdn-icons-png.flaticon.com/512/146/146013.png ","username":"One"},{"id":"1","avatar":"https://cdn-icons-png.flaticon.com/512/146/146013.png ","username":"Two"},{"id":"2","avatar":"https://cdn-icons-png.flaticon.com/512/146/146013.png ","username":"Three"},{"id":"3","avatar":"https://cdn-icons-png.flaticon.com/512/146/146013.png ","username":"Four"},{"id":"4","avatar":"https://cdn-icons-png.flaticon.com/512/146/146013.png ","username":"Five"},{"id":"5","avatar":"https://cdn-icons-png.flaticon.com/512/146/146013.png ","username":"Six"},{"id":"6","avatar":"https://cdn-icons-png.flaticon.com/512/146/146013.png ","username":"Seven"},{"id":"7","avatar":"https://cdn-icons-png.flaticon.com/512/146/146013.png ","username":"Eight"},{"id":"8","avatar":"https://cdn-icons-png.flaticon.com/512/146/146013.png ","username":"Nine"},{"id":"9","avatar":"https://cdn-icons-png.flaticon.com/512/146/146013.png ","username":"Ten"}]'),F={name:"feeds",components:{topline:y,icon:D,storyUserItem:V},data(){return{stories:$}},methods:{handlePress(n){console.log(n)}}};const U=(0,h.Z)(F,[["render",l],["__scopeId","data-v-a4114c70"]]);var A=U,E={name:"App",components:{feeds:A}};const N=(0,h.Z)(E,[["render",i]]);var z=N;(0,o.ri)(z).mount("#app")}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={exports:{}};return n[r].call(a.exports,a,a.exports,t),a.exports}t.m=n,function(){var n=[];t.O=function(e,r,o,a){if(!r){var i=1/0;for(l=0;l<n.length;l++){r=n[l][0],o=n[l][1],a=n[l][2];for(var s=!0,c=0;c<r.length;c++)(!1&a||i>=a)&&Object.keys(t.O).every((function(n){return t.O[n](r[c])}))?r.splice(c--,1):(s=!1,a<i&&(i=a));if(s){n.splice(l--,1);var u=o();void 0!==u&&(e=u)}}return e}a=a||0;for(var l=n.length;l>0&&n[l-1][2]>a;l--)n[l]=n[l-1];n[l]=[r,o,a]}}(),function(){t.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return t.d(e,{a:e}),e}}(),function(){t.d=function(n,e){for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)}}(),function(){t.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})}}(),function(){var n={143:0};t.O.j=function(e){return 0===n[e]};var e=function(e,r){var o,a,i=r[0],s=r[1],c=r[2],u=0;if(i.some((function(e){return 0!==n[e]}))){for(o in s)t.o(s,o)&&(t.m[o]=s[o]);if(c)var l=c(t)}for(e&&e(r);u<i.length;u++)a=i[u],t.o(n,a)&&n[a]&&n[a][0](),n[a]=0;return t.O(l)},r=self["webpackChunkgitogram"]=self["webpackChunkgitogram"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=t.O(void 0,[998],(function(){return t(6256)}));r=t.O(r)})();
//# sourceMappingURL=app.d3e20404.js.map