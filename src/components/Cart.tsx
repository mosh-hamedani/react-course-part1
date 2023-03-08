import React from 'react'

interface Props { 
  cartItems: string[];
  onClear: () => void;
}

const Cart = ({ cartItems, onClear }: Props) => {
  return (
    <>
    <div>Cart</div>
    <ul>
      {cartItems.map(item => <li key={item}>{item}</li>)}
    </ul>
    <button onClick={onClear}>Clear</button>
    </>
  )
}

export default Cart