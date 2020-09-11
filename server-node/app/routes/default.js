const appUse = require('../services/app.use');
const cors = require('cors');
const post = require('../controllers/default/post');
const get = require('../controllers/default/get');


module.exports = (app) => {
  app.options('*', cors())
  app.post('/default', cors(), post.handler);
  app.get('/default', cors(), get.handler);
  appUse.appUse(app);
};