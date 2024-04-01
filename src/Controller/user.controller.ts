import UserRepo from '../DatabaseService/User.repo';
import { generateTokens, generateRefreshToken} from '../jsonWebToken';
import {Request,Response} from 'express';
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
        return 'pass10'
        if (!hashingData) throw `invalid hashing data`;
        return hashingData + '.hashed';
    } catch (error:any) {
        throw new Error(error)
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


    public signin = async(body:Request['body'],header:Request['headers'],param:Request['params'],query:Request['query']) => {
        try {
            const {name,userName,password,email,time} = body;
            const argument:UserDto & RoleIdObject = {
                userId: NaN,
                name,
                userName,
                password,
                email,
                token: "",
                time,
                isInSession: false,
                isActive: true,
                roleId: 0
            };
            
            argument.password = await Hashing(body.password);
            const {userId} = await this.user.addAUser(argument);
            userId
            return await this.user.hasRole(argument.roleId);
        } catch (error:any) {
            throw new Error(error)
        }
    }

    public login = async (body:Request['body'],header:Request['headers'],param:Request['params'],query:Request['query']) => {
        try {
            // validate(argument);
            const user = await this.user.getUserByUserName( body.userName );
            
            if(!user)
            throw `user Not Found`;
            if(!user.isActive)
            throw `user is Inactive`;
            if(user.password !== await Hashing(body.password) ) 
            throw `credentials are invalid`;
            const [access, refresh] = generateTokens(user,SECRETKEYS);
            user.token = refresh;
            user.isInSession = true;
            this.user.updateUser( user );
            return {token:{refresh,access},user}
        } catch (error:any) {
        
            throw new Error(error)
        }
    }
    public refreshToken = async (body:Request['body'],header:Request['headers'],param:Request['params'],query:Request['query']) => {
        try {
            // validate(argument);
            const user = getUserDataFromJWT( body.token );
            validateArgsUser(body,user);
            const userData = await this.user.getUserByUserName(body.userName);
            if(!userData.isActive)`user is inactive`;
            return generateRefreshToken(body,SECRETKEYS);
        } catch (error:any) {
            throw new Error(error);
        }
    }
}

export default UserController;