import Model,{PermissionDto,UserDto,RoleDto} from './Model';

import PermissionRepo from './ArrayTypeReposotory/Permission.reposotory';
import RoleRepo from './ArrayTypeReposotory/Role.reposotory';
import UserRepo from './ArrayTypeReposotory/User.reposotory';

const main = async ()=>{
    const permission = new Model.Permision(new PermissionRepo());
    const user = new Model.User( new UserRepo());
    const role = new Model.Role( new RoleRepo() );

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

    /* */ 

    console.log(`main Done`);
}

main()