import Image from "next/image";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import type { ThumbnailCardProps } from "@/types";

export const ThumbnailCard = ({ hasHeader, hasPlayer, imageProps, wrapperClassName = '' }: ThumbnailCardProps) => {
  return (
    <div
      className={twMerge(
        "flex flex-col border-[5px] border-white rounded-[20px] shadow-[0_0_15px_0_rgba(0,0,0,0.07),0_25px_50px_-12px_rgba(0,0,0,0.25)] overflow-hidden",
        wrapperClassName
      )}
    >
      {hasHeader && (
        <div className="w-full h-[41px] px-4 py-2 shrink-0 bg-white">
          <div className="flex items-center gap-[5px] h-full">
            {Array.from({ length: 3 }).map((_, index) => (
              <div
                key={index}
                className={clsx(
                  "size-2.5 rounded-full",
                  index === 0 ? 'bg-rose-600' : index === 1 ? 'bg-amber-400' : 'bg-green-500'
                )}
              ></div>
            ))}
          </div>
        </div>
      )}
      <div className="relative h-full">
        <Image
          src={imageProps?.src || "/images/why-join-us/video-thumbnail.png"}
          width={imageProps?.width || 520}
          height={imageProps?.height || 309}
          className={twMerge(
            "object-cover w-full h-full",
            imageProps?.className
          )}
          alt={imageProps?.alt || "Why join us"}
          loading="lazy"
          style={{
            width: imageProps?.width || 520,
            height: imageProps?.height || 309
          }}
        />
        {hasPlayer && (
          <button className="flex items-center justify-center pl-7 py-6 pr-5 rounded-[100px] bg-[#121619bf] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Image
              src="/icons/icon-play-default.svg"
              width={96}
              height={96}
              alt="Play"
              className="size-24"
              loading="lazy"
            />
          </button>
        )}
      </div>
    </div>
  );
};
