(window.webpackJsonp=window.webpackJsonp||[]).push([[114],{181:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return p}));var r=a(3),n=a(7),i=(a(0),a(250)),o={id:"serialization",title:"serialization package",hide_title:!0,slug:"/serialization"},c={unversionedId:"serialization",id:"serialization",isDocsHomePage:!1,title:"serialization package",description:"Home &gt; @plotex/serialization",source:"@site/docs\\serialization.md",slug:"/serialization",permalink:"/plot/docs/serialization",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/serialization.md",version:"current"},l=[{value:"serialization package",id:"serialization-package",children:[]},{value:"Interfaces",id:"interfaces",children:[]}],b={toc:l};function p(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/plot/docs/"}),"Home")," ",">"," ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/plot/docs/serialization"}),"@plotex/serialization")),Object(i.b)("h2",{id:"serialization-package"},"serialization package"),Object(i.b)("h2",{id:"interfaces"},"Interfaces"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Interface"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("a",Object(r.a)({parentName:"td"},{href:"/plot/docs/serialization.iannotation"}),"IAnnotation")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"An annotation applied to the series.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("a",Object(r.a)({parentName:"td"},{href:"/plot/docs/serialization.idataseries"}),"IDataSeries")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"A serialized data series.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("a",Object(r.a)({parentName:"td"},{href:"/plot/docs/serialization.idataseriesmap"}),"IDataSeriesMap")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"A map of named data series.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("a",Object(r.a)({parentName:"td"},{href:"/plot/docs/serialization.iserializeddata"}),"ISerializedData")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"The serialized form of a data. This is an ordinary JavaScript data structure that can be used to transfer a data across the wire and reinstantiate it on the otherside.")))))}p.isMDXComponent=!0},250:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return O}));var r=a(0),n=a.n(r);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var b=n.a.createContext({}),p=function(e){var t=n.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},s=function(e){var t=p(e.components);return n.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},u=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),s=p(a),u=r,O=s["".concat(o,".").concat(u)]||s[u]||d[u]||i;return a?n.a.createElement(O,c(c({ref:t},b),{},{components:a})):n.a.createElement(O,c({ref:t},b))}));function O(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var b=2;b<i;b++)o[b]=a[b];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);