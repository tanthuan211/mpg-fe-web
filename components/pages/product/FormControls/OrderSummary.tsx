import { useCallback } from "react";
import ButtonPrevious from "./ButtonPrevious";

export default function OrderSummary() {
  const handleClick = useCallback(() => {}, []);

  return (
    <div className="w-full max-w-[436px] px-6 py-10 bg-[#F4F4F4]">
      <p className="text-[#4C06B7] font-bold text-base leading-[22px]">
        Your order summary
      </p>
      <div className="w-full h-px bg-[#DBDBDB] mt-8 mb-10"></div>
      <p className="font-bold text-[40px] leading-[38px] text-[#3C4043] mb-6">
        USD $260.88
      </p>
      <p className="font-bold text-2xl leading-[33px] text-[#3C4043]">
        or $20/month
      </p>
      <p className="font-normal text-sm leading-[19px]">
        with 12-month 0% APR financing*
      </p>
      <div className="w-full h-px bg-[#DBDBDB] mt-8 mb-[28px]"></div>
      <p className="font-bold text-base leading-6">Health & Location Monitor</p>
      <p className="font-normal text-base leading-6">
        Dog Collar / Large / Purple / Qty. 1
      </p>
      <p className="font-normal text-base leading-6 mt-4">Includes:</p>
      <p className="font-normal text-base leading-6">
        1 Year Data Plan @ USD $8.49/month
      </p>
      <div className="mt-[54px] mx-auto w-full flex justify-center items-center">
        <button
          type="button"
          className="inline-flex w-full max-w-[338px] h-[70px] items-center justify-center rounded-md border border-transparent bg-[#4C06B7] px-6 py-3 text-base font-bold leading-[22px] text-white shadow-sm"
          onClick={handleClick}
        >
          Proceed with my selection
        </button>
      </div>
      <div className="mt-4 mx-auto w-full flex justify-center items-center">
        <ButtonPrevious />
      </div>
    </div>
  );
}
