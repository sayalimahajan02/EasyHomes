import Faq from '../models/faq';

/**
 * Returns a promise for search results.
 *
 * @param search param.
 */
const search = (param) => {
    const searchResult = Faq.find(param).exec();
    return searchResult;
};

/**
 * creates a new User
 * @param  newUser 
 */

const create = (newUser) => {
    const user = new Faq(newUser);
    const promise = user.save();
    return promise;
}

/**
 * Deletes an existing order.
 *
 * @param userId
 */
const remove = (id) => {
    const promise = Faq.remove({ _id: id }).exec();
    return promise;
}

export default {
    search: search,
    create:create,
    remove: remove
}