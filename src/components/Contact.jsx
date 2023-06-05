import React from "react";

const Contact = () => {
  const contact_info =[
    {logo :'mail',text:'bahdev@gmail.com'},
    {logo :'logo-whatsapp',text:'+212 123 456 780'},
    // {logo :'mail',text:'bahdev@gmail.com'},
  ]
    return (
        <div id="contact" className="p-5 md:p-10 text-white tracking-widest">
            <h3 className="text-4xl font-semibold text-center ">
                Contact <span className="text-cyan-600">Me</span>
            </h3>
            <p className="text-gray-400 my-3 text-lg text-center">
                Get in touch
            </p>
            <div className="mt-16 flex md:flex-row flex-col gap-5 bg-gray-800 p-5 rounded-lg max-w-5xl mx-auto">
   <form className="flex flex-col flex-1 gap-5">
<input type="text" placeholder="Your Name" />
<input type="email" placeholder="Your Email Address" />
<textarea placeholder="Your Message" rows="10" className="resize-none"></textarea>
<button className="btn-primary w-fit tracking-widest">Send Message</button>
   </form>
   <div className="flex flex-col gap-5">
    {contact_info.map((item,index)=>(
    <div key={index} className="flex gap-3 w-full items-center">
      <div className="flex items-center justify-center text-white text-xl bg-cyan-600 rounded-full w-10 h-10">
        <ion-icon name={item.logo}></ion-icon>
      </div>
      <span>{item.text}</span>
    </div>
    ))}
   </div>
            </div>
        </div>
    );
};

export default Contact;
