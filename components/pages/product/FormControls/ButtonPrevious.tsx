import IconBackToPrevious from "@components/icons/IconBackToPrevious";

export default function ButtonPrevious(){
    return (
      <button
        type="button"
        className="inline-flex items-center rounded-lg border border-transparent bg-[#E1E1E1] px-3 py-2 text-sm font-bold leading-[19px] text-[#3C4043] shadow-sm"
      >
        <IconBackToPrevious className={"mr-1"} />
        Modify previous selection
      </button>
    );
}
