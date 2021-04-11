(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{171:function(t,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return i})),n.d(e,"metadata",(function(){return l})),n.d(e,"toc",(function(){return c})),n.d(e,"default",(function(){return p}));var a=n(3),r=n(7),o=(n(0),n(261)),i={id:"serialization.iannotation",hide_title:!0,title:"IAnnotation",slug:"/serialization.iannotation"},l={unversionedId:"serialization.iannotation",id:"serialization.iannotation",isDocsHomePage:!1,title:"IAnnotation",description:"Home &gt; @plotex/serialization &gt; IAnnotation",source:"@site/docs\\serialization.iannotation.md",slug:"/serialization.iannotation",permalink:"/plot/docs/serialization.iannotation",editUrl:"https://github.com/data-forge-notebook/plot/docs/serialization.iannotation.md",version:"current",sidebar:"someSidebar",previous:{title:"serialization",permalink:"/plot/docs/serialization"},next:{title:"style",permalink:"/plot/docs/serialization.iannotation.style"}},c=[{value:"IAnnotation interface",id:"iannotation-interface",children:[]},{value:"Properties",id:"properties",children:[]}],b={toc:c};function p(t){var e=t.components,n=Object(r.a)(t,["components"]);return Object(o.b)("wrapper",Object(a.a)({},b,n,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/plot/docs/"}),"Home")," ",">"," ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/plot/docs/serialization"}),"@plotex/serialization")," ",">"," ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/plot/docs/serialization.iannotation"}),"IAnnotation")),Object(o.b)("h2",{id:"iannotation-interface"},"IAnnotation interface"),Object(o.b)("p",null,"An annotation applied to the series."),Object(o.b)("b",null,"Signature:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"export interface IAnnotation \n")),Object(o.b)("h2",{id:"properties"},"Properties"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Property"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("a",Object(a.a)({parentName:"td"},{href:"/plot/docs/serialization.iannotation.style"}),"style?")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("i",null,"(Optional)"),' Sets the style of the annotation. This allows style to be set for a chart as part of the "plot config" (',Object(o.b)("a",Object(a.a)({parentName:"td"},{href:"/plot/docs/plot.iplotconfig"}),"IPlotConfig"),").")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("a",Object(a.a)({parentName:"td"},{href:"/plot/docs/serialization.iannotation.text"}),"text?")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("i",null,"(Optional)")," Text for the annotation, this can also be set through the style (",Object(o.b)("a",Object(a.a)({parentName:"td"},{href:"/plot/docs/chart-def.iannotationlabelstyle"}),"IAnnotationLabelStyle"),").")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("a",Object(a.a)({parentName:"td"},{href:"/plot/docs/serialization.iannotation.value"}),"value")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"any"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The value where the annotation is to be applied.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("a",Object(a.a)({parentName:"td"},{href:"/plot/docs/serialization.iannotation.value2"}),"value2?")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"any"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("i",null,"(Optional)")," Specifies a second value to create an annotation or a range of values.")))))}p.isMDXComponent=!0},261:function(t,e,n){"use strict";n.d(e,"a",(function(){return s})),n.d(e,"b",(function(){return d}));var a=n(0),r=n.n(a);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var b=r.a.createContext({}),p=function(t){var e=r.a.useContext(b),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},s=function(t){var e=p(t.components);return r.a.createElement(b.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.a.createElement(r.a.Fragment,{},e)}},O=r.a.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,i=t.parentName,b=c(t,["components","mdxType","originalType","parentName"]),s=p(n),O=a,d=s["".concat(i,".").concat(O)]||s[O]||u[O]||o;return n?r.a.createElement(d,l(l({ref:e},b),{},{components:n})):r.a.createElement(d,l({ref:e},b))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,i=new Array(o);i[0]=O;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l.mdxType="string"==typeof t?t:a,i[1]=l;for(var b=2;b<o;b++)i[b]=n[b];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"}}]);