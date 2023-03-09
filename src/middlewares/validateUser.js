const {makeRequest} = require('../utils/makeRequest');
const {verifyToken} = require('../constants/endpoints');
exports.validateRequest = async(req,res,next) => {
    try{
        const tokenVerification = await makeRequest(verifyToken,{headers:{authorization:req.headers.authorization}});
        console.log(tokenVerification);
        if(tokenVerification.success){
            next();
        }
        else{
            res.status(401).json({error:tokenVerification.error,success:false});
        }
    }
    catch(error){
        res.status(401).json({error:error.message,success:false});

    }
}