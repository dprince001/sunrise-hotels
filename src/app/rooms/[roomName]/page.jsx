"use client"
import { useEffect, useState } from "react"
import client from "../../../../sanity"
import ImageBuilder from "@/app/components/imageBuilder"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import 'swiper/css';
import BackArrow from "@/assets/svgs/backArrow";




const Room = ({params}) => {

  const slug = params.roomName;
  const [roomDetails, setRoomDetails] = useState(null);

  // const navigate = useRouter()

  useEffect(() => {
    try {
      const fetchDetails = async () => {
        // groq query to fetch particular room with that slug
        const query = `*[_type == "room" && slug.current == $slug]`;
        const response = await client.fetch(query, { slug });
        setRoomDetails(response)
      }

      fetchDetails();
    } catch(error) {
      console.log(error)
    }
  }, [])

  const goBack = () => {
    window.history.back()
  }


  return (
    <div>
      {roomDetails && roomDetails.map(room => {
        const {beds, capacity, description, interiorImages, mainImage, price, roomName, size} = room;

        return (
          <div key={roomName}>
            <div className="mx-5 py-2 flex gap-2 cursor-pointer items-center" onClick={goBack}>
              <BackArrow />
              <span>Go back</span>
            </div>
            <ImageBuilder obj={room} type="mainImage" />
            <section className="w-[85%] mx-auto">
              <div className="md:flex gap-8 my-14">
                <div className="grid grid-cols-2 gap-3 grid-rows-2 basis-[40%] mb-5">
                  <div className="">
                    <p className="text-base sm:text-xl mb-1">BEDS</p>
                    <p>{beds}</p>
                  </div>
                  <div className="">
                    <p className="text-base sm:text-xl mb-1">SIZE</p>
                    <p>{size}m²</p>
                  </div>
                  <div className="">
                    <p className="text-base sm:text-xl mb-1">GUESTS</p>
                    <p className="">{capacity}</p>
                  </div>
                  <div className="">
                    <p className="text-base sm:text-xl mb-1">PRICE</p>
                    <p>{price}</p>
                  </div>
                </div>
                <div className="basis-[60%] mb-8">
                    <p className="border-b-2 border-slate-300 pb-1 mb-5 text-base sm:text-2xl">{roomName}</p>
                    <p className="leading-8 max-sm:text-sm">{description}</p>
                </div>
              </div>

              <div className="mb-20">
                <h4 className="text-[45px] sm:text-[70px] font-didot border-b-2 border-slate-300 text-slate-300 mb-5">Photo gallery</h4>

                {room &&
                  <Swiper
                    spaceBetween={30}
                    // slidesPerView={2}
                    breakpoints={{
                      640: {
                        slidesPerView: 2,
                      },
                      300: {
                        slidesPerView: 1,
                      },
                    }}
                    centeredSlides={false}
                    loop={true}
                    autoplay={{
                      delay: 1500,
                      disableOnInteraction: false,
                    }}
                    modules={[Autoplay]}
                  >
                    {interiorImages.map((image, i) => (
                      <SwiperSlide>
                        <ImageBuilder obj={image} key={i} type="interiorImage"/>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                }
              </div>
            </section>
          </div>
        )

      })
      }
    </div>
  )
}

export default Room