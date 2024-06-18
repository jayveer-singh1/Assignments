import axios from "axios";

let instance= axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    
})

export let getData=async (url)=>{
    let res= await instance.get(url)
    return res.data
}

export let postData=async (url,data)=>{
    let res= await instance.post(url,data)
    return res.data
}