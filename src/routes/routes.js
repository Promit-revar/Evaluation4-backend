const router = require('express').Router();
const dataControllers = require('../controllers/dataControllers');
const middlewares = require('../middlewares/validateUserMiddleware');
router.route('/data/:contentId').get(middlewares.authorizeRequest,dataControllers.getAllDataByContentId)
                                .post(middlewares.authorizeRequest,dataControllers.setDataForContentType);
module.exports = router;