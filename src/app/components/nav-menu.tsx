"usec client";

import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "#about" },
  { name: "Reservation", href: "#service" },
  { name: "Contact", href: "#contact" },
];

const NavigationMenu = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <nav
        className="flex items-center justify-between p-4 h-20 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="https://ostenlaboratory.com/">
            <span className="sr-only">Osten Laboratory</span>
            <img
              className=""
              src="/osten-logo.png"
              alt="logo"
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-lg font-semibold leading-6 text-gray-900 hover:text-[#fbbc04] transition ease-in"
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <button className="text-lg bg-[#fbbc04] transition ease-in hover:bg-transparent border-2 border-[#fbbc04] px-5 py-1.5 font-semibold leading-6 text-gray-900 rounded-md border-solid ">
            Log in
          </button>
        </div>
      </nav>
      <Dialog
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-3 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
              className=""
              src="/osten-logo.png"
              alt="logo"
              width={120}
              height={120}
            />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:text-[#fbbc04] transition ease-inx hover:bg-gray-50"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 hover:text-[#fbbc04]"
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </>
  );
};

export default NavigationMenu;
