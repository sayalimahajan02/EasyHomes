import UserRouter from './user.route';
import faqRouter from './faq.route';
import homeSearchRouter from './homesearch.route';


//export the routes used

export default (app) => {
  app.use('/', UserRouter);
  app.use('/', faqRouter);
  app.use('/',homeSearchRouter);
}