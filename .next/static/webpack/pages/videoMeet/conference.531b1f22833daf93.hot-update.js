"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/videoMeet/conference",{

/***/ "./pages/videoMeet/conference.js":
/*!***************************************!*\
  !*** ./pages/videoMeet/conference.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Ethereum_web3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Ethereum/web3 */ \"./Ethereum/web3.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst DynamicComponentWithNoSSR = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(_c = ()=>__webpack_require__.e(/*! import() */ \"node_modules_agora-rtc-sdk-ng_AgoraRTC_N-production_js\").then(__webpack_require__.t.bind(__webpack_require__, /*! agora-rtc-sdk-ng */ \"./node_modules/agora-rtc-sdk-ng/AgoraRTC_N-production.js\", 23)), {\n    loadableGenerated: {\n        modules: [\n            \"videoMeet\\\\conference.js -> \" + \"agora-rtc-sdk-ng\"\n        ]\n    },\n    ssr: false\n});\n_c1 = DynamicComponentWithNoSSR;\nconst MeetPage = ()=>{\n    _s();\n    const [account, setAccount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [client, setClient] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [agora, setAgora] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const APP_ID = \"b81053e90307440381920a540ba00586\";\n    const TOKEN = \"007eJxTYKjMOz5pQkjM7QNNZQ/OecvyXHzcKLV6yaY2LWFGud9mazgUGJIsDA1MjVMtDYwNzE1MDIwtDC2NDBJNTQySEg0MTC3Mru5PTG0IZGTwmv6XkZEBAkF8FobcxMw8BgYAGsIecQ==\";\n    const CHANNEL = \"main\";\n    let localTracks = [];\n    let remoteUsers = {};\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const initialize = async ()=>{\n            if ( true && window.ethereum) {\n                try {\n                    await window.ethereum.request({\n                        method: \"eth_requestAccounts\"\n                    });\n                    const accounts = await _Ethereum_web3__WEBPACK_IMPORTED_MODULE_2__[\"default\"].eth.getAccounts();\n                    setAccount(accounts[0]);\n                } catch (err) {\n                    if (err.code === 4001) {\n                        console.log(\"User rejected the request.\");\n                    } else {\n                        console.log(err);\n                    }\n                }\n            } else {\n                console.log(\"Install Metamask\");\n            }\n            console.log(\"Current account:\", account);\n        };\n        initialize();\n        console.log(\"Current account:\", account);\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const loadAgoraRTC = async ()=>{\n            const AgoraRTC = await __webpack_require__.e(/*! import() */ \"node_modules_agora-rtc-sdk-ng_AgoraRTC_N-production_js\").then(__webpack_require__.t.bind(__webpack_require__, /*! agora-rtc-sdk-ng */ \"./node_modules/agora-rtc-sdk-ng/AgoraRTC_N-production.js\", 23));\n            setAgora(AgoraRTC);\n            const client = AgoraRTC.createClient({\n                mode: \"rtc\",\n                codec: \"vp8\"\n            });\n            setClient(client);\n            joinTheMeet();\n        };\n        const joinTheMeet = async ()=>{};\n        if (true) {\n            loadAgoraRTC();\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"This is your meet!\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\91930\\\\Meety\\\\pages\\\\videoMeet\\\\conference.js\",\n                lineNumber: 67,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"video-streams\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\91930\\\\Meety\\\\pages\\\\videoMeet\\\\conference.js\",\n                lineNumber: 68,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\91930\\\\Meety\\\\pages\\\\videoMeet\\\\conference.js\",\n        lineNumber: 65,\n        columnNumber: 9\n    }, undefined);\n};\n_s(MeetPage, \"+pWzQ++Q3+Vm1OG+zBD+sn/B8W8=\");\n_c2 = MeetPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MeetPage);\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"DynamicComponentWithNoSSR$dynamic\");\n$RefreshReg$(_c1, \"DynamicComponentWithNoSSR\");\n$RefreshReg$(_c2, \"MeetPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy92aWRlb01lZXQvY29uZmVyZW5jZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQW1EO0FBQ1o7QUFDSjtBQUVuQyxNQUFNSyw0QkFBNEJELG1EQUFPQSxNQUFDLElBQU0sNk9BQU87Ozs7OztJQUNuREUsS0FBSzs7O0FBSVQsTUFBTUMsV0FBVzs7SUFDYixNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR1AsK0NBQVFBLENBQUM7SUFDdkMsTUFBTSxDQUFDUSxRQUFRQyxVQUFVLEdBQUdULCtDQUFRQSxDQUFDO0lBQ3JDLE1BQU0sQ0FBQ1UsT0FBT0MsU0FBUyxHQUFHWCwrQ0FBUUEsQ0FBQztJQUVuQyxNQUFNWSxTQUFTO0lBQ2YsTUFBTUMsUUFBUTtJQUNkLE1BQU1DLFVBQVU7SUFFaEIsSUFBSUMsY0FBYyxFQUFFO0lBQ3BCLElBQUlDLGNBQWMsQ0FBQztJQUVuQmpCLGdEQUFTQSxDQUFDO1FBQ04sTUFBTWtCLGFBQWE7WUFDZixJQUFJLEtBQWtCLElBQWVDLE9BQU9DLFFBQVEsRUFBRTtnQkFDbEQsSUFBSTtvQkFDQSxNQUFNRCxPQUFPQyxRQUFRLENBQUNDLE9BQU8sQ0FBQzt3QkFBRUMsUUFBUTtvQkFBc0I7b0JBQzlELE1BQU1DLFdBQVcsTUFBTXJCLDBEQUFRLENBQUN1QixXQUFXO29CQUMzQ2pCLFdBQVdlLFFBQVEsQ0FBQyxFQUFFO2dCQUMxQixFQUFFLE9BQU9HLEtBQUs7b0JBQ1YsSUFBSUEsSUFBSUMsSUFBSSxLQUFLLE1BQU07d0JBQ25CQyxRQUFRQyxHQUFHLENBQUM7b0JBQ2hCLE9BQU87d0JBQ0hELFFBQVFDLEdBQUcsQ0FBQ0g7b0JBQ2hCO2dCQUNKO1lBQ0osT0FBTztnQkFDSEUsUUFBUUMsR0FBRyxDQUFDO1lBQ2hCO1lBQ0FELFFBQVFDLEdBQUcsQ0FBQyxvQkFBb0J0QjtRQUNwQztRQUNBVztRQUNBVSxRQUFRQyxHQUFHLENBQUMsb0JBQW9CdEI7SUFDcEMsR0FBRyxFQUFFO0lBRUxQLGdEQUFTQSxDQUFDO1FBQ04sTUFBTThCLGVBQWU7WUFDakIsTUFBTUMsV0FBVyxNQUFNLDZPQUFPO1lBQzlCbkIsU0FBU21CO1lBQ1QsTUFBTXRCLFNBQVNzQixTQUFTQyxZQUFZLENBQUM7Z0JBQUVDLE1BQU07Z0JBQU9DLE9BQU87WUFBTTtZQUNqRXhCLFVBQVVEO1lBQ1YwQjtRQUNKO1FBRUEsTUFBTUEsY0FBYyxXQUVwQjtRQUVBLElBQUksSUFBa0IsRUFBYTtZQUMvQkw7UUFDSjtJQUNKLEdBQUcsRUFBRTtJQUdMLHFCQUNJLDhEQUFDTTs7MEJBRUcsOERBQUNDOzBCQUFHOzs7Ozs7MEJBQ0osOERBQUNEO2dCQUFJRSxJQUFHOzs7Ozs7Ozs7Ozs7QUFHcEI7R0E3RE1oQztNQUFBQTtBQStETiwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy92aWRlb01lZXQvY29uZmVyZW5jZS5qcz85YzA5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgd2ViMyBmcm9tICcuLi8uLi9FdGhlcmV1bS93ZWIzJztcclxuaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJztcclxuXHJcbmNvbnN0IER5bmFtaWNDb21wb25lbnRXaXRoTm9TU1IgPSBkeW5hbWljKCgpID0+IGltcG9ydCgnYWdvcmEtcnRjLXNkay1uZycpLCB7XHJcbiAgICBzc3I6IGZhbHNlLFxyXG59KTtcclxuXHJcblxyXG5jb25zdCBNZWV0UGFnZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IFthY2NvdW50LCBzZXRBY2NvdW50XSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtjbGllbnQsIHNldENsaWVudF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbYWdvcmEsIHNldEFnb3JhXSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiAgICBjb25zdCBBUFBfSUQgPSBcImI4MTA1M2U5MDMwNzQ0MDM4MTkyMGE1NDBiYTAwNTg2XCI7XHJcbiAgICBjb25zdCBUT0tFTiA9IFwiMDA3ZUp4VFlLak1PejVwUWtqTTdRTk5aUS9PZWN2eVhIemNLTFY2eWFZMkxXRkd1ZDltYXpnVUdKSXNEQTFNalZNdERZd056RTFNREl3dERDMk5EQkpOVFF5U0VnME1UQzNNcnU1UFRHMElaR1R3bXY2WGtaRUJBa0Y4Rm9iY3hNdzhCZ1lBR3NJZWNRPT1cIjtcclxuICAgIGNvbnN0IENIQU5ORUwgPSBcIm1haW5cIjtcclxuXHJcbiAgICBsZXQgbG9jYWxUcmFja3MgPSBbXTtcclxuICAgIGxldCByZW1vdGVVc2VycyA9IHt9O1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgaW5pdGlhbGl6ZSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5ldGhlcmV1bSkge1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICBhd2FpdCB3aW5kb3cuZXRoZXJldW0ucmVxdWVzdCh7IG1ldGhvZDogJ2V0aF9yZXF1ZXN0QWNjb3VudHMnIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRBY2NvdW50KGFjY291bnRzWzBdKTtcclxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnIuY29kZSA9PT0gNDAwMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnVXNlciByZWplY3RlZCB0aGUgcmVxdWVzdC4nKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdJbnN0YWxsIE1ldGFtYXNrJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJDdXJyZW50IGFjY291bnQ6XCIsIGFjY291bnQpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgaW5pdGlhbGl6ZSgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiQ3VycmVudCBhY2NvdW50OlwiLCBhY2NvdW50KTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGxvYWRBZ29yYVJUQyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgQWdvcmFSVEMgPSBhd2FpdCBpbXBvcnQoJ2Fnb3JhLXJ0Yy1zZGstbmcnKTtcclxuICAgICAgICAgICAgc2V0QWdvcmEoQWdvcmFSVEMpO1xyXG4gICAgICAgICAgICBjb25zdCBjbGllbnQgPSBBZ29yYVJUQy5jcmVhdGVDbGllbnQoeyBtb2RlOiAncnRjJywgY29kZWM6ICd2cDgnIH0pO1xyXG4gICAgICAgICAgICBzZXRDbGllbnQoY2xpZW50KTtcclxuICAgICAgICAgICAgam9pblRoZU1lZXQoKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBqb2luVGhlTWVldCA9IGFzeW5jICgpID0+IHtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgbG9hZEFnb3JhUlRDKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pO1xyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcblxyXG4gICAgICAgICAgICA8aDE+VGhpcyBpcyB5b3VyIG1lZXQhPC9oMT5cclxuICAgICAgICAgICAgPGRpdiBpZD1cInZpZGVvLXN0cmVhbXNcIj48L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNZWV0UGFnZTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ3ZWIzIiwiZHluYW1pYyIsIkR5bmFtaWNDb21wb25lbnRXaXRoTm9TU1IiLCJzc3IiLCJNZWV0UGFnZSIsImFjY291bnQiLCJzZXRBY2NvdW50IiwiY2xpZW50Iiwic2V0Q2xpZW50IiwiYWdvcmEiLCJzZXRBZ29yYSIsIkFQUF9JRCIsIlRPS0VOIiwiQ0hBTk5FTCIsImxvY2FsVHJhY2tzIiwicmVtb3RlVXNlcnMiLCJpbml0aWFsaXplIiwid2luZG93IiwiZXRoZXJldW0iLCJyZXF1ZXN0IiwibWV0aG9kIiwiYWNjb3VudHMiLCJldGgiLCJnZXRBY2NvdW50cyIsImVyciIsImNvZGUiLCJjb25zb2xlIiwibG9nIiwibG9hZEFnb3JhUlRDIiwiQWdvcmFSVEMiLCJjcmVhdGVDbGllbnQiLCJtb2RlIiwiY29kZWMiLCJqb2luVGhlTWVldCIsImRpdiIsImgxIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/videoMeet/conference.js\n"));

/***/ })

});