(self.webpackChunkgitogram=self.webpackChunkgitogram||[]).push([[179],{"./.storybook/preview.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:function(){return _storybook_preview}});var injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),global=__webpack_require__("./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14.use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14.use[3]!./src/global.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(global.Z,options),global.Z&&global.Z.locals&&global.Z.locals;var _storybook_preview={parameters:{actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/i}}}}},"./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14.use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14.use[3]!./src/global.scss":function(module,__webpack_exports__,__webpack_require__){"use strict";var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,'body,html{height:100%}body{font-family:"Inter",Helvetica,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;color:#262626;font-size:14px;line-height:1.8}h1{margin:0}h2{margin:0}h3{margin:0}h4{margin:0}h5{margin:0}h6{margin:0}ul{list-style:none;padding:0;margin:0}img{display:block;max-width:100%}p{margin:0}svg{display:block}button{border:none;background:rgba(0,0,0,0);cursor:pointer;padding:0}*,*::after,*::before{box-sizing:border-box}.wrapper{overflow:hidden;min-height:100%;position:relative}.x-container{width:1200px;margin:0 auto}',"",{version:3,sources:["webpack://./src/global.scss"],names:[],mappings:"AAAA,UACE,WAAA,CAGF,KACE,wCAAA,CACA,kCAAA,CACA,iCAAA,CACA,aAAA,CACA,cAAA,CACA,eAAA,CAIA,GACE,QAAA,CADF,GACE,QAAA,CADF,GACE,QAAA,CADF,GACE,QAAA,CADF,GACE,QAAA,CADF,GACE,QAAA,CAIJ,GACE,eAAA,CACA,SAAA,CACA,QAAA,CAGF,IACE,aAAA,CACA,cAAA,CAGF,EACE,QAAA,CAGF,IACE,aAAA,CAGF,OACE,WAAA,CACA,wBAAA,CACA,cAAA,CACA,SAAA,CAGF,qBACE,qBAAA,CAGF,SACE,eAAA,CACA,eAAA,CACA,iBAAA,CAGF,aACE,YAAA,CACA,aAAA",sourcesContent:["body, html {\n  height: 100%;\n}\n\nbody {\n  font-family: 'Inter', Helvetica, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  color: #262626;\n  font-size: 14px;\n  line-height: 1.8;\n}\n\n@for $i from 1 through 6 {\n  h#{$i} {\n    margin: 0;\n  }\n}\n\nul {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n\nimg {\n  display: block;\n  max-width: 100%;\n}\n\np {\n  margin: 0;\n}\n\nsvg {\n  display: block;\n}\n\nbutton {\n  border: none;\n  background: transparent;\n  cursor: pointer;\n  padding: 0;\n}\n\n*, *::after, *::before {\n  box-sizing: border-box;\n}\n\n.wrapper {\n  overflow: hidden;\n  min-height: 100%;\n  position: relative;\n}\n\n.x-container {\n  width: 1200px;\n  margin: 0 auto;\n}"],sourceRoot:""}]),__webpack_exports__.Z=___CSS_LOADER_EXPORT___},"./src/components lazy recursive ^\\.\\/.*$ include: (?:\\/src\\/components(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.js)$":function(module,__unused_webpack_exports,__webpack_require__){var map={"./avatar/avatar.stories":["./src/components/avatar/avatar.stories.js",355],"./avatar/avatar.stories.js":["./src/components/avatar/avatar.stories.js",355],"./button/button.stories":["./src/components/button/button.stories.js",911],"./button/button.stories.js":["./src/components/button/button.stories.js",911]};function webpackAsyncContext(req){if(!__webpack_require__.o(map,req))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}));var ids=map[req],id=ids[0];return __webpack_require__.e(ids[1]).then((function(){return __webpack_require__(id)}))}webpackAsyncContext.keys=function(){return Object.keys(map)},webpackAsyncContext.id="./src/components lazy recursive ^\\.\\/.*$ include: (?:\\/src\\/components(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.js)$",module.exports=webpackAsyncContext},"./storybook-config-entry.js":function(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__){"use strict";var external_STORYBOOK_MODULE_GLOBAL_=__webpack_require__("@storybook/global"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),external_STORYBOOK_MODULE_CHANNELS_=__webpack_require__("@storybook/channels");const importers=[async path=>{if(!/^\.[\\/](?:src\/components(?:\/(?!\.)(?:(?:(?!(?:^|\/)\.).)*?)\/|\/|$)(?!\.)(?=.)[^/]*?\.stories\.js)$/.exec(path))return;const pathRemainder=path.substring(17);return __webpack_require__("./src/components lazy recursive ^\\.\\/.*$ include: (?:\\/src\\/components(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.js)$")("./"+pathRemainder)}];const channel=(0,external_STORYBOOK_MODULE_CHANNELS_.createBrowserChannel)({page:"preview"});external_STORYBOOK_MODULE_PREVIEW_API_.addons.setChannel(channel),"DEVELOPMENT"===external_STORYBOOK_MODULE_GLOBAL_.global.CONFIG_TYPE&&(window.__STORYBOOK_SERVER_CHANNEL__=channel);const preview=new external_STORYBOOK_MODULE_PREVIEW_API_.PreviewWeb;window.__STORYBOOK_PREVIEW__=preview,window.__STORYBOOK_STORY_STORE__=preview.storyStore,window.__STORYBOOK_ADDONS_CHANNEL__=channel,window.__STORYBOOK_CLIENT_API__=new external_STORYBOOK_MODULE_PREVIEW_API_.ClientApi({storyStore:preview.storyStore}),preview.initialize({importFn:async function importFn(path){for(let i=0;i<importers.length;i++){const moduleExports=await(x=()=>importers[i](path),x());if(moduleExports)return moduleExports}var x},getProjectAnnotations:()=>(0,external_STORYBOOK_MODULE_PREVIEW_API_.composeConfigs)([__webpack_require__("./node_modules/@storybook/vue3/preview.js"),__webpack_require__("./node_modules/@storybook/addon-links/dist/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/docs/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/actions/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/backgrounds/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/measure/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/outline/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/highlight/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-interactions/dist/preview.mjs"),__webpack_require__("./.storybook/preview.js")])})},"@storybook/channels":function(module){"use strict";module.exports=__STORYBOOK_MODULE_CHANNELS__},"@storybook/client-logger":function(module){"use strict";module.exports=__STORYBOOK_MODULE_CLIENT_LOGGER__},"@storybook/core-events":function(module){"use strict";module.exports=__STORYBOOK_MODULE_CORE_EVENTS__},"@storybook/global":function(module){"use strict";module.exports=__STORYBOOK_MODULE_GLOBAL__},"@storybook/preview-api":function(module){"use strict";module.exports=__STORYBOOK_MODULE_PREVIEW_API__}},function(__webpack_require__){__webpack_require__.O(0,[965],(function(){return moduleId="./storybook-config-entry.js",__webpack_require__(__webpack_require__.s=moduleId);var moduleId}));__webpack_require__.O()}]);