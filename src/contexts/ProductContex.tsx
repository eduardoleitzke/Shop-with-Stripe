import { Coffee } from "phosphor-react";
import { createContext, ReactNode, useEffect, useState } from "react";
interface ProductType{
                id: string
                priceId: string
                name: string
                imageUrl: string,
                price: string
                description: string
                cartId:string

    }
interface ProductsType{
    data:ProductType[]
}
interface  ProductsContexType{
    products: ProductType[]
    addProducts: (data:ProductType)=> void
    removeProduct: (id:string) => void
}   
interface ProductContextProvider {
    children: ReactNode
}  
export const ProductsContex = createContext({ } as ProductsContexType)

export function ProductsContextProvider({children}:ProductContextProvider){
    const [products, setProducts] = useState<ProductType[]>([])
    function generateId(){
        return  String(Math.ceil(Math.random() * 1000000))
    }
    function addProducts(data: ProductType){
        const  {description, id, imageUrl,name,price,priceId} =  data
        const newProduct = {cartId:generateId(), description, id, imageUrl,name,price,priceId}
        setProducts([...products, newProduct])
    }   

    function removeProduct(id:string) {
        setProducts(
            products.filter((product)=>{
                return product.cartId !== id
            })
        )
    }

    return (
        <ProductsContex.Provider
        value={{products, addProducts, removeProduct}}
        >
            {children}
        </ProductsContex.Provider>
    )
}