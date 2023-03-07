import * as dotenv from "dotenv";

dotenv.config({path:`${__dirname}/../.env`});


//server configuration
const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME;
const SERVER_PORT = process.env.SERVER_PORT;
const SERVER_TOKEN_EXPIRETIME = process.env.SERVER_TOKEN_EXPIRETIME;
const SERVER_TOKEN_ISSUER = process.env.SERVER_TOKEN_ISSUER;
const SERVER_TOKEN_SECRET = process.env.SERVER_TOKEN_SECRET;
// export const SERVER_TOKEN_ALGORITHM = process.env.SERVER_TOKEN_ALGORITHM || 'HS256'



export const config = {
    server: {
        hostname: SERVER_HOSTNAME,
        port: SERVER_PORT,
        token: {
            expireTime: SERVER_TOKEN_EXPIRETIME,
            issuer: SERVER_TOKEN_ISSUER,
            secret: SERVER_TOKEN_SECRET,
        }
    },
    google: {
        googleLoginConfig: {
            client_id: process.env.GOOGLE_CLIENT_ID,
            client_secret: process.env.GOOGLE_CLIENT_SECRET,
            redirect_uri: process.env.GOOGLE_REDIRECT_URI,
            grant_type: process.env.GOOGLE_GRANT_TYPE
        },
        googleTokenUri: process.env.GOOGLE_TOKEN_URI
    },
    mongo: {
        MongoOptions : {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            socketTimeoutMS: 30000,
            keepAlive: true,
            autoIndex: false,
            retryWrites: false
        },
        mongoUri: process.env.MONGO_URI,
    }

}

export default config;