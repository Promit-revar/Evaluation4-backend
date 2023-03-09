const db = require('../models');
const attribute = require('../models/attribute');
exports.getAllDataByContentId = async(contentId) => {
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
exports.setDataForContentId = async(data,contentId) => {
        const attributes = await db.Attribute.findAll({
            where:{
                contentTypeId:contentId
            }
        });
        attributes.forEach(attribute => {
            if(!data[attribute.name]){
                data[attribute.name] = null;
            }
            else if(data[attribute.name] && typeof(data[attribute.name]) !== attribute.type)
            {
                throw new Error(`Attribute ${attribute.name} should be of type ${attribute.type}`);
            }
        });
        const result = await db.collection.create({
            data:data,
            contentTypeId:contentId,
        });
        return result;
}
exports.createContentType = async(data) => {
        const result = await db.ContentTypes.create({
            name:data.name
        });
        return result;
}
exports.createAttribute = async(data,contentTypeId) => {
        const result = await db.Attribute.create({
            name:data.name,
            type:data.type,
            contentTypeId:contentTypeId
        });
        return result;
}
exports.updateContentType = async(data,contentId) => {
        const result = await db.ContentTypes.update(data,{
            where:{
                contentId:contentId
            }
        });
        return result;
}