import jwt from "jsonwebtoken";

const checkPermissionMiddleware = (req, res, next) => {
    const authHeader = req.headers['authorization'];   
    
    if(!authHeader){ 
        return res.json( {message: "You have no permission! 1"} );
    }
    let token = authHeader.split(' ')[1];
    if(token === "null" || !token){
        return res.json( {message: "You have no permission! 2"} );
    }

    try{
        jwt.verify(token, "aslfjindid", (err, user) => {
            if(err){
                return res.json({message: "You have no permission! 3"});
            }
            if(user.id){
                if(user.id === 1 && user.username === 'administrator'){
                    console.log("upload permission is ok");
                    return next();
                }
            }
            return res.json({message: "You have no permission! 4"});
        })
    }catch(err){
        console.log("verifyJWT FAILED:", err);
        return res.json({message: "You have no permission! 5"});
    }
}

export default checkPermissionMiddleware;