import express from 'express';

const router = express.Router();

import faqController from "../controllers/faq.controller";
//express framework
/**

* Search - GET /users

*/

router.route('/faq')

    .get(faqController.index)
    .post(faqController.create);

router.route('/faq/:id')
    .delete(faqController.remove);


   
export default router;