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
        console.log(req.body);
        const result = await dataServices.setDataForContentId(req.body,req.params.contentId);
        res.status(201).json(result);
    }
    catch(error){
        res.status(500).json({error:error.message,success:false});
    }
}
exports.createContentType = async(req,res) => {
    try{
        const result = await dataServices.createContentType(req.body);
        res.status(201).json(result);
    }
    catch(error){
        res.status(500).json(error);
    }
}
exports.createAttribute = async(req,res) => {
    try{
        const result = await dataServices.createAttribute(req.body,req.params.contentId);
        res.status(201).json(result);
    }
    catch(error){
        res.status(500).json(error);
    }
}
exports.updateContentType = async(req,res) => {
    try{
        const result = await dataServices.updateContentType(req.body,req.params.contentId);
        if(result[0] > 0){
        res.status(201).json({success:true});
        }
        else{
            res.status(404).json({error:"Data Not Found",success:false});
        }
    }
    catch(error){
        if(error.message.search("invalid input"))
        {
            res.status(400).json({error:error.message,success:false});
        }
        else{
        res.status(500).json({error:error.message,success:false});
        }
    }
}
exports.updateAttribute = async(req,res) => {
    try{
        const result = await dataServices.updateAttribute(req.body,req.params.attributeId,req.params.contentId);
        if(result[0] > 0){
        res.status(201).json({success:true});
        }
        else{
            res.status(404).json({error:"Data Not Found",success:false});
        }
    }
    catch(error){
        if(error.message.search("invalid input"))
        {
            res.status(400).json({error:error.message,success:false});
        }
        else{
        res.status(500).json({error:error.message,success:false});
        }
    }
}
exports.deleteAttribute = async(req,res) => {
    try{
        const result = await dataServices.deleteAttribute(req.params.attributeId,req.params.contentId);
        if(result > 0){
            res.status(200).json({success:true});
        }
        else{
            res.status(404).json({error:"Data Not Found",success:false});
        }
    }
    catch(error){
        res.status(500).json(error);
    }
}
exports.getAllContentTypes = async(req,res) => {
    try{
        const result = await dataServices.getAllContentTypes();
        res.status(200).json(result);
    }
    catch(error){
        res.status(500).json(error);
    }
}
exports.updateDataForContentType = async(req,res) => {
    try{
        const {data} = req.body;
        const result = await dataServices.updateDataForContentType(data,req.params.collectionId);
        res.status(200).json(result);
    }
    catch(error){
        res.status(500).json(error);
    }
}
exports.deleteCollection = async(req,res) => {
    try{
        const result = await dataServices.deleteCollection(req.params.collectionId);
        res.status(200).json(result);
    }
    catch(error){
        res.status(500).json(error);
    }
}
exports.getAllAttributesByContentId = async(req,res) => {
    try{
        const result = await dataServices.getAttributesByContentId(req.params.contentId);
        res.status(200).json(result);
    }
    catch(error){
        res.status(500).json(error);
    }
}