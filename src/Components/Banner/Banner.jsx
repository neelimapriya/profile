import { RiHomeHeartFill } from "react-icons/ri";
import { BsFillPersonFill } from "react-icons/bs";
import { GiSkills } from "react-icons/gi";

import { FaCloudDownloadAlt, FaFacebook, FaGithub, FaLinkedin, FaLocationArrow, FaProjectDiagram } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import image from "../../assets/myPicture-removebg.png";
import { Typewriter } from "react-simple-typewriter";
import "./banner.css";
import { Link } from "react-router-dom";




const Banner = () => {
  return (
    <div className="flex ">
        
      <div className=" min-h-screen flex flex-col gap-7 items-center justify-center lg:ml-20   md:w-2/12 pb-32">
        <Link to="/">
          {" "}
          <RiHomeHeartFill
            title="Home"
            className="cursor-pointer hover:text-gray-400"
            size={35}
          />
        </Link>

        <Link to="/about">
          {" "}
          <BsFillPersonFill
            title="About"
            className="cursor-pointer hover:text-gray-400"
            size={35}
          />
        </Link>

        <Link to="/skill">
          <GiSkills
            title="Skills"
            className="cursor-pointer hover:text-gray-400"
            size={35}
          />
        </Link>

     

        <Link to="/project">
          {" "}
          <FaProjectDiagram
            title="Projects"
            className="cursor-pointer hover:text-gray-400"
            size={35}
          />
        </Link>
        <Link to='/contact'>
          <IoMdMail
            title="Contact"
            className="cursor-pointer hover:text-gray-400"
            size={35}
          />
        </Link>
      </div>
      <div className=" mb-32 w-10/12 grid grid-cols-1 md:grid-cols-2 justify-around items-center ">
        <div className="order-1 md:order-2 ">
        <img className="w-52  md:w-96 shadow-3xl shadow-white" src={image} alt="" />
        </div>
       <div className="order-2 md:order-1">
       <h2 className="text-2xl font-semibold md:text-6xl font-serif mt-2">
          Meet Nelima Sultana
        </h2>
        <h2 className="shadow mt-2 text-xl md:text-3xl font-serif">
          I am a{" "}
          <span style={{ color: "white", fontWeight: "bold" }}>
            {/* Style will be inherited from the parent element */}
            <Typewriter
              words={[
                "Front-End Developer",
                "MERN Stack Developer",
                "ReactJs Developer",
              ]}
              loop={5}
              cursor
              cursorStyle="."
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h2>
        <div className="flex flex-col md:flex-row mt-3 gap-1">
        <div className="flex justify-center items-center gap-1  px-2 border border-white rounded-lg text-white  hover:bg-gradient-to-r from-slate-400 to-gray-500">
        <FaCloudDownloadAlt />
        <a  href="/neelimas_resume.pdf" download>
            Download Resume
        </a>
      </div>
        <div className="flex justify-center items-center gap-1  px-2 py-2  border border-white rounded-lg text-white text-center  hover:bg-gradient-to-r from-slate-400 to-gray-500">
        <FaLocationArrow />
        <a  href="/neelimas_resume.pdf" >
            view Resume
        </a>
      </div>
        </div>
        <div className="flex gap-4 mt-5">
            <a href="https://github.com/neelimapriya" ><FaGithub size={30}></FaGithub></a>
            
           <a href=""> <FaFacebook size={30}></FaFacebook></a>
            <a href="https://www.linkedin.com/in/nelima-sultana-7b4280298"><FaLinkedin size={30}></FaLinkedin></a>
        </div>
       </div>
        
      </div>
    </div>
  );
};

export default Banner;
