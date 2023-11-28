type RoleDto = {
    roleId      : number,
    roleName    : string,
    description : string
}

const roleList: RoleDto[] = [
    {
      roleId: 1,
      roleName: 'Admin',
      description: 'Administrator role with full access.',
    },
    {
      roleId: 2,
      roleName: 'Manager',
      description: 'Managerial role with certain privileges.',
    },
    {
      roleId: 3,
      roleName: 'User',
      description: 'Standard user with basic access.',
    },
    {
      roleId: 4,
      roleName: 'Guest',
      description: 'Guest user with limited access.',
    },
    {
      roleId: 5,
      roleName: 'Moderator',
      description: 'Role for moderating activities.',
    },
];

const addRole = async (role:RoleDto):Promise<RoleDto> => {
    roleList.push(role);
    return role;
}
const getRole = async (roleId: number):Promise<RoleDto> => {
    try {
        return roleList.filter(role => role.roleId === roleId)[0]
    } catch (error) {
        throw `role Not Found`
    }
}
const updateRole = async (role: RoleDto):Promise<RoleDto> => {
    try {
        return role;
    } catch (error) {
        throw `role Not Found`
    }
}
const deleteRole = async (roleId : number):Promise<RoleDto> => { return roleList.filter(role => roleId === role.roleId)[0] }

export { addRole ,getRole ,updateRole ,deleteRole }
