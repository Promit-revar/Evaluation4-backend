const db = require('../../src/models');
const dataServices = require('../../src/services/dataServices');
describe('dataServices', () => {
    describe('getAllDataByContentId', () => {
        it("should get data",()=>{
            jest.spyOn(db.ContentTypes,"findOne").mockImplementationOnce(()=>{
                return {
                    include:jest.fn().mockImplementationOnce(()=>{
                        return {
                            required:true
                        }
                    })
                }
            })
            dataServices.getAllDataByContentId("contentId");
            expect(db.ContentTypes.findOne).toHaveBeenCalled();
        })
        it("should throw error",()=>{
            jest.spyOn(db.ContentTypes,"findOne").mockImplementationOnce(()=>{
                throw new Error("error");
            })
            expect(dataServices.getAllDataByContentId("contentId")).rejects.toThrow("error");
        })
    })
    describe('setDataForContentId', () => {
        it("should set data",async ()=>{
            jest.spyOn(db.Attribute,"findAll").mockImplementationOnce(()=>{
                return [
                    {
                        name:"name"
                    }
                ]
            })
            jest.spyOn(db.collection,"create").mockImplementationOnce(()=>{
                return {
                    data:"data",
                    contentTypeId:"contentTypeId"
                }
            })
            const result = await dataServices.setDataForContentId("data","contentId");
            expect(result).toEqual({
                data:"data",
                contentTypeId:"contentTypeId"
            })
        })
        it("should throw error",()=>{
            jest.spyOn(db.Attribute,"findAll").mockImplementationOnce(()=>{
                throw new Error("error");
            })
            expect(dataServices.setDataForContentId("data","contentId")).rejects.toThrow("error");
        })
    });
    describe('createContentType', () => {
        it("should create content type",async ()=>{
            jest.spyOn(db.ContentTypes,"create").mockImplementationOnce(()=>{
                return {
                    name:"name"
                }
            })
            const result = await dataServices.createContentType("data");
            expect(result).toEqual({
                name:"name"
            })
        })
        it("should throw error",()=>{
            jest.spyOn(db.ContentTypes,"create").mockImplementationOnce(()=>{
                throw new Error("error");
            })
            expect(dataServices.createContentType("data")).rejects.toThrow("error");
        })
    });
    describe('createAttribute', () => {
        it("should create attribute",async ()=>{
            jest.spyOn(db.Attribute,"create").mockImplementationOnce(()=>{
                return {
                    name:"name",
                    type:"type",
                    contentTypeId:"contentTypeId"
                }
            })
            jest.spyOn(db.collection,"findAll").mockImplementationOnce(()=>{
                return [
                    {
                        collectionId:"collectionId",
                        data:"data"
                    }
                ]
            })
            jest.spyOn(db.collection,"update").mockImplementationOnce(()=>{
                return [
                    1
                ]
            })
            const result = await dataServices.createAttribute("data","contentTypeId");
            expect(result).toEqual({
                name:"name",
                type:"type",
                contentTypeId:"contentTypeId"
            })
        })
        it("should throw error",()=>{
            jest.spyOn(db.Attribute,"create").mockImplementationOnce(()=>{
                throw new Error("error");
            })
            expect(dataServices.createAttribute("data","contentTypeId")).rejects.toThrow("error");
        })
    });    
});