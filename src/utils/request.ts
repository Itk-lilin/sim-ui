import axios from "axios";

const request = axios.create({
    baseURL: "/itkapi/v1",
    timeout: 8000
})

//添加拦截器
//请求拦截
request.interceptors.request.use((config)=>{
    // console.log(config)
    return config
},(error)=>{
    return Promise.reject(error)
})

//相应拦截

request.interceptors.response.use((response)=>{
    return response
},(error)=>{
    return Promise.reject(error)
})

export default request