import jwt from "jsonwebtoken";

const verifyJWT = (req, res) => {
    const authHeader = req.headers['authorization'];    
    const token = authHeader.split(' ')[1];

    if(token === "null"){
        return res.json( {verified: false} );
    }
    try{
        jwt.verify(token, "aslfjindid", (err, user) => {
            if(err){
                return res.json({ verified: false });
            }
            if(user.id){
                if(user.id === 1 && user.username === 'administrator'){
                    return res.json({ verified: true });
                }
            }
            return res.json({ verified: false });
        })
    }catch(err){
        console.log("verifyJWT FAILED:", err);
        return res.json({ verified: false });
    }
}

export default verifyJWT;