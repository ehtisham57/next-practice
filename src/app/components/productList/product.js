"use client"

const Product = ({price,description}) => {
    
  return (
    <div>
    <button onClick={()=>alert(`price of this is ${price}`)}>Click Here</button>    
    <button onClick={()=>alert(`price of this is ${description}`)}>READ DESCRIPTION</button>    

    </div>
  )
}

export default Product
