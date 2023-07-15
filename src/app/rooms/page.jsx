"use client"

import { useEffect, useState } from 'react'
import client from '../../../sanity'
import Hero from '../components/hero'
import RoomCard from '../components/roomCard'



const config = {
  projectId: '2tyvmvhe',
  dataset: 'production',
  useCdn: true
}


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
        <div className='flex max-sm:overflow-x-scroll no-scrollbar'>
          <div className='h-[40px] border border-colorBrown px-2 flex items-center'>
            <select name="price" classname="h-[40px] text-sm sm:text-base border-none w-full bg-transparent appearance-none outline-none" onChange={(e) => setSelectedPrice(e.target.value)}>
              <option value="" className='hidden' defaultValue={true}>Price</option>
              {rooms && priceFilters.map(price => (
                <option value={price} key={price} className=''>less than {price}</option>
              ))}
            </select>
          </div>
          <div className='h-[40px] border border-colorBrown px-2 flex items-center'>
            <select name="bed" classname="text-sm bg-transparent sm:text-base border-none appearance-none outline-none" onChange={(e) => setSelectedBeds(e.target.value)}>
              <option value="" className='hidden' defaultValue={true}>Bed</option>
              {rooms && bedFilters.map(bed => (
                <option value={bed} key={bed}> {bed} {bed > 1 ? "beds" : "bed"}</option>
              ))}
            </select>
          </div>
          <div className='h-[40px] border border-colorBrown px-2 flex items-center'>
            <select name="capacity" classname="text-sm bg-transparent sm:text-base border-none appearance-none outline-none" onChange={(e) => setSelectedCapacity(e.target.value)}>
              <option value="" className='hidden' defaultValue={true}>Guest</option>
              {rooms && capacity.map(guest => (
                <option value={guest} key={guest}>{guest} {guest > 1 ? "guests" : "guest"}</option>
              ))}
            </select>
          </div>
        </div>

        <section className='grid grid-cols-2 gap-10 my-8'>
          {filteredRooms && filteredRooms.map((room, i) => (
            <RoomCard roomDetails={room} key={i}/>
          ))}
        </section>
      </section>

    </main>
  )
}

export default RoomsPage