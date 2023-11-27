type UserserDto = {
    userId   : Number,
    name     : string,
    userName : string,
    password : string,
    email    : string,
    token    : string,
    time     : string,
    isActive : Boolean
}

type AddUserInDatabase    = ( user : UserserDto ) => Promise<UserserDto>
type GetUserFromDatabase  = ( userId : Number ) => Promise<UserserDto>
type UpdateUserInDatabase = ( user : UserserDto ) => Promise<UserserDto>
type DeleteUseFromDatabas = ( userId : Number ) => Promise<UserserDto>

interface UserModel {
    addUserInDatabase     : AddUserInDatabase,
    getUserFromDatabase   : GetUserFromDatabase,
    updateUserInDatabase  : UpdateUserInDatabase,
    deleteUseFromDatabase : DeleteUseFromDatabas
}

class User implements UserModel{
    addUserInDatabase: AddUserInDatabase;
    getUserFromDatabase: GetUserFromDatabase;
    updateUserInDatabase: UpdateUserInDatabase;
    deleteUseFromDatabase: DeleteUseFromDatabas;

    constructor(addUser : AddUserInDatabase, getUser : GetUserFromDatabase, updateUser : UpdateUserInDatabase, deleteUser : DeleteUseFromDatabas){
        this.addUserInDatabase = addUser;
        this.getUserFromDatabase = getUser;
        this.updateUserInDatabase = updateUser;
        this.deleteUseFromDatabase = deleteUser;
    }

    public async addAUser(user:UserserDto){
        try {
            return await this.addUserInDatabase(user);
        } catch (error) {
            throw error
        }
    }

    public async getUser(userId:number){
        try {
            return await this.getUserFromDatabase(userId)
        } catch (error) {
            throw error
        }
    }

    public async updateUser(user:UserserDto){
        try {
            return await this.updateUserInDatabase(user)
        } catch (error) {
            throw error
        }
    }

    public async deleteUser(userId:Number){
        try {
            return await this.deleteUseFromDatabase(userId)
        } catch (error) {
            throw error
        }
    }
}

export default User;
export {UserserDto}