function t(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},i=e.parcelRequired7c6;null==i&&((i=function(t){if(t in n)return n[t].exports;if(t in a){var e=a[t];delete a[t];var i={id:t,exports:{}};return n[t]=i,e.call(i.exports,i,i.exports),i.exports}var o=new Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(t,e){a[t]=e},e.parcelRequired7c6=i);var o=i("3jm6Q"),r=i("aO2mr"),s=i("jSHMx"),u=i("2shzp");var l=async function({page:e=1,query:n="",isSearch:a=!1}){const i=a?"search/movie":"trending/movie/day",o=new URLSearchParams({api_key:"ad24807293275bef83ede161311e71e0",page:e,query:n});return await t(u).get(`https://api.themoviedb.org/3/${i}?${o}`).then((t=>200!==t.status?Promise.reject(`Error: ${t.message}`):t.data)).catch((t=>Promise.reject((t=>alert("Something wrong with request to server!")))))},c=i("gjiCh"),d=(s=i("jSHMx"),i("916P1"));function p(t){const e=e=>t.poster_path?`https://image.tmdb.org/t/p/w${e}${t.poster_path}`:` https://via.placeholder.com/${e}x${1.5*e}/fbf7f7c1/8c8c8c/?text=No+Poster`;return`<div class="modal-main__film-poster list">\n        <img\n        class="filmCard__img"\n        srcset="${e(400)} 1x, ${e(500)} 2x"\n        src="${e(400)}"\n        width="280"\n        height="398"\n        alt="${t.title?t.title:"Poster"}"/>\n        </div>\n\n        <div class="modal-main__film-info list">\n          <h2 id="modal-main__title" class="modal-main__title">\n            ${t.title?t.title:"-"}\n          </h2>\n          <table>\n            <tbody>\n              <tr>\n                <th><span>Vote</span>/<span>Votes</span></th>\n                <td>\n                  <span class="modal-main__article-rating">${t.vote_average?t.vote_average:"-"}</span> /\n                  <span class="modal-main__article-votes">${t.vote_count?t.vote_count:"-"}</span>\n                </td>\n              </tr>\n              <tr>\n                <th>Popularity</th>\n                <td>${t.popularity?t.popularity:"-"}</td>\n              </tr>\n              <tr>\n                <th>Original Title</th>\n                <td>${t.original_title?t.original_title:"-"}</td>\n              </tr>\n              <tr>\n                <th>Genre</th>\n                <td>${t.genre_ids?(0,d.getFilmGenres)(t.genre_ids):"Genre is not defined"}</td>\n              </tr>\n            </tbody>\n          </table>\n          <div>\n            <h3 class="modal-main__article-title">About</h3>\n            <p class="modal-main__article">\n            ${t.overview?t.overview:"-"}\n            </p>\n          </div>\n          <div class="modal-main__btn">\n            <button\n              type="button"\n              class="button button--accent modal-main__btn-watched"\n            >\n              Add to watched\n            </button>\n            <button\n              type="button"\n              class="button button--black modal-main__btn-queue"\n            >\n              Add to queue\n            </button>\n          </div>\n        </div>`}(0,s.fetchDataFromStorage)("requestResults");function f(t,e){window.addEventListener("keydown",m),document.body.classList.add("show-modal");const n=(0,s.fetchDataFromStorage)("requestResults"),a=Number(t),i=n.find((t=>t.id===a));e.innerHTML=p(i)}function h(){window.removeEventListener("keydown",m),document.body.classList.remove("show-modal")}function g(t){t.currentTarget===t.target&&h()}function m(t){"Escape"===t.code&&h()}var v,_={};
/*!
 * TOAST UI Pagination
 * @version 3.4.1
 * @author NHN FE Development Team <dl_javascript@nhn.com>
 * @license MIT
 */window,v=function(){return function(t){var e={};function n(a){if(e[a])return e[a].exports;var i=e[a]={i:a,l:!1,exports:{}};return t[a].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(a,i,function(e){return t[e]}.bind(null,i));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="dist",n(n.s=10)}([function(t,e,n){t.exports=function(t,e){var n,a,i,o,r=Object.prototype.hasOwnProperty;for(i=1,o=arguments.length;i<o;i+=1)for(a in n=arguments[i])r.call(n,a)&&(t[a]=n[a]);return t}},function(t,e,n){t.exports=function(t){return void 0===t}},function(t,e,n){t.exports=function(t){return t instanceof Array}},function(t,e,n){var a=n(2),i=n(17),o=n(6);t.exports=function(t,e,n){a(t)?i(t,e,n):o(t,e,n)}},function(t,e,n){t.exports=function(t){return"string"==typeof t||t instanceof String}},function(t,e,n){t.exports=function(t){return t instanceof Function}},function(t,e,n){t.exports=function(t,e,n){var a;for(a in n=n||null,t)if(t.hasOwnProperty(a)&&!1===e.call(n,t[a],a,t))break}},function(t,e,n){var a=n(18),i=n(0);t.exports=function(t,e){var n;return e||(e=t,t=null),n=e.init||function(){},t&&a(n,t),e.hasOwnProperty("static")&&(i(n,e.static),delete e.static),i(n.prototype,e),n}},function(t,e,n){var a=n(2);t.exports=function(t,e,n){var i,o;if(n=n||0,!a(e))return-1;if(Array.prototype.indexOf)return Array.prototype.indexOf.call(e,t,n);for(o=e.length,i=n;n>=0&&i<o;i+=1)if(e[i]===t)return i;return-1}},function(t,e,n){var a=n(29),i=n(30),o=n(5),r={capitalizeFirstLetter:function(t){return t.substring(0,1).toUpperCase()+t.substring(1,t.length)},isContained:function(t,e){return!!e&&(t===e||e.contains(t))},createElementByTemplate:function(t,e){var n=document.createElement("div"),i=o(t)?t(e):a(t,e);return n.innerHTML=i,n.firstChild},bind:function(t,e){var n,a=Array.prototype.slice;return t.bind?t.bind.apply(t,a.call(arguments,1)):(n=a.call(arguments,2),function(){return t.apply(e,n.length?n.concat(a.call(arguments)):arguments)})},sendHostName:function(){i("pagination","UA-129987462-1")}};t.exports=r},function(t,e,n){n(11),t.exports=n(12)},function(t,e,n){},function(t,e,n){var a=n(13),i=n(7),o=n(0),r=n(1),s=n(20),u=n(9),l={totalItems:10,itemsPerPage:10,visiblePages:10,page:1,centerAlign:!1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",usageStatistics:!0},c=i({init:function(t,e){this._options=o({},l,e),this._currentPage=0,this._view=new s(t,this._options,u.bind(this._onClickHandler,this)),this._paginate(),this._options.usageStatistics&&u.sendHostName()},_setCurrentPage:function(t){this._currentPage=t||this._options.page},_getLastPage:function(){var t=Math.ceil(this._options.totalItems/this._options.itemsPerPage);return t||1},_getPageIndex:function(t){var e;return this._options.centerAlign?(e=t-Math.floor(this._options.visiblePages/2),e=Math.max(e,1),e=Math.min(e,this._getLastPage()-this._options.visiblePages+1)):Math.ceil(t/this._options.visiblePages)},_getRelativePage:function(t){var e="prev"===t,n=this.getCurrentPage();return e?n-1:n+1},_getMorePageIndex:function(t){var e=this._getPageIndex(this.getCurrentPage()),n=this._options.visiblePages,a="prev"===t;return this._options.centerAlign?a?e-1:e+n:a?(e-1)*n:e*n+1},_convertToValidPage:function(t){var e=this._getLastPage();return t=Math.max(t,1),t=Math.min(t,e)},_paginate:function(t){var e=this._makeViewData(t||this._options.page);this._setCurrentPage(t),this._view.update(e)},_makeViewData:function(t){var e={},n=this._getLastPage(),a=this._getPageIndex(t),i=this._getPageIndex(n),o=this._getEdge(t);return e.leftPageNumber=o.left,e.rightPageNumber=o.right,e.prevMore=a>1,e.nextMore=a<i,e.page=t,e.currentPageIndex=t,e.lastPage=n,e.lastPageListIndex=n,e},_getEdge:function(t){var e,n,a,i=this._getLastPage(),o=this._options.visiblePages,r=this._getPageIndex(t);return this._options.centerAlign?(a=Math.floor(o/2),(n=(e=Math.max(t-a,1))+o-1)>i&&(e=Math.max(i-o+1,1),n=i)):(e=(r-1)*o+1,n=r*o,n=Math.min(n,i)),{left:e,right:n}},_onClickHandler:function(t,e){switch(t){case"first":e=1;break;case"prev":e=this._getRelativePage("prev");break;case"next":e=this._getRelativePage("next");break;case"prevMore":e=this._getMorePageIndex("prev");break;case"nextMore":e=this._getMorePageIndex("next");break;case"last":e=this._getLastPage();break;default:if(!e)return}this.movePageTo(e)},reset:function(t){r(t)&&(t=this._options.totalItems),this._options.totalItems=t,this._paginate(1)},movePageTo:function(t){t=this._convertToValidPage(t),this.invoke("beforeMove",{page:t})&&(this._paginate(t),this.fire("afterMove",{page:t}))},setTotalItems:function(t){this._options.totalItems=t},setItemsPerPage:function(t){this._options.itemsPerPage=t},getCurrentPage:function(){return this._currentPage||this._options.page}});a.mixin(c),t.exports=c},function(t,e,n){var a=n(0),i=n(14),o=n(4),r=n(16),s=n(2),u=n(5),l=n(3),c=/\s+/g;function d(){this.events=null,this.contexts=null}d.mixin=function(t){a(t.prototype,d.prototype)},d.prototype._getHandlerItem=function(t,e){var n={handler:t};return e&&(n.context=e),n},d.prototype._safeEvent=function(t){var e,n=this.events;return n||(n=this.events={}),t&&((e=n[t])||(e=[],n[t]=e),n=e),n},d.prototype._safeContext=function(){var t=this.contexts;return t||(t=this.contexts=[]),t},d.prototype._indexOfContext=function(t){for(var e=this._safeContext(),n=0;e[n];){if(t===e[n][0])return n;n+=1}return-1},d.prototype._memorizeContext=function(t){var e,n;i(t)&&(e=this._safeContext(),(n=this._indexOfContext(t))>-1?e[n][1]+=1:e.push([t,1]))},d.prototype._forgetContext=function(t){var e,n;i(t)&&(e=this._safeContext(),(n=this._indexOfContext(t))>-1&&(e[n][1]-=1,e[n][1]<=0&&e.splice(n,1)))},d.prototype._bindEvent=function(t,e,n){var a=this._safeEvent(t);this._memorizeContext(n),a.push(this._getHandlerItem(e,n))},d.prototype.on=function(t,e,n){var a=this;o(t)?(t=t.split(c),l(t,(function(t){a._bindEvent(t,e,n)}))):r(t)&&(n=e,l(t,(function(t,e){a.on(e,t,n)})))},d.prototype.once=function(t,e,n){var a=this;if(r(t))return n=e,void l(t,(function(t,e){a.once(e,t,n)}));this.on(t,(function i(){e.apply(n,arguments),a.off(t,i,n)}),n)},d.prototype._spliceMatches=function(t,e){var n,a=0;if(s(t))for(n=t.length;a<n;a+=1)!0===e(t[a])&&(t.splice(a,1),n-=1,a-=1)},d.prototype._matchHandler=function(t){var e=this;return function(n){var a=t===n.handler;return a&&e._forgetContext(n.context),a}},d.prototype._matchContext=function(t){var e=this;return function(n){var a=t===n.context;return a&&e._forgetContext(n.context),a}},d.prototype._matchHandlerAndContext=function(t,e){var n=this;return function(a){var i=t===a.handler,o=e===a.context,r=i&&o;return r&&n._forgetContext(a.context),r}},d.prototype._offByEventName=function(t,e){var n=this,a=u(e),i=n._matchHandler(e);t=t.split(c),l(t,(function(t){var e=n._safeEvent(t);a?n._spliceMatches(e,i):(l(e,(function(t){n._forgetContext(t.context)})),n.events[t]=[])}))},d.prototype._offByHandler=function(t){var e=this,n=this._matchHandler(t);l(this._safeEvent(),(function(t){e._spliceMatches(t,n)}))},d.prototype._offByObject=function(t,e){var n,a=this;this._indexOfContext(t)<0?l(t,(function(t,e){a.off(e,t)})):o(e)?(n=this._matchContext(t),a._spliceMatches(this._safeEvent(e),n)):u(e)?(n=this._matchHandlerAndContext(e,t),l(this._safeEvent(),(function(t){a._spliceMatches(t,n)}))):(n=this._matchContext(t),l(this._safeEvent(),(function(t){a._spliceMatches(t,n)})))},d.prototype.off=function(t,e){o(t)?this._offByEventName(t,e):arguments.length?u(t)?this._offByHandler(t):r(t)&&this._offByObject(t,e):(this.events={},this.contexts=[])},d.prototype.fire=function(t){this.invoke.apply(this,arguments)},d.prototype.invoke=function(t){var e,n,a,i;if(!this.hasListener(t))return!0;for(e=this._safeEvent(t),n=Array.prototype.slice.call(arguments,1),a=0;e[a];){if(!1===(i=e[a]).handler.apply(i.context,n))return!1;a+=1}return!0},d.prototype.hasListener=function(t){return this.getListenerLength(t)>0},d.prototype.getListenerLength=function(t){return this._safeEvent(t).length},t.exports=d},function(t,e,n){var a=n(1),i=n(15);t.exports=function(t){return!a(t)&&!i(t)}},function(t,e,n){t.exports=function(t){return null===t}},function(t,e,n){t.exports=function(t){return t===Object(t)}},function(t,e,n){t.exports=function(t,e,n){var a=0,i=t.length;for(n=n||null;a<i&&!1!==e.call(n,t[a],a,t);a+=1);}},function(t,e,n){var a=n(19);t.exports=function(t,e){var n=a(e.prototype);n.constructor=t,t.prototype=n}},function(t,e,n){t.exports=function(t){function e(){}return e.prototype=t,new e}},function(t,e,n){var a=n(3),i=n(7),o=n(21),r=n(22),s=n(24),u=n(25),l=n(0),c=n(4),d=n(28),p=n(9),f={page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'},h=["first","prev","next","last"],g=["prev","next"],m=i({init:function(t,e,n){this._containerElement=null,this._firstItemClassName=e.firstItemClassName,this._lastItemClassName=e.lastItemClassName,this._template=l({},f,e.template),this._buttons={},this._enabledPageElements=[],this._setRootElement(t),this._setMoveButtons(),this._setDisabledMoveButtons(),this._setMoreButtons(),this._attachClickEvent(n)},_setRootElement:function(t){if(c(t)?t=document.getElementById(t)||document.querySelector(t):t.jquery&&(t=t[0]),!d(t))throw new Error("The container element is invalid.");this._containerElement=t},_setMoveButtons:function(){a(h,(function(t){this._buttons[t]=p.createElementByTemplate(this._template.moveButton,{type:t})}),this)},_setDisabledMoveButtons:function(){a(h,(function(t){var e="disabled"+p.capitalizeFirstLetter(t);this._buttons[e]=p.createElementByTemplate(this._template.disabledMoveButton,{type:t})}),this)},_setMoreButtons:function(){a(g,(function(t){var e=t+"More";this._buttons[e]=p.createElementByTemplate(this._template.moreButton,{type:t})}),this)},_getContainerElement:function(){return this._containerElement},_appendFirstButton:function(t){var e;e=t.page>1?this._buttons.first:this._buttons.disabledFirst,this._getContainerElement().appendChild(e)},_appendPrevButton:function(t){var e;e=t.currentPageIndex>1?this._buttons.prev:this._buttons.disabledPrev,this._getContainerElement().appendChild(e)},_appendNextButton:function(t){var e;e=t.currentPageIndex<t.lastPageListIndex?this._buttons.next:this._buttons.disabledNext,this._getContainerElement().appendChild(e)},_appendLastButton:function(t){var e;e=t.page<t.lastPage?this._buttons.last:this._buttons.disabledLast,this._getContainerElement().appendChild(e)},_appendPrevMoreButton:function(t){var e;t.prevMore&&(e=this._buttons.prevMore,u(e,this._firstItemClassName),this._getContainerElement().appendChild(e))},_appendNextMoreButton:function(t){var e;t.nextMore&&(e=this._buttons.nextMore,u(e,this._lastItemClassName),this._getContainerElement().appendChild(e))},_appendPages:function(t){var e,n,a=t.leftPageNumber,i=t.rightPageNumber;for(n=a;n<=i;n+=1)n===t.page?e=p.createElementByTemplate(this._template.currentPage,{page:n}):(e=p.createElementByTemplate(this._template.page,{page:n}),this._enabledPageElements.push(e)),n!==a||t.prevMore||u(e,this._firstItemClassName),n!==i||t.nextMore||u(e,this._lastItemClassName),this._getContainerElement().appendChild(e)},_attachClickEvent:function(t){var e=this._getContainerElement();r(e,"click",(function(e){var n,a,i=o(e);s(e),(a=this._getButtonType(i))||(n=this._getPageNumber(i)),t(a,n)}),this)},_getButtonType:function(t){var e,n=this._buttons;return a(n,(function(n,a){return!p.isContained(t,n)||(e=a,!1)}),this),e},_getPageNumber:function(t){var e,n=this._findPageElement(t);return n&&(e=parseInt(n.innerText,10)),e},_findPageElement:function(t){for(var e,n=0,a=this._enabledPageElements.length;n<a;n+=1)if(e=this._enabledPageElements[n],p.isContained(t,e))return e;return null},_empty:function(){this._enabledPageElements=[],a(this._buttons,(function(t,e){this._buttons[e]=t.cloneNode(!0)}),this),this._getContainerElement().innerHTML=""},update:function(t){this._empty(),this._appendFirstButton(t),this._appendPrevButton(t),this._appendPrevMoreButton(t),this._appendPages(t),this._appendNextMoreButton(t),this._appendNextButton(t),this._appendLastButton(t)}});t.exports=m},function(t,e,n){t.exports=function(t){return t.target||t.srcElement}},function(t,e,n){var a=n(4),i=n(3),o=n(23);function r(t,e,n,a){function r(e){n.call(a||t,e||window.event)}"addEventListener"in t?t.addEventListener(e,r):"attachEvent"in t&&t.attachEvent("on"+e,r),function(t,e,n,a){var r=o(t,e),s=!1;i(r,(function(t){return t.handler!==n||(s=!0,!1)})),s||r.push({handler:n,wrappedHandler:a})}(t,e,n,r)}t.exports=function(t,e,n,o){a(e)?i(e.split(/\s+/g),(function(e){r(t,e,n,o)})):i(e,(function(e,a){r(t,a,e,n)}))}},function(t,e,n){var a="_feEventKey";t.exports=function(t,e){var n,i=t[a];return i||(i=t[a]={}),(n=i[e])||(n=i[e]=[]),n}},function(t,e,n){t.exports=function(t){t.preventDefault?t.preventDefault():t.returnValue=!1}},function(t,e,n){var a=n(3),i=n(8),o=n(26),r=n(27);t.exports=function(t){var e,n=Array.prototype.slice.call(arguments,1),s=t.classList,u=[];s?a(n,(function(e){t.classList.add(e)})):((e=o(t))&&(n=[].concat(e.split(/\s+/),n)),a(n,(function(t){i(t,u)<0&&u.push(t)})),r(t,u))}},function(t,e,n){var a=n(1);t.exports=function(t){return t&&t.className?a(t.className.baseVal)?t.className:t.className.baseVal:""}},function(t,e,n){var a=n(2),i=n(1);t.exports=function(t,e){e=(e=a(e)?e.join(" "):e).replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),i(t.className.baseVal)?t.className=e:t.className.baseVal=e}},function(t,e,n){t.exports=function(t){return"object"==typeof HTMLElement?t&&(t instanceof HTMLElement||!!t.nodeType):!(!t||!t.nodeType)}},function(t,e,n){var a=n(8),i=n(3),o=n(2),r=n(4),s=n(0),u=/{{\s?|\s?}}/g,l=/^[a-zA-Z0-9_@]+\[[a-zA-Z0-9_@"']+\]$/,c=/\[\s?|\s?\]/,d=/^[a-zA-Z_]+\.[a-zA-Z_]+$/,p=/\./,f=/^["']\w+["']$/,h=/"|'/g,g=/^-?\d+\.?\d*$/,m={if:function(t,e,n){var a=function(t,e){var n=[t],a=[],o=0,r=0;return i(e,(function(t,i){0===t.indexOf("if")?o+=1:"/if"===t?o-=1:o||0!==t.indexOf("elseif")&&"else"!==t||(n.push("else"===t?["true"]:t.split(" ").slice(1)),a.push(e.slice(r,i)),r=i+1)})),a.push(e.slice(r)),{exps:n,sourcesInsideIf:a}}(t,e),o=!1,r="";return i(a.exps,(function(t,e){return(o=b(t,n))&&(r=x(a.sourcesInsideIf[e],n)),!o})),r},each:function(t,e,n){var a=b(t,n),r=o(a)?"@index":"@key",u={},l="";return i(a,(function(t,a){u[r]=a,u["@this"]=t,s(n,u),l+=x(e.slice(),n)})),l},with:function(t,e,n){var i=a("as",t),o=t[i+1],r=b(t.slice(0,i),n),u={};return u[o]=r,x(e,s(n,u))||""}},v=3==="a".split(/a/).length?function(t,e){return t.split(e)}:function(t,e){var n,a,i=[],o=0;for(e.global||(e=new RegExp(e,"g")),n=e.exec(t);null!==n;)a=n.index,i.push(t.slice(o,a)),o=a+n[0].length,n=e.exec(t);return i.push(t.slice(o)),i};function _(t,e){var n,a=e[t];return"true"===t?a=!0:"false"===t?a=!1:f.test(t)?a=t.replace(h,""):l.test(t)?a=_((n=t.split(c))[0],e)[_(n[1],e)]:d.test(t)?a=_((n=t.split(p))[0],e)[n[1]]:g.test(t)&&(a=parseFloat(t)),a}function y(t,e,n){for(var a,i,o,s,u=m[t],l=1,c=2,d=e[c];l&&r(d);)0===d.indexOf(t)?l+=1:0===d.indexOf("/"+t)&&(l-=1,a=c),d=e[c+=2];if(l)throw Error(t+" needs {{/"+t+"}} expression.");return e[0]=u(e[0].split(" ").slice(1),(i=0,o=a,(s=e.splice(i+1,o-i)).pop(),s),n),e}function b(t,e){var n=_(t[0],e);return n instanceof Function?function(t,e,n){var a=[];return i(e,(function(t){a.push(_(t,n))})),t.apply(null,a)}(n,t.slice(1),e):n}function x(t,e){for(var n,a,i,o=1,s=t[o];r(s);)a=(n=s.split(" "))[0],m[a]?(i=y(a,t.splice(o,t.length-o),e),t=t.concat(i)):t[o]=b(n,e),s=t[o+=2];return t.join("")}t.exports=function(t,e){return x(v(t,u),e)}},function(t,e,n){var a=n(1),i=n(31);t.exports=function(t,e){var n=location.hostname,o="TOAST UI "+t+" for "+n+": Statistics",r=window.localStorage.getItem(o);(a(window.tui)||!1!==window.tui.usageStatistics)&&(r&&!function(t){return(new Date).getTime()-t>6048e5}(r)||(window.localStorage.setItem(o,(new Date).getTime()),setTimeout((function(){"interactive"!==document.readyState&&"complete"!==document.readyState||i("https://www.google-analytics.com/collect",{v:1,t:"event",tid:e,cid:n,dp:n,dh:t,el:t,ec:"use"})}),1e3)))}},function(t,e,n){var a=n(6);t.exports=function(t,e){var n=document.createElement("img"),i="";return a(e,(function(t,e){i+="&"+e+"="+t})),i=i.substring(1),n.src=t+"?"+i,n.style.display="none",document.body.appendChild(n),document.body.removeChild(n),n}}])},_=v();const y=document.getElementById("pagination"),b={totalItems:200,itemsPerPage:20,visiblePages:5,usageStatistics:!1,page:1,centerAlign:!0,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}};var x=new(t(_))(y,b),E=(s=i("jSHMx"),function(t){if("watched"!=t.target.className)return;if(null!==(0,s.fetchDataFromStorage)("watchedResult")){let e=(0,s.fetchDataFromStorage)("watchedResult");if(e.map((t=>t.id)).indexOf(Number(t.target.dataset.value))>-1)return;{let n=(0,s.fetchDataFromStorage)("requestResults");for(let a=0;a<n.length;a++)n[a].id==t.target.dataset.value&&(t.target.innerHTML="WATCHED",e.push(n[a]),(0,s.saveDataToStorage)("watchedResult",e))}}else{let e=(0,s.fetchDataFromStorage)("requestResults");for(let n=0;n<e.length;n++)e[n].id==t.target.dataset.value&&(t.target.innerHTML="WATCHED",(0,s.saveDataToStorage)("watchedResult",[e[n]]))}});s=i("jSHMx");var P=function(t){if("queue"!=t.target.className)return;if(null!==(0,s.fetchDataFromStorage)("queueResult")){let e=(0,s.fetchDataFromStorage)("queueResult");if(e.map((t=>t.id)).indexOf(Number(t.target.dataset.value))>-1)return;{let n=(0,s.fetchDataFromStorage)("requestResults");for(let a=0;a<n.length;a++)n[a].id==t.target.dataset.value&&(t.target.innerHTML="QUEUED",e.push(n[a]),(0,s.saveDataToStorage)("queueResult",e))}}else{let e=(0,s.fetchDataFromStorage)("requestResults");for(let n=0;n<e.length;n++)e[n].id==t.target.dataset.value&&(t.target.innerHTML="QUEUED",(0,s.saveDataToStorage)("queueResult",[e[n]]))}};class w{openModal(t){t.preventDefault(),this.modalRef.classList.add(this.showClass),document.body.classList.add(".modal-shown"),this.modalRef.removeAttribute("aria-hidden"),window.addEventListener("keydown",this.monitorEscKey.bind(this)),window.scrollTo(top)}closeModal({type:t,target:e,currentTarget:n}){"click"===t&&e!==n||(this.modalRef.classList.remove(this.showClass),document.body.classList.remove(".modal-shown"),this.modalRef.setAttribute("aria-hidden",!0),window.removeEventListener("keydown",this.monitorEscKey.bind(this)))}monitorEscKey(t){"Escape"===t.code&&this.closeModal(t)}constructor({showClass:t="is-open",modalRef:e}){e?(this.showClass=t,this.modalRef=e,this.modalRef.addEventListener("click",this.closeModal.bind(this)),this.modalRef.querySelectorAll("[data-mymodal-close]").forEach((t=>t.addEventListener("click",this.closeModal.bind(this))))):console.error("MyModal is initialized without modal refference:"+e)}}const M=document.querySelector(".gallery"),C=document.querySelector(".search-bar"),L=document.querySelector(".modal-main__film-wrap");if(M.addEventListener("click",(function(t){"IMG"===t.target.nodeName&&f(t.target.parentNode.dataset.id,L)})),null==C||C.addEventListener("submit",(function(t){t.preventDefault(),x.reset();T({page:1,query:`${t.target.search.value.trim().toLowerCase()}`})})),"/library.html"===window.location.pathname)(0,c.default)(!1),M.addEventListener("click",E),M.addEventListener("click",P);else S(),x.on("afterMove",(function(t){var e;const n=(null===(e=(0,s.fetchDataFromStorage)("searchQuery"))||void 0===e?void 0:e.query)||"";n?T({page:t.page,query:n}):S(t.page)}));function S(t=1){(0,c.default)(!0),localStorage.removeItem("searchQuery"),Promise.all([(0,o.default)(),l({page:t})]).then((([{genres:t},{results:e,total_results:n}])=>{(0,s.saveDataToStorage)("genres",t),(0,s.saveDataToStorage)("requestResults",e),x.setTotalItems(n),(0,r.default)({data:e,elementRef:M});const a={openModal:document.querySelector('[data-action="open-modal"]'),closeModalBtn:document.querySelector('[data-action="close-modal"]'),backdropModal:document.querySelector(".js-backdrop")};a.openModal.addEventListener("click",f),a.closeModalBtn.addEventListener("click",h),a.backdropModal.addEventListener("click",g),(0,c.default)(!1)})).catch((()=>{alert("There was an error during server request"),(0,c.default)(!1)}))}function T({page:t,query:e}){(0,c.default)(!0),l({page:t,query:e,isSearch:"true"}).then((({results:t,total_results:n})=>{if(!t.length)return function(){const t=document.querySelector(".input-error");t.classList.remove("hide"),setTimeout((()=>t.classList.add("hide")),4e3)}(),void(0,c.default)(!1);(0,s.saveDataToStorage)("searchQuery",{query:e}),(0,s.saveDataToStorage)("requestResults",t),x.setTotalItems(n),(0,r.default)({data:t,elementRef:M}),M.insertAdjacentHTML("afterbegin",`<div class="search-query"> Search results for the query: '${e}'<div>`),(0,c.default)(!1)}))}const I=document.getElementById("modal-dev");if(I){const t=new w({modalRef:I});document.querySelector("[data-open-modal-dev]").addEventListener("click",t.openModal.bind(t))}const B=document.getElementById("modal-login");if(console.log(B),B){const t=new w({modalRef:B});document.querySelector("[data-open-modal-login]").addEventListener("click",t.openModal.bind(t))}
//# sourceMappingURL=index.fe3101ac.js.map
