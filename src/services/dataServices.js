const db = require('../models');
exports.getAllDataByContentId = async(contentId) => {
    try{
        const data = await db.ContentTypes.findOne({
            where:{
                contentId:contentId
            },
            include:{
                model:db.collection,
                required:true,
            }
        });
        return data;
    }
    catch(error){
        throw error;
    }
}
exports.setDataForContentId = async(data) => {
    try{
        const result = await db.collection.create(data);
        return result;
    }
    catch(error){
        throw error;
    }
}