---
id: installation
title: Installation
---

### Download `<mapml-viewer>` Suite

| Version | Description                                 |
|---------|---------------------------------------------|
| [master](https://github.com/Maps4HTML/Web-Map-Custom-Element/archive/master.zip)  | Latest version developed on `master` branch, needs to be built, steps can be found [here](/web-map-doc/docs/installation#clone-mapml-viewer-repository) |
| [v0.8.0](https://github.com/Maps4HTML/Web-Map-Custom-Element/archive/v0.8.0.zip)  | Latest zip release                          |

#### Using a Downloaded Version of `<mapml-viewer>` Suite

Extract the zip file downloaded from the links above, in there you will find many files, the following are needed for full functionality:

- layer.js
- leaflet-src.js
- leaflet.css
- leaflet.fullscreen.css
- Leaflet.fullscreen.js
- map-area.js
- mapml-viewer.js
- mapml.css
- mapml.min.js
- proj4-src.js
- proj4leaflet.js

#### Adding Script To Webpage

Copy/move these files to your webpage's directory and add the following to the `<head>` of your HTML code:

```html
  <script type="module" src="path/to/mapml-viewer.js"></script>
```

You can now use `<mapml-viewer>`, `<layer>` and the other elements that come in the `<mapml-viewer>` element suite on your webpages.

### Clone `<mapml-viewer>` Repository

An alternative to downloading the .zip file is to clone the github repository. This option allows you to make any modifications and view the source code more easily.

#### Requreiments

- [Node.js](https://nodejs.org/en/download/)

Run the following commands in bash:

```bash
git clone https://github.com/Maps4HTML/Web-Map-Custom-Element
```

```bash
cd Web-Map-Custom-Element #enters root of repository
npm install               #installs dependencies
npm install -g grunt-cli  #installs grunt command line tool
grunt clean copy rollup   #builds mapml
```

After the build is complete a dist folder will be created with the contents. Follow the steps [here](/web-map-doc/docs/installation#using-a-downloaded-version-of-mapml-viewer-suite) on how to use the contents.
