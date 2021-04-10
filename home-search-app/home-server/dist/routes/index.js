"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _user = _interopRequireDefault(require("./user.route"));

var _homeSearch = _interopRequireDefault(require("./homeSearch.route"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//export the routes used
var _default = app => {
  app.use('/', _user.default);
  app.use('/', _homeSearch.default);
};

exports.default = _default;