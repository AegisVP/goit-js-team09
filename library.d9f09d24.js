!function(){function t(t){return t&&t.__esModule?t.default:t}var e,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,u=/^0o[0-7]+$/i,f=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,a=c||l||Function("return this")(),s=Object.prototype.toString,d=Math.max,p=Math.min,v=function(){return a.Date.now()};function b(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function m(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==s.call(t)}(t))return NaN;if(b(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=b(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var n=r.test(t);return n||u.test(t)?f(t.slice(2),n?2:8):i.test(t)?NaN:+t}e=function(t,e,n){var o,i,r,u,f,c,l=0,a=!1,s=!1,y=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function g(e){var n=o,r=i;return o=i=void 0,l=e,u=t.apply(r,n)}function T(t){return l=t,f=setTimeout(w,e),a?g(t):u}function j(t){var n=t-c;return void 0===c||n>=e||n<0||s&&t-l>=r}function w(){var t=v();if(j(t))return h(t);f=setTimeout(w,function(t){var n=e-(t-c);return s?p(n,r-(t-l)):n}(t))}function h(t){return f=void 0,y&&o?g(t):(o=i=void 0,u)}function O(){var t=v(),n=j(t);if(o=arguments,i=this,c=t,n){if(void 0===f)return T(c);if(s)return f=setTimeout(w,e),g(c)}return void 0===f&&(f=setTimeout(w,e)),u}return e=m(e)||0,b(n)&&(a=!!n.leading,r=(s="maxWait"in n)?d(m(n.maxWait)||0,e):r,y="trailing"in n?!!n.trailing:y),O.cancel=function(){void 0!==f&&clearTimeout(f),l=0,o=c=i=f=void 0},O.flush=function(){return void 0===f?u:h(v())},O};const y=document.querySelector("[data-scroll-top]");window.addEventListener("scroll",t(e)((function(){console.log(document.documentElement.scrollTop),document.body.scrollTop>500||document.documentElement.scrollTop>500?y.classList.add("visible"):y.classList.remove("visible")}),250,{leading:!0,trailing:!0}))}();
//# sourceMappingURL=library.d9f09d24.js.map
