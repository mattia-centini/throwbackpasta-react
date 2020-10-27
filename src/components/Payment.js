import React, {useState} from 'react'
import './Payment.css'
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios'
import {toast} from 'react-toastify'


toast.configure();

function Payment() {

    const [product] = useState({
        name: "Pasta Workshop",
        price: 100,
        description: "Ticket valid for 1 person"
    })

    async function handleToken(token){
       const response = axios.post('https://h1r9i.sse.codesandbox.io/checkout', {
            token,
            product
        });
        const {status} =response.data
        if (status === 'success'){
            toast('Success! check email for details',{type: 'success'})
            
        }else{
            toast('Something went wrong',{type: 'error'})
        }
    }

    return (
        <div className="payment">
            <div className="payment__container">
                <h1>{product.name}</h1>
                    <h3>{product.price}zl</h3>
                    <h4>{product.desciption}</h4>
                    <StripeCheckout 
                    stripeKey ='pk_test_51HgsVmJLHwfICe3TCeazJJKdDWM8gvKXJoelNqbYjnfcfs5SfWuAMayJVXvYzWxdIlwEfnNiQtPE4iyfzOhptidh00iFgHpUy2'
                    token={handleToken}
                    amount={product.price * 100}
                    billingAddress
                    shippingAddress
                    name={product.name}
                    />
            </div>
            
        </div>
    )
}

export default Payment 
