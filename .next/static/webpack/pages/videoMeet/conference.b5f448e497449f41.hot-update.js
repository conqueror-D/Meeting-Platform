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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Ethereum_web3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Ethereum/web3 */ \"./Ethereum/web3.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst DynamicComponentWithNoSSR = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(_c = ()=>__webpack_require__.e(/*! import() */ \"node_modules_agora-rtc-sdk-ng_AgoraRTC_N-production_js\").then(__webpack_require__.t.bind(__webpack_require__, /*! agora-rtc-sdk-ng */ \"./node_modules/agora-rtc-sdk-ng/AgoraRTC_N-production.js\", 23)), {\n    loadableGenerated: {\n        modules: [\n            \"videoMeet\\\\conference.js -> \" + \"agora-rtc-sdk-ng\"\n        ]\n    },\n    ssr: false\n});\n_c1 = DynamicComponentWithNoSSR;\nconst MeetPage = ()=>{\n    _s();\n    const [account, setAccount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const APP_ID = \"b81053e90307440381920a540ba00586\";\n    const TOKEN = \"007eJxTYDgRYef2RKxM9e0GaeEnFufLjRiOKJdJzDzcLioX5sKwXEGBIcnC0MDUONXSwNjA3MTEwNjC0NLIINHUxCAp0cDA1MLs7e+w1IZARoaYXwbMjAwQCOKzMOQmZuYxMAAAMcwbnA==\";\n    const CHANNEL = \"main\";\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const initialize = async ()=>{\n            if ( true && window.ethereum) {\n                try {\n                    await window.ethereum.request({\n                        method: \"eth_requestAccounts\"\n                    });\n                    const accounts = await _Ethereum_web3__WEBPACK_IMPORTED_MODULE_2__[\"default\"].eth.getAccounts();\n                    setAccount(accounts[0]);\n                } catch (err) {\n                    if (err.code === 4001) {\n                        console.log(\"User rejected the request.\");\n                    } else {\n                        console.log(err);\n                    }\n                }\n            } else {\n                console.log(\"Install Metamask\");\n            }\n            console.log(\"Current account:\", account);\n        };\n        console.log(\"Current account:\", account);\n        initialize();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        children: \"This is your meet!\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\91930\\\\Meety\\\\pages\\\\videoMeet\\\\conference.js\",\n        lineNumber: 41,\n        columnNumber: 9\n    }, undefined);\n};\n_s(MeetPage, \"uvVbIIk91/2HpqdLbrA7lBpBOUg=\");\n_c2 = MeetPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MeetPage);\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"DynamicComponentWithNoSSR$dynamic\");\n$RefreshReg$(_c1, \"DynamicComponentWithNoSSR\");\n$RefreshReg$(_c2, \"MeetPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy92aWRlb01lZXQvY29uZmVyZW5jZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQW1EO0FBQ1o7QUFDSjtBQUVuQyxNQUFNSyw0QkFBNEJELG1EQUFPQSxNQUFDLElBQU0sNk9BQU87Ozs7OztJQUNuREUsS0FBSzs7O0FBSVQsTUFBTUMsV0FBVzs7SUFDYixNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR1AsK0NBQVFBLENBQUM7SUFDdkMsTUFBTVEsU0FBUztJQUNmLE1BQU1DLFFBQVE7SUFDZCxNQUFNQyxVQUFVO0lBRWhCWCxnREFBU0EsQ0FBQztRQUNOLE1BQU1ZLGFBQWE7WUFDZixJQUFJLEtBQWtCLElBQWVDLE9BQU9DLFFBQVEsRUFBRTtnQkFDbEQsSUFBSTtvQkFDQSxNQUFNRCxPQUFPQyxRQUFRLENBQUNDLE9BQU8sQ0FBQzt3QkFBRUMsUUFBUTtvQkFBc0I7b0JBQzlELE1BQU1DLFdBQVcsTUFBTWYsMERBQVEsQ0FBQ2lCLFdBQVc7b0JBQzNDWCxXQUFXUyxRQUFRLENBQUMsRUFBRTtnQkFDMUIsRUFBRSxPQUFPRyxLQUFLO29CQUNWLElBQUlBLElBQUlDLElBQUksS0FBSyxNQUFNO3dCQUNuQkMsUUFBUUMsR0FBRyxDQUFDO29CQUNoQixPQUFPO3dCQUNIRCxRQUFRQyxHQUFHLENBQUNIO29CQUNoQjtnQkFDSjtZQUNKLE9BQU87Z0JBQ0hFLFFBQVFDLEdBQUcsQ0FBQztZQUNoQjtZQUNBRCxRQUFRQyxHQUFHLENBQUMsb0JBQW9CaEI7UUFDcEM7UUFDQWUsUUFBUUMsR0FBRyxDQUFDLG9CQUFvQmhCO1FBRWhDSztJQUNKLEdBQUcsRUFBRTtJQUVMLHFCQUNJLDhEQUFDWTtrQkFBRzs7Ozs7O0FBRVo7R0FqQ01sQjtNQUFBQTtBQW1DTiwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy92aWRlb01lZXQvY29uZmVyZW5jZS5qcz85YzA5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgd2ViMyBmcm9tICcuLi8uLi9FdGhlcmV1bS93ZWIzJztcclxuaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJztcclxuXHJcbmNvbnN0IER5bmFtaWNDb21wb25lbnRXaXRoTm9TU1IgPSBkeW5hbWljKCgpID0+IGltcG9ydCgnYWdvcmEtcnRjLXNkay1uZycpLCB7XHJcbiAgICBzc3I6IGZhbHNlLFxyXG59KTtcclxuXHJcblxyXG5jb25zdCBNZWV0UGFnZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IFthY2NvdW50LCBzZXRBY2NvdW50XSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IEFQUF9JRCA9IFwiYjgxMDUzZTkwMzA3NDQwMzgxOTIwYTU0MGJhMDA1ODZcIjtcclxuICAgIGNvbnN0IFRPS0VOID0gXCIwMDdlSnhUWURnUlllZjJSS3hNOWUwR2FlRW5GdWZMalJpT0tKZEp6RHpjTGlvWDVzS3dYRUdCSWNuQzBNRFVPTlhTd05qQTNNVEV3TmpDME5MSUlOSFV4Q0FwMGNEQTFNTHM3ZSt3MUlaQVJvYVlYd2JNakF3UUNPS3pNT1FtWnVZeE1BQUFNY3dibkE9PVwiO1xyXG4gICAgY29uc3QgQ0hBTk5FTCA9IFwibWFpblwiO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgaW5pdGlhbGl6ZSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5ldGhlcmV1bSkge1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICBhd2FpdCB3aW5kb3cuZXRoZXJldW0ucmVxdWVzdCh7IG1ldGhvZDogJ2V0aF9yZXF1ZXN0QWNjb3VudHMnIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRBY2NvdW50KGFjY291bnRzWzBdKTtcclxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnIuY29kZSA9PT0gNDAwMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnVXNlciByZWplY3RlZCB0aGUgcmVxdWVzdC4nKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdJbnN0YWxsIE1ldGFtYXNrJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJDdXJyZW50IGFjY291bnQ6XCIsIGFjY291bnQpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJDdXJyZW50IGFjY291bnQ6XCIsIGFjY291bnQpO1xyXG5cclxuICAgICAgICBpbml0aWFsaXplKCk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8aDE+VGhpcyBpcyB5b3VyIG1lZXQhPC9oMT5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNZWV0UGFnZTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ3ZWIzIiwiZHluYW1pYyIsIkR5bmFtaWNDb21wb25lbnRXaXRoTm9TU1IiLCJzc3IiLCJNZWV0UGFnZSIsImFjY291bnQiLCJzZXRBY2NvdW50IiwiQVBQX0lEIiwiVE9LRU4iLCJDSEFOTkVMIiwiaW5pdGlhbGl6ZSIsIndpbmRvdyIsImV0aGVyZXVtIiwicmVxdWVzdCIsIm1ldGhvZCIsImFjY291bnRzIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJlcnIiLCJjb2RlIiwiY29uc29sZSIsImxvZyIsImgxIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/videoMeet/conference.js\n"));

/***/ })

});