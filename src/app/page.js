"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import client from "../../sanity"
import Slider from "./components/slider"

import Hero from "./components/hero"


const Home = () => {

  const [rooms, setRooms] = useState(null)
  const [facilities, setFacilities] = useState(null)

  useEffect(() => {
    try {
      const fetchHotels = async () => {
        const queryRooms = `*[_type == "room"]`;
        const queryFacilities = `*[_type == "facility"]`;

        const roomResponse = await client.fetch(queryRooms)
        const facilityResponse = await client.fetch(queryFacilities)
        setRooms(roomResponse)
        setFacilities(facilityResponse)
      }

      fetchHotels()
    } catch(error) {
      console.log(error)
    }
  }, [])


  return (
    <div className="min-h-[100vh] w-full bg-colorAsh overflow-x-hidden max-w-[1600px] mx-auto">
      <Hero maintext="Soothe by the Sea" subText="LEKKI, VICTORIA ISLAND" page="home"/>

      <section className="mt-10 w-[95%] mx-auto lg:flex flex-row-reverse items-center">
        <div className="bg-about basis-2/5 max-lg:max-h-[300px]"></div>

        <div className="bg-white p-5 sm:p-10 sm:px-14 pb-16 basis-3/5 lg:w-[65%]">
          <h2 className="font-didot max-sm:text-[40px] text-[50px] lg:text-[55px] font-regular mb-6">About</h2>

          <p className="text-base lg:text-[18px] font-light leading-8">
            Sunrise hotel (aka soothe) with the wonderful beach and the crystalline waters is only a two-minute walk via a private path. After a refreshing plunge, taverna “Sunrise” offers shade and quality local cuisine.
          </p>
          <p className="my-5 text-base lg:text-[18px] font-light leading-7">
            Don’t miss Aghia Thalassini (Saint of the Sea), the small chapel marking the views to the other side of the cove.
          </p>
          <p className="text-base lg:text-[18px] font-light leading-7">
            Knowing what we stand for and what to expect, it is now time for you to experience what we have carefully been planning for you these past few years – the setting for dreamy vacations!
          </p>
        </div>
      </section>

      <section className="mt-20 w-[95%] mx-auto text-center">
        <h2 className="font-didot max-sm:text-[40px] text-[50px] lg:text-[55px] font-regular mb-4 sm:mb-6">Rooms & Suites</h2>
        <p className="max-w-[800px] mx-auto mb-4 w-[95%]">
          Sunrise Hotel offers 30 double, and 5 single rooms as well as 36 suites and junior suites. Families can enjoy some privacy thanks to interconnecting rooms or in our generous Family Suite with Matterhorn view on the top floor. All of our rooms feature elegant wooden parquet flooring.
        </p>

        {rooms && <Slider array={rooms}/>}

      </section>

      <section className="mt-20 w-[95%] mx-auto text-center">
        <h2 className="font-didot max-sm:text-[40px] text-[50px] lg:text-[55px] font-regular mb-4 sm:mb-6">Facilities</h2>
        <p className="max-w-[800px] mx-auto mb-4">
          Sunrise Hotels offers a wide range of facilities for all guests. Enjoy our sport facilities and entertainment programs. The hotel reception is at your service 24h a day where you can rent tables to serve your needs or have your luggage taken care of 24h a day.
        </p>

        {facilities && <Slider array={facilities}/>}
      </section>

      <section className="my-20 bg-contact-us py-[5em] px-8 text-white text-center">
        <div className="max-w-[600px] mx-auto">
          <p className="text-[25px] sm:text-[40px] mb-5">If you have any questions feel free to contact us!</p>
          <Link href="/contact">
            <button className="text-white text-sm sm:text-base border border-white py-2 px-5 font-semibold hover:bg-white hover:text-colorBrown transition">CONTACT US</button>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home