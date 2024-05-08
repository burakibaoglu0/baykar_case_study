'use client';

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useState, useRef, useEffect, MutableRefObject } from "react";
import clsx from "clsx";
import type { Swiper as SwiperCore } from "swiper";
import Image from "next/image";

export const TheyLoveUs = () => {

  const sliderItems = [
    {
      company: {
        name: 'Zoomerr',
        logo: '/images/they-love-us/zoomer-logo.svg'
      },
      user: {
        name: 'Hellen Jummy',
        position: 'Team Lead',
        comment: 'Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.',
        thumbnail: '/images/they-love-us/zoomer-user.jpeg'
      }
    },
    {
      company: {
        name: 'SHELLS',
        logo: '/images/they-love-us/sheels-logo.svg'
      },
      user: {
        name: 'Hellena John',
        position: 'Co-founder',
        comment: 'Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet enim. Sit purus venenatis velit semper lectus sed ornare quam nulla.',
        thumbnail: '/images/they-love-us/sheels-user.jpeg'
      }
    },
    {
      company: {
        name: 'ArtVenue',
        logo: '/images/they-love-us/artvenue-logo.svg'
      },
      user: {
        name: 'David Oshodi',
        position: 'Manager',
        comment: 'A eget sed posuere dui risus habitasse mauris. Venenatis aliquet id ultrices a lacus. Pretium vehicula pretium posuere justo sed.',
        thumbnail: '/images/they-love-us/artvenue-user.jpeg'
      }
    },
    {
      company: {
        name: 'WAVES',
        logo: '/images/they-love-us/waves-logo.svg'
      },
      user: {
        name: 'Charolette Hanlin',
        position: 'CEO',
        comment: 'Magna egestas aliquet ut integer non. Sed diam enim nibh sit. Aliquam laoreet aenean metus nibh eu scelerisque.',
        thumbnail: '/images/they-love-us/waves-user.jpeg'
      }
    },
    {
      company: {
        name: 'Zoomerr',
        logo: '/images/they-love-us/zoomer-logo.svg'
      },
      user: {
        name: 'Hellen Jummy',
        position: 'Team Lead',
        comment: 'Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.',
        thumbnail: '/images/they-love-us/zoomer-user.jpeg'
      }
    },
    {
      company: {
        name: 'SHELLS',
        logo: '/images/they-love-us/sheels-logo.svg'
      },
      user: {
        name: 'Hellena John',
        position: 'Co-founder',
        comment: 'Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet enim. Sit purus venenatis velit semper lectus sed ornare quam nulla.',
        thumbnail: '/images/they-love-us/sheels-user.jpeg'
      }
    },
  ]

  const prevButtonRef = useRef(null) as unknown as MutableRefObject<HTMLButtonElement>;
  const nextButtonRef = useRef(null) as unknown as MutableRefObject<HTMLButtonElement>;
  const [swiperInstance, setSwiperInstance] = useState<SwiperCore | undefined>(undefined);

  const navigationStatics = {
    className: [
      'size-12', 'p-3', 'items-center', 'justify-center', 'overflow-hidden', 'rounded-[100px]',
      'border-2', 'border-amber-900',
      'hidden', 'lg:flex',
      'cursor-pointer', 'shadow-[0px_0px_2px_0px_#00000012,0px_1px_3px_0px_#0000001a]'
    ],
    icon: {
      size: 24,
    },
  };

  const navigationProps = [
    {
      parent: {
        className: clsx(navigationStatics.className, swiperInstance ? 'opacity-100' : 'opacity-0'),
        ref: prevButtonRef,
        onClick: () => swiperInstance && swiperInstance.slidePrev(),
      },
      icon: {
        ...navigationStatics.icon,
        name: 'arrow-left',
      },
    },
    {
      parent: {
        className: clsx(navigationStatics.className, swiperInstance ? 'opacity-100' : 'opacity-0'),
        ref: nextButtonRef,
        onClick: () => swiperInstance && swiperInstance.slideNext(),
      },
      icon: {
        ...navigationStatics.icon,
        name: 'arrow-right',
      },
    },
  ];

  useEffect(() => {
    if (swiperInstance && prevButtonRef.current && nextButtonRef.current) {
      const { navigation } = swiperInstance;
      navigation.prevEl = prevButtonRef.current;
      navigation.nextEl = nextButtonRef.current;
      navigation.update();
    }
  }, [swiperInstance, prevButtonRef, nextButtonRef]);

  return (
    <section className="w-full flex flex-col py-20 gap-20 overflow-hidden">
      <div className="flex gap-12 container items-center">
        <div className="flex-1">
          <h3 className="inline-block text-[56px] text-slate-900 leading-[61.6px] font-extrabold">
            Because they love us
          </h3>
        </div>
        <div className="flex gap-6">
          {navigationProps.map((item, i: number) => (
            <button key={i} {...item.parent}>
              <Image
                src={`/icons/${item.icon.name}.svg`}
                width={item.icon.size}
                height={item.icon.size}
                alt={item.icon.name}
              />
            </button>
          ))}
        </div>
      </div>
      <div className="relative container">
        <div className="absolute bg-amber-200 -top-10 left-10 w-[calc(100%-80px)] h-[421px]"></div>
        <Swiper
          modules={[Navigation]}
          onSwiper={(swiper) => setSwiperInstance(swiper)}
          className={clsx(
            "w-full relative",
            swiperInstance ? 'opacity-100' : 'opacity-0'
          )}
          wrapperClass="flex"
          slidesPerView={3.5}
          spaceBetween={24}
          slidesOffsetAfter={240}
        >

          {sliderItems.map((item, i) => (
            <SwiperSlide
              key={i}
              className="!w-96 h-[430px] rounded-[20px] border border-slate-200 bg-white text-black shrink-0"
            >
              <div className="w-full h-full flex flex-col gap-4 p-8">
                <div className="flex items-center gap-2 py-4">
                  <Image
                    src={item.company.logo}
                    width={32}
                    height={32}
                    alt={item.company.name}
                    className="size-8 object-contain"
                  />
                  <span className="inline-block text-2xl leading-[26.4px] font-bold text-slate-600">
                    {item.company.name}
                  </span>
                </div>
                <div>
                  <span className="inline-block text-2xl leading-[38.4px] text-black">
                    {item.user.comment}
                  </span>
                </div>
                <div className="flex gap-4 pt-4">
                  <Image
                    src={item.user.thumbnail}
                    width={64}
                    height={64}
                    alt={item.user.name}
                    className="rounded-[100px] size-16 object-contain"
                  />
                  <div className="flex flex-col h-fit">
                    <span className="text-lg leading-[28.8px] text-black">
                      {item.user.name}
                    </span>
                    <span className="text-base leading-[22.4px] text-slate-600">
                      {item.user.position}
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}

        </Swiper>
      </div>
    </section >
  );
}
