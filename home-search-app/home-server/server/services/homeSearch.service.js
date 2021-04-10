import HomeSearch from '../models/homeSearch';

/**
 * Returns a promise for search results.
 *
 * @param search param.
 */
const search = (param) => {
    const promise = HomeSearch.find(param).exec();
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
const get = (id) => {
    const promise = HomeSearch.findById(id).exec();
    return promise;
}
/**
 * creates a new HomeSearch
 * @param  newHomeSearch 
 */

const create = (newHomeSearch) => {
    const homeSearch = new HomeSearch(newHomeSearch);
    const promise = homeSearch.save();
    return promise;
}
/**
 * Updates an existing todo item.
 *
 * @param updatedHomeSearch
 */
const update = (id, updatedHomeSearch) => {
    const promise = HomeSearch.findByIdAndUpdate({ _id: id },
        updatedHomeSearch, { new: true }
    ).exec();
    return promise;
}
/**
 * Deletes an existing order.
 *
 * @param homeSearchId
 */
const remove = (id) => {
    const promise = HomeSearch.remove({ _id: id }).exec();
    return promise;
}

export default {
    search: search,
    get: get,
    create: create,
    update: update,
    remove: remove,

}