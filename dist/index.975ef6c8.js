// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"7nZVA":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "890e741a975ef6c8";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"8lqZg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _controller = require("./controller");
var _controllerDefault = parcelHelpers.interopDefault(_controller);
var _view = require("./view");
var _viewDefault = parcelHelpers.interopDefault(_view);
function init() {
    _viewDefault.default.addHandlerRender(_controllerDefault.default.onFormSubmit);
}
init();

},{"./controller":"gCE4p","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./view":"ai2uB"}],"gCE4p":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _model = require("./model");
var _modelDefault = parcelHelpers.interopDefault(_model);
var _view = require("./view");
var _viewDefault = parcelHelpers.interopDefault(_view);
class Controller {
    constructor(Model, View){
        this.model = Model;
        this.view = View;
    }
    /** Subscribed to the AddHandlerRender(), this prevents page reload and calls in the Maths.
	 * @param ev {object} - the Event
	 */ onFormSubmit(ev) {
        ev.preventDefault();
        // The Maths by Model
        _modelDefault.default.calculate(ev.target, ev.target.id);
        // The Output by View
        _viewDefault.default.handleOutput(ev.target.id, _modelDefault.default.state);
    }
}
exports.default = new Controller(_modelDefault.default, _viewDefault.default); /** MVC Calculate
 * 1. View Receives a Form
 * 2. Controller Passes View info to Model
 * 3. Model Does some Math
 *   - Updates State
 * 4. Controller tells View to update Output
 */ 

},{"./model":"dEDha","./view":"ai2uB","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dEDha":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _form = require("./modules/Form");
class Model {
    state = {
        person: {
            gender: '',
            weight: 0,
            heightFt: 0,
            heightIn: 0,
            age: 0
        },
        bmr: 0,
        calorieGoal: 0,
        modifiers: {
            activity: 0,
            deficit: 0,
            protein: 0
        },
        tdee: 0,
        macros: {
            fats: {
                percentage: 30,
                grams: 0,
                calories: 0
            },
            proteins: {
                percentage: 30,
                grams: 0,
                calories: 0
            },
            carbs: {
                percentage: 30,
                grams: 0,
                calories: 0
            }
        }
    };
    calculate(form, id) {
        switch(id){
            case 'bmr-calculator':
                this.#calcBMR(form);
                break;
            case 'modifiers':
                try {
                    this.#calcTDEE(form);
                } catch (err) {
                    console.error(err);
                }
                break;
            case 'protein-calculator':
                try {
                    this.#calcMacros(form);
                } catch (err1) {
                    console.error(err1);
                }
                break;
        }
    }
     #calcHeight(ft, inch) {
        const height = Number(ft.value) * 12 + Number(inch.value);
        return height;
    }
     #getOptionsValue(el) {
        const value = +el.options[el.selectedIndex].value;
        return value;
    }
     #calcBMR(form) {
        // Get Form Values
        const weightVal = form.querySelector('#weight'), heightFtVal = form.querySelector('#height--ft'), heightInVal = form.querySelector('#height--in'), ageVal = form.querySelector('#age'), genderOptions = form.querySelectorAll('input[type="radio"]'), height = this.#calcHeight(heightFtVal, heightInVal);
        // Set State to Form Values
        this.state.person = {
            weight: Number(weightVal.value),
            age: Number(ageVal.value),
            heightFt: Number(heightFtVal.value),
            heightIn: Number(heightInVal.value)
        };
        genderOptions.forEach((el1, i)=>{
            if (el1.checked) this.state.person.gender = genderOptions[i].value;
        });
        // Destructure State
        const { person: { weight , age , gender  } ,  } = this.state;
        let bmr = 0;
        // Calc BMR
        bmr = gender === 'Female' ? 655 + 4.35 * weight + 4.7 * height - 4.7 * age : 66 + 6.23 * weight + 12.7 * height - 6.8 * age;
        this.state.bmr = Math.round(bmr);
    }
     #calcTDEE(form1) {
        // Get Values
        const activityVal = form1.querySelector('#tdee'), deficitVal = form1.querySelector('#deficit');
        // Destructure State
        const { bmr  } = this.state;
        let { calorieGoal , tdee , modifiers: { activity , deficit  } ,  } = this.state;
        if (bmr === 0) throw 'Calculate BMR First!!';
        activity = this.#getOptionsValue(activityVal);
        deficit = this.#getOptionsValue(deficitVal);
        // The Math
        tdee = Math.round(bmr * activity);
        if (deficit < 1) calorieGoal = Math.round(tdee - tdee * deficit);
        if (deficit === 1) calorieGoal = tdee;
        if (deficit > 1) calorieGoal = Math.round(tdee * deficit);
        // Update State
        this.state.modifiers = {
            activity: activity,
            deficit: deficit
        };
        this.state.tdee = tdee;
        this.state.calorieGoal = calorieGoal;
    }
     #calcMacros(form2) {
        if (this.state.tdee === 0) throw 'Do the rest of the form first!';
        // Get Form
        const proteinMod = form2.querySelector('#protein-modifier');
        // Destructure State
        let { macros , modifiers  } = this.state;
        const { calorieGoal  } = this.state;
        // Set Protein Modifier to State
        modifiers.protein = this.#getOptionsValue(proteinMod);
        // Calc Proteins
        this.#calcProteins(macros.proteins, modifiers.protein);
        // Calc Fats
        this.#calcFats(macros.fats);
        // Calc Carbs
        this.#calcCarbs(macros, calorieGoal);
    }
     #calcProteins(proteins, modifier) {
        let { grams , calories , percentage  } = proteins;
        grams = Math.round(this.state.person.weight * modifier);
        calories = Math.round(grams * 4);
        percentage = Math.round(calories / this.state.calorieGoal * 100);
        this.state.macros.proteins = {
            grams: grams,
            calories: calories,
            percentage: percentage
        };
    }
     #calcFats(fats) {
        let { grams , calories , percentage  } = fats;
        percentage = 30;
        calories = Math.round(percentage / 100 * this.state.calorieGoal);
        grams = Math.round(calories / 9);
        this.state.macros.fats = {
            grams: grams,
            calories: calories,
            percentage: percentage
        };
    }
     #calcCarbs(macros, goal) {
        let { carbs: { grams: cGrams , percentage: cPercent , calories: cCals  } , fats: { calories: fCals  } , proteins: { calories: pCals  } ,  } = macros;
        /**
		 * The Maths
		 * Goal = 1828
		 * fCals =
		 *
		 */ cCals = Math.round(goal - fCals - pCals);
        cGrams = Math.round(cCals / 4);
        cPercent = Math.round(cCals / goal * 100);
        this.state.macros.carbs = {
            calories: cCals,
            grams: cGrams,
            percentage: cPercent
        };
    }
}
exports.default = new Model();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./modules/Form":"6DnbK"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"6DnbK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "bmr", ()=>bmr
);
parcelHelpers.export(exports, "mods", ()=>mods
);
parcelHelpers.export(exports, "calories", ()=>calories
);
parcelHelpers.export(exports, "protein", ()=>protein
);
class Form {
    #query = '.totals__';
    constructor(id){
        this.form = document.getElementById(id);
        this.output = document.querySelector(this.#query.concat(id));
        this.macros = document.querySelector('.percents');
    }
    /** Takes an HTML string to render to the form's output.
	 * @param markup {string} - the HTML to markup.
	 */ renderOutput(markup) {
        this.output.insertAdjacentHTML('beforeend', `<span>${markup} calories</span>`);
    }
}
const bmr = new Form('bmr-calculator');
const mods = new Form('modifiers');
const calories = new Form('calorie-goal');
class ProteinForm extends Form {
    #formContent = '';
    label = this.form.querySelector('#protein--gender');
    constructor(id){
        super(id);
    }
    updateOptions(gender) {
        if (gender === 'Female') this.#formContent = `
			<label for="protein">
				<strong>${gender}</strong> Protein Modifier (grams per lb.)</label>
					<select name="protein" id="protein-modifier">
						<option value="0.6">0.6</option>
						<option value="0.7">.07</option>
						<option value="0.8" selected>0.8</option>
						<option value="0.9">0.9</option>
						<option value="1.0">1.0</option>
					</select>`;
        if (gender === 'Male') this.#formContent = `
			<label for="protein">
				<strong>${gender}</strong> Protein Modifier (grams per lb.)</label>
					<select name="protein" id="protein-modifier">
						<option value="0.8">0.8</option>
						<option value="0.9">0.9</option>
						<option value="1.0" selected>1.0</option>
						<option value="1.1">1.1</option>
						<option value="1.2">1.2</option>
					</select>`;
        this.form.querySelector('.form__content').innerHTML = this.#formContent;
    }
    renderMacros(markup) {
        this.macros.innerHTML = `
		<div class="percent__proteins">
			<h2>Protein:</h2>
			<span>${markup.proteins.percentage}% | ${markup.proteins.grams}g</span>
		</div>
		<div class="percent__fats">
			<h2>Fats:</h2>
			<span>${markup.fats.percentage}% | ${markup.fats.grams}g</span>
		</div>
		<div class="percent__carbs">
			<h2>Carbs:</h2>
			<span>${markup.carbs.percentage}% | ${markup.carbs.grams}g</span>
		</div>`;
    }
}
const protein = new ProteinForm('protein-calculator');

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ai2uB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _copyright = require("./modules/copyright");
var _copyrightDefault = parcelHelpers.interopDefault(_copyright);
var _form = require("./modules/Form");
class View {
    forms = document.querySelectorAll('form');
    mods = _form.mods;
    calorieGoal = _form.calories;
    bmr = _form.bmr;
    proteins = _form.protein;
    submissionMessage = `<span>Thanks! On to the next step.</span>`;
    finalMessage = `<span>All done! Check the breakdown</span>`;
    constructor(){
        _copyrightDefault.default('KJ Roelke', 'kjroelke.online');
        this.forms.forEach((form, i)=>{
            if (i === 0) return;
            // Disable all form controls
            for(i = 0; i < form.length; i++)form[i].setAttribute('disabled', '');
        });
        this.addRenderSubmission();
    }
    /** Attaches a callback function to each form's 'submit' and passes along the event. Implemented in the `init()` at index.js
	 * @param handler {function} - the callback function
	 */ addHandlerRender(handler) {
        this.forms.forEach((form)=>{
            form.addEventListener('submit', handler);
        });
    }
    addRenderSubmission() {
        this.forms.forEach((form1, i)=>{
            form1.addEventListener('submit', (e)=>{
                const form = e.target;
                const id = form.dataset.step;
                const submission = form.querySelector('.form__submission');
                submission.insertAdjacentHTML('beforeend', i != 2 ? this.submissionMessage : this.finalMessage);
                if (id != 3) {
                    this.#toggleStyle([
                        form,
                        this.forms[id]
                    ]);
                    this.#enableForm(this.forms[id]);
                }
                const reset = document.getElementById('reset');
                const resetParent = reset.closest('form');
                if (form === resetParent) {
                    window.scrollTo(0, 0);
                    location.reload();
                }
            });
        });
    }
     #toggleStyle(forms) {
        forms.forEach((form)=>form.classList.toggle('inactive')
        );
    }
     #enableForm(form) {
        for(let i = 0; i < form.length; i++)form[i].disabled = false;
    }
    handleOutput(form2, state) {
        if (form2 === this.bmr.form.id) {
            this.bmr.renderOutput(state.bmr);
            this.proteins.updateOptions(state.person.gender);
        }
        if (form2 === this.mods.form.id) {
            this.mods.renderOutput(state.tdee);
            this.calorieGoal.renderOutput(state.calorieGoal);
        }
        if (form2 === this.proteins.form.id) this.proteins.renderMacros(state.macros);
    }
}
exports.default = new View();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./modules/copyright":"8Y6tQ","./modules/Form":"6DnbK"}],"8Y6tQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function myCopyright(brandName, builder, site) {
    const copyright = document.getElementById('copyright');
    const thisYear = new Date().getFullYear();
    const brand = brandName.replace(/ /g, '');
    const builderLink = `<a href="https://${site}?utm_source=${brand}&utm_medium=website_footer&utm_campaign=copyright" target ="_blank">${builder}</a>`;
    copyright.innerHTML = `<p>&copy; ${thisYear} ${brandName} All Rights Reserved.<br/>Site built by ${builderLink}</p>`;
}
exports.default = myCopyright;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["7nZVA","8lqZg"], "8lqZg", "parcelRequirece37")

//# sourceMappingURL=index.975ef6c8.js.map
