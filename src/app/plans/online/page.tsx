import { Princing, PriceCard } from "@/components";
import React from "react";

const Online = () => {
  return (
    <div className="flex gap-5 lg:items-center justify-center mt-[120px] lg:h-screen lg:mt-0">
      <div className="text-center">
        <h1 className="text-5xl font-semibold">Packages : Online Training</h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3">
          <PriceCard
            title="Monthly Membership"
            price={2000}
            monthlyPrice={2000}
          />

          <PriceCard
            title="Half-yearly Membership"
            price={10800}
            monthlyPrice={1800}
          />
          <PriceCard
            title="Yearly Membership"
            price={18000}
            monthlyPrice={1500}
          />
        </div>
      </div>
    </div>
  );
};

export default Online;
