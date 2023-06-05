import aboutImg from '../assets/about.png'

const About = () => {
  const info = [
    {title :"Year experience",count:"03"},
    {title :"Completed Projects",count:"18"},
    {title :"Company workk",count:"02"},
  ]
  return (
    <div id='about' className='p-5 md:p-10 text-white tracking-widest'>
      <div className="text-center">
        <h3 className='text-4xl font-semibold '>
          About <span className='text-cyan-600'>Me</span>
        </h3>
        <p className="text-gray-400 my-3 text-lg">My introduction</p>
      </div>
      <div className='flex items-center md:flex-row flex-col-reverse gap-10 md:gap-5 max-w-6xl mx-auto'>
        <div className=''>
            <p className='text-start text-gray-300 my-3 leading-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quaerat, rem similique, quam quidem iste mollitia dolor totam hic quo fuga laborum? Laboriosam quibusdam fugiat velit iste suscipit sit doloremque.</p>
            <div className='flex items-center gap-5 mt-10'>
             {
              info.map(({title,count})=>(
                <div key={title} className='text-center'>
                <h2 className='md:text-4xl text-2xl text-cyan-600 font-semibold my-3'>{count}</h2>
                <span>{title}</span>
              </div>
              ))
             }
            </div>
            <a href="" download className='mt-10 inline-block'>
             <button className='btn-primary '>Dowload CV</button>
            </a>
        </div>
        <div className='flex-1 flex justify-center items-center'>
          <div className='relative h-full w-11/12 sm:w-10/12 lg:w-96 aboutImg'>
            <img src={aboutImg} alt="it's just me" className='w-full object-cover bg-cyan-600 rounded-xl'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About