import { PriceCard } from "@/components";
import React from "react";

const Offline = () => {
  return (
    <div className="flex gap-5 items-center  justify-center mt-[120px] lg:h-screen lg:mt-0">
      <div className="text-center">
        <h1 className="text-2xl lg:text-4xl font-semibold">
          Packages: Inhouse training
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3">
          <PriceCard
            title="Monthly Membership"
            price={800}
            monthlyPrice={800}
          />

          <PriceCard
            title="Half-yearly Membership"
            price={4200}
            monthlyPrice={700}
          />
          <PriceCard
            title="Yearly Membership"
            price={7200}
            monthlyPrice={600}
          />
        </div>
      </div>
    </div>
  );
};
export default Offline;
