const Joi = require('joi');
exports.validateContentType = Joi.object({
    body: Joi.object({
        name: Joi.string()
        .min(3)
        .max(20)
        .required(),
    })
});
exports.validateCreateAttribute = Joi.object({
    body: Joi.object({
        name: Joi.string()
        .min(3)
        .max(20)
        .required(),
        type: Joi.string()
        .valid('string','number','boolean')
        .required(),    
    })
});