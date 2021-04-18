"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _faq = _interopRequireDefault(require("../models/faq"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Returns a promise for search results.
 *
 * @param search param.
 */
const search = param => {
  const promise = _faq.default.find(param).exec();

  return promise;
};
/**
 * creates a new User
 * @param  newUser 
 */


const create = newUser => {
  const user = new _faq.default(newUser);
  const promise = user.save();
  return promise;
};

var _default = {
  search: search,
  create: create
};
exports.default = _default;