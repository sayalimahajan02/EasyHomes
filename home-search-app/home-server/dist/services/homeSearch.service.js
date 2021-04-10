"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _homeSearch = _interopRequireDefault(require("../models/homeSearch"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Returns a promise for search results.
 *
 * @param search param.
 */
const search = param => {
  const promise = _homeSearch.default.find(param).exec();

  return promise;
};
/**
 * Saves the new HomeSearch object.
 *
 * @param HomeSearch
 */
// const save = (HomeSearch) => {
//     const newHomeSearch = new HomeSearch(HomeSearch);
//     return newHomeSearch.save();
// };

/**
 * Returns the HomeSearch object by id.
 *
 * @param id
 */


const get = id => {
  const promise = _homeSearch.default.findById(id).exec();

  return promise;
};
/**
 * creates a new HomeSearch
 * @param  newHomeSearch 
 */


const create = newHomeSearch => {
  const homeSearch = new _homeSearch.default(newHomeSearch);
  const promise = homeSearch.save();
  return promise;
};
/**
 * Updates an existing todo item.
 *
 * @param updatedHomeSearch
 */


const update = (id, updatedHomeSearch) => {
  const promise = _homeSearch.default.findByIdAndUpdate({
    _id: id
  }, updatedHomeSearch, {
    new: true
  }).exec();

  return promise;
};
/**
 * Deletes an existing order.
 *
 * @param homeSearchId
 */


const remove = id => {
  const promise = _homeSearch.default.remove({
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