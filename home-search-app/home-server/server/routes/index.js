import UserRouter from './user.route';
import faqRouter from './faq.route';


//export the routes used

export default (app) => {
  app.use('/', UserRouter);
  app.use('/', faqRouter);
}