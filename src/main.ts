import Model,{PermissionDto,UserDto,RoleDto} from './Model';

import {addPermission,getPermission,updatePermission,deletePermission} from './ArrayTypeReposotory/Permission.reposotory';
import {addRole,getRole,updateRole,deleteRole} from './ArrayTypeReposotory/Role.reposotory';
import {addUser,getUser,updateUser,deleteUser} from './ArrayTypeReposotory/User.reposotory';

const main = async ()=>{
    const permission = new Model.Permision(addPermission,getPermission,updatePermission,deletePermission);
    const user = new Model.User(addUser,getUser,updateUser,deleteUser);
    const role = new Model.Role(addRole, getRole, updateRole, deleteRole);

    user.addAUser
    user.getUser
    user.deleteUser
    user.updateUser

    role.addRole
    role.getRole
    role.updateRole
    role.deleteRole

    permission.addPermission
    permission.getPermission
    permission.updatePermission
    permission.deletePermission

    console.log(`main Done`);
}

main()