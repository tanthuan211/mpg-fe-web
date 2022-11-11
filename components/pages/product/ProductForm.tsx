import ButtonPrevious from "./FormControls/ButtonPrevious";
import OrderSummary from "./FormControls/OrderSummary";
import SelectColor from "./FormControls/SelectColor";
import SelectDataPlan from "./FormControls/SelectDataPlan";
import SelectMarketplace from "./FormControls/SelectMarketplace";
import SelectQuantity from "./FormControls/SelectQuantity";
import SelectSize from "./FormControls/SelectSize";
import SelectTypePet from "./FormControls/SelectTypePet";

export function ProductForm() {
  return (
    <section className="mt-12 pl-6 text-[#3C4043]">
      <SelectMarketplace />
      <div className="relative mt-10 mb-7">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-[DBDBDB]" />
        </div>
        <div className="relative flex justify-center">
          <span className="bg-white px-3 font-bold text-base leading-[22px]">
            or customize my monitor
          </span>
        </div>
      </div>
      <SelectTypePet />
      <div className="w-full h-px bg-[#DBDBDB] mt-16 mb-10"></div>
      <SelectSize />
      <div className="mt-6 mx-auto w-full flex justify-center items-center">
        <ButtonPrevious />
      </div>
      <div className="w-full h-px bg-[#DBDBDB] mt-16 mb-10"></div>
      <div className="mt-4">
        <SelectColor />
        <div className="mt-8 mx-auto w-full flex justify-center items-center">
          <ButtonPrevious />
        </div>
      </div>
      <div className="w-full h-px bg-[#DBDBDB] mt-16 mb-10"></div>
      <SelectDataPlan />
      <div className="mt-8 mx-auto w-full flex justify-center items-center">
        <ButtonPrevious />
      </div>
      <div className="w-full h-px bg-[#DBDBDB] mt-16 mb-10"></div>
      <SelectQuantity />
      <div className="mt-8 mx-auto w-full flex justify-center items-center">
        <ButtonPrevious />
      </div>
      <div className="mt-10">
        <OrderSummary />
      </div>
    </section>
  );
}
