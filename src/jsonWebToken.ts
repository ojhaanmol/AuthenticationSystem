import {sign, verify, Secret, SignOptions } from 'jsonwebtoken';

const jwtOptions: SignOptions = {
    expiresIn: '20s',
    // algorithm: 'HS256'
};

const generateRefreshToken = (json: {}, secretKey: Secret) =>{
    return sign(json, secretKey, jwtOptions);
}
const generateAccessToken = (json: {}, secretKey: Secret) =>{
    return sign(json, secretKey);
}
const verifyToken = (token: string, secretKey: Secret) => {
    return verify(token,secretKey)
}
const generateTokens = (json: {}, secretKey:Secret) => {
    return [ generateAccessToken(json,secretKey), generateRefreshToken(json,secretKey)] ;
}

export { generateTokens ,generateRefreshToken, generateAccessToken, verifyToken, Secret };