import { useState } from "react";
import { RadioGroup } from "@headlessui/react";
import Image from "next/image";
import IconSizeDogSmall from "@components/icons/IconSizeDogSmall";
import IconSizeDogMedium from "@components/icons/IconSizeDogMedium";
import IconSizeDogLarge from "@components/icons/IconSizeDogLarge";
import IconSizeDogExtraLarge from "@components/icons/IconSizeDogExtraLarge";

const sizes = [
  {
    name: "Small (6-10”)",
    size: "0.56” / 1.4cm",
    value: "small",
  },
  {
    name: "Medium (11-15”)",
    size: "0.8” / 2.3cm",
    value: "medium",
  },
  {
    name: "Large (16-22”)",
    size: "1” / 2.54cm",
    value: "large",
  },
  {
    name: "Extra Large (23-30”)",
    size: "1” / 2.54cm",
    value: "extra-large",
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function SelectSize() {
  const [selected, setSelected] = useState();

  return (
    <RadioGroup value={selected} onChange={setSelected}>
      <RadioGroup.Label className="text-xl font-bold leading-[27px]">
        Pick which size fits perfectly for your pet
      </RadioGroup.Label>
      <div className="space-y-4 mt-4">
        {sizes.map((item, index) => (
          <RadioGroup.Option
            key={index}
            value={item}
            className={({ checked, active }) =>
              classNames(
                active || checked
                ? "border-[#4C06B7] border-2"
                : "border-[#E1E1E1]",
              !checked ? "hover:border hover:border-black" : "",
                "relative h-[104px] block cursor-pointer rounded-lg border bg-white px-6 py-4 shadow-sm focus:outline-none sm:flex sm:justify-between"
              )
            }
          >
            {({ active, checked }) => (
              <>
                <span className="flex items-center">
                  <span className="flex flex-col text-sm">
                    <RadioGroup.Label
                      as="span"
                      className="font-bold text-base leading-[22px] text-black"
                    >
                      {item.name}
                    </RadioGroup.Label>
                    <RadioGroup.Description
                      as="span"
                      className="font-normal text-sm leading-[19px]"
                    >
                      {item.size}
                    </RadioGroup.Description>
                  </span>
                </span>
                <RadioGroup.Description
                  as="span"
                  className="mt-2 flex text-sm sm:mt-0 sm:ml-4 sm:flex-col sm:text-right"
                >
                {item.value == "small" && <IconSizeDogSmall/>}
                {item.value == "medium" && <IconSizeDogMedium/>}
                {item.value == "large" && <IconSizeDogLarge/>}
                {item.value == "extra-large" && <IconSizeDogExtraLarge/>}
                </RadioGroup.Description>
                <span
                  className={classNames(
                    active ? "border" : "border-2",
                    checked ? "border-indigo-500" : "border-transparent",
                    "pointer-events-none absolute -inset-px rounded-lg"
                  )}
                  aria-hidden="true"
                />
              </>
            )}
          </RadioGroup.Option>
        ))}
      </div>
    </RadioGroup>
  );
}
