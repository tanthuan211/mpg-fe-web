import ArrowUpRight from "@components/icons/ArrowUpRight";
import Image from "next/image";

export default function Input() {
  return (
    <div>
      <div className="relative mt-6 rounded-md shadow-sm w-[436px] h-[88px]">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-5">
          <Image
            width={33}
            height={27}
            className="h-[33px] w-[27px]"
            alt={"MyPetGo"}
            src="/favicon.svg"
          />
        </div>
        <input
          type="email"
          name="email"
          id="email"
          className="block w-full h-full rounded-md border-[#4C06B7] pl-14  focus-within:border-[#4C06B7] focus-within:ring-1 focus-within:ring-[#4C06B7] sm:text-sm"
          placeholder="Enter your email"
        />
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
         <ArrowUpRight/>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3"></div>
    </div>
  );
}
