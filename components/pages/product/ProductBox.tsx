import IconMonitor from "@components/icons/IconMonitor";
import IconUsbCType from "@components/icons/IconUsbCType";
import IconUserGuide from "@components/icons/IconUserGuide";
import { Container } from "@components/ui";

export function ProductBox() {
  return (
    <Container>
      <section className="w-full max-w-[1080px] my-10 pt-10 pb-[45px] text-center text-[#3C4043] bg-[#F4F4F4] rounded-lg">
        <p className="font-bold text-4xl leading-[44px]">What’s in the box?</p>
        <p className="font-bold text-base leading-6 ">
          Everything you need to get up and running! Your collar is also
          included in the same shipment.
        </p>
        <div className="flex items-center justify-evenly w-full mt-[70px]">
          <div className="flex flex-col">
            <IconMonitor />
            <p className="font-normal text-sm leading-6 mt-[27px]">Monitor</p>
          </div>
          <div className="flex flex-col">
            <IconUsbCType />
            <p className="font-normal text-sm leading-6 mt-[27px]">
              USB-C Cable
            </p>
          </div>
          <div className="flex flex-col">
            <IconUserGuide />
            <p className="font-normal text-sm leading-6 mt-[27px]">
              User Manual
            </p>
          </div>
        </div>
      </section>
    </Container>
  );
}
