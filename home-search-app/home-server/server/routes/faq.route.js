import express from 'express';

const router = express.Router();

import faqController from "../controllers/faq.controller";
//express framework
/**

* Search - GET /faq

* Create - POST /faq

*/

router.route('/faq')

    .get(faqController.index)
    .post(faqController.create);

/**

* remove - DELETE /faq/${id}

*/

router.route('/faq/:id')
    .delete(faqController.remove);


   
export default router;