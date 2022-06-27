(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["vueTagsInput"] = factory();
	else
		root["vueTagsInput"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = "data:application/vnd.ms-fontobject;base64,aAUAAMQEAAABAAIAAAAAAAAAAAAAAAAAAAABAJABAAAAAExQAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAUdPJHwAAAAAAAAAAAAAAAAAAAAAAAA4AaQBjAG8AbQBvAG8AbgAAAA4AUgBlAGcAdQBsAGEAcgAAABYAVgBlAHIAcwBpAG8AbgAgADEALgAwAAAADgBpAGMAbwBtAG8AbwBuAAAAAAAAAQAAAAsAgAADADBPUy8yDxIFrAAAALwAAABgY21hcBdW0okAAAEcAAAAVGdhc3AAAAAQAAABcAAAAAhnbHlmpZ+jMAAAAXgAAAD8aGVhZA/FmAgAAAJ0AAAANmhoZWEHgAPIAAACrAAAACRobXR4EgABvgAAAtAAAAAcbG9jYQCSAOIAAALsAAAAEG1heHAACQAfAAAC/AAAACBuYW1lmUoJ+wAAAxwAAAGGcG9zdAADAAAAAASkAAAAIAADA4ABkAAFAAACmQLMAAAAjwKZAswAAAHrADMBCQAAAAAAAAAAAAAAAAAAAAEQAAAAAAAAAAAAAAAAAAAAAEAAAOkCA8D/wABAA8AAQAAAAAEAAAAAAAAAAAAAACAAAAAAAAMAAAADAAAAHAABAAMAAAAcAAMAAQAAABwABAA4AAAACgAIAAIAAgABACDpAv/9//8AAAAAACDpAP/9//8AAf/jFwQAAwABAAAAAAAAAAAAAAABAAH//wAPAAEAAAAAAAAAAAACAAA3OQEAAAAAAQAAAAAAAAAAAAIAADc5AQAAAAABAAAAAAAAAAAAAgAANzkBAAAAAAEAVgEBA74CgQAcAAABMhceARcWFwcmJy4BJyYjIgYHFyERFzY3PgE3NgIWSkNDbykpF2QQIB9VMzQ5P3AtnP6AmB0iIkspKAJVFxhSODlCIDMrKz4REislmgGAmhkVFBwICAABANYAgQMqAtUACwAAAQcXBycHJzcnNxc3Ayru7jzu7jzu7jzu7gKZ7u487u487u487u4AAQCSAIEDgAK9AAUAACUBFwEnNwGAAcQ8/gDuPPkBxDz+AO48AAAAAAEAAAAAAAAfydNRXw889QALBAAAAAAA1nUqGwAAAADWdSobAAAAAAO+AtUAAAAIAAIAAAAAAAAAAQAAA8D/wAAABAAAAAAAA74AAQAAAAAAAAAAAAAAAAAAAAcEAAAAAAAAAAAAAAACAAAABAAAVgQAANYEAACSAAAAAAAKABQAHgBQAGoAfgABAAAABwAdAAEAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAADgCuAAEAAAAAAAEABwAAAAEAAAAAAAIABwBgAAEAAAAAAAMABwA2AAEAAAAAAAQABwB1AAEAAAAAAAUACwAVAAEAAAAAAAYABwBLAAEAAAAAAAoAGgCKAAMAAQQJAAEADgAHAAMAAQQJAAIADgBnAAMAAQQJAAMADgA9AAMAAQQJAAQADgB8AAMAAQQJAAUAFgAgAAMAAQQJAAYADgBSAAMAAQQJAAoANACkaWNvbW9vbgBpAGMAbwBtAG8AbwBuVmVyc2lvbiAxLjAAVgBlAHIAcwBpAG8AbgAgADEALgAwaWNvbW9vbgBpAGMAbwBtAG8AbwBuaWNvbW9vbgBpAGMAbwBtAG8AbwBuUmVndWxhcgBSAGUAZwB1AGwAYQByaWNvbW9vbgBpAGMAbwBtAG8AbwBuRm9udCBnZW5lcmF0ZWQgYnkgSWNvTW9vbi4ARgBvAG4AdAAgAGcAZQBuAGUAcgBhAHQAZQBkACAAYgB5ACAASQBjAG8ATQBvAG8AbgAuAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=="

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(15)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),
/* 3 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_fast_deep_equal__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_fast_deep_equal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_fast_deep_equal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__create_tags__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tag_input_vue__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__vue_tags_input_props__ = __webpack_require__(20);
// The file contains the main application logic
// data, computed properties, methods, watchers and the component lifecycle







/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'VueTagsInput',
  components: { TagInput: __WEBPACK_IMPORTED_MODULE_2__tag_input_vue__["a" /* default */] },
  props: __WEBPACK_IMPORTED_MODULE_3__vue_tags_input_props__["a" /* default */],
  data() {
    return {
      show: false,
      newTag: null,
      tagsCopy: null,
      tagsEditStatus: null,
      deletionMark: null,
      deletionMarkTime: null,
      selectedItem: null,
      focused: null
    };
  },
  computed: {
    // Property which calculates if the autocomplete should be opened or not
    autocompleteOpen() {
      if (this.autocompleteAlwaysOpen) return true;
      return this.newTag !== null && this.newTag.length >= this.autocompleteMinLength && this.filteredAutocompleteItems.length > 0 && this.focused;
    },
    // Returns validated autocomplete items. Maybe duplicates are filtered out
    filteredAutocompleteItems() {
      const is = this.autocompleteItems.map(i => Object(__WEBPACK_IMPORTED_MODULE_1__create_tags__["b" /* createTag */])(i, this.tags, this.validation, false));
      if (!this.autocompleteFilterDuplicates) return is;
      return is.filter(i => !this.tagsCopy.find(t => t.text === i.text));
    }
  },
  methods: {
    createClasses: __WEBPACK_IMPORTED_MODULE_1__create_tags__["a" /* createClasses */],
    // Returns the index which item should be selected, based on the parameter 'method'
    showw(index) {
      this.show = index;
      console.log("In Show");
    },
    hidee() {
      this.show = null;
    },
    getSelectedIndex(method) {
      const items = this.filteredAutocompleteItems;
      const selectedItem = this.selectedItem;
      const lastItem = items.length - 1;
      if (items.length === 0) return;
      if (selectedItem === null) return 0;
      if (method === 'before' && selectedItem === 0) return lastItem;else if (method === 'after' && selectedItem === lastItem) return 0;else return method === 'after' ? selectedItem + 1 : selectedItem - 1;
    },
    selectDefaultItem() {
      if (this.addOnlyFromAutocomplete && this.filteredAutocompleteItems.length > 0) {
        this.selectedItem = 0;
      } else this.selectedItem = null;
    },
    selectItem(e, method) {
      e.preventDefault();
      this.selectedItem = this.getSelectedIndex(method);
    },
    selectTag(e, method) {
      e.preventDefault();
      //console.log(this.$refs.tagss.querySelectorAll('li').activeElement)
    },
    isSelected(index) {
      return this.selectedItem === index;
    },
    isMarked(index) {
      return this.deletionMark === index;
    },
    // Method which is called when the user presses backspace → remove the last tag
    invokeDelete() {
      // If we shouldn't delete tags on backslash or we have some characters in the input → stop
      if (!this.deleteOnBackslash || this.newTag.length > 0) return;
      const lastIndex = this.tagsCopy.length - 1;
      if (this.deletionMark === null) {
        this.deletionMarkTime = setTimeout(() => this.deletionMark = null, 1000);
        this.deletionMark = lastIndex;
      } else this.performDeleteTag(lastIndex);
    },
    addTagsFromPaste() {
      if (!this.addFromPaste) return;
      setTimeout(() => this.performAddTags(this.newTag), 10);
    },
    // Method to call if a tag should switch to it's edit mode
    performEditTag(index) {
      if (!this.allowEditTags) return;
      if (!this._events['before-editing-tag']) this.editTag(index);
      /**
       * @description Emits before a tag toggles to it's edit mode
       * @name before-editing-tag
       * @property {events} hook
       * @returns {Object} Contains the to editing tag: 'tag'.
         The tag's index: 'index'. And a function: 'editTag'.
         If the function is invoked, the tag toggles to it's edit mode.
       */
      this.$emit('before-editing-tag', {
        index,
        tag: this.tagsCopy[index],
        editTag: () => this.editTag(index)
      });
    },
    // Opens the edit mode for a tag and focuses it
    editTag(index) {
      if (!this.allowEditTags) return;
      this.toggleEditMode(index);
      this.focus(index);
    },
    // Toggles the edit mode for a tag
    toggleEditMode(index) {
      if (!this.allowEditTags || this.disabled) return;
      this.$set(this.tagsEditStatus, index, !this.tagsEditStatus[index]);
    },
    clone(items) {
      return JSON.parse(JSON.stringify(items));
    },
    // only called by the @input event from TagInput.
    // Creates a new tag model and applys it to this.tagsCopy[index]
    createChangedTag(index, event) {
      // If the text of a tag changes → we create a new one with a new validation.
      // we take the value from the event if possible, because on google android phones
      // this.tagsCopy[index].text is incorrect, when typing a space on the virtual keyboard.
      // yes, this sucks ...
      const tag = this.tagsCopy[index];
      tag.text = event ? event.target.value : this.tagsCopy[index].text;
      this.$set(this.tagsCopy, index, Object(__WEBPACK_IMPORTED_MODULE_1__create_tags__["b" /* createTag */])(tag, this.tagsCopy, this.validation));
    },
    // Focuses the input of a tag
    focus(index) {
      this.$nextTick(() => {
        const el = this.$refs.tagCenter[index].querySelector('input.tag-input');
        if (el) el.focus();
      });
    },
    quote(regex) {
      return regex.replace(/([()[{*+.$^\\|?])/g, '\\$1');
    },
    // Cancels the edit mode for a tag → resets the tag to it's original model!
    cancelEdit(index) {
      if (!this.tags[index]) return;
      this.tagsCopy[index] = this.clone(Object(__WEBPACK_IMPORTED_MODULE_1__create_tags__["b" /* createTag */])(this.tags[index], this.tags, this.validation));
      this.$set(this.tagsEditStatus, index, false);
    },
    hasForbiddingAddRule(tiClasses) {
      // Does the tag has a rule, defined by the user, which prohibits adding?
      return tiClasses.some(type => {
        const rule = this.validation.find(rule => type === rule.type);
        return rule ? rule.disableAdd : false;
      });
    },
    // Creates multiple tags out of a string, based on the prop separators
    createTagTexts(string) {
      const regex = new RegExp(this.separators.map(s => this.quote(s)).join('|'));
      return string.split(regex).map(text => ({ text }));
    },
    // Method to call to delete a tag
    performDeleteTag(index) {
      if (!this._events['before-deleting-tag']) this.deleteTag(index);
      /**
       * @description Emits before a tag is deleted
       * @name before-deleting-tag
       * @property {events} hook
       * @returns {Object} Contains the to editing tag: 'tag'. The tag's index: 'index'
         And a function: 'deleteTag'. If the function is invoked, the tag is deleted.
       */
      this.$emit('before-deleting-tag', {
        index,
        tag: this.tagsCopy[index],
        deleteTag: () => this.deleteTag(index)
      });
    },
    deleteTag(index) {
      if (this.disabled) return;
      this.deletionMark = null;

      // Clears the debounce for the deletion mark and removes the tag
      clearTimeout(this.deletionMarkTime);
      this.tagsCopy.splice(index, 1);

      // Special update for the parent if .sync is on
      if (this._events['update:tags']) this.$emit('update:tags', this.tagsCopy);

      /**
       * @description Emits if the tags array changes
       * @name tags-changed
       * @property {events}
       * @returns {Array} The modified tags array
       */
      this.$emit('tags-changed', this.tagsCopy);
    },
    // Decides wether the input keyCode is one, which is allowed to modify/add tags
    noTriggerKey(event, category) {
      const triggerKey = this[category].indexOf(event.keyCode) !== -1;
      if (triggerKey) event.preventDefault();
      return !triggerKey;
    },
    // Method to call to add a tag
    performAddTags(tag, event) {
      // If the input is disabled or the function was invoked by no trigger key → stop
      if (this.disabled || event && this.noTriggerKey(event, 'addOnKey')) return;

      // If the tag has no content → stop
      if (typeof tag === 'string' && tag.trim().length === 0) return;

      // Convert the string or object into a tags array
      let tags = [];
      if (typeof tag === 'object') tags = [tag];
      if (typeof tag === 'string') tags = this.createTagTexts(tag);

      // The basic checks are done → try to add all tags
      tags.forEach(tag => {
        tag = Object(__WEBPACK_IMPORTED_MODULE_1__create_tags__["b" /* createTag */])(tag, this.tags, this.validation, false);
        if (!this._events['before-adding-tag']) {
          this.addTag(tag);
        }
        /**
         * @description Emits before a tag is added
         * @name before-adding-tag
         * @property {events} hook
         * @returns {Object} Contains the to editing tag: 'tag'. And a function: 'addTag'.
           If the function is invoked, the tag is added.
         */
        this.$emit('before-adding-tag', {
          tag,
          addTag: () => this.addTag(tag)
        });
      });
    },
    addTag(tag) {
      // Check if we should only add items from autocomplete and if so,
      // does the tag exists as an option
      const options = this.filteredAutocompleteItems.map(i => i.text);
      if (this.addOnlyFromAutocomplete && options.indexOf(tag.text) === -1) return;

      // Maybe we should not add a tag because the maximum has reached already
      const maximumReached = this.maxTags && this.maxTags === this.tagsCopy.length;

      /**
       * @description Emits if the maximum, the tags array is allowed to hold, is reached.
         The maximum can be defined by the prop 'max-tags'.
       * @name max-tags-reached
       * @property {events}
       */
      if (maximumReached) return this.$emit('max-tags-reached');

      // If we shouldn't add duplicates and that is one → stop
      const dup = this.avoidAddingDuplicates && this.tagsCopy.map(t => t.text).indexOf(tag.text) !== -1;

      /**
       * @description Emits if the user tries to add a duplicate to the tag's array
         and adding duplicates is prevented by the prop 'avoid-adding-duplicates'
       * @name adding-duplicate
       * @property {events}
       */
      if (dup) return this.$emit('adding-duplicate', tag);

      // If the tag is invalid and we find a rule which avoids adding → stop
      if (!tag.valid && this.hasForbiddingAddRule(tag.tiClasses)) return;

      // Everything is okay → add the tag
      this.$nextTick(() => {
        this.$emit('input', '');
        this.tagsCopy.push(tag);

        // Special update for the parent if .sync is on
        if (this._events['update:tags']) this.$emit('update:tags', this.tagsCopy);

        this.$emit('tags-changed', this.tagsCopy);
      });
    },
    // Method to call to save a tag
    performSaveTag(index, event) {
      const tag = this.tagsCopy[index];

      // If the input is disabled or the function was invoked by no trigger key → stop
      if (this.disabled || event && this.noTriggerKey(event, 'addOnKey')) return;

      // If the tag has no content → stop
      if (tag.text.trim().length === 0) return;

      // The basic checks are done → try to save the tag
      if (!this._events['before-saving-tag']) this.saveTag(index, tag);
      /**
       * @description Emits before a tag is saved
       * @name before-saving-tag
       * @property {events} hook
       * @returns {Object} Contains the to editing tag: 'tag'.
         The tag's index: 'index'. And a function: 'saveTag'.
         If the function is invoked, the tag is saved.
       */
      this.$emit('before-saving-tag', {
        index,
        tag,
        saveTag: () => this.saveTag(index, tag)
      });
    },
    saveTag(index, tag) {
      // If we shouldn't save duplicates → stop
      const dup = this.avoidAddingDuplicates && this.tagsCopy.filter(t => t.text === tag.text).length > 1;

      /**
       * @description Emits if the user tries to save a duplicate in the tag's array
         and saving duplicates is prevented by the prop 'avoid-adding-duplicates'
       * @name saving-duplicate
       * @property {events}
       */
      if (dup) return this.$emit('saving-duplicate', tag);

      // If the tag is invalid and we find a rule which avoids saving → stop
      if (!tag.valid && this.hasForbiddingAddRule(tag.tiClasses)) return;

      // Everything is okay → save the tag
      this.$set(this.tagsCopy, index, tag);
      this.toggleEditMode(index);

      // Special update for the parent if .sync is on
      if (this._events['update:tags']) this.$emit('update:tags', this.tagsCopy);

      this.$emit('tags-changed', this.tagsCopy);
    },
    tagsEqual() {
      return !this.tagsCopy.some((t, i) => !__WEBPACK_IMPORTED_MODULE_0_fast_deep_equal___default()(t, this.tags[i]));
    },
    updateNewTag(ievent) {
      const value = ievent.target.value;
      this.newTag = value;
      this.$emit('input', value);
    },
    initTags() {
      // We always work with a copy of the "real" tags, to easier edit them
      this.tagsCopy = Object(__WEBPACK_IMPORTED_MODULE_1__create_tags__["c" /* createTags */])(this.tags, this.validation);

      // Let's create an array which defines whether a tag is in edit mode or not
      this.tagsEditStatus = this.clone(this.tags).map(() => false);

      // We check if the original and the copied tags are equal →
      // Update the parent if not and sync is on.
      if (this._events['update:tags'] && !this.tagsEqual()) {
        this.$emit('update:tags', this.tagsCopy);
      }
    },
    blurred(e) {
      // if the click occurs on tagsinput → don't hide
      if (this.$el.contains(e.target)) return;

      // If we should add tags before blurring → add tag
      if (this.addOnBlur && this.focused) this.performAddTags(this.newTag);

      // Hide autocomplete layer
      this.focused = false;
    }
  },
  watch: {
    value(newValue) {
      // If v-model change outside, update the newTag model
      if (!this.addOnlyFromAutocomplete) this.selectedItem = null;
      this.newTag = newValue;
    },
    tags: {
      handler() {
        // If the tags change outside, update the tagsCopy model
        this.initTags();
      },
      deep: true
    },
    autocompleteOpen: 'selectDefaultItem'
  },
  created() {
    this.newTag = this.value;
    this.initTags();
  },
  mounted() {
    // We select a default item based on props in the autocomplete
    this.selectDefaultItem();

    // We add a event listener to hide autocomplete on blur
    document.addEventListener('click', this.blurred);
  },
  destroyed() {
    document.removeEventListener('click', this.blurred);
  }
});

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return createTag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createTags; });
// helper functions

