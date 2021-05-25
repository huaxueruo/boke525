import axios from "axios"
import request from "koa/lib/request";
 const service=axios.create({
     baseURL:process.env.VUE_APP_BASE_API+"/api",
     timeout:50000
 })
 service.interceptors.request.use(
     (req)=>{
         let token=localStorage.getItem("token")
         if(token){
             req.headers.token=token;
         }
         return req
     }
 )


 export default service;