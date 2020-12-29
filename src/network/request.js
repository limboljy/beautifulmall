import axios from 'axios'

export function request(config){
    const instance =axios.create({
    baseURL:'http://152.136.185.210:7878/api/m5',
    timeout:1000
    })

    //axios拦截器
    //请求拦截
    axios.interceptors.request.use(config =>{
        return config
    },err => {
        console.log(err);
    })

    return instance(config)
}