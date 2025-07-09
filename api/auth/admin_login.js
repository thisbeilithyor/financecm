import jwt from "jsonwebtoken";
import User from "../database/models/user.js";

const admin_login = async(req, res) => {
    let bodySet = false;
    let currentUsername, currentPassword;
    if(req.body){
        const { username, password } = req.body;
        currentUsername = username;
        currentPassword = password;
        bodySet = true;
    }
    let user;
    if(bodySet){ //better -> everything in one if
        user = await query_database(currentUsername, currentPassword);
    }

    if(user){
        const token = generate_jwt_token(user, currentUsername);
        res.json({ token });
    } else {
        res.json({ message: "Falsche Anmeldedaten!" });
    }
}

const generate_jwt_token = (user, currentUsername) => {
    return jwt.sign(
        { id: user.id, username: currentUsername },
        "aslfjindid",
        { expiresIn: '2h'}
    )
}

const query_database = async (currentUsername, currentPassword) => {
    return await User.findOne({ 
        where: {
            username: currentUsername,
            password: currentPassword,
            admin: true
        }
    })
}

export default admin_login;