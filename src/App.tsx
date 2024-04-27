//import React from 'react'
import  Header  from './components/Header'
import Guitar from './components/Guitar'
import { useCart } from './hooks/useCart'
 
function App() {


    const {cart, removeFromCart, increaseCart, decreaseCart, clearCart, addToCart, data, isEmpty, totalPrice} = useCart()

    

    return (
    <>
<Header
    cart={cart}
    removeFromCart={removeFromCart}
    increaseCart={increaseCart}
    decreaseCart={decreaseCart}
    clearCart={clearCart}
    isEmpty={isEmpty}
    totalPrice={totalPrice}
/>
<main className="container-xl mt-5">
    <h2 className="text-center">Nuestra Colección</h2>

    <div className="row mt-5">
        {data.map((guitar) => (
            <Guitar
                key={guitar.id}
                guitar={guitar}
                addToCart={addToCart}
            />
        )) }
    </div>
</main>


<footer className="bg-dark mt-5 py-5">
    <div className="container-xl">
        <p className="text-white text-center fs-4 mt-4 m-md-0">Liano</p>
    </div>
</footer>
</>

  )
}

export default App