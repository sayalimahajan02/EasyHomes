"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import todoController from '../controllers/todo.controller';
const router = _express.default.Router(); //express framework for developing the endpoints.

/** URLs
 * Search all the tasks - GET /todo
 * Create task - POST /todo
 */
//  router.route('/todo')
//  .get(todoController.index)
//  .post(todoController.save);

/** URLs
* Retrieve task by id - GET /todo/${id}
* Update task by id - PUT /todo/${id}
* Delete task by id - DELETE /todo/${id}
*/
// router.route('/todo/:id')
//  .get(todoController.get)
//  .put(todoController.update)
//  .delete(todoController.remove);


var _default = router;
exports.default = _default;