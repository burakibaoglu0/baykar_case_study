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
    <section className={clsx(
      "w-full flex items-center justify-center pt-4 pb-14",
      "lg:py-40"
    )}>
      <div className="container">
        <div className={clsx(
          "w-full bg-white px-4 py-8 flex flex-col items-center justify-center gap-8 rounded-[30px]",
          "shadow-[0_0_10px_0_rgba(0,0,0,0.07),0_20px_25px_-5px_rgba(0,0,0,0.1)]",
          "lg:p-20 lg:gap-20 lg:flex-row lg:justify-between"
        )}>
          <div className={clsx(
            "flex flex-col gap-6 items-center justify-center",
            "lg:items-stretch lg:justify-start"
          )}>
            <h3 className={clsx(
              "text-[32px] leading-[35.2px] font-bold text-slate-900",
              "lg:text-[56px] lg:leading-[61.6px] lg:font-extrabold"
            )}>Why join us</h3>
            <div className={clsx(
              "flex flex-col gap-6 items-center justify-center",
              "lg:items-stretch lg:justify-start"
            )}>
              <ul className="flex flex-col">
                {reasons.map((reason, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Image src="/icons/icon-checked.svg" width={24} height={24} alt="Checkmark" />
                    <p className={clsx(
                      "text-base leading-[22.4px] text-slate-900",
                      "lg:text-xl lg:leading-9"
                    )}>{reason}</p>
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
              imageProps={
                {
                  src: "/images/why-join-us/video-thumbnail.png",
                  width: 520,
                  height: 309,
                  alt: "Why join us",
                  className: "!w-[329px] !h-[193px] lg:!w-[520px] lg:!h-[309px]"
                }
              } />
            <div></div>
          </div>
        </div>
      </div>
    </section>
  )
};
