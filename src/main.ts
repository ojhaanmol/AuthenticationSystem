import app from './Application';
const port = process.env.PORT || process.argv[2] || 39999;
const main = async ()=>{
    try {
        app.listen(port, () => console.log(`your application is running on port: ${port}`))
    } catch (error) {
        console.error(error);
    }
}

main()