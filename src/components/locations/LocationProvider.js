import React, { useState, createContext } from "react"

// The context is imported and used by individual components that need data
export const LocationContext = createContext()

// This component establishes what data can be used by other components (props).
export const LocationProvider = (props) => {
//defines the state (customers) and the function (setCustomers) that will define useState, which holds the array
//cannot modify "customers" below directly ourselves, need to use the function setCustomers named in the brackets;its job is to change the value of "animals"
    const [locations, setLocations] = useState([])

    const getLocations = () => {
        return fetch("http://localhost:8080/Locations")
        .then(res => res.json())
        .then(setLocations)
    }

    const addLocation = LocationObj => {
        return fetch("http://localhost:8080/Locations", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(LocationObj)
        })
        .then(getLocations)
    }

    /*
        You return a context provider which has the
        `customers` state, `getCustomers` function,
        and the `addCustomer` function as keys. This
        allows any child elements to access them.
    */
    return (
        <LocationContext.Provider value={{
            locations, getLocations, addLocation
        }}>
            {props.children}
        </LocationContext.Provider>
    )
}