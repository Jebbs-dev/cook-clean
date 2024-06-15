import React from "react";
import Image from "next/image";
import { foot_wigs } from "./data/widgets";

import { Facebook, Twitter, Instagram } from "lucide-react";



export const Footer = () => {
  return (
    <>
      <footer className="bg-green-900 p-10 text-white">
        <div className=" max-w-7xl mx-auto grid lg:grid-cols-footer gap-5 md:grid-cols-3 md:gap-10 ">
          <div className="">
            <a href="/" className="flex items-center mb-4">
              <Image
                src="/osten-logo.png"
                width={35}
                height={35}
                alt="deliLogo"
                className="mr-2"
              />
              <span className="font-semibold text-lg">Osten Laboratory</span>
            </a>
            <p className="opacity-40">
              Revolutionize diagnosis with AI-driven symptom analysis to
              delivers precise assessments, leveraging advanced algorithms for
              accurate insights.
            </p>
            <div className="flex flex-row mt-5">
              <div className="flex rounded-full h-8 w-8 items-center justify-around text-white mr-3">
                <Facebook className="align-middle" color="#fbbc04" />
              </div>
              <div className="flex rounded-full h-8 w-8 items-center justify-around  text-white mr-3">
                <Twitter className="align-middle" color="#fbbc04" />
              </div>
              <div className="flex rounded-full h-8 w-8 items-center justify-around text-white">
                <Instagram color="#fbbc04" />
              </div>
            </div>
          </div>

          <div className="">
            <h3 className="text-[18px] font-semibold mb-4">Quick Links</h3>
            <div className="flex flex-col justify-around opacity-40 space-y-2">
              <a href="/">
                <span>Home</span>
              </a>
              <a href="#explore">
                <span>Explore</span>
              </a>
              <a href="#features">
                <span>Features</span>
              </a>
              <a href="#diagnosis">
                <span>Diagnosis</span>
              </a>
            </div>
          </div>

          <div className="">
            <h3 className="text-[18px] font-semibold mb-4">About Us</h3>
            <div className="flex flex-col justify-around opacity-40  space-y-2">
              <a href="/" className="">
                <span>Terms and condtions</span>
              </a>
              <a href="/">
                <span>Privacy policy</span>
              </a>
              <a href="/">
                <span>Contact</span>
              </a>
              <a href="/">
                <span>About us</span>
              </a>
            </div>
          </div>

          <div className="">
            <h3 className="text-[18px] font-semibold mb-4">Get in Touch</h3>

            {foot_wigs.map((foot) => {
              return (
                <>
                  <div
                    className="flex items-center space-x-2 mb-2 opacity-40"
                    key={foot.id}
                  >
                    <div className="shrink-0 text-white stroke-[#fbbc04]">
                      <foot.icon style={{ color: "#fbbc04" }} />
                    </div>
                    <div>
                      <p className="">{foot.text}</p>
                    </div>
                  </div>
                </>
              );
            })}
          </div>

          <div className="">
            <div>
              <p className="opacity-40">
                &copy; Osten Laboratory 2024. All rights reserved{" "}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};