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
        alt: "Grow your collection"
      },
      wrapperClassName: "absolute top-0 left-0"
    },
    {
      hasHeader: true,
      imageProps: {
        src: "/images/grow-your-collection/thumbnail-2.webp",
        width: 759,
        height: 410,
        alt: "Grow your collection"
      },
      wrapperClassName: "absolute bottom-0 left-[94px]"
    },
    {
      hasHeader: false,
      imageProps: {
        src: "/images/grow-your-collection/thumbnail-3.webp",
        width: 256,
        height: 286,
        alt: "Grow your collection"
      },
      wrapperClassName: "absolute bottom-[68px] right-0"
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
    <section className="pt-20 pb-32 bg-[url('/images/grow-your-collection/waves.svg')] bg-no-repeat bg-left-bottom bg-cover">
      <div className="container flex flex-col gap-20">
        <div className="flex flex-col gap-8">
          <h3 className="text-[56px] leading-[61.6px] font-extrabold text-slate-900">
            Grow your collection
          </h3>
          <p className="text-lg leading-[28.8px] text-slate-900">
            Enim neque massa porta adipiscing elit. Sem libero id faucibus nibh amet dictum pellentesque sed. Eu non turpis risus odio sapien, fames sit rhoncus.
            Nec magna sed interdum sit purus tellus. Et volutpat proin neque placerat at bibendum quam tellus.
          </p>
        </div>
        <div className="flex gap-20 justify-between">
          <ul className="flex flex-col w-64 gap-4">
            {_collectionMenuItems.map((item, index) => (
              <li
                key={index}
                className={clsx(
                  "flex items-center cursor-pointer rounded-lg p-4",
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
                  />
                )}
              </li>
            ))}
          </ul>
          <div className="flex-1 h-[556px] relative">
            {collectionThumbnailCards.map((thumbnailCard, index) => (
              <ThumbnailCard key={index} {...thumbnailCard} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
};
