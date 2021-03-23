(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{104:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var a=n(0),i=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=i.a.createContext({}),c=function(e){var t=i.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},b=function(e){var t=c(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,r=e.parentName,p=m(e,["components","mdxType","originalType","parentName"]),b=c(n),u=a,d=b["".concat(r,".").concat(u)]||b[u]||s[u]||l;return n?i.a.createElement(d,o(o({ref:t},p),{},{components:n})):i.a.createElement(d,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,r=new Array(l);r[0]=u;var o={};for(var m in t)hasOwnProperty.call(t,m)&&(o[m]=t[m]);o.originalType=e,o.mdxType="string"==typeof e?e:a,r[1]=o;for(var p=2;p<l;p++)r[p]=n[p];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},72:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return m})),n.d(t,"default",(function(){return c}));var a=n(3),i=n(7),l=(n(0),n(104)),r={id:"templated-images",title:"Templated Images Layer",slug:"/layers/templated-images"},o={unversionedId:"layers/templated-images",id:"layers/templated-images",isDocsHomePage:!1,title:"Templated Images Layer",description:"In this section, we will learn how to create a templated image layer. A templated image layer is a layer that fetches a single image file on pans and zooms.",source:"@site/docs/layers/templated-images.md",slug:"/layers/templated-images",permalink:"/web-map-doc/docs/layers/templated-images",editUrl:"https://github.com/Maps4HTML/web-map-doc/docs/layers/templated-images.md",version:"current",sidebar:"someSidebar",previous:{title:"Templated Features Layer",permalink:"/web-map-doc/docs/layers/templated-features"}},m=[{value:"Adding a templated image layer",id:"adding-a-templated-image-layer",children:[]},{value:"Associated Elements",id:"associated-elements",children:[{value:"<code>&lt;extent&gt;</code>",id:"extent",children:[]},{value:"<code>&lt;input&gt;</code>",id:"input",children:[]},{value:"<code>&lt;link&gt;</code>",id:"link",children:[]}]},{value:"Additional Context",id:"additional-context",children:[]},{value:"Full Examples",id:"full-examples",children:[]}],p={toc:m};function c(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"In this section, we will learn how to create a templated image layer. A templated image layer is a layer that fetches a single image file on pans and zooms."),Object(l.b)("h2",{id:"adding-a-templated-image-layer"},"Adding a templated image layer"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-html"},'<layer- label="Toporama" checked>\n  <meta name="zoom" content="min=4,max=5" />\n  <extent units="CBMTILE">\n    <input name="z" type="zoom" value="19" min="4" max="4" />\n    <input name="w" type="width" />\n    <input name="h" type="height" />\n    <input name="xmin" type="location" units="pcrs" position="top-left" axis="easting" min="-6207743" max="3952277" />\n    <input name="ymin" type="location" units="pcrs" position="bottom-left" axis="northing" min="-3362085" max="3952277" />\n    <input name="xmax" type="location" units="pcrs" position="top-right" axis="easting" min="-6207743" max="3952277" />\n    <input name="ymax" type="location" units="pcrs" position="top-left" axis="northing" min="-3362085" max="3952277" />\n    <link rel="image" tref="http://my-wms.ca?FORMAT=image/jpeg&amp;WIDTH={w}&amp;HEIGHT={h}&amp;BBOX={xmin},{ymin},{xmax},{ymax}" />\n  </extent>\n</layer->\n')),Object(l.b)("h2",{id:"associated-elements"},"Associated Elements"),Object(l.b)("h3",{id:"extent"},Object(l.b)("inlineCode",{parentName:"h3"},"<extent>")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"units"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"This allows you to define what the ",Object(l.b)("a",{parentName:"li",href:"http://example.org/"},"projection")," of the templated tiles are.")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"input"},Object(l.b)("inlineCode",{parentName:"h3"},"<input>")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("inlineCode",{parentName:"p"},"axis")),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"This attribute is only useful on inputs of type ",Object(l.b)("strong",null,"location"),", it sets the axis the following input defines. This value also defines what the ",Object(l.b)("strong",null,"min")," and ",Object(l.b)("strong",null,"max")," value's units."),Object(l.b)("li",{parentName:"ul"},"Options are, row | column | easting | northing | latitude | longitude"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("inlineCode",{parentName:"p"},"name")),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"This allows you to name the input, this name is then used in the url template used in the ",Object(l.b)("inlineCode",{parentName:"li"},"<link>")," href attribute."))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("inlineCode",{parentName:"p"},"type")),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Sets the ",Object(l.b)("strong",null,"type")," of the input."),Object(l.b)("li",{parentName:"ul"},"Options are, zoom | location | width | height"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("inlineCode",{parentName:"p"},"max")),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Sets the maximum of the bounds of the layer on the given ",Object(l.b)("strong",null,"axis"),"."))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("inlineCode",{parentName:"p"},"min")),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Sets the minimum of the bounds of the layer on the given ",Object(l.b)("strong",null,"axis"),"."))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("inlineCode",{parentName:"p"},"position")),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Sets the position of the input, this can either be top-left or bottom-right."))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("inlineCode",{parentName:"p"},"value")),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Sets the zoom level the inputs of type ",Object(l.b)("strong",null,"location"),"'s ",Object(l.b)("strong",null,"min")," and ",Object(l.b)("strong",null,"max")," are defined at.")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"link"},Object(l.b)("inlineCode",{parentName:"h3"},"<link>")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("inlineCode",{parentName:"p"},"rel")),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Set this to image in the case of a templated image layer."))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("inlineCode",{parentName:"p"},"title")),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Sets the title of the layer, this is the title shown in the layer controls."))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("inlineCode",{parentName:"p"},"type")),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Sets the type of the returned data."))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("inlineCode",{parentName:"p"},"tref")),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Sets the templated url of the templated tile layer, this must contain all the names of the inputs used to query a given tile.")))),Object(l.b)("hr",null),Object(l.b)("h2",{id:"additional-context"},"Additional Context"),Object(l.b)("p",null,"You can also provide a set of elements to further define the templated tile layer. This is the list of available additions with examples."),Object(l.b)("h4",{id:"meta-namezoom"},Object(l.b)("inlineCode",{parentName:"h4"},'<meta name="zoom">')),Object(l.b)("p",null,"Sets the zoom range of the layer, in the following example the user can zoom from zoom level 1 to 5. "),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-html"},'<meta name="zoom" content="min=1,max=5" />\n')),Object(l.b)("hr",null),Object(l.b)("h2",{id:"full-examples"},"Full Examples"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-html"},'<mapml-viewer projection="CBMTILE" zoom="4" lat="53.331" lon="-91.667" controls>\n  <layer- label="Toporama" checked>\n    <meta name="zoom" content="min=4,max=5" />\n    <extent units="CBMTILE">\n      <input name="z" type="zoom" value="19" min="4" max="4" />\n      <input name="w" type="width" />\n      <input name="h" type="height" />\n      <input name="xmin" type="location" units="pcrs" position="top-left" axis="easting" min="-6207743.103886206" max="3952277.216154434" />\n      <input name="ymin" type="location" units="pcrs" position="bottom-left" axis="northing" min="-3362085.3441706896" max="3952277.216154434" />\n      <input name="xmax" type="location" units="pcrs" position="top-right" axis="easting" min="-6207743.103886206" max="3952277.216154434" />\n      <input name="ymax" type="location" units="pcrs" position="top-left" axis="northing" min="-3362085.3441706896" max="3952277.216154434" />\n      <link rel="image" tref="http://wms.ess-ws.nrcan.gc.ca/wms/toporama_en?SERVICE=WMS&amp;REQUEST=GetMap&amp;FORMAT=image/jpeg&amp;TRANSPARENT=FALSE&amp;STYLES=&amp;VERSION=1.3.0&amp;LAYERS=WMS-Toporama&amp;WIDTH={w}&amp;HEIGHT={h}&amp;CRS=EPSG:3978&amp;BBOX={xmin},{ymin},{xmax},{ymax}&amp;m4h=t" />\n    </extent>\n  </layer->\n</mapml-viewer>\n')),Object(l.b)("p",null,"[ADD MAP HERE]"))}c.isMDXComponent=!0}}]);