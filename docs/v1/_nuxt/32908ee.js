(window.webpackJsonp=window.webpackJsonp||[]).push([[5,12,13],{241:function(t,e,r){"use strict";r.r(e);var n=r(2),component=Object(n.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{fill:"currentColor",viewBox:"0 0 20 20"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z","clip-rule":"evenodd"}})])}),[],!1,null,null,null);e.default=component.exports},242:function(t,e,r){"use strict";r.r(e);var n=r(2),component=Object(n.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{fill:"currentColor",viewBox:"0 0 20 20"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z","clip-rule":"evenodd"}})])}),[],!1,null,null,null);e.default=component.exports},249:function(t,e,r){"use strict";r.r(e);r(14),r(6),r(12),r(19),r(20);var n=r(5),l=r(24);function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var c={props:{prev:{type:Object,default:function(){return null}},next:{type:Object,default:function(){return null}}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(l.b)(["settings"]))},f=c,d=r(2),component=Object(d.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.prev||t.next?r("div",{staticClass:"grid grid-cols-2 gap-2 lg:px-8 pt-4 border-t dark:border-gray-800",class:{"lg:border-t-0":"single"===t.settings.layout}},[t.prev?r("NuxtLink",{staticClass:"text-primary-500 font-bold hover:underline flex items-center justify-start",attrs:{to:t.localePath(t.prev.to)}},[r("IconArrowLeft",{staticClass:"w-4 h-4 mr-1 flex-shrink-0"}),t._v(" "),r("span",{staticClass:"truncate"},[t._v(t._s(t.prev.title))])],1):r("span",[t._v(" ")]),t._v(" "),t.next?r("NuxtLink",{staticClass:"text-primary-500 font-bold hover:underline flex items-center justify-end",attrs:{to:t.localePath(t.next.to)}},[r("span",{staticClass:"truncate"},[t._v(t._s(t.next.title))]),t._v(" "),r("IconArrowRight",{staticClass:"w-4 h-4 ml-1 flex-shrink-0"})],1):r("span",[t._v(" ")])],1):t._e()}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{IconArrowLeft:r(241).default,IconArrowRight:r(242).default})}}]);