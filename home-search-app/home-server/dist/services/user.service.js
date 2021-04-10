"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _userAccount = _interopRequireDefault(require("./../models/userAccount"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Returns a promise for search results.
 *
 * @param search param.
 */
const search = param => {
  const promise = _userAccount.default.find(param).exec();

  return promise;
};
/**
 * Saves the new user object.
 *
 * @param user
 */
// const save = (user) => {
//     const newUser = new User(user);
//     return newUser.save();
// };

/**
 * Returns the user object by id.
 *
 * @param id
 */


const get = id => {
  const promise = _userAccount.default.findById(id).exec();

  return promise;
};
/**
 * creates a new User
 * @param  newUser 
 */


const create = newUser => {
  const user = new _userAccount.default(newUser);
  const promise = user.save();
  return promise;
};
/**
 * Updates an existing todo item.
 *
 * @param updatedUser
 */


const update = (id, updatedUser) => {
  const promise = _userAccount.default.findByIdAndUpdate({
    _id: id
  }, updatedUser, {
    new: true
  }).exec();

  return promise;
};
/**
 * Deletes an existing order.
 *
 * @param userId
 */


const remove = id => {
  const promise = _userAccount.default.remove({
    _id: id
  }).exec();

  return promise;
};

var _default = {
  search: search,
  get: get,
  create: create,
  update: update,
  remove: remove
};
exports.default = _default;