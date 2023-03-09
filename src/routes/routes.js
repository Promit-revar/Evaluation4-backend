const router = require('express').Router();
const dataControllers = require('../controllers/dataControllers');
const middlewares = require('../middlewares/validateUserMiddleware');
router.get('/data/:contentId',middlewares.authorizeRequest,dataControllers.getAllDataByContentId);
module.exports = router;