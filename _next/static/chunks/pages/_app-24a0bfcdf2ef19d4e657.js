(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{2167:function(e,n,t){"use strict";var r=t(3848),c=t(9448);n.default=void 0;var o=c(t(7294)),a=t(9414),i=t(4651),l=t(7426),s={};function u(e,n,t,r){if(e&&(0,a.isLocalURL)(n)){e.prefetch(n,t,r).catch((function(e){0}));var c=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;s[n+"%"+t+(c?"%"+c:"")]=!0}}var f=function(e){var n,t=!1!==e.prefetch,c=(0,i.useRouter)(),f=o.default.useMemo((function(){var n=(0,a.resolveHref)(c,e.href,!0),t=r(n,2),o=t[0],i=t[1];return{href:o,as:e.as?(0,a.resolveHref)(c,e.as):i||o}}),[c,e.href,e.as]),d=f.href,h=f.as,v=e.children,p=e.replace,m=e.shallow,x=e.scroll,b=e.locale;"string"===typeof v&&(v=o.default.createElement("a",null,v));var j=(n=o.Children.only(v))&&"object"===typeof n&&n.ref,y=(0,l.useIntersection)({rootMargin:"200px"}),g=r(y,2),M=g[0],w=g[1],z=o.default.useCallback((function(e){M(e),j&&("function"===typeof j?j(e):"object"===typeof j&&(j.current=e))}),[j,M]);(0,o.useEffect)((function(){var e=w&&t&&(0,a.isLocalURL)(d),n="undefined"!==typeof b?b:c&&c.locale,r=s[d+"%"+h+(n?"%"+n:"")];e&&!r&&u(c,d,h,{locale:n})}),[h,d,w,b,t,c]);var O={ref:z,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,t,r,c,o,i,l){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,a.isLocalURL)(t))&&(e.preventDefault(),null==i&&r.indexOf("#")>=0&&(i=!1),n[c?"replace":"push"](t,r,{shallow:o,locale:l,scroll:i}))}(e,c,d,h,p,m,x,b)},onMouseEnter:function(e){(0,a.isLocalURL)(d)&&(n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),u(c,d,h,{priority:!0}))}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var E="undefined"!==typeof b?b:c&&c.locale,C=c&&c.isLocaleDomain&&(0,a.getDomainLocale)(h,E,c&&c.locales,c&&c.domainLocales);O.href=C||(0,a.addBasePath)((0,a.addLocale)(h,E,c&&c.defaultLocale))}return o.default.cloneElement(n,O)};n.default=f},7426:function(e,n,t){"use strict";var r=t(3848);n.__esModule=!0,n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!a,l=(0,c.useRef)(),s=(0,c.useState)(!1),u=r(s,2),f=u[0],d=u[1],h=(0,c.useCallback)((function(e){l.current&&(l.current(),l.current=void 0),t||f||e&&e.tagName&&(l.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=i.get(n);if(t)return t;var r=new Map,c=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return i.set(n,t={id:n,observer:c,elements:r}),t}(t),c=r.id,o=r.observer,a=r.elements;return a.set(e,n),o.observe(e),function(){a.delete(e),o.unobserve(e),0===a.size&&(o.disconnect(),i.delete(c))}}(e,(function(e){return e&&d(e)}),{rootMargin:n}))}),[t,n,f]);return(0,c.useEffect)((function(){if(!a&&!f){var e=(0,o.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,o.cancelIdleCallback)(e)}}}),[f]),[h,f]};var c=t(7294),o=t(3447),a="undefined"!==typeof IntersectionObserver;var i=new Map},8129:function(e,n,t){"use strict";var r=t(5893);t(7294);n.Z=function(e){var n=e.children;return(0,r.jsx)("div",{className:"max-w-3xl mx-auto px-4 sm:px-6 xl:max-w-5xl xl:px-0",children:n})}},3408:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return f}});var r=t(6265),c=t(5893),o=(t(7294),t(4395),t(8129)),a=t(1664),i=function(e){e.children;return(0,c.jsx)(o.Z,{children:(0,c.jsxs)("header",{className:"flex justify-between items-center py-10",children:[(0,c.jsx)("div",{children:(0,c.jsx)(a.default,{href:"/",passHref:!0,children:(0,c.jsxs)("a",{"aria-label":"Tailwind CSS Blog",children:[(0,c.jsxs)("svg",{className:"h-6 sm:hidden",fill:"none",viewBox:"0 0 55 33",children:[(0,c.jsx)("path",{fill:"#fff",d:"M0 0h55v33H0z"}),(0,c.jsx)("path",{fill:"#06B6D4",fillRule:"evenodd",d:"M27.5 0c-7.333 0-11.917 3.667-13.75 11 2.75-3.667 5.958-5.042 9.625-4.125 2.092.523 3.587 2.04 5.242 3.72 2.697 2.737 5.817 5.905 12.633 5.905 7.333 0 11.917-3.667 13.75-11-2.75 3.667-5.958 5.042-9.625 4.125-2.092-.523-3.587-2.04-5.242-3.72C37.436 3.166 34.316 0 27.5 0zM13.75 16.5c-7.333 0-11.917 3.667-13.75 11 2.75-3.667 5.958-5.042 9.625-4.125 2.092.523 3.587 2.04 5.242 3.72C17.564 29.834 20.684 33 27.5 33c7.333 0 11.917-3.667 13.75-11-2.75 3.667-5.958 5.042-9.625 4.125-2.092-.523-3.587-2.04-5.242-3.72-2.697-2.738-5.817-5.905-12.633-5.905z",clipRule:"evenodd"})]}),(0,c.jsxs)("svg",{className:"hidden sm:block h-6",fill:"none",viewBox:"0 0 285 33",children:[(0,c.jsx)("path",{fill:"#06B6D4",fillRule:"evenodd",d:"M27.5 0c-7.333 0-11.917 3.667-13.75 11 2.75-3.667 5.958-5.042 9.625-4.125 2.092.523 3.587 2.04 5.242 3.72 2.697 2.737 5.817 5.905 12.633 5.905 7.333 0 11.917-3.667 13.75-11-2.75 3.667-5.958 5.042-9.625 4.125-2.092-.523-3.587-2.04-5.242-3.72C37.436 3.166 34.316 0 27.5 0zM13.75 16.5c-7.333 0-11.917 3.667-13.75 11 2.75-3.667 5.958-5.042 9.625-4.125 2.092.523 3.587 2.04 5.242 3.72C17.564 29.834 20.684 33 27.5 33c7.333 0 11.917-3.667 13.75-11-2.75 3.667-5.958 5.042-9.625 4.125-2.092-.523-3.587-2.04-5.242-3.72-2.697-2.738-5.817-5.905-12.633-5.905z",clipRule:"evenodd"}),(0,c.jsx)("path",{fill:"#374151",d:"M80.496 14.692V10.74h-4.712V4.42L71.68 5.636v5.104h-3.496v3.952h3.496v9.12c0 4.94 2.508 6.688 8.816 5.928v-3.686c-3.116.152-4.712.19-4.712-2.242v-9.12h4.712zM98.487 10.74v2.698c-1.444-1.976-3.686-3.192-6.65-3.192-5.168 0-9.462 4.332-9.462 9.994 0 5.624 4.294 9.994 9.462 9.994 2.964 0 5.206-1.216 6.65-3.23v2.736h4.104v-19h-4.104zm-6.004 15.58c-3.42 0-6.004-2.546-6.004-6.08 0-3.534 2.584-6.08 6.004-6.08 3.42 0 6.004 2.546 6.004 6.08 0 3.534-2.584 6.08-6.004 6.08zM109.426 7.89c1.444 0 2.622-1.216 2.622-2.622a2.627 2.627 0 00-2.622-2.622 2.627 2.627 0 00-2.622 2.622c0 1.406 1.178 2.622 2.622 2.622zm-2.052 21.85h4.104v-19h-4.104v19zM116.244 29.74h4.104V2h-4.104v27.74zM147.001 10.74l-3.724 13.11-3.952-13.11h-3.914l-3.99 13.11-3.686-13.11h-4.332l5.966 19h4.028l3.99-12.806 3.952 12.806h4.028l5.966-19h-4.332zM156.407 7.89c1.444 0 2.622-1.216 2.622-2.622a2.627 2.627 0 00-2.622-2.622 2.627 2.627 0 00-2.622 2.622c0 1.406 1.178 2.622 2.622 2.622zm-2.052 21.85h4.104v-19h-4.104v19zM173.218 10.246c-2.584 0-4.636.95-5.89 2.926V10.74h-4.104v19h4.104V19.556c0-3.876 2.128-5.472 4.826-5.472 2.584 0 4.256 1.52 4.256 4.408V29.74h4.104V18.074c0-4.94-3.04-7.828-7.296-7.828zM199.981 3.14v10.298c-1.444-1.976-3.686-3.192-6.65-3.192-5.168 0-9.462 4.332-9.462 9.994 0 5.624 4.294 9.994 9.462 9.994 2.964 0 5.206-1.216 6.65-3.23v2.736h4.104V3.14h-4.104zm-6.004 23.18c-3.42 0-6.004-2.546-6.004-6.08 0-3.534 2.584-6.08 6.004-6.08 3.42 0 6.004 2.546 6.004 6.08 0 3.534-2.584 6.08-6.004 6.08z"}),(0,c.jsx)("path",{fill:"#06B6D4",d:"M221.249 19.884c1.113-.895 1.792-2.172 1.792-3.8 0-3.177-2.579-5.349-5.783-5.349h-7.493V29.74h8.063c3.285 0 5.919-2.253 5.919-5.511 0-1.982-.977-3.476-2.498-4.345zm-3.991-5.647c1.195 0 2.036.896 2.036 2.09 0 1.195-.868 2.091-2.036 2.091h-3.747v-4.18h3.747zm.57 12h-4.317v-4.48h4.317c1.276 0 2.199.951 2.199 2.227 0 1.303-.923 2.254-2.199 2.254zM232.122 26.156V10.735h-3.747V29.74h10.996v-3.584h-7.249zM251.492 30.12c5.484 0 9.882-4.344 9.882-9.883 0-5.565-4.398-9.882-9.882-9.882-5.485 0-9.856 4.317-9.856 9.883 0 5.538 4.371 9.882 9.856 9.882zm0-3.665c-3.448 0-6.136-2.58-6.136-6.217 0-3.666 2.688-6.245 6.136-6.245s6.135 2.58 6.135 6.245c0 3.638-2.687 6.217-6.135 6.217zM284.832 19.532h-9.53v3.312h5.756c-.652 2.172-2.552 3.61-5.539 3.61-3.964 0-6.489-2.66-6.489-6.19 0-3.61 2.607-6.271 6.218-6.271 2.307 0 4.235 1.113 5.104 2.633l3.204-1.846c-1.602-2.606-4.67-4.425-8.281-4.425-5.675 0-9.964 4.398-9.964 9.91 0 5.43 4.235 9.855 10.181 9.855 5.457 0 9.34-3.638 9.34-9.122v-1.466z"})]})]})})}),(0,c.jsx)("div",{className:"text-base leading-5",children:(0,c.jsx)("a",{href:"https://tailwindcss.com/docs",className:"font-medium text-gray-500 hover:text-gray-700",children:"Documentation \u2192"})})]})})},l=function(e){var n=e.children;return(0,c.jsxs)("div",{className:"antialiased",children:[(0,c.jsx)(i,{}),n]})};function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var f=function(e){var n=e.Component,t=e.pageProps;return(0,c.jsx)(l,{children:(0,c.jsx)(n,u({},t))})}},6363:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return t(3408)}])},4395:function(){},1664:function(e,n,t){e.exports=t(2167)},6265:function(e,n,t){"use strict";function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}t.d(n,{Z:function(){return r}})}},function(e){var n=function(n){return e(e.s=n)};e.O(0,[774,179],(function(){return n(6363),n(4651)}));var t=e.O();_N_E=t}]);