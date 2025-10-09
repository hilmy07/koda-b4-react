import React, { useState } from "react";
import NavbarProduct from "../components/NavbarProduct";
import productBg from "../assets/productBg.png";
import Promo from "../components/Promo";
import Footer from "../components/Footer";
import FilterSidebar from "../components/FilterSideBar";
import ProductCard from "../components/ProductCard";
import DotsPager from "../components/DotsPagger";

function Product() {
  const [activeDot, setActiveDot] = useState(1);
  const [filters, setFilters] = useState({
    search: "",
    categories: {
      coffee: true,
      favorite: false,
      nonCoffee: false,
      foods: false,
      addon: false,
    },
    sortBy: "flash",
    price: [0, 700],
  });

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
      <div>
        <h2 className="text-4xl font-semibold my-10 ml-25">
          Our <span className="text-[#8e6447]">Product</span>
        </h2>
        <div className="flex">
          <FilterSidebar
            values={filters}
            onChange={setFilters}
            onApply={() => {}}
            onReset={() =>
              setFilters({
                search: "",
                categories: {},
                sortBy: "flash",
                price: [0, 700],
              })
            }
            minPrice={0}
            maxPrice={700}
          />
          <ProductCard />
        </div>
      </div>
      <div className="ml-100">
        <DotsPager page={activeDot} count={4} onChange={setActiveDot} />
      </div>
      <Footer />
    </>
  );
}

export default Product;
