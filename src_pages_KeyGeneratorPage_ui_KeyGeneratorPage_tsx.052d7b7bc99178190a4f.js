(self["webpackChunkblog"] = self["webpackChunkblog"] || []).push([["src_pages_KeyGeneratorPage_ui_KeyGeneratorPage_tsx"],{

/***/ "./src/pages/KeyGeneratorPage/ui/KeyGeneratorPage.tsx":
/*!************************************************************!*\
  !*** ./src/pages/KeyGeneratorPage/ui/KeyGeneratorPage.tsx ***!
  \************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KeyGeneratorPage": () => (/* binding */ KeyGeneratorPage),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var shared_lib_classNames_classNames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shared/lib/classNames/classNames */ "./src/shared/lib/classNames/classNames.ts");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/dist/reactstrap.modern.js");
/* harmony import */ var widget_GeneratePDF__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! widget/GeneratePDF */ "./src/widget/GeneratePDF/index.ts");
/* harmony import */ var _react_pdf_renderer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @react-pdf/renderer */ "./node_modules/@react-pdf/renderer/lib/react-pdf.browser.es.js");
/* harmony import */ var _KeyGeneratorPage_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./KeyGeneratorPage.module.scss */ "./src/pages/KeyGeneratorPage/ui/KeyGeneratorPage.module.scss");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __spreadArray = undefined && undefined.__spreadArray || function (to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
    if (ar || !(i in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
      ar[i] = from[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
};









var KeyGeneratorPage = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function (props) {
  var className = props.className;
  var t = (0,react_i18next__WEBPACK_IMPORTED_MODULE_6__.useTranslation)().t;

  var _a = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      isModalOpen = _a[0],
      setIsModalOpen = _a[1];

  var _b = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''),
      inputProps = _b[0],
      setInputProps = _b[1];

  var _c = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''),
      inputTextArea = _c[0],
      setInputTextArea = _c[1];

  var _d = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
      dataObj = _d[0],
      setDataObj = _d[1];

  var _e = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      isActive = _e[0],
      setIsActive = _e[1];

  var submit = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function () {
    if (inputProps.length && inputProps !== 'Выберите продукт' && inputTextArea.length) {
      var keys = inputTextArea.split('\n');
      var newDataObj = keys.map(function (el) {
        return {
          name: inputProps,
          key: el
        };
      });
      setDataObj(__spreadArray(__spreadArray([], dataObj, true), newDataObj, true));
      setIsModalOpen(true);
    }
  }, [dataObj, inputProps, inputTextArea]);
  var handlerInput = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function (value) {
    setInputProps(value);
  }, []);
  var handlerInputTextArea = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function (value) {
    setInputTextArea(value);
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    if (inputProps.length && inputProps !== 'Выберите продукт' && inputTextArea.length) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [inputProps, inputTextArea]);

  var toggle = function toggle() {
    setIsModalOpen(!isModalOpen);

    if (isModalOpen) {
      setInputTextArea('');
      setInputProps('');
      setDataObj([]);
    }
  };

  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({
    className: (0,shared_lib_classNames_classNames__WEBPACK_IMPORTED_MODULE_2__.classNames)(_KeyGeneratorPage_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].KeyGeneratorPage, {}, [className])
  }, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.Card, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.CardHeader, {
        children: t('Выберите какие ключи будем генерировать')
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.CardBody, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.Form, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.FormGroup, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.Input, __assign({
              type: "select",
              onChange: function onChange(e) {
                return handlerInput(e.target.value);
              },
              value: inputProps
            }, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", {
                children: t('Выберите продукт')
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", {
                children: t('Windows 10 Professional')
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", {
                children: t('Office 2021 Pro Plus')
              })]
            }))
          })
        })
      })]
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.Card, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.CardHeader, {
        children: t('Вставьте ключи в окно! Кадый ключ с новой строки')
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.CardBody, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.Form, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.FormGroup, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.Input, {
              type: "textarea",
              onChange: function onChange(e) {
                return handlerInputTextArea(e.target.value);
              },
              value: inputTextArea,
              className: (0,shared_lib_classNames_classNames__WEBPACK_IMPORTED_MODULE_2__.classNames)(_KeyGeneratorPage_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].textArea)
            })
          })
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.CardFooter, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.Button, __assign({
          color: isActive ? 'primary' : 'secondary',
          disabled: !isActive,
          onClick: submit
        }, {
          children: t('Создать PDF')
        })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.Modal, __assign({
          isOpen: isModalOpen,
          toggle: toggle,
          fullscreen: true
        }, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.ModalHeader, __assign({
            toggle: toggle
          }, {
            children: t('Ваши ключи для скачивания')
          })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.ModalBody, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_4__.PDFViewer, __assign({
              style: {
                width: '100%',
                height: '100%'
              }
            }, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(widget_GeneratePDF__WEBPACK_IMPORTED_MODULE_3__.GeneratePDF, {
                data: dataObj,
                pageSize: {
                  width: 58,
                  height: 40
                }
              })
            }))
          })]
        }))]
      })]
    })]
  }));
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (KeyGeneratorPage);

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./src/widget/GeneratePDF/ui/GeneratePDF.tsx":
/*!***************************************************!*\
  !*** ./src/widget/GeneratePDF/ui/GeneratePDF.tsx ***!
  \***************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GeneratePDF": () => (/* binding */ GeneratePDF)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-pdf/renderer */ "./node_modules/@react-pdf/renderer/lib/react-pdf.browser.es.js");
