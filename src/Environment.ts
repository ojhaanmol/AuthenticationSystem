import {config} from 'dotenv';
const environment = {
    "JWT_SECRET_KEY" : config()?.parsed?.JWT_SECRET_KEY || '',
    "PORT"           : config()?.parsed?.PORT || ''
}
export default environment;