const validateUserRules = (text, validation) => {
  return validation.filter(val => {
    // if the rule is a string, we convert it to RegExp
    if (typeof val.rule === 'string') return !new RegExp(val.rule).test(text);

    if (val.rule instanceof RegExp) return !val.rule.test(text);

    // if we deal with a function, invoke it
    const isFunction = {}.toString.call(val.rule) === '[object Function]';
    if (isFunction) return val.rule(text);
  }).map(val => val.type);
};

const createClasses = (text, tags, validation = [], checkFromInside = true) => {
  // create css classes from the user validation array
  const classes = validateUserRules(text, validation);

  // check whether the tag is a duplicate or not
  const duplicate = checkFromInside ? tags.filter(t => t.text === text).length > 1 : tags.map(t => t.text).indexOf(text) !== -1;

  // if it's a duplicate, push the class duplicate to the array
  //if (duplicate) classes.push('duplicate');

  // if we find no classes, the tag is valid → push the class valid
  classes.length === 0 ? classes.push('valid') : classes.push('invalid');
  return classes;
};

/**
 * @description Create one tag out of a String or validate an existing one
 * @property {helpers}
 * @param {Object|String} tag A tag which should be validated | A String to create a tag
 * @param {Array} tagsarray The tags array
 * @param {Array} [validation=[]] The validation Array is optional (pass it if you use one)
 * @returns {Object} The created (validated) tag
 */
