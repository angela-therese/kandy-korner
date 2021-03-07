import React, { useContext, useEffect } from "react"
import { ProductContext } from "./ProductProvider"
import { ProductCard } from "./Product"
import { ProductTypeContext } from "../ProductTypeProvider"
import "./Product.css"

export const ProductList = () => {
  // This state changes when `getlocations()` is invoked below

  const { products, getProducts } = useContext(ProductContext)
//   const { productTypes, getProductTypes } = useContext(ProductTypeContext)
  
 

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
            // const productType = productTypes.find(p => p.id === product.productTypeId)

          return <ProductCard key={product.id} product={product} 
                                    // productType={productType}
          />
        })
      }
      </section>
    </div>
  )


}

