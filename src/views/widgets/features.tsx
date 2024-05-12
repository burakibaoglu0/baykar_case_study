import Image from "next/image"
import clsx from "clsx"

export const Features = () => {

  const featuresItems = [
    {
      title: "Nibh viverra",
      description: "Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.",
      icon: "trophy",
      combineSize: 57
    },
    {
      title: "Cursus amet",
      description: "Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.",
      icon: "tunnel",
      combineSize: 39
    },
    {
      title: "Ipsum fermentum",
      description: "Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.",
      icon: "tv",
      combineSize: 45
    }
  ]

  return (
    <div className={clsx(
      "py-12 bg-amber-100",
      "lg:py-20 lg:bg-transparent"
    )}>
      <div className={clsx(
        "container flex flex-col gap-8 z-10 relative",
        "lg:flex-row lg:gap-20"
      )}>
        {featuresItems.map((item, index) => (
          <div key={index} className={clsx(
            "flex flex-col items-center justify-center gap-4 text-slate-900",
            "lg:items-stretch lg:justify-start"
          )}>
            <div className={clsx(
              "relative overflow-hidden w-full flex items-center justify-center",
              "lg:items-stretch lg:justify-start"
            )}>
              <Image
                src={`/icons/icon-${item.icon}.svg`}
                width={64}
                height={64}
                alt={item.title}
                className="z-10"
              />
              <Image
                src={`/icons/icon-${item.icon}-combine.svg`}
                width={item.combineSize}
                height={item.combineSize}
                alt={item.title}
                className={clsx(
                  "absolute top-0 -z-10",
                  item.icon === "trophy" && "left-1/2 lg:left-7",
                  item.icon === "tunnel" && "left-1/2 lg:left-7",
                  item.icon === "tv" && "left-1/2 lg:left-10"
                )}
              />
            </div>
            <div>
              <h6 className="text-xl leading-[22px] font-medium">
                {item.title}
              </h6>
            </div>
            <div>
              <p className={clsx(
                "text-lg leading-[28.8px] text-center",
                "lg:text-start"
              )}>
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
