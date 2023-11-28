const userList = [
    { userId: 1, name: "User1", userName: "user1", password: "pass1", email: "user1@example.com", token: "token1", time: "2023-11-27T12:00:00", isInSession: true, isActive: true },
    { userId: 2, name: "User2", userName: "user2", password: "pass2", email: "user2@example.com", token: "token2", time: "2023-11-27T13:00:00", isInSession: false, isActive: true },
    { userId: 3, name: "User3", userName: "user3", password: "pass3", email: "user3@example.com", token: "token3", time: "2023-11-27T14:00:00", isInSession: true, isActive: false },
    { userId: 4, name: "User4", userName: "user4", password: "pass4", email: "user4@example.com", token: "token4", time: "2023-11-27T15:00:00", isInSession: false, isActive: true },
    { userId: 5, name: "User5", userName: "user5", password: "pass5", email: "user5@example.com", token: "token5", time: "2023-11-27T16:00:00", isInSession: true, isActive: true },
    { userId: 6, name: "User6", userName: "user6", password: "pass6", email: "user6@example.com", token: "token6", time: "2023-11-27T17:00:00", isInSession: false, isActive: false },
    { userId: 7, name: "User7", userName: "user7", password: "pass7", email: "user7@example.com", token: "token7", time: "2023-11-27T18:00:00", isInSession: true, isActive: true },
    { userId: 8, name: "User8", userName: "user8", password: "pass8", email: "user8@example.com", token: "token8", time: "2023-11-27T19:00:00", isInSession: false, isActive: true },
    { userId: 9, name: "User9", userName: "user9", password: "pass9", email: "user9@example.com", token: "token9", time: "2023-11-27T20:00:00", isInSession: true, isActive: false },
    { userId: 10, name: "User10", userName: "user10", password: "pass10", email: "user10@example.com", token: "token10", time: "2023-11-27T21:00:00", isInSession: false, isActive: true }
];

type UserserDto = {
    userId      : number,
    name        : string,
    userName    : string,
    password    : string,
    email       : string,
    token       : string,
    time        : string,
    isInSession : boolean,
    isActive    : boolean
}
  
const addUser = async (user:UserserDto):Promise<UserserDto> => {
    userList.push(user);
    return user;
}
const getUser = async (userId: number):Promise<UserserDto> => {
    try {
        return userList.filter(user => user.userId === userId)[0]
    } catch (error) {
        throw `User Not Found`
    }
}
const updateUser = async (user: UserserDto):Promise<UserserDto> => {
    try {
        return user;
    } catch (error) {
        throw `user Not Found`
    }
}
const deleteUser = async (userId : number):Promise<UserserDto> => { return userList.filter(user => userId === user.userId)[0] }

export { addUser ,getUser ,updateUser ,deleteUser }