const createTag = (tag, ...rest) => {
  // if text is undefined, a string is passed. let's make a tag out of it
  if (tag.text === undefined) tag = { text: tag };

  // we better make a clone to not getting reference trouble
  const t = JSON.parse(JSON.stringify(tag));

  // create the validation classes
  t.tiClasses = createClasses(t.text, ...rest);
  return t;
};

/**
 * @description Create multiple tags out of Strings or validate existing tags
 * @property {helpers}
 * @param {Array} tagsarray An Array containing tags or strings. See example below.
 * @param {Array} [validation=[]] The validation Array is optional (pass it if you use one)
 * @returns {Array} An array containing (validated) tags
 * @example  &#47;* Example to call the function *&#47;
   const validatedTags = createTags(['tag1Text', 'tag2Text'], [{ type: 'length', rule: /[0-9]/ }])
 */
const createTags = (tags, ...rest) => tags.map(t => createTag(t, tags, ...rest));



/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_tag_input_vue__ = __webpack_require__(7);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_445a7648_hasScoped_true_transformToRequire_img_src_image_xlink_href_video_poster_source_src_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_tag_input_vue__ = __webpack_require__(19);
function injectStyle (ssrContext) {
  __webpack_require__(17)
}
var normalizeComponent = __webpack_require__(3)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-445a7648"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_tag_input_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_445a7648_hasScoped_true_transformToRequire_img_src_image_xlink_href_video_poster_source_src_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_tag_input_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'TagInput',
  props: ['scope']
});

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vue_tags_input_vue_tags_input_vue__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vue_tags_input_create_tags__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vue_tags_input_tag_input_vue__ = __webpack_require__(6);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "VueTagsInput", function() { return __WEBPACK_IMPORTED_MODULE_0__vue_tags_input_vue_tags_input_vue__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "createClasses", function() { return __WEBPACK_IMPORTED_MODULE_1__vue_tags_input_create_tags__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "createTag", function() { return __WEBPACK_IMPORTED_MODULE_1__vue_tags_input_create_tags__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "createTags", function() { return __WEBPACK_IMPORTED_MODULE_1__vue_tags_input_create_tags__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "TagInput", function() { return __WEBPACK_IMPORTED_MODULE_2__vue_tags_input_tag_input_vue__["a"]; });




// add autoinstall support if the component is attached to the windows object e.g. if added by CDN
__WEBPACK_IMPORTED_MODULE_0__vue_tags_input_vue_tags_input_vue__["a" /* default */].install = Vue => Vue.component(__WEBPACK_IMPORTED_MODULE_0__vue_tags_input_vue_tags_input_vue__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_0__vue_tags_input_vue_tags_input_vue__["a" /* default */]);
if (typeof window !== 'undefined' && window.Vue) window.Vue.use(__WEBPACK_IMPORTED_MODULE_0__vue_tags_input_vue_tags_input_vue__["a" /* default */]);



/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__vue_tags_input_vue_tags_input_vue__["a" /* default */]);

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_tags_input_js__ = __webpack_require__(4);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_471ee682_hasScoped_true_transformToRequire_img_src_image_xlink_href_video_poster_source_src_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_vue_tags_input_vue__ = __webpack_require__(21);
function injectStyle (ssrContext) {
  __webpack_require__(10)
}
var normalizeComponent = __webpack_require__(3)
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-471ee682"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_tags_input_js__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_471ee682_hasScoped_true_transformToRequire_img_src_image_xlink_href_video_poster_source_src_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_vue_tags_input_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(11);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("8a9f7b5a", content, true, {});

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(12);
exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, "@font-face{font-family:icomoon;src:url(" + escape(__webpack_require__(1)) + ");src:url(" + escape(__webpack_require__(1)) + "#iefix) format(\"embedded-opentype\"),url(" + escape(__webpack_require__(13)) + ") format(\"truetype\"),url(" + escape(__webpack_require__(14)) + ") format(\"woff\");font-weight:400;font-style:normal}[class*=\" icon-\"][data-v-471ee682],[class^=icon-][data-v-471ee682]{font-family:icomoon!important;speak:none;font-style:normal;font-weight:400;font-variant:normal;font-size:medium;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.icon-check[data-v-471ee682]:before{content:\"\\E902\"}.icon-close[data-v-471ee682]:before{content:\"\\E901\"}.icon-undo[data-v-471ee682]:before{content:\"\\E900\"}ul[data-v-471ee682]{margin:0;padding:0;list-style-type:none}[data-v-471ee682],[data-v-471ee682]:after,[data-v-471ee682]:before{-webkit-box-sizing:border-box;box-sizing:border-box}input[data-v-471ee682]:focus{outline:none}input[disabled][data-v-471ee682]{background-color:transparent}.vue-tags-input[data-v-471ee682]{max-width:450px;position:relative;background-color:#fff}.vue-tags-input.vue-tags-input.disabled[data-v-471ee682]{opacity:.5}.vue-tags-input.vue-tags-input.disabled [data-v-471ee682]{cursor:default}.input[data-v-471ee682]{border:1px solid #ccc;padding:4px}.input[data-v-471ee682],.tags[data-v-471ee682]{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}.tags[data-v-471ee682]{width:100%}.tag[data-v-471ee682]{background-color:#5c6bc0;color:#fff;border-radius:2px;display:-webkit-box;display:-ms-flexbox;display:flex;padding:3px 5px;margin:2px;font-size:1.5em}.tag[data-v-471ee682]:focus{outline:none}.tag .content[data-v-471ee682]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.tag .tag-center[data-v-471ee682]{position:relative}.tag span[data-v-471ee682]{line-height:inherit}.tag span.hidden[data-v-471ee682]{padding-left:14px;visibility:hidden;height:0;white-space:pre}.tag .actions[data-v-471ee682]{margin-left:2px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:1.15em}.tag .actions i[data-v-471ee682]{cursor:pointer}.tag[data-v-471ee682]:last-child{margin-right:4px}.tag.invalid[data-v-471ee682],.tag.tag.deletion-mark[data-v-471ee682]{background-color:#e54d42}.tag.valid[data-v-471ee682]{background-color:#04b404}.tag.primary-class[data-v-471ee682]{background-color:#5c6bc0}.new-tag-input-wrapper[data-v-471ee682]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex:1 0 auto;flex:1 0 auto;padding:3px 5px;margin:2px;font-size:1.5em}.new-tag-input-wrapper input[data-v-471ee682]{-webkit-box-flex:1;-ms-flex:1 0 auto;flex:1 0 auto;min-width:100px;border:none;padding:0;margin:0}.new-tag-input[data-v-471ee682]{line-height:inherit}.autocomplete[data-v-471ee682]{border:1px solid #ccc;border-top:none;position:absolute;width:100%;background-color:#fff;z-index:20}.item>div[data-v-471ee682]{cursor:pointer;padding:3px 6px;width:100%}.selected-item[data-v-471ee682]{background-color:#5c6bc0;color:#fff}", ""]);

