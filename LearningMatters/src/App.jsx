import React from 'react'
import AutoIncrementer from './AutoIncrementer'
import Product from './Product'
import SelfDataOrConditionalRendering from './SelfDataOrConditionalRendering'

function App() {
  return (
    <div>
      <div className='text-3xl font-bold underline' >Hello</div>
      <AutoIncrementer />

      <br />

      <Product pName="Zandoo Balm" pPrice="100rs" description={{availableQty:92, Supplier: "K.V Reddy, J.N Sharma"}} ></Product>

      <br></br>

      <SelfDataOrConditionalRendering></SelfDataOrConditionalRendering>
    
    
    </div>

  )
}

export default App