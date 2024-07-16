"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { v4 as uuidv4 } from "uuid"
import DarkModeSwitcher from "./DarkModeSwitcher"

export default function Navigation({
  toggleHamburgerMenu,
  toggleSearch,
}: {
  toggleHamburgerMenu: Function
  toggleSearch: Function
}) {
  const pathName = usePathname()

  return (
    <nav className="bg-background">
      <div className="container pt-[1.55rem] md:pt-[2rem] lg:pt-[3rem] desktop:pt-[4rem] pb-[.5rem] flex items-center justify-between">
        <div>
          <Link href="/">
            <svg
              width="107"
              height="27"
              viewBox="0 0 107 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="fill-svg"
                d="M16.08 6.47C15.1 5.93333 14.0967 5.49 13.07 5.14C12.0667 4.79 11.1217 4.615 10.235 4.615C9.13833 4.615 8.275 4.83667 7.645 5.28C7.015 5.72333 6.7 6.38833 6.7 7.275C6.7 7.88167 6.93333 8.43 7.4 8.92C7.89 9.38667 8.50833 9.80667 9.255 10.18C10.025 10.5533 10.8183 10.8917 11.635 11.195C12.3817 11.475 13.1167 11.8133 13.84 12.21C14.5867 12.5833 15.2517 13.0617 15.835 13.645C16.4183 14.205 16.885 14.9167 17.235 15.78C17.585 16.62 17.76 17.6583 17.76 18.895C17.76 20.2017 17.4217 21.415 16.745 22.535C16.0683 23.655 15.0767 24.565 13.77 25.265C12.4633 25.9417 10.8533 26.28 8.94 26.28C7.96 26.28 6.95667 26.1867 5.93 26C4.92667 25.79 3.935 25.4867 2.955 25.09C1.975 24.67 1.03 24.145 0.12 23.515L2.36 19.56C2.96667 20.0033 3.62 20.4 4.32 20.75C5.04333 21.0767 5.76667 21.3333 6.49 21.52C7.21333 21.7067 7.87833 21.8 8.485 21.8C9.09167 21.8 9.69833 21.7183 10.305 21.555C10.935 21.3683 11.4483 21.065 11.845 20.645C12.265 20.225 12.475 19.6417 12.475 18.895C12.475 18.3817 12.3 17.915 11.95 17.495C11.6233 17.075 11.1683 16.69 10.585 16.34C10.025 15.99 9.40667 15.6867 8.73 15.43C7.93667 15.1267 7.12 14.7767 6.28 14.38C5.44 13.9833 4.64667 13.505 3.9 12.945C3.17667 12.3617 2.58167 11.65 2.115 10.81C1.67167 9.94667 1.45 8.89667 1.45 7.66C1.45 6.16667 1.77667 4.87167 2.43 3.775C3.10667 2.67833 4.05167 1.815 5.265 1.185C6.47833 0.531665 7.87833 0.169999 9.465 0.0999997C11.5417 0.0999997 13.2217 0.344999 14.505 0.834999C15.8117 1.325 16.9783 1.90833 18.005 2.585L16.08 6.47ZM41.9453 0.239998V26H36.8703V15.535H25.3553V26H20.2803V0.239998H25.3553V10.635H36.8703V0.239998H41.9453ZM46.9711 1.43H61.6361V2.095H47.6711V13.26H60.2711V13.925H47.6711V25.335H62.1261V26H46.9711V1.43ZM66.6011 1.43H81.2661V2.095H67.3011V13.26H79.9011V13.925H67.3011V25.335H81.7561V26H66.6011V1.43ZM106.321 26.455L86.7212 2.69L86.8962 2.34L86.9312 26H86.2312V1.045H86.2662L106.041 25.055L105.691 25.02V1.43H106.356V26.455H106.321Z"
              />
            </svg>
          </Link>
        </div>
        <div
          className="hidden md:flex flex-row gap-x-[1rem] 
						lg:gap-x-[3rem]"
        >
          <ul className="flex flex-row gap-x-[2rem] lg:gap-x-[4rem]">
            {[
              ["portfolio", "/"],
              ["shop", "/shop?page=1"],
              ["about", "/about"],
              ["blog", "/blog"],
              ["contact", "/contact"],
            ].map(([title, link]) => (
              <li
                className=""
                key={uuidv4()}
              >
                <Link
                  className={`text-xl capitalize ${
                    pathName ===
                    link.replace(`/${pathName}$(?= )([ A-Za-z0-9])+/`, "")
                      ? "text-accent"
                      : "text-primary hover:text-gray-light transition-[hover]"
                  }`}
                  href={link}
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="flex flex-row gap-x-[1rem] items-center">
            <li className="group">
              <button className="block">
                <svg
                  className=""
                  onClick={() => {
                    toggleSearch()
                  }}
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_88_11)">
                    <path
                      className="stroke-svg"
                      d="M9.96875 17.1875C13.9556 17.1875 17.1875 13.9556 17.1875 9.96875C17.1875 5.98194 13.9556 2.75 9.96875 2.75C5.98194 2.75 2.75 5.98194 2.75 9.96875C2.75 13.9556 5.98194 17.1875 9.96875 17.1875Z"
                      stroke="black"
                      strokeWidth="1.375"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />

                    <path
                      className="stroke-svg"
                      d="M15.0703 15.0742L19.2469 19.2508"
                      stroke="black"
                      strokeWidth="1.375"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>

                  <defs>
                    <clipPath id="clip0_88_11">
                      <rect
                        width="22"
                        height="22"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </button>
            </li>
            <li className="group">
              <Link href="/cart">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_88_19)">
                    <path
                      className="fill-svg"
                      d="M6.875 19.9375C7.63439 19.9375 8.25 19.3219 8.25 18.5625C8.25 17.8031 7.63439 17.1875 6.875 17.1875C6.11561 17.1875 5.5 17.8031 5.5 18.5625C5.5 19.3219 6.11561 19.9375 6.875 19.9375Z"
                      fill="black"
                    />
                    <path
                      className="fill-svg"
                      d="M15.8125 19.9375C16.5719 19.9375 17.1875 19.3219 17.1875 18.5625C17.1875 17.8031 16.5719 17.1875 15.8125 17.1875C15.0531 17.1875 14.4375 17.8031 14.4375 18.5625C14.4375 19.3219 15.0531 19.9375 15.8125 19.9375Z"
                      fill="black"
                    />
                    <path
                      className="stroke-svg"
                      d="M3.63516 6.1875H19.0523L16.7836 14.1281C16.7026 14.4163 16.5293 14.6699 16.2902 14.85C16.0511 15.0301 15.7595 15.1267 15.4602 15.125H7.22734C6.92801 15.1267 6.63639 15.0301 6.39729 14.85C6.1582 14.6699 5.98485 14.4163 5.90391 14.1281L2.79297 3.24844C2.75186 3.10471 2.66502 2.9783 2.54562 2.88836C2.42621 2.79841 2.28074 2.74984 2.13125 2.75H0.6875"
                      stroke="black"
                      strokeWidth="1.375"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_88_19">
                      <rect
                        width="22"
                        height="22"
                        fill="white"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </Link>
            </li>
            <li className="group">
              <Link href="/account">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_88_15)">
                    <path
                      className="stroke-svg"
                      d="M11 13.75C14.0376 13.75 16.5 11.2876 16.5 8.25C16.5 5.21243 14.0376 2.75 11 2.75C7.96243 2.75 5.5 5.21243 5.5 8.25C5.5 11.2876 7.96243 13.75 11 13.75Z"
                      stroke="black"
                      strokeWidth="1.375"
                      strokeMiterlimit="10"
                    />
                    <path
                      className="stroke-svg"
                      d="M2.66406 18.5633C3.50877 17.0999 4.72384 15.8846 6.18712 15.0397C7.65039 14.1948 9.31031 13.75 11 13.75C12.6897 13.75 14.3496 14.1948 15.8129 15.0397C17.2762 15.8846 18.4912 17.0999 19.3359 18.5633"
                      stroke="black"
                      strokeWidth="1.375"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_88_15">
                      <rect
                        width="22"
                        height="22"
                        fill="white"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </Link>
            </li>
            <li className="group">
              <DarkModeSwitcher />
            </li>
          </ul>
        </div>
        <div className="md:hidden">
          <button>
            <svg
              className="group"
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="18"
              viewBox="0 0 26 18"
              fill="none"
              onClick={() => {
                toggleHamburgerMenu()
              }}
            >
              <path
                className="fill-primary group-hover:fill-accent"
                d="M24.6 8H1C0.4477 8 0 8.4477 0 9C0 9.5523 0.4477 10 1 10H24.6C25.1523 10 25.6 9.5523 25.6 9C25.6 8.4477 25.1523 8 24.6 8Z"
                fill="#0A0A0A"
              />
              <path
                className="fill-primary group-hover:fill-accent"
                d="M24.6 0H1C0.4477 0 0 0.4477 0 1C0 1.5523 0.4477 2 1 2H24.6C25.1523 2 25.6 1.5523 25.6 1C25.6 0.4477 25.1523 0 24.6 0Z"
                fill="#0A0A0A"
              />
              <path
                className="fill-primary group-hover:fill-accent"
                d="M24.6 16H1C0.4477 16 0 16.4477 0 17C0 17.5523 0.4477 18 1 18H24.6C25.1523 18 25.6 17.5523 25.6 17C25.6 16.4477 25.1523 16 24.6 16Z"
                fill="#0A0A0A"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  )
}
