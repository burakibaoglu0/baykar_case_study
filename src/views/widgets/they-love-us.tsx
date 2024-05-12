'use client';

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useState, useRef, useEffect, MutableRefObject } from "react";
import Image from "next/image";
import clsx from "clsx";
import type { Swiper as SwiperCore } from "swiper";

export const TheyLoveUs = () => {

  const sliderItems = [
    {
      company: {
        name: 'kontrastr',
        logo: '/images/they-love-us/kontrastr-logo.svg'
      },
      user: {
        name: 'Ralph Edwards',
        position: 'Product Designer',
        comment: 'Amet morbi enim sodales quis dui, in habitant pharetra. Risus id fringilla sed adipiscing volutpat sit varius turpis. Sed pretium se.',
        thumbnail: '/images/they-love-us/kontrastr-user.jpeg'
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
        name: 'kontrastr',
        logo: '/images/they-love-us/kontrastr-logo.svg'
      },
      user: {
        name: 'Ralph Edwards',
        position: 'Product Designer',
        comment: 'Amet morbi enim sodales quis dui, in habitant pharetra. Risus id fringilla sed adipiscing volutpat sit varius turpis. Sed pretium se.',
        thumbnail: '/images/they-love-us/kontrastr-user.jpeg'
      }
    }
  ]

  const breakpoints = {
    0: {
      slidesPerView: 1.068,
      spaceBetween: 16,
      slidesOffsetAfter: 8
    },
    575: {
      slidesPerView: 1.656,
      spaceBetween: 16,
      slidesOffsetAfter: 8
    },
    670: {
      slidesPerView: 1.94,
      spaceBetween: 16,
      slidesOffsetAfter: 8
    },
    768: {
      slidesPerView: 2.23,
      spaceBetween: 16,
      slidesOffsetAfter: 8,
    },
    1024: {
      slidesPerView: 2.48,
      spaceBetween: 24,
      slidesOffsetAfter: 8
    },
    1259: {
      slidesPerView: 2.74,
      spaceBetween: 24,
      slidesOffsetAfter: 8
    },
    1439: {
      slidesPerView: 3.139,
      spaceBetween: 24,
      slidesOffsetAfter: 8
    }
  }

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
    <section className={clsx(
      "w-full flex flex-col py-12 gap-8 overflow-hidden",
      "lg:py-20 lg:gap-20"
    )}>
      <div className={clsx(
        "flex container items-center",
        "lg:gap-12"
      )}>
        <div className={clsx(
          "flex flex-1 items-center justify-center",
          "items-stretch justify-start"
        )}>
          <h3 className={clsx(
            "inline-block w-fit text-[32px] text-slate-900 leading-[35.2px] font-bold",
            "lg:text-[56px] lg:leading-[61.6px] lg:font-extrabold lg:w-full"
          )}>
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
        <div className={clsx(
          "absolute bg-amber-200 -top-4 -left-40 w-[calc(100%+160px)] h-[277px]",
          "xs:w-[770px]",
          "sm:w-[868px]",
          "md:w-[1064px]",
          "lg:-top-10 lg:left-5 lg:h-[421px] lg:w-[calc(100%-40px)]",
          "xl:w-[calc(100%-80px)] xl:left-10"
        )}></div>
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
          breakpoints={breakpoints}
        >

          {sliderItems.map((item, i) => (
            <SwiperSlide
              key={i}
              className="rounded-[20px] border border-slate-200 bg-white text-black shrink-0"
            >
              <div className={clsx(
                "w-full h-full flex flex-col gap-2 p-6",
                "lg:gap-4 lg:p-8"
              )}>
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
                  <span className={clsx(
                    "inline-block text-base leading-[22.4px] text-black",
                    "lg:text-2xl lg:leading-[38.4px]"
                  )}>
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
