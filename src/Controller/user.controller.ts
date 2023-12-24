import UserRepo from '../ArrayTypeReposotory/User.reposotory';
import Model,{UserDto} from '../Model'

const signinTestData = {
    userId      : NaN,
    name        : 'test User 001',
    userName    : 'testUser001',
    password    : 'simplePassword',
    email       : 'random@gmail.com',
    token       : '',
    time        : ''+new Date(),
    isInSession : false,
    isActive    : true,
    role        : 'User'
}
const SECRETKEYS = `CreateSecretKey`;
type RoleIdObject = { roleId : number }

const Hashing = async (hashingData:string) => {
    try {
        if (!hashingData) throw `invalid hashing data`;
        return hashingData + '.hashed';
    } catch (error:any) {
        throw new Error(error)
    }
}
/** Use Jwt node_module*/
const generateTokens = async(SECRETKEYS:string,user:UserDto)=>{
    try {
        return ['refreshToken','AccessToken']
    } catch (error:any) {
       throw new Error(error);   
    }
}
const getUserDataFromJWT = async(token:string) => {
    try {
        token;
        return {
            userId      : NaN,
            name        : 'test User 001',
            userName    : 'testUser001',
            password    : 'simplePassword',
            email       : 'random@gmail.com',
            token       : '',
            time        : ''+new Date(),
            isInSession : false,
            isActive    : true,
            role        : 'User'
        }
    } catch (error:any) {
        throw new Error(error)
    }
}

const refreshTheToken = async(userData:object) => {
    userData;
    return `vjszkvjzc`;
}

const validateArgsUser = (argument:object,user:object) =>{
    argument
    user
    return true
}

class UserController {
    protected user
    constructor(){
        this.user = new Model.User( new UserRepo() );
    }

    public signin = async(argument: UserDto & RoleIdObject) => {
        try {
            /** validate(argument);*/ 
            argument.password = await Hashing(argument.password);
            const {userId} = await this.user.addAUser(argument);
            userId
            return await this.user.hasRole(argument.roleId);
        } catch (error:any) {
            throw new Error(error)
        }
    }
    public login = async (argument:UserDto) => {
        try {
            // validate(argument);
            const user = await this.user.getUserByUserName( argument.userName );
            if(!user)
            throw `user Not Found`;
            if(!user.isActive)
            throw `user is Inactive`;
            if(user.password !== await Hashing(argument.password) ) 
            throw `credentials are invalid`;
            const [refresh,access]= await generateTokens(SECRETKEYS,user);/** get SECRETKEYS from environment*/
            user.token = refresh;
            user.isInSession = true;
            this.user.updateUser( user );
            return {token:{refresh,access},user}
        } catch (error:any) {
            throw new Error(error)
        }
    }
    public refreshToken = async (argument:UserDto) => {
        try {
            // validate(argument);
            const user = getUserDataFromJWT( argument.token );
            validateArgsUser(argument,user);
            const userData = await this.user.getUserByUserName(argument.userName);
            if(!userData.isActive)`user is inactive`;
            return await refreshTheToken(argument);

        } catch (error:any) {
            throw new Error(error);
        }
    }
}

new UserController();