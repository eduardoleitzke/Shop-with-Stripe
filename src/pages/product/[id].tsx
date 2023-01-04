import { ImageContainer, ProductContainer, ProductDetails } from "../../styles/pages/product"
import Image from "next/image"
import { GetStaticPaths, GetStaticProps } from "next"
import { Params } from "next/dist/shared/lib/router/utils/route-matcher"
import { stripe } from "../../lib/stripe"
import { useRouter } from "next/router"
import axios from "axios"
import { useState, useContext } from "react"
import { ProductsContex } from "../../contexts/ProductContex"
interface ProductProps{
    product: {
        id: string;
        name: string;
        imageUrl: string;
        price: string
        description: string
        priceId: string
        cartId: string
      }
} 

export default function Product({product}:ProductProps){
    const {addProducts, products} = useContext(ProductsContex)
    const [isCreatingOrder, setIsCreatingOrder] = useState(false)
    const {isFallback} = useRouter()

    function handleAddProductToCart(){
        addProducts(product)
    }

    let formatedPrice;
    if(product){
        formatedPrice = new Intl.NumberFormat('pt-BR',{
            style: 'currency',
            currency: 'BRL',
            }).format(Number(product.price))
    }
    
    if(isFallback){
        return <h1>LOADING...</h1>
    }

 

    return (
        <ProductContainer>
            <ImageContainer>
               <Image src={product.imageUrl} width={520} height={480} alt=''/>
            </ImageContainer>
            <ProductDetails>
                <h1>{product.name}</h1>
                <span>{formatedPrice}</span>

                <p>{product.description}</p>
                <button disabled={isCreatingOrder} onClick={handleAddProductToCart}>
                    Colocar na sacola
                </button>
            </ProductDetails>
        </ProductContainer>
    )
}

export const getStaticPaths: GetStaticPaths = async () =>{
    
    return {
        paths: [
            {params: {id:'prod_N513B8YSlsXIaZ'}}
        ],
        fallback: true
    }
}

export const getStaticProps: GetStaticProps = async ({params}:Params) =>{
    const productId = params.id;

    const product = await stripe.products.retrieve(productId, {
        expand: ['default_price']
    })
    const price = product.default_price as any
    return {
        props: {
            product:{
                id: product.id,
                name: product.name,
                imageUrl: product.images[0],
                price: price.unit_amount/100,
                description: product.description,
                priceId: price.id
            }
        },
        revalidate: 60 * 60 * 1,
    }
}