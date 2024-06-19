// Home.js
import pic1im from "../img/bg1.png";
import Bgim from "../img/bg.png";
import illustration from "../img/illustration.png";
import androidDeveloper from "../img/andriod-developer.png";
import dataAnalysist from "../img/data-analysist.png";
import content from "../img/content.png";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { FaRegCircleCheck } from "react-icons/fa6";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Footer from "./Footer";

function Home() {
  return (
    <>
      <Navbar />
      <section className="flex flex-col items-center justify-center h-[94vh] px-10 lg:flex-row lg:justify-between">
        <img src={Bgim} className="w-[18rem] md:w-[25rem] lg:mt-0" />
        <div>
          <p
            className="text-center lg:ml-[5rem] text-2xl md:text-4xl text-gray-200 mt-10 font-semibold lg:mt-0"
            style={{ fontFamily: "Titillium Web", lineHeight: "1.3" }}
          >
            Embark on a journey of professional freedom with our freelance
            platform! Join a vibrant community of skilled individuals and
            discover a world of exciting opportunities tailored to your
            expertise.
          </p>
          <div className="flex justify-center mt-20">
            <Link to="/Gigs">
              <button
                type="submit"
                className="w-[15rem] h-[3.5rem] font-semibold bg-gray-100 text-blue-900 rounded-md hover:bg-blue-900 hover:text-gray-100 duration-300"
              >
                <div className="flex items-center justify-center">
                  <div className="pr-5 text-xl">Explore community</div>
                  <BsFillPersonLinesFill className="text-2xl" />
                </div>
              </button>
            </Link>
          </div>
          {/* <div className="flex justify-center mt-20">
            <input
              type="text"
              className="border-2 w-[12rem] md:w-[20rem] lg:ml-[5rem] px-4 py-2 rounded-tl-md rounded-bl-md focus:outline-none"
              placeholder="Explore Community"
            />
            <button
              type="submit"
              className="w-[8rem] bg-blue-900 text-white rounded-tr-md rounded-br-md hover:bg-blue-950 duration-500"
            >
              <div className="flex items-center justify-center">
                <div className="pr-5">Search</div>
                <FiSearch />
              </div>
            </button>
          </div> */}
        </div>
      </section>
      <section className="h-[100%] w-[100%] bg-gray-50">
        <h1 className=" pl-10 text-4xl font-bold pt-14 text-gray-700 pb-5">
          Popular Services
        </h1>
        <div className="flex items-center justify-around flex-col md:flex-row md:flex-wrap pt-14 px-10">
          <div>
            <p className="absolute text-lg text-gray-100 pl-5 pt-2 text-center">
              Results on data
            </p>
            <h1 className="absolute text-2xl text-gray-100 font-bold pl-5 pt-8 text-center">
              Data Analysist
            </h1>
            <img
              id="img1"
              src={dataAnalysist}
              className="rounded-md pb-8 pr-2 pl-2"
            />
          </div>
          <div>
            <p className="absolute text-lg text-gray-100 pl-5 pt-2 text-center">
              Bussiness in mobile app
            </p>
            <h1 className="absolute text-2xl text-gray-100 font-bold pl-5 pt-8 text-center">
              Mobile App
            </h1>
            <img src={androidDeveloper} className="rounded-md pb-8 pr-2 pl-2" />
          </div>
          <div>
            <p className="absolute text-lg text-gray-100 pl-5 pt-2 text-center">
              Illustrating designs
            </p>
            <h1 className="absolute text-2xl text-gray-100 font-bold pl-5 pt-8 text-center">
              Illustration
            </h1>
            <img src={illustration} className="rounded-md pb-8 pr-2 pl-2" />
          </div>
          <div>
            <p className="absolute text-lg text-gray-100 pl-5 pt-2 text-center">
              Illustrating designs
            </p>
            <h1 className="absolute text-2xl text-gray-100 font-bold pl-5 pt-8 text-center">
              Content Createor
            </h1>
            <img src={content} className="rounded-md pb-8 pr-2 pl-2" />
          </div>
        </div>
        <hr className="bg-gray-300 h-[0.15rem] mx-10" />
      </section>
      <section className="h-[100%] block lg:flex lg:justify-between lg:items-center p-10 bg-gray-50">
        <div className="space-y-5">
          <h1 className="text-4xl font-bold text-gray-700 pb-5">
            The best part? Everything.
          </h1>
          <div className="text-xl font-semibold text-gray-700 w-[100%] lg:w-[45vw]">
            <div className="flex items-center space-x-2 pb-2">
              <FaRegCircleCheck />
              <h2 className="font-bold">Stick to your budgets</h2>
            </div>
            <p className="text-gray-500">
              Find the right service for every price point. No hourly rates,
              just project-based pricing.
            </p>
          </div>
          <div className="text-xl font-semibold text-gray-700 w-[100%] lg:w-[45vw]">
            <div className="flex items-center space-x-2 pb-2">
              <FaRegCircleCheck />
              <h2 className="font-bold">Get quality work done quickly</h2>
            </div>
            <p className="text-gray-500">
              Hand your project over to a talented freelancer in minutes, get
              long-lasting results.
            </p>
          </div>
          <div className="text-xl font-semibold text-gray-700 w-[100%] lg:w-[45vw]">
            <div className="flex items-center space-x-2 pb-2">
              <FaRegCircleCheck />
              <h2 className="font-bold">Pay when you're happy</h2>
            </div>
            <p className="text-gray-500">
              Upfront quotes mean no surprises. Payments only get released when
              you approve.
            </p>
          </div>
          <div className="text-xl font-semibold text-gray-700 w-[100%] lg:w-[45vw]">
            <div className="flex items-center space-x-2 pb-2">
              <FaRegCircleCheck />
              <h2 className="font-bold">Count on 24/7 support</h2>
            </div>
            <p className="text-gray-500">
              Our round-the-clock support team is available to help anytime,
              anywhere.
            </p>
          </div>
        </div>
        <div className="flex justify-center lg:block">
          <img src={pic1im} className="w-[80vw] mt-14 lg:w-[30vw] rounded-md" />
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Home;
