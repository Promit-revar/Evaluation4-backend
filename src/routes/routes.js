const router = require('express').Router();
const dataControllers = require('../controllers/dataControllers');
const middlewares = require('../middlewares/validateUserMiddleware');
router.route('/data/:contentId').get(middlewares.authorizeRequest,dataControllers.getAllDataByContentId)
                                .post(middlewares.authorizeRequest,dataControllers.setDataForContentType)
router.route('/data/:collectionId').put(middlewares.authorizeRequest,dataControllers.updateDataForContentType)
                                   .delete(middlewares.authorizeRequest,dataControllers.deleteCollection);
router.route('/create-content-type').post(middlewares.authorizeRequest,dataControllers.createContentType);
router.route('/create-attribute/:contentId').post(middlewares.authorizeRequest,dataControllers.createAttribute);
router.route('/update-content-type/:contentId').put(middlewares.authorizeRequest,dataControllers.updateContentType);
router.route('/update-attribute/:attributeId/:contentId').put(middlewares.authorizeRequest,dataControllers.updateAttribute);
router.route('/delete-attribute/:attributeId').delete(middlewares.authorizeRequest,dataControllers.deleteAttribute);
router.route('/get-content-types').get(middlewares.authorizeRequest,dataControllers.getAllContentTypes);
router.route('/get-attributes/:contentId').get(middlewares.authorizeRequest,dataControllers.getAllAttributesByContentId);
module.exports = router;