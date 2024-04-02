import app from './Application';
import config from './Environment';
import displayConfiguration from './serverInformationTable';
const port = process.env.PORT || process.argv[2] || config.PORT || 39999;
const main = async ()=>{
    try {
        displayConfiguration(config);
        app.listen(port, () => console.log(`your application is running on port: ${port}`))
    } catch (error) {
        console.error(error);
    }
}

main()