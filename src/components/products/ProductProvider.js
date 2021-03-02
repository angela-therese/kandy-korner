import React, { useState, createContext } from "react"

// The context is imported and used by individual components that need data
export const ProductContext = createContext()

// This component establishes what data can be used by other components (props).
export const ProductProvider = (props) => {
//defines the state (customers) and the function (setCustomers) that will define useState, which holds the array
//cannot modify "customers" below directly ourselves, need to use the function setCustomers named in the brackets;its job is to change the value of "animals"
    const [products, setProducts] = useState([])

    const getProducts = () => {
        return fetch("http://localhost:8080/products")
        .then(res => res.json())
        .then(setProducts)
    }

    const addProduct = ProductObj => {
        return fetch("http://localhost:8080/products", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(ProductObj)
        })
        .then(getProducts)
    }

    /*
        You return a context provider which has the
        `customers` state, `getCustomers` function,
        and the `addCustomer` function as keys. This
        allows any child elements to access them.
    */
    return (
        <ProductContext.Provider value={{
            products, getProducts, addProduct
        }}>
            {props.children}
        </ProductContext.Provider>
    )
}