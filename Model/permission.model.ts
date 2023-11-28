type PermissionDto = {
    permissionId   : number,
    permissionName : string
}

type AddPermissionToDatabase      = ( permission:PermissionDto) => Promise<PermissionDto>
type GetPermissionFromDatabase    = ( permissionId:number ) => Promise<PermissionDto>
type UpdatePermissionToDatabase   = ( permission:PermissionDto) => Promise<PermissionDto>
type DeletePermissionFromDatabase = ( permissionId:number ) => Promise<PermissionDto>

interface PermissionModel {
    addPermissionToDatabase      : ( permission:PermissionDto) => Promise<PermissionDto>,
    getPermissionFromDatabase    : GetPermissionFromDatabase,
    updatePermissionToDatabase   : UpdatePermissionToDatabase,
    deletePermissionFromDatabase : DeletePermissionFromDatabase
}

class Permission implements PermissionModel{
    addPermissionToDatabase      : AddPermissionToDatabase
    getPermissionFromDatabase    : GetPermissionFromDatabase
    updatePermissionToDatabase   : UpdatePermissionToDatabase
    deletePermissionFromDatabase : DeletePermissionFromDatabase
    constructor( addPermission : AddPermissionToDatabase, getPermission : GetPermissionFromDatabase, updatePermission : UpdatePermissionToDatabase, deletePermission : DeletePermissionFromDatabase){
        this.addPermissionToDatabase = addPermission,
        this.getPermissionFromDatabase = getPermission,
        this.updatePermissionToDatabase = updatePermission,
        this.deletePermissionFromDatabase = deletePermission
    }
    public async addPermission (permission:PermissionDto){
        try {
            return await this.addPermissionToDatabase( permission );   
        } catch (error) {
            throw error
        }
    }
    public async getPermission (permissionId:number){
        try {
            return await this.getPermissionFromDatabase( permissionId );   
        } catch (error) {
            throw error
        }
    }
    public async updatePermission (permission:PermissionDto){
        try {
            return await this.updatePermissionToDatabase(  permission );   
        } catch (error) {
            throw error
        }
    }
    public async deletePermission (permissionId:number){
        try {
            return await this.deletePermissionFromDatabase( permissionId );   
        } catch (error) {
            throw error
        }
    }
}

export default Permission;
export {PermissionDto}