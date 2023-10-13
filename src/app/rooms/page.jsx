"use client"

import { useEffect, useState } from 'react'
import client from '../../../sanity'
import Hero from '../components/hero'
import RoomCard from '../components/roomCard'
import NoRoomFound from '@/assets/svgs/noRoomFound'



const RoomsPage = () => {

  const [rooms, setRooms] = useState(null)
  const [filteredRooms, setFilteredRooms] = useState(null)

  useEffect(() => {
    try {
      const fetchHotels = async () => {
        const query = `*[_type == "room"]`;

        const response = await client.fetch(query)
        setRooms(response)
        setFilteredRooms(response)
      }

      fetchHotels()
    } catch(error) {
      console.log(error)
    }
  }, [])


  const priceFilters = [60000, 80000, 100000];
  const bedFilters = [1,2,3,4,5];
  const capacity = [1,2,3,4,5];


  const [selectedPrice, setSelectedPrice] = useState("")
  const [selectedBeds, setSelectedBeds] = useState("")
  const [selectedCapacity, setSelectedCapacity] = useState("")


  useEffect(() => {
    const handleFiltering = () => {
      // filter the rooms array based on all selections made by the user

      if(rooms) {
        const result = rooms.filter(room => {
          // default set to true so if any of them are left unchanged by the user, the filtering can be carried out by the other selected filters

          let roomsByPrice = true;
          let roomsByBeds = true;
          let roomsByCapacity = true;

          if(selectedPrice != "") {
            roomsByPrice = room.price < selectedPrice
          }

          if(selectedBeds != "") {
            roomsByBeds = room.beds == selectedBeds
          }

          if(selectedCapacity != "") {
            roomsByCapacity = room.capacity == selectedCapacity
          }

          return roomsByPrice && roomsByBeds && roomsByCapacity
        })

        setFilteredRooms(result)
      }

    }

    handleFiltering()
  }, [selectedBeds, selectedPrice, selectedCapacity])



  return (
    <main className="w-full bg-colorAsh overflow-x-hidden max-w-[1600px] mx-auto">
      <Hero maintext="ROOMS & SUITES" subText="explore" page='rooms'/>

      <section className='w-[90%] my-10 mx-auto'>
        <div className='flex max-sm:flex-col max-sm:overflow-x-scroll no-scrollbar gap-2 sm:items-end'>
          <p>Filter rooms by: </p>
          <div className='flex gap-2'>
            <div className='bg-white border border-colorBrown flex items-center cursor-pointer'>
              <select
                name="price"
                className="text-sm sm:text-base bg-transparent appearance-none outline-none border-none px-2 pr-6 focus:outline-none cursor-pointer"
                onChange={(e) => setSelectedPrice(e.target.value)}
              >
                <option value="" className='hidden text-sm' defaultValue={true}>Price</option>
                {rooms && priceFilters.map(price => (
                  <option value={price} key={price} className='text-sm focus:border-none focus:outline-none outline-none border-none p-2'>less than {price}</option>
                ))}
              </select>
            </div>
            <div className='bg-white border border-colorBrown flex items-center cursor-pointer'>
              <select
                name="price"
                className="text-sm sm:text-base bg-transparent appearance-none outline-none border-none px-2 pr-6 focus:outline-none cursor-pointer"
                onChange={(e) => setSelectedBeds(e.target.value)}
              >
                <option value="" className='hidden' defaultValue={true}>Bed</option>
                {rooms && bedFilters.map(bed => (
                  <option value={bed} key={bed}> {bed} {bed > 1 ? "beds" : "bed"}</option>
                ))}
              </select>
            </div>
            <div className='bg-white border border-colorBrown flex items-center cursor-pointer'>
              <select
                name="price"
                className="text-sm sm:text-base bg-transparent appearance-none outline-none border-none px-2 pr-6 focus:outline-none cursor-pointer"
                onChange={(e) => setSelectedCapacity(e.target.value)}
              >
                <option value="" className='hidden' defaultValue={true}>Guest</option>
                {rooms && capacity.map(guest => (
                  <option value={guest} key={guest}>{guest} {guest > 1 ? "guests" : "guest"}</option>
                ))}
              </select>
            </div>
          </div>

        </div>

        <section className='grid sm:grid-cols-2 gap-10 my-8'>
          {filteredRooms && filteredRooms?.length > 0 && filteredRooms.map((room, i) => (
            <RoomCard roomDetails={room} key={i}/>
          ))}
        </section>

        {filteredRooms?.length === 0 && <div className='flex flex-col gap-3 justify-center min-h-[200px] items-center'>
          <NoRoomFound />
          <p>No rooms found under this category</p>
        </div>}
      </section>

    </main>
  )
}

export default RoomsPage