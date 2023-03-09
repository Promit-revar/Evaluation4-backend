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
        const result2 = await db.collection.findAll({
            where:{ 
                contentTypeId:contentTypeId
            }
        });
        const updatedRecords=await Promise.all(result2.map(async record => {
            record.data[data.name]=null;
            console.log({...record.data})
            return await db.collection.update({
                data:{
                    ...record.data,
                }
            },{
                where:{
                    collectionId:record.collectionId
                }
            });
            
        }))
        //console.log(updatedRecords)
        //await updatedRecords.save();

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
exports.updateAttribute = async(data,attributeId,contentId) => {
        console.log(contentId);
        const previousAttribute = await db.Attribute.findOne({
            where:{
                attributeId:attributeId
            }   
        });
       //console.log(previousAttribute)
        const records = await db.collection.findAll({
            where:{
                contentTypeId:contentId
            }
        });
        const result = await db.Attribute.update(data,{
            where:{
                attributeId:attributeId
            }
        });
        //console.log(records);
        records.forEach(async record => {
            record.data[data.name] = record.data[previousAttribute.name];
            delete record.data[previousAttribute.name];
            await db.collection.update({
                data:{
                    ...record.data
                    }
                    },{
                        where:{
                            collectionId:record.collectionId
                            }   
                            });
        });
        return result;

}
exports.deleteAttribute = async(attributeId) => {
        const result = await db.Attribute.destroy({
            where:{
                attributeId:attributeId
            }
        });

        return result;
}
exports.getAllContentTypes = async() => {
        const result = await db.ContentTypes.findAll();
        return result;
}
