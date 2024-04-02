import * as crypto from 'crypto'

function generateSalt() {
    return crypto.randomBytes(16).toString('hex');
}

function generateIV() {
    return crypto.randomBytes(16);
}

function hashWithSaltAndIV(plaintext: string, salt: string, iv:Buffer) {
    const key = crypto.pbkdf2Sync(plaintext, salt, 100000, 32, 'sha512');
    const cipher = crypto.createCipheriv('aes-256-cbc', key, iv);
    let encrypted = cipher.update(plaintext, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return encrypted;
}

function verifyHash(plaintext:string, hashedValue:string, salt:string, iv:Buffer) {
    const key = crypto.pbkdf2Sync(plaintext, salt, 100000, 32, 'sha512');
    const decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);
    let decrypted = decipher.update(hashedValue, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted === plaintext;
}

export { hashWithSaltAndIV, verifyHash, generateSalt, generateIV }