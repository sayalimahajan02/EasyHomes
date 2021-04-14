import Faq from '../models/faq';

/**
 * Returns a promise for search results.
 *
 * @param search param.
 */
const search = (param) => {
    const promise = Faq.find(param).exec();
    return promise;
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

export default {
    search: search,
    create:create
}