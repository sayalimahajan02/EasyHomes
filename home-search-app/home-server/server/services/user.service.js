import User from './../models/userAccount';

/**
 * Returns a promise for search results.
 *
 * @param search param.
 */
const search = (param) => {
    const promise = User.find(param).exec();
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
const get = (id) => {
    const promise = User.findById(id).exec();
    return promise;
}
/**
 * creates a new User
 * @param  newUser 
 */

const create = (newUser) => {
    const user = new User(newUser);
    const promise = user.save();
    return promise;
}
/**
 * Updates an existing todo item.
 *
 * @param updatedUser
 */
const update = (id, updatedUser) => {
    const promise = User.findByIdAndUpdate({ _id: id },
        updatedUser, { new: true }
    ).exec();
    return promise;
}
/**
 * Deletes an existing order.
 *
 * @param userId
 */
const remove = (id) => {
    const promise = User.remove({ _id: id }).exec();
    return promise;
}

export default {
    search: search,
    get: get,
    create: create,
    update: update,
    remove: remove

}