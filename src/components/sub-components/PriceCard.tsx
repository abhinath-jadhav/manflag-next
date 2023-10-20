import React from "react";

const PriceCard = ({
  title,
  price,
  monthlyPrice,
}: {
  title: string;
  price: number;
  monthlyPrice: number;

}) => {

  


  return (
    <div className="border-2 rounded-lg p-4 mt-5 mx-2 w-[300px] lg:w-[350px] bg-slate-950 bg-opacity-60">
      <div className="flex flex-col gap-2">
        <h1 className=" text-2xl md:text-3xl">{title}</h1>
        <h3 className="text-4xl md:text-5xl font-bold text-orange-400">
          ₹{price}
        </h3>
        <p>₹{monthlyPrice}/Month</p>
        <div className="flex justify-center gap-2">
          <button className="text-lg md:text-xl font-semibold border bg-slate-50 text-slate-900 rounded-full px-4 py-2 hover:bg-orange-400 hover:text-slate-50 hover:border-orange-400">
            Inquire Now
          </button>
          <button className="text-lg md:text-xl font-semibold border bg-slate-50 text-slate-900 rounded-full px-4 py-2 hover:bg-orange-400 hover:text-slate-50 hover:border-orange-400">
            <a href="tel:+919503698655">Call Us</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PriceCard;
