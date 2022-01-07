"use strict";

function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return !!right[Symbol.hasInstance](left); } else { return left instanceof right; } }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var CreativeHub = /*#__PURE__*/function () {
  function CreativeHub(_ref) {
    var _this = this;

    var baseURL = _ref.baseURL,
        token = _ref.token;

    _classCallCheck(this, CreativeHub);

    _defineProperty(this, "buildOrderEndpoints_", function () {
      return {
        retrieve: function () {
          var _retrieve = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(id) {
            var path;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    path = "/api/v1/orders/".concat(id);
                    return _context.abrupt("return", _this.client_({
                      method: "GET",
                      url: path
                    }).then(function (_ref2) {
                      var data = _ref2.data;
                      return data;
                    }));

                  case 2:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));

          function retrieve(_x) {
            return _retrieve.apply(this, arguments);
          }

          return retrieve;
        }(),
        create: function () {
          var _create = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(data) {
            var path;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    path = "/api/v1/orders";
                    return _context2.abrupt("return", _this.client_({
                      method: "POST",
                      url: path,
                      data: {
                        data: data
                      }
                    }).then(function (_ref3) {
                      var data = _ref3.data;
                      return data;
                    }));

                  case 2:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2);
          }));

          function create(_x2) {
            return _create.apply(this, arguments);
          }

          return create;
        }(),
        "delete": function () {
          var _delete2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(id) {
            var path;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    path = "/api/v1/orders/".concat(id);
                    return _context3.abrupt("return", _this.client_({
                      method: "DELETE",
                      url: path
                    }).then(function (_ref4) {
                      var data = _ref4.data;
                      return data;
                    }));

                  case 2:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3);
          }));

          function _delete(_x3) {
            return _delete2.apply(this, arguments);
          }

          return _delete;
        }()
      };
    });

    _defineProperty(this, "buildDeliveryOptionEndpoints_", function () {
      return {
        retrieve: function () {
          var _retrieve2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(id) {
            var path;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    path = "/api/v1/deliveryoptions/".concat(id);
                    return _context4.abrupt("return", _this.client_({
                      method: "GET",
                      url: path
                    }).then(function (_ref5) {
                      var data = _ref5.data;
                      return data;
                    }));

                  case 2:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4);
          }));

          function retrieve(_x4) {
            return _retrieve2.apply(this, arguments);
          }

          return retrieve;
        }(),
        list: function () {
          var _list = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            var path;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    path = "/api/v1/deliveryoptions/query";
                    return _context5.abrupt("return", _this.client_({
                      method: "GET",
                      url: path
                    }).then(function (_ref6) {
                      var data = _ref6.data;
                      return data;
                    }));

                  case 2:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5);
          }));

          function list() {
            return _list.apply(this, arguments);
          }

          return list;
        }()
      };
    });

    this.token_ = token;
    this.client_ = _axios["default"].create({
      baseURL: "".concat(baseURL),
      headers: {
        "content-type": "application/json",
        Authorization: "ApiKey ".concat(token)
      }
    });
    this.orders = this.buildOrderEndpoints_();
    this.deliveryOptions = this.buildDeliveryOptionEndpoints_();
  }

  _createClass(CreativeHub, [{
    key: "request",
    value: function () {
      var _request = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(data) {
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                return _context6.abrupt("return", this.client_(data).then(function (_ref7) {
                  var data = _ref7.data;
                  return data;
                }));

              case 1:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function request(_x5) {
        return _request.apply(this, arguments);
      }

      return request;
    }()
  }]);

  return CreativeHub;
}();

var _default = CreativeHub;
exports["default"] = _default;