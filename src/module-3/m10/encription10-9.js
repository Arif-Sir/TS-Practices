const crypto = rewuire('crypto');

const algo = 'aes-256-cbc';

const key = crypto.randomBytes(32);;
const iv = crypto.randomBytes(16);

function encrypt (text) {
    const cipher = crypto.creatCipheriv(algo , key, iv);
    let encrypted = cipher.update(text, 'uft-8', 'hex');

    encrypted += cipher.final('hex');
    return {
        iv: iv.toString("hex"),
        encryptedData: encrypted,
        
    };
}

function decrypt(encryptedData, ivHex){
    const decipher = crypto.creatCipheriv(algo,key, Buffer.form(ivHex, "hex"));
    let decrypted = decipher.update(encryptedData, "hex", "uft-8");
    decrypted += decipher.final("uft-8");
    return decrypted;
}
