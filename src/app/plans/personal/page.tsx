import { PriceCard } from "@/components";
import React from "react";

const Personal = () => {
  return (
    <div className="flex gap-5 items-center justify-center mt-[120px] lg:h-screen lg:mt-0 mb-4 lg:mb-0">
      <div className="text-center">
        <h1 className="text-2xl lg:text-4xl">Packages : Personal training</h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3">
          <PriceCard
            title="Monthly Membership"
            price={3000}
            monthlyPrice={3000}
          />

          <PriceCard
            title="Half-yearly Membership"
            price={15000}
            monthlyPrice={2500}
          />
          <PriceCard
            title="Yearly Membership"
            price={24000}
            monthlyPrice={2000}
          />
        </div>
      </div>
    </div>
  );
};

export default Personal;
