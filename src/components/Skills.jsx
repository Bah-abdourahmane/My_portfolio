import React from 'react'

const Skills = () => {
  const skills =[
    {logo:'logo-html5',level:'Advance',count:90},
    {logo:'logo-css3',level:'Advance',count:86},
    {logo:'logo-react',level:'Intermediate',count:66},
    {logo:'logo-nodejs',level:'Beginner',count:36},
  ]
  return (
    <div id='skills' className='p-5 md:p-10 tracking-widest bg-gray-800 '>
      <div className="text-center text-gray-100">
        <h3 className='text-4xl font-semibold '>
          My <span className='text-cyan-600'>Skills</span>
        </h3>
        <p className="text-gray-400 my-3 text-lg">My Knowledge</p>
        <div className='flex items-center justify-center gap-5 mt-12 flex-wrap'>
          {/* cards */}
         {skills.map((skill,index)=>(
           <div key={index} className='relative w-full max-w-[16rem] min-w-[10rem] mx-auto bg-gray-900 border-2 border-cyan-600 rounded-xl p-8 py-4 grid place-content-center'>
           <div 
             style={{background:`conic-gradient(rgb(8,145,170) ${skill.count}%, #ddd ${skill.count}%)`}} 
             className=" w-32 h-32 rounded-full flex items-center justify-center text-6xl bg-red-50 ">
             <div className='w-28 h-28 rounded-full bg-gray-900 flex items-center justify-center'>
             <ion-icon name={skill.logo}></ion-icon>
             </div>
           </div>
           <p className="text-xl mt-3">{skill.level}</p>
         </div>
         ))}
        </div>
      </div>
    </div>
  )
}

export default Skills