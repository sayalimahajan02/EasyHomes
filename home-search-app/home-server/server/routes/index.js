import UserRouter from './user.route';
import homeSearchRouter from './homeSearch.route';


//export the routes used



export default (app) => {

  app.use('/', UserRouter);
  app.use('/', homeSearchRouter);
}