// exports


/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = function escape(url) {
    if (typeof url !== 'string') {
        return url
    }
    // If url is already wrapped in quotes, remove them
    if (/^['"].*['"]$/.test(url)) {
        url = url.slice(1, -1);
    }
    // Should url be wrapped?
    // See https://drafts.csswg.org/css-values-3/#urls
    if (/["'() \t\n]/.test(url)) {
        return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"'
    }

    return url
}


/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = "data:font/ttf;base64,AAEAAAALAIAAAwAwT1MvMg8SBawAAAC8AAAAYGNtYXAXVtKJAAABHAAAAFRnYXNwAAAAEAAAAXAAAAAIZ2x5ZqWfozAAAAF4AAAA/GhlYWQPxZgIAAACdAAAADZoaGVhB4ADyAAAAqwAAAAkaG10eBIAAb4AAALQAAAAHGxvY2EAkgDiAAAC7AAAABBtYXhwAAkAHwAAAvwAAAAgbmFtZZlKCfsAAAMcAAABhnBvc3QAAwAAAAAEpAAAACAAAwOAAZAABQAAApkCzAAAAI8CmQLMAAAB6wAzAQkAAAAAAAAAAAAAAAAAAAABEAAAAAAAAAAAAAAAAAAAAABAAADpAgPA/8AAQAPAAEAAAAABAAAAAAAAAAAAAAAgAAAAAAADAAAAAwAAABwAAQADAAAAHAADAAEAAAAcAAQAOAAAAAoACAACAAIAAQAg6QL//f//AAAAAAAg6QD//f//AAH/4xcEAAMAAQAAAAAAAAAAAAAAAQAB//8ADwABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAQAAAAAAAAAAAAIAADc5AQAAAAABAFYBAQO+AoEAHAAAATIXHgEXFhcHJicuAScmIyIGBxchERc2Nz4BNzYCFkpDQ28pKRdkECAfVTM0OT9wLZz+gJgdIiJLKSgCVRcYUjg5QiAzKys+ERIrJZoBgJoZFRQcCAgAAQDWAIEDKgLVAAsAAAEHFwcnByc3JzcXNwMq7u487u487u487u4Cme7uPO7uPO7uPO7uAAEAkgCBA4ACvQAFAAAlARcBJzcBgAHEPP4A7jz5AcQ8/gDuPAAAAAABAAAAAAAAH8nTUV8PPPUACwQAAAAAANZ1KhsAAAAA1nUqGwAAAAADvgLVAAAACAACAAAAAAAAAAEAAAPA/8AAAAQAAAAAAAO+AAEAAAAAAAAAAAAAAAAAAAAHBAAAAAAAAAAAAAAAAgAAAAQAAFYEAADWBAAAkgAAAAAACgAUAB4AUABqAH4AAQAAAAcAHQABAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAA4ArgABAAAAAAABAAcAAAABAAAAAAACAAcAYAABAAAAAAADAAcANgABAAAAAAAEAAcAdQABAAAAAAAFAAsAFQABAAAAAAAGAAcASwABAAAAAAAKABoAigADAAEECQABAA4ABwADAAEECQACAA4AZwADAAEECQADAA4APQADAAEECQAEAA4AfAADAAEECQAFABYAIAADAAEECQAGAA4AUgADAAEECQAKADQApGljb21vb24AaQBjAG8AbQBvAG8AblZlcnNpb24gMS4wAFYAZQByAHMAaQBvAG4AIAAxAC4AMGljb21vb24AaQBjAG8AbQBvAG8Abmljb21vb24AaQBjAG8AbQBvAG8AblJlZ3VsYXIAUgBlAGcAdQBsAGEAcmljb21vb24AaQBjAG8AbQBvAG8AbkZvbnQgZ2VuZXJhdGVkIGJ5IEljb01vb24uAEYAbwBuAHQAIABnAGUAbgBlAHIAYQB0AGUAZAAgAGIAeQAgAEkAYwBvAE0AbwBvAG4ALgAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA="

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = "data:font/woff;base64,d09GRgABAAAAAAUQAAsAAAAABMQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABPUy8yAAABCAAAAGAAAABgDxIFrGNtYXAAAAFoAAAAVAAAAFQXVtKJZ2FzcAAAAbwAAAAIAAAACAAAABBnbHlmAAABxAAAAPwAAAD8pZ+jMGhlYWQAAALAAAAANgAAADYPxZgIaGhlYQAAAvgAAAAkAAAAJAeAA8hobXR4AAADHAAAABwAAAAcEgABvmxvY2EAAAM4AAAAEAAAABAAkgDibWF4cAAAA0gAAAAgAAAAIAAJAB9uYW1lAAADaAAAAYYAAAGGmUoJ+3Bvc3QAAATwAAAAIAAAACAAAwAAAAMDgAGQAAUAAAKZAswAAACPApkCzAAAAesAMwEJAAAAAAAAAAAAAAAAAAAAARAAAAAAAAAAAAAAAAAAAAAAQAAA6QIDwP/AAEADwABAAAAAAQAAAAAAAAAAAAAAIAAAAAAAAwAAAAMAAAAcAAEAAwAAABwAAwABAAAAHAAEADgAAAAKAAgAAgACAAEAIOkC//3//wAAAAAAIOkA//3//wAB/+MXBAADAAEAAAAAAAAAAAAAAAEAAf//AA8AAQAAAAAAAAAAAAIAADc5AQAAAAABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAQBWAQEDvgKBABwAAAEyFx4BFxYXByYnLgEnJiMiBgcXIREXNjc+ATc2AhZKQ0NvKSkXZBAgH1UzNDk/cC2c/oCYHSIiSykoAlUXGFI4OUIgMysrPhESKyWaAYCaGRUUHAgIAAEA1gCBAyoC1QALAAABBxcHJwcnNyc3FzcDKu7uPO7uPO7uPO7uApnu7jzu7jzu7jzu7gABAJIAgQOAAr0ABQAAJQEXASc3AYABxDz+AO48+QHEPP4A7jwAAAAAAQAAAAAAAB/J01FfDzz1AAsEAAAAAADWdSobAAAAANZ1KhsAAAAAA74C1QAAAAgAAgAAAAAAAAABAAADwP/AAAAEAAAAAAADvgABAAAAAAAAAAAAAAAAAAAABwQAAAAAAAAAAAAAAAIAAAAEAABWBAAA1gQAAJIAAAAAAAoAFAAeAFAAagB+AAEAAAAHAB0AAQAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAOAK4AAQAAAAAAAQAHAAAAAQAAAAAAAgAHAGAAAQAAAAAAAwAHADYAAQAAAAAABAAHAHUAAQAAAAAABQALABUAAQAAAAAABgAHAEsAAQAAAAAACgAaAIoAAwABBAkAAQAOAAcAAwABBAkAAgAOAGcAAwABBAkAAwAOAD0AAwABBAkABAAOAHwAAwABBAkABQAWACAAAwABBAkABgAOAFIAAwABBAkACgA0AKRpY29tb29uAGkAYwBvAG0AbwBvAG5WZXJzaW9uIDEuMABWAGUAcgBzAGkAbwBuACAAMQAuADBpY29tb29uAGkAYwBvAG0AbwBvAG5pY29tb29uAGkAYwBvAG0AbwBvAG5SZWd1bGFyAFIAZQBnAHUAbABhAHJpY29tb29uAGkAYwBvAG0AbwBvAG5Gb250IGdlbmVyYXRlZCBieSBJY29Nb29uLgBGAG8AbgB0ACAAZwBlAG4AZQByAGEAdABlAGQAIABiAHkAIABJAGMAbwBNAG8AbwBuAC4AAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"

/***/ }),
/* 15 */
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isArray = Array.isArray;
var keyList = Object.keys;
var hasProp = Object.prototype.hasOwnProperty;

