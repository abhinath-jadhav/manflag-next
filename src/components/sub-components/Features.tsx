import React from "react";
import { DollarSign, Zap, Moon } from "lucide-react";
import { SiGooglemeet } from "react-icons/si";
import { FaHandsHelping, FaDumbbell } from "react-icons/fa";

export default function Feature() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-[6rem] lg:mt-0">
      <div className="mx-auto max-w-xl text-center">
        <h2 className="mt-6 text-3xl font-bold leading-tight text-slate-50 sm:text-4xl lg:text-5xl">
          We provide all necessary services
        </h2>
        <p className="mt-4 text-base leading-relaxed text-slate-50">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit.
        </p>
      </div>
      <div className="mt-8 grid grid-cols-1 gap-y-6 text-center sm:grid-cols-3 sm:gap-12 lg:grid-cols-3">
        <div>
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
            <FaDumbbell className="h-9 w-9 text-slate-900" />
          </div>
          <h3 className="mt-3 text-lg font-semibold text-slate-50">
            Inhouse Training
          </h3>
        </div>
        <div>
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
            <FaHandsHelping className="h-9 w-9 text-slate-900" />
          </div>
          <h3 className="mt-3 text-lg font-semibold text-slate-50">
            Personal training
          </h3>
        </div>
        <div>
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
            <SiGooglemeet className="h-9 w-9 text-slate-900" />
          </div>
          <h3 className="mt-3 text-lg font-semibold text-slate-50">
            Online Training
          </h3>
        </div>
      </div>
    </div>
  );
}
