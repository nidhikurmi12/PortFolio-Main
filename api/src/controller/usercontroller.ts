import { Request, Response } from "express";
import userservice from "../services/userservice";

const userserv=new userservice()

export const loginController=async(req:Request,res:Response)=>{
 try {
    const {email,password}=req.body
   
    const result=await userserv.getUser(email,password)
 if(result){
    return res.status(200).send({
        result
    })
 }

 } catch (error) {
    console.log(error)
 }

}