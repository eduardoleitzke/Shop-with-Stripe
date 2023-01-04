
import { NextApiRequest, NextApiResponse } from "next";
import { stripe } from "../../lib/stripe";

export default async function handler(req:NextApiRequest, res: NextApiResponse){

    const {priceIdList} = req.body
    if(req.method !== 'POST'){
        return res.status(405)
    }

    if(!priceIdList[0]){
        return res.status(404).json({
            error: 'Price not found'
        })
    }


    const sucessUrl = `${process.env.NEXT_URL}/sucess?session_id={CHECKOUT_SESSION_ID}`
    const cancelUrl = `${process.env.NEXT_URL}`

    const checkoutSession = await stripe.checkout.sessions.create({
        success_url: sucessUrl,
        cancel_url: cancelUrl,
        mode: 'payment',
        line_items: priceIdList.map((priceId:string)=>{
            return  {
                price: priceId,
                quantity: 1,
            }
        }),
    })
    
    return res.status(201).json({
        checkoutUrl: checkoutSession.url
    })

}