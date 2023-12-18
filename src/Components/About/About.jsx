import { BsFillPersonFill } from "react-icons/bs";
import { FaProjectDiagram } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import {  IoMdMail } from "react-icons/io";
import { RiHomeHeartFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="flex  justify-center items-center ">
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
        <Link to="/contact">
          <IoMdMail
            title="Contact"
            className="cursor-pointer hover:text-gray-400"
            size={35}
          />
        </Link>
      </div>

      <div className="w-10/12 mx-auto mb-10">
        <h2 className="text-4xl font-bold uppercase text-center font-serif mt-5 md:mt-20 bg-gray-200 w-64 py-2 mx-auto rounded-lg text-black">
          about me
        </h2>
        <div
          className=" text-center text-2xl font-serif text-slate-300   px-10 my-5 md:w-2/3 mx-auto"
          data-aos="fade-left"
          data-aos-duration="2000"
        >
          {" "}
          A Frontend Developer with a passion for crafting delightful digital
          interfaces. Skilled in the artistry of{" "}
          <span className="text-orange-500"> HTML</span> ,{" "}
          <span className="text-violet-500">CSS</span> ,{" "}
          <span className="text-yellow-500">JavaScript</span> and I have a
          gentle touch with <span className="text-blue-500">React.</span>{" "}
        </div>

        <div>
          <h2 className="text-4xl font-bold uppercase text-center font-serif mt-7 md:mt-20 bg-gray-200 w-[350px]  py-3 mx-auto rounded-lg text-black">
            My Education{" "}
          </h2>

          <div className="flex flex-col md:flex-row mt-5 items-center justify-center gap-5 ">
            <div className="border p-5 text-center rounded-lg  ">
              <h2 className="text-2xl font-serif font-semibold md:text-3xl">Bachelor of Science in Zoology</h2>
              <h2 className="text-xl font-serif">National University 2018 - present</h2>
            </div>
            <div className="border p-5 text-center rounded-lg ">
                <h2 className="text-2xl font-serif font-semibold md:text-3xl">Complete Web Development Course</h2>
                <a href="https://web.programming-hero.com/home"><h2 className="text-xl font-serif">Programming Hero</h2></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
