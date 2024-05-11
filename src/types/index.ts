export type HeaderItem = {
  label: string;
  path: string;
  isNavItem: boolean;
  hasBorder?: boolean;
}

export type ThumbnailCardProps = {
  hasHeader?: boolean;
  hasPlayer?: boolean;
  wrapperClassName?: string;
  imageProps: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
};