/* harmony import */ var shared_assets_logo_microsoft_logo_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shared/assets/logo/microsoft_logo.png */ "./src/shared/assets/logo/microsoft_logo.png");
/* harmony import */ var shared_assets_logo_tg_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! shared/assets/logo/tg.png */ "./src/shared/assets/logo/tg.png");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/useTranslation.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};







_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__.Font.register({
  family: 'Arial',
  src: '/fonts/arial.ttf'
});
var GeneratePDF = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function (props) {
  var data = props.data,
      pageSize = props.pageSize;
  var t = (0,react_i18next__WEBPACK_IMPORTED_MODULE_5__.useTranslation)().t;
  var styles = _react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__.StyleSheet.create({
    page: {
      flexDirection: 'column',
      margin: 5
    },
    image: {
      width: 50 * 3.779,
      height: 30
    },
    section: {
      marginTop: 5
    },
    code: {
      border: 1,
      marginTop: 1,
      fontSize: 11
    },
    telegram: {
      fontSize: 11,
      fontFamily: 'Arial'
    },
    supportBlock: {
      flexDirection: 'row'
    },
    support: {
      fontSize: 11,
      fontFamily: 'Arial'
    },
    tgImage: {
      marginLeft: 35,
      width: 50,
      height: 50
    }
  });
  var generate = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function () {
    return data.map(function (el) {
      return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__.Page, __assign({
        size: {
          width: pageSize.width * 3.779,
          height: pageSize.height * 3.779
        },
        style: styles.page
      }, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__.View, __assign({
          style: styles.section
        }, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__.Image, {
            src: shared_assets_logo_microsoft_logo_png__WEBPACK_IMPORTED_MODULE_3__["default"],
            style: styles.image
          })
        })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__.View, __assign({
          style: styles.section
        }, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__.Text, {
            children: el.name
          })
        })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__.View, __assign({
          style: styles.code
        }, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__.Text, {
            children: el.key
          })
        })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__.View, __assign({
          style: styles.telegram
        }, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__.Text, {
            children: t('telegram: @like_win_2023_bot')
          })
        })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__.View, __assign({
          style: styles.supportBlock
        }, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__.View, __assign({
            style: styles.support
          }, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__.Text, {
              children: t('Вы найдете:')
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__.Text, {
              children: t('- Дистрибутивы')
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__.Text, {
              children: t('для скачиваения')
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__.Text, {
              children: t('- Поддержку продавца')
            })]
          })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__.Image, {
            src: shared_assets_logo_tg_png__WEBPACK_IMPORTED_MODULE_4__["default"],
            style: styles.tgImage
          })]
        }))]
      }), el.key);
    });
  }, [data, pageSize, styles, t]);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__.Document, {
    children: generate()
  });
});

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/KeyGeneratorPage/ui/KeyGeneratorPage.module.scss":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/KeyGeneratorPage/ui/KeyGeneratorPage.module.scss ***!
  \*****************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".src-pages-KeyGeneratorPage-ui-KeyGeneratorPage-module__textArea--IZ3l8 {\n  height: 300px;\n}", "",{"version":3,"sources":["webpack://./src/pages/KeyGeneratorPage/ui/KeyGeneratorPage.module.scss"],"names":[],"mappings":"AAAA;EACI,aAAA;AACJ","sourcesContent":[".textArea {\n    height: 300px;\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"textArea": "src-pages-KeyGeneratorPage-ui-KeyGeneratorPage-module__textArea--IZ3l8"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/shared/assets/logo/microsoft_logo.png":
/*!***************************************************!*\
  !*** ./src/shared/assets/logo/microsoft_logo.png ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "microsoft_logo.png");

/***/ }),

/***/ "./src/shared/assets/logo/tg.png":
/*!***************************************!*\
  !*** ./src/shared/assets/logo/tg.png ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "tg.png");

/***/ }),

/***/ "./src/pages/KeyGeneratorPage/ui/KeyGeneratorPage.module.scss":
/*!********************************************************************!*\
  !*** ./src/pages/KeyGeneratorPage/ui/KeyGeneratorPage.module.scss ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_KeyGeneratorPage_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../node_modules/sass-loader/dist/cjs.js!./KeyGeneratorPage.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/KeyGeneratorPage/ui/KeyGeneratorPage.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_KeyGeneratorPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_KeyGeneratorPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_KeyGeneratorPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_KeyGeneratorPage_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_KeyGeneratorPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../node_modules/sass-loader/dist/cjs.js!./KeyGeneratorPage.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/KeyGeneratorPage/ui/KeyGeneratorPage.module.scss",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_KeyGeneratorPage_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../node_modules/sass-loader/dist/cjs.js!./KeyGeneratorPage.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/KeyGeneratorPage/ui/KeyGeneratorPage.module.scss");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_KeyGeneratorPage_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_KeyGeneratorPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_KeyGeneratorPage_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_KeyGeneratorPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_KeyGeneratorPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_KeyGeneratorPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_KeyGeneratorPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_KeyGeneratorPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/widget/GeneratePDF/index.ts":
/*!*****************************************!*\
  !*** ./src/widget/GeneratePDF/index.ts ***!
  \*****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GeneratePDF": () => (/* reexport safe */ _ui_GeneratePDF__WEBPACK_IMPORTED_MODULE_0__.GeneratePDF)
