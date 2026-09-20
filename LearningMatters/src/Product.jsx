import React from 'react'

function Product({ pName, pPrice, description }) { // it must be within {} otherwise use props
  return (
    <div>
      This is Product
      <br />
      Name: <b>{pName}</b>
      <br />
      Price: <b>{pPrice}</b>

        <br></br>
        Available Qty: {description.availableQty}
        <br></br>
        Supplier: {description.Supplier}


    </div>
  )
}

export default Product