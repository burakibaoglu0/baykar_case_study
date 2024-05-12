import clsx from "clsx";
import { HeaderItem } from "@/types";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { setMobileMenuOpen } from "@/redux/reducers/header";

export const MobileMenu = ({ headerItems }: { headerItems: HeaderItem[]; }) => {

  const isOpen = useAppSelector((state) => state.header.isMobileMenuOpen);
  const dispatch = useAppDispatch();

  return (
    <div
      className={clsx(
        "fixed top-0 right-0 z-50 w-[80%] max-w-96 h-full bg-white shadow-xl",
        "transform transition-transform duration-700",
        isOpen ? "translate-x-0" : "translate-x-full",
        "lg:hidden"
      )}
    >
      <div className={clsx(
        "container h-full flex flex-col items-center py-20 gap-4",
        "lg:hidden"
      )}>
        <nav className="flex flex-col items-center w-full gap-2">
          {headerItems.map((item, index) =>
            item.isNavItem && (
              <Link
                key={index}
                href={item.path}
                className={clsx(
                  "p-2 w-full",
                  item.hasBorder && "border border-amber-900 rounded-lg text-center self-center"
                )}
              >
                <span
                  className="text-2xl font-bold text-amber-900"
                >
                  {item.label}
                </span>
              </Link>
            ))}
        </nav>
        <button
          onClick={() => dispatch(setMobileMenuOpen(false))}
          className="mt-4"
        >
          <span className="text-2xl font-bold text-red-900 py-2">
            Close
          </span>
        </button>
      </div>
    </div>
  )
};
