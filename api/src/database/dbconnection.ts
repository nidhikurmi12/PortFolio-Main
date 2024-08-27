import mongoose from "mongoose";
import EnvVars from "../config/envconfig";

const connection = async () => {

  try {
    const connect = await mongoose.connect(EnvVars.Dbconfig || "");

    if (connect) {
        console.log(connect.connection.host);
    }
  } catch (error) {
    console.log(error);
  }
};

export { connection };
