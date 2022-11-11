import { ChevronDown } from "@components/icons";
import AndroidStore from "@components/icons/AndroidStore";
import IconMyPetGo from "@components/icons/IconMyPetGo";
import Instagram from "@components/icons/Instagram";
import IosStore from "@components/icons/IosStore";
import LinkedIn from "@components/icons/LinkedIn";
import MyPetGo from "@components/icons/MyPetGo";
import TikTok from "@components/icons/TikTok";
import FaceBook from "@components/icons/TikTok";
import Link from "next/link";
import Container from "./Container";
import Input from "./Input";

export function Footer() {
  return (
    <Container>
      <footer>
        <div className="mx-auto h-fulll bg-[#F4F4F4] relative pt-[134px]">
          <div className="w-full absolute flex -top-2 justify-center">
            <MyPetGo />
          </div>
          <div className="w-full flex max-w-[1080px] justify-between mx-auto text-[#000000b3] mb-8">
            <div className="basis-1/3">
              <p className=" font-bold text-base leading-6">
                Subscribe for alerts and lifestyle tips
              </p>
              <Input />
            </div>
            <div className="basis-2/6">
              <p className=" font-bold text-base leading-6">Get the app</p>
              <div className="flex justify-start items-center h-[88px] mt-6">
                <Link
                  href={
                    "https://play.google.com/store/apps/details?id=asia.rhinoventures.mpg_tracker&pli=1"
                  }
                  target="_blank"
                  aria-current="page"
                >
                  <AndroidStore />
                </Link>
                <Link
                  href={
                    "https://apps.apple.com/vn/app/mypetgo-health-gps-tracker/id1569965171"
                  }
                  target="_blank"
                  aria-current="page"
                  className="ml-6"
                >
                  <IosStore />
                </Link>
              </div>
            </div>
            <div className="basis-1/6">
              <p className="font-bold text-base leading-6">Follow us</p>
              <div className="flex gap-2 justify-start items-center h-[88px] mt-6">
                <Link href={""} target="_blank" aria-current="page">
                  <FaceBook />
                </Link>
                <Link href={""} target="_blank" aria-current="page">
                  <Instagram />
                </Link>
                <Link href={""} target="_blank" aria-current="page">
                  <LinkedIn />
                </Link>
                <Link href={""} target="_blank" aria-current="page">
                  <TikTok />
                </Link>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-200 py-5 text-center text-sm text-gray-500 sm:text-left w-[1080px] mx-auto"></div>
          <div className="w-full flex max-w-[1080px] justify-between mx-auto text-[#000000b3] mb-8">
            <div className="basis-1/6 ">
              <p className="font-bold text-xs leading-4 uppercase mb-4">
                Company
              </p>
              <p className="font-normal text-xs leading-8">Media</p>
            </div>
            <div className="basis-1/6">
              <p className="font-bold text-xs leading-4 uppercase mb-4">
                Partners
              </p>
              <p className="font-normal text-xs leading-8">Become a partner</p>
            </div>
            <div className="basis-1/6">
              <p className="font-bold text-xs leading-4 uppercase mb-4">
                Products
              </p>
              <p className="font-normal text-xs leading-8">Shop</p>
              <p className="font-normal text-xs leading-8">Monitor</p>
              <p className="font-normal text-xs leading-8">Features</p>
              <p className="font-normal text-xs leading-8">Membership</p>
            </div>
            <div className="basis-1/6">
              <p className="font-bold text-xs leading-4 uppercase mb-4">
                Support
              </p>
              <p className="font-normal text-xs leading-8">Help centre</p>
              <p className="font-normal text-xs leading-8">
                Setup your monitor
              </p>
              <p className="font-normal text-xs leading-8">Contact us</p>
            </div>
            <div className="basis-1/6">
              <p className="font-bold text-xs leading-4 uppercase mb-4">
                Donate
              </p>
              <p className="font-normal text-xs leading-8">SOSD</p>
              <p className="font-normal text-xs leading-8">SPCA Singapore</p>
              <p className="font-normal text-xs leading-8">SPCA New Zealand</p>
              <p className="font-normal text-xs leading-8">AAPS</p>
            </div>
            <div className="basis-1/6">
              <p className="font-bold text-xs leading-4 uppercase mb-4">
                Legal
              </p>
              <p className="font-normal text-xs leading-8">Terms of use</p>
              <p className="font-normal text-xs leading-8">
                Medical disclaimer
              </p>
              <p className="font-normal text-xs leading-8">
                Connectivity terms
              </p>
              <p className="font-normal text-xs leading-8">Privacy policy</p>
            </div>
          </div>
          <div className="flex items-center justify-around bg-[#242424] text-[#ffffffb3] h-[88px] max-h-[88px]">
            <div className="py-8 flex items-center">
              <IconMyPetGo />
              <span className="block sm:inline ml-2">
                Copyright &copy; {new Date().getFullYear()}. MyPetGo Pte Ltd.
              </span>
            </div>
            <div className="flex items-center">
              <span className="block sm:inline font-semibold text-[10px] leading-[14px] mr-9">
                Terms of use
              </span>
              <button className="border-2 border-[#656565] text-[#656565] py-2 px-4 rounded-md font-bold text-base leading-[22px] flex justify-around items-center">
                <p className="font-medium text-[12px] leading-4 text-[#fff] mr-1">
                  US
                </p>
                <p className="font-medium text-[12px] leading-4 text-[#ffffff80] mr-2">
                  $USD
                </p>
                <ChevronDown />
              </button>
            </div>
          </div>
        </div>
      </footer>
    </Container>
  );
}
