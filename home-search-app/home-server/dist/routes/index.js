"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _user = _interopRequireDefault(require("./user.route"));

var _faq = _interopRequireDefault(require("./faq.route"));

var _homesearch = _interopRequireDefault(require("./homesearch.route"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//export the routes used
var _default = app => {
  app.use('/', _user.default);
  app.use('/', _faq.default);
  app.use('/', _homesearch.default);
};

exports.default = _default;