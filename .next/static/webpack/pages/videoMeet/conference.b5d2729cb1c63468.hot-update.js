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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Ethereum_web3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Ethereum/web3 */ \"./Ethereum/web3.js\");\n/* harmony import */ var agora_rtc_sdk_ng__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! agora-rtc-sdk-ng */ \"./node_modules/agora-rtc-sdk-ng/AgoraRTC_N-production.js\");\n/* harmony import */ var agora_rtc_sdk_ng__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(agora_rtc_sdk_ng__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst MeetPage = ()=>{\n    _s();\n    const [account, setAccount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const APP_ID = \"b81053e90307440381920a540ba00586\";\n    const TOKEN = \"007eJxTYDgRYef2RKxM9e0GaeEnFufLjRiOKJdJzDzcLioX5sKwXEGBIcnC0MDUONXSwNjA3MTEwNjC0NLIINHUxCAp0cDA1MLs7e+w1IZARoaYXwbMjAwQCOKzMOQmZuYxMAAAMcwbnA==\";\n    const CHANNEL = \"main\";\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        console.log(\"Control is here!\");\n        const initialize = async ()=>{\n            if ( true && window.ethereum) {\n                try {\n                    await window.ethereum.request({\n                        method: \"eth_requestAccounts\"\n                    });\n                    const accounts = await _Ethereum_web3__WEBPACK_IMPORTED_MODULE_2__[\"default\"].eth.getAccounts();\n                    setAccount(accounts[0]);\n                    console.log(\"Current account:\", accounts[0]);\n                } catch (err) {\n                    if (err.code === 4001) {\n                        console.log(\"User rejected the request.\");\n                    } else {\n                        console.log(err);\n                    }\n                }\n            } else {\n                console.log(\"Install Metamask\");\n            }\n        };\n        initialize();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        children: \"This is your meet!\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\91930\\\\Meety\\\\pages\\\\videoMeet\\\\conference.js\",\n        lineNumber: 36,\n        columnNumber: 9\n    }, undefined);\n};\n_s(MeetPage, \"uvVbIIk91/2HpqdLbrA7lBpBOUg=\");\n_c = MeetPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MeetPage);\nvar _c;\n$RefreshReg$(_c, \"MeetPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy92aWRlb01lZXQvY29uZmVyZW5jZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQW1EO0FBQ1o7QUFDQztBQUV4QyxNQUFNSyxXQUFXOztJQUNiLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHTCwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNTSxTQUFTO0lBQ2YsTUFBTUMsUUFBUTtJQUNkLE1BQU1DLFVBQVU7SUFFaEJULGdEQUFTQSxDQUFDO1FBQ05VLFFBQVFDLEdBQUcsQ0FBQztRQUNaLE1BQU1DLGFBQWE7WUFDZixJQUFJLEtBQWtCLElBQWVDLE9BQU9DLFFBQVEsRUFBRTtnQkFDbEQsSUFBSTtvQkFDQSxNQUFNRCxPQUFPQyxRQUFRLENBQUNDLE9BQU8sQ0FBQzt3QkFBRUMsUUFBUTtvQkFBc0I7b0JBQzlELE1BQU1DLFdBQVcsTUFBTWYsMERBQVEsQ0FBQ2lCLFdBQVc7b0JBQzNDYixXQUFXVyxRQUFRLENBQUMsRUFBRTtvQkFDdEJQLFFBQVFDLEdBQUcsQ0FBQyxvQkFBb0JNLFFBQVEsQ0FBQyxFQUFFO2dCQUMvQyxFQUFFLE9BQU9HLEtBQUs7b0JBQ1YsSUFBSUEsSUFBSUMsSUFBSSxLQUFLLE1BQU07d0JBQ25CWCxRQUFRQyxHQUFHLENBQUM7b0JBQ2hCLE9BQU87d0JBQ0hELFFBQVFDLEdBQUcsQ0FBQ1M7b0JBQ2hCO2dCQUNKO1lBQ0osT0FBTztnQkFDSFYsUUFBUUMsR0FBRyxDQUFDO1lBQ2hCO1FBQ0o7UUFFQUM7SUFDSixHQUFHLEVBQUU7SUFFTCxxQkFDSSw4REFBQ1U7a0JBQUc7Ozs7OztBQUVaO0dBakNNbEI7S0FBQUE7QUFtQ04sK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdmlkZW9NZWV0L2NvbmZlcmVuY2UuanM/OWMwOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHdlYjMgZnJvbSAnLi4vLi4vRXRoZXJldW0vd2ViMyc7XHJcbmltcG9ydCBBZ29yYVJUQyBmcm9tICdhZ29yYS1ydGMtc2RrLW5nJztcclxuXHJcbmNvbnN0IE1lZXRQYWdlID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW2FjY291bnQsIHNldEFjY291bnRdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgQVBQX0lEID0gXCJiODEwNTNlOTAzMDc0NDAzODE5MjBhNTQwYmEwMDU4NlwiO1xyXG4gICAgY29uc3QgVE9LRU4gPSBcIjAwN2VKeFRZRGdSWWVmMlJLeE05ZTBHYWVFbkZ1ZkxqUmlPS0pkSnpEemNMaW9YNXNLd1hFR0JJY25DME1EVU9OWFN3TmpBM01URXdOakMwTkxJSU5IVXhDQXAwY0RBMU1MczdlK3cxSVpBUm9hWVh3Yk1qQXdRQ09Lek1PUW1adVl4TUFBQU1jd2JuQT09XCI7XHJcbiAgICBjb25zdCBDSEFOTkVMID0gXCJtYWluXCI7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnQ29udHJvbCBpcyBoZXJlIScpXHJcbiAgICAgICAgY29uc3QgaW5pdGlhbGl6ZSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5ldGhlcmV1bSkge1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICBhd2FpdCB3aW5kb3cuZXRoZXJldW0ucmVxdWVzdCh7IG1ldGhvZDogJ2V0aF9yZXF1ZXN0QWNjb3VudHMnIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRBY2NvdW50KGFjY291bnRzWzBdKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkN1cnJlbnQgYWNjb3VudDpcIiwgYWNjb3VudHNbMF0pO1xyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVyci5jb2RlID09PSA0MDAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdVc2VyIHJlamVjdGVkIHRoZSByZXF1ZXN0LicpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0luc3RhbGwgTWV0YW1hc2snKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGluaXRpYWxpemUoKTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxoMT5UaGlzIGlzIHlvdXIgbWVldCE8L2gxPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lZXRQYWdlO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIndlYjMiLCJBZ29yYVJUQyIsIk1lZXRQYWdlIiwiYWNjb3VudCIsInNldEFjY291bnQiLCJBUFBfSUQiLCJUT0tFTiIsIkNIQU5ORUwiLCJjb25zb2xlIiwibG9nIiwiaW5pdGlhbGl6ZSIsIndpbmRvdyIsImV0aGVyZXVtIiwicmVxdWVzdCIsIm1ldGhvZCIsImFjY291bnRzIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJlcnIiLCJjb2RlIiwiaDEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/videoMeet/conference.js\n"));

/***/ })

});