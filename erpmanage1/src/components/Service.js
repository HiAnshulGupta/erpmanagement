import axios from "axios";


 const API_URl="http:localhost:8080/";
export const  Addprod = async (data) =>{
    console.log(data)
       return await axios.post("http:localhost:8080/register",data)

}

export const getuser= async()=>{
    try{
        return await axios.get(API_URl);
    }catch(error){
        console.log("error while calling api",error.message)
    }
}