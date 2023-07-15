"use client"
import { useEffect, useState } from "react"
import client from "../../../sanity"
import Hero from "../components/hero"
import ImageBuilder from "../components/imageBuilder"



const Facilities = () => {

  const [facilities, setFacilities] = useState(null)

  useEffect(() => {
    try {
      const fetchFacilities = async() => {
        const query = `*[_type == "facility"]`;
        const response = await client.fetch(query)
        console.log(response)
        setFacilities(response)
      }

      fetchFacilities()
    } catch(err) {
      console.log(err)
    }
  }, [])

  return (
    <div className='w-full bg-colorAsh overflow-x-hidden max-w-[1600px] mx-auto'>
      <Hero maintext="FACILITIES" subText="our" page='facilities'/>

      <section className='w-[90%] my-16 mx-auto'>
        {facilities && facilities.map((facility, i) => {
          const {facilityName, description} = facility;

          return (
            <div className="mb-20 text-center" key={i}>
              {/* <Image {...imageProps} alt={`${facilityName} image`}/> */}
              <ImageBuilder obj={facility} type="mainImage" />
              <h2 className="my-5 mt-14 font-didot font-bold text-3xl sm:text-4xl">{facilityName}</h2>
              <p className="max-w-[900px] mx-auto text-xl sm:text-2xl">{description}</p>
            </div>
          )
        })}
      </section>
    </div>
  )
}

export default Facilities