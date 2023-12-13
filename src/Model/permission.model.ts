type PermissionDto = {
    permissionId   : number,
    permissionName : string
}

type AddPermissionToDatabase      = ( permission:PermissionDto) => Promise<PermissionDto>
type GetPermissionFromDatabase    = ( permissionId:number ) => Promise<PermissionDto>
type UpdatePermissionToDatabase   = ( permission:PermissionDto) => Promise<PermissionDto>
type DeletePermissionFromDatabase = ( permissionId:number ) => Promise<PermissionDto>

interface PermissionModel {
    addPermissionToDatabase      : AddPermissionToDatabase,
    getPermissionFromDatabase    : GetPermissionFromDatabase,
    updatePermissionToDatabase   : UpdatePermissionToDatabase,
    deletePermissionFromDatabase : DeletePermissionFromDatabase
}

class Permission {
    private addPermissionService    : AddPermissionToDatabase
    private getPermissionService    : GetPermissionFromDatabase
    private updatePermissionService : UpdatePermissionToDatabase
    private deletePermissionService : DeletePermissionFromDatabase
    constructor(permissionServices : PermissionModel){
        this.addPermissionService    = permissionServices.addPermissionToDatabase,
        this.getPermissionService    = permissionServices.getPermissionFromDatabase,
        this.updatePermissionService = permissionServices.updatePermissionToDatabase,
        this.deletePermissionService = permissionServices.deletePermissionFromDatabase
    }
    public async addPermission (permission:PermissionDto){
        try {
            return await this.addPermissionService( permission );   
        } catch (error) {
            throw error
        }
    }
    public async getPermission (permissionId:number){
        try {
            return await this.getPermissionService( permissionId );   
        } catch (error) {
            throw error
        }
    }
    public async updatePermission (permission:PermissionDto){
        try {
            return await this.updatePermissionService(  permission );   
        } catch (error) {
            throw error
        }
    }
    public async deletePermission (permissionId:number){
        try {
            return await this.deletePermissionService( permissionId );   
        } catch (error) {
            throw error
        }
    }
}

export default Permission;
export {PermissionDto,PermissionModel}