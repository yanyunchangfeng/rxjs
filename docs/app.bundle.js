/*! Copyright By yanyunchangfeng */!function(t){var r={};function n(e){if(r[e])return r[e].exports;var o=r[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=r,n.d=function(t,r,e){n.o(t,r)||Object.defineProperty(t,r,{enumerable:!0,get:e})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,r){if(1&r&&(t=n(t)),8&r)return t;if(4&r&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(n.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&r&&"string"!=typeof t)for(var o in t)n.d(e,o,function(r){return t[r]}.bind(null,o));return e},n.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(r,"a",r),r},n.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},n.p="",n(n.s=28)}([function(t,r,n){"use strict";n.d(r,"a",function(){return o});
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var e=function(t,r){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var n in r)r.hasOwnProperty(n)&&(t[n]=r[n])})(t,r)};function o(t,r){function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}},function(t,r,n){"use strict";var e=n(19),o=n(2),i=n(11),u=n(12);var s=n(6),c=n(20),a=n(4);n.d(r,"a",function(){return f});var f=function(){function t(t){this._isScalar=!1,t&&(this._subscribe=t)}return t.prototype.lift=function(r){var n=new t;return n.source=this,n.operator=r,n},t.prototype.subscribe=function(t,r,n){var e=this.operator,s=function(t,r,n){if(t){if(t instanceof o.a)return t;if(t[i.a])return t[i.a]()}return t||r||n?new o.a(t,r,n):new o.a(u.a)}(t,r,n);if(e?s.add(e.call(s,this.source)):s.add(this.source||a.a.useDeprecatedSynchronousErrorHandling&&!s.syncErrorThrowable?this._subscribe(s):this._trySubscribe(s)),a.a.useDeprecatedSynchronousErrorHandling&&s.syncErrorThrowable&&(s.syncErrorThrowable=!1,s.syncErrorThrown))throw s.syncErrorValue;return s},t.prototype._trySubscribe=function(t){try{return this._subscribe(t)}catch(r){a.a.useDeprecatedSynchronousErrorHandling&&(t.syncErrorThrown=!0,t.syncErrorValue=r),Object(e.a)(t)?t.error(r):console.warn(r)}},t.prototype.forEach=function(t,r){var n=this;return new(r=p(r))(function(r,e){var o;o=n.subscribe(function(r){try{t(r)}catch(t){e(t),o&&o.unsubscribe()}},e,r)})},t.prototype._subscribe=function(t){var r=this.source;return r&&r.subscribe(t)},t.prototype[s.a]=function(){return this},t.prototype.pipe=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return 0===t.length?this:Object(c.b)(t)(this)},t.prototype.toPromise=function(t){var r=this;return new(t=p(t))(function(t,n){var e;r.subscribe(function(t){return e=t},function(t){return n(t)},function(){return t(e)})})},t.create=function(r){return new t(r)},t}();function p(t){if(t||(t=a.a.Promise||Promise),!t)throw new Error("no Promise impl found");return t}},function(t,r,n){"use strict";n.d(r,"a",function(){return f});var e=n(0),o=n(10),i=n(12),u=n(3),s=n(11),c=n(4),a=n(7),f=function(t){function r(n,e,o){var u=t.call(this)||this;switch(u.syncErrorValue=null,u.syncErrorThrown=!1,u.syncErrorThrowable=!1,u.isStopped=!1,arguments.length){case 0:u.destination=i.a;break;case 1:if(!n){u.destination=i.a;break}if("object"==typeof n){n instanceof r?(u.syncErrorThrowable=n.syncErrorThrowable,u.destination=n,n.add(u)):(u.syncErrorThrowable=!0,u.destination=new p(u,n));break}default:u.syncErrorThrowable=!0,u.destination=new p(u,n,e,o)}return u}return e.a(r,t),r.prototype[s.a]=function(){return this},r.create=function(t,n,e){var o=new r(t,n,e);return o.syncErrorThrowable=!1,o},r.prototype.next=function(t){this.isStopped||this._next(t)},r.prototype.error=function(t){this.isStopped||(this.isStopped=!0,this._error(t))},r.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},r.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,t.prototype.unsubscribe.call(this))},r.prototype._next=function(t){this.destination.next(t)},r.prototype._error=function(t){this.destination.error(t),this.unsubscribe()},r.prototype._complete=function(){this.destination.complete(),this.unsubscribe()},r.prototype._unsubscribeAndRecycle=function(){var t=this._parentOrParents;return this._parentOrParents=null,this.unsubscribe(),this.closed=!1,this.isStopped=!1,this._parentOrParents=t,this},r}(u.a),p=function(t){function r(r,n,e,u){var s,c=t.call(this)||this;c._parentSubscriber=r;var a=c;return Object(o.a)(n)?s=n:n&&(s=n.next,e=n.error,u=n.complete,n!==i.a&&(a=Object.create(n),Object(o.a)(a.unsubscribe)&&c.add(a.unsubscribe.bind(a)),a.unsubscribe=c.unsubscribe.bind(c))),c._context=a,c._next=s,c._error=e,c._complete=u,c}return e.a(r,t),r.prototype.next=function(t){if(!this.isStopped&&this._next){var r=this._parentSubscriber;c.a.useDeprecatedSynchronousErrorHandling&&r.syncErrorThrowable?this.__tryOrSetError(r,this._next,t)&&this.unsubscribe():this.__tryOrUnsub(this._next,t)}},r.prototype.error=function(t){if(!this.isStopped){var r=this._parentSubscriber,n=c.a.useDeprecatedSynchronousErrorHandling;if(this._error)n&&r.syncErrorThrowable?(this.__tryOrSetError(r,this._error,t),this.unsubscribe()):(this.__tryOrUnsub(this._error,t),this.unsubscribe());else if(r.syncErrorThrowable)n?(r.syncErrorValue=t,r.syncErrorThrown=!0):Object(a.a)(t),this.unsubscribe();else{if(this.unsubscribe(),n)throw t;Object(a.a)(t)}}},r.prototype.complete=function(){var t=this;if(!this.isStopped){var r=this._parentSubscriber;if(this._complete){var n=function(){return t._complete.call(t._context)};c.a.useDeprecatedSynchronousErrorHandling&&r.syncErrorThrowable?(this.__tryOrSetError(r,n),this.unsubscribe()):(this.__tryOrUnsub(n),this.unsubscribe())}else this.unsubscribe()}},r.prototype.__tryOrUnsub=function(t,r){try{t.call(this._context,r)}catch(t){if(this.unsubscribe(),c.a.useDeprecatedSynchronousErrorHandling)throw t;Object(a.a)(t)}},r.prototype.__tryOrSetError=function(t,r,n){if(!c.a.useDeprecatedSynchronousErrorHandling)throw new Error("bad call");try{r.call(this._context,n)}catch(r){return c.a.useDeprecatedSynchronousErrorHandling?(t.syncErrorValue=r,t.syncErrorThrown=!0,!0):(Object(a.a)(r),!0)}return!1},r.prototype._unsubscribe=function(){var t=this._parentSubscriber;this._context=null,this._parentSubscriber=null,t.unsubscribe()},r}(f)},function(t,r,n){"use strict";n.d(r,"a",function(){return s});var e=n(5),o=n(14),i=n(10),u=n(13),s=function(){function t(t){this.closed=!1,this._parentOrParents=null,this._subscriptions=null,t&&(this._unsubscribe=t)}var r;return t.prototype.unsubscribe=function(){var r;if(!this.closed){var n=this._parentOrParents,s=this._unsubscribe,a=this._subscriptions;if(this.closed=!0,this._parentOrParents=null,this._subscriptions=null,n instanceof t)n.remove(this);else if(null!==n)for(var f=0;f<n.length;++f){n[f].remove(this)}if(Object(i.a)(s))try{s.call(this)}catch(t){r=t instanceof u.a?c(t.errors):[t]}if(Object(e.a)(a)){f=-1;for(var p=a.length;++f<p;){var h=a[f];if(Object(o.a)(h))try{h.unsubscribe()}catch(t){r=r||[],t instanceof u.a?r=r.concat(c(t.errors)):r.push(t)}}}if(r)throw new u.a(r)}},t.prototype.add=function(r){var n=r;if(!r)return t.EMPTY;switch(typeof r){case"function":n=new t(r);case"object":if(n===this||n.closed||"function"!=typeof n.unsubscribe)return n;if(this.closed)return n.unsubscribe(),n;if(!(n instanceof t)){var e=n;(n=new t)._subscriptions=[e]}break;default:throw new Error("unrecognized teardown "+r+" added to Subscription.")}var o=n._parentOrParents;if(null===o)n._parentOrParents=this;else if(o instanceof t){if(o===this)return n;n._parentOrParents=[o,this]}else{if(-1!==o.indexOf(this))return n;o.push(this)}var i=this._subscriptions;return null===i?this._subscriptions=[n]:i.push(n),n},t.prototype.remove=function(t){var r=this._subscriptions;if(r){var n=r.indexOf(t);-1!==n&&r.splice(n,1)}},t.EMPTY=((r=new t).closed=!0,r),t}();function c(t){return t.reduce(function(t,r){return t.concat(r instanceof u.a?r.errors:r)},[])}},function(t,r,n){"use strict";n.d(r,"a",function(){return o});var e=!1,o={Promise:void 0,set useDeprecatedSynchronousErrorHandling(t){t&&(new Error).stack;e=t},get useDeprecatedSynchronousErrorHandling(){return e}}},function(t,r,n){"use strict";n.d(r,"a",function(){return e});var e=Array.isArray||function(t){return t&&"number"==typeof t.length}},function(t,r,n){"use strict";n.d(r,"a",function(){return e});var e="function"==typeof Symbol&&Symbol.observable||"@@observable"},function(t,r,n){"use strict";function e(t){setTimeout(function(){throw t},0)}n.d(r,"a",function(){return e})},function(t,r,n){"use strict";function e(){return"function"==typeof Symbol&&Symbol.iterator?Symbol.iterator:"@@iterator"}n.d(r,"a",function(){return o});var o=e()},function(t,r,n){"use strict";n.d(r,"a",function(){return i});var e=n(0),o=n(2);function i(t,r){return function(n){if("function"!=typeof t)throw new TypeError("argument is not a function. Are you looking for `mapTo()`?");return n.lift(new u(t,r))}}var u=function(){function t(t,r){this.project=t,this.thisArg=r}return t.prototype.call=function(t,r){return r.subscribe(new s(t,this.project,this.thisArg))},t}(),s=function(t){function r(r,n,e){var o=t.call(this,r)||this;return o.project=n,o.count=0,o.thisArg=e||o,o}return e.a(r,t),r.prototype._next=function(t){var r;try{r=this.project.call(this.thisArg,t,this.count++)}catch(t){return void this.destination.error(t)}this.destination.next(r)},r}(o.a)},function(t,r,n){"use strict";function e(t){return"function"==typeof t}n.d(r,"a",function(){return e})},function(t,r,n){"use strict";n.d(r,"a",function(){return e});var e="function"==typeof Symbol?Symbol("rxSubscriber"):"@@rxSubscriber_"+Math.random()},function(t,r,n){"use strict";n.d(r,"a",function(){return i});var e=n(4),o=n(7),i={closed:!0,next:function(t){},error:function(t){if(e.a.useDeprecatedSynchronousErrorHandling)throw t;Object(o.a)(t)},complete:function(){}}},function(t,r,n){"use strict";function e(t){return Error.call(this),this.message=t?t.length+" errors occurred during unsubscription:\n"+t.map(function(t,r){return r+1+") "+t.toString()}).join("\n  "):"",this.name="UnsubscriptionError",this.errors=t,this}n.d(r,"a",function(){return o}),e.prototype=Object.create(Error.prototype);var o=e},function(t,r,n){"use strict";function e(t){return null!==t&&"object"==typeof t}n.d(r,"a",function(){return e})},function(t,r,n){"use strict";n.d(r,"a",function(){return u});var e=n(21),o=n(17),i=n(1);function u(t,r,n,u,s){if(void 0===s&&(s=new e.a(t,n,u)),!s.closed)return r instanceof i.a?r.subscribe(s):Object(o.a)(r)(s)}},function(t,r,n){"use strict";n.d(r,"a",function(){return o});var e=n(0),o=function(t){function r(){return null!==t&&t.apply(this,arguments)||this}return e.a(r,t),r.prototype.notifyNext=function(t,r,n,e,o){this.destination.next(r)},r.prototype.notifyError=function(t,r){this.destination.error(t)},r.prototype.notifyComplete=function(t){this.destination.complete()},r}(n(2).a)},function(t,r,n){"use strict";var e=n(23),o=n(7),i=n(8),u=n(6),s=n(22),c=n(24),a=n(14);n.d(r,"a",function(){return f});var f=function(t){if(t&&"function"==typeof t[u.a])return f=t,function(t){var r=f[u.a]();if("function"!=typeof r.subscribe)throw new TypeError("Provided object does not correctly implement Symbol.observable");return r.subscribe(t)};if(Object(s.a)(t))return Object(e.a)(t);if(Object(c.a)(t))return n=t,function(t){return n.then(function(r){t.closed||(t.next(r),t.complete())},function(r){return t.error(r)}).then(null,o.a),t};if(t&&"function"==typeof t[i.a])return r=t,function(t){for(var n=r[i.a]();;){var e=n.next();if(e.done){t.complete();break}if(t.next(e.value),t.closed)break}return"function"==typeof n.return&&t.add(function(){n.return&&n.return()}),t};var r,n,f,p=Object(a.a)(t)?"an invalid object":"'"+t+"'";throw new TypeError("You provided "+p+" where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.")}},function(t,r,n){"use strict";function e(){}n.d(r,"a",function(){return e})},function(t,r,n){"use strict";n.d(r,"a",function(){return o});var e=n(2);function o(t){for(;t;){var r=t,n=r.closed,o=r.destination,i=r.isStopped;if(n||i)return!1;t=o&&o instanceof e.a?o:null}return!0}},function(t,r,n){"use strict";n.d(r,"a",function(){return o}),n.d(r,"b",function(){return i});var e=n(18);function o(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return i(t)}function i(t){return t?1===t.length?t[0]:function(r){return t.reduce(function(t,r){return r(t)},r)}:e.a}},function(t,r,n){"use strict";n.d(r,"a",function(){return o});var e=n(0),o=function(t){function r(r,n,e){var o=t.call(this)||this;return o.parent=r,o.outerValue=n,o.outerIndex=e,o.index=0,o}return e.a(r,t),r.prototype._next=function(t){this.parent.notifyNext(this.outerValue,t,this.outerIndex,this.index++,this)},r.prototype._error=function(t){this.parent.notifyError(t,this),this.unsubscribe()},r.prototype._complete=function(){this.parent.notifyComplete(this),this.unsubscribe()},r}(n(2).a)},function(t,r,n){"use strict";n.d(r,"a",function(){return e});var e=function(t){return t&&"number"==typeof t.length&&"function"!=typeof t}},function(t,r,n){"use strict";n.d(r,"a",function(){return e});var e=function(t){return function(r){for(var n=0,e=t.length;n<e&&!r.closed;n++)r.next(t[n]);r.complete()}}},function(t,r,n){"use strict";function e(t){return!!t&&"function"!=typeof t.subscribe&&"function"==typeof t.then}n.d(r,"a",function(){return e})},function(t,r,n){"use strict";n.d(r,"a",function(){return s});var e=n(1),o=n(5),i=n(10),u=n(9);Object.prototype.toString;function s(t,r,n,c){return Object(i.a)(n)&&(c=n,n=void 0),c?s(t,r,n).pipe(Object(u.a)(function(t){return Object(o.a)(t)?c.apply(void 0,t):c(t)})):new e.a(function(e){!function t(r,n,e,o,i){var u;if(function(t){return t&&"function"==typeof t.addEventListener&&"function"==typeof t.removeEventListener}(r)){var s=r;r.addEventListener(n,e,i),u=function(){return s.removeEventListener(n,e,i)}}else if(function(t){return t&&"function"==typeof t.on&&"function"==typeof t.off}(r)){var c=r;r.on(n,e),u=function(){return c.off(n,e)}}else if(function(t){return t&&"function"==typeof t.addListener&&"function"==typeof t.removeListener}(r)){var a=r;r.addListener(n,e),u=function(){return a.removeListener(n,e)}}else{if(!r||!r.length)throw new TypeError("Invalid event target");for(var f=0,p=r.length;f<p;f++)t(r[f],n,e,o,i)}o.add(u)}(t,r,function(t){arguments.length>1?e.next(Array.prototype.slice.call(arguments)):e.next(t)},e,n)})}},,,function(t,r,n){"use strict";n.r(r);var e=n(25),o=n(9);function i(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];var n=t.length;if(0===n)throw new Error("list of properties cannot be empty.");return function(r){return Object(o.a)(function(t,r){return function(n){for(var e=n,o=0;o<r;o++){var i=e[t[o]];if(void 0===i)return;e=i}return e}}(t,n))(r)}}var u=n(0),s=n(16),c=n(15);var a=function(){function t(t,r){this.observables=t,this.project=r}return t.prototype.call=function(t,r){return r.subscribe(new f(t,this.observables,this.project))},t}(),f=function(t){function r(r,n,e){var o=t.call(this,r)||this;o.observables=n,o.project=e,o.toRespond=[];var i=n.length;o.values=new Array(i);for(var u=0;u<i;u++)o.toRespond.push(u);for(u=0;u<i;u++){var s=n[u];o.add(Object(c.a)(o,s,s,u))}return o}return u.a(r,t),r.prototype.notifyNext=function(t,r,n,e,o){this.values[n]=r;var i=this.toRespond;if(i.length>0){var u=i.indexOf(n);-1!==u&&i.splice(u,1)}},r.prototype.notifyComplete=function(){},r.prototype._next=function(t){if(0===this.toRespond.length){var r=[t].concat(this.values);this.project?this._tryProject(r):this.destination.next(r)}},r.prototype._tryProject=function(t){var r;try{r=this.project.apply(this,t)}catch(t){return void this.destination.error(t)}this.destination.next(r)},r}(s.a),p=document.getElementById("width"),h=document.getElementById("height"),l=Object(e.a)(h,"keyup").pipe(i("target","value"));Object(e.a)(p,"keyup").pipe(i("target","value"),function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return function(r){var n;"function"==typeof t[t.length-1]&&(n=t.pop());var e=t;return r.lift(new a(e,n))}}(l)).subscribe(function(t){return console.log(t)})}]);