import {productosApi} from './products'

export const Task= new Promise ((resolve,reject)=>{
    setTimeout(()=>{
        resolve(productosApi)
    }, 2000);
})