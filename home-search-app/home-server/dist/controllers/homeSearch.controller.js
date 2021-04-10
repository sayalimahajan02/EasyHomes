"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _homeSearch = _interopRequireDefault(require("../services/homeSearch.service"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//CRUD OPERATIONS
const index = (request, response) => {
  _homeSearch.default.search({}).then(homeSearch => {
    response.status(200);
    response.json(homeSearch);
  }).catch(handleError(response));
}; // CRUD: GET OPERATION


const get = (request, response) => {
  const id = request.params.id;

  _homeSearch.default.get(id).then(homeSearch => {
    response.status(200);
    response.json(homeSearch);
  }).catch(handleError(response));
}; // CRUD: CREATE OPERATION


const create = (request, response) => {
  const newHomeSearch = Object.assign({}, request.body);
  console.log(newHomeSearch);

  _homeSearch.default.create(newHomeSearch).then(newHomeSearch => {
    response.status(200);
    response.json(newHomeSearch);
  }).catch(handleError(response));
}; // CRUD: UPDATE OPERATION


const update = (request, response) => {
  const id = request.params.id;
  console.log(id);
  console.log(request.body);
  const updateHomeSearch = Object.assign({}, request.body);

  _homeSearch.default.update(id, updateHomeSearch).then(updateHomeSearch => {
    response.status(200);
    response.json(updateHomeSearch);
  }).catch(handleError(response));
}; // CRUD: DELETE OPERATION


const remove = (request, response) => {
  const id = request.params.id;

  _homeSearch.default.remove(id).then(homeSearch => {
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