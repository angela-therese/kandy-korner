
import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { LocationProvider } from "./locations/LocationProvider"
import { LocationList } from "./locations/LocationList"
import { ProductProvider } from "./products/ProductProvider"
import { ProductList } from "./products/ProductList"
import { ProductTypeProvider } from "./ProductTypeProvider"

export const ApplicationViews = () => {
    return (
        <>
            {/* Render the location list when http://localhost:3000/ */}
            <Route exact path="/">
                <Home />
            </Route>

            {/* Render the location list when http://localhost:3000/locations */}
        
            <LocationProvider>
                 <Route exact path="/locations/">
                      <LocationList />
                </Route>
            </LocationProvider>

            <ProductProvider>
                <ProductTypeProvider>
                     <Route exact path="/products/">
                        <ProductList />
                     </Route>
                </ProductTypeProvider>
            </ProductProvider>

        </>
    )
}