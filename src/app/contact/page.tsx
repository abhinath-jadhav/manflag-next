"use client";

import React, { useState } from "react";
import Img from "../../assets/contact.png";
import { Container, Navbar } from "@/components";
import Image from "next/image";
import { sendEmail } from "@/util/api.util";

const locations = [
  {
    title: "Kusur Stop",
    timings: "Mon-Sat 4am to 10pm & 4pm to 9pm",
    address: "Near Kusur bus stop, Kusrun, Karad, Satara",
  },
];
const emptyForm = {
  firstName: "",
  lastname: "",
  email: "",
  contact: "",
  message: "",
};
export default function ContactPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [formData, setformData] = useState(emptyForm);

  const handleFormSubmit = async (event: any) => {
    event.preventDefault();
    await sendEmail(formData);
    setformData(emptyForm);
  };

  const handleChange = (e: React.ChangeEvent<any>) => {
    const name = e.target.name;
    const value = e.target.value;

    setformData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <Container>
        <Navbar />

        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-7xl py-12 md:py-24">
            <div className="grid items-center justify-items-center gap-x-4 gap-y-10 lg:grid-cols-2">
              {/* contact from */}
              <div className="flex items-center justify-center text-slate-50">
                <div className="px-2 md:px-12">
                  <p className="text-2xl font-bold  md:text-4xl">
                    Get in touch
                  </p>
                  <p className="mt-4 text-l">
                    Our friendly team would love to hear from you.
                  </p>
                  <form action="" className="mt-8 space-y-4">
                    <div className="grid w-full gap-y-4 md:gap-x-4 lg:grid-cols-2">
                      <div className="grid w-full  items-center gap-1.5">
                        <label
                          className="text-sm font-medium leading-none  peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          htmlFor="first_name"
                        >
                          First Name
                        </label>
                        <input
                          onChange={handleChange}
                          value={formData.firstName}
                          name="firstName"
                          className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                          type="text"
                          id="first_name"
                          placeholder="First Name"
                        />
                      </div>
                      <div className="grid w-full  items-center gap-1.5">
                        <label
                          className="text-sm font-medium leading-none  peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          htmlFor="last_name"
                        >
                          Last Name
                        </label>
                        <input
                          onChange={handleChange}
                          name="lastname"
                          value={formData.lastname}
                          className="flex h-10 w-full rounded-md border bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                          type="text"
                          id="last_name"
                          placeholder="Last Name"
                        />
                      </div>
                    </div>
                    <div className="grid w-full  items-center gap-1.5">
                      <label
                        className="text-sm font-medium leading-none  peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <input
                        onChange={handleChange}
                        name="email"
                        value={formData.email}
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                        type="text"
                        id="email"
                        placeholder="Email"
                      />
                    </div>
                    <div className="grid w-full  items-center gap-1.5">
                      <label
                        className="text-sm font-medium leading-none  peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        htmlFor="phone_number"
                      >
                        Phone number
                      </label>
                      <input
                        onChange={(e) => {
                          handleChange(e);
                        }}
                        value={formData.contact}
                        name="contact"
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                        type="telephone"
                        id="phone_number"
                        placeholder="Phone number"
                      />
                    </div>
                    <div className="grid w-full  items-center gap-1.5">
                      <label
                        className="text-sm font-medium leading-none  peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        htmlFor="message"
                      >
                        Message
                      </label>
                      <textarea
                        onChange={(e) => {
                          handleChange(e);
                        }}
                        name="message"
                        value={formData.message}
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                        id="message"
                        placeholder="Leave us a message"
                        cols={3}
                      />
                    </div>
                    <button
                      onClick={handleFormSubmit}
                      type="button"
                      className="w-full rounded-md bg-orange-400 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
              <Image
                alt="Contact us"
                width={"500"}
                height={"300"}
                className="hidden max-h-full w-full rounded-lg object-cover lg:block"
                src={Img}
              />
            </div>
          </div>
        </div>
        {/* Address */}
        <div className="rounded-lg bg-gray-100">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="py-20">
              <div className="grid grid-cols-1 gap-x-20 gap-y-8 lg:grid-cols-2">
                <div className="space-y-4">
                  <p className="w-full text-4xl font-bold text-gray-900">
                    Address
                  </p>
                  <p className="w-full text-lg text-gray-600">
                    Find us at locations.
                  </p>
                </div>
                <div className="space-y-4 divide-y-2">
                  {locations.map((location) => (
                    <div
                      key={location.title}
                      className="flex flex-col space-y-2 pt-4 first:pt-0 lg:w-full"
                    >
                      <p className="w-full text-xl font-semibold  text-gray-900">
                        {location.title}
                      </p>
                      <p className="w-full text-base  text-gray-600">
                        {location.timings}
                      </p>
                      <p className="text-sm font-semibold text-gray-600">
                        {location.address}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* footer */}
      </Container>
    </>
  );
}
