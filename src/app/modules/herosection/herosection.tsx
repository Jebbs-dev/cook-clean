"use client";

import Link from "next/link";
import NavigationMenu from "../../components/nav-menu";
import { Clock, MoveRight } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50">
        <NavigationMenu />
      </header>

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-[85vw]">
          <div className="grid md:auto-cols-fr gap-5 items-center md:grid-cols-2">
            <div className="flex flex-col py-5">
              <h1 className="font-bold text-4xl md:text-5xl leading-10 md:leading-[65px] text-hair font-sans py-3">
                Eco-friendly Cooking Campaign.
              </h1>
              <p className="text-1xl md:text-2xl opacity-40">
                Cook Green, Eat Well. Delicious Meals for a Healthy Planet.
              </p>
              <div className="flex flex-row justify-around md:justify-start space-x-5 my-5 py-3 ">
                <div className="w-1/2 md:w-auto">
                  <Link href="#contact">
                    <button
                      type="button"
                      className="rounded-md w-full px-4 py-2 text-white border-solid border-[1px] bg-[#fbbc04] border-[#fbbc04] hover:bg-yellow-500 transition"
                    >
                      Reserve a spot
                    </button>
                  </Link>
                </div>
                <div className="w-1/2 md:w-auto">
                  <Link href="#services">
                    <button
                      type="button"
                      className="peer rounded-md w-full  px-4 py-2 border-solid border-[1px] text-hair border-[#fbbc04] mr-3 hover:bg-yellow-500 hover:text-white transition"
                    >
                      Learn more
                      {/* <span className="peer hidden peer-hover:block"><MoveRight size={24}/></span> */}
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="">
              <img src="/heroimage.png" alt="Woman cooking" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
