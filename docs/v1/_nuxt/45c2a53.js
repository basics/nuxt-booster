(window.webpackJsonp=window.webpackJsonp||[]).push([[24,6],{239:function(t,e,r){"use strict";r.r(e);r(14),r(6),r(12),r(19),r(20);var n=r(5),l=r(24);function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var c={props:{toc:{type:Array,default:function(){return[]}}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(l.b)(["settings"]))},f=c,d=r(2),component=Object(d.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.toc.length?r("div",{staticClass:"w-full lg:w-1/4 block relative"},[r("div",{staticClass:"lg:sticky lg:top-16 overflow-y-auto h-full lg:h-auto lg:max-h-(screen-16)"},[r("nav",{staticClass:"py-4 lg:py-8",class:{"lg:pl-8 lg:pr-2":"single"!==t.settings.layout,"lg:px-8":"single"===t.settings.layout}},[r("p",{staticClass:"mb-3 lg:mb-2 text-gray-500 uppercase tracking-wider font-bold text-sm lg:text-xs"},[t._v(t._s(t.$t("toc.title")))]),t._v(" "),r("scrollactive",{attrs:{"highlight-first-item":"","active-class":"text-primary-500",offset:0,tag:"ul"}},t._l(t.toc,(function(link){return r("li",{key:link.id,staticClass:"text-gray-700 dark:text-gray-300",class:{"border-t border-dashed dark:border-gray-800 first:border-t-0":2===link.depth}},[r("a",{staticClass:"block text-sm scrollactive-item transition-padding ease-in-out duration-300 hover:pl-1",class:{"py-2":2===link.depth,"ml-2 pb-2":3===link.depth,"ml-3 pb-2":4===link.depth,"ml-4 pb-2":5===link.depth,"ml-5 pb-2":6===link.depth},attrs:{href:"#"+link.id}},[t._v(t._s(link.text))])])})),0)],1)])]):t._e()}),[],!1,null,null,null);e.default=component.exports},280:function(t,e,r){"use strict";r.r(e);r(14),r(6),r(12),r(19),r(20);var n=r(5),l=(r(28),r(13),r(24));function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={layout:function(t){return t.store.state.settings.layout||"default"},head:function(){return{title:"Releases"}},computed:c(c({},Object(l.b)(["settings"])),{},{releases:function(){return this.$store.state.releases},toc:function(){return this.releases.map((function(t){return{id:t.name,depth:2,text:t.name}}))}}),methods:{formatDate:function(t){return new Date(t.date).toLocaleDateString(this.$i18n.locale)}}},d=r(2),component=Object(d.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex flex-wrap-reverse",class:{"lg:-mx-8":"single"===t.settings.layout}},[r("div",{staticClass:"w-full lg:w-3/4 py-4 lg:pt-8 lg:pb-4 dark:border-gray-800",class:{"lg:border-l lg:border-r":"single"!==t.settings.layout}},[r("article",{staticClass:"prose dark:prose-dark max-w-none lg:px-8"},[r("h1",[t._v("Releases")]),t._v(" "),t._l(t.releases,(function(e){return r("div",{key:e.name},[r("h2",{staticClass:"flex items-center justify-between",attrs:{id:e.name}},[t._v("\n          "+t._s(e.name)+"\n          "),r("span",{staticClass:"text-base font-normal text-gray-500"},[t._v(t._s(t.formatDate(e)))])]),t._v(" "),r("div",{staticClass:"nuxt-content",domProps:{innerHTML:t._s(e.body)}})])}))],2)]),t._v(" "),r("AppToc",{attrs:{toc:t.toc}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{AppToc:r(239).default})}}]);