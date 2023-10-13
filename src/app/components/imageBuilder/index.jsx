import client from "../../../../sanity"
import Image from "next/image"
import { useNextSanityImage } from "next-sanity-image"


const ImageBuilder = ({obj,type }) => {


  // type === "mainImage" ? imageProps = useNextSanityImage(client, obj.mainImage.asset._ref) : imageProps = useNextSanityImage(client, obj.asset._ref)

  // fetch mainImage or other interior images
  const imageProps = type === "mainImage" ? useNextSanityImage(client, obj.mainImage.asset._ref) : useNextSanityImage(client, obj.asset._ref)

  return (
    <div className="image-component">
      <Image {...imageProps} alt="Main Room Image" className={`${type === "mainImage" ? "w-[100vw] h-full" : "w-full h-[250px]" } `} />
    </div>
  )
}

export default ImageBuilder