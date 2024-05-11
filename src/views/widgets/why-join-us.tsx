import Image from "next/image";
import clsx from "clsx";
import { ThumbnailCard } from "@/components";

export const WhyJoinUs = () => {

  const reasons = [
    'Est et in pharetra magna adipiscing ornare aliquam.',
    'Tellus arcu sed consequat ac velit ut eu blandit.',
    'Ullamcorper ornare in et egestas dolor orci.'
  ];

  return (
    <section className="w-full flex items-center justify-center py-40">
      <div className="container">
        <div className="w-full bg-white p-20 flex items-center justify-between gap-20 rounded-[30px] shadow-[0_0_10px_0_rgba(0,0,0,0.07),0_20px_25px_-5px_rgba(0,0,0,0.1)]">
          <div className="flex flex-col gap-6">
            <h3 className="text-[56px] leading-[61.6px] font-extrabold text-slate-900">Why join us</h3>
            <div className="flex flex-col gap-6">
              <ul className="flex flex-col">
                {reasons.map((reason, index) => (
                  <li key={index} className="flex items-center gap-1.5">
                    <Image src="/icons/icon-checked.svg" width={24} height={24} alt="Checkmark" />
                    <p className="text-xl leading-9 text-slate-900">{reason}</p>
                  </li>
                ))}
              </ul>
              <div>
                <button className="border-2 border-amber-900 rounded-lg p-4 flex items-center justify-center">
                  <span className="text-amber-900 text-xl leading-6 tracking-[.5px] font-medium px-4">Sign up now</span>
                </button>
              </div>
            </div>
          </div>
          <div className="relative">
            <ThumbnailCard
              hasHeader
              hasPlayer
              imageProps={{ src: "/images/why-join-us/video-thumbnail.png", width: 520, height: 309, alt: "Why join us" }} />
            <div></div>
          </div>
        </div>
      </div>
    </section>
  )
};
