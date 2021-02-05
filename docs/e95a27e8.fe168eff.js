(window.webpackJsonp=window.webpackJsonp||[]).push([[169],{236:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return b})),a.d(t,"toc",(function(){return o})),a.d(t,"default",(function(){return i}));var n=a(3),r=a(7),c=(a(0),a(251)),l={id:"plot",hide_title:!0,title:"plot",slug:"/plot"},b={unversionedId:"plot",id:"plot",isDocsHomePage:!1,title:"plot",description:"Home &gt; plot",source:"@site/docs\\plot.md",slug:"/plot",permalink:"/plot/docs/plot",editUrl:"https://github.com/data-forge-notebook/plot/docs/plot.md",version:"current",sidebar:"someSidebar",previous:{title:"mountChart()",permalink:"/plot/docs/lib-apex.mountchart"},next:{title:"IAnnotationSpec",permalink:"/plot/docs/plot.iannotationspec"}},o=[{value:"plot package",id:"plot-package",children:[]},{value:"Example 1",id:"example-1",children:[]},{value:"Example 2",id:"example-2",children:[]},{value:"Functions",id:"functions",children:[]},{value:"Interfaces",id:"interfaces",children:[]},{value:"Type Aliases",id:"type-aliases",children:[]}],p={toc:o};function i(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/plot/docs/"}),"Home")," ",">"," ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/plot/docs/plot"}),"plot")),Object(c.b)("h2",{id:"plot-package"},"plot package"),Object(c.b)("p",null,"A simple and forgiving chart plotting library for JavaScript and TypeScript."),Object(c.b)("h2",{id:"example-1"},"Example 1"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),'const data = [10, 30, 15, 45]; // Array of numbers.\nplot(data)\n     .renderImage("./myplot.png"); // Need &commat;plotex/render-image installed for this.\n\n')),Object(c.b)("h2",{id:"example-2"},"Example 2"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"const htmlElement = ...; // An element in the DOM.\nconst data = [10, 30, 15, 45]; // Array of numbers.\nplot(data)\n     .renderDOM(htmlElement); // Need &commat;plotex/render-dom installed for this.\n\n")),Object(c.b)("h2",{id:"functions"},"Functions"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Function"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/plot/docs/plot.plot"}),"plot(input, plotDef, axisMap)")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Create a plot from regular JavaScript data.")))),Object(c.b)("h2",{id:"interfaces"},"Interfaces"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Interface"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/plot/docs/plot.iannotationspec"}),"IAnnotationSpec")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Annotations to render on the chart for each named data series.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/plot/docs/plot.iaxisconfig"}),"IAxisConfig")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Configures an axis of the chart.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/plot/docs/plot.iaxismap"}),"IAxisMap")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Maps the columns in a dataframe to an axis in the chart.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/plot/docs/plot.idataspec"}),"IDataSpec")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Specifes data to be rendered on the chart in values/annotations form.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/plot/docs/plot.imultiseriesspec"}),"IMultiSeriesSpec")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"A collection of named data series.Add your named data series as fields in this object.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/plot/docs/plot.iplotapi"}),"IPlotAPI")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Fluent API for configuring the plot.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/plot/docs/plot.iplotconfig"}),"IPlotConfig")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Defines the configuration for the chart.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/plot/docs/plot.iseriesspec"}),"ISeriesSpec")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"A single data series with optional annotations.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/plot/docs/plot.ixaxisconfig"}),"IXAxisConfig")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Configures the X axis of the chart.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/plot/docs/plot.iyaxisconfig"}),"IYAxisConfig")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Configures a Y axis of the chart.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/plot/docs/plot.iyaxisseriesconfig"}),"IYAxisSeriesConfig")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Relates a single Y axis to data series.")))),Object(c.b)("h2",{id:"type-aliases"},"Type Aliases"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type Alias"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/plot/docs/plot.plotinput"}),"PlotInput")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Inputs data to the plot function.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/plot/docs/plot.seriesspec"}),"SeriesSpec")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"A single data series.Can be an array of values or an ",Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/plot/docs/plot.iseriesspec"}),"ISeriesSpec")," object.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/plot/docs/plot.valuearray"}),"ValueArray")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"A simple array of primitive values or an array of objects (with fields that have primitive values).")))))}i.isMDXComponent=!0},251:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return j}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=r.a.createContext({}),i=function(e){var t=r.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):b(b({},t),e)),a},d=function(e){var t=i(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=i(a),O=n,j=d["".concat(l,".").concat(O)]||d[O]||s[O]||c;return a?r.a.createElement(j,b(b({ref:t},p),{},{components:a})):r.a.createElement(j,b({ref:t},p))}));function j(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,l=new Array(c);l[0]=O;var b={};for(var o in t)hasOwnProperty.call(t,o)&&(b[o]=t[o]);b.originalType=e,b.mdxType="string"==typeof e?e:n,l[1]=b;for(var p=2;p<c;p++)l[p]=a[p];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"}}]);