(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{402:function(e,t){var n="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(n){var r=new Uint8Array(16);e.exports=function(){return n(r),r}}else{var o=new Array(16);e.exports=function(){for(var e,t=0;t<16;t++)0==(3&t)&&(e=4294967296*Math.random()),o[t]=e>>>((3&t)<<3)&255;return o}}},403:function(e,t){for(var n=[],r=0;r<256;++r)n[r]=(r+256).toString(16).substr(1);e.exports=function(e,t){var r=t||0,o=n;return[o[e[r++]],o[e[r++]],o[e[r++]],o[e[r++]],"-",o[e[r++]],o[e[r++]],"-",o[e[r++]],o[e[r++]],"-",o[e[r++]],o[e[r++]],"-",o[e[r++]],o[e[r++]],o[e[r++]],o[e[r++]],o[e[r++]],o[e[r++]]].join("")}},404:function(e,t,n){},423:function(e,t,n){var r=n(424),o=n(425),i=o;i.v1=r,i.v4=o,e.exports=i},424:function(e,t,n){var r,o,i=n(402),a=n(403),s=0,c=0;e.exports=function(e,t,n){var l=t&&n||0,u=t||[],p=(e=e||{}).node||r,d=void 0!==e.clockseq?e.clockseq:o;if(null==p||null==d){var v=i();null==p&&(p=r=[1|v[0],v[1],v[2],v[3],v[4],v[5]]),null==d&&(d=o=16383&(v[6]<<8|v[7]))}var f=void 0!==e.msecs?e.msecs:(new Date).getTime(),b=void 0!==e.nsecs?e.nsecs:c+1,g=f-s+(b-c)/1e4;if(g<0&&void 0===e.clockseq&&(d=d+1&16383),(g<0||f>s)&&void 0===e.nsecs&&(b=0),b>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");s=f,c=b,o=d;var m=(1e4*(268435455&(f+=122192928e5))+b)%4294967296;u[l++]=m>>>24&255,u[l++]=m>>>16&255,u[l++]=m>>>8&255,u[l++]=255&m;var y=f/4294967296*1e4&268435455;u[l++]=y>>>8&255,u[l++]=255&y,u[l++]=y>>>24&15|16,u[l++]=y>>>16&255,u[l++]=d>>>8|128,u[l++]=255&d;for(var h=0;h<6;++h)u[l+h]=p[h];return t||a(u)}},425:function(e,t,n){var r=n(402),o=n(403);e.exports=function(e,t,n){var i=t&&n||0;"string"==typeof e&&(t="binary"===e?new Array(16):null,e=null);var a=(e=e||{}).random||(e.rng||r)();if(a[6]=15&a[6]|64,a[8]=63&a[8]|128,t)for(var s=0;s<16;++s)t[i+s]=a[s];return t||o(a)}},426:function(e,t,n){"use strict";n(404)},453:function(e,t,n){"use strict";n.r(t);var r=n(423),o={name:"InputToggle",props:{label:{type:String,required:!0},labelSide:{type:String,default:"left"},value:{type:Boolean,required:!0}},computed:{inputId:function(){return Object(r.v4)()}},methods:{onLabelClick:function(){this.$refs.checkboxInput.checked=!this.$refs.checkboxInput.checked}}},i=(n(426),n(2)),a=Object(i.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("label",{staticClass:"my-1 flex items-center cursor-pointer",attrs:{for:e.inputId},on:{click:e.onLabelClick}},["left"===e.labelSide?n("div",{staticClass:"input-toggle-label"},[e._v("\n    "+e._s(e.label)+"\n  ")]):e._e(),e._v(" "),n("div",{staticClass:"relative"},[n("input",{ref:"checkboxInput",staticClass:"absolute opacity-0 w-0 h-0",attrs:{id:e.inputId,type:"checkbox"},domProps:{checked:e.value},on:{input:function(t){return e.$emit("input",t.target.checked)}}}),e._v(" "),n("div",{staticClass:"input-toggle-path"}),e._v(" "),n("div",{staticClass:"input-toggle-circle"})]),e._v(" "),"right"===e.labelSide?n("div",{staticClass:"input-toggle-label"},[e._v("\n    "+e._s(e.label)+"\n  ")]):e._e()])}),[],!1,null,"3058b1ed",null);t.default=a.exports}}]);