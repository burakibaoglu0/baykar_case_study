'use client';

import { useState } from "react";
import Image from "next/image";
import { ThumbnailCard } from "@/components";
import type { ThumbnailCardProps } from "@/types";
import clsx from "clsx";

export const GrowYourCollection = () => {

  const collectionThumbnailCards: ThumbnailCardProps[] = [
    {
      hasHeader: true,
      imageProps: {
        src: "/images/grow-your-collection/thumbnail-1.webp",
        width: 759,
        height: 410,
        alt: "Grow your collection",
        className: "!w-[294px] !h-[160px] lg:!w-[759px] lg:!h-[410px]"
      },
      wrapperClassName: clsx(
        "absolute top-0 left-0 overflow-hidden",
        "xs:top-1/2 xs:left-1/2 xs:-translate-y-1/2 xs:-translate-x-1/2",
        "lg:top-0 lg:left-0 lg:-translate-y-0 lg:-translate-x-0"
      )
    },
    {
      hasHeader: true,
      imageProps: {
        src: "/images/grow-your-collection/thumbnail-2.webp",
        width: 759,
        height: 410,
        alt: "Grow your collection",
        className: "!w-[295px] !h-[161px] lg:!w-[759px] lg:!h-[410px]"
      },
      wrapperClassName: clsx(
        "absolute top-[57px] left-9 overflow-hidden",
        "xs:top-[60%] xs:left-[60%] xs:-translate-y-1/2 xs:-translate-x-1/2",
        "lg:bottom-0 lg:left-[94px] lg:top-auto lg:right-auto lg:-translate-y-0 lg:-translate-x-0"
      )
    },
    {
      hasHeader: false,
      imageProps: {
        src: "/images/grow-your-collection/thumbnail-3.webp",
        width: 256,
        height: 286,
        alt: "Grow your collection",
        className: "!w-[94px] !h-[105px] lg:!w-[256px] lg:!h-[286px]"
      },
      wrapperClassName: clsx(
        "absolute bottom-[33px] right-0 overflow-hidden",
        "xs:bottom-10 xs:right-1/4 xs:-translate-y-0 xs:translate-x-3/4",
        "lg:bottom-[68px] lg:right-0 lg:-translate-y-0 lg:-translate-x-0"
      )
    }
  ];

  const collectionMenuItems = [
    {
      icon: '/icons/icon-magnify.svg',
      title: 'Bibendum tellus',
      isSelected: true
    },
    {
      icon: '/icons/icon-shield.svg',
      title: 'Cras eget',
      isSelected: false
    },
    {
      icon: '/icons/icon-rocket.svg',
      title: 'Dolor pharetra',
      isSelected: false
    },
    {
      icon: '/icons/icon-screen.svg',
      title: 'Amet, fringilla',
      isSelected: false
    },
    {
      icon: '/icons/icon-podcast.svg',
      title: 'Amet nibh',
      isSelected: false
    },
    {
      icon: '/icons/icon-settings.svg',
      title: 'Sed velit',
      isSelected: false
    }
  ]

  const [_collectionMenuItems, setcollectionMenuItems] = useState(collectionMenuItems);

  const handleSelectItem = (index: number) => {
    const newItems = _collectionMenuItems.map((item, idx) => ({
      ...item,
      isSelected: idx === index
    }));
    setcollectionMenuItems(newItems);
  }

  return (
    <section className={clsx(
      "pt-12 pb-24",
      "bg-[url('/images/grow-your-collection/waves.svg')] bg-no-repeat bg-left-bottom bg-cover",
      "lg:pt-20 lg:pb-32"
    )}>
      <div className={clsx(
        "container flex flex-col gap-8",
        "lg:gap-20"
      )}>
        <div className={clsx(
          "flex flex-col gap-8 items-center justify-center",
          "lg:items-stretch lg:justify-start"
        )}>
          <h3 className={clsx(
            "text-[32px] leading-[35.2px] font-bold text-slate-900",
            "lg:text-[56px] lg:leading-[61.6px] lg:font-extrabold"
          )}>
            Grow your collection
          </h3>
          <p className={clsx(
            "text-base leading-[22.4px] text-slate-900 text-center",
            "lg:text-lg lg:leading-[28.8px] lg:text-start"
          )}>
            Enim neque massa porta adipiscing elit. Sem libero id faucibus nibh amet dictum pellentesque sed. Eu non turpis risus odio sapien, fames sit rhoncus.
            Nec magna sed interdum sit purus tellus. Et volutpat proin neque placerat at bibendum quam tellus.
          </p>
        </div>
        <div className={clsx(
          "block",
          "lg:flex lg:flex-row lg:gap-20 lg:justify-between"
        )}>
          <ul className={clsx(
            "w-full flex gap-4 mb-8 overflow-x-auto",
            "lg:flex-col lg:w-64 lg:mb-0 lg:overflow-x-visible"
          )}>
            {_collectionMenuItems.map((item, index) => (
              <li
                key={index}
                className={clsx(
                  "flex items-center cursor-pointer rounded-lg p-4 shrink-0",
                  item.isSelected && "bg-white shadow-[0_0_4px_0_rgba(0,0,0,0.07),0_4px_6px_-1px_rgba(0,0,0,0.1)]",
                )}
                onClick={() => handleSelectItem(index)}
              >
                <Image
                  src={item.icon}
                  width={24}
                  height={24}
                  alt="Icon"
                />
                <span className="flex-1 text-xl leading-6 tracking-[.5px] font-medium text-slate-900 ml-4">{item.title}</span>
                {item.isSelected && (
                  <Image
                    src="/icons/icon-right.svg"
                    width={24}
                    height={24}
                    alt="right"
                    className="hidden lg:block"
                  />
                )}
              </li>
            ))}
          </ul>
          <div className={clsx(
            "relative flex-1 h-[259px]",
            "lg:h-[556px]"
          )}>
            {collectionThumbnailCards.map((thumbnailCard, index) => (
              <ThumbnailCard key={index} {...thumbnailCard} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
};
