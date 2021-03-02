import React, { useContext, useEffect } from "react"
import { ProductContext } from "./ProductProvider"
import { ProductCard } from "./Product"
import "./Product.css"

export const ProductList = () => {
  // This state changes when `getlocations()` is invoked below

  const { products, getProducts } = useContext(ProductContext)
  
 

  //useEffect - reach out to the world for something
  //function runs when the value in the array changes
  useEffect(() => {
    console.log("ProductList: useEffect - getproducts")
    getProducts()

  }, [])
  console.log(products)

  
  return (
    <div className="products">
        <h3 className="product__heading">Kandy Korner Products</h3>
      {console.log("ProductList: Render", products)}
     
     <section className="product__cards">
      {
        products.map(product => {
          return <ProductCard key={product.id} product={product} />
        })
      }
      </section>
    </div>
  )


}

