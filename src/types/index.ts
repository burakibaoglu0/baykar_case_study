type HeaderItem = {
  label: string;
  path: string;
  isNavItem: boolean;
  hasBorder?: boolean;
}

type ThumbnailCardProps = {
  hasHeader?: boolean;
  hasPlayer?: boolean;
  wrapperClassName?: string;
  imageProps: {
    src: string;
    alt: string;
    width: number;
    height: number;
    className?: string;
  };
};

type ContentSectionProps = {
  href: string;
  title: string;
  imagePath: string;
  alt: string;
  side: "left" | "right" | string;
};

export type { HeaderItem, ThumbnailCardProps, ContentSectionProps };
