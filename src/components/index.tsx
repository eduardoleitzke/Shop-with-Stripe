import * as Dialog from '@radix-ui/react-dialog';
import { CartContent, ImageContainer, ItensInfo,ItensInfoTexts,ItensDetails } from '../styles/components/cart';
import Image from 'next/image';
import { useContext, useEffect, useState } from 'react';
import { ProductsContex } from '../contexts/ProductContex';
import axios from 'axios';

export default function Cart(){
    const {products,removeProduct} = useContext(ProductsContex)
    const [total, setTotal] = useState(0)
    function handleRemoveProducOfCart(cartId:string){
        removeProduct(cartId)
    }
    useEffect(()=>{
        if(products.length > 0){
            const totalValue = products.reduce(
                (acc, product) => {
                    acc.total += Number(product.price)
                  return acc
                },
            
                {
                  total: 0,
                },
              )
              setTotal(totalValue.total)
        }
        else{
            setTotal(0)
        }
    }, [setTotal, products])
   
    const allPricesId = products.map(product =>{
        return product.priceId
    })
 
    async function handleBuyProduct(){
        try {
            const response = await axios.post('/api/checkout', {
                priceIdList: allPricesId
            })

            const {checkoutUrl} = response.data;
            window.location.href = checkoutUrl
        } catch (error) {
            //conectar com uma ferramenta de observalidade (Datadog / Sentry)
            alert('Falha ao redirecionar ao checkout!')
        }
   } 

    return (
        <Dialog.Portal>
            <CartContent>
                <div>
                <Dialog.Title>Sacola de compras</Dialog.Title>
                { products.length > 0 ? products.map((product, index) =>{
                    return (
                        <ItensInfo key={String(product.id+index)}>
                            <ImageContainer>
                                <Image src={product.imageUrl} width={100} height={90} alt= '' />
                            </ImageContainer>
                            <ItensInfoTexts>
                                <div>
                                    <p>{product.name}</p>
                                    <span>{new Intl.NumberFormat('pt-BR',{
                            style: 'currency',
                            currency: 'BRL',
                            }).format(Number(product.price))}</span>
                                </div>
                                <button onClick={()=>handleRemoveProducOfCart(product.cartId)}>Remover</button>
                            </ItensInfoTexts>
                         </ItensInfo>
                    )
                })
                : <h2>vazio</h2>
             }
                </div>
                <ItensDetails>
                    <div>
                        <p>Quantidade</p>
                        <p>{products.length} itens</p>
                    </div>
                    <div>
                        <p><strong>Valor total</strong></p>
                        <p><strong>{new Intl.NumberFormat('pt-BR',{
                            style: 'currency',
                            currency: 'BRL',
                            }).format(total)}
                        </strong></p>
                    </div>
                    
                    <button onClick={handleBuyProduct}>Finalizar compra</button>
                </ItensDetails>
                
            </CartContent>
         </Dialog.Portal>
    )
}