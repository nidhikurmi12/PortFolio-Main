import EnvVars from "../config/envconfig";
import Userepository from "./../repository/userRepository";
import jwt from "jsonwebtoken";

class userservice {
  userrepo: Userepository;

  constructor() {
    this.userrepo = new Userepository();
  }
  async getUser(email: string, password: string) {
    try {
      const userdetails = await this.userrepo.getUser(email)
      
      if (userdetails) {
        if (userdetails.password === password) {
          const obj = {
            id: userdetails._id,
            fullname: userdetails.fullname,
            email: userdetails.email,
          };
          const jwt = await this.jwtgenrater(obj);
         return { accessToken: jwt, userdetails };
        }
      } else return "user not Fund";
    } catch (error) {
      console.log(error);
    }
  }

  async jwtgenrater(data: any) {
    const genratetoken = await jwt.sign(data, EnvVars.SecKey || "", {
      expiresIn: "7d",
    });
    return genratetoken;
  }
}

export default userservice;
