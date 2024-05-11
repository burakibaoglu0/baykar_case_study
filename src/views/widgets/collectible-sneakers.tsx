import Image from "next/image"

export const CollectibleSneakers = () => {
  return (
    <div className="py-20">
      <div className="container flex gap-20 items-center justify-between">
        <div className="flex flex-col gap-8">
          <div>
            <h1 className="text-[72px] font-extrabold leading-[79.2px] text-slate-900">
              Collectible Sneakers
            </h1>
          </div>
          <div>
            <p className="font-normal text-lg leading-[28.8px] text-slate-900">
              Sit elit feugiat turpis sed integer integer accumsan turpis. Sed suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum ultrices amet.
            </p>
          </div>
          <div className="flex gap-4 items-center justify-start">
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
              <span className="inline-flex w-[112px] justify-center items-center self-center text-amber-900 font-medium tracking-[.5px] text-base">
                Watch Demo
              </span>
            </button>
          </div>
        </div>
        <div className="relative w-[486px] h-[423px] shrink-0">
          <div className="absolute w-[486px] h-[388px] bottom-[35px] z-10">
            <Image
              src="/images/sneaker-product-image.png"
              width={486}
              height={388}
              alt="Sneakers"
            />
          </div>
          <div className="w-[367px] h-[372px] rounded-[50px] bg-amber-400 absolute left-[51px] top-[51px] bottom-0"></div>
        </div>
      </div>
    </div>
  )
}
