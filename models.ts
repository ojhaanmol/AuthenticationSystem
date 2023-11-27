const User_model = {
    userId   : 'number',
    name     : 'string',
    userName : 'string',
    password : 'string',
    email    : 'string',
    token    : 'string',
    time     : 'string',
    isActive : 'boolean'
}
// has
const Role_model = {
    roleId      : 'number',
    roleName    : 'string',
    description : 'string'
}
// has
const permission = {
    permissionId   : 'number',
    permissionName : 'string'
}
// access
const geoLocation = {
    locationId : 'number',
    longitude  : 'double',
    latitude   : 'double'
}