import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/20/solid";
import IconAmazon from "@components/icons/IconAmazon";
import IconLazada from "@components/icons/IconLazada";
import IconShopee from "@components/icons/IconShopee";

const marketplaceOptions = [
  {
    title: "Amazon",
    value: "amazon",
    current: true,
  },
  {
    title: "Lazada",
    value: "lazada",
    current: true,
  },
  {
    title: "Shopee",
    value: "shopee",
    current: true,
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function SelectMarketplace() {
  const [selected, setSelected] = useState();

  return (
    <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <>
          <div className="relative">
            <Listbox.Button className="relative w-full cursor-default rounded-md border border-gray-300 bg-white p-6 flex items-center justify-between shadow-sm focus:border-[#E1E1E1] focus:outline-none focus:ring-1 focus:ring-[#E1E1E1] sm:text-sm">
              <span className="inline-flex w-full truncate">
                <span className="truncate font-normal text-base leading-[22px]">
                  {selected ? (selected as any).title : "Choose Marketplace"}
                </span>
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <div className="border-solid border border-[#E1E1E1] rounded">
                  <ChevronDownIcon
                    className="h-5 w-5 text-black"
                    aria-hidden="true"
                  />
                </div>
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute right-0 z-10 mt-2 origin-top-right divide-y divide-gray-200 overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none w-full">
                {marketplaceOptions.map((option, index) => (
                  <Listbox.Option
                    key={index}
                    className={({ selected, active }) =>
                      classNames(
                        active || selected ? "bg-indigo-500" : "",
                        "cursor-default select-none p-6 text-sm"
                      )
                    }
                    value={option}
                  >
                    {({ selected, active }) => (
                      <div className={`flex justify-between`}>
                        {option.value == "amazon" && <IconAmazon />}
                        {option.value == "lazada" && <IconLazada />}
                        {option.value == "shopee" && <IconShopee />}
                      </div>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  );
}
