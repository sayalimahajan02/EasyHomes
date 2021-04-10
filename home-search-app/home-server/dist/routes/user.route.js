"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _user = _interopRequireDefault(require("../controllers/user.controller"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express.default.Router();

//express framework

/**

* Search - GET /users

* Create - POST /records

*/
router.route('/records').get(_user.default.index).post(_user.default.create);
/**

* Retrieve - GET /users/${id}

* Update - PUT /users/${id}

* Delete - DELETE /users/${id}

*/

router.route('/records/:id').get(_user.default.get).put(_user.default.update).delete(_user.default.remove);
var _default = router;
exports.default = _default;