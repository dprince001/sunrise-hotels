import Logo from "@/assets/svgs/logo"
import FacebookIcon from "@/assets/svgs/facebookIcon"
import InstagramIcon from "@/assets/svgs/instagramIcon"
import Link from "next/link"
import Navbar from "../navbar"

const Hero = ({maintext, subText, page}) => {


  return (
    <section className={`bg-${page} max-md:h-[80vh] relative py-5 text-white`}>
        <div className="flex justify-between w-[95%] mx-auto items-center">
          <Logo />
          <Link href="/rooms" scroll={false}>
            <button className="bg-white text-sm sm:text-base text-black py-2 px-4 font-semibold">BOOK NOW</button>
          </Link>
        </div>

        <div className="absolute flex justify-between items-center w-[95%] top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%]">
          <div className="hidden md:flex flex-col gap-4">
            <FacebookIcon />
            <InstagramIcon />
          </div>

          {page === "home" ? <div className="text-center mx-auto">
            <h1 className="font-didot max-sm:text-[40px] text-[55px] lg:text-[64px] font-regular">{maintext}</h1>
            <p className="text-[20px] max-sm:text-[16px] font-thin mt-[-5px] sm:mt-[-10px]">{subText}</p>
          </div> : <div className="text-center mx-auto">
            <p className="text-[20px] max-sm:text-[16px] italic font-light mt-[-5px] sm:mt-[-10px]">{subText}</p>
            <h2 className="font-didot max-sm:text-[40px] text-[55px] lg:text-[64px] font-regular">{maintext}</h2>
          </div>}

          <div className="max-w-[150px] max-md:hidden">
            <Navbar activePage={page}/>
          </div>
        </div>

        <div className="max-w-[250px] md:hidden absolute bottom-4 right-4">
            <Navbar activePage={page}/>
        </div>
      </section>
  )
}

export default Hero