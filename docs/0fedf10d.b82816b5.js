(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{250:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return s}));var a=r(0),n=r.n(a);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function b(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},c=Object.keys(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=n.a.createContext({}),p=function(e){var t=n.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=p(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},u=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,l=b(e,["components","mdxType","originalType","parentName"]),d=p(r),u=a,s=d["".concat(o,".").concat(u)]||d[u]||f[u]||c;return r?n.a.createElement(s,i(i({ref:t},l),{},{components:r})):n.a.createElement(s,i({ref:t},l))}));function s(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,o=new Array(c);o[0]=u;var i={};for(var b in t)hasOwnProperty.call(t,b)&&(i[b]=t[b]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var l=2;l<c;l++)o[l]=r[l];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},70:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return b})),r.d(t,"default",(function(){return p}));var a=r(3),n=r(7),c=(r(0),r(250)),o={id:"chart-def.ichartdef",title:"IChartDef interface",hide_title:!0,slug:"/chart-def.ichartdef"},i={unversionedId:"chart-def.ichartdef",id:"chart-def.ichartdef",isDocsHomePage:!1,title:"IChartDef interface",description:"Home &gt; @plotex/chart-def &gt; IChartDef",source:"@site/docs\\chart-def.ichartdef.md",slug:"/chart-def.ichartdef",permalink:"/plot/docs/chart-def.ichartdef",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/chart-def.ichartdef.md",version:"current"},b=[{value:"IChartDef interface",id:"ichartdef-interface",children:[]},{value:"Properties",id:"properties",children:[]}],l={toc:b};function p(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/plot/docs/"}),"Home")," ",">"," ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/plot/docs/chart-def"}),"@plotex/chart-def")," ",">"," ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/plot/docs/chart-def.ichartdef"}),"IChartDef")),Object(c.b)("h2",{id:"ichartdef-interface"},"IChartDef interface"),Object(c.b)("p",null,"A chart definition that is suitable for serialization to JSON and transfer to the browser via REST API. Can be used to instantiate a chart in the browser."),Object(c.b)("b",null,"Signature:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"export interface IChartDef \n")),Object(c.b)("h2",{id:"properties"},"Properties"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Property"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(a.a)({parentName:"td"},{href:"/plot/docs/chart-def.ichartdef.axismap"}),"axisMap")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(a.a)({parentName:"td"},{href:"/plot/docs/chart-def.iaxismap"}),"IAxisMap")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Maps fields in the data to axis' on the chart.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(a.a)({parentName:"td"},{href:"/plot/docs/chart-def.ichartdef.data"}),"data")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(a.a)({parentName:"td"},{href:"/plot/docs/serialization.iserializeddata"}),"ISerializedData")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"JSON serializable representation of the data.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(a.a)({parentName:"td"},{href:"/plot/docs/chart-def.ichartdef.plotconfig"}),"plotConfig")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(a.a)({parentName:"td"},{href:"/plot/docs/chart-def.iplotconfig"}),"IPlotConfig")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Defines the look of the chart.")))))}p.isMDXComponent=!0}}]);