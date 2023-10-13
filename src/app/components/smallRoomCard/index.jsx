import Link from "next/link";
import client from "../../../../sanity";
import { useNextSanityImage } from "next-sanity-image";
import Image from "next/image";


const SmallRoomCard = ({cardDetails}) => {

  const imageProp = useNextSanityImage(client, `${cardDetails.mainImage.asset._ref}`)


  return (
    <div
      className="shadow-xl text-center pb-4"
    >
      <Image {...imageProp} alt=""/>
      <p className="mt-2 mb-4 font-bold text-[20px]">{cardDetails._type === "room" ? cardDetails.roomName : cardDetails.facilityName}</p>
      <Link href={cardDetails._type === "room" ? `/rooms/${cardDetails.slug.current}` : `/facilities`}>
        <button className="border border-[#6F6F6F] outline-none text-xs p-2 px-4">MORE INFORMATION</button>
      </Link>
    </div>
  )
}

export default SmallRoomCard