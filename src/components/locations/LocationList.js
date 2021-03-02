import React, { useContext, useEffect } from "react"
import { LocationContext } from "./LocationProvider"
import { LocationCard } from "./Location"
import "./Location.css"

export const LocationList = () => {
  // This state changes when `getlocations()` is invoked below

  const { locations, getLocations } = useContext(LocationContext)

  //useEffect - reach out to the world for something
  //function runs when the value in the array changes
  useEffect(() => {
    console.log("LocationList: useEffect - getlocations")
    getLocations()

  }, [])


  return (
    <div className="locations">
      <h3 className="location__heading">Kandy Korner Locations</h3>
      {console.log("LocationList: Render", locations)}
     
     <section className="location__cards">
      {
        locations.map(location => {
          return <LocationCard key={location.id} location={location} />
        })
      }
      </section>
    </div>
  )
}