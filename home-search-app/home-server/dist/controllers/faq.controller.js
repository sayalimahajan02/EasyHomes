"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _faq = _interopRequireDefault(require("../services/faq.service"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//CRUD OPERATIONS
const index = (request, response) => {
  _faq.default.search({}).then(faq => {
    response.status(200);
    response.json(faq);
  }).catch(handleError(response));
}; // CRUD: CREATE OPERATION


const create = (request, response) => {
  const newUser = Object.assign({}, request.body);
  console.log(newUser);

  _faq.default.create(newUser).then(users => {
    response.status(200);
    response.json(users);
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
  create: create
};
exports.default = _default;