/* harmony export */ });
/* harmony import */ var _ui_GeneratePDF__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui/GeneratePDF */ "./src/widget/GeneratePDF/ui/GeneratePDF.tsx");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");




const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "?9157":
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3BhZ2VzX0tleUdlbmVyYXRvclBhZ2VfdWlfS2V5R2VuZXJhdG9yUGFnZV90c3guMDUyZDdiN2JjOTkxNzgxOTBhNGYuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxRQUFRLEdBQUksU0FBSSxJQUFJLFNBQUksQ0FBQ0EsUUFBZCxJQUEyQixZQUFZO0VBQ2xEQSxRQUFRLEdBQUdDLE1BQU0sQ0FBQ0MsTUFBUCxJQUFpQixVQUFTQyxDQUFULEVBQVk7SUFDcEMsS0FBSyxJQUFJQyxDQUFKLEVBQU9DLENBQUMsR0FBRyxDQUFYLEVBQWNDLENBQUMsR0FBR0MsU0FBUyxDQUFDQyxNQUFqQyxFQUF5Q0gsQ0FBQyxHQUFHQyxDQUE3QyxFQUFnREQsQ0FBQyxFQUFqRCxFQUFxRDtNQUNqREQsQ0FBQyxHQUFHRyxTQUFTLENBQUNGLENBQUQsQ0FBYjs7TUFDQSxLQUFLLElBQUlJLENBQVQsSUFBY0wsQ0FBZDtRQUFpQixJQUFJSCxNQUFNLENBQUNTLFNBQVAsQ0FBaUJDLGNBQWpCLENBQWdDQyxJQUFoQyxDQUFxQ1IsQ0FBckMsRUFBd0NLLENBQXhDLENBQUosRUFDYk4sQ0FBQyxDQUFDTSxDQUFELENBQUQsR0FBT0wsQ0FBQyxDQUFDSyxDQUFELENBQVI7TUFESjtJQUVIOztJQUNELE9BQU9OLENBQVA7RUFDSCxDQVBEOztFQVFBLE9BQU9ILFFBQVEsQ0FBQ2EsS0FBVCxDQUFlLElBQWYsRUFBcUJOLFNBQXJCLENBQVA7QUFDSCxDQVZEOztBQVdBLElBQUlPLGFBQWEsR0FBSSxTQUFJLElBQUksU0FBSSxDQUFDQSxhQUFkLElBQWdDLFVBQVVDLEVBQVYsRUFBY0MsSUFBZCxFQUFvQkMsSUFBcEIsRUFBMEI7RUFDMUUsSUFBSUEsSUFBSSxJQUFJVixTQUFTLENBQUNDLE1BQVYsS0FBcUIsQ0FBakMsRUFBb0MsS0FBSyxJQUFJSCxDQUFDLEdBQUcsQ0FBUixFQUFXYSxDQUFDLEdBQUdGLElBQUksQ0FBQ1IsTUFBcEIs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OztBQUd4QixJQUFJLElBQVU7QUFDZCxPQUFPLDZLQUFjLElBQUksVUFBVTtBQUNuQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlCQUF5Qiw2S0FBYztBQUN2QyxvQ0FBb0MsMkpBQVcsR0FBRyw2S0FBYzs7QUFFaEUsSUFBSSxpQkFBaUI7QUFDckIsTUFBTSw0VUFBK0o7QUFDckssTUFBTTtBQUFBO0FBQ04sc0RBQXNELDJKQUFXLEdBQUcsNktBQWM7QUFDbEYsZ0JBQWdCLFVBQVU7O0FBRTFCO0FBQ0E7O0FBRUEsMENBQTBDLDJKQUFXLEdBQUcsNktBQWM7O0FBRXRFLHFCQUFxQixzS0FBTztBQUM1QixPQUFPO0FBQ1A7QUFDQTs7QUFFQSxFQUFFLFVBQVU7QUFDWjtBQUNBLEdBQUc7QUFDSDs7O0FBRzhLO0FBQzlLLE9BQU8saUVBQWUsc0tBQU8sSUFBSSw2S0FBYyxHQUFHLDZLQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkY5Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQS9DIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmxvZy8uL3NyYy9wYWdlcy9LZXlHZW5lcmF0b3JQYWdlL3VpL0tleUdlbmVyYXRvclBhZ2UudHN4Iiwid2VicGFjazovL2Jsb2cvLi9zcmMvd2lkZ2V0L0dlbmVyYXRlUERGL3VpL0dlbmVyYXRlUERGLnRzeCIsIndlYnBhY2s6Ly9ibG9nLy4vc3JjL3BhZ2VzL0tleUdlbmVyYXRvclBhZ2UvdWkvS2V5R2VuZXJhdG9yUGFnZS5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9ibG9nLy4vc3JjL3NoYXJlZC9hc3NldHMvbG9nby9taWNyb3NvZnRfbG9nby5wbmciLCJ3ZWJwYWNrOi8vYmxvZy8uL3NyYy9zaGFyZWQvYXNzZXRzL2xvZ28vdGcucG5nIiwid2VicGFjazovL2Jsb2cvLi9zcmMvcGFnZXMvS2V5R2VuZXJhdG9yUGFnZS91aS9LZXlHZW5lcmF0b3JQYWdlLm1vZHVsZS5zY3NzPzA2YTQiLCJ3ZWJwYWNrOi8vYmxvZy8uL3NyYy93aWRnZXQvR2VuZXJhdGVQREYvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vYmxvZy9pZ25vcmVkfC9Vc2Vycy9hbmRyZWV2ZGVuaXMv0YDQsNC30YDQsNCx0L7RgtC60LAvcHJpbnRfdG9fa2V5L2Jsb2cvbm9kZV9tb2R1bGVzL2NyeXB0by1qc3xjcnlwdG8iXSwic291cmNlc0NvbnRlbnQiOlsidmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbnZhciBfX3NwcmVhZEFycmF5ID0gKHRoaXMgJiYgdGhpcy5fX3NwcmVhZEFycmF5KSB8fCBmdW5jdGlvbiAodG8sIGZyb20sIHBhY2spIHtcbiAgICBpZiAocGFjayB8fCBhcmd1bWVudHMubGVuZ3RoID09PSAyKSBmb3IgKHZhciBpID0gMCwgbCA9IGZyb20ubGVuZ3RoLCBhcjsgaSA8IGw7IGkrKykge1xuICAgICAgICBpZiAoYXIgfHwgIShpIGluIGZyb20pKSB7XG4gICAgICAgICAgICBpZiAoIWFyKSBhciA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGZyb20sIDAsIGkpO1xuICAgICAgICAgICAgYXJbaV0gPSBmcm9tW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0by5jb25jYXQoYXIgfHwgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZnJvbSkpO1xufTtcbmltcG9ydCB7IGpzeCBhcyBfanN4LCBqc3hzIGFzIF9qc3hzIH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgeyBtZW1vLCB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjbGFzc05hbWVzIH0gZnJvbSAnc2hhcmVkL2xpYi9jbGFzc05hbWVzL2NsYXNzTmFtZXMnO1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0JztcbmltcG9ydCB7IEJ1dHRvbiwgQ2FyZCwgQ2FyZEJvZHksIENhcmRGb290ZXIsIENhcmRIZWFkZXIsIEZvcm0sIEZvcm1Hcm91cCwgSW5wdXQsIE1vZGFsLCBNb2RhbEJvZHksIE1vZGFsSGVhZGVyLCB9IGZyb20gJ3JlYWN0c3RyYXAnO1xuaW1wb3J0IHsgR2VuZXJhdGVQREYgfSBmcm9tICd3aWRnZXQvR2VuZXJhdGVQREYnO1xuaW1wb3J0IHsgUERGVmlld2VyIH0gZnJvbSAnQHJlYWN0LXBkZi9yZW5kZXJlcic7XG5pbXBvcnQgY2xzIGZyb20gJy4vS2V5R2VuZXJhdG9yUGFnZS5tb2R1bGUuc2Nzcyc7XG5leHBvcnQgdmFyIEtleUdlbmVyYXRvclBhZ2UgPSBtZW1vKGZ1bmN0aW9uIChwcm9wcykge1xuICAgIHZhciBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWU7XG4gICAgdmFyIHQgPSB1c2VUcmFuc2xhdGlvbigpLnQ7XG4gICAgdmFyIF9hID0gdXNlU3RhdGUoZmFsc2UpLCBpc01vZGFsT3BlbiA9IF9hWzBdLCBzZXRJc01vZGFsT3BlbiA9IF9hWzFdO1xuICAgIHZhciBfYiA9IHVzZVN0YXRlKCcnKSwgaW5wdXRQcm9wcyA9IF9iWzBdLCBzZXRJbnB1dFByb3BzID0gX2JbMV07XG4gICAgdmFyIF9jID0gdXNlU3RhdGUoJycpLCBpbnB1dFRleHRBcmVhID0gX2NbMF0sIHNldElucHV0VGV4dEFyZWEgPSBfY1sxXTtcbiAgICB2YXIgX2QgPSB1c2VTdGF0ZShbXSksIGRhdGFPYmogPSBfZFswXSwgc2V0RGF0YU9iaiA9IF9kWzFdO1xuICAgIHZhciBfZSA9IHVzZVN0YXRlKGZhbHNlKSwgaXNBY3RpdmUgPSBfZVswXSwgc2V0SXNBY3RpdmUgPSBfZVsxXTtcbiAgICB2YXIgc3VibWl0ID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoaW5wdXRQcm9wcy5sZW5ndGggJiYgaW5wdXRQcm9wcyAhPT0gJ9CS0YvQsdC10YDQuNGC0LUg0L/RgNC+0LTRg9C60YInICYmIGlucHV0VGV4dEFyZWEubGVuZ3RoKSB7XG4gICAgICAgICAgICB2YXIga2V5cyA9IGlucHV0VGV4dEFyZWEuc3BsaXQoJ1xcbicpO1xuICAgICAgICAgICAgdmFyIG5ld0RhdGFPYmogPSBrZXlzLm1hcChmdW5jdGlvbiAoZWwpIHsgcmV0dXJuICh7IG5hbWU6IGlucHV0UHJvcHMsIGtleTogZWwgfSk7IH0pO1xuICAgICAgICAgICAgc2V0RGF0YU9iaihfX3NwcmVhZEFycmF5KF9fc3ByZWFkQXJyYXkoW10sIGRhdGFPYmosIHRydWUpLCBuZXdEYXRhT2JqLCB0cnVlKSk7XG4gICAgICAgICAgICBzZXRJc01vZGFsT3Blbih0cnVlKTtcbiAgICAgICAgfVxuICAgIH0sIFtkYXRhT2JqLCBpbnB1dFByb3BzLCBpbnB1dFRleHRBcmVhXSk7XG4gICAgdmFyIGhhbmRsZXJJbnB1dCA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICBzZXRJbnB1dFByb3BzKHZhbHVlKTtcbiAgICB9LCBbXSk7XG4gICAgdmFyIGhhbmRsZXJJbnB1dFRleHRBcmVhID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHNldElucHV0VGV4dEFyZWEodmFsdWUpO1xuICAgIH0sIFtdKTtcbiAgICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoaW5wdXRQcm9wcy5sZW5ndGggJiYgaW5wdXRQcm9wcyAhPT0gJ9CS0YvQsdC10YDQuNGC0LUg0L/RgNC+0LTRg9C60YInICYmIGlucHV0VGV4dEFyZWEubGVuZ3RoKSB7XG4gICAgICAgICAgICBzZXRJc0FjdGl2ZSh0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHNldElzQWN0aXZlKGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH0sIFtpbnB1dFByb3BzLCBpbnB1dFRleHRBcmVhXSk7XG4gICAgdmFyIHRvZ2dsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc2V0SXNNb2RhbE9wZW4oIWlzTW9kYWxPcGVuKTtcbiAgICAgICAgaWYgKGlzTW9kYWxPcGVuKSB7XG4gICAgICAgICAgICBzZXRJbnB1dFRleHRBcmVhKCcnKTtcbiAgICAgICAgICAgIHNldElucHV0UHJvcHMoJycpO1xuICAgICAgICAgICAgc2V0RGF0YU9iaihbXSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiAoX2pzeHMoXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IGNsYXNzTmFtZXMoY2xzLktleUdlbmVyYXRvclBhZ2UsIHt9LCBbY2xhc3NOYW1lXSkgfSwgeyBjaGlsZHJlbjogW19qc3hzKENhcmQsIHsgY2hpbGRyZW46IFtfanN4KENhcmRIZWFkZXIsIHsgY2hpbGRyZW46IHQoJ9CS0YvQsdC10YDQuNGC0LUg0LrQsNC60LjQtSDQutC70Y7Rh9C4INCx0YPQtNC10Lwg0LPQtdC90LXRgNC40YDQvtCy0LDRgtGMJykgfSksIF9qc3goQ2FyZEJvZHksIHsgY2hpbGRyZW46IF9qc3goRm9ybSwgeyBjaGlsZHJlbjogX2pzeChGb3JtR3JvdXAsIHsgY2hpbGRyZW46IF9qc3hzKElucHV0LCBfX2Fzc2lnbih7IHR5cGU6IFwic2VsZWN0XCIsIG9uQ2hhbmdlOiBmdW5jdGlvbiAoZSkgeyByZXR1cm4gaGFuZGxlcklucHV0KGUudGFyZ2V0LnZhbHVlKTsgfSwgdmFsdWU6IGlucHV0UHJvcHMgfSwgeyBjaGlsZHJlbjogW19qc3goXCJvcHRpb25cIiwgeyBjaGlsZHJlbjogdCgn0JLRi9Cx0LXRgNC40YLQtSDQv9GA0L7QtNGD0LrRgicpIH0pLCBfanN4KFwib3B0aW9uXCIsIHsgY2hpbGRyZW46IHQoJ1dpbmRvd3MgMTAgUHJvZmVzc2lvbmFsJykgfSksIF9qc3goXCJvcHRpb25cIiwgeyBjaGlsZHJlbjogdCgnT2ZmaWNlIDIwMjEgUHJvIFBsdXMnKSB9KV0gfSkpIH0pIH0pIH0pXSB9KSwgX2pzeHMoQ2FyZCwgeyBjaGlsZHJlbjogW19qc3goQ2FyZEhlYWRlciwgeyBjaGlsZHJlbjogdCgn0JLRgdGC0LDQstGM0YLQtSDQutC70Y7Rh9C4INCyINC+0LrQvdC+ISDQmtCw0LTRi9C5INC60LvRjtGHINGBINC90L7QstC+0Lkg0YHRgtGA0L7QutC4JykgfSksIF9qc3goQ2FyZEJvZHksIHsgY2hpbGRyZW46IF9qc3goRm9ybSwgeyBjaGlsZHJlbjogX2pzeChGb3JtR3JvdXAsIHsgY2hpbGRyZW46IF9qc3goSW5wdXQsIHsgdHlwZTogXCJ0ZXh0YXJlYVwiLCBvbkNoYW5nZTogZnVuY3Rpb24gKGUpIHsgcmV0dXJuIGhhbmRsZXJJbnB1dFRleHRBcmVhKGUudGFyZ2V0LnZhbHVlKTsgfSwgdmFsdWU6IGlucHV0VGV4dEFyZWEsIGNsYXNzTmFtZTogY2xhc3NOYW1lcyhjbHMudGV4dEFyZWEpIH0pIH0pIH0pIH0pLCBfanN4cyhDYXJkRm9vdGVyLCB7IGNoaWxkcmVuOiBbX2pzeChCdXR0b24sIF9fYXNzaWduKHsgY29sb3I6IGlzQWN0aXZlID8gJ3ByaW1hcnknIDogJ3NlY29uZGFyeScsIGRpc2FibGVkOiAhaXNBY3RpdmUsIG9uQ2xpY2s6IHN1Ym1pdCB9LCB7IGNoaWxkcmVuOiB0KCfQodC+0LfQtNCw0YLRjCBQREYnKSB9KSksIF9qc3hzKE1vZGFsLCBfX2Fzc2lnbih7IGlzT3BlbjogaXNNb2RhbE9wZW4sIHRvZ2dsZTogdG9nZ2xlLCBmdWxsc2NyZWVuOiB0cnVlIH0sIHsgY2hpbGRyZW46IFtfanN4KE1vZGFsSGVhZGVyLCBfX2Fzc2lnbih7IHRvZ2dsZTogdG9nZ2xlIH0sIHsgY2hpbGRyZW46IHQoJ9CS0LDRiNC4INC60LvRjtGH0Lgg0LTQu9GPINGB0LrQsNGH0LjQstCw0L3QuNGPJykgfSkpLCBfanN4KE1vZGFsQm9keSwgeyBjaGlsZHJlbjogX2pzeChQREZWaWV3ZXIsIF9fYXNzaWduKHsgc3R5bGU6IHsgd2lkdGg6ICcxMDAlJywgaGVpZ2h0OiAnMTAwJScgfSB9LCB7IGNoaWxkcmVuOiBfanN4KEdlbmVyYXRlUERGLCB7IGRhdGE6IGRhdGFPYmosIHBhZ2VTaXplOiB7IHdpZHRoOiA1OCwgaGVpZ2h0OiA0MCB9IH0pIH0pKSB9KV0gfSkpXSB9KV0gfSldIH0pKSk7XG59KTtcbmV4cG9ydCBkZWZhdWx0IEtleUdlbmVyYXRvclBhZ2U7XG4iLCJ2YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xuaW1wb3J0IHsganN4IGFzIF9qc3gsIGpzeHMgYXMgX2pzeHMgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCB7IG1lbW8sIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgRG9jdW1lbnQsIEltYWdlLCBQYWdlLCBTdHlsZVNoZWV0LCBUZXh0LCBWaWV3LCBGb250LCB9IGZyb20gJ0ByZWFjdC1wZGYvcmVuZGVyZXInO1xuaW1wb3J0IE1pY3Jvc29mdEltYWdlIGZyb20gJ3NoYXJlZC9hc3NldHMvbG9nby9taWNyb3NvZnRfbG9nby5wbmcnO1xuaW1wb3J0IFRnSW1hZ2UgZnJvbSAnc2hhcmVkL2Fzc2V0cy9sb2dvL3RnLnBuZyc7XG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xuRm9udC5yZWdpc3Rlcih7XG4gICAgZmFtaWx5OiAnQXJpYWwnLFxuICAgIHNyYzogJy9mb250cy9hcmlhbC50dGYnLFxufSk7XG5leHBvcnQgdmFyIEdlbmVyYXRlUERGID0gbWVtbyhmdW5jdGlvbiAocHJvcHMpIHtcbiAgICB2YXIgZGF0YSA9IHByb3BzLmRhdGEsIHBhZ2VTaXplID0gcHJvcHMucGFnZVNpemU7XG4gICAgdmFyIHQgPSB1c2VUcmFuc2xhdGlvbigpLnQ7XG4gICAgdmFyIHN0eWxlcyA9IFN0eWxlU2hlZXQuY3JlYXRlKHtcbiAgICAgICAgcGFnZToge1xuICAgICAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICAgICAgICBtYXJnaW46IDUsXG4gICAgICAgIH0sXG4gICAgICAgIGltYWdlOiB7XG4gICAgICAgICAgICB3aWR0aDogNTAgKiAzLjc3OSxcbiAgICAgICAgICAgIGhlaWdodDogMzAsXG4gICAgICAgIH0sXG4gICAgICAgIHNlY3Rpb246IHtcbiAgICAgICAgICAgIG1hcmdpblRvcDogNSxcbiAgICAgICAgfSxcbiAgICAgICAgY29kZToge1xuICAgICAgICAgICAgYm9yZGVyOiAxLFxuICAgICAgICAgICAgbWFyZ2luVG9wOiAxLFxuICAgICAgICAgICAgZm9udFNpemU6IDExLFxuICAgICAgICB9LFxuICAgICAgICB0ZWxlZ3JhbToge1xuICAgICAgICAgICAgZm9udFNpemU6IDExLFxuICAgICAgICAgICAgZm9udEZhbWlseTogJ0FyaWFsJyxcbiAgICAgICAgfSxcbiAgICAgICAgc3VwcG9ydEJsb2NrOiB7XG4gICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgICAgICAgfSxcbiAgICAgICAgc3VwcG9ydDoge1xuICAgICAgICAgICAgZm9udFNpemU6IDExLFxuICAgICAgICAgICAgZm9udEZhbWlseTogJ0FyaWFsJyxcbiAgICAgICAgfSxcbiAgICAgICAgdGdJbWFnZToge1xuICAgICAgICAgICAgbWFyZ2luTGVmdDogMzUsXG4gICAgICAgICAgICB3aWR0aDogNTAsXG4gICAgICAgICAgICBoZWlnaHQ6IDUwLFxuICAgICAgICB9LFxuICAgIH0pO1xuICAgIHZhciBnZW5lcmF0ZSA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRhdGEubWFwKGZ1bmN0aW9uIChlbCkgeyByZXR1cm4gKF9qc3hzKFBhZ2UsIF9fYXNzaWduKHsgc2l6ZTogeyB3aWR0aDogcGFnZVNpemUud2lkdGggKiAzLjc3OSwgaGVpZ2h0OiBwYWdlU2l6ZS5oZWlnaHQgKiAzLjc3OSB9LCBzdHlsZTogc3R5bGVzLnBhZ2UgfSwgeyBjaGlsZHJlbjogW19qc3goVmlldywgX19hc3NpZ24oeyBzdHlsZTogc3R5bGVzLnNlY3Rpb24gfSwgeyBjaGlsZHJlbjogX2pzeChJbWFnZSwgeyBzcmM6IE1pY3Jvc29mdEltYWdlLCBzdHlsZTogc3R5bGVzLmltYWdlIH0pIH0pKSwgX2pzeChWaWV3LCBfX2Fzc2lnbih7IHN0eWxlOiBzdHlsZXMuc2VjdGlvbiB9LCB7IGNoaWxkcmVuOiBfanN4KFRleHQsIHsgY2hpbGRyZW46IGVsLm5hbWUgfSkgfSkpLCBfanN4KFZpZXcsIF9fYXNzaWduKHsgc3R5bGU6IHN0eWxlcy5jb2RlIH0sIHsgY2hpbGRyZW46IF9qc3goVGV4dCwgeyBjaGlsZHJlbjogZWwua2V5IH0pIH0pKSwgX2pzeChWaWV3LCBfX2Fzc2lnbih7IHN0eWxlOiBzdHlsZXMudGVsZWdyYW0gfSwgeyBjaGlsZHJlbjogX2pzeChUZXh0LCB7IGNoaWxkcmVuOiB0KCd0ZWxlZ3JhbTogQGxpa2Vfd2luXzIwMjNfYm90JykgfSkgfSkpLCBfanN4cyhWaWV3LCBfX2Fzc2lnbih7IHN0eWxlOiBzdHlsZXMuc3VwcG9ydEJsb2NrIH0sIHsgY2hpbGRyZW46IFtfanN4cyhWaWV3LCBfX2Fzc2lnbih7IHN0eWxlOiBzdHlsZXMuc3VwcG9ydCB9LCB7IGNoaWxkcmVuOiBbX2pzeChUZXh0LCB7IGNoaWxkcmVuOiB0KCfQktGLINC90LDQudC00LXRgtC1OicpIH0pLCBfanN4KFRleHQsIHsgY2hpbGRyZW46IHQoJy0g0JTQuNGB0YLRgNC40LHRg9GC0LjQstGLJykgfSksIF9qc3goVGV4dCwgeyBjaGlsZHJlbjogdCgn0LTQu9GPINGB0LrQsNGH0LjQstCw0LXQvdC40Y8nKSB9KSwgX2pzeChUZXh0LCB7IGNoaWxkcmVuOiB0KCctINCf0L7QtNC00LXRgNC20LrRgyDQv9GA0L7QtNCw0LLRhtCwJykgfSldIH0pKSwgX2pzeChJbWFnZSwgeyBzcmM6IFRnSW1hZ2UsIHN0eWxlOiBzdHlsZXMudGdJbWFnZSB9KV0gfSkpXSB9KSwgZWwua2V5KSk7IH0pOyB9LCBbZGF0YSwgcGFnZVNpemUsIHN0eWxlcywgdF0pO1xuICAgIHJldHVybiAoX2pzeChEb2N1bWVudCwgeyBjaGlsZHJlbjogZ2VuZXJhdGUoKSB9KSk7XG59KTtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLnNyYy1wYWdlcy1LZXlHZW5lcmF0b3JQYWdlLXVpLUtleUdlbmVyYXRvclBhZ2UtbW9kdWxlX190ZXh0QXJlYS0tSVozbDgge1xcbiAgaGVpZ2h0OiAzMDBweDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3BhZ2VzL0tleUdlbmVyYXRvclBhZ2UvdWkvS2V5R2VuZXJhdG9yUGFnZS5tb2R1bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNJLGFBQUE7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIudGV4dEFyZWEge1xcbiAgICBoZWlnaHQ6IDMwMHB4O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJ0ZXh0QXJlYVwiOiBcInNyYy1wYWdlcy1LZXlHZW5lcmF0b3JQYWdlLXVpLUtleUdlbmVyYXRvclBhZ2UtbW9kdWxlX190ZXh0QXJlYS0tSVozbDhcIlxufTtcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIm1pY3Jvc29mdF9sb2dvLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJ0Zy5wbmdcIjsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzRdLnVzZVsxXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9LZXlHZW5lcmF0b3JQYWdlLm1vZHVsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsIGIsIGlzTmFtZWRFeHBvcnQpIHtcbiAgaWYgKCFhICYmIGIgfHwgYSAmJiAhYikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBwO1xuXG4gIGZvciAocCBpbiBhKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKGFbcF0gIT09IGJbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBmb3IgKHAgaW4gYikge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmICghYVtwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcbiAgICB2YXIgaXNOYW1lZEV4cG9ydCA9ICFjb250ZW50LmxvY2FscztcbiAgICB2YXIgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1s0XS51c2VbMV0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vS2V5R2VuZXJhdG9yUGFnZS5tb2R1bGUuc2Nzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscywgaXNOYW1lZEV4cG9ydCkpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzRdLnVzZVsxXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9LZXlHZW5lcmF0b3JQYWdlLm1vZHVsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiZXhwb3J0IHsgR2VuZXJhdGVQREYgfSBmcm9tICcuL3VpL0dlbmVyYXRlUERGJztcbiIsIi8qIChpZ25vcmVkKSAqLyJdLCJuYW1lcyI6WyJfX2Fzc2lnbiIsIk9iamVjdCIsImFzc2lnbiIsInQiLCJzIiwiaSIsIm4iLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJwIiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiYXBwbHkiLCJfX3NwcmVhZEFycmF5IiwidG8iLCJmcm9tIiwicGFjayIsImwiLCJhciIsIkFycmF5Iiwic2xpY2UiLCJjb25jYXQiLCJqc3giLCJfanN4IiwianN4cyIsIl9qc3hzIiwibWVtbyIsInVzZUNhbGxiYWNrIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJjbGFzc05hbWVzIiwidXNlVHJhbnNsYXRpb24iLCJCdXR0b24iLCJDYXJkIiwiQ2FyZEJvZHkiLCJDYXJkRm9vdGVyIiwiQ2FyZEhlYWRlciIsIkZvcm0iLCJGb3JtR3JvdXAiLCJJbnB1dCIsIk1vZGFsIiwiTW9kYWxCb2R5IiwiTW9kYWxIZWFkZXIiLCJHZW5lcmF0ZVBERiIsIlBERlZpZXdlciIsImNscyIsIktleUdlbmVyYXRvclBhZ2UiLCJwcm9wcyIsImNsYXNzTmFtZSIsIl9hIiwiaXNNb2RhbE9wZW4iLCJzZXRJc01vZGFsT3BlbiIsIl9iIiwiaW5wdXRQcm9wcyIsInNldElucHV0UHJvcHMiLCJfYyIsImlucHV0VGV4dEFyZWEiLCJzZXRJbnB1dFRleHRBcmVhIiwiX2QiLCJkYXRhT2JqIiwic2V0RGF0YU9iaiIsIl9lIiwiaXNBY3RpdmUiLCJzZXRJc0FjdGl2ZSIsInN1Ym1pdCIsImtleXMiLCJzcGxpdCIsIm5ld0RhdGFPYmoiLCJtYXAiLCJlbCIsIm5hbWUiLCJrZXkiLCJoYW5kbGVySW5wdXQiLCJ2YWx1ZSIsImhhbmRsZXJJbnB1dFRleHRBcmVhIiwidG9nZ2xlIiwiY2hpbGRyZW4iLCJ0eXBlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwidGV4dEFyZWEiLCJjb2xvciIsImRpc2FibGVkIiwib25DbGljayIsImlzT3BlbiIsImZ1bGxzY3JlZW4iLCJzdHlsZSIsIndpZHRoIiwiaGVpZ2h0IiwiZGF0YSIsInBhZ2VTaXplIiwiRG9jdW1lbnQiLCJJbWFnZSIsIlBhZ2UiLCJTdHlsZVNoZWV0IiwiVGV4dCIsIlZpZXciLCJGb250IiwiTWljcm9zb2Z0SW1hZ2UiLCJUZ0ltYWdlIiwicmVnaXN0ZXIiLCJmYW1pbHkiLCJzcmMiLCJzdHlsZXMiLCJjcmVhdGUiLCJwYWdlIiwiZmxleERpcmVjdGlvbiIsIm1hcmdpbiIsImltYWdlIiwic2VjdGlvbiIsIm1hcmdpblRvcCIsImNvZGUiLCJib3JkZXIiLCJmb250U2l6ZSIsInRlbGVncmFtIiwiZm9udEZhbWlseSIsInN1cHBvcnRCbG9jayIsInN1cHBvcnQiLCJ0Z0ltYWdlIiwibWFyZ2luTGVmdCIsImdlbmVyYXRlIiwic2l6ZSJdLCJzb3VyY2VSb290IjoiIn0=