import Model,{UserDto,UserModel} from '../Model';
import  RoleRepo from '../ArrayTypeReposotory/Role.reposotory'

class AdminController
{
    role
    constructor(){
        this.role = new Model.Role( new RoleRepo );
    }
    public signin  =  async () => {}
    public login  =  async () => {}
    public dashboard  =  async () => {}
    
}
export default AdminController
;