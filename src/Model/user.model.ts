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

class User{
    private addUserService: AddUserInDatabase;
    private getUserService: GetUserFromDatabase;
    private updateUserService: UpdateUserInDatabase;
    private deleteUseService: DeleteUseFromDatabas;

    constructor(usersService:UserModel){
        this.addUserService    = usersService.addUserInDatabase;
        this.getUserService    = usersService.getUserFromDatabase;
        this.updateUserService = usersService.updateUserInDatabase;
        this.deleteUseService  = usersService.deleteUseFromDatabase;
    }

    public async addAUser(user:UserDto){
        try {
            return await this.addUserService(user);
        } catch (error) {
            throw error
        }
    }

    public async getUser(userId:number){
        try {
            return await this.getUserService(userId)
        } catch (error) {
            throw error
        }
    }

    public async updateUser(user:UserDto){
        try {
            return await this.updateUserService(user)
        } catch (error) {
            throw error
        }
    }

    public async deleteUser(userId:number){
        try {
            return await this.deleteUseService(userId)
        } catch (error) {
            throw error
        }
    }
}

export default User;
export {UserDto,UserModel}