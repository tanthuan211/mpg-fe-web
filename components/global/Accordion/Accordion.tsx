import { MinusIcon, PlusIcon } from "@heroicons/react/20/solid";
import React, { useEffect, useRef, useState } from "react";

interface AccordionProps {
  title: React.ReactNode;
  content: React.ReactNode;
  expand?: boolean;
}

const Accordion: React.FC<AccordionProps> = ({ title, content, expand }) => {
  const [active, setActive] = useState(expand);
  const [height, setHeight] = useState("0px");
  const [rotate, setRotate] = useState("transform duration-500 ease");

  const contentSpace = useRef(null);

  function toggleAccordion() {
    setActive((prevState) => !prevState);
    // @ts-ignore
    setHeight(active ? "0px" : `${contentSpace.current.scrollHeight}px`);
    setRotate(
      active
        ? "transform duration-500 ease"
        : "transform duration-500 ease rotate-180"
    );
  }

  useEffect(() => {
    if (expand && contentSpace && contentSpace.current) {
      setActive(true);
      setHeight(
        !expand ? "0px" : `${(contentSpace.current as any).scrollHeight}px`
      );
      setRotate(
        !expand
          ? "transform duration-500 ease"
          : "transform duration-500 ease rotate-180"
      );
    }
  }, [expand]);

  return (
    <div className="flex flex-col w-full">
      <button
        className={`box-border appearance-none cursor-pointer focus:outline-none flex items-center justify-between ${
          !active && "mb-6"
        }`}
        onClick={toggleAccordion}
      >
        <p className="inline-block font-bold text-xl leading-[27px]">{title}</p>
        {active && (
          <div className="border-solid border px-1">
            <MinusIcon
              className={`${rotate} inline-block h-5 w-5 text-black`}
            />
          </div>
        )}
        {!active && (
          <div className="border-solid border px-1">
            <PlusIcon className={`${rotate} inline-block h-5 w-5 text-black`} />
          </div>
        )}
      </button>
      {!active && (
        <div className="mt-6 font-normal text-base left-6 mb-10 truncate">
          {content}
        </div>
      )}
      <div
        ref={contentSpace}
        style={{ maxHeight: `${height}` }}
        className={`overflow-auto transition-max-height duration-500 ease-in-out`}
      >
        <div className="mt-6 pb-20 font-normal text-base left-6 border-b mb-10">
          {content}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
