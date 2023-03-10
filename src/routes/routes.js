const router = require('express').Router();
const dataControllers = require('../controllers/dataControllers');
const {validateRequest, validateRequestParams} = require('../middlewares/requestValidators');
const validationSchemas = require('../middlewares/schemas');
router.route('/data/:contentId').get(validateRequestParams,dataControllers.getAllDataByContentId)
                                .post(validateRequestParams,dataControllers.setDataForContentType)
router.route('/data/:collectionId').put(validateRequestParams,dataControllers.updateDataForContentType)
                                   .delete(validateRequestParams,dataControllers.deleteCollection);
router.route('/create-content-type').post(dataControllers.createContentType);
router.route('/create-attribute/:contentId').post(validateRequestParams,dataControllers.createAttribute);
router.route('/update-content-type/:contentId').put(validateRequestParams,dataControllers.updateContentType);
router.route('/update-attribute/:attributeId/:contentId').put(validateRequestParams,dataControllers.updateAttribute);
router.route('/delete-attribute/:attributeId').delete(validateRequestParams,dataControllers.deleteAttribute);
router.route('/get-content-types').get(dataControllers.getAllContentTypes);
router.route('/get-attributes/:contentId').get(validateRequestParams,dataControllers.getAllAttributesByContentId);
module.exports = router;