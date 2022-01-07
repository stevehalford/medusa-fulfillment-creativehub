"use strict";

function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return !!right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _medusaInterfaces = require("medusa-interfaces");

var _creativehub = _interopRequireDefault(require("../utils/creativehub"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var CreativeHubFulfillmentService = /*#__PURE__*/function (_FulfillmentService) {
  _inherits(CreativeHubFulfillmentService, _FulfillmentService);

  var _super = _createSuper(CreativeHubFulfillmentService);

  function CreativeHubFulfillmentService(_ref, options) {
    var _this;

    var logger = _ref.logger,
        claimService = _ref.claimService,
        swapService = _ref.swapService,
        orderService = _ref.orderService;

    _classCallCheck(this, CreativeHubFulfillmentService);

    _this = _super.call(this);
    _this.options_ = options;
    console.log('options', options);
    /** @private @const {logger} */

    _this.logger_ = logger;
    /** @private @const {OrderService} */

    _this.orderService_ = orderService;
    /** @private @const {SwapService} */

    _this.swapService_ = swapService;
    /** @private @const {SwapService} */

    _this.claimService_ = claimService;
    /** @private @const {AxiosClient} */

    _this.client_ = new _creativehub["default"]({
      baseURL: _this.options_.baseURL,
      token: _this.options_.api_token
    });
    return _this;
  }

  _createClass(CreativeHubFulfillmentService, [{
    key: "getFulfillmentOptions",
    value: function getFulfillmentOptions() {
      return [{
        id: "creativehub-fulfillment"
      }];
    }
  }, {
    key: "validateFulfillmentData",
    value: function validateFulfillmentData(data, cart) {
      return data;
    }
  }, {
    key: "validateOption",
    value: function validateOption(data) {
      return true;
    }
  }, {
    key: "canCalculate",
    value: function canCalculate() {
      return false;
    }
  }, {
    key: "calculatePrice",
    value: function calculatePrice() {
      throw Error("CreativeHub Fulfillment service cannot calculatePrice");
    }
  }, {
    key: "createOrder",
    value: function createOrder() {
      // No data is being sent anywhere
      return Promise.resolve({});
    }
  }, {
    key: "createReturn",
    value: function createReturn() {
      // No data is being sent anywhere
      return Promise.resolve({});
    }
  }, {
    key: "createFulfillment",
    value: function createFulfillment() {
      // No data is being sent anywhere
      return Promise.resolve({});
    }
  }, {
    key: "cancelFulfillment",
    value: function cancelFulfillment() {
      return Promise.resolve({});
    }
  }]);

  return CreativeHubFulfillmentService;
}(_medusaInterfaces.FulfillmentService);

_defineProperty(CreativeHubFulfillmentService, "identifier", "creativehub");

var _default = CreativeHubFulfillmentService;
exports["default"] = _default;