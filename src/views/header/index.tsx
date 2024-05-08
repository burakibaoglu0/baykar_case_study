import Link from "next/link";
import clsx from "clsx";
import type { HeaderItem } from "@/types/index";

export default function Header() {

  const headerItems: HeaderItem[] = [
    {
      label: 'Collers',
      path: '/landing-page',
      isNavItem: false
    },
    {
      label: 'Products',
      path: '/products',
      isNavItem: true
    },
    {
      label: 'Solutions',
      path: '/solutions',
      isNavItem: true
    },
    {
      label: 'Pricing',
      path: '/pricing',
      isNavItem: true
    },
    {
      label: 'Resources',
      path: '/resources',
      isNavItem: true
    },
    {
      label: 'Log in',
      path: '/auth/login',
      isNavItem: true
    },
    {
      label: 'Sign up now',
      path: '/auth/register',
      isNavItem: true,
      hasBorder: true
    },
  ]

  return (
    <header
      className="w-full h-24"
    >
      <div className="container h-full py-6 flex items-center justify-between">
        {headerItems.filter(item => !item.isNavItem).length > 0 && (
          <>
            {headerItems.map((item, index) => {
              if (!item.isNavItem) {
                return (
                  <Link
                    key={index}
                    className="inline-flex items-center justify-center"
                    href={item.path}
                  >
                    <span className="text-[32px] leading-[35.2px] text-amber-900 font-bold">
                      {item.label}
                    </span>
                  </Link>
                )
              }
            })}
          </>
        )}

        <nav className="h-full">
          <ul className="flex items-center gap-4 h-full">
            {headerItems.map((item, index) => {
              if (item.isNavItem) {
                return (
                  <li
                    key={index}
                    className={clsx(
                      "px-2 py-3 h-full rounded-lg flex items-center justify-center",
                      item.hasBorder && "border-2 border-amber-900 px-[26px]",
                    )}
                  >
                    <Link className="inline-block" href={item.path}>
                      <span className="inline-block text-base font-medium text-amber-900 tracking-[.5px]">
                        {item.label}
                      </span>
                    </Link>
                  </li>
                )
              }
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
