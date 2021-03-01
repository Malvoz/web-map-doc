(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{102:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),b=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=b(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=b(n),u=a,d=s["".concat(o,".").concat(u)]||s[u]||m[u]||l;return n?r.a.createElement(d,i(i({ref:t},p),{},{components:n})):r.a.createElement(d,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},79:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(7),l=(n(0),n(102)),o={id:"installation",title:"Installation"},i={unversionedId:"installation",id:"installation",isDocsHomePage:!1,title:"Installation",description:"Download `` Suite",source:"@site/docs/installation.md",slug:"/installation",permalink:"/web-map-doc/docs/installation",editUrl:"https://github.com/Maps4HTML/web-map-doc/docs/installation.md",version:"current",sidebar:"someSidebar",previous:{title:"Introduction",permalink:"/web-map-doc/docs/"},next:{title:"Static Tiles Layer",permalink:"/web-map-doc/docs/layers/static-tiles"}},c=[{value:"Download <code>&lt;mapml-viewer&gt;</code> Suite",id:"download-mapml-viewer-suite",children:[]},{value:"Clone <code>&lt;mapml-viewer&gt;</code> Repository",id:"clone-mapml-viewer-repository",children:[]}],p={toc:c};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h3",{id:"download-mapml-viewer-suite"},"Download ",Object(l.b)("inlineCode",{parentName:"h3"},"<mapml-viewer>")," Suite"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Version"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"https://github.com/Maps4HTML/Web-Map-Custom-Element/archive/master.zip"},"master")),Object(l.b)("td",{parentName:"tr",align:null},"Latest version developed on ",Object(l.b)("inlineCode",{parentName:"td"},"master")," branch, needs to be built, steps can be found ",Object(l.b)("a",{parentName:"td",href:"/web-map-doc/docs/installation#clone-mapml-viewer-repository"},"here"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"https://github.com/Maps4HTML/Web-Map-Custom-Element/archive/v0.8.0.zip"},"v0.8.0")),Object(l.b)("td",{parentName:"tr",align:null},"Latest zip release")))),Object(l.b)("h4",{id:"using-a-downloaded-version-of-mapml-viewer-suite"},"Using a Downloaded Version of ",Object(l.b)("inlineCode",{parentName:"h4"},"<mapml-viewer>")," Suite"),Object(l.b)("p",null,"Extract the zip file downloaded from the links above, in there you will find many files, the following are needed for full functionality:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"layer.js"),Object(l.b)("li",{parentName:"ul"},"leaflet-src.js"),Object(l.b)("li",{parentName:"ul"},"leaflet.css"),Object(l.b)("li",{parentName:"ul"},"leaflet.fullscreen.css"),Object(l.b)("li",{parentName:"ul"},"Leaflet.fullscreen.js"),Object(l.b)("li",{parentName:"ul"},"map-area.js"),Object(l.b)("li",{parentName:"ul"},"mapml-viewer.js"),Object(l.b)("li",{parentName:"ul"},"mapml.css"),Object(l.b)("li",{parentName:"ul"},"mapml.min.js"),Object(l.b)("li",{parentName:"ul"},"proj4-src.js"),Object(l.b)("li",{parentName:"ul"},"proj4leaflet.js")),Object(l.b)("h4",{id:"adding-script-to-webpage"},"Adding Script To Webpage"),Object(l.b)("p",null,"Copy/move these files to your webpage's directory and add the following to the ",Object(l.b)("inlineCode",{parentName:"p"},"<head>")," of your HTML code:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-html"},'  <script type="module" src="path/to/mapml-viewer.js"><\/script>\n')),Object(l.b)("p",null,"You can now use ",Object(l.b)("inlineCode",{parentName:"p"},"<mapml-viewer>"),", ",Object(l.b)("inlineCode",{parentName:"p"},"<layer>")," and the other elements that come in the ",Object(l.b)("inlineCode",{parentName:"p"},"<mapml-viewer>")," element suite on your webpages."),Object(l.b)("h3",{id:"clone-mapml-viewer-repository"},"Clone ",Object(l.b)("inlineCode",{parentName:"h3"},"<mapml-viewer>")," Repository"),Object(l.b)("p",null,"An alternative to downloading the .zip file is to clone the github repository. This option allows you to make any modifications and view the source code more easily."),Object(l.b)("h4",{id:"requreiments"},"Requreiments"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://nodejs.org/en/download/"},"Node.js"))),Object(l.b)("p",null,"Run the following commands in bash:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/Maps4HTML/Web-Map-Custom-Element\n")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"cd Web-Map-Custom-Element #enters root of repository\nnpm install               #installs dependencies\nnpm install -g grunt-cli  #installs grunt command line tool\ngrunt clean copy rollup   #builds mapml\n")),Object(l.b)("p",null,"After the build is complete a dist folder will be created with the contents. Follow the steps ",Object(l.b)("a",{parentName:"p",href:"/web-map-doc/docs/installation#using-a-downloaded-version-of-mapml-viewer-suite"},"here")," on how to use the contents."))}b.isMDXComponent=!0}}]);