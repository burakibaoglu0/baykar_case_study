import Image from "next/image";
import { ThumbnailCard } from "@/components";
import clsx from "clsx";

export const ShoesCollected = () => {
  return (
    <section className="py-20 flex items-center justify-center h-[717px] bg-amber-900 relative">
      <div className="container flex flex-col items-center justify-center gap-2 z-10">
        <h5 className={clsx(
          "text-[48px] leading-[52.8px] font-extrabold text-amber-50",
          "lg:text-[96px] lg:leading-[105.6px]"
        )}>
          11,658,467
        </h5>
        <h3 className={clsx(
          "text-[32px] leading-[35.2px] font-bold text-amber-50",
          "lg:text-[56px] lg:leading-[61.6px] lg:font-extrabold"
        )}
        >Shoes Collected</h3>
      </div>
      <div className={clsx(
        "absolute left-1/2 top-2.5 -translate-x-1/2 z-10",
        "lg:left-[18%] lg:top-2.5",
        "xl:left-[24%] xl:top-2.5",
        "2xl:left-[28%] 2xl:top-2.5"
      )}>
        <div className="relative flex flex-col items-center">
          <ThumbnailCard
            imageProps={{ src: "/images/shoes-collected/collected-shoes.jpeg", width: 256, height: 200, alt: "Shoes collected" }}
            wrapperClassName="relative z-20"
          />
          <div
            className={clsx(
              "bg-slate-200 rounded-[5px] px-4 pt-4 pb-2 w-[250px] shadow-[0_0_15px_0_rgba(0,0,0,0.07),0_25px_50px_-12px_rgba(0,0,0,0.25)] relative -top-2 z-10",
              "after:absolute after:top-[100%] after:-ml-[5px] after:left-1/2 after:border-[5px] after:border-t-slate-200 after:border-l-transparent after:border-r-transparent after:border-b-transparent",
            )}>
            <span className="text-sm leading-[19.6px] text-slate-900">Emma Simpson collected one pair of <b>Cool Shoes.</b></span>
          </div>
          <div className="size-8 border-[3px] border-lime-400 bg-lime-200 rounded-full relative -top-3"></div>
        </div>
      </div>
      <Image
        src="/images/shoes-collected/world-map.svg"
        width={1049}
        height={633}
        alt="World map"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-50 select-none pointer-events-none"
      />
      <Image
        src="/images/shoes-collected/world-map-circles.svg"
        width={724}
        height={455}
        alt="World map"
        className={clsx(
          "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none",
          "lg:top-[47%] lg:left-[53%]"
        )}
      />
    </section>
  )
};

