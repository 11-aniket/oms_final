import React from 'react'
import StripeCheckout from 'react-stripe-checkout'


const Donation = () => {
    const onToken =(token) =>{
        console.log(token);
    }
  return (
    <>
    <img  src="./images/Gallery/donation.jpg"  alt="donation img" className="float-left width-50%  padding-5px" />
    <div className="my-5">
      <h1 className="text-center line-space">We Need Your Help</h1>
      <h3>Lorem ipsum dolor sit amet. Ut iure odio vel esse odio a ipsum quia aut aliquid explicabo aut deserunt rerum. Ut odio esse sed modi enim eum ratione cumque.

Et laboriosam voluptas et maiores voluptatem qui iusto mollitia qui voluptas soluta et consequatur eius.</h3>

<h1 className="text-center line-space">Support Our Solidarity Fund</h1>
      <h3>Lorem ipsum dolor sit amet. Ut iure odio vel esse odio a ipsum quia aut aliquid explicabo aut deserunt rerum. Ut odio esse sed modi enim eum ratione cumque.

Et laboriosam voluptas et maiores voluptatem qui iusto mollitia qui voluptas soluta et consequatur eius.</h3>
    </div>
    <div className='App'>
        <StripeCheckout
        token={onToken}
        name="Orphanage Home Center"
        currency="Inr"
        amount="150000"
        stripeKey="pk_test_51MWEshSE71wpLyxi583K3C6Zc6kUEfdA8W3V5CyrCEhzJOyKRW4sPokOfMmLJQjzYTSIK6wS56DLautYTn0TDdQZ00laGDvHd6"
        />
    </div>
    </>
    
  )
}

export default Donation
