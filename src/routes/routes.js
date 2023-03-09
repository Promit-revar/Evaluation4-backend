const router = require('express').Router();
const dataControllers = require('../controllers/dataControllers');
const middlewares = require('../middlewares/validateUserMiddleware');
router.route('/data/:contentId').get(middlewares.authorizeRequest,dataControllers.getAllDataByContentId)
                                .post(middlewares.authorizeRequest,dataControllers.setDataForContentType);
router.route('/create-content-type').post(middlewares.authorizeRequest,dataControllers.createContentType);
router.route('/create-attribute/:contentId').post(middlewares.authorizeRequest,dataControllers.createAttribute);
router.route('/update-content-type/:contentId').put(middlewares.authorizeRequest,dataControllers.updateContentType);
module.exports = router;