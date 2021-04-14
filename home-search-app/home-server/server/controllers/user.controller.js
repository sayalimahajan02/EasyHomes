import userService from '../services/user.service';

//CRUD OPERATIONS

const index = (request, response) => {

    userService.search({})


        .then((users) => {

            response.status(200);

            response.json(users);

        })

        .catch(handleError(response));

};

// CRUD: GET OPERATION

const get = (request, response) => {

    const id = request.params.id;

    userService.get(id)

        .then((users) => {

            response.status(200);

            response.json(users);

        })

        .catch(handleError(response));

};

// CRUD: CREATE OPERATION

const create = (request, response) => {

    const newUser = Object.assign({}, request.body);

    console.log(newUser)

    userService.create(newUser)

        .then((users) => {

            response.status(200);

            response.json(users);

        })

        .catch(handleError(response));

};

// CRUD: UPDATE OPERATION

const update = (request, response) => {

    const id = request.params.id;

    console.log(id)

    console.log(request.body)

    const updateUser = Object.assign({}, request.body);

    userService.update(id, updateUser)

        .then((users) => {

            response.status(200);

            response.json(users);

        })

        .catch(handleError(response));

};

// CRUD: DELETE OPERATION

const remove = (request, response) => {

    const id = request.params.id;

    userService.remove(id)

        .then((users) => {

            response.status(200);

            response.json({

                message: "Delete Successful"

            });

        })

        .catch(handleError(response));

};


// ERROR HANDLING

const handleError = (response) => {

    return (error) => {

        response.status(500);

        response.json({

            message: error.message

        })

    };

}



export default {

    index: index,

    get: get,

    create: create,

    update: update,

    remove: remove

}