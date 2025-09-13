import axios from 'axios'
import React, { createContext, useState } from 'react'

export const cartContext = createContext()

export default function CartContext({children}) {


        const [numOfCartItems, setNumOfCartItems] = useState(0)
        const [cartProducts, setcartProducts] = useState(null)
        const [totalCartPrice, setTotalCartPrice] = useState(0)
      

    async function addProductToCart (productId){

    const res = await axios.post('https://ecommerce.routemisr.com/api/v1/cart',{
            productId
        },
        {headers:
            {
                token:localStorage.getItem('token')
            }
        }
    ).then((x)=>{
        setNumOfCartItems(x.data.numOfCartItems)
        setcartProducts(x.data.data.products)
        setTotalCartPrice(x.data.data.totalCartPrice)

        return true
    }).catch((err)=>{
        console.log(err);
        return false
        
    })
    
    return res

     }

    // function addProductToCart(id){
    //     axios.post('https://ecommerce.routemisr.com/api/v1/cart',
    //         {productId:id},

    //         {
    //             headers:{token:localStorage.getItem('token')}
    //         }
    //     ).then((res)=>{
    //         console.log(res);
            
    //     }).catch((err)=>{
    //         console.log(err);
            
    //     })
    // }

     function getUserCart(){
        axios.get('https://ecommerce.routemisr.com/api/v1/cart',
            {headers:
                {token:localStorage.getItem('token')}
         }  ).then((res)=>{
            setNumOfCartItems(res.data.numOfCartItems)
            setcartProducts(res.data.data.products)
            setTotalCartPrice(res.data.data.totalCartPrice)
           
            
          
         }).catch((err)=>{
                console.log(err);
         })

    }

    function updateCount(productId , newCount){
        axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${productId}` ,
            {
                count:newCount
            } ,
            {
                headers:{
                    token : localStorage.getItem('token')
                }
            }
        ).then((res)=>{
            setNumOfCartItems(res.data.numOfCartItems)
            setcartProducts(res.data.data.products)
            setTotalCartPrice(res.data.data.totalCartPrice)
            // console.log(res.data.data.products);
            
        }).catch((err)=>{
            console.log(err);
            
        })
    }
    function deleteCartItem(productId){
        axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${productId}` , {
            headers:{token:localStorage.getItem('token')}
        }
        ).then((res)=>{
            setNumOfCartItems(res.data.numOfCartItems)
            setcartProducts(res.data.data.products)
            setTotalCartPrice(res.data.data.totalCartPrice)
            console.log(res);
            
        }).catch((err)=>{
            console.log(err);
            
        })
    }

   

  return<>
    <cartContext.Provider value={{addProductToCart  , numOfCartItems , setNumOfCartItems , cartProducts , totalCartPrice , setTotalCartPrice , getUserCart , updateCount , deleteCartItem}}>
        {children}
    </cartContext.Provider>
    
  </>
}

