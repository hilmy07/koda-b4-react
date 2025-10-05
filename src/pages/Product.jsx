import React from "react";
import NavbarProduct from "../components/NavbarProduct";
import productBg from "../assets/productBg.png";
import Promo from "../components/Promo";
import Footer from "../components/Footer";

function Product() {
  return (
    <>
      <NavbarProduct />
      <div
        className="w-full flex items-center justify-start px-40 py-36"
        style={{
          backgroundImage: `url(${productBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="text-5xl text-white">
          We Provide Good Coffee and Healthy <br />
          Meals
        </h1>
      </div>
      <div className="">
        <h2 className="text-4xl font-semibold mt-10 ml-25">
          Today <span className="text-[#8e6447]">Promo</span>
        </h2>
        <Promo />
      </div>
      <Footer />
    </>
  );
}

export default Product;
