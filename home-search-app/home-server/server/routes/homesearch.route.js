import express from 'express';

const router = express.Router();

import homeSearchController from "../controllers/homeSearch.controller";




//express framework



/**

* Search - GET /users

* Create - POST /records

*/

router.route('/homeSearch')

    .get(homeSearchController.index)

    .post(homeSearchController.create);



/**

* Retrieve - GET /users/${id}

* Update - PUT /users/${id}

* Delete - DELETE /users/${id}

*/

router.route('/homeSearch/:id')

    .get(homeSearchController.get)

    .put(homeSearchController.update)

    .delete(homeSearchController.remove);


export default router;