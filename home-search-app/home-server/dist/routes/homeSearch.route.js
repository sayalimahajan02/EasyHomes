"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _homeSearch = _interopRequireDefault(require("../controllers/homeSearch.controller"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express.default.Router();

//express framework

/**

* Search - GET /users

* Create - POST /records

*/
router.route('/homeSearch').get(_homeSearch.default.index).post(_homeSearch.default.create);
/**

* Retrieve - GET /users/${id}

* Update - PUT /users/${id}

* Delete - DELETE /users/${id}

*/

router.route('/homeSearch/:id').get(_homeSearch.default.get).put(_homeSearch.default.update).delete(_homeSearch.default.remove);
var _default = router;
exports.default = _default;