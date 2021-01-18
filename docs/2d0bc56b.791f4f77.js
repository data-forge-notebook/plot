(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{100:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return b}));var r=a(3),n=a(7),i=(a(0),a(250)),o={id:"serialization.idataseries",title:"IDataSeries interface",hide_title:!0},c={unversionedId:"serialization.idataseries",id:"serialization.idataseries",isDocsHomePage:!1,title:"IDataSeries interface",description:"@plotex/serialization &gt; IDataSeries",source:"@site/docs\\serialization.idataseries.md",slug:"/serialization.idataseries",permalink:"/plot/docs/serialization.idataseries",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/serialization.idataseries.md",version:"current",sidebar:"someSidebar",previous:{title:"IDataSeries.annotations property",permalink:"/plot/docs/serialization.idataseries.annotations"},next:{title:"IDataSeries.type property",permalink:"/plot/docs/serialization.idataseries.type"}},l=[{value:"IDataSeries interface",id:"idataseries-interface",children:[]},{value:"Properties",id:"properties",children:[]}],s={toc:l};function b(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/plot/docs/serialization"}),"@plotex/serialization")," ",">"," ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/plot/docs/serialization.idataseries"}),"IDataSeries")),Object(i.b)("h2",{id:"idataseries-interface"},"IDataSeries interface"),Object(i.b)("p",null,"A serialized data series."),Object(i.b)("b",null,"Signature:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"export interface IDataSeries \n")),Object(i.b)("h2",{id:"properties"},"Properties"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Property"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("a",Object(r.a)({parentName:"td"},{href:"/plot/docs/serialization.idataseries.annotations"}),"annotations?")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("a",Object(r.a)({parentName:"td"},{href:"/plot/docs/serialization.iannotation"}),"IAnnotation"),"[","]"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("i",null,"(Optional)")," Annotations applied to this series.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("a",Object(r.a)({parentName:"td"},{href:"/plot/docs/serialization.idataseries.type"}),"type")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"The data type of the series.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("a",Object(r.a)({parentName:"td"},{href:"/plot/docs/serialization.idataseries.values"}),"values")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"any","[","]"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Values in the data data series.")))))}b.isMDXComponent=!0},250:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return O}));var r=a(0),n=a.n(r);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=n.a.createContext({}),b=function(e){var t=n.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=b(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},u=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=b(a),u=r,O=p["".concat(o,".").concat(u)]||p[u]||d[u]||i;return a?n.a.createElement(O,c(c({ref:t},s),{},{components:a})):n.a.createElement(O,c({ref:t},s))}));function O(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<i;s++)o[s]=a[s];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);