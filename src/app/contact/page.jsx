import Hero from "../components/hero"
import LocationIcon from "@/assets/svgs/locationIcon"
import PhoneIcon from "@/assets/svgs/phoneIcon"
import EmailIcon from "@/assets/svgs/emailIcon"



const ContactPage = () => {
  return (
    <div className="bg-colorAsh">
        <Hero maintext="CONTACT US" page='contact'/>

        <div className="md:flex">
            <div className="basis-1/2 p-10">
                <h2 className="my-5 font-didot text-3xl sm:text-4xl">GET IN TOUCH</h2>
                <p className="leading-8">
                    We take our committment to our users seriously.
                    If you need our help with your your user account, have questions about how to use the platform or are experiencing technical difficulties, please do not hesitate to contact us.
                </p>

                <div className="flex gap-3 mb-3 items-center mt-5">
                    <LocationIcon />
                    <span className="">74b The Green Court Estate, Lekki, Lagos.</span>
                </div>
                <div className="flex gap-3 mb-3 items-center">
                    <PhoneIcon />
                    <span className="">(+234) 0707 344 3774</span>
                </div>
                <div className="flex gap-3 mb-3 items-center">
                    <EmailIcon />
                    <span className="">support@sunrise.com</span>
                </div>
            </div>
            <form className="bg-white flex flex-col basis-1/2 p-10">
                <div className="lg:flex gap-4">
                    <input type="text" aria-label="first name" name="firstName" placeholder="First name" className="p-3 w-full mb-4 border outline-none border-[#6F6F6F] bg-white" autoComplete="off"/>
                    <input type="text" aria-label="last name" name="lastName" placeholder="Last name" className="p-3 w-full mb-4 border outline-none border-[#6F6F6F] bg-white" autoComplete="off"/>
                </div>
                <input type="email" aria-label="email" name="email" placeholder="Email"  className="p-3 w-full mb-4 border outline-none border-[#6F6F6F] bg-white" autoComplete="off"/>
                <textarea name="message" cols="30" rows="7" placeholder="Message" className="p-3 border w-full outline-none resize-none border-[#6F6F6F] bg-white" autoComplete="off" ></textarea>

                <button type="submit" className="bg-colorBrown py-2 px-6 text-white my-5  self-end">Submit</button>
            </form>
        </div>
    </div>
  )
}

export default ContactPage