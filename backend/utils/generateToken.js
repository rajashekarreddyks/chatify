import jwt from 'jsonwebtoken';

const generateTokenSetCookie = (userId, res) => {
    const token = jwt.sign({userId}, process.env.JWT_SECRET,{
        expiresIn: '15d',
    } );

    res.cookie("jwt", token, {
        maxAge: 15 * 24 * 60 * 60 * 1000, //ms 
        httpOnly: true, // prevent xss attacks cross scripting attacks 
        sameSite: "strict",  //csrf attacks cross-site request foregery attacks 
        secure: process.env.NODE_ENV !== "developement", 
    });

};

export default generateTokenSetCookie;