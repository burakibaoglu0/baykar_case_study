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
    <div className="py-20">
      <div className="container flex gap-20 z-10">
        {featuresItems.map((item, index) => (
          <div key={index} className="flex flex-col gap-4 text-slate-900">
            <div className="relative overflow-hidden">
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
                  item.icon === "trophy" && "left-7",
                  item.icon === "tunnel" && "left-7",
                  item.icon === "tv" && "left-10"
                )}
              />
            </div>
            <div>
              <h6 className="text-xl leading-[22px] font-medium">
                {item.title}
              </h6>
            </div>
            <div>
              <p className="text-lg leading-[28.8px]">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
