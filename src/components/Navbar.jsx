import React, { useEffect, useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScroll, setIsScroll] = useState(false);
    const navLinks = [
        { name: "Home", link: "#home" },
        { name: "About", link: "#about" },
        { name: "Skills", link: "#skills" },
        { name: "Hireme", link: "#hireme" },
        { name: "Project", link: "#project" },
        { name: "Contact", link: "#contact" },
    ];

    useEffect(() => {
        window.addEventListener("scroll", () => {
            window.scrollY > 0 ? setIsScroll(true) : setIsScroll(false);
        });
        return () => {};
    }, []);
    return (
        <div
            className={
                "fixed top-0 left-0 w-full transition-all duration-300 z-[999]" +
                (isScroll ? " bg-white/60 text-gray-900" : "text-white")
            }
        >
            <div className="flex justify-between items-center">
              {/* branding */}
                <a href="#home"
                    className="md:mx-7 ml-5 md:text-3xl text-2xl tracking-widest cursor-pointer font-medium
         "
                >
                    Ba<span className="text-cyan-600">h~D</span>ev.
                </a>
                {/* links */}
                <div
                    className={
                        "hidden md:flex text-black px-7 rounded-bl-full py-1 tracking-widest  font-medium " +
                        (isScroll ? "md:bg-white/0 bg-white" : "bg-white")
                    }
                >
                    <span className="flex gap-5 items-center">
                        {navLinks.map(({ name, link }, index) => (
                            <a
                                href={link}
                                key={index}
                                className="hover:text-cyan-600 duration-200 p-2"
                            >
                                {name}
                            </a>
                        ))}
                    </span>
                </div>
                <div
                    onClick={() => setIsOpen((prev) => !prev)}
                    className="block md:hidden text-3xl cursor-pointer m-5"
                >
                      <ion-icon name="menu"></ion-icon>
                </div>
                {/* mobile */}
                <div className={`${isOpen ?'right-0 opacity-100':'-right-full opacity-0'} absolute top-0 duration-500 ease-in-out md:hidden w-2/3 h-screen text-gray-900 bg-white z-[999]`}>
                  {/* close icon */}
                <span
                    onClick={() => setIsOpen((prev) => !prev)}
                    className="absolute right-0 block md:hidden text-3xl cursor-pointer m-5"
                >
                  <ion-icon name="close"></ion-icon>
                </span>
{/* mobile links */}
                <div className="w-full h-full flex flex-col justify-center gap-5 text-lg  py-5">
                        {navLinks.map(({ name, link }, index) => (
                            <a
                            onClick={() => setIsOpen((prev) => !prev)}
                                href={link}
                                key={index}
                                className="hover:text-cyan-600 duration-200 py-2 px-5 tracking-widest "
                            >
                                {name}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
