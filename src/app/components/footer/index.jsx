import FacebookIcon from "@/assets/svgs/facebookIcon"
import InstagramIcon from "@/assets/svgs/instagramIcon"
import Logo from "@/assets/svgs/logo"



const Footer = () => {
  return (
    <section className="bg-[#8F3E43] text-white md:p-10 p-6 pb-8 sm:px-14">
        <div className="gap-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
            <Logo />

            <div className="sm:text-[20px]">
                <p>Home</p>
                <p>Rooms & Suites</p>
                <p>Packages</p>
                <p>News</p>
                <p>Gift Voucher</p>
            </div>

            <div className="sm:text-[20px]">
                <p>Our Story</p>
                <p>Restaurant & Bar</p>
                <p>Meetings & Events</p>
                <p>Gallery</p>
            </div>

            <div className="sm:text-[20px]">
                <p>Our Team</p>
                <p>Alpine Hideaway Spa</p>
                <p>Experience the Magic</p>
                <p>Contact Us</p>
            </div>
        </div>

        <div className="mt-8">
            <div className="max-sm:text-sm flex gap-5 items-center">
                <span className="w-[70px]">Address</span>
                <span className="font-light">74b The Green Court Estate, Lekki, Lagos.</span>
            </div>
            <div className="max-sm:text-sm flex gap-5 items-center">
                <span className=" w-[70px]">Phone</span>
                <span className="font-light">(+234) 0707 344 3774</span>
            </div>
            <div className="max-sm:text-sm flex gap-5 items-center">
                <span className=" w-[70px]">Email</span>
                <span className="font-light">support@sunrise.com</span>
            </div>
        </div>

        <div className="flex gap-6 mt-8">
            <InstagramIcon />
            <FacebookIcon />
        </div>
    </section>
  )
}

export default Footer