module.exports = function equal(a, b) {
  if (a === b) return true;

  if (a && b && typeof a == 'object' && typeof b == 'object') {
    var arrA = isArray(a)
      , arrB = isArray(b)
      , i
      , length
      , key;

    if (arrA && arrB) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (!equal(a[i], b[i])) return false;
      return true;
    }

    if (arrA != arrB) return false;

    var dateA = a instanceof Date
      , dateB = b instanceof Date;
    if (dateA != dateB) return false;
    if (dateA && dateB) return a.getTime() == b.getTime();

    var regexpA = a instanceof RegExp
      , regexpB = b instanceof RegExp;
    if (regexpA != regexpB) return false;
    if (regexpA && regexpB) return a.toString() == b.toString();

    var keys = keyList(a);
    length = keys.length;

    if (length !== keyList(b).length)
      return false;

    for (i = length; i-- !== 0;)
      if (!hasProp.call(b, keys[i])) return false;

    for (i = length; i-- !== 0;) {
      key = keys[i];
      if (!equal(a[key], b[key])) return false;
    }

    return true;
  }

  return a!==a && b!==b;
};


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(18);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("daeaa3ee", content, true, {});

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, ".tag-input[data-v-445a7648]{background-color:transparent;color:inherit;border:none;padding:0;margin:0;display:-webkit-box;display:-ms-flexbox;display:flex;top:0;position:absolute;width:100%;line-height:inherit}.tag-input[data-v-445a7648]::-ms-clear{display:none}input[data-v-445a7648]:focus{outline:none}input[disabled][data-v-445a7648]{background-color:transparent}", ""]);

