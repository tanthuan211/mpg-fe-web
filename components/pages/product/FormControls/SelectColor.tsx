import { useState } from "react";
import { RadioGroup } from "@headlessui/react";
import IconNotAvailable from "@components/icons/IconNotAvailable";

const colors = [
  {
    name: "Black",
    bgColor: "bg-black",
    selectedColor: "ring-black",
    available: false,
  },
  {
    name: "Purple",
    bgColor: "bg-[#4C06B7]",
    selectedColor: "ring-[#4C06B7]",
    available: true,
  },
  {
    name: "Turquoise",
    bgColor: "bg-[#249563]",
    selectedColor: "ring-[#249563]",
    available: false,
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function SelectColor() {
  const [selectedColor, setSelectedColor] = useState();

  return (
    <RadioGroup value={selectedColor} onChange={setSelectedColor}>
      <RadioGroup.Label className="text-xl font-bold leading-[27px]">
        Choose your color
      </RadioGroup.Label>
      <div className="mt-4 flex items-center space-x-6">
        {colors.map((color) => {
          return (
            <div key={color.name} className="flex flex-col text-center">
              <RadioGroup.Option
                value={color}
                className={({ checked, active }) =>
                  classNames(
                    active || checked
                      ? "border-[#4C06B7] border-2"
                      : "border-[#E1E1E1]",
                    !checked ? "hover:border hover:border-black" : "",
                    "relative flex cursor-pointer rounded-lg border bg-white w-[129px] h-[94px] max-h-[94px] items-center justify-center shadow-sm focus:outline-none"
                  )
                }
              >
                <RadioGroup.Label
                  aria-hidden="true"
                  className={classNames(
                    color.bgColor,
                    "cursor-pointer h-8 w-8 border border-black border-opacity-10 rounded-full"
                  )}
                ></RadioGroup.Label>
                {!color.available &&
                <div className="absolute inset-0 top-[63px] -left-[25px]">
                  <div className="relative w-[81px] h-[26px] rotate-[45deg]">
                    <p className="absolute inset-0 font-bold text-[8px] leading-[11px] flex items-center justify-center w-[81px] h-[26px]">
                      not available
                    </p>
                    <IconNotAvailable />
                  </div>
                </div>}
              </RadioGroup.Option>
              <RadioGroup.Description
                as="span"
                className="font-normal text-sm leading-[19px] mt-2"
              >
                {color.name}
              </RadioGroup.Description>
            </div>
          );})}
      </div>
    </RadioGroup>
  );
}
