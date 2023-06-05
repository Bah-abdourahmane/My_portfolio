import hero from "../assets/hero.png";

const Hero = () => {
    const social_media_icon = [
        "logo-instagram",
        "logo-facebook",
        "logo-linkedin",
        "logo-twitter",
    ];
    return (
        <div id="home" className="min-h-screen w-full md:p-10 p-5 flex gap-5 lg:flex-row flex-col items-center">
            <div className="flex-1 flex items-center justify-center h-full">
                <img
                    src={hero}
                    alt="my profile"
                    className="lg:w-11/12 w-full h-full object-cover"
                />
            </div>
            <div className="flex-1">
                <div className="text-center md:text-start">
                    <h1 className="md:text-4xl text-xl leading-10 md:leading-normal font-bold tracking-widest">
                        <span className="text-cyan-600 md:text-6xl text-5xl">
                            Hello ! <br />{" "}
                        </span>
                        My name is <span>Bah Abdourahmane</span>
                    </h1>
                    <h4 className="font-bold text-lg md:text-2xl md:leading-normal leading-5 text-gray-600 mt-4 tracking-widest">
                        Mern Developer
                    </h4>
                    <button className="btn-primary my-4 tracking-widest">Contact Me</button>
                    <div className="mt-10 text-3xl flex gap-5 items-center md:justify-start justify-center">
                        {social_media_icon?.map((icon, index) => (
                            <span key={index} className="cursor-pointer text-gray-600 hover:text-white duration-300">
                                <ion-icon name={icon}></ion-icon>
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
