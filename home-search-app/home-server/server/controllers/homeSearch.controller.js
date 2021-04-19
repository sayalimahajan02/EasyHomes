import homeSearchService from '../services/homeSearch.service';




//CRUD OPERATIONS

const index = (request, response) => {

    homeSearchService.search({})

        .then((homeSearch) => {

            response.status(200);

            response.json(homeSearch);

        })

        .catch(handleError(response));

};

// CRUD: GET OPERATION

const get = (request, response) => {

    const id = request.params.id;

    homeSearchService.get(id)

        .then((homeSearch) => {

            response.status(200);

            response.json(homeSearch);

        })

        .catch(handleError(response));

};

// CRUD: CREATE OPERATION

const create = (request, response) => {

    const newHomeSearch = Object.assign({}, request.body);

    console.log(newHomeSearch)

    homeSearchService.create(newHomeSearch)

        .then((newHomeSearch) => {

            response.status(200);

            response.json(newHomeSearch);

        })

        .catch(handleError(response));

};

// CRUD: UPDATE OPERATION

const update = (request, response) => {

    const id = request.params.id;

    console.log(id)

    console.log(request.body)

    const updateHomeSearch = Object.assign({}, request.body);

    homeSearchService.update(id, updateHomeSearch)

        .then((updateHomeSearch) => {

            response.status(200);

            response.json(updateHomeSearch);

        })

        .catch(handleError(response));

};

// CRUD: DELETE OPERATION

const remove = (request, response) => {

    const id = request.params.id;

    homeSearchService.remove(id)

        .then((homeSearch) => {

            response.status(200);

            response.json({

                message: "Delete Successful"

            });

        })

        .catch(handleError(response));

};
//get aggregation data
const aggregation = (request, response) => {

    homeSearchService.aggregation({})

        .then((homeSearch) => {

            response.status(200);

            response.json(homeSearch);

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

    remove: remove,
    
    aggregation: aggregation

}