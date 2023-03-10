const dataControllers = require('../../src/controllers/dataControllers');
const dataServices = require('../../src/services/dataServices');
describe('dataControllers', () => {
    describe('getAllDataByContentId', () => {
        it('should call dataServices.getAllDataByContentId', async () => {
        const req = {
            params: {
            contentId: 'contentId',
            },
        };
        const res = {
            status: jest.fn(() => ({
            json: jest.fn(),
            })),
        };
        const data = 'data';
        dataServices.getAllDataByContentId = jest.fn(() => data);
        await dataControllers.getAllDataByContentId(req, res);
        expect(dataServices.getAllDataByContentId).toHaveBeenCalledWith(req.params.contentId);
        expect(res.status).toHaveBeenCalledWith(200);
        });
        it('should call res.status(500).json(error) when dataServices.getAllDataByContentId throws an error', async () => {
        const req = {
            params: {
            contentId: 'contentId',
            },
        };
        const res = {
            status: jest.fn(() => ({
            json: jest.fn(),
            })),
        };
        const error = 'error';
        dataServices.getAllDataByContentId = jest.fn(() => {
            throw error;
        });
        await dataControllers.getAllDataByContentId(req, res);
        expect(dataServices.getAllDataByContentId).toHaveBeenCalledWith(req.params.contentId);
        expect(res.status).toHaveBeenCalledWith(500);
        });
    });
    describe('setDataForContentType', () => {
        it('should call dataServices.setDataForContentId', async () => {
        const req = {
            body: 'body',
            params: {
            contentId: 'contentId',
            },
        };
        const res = {
            status: jest.fn(() => ({
            json: jest.fn(),
            })),
        };
        const result = 'result';
        dataServices.setDataForContentId = jest.fn(() => result);
        await dataControllers.setDataForContentType(req, res);
        expect(dataServices.setDataForContentId).toHaveBeenCalledWith(req.body, req.params.contentId);
        expect(res.status).toHaveBeenCalledWith(201);
        });
        it('should call res.status(500).json(error) when dataServices.setDataForContentId throws an error', async () => {
        const req = {
            body: 'body',
            params: {
            contentId: 'contentId',
            },
        };
        const res = {
            status: jest.fn(() => ({
            json: jest.fn(),
            })),
        };
        const error = 'error';
        dataServices.setDataForContentId = jest.fn(() => {
            throw error;
        });
        await dataControllers.setDataForContentType(req, res);
        expect(dataServices.setDataForContentId).toHaveBeenCalledWith(req.body, req.params.contentId);
        expect(res.status).toHaveBeenCalledWith(500);
        });
    });
    describe('createContentType', () => {
        it('should call dataServices.createContentType', async () => {
        const req = {
            body: 'body',
        };
        const res = {
            status: jest.fn(() => ({
            json: jest.fn(),
            })),
        };
        const result = 'result';
        dataServices.createContentType = jest.fn(() => result);
        await dataControllers.createContentType(req, res);
        expect(dataServices.createContentType).toHaveBeenCalledWith(req.body);
        expect(res.status).toHaveBeenCalledWith(201);
        });
        it('should call res.status(500).json(error) when dataServices.createContentType throws an error', async () => {
        const req = {
            body: 'body',
        };
        const res = {
            status: jest.fn(() => ({
            json: jest.fn(),
            })),
        };
        const error = 'error';
        dataServices.createContentType = jest.fn(() => {
            throw error;
        });
        await dataControllers.createContentType(req, res);
        expect(dataServices.createContentType).toHaveBeenCalledWith(req.body);
        expect(res.status).toHaveBeenCalledWith(500);
        });
    });
    describe('getAllContentTypes', () => {
        it('should call dataServices.getAllContentTypes', async () => {
        const req = {};
        const res = {
            status: jest.fn(() => ({
            json: jest.fn(),
            })),
        };
        const result = 'result';
        dataServices.getAllContentTypes = jest.fn(() => result);
        await dataControllers.getAllContentTypes(req, res);
        expect(dataServices.getAllContentTypes).toHaveBeenCalled();
        expect(res.status).toHaveBeenCalledWith(200);
        });
        it('should call res.status(500).json(error) when dataServices.getAllContentTypes throws an error', async () => {
        const req = {};
        const res = {
            status: jest.fn(() => ({
            json: jest.fn(),
            })),
        };
        const error = 'error';
        dataServices.getAllContentTypes = jest.fn(() => {
            throw error;
        });
        await dataControllers.getAllContentTypes(req, res);
        expect(dataServices.getAllContentTypes).toHaveBeenCalled();
        expect(res.status).toHaveBeenCalledWith(500);
        });
    });
    describe('updateAttribute', () => {
        it('should call dataServices.updateAttribute', async () => {
        const req = {
            body: 'body',
            params: {
            contentId: 'contentId',
            attributeId: 'attributeId',
            },
        };
        const res = {
            status: jest.fn(() => ({
            json: jest.fn(),
            })),
        };
        const result = 'result';
        dataServices.updateAttribute = jest.fn(() => result);
        await dataControllers.updateAttribute(req, res);
        expect(dataServices.updateAttribute).toHaveBeenCalledWith( req.body, req.params.attributeId,req.params.contentId);
        expect(res.status).toHaveBeenCalledWith(404);
        });
    });
    describe('deleteAttribute', () => {
        it('should call dataServices.deleteAttribute', async () => {
        const req = {
            params: {
            contentId: 'contentId',
            attributeId: 'attributeId',
            },
        };
        const res = {
            status: jest.fn(() => ({
            json: jest.fn(),
            })),
        };
        const result = 'result';
        dataServices.deleteAttribute = jest.fn(() => result);
        await dataControllers.deleteAttribute(req, res);
        expect(dataServices.deleteAttribute).toHaveBeenCalledWith(req.params.attributeId, req.params.contentId);
        expect(res.status).toHaveBeenCalledWith(404);
        });
        it('should call res.status(500).json(error) when dataServices.deleteAttribute throws an error', async () => {
        const req = {
            params: {
            contentId: 'contentId',
            attributeId: 'attributeId',
            },
        };
        const res = {
            status: jest.fn(() => ({
            json: jest.fn(),
            })),
        };
        const error = 'error';
        dataServices.deleteAttribute = jest.fn(() => {
            throw error;
        });
        await dataControllers.deleteAttribute(req, res);
        expect(dataServices.deleteAttribute).toHaveBeenCalledWith(req.params.attributeId, req.params.contentId);
        expect(res.status).toHaveBeenCalledWith(500);
        });
    });
    describe('deleteCollection', () => {
        it('should call dataServices.deleteCollection', async () => {
        const req = {
            params: {
                collectionId: 'collectionId',
            },
        };
        const res = {
            status: jest.fn(() => ({
            json: jest.fn(),
            })),
        };
        const result = 'result';
        dataServices.deleteCollection = jest.fn(() => result);
        await dataControllers.deleteCollection(req, res);
        expect(dataServices.deleteCollection).toHaveBeenCalledWith(req.params.collectionId);
        expect(res.status).toHaveBeenCalledWith(200);
        });
        it('should call res.status(500).json(error) when dataServices.deleteCollection throws an error', async () => {
        const req = {
            params: {
            collectionId: 'collectionId'
            },
        };
        const res = {
            status: jest.fn(() => ({
            json: jest.fn(),
            })),
        };
        const error = 'error';
        dataServices.deleteCollection = jest.fn(() => {
            throw error;
        });
        await dataControllers.deleteCollection(req, res);
        expect(dataServices.deleteCollection).toHaveBeenCalledWith(req.params.collectionId);
        expect(res.status).toHaveBeenCalledWith(500);
        });
    });
    describe("getAllAttributesByContentId", () => {
        it("should call dataServices.getAttributesByContentType", async () => {
        const req = {
            params: {
            contentId: "contentId",
            },
        };
        const res = {
            status: jest.fn(() => ({
            json: jest.fn(),
            })),
        };
        const result = "result";
        dataServices.getAttributesByContentId= jest.fn(() => result);
        await dataControllers.getAllAttributesByContentId(req, res);
        expect(dataServices.getAttributesByContentId).toHaveBeenCalledWith(req.params.contentId);
        expect(res.status).toHaveBeenCalledWith(200);
        });
        it("should call res.status(500).json(error) when dataServices.getAllAttributesByContentType throws an error", async () => {
        const req = {
            params: {
            contentId: "contentId",
            },
        };
        const res = {
            status: jest.fn(() => ({
            json: jest.fn(),
            })),
        };
        const error = "error";
        dataServices.getAttributesByContentId = jest.fn(() => {
            throw error;
        });
        await dataControllers.getAllAttributesByContentId(req, res);
        expect(dataServices.getAttributesByContentId).toHaveBeenCalledWith(req.params.contentId);
        expect(res.status).toHaveBeenCalledWith(500);
        });
    });
});