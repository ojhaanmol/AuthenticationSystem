type RoleDto = {
    roleId      : Number,
    roleName    : String,
    description : String
}

type AddRoleInDatabase      = (role:RoleDto)  => Promise<RoleDto>
type GetRoleFromDatabase    = (roleId:Number) => Promise<RoleDto>
type UpdateRoleInDatabase   = (role:RoleDto)  => Promise<RoleDto>
type DeleteRoleFromDatabase = (roleId:Number) => Promise<RoleDto>

interface RoleModel {
    addRoleinDatabase      : AddRoleInDatabase,
    getRoleFromDatabase    : GetRoleFromDatabase,
    updateRoleInDatabase   : UpdateRoleInDatabase,
    deleteRoleFromDatabase : DeleteRoleFromDatabase
}

class Role implements RoleModel{
    addRoleinDatabase      : AddRoleInDatabase
    getRoleFromDatabase    : GetRoleFromDatabase
    updateRoleInDatabase   : UpdateRoleInDatabase
    deleteRoleFromDatabase : DeleteRoleFromDatabase
    constructor(addRole:AddRoleInDatabase, getRole:GetRoleFromDatabase, updateRole:UpdateRoleInDatabase, deleteRole:DeleteRoleFromDatabase){
        this.addRoleinDatabase      = addRole;
        this.getRoleFromDatabase    = getRole;
        this.updateRoleInDatabase   = updateRole;
        this.deleteRoleFromDatabase = deleteRole;
    }

    public async addRole (role:RoleDto) {
        try {
            return await this.addRoleinDatabase( role );   
        } catch (error) {
            throw error;
        }
    } 
    public async getRole (roleId:Number) {
        try {
            return await this.getRoleFromDatabase( roleId );   
        } catch (error) {
            throw error;
        }
    } 
    public async updateRole (role:RoleDto) {
        try {
            return await this.updateRoleInDatabase( role );   
        } catch (error) {
            throw error;
        }
    } 
    public async deleteRole (roleId:Number) {
        try {
            return await this.deleteRoleFromDatabase( roleId );   
        } catch (error) {
            throw error;
        }
    } 
}

export default Role
export {RoleDto};