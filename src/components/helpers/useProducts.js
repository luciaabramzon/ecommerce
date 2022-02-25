import React, { useEffect, useState } from 'react';
import {collection,getDocs,getFirestore} from 'firebase/firestore'

 export const useProducts = () => {
    const [products,setProducts]= useState([])
    const [loading,setLoading]=useState(true)

    useEffect(()=>{
        const db= getFirestore();
        const itemsCollection= collection(db,"items")
        
        getDocs(itemsCollection).then((snapshot)=>{
            setProducts(snapshot.docs.map((doc)=>({
               ...doc.data(),
               id:doc.id,
            })))
        })
        },[])
         
  return {
        products,
  };
}; 



