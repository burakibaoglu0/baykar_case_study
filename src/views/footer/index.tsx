import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";

export default function Footer() {

  const footerLinks = [
    {
      title: 'Product',
      links: [
        {
          title: 'Pricing',
          path: '#'
        },
        {
          title: 'Overview',
          path: '#'
        },
        {
          title: 'Browse',
          path: '#'
        },
        {
          title: 'Accessibility',
          path: '#'
        },
        {
          title: 'Five',
          path: '#'
        }
      ]
    },
    {
      title: 'Solutions',
      links: [
        {
          title: 'Brainstorming',
          path: '#'
        },
        {
          title: 'Ideation',
          path: '#'
        },
        {
          title: 'Wireframing',
          path: '#'
        },
        {
          title: 'Research',
          path: '#'
        },
        {
          title: 'Design',
          path: '#'
        }
      ]
    },
    {
      title: 'Support',
      links: [
        {
          title: 'Contact Us',
          path: '#'
        },
        {
          title: 'Developers',
          path: '#'
        },
        {
          title: 'Documentation',
          path: '#'
        },
        {
          title: 'Integrations',
          path: '#'
        },
        {
          title: 'Reports',
          path: '#'
        }
      ]
    }
  ]

  return (
    <footer className="w-full bg-slate-900 text-slate-200">
      <div className="container flex flex-col">
        <div className={clsx(
          "w-full flex flex-col items-center justify-center gap-12 py-12 border-t border-b border-[#334455]",
          "lg:flex-row"
        )}>
          {footerLinks.map((footerLink, index) => (
            <div key={index} className={clsx(
              "flex-1 h-fit w-full",
              "lg:w-fit"
            )}>
              <div className={clsx(
                "flex items-center h-[42px] py-3 justify-center",
                "lg:justify-start"
              )}>
                <h4 className="text-base leading-[17.6px] text-white font-medium">
                  {footerLink.title}
                </h4>
              </div>
              <ul className="flex flex-col flex-1">
                {footerLink.links.map((link, index) => (
                  <li className={clsx(
                    "h-[46px] flex items-center py-3 justify-center",
                    "lg:justify-start"
                  )}
                    key={index}
                  >
                    <Link className="text-base leading-[22.4px] inline-block" href={link.path}>
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="flex-1 flex flex-col gap-2 h-fit">
            <div className={clsx(
              "flex items-center justify-center h-[42px] py-3",
              "lg:justify-start"
            )}>
              <h4 className="text-base leading-[17.6px] text-white font-medium">
                Get the app
              </h4>
            </div>
            <div className="flex flex-col gap-2">
              <button className={clsx(
                "h-[46px] flex items-center justify-center",
                "lg:justify-start"
              )}>
                <Image
                  src="/images/app-store.svg"
                  alt="App Store"
                  width={119.66}
                  height={40}
                />
              </button>
              <button className={clsx(
                "h-[46px] flex items-center justify-center",
                "lg:justify-start"
              )}>
                <Image
                  src="/images/google-play.svg"
                  alt="Google Play"
                  width={135}
                  height={40}
                />
              </button>
            </div>
            <div className="pt-12 pb-3 h-[78px]">
              <span className={clsx(
                "inline-block text-base font-medium leading-[17.6px] w-full text-center",
                "lg:w-fit"
              )}>
                Follow Us
              </span>
            </div>
            <div className="flex gap-4 items-center">
              <button>
                <Link href={'#'}>
                  <Image
                    src="/icons/icon-youtube.svg"
                    alt="Youtube Channel"
                    width={24}
                    height={24}
                  />
                </Link>
              </button>
              <button>
                <Link href={'#'}>
                  <Image
                    src="/icons/icon-facebook.svg"
                    alt="Facebook Page"
                    width={24}
                    height={24}
                  />
                </Link>
              </button>
              <button>
                <Link href={'#'}>
                  <Image
                    src="/icons/icon-twitter.svg"
                    alt="Twitter Page"
                    width={24}
                    height={24}
                  />
                </Link>
              </button>
              <button>
                <Link href={'#'}>
                  <Image
                    src="/icons/icon-instagram.svg"
                    alt="Instagram Page"
                    width={24}
                    height={24}
                  />
                </Link>
              </button>
              <button>
                <Link href={'#'}>
                  <Image
                    src="/icons/icon-linkedin.svg"
                    alt="LinkedIn Page"
                    width={24}
                    height={24}
                  />
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className={clsx(
          "w-full flex flex-col gap-6 py-6",
          "lg:flex-row lg:gap-12 lg:py-6 lg:h-24"
        )}>
          <div className={clsx(
            "flex items-center justify-center flex-1",
            "lg:justify-start"
          )}>
            <span className="text-base leading-[22.4px]">
              Collers @ 2023. All rights reserved.
            </span>
          </div>
          <div className={clsx(
            "flex gap-8 justify-center",
            "lg:justify-start"
          )}>
            <ul className="flex items-center justify-center gap-8">
              <li className="h-full flex items-center py-3">
                <Link href="#">
                  Terms
                </Link>
              </li>
              <li className="h-full flex items-center py-3">
                <Link href="#">
                  Privacy
                </Link>
              </li>
              <li className="h-full flex items-center py-3">
                <Link href="#">
                  Contact
                </Link>
              </li>
            </ul>
            <button className="flex items-center gap-2 py-3">
              <Image
                src="/icons/icon-world.svg"
                alt="Localization"
                width={24}
                height={24}
              />
              <span className="text-base leading-[22.4px]">
                EN
              </span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
