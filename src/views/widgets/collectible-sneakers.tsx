import Image from "next/image"
import clsx from "clsx"

export const CollectibleSneakers = () => {
  return (
    <div className={clsx(
      "py-12",
      "lg:py-20"
    )}>
      <div className={clsx(
        "container flex flex-col gap-8 items-center justify-between",
        "lg:flex-row lg:gap-20"
      )}>
        <div className="flex flex-col gap-8">
          <div>
            <h1 className={clsx(
              "text-[56px] font-extrabold leading-[61.6px] text-slate-900 text-center",
              "lg:text-[72px] lg:leading-[79.2px] lg:text-start"
            )}>
              Collectible Sneakers
            </h1>
          </div>
          <div>
            <p className={clsx(
              "font-normal text-lg leading-[28.8px] text-slate-900 text-center",
              "lg:text-start"
            )}>
              Sit elit feugiat turpis sed integer integer accumsan turpis. Sed suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum ultrices amet.
            </p>
          </div>
          <div className={clsx(
            "flex gap-4 items-center justify-center",
            "lg:justify-start"
          )}>
            <button className="flex items-center justify-center border-2 border-amber-900 rounded-lg p-4">
              <span className="text-amber-900 text-xl leading-6 tracking-[.5px] font-medium px-4">
                Sign up now
              </span>
            </button>
            <button className="flex items-center justify-center rounded-lg px-2 py-3">
              <Image
                src="/icons/icon-play.svg"
                width={24}
                height={24}
                alt="Play"
              />
              <span className="inline-flex px-2 justify-center items-center self-center text-amber-900 font-medium tracking-[.5px] text-base">
                Watch Demo
              </span>
            </button>
          </div>
        </div>
        <div className={clsx(
          "relative w-[361px] h-[314px] shrink-0",
          "lg:w-[486px] lg:h-[423px]"
        )}>
          <div className={clsx(
            "absolute w-[361px] h-[288px] bottom-[26px] z-10",
            "lg:w-[486px] lg:h-[388px] lg:bottom-[35px]"
          )}>
            <Image
              src="/images/sneaker-product-image.png"
              width={486}
              height={388}
              alt="Sneakers"
              priority
            />
          </div>
          <div className={clsx(
            "w-[273px] h-[276px] rounded-[50px] bg-amber-400 absolute left-[53.88px] bottom-0",
            "lg:w-[367px] lg:h-[372px] lg:left-[51px] lg:top-[51px]"
          )}></div>
        </div>
      </div>
    </div>
  )
}
