type RoleDto = {
    roleId      : number,
    roleName    : string,
    description : string
}

type AddRoleInDatabase      = (role:RoleDto)  => Promise<RoleDto>
type GetRoleFromDatabase    = (roleId:number) => Promise<RoleDto>
type UpdateRoleInDatabase   = (role:RoleDto)  => Promise<RoleDto>
type DeleteRoleFromDatabase = (roleId:number) => Promise<RoleDto>

interface RoleModel {
    addRoleinDatabase      : AddRoleInDatabase,
    getRoleFromDatabase    : GetRoleFromDatabase,
    updateRoleInDatabase   : UpdateRoleInDatabase,
    deleteRoleFromDatabase : DeleteRoleFromDatabase
}

class Role {
    private addRoleService    :AddRoleInDatabase      
    private getRoleService    :GetRoleFromDatabase    
    private updateRoleService :UpdateRoleInDatabase   
    private deleteRoleService :DeleteRoleFromDatabase 
    constructor(role : RoleModel){
        this.addRoleService    = role.addRoleinDatabase;
        this.getRoleService    = role.getRoleFromDatabase;
        this.updateRoleService = role.updateRoleInDatabase;
        this.deleteRoleService = role.deleteRoleFromDatabase;
    }

    public async addRole (role:RoleDto) {
        try {
            return await this.addRoleService( role );   
        } catch (error) {
            throw error;
        }
    } 
    public async getRole (roleId:number) {
        try {
            return await this.getRoleService( roleId );   
        } catch (error) {
            throw error;
        }
    } 
    public async updateRole (role:RoleDto) {
        try {
            return await this.updateRoleService( role );   
        } catch (error) {
            throw error;
        }
    } 
    public async deleteRole (roleId:number) {
        try {
            return await this.deleteRoleService( roleId );   
        } catch (error) {
            throw error;
        }
    } 
}

export default Role
export {RoleDto,RoleModel};
