(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{151:function(t,e,a){"use strict";a.r(e),a.d(e,"frontMatter",(function(){return l})),a.d(e,"metadata",(function(){return p})),a.d(e,"toc",(function(){return c})),a.d(e,"default",(function(){return b}));var n=a(3),r=a(7),o=(a(0),a(250)),l={id:"plot.plot",title:"plot() function",hide_title:!0,slug:"/plot.plot"},p={unversionedId:"plot.plot",id:"plot.plot",isDocsHomePage:!1,title:"plot() function",description:"Home &gt; plot &gt; plot",source:"@site/docs\\plot.plot.md",slug:"/plot.plot",permalink:"/plot/docs/plot.plot",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/plot.plot.md",version:"current",sidebar:"someSidebar",previous:{title:"plot package",permalink:"/plot/docs/plot"},next:{title:"PlotInput type",permalink:"/plot/docs/plot.plotinput"}},c=[{value:"plot() function",id:"plot-function",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Example 1",id:"example-1",children:[]},{value:"Example 2",id:"example-2",children:[]},{value:"Example 3",id:"example-3",children:[]}],i={toc:c};function b(t){var e=t.components,a=Object(r.a)(t,["components"]);return Object(o.b)("wrapper",Object(n.a)({},i,a,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/plot/docs/"}),"Home")," ",">"," ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/plot/docs/plot"}),"plot")," ",">"," ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/plot/docs/plot.plot"}),"plot")),Object(o.b)("h2",{id:"plot-function"},"plot() function"),Object(o.b)("p",null,"Create a plot from regular JavaScript data."),Object(o.b)("b",null,"Signature:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"export declare function plot(input: PlotInput, plotDef?: IPlotConfig, axisMap?: IAxisMap): IPlotAPI;\n")),Object(o.b)("h2",{id:"parameters"},"Parameters"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Parameter"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"input"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("a",Object(n.a)({parentName:"td"},{href:"/plot/docs/plot.plotinput"}),"PlotInput")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The data to plot. Can be an array of numbers or an array objects where the fields in the objects specify the data series.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"plotDef"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("a",Object(n.a)({parentName:"td"},{href:"/plot/docs/plot.iplotconfig"}),"IPlotConfig")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Optional configuration to control the plot.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"axisMap"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("a",Object(n.a)({parentName:"td"},{href:"/plot/docs/plot.iaxismap"}),"IAxisMap")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Optional configuration that maps data series to axis'.")))),Object(o.b)("b",null,"Returns:"),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/plot/docs/plot.iplotapi"}),"IPlotAPI")),Object(o.b)("p",null,"A plot API object that is used to further configure the plot, serialize it or render it to an image."),Object(o.b)("h2",{id:"example-1"},"Example 1"),Object(o.b)("p",null,"const data = ","[","10, 30, 15, 45","]",'; // Array of numbers. plot(data) .renderImage("./myplot.png"); // Need ',"&","commat;plotex/render-image installed for this."),Object(o.b)("h2",{id:"example-2"},"Example 2"),Object(o.b)("p",null,"const data = ","["," // Array of JS objects to specify multiple data series. { A: 10, B: 50 }, { A: 30, B: 45, }, { A: 15, B: 60 }, { A: 45, B: 65 } ","]",'; plot(data) .renderImage("./myplot.png"); // Need ',"&","commat;plotex/render-image installed for this."),Object(o.b)("h2",{id:"example-3"},"Example 3"),Object(o.b)("p",null,"const data = { A: ","[","10, 30, 15, 45","]",", B: ","[","50, 45, 60, 65","]",' }; plot(data) .renderImage("./myplot.png"); // Need ',"&","commat;plotex/render-image installed for this."))}b.isMDXComponent=!0},250:function(t,e,a){"use strict";a.d(e,"a",(function(){return u})),a.d(e,"b",(function(){return s}));var n=a(0),r=a.n(n);function o(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){o(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function c(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},o=Object.keys(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var i=r.a.createContext({}),b=function(t){var e=r.a.useContext(i),a=e;return t&&(a="function"==typeof t?t(e):p(p({},e),t)),a},u=function(t){var e=b(t.components);return r.a.createElement(i.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.a.createElement(r.a.Fragment,{},e)}},m=r.a.forwardRef((function(t,e){var a=t.components,n=t.mdxType,o=t.originalType,l=t.parentName,i=c(t,["components","mdxType","originalType","parentName"]),u=b(a),m=n,s=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return a?r.a.createElement(s,p(p({ref:e},i),{},{components:a})):r.a.createElement(s,p({ref:e},i))}));function s(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=a.length,l=new Array(o);l[0]=m;var p={};for(var c in e)hasOwnProperty.call(e,c)&&(p[c]=e[c]);p.originalType=t,p.mdxType="string"==typeof t?t:n,l[1]=p;for(var i=2;i<o;i++)l[i]=a[i];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);