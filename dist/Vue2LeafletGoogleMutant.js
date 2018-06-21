(function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("leaflet"),require("leaflet.gridlayer.googlemutant"),require("vue2-leaflet")):"function"==typeof define&&define.amd?define(["leaflet","leaflet.gridlayer.googlemutant","vue2-leaflet"],t):"object"==typeof exports?exports.Vue2LeafletGoogleMutant=t(require("leaflet"),require("leaflet.gridlayer.googlemutant"),require("vue2-leaflet")):e.Vue2LeafletGoogleMutant=t(e.leaflet,e["leaflet.gridlayer.googlemutant"],e["vue2-leaflet"])})(this,function(e,t,r){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var r={};return t.m=e,t.c=r,t.i=function(e){return e},t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s=7)}([function(e,t,r){var n=r(2)(r(1),r(3),null,null);e.exports=n.exports},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(4),o=function(e){return e&&e.__esModule?e:{default:e}}(n);r(5);var a=r(6),i={options:{type:Object,default:function(){return{}}},apikey:{type:String,default:function(){return""}}};t.default={props:i,data:function(){return{ready:!1}},mounted:function(){this.mapObject=o.default.gridLayer.googleMutant(this.options),o.default.DomEvent.on(this.mapObject,this.$listeners),(0,a.propsBinder)(this,this.mapObject,i);var e=document.createElement("script");e.setAttribute("src","https://maps.googleapis.com/maps/api/js?key="+this.apikey),document.head.appendChild(e),this.ready=!0,this.parentContainer=(0,a.findRealParent)(this.$parent),this.parentContainer.addLayer(this)},beforeDestroy:function(){this.parentContainer.removeLayer(this)},methods:{addLayer:function(e,t){t||this.mapObject.addLayer(e.mapObject)},removeLayer:function(e,t){t||this.mapObject.removeLayer(e.mapObject)}}}},function(e,t){e.exports=function(e,t,r,n){var o,a=e=e||{},i=typeof e.default;"object"!==i&&"function"!==i||(o=e,a=e.default);var u="function"==typeof a?a.options:a;if(t&&(u.render=t.render,u.staticRenderFns=t.staticRenderFns),r&&(u._scopeId=r),n){var l=u.computed||(u.computed={});Object.keys(n).forEach(function(e){var t=n[e];l[e]=function(){return t}})}return{esModule:o,exports:a,options:u}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticStyle:{display:"none"}},[e.ready?e._t("default"):e._e()],2)},staticRenderFns:[]}},function(e,t){e.exports=require("leaflet")},function(e,t){e.exports=require("leaflet.gridlayer.googlemutant")},function(e,t){e.exports=require("vue2-leaflet")},function(e,t,r){e.exports=r(0)}])});
//# sourceMappingURL=Vue2LeafletGoogleMutant.js.map