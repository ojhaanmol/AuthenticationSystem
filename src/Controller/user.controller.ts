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

const Hashing = async (hashingData:string) => {
    try {
        if (!hashingData) throw `invalid hashing data`;
        return hashingData + '.hashed';
    } catch (error:any) {
        throw new Error(error)
    }
}

class UserController {
    protected user
    constructor(){
        this.user = new Model.User( new UserRepo() );
    }

    public signin = async(argument:UserDto) => {
        try {
            /** validate(atgument);*/ 
            argument.password = await Hashing(argument.password);
            const {userId} = await this.user.addAUser(argument);
            userId
            /**  add await this.user.addToRoleHasPermission(perMissionId) */ 
        } catch (error:any) {
            throw new Error(error)
        }
    }
    public login = async (argument:UserDto) => {
        try {
            /** 
             * validate(argument);
             * const user = await getUserByUserName( argument.userName );
             * if(!user)
             * throw `user Not Found`;
             * if(!user.isActive)
             * throw `user is Inactive`;
             * if(user.password !== await Hashing(argument.password) ) 
             * throw `credentials are invalid`;
             * const [refresh,access]= await generateTokens(SECRETKEYS,user);
             * user.token = refresh;
             * user.isInSession = true;
             * updateUser( user );
             * return {token:{refresh,access},user}
             * */ 
            argument;
            throw `Not Implemented`;
        } catch (error:any) {
            throw new Error(error)
        }
    }
    public dashboard = async (argument:UserDto) => {
        try {
            /**
             * validate(argument)
             * const user = await getUserByUserName( arguments.userName );
             * if(!user)
             * throw `user Not Found`;
             * if(!user.isActive)
             * throw `user is Inactive`;
             * const role = await getRoleId( user );
             * if(roleId !== argument.roleId)
             * throw `unauthorized`;
             * if(!await validate(user.token))
             * throw `unauthorized`;
             * return user;
             * */ 
            argument;
            throw `Not Implemented`;
        } catch (error:any) {
            throw new Error(error)
        }
    }
}

new UserController();