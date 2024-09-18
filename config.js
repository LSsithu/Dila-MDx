const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "TCRgVATR#y-PnWy5PYxBQW9XJntFOytCRwOeC5w5cXr0KWWcW6GU",
MONGODB: process.env.MONGODB || "mongodb://mongo:DUAsAkRFcDkwKVKIzwfHcbWfBsVPczPw@junction.proxy.rlwy.net:19022",
};
