(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{111:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return b}));var o=n(0),r=n.n(o);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=p(n),d=o,b=m["".concat(a,".").concat(d)]||m[d]||u[d]||i;return n?r.a.createElement(b,s(s({ref:t},l),{},{components:n})):r.a.createElement(b,s({ref:t},l))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},82:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var o=n(3),r=n(7),i=(n(0),n(111)),a={id:"custom-projections",title:"Custom Projections API",slug:"/api/custom-projections"},s={unversionedId:"api/custom-projections",id:"api/custom-projections",isDocsHomePage:!1,title:"Custom Projections API",description:"Introduction",source:"@site/docs/api/custom-projections.md",slug:"/api/custom-projections",permalink:"/web-map-doc/docs/api/custom-projections",version:"current",sidebar:"someSidebar",previous:{title:"<map-a>",permalink:"/web-map-doc/docs/other-elements/map-a"},next:{title:"Resources",permalink:"/web-map-doc/docs/resources/resources"}},c=[{value:"Introduction",id:"introduction",children:[{value:"Details",id:"details",children:[]}]}],l={toc:c};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"introduction"},"Introduction"),Object(i.b)("p",null,"MapML defines a few built-in tiled CRS projections, including Web Mercator (OSMTILE), pseudo-plate carr\xe9e (WGS84), and  Canada's base map tile grid (CBMTILE). "),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"<mapml-viewer>")," and ",Object(i.b)("inlineCode",{parentName:"p"},'<map is="web-map">')," custom elements provide the custom projections API, which gives you the ability to create custom projections and use them in the ",Object(i.b)("inlineCode",{parentName:"p"},"<mapml-viewer>")," or ",Object(i.b)("inlineCode",{parentName:"p"},'<map is="web-map">'),' elements, defined using extended JSON-based "proj4" syntax, supported by the proj4js library.'),Object(i.b)("p",null,"For example:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="en">\n   <head>\n     <meta charset="utf-8" >\n     <title>Example Custom Projection</title>\n     <meta name="viewport" content="width=device-width, initial-scale=1">\n     <script type="module" src="web-map/mapml-viewer.js"><\/script>\n     <script type="module">\n       let customProjectionDefinition = `{\n          "projection": "ATLAS_POLAR_MAP",\n          "proj4string" : "+proj=aeqd +lat_0=90 +lon_0=-90 +x_0=0 +y_0=0 +ellps=sphere +units=m +no_defs +type=crs",\n          "origin" : [-20015200,20015200],\n          "resolutions" :  [33073,16536.5,8268.246,4134.123,2067.061,1033.531,516.765],\n          "bounds" : [[4979939,-4846977],[-5139071,3980038]],\n          "tilesize" : 256\n        }`;\n      let map = document.querySelector("mapml-viewer");\n      let cProjection = map.defineCustomProjection(customProjectionDefinition);    \n      map.projection = cProjection;\n    <\/script>\n   </head>\n   <body>\n  <body>\n    <mapml-viewer projection="ATLAS_POLAR_MAP" zoom="2" lat="83.48919" lon="-87.7687" controls>\n      <layer- label="Atlas of Canada Polar Wall Map" checked>\n        <link rel="license" title="Canadian Federal Geospatial Platform" href="https://geoappext.nrcan.gc.ca/arcgis/rest/services/FGP/NCR_RCN/MapServer/">\n        <extent units="ATLAS_POLAR_MAP">\n          <input type="zoom" name="z" min="0" max="6" value="6" >\n          <input type="location" name="x" axis="column" units="tilematrix" min="116" max="186">\n          <input type="location" name="y" axis="row" units="tilematrix" min="125" max="184">\n          <link rel="tile" tref="https://geoappext.nrcan.gc.ca/arcgis/rest/services/FGP/NCR_RCN/MapServer/tile/{z}/{y}/{x}/">\n          <link rel="tile" tref="https://geoappext.nrcan.gc.ca/arcgis/rest/services/FGP/NCR_RCN_A/MapServer/tile/{z}/{y}/{x}/">\n        </extent>\n      </layer->\n    </mapml-viewer>\n  </body>\n</html>\n')),Object(i.b)("h3",{id:"details"},"Details"),Object(i.b)("p",null,"We won't discuss the actual ",Object(i.b)("inlineCode",{parentName:"p"},"<mapml-viewer>")," or ",Object(i.b)("inlineCode",{parentName:"p"},'<map is="web-map">')," elements here, except to say that the map ",Object(i.b)("inlineCode",{parentName:"p"},"projection")," attribute should have the exact same value of the ",Object(i.b)("inlineCode",{parentName:"p"},"projection")," member of the JSON object you pass to the custom projections API's ",Object(i.b)("inlineCode",{parentName:"p"},"defineCustomProjection")," method, and every ",Object(i.b)("inlineCode",{parentName:"p"},"<layer->")," element in the map must declare and be encoded in that coordinate system, in order to display correctly."),Object(i.b)("p",null,"The custom projections API is provided by the ",Object(i.b)("inlineCode",{parentName:"p"},"<mapml-viewer>")," or ",Object(i.b)("inlineCode",{parentName:"p"},'<map is="web-map">')," element.  In a browser implementation, the API might be defined on the window object, but because of the ES6 modules used by custom elements, it is convenient to locate it on the mapping element which uses it."),Object(i.b)("p",null,"To successfully call the ",Object(i.b)("inlineCode",{parentName:"p"},"defineCustomProjection")," method, you need to encode the projection method and parameters as members of a JSON string.  The process of doing this is not always simple, but is helped by resources such as ",Object(i.b)("a",{parentName:"p",href:"https://spatialreference.org"},"https://spatialreference.org"),", where you can obtain the proj4 version of virtually any CRS definition. "),Object(i.b)("p",null,'Remember to enclose member names in quotes followed by a colon: e.g. "projection": "MY_PROJECTION_NAME".  String values are also enclosed in quotes, and numbers and arrays following normal ',Object(i.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON"},"JSON syntax"),"."),Object(i.b)("p",null,"There are several required members to a custom projection definition:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"projection"),' - this is a string name you give to your projection. We recommend using UPPERCASE to make projection names stand out. Colon ":" characters in the name are not permitted, because these names should not be confused with EPSG: or ogc: URI code lists, because what is being defined here is a CRS that has Web mapping specific parameters, discussed below.'),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"proj4string")," - This string is processed by ",Object(i.b)("a",{parentName:"li",href:"http://proj4js.org/"},"proj4js"),", so needs to provide parameters of a projection method supported by that library, in the format that it supports."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"origin"),' - an array of two numbers representing the origin of the tile grid in coordinates of the projected coordinate system, typically meters.  The origin is always at the upper left of the tile grid space, and the column and row numbers increase to the right and down, respectively, following the WMTS standard.  If your tile source is configured according to the "TMS" community standard, you'),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"resolutions"),' - an array of numbers, sorted in descending order of size in meters, of the "real-world" dimensions of a square pixel. The resolution is calculated using a nominal pixel size of 0.28mm, defined by the WMTS standard. NOTE THIS IS NOT TYPICALLY THE SAME VALUE THAT IS USED BY ESRI TILE SERVICES, WHICH USE 96 DPI AS THE NOMINAL SIZE (settable). Because scale varies over the extent of any projected coordinate system, the pixel resolution is usually valid only in limited locations, for example in Web Mercator, along the equator. The locations where pixel resolution is valid depend on the projection method and parameters.  The set of resolutions must match the set of resolutions of tiles in a cache, if you intend to use your custom projection with an existing tile service.'),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"bounds")," - an array of two arrays of coordinate pairs, defining a bounding box around part of the projected coordinate system, in meters typically. Requests should be valid and latitude / longitude are defined within these bounds.  Requests for maps, tiles and coordinate transformations that fall completely outside these bounds will not execute, preventing redundant traffic and errors.  "),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"tilesize")," - tiles are always square, and usually 256 pixels on a side.  You can specify another size here as an integer value.  Values of 256, 512, 1024, 2048 or 4096 should work.")))}p.isMDXComponent=!0}}]);