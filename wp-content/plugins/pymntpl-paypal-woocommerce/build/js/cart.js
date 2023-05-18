(()=>{"use strict";var t={n:e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return t.d(r,{a:r}),r},d:(e,r)=>{for(var n in r)t.o(r,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},e={};function r(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function n(t,e,r,n,o,a,i){try{var c=t[a](i),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,a){var i=t.apply(e,r);function c(t){n(i,o,a,c,u,"next",t)}function u(t){n(i,o,a,c,u,"throw",t)}c(void 0)}))}}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function c(t,e,r){return e&&i(t.prototype,e),r&&i(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function u(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function s(t,e){return s=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},s(t,e)}function f(t){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},f(t)}function p(t,e){if(e&&("object"===f(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return u(t)}function d(t){return d=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},d(t)}t.r(e),t.d(e,{default:()=>k});const l=window.regeneratorRuntime;var h=t.n(l);const y=window.jQuery;var v=t.n(y);const b=window.wcPPCP.utils,w=window.wp.apiFetch;var g=t.n(w);const P=window.wp.hooks;function m(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function O(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?m(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}const k=new(function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&s(t,e)}(m,t);var e,r,n,i,f,l,y,w,P=(y=m,w=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=d(y);if(w){var r=d(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return p(this,t)});function m(){var t;return a(this,m),(t=P.call(this)).data=(0,b.getSetting)("cart"),t.page=(0,b.getSetting)("generalData").page,t.processing=!1,v()(document.body).on("updated_wc_div",t.onCartUpdated.bind(u(t))),v()(document.body).on("updated_cart_totals",t.onCartUpdated.bind(u(t))),v()(document.body).on("updated_checkout",t.onUpdatedCheckout.bind(u(t))),v()(document.body).on("wc_fragments_refreshed wc_fragments_loaded",t.onCartFragmentsChanged.bind(u(t))),t}return c(m,[{key:"onCartUpdated",value:(l=o(h().mark((function t(e){return h().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!window.wcPPCPCartData){t.next=5;break}return t.next=3,this.refreshData(window.wcPPCPCartData);case 3:t.next=7;break;case 5:return t.next=7,this.refreshData(null);case 7:(0,b.setSetting)("queryParams",this.data.queryParams),this.trigger("cartUpdated",this);case 9:case"end":return t.stop()}}),t,this)}))),function(t){return l.apply(this,arguments)})},{key:"onUpdatedCheckout",value:(f=o(h().mark((function t(e){return h().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.refreshData(window.wcPPCPCartData?window.wcPPCPCartData:null);case 2:(0,b.setSetting)("queryParams",this.data.queryParams),this.trigger("updatedCheckout",this);case 4:case"end":return t.stop()}}),t,this)}))),function(t){return f.apply(this,arguments)})},{key:"onCartFragmentsChanged",value:function(){var t=this;setTimeout((function(){window.wcPPCPMiniCartUpdate&&(t.data=O(O({},t.data),wcPPCPMiniCartUpdate)),t.trigger("fragmentsChanged",t)}),250)}},{key:"getData",value:function(){return(0,b.getSetting)("cart")}},{key:"needsShipping",value:function(){var t;return null===(t=this.data)||void 0===t?void 0:t.needsShipping}},{key:"refreshData",value:(i=o(h().mark((function t(){var e,r,n=arguments;return h().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(e=n.length>0&&void 0!==n[0]?n[0]:null)){t.next=5;break}this.data=O(O({},this.data),e),t.next=21;break;case 5:if(this.processing){t.next=21;break}return t.prev=6,this.processing=!0,t.next=10,g()({method:"POST",url:(0,b.getRestRoute)("cart/refresh"),data:{page:this.page}});case 10:r=t.sent,this.data=O(O({},this.data),r.cart),this.data.queryParams=r.queryParams,t.next=18;break;case 15:t.prev=15,t.t0=t.catch(6),console.log(t.t0);case 18:return t.prev=18,this.processing=!1,t.finish(18);case 21:case"end":return t.stop()}}),t,this,[[6,15,18,21]])}))),function(){return i.apply(this,arguments)})},{key:"addToCart",value:(n=o(h().mark((function t(e){var r=this;return h().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",g()({method:"POST",url:(0,b.getRestRoute)("cart/item"),data:e}).then((function(t){return r.sanitizeResponse(t)})).catch((function(t){throw t})));case 1:case"end":return t.stop()}}),t)}))),function(t){return n.apply(this,arguments)})},{key:"createOrder",value:(r=o(h().mark((function t(e){var r=this;return h().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",g()({method:"POST",url:(0,b.getRestRoute)("cart/order"),data:e}).then((function(t){return r.sanitizeResponse(t)})));case 1:case"end":return t.stop()}}),t)}))),function(t){return r.apply(this,arguments)})},{key:"doOrderPay",value:(e=o(h().mark((function t(e){var r,n=this;return h().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=(0,b.getSetting)("order"),t.abrupt("return",g()({method:"POST",url:(0,b.getRestRoute)("order/pay"),data:O({payment_method:e},r)}).then((function(t){return n.sanitizeResponse(t)})));case 2:case"end":return t.stop()}}),t)}))),function(t){return e.apply(this,arguments)})},{key:"getTotal",value:function(){var t;return null===(t=this.data)||void 0===t?void 0:t.total}},{key:"sanitizeResponse",value:function(t){return"string"==typeof t&&(t=t.replace(/<[^>]*>/g,"")),t}}]),m}(function(){function t(){a(this,t),this.hooks=(0,P.createHooks)()}return c(t,[{key:"on",value:function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10;this.hooks.addAction(t,"wcPPCP",e,r)}},{key:"trigger",value:function(t){for(var e,r=arguments.length,n=new Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];(e=this.hooks).doAction.apply(e,[t].concat(n))}},{key:"addFilter",value:function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10;this.hooks.addFilter(t,"wcPPCP",e,r)}},{key:"applyFilters",value:function(t){for(var e,r=arguments.length,n=new Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];return(e=this.hooks).applyFilters.apply(e,[t].concat(n))}}]),t}()));(this.wcPPCP=this.wcPPCP||{}).cart=e})();
//# sourceMappingURL=cart.js.map