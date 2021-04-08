import homeSearchRouter from './homesearch.route';

export default (app) => {
  app.use('/', homeSearchRouter);
}