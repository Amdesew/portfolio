import Image from "next/image";
import baks from   "@/public/p1.jpg";
import melkam from "@/public/p2.jpg";
import abc from "@/public/p3.jpg";
import myphoto from "@/public/p-Photoroom.png"
import gmail from "@/public/gmail.jpg"
import telegram from "@/public/telegram.png"
import Link from "next/link";

export default function Home() {
  return (
    <div> 
      <link rel="stylesheet" type='text/css' href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"/>
          
      <div className="inline text-center ">
        <div>     
          <div className="px-20 py-40 font-semibold text-2xl ">
            <h2 className="text-white">I'm <p className="text-yellow-500 inline">Amdesew Seifu</p></h2>
            <h2 className="text-white">A Full Stack Web Developer</h2>
            <div className="py-4">
              <Link href="#contact">
                <button type="button" className="border-4 border-yellow-500 rounded-xl p-3 text-xl text-yellow-500">Contact Me</button>
              </Link>
            </div>
          </div>
        
        </div>

        <div className="text-center text-white" id="about">
          <h2 className="text-3xl">About Me</h2>
          <div className="py-2 bg-gray-500 grid grid-cols-1 mx-auto max-w-lg rounded-2xl">
            <p>A Full stack developer each of my product is a problem solving web app not a random
              idea for only portfolio sake like other programmers apart from that i'm a very communicative person
              which makes it easier for me to work with teams and as a person who looks programming as a hobby not 
              as work my proof is my age I'm 18 turning in to 19 yet i have acquired a full stack web dev skills by following 
              road maps and tutorials online from harvard free couse and youtube </p>
          </div>
        </div>

        <div className="text-center py-32" id="skills">
          <h2 className="text-white text-3xl">My Skills</h2>
          
          <h3 className="text-yellow-500 py-5 text-2xl">Front End</h3>
          
          <div className="grid grid-cols-3 gap-7 mx-auto max-w-lg bg-gray-500 py-5 px-5 rounded-2xl">
            <div>      
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg" alt="Icon" width={"80"} height={"80"}/>
            </div>
            <div>      
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg" alt="Icon" width={"80"} height={"80"}/>
            </div>
            <div>      
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="Icon" width={"80"} height={"80"}/>
            </div>
            <div>      
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg" alt="Icon" width={"80"} height={"80"}/>
            </div>
            <div>      
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original-wordmark.svg" alt="Icon" width={"80"} height={"80"}/>
            </div>
            <div>      
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" alt="Icon" width={"80"} height={"80"}/>
            </div>
            <div>      
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" alt="Icon" width={"80"} height={"80"}/>
            </div>
            <div>      
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original-wordmark.svg" alt="Icon" width={"80"} height={"80"}/>
            </div>
          </div>

          <h3 className="text-yellow-500 text-2xl py-10">Back End</h3>

          <div className="grid grid-cols-3 gap-5 mx-auto max-w-lg bg-gray-500 py-5 px-5 rounded-2xl">
            <div>      
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" alt="Icon" width={"80"} height={"80"}/>
            </div>
            <div>      
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain-wordmark.svg" alt="Icon" width={"80"} height={"80"}/>
            </div>
            <div>      
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/djangorest/djangorest-plain-wordmark.svg" alt="Icon" width={"80"} height={"80"}/>
            </div>
            <div>      
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original-wordmark.svg" alt="Icon" width={"80"} height={"80"}/>
            </div>
            <div>      
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg" alt="Icon" width={"80"} height={"80"}/>
            </div>
          </div>

          <h3 className="text-yellow-500 text-2xl py-10">Deployment</h3>

          <div className="grid grid-cols-3 mx-auto max-w-lg bg-gray-500 py-5 px-5 rounded-2xl">
            <div>      
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/netlify/netlify-original-wordmark.svg" alt="Icon" width={"80"} height={"80"}/>
            </div>
            <div>      
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original-wordmark.svg" alt="Icon" width={"80"} height={"80"}/>
            </div>
            <div>      
              <Image src="/pythonanywhere.png" alt="Icon" width={"60"} height={"70"}/>
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-3xl text-white text-center" id="portfolio">Portfolio</h2>
      <br/>

      <div className="grid grid-cols-1 mx-auto max-w-lg justify-center py-5 gap-5 text-center bg-gray-500 px-10 rounded-2xl">
          <Image src={baks} alt="icon" width={900} height={700} className="hover:opacity-70"/>
          <p className="text-yellow-500 text-xl">Seifu Baks Driving School Admin Website </p>
          <a href="https://seifubaks.netlify.app" className="text-black underline">https://seifubaks.netlify.app/ 🔗</a>
          <p>A Driving School Adminstration Site That helps To Record Their fuel and oil repairing 
            history from their own and other branches which makes it easier to control every bit of 
            their financial records in this two catagories</p>
            <p>Used Tools</p>
            
            <div className="grid grid-cols-5">
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original-wordmark.svg" alt="Icon" width={"50"} height={"50"}/>
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" alt="Icon" width={"50"} height={"50"}/>
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original-wordmark.svg" alt="Icon" width={"50"} height={"50"}/>  
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain-wordmark.svg" alt="Icon" width={"50"} height={"50"}/>
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/djangorest/djangorest-plain-wordmark.svg" alt="Icon" width={"50"} height={"50"}/>
            </div>
      
          <a className="bg-yellow-600 px-10 py-3 rounded-full mx-auto" href="https://seifubaks.netlify.app">Show Live</a>
      </div>

      <div className="py-7">
        <div className="grid grid-cols-1 mx-auto max-w-lg justify-center py-5 gap-5 text-center bg-gray-500 px-10 rounded-2xl">
            <Image src={melkam} alt="icon" width={900} height={700} className="hover:opacity-70"/>
            <p className="text-yellow-500 text-xl">Melkam Ecommerce</p>
            <a href="https://melkamshop.netlify.app" className="text-black underline">https://melkamshop.netlify.app 🔗</a>
            <p>Full Stack Web app i have built for my local area to order online i have built this website based on my clients demand
              and i didn't add any credit card features because here in my country it's not available</p>
              <p>Used Tools</p>
            
            <div className="grid grid-cols-5">
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original-wordmark.svg" alt="Icon" width={"50"} height={"50"}/>
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" alt="Icon" width={"50"} height={"50"}/>
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" alt="Icon" width={"50"} height={"50"}/>  
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain-wordmark.svg" alt="Icon" width={"50"} height={"50"}/>
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/djangorest/djangorest-plain-wordmark.svg" alt="Icon" width={"50"} height={"50"}/>
            </div>
            <a className="bg-yellow-600 px-10 py-3 rounded-full mx-auto" href="https://melkamshop.netlify.app">Show Live</a>
        </div>
      </div>

      <div className="py-7">
        <div className="grid grid-cols-1 mx-auto max-w-lg justify-center py-5 gap-5 text-center bg-gray-500 px-10 rounded-2xl">
            <Image src={abc} alt="icon" width={900} height={700} className="hover:opacity-70"/>
            <p className="text-yellow-500 text-xl">Digital School System</p>
            <a href="https://abcschool.pythonanywhere.com" className="text-black underline">https://abcschool.pythonanywhere.com/🔗</a>
            <p>A Digital School System That's Built To Register Students, To Show Results And Analyse The Students Performance, To Let The Teachers And 
              Students Chat In Both Text And Video Calls
            </p>
              <p>Used Tools</p>
            
            <div className="grid grid-cols-5">
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original-wordmark.svg" alt="Icon" width={"50"} height={"50"}/>
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" alt="Icon" width={"50"} height={"50"}/>
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original-wordmark.svg" alt="Icon" width={"50"} height={"50"}/>    
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain-wordmark.svg" alt="Icon" width={"50"} height={"50"}/>
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/djangorest/djangorest-plain-wordmark.svg" alt="Icon" width={"50"} height={"50"}/>
            </div>
            <a className="bg-yellow-600 px-10 py-3 rounded-full mx-auto" href="https://abcschool.pythonanywhere.com">Show Live</a>
        </div>
      </div>

      <h2 className="text-center text-2xl text-white py-10">Contact Me</h2>

      <div className="grid grid-cols-4 mx-auto max-w-lg bg-gray-500 p-7 rounded-2xl" id="contact">
        <Link href="https://github.com/Amdesew">
          <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original-wordmark.svg" alt="github" width={"80"} height={"80"} />
        </Link>
        <Link href="mailto:frankamde77@gmail.com">
          <Image src={gmail} alt="gmail" height={70} className="rounded-full"/>
        </Link>
        <Link href="https://t.me/Greencode3">
          <Image src={telegram} alt="telegram" height={70} className="rounded-full"/> 
        </Link>
        <Link href="https://www.linkedin.com/in/amdesew-seifu-670588320?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
          <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg" alt="Linkedin" height={70} width={70}/>
        </Link>  
      </div>
    
    </div>
  );
}
