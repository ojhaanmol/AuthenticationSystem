import {PermissionDto,PermissionModel} from '../Model'

const permissionList: PermissionDto[] = [
    {
      permissionId: 1,
      permissionName: 'Read',
    },
    {
      permissionId: 2,
      permissionName: 'Write',
    },
    {
      permissionId: 3,
      permissionName: 'Delete',
    },
    {
      permissionId: 4,
      permissionName: 'Create',
    },
    {
      permissionId: 5,
      permissionName: 'Execute',
    },
];

class PermissionRepo implements PermissionModel{
  addPermissionToDatabase = async (permission:PermissionDto):Promise<PermissionDto> => {
    permissionList.push(permission);
    return permission;
}
getPermissionFromDatabase = async (permissionId: number):Promise<PermissionDto> => {
    try {
        return permissionList.filter(permission => permission.permissionId === permissionId)[0]
    } catch (error) {
        throw `permission Not Found`
    }
}
updatePermissionToDatabase = async (permission: PermissionDto):Promise<PermissionDto> => {
    try {
        return permission;
    } catch (error) {
        throw `permission Not Found`
    }
}
deletePermissionFromDatabase = async (permissionId : number):Promise<PermissionDto> => { return permissionList.filter(permission => permissionId === permission.permissionId)[0] }

}
export default PermissionRepo;



