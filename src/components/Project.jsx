import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import {Pagination,Autoplay} from 'swiper';
import project_person from "../assets/project_person1.png";
import { projects } from "../dummy";

const Project = () => {
    return (
        <div id="project" className="tracking-widest p-5 md:p-10 text-white">
            <div>
                <h3 className="text-4xl font-semibold text-center ">
                    My <span className="text-cyan-600">Projects</span>
                </h3>
                <p className="text-gray-400 my-3 text-lg text-center">
                    My awesome works
                </p>
            </div>
            <br />
            <div className="relative flex items-center px-5 max-w-6xl mx-auto">
              <div className="lg:w-2/3 w-full">
                <Swiper 
                  slidesPerview={1.2}
                  spaceBetweens={20}
                  breakpoints={{
                    768: {
                      slidesPerView: 2,
                      spaceBetween : 25
                    },
                  }}
                  loop={true}
                  autoplay={{
                    delay : 3000,
                  }}
                  pagination={{
                    clickable:true
                  }}
                  modules={[Pagination,Autoplay]}>
                    {projects.map((item,index)=>(
                      <SwiperSlide>
                      <div className="w-full h-fit p-4 bg-slate-700 rounded-xl">
                       <img src={item.img} alt="" className="rounded-lg"/>
                       <h3 className="text-xl my-4">Movie App</h3>
                       <div className="flex gap-3">
                        <a href={item.github_link}className="text-cyan-600 bg-gray-800 p-2  block">Github</a>
                        <a href={item.demo_link} className="text-cyan-600 bg-gray-800 p-2 block">Live Demo</a>
                       </div>
                      </div>
                    </SwiperSlide>
                    ))}
                </Swiper>
              </div>
              <div className="-rotate-12 lg:block hidden">
                <img src={project_person} alt="" className="" />
              </div>
            </div>
        </div>
    );
};

export default Project;