// exports


/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.scope.edit)?_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.scope.tag.text),expression:"scope.tag.text"}],staticClass:"tag-input",attrs:{"type":"text","maxlength":_vm.scope.maxlength,"size":"1"},domProps:{"value":(_vm.scope.tag.text)},on:{"input":[function($event){if($event.target.composing){ return; }_vm.$set(_vm.scope.tag, "text", $event.target.value)},function($event){return _vm.scope.validateTag(_vm.scope.index, $event)}],"blur":function($event){return _vm.scope.cancelEdit(_vm.scope.index)},"keydown":function($event){return _vm.scope.performSaveTag(_vm.scope.index, $event)}}}):_vm._e()}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// The file contains all props and validators which are provided by the component

const propValidatorTag = value => {
  return !value.some(t => {
    const invalidText = !t.text;
    if (invalidText) console.warn('Missing property "text"', t);

    let invalidClasses = false;
    if (t.classes) invalidClasses = typeof t.classes !== 'string';
    if (invalidClasses) console.warn('Property "classes" must be type of string', t);

    return invalidText || invalidClasses;
  });
};

const propValidatorNumeric = value => {
  return !value.some(v => {
    const numeric = typeof v === 'number' && isFinite(v) && Math.floor(v) === v;
    if (!numeric) console.warn('Only numerics are allowed for this prop. Found:', v);
    return !numeric;
  });
};

