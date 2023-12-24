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

type AddUserInDatabase             = ( user : UserDto ) => Promise<UserDto>
type GetUserFromDatabase           = ( userId : number ) => Promise<UserDto>
type UpdateUserInDatabase          = ( user : UserDto ) => Promise<UserDto>
type DeleteUseFromDatabas          = ( userId : number ) => Promise<UserDto>
type MapUserIdWithRoleIdIndatabase = ( roleId : number , userId : number) => Promise<UserDto>
type GetUserByUserNameService      = ( userName: string) => Promise<UserDto>

interface UserModel {
    addUserInDatabase     : AddUserInDatabase,
    getUserFromDatabase   : GetUserFromDatabase,
    updateUserInDatabase  : UpdateUserInDatabase,
    deleteUseFromDatabase : DeleteUseFromDatabas,
    mapToUserHasRole      : MapUserIdWithRoleIdIndatabase;
    getByUserName         : GetUserByUserNameService
}

class User{

    private user: UserDto = {
        userId      : NaN,
        name        : "",
        userName    : "",
        password    : "",
        email       : "",
        token       : "",
        time        : "",
        isInSession : false,
        isActive    : false
    };

    private addUserService           : AddUserInDatabase;
    private getUserService           : GetUserFromDatabase;
    private updateUserService        : UpdateUserInDatabase;
    private deleteUseService         : DeleteUseFromDatabas;
    private mapUserWithRoleService   : MapUserIdWithRoleIdIndatabase;
    private getUserByUserNameService : GetUserByUserNameService;

    constructor(usersService:UserModel){
        this.addUserService             = usersService.addUserInDatabase;
        this.getUserService             = usersService.getUserFromDatabase;
        this.updateUserService          = usersService.updateUserInDatabase;
        this.deleteUseService           = usersService.deleteUseFromDatabase;
        this.mapUserWithRoleService     = usersService.mapToUserHasRole;
        this.getUserByUserNameService   = usersService.getByUserName;
    }

    public async addAUser(user:UserDto){
        try {
            this.user = await this.addUserService(user);
            return this.user;
        } catch (error) {
            throw error;
        }
    }

    public async getUser(userId:number){
        try {
            this.user =  await this.getUserService(userId);
            return this.user;
        } catch (error) {
            throw error;
        }
    }

    public async updateUser(user:UserDto){
        try {
            this.user =   await this.updateUserService(user);
            return this.user;
        } catch (error) {
            throw error;
        }
    }

    public async deleteUser(userId:number){
        try {
            this.user = await this.deleteUseService(userId);
            return this.user
        } catch (error) {
            throw error;
        }
    }

    public async hasRole(roleId:number){
        try {
            this.user = await this.mapUserWithRoleService(roleId,this.user.userId);
            return this.user
        } catch (error) {
            throw error;
        }
    }

    public async getUserByUserName(userName:string){
        try {
            this.user = await this.getUserByUserNameService(userName)
            return this.user;
        } catch (error) {
            throw error;
        }
    }
}

export default User;
export {UserDto,UserModel}