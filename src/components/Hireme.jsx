import hireme from "../assets/hireMe.png";

const Hireme = () => {
    return (
        <div
            id="hireme"
            className="md:p-10 p-5
     text-white tracking-widest"
        >
            <div className="">
                <h3 className="text-4xl font-semibold text-center ">
                    Hire <span className="text-cyan-600">Me</span>
                </h3>
                <p className="text-gray-400 my-3 text-lg text-center">
                    Do you have any work?
                </p>
                <div className="relative bg-gray-700 p-5 lg:max-w-4xl mx-auto min-h-[24rem] mt-24 flex items-center gap-5 lg:flex-row flex-col-reverse ">
                    <div>
                        <h2 className="text-2xl font-semibold">
                            Do you want any work from me?
                        </h2>
                        <p className="max-w-lg text-sm mt-5 text-gray-200 leading-6">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Sunt soluta a quam perspiciatis nemo odio
                            aliquid repudiandae consectetur? Eveniet pariatur
                            excepturi ut! Quidem dolore eum consequuntur dolorum
                            aut harum voluptas.
                        </p>
                        <button className="btn-primary mt-10">Say Hello</button>
                    </div>
                    <img
                        src={hireme}
                        alt="my picture"
                        className="lg:h-[32rem] h-80 lg:absolute bottom-0 -right-3 object-cover"
                    />
                </div>
            </div>
        </div>
    );
};

export default Hireme;
