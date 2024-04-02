const confidentialInfo = ['JWT_SECRET_KEY'];
const displayConfiguration = (configuration:{}) => {
    console.table(configuration);
}

export default displayConfiguration;