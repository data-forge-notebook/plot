(window.webpackJsonp=window.webpackJsonp||[]).push([[134],{201:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return p}));var r=a(3),i=a(7),n=(a(0),a(250)),o={id:"serialization.iserializeddata",title:"ISerializedData interface",hide_title:!0,slug:"/serialization.iserializeddata"},c={unversionedId:"serialization.iserializeddata",id:"serialization.iserializeddata",isDocsHomePage:!1,title:"ISerializedData interface",description:"Home &gt; @plotex/serialization &gt; ISerializedData",source:"@site/docs\\serialization.iserializeddata.md",slug:"/serialization.iserializeddata",permalink:"/plot/docs/serialization.iserializeddata",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/serialization.iserializeddata.md",version:"current",sidebar:"someSidebar",previous:{title:"IDataSeriesMap interface",permalink:"/plot/docs/serialization.idataseriesmap"},next:{title:"ISerializedData.series property",permalink:"/plot/docs/serialization.iserializeddata.series"}},l=[{value:"ISerializedData interface",id:"iserializeddata-interface",children:[]},{value:"Properties",id:"properties",children:[]}],s={toc:l};function p(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(n.b)("wrapper",Object(r.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/plot/docs/"}),"Home")," ",">"," ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/plot/docs/serialization"}),"@plotex/serialization")," ",">"," ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/plot/docs/serialization.iserializeddata"}),"ISerializedData")),Object(n.b)("h2",{id:"iserializeddata-interface"},"ISerializedData interface"),Object(n.b)("p",null,"The serialized form of a data. This is an ordinary JavaScript data structure that can be used to transfer a data across the wire and reinstantiate it on the otherside."),Object(n.b)("b",null,"Signature:"),Object(n.b)("pre",null,Object(n.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"export interface ISerializedData \n")),Object(n.b)("h2",{id:"properties"},"Properties"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Property"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"/plot/docs/serialization.iserializeddata.series"}),"series")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"/plot/docs/serialization.idataseriesmap"}),"IDataSeriesMap")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Collection of named data series.")))))}p.isMDXComponent=!0},250:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return f}));var r=a(0),i=a.n(r);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=i.a.createContext({}),p=function(e){var t=i.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},d=function(e){var t=p(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(a),u=r,f=d["".concat(o,".").concat(u)]||d[u]||b[u]||n;return a?i.a.createElement(f,c(c({ref:t},s),{},{components:a})):i.a.createElement(f,c({ref:t},s))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,o=new Array(n);o[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<n;s++)o[s]=a[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);