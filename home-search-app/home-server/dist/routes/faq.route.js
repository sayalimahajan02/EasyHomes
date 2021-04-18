"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _faq = _interopRequireDefault(require("../controllers/faq.controller"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express.default.Router();

//express framework

/**

* Search - GET /users

*/
router.route('/faq').get(_faq.default.index).post(_faq.default.create);
var _default = router;
exports.default = _default;