(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{362:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"a",(function(){return r}));n(80),n(77),n(78);var a=n(34);function o(t,e,n,o,r){var c=a.f["".concat(n)]||"";if(Object(a.b)(n)){var i=t.getElementsByTagName(e)[0];if(t.getElementById(c))return;var s=t.createElement(e);s.id=c,s.src=o,(r||function(){})(s),i.parentNode.insertBefore(s,i)}}function r(t,e,n){var a=t.querySelectorAll("".concat(e,'[src*="').concat(n,'"'));a.length>0&&a.forEach((function(t){return t.parentNode.removeChild(t)}))}},392:function(t,e,n){"use strict";n(77),n(32),n(186),n(78);var a=n(362);e.a={mounted:function(){Object(a.b)(document,"script","facebook","https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v9.0")},beforeDestroy:function(){Object(a.a)(document,"script","facebook"),Object.keys(window).forEach((function(t){t.startsWith("FB")&&delete window[t]}))}}},452:function(t,e,n){"use strict";n.r(e);var a=n(392),o={name:"FacebookShare",props:{layout:{type:String,default:"button"},size:{type:String,default:"small"}},mixins:[a.a]},r=n(2),c=Object(r.a)(o,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"fb-share-button",attrs:{"data-href":""+(this.$themeConfig.domain||"")+this.$page.path,"data-layout":this.layout,"data-size":this.size}})}),[],!1,null,null,null);e.default=c.exports}}]);