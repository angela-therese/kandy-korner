import React, { useState, createContext } from "react"

// The context is imported and used by individual components that need data
export const ProductTypeContext = createContext()

// This component establishes what data can be used by other components (props).
export const ProductTypeProvider = (props) => {
//defines the state (customers) and the function (setCustomers) that will define useState, which holds the array
//cannot modify "customers" below directly ourselves, need to use the function setCustomers named in the brackets;its job is to change the value of "animals"
    const [types, setTypes] = useState([])

    const getProductTypes = () => {
        return fetch("http://localhost:8080/types")
        .then(res => res.json())
        .then(setTypes)
    }

    const addProductType = ProductTypeObj => {
        return fetch("http://localhost:8080/types", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(ProductTypeObj)
        })
        .then(getProductTypes)
    }

    /*
        You return a context provider which has the
        `customers` state, `getCustomers` function,
        and the `addCustomer` function as keys. This
        allows any child elements to access them.
    */
    return (
        <ProductTypeContext.Provider value={{
            types, getProductTypes, addProductType
        }}>
            {props.children}
        </ProductTypeContext.Provider>
    )
}