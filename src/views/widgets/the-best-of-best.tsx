import Image from "next/image"
import Link from "next/link"
import clsx from "clsx"

export const TheBestOfBest = () => {

  const theBestOfBestItems = [
    {
      image: "/images/best-of-best/best-of-one.png",
      title: "Title",
      description: "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.",
      path: "#"
    },
    {
      image: "/images/best-of-best/best-of-two.png",
      title: "Title",
      description: "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.",
      path: "#"
    },
    {
      image: "/images/best-of-best/best-of-three.png",
      title: "Title",
      description: "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.",
      path: "#"
    }
  ]

  return (
    <section className={clsx(
      "w-full flex py-12 bg-slate-900 border-t border-b border-slate-200 relative overflow-hidden",
      "lg:py-20"
    )}>
      <div className={clsx(
        "container flex flex-col gap-8 relative z-10",
        "lg:gap-20"
      )}>
        <div className={clsx(
          "flex flex-col items-center justify-center gap-8",
          "lg:flex-row lg:justify-between lg:gap-20"
        )}>
          <h3 className={clsx(
            "text-[32px] font-bold leading-[35.2px] text-white",
            "lg:text-[56px] lg:font-extrabold lg:leading-[61.6px] lg:flex-1"
          )}>
            The best of the best
          </h3>
          <button className="flex items-center justify-center px-6 py-5 border-2 border-white rounded-lg">
            <span className="text-white text-2xl leading-6 tracking-[.5px] font-bold px-6">
              Sign up now
            </span>
          </button>
        </div>
        <div className={clsx(
          "flex flex-col items-center justify-center gap-8 relative z-10",
          "lg:flex-row lg:justify-between lg:gap-12"
        )}>
          {theBestOfBestItems.map((item, index) => (
            <div
              className="flex flex-col border border-slate-900 rounded-[10px] overflow-hidden shadow-[0_0_15px_0_rgba(255,255,255,0.07),0_25px_50px_-12px_rgba(255,255,255,.25)] flex-1 bg-slate-900" key={index}>
              <Image
                src={item.image}
                width={395}
                height={220}
                alt={item.title}
                className="w-full object-contain shrink-0"
              />
              <div className="flex flex-col p-8 pb-0 gap-4">
                <h6 className="text-2xl leading-[26.4px] font-bold text-white">
                  {item.title}
                </h6>
                <p className="text-lg leading-[28.8px]">
                  {item.description}
                </p>
              </div>
              <div className="flex items-center justify-center p-8">
                <Link className="w-full inline-flex items-center justify-center border-2 border-white rounded-lg p-4" href={item.path}>
                  <Image
                    src="/icons/icon-cart.svg"
                    width={24}
                    height={24}
                    alt="Cart"
                  />
                  <span className="px-4 text-xl leading-6 tracking-[.5px] text-white font-medium">
                    Buy Now
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <Image
          src="/images/best-of-best/best-of-background-image.png"
          className="hidden lg:block absolute left-1/2 top-[62%] -translate-x-1/2 -translate-y-1/2 z-0 mx-auto"
          width={1358}
          height={527}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          alt="Best of best background image"
          loading="lazy"
        />
        <Image
          src="/images/best-of-best/best-of-background-image-mobile.png"
          className="block lg:hidden absolute left-0 top-[60%] -translate-y-1/2 z-0 mx-auto"
          width={1012}
          height={393}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          alt="Best of best background image"
          loading="lazy"
        />
      </div>
    </section>
  )
}
