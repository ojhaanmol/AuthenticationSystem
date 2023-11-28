type UserDto = {
    userId      : number,
    name        : string,
    userName    : string,
    password    : string,
    email       : string,
    token       : string,
    time        : string,
    isInSession : boolean,
    isActive    : boolean
}

type AddUserInDatabase    = ( user : UserDto ) => Promise<UserDto>
type GetUserFromDatabase  = ( userId : number ) => Promise<UserDto>
type UpdateUserInDatabase = ( user : UserDto ) => Promise<UserDto>
type DeleteUseFromDatabas = ( userId : number ) => Promise<UserDto>

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

    public async addAUser(user:UserDto){
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

    public async updateUser(user:UserDto){
        try {
            return await this.updateUserInDatabase(user)
        } catch (error) {
            throw error
        }
    }

    public async deleteUser(userId:number){
        try {
            return await this.deleteUseFromDatabase(userId)
        } catch (error) {
            throw error
        }
    }
}

export default User;
export {UserDto}