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

type PermissionDto = {
    permissionId   : number,
    permissionName : string
}
  
const addPermission = async (permission:PermissionDto):Promise<PermissionDto> => {
    permissionList.push(permission);
    return permission;
}
const getPermission = async (permissionId: number):Promise<PermissionDto> => {
    try {
        return permissionList.filter(permission => permission.permissionId === permissionId)[0]
    } catch (error) {
        throw `permission Not Found`
    }
}
const updatePermission = async (permission: PermissionDto):Promise<PermissionDto> => {
    try {
        return permission;
    } catch (error) {
        throw `permission Not Found`
    }
}
const deletePermission = async (permissionId : number):Promise<PermissionDto> => { return permissionList.filter(permission => permissionId === permission.permissionId)[0] }

export { addPermission ,getPermission ,updatePermission ,deletePermission }



