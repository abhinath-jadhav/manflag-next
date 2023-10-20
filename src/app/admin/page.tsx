"use client";

import { log } from "console";
import React from "react";

const page = () => {
  const data = [
    {
      id: "6522820b304bf229b071f19",
      name: "Abhinath",
      email: "dsdashjdgjhas@ghaksdj.com",
      mobile: 6781367812587,
      comment: "sbdvsavd",
    },
    {
      id: "65228224b34bf229b071f1a",
      name: "Aakah",
      email: "dsdashjdgjhas@ghaksdj.com",
      mobile: 6781367812587,
      comment: "sbdvsavd",
    },
    {
      id: "65228224b304bf229b71f1a",
      name: "Ravindra",
      email: "dsdashjdgjhas@ghaksdj.com",
      mobile: 6781367812587,
      comment: "sbdvsavd",
    },
  ];

  const agreed = (name: string) => {
    console.log("user agrred", name);
  };

  return (
    <div className="flex justify-center flex-col items-center">
      {data.map((ele) => (
        <div
          key={ele.id}
          className="flex justify-center items-center mt-10 gap-8 text-center border w-[300px]"
        >
          <ul>
            <li className="m-2">{ele.name}</li>
            <hr />
            <li className="mt-5">{ele.mobile}</li>
            <li>{ele.email}</li>
            <li>{ele.comment}</li>
            <div className="flex gap-3 justify-center">
              <button
                className="border bg-orange-400 px-2 py-1 rounded-md"
                onClick={() => agreed(ele.name)}
              >
                Yes
              </button>
              <button>no</button>
            </div>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default page;
