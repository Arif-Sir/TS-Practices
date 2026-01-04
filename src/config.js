require('dotenv').config();

const config = {
    app: {
        name: process.env.APP_NAME || "DefaultApp",
        version: process.env.APP_VERSION || "1.0.0",    
    port: process.env.PORT || 3000,
    env: process.env.NODE_ENV || "development"
    }
};

console.log(config.app);

module.exports = config;    
// End of config.js