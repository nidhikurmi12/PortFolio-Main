import dotenv from "dotenv";

dotenv.config();

const EnvVars= {
  Dbconfig: process.env.DBURL,
  SecKey:process.env.SECKEY
};
export default EnvVars