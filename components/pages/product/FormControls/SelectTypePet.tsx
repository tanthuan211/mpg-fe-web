import { useState } from "react";
import { RadioGroup } from "@headlessui/react";
import IconDog from "@components/icons/IconDog";
import IconNotAvailable from "@components/icons/IconNotAvailable";
import IconCat from "@components/icons/IconCat";

const typePetLists = [
  { value: "dog", title: "Dog collar" },
  { value: "cat", title: "Cat collar" },
];

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

export default function SelectTypePet() {
  const [selectedMailingLists, setSelectedMailingLists] = useState();

  return (
    <div>
      <RadioGroup
        value={selectedMailingLists}
        onChange={setSelectedMailingLists}
      >
        <RadioGroup.Label className="text-xl font-bold leading-[27px]">
          For which pet
        </RadioGroup.Label>

        <div className="mt-4 w-full flex justify-between items-center">
          {typePetLists.map((item, index) => (
            <RadioGroup.Option
              key={index}
              value={item}
              className={({ checked, active }) =>
                classNames(
                  active || checked
                    ? "border-[#4C06B7] border-2"
                    : "border-[#E1E1E1]",
                  !checked ? "hover:border hover:border-black" : "",
                  "flex cursor-pointer rounded-lg border bg-white w-[207px] h-[72px] max-h-[72px] py-6 px-8 shadow-sm focus:outline-none"
                )
              }
            >
              {({ checked, active }) => (
                <>
                  <RadioGroup.Label
                    as="span"
                    className="relative flex items-center justify-between"
                  >
                    {item.value == "dog" && <IconDog />}
                    {item.value == "cat" && (
                      <>
                        <IconCat />
                        <div className="absolute inset-0 top-[17px] -left-[57px]">
                          <div className="relative w-[81px] h-[26px] rotate-[45deg]">
                            <p className="absolute inset-0 font-bold text-[8px] leading-[11px] top-[10px] left-[16px]">
                              not available
                            </p>
                            <IconNotAvailable />
                          </div>
                        </div>
                      </>
                    )}
                    <p className="font-bold text-base leading-[22px] ml-5">
                      {item.title}
                    </p>
                  </RadioGroup.Label>
                </>
              )}
            </RadioGroup.Option>
          ))}
        </div>
      </RadioGroup>
    </div>
  );
}
