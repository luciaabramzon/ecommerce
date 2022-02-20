import React, { useEffect, useMemo, useState } from 'react';
import { Task } from './promise';
import {collection,doc,getDocs,getFirestore} from 'firebase/firestore'

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
        }
    }
    
/*     useEffect(()=>{
        getProducts()
    },[]) */



    useEffect(()=>{
        const db= getFirestore();
        const itemsCollection= collection(db,"items")
        
        getDocs(itemsCollection).then((snapshot)=>{
            setProducts(snapshot.docs.map((doc)=>({
                id:doc.id,...doc.data()
            })))
        })
        },[])
         
  return {
        products,
  };
}; 



