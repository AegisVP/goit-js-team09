function t(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},i=e.parcelRequired7c6;null==i&&((i=function(t){if(t in n)return n[t].exports;if(t in a){var e=a[t];delete a[t];var i={id:t,exports:{}};return n[t]=i,e.call(i.exports,i,i.exports),i.exports}var o=new Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(t,e){a[t]=e},e.parcelRequired7c6=i);var o=i("3jm6Q"),s=i("aO2mr"),r=i("jSHMx"),u=i("2shzp");var c=async function({page:e=1,query:n="",isSearch:a=!1}){const i=a?"search/movie":"trending/movie/day",o=new URLSearchParams({api_key:"ad24807293275bef83ede161311e71e0",page:e,query:n});return await t(u).get(`https://api.themoviedb.org/3/${i}?${o}`).then((t=>200!==t.status?Promise.reject(`Error: ${t.message}`):t.data)).catch((t=>Promise.reject((t=>alert("Something wrong with request to server!")))))},l=i("gjiCh");(0,(r=i("jSHMx")).fetchDataFromStorage)("requestResults");function f(t){window.addEventListener("keydown",h),document.body.classList.add("show-modal");const e=(0,r.fetchDataFromStorage)("requestResults");let n;for(let a of e){const e=Number(t);if(a.id===e){n=a;break}}console.log(n)}function p(){window.removeEventListener("keydown",h),document.body.classList.remove("show-modal")}function d(t){t.currentTarget===t.target&&p()}function h(t){"Escape"===t.code&&p()}var g,m={};
/*!
 * TOAST UI Pagination
 * @version 3.4.1
 * @author NHN FE Development Team <dl_javascript@nhn.com>
 * @license MIT
 */window,g=function(){return function(t){var e={};function n(a){if(e[a])return e[a].exports;var i=e[a]={i:a,l:!1,exports:{}};return t[a].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(a,i,function(e){return t[e]}.bind(null,i));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="dist",n(n.s=10)}([function(t,e,n){t.exports=function(t,e){var n,a,i,o,s=Object.prototype.hasOwnProperty;for(i=1,o=arguments.length;i<o;i+=1)for(a in n=arguments[i])s.call(n,a)&&(t[a]=n[a]);return t}},function(t,e,n){t.exports=function(t){return void 0===t}},function(t,e,n){t.exports=function(t){return t instanceof Array}},function(t,e,n){var a=n(2),i=n(17),o=n(6);t.exports=function(t,e,n){a(t)?i(t,e,n):o(t,e,n)}},function(t,e,n){t.exports=function(t){return"string"==typeof t||t instanceof String}},function(t,e,n){t.exports=function(t){return t instanceof Function}},function(t,e,n){t.exports=function(t,e,n){var a;for(a in n=n||null,t)if(t.hasOwnProperty(a)&&!1===e.call(n,t[a],a,t))break}},function(t,e,n){var a=n(18),i=n(0);t.exports=function(t,e){var n;return e||(e=t,t=null),n=e.init||function(){},t&&a(n,t),e.hasOwnProperty("static")&&(i(n,e.static),delete e.static),i(n.prototype,e),n}},function(t,e,n){var a=n(2);t.exports=function(t,e,n){var i,o;if(n=n||0,!a(e))return-1;if(Array.prototype.indexOf)return Array.prototype.indexOf.call(e,t,n);for(o=e.length,i=n;n>=0&&i<o;i+=1)if(e[i]===t)return i;return-1}},function(t,e,n){var a=n(29),i=n(30),o=n(5),s={capitalizeFirstLetter:function(t){return t.substring(0,1).toUpperCase()+t.substring(1,t.length)},isContained:function(t,e){return!!e&&(t===e||e.contains(t))},createElementByTemplate:function(t,e){var n=document.createElement("div"),i=o(t)?t(e):a(t,e);return n.innerHTML=i,n.firstChild},bind:function(t,e){var n,a=Array.prototype.slice;return t.bind?t.bind.apply(t,a.call(arguments,1)):(n=a.call(arguments,2),function(){return t.apply(e,n.length?n.concat(a.call(arguments)):arguments)})},sendHostName:function(){i("pagination","UA-129987462-1")}};t.exports=s},function(t,e,n){n(11),t.exports=n(12)},function(t,e,n){},function(t,e,n){var a=n(13),i=n(7),o=n(0),s=n(1),r=n(20),u=n(9),c={totalItems:10,itemsPerPage:10,visiblePages:10,page:1,centerAlign:!1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",usageStatistics:!0},l=i({init:function(t,e){this._options=o({},c,e),this._currentPage=0,this._view=new r(t,this._options,u.bind(this._onClickHandler,this)),this._paginate(),this._options.usageStatistics&&u.sendHostName()},_setCurrentPage:function(t){this._currentPage=t||this._options.page},_getLastPage:function(){var t=Math.ceil(this._options.totalItems/this._options.itemsPerPage);return t||1},_getPageIndex:function(t){var e;return this._options.centerAlign?(e=t-Math.floor(this._options.visiblePages/2),e=Math.max(e,1),e=Math.min(e,this._getLastPage()-this._options.visiblePages+1)):Math.ceil(t/this._options.visiblePages)},_getRelativePage:function(t){var e="prev"===t,n=this.getCurrentPage();return e?n-1:n+1},_getMorePageIndex:function(t){var e=this._getPageIndex(this.getCurrentPage()),n=this._options.visiblePages,a="prev"===t;return this._options.centerAlign?a?e-1:e+n:a?(e-1)*n:e*n+1},_convertToValidPage:function(t){var e=this._getLastPage();return t=Math.max(t,1),t=Math.min(t,e)},_paginate:function(t){var e=this._makeViewData(t||this._options.page);this._setCurrentPage(t),this._view.update(e)},_makeViewData:function(t){var e={},n=this._getLastPage(),a=this._getPageIndex(t),i=this._getPageIndex(n),o=this._getEdge(t);return e.leftPageNumber=o.left,e.rightPageNumber=o.right,e.prevMore=a>1,e.nextMore=a<i,e.page=t,e.currentPageIndex=t,e.lastPage=n,e.lastPageListIndex=n,e},_getEdge:function(t){var e,n,a,i=this._getLastPage(),o=this._options.visiblePages,s=this._getPageIndex(t);return this._options.centerAlign?(a=Math.floor(o/2),(n=(e=Math.max(t-a,1))+o-1)>i&&(e=Math.max(i-o+1,1),n=i)):(e=(s-1)*o+1,n=s*o,n=Math.min(n,i)),{left:e,right:n}},_onClickHandler:function(t,e){switch(t){case"first":e=1;break;case"prev":e=this._getRelativePage("prev");break;case"next":e=this._getRelativePage("next");break;case"prevMore":e=this._getMorePageIndex("prev");break;case"nextMore":e=this._getMorePageIndex("next");break;case"last":e=this._getLastPage();break;default:if(!e)return}this.movePageTo(e)},reset:function(t){s(t)&&(t=this._options.totalItems),this._options.totalItems=t,this._paginate(1)},movePageTo:function(t){t=this._convertToValidPage(t),this.invoke("beforeMove",{page:t})&&(this._paginate(t),this.fire("afterMove",{page:t}))},setTotalItems:function(t){this._options.totalItems=t},setItemsPerPage:function(t){this._options.itemsPerPage=t},getCurrentPage:function(){return this._currentPage||this._options.page}});a.mixin(l),t.exports=l},function(t,e,n){var a=n(0),i=n(14),o=n(4),s=n(16),r=n(2),u=n(5),c=n(3),l=/\s+/g;function f(){this.events=null,this.contexts=null}f.mixin=function(t){a(t.prototype,f.prototype)},f.prototype._getHandlerItem=function(t,e){var n={handler:t};return e&&(n.context=e),n},f.prototype._safeEvent=function(t){var e,n=this.events;return n||(n=this.events={}),t&&((e=n[t])||(e=[],n[t]=e),n=e),n},f.prototype._safeContext=function(){var t=this.contexts;return t||(t=this.contexts=[]),t},f.prototype._indexOfContext=function(t){for(var e=this._safeContext(),n=0;e[n];){if(t===e[n][0])return n;n+=1}return-1},f.prototype._memorizeContext=function(t){var e,n;i(t)&&(e=this._safeContext(),(n=this._indexOfContext(t))>-1?e[n][1]+=1:e.push([t,1]))},f.prototype._forgetContext=function(t){var e,n;i(t)&&(e=this._safeContext(),(n=this._indexOfContext(t))>-1&&(e[n][1]-=1,e[n][1]<=0&&e.splice(n,1)))},f.prototype._bindEvent=function(t,e,n){var a=this._safeEvent(t);this._memorizeContext(n),a.push(this._getHandlerItem(e,n))},f.prototype.on=function(t,e,n){var a=this;o(t)?(t=t.split(l),c(t,(function(t){a._bindEvent(t,e,n)}))):s(t)&&(n=e,c(t,(function(t,e){a.on(e,t,n)})))},f.prototype.once=function(t,e,n){var a=this;if(s(t))return n=e,void c(t,(function(t,e){a.once(e,t,n)}));this.on(t,(function i(){e.apply(n,arguments),a.off(t,i,n)}),n)},f.prototype._spliceMatches=function(t,e){var n,a=0;if(r(t))for(n=t.length;a<n;a+=1)!0===e(t[a])&&(t.splice(a,1),n-=1,a-=1)},f.prototype._matchHandler=function(t){var e=this;return function(n){var a=t===n.handler;return a&&e._forgetContext(n.context),a}},f.prototype._matchContext=function(t){var e=this;return function(n){var a=t===n.context;return a&&e._forgetContext(n.context),a}},f.prototype._matchHandlerAndContext=function(t,e){var n=this;return function(a){var i=t===a.handler,o=e===a.context,s=i&&o;return s&&n._forgetContext(a.context),s}},f.prototype._offByEventName=function(t,e){var n=this,a=u(e),i=n._matchHandler(e);t=t.split(l),c(t,(function(t){var e=n._safeEvent(t);a?n._spliceMatches(e,i):(c(e,(function(t){n._forgetContext(t.context)})),n.events[t]=[])}))},f.prototype._offByHandler=function(t){var e=this,n=this._matchHandler(t);c(this._safeEvent(),(function(t){e._spliceMatches(t,n)}))},f.prototype._offByObject=function(t,e){var n,a=this;this._indexOfContext(t)<0?c(t,(function(t,e){a.off(e,t)})):o(e)?(n=this._matchContext(t),a._spliceMatches(this._safeEvent(e),n)):u(e)?(n=this._matchHandlerAndContext(e,t),c(this._safeEvent(),(function(t){a._spliceMatches(t,n)}))):(n=this._matchContext(t),c(this._safeEvent(),(function(t){a._spliceMatches(t,n)})))},f.prototype.off=function(t,e){o(t)?this._offByEventName(t,e):arguments.length?u(t)?this._offByHandler(t):s(t)&&this._offByObject(t,e):(this.events={},this.contexts=[])},f.prototype.fire=function(t){this.invoke.apply(this,arguments)},f.prototype.invoke=function(t){var e,n,a,i;if(!this.hasListener(t))return!0;for(e=this._safeEvent(t),n=Array.prototype.slice.call(arguments,1),a=0;e[a];){if(!1===(i=e[a]).handler.apply(i.context,n))return!1;a+=1}return!0},f.prototype.hasListener=function(t){return this.getListenerLength(t)>0},f.prototype.getListenerLength=function(t){return this._safeEvent(t).length},t.exports=f},function(t,e,n){var a=n(1),i=n(15);t.exports=function(t){return!a(t)&&!i(t)}},function(t,e,n){t.exports=function(t){return null===t}},function(t,e,n){t.exports=function(t){return t===Object(t)}},function(t,e,n){t.exports=function(t,e,n){var a=0,i=t.length;for(n=n||null;a<i&&!1!==e.call(n,t[a],a,t);a+=1);}},function(t,e,n){var a=n(19);t.exports=function(t,e){var n=a(e.prototype);n.constructor=t,t.prototype=n}},function(t,e,n){t.exports=function(t){function e(){}return e.prototype=t,new e}},function(t,e,n){var a=n(3),i=n(7),o=n(21),s=n(22),r=n(24),u=n(25),c=n(0),l=n(4),f=n(28),p=n(9),d={page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'},h=["first","prev","next","last"],g=["prev","next"],m=i({init:function(t,e,n){this._containerElement=null,this._firstItemClassName=e.firstItemClassName,this._lastItemClassName=e.lastItemClassName,this._template=c({},d,e.template),this._buttons={},this._enabledPageElements=[],this._setRootElement(t),this._setMoveButtons(),this._setDisabledMoveButtons(),this._setMoreButtons(),this._attachClickEvent(n)},_setRootElement:function(t){if(l(t)?t=document.getElementById(t)||document.querySelector(t):t.jquery&&(t=t[0]),!f(t))throw new Error("The container element is invalid.");this._containerElement=t},_setMoveButtons:function(){a(h,(function(t){this._buttons[t]=p.createElementByTemplate(this._template.moveButton,{type:t})}),this)},_setDisabledMoveButtons:function(){a(h,(function(t){var e="disabled"+p.capitalizeFirstLetter(t);this._buttons[e]=p.createElementByTemplate(this._template.disabledMoveButton,{type:t})}),this)},_setMoreButtons:function(){a(g,(function(t){var e=t+"More";this._buttons[e]=p.createElementByTemplate(this._template.moreButton,{type:t})}),this)},_getContainerElement:function(){return this._containerElement},_appendFirstButton:function(t){var e;e=t.page>1?this._buttons.first:this._buttons.disabledFirst,this._getContainerElement().appendChild(e)},_appendPrevButton:function(t){var e;e=t.currentPageIndex>1?this._buttons.prev:this._buttons.disabledPrev,this._getContainerElement().appendChild(e)},_appendNextButton:function(t){var e;e=t.currentPageIndex<t.lastPageListIndex?this._buttons.next:this._buttons.disabledNext,this._getContainerElement().appendChild(e)},_appendLastButton:function(t){var e;e=t.page<t.lastPage?this._buttons.last:this._buttons.disabledLast,this._getContainerElement().appendChild(e)},_appendPrevMoreButton:function(t){var e;t.prevMore&&(e=this._buttons.prevMore,u(e,this._firstItemClassName),this._getContainerElement().appendChild(e))},_appendNextMoreButton:function(t){var e;t.nextMore&&(e=this._buttons.nextMore,u(e,this._lastItemClassName),this._getContainerElement().appendChild(e))},_appendPages:function(t){var e,n,a=t.leftPageNumber,i=t.rightPageNumber;for(n=a;n<=i;n+=1)n===t.page?e=p.createElementByTemplate(this._template.currentPage,{page:n}):(e=p.createElementByTemplate(this._template.page,{page:n}),this._enabledPageElements.push(e)),n!==a||t.prevMore||u(e,this._firstItemClassName),n!==i||t.nextMore||u(e,this._lastItemClassName),this._getContainerElement().appendChild(e)},_attachClickEvent:function(t){var e=this._getContainerElement();s(e,"click",(function(e){var n,a,i=o(e);r(e),(a=this._getButtonType(i))||(n=this._getPageNumber(i)),t(a,n)}),this)},_getButtonType:function(t){var e,n=this._buttons;return a(n,(function(n,a){return!p.isContained(t,n)||(e=a,!1)}),this),e},_getPageNumber:function(t){var e,n=this._findPageElement(t);return n&&(e=parseInt(n.innerText,10)),e},_findPageElement:function(t){for(var e,n=0,a=this._enabledPageElements.length;n<a;n+=1)if(e=this._enabledPageElements[n],p.isContained(t,e))return e;return null},_empty:function(){this._enabledPageElements=[],a(this._buttons,(function(t,e){this._buttons[e]=t.cloneNode(!0)}),this),this._getContainerElement().innerHTML=""},update:function(t){this._empty(),this._appendFirstButton(t),this._appendPrevButton(t),this._appendPrevMoreButton(t),this._appendPages(t),this._appendNextMoreButton(t),this._appendNextButton(t),this._appendLastButton(t)}});t.exports=m},function(t,e,n){t.exports=function(t){return t.target||t.srcElement}},function(t,e,n){var a=n(4),i=n(3),o=n(23);function s(t,e,n,a){function s(e){n.call(a||t,e||window.event)}"addEventListener"in t?t.addEventListener(e,s):"attachEvent"in t&&t.attachEvent("on"+e,s),function(t,e,n,a){var s=o(t,e),r=!1;i(s,(function(t){return t.handler!==n||(r=!0,!1)})),r||s.push({handler:n,wrappedHandler:a})}(t,e,n,s)}t.exports=function(t,e,n,o){a(e)?i(e.split(/\s+/g),(function(e){s(t,e,n,o)})):i(e,(function(e,a){s(t,a,e,n)}))}},function(t,e,n){var a="_feEventKey";t.exports=function(t,e){var n,i=t[a];return i||(i=t[a]={}),(n=i[e])||(n=i[e]=[]),n}},function(t,e,n){t.exports=function(t){t.preventDefault?t.preventDefault():t.returnValue=!1}},function(t,e,n){var a=n(3),i=n(8),o=n(26),s=n(27);t.exports=function(t){var e,n=Array.prototype.slice.call(arguments,1),r=t.classList,u=[];r?a(n,(function(e){t.classList.add(e)})):((e=o(t))&&(n=[].concat(e.split(/\s+/),n)),a(n,(function(t){i(t,u)<0&&u.push(t)})),s(t,u))}},function(t,e,n){var a=n(1);t.exports=function(t){return t&&t.className?a(t.className.baseVal)?t.className:t.className.baseVal:""}},function(t,e,n){var a=n(2),i=n(1);t.exports=function(t,e){e=(e=a(e)?e.join(" "):e).replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),i(t.className.baseVal)?t.className=e:t.className.baseVal=e}},function(t,e,n){t.exports=function(t){return"object"==typeof HTMLElement?t&&(t instanceof HTMLElement||!!t.nodeType):!(!t||!t.nodeType)}},function(t,e,n){var a=n(8),i=n(3),o=n(2),s=n(4),r=n(0),u=/{{\s?|\s?}}/g,c=/^[a-zA-Z0-9_@]+\[[a-zA-Z0-9_@"']+\]$/,l=/\[\s?|\s?\]/,f=/^[a-zA-Z_]+\.[a-zA-Z_]+$/,p=/\./,d=/^["']\w+["']$/,h=/"|'/g,g=/^-?\d+\.?\d*$/,m={if:function(t,e,n){var a=function(t,e){var n=[t],a=[],o=0,s=0;return i(e,(function(t,i){0===t.indexOf("if")?o+=1:"/if"===t?o-=1:o||0!==t.indexOf("elseif")&&"else"!==t||(n.push("else"===t?["true"]:t.split(" ").slice(1)),a.push(e.slice(s,i)),s=i+1)})),a.push(e.slice(s)),{exps:n,sourcesInsideIf:a}}(t,e),o=!1,s="";return i(a.exps,(function(t,e){return(o=x(t,n))&&(s=b(a.sourcesInsideIf[e],n)),!o})),s},each:function(t,e,n){var a=x(t,n),s=o(a)?"@index":"@key",u={},c="";return i(a,(function(t,a){u[s]=a,u["@this"]=t,r(n,u),c+=b(e.slice(),n)})),c},with:function(t,e,n){var i=a("as",t),o=t[i+1],s=x(t.slice(0,i),n),u={};return u[o]=s,b(e,r(n,u))||""}},v=3==="a".split(/a/).length?function(t,e){return t.split(e)}:function(t,e){var n,a,i=[],o=0;for(e.global||(e=new RegExp(e,"g")),n=e.exec(t);null!==n;)a=n.index,i.push(t.slice(o,a)),o=a+n[0].length,n=e.exec(t);return i.push(t.slice(o)),i};function _(t,e){var n,a=e[t];return"true"===t?a=!0:"false"===t?a=!1:d.test(t)?a=t.replace(h,""):c.test(t)?a=_((n=t.split(l))[0],e)[_(n[1],e)]:f.test(t)?a=_((n=t.split(p))[0],e)[n[1]]:g.test(t)&&(a=parseFloat(t)),a}function y(t,e,n){for(var a,i,o,r,u=m[t],c=1,l=2,f=e[l];c&&s(f);)0===f.indexOf(t)?c+=1:0===f.indexOf("/"+t)&&(c-=1,a=l),f=e[l+=2];if(c)throw Error(t+" needs {{/"+t+"}} expression.");return e[0]=u(e[0].split(" ").slice(1),(i=0,o=a,(r=e.splice(i+1,o-i)).pop(),r),n),e}function x(t,e){var n=_(t[0],e);return n instanceof Function?function(t,e,n){var a=[];return i(e,(function(t){a.push(_(t,n))})),t.apply(null,a)}(n,t.slice(1),e):n}function b(t,e){for(var n,a,i,o=1,r=t[o];s(r);)a=(n=r.split(" "))[0],m[a]?(i=y(a,t.splice(o,t.length-o),e),t=t.concat(i)):t[o]=x(n,e),r=t[o+=2];return t.join("")}t.exports=function(t,e){return b(v(t,u),e)}},function(t,e,n){var a=n(1),i=n(31);t.exports=function(t,e){var n=location.hostname,o="TOAST UI "+t+" for "+n+": Statistics",s=window.localStorage.getItem(o);(a(window.tui)||!1!==window.tui.usageStatistics)&&(s&&!function(t){return(new Date).getTime()-t>6048e5}(s)||(window.localStorage.setItem(o,(new Date).getTime()),setTimeout((function(){"interactive"!==document.readyState&&"complete"!==document.readyState||i("https://www.google-analytics.com/collect",{v:1,t:"event",tid:e,cid:n,dp:n,dh:t,el:t,ec:"use"})}),1e3)))}},function(t,e,n){var a=n(6);t.exports=function(t,e){var n=document.createElement("img"),i="";return a(e,(function(t,e){i+="&"+e+"="+t})),i=i.substring(1),n.src=t+"?"+i,n.style.display="none",document.body.appendChild(n),document.body.removeChild(n),n}}])},m=g();const v=document.getElementById("pagination"),_={totalItems:200,itemsPerPage:20,visiblePages:5,page:1,centerAlign:!0,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}};var y=new(t(m))(v,_),x=(r=i("jSHMx"),function(t){if("watched"!=t.target.className)return;if(null!==(0,r.fetchDataFromStorage)("watchedResult")){let e=(0,r.fetchDataFromStorage)("watchedResult");if(e.map((t=>t.id)).indexOf(Number(t.target.dataset.value))>-1)return;{let n=(0,r.fetchDataFromStorage)("requestResults");for(let a=0;a<n.length;a++)n[a].id==t.target.dataset.value&&(t.target.innerHTML="WATCHED",e.push(n[a]),(0,r.saveDataToStorage)("watchedResult",e))}}else{let e=(0,r.fetchDataFromStorage)("requestResults");for(let n=0;n<e.length;n++)e[n].id==t.target.dataset.value&&(t.target.innerHTML="WATCHED",(0,r.saveDataToStorage)("watchedResult",[e[n]]))}});r=i("jSHMx");var b=function(t){if("queue"!=t.target.className)return;if(null!==(0,r.fetchDataFromStorage)("queueResult")){let e=(0,r.fetchDataFromStorage)("queueResult");if(e.map((t=>t.id)).indexOf(Number(t.target.dataset.value))>-1)return;{let n=(0,r.fetchDataFromStorage)("requestResults");for(let a=0;a<n.length;a++)n[a].id==t.target.dataset.value&&(t.target.innerHTML="QUEUED",e.push(n[a]),(0,r.saveDataToStorage)("queueResult",e))}}else{let e=(0,r.fetchDataFromStorage)("requestResults");for(let n=0;n<e.length;n++)e[n].id==t.target.dataset.value&&(t.target.innerHTML="QUEUED",(0,r.saveDataToStorage)("queueResult",[e[n]]))}};class E{openModal(t){t.preventDefault(),this.modalRef.classList.add(this.showClass),document.body.classList.add(".modal-shown"),this.modalRef.removeAttribute("aria-hidden"),window.addEventListener("keydown",this.monitorEscKey.bind(this)),window.scrollTo(top)}closeModal({type:t,target:e,currentTarget:n}){"click"===t&&e!==n||(this.modalRef.classList.remove(this.showClass),document.body.classList.remove(".modal-shown"),this.modalRef.setAttribute("aria-hidden",!0),window.removeEventListener("keydown",this.monitorEscKey.bind(this)))}monitorEscKey(t){"Escape"===t.code&&this.closeModal(t)}constructor({showClass:t="is-open",modalRef:e}){e?(this.showClass=t,this.modalRef=e,this.modalRef.addEventListener("click",this.closeModal.bind(this)),this.modalRef.querySelectorAll("[data-mymodal-close]").forEach((t=>t.addEventListener("click",this.closeModal.bind(this))))):console.error("MyModal is initialized without modal refference:"+e)}}const P=document.querySelector(".gallery"),M=document.querySelector(".search-bar");if(P.addEventListener("click",(function(t){"IMG"===t.target.nodeName&&f(t.target.parentNode.dataset.id)})),null==M||M.addEventListener("submit",(function(t){t.preventDefault(),y.reset();const e=t.target.search.value.trim().toLowerCase();(0,r.saveDataToStorage)("searchQuery",e),c({page:"1",query:`${e}`,isSearch:"true"}).then((({results:t})=>{t.length?((0,r.saveDataToStorage)("requestResults",t),(0,s.default)({data:t,elementRef:P}),(0,l.default)(!1)):function(){const t=document.querySelector(".input-error");t.classList.remove("hide"),setTimeout((()=>t.classList.add("hide")),4e3)}()}))})),localStorage.getItem("genres")||(0,o.default)({}).then((({genres:t})=>{(0,r.saveDataToStorage)("genres",t)})),"/library.html"===window.location.pathname)C();else w(),y.on("beforeMove",(function(t){(0,l.default)(!0)})),y.on("afterMove",(function(t){w(t.page)}));function w(t=1){c({page:t}).then((({results:t,total_results:e})=>{(0,r.saveDataToStorage)("requestResults",t),y.setTotalItems(e),(0,s.default)({data:t,elementRef:P});const n={openModal:document.querySelector('[data-action="open-modal"]'),closeModalBtn:document.querySelector('[data-action="close-modal"]'),backdropModal:document.querySelector(".js-backdrop")};n.openModal.addEventListener("click",f),n.closeModalBtn.addEventListener("click",p),n.backdropModal.addEventListener("click",d),(0,l.default)(!1),(0,o.default)({}).then((({genres:t})=>{(0,r.saveDataToStorage)("genres",t)}))}))}function C(){(0,l.default)(!1),P.addEventListener("click",x),P.addEventListener("click",b)}C();const L=document.getElementById("modal-dev");if(L){const t=new E({modalRef:L});document.querySelector("[data-open-modal-dev]").addEventListener("click",t.openModal.bind(t))}
//# sourceMappingURL=index.277ed816.js.map
