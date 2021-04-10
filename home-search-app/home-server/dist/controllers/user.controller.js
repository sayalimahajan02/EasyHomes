"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _user = _interopRequireDefault(require("../services/user.service"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//CRUD OPERATIONS
const index = (request, response) => {
  _user.default.search({}).then(users => {
    response.status(200);
    response.json(users);
  }).catch(handleError(response));
}; // CRUD: GET OPERATION


const get = (request, response) => {
  const id = request.params.id;

  _user.default.get(id).then(users => {
    response.status(200);
    response.json(users);
  }).catch(handleError(response));
}; // CRUD: CREATE OPERATION


const create = (request, response) => {
  const newUser = Object.assign({}, request.body);
  console.log(newUser);

  _user.default.create(newUser).then(users => {
    response.status(200);
    response.json(users);
  }).catch(handleError(response));
}; // CRUD: UPDATE OPERATION


const update = (request, response) => {
  const id = request.params.id;
  console.log(id);
  console.log(request.body);
  const updateUser = Object.assign({}, request.body);

  _user.default.update(id, updateUser).then(users => {
    response.status(200);
    response.json(users);
  }).catch(handleError(response));
}; // CRUD: DELETE OPERATION


const remove = (request, response) => {
  const id = request.params.id;

  _user.default.remove(id).then(users => {
    response.status(200);
    response.json({
      message: "Delete Successful"
    });
  }).catch(handleError(response));
}; // ERROR HANDLING


const handleError = response => {
  return error => {
    response.status(500);
    response.json({
      message: error.message
    });
  };
};

var _default = {
  index: index,
  get: get,
  create: create,
  update: update,
  remove: remove
};
exports.default = _default;