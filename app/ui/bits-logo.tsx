import { GlobeAltIcon } from "@heroicons/react/24/outline";
import { lusitana } from "@/app/ui/fonts";
import Image from "next/image";

export default function BITSLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      <Image
        src="/images/bitslogo2.png"
        alt="BITS Logo"
        width={400}
        height={400}
      />
      {/* <GlobeAltIcon className="h-12 w-12 rotate-[90deg]" /> */}
      {/* <p className="text-[44px]">BITS</p> */}
    </div>
  );
}
