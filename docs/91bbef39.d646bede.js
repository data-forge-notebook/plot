(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{177:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return b})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(7),c=(a(0),a(250)),o={id:"lib-apex",title:"lib-apex package",hide_title:!0,slug:"/lib-apex"},i={unversionedId:"lib-apex",id:"lib-apex",isDocsHomePage:!1,title:"lib-apex package",description:"Home &gt; @plotex/lib-apex",source:"@site/docs\\lib-apex.md",slug:"/lib-apex",permalink:"/plot/docs/lib-apex",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/lib-apex.md",version:"current",sidebar:"someSidebar",previous:{title:"IMountOptions.showDownload property",permalink:"/plot/docs/lib-apex.imountoptions.showdownload"},next:{title:"mountChart() function",permalink:"/plot/docs/lib-apex.mountchart"}},b=[{value:"lib-apex package",id:"lib-apex-package",children:[]},{value:"Functions",id:"functions",children:[]},{value:"Interfaces",id:"interfaces",children:[]}],l={toc:b};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/plot/docs/"}),"Home")," ",">"," ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/plot/docs/lib-apex"}),"@plotex/lib-apex")),Object(c.b)("h2",{id:"lib-apex-package"},"lib-apex package"),Object(c.b)("h2",{id:"functions"},"Functions"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Function"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/plot/docs/lib-apex.formatchartdef"}),"formatChartDef(inputChartDef)")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Convert a data-forge-plot chart definition to an ApexCharts chart definition.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/plot/docs/lib-apex.mountchart"}),"mountChart(chartDef, domElement, chartOptions)")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}))))),Object(c.b)("h2",{id:"interfaces"},"Interfaces"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Interface"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/plot/docs/lib-apex.ichart"}),"IChart")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/plot/docs/lib-apex.imountoptions"}),"IMountOptions")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Options to control how the chart is mounted.")))))}p.isMDXComponent=!0},250:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return s}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,l=b(e,["components","mdxType","originalType","parentName"]),u=p(a),O=n,s=u["".concat(o,".").concat(O)]||u[O]||d[O]||c;return a?r.a.createElement(s,i(i({ref:t},l),{},{components:a})):r.a.createElement(s,i({ref:t},l))}));function s(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,o=new Array(c);o[0]=O;var i={};for(var b in t)hasOwnProperty.call(t,b)&&(i[b]=t[b]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var l=2;l<c;l++)o[l]=a[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"}}]);