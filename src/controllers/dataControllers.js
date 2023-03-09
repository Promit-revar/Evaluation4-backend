const dataServices = require('../services/dataServices');
exports.getAllDataByContentId = async(req,res) => {
    try{
        const data = await dataServices.getAllDataByContentId(req.params.contentId);
        res.status(200).json(data);
    }
    catch(error){
        res.status(500).json(error);
    }
}
exports.setDataForContentType = async(req,res) => {
    try{
      
        const result = await dataServices.setDataForContentId(req.body,req.params.contentId);
        res.status(201).json(result);
    }
    catch(error){
        res.status(500).json({error:error.message,success:false});
    }
}