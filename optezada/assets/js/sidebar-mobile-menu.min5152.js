!function n(i,r,l){function s(t,e){if(!r[t]){if(!i[t]){var o="function"==typeof require&&require;if(!e&&o)return o(t,!0);if(a)return a(t,!0);throw(o=new Error("Cannot find module '"+t+"'")).code="MODULE_NOT_FOUND",o}o=r[t]={exports:{}},i[t][0].call(o.exports,function(e){return s(i[t][1][e]||e)},o,o.exports,n,i,r,l)}return r[t].exports}for(var a="function"==typeof require&&require,e=0;e<l.length;e++)s(l[e]);return s}({1:[function(e,t,o){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.options=void 0;var n=oceanwpLocalize;o.options=n},{}],2:[function(e,t,o){"use strict";var n=e("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(o,"__esModule",{value:!0}),o.fadeOutNav=o.fadeInNav=o.isSelectorValid=o.isElement=o.getSiblings=o.visible=o.offset=o.fadeToggle=o.fadeOut=o.fadeIn=o.slideToggle=o.slideUp=o.slideDown=o.wrap=void 0;var i=n(e("@babel/runtime/helpers/typeof"));o.wrap=function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:document.createElement("div");return e.nextSibling?e.parentNode.insertBefore(t,e.nextSibling):e.parentNode.appendChild(t),t.appendChild(e)};function r(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:300,o=window.getComputedStyle(e).display;"none"===o&&(o="block"),e.style.transitionProperty="height",e.style.transitionDuration="".concat(t,"ms"),e.style.opacity=0,e.style.display=o;var n=e.offsetHeight;e.style.height=0,e.style.opacity=1,e.style.overflow="hidden",setTimeout(function(){e.style.height="".concat(n,"px")},5),window.setTimeout(function(){e.style.removeProperty("height"),e.style.removeProperty("overflow"),e.style.removeProperty("transition-duration"),e.style.removeProperty("transition-property"),e.style.removeProperty("opacity")},t+50)}o.slideDown=r;function l(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:300;e.style.boxSizing="border-box",e.style.transitionProperty="height, margin",e.style.transitionDuration="".concat(t,"ms"),e.style.height="".concat(e.offsetHeight,"px"),e.style.marginTop=0,e.style.marginBottom=0,e.style.overflow="hidden",setTimeout(function(){e.style.height=0},5),window.setTimeout(function(){e.style.display="none",e.style.removeProperty("height"),e.style.removeProperty("margin-top"),e.style.removeProperty("margin-bottom"),e.style.removeProperty("overflow"),e.style.removeProperty("transition-duration"),e.style.removeProperty("transition-property")},t+50)}o.slideUp=l;o.slideToggle=function(e,t){("none"===window.getComputedStyle(e).display?r:l)(e,t)};function s(e){var t={duration:300,display:null,opacity:1,callback:null};Object.assign(t,1<arguments.length&&void 0!==arguments[1]?arguments[1]:{}),e.style.opacity=0,e.style.display=t.display||"block",setTimeout(function(){e.style.transition="".concat(t.duration,"ms opacity ease"),e.style.opacity=t.opacity},5),setTimeout(function(){e.style.removeProperty("transition"),t.callback&&t.callback()},t.duration+50)}o.fadeIn=s;function a(e){var t;"none"!==e.style.display&&(t={duration:300,display:null,opacity:0,callback:null},Object.assign(t,1<arguments.length&&void 0!==arguments[1]?arguments[1]:{}),e.style.opacity=1,e.style.display=t.display||"block",setTimeout(function(){e.style.transition="".concat(t.duration,"ms opacity ease"),e.style.opacity=t.opacity},5),setTimeout(function(){e.style.display="none",e.style.removeProperty("transition"),t.callback&&t.callback()},t.duration+50))}o.fadeOut=a;o.fadeToggle=function(e,t){("none"===window.getComputedStyle(e).display?s:a)(e,t)};o.offset=function(e){if(!e.getClientRects().length)return{top:0,left:0};var t=e.getBoundingClientRect(),e=e.ownerDocument.defaultView;return{top:t.top+e.pageYOffset,left:t.left+e.pageXOffset}};o.visible=function(e){return!!e&&!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)};o.getSiblings=function(e){var t=[];if(!e.parentNode)return t;for(var o=e.parentNode.firstChild;o;)1===o.nodeType&&o!==e&&t.push(o),o=o.nextSibling;return t};o.isElement=function(e){return"object"===("undefined"==typeof HTMLElement?"undefined":(0,i.default)(HTMLElement))?e instanceof HTMLElement:e&&"object"===(0,i.default)(e)&&null!==e&&1===e.nodeType&&"string"==typeof e.nodeName};var c,e=(c=document.createDocumentFragment(),function(e){try{c.querySelector(e)}catch(e){return!1}return!0});o.isSelectorValid=e;o.fadeInNav=function(e){var t={duration:300,visibility:"visible",opacity:1,callback:null};Object.assign(t,1<arguments.length&&void 0!==arguments[1]?arguments[1]:{}),e.style.opacity=0,e.style.visibility=t.visibility||"visible",setTimeout(function(){e.style.transition="".concat(t.duration,"ms opacity ease"),e.style.opacity=t.opacity},5)};o.fadeOutNav=function(e){var t;"hidden"!==e.style.visibility&&(t={duration:300,visibility:"hidden",opacity:0,callback:null},Object.assign(t,1<arguments.length&&void 0!==arguments[1]?arguments[1]:{}),e.style.opacity=1,e.style.visibility=t.visibility||"visible",setTimeout(function(){e.style.transition="".concat(t.duration,"ms opacity ease"),e.style.opacity=t.opacity},5),setTimeout(function(){e.style.visibility="hidden",e.style.removeProperty("transition"),t.callback&&t.callback()},t.duration+50))}},{"@babel/runtime/helpers/interopRequireDefault":11,"@babel/runtime/helpers/typeof":12}],3:[function(e,t,o){"use strict";var n=e("@babel/runtime/helpers/interopRequireDefault"),i=n(e("@babel/runtime/helpers/defineProperty")),r=n(e("@babel/runtime/helpers/classCallCheck")),l=n(e("@babel/runtime/helpers/classPrivateFieldSet")),c=n(e("@babel/runtime/helpers/classPrivateFieldGet")),s=n(e("delegate")),u=e("../../constants"),d=e("../../lib/utils");function a(t,e){var o,n=Object.keys(t);return Object.getOwnPropertySymbols&&(o=Object.getOwnPropertySymbols(t),e&&(o=o.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,o)),n}function p(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?a(Object(o),!0).forEach(function(e){(0,i.default)(t,e,o[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))})}return t}var f=new WeakMap,y=new WeakMap,v=new WeakMap,m=new WeakMap,b=new WeakMap,h=new WeakMap,g=new WeakMap,w=new WeakMap,x=new WeakMap,S=new WeakMap,k=new WeakMap,E=new WeakMap,M=new WeakMap,P=new WeakMap,e=function e(){var a=this;(0,r.default)(this,e),f.set(this,{writable:!0,value:{body:document.body}}),y.set(this,{writable:!0,value:void 0}),v.set(this,{writable:!0,value:void 0}),m.set(this,{writable:!0,value:void 0}),b.set(this,{writable:!0,value:function(){(0,l.default)(a,f,p(p({},(0,c.default)(a,f)),{},{hamburgerBtn:document.querySelector(".mobile-menu > .hamburger"),header:document.querySelector("#site-header")}))}}),h.set(this,{writable:!0,value:function(){(0,l.default)(a,y,!1),(0,c.default)(a,g).call(a),document.querySelector(".sidr-class-dropdown-toggle")||document.querySelectorAll(".sidr-class-menu-item-has-children > a").forEach(function(e){e.insertAdjacentHTML("beforeend",'<span class="sidr-class-dropdown-toggle" tabindex=0></span>')}),(0,l.default)(a,v,"link"==u.options.sidrDropdownTarget?document.querySelectorAll("li.sidr-class-menu-item-has-children > a"):document.querySelectorAll(".sidr-class-dropdown-toggle"))}}),g.set(this,{writable:!0,value:function(){var o=a;sidr.new(".mobile-menu",{name:"sidr",source:u.options.sidrSource,side:u.options.sidrSide,displace:u.options.sidrDisplace,speed:300,renaming:!0,timing:"ease",bind:"click",onOpen:function(){null!==(e=document.querySelector("a.sidr-class-toggle-sidr-close"))&&void 0!==e&&e.focus(),null!==(e=document.querySelector("a.sidr-class-toggle-sidr-close svg"))&&void 0!==e&&e.classList.remove("sidr-class-owp-icon","sidr-class-owp-icon--close"),null!==(e=document.querySelector("a.sidr-class-toggle-sidr-close svg"))&&void 0!==e&&e.classList.add("owp-icon","owp-icon--close"),null!==(e=(0,c.default)(o,f).hamburgerBtn)&&void 0!==e&&e.classList.add("is-active"),(0,c.default)(o,f).header.insertAdjacentHTML("afterend",'<div class="oceanwp-sidr-overlay" tabindex=0></div>');var e=document.querySelector(".oceanwp-sidr-overlay");(0,d.fadeIn)(e),e.addEventListener("click",function(e){e.preventDefault(),e.stopPropagation(),sidr.close("sidr")})},onClose:function(){var e;null!==(e=(0,c.default)(o,f).hamburgerBtn)&&void 0!==e&&e.classList.remove("is-active"),document.querySelectorAll(".sidr-class-menu-item-has-children.active > ul").forEach(function(e){e.style.display="none"}),document.querySelectorAll(".sidr-class-menu-item-has-children.active").forEach(function(e){e.classList.remove("active")});var t=document.querySelector(".oceanwp-sidr-overlay");(0,d.fadeOut)(t),setTimeout(function(){t.remove()})}}),document.querySelectorAll('#sidr [class*="sidr-class-fa"]').forEach(function(e){e.className=e.className.replace(/\bsidr-class-fa.*?\b/g,"fa")}),document.querySelectorAll('#sidr [class*="sidr-class-icon"]').forEach(function(e){e.className=e.className.replace(/\bsidr-class-icon-.*?\b/g,"icon-")}),(0,l.default)(a,m,document.querySelector("a.sidr-class-toggle-sidr-close"))}}),w.set(this,{writable:!0,value:function(){var e;null!==(e=(0,c.default)(a,f).hamburgerBtn)&&void 0!==e&&e.addEventListener("click",(0,c.default)(a,x)),null!==(e=(0,c.default)(a,m))&&void 0!==e&&e.addEventListener("click",(0,c.default)(a,S)),null!==(e=(0,c.default)(a,v))&&void 0!==e&&e.forEach(function(e){e.addEventListener("click",(0,c.default)(a,k)),e.addEventListener("touchend",(0,c.default)(a,k))}),(0,s.default)(document.body,'.sidr-class-dropdown-menu a[href*="#"]:not([href="#"]), .sidr-class-menu-item > a[href*="#"]:not([href="#"])',"click",(0,c.default)(a,P)),(0,s.default)(document.body,'.sidr-class-dropdown-menu a[href*="#"]:not([href="#"]), .sidr-class-menu-item > a[href*="#"]:not([href="#"])',"touchend",(0,c.default)(a,P)),null!==(e=document.querySelectorAll("li.sidr-class-nav-no-click > a"))&&void 0!==e&&e.forEach(function(e){e.addEventListener("click",function(e){e.preventDefault(),e.stopPropagation()})}),document.addEventListener("keydown",(0,c.default)(a,M)),window.addEventListener("resize",(0,c.default)(a,E))}}),x.set(this,{writable:!0,value:function(e){(0,l.default)(a,y,!(0,c.default)(a,y)),e.currentTarget.setAttribute("aria-expanded",(0,c.default)(a,y))}}),S.set(this,{writable:!0,value:function(e){e.preventDefault(),e.stopPropagation(),(0,c.default)(a,P).call(a),(0,c.default)(a,m).classList.remove("opened")}}),k.set(this,{writable:!0,value:function(e){e.preventDefault(),e.stopPropagation();var t=e.currentTarget,o=("link"==u.options.sidrDropdownTarget?t:t.parentNode).parentNode,e=o.lastElementChild;null!=o&&o.classList.contains("active")?(o.classList.remove("active"),(0,d.slideUp)(e,250),null!==(t=o.querySelectorAll(".sidr-class-menu-item-has-children.active"))&&void 0!==t&&t.forEach(function(e){e.classList.remove("active"),(0,d.slideUp)(e.querySelector("ul"))})):(o.classList.add("active"),(0,d.slideDown)(e,250))}}),E.set(this,{writable:!0,value:function(e){960<=window.innerWidth&&(0,c.default)(a,P).call(a)}}),M.set(this,{writable:!0,value:function(e){var t,o,n,i,r,l,s;(0,c.default)(a,f).body.classList.contains("sidr-open")&&(e.stopPropagation(),t=9===e.keyCode,o=e.shiftKey,n=27===e.keyCode,i=13===e.keyCode,r=(0,c.default)(a,m),l=(s=document.querySelector("#sidr").querySelectorAll("a, span.sidr-class-dropdown-toggle, input, button"))[0],s=s[s.length-1],r&&(r.style.outline="",!o&&t&&s===document.activeElement&&(e.preventDefault(),r.style.outline="1px dashed rgba(255, 255, 255, 0.6)",r.focus()),o&&t&&l===document.activeElement&&(e.preventDefault(),r.style.outline="1px dashed rgba(255, 255, 255, 0.6)",r.focus())),n&&(e.preventDefault(),(0,c.default)(a,P).call(a)),i&&document.activeElement.classList.contains("sidr-class-dropdown-toggle")&&(e.preventDefault(),document.activeElement.click()),t&&l===s&&e.preventDefault())}}),P.set(this,{writable:!0,value:function(){setTimeout(function(){var e;sidr.close("sidr"),null!==(e=(0,c.default)(a,f).hamburgerBtn)&&void 0!==e&&e.classList.remove("is-active")},50)}}),void 0!==u.options.sidrSource&&(0,c.default)(this,f).body.classList.contains("sidebar-mobile")&&((0,c.default)(this,b).call(this),(0,c.default)(this,h).call(this),(0,c.default)(this,w).call(this))};window.oceanwp=window.oceanwp||{},oceanwp.sidebarMobileMenu=new e},{"../../constants":1,"../../lib/utils":2,"@babel/runtime/helpers/classCallCheck":6,"@babel/runtime/helpers/classPrivateFieldGet":8,"@babel/runtime/helpers/classPrivateFieldSet":9,"@babel/runtime/helpers/defineProperty":10,"@babel/runtime/helpers/interopRequireDefault":11,delegate:14}],4:[function(e,t,o){t.exports=function(e,t){return t.get?t.get.call(e):t.value},t.exports.default=t.exports,t.exports.__esModule=!0},{}],5:[function(e,t,o){t.exports=function(e,t,o){if(t.set)t.set.call(e,o);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=o}},t.exports.default=t.exports,t.exports.__esModule=!0},{}],6:[function(e,t,o){t.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},t.exports.default=t.exports,t.exports.__esModule=!0},{}],7:[function(e,t,o){t.exports=function(e,t,o){if(!t.has(e))throw new TypeError("attempted to "+o+" private field on non-instance");return t.get(e)},t.exports.default=t.exports,t.exports.__esModule=!0},{}],8:[function(e,t,o){var n=e("./classApplyDescriptorGet.js"),i=e("./classExtractFieldDescriptor.js");t.exports=function(e,t){return t=i(e,t,"get"),n(e,t)},t.exports.default=t.exports,t.exports.__esModule=!0},{"./classApplyDescriptorGet.js":4,"./classExtractFieldDescriptor.js":7}],9:[function(e,t,o){var n=e("./classApplyDescriptorSet.js"),i=e("./classExtractFieldDescriptor.js");t.exports=function(e,t,o){return t=i(e,t,"set"),n(e,t,o),o},t.exports.default=t.exports,t.exports.__esModule=!0},{"./classApplyDescriptorSet.js":5,"./classExtractFieldDescriptor.js":7}],10:[function(e,t,o){t.exports=function(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e},t.exports.default=t.exports,t.exports.__esModule=!0},{}],11:[function(e,t,o){t.exports=function(e){return e&&e.__esModule?e:{default:e}},t.exports.default=t.exports,t.exports.__esModule=!0},{}],12:[function(e,t,o){function n(e){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?t.exports=n=function(e){return typeof e}:t.exports=n=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t.exports.default=t.exports,t.exports.__esModule=!0,n(e)}t.exports=n,t.exports.default=t.exports,t.exports.__esModule=!0},{}],13:[function(e,t,o){var n;"undefined"==typeof Element||Element.prototype.matches||((n=Element.prototype).matches=n.matchesSelector||n.mozMatchesSelector||n.msMatchesSelector||n.oMatchesSelector||n.webkitMatchesSelector),t.exports=function(e,t){for(;e&&9!==e.nodeType;){if("function"==typeof e.matches&&e.matches(t))return e;e=e.parentNode}}},{}],14:[function(e,t,o){var l=e("./closest");function r(e,t,o,n,i){var r=function(t,o,e,n){return function(e){e.delegateTarget=l(e.target,o),e.delegateTarget&&n.call(t,e)}}.apply(this,arguments);return e.addEventListener(o,r,i),{destroy:function(){e.removeEventListener(o,r,i)}}}t.exports=function(e,t,o,n,i){return"function"==typeof e.addEventListener?r.apply(null,arguments):"function"==typeof o?r.bind(null,document).apply(null,arguments):("string"==typeof e&&(e=document.querySelectorAll(e)),Array.prototype.map.call(e,function(e){return r(e,t,o,n,i)}))}},{"./closest":13}]},{},[3]);