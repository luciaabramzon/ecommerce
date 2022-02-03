import React, { useEffect, useState } from 'react';
import { Task } from './promise';

export const useProducts = () => {
    const [products,setProducts]= useState([])
    const [loading,setLoading]=useState(true)

    const getProducts= async () => {
        try{
            const result= await Task;
            setProducts(result)
        } catch (error){
            console.log(error)
        }finally{
            setLoading(false); 
            console.log("final")
        }
    }
    
    useEffect(()=>{
        getProducts()
    },[])


  return {
        products,
  };
};

