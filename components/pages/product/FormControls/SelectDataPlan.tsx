import IconBackToPrevious from "@components/icons/IconBackToPrevious";

export default function SelectDataPlan() {
  return (
    <div>
      <p className="text-xl font-bold leading-[27px] mb-12">
        Choose a data plan
      </p>
      <button
        type="button"
        className="inline-flex items-center justify-center rounded-md border h-[70px] bg-white hover:border-black w-full border-[#E1E1E1] max-w-[436px] text-base font-bold leading-[22px] text-[#3C4043] shadow-sm"
      >
        View data plans
      </button>
    </div>
  );
}
