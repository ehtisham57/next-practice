import Link from "next/link"
import Product from "./product"


async function Products(){
let data =await fetch("https://dummyjson.com/products")
    data = await data.json()
    return data.products
    
}

const page = async () => {
    let products =await Products()
    // console.log(products)
  return (
    <div>
    <h1>Product List</h1>
    {
        products.map((item)=>(
            // console.log(item.title)
            <div>
            <h3>Name : {item.title}</h3>
            <h2>Name : {item.id}</h2>
            <p>{item.description}</p>
            <img src={item.thumbnail} alt="img" />
            <Product price={item.price} description={item.description}/>
            </div>
        ))
    }
      <Link href="/">Go to Home</Link>
    </div>
  )
}

export default page
