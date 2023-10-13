"use client"
import Link from "next/link";


const Navbar = ({activePage}) => {

    const navLinks = [
        "home",
        "rooms",
        "facilities",
        "contact"
    ]


    // console.log(activePage)

  return (
    <div>
        {
            navLinks.map((link, i) => (
            <Link href={link === "home" ? "/" : `/${link}`} key={i}>
                <div className="flex gap-3 justify-end items-center mb-2 text-right cursor-pointer">
                <span key={link} className="text-right text-sm">{link.toUpperCase()}</span>
                <div className={`h-2 w-2 rounded-full border ${activePage === link ? "bg-white" : "border-white"}`}></div>
                </div>
            </Link>
            ))
        }
    </div>
  )
}

export default Navbar