exports.validateRequest = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req);
    if (error) {
      res.status(400).json({ error: error.message })
    }
    else{
      next();
    }
  }
}
exports.validateRequestParams = (req,res,next) => {
    if(!req.params){
        res.status(400).json({ error: "Invalid params" })
    }
    else if(req.params.contentId && req.params.contentId.length !== 36){
        res.status(400).json({ error: "Invalid params" })
    }
    else if(req.params.attributeId && req.params.attributeId.length !== 36){
        res.status(400).json({ error: "Invalid params" })
    }
    else{
      next();
    }
}
