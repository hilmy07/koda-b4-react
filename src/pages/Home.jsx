import React from "react";
import home1 from "../assets/home1.png";
import home2 from "../assets/home2.png";
import home3 from "../assets/home3.png";
import home4 from "../assets/home4.png";
import home5 from "../assets/home5.png";
import home6 from "../assets/home6.png";
import home7 from "../assets/home7.png";
import home8 from "../assets/home8.png";
import Navbar from "../components/Navbar";
import checklist from "../assets/checklist.png";
import CardProduct from "../components/CardProduct";
import Footer from "../components/Footer";
import ChatWidget from "../components/ChatWidget";

function Home() {
  return (
    <>
      <div className="overflow-hidden">
        <Navbar />
        <div className="relative w-screen h-screen overflow-hidden">
          {/* kiri */}
          <div
            className="absolute top-0 left-0 w-1/2 h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${home1})` }}
          >
            <div className="text-white max-w-md m-auto mt-50">
              {/* Heading */}
              <h1 className="text-3xl font-bold leading-snug mb-6">
                Start Your Day with <br /> Coffee and Good Meals
              </h1>

              {/* Description */}
              <p className="text-l leading-relaxed mb-8">
                We provide high quality beans, good taste, and healthy meals
                made by love just for you. Start your day with us for a bigger
                smile!
              </p>

              {/* Buttons */}
              <div className="flex items-center gap-4 mb-10">
                <button className="bg-orange-500 text-white px-5 py-2 rounded hover:bg-orange-600 transition">
                  Get Started
                </button>
              </div>

              {/* Stats */}
              <div className="flex gap-8 text-center">
                <div>
                  <p className="text-orange-500 text-4xl font-bold">90+</p>
                  <p className="text-xl">Staff</p>
                </div>

                <div className="border-l border-white pl-6">
                  <p className="text-orange-500 text-4xl font-bold">30+</p>
                  <p className="text-xl">Stores</p>
                </div>

                <div className="border-l border-white pl-6">
                  <p className="text-orange-500 text-4xl font-bold">800+</p>
                  <p className="text-xl">Customer</p>
                </div>
              </div>
            </div>
          </div>

          {/* kanan */}
          <div
            className="absolute top-0 right-0 w-1/2 h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${home2})` }}
          ></div>
        </div>
        <div className="relative w-screen h-screen overflow-hidden">
          {/* kiri */}
          <div className="ml-35 mt-35">
            <div className="">
              <h1 className="text-4xl font-medium">
                <span className="ml-7 inline-block">We Provide</span>
                <span className="text-[#8E6447]"> Good</span> <br />
                <span className="text-[#8E6447] border-l-4 border-[#ff8906] pl-6">
                  Coffee
                </span>{" "}
                and <span className="text-[#8E6447]">Healthy </span> <br />
                <span className="text-[#8E6447] ml-7">Meals</span>
              </h1>
            </div>
            <div>
              <ul className="flex flex-col gap-[20px] mt-[20px]">
                <li className="flex gap-[10px]">
                  <img src={checklist} alt="Checklist" />
                  High quality beans
                </li>
                <li className="flex gap-[10px]">
                  <img src={checklist} alt="Checklist" />
                  Healthy meals, you can request the ingredients
                </li>
                <li className="flex gap-[10px]">
                  <img src={checklist} alt="Checklist" />
                  Chat with our staff to get better experience for ordering
                </li>
                <li className="flex gap-[10px]">
                  <img src={checklist} alt="Checklist" />
                  Free member card with a minimum purchase of IDR 200.000.
                </li>
              </ul>
            </div>
          </div>

          {/* kanan */}
          <div
            className="absolute top-0 right-0 w-1/2 h-3/4 bg-cover bg-center"
            style={{ backgroundImage: `url(${home3})` }}
          ></div>
        </div>
        <div>
          <h1 className="text-5xl text-center mt-[-110px]">
            Here is People's <span className="text-[#8e6447]">Favorite</span>
          </h1>
          <div className="border-b-7 border-[#ff8906] w-1/23 mx-auto mt-10"></div>
          <p className="text-l text-[#4f5665] text-center mt-10 mb-[-150px]">
            Let's choose and have a bit taste of people's favorite. It might be
            yours too!
          </p>
          <CardProduct />
        </div>
        <div
          className="relative bg-[#f7f4f4] mt-[90px] overflow-visible pt-[50px] pb-[50px] px-10"
          style={{ minHeight: "125vh" }}
        >
          {/* Judul */}
          <h1 className="text-5xl text-center mt-[5px] mb-[40px] relative z-10">
            <span className="text-[#8e6447]">Visit Our Store</span> in the Spot
            on the Map Below
          </h1>

          <div className="border-b-7 border-[#ff8906] w-1/29 mx-auto"></div>

          <p className="text-l text-[#4f5665] text-center mt-8">
            You can explore the menu that we provide with fun and have their own
          </p>
          <p className="text-l text-[#4f5665] text-center">
            taste and make your day better
          </p>

          {/* Background image div dengan inset dikurangi supaya ada margin */}
          <div
            className="absolute top-[250px] bottom-[50px] left-[200px] right-[200px] bg-contain bg-center bg-no-repeat z-0"
            style={{ backgroundImage: `url(${home4})` }}
          ></div>
        </div>
        <div
          className="relative w-full h-[60vh] flex align-center"
          style={{
            backgroundImage: `url(${home5})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute top-15 left-20 right-0 bottom-15">
            <img
              src={home6}
              alt="user"
              className="max-w-full max-h-full object-contain"
            />
          </div>
          <div className="mt-15 ml-140">
            <p className="text-white text-2xl">Testimonial</p>
            <h1 className="text-white text-5xl border-l-6 border-[#ff8906] pl-5 mt-4">
              Viezh Robert
            </h1>
            <p className="text-[#ff8906] mt-1">Manager Coffee Shop</p>
            <div className="mt-2">
              <p className="text-white text-l">
                "Wow... I am very happy to spend my whole day here. The wifi is"
              </p>
              <p className="text-white text-l">
                good, and coffee and meals tho. I like it here!!Very
              </p>
              <p className="text-white text-l">recomended!</p>
            </div>
            <div className="mt-2">
              <img src={home7} alt="review" />
            </div>
            <div className="flex align-center">
              <button className="absolute top-81 left-140 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md border border-gray-400 flex items-center justify-center cursor-pointer">
                <span className="text-gray-700 font-bold text-lg">{"<"}</span>
              </button>
              <button className="absolute top-81 left-153 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md border border-gray-400 flex items-center justify-center cursor-pointer">
                <span className="text-gray-700 font-bold text-lg">{">"}</span>
              </button>
            </div>
            <div className="mt-17">
              <img src={home8} alt="loadReview" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white mt-0 h-13"></div>
      <ChatWidget />
      <Footer />
    </>
  );
}

export default Home;
