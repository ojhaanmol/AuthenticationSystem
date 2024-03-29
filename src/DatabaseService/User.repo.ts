import { PrismaClient } from '@prisma/client';
import {UserDto,UserModel,RoleIdObject} from '../Model';

const prisma = new PrismaClient();

const defRet = {
    userId: 0,
    name: 'string',
    userName: 'string',
    password: 'string',
    email: 'string',
    token: 'string',
    time: 'string',
    isInSession: false,
    isActive: false
}

class UserRepo implements UserModel{
    addUserInDatabase = async (user:UserDto&RoleIdObject):Promise<UserDto> => {
        try {
            const {name, userName, password, email, token, time, roleId, isActive, isInSession} = user;
            
            await prisma.user.create({
                data:{
                    name, userName, password, email,
                    token : '',
                    time, roleId, isActive, isInSession,
                }
            });
            return user;
        } catch (error) {
            throw error
        } finally {
            await prisma.$disconnect();
        }
    }
    getUserFromDatabase = async (userId: number):Promise<UserDto> => {
        try {
            const user =  await prisma.user.findUnique(
                {
                    where: { userId : userId }
                }
            );
            if(!user) throw `User Not Found`;
            return user;
            // return defRet;
            // throw `\n\ngetUserFromDatabase \n not implementd \n13: ${__filename}`
            // // return userList.filter(user => user.userId === userId)[0]
        } catch (error) {
            throw `User Not Found`
        } finally {
            await prisma.$disconnect();
        }
    }
    updateUserInDatabase = async (user: UserDto):Promise<UserDto> => {
        try {
            return defRet;
            throw `\n\nupdateUserInDatabase \n not implementd \n21: ${__filename}`
            // return user;
        } catch (error) {
            throw `user Not Found`
        }
    }
    deleteUseFromDatabase = async (userId : number):Promise<UserDto> => {
        return defRet;
        throw `\n\ndeleteUseFromDatabase \n not implementd \n28: ${__filename}`
        // return userList.filter(user => userId === user.userId)[0] 
    }
    mapToUserHasRole = async(roleId: number, userId:number):Promise<UserDto> => {
        try {
            return defRet;
            throw `\n\nmapToUserHasRole \n not implementd \n33: ${__filename}`
            // return userList[9]
        } catch (error) {
            throw error
        }
    };
    getByUserName = async (userName:string):Promise<UserDto> => {
        try {
            const user =  await prisma.user.findUnique(
                {
                    where: { userName : userName }
                }
            );
            if(!user) throw `User Not Found`;
            return user;
        } catch (error) {
            throw error;
        } finally {
            await prisma.$disconnect();
        }
    }
}

export default UserRepo