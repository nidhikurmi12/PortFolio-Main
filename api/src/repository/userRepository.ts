
import User from './../models/usermodel';
class Userepository{


    async getUser(email:string){
       try {
         const user= await User.findOne({email})
         return user
       } catch (error) {
        console.log(error);
        
       }
    }
}


export default Userepository