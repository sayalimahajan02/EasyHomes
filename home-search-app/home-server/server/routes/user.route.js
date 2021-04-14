import express from 'express';

const router = express.Router();

import userController from "../controllers/user.controller";




//express framework



/**

* Search - GET /users

* Create - POST /records

*/

router.route('/records')

    .get(userController.index)

    .post(userController.create);



/**

* Retrieve - GET /users/${id}

* Update - PUT /users/${id}

* Delete - DELETE /users/${id}

*/

router.route('/records/:id')

    .get(userController.get)

    .put(userController.update)

    .delete(userController.remove);

export default router;