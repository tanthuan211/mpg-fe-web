import { Fragment, useCallback, useEffect, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { Heading, IconAccount, IconBag, IconMenu } from "@components/elements";
import { useWindowScroll } from "react-use";
import { useRouter } from "next/router";

const user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};
const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "Monitor", href: "/monitor", current: false },
  { name: "Features", href: "/features", current: false },
  { name: "Membership", href: "/membership", current: false },
  { name: "News", href: "/news", current: false },
];
const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];

function CartBadge({ dark }: { dark: boolean }) {
  const [totalQuantity, setTotalQuantity] = useState(1);

  if (totalQuantity < 1) {
    return null;
  }
  return (
    <div
      className={`${
        dark
          ? "text-primary bg-contrast dark:text-contrast dark:bg-primary"
          : "text-contrast bg-[#4C06B7]"
      } absolute bottom-[-12px] left-0 text-[0.625rem] font-medium subpixel-antialiased h-7 min-w-7 flex items-center justify-center leading-none text-center rounded-full w-auto px-3 py-[6px]`}
    >
      <span>{totalQuantity}</span>
    </div>
  );
}

export default function Header() {
  // state
  const [showHeaderSecond, setShowHeaderSecond] = useState(false);

  //hook
  const { y } = useWindowScroll();
  const router = useRouter();

  // method
  const handleDisplayHeader = useCallback((y: number) => {
    setShowHeaderSecond(y && y > 0 ? true : false);
  }, []);

  const handleGotoShop = useCallback(() => {
    router.push("/shop");
  }, []);

  // watch
  useEffect(() => {
    handleDisplayHeader(y);
  }, [y]);

  return (
    <Disclosure
      as="nav"
      className={`${
        showHeaderSecond ? "border-b border-[##C1C1C1] bg-white " : "bg-black "
      } max-w-[1440px] mx-auto hidden h-nav lg:flex items-center sticky transition duration-300 backdrop-blur-lg z-40 top-0 justify-between w-full`}
    >
      {({ open }) => (
        <>
          <div
            className={`mx-auto w-full px-44 transition duration-300 backdrop-blur-lg z-40 ${
              showHeaderSecond ? "bg-white" : "bg-black"
            }`}
          >
            <div className="flex h-24 items-center justify-between">
              {showHeaderSecond && (
                <Image
                  src="/mypetgo-logo.svg"
                  alt="MyPetGo"
                  width={148}
                  height={32}
                />
              )}
              {!showHeaderSecond && (
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <Image
                      src="/home-mypetgo-logo.svg"
                      alt="MyPetGo"
                      width={148}
                      height={32}
                    />
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-10 flex items-baseline space-x-4">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={`px-3 py-2 rounded-md text-base font-normal leading-[22px] ${
                            item.current
                              ? "bg-gray-900 text-white"
                              : "text-gray-300 hover:bg-gray-700 hover:text-white"
                          }`}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              )}
              {showHeaderSecond && (
                <Heading
                  className="font-bold text-center text-2xl leading-6 text-[#3C4043]"
                  as={"h1"}
                >
                  Health & Location Monitor
                </Heading>
              )}
              <div className="hidden md:block">
                {!showHeaderSecond ? (
                  <div className="ml-4 flex items-center md:ml-6">
                    <button
                      onClick={handleGotoShop}
                      className="bg-[#4C06B7] text-white px-[40px] py-[12px] rounded-md mr-5 text-base font-normal leading-[22px]"
                    >
                      Shop
                    </button>
                    <button className="relative flex items-center justify-center w-10 h-10 focus:ring-primary/5 text-white">
                      <IconBag />
                      <CartBadge dark={false} />
                    </button>
                    {/* Profile dropdown */}
                    <div className="flex items-center p-1 pl-4 rounded-full border-2 border-solid border-[#e1e1e14d] ml-10">
                      <IconMenu className="text-white" />
                      <Menu as="div" className="relative ml-3">
                        <div>
                          <Menu.Button className="flex max-w-xs items-center rounded-full bg-gray-800 text-sm text-white">
                            <span className="sr-only">Open user menu</span>
                            {/* <img
                                className="h-8 w-8 rounded-full"
                                src={user.imageUrl}
                                alt=""
                              />  */}
                            <IconAccount className="min-w-[32px] min-h-[32px] rounded-full hover:border-secondary focus:border-secondary transition-colors ease-linear" />
                          </Menu.Button>
                        </div>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            {userNavigation.map((item) => (
                              <Menu.Item key={item.name}>
                                {({ active }) => (
                                  <a
                                    href={item.href}
                                    className={`block px-4 py-2 text-sm text-gray-700 ${
                                      active ? "bg-gray-100" : ""
                                    }`}
                                  >
                                    {item.name}
                                  </a>
                                )}
                              </Menu.Item>
                            ))}
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    </div>
                  </div>
                ) : (
                  <div>
                    <Heading
                      className="font-bold text-center text-base leading-[22px] text-[#3C4043]"
                      as={"h2"}
                    >
                      From USD $159
                    </Heading>
                    <Heading
                      className="font-normal text-center text-xs leading-4 text-[#3C4043]"
                      as={"h6"}
                    >
                      plus choose a 1,2 or 3 year data plan
                    </Heading>
                    <p></p>
                  </div>
                )}
              </div>
              <div className="-mr-2 flex md:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={`block px-3 py-2 rounded-md text-base font-normal leading-[22px] ${
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white"
                  }`}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
            <div className="border-t border-gray-700 pt-4 pb-3">
              <div className="flex items-center px-5">
                <div className="flex-shrink-0">
                  {/* <img
                        className="h-10 w-10 rounded-full"
                        src={user.imageUrl}
                        alt=""
                      /> */}
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium text-white">
                    {user.name}
                  </div>
                  <div className="text-sm font-medium text-gray-400">
                    {user.email}
                  </div>
                </div>
                <button
                  type="button"
                  className="ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-3 space-y-1 px-2">
                {userNavigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
