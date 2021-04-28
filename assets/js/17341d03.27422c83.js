(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{114:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=r.a.createContext({}),p=function(e){var t=r.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},m=function(e){var t=p(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,i=b(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,u=m["".concat(o,".").concat(d)]||m[d]||s[d]||l;return n?r.a.createElement(u,c(c({ref:t},i),{},{components:n})):r.a.createElement(u,c({ref:t},i))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var c={};for(var b in t)hasOwnProperty.call(t,b)&&(c[b]=t[b]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var i=2;i<l;i++)o[i]=n[i];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},73:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),l=(n(0),n(114)),o={id:"mapml-viewer-api",title:"<mapml-viewer> API",slug:"/api/mapml-viewer-api"},c={unversionedId:"api/mapml-viewer-api",id:"api/mapml-viewer-api",isDocsHomePage:!1,title:"<mapml-viewer> API",description:"In this section we'll learn different API methods on the ``. It allows you to interact with",source:"@site/docs/api/mapml-viewer-api.md",slug:"/api/mapml-viewer-api",permalink:"/web-map-doc/docs/api/mapml-viewer-api",version:"current",sidebar:"someSidebar",previous:{title:"<layer-> API",permalink:"/web-map-doc/docs/api/layer-api"},next:{title:"Resources",permalink:"/web-map-doc/docs/resources/resources"}},b=[{value:"Setters &amp; Getters",id:"setters--getters",children:[{value:"controls",id:"controls",children:[]},{value:"controlslist",id:"controlslist",children:[]},{value:"extent",id:"extent",children:[]},{value:"lat",id:"lat",children:[]},{value:"lon",id:"lon",children:[]},{value:"projection",id:"projection",children:[]},{value:"zoom",id:"zoom",children:[]}]},{value:"Methods",id:"methods",children:[{value:"back()",id:"back",children:[]},{value:"forward()",id:"forward",children:[]},{value:"reload()",id:"reload",children:[]},{value:"toggleDebug()",id:"toggledebug",children:[]},{value:"viewSource()",id:"viewsource",children:[]}]}],i={toc:b};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"In this section we'll learn different API methods on the ",Object(l.b)("inlineCode",{parentName:"p"},"<mapml-viewer>"),". It allows you to interact with\nthe viewer through JavaScript."),Object(l.b)("table",null,Object(l.b)("tr",null,Object(l.b)("th",null,"Setters and/or Getters"),Object(l.b)("th",null,"Methods")),Object(l.b)("tr",null,Object(l.b)("td",null,Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Method"),Object(l.b)("th",{parentName:"tr",align:null},"Functionality"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"#controls"},"controls")),Object(l.b)("td",{parentName:"tr",align:null},"Setter & getter related to the controls on the map.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"#controlslist"},"controlslist")),Object(l.b)("td",{parentName:"tr",align:null},"Setter & getter related to the controlslist attribute.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"#extent"},"extent")),Object(l.b)("td",{parentName:"tr",align:null},"Returns the extent of the current map view.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"#lat"},"lat")),Object(l.b)("td",{parentName:"tr",align:null},"Setter & getter related to the map's latitude.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"#lon"},"lon")),Object(l.b)("td",{parentName:"tr",align:null},"Setter & getter related to the map's longitude.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"#projection"},"projection")),Object(l.b)("td",{parentName:"tr",align:null},"Setter & getter related to the map's projection.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"#zoom"},"zoom")),Object(l.b)("td",{parentName:"tr",align:null},"Setter & getter related to the map's zoom level."))))),Object(l.b)("td",null,Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Method"),Object(l.b)("th",{parentName:"tr",align:null},"Functionality"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"#back"},"back()")),Object(l.b)("td",{parentName:"tr",align:null},"Navigates back in the map's panning history.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"defineCustomProjection()"),Object(l.b)("td",{parentName:"tr",align:null},"Visit ",Object(l.b)("a",{parentName:"td",href:"custom-projections"},"this")," for more information.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"#forward"},"forward()")),Object(l.b)("td",{parentName:"tr",align:null},"Navigates forward in the map's panning history.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"#reload"},"reload()")),Object(l.b)("td",{parentName:"tr",align:null},"Clear the map's panning history and return to the starting location.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"#toggledebug"},"toggleDebug()")),Object(l.b)("td",{parentName:"tr",align:null},"Toggle the debug functionality of the map.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"#viewsource"},"viewSource()")),Object(l.b)("td",{parentName:"tr",align:null},"View the source of the map."))))))),Object(l.b)("h2",{id:"setters--getters"},"Setters & Getters"),Object(l.b)("h3",{id:"controls"},"controls"),Object(l.b)("p",null,"To set the controls simply:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"<mapml-viewer>.controls = true; // or false to remove controls\n")),Object(l.b)("p",null,"To check whether the map has controls toggled on or off:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"let controlsAdded = <mapml-viewer>.controls;\n")),Object(l.b)("hr",null),Object(l.b)("h3",{id:"controlslist"},"controlslist"),Object(l.b)("p",null,"To set the controlslist attribute:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},'<mapml-viewer>.controlslist = "noreload"; // values can be noreload | nofullscreen | nozoom | nolayer\n')),Object(l.b)("p",null,"To get the value of the controlslist:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"let controlsList = <mapml-viewer>.controlslist;\n")),Object(l.b)("hr",null),Object(l.b)("h3",{id:"extent"},"extent"),Object(l.b)("p",null,"To get the map's extent:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"let extent = <mapml-viewer>.extent;\n")),Object(l.b)("details",null,Object(l.b)("summary",null,"View Sample Extent"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},'/**\n*extent = \n*  {\n*    {\n*      "topLeft": {\n*        "tcrs": [\n*          {\n*            "horizontal": 906.7586206896551,\n*            "vertical": 981.7241379310345\n*          },\n*          ...\n*        ],\n*        "tilematrix": [\n*          {\n*            "horizontal": 3.5420258620689653,\n*            "vertical": 3.8348599137931036\n*          },\n*          ...\n*        ],\n*        "gcrs": {\n*          "horizontal": -93.05456518322721,\n*          "vertical": 63.783997873304855\n*        },\n*        "pcrs": {\n*          "horizontal": 131686.24163915217,\n*          "vertical": 1646487.1729743406\n*        }\n*      },\n*      "bottomRight": {\n*        "tcrs": [\n*          {\n*            "horizontal": 914.9655172413793,\n*            "vertical": 1015.5172413793102\n*          },\n*          ...\n*        ],\n*        "tilematrix": [\n*          {\n*            "horizontal": 3.574084051724138,\n*            "vertical": 3.9668642241379306\n*          },\n*          ...\n*        ],\n*        "gcrs": {\n*          "horizontal": -85.62509797700041,\n*          "vertical": 52.14641630380798\n*        },\n*        "pcrs": {\n*          "horizontal": 446541.0380154103,\n*          "vertical": 350026.2467191592\n*        }\n*      },\n*      "projection": "CBMTILE",\n*      "zoom": {\n*        "minZoom": 0,\n*        "maxZoom": 25\n*      }\n*    }\n*  }\n*/\n'))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"lat"},"lat"),Object(l.b)("p",null,"To set the latitude simply:"),Object(l.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(l.b)("div",{parentName:"div",className:"admonition-heading"},Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",{parentName:"h5",className:"admonition-icon"},Object(l.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(l.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(l.b)("div",{parentName:"div",className:"admonition-content"},Object(l.b)("p",{parentName:"div"},"Needs To Be Implemented, Currently doesn't pan the map on changes"))),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"<mapml-viewer>.lat = 21.4; // if it's an invalid value, nothing happens\n")),Object(l.b)("p",null,"To get the latitude:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"let latitude = <mapml-viewer>.lat;\n")),Object(l.b)("hr",null),Object(l.b)("h3",{id:"lon"},"lon"),Object(l.b)("p",null,"To set the longitude simply:"),Object(l.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(l.b)("div",{parentName:"div",className:"admonition-heading"},Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",{parentName:"h5",className:"admonition-icon"},Object(l.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(l.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(l.b)("div",{parentName:"div",className:"admonition-content"},Object(l.b)("p",{parentName:"div"},"Needs To Be Implemented, Currently doesn't pan the map on changes"))),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"<mapml-viewer>.lon = 21.4; // if it's an invalid value, nothing happens\n")),Object(l.b)("p",null,"To get the longitude:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"let longitude = <mapml-viewer>.lon;\n")),Object(l.b)("hr",null),Object(l.b)("h3",{id:"projection"},"projection"),Object(l.b)("p",null,"To set/update the projection simply:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},'<mapml-viewer>.projection = "CBMTILE"; // if it\'s an invalid/undefined projection, nothing happens\n')),Object(l.b)("p",null,"To get the projection:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"let projection = <mapml-viewer>.projection;\n")),Object(l.b)("hr",null),Object(l.b)("h3",{id:"zoom"},"zoom"),Object(l.b)("p",null,"To set the zoom simply:"),Object(l.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(l.b)("div",{parentName:"div",className:"admonition-heading"},Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",{parentName:"h5",className:"admonition-icon"},Object(l.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(l.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(l.b)("div",{parentName:"div",className:"admonition-content"},Object(l.b)("p",{parentName:"div"},"Needs To Be Implemented, Currently doesn't zoom the map on changes"))),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"<mapml-viewer>.zoom = 3; // if it's an invalid value, nothing happens\n")),Object(l.b)("p",null,"To get the longitude:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"let zoom = <mapml-viewer>.zoom;\n")),Object(l.b)("hr",null),Object(l.b)("h2",{id:"methods"},"Methods"),Object(l.b)("h3",{id:"back"},"back()"),Object(l.b)("p",null,"To go back in the map's history:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"<mapml-viewer>.back();\n")),Object(l.b)("hr",null),Object(l.b)("h3",{id:"forward"},"forward()"),Object(l.b)("p",null,"To go forward in the map's history:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"<mapml-viewer>.forward();\n")),Object(l.b)("hr",null),Object(l.b)("h3",{id:"reload"},"reload()"),Object(l.b)("p",null,"To clear the map's history and return to the initial location:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"<mapml-viewer>.reload();\n")),Object(l.b)("hr",null),Object(l.b)("h3",{id:"toggledebug"},"toggleDebug()"),Object(l.b)("p",null,"To toggle the map's debug mode:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"<mapml-viewer>.toggleDebug();\n")),Object(l.b)("hr",null),Object(l.b)("h3",{id:"viewsource"},"viewSource()"),Object(l.b)("p",null,"To view the map's view source:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"<mapml-viewer>.viewSource();\n")),Object(l.b)("hr",null))}p.isMDXComponent=!0}}]);