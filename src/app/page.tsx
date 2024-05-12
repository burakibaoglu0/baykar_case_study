import Link from "next/link";
import Image from "next/image";

type ContentSectionProps = {
  href: string;
  title: string;
  imagePath: string;
  alt: string;
  side: "left" | "right" | string;
};

function ContentSection({ href, title, imagePath, alt, side }: ContentSectionProps) {
  return (
    <div className={`home-page-content-${side}`}>
      <Link href={href} className="home-page-content-button">
        <span className="home-page-content-title">{title}</span>
      </Link>
      <Image
        width={1000}
        height={1000}
        priority
        src={imagePath}
        alt={alt}
        className="home-page-content-image"
      />
    </div>
  );
}

export default function App() {

  const homepageItems = [
    {
      title: "Landing Page",
      href: "/landing-page",
      imagePath: "/images/Landing-Page.png",
      alt: "Landing Page Image",
      side: "left",
    },
    {
      title: "Quiz App",
      href: "/quiz",
      imagePath: "/images/Quiz-App.png",
      alt: "Quiz App Image",
      side: "right",
    }
  ];

  return (
    <main className="home-page-content">
      {homepageItems.map((item, index) => (
        <ContentSection key={index} {...item} />
      ))}
    </main>
  );
}
