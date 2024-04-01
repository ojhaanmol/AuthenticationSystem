import {config} from 'dotenv';
const environment = {
    "JWT_SECRET_KET" : config()?.parsed?.JWT_SECRET_KET || '',
}
export default environment;