import Image from "next/image"
import client from "../../../../sanity";
import { useNextSanityImage } from "next-sanity-image";
import BedIcon from "@/assets/svgs/bedIcon";
import PersonIcon from "@/assets/svgs/personIcon";
import RoomSizeIcon from "@/assets/svgs/roomSizeIcon";
import Link from "next/link";
import StarIcon from "@/assets/svgs/starIcon";



const RoomCard = ({roomDetails}) => {

    const {roomName, rating, price, slug, capacity, beds, size, mainImage} = roomDetails;

    const imageProps = useNextSanityImage(client, mainImage.asset._ref)

  return (
    <div className="text-center mb-8 bg-white pb-5">
        <div className="relative">
            <Image {...imageProps} alt={`${roomName} image`}/>
            <div className="absolute bg-colorBrown p-2 px-3 text-white right-4 bottom-4 flex gap-2 items-center">
                <span>{rating}</span>
                <StarIcon />
            </div>
        </div>

        <h3 className="text-[30px] my-2 mt-5 font-didot lg:text-[38px]">{roomName}</h3>
        <div className="flex gap-7 justify-center">
            <div className="flex flex-col items-center mb-4">
                <RoomSizeIcon />
                <span className="mt-2">{size}m²</span>
            </div>
            <div className="flex flex-col items-center mb-4">
                <PersonIcon />
                <span className="mt-2">{capacity} {capacity > 1 ? "persons" : "person"}</span>
            </div>
            <div className="flex flex-col items-center mb-4">
                <BedIcon />
                <span className="mt-2">{beds} {beds > 1 ? "beds" : "bed"}</span>
            </div>
        </div>
        <p className="text-[24px] sm:text-[28pxpx]">₦ {price} / Night</p>
        <Link href={`/rooms/${slug.current}`}>
            <button className="bg-transparent mt-3 border border-colorBrown p-2 px-5 text-colorBrown hover:text-white hover:bg-colorBrown transition-all">SELECT</button>
        </Link>
    </div>
  )
}

export default RoomCard