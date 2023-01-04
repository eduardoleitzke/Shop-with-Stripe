import { GetServerSideProps } from "next";
import Image from "next/image";
import Link from "next/link";
import Stripe from "stripe";
import { stripe } from "../lib/stripe";
import { ImageContainer, SucessContainer, AllImagesContainer } from "../styles/pages/sucess";

interface SucessProps {
    customerName: string,
    product: string []
}

export default function Sucess({customerName, product}:SucessProps ){
    console.log(product)
    return (
        <SucessContainer>
            <h1>Compra efetuada!</h1>
            <AllImagesContainer>
                {product.map((image,index)=>{
                    return (
                    <ImageContainer css={{distance: `${index}rem`}} key={String(new Date().getTime())}>
                        <Image src={image} width={110} height={100} alt ='' />
                    </ImageContainer>  )
                })}
            </AllImagesContainer>

            <p>
                Uhull <strong>{customerName}</strong>, suas <strong>camisas</strong> foram compradas com sucesso!
            </p>

            <Link href="/">Voltar ao catálogo</Link>
        </SucessContainer>
    )

}

export const getServerSideProps: GetServerSideProps = async ({query}) => {

    if(!query.session_id){
        return {
            redirect:{
                destination: '/',
                permanent: false
            }
        }
    }
    const sessionId = String(query.session_id)

    const session: any = await stripe.checkout.sessions.retrieve(sessionId, {
        expand: ['line_items', 'line_items.data.price.product']
    })
    
    const customerName = session.customer_details.name;
    const product = session.line_items.data[0].price.product as Stripe.Product
    // console.log(session.line_items.data.price.product.images)
    return{
        props:{
            customerName,
            product:session.line_items.data.map( (element:any )=>{
                return element.price.product.images[0]
            }) 
        }
    }
}