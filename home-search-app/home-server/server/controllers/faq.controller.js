import faqService from '../services/faq.service';

//CRUD OPERATIONS

const index = (request, response) => {

    faqService.search({})


        .then((faq) => {

            response.status(200);

            response.json(faq);

        })

        .catch(handleError(response));

};

// CRUD: CREATE OPERATION

const create = (request, response) => {

    const newUser = Object.assign({}, request.body);

    console.log(newUser)

    faqService.create(newUser)

        .then((users) => {

            response.status(200);

            response.json(users);

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
    create:create

}