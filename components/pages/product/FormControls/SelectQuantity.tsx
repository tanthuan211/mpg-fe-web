import { useCallback, useState } from "react";
import { MinusIcon, PlusIcon } from "@heroicons/react/20/solid";

export default function SelectQuantity() {
  const [counter, setCounter] = useState(1);

  const handleIncrementedClick = useCallback(() => {
    setCounter((counter) => counter + 1);
  }, []);

  const handleDecrementedClick = useCallback(() => {
    if (counter == 0) return;
    setCounter((counter) => counter - 1);
  }, [counter]);

  const handleProceedClick = useCallback(() => {}, []);

  return (
    <div>
      <p className="text-xl font-bold leading-[27px] mb-12">
        How many would you like to purchase?
      </p>
      <div className="flex justify-between items-center w-full mb-4">
        <button
          type="button"
          className="inline-flex w-full max-w-[160px] h-[38px] items-center justify-center rounded-md border border-#E1E1E1 bg-white hover:border-black px-6 py-3 text-base font-bold leading-[22px] text-white shadow-sm"
          onClick={handleDecrementedClick}
        >
          <MinusIcon className="h-5 w-5 text-[#3C4043]" aria-hidden="true" />
        </button>
        <p>{counter}</p>
        <button
          type="button"
          className="inline-flex w-full max-w-[160px] h-[38px] items-center justify-center rounded-md border border-#E1E1E1 bg-white hover:border-black px-6 py-3 text-base font-bold leading-[22px] text-white shadow-sm"
          onClick={handleIncrementedClick}
        >
          <PlusIcon className="h-5 w-5 text-[#3C4043]" aria-hidden="true" />
        </button>
      </div>
      <button
        type="button"
        className="inline-flex w-full h-[70px] items-center justify-center rounded-md border border-transparent bg-[#4C06B7] px-6 py-3 text-base font-bold leading-[22px] text-white shadow-sm"
        onClick={handleProceedClick}
      >
        Proceed with my selection
      </button>
    </div>
  );
}
