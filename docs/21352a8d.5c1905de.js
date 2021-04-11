(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{261:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return O}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var b=a.a.createContext({}),p=function(e){var t=a.a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},d=function(e){var t=p(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),d=p(r),u=n,O=d["".concat(o,".").concat(u)]||d[u]||m[u]||i;return r?a.a.createElement(O,c(c({ref:t},b),{},{components:r})):a.a.createElement(O,c({ref:t},b))}));function O(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var b=2;b<i;b++)o[b]=r[b];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},92:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(7),i=(r(0),r(261)),o={id:"render-image.renderimage",hide_title:!0,title:"renderImage()",slug:"/render-image.renderimage"},c={unversionedId:"render-image.renderimage",id:"render-image.renderimage",isDocsHomePage:!1,title:"renderImage()",description:"Home &gt; @plotex/render-image &gt; renderImage",source:"@site/docs\\render-image.renderimage.md",slug:"/render-image.renderimage",permalink:"/plot/docs/render-image.renderimage",editUrl:"https://github.com/data-forge-notebook/plot/docs/render-image.renderimage.md",version:"current",sidebar:"someSidebar",previous:{title:"showChartDef",permalink:"/plot/docs/render-image.irenderoptions.showchartdef"},next:{title:"serialization",permalink:"/plot/docs/serialization"}},l=[{value:"renderImage() function",id:"renderimage-function",children:[]},{value:"Parameters",id:"parameters",children:[]}],b={toc:l};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/plot/docs/"}),"Home")," ",">"," ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/plot/docs/render-image"}),"@plotex/render-image")," ",">"," ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/plot/docs/render-image.renderimage"}),"renderImage")),Object(i.b)("h2",{id:"renderimage-function"},"renderImage() function"),Object(i.b)("p",null,"Render the plot to an image file."),Object(i.b)("b",null,"Signature:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"export declare function renderImage(this: IPlotAPI, imageFilePath: string, renderOptions?: IRenderOptions): Promise<void>;\n")),Object(i.b)("h2",{id:"parameters"},"Parameters"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Parameter"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"this"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"IPlotAPI"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"imageFilePath"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"renderOptions"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"/plot/docs/render-image.irenderoptions"}),"IRenderOptions")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}))))),Object(i.b)("b",null,"Returns:"),Object(i.b)("p",null,"Promise","<","void",">"))}p.isMDXComponent=!0}}]);