"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _homesearch = _interopRequireDefault(require("./homesearch.route"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = app => {
  app.use('/', _homesearch.default);
};

exports.default = _default;