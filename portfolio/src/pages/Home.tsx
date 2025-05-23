import Card from "@/components/Card"
import { TechIcons } from "@/components/TechIcons"
import { Button } from "@/components/ui/button"

import { FaGithub, FaInstagram } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";

const Home = () => {
  return (
    <div className="px-4 sm:px-6 md:px-16 lg:px-32 max-w-5xl mx-auto mt-12 sm:mt-16 w-full flex flex-col gap-12">

    <Card 
    title={  <div> <h2 >César García </h2>
        <h4><span className='text-gradient-se'>Software Engineering</span></h4>
        <p className="text-gray-400 text-sm sm:text-base font-light">
            Calgary, Alberta/El Salvador
            </p>
        </div>}     
    description= {
    <>
    <p className="text-white">
        I am a 20 year-old software engineering student with a strong desire to 
        learn and grow in the field.
    </p>
    
    <div className="flex flex-row gap-2 mt-4">
        <a href="https://github.com/cesargarciari" target="_blank" rel="noopener noreferrer">
        <Button variant="secondary" className="home-button"><FaGithub className="text-black" /></Button>
        </a>
        
        <a href="https://www.linkedin.com/in/cesargarciarivas/" target="_blank" rel="noopener noreferrer">
        <Button variant="secondary" className="home-button"><IoLogoLinkedin className="text-black size={32}"/></Button>
        </a>   
        
        <a href="https://www.instagram.com/cesargarciaar/" target="_blank" rel="noopener noreferrer">
        <Button variant="secondary" className="home-button"><FaInstagram className="text-black"/></Button>
        </a>   
    </div>
                </>}>
    </Card>   

    <section className="w-full">
        <h2 className="mb-4">What I work with</h2>
        <TechIcons />
      </section>

      <section className="w-full">
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            variant="secondary"
            className="w-full sm:w-auto bg-gradient-to-r from-[#00C9FF] to-[#00ffc3] text-shadow-amber-50 hover:cursor-pointer"
          >
            Download CV
          </Button>
        </a>
      </section>

      <section>
      <blockquote className="text-lg italic text-gray-300 max-w-2xl mx-auto border-l-4 border-cyan-400 pl-4">
    “Strive For Greatness”
  </blockquote>
      </section>
    </div>
  )
}

export default Home