/* harmony default export */ __webpack_exports__["a"] = ({
  /**
   * @description Property to bind a model to the input.
     If the user changes the input value, the model updates, too.
     If the user presses enter with an valid input,
     a new tag is created with the value of this model.
     After creating the new tag, the model is cleared.
   * @property {props}
   * @required
   * @type {String}
   * @model
   * @default ''
   */
  value: {
    type: String,
    default: '',
    required: true
  },
  /**
   * @description Pass an array containing objects like in the example below.
     The properties 'style' and 'class' are optional. Of course it is possible to add custom
     properties to a tag object. vue-tags-input won't change the key and value.
   * @property {props}
   * @type {Array}
   * @sync
   * @default []
   * @example
    {
    &emsp;text: 'My tag value', &#47;* The visible text on display *&#47;
    &emsp;style: 'background-color: #ccc', &#47;* Adding inline styles is possible *&#47;
    &emsp;classes: 'custom-class another', &#47;* The value will be added as css classes *&#47;
    }
   */
  tags: {
    type: Array,
    default: () => [],
    validator: propValidatorTag
  },
  /**
   * @description Expects an array containing objects inside. The objects
    can have the same properties as a tag object.
   * @property {props}
   * @type {Array}
   * @default []
   */
  autocompleteItems: {
    type: Array,
    default: () => []
  },
  /**
   * @description Defines whether a tag is editable after creation or not.
   * @property {props}
   * @type {Boolean}
   * @default false
   */
  allowEditTags: {
    type: Boolean,
    default: false
  },
  /**
   * @description Defines if duplicate autocomplete items are filtered out from the view or not.
   * @property {props}
   * @type {Boolean}
   * @default true
   */
  autocompleteFilterDuplicates: {
    default: false,
    type: Boolean
  },
  /**
   * @description If it's true, the user can add tags only via the autocomplete layer.
   * @property {props}
   * @type {Boolean}
   * @default false
   */
  addOnlyFromAutocomplete: {
    type: Boolean,
    default: false
  },
  /**
   * @description The minimum character length which is required
     until the autocomplete layer is shown.
   * @property {props}
   * @type {Number}
   * @default 1
   */
  autocompleteMinLength: {
    type: Number,
    default: 1
  },
  /**
   * @description If it's true, the autocomplete layer is always shown, regardless if
     an input or an autocomplete items exists.
   * @property {props}
   * @type {Boolean}
   * @default false
   */
  autocompleteAlwaysOpen: {
    type: Boolean,
    default: false
  },
  /**
   * @description Property to disable vue-tags-input.
   * @property {props}
   * @type {Boolean}
   * @default false
   */
  disabled: {
    type: Boolean,
    default: false
  },
  /**
   * @description The placeholder text which is shown in the input, when it's empty.
   * @property {props}
   * @type {String}
   * @default Add Tag
   */
  placeholder: {
    type: String,
    default: 'Add Tag'
  },
  /**
   * @description Custom trigger key codes can be registrated. If the user presses one of these,
     a tag will be generated out of the input value.
   * @property {props}
   * @type {Array}
   * @default [13]
   */
  addOnKey: {
    type: Array,
    default: () => [13],
    validator: propValidatorNumeric
  },
  /**
   * @description Custom trigger key codes can be registrated. If the user edits a tag
     and presses one of these, the edited tag will be saved.
   * @property {props}
   * @type {Array}
   * @default [13]
   */
  saveOnKey: {
    type: Array,
    default: () => [13],
    validator: propValidatorNumeric
  },
  /**
   * @description The maximum amount the tags array is allowed to hold.
   * @property {props}
   * @type {Number}
   */
  maxTags: {
    type: Number
  },
  /**
   * @description The maximum amount of characters the input is allowed to hold.
   * @property {props}
   * @type {Number}
   */
  maxlength: {
    type: Number
  },
  /**
   * @description Pass an array containing objects like in the example below.
     The property 'type' will be added as css classes, if the property 'rule' matches the text
     of a tag, an autocomplete item or the input. The property 'rule' can be type of
     RegExp or function. If the property 'disableAdd' is 'true', the item can't be added
     to the tags array, if the appropriated rule matches.
   * @property {props}
   * @type {Array}
   * @default []
   * @example
    {
    &ensp;type: 'class', &#47;* css class *&#47;
    &ensp;rule: /^([^0-9]*)$/, &#47;* RegExp *&#47;
    }, {
    &ensp;type: 'no-braces', &#47;* css class *&#47;
    &ensp;rule(text) { &#47;* function with text as param *&#47;
    &ensp;&ensp;return text.indexOf('{') !== -1 || text.indexOf('}') !== -1;
    &ensp;},
    &ensp;disableAdd: true, &#47;* if the rule matches, the item cannot be added *&#47;,
    },
   */
  validation: {
    type: Array,
    default: () => [],
    validator(value) {
      return !value.some(v => {
        const missingRule = !v.rule;
        if (missingRule) console.warn('Property "rule" is missing', v);

        const validRule = v.rule && (typeof v.rule === 'string' || v.rule instanceof RegExp || {}.toString.call(v.rule) === '[object Function]');

        if (!validRule) {
          console.warn('A rule must be type of string, RegExp or function. Found:', JSON.stringify(v.rule));
        }

        const missingType = !v.type;
        if (missingType) console.warn('Property "type" is missing', v);

        const invalidType = v.type && typeof v.type !== 'string';
        if (invalidType) console.warn('Property "type" must be type of string. Found:', v);

        return !validRule || missingRule || missingType || invalidType;
      });
    }
  },
  /**
   * @description Defines the characters which splits a text into different pieces,
     to generate tags out of this pieces.
   * @property {props}
   * @type {Array}
   * @default [';']
   * @example
     separators: [';', ',']
     input: some; user input, has random; commas, an,d semicolons
     will split into: some - user input - has random - commas - an - d semicolons
   */
  separators: {
    type: Array,
    default: () => [';'],
    validator(value) {
      return !value.some(s => {
        const invalidType = typeof s !== 'string';
        if (invalidType) console.warn('Separators must be type of string. Found:', s);
        return invalidType;
      });
    }
  },
  /**
   * @description If it's true, the user can't add or save a tag,
     if another exists, with the same text value.
   * @property {props}
   * @type {Boolean}
   * @default true
   */
  avoidAddingDuplicates: {
    type: Boolean,
    default: false
  },
  /**
   * @description If the input holds a value and loses the focus,
     a tag will be generated out of this value, if possible.
   * @property {props}
   * @type {Boolean}
   * @default true
   */
  addOnBlur: {
    type: Boolean,
    default: true
  },
  /**
   * @description If it's true, the user can paste into the input element and
     vue-tags-input will create tags out of the incoming text.
   * @property {props}
   * @type {Boolean}
   * @default true
   */
  addFromPaste: {
    type: Boolean,
    default: true
  },
  /**
   * @description Defines if it's possible to delete tags by pressing backslash.
     If so and the user wants to delete a tag,
     the tag gets the css class 'deletion-mark' for 1 second.
     If the user presses backslash again in that time period,
     the tag is removed from the tags array and the view.
   * @property {props}
   * @type {Boolean}
   * @default true
   */
  deleteOnBackslash: {
    default: true,
    type: Boolean
  }
});

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vue-tags-input",class:{ disabled: _vm.disabled }},[_c('div',{staticClass:"input"},[(_vm.tagsCopy)?_c('ul',{staticClass:"tags"},[_vm._l((_vm.tagsCopy),function(tag,index){return _c('li',{key:index,staticClass:"tag",class:[tag.tiClasses, tag.classes, { 'deletion-mark': _vm.isMarked(index) }],style:(tag.style),attrs:{"tabindex":index + 1},on:{"mouseover":function($event){return _vm.showw(index)},"mouseout":function($event){return _vm.hidee()},"click":function($event){return _vm.$emit('tag-clicked', { tag: tag, index: index })}}},[_c('div',{staticClass:"content"},[(_vm.$scopedSlots.tagLeft)?_c('div',{staticClass:"tag-left"},[_vm._t("tagLeft",null,{"tag":tag,"index":index,"edit":_vm.tagsEditStatus[index],"performSaveEdit":_vm.performSaveTag,"performDelete":_vm.performDeleteTag,"performCancelEdit":_vm.cancelEdit,"performOpenEdit":_vm.performEditTag,"deletionMark":_vm.isMarked(index)})],2):_vm._e(),_vm._v(" "),_c('div',{ref:"tagCenter",refInFor:true,staticClass:"tag-center"},[(!_vm.$scopedSlots.tagCenter)?_c('span',{class:{ hidden: _vm.tagsEditStatus[index] },on:{"click":function($event){return _vm.performEditTag(index)}}},[_vm._v(_vm._s(tag.text))]):_vm._e(),_vm._v(" "),(!_vm.$scopedSlots.tagCenter)?_c('tag-input',{attrs:{"scope":{
                edit: _vm.tagsEditStatus[index],
                maxlength: _vm.maxlength,
                tag: tag,
                index: index,
                validateTag: _vm.createChangedTag,
                cancelEdit: _vm.cancelEdit,
                performSaveTag: _vm.performSaveTag,
              }}}):_vm._e(),_vm._v(" "),_vm._t("tagCenter",null,{"tag":tag,"index":index,"maxlength":_vm.maxlength,"edit":_vm.tagsEditStatus[index],"performSaveEdit":_vm.performSaveTag,"performDelete":_vm.performDeleteTag,"performCancelEdit":_vm.cancelEdit,"validateTag":_vm.createChangedTag,"performSaveTag":_vm.performSaveTag,"performOpenEdit":_vm.performEditTag,"deletionMark":_vm.isMarked(index)})],2),_vm._v(" "),(_vm.$scopedSlots.tagRight)?_c('div',{staticClass:"tag-right"},[_vm._t("tagRight",null,{"tag":tag,"index":index,"edit":_vm.tagsEditStatus[index],"performSaveEdit":_vm.performSaveTag,"performDelete":_vm.performDeleteTag,"performCancelEdit":_vm.cancelEdit,"performOpenEdit":_vm.performEditTag,"deletionMark":_vm.isMarked(index)})],2):_vm._e()]),_vm._v(" "),(_vm.show === index)?_c('div',{staticClass:"actions"},[(!_vm.$scopedSlots.tagActions)?_c('i',{directives:[{name:"show",rawName:"v-show",value:(_vm.tagsEditStatus[index]),expression:"tagsEditStatus[index]"}],staticClass:"icon-undo",on:{"click":function($event){return _vm.cancelEdit(index)}}}):_vm._e(),_vm._v(" "),(!_vm.$scopedSlots.tagActions)?_c('i',{directives:[{name:"show",rawName:"v-show",value:(!_vm.tagsEditStatus[index]),expression:"!tagsEditStatus[index]"}],staticClass:"icon-close",on:{"click":function($event){return _vm.performDeleteTag(index)}}}):_vm._e(),_vm._v(" "),(_vm.$scopedSlots.tagActions)?_vm._t("tagActions",null,{"tag":tag,"index":index,"edit":_vm.tagsEditStatus[index],"performSaveEdit":_vm.performSaveTag,"performDelete":_vm.performDeleteTag,"performCancelEdit":_vm.cancelEdit,"performOpenEdit":_vm.performEditTag,"deletionMark":_vm.isMarked(index)}):_vm._e()],2):_vm._e()])}),_vm._v(" "),_c('li',{staticClass:"new-tag-input-wrapper"},[_c('input',_vm._b({ref:"newTagInput",staticClass:"new-tag-input",class:[_vm.createClasses(_vm.newTag, _vm.tags, _vm.validation, false)],attrs:{"type":"text","size":"1","placeholder":_vm.placeholder,"maxlength":_vm.maxlength,"disabled":_vm.disabled},domProps:{"value":_vm.newTag},on:{"paste":_vm.addTagsFromPaste,"keydown":[function($event){return _vm.performAddTags(
            _vm.filteredAutocompleteItems[_vm.selectedItem] || _vm.newTag, $event
          )},function($event){if(!$event.type.indexOf('key')&&$event.keyCode!==8){ return null; }return _vm.invokeDelete.apply(null, arguments)},function($event){if(!$event.type.indexOf('key')&&$event.keyCode!==38){ return null; }return _vm.selectItem($event, 'before')},function($event){if(!$event.type.indexOf('key')&&$event.keyCode!==40){ return null; }return _vm.selectItem($event, 'after')}],"input":_vm.updateNewTag,"blur":function($event){return _vm.$emit('blur', $event)},"focus":function($event){_vm.focused = true; _vm.$emit('focus', $event)},"click":function($event){_vm.addOnlyFromAutocomplete ? false: _vm.selectedItem = null}}},'input',_vm.$attrs,false))])],2):_vm._e()]),_vm._v(" "),_vm._t("between-elements"),_vm._v(" "),(_vm.autocompleteOpen)?_c('div',{staticClass:"autocomplete",on:{"mouseout":function($event){_vm.selectedItem = null}}},[_c('ul',_vm._l((_vm.filteredAutocompleteItems),function(item,index){return _c('li',{key:index,staticClass:"item",class:[
          item.tiClasses,
          item.classes,
          { 'selected-item': _vm.isSelected(index) }
        ],style:(item.style),on:{"mouseover":function($event){_vm.disabled ? false : _vm.selectedItem = index}}},[(!_vm.$scopedSlots.autocompleteItem)?_c('div',{on:{"click":function($event){return _vm.performAddTags(item)}}},[_vm._v(_vm._s(item.text)+"\n        ")]):_vm._t("autocompleteItem",null,{"item":item,"index":index,"performAdd":_vm.performAddTags,"selected":_vm.isSelected(index)})],2)}),0)]):_vm._e()],2)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })
/******/ ]);
});
//# sourceMappingURL=vue-tags-input.js.map