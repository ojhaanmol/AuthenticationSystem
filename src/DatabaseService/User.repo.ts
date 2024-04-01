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
        } catch (error) {
            throw error
        } finally {
            await prisma.$disconnect();
        }
    }
    updateUserInDatabase = async (user: UserDto):Promise<UserDto> => {
        try {
            return defRet;
        } catch (error) {
            throw `user Not Found`
        } finally {
            await prisma.$disconnect();
        }
    }
    deleteUseFromDatabase = async (userId : number):Promise<UserDto> => {
        return defRet;
    }
    mapToUserHasRole = async(roleId: number, userId: number):Promise<UserDto> => {
        try {
            return defRet;
        } catch (error) {
            throw error
        } finally {
            await prisma.$disconnect();
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