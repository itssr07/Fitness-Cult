import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <div className="bg-black">
            <div className="container mx-auto relative">
                <div className="py-4 mx-4 md:mx-6">
                    <div className="flex items-center justify-between border-b border-gray-900 dark:border-gray-300 py-4">
                        <div>
                            <div className="hidden lg:block cursor-pointer" role="img" aria-label="luxe. Logo.">
                                <svg className="fill-stroke  text-white hover:text-green-700" width={55} height={25} viewBox="0 0 55 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M5.64 21.21C5.64 22.03 5.81 22.6 6.15 22.92C6.49 23.22 7.08 23.37 7.92 23.37V24C6.08 23.92 4.87 23.88 4.29 23.88C3.71 23.88 2.5 23.92 0.66 24V23.37C1.5 23.37 2.09 23.22 2.43 22.92C2.77 22.6 2.94 22.03 2.94 21.21V4.08C2.94 3.16 2.77 2.49 2.43 2.07C2.09 1.65 1.5 1.44 0.66 1.44V0.809998C1.28 0.869999 1.9 0.899999 2.52 0.899999C3.78 0.899999 4.82 0.759999 5.64 0.479999V21.21ZM23.074 20.76C23.074 21.68 23.244 22.35 23.584 22.77C23.924 23.19 24.514 23.4 25.354 23.4V24.03C24.734 23.97 24.114 23.94 23.494 23.94C22.234 23.94 21.194 24.08 20.374 24.36V20.82C19.894 22.06 19.214 22.97 18.334 23.55C17.454 24.13 16.494 24.42 15.454 24.42C14.094 24.42 13.054 24.04 12.334 23.28C11.974 22.88 11.714 22.37 11.554 21.75C11.414 21.13 11.344 20.33 11.344 19.35V11.82C11.344 10.9 11.174 10.23 10.834 9.81C10.494 9.39 9.90398 9.18 9.06398 9.18V8.55C9.68398 8.61 10.304 8.64 10.924 8.64C12.184 8.64 13.224 8.5 14.044 8.22V20.01C14.044 20.77 14.084 21.39 14.164 21.87C14.264 22.33 14.474 22.71 14.794 23.01C15.134 23.31 15.644 23.46 16.324 23.46C17.084 23.46 17.774 23.22 18.394 22.74C19.014 22.26 19.494 21.61 19.834 20.79C20.194 19.95 20.374 19.03 20.374 18.03V11.82C20.374 10.9 20.204 10.23 19.864 9.81C19.524 9.39 18.934 9.18 18.094 9.18V8.55C18.714 8.61 19.334 8.64 19.954 8.64C21.214 8.64 22.254 8.5 23.074 8.22V20.76ZM39.3356 21.87C39.6956 22.37 39.9956 22.73 40.2356 22.95C40.4956 23.15 40.8156 23.29 41.1956 23.37V24C40.1556 23.92 39.4456 23.88 39.0656 23.88C38.3856 23.88 37.2056 23.92 35.5256 24V23.37C35.8456 23.37 36.1156 23.31 36.3356 23.19C36.5756 23.07 36.6956 22.91 36.6956 22.71C36.6956 22.57 36.6556 22.45 36.5756 22.35L33.1556 17.37L30.9656 20.22C30.4056 20.96 30.1256 21.56 30.1256 22.02C30.1256 22.44 30.3156 22.77 30.6956 23.01C31.0956 23.23 31.6456 23.36 32.3456 23.4V24C31.3056 23.94 30.1656 23.91 28.9256 23.91C28.0456 23.91 27.2856 23.94 26.6456 24V23.4C27.0456 23.36 27.4456 23.18 27.8456 22.86C28.2656 22.54 28.7456 22.02 29.2856 21.3L32.7356 16.77L28.5656 10.68C28.1656 10.1 27.8456 9.72 27.6056 9.54C27.3656 9.34 27.0656 9.22 26.7056 9.18V8.55C27.7456 8.63 28.4556 8.67 28.8356 8.67C29.5156 8.67 30.6956 8.63 32.3756 8.55V9.18C32.0556 9.18 31.7756 9.24 31.5356 9.36C31.3156 9.48 31.2056 9.64 31.2056 9.84C31.2056 9.98 31.2456 10.1 31.3256 10.2L34.5356 14.88L36.6056 11.97C37.2056 11.11 37.5056 10.48 37.5056 10.08C37.5056 9.8 37.3656 9.59 37.0856 9.45C36.8256 9.29 36.3956 9.19 35.7956 9.15V8.55C36.8356 8.61 37.6756 8.64 38.3156 8.64C39.1956 8.64 39.9556 8.61 40.5956 8.55V9.15C39.7756 9.25 38.8956 9.95 37.9556 11.25L34.9256 15.45L39.3356 21.87ZM54.9642 20.4C54.6042 21.5 53.9242 22.45 52.9242 23.25C51.9442 24.03 50.7542 24.42 49.3542 24.42C47.9342 24.42 46.7042 24.1 45.6642 23.46C44.6242 22.8 43.8242 21.89 43.2642 20.73C42.7242 19.55 42.4542 18.19 42.4542 16.65C42.4542 14.91 42.7342 13.4 43.2942 12.12C43.8542 10.84 44.6442 9.86 45.6642 9.18C46.6842 8.48 47.8742 8.13 49.2342 8.13C51.0342 8.13 52.4142 8.68 53.3742 9.78C54.3542 10.86 54.8442 12.51 54.8442 14.73H45.4542C45.3942 15.29 45.3642 15.93 45.3642 16.65C45.3642 17.97 45.5742 19.12 45.9942 20.1C46.4342 21.08 47.0042 21.84 47.7042 22.38C48.4242 22.9 49.1742 23.16 49.9542 23.16C50.9142 23.16 51.7642 22.93 52.5042 22.47C53.2442 22.01 53.8642 21.24 54.3642 20.16L54.9642 20.4ZM49.1142 8.7C48.1742 8.7 47.3642 9.16 46.6842 10.08C46.0042 11 45.5842 12.36 45.4242 14.16H51.9642C52.0042 12.6 51.7742 11.3 51.2742 10.26C50.7942 9.22 50.0742 8.7 49.1142 8.7Z"
                                        fill="currentColor"
                                    />
                                </svg>
                            </div>
                            <div className="hidden md:block lg:hidden cursor-pointer" role="img" aria-label="luxe. Logo.">
                                <svg className="fill-stroke  text-white hover:text-green-700" width={44} height={20} viewBox="0 0 44 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M4.512 16.768C4.512 17.424 4.648 17.88 4.92 18.136C5.192 18.376 5.664 18.496 6.336 18.496V19C4.864 18.936 3.896 18.904 3.432 18.904C2.968 18.904 2 18.936 0.528 19V18.496C1.2 18.496 1.672 18.376 1.944 18.136C2.216 17.88 2.352 17.424 2.352 16.768V3.064C2.352 2.328 2.216 1.792 1.944 1.456C1.672 1.12 1.2 0.951999 0.528 0.951999V0.447999C1.024 0.495999 1.52 0.519999 2.016 0.519999C3.024 0.519999 3.856 0.407999 4.512 0.183999V16.768ZM18.4592 16.408C18.4592 17.144 18.5952 17.68 18.8672 18.016C19.1392 18.352 19.6112 18.52 20.2832 18.52V19.024C19.7872 18.976 19.2912 18.952 18.7952 18.952C17.7872 18.952 16.9552 19.064 16.2992 19.288V16.456C15.9152 17.448 15.3712 18.176 14.6672 18.64C13.9632 19.104 13.1952 19.336 12.3632 19.336C11.2752 19.336 10.4432 19.032 9.86719 18.424C9.57919 18.104 9.37119 17.696 9.24319 17.2C9.13119 16.704 9.07519 16.064 9.07519 15.28V9.256C9.07519 8.52 8.93919 7.984 8.66719 7.648C8.39519 7.312 7.92319 7.144 7.25119 7.144V6.64C7.74719 6.688 8.24319 6.712 8.73919 6.712C9.74719 6.712 10.5792 6.6 11.2352 6.376V15.808C11.2352 16.416 11.2672 16.912 11.3312 17.296C11.4112 17.664 11.5792 17.968 11.8352 18.208C12.1072 18.448 12.5152 18.568 13.0592 18.568C13.6672 18.568 14.2192 18.376 14.7152 17.992C15.2112 17.608 15.5952 17.088 15.8672 16.432C16.1552 15.76 16.2992 15.024 16.2992 14.224V9.256C16.2992 8.52 16.1632 7.984 15.8912 7.648C15.6192 7.312 15.1472 7.144 14.4752 7.144V6.64C14.9712 6.688 15.4672 6.712 15.9632 6.712C16.9712 6.712 17.8032 6.6 18.4592 6.376V16.408ZM31.4685 17.296C31.7565 17.696 31.9965 17.984 32.1885 18.16C32.3965 18.32 32.6525 18.432 32.9565 18.496V19C32.1245 18.936 31.5565 18.904 31.2525 18.904C30.7085 18.904 29.7645 18.936 28.4205 19V18.496C28.6765 18.496 28.8925 18.448 29.0685 18.352C29.2605 18.256 29.3565 18.128 29.3565 17.968C29.3565 17.856 29.3245 17.76 29.2605 17.68L26.5245 13.696L24.7725 15.976C24.3245 16.568 24.1005 17.048 24.1005 17.416C24.1005 17.752 24.2525 18.016 24.5565 18.208C24.8765 18.384 25.3165 18.488 25.8765 18.52V19C25.0445 18.952 24.1325 18.928 23.1405 18.928C22.4365 18.928 21.8285 18.952 21.3165 19V18.52C21.6365 18.488 21.9565 18.344 22.2765 18.088C22.6125 17.832 22.9965 17.416 23.4285 16.84L26.1885 13.216L22.8525 8.344C22.5325 7.88 22.2765 7.576 22.0845 7.432C21.8925 7.272 21.6525 7.176 21.3645 7.144V6.64C22.1965 6.704 22.7645 6.736 23.0685 6.736C23.6125 6.736 24.5565 6.704 25.9005 6.64V7.144C25.6445 7.144 25.4205 7.192 25.2285 7.288C25.0525 7.384 24.9645 7.512 24.9645 7.672C24.9645 7.784 24.9965 7.88 25.0605 7.96L27.6285 11.704L29.2845 9.376C29.7645 8.688 30.0045 8.184 30.0045 7.864C30.0045 7.64 29.8925 7.472 29.6685 7.36C29.4605 7.232 29.1165 7.152 28.6365 7.12V6.64C29.4685 6.688 30.1405 6.712 30.6525 6.712C31.3565 6.712 31.9645 6.688 32.4765 6.64V7.12C31.8205 7.2 31.1165 7.76 30.3645 8.8L27.9405 12.16L31.4685 17.296ZM43.9714 16.12C43.6834 17 43.1394 17.76 42.3394 18.4C41.5554 19.024 40.6034 19.336 39.4834 19.336C38.3474 19.336 37.3634 19.08 36.5314 18.568C35.6994 18.04 35.0594 17.312 34.6114 16.384C34.1794 15.44 33.9634 14.352 33.9634 13.12C33.9634 11.728 34.1874 10.52 34.6354 9.496C35.0834 8.472 35.7154 7.688 36.5314 7.144C37.3474 6.584 38.2994 6.304 39.3874 6.304C40.8274 6.304 41.9314 6.744 42.6994 7.624C43.4834 8.488 43.8754 9.808 43.8754 11.584H36.3634C36.3154 12.032 36.2914 12.544 36.2914 13.12C36.2914 14.176 36.4594 15.096 36.7954 15.88C37.1474 16.664 37.6034 17.272 38.1634 17.704C38.7394 18.12 39.3394 18.328 39.9634 18.328C40.7314 18.328 41.4114 18.144 42.0034 17.776C42.5954 17.408 43.0914 16.792 43.4914 15.928L43.9714 16.12ZM39.2914 6.76C38.5394 6.76 37.8914 7.128 37.3474 7.864C36.8034 8.6 36.4674 9.688 36.3394 11.128H41.5714C41.6034 9.88 41.4194 8.84 41.0194 8.008C40.6354 7.176 40.0594 6.76 39.2914 6.76Z"
                                        fill="currentColor"
                                    />
                                </svg>
                            </div>
                            <div className="md:hidden cursor-pointer" role="img" aria-label="luxe. Logo.">
                                <svg className="fill-stroke  text-white hover:text-green-700" width={37} height={17} viewBox="0 0 37 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M3.76 14.14C3.76 14.6867 3.87333 15.0667 4.1 15.28C4.32667 15.48 4.72 15.58 5.28 15.58V16C4.05333 15.9467 3.24667 15.92 2.86 15.92C2.47333 15.92 1.66667 15.9467 0.44 16V15.58C1 15.58 1.39333 15.48 1.62 15.28C1.84667 15.0667 1.96 14.6867 1.96 14.14V2.72C1.96 2.10667 1.84667 1.66 1.62 1.38C1.39333 1.1 1 0.959999 0.44 0.959999V0.539999C0.853333 0.579999 1.26667 0.599999 1.68 0.599999C2.52 0.599999 3.21333 0.506666 3.76 0.319999V14.14ZM15.3827 13.84C15.3827 14.4533 15.496 14.9 15.7227 15.18C15.9493 15.46 16.3427 15.6 16.9027 15.6V16.02C16.4893 15.98 16.076 15.96 15.6627 15.96C14.8227 15.96 14.1293 16.0533 13.5827 16.24V13.88C13.2627 14.7067 12.8093 15.3133 12.2227 15.7C11.636 16.0867 10.996 16.28 10.3027 16.28C9.39599 16.28 8.70266 16.0267 8.22266 15.52C7.98266 15.2533 7.80932 14.9133 7.70266 14.5C7.60932 14.0867 7.56266 13.5533 7.56266 12.9V7.88C7.56266 7.26667 7.44932 6.82 7.22266 6.54C6.99599 6.26 6.60266 6.12 6.04266 6.12V5.7C6.45599 5.74 6.86932 5.76 7.28266 5.76C8.12266 5.76 8.81599 5.66667 9.36266 5.48V13.34C9.36266 13.8467 9.38932 14.26 9.44266 14.58C9.50932 14.8867 9.64932 15.14 9.86266 15.34C10.0893 15.54 10.4293 15.64 10.8827 15.64C11.3893 15.64 11.8493 15.48 12.2627 15.16C12.676 14.84 12.996 14.4067 13.2227 13.86C13.4627 13.3 13.5827 12.6867 13.5827 12.02V7.88C13.5827 7.26667 13.4693 6.82 13.2427 6.54C13.016 6.26 12.6227 6.12 12.0627 6.12V5.7C12.476 5.74 12.8893 5.76 13.3027 5.76C14.1427 5.76 14.836 5.66667 15.3827 5.48V13.84ZM26.2238 14.58C26.4638 14.9133 26.6638 15.1533 26.8238 15.3C26.9971 15.4333 27.2104 15.5267 27.4638 15.58V16C26.7704 15.9467 26.2971 15.92 26.0438 15.92C25.5904 15.92 24.8038 15.9467 23.6838 16V15.58C23.8971 15.58 24.0771 15.54 24.2238 15.46C24.3838 15.38 24.4638 15.2733 24.4638 15.14C24.4638 15.0467 24.4371 14.9667 24.3838 14.9L22.1038 11.58L20.6438 13.48C20.2704 13.9733 20.0838 14.3733 20.0838 14.68C20.0838 14.96 20.2104 15.18 20.4638 15.34C20.7304 15.4867 21.0971 15.5733 21.5638 15.6V16C20.8704 15.96 20.1104 15.94 19.2838 15.94C18.6971 15.94 18.1904 15.96 17.7638 16V15.6C18.0304 15.5733 18.2971 15.4533 18.5638 15.24C18.8438 15.0267 19.1638 14.68 19.5238 14.2L21.8238 11.18L19.0438 7.12C18.7771 6.73333 18.5638 6.48 18.4038 6.36C18.2438 6.22667 18.0438 6.14667 17.8038 6.12V5.7C18.4971 5.75333 18.9704 5.78 19.2238 5.78C19.6771 5.78 20.4638 5.75333 21.5838 5.7V6.12C21.3704 6.12 21.1838 6.16 21.0238 6.24C20.8771 6.32 20.8038 6.42667 20.8038 6.56C20.8038 6.65333 20.8304 6.73333 20.8838 6.8L23.0238 9.92L24.4038 7.98C24.8038 7.40667 25.0038 6.98667 25.0038 6.72C25.0038 6.53333 24.9104 6.39333 24.7238 6.3C24.5504 6.19333 24.2638 6.12667 23.8638 6.1V5.7C24.5571 5.74 25.1171 5.76 25.5438 5.76C26.1304 5.76 26.6371 5.74 27.0638 5.7V6.1C26.5171 6.16667 25.9304 6.63333 25.3038 7.5L23.2838 10.3L26.2238 14.58ZM36.6428 13.6C36.4028 14.3333 35.9495 14.9667 35.2828 15.5C34.6295 16.02 33.8361 16.28 32.9028 16.28C31.9561 16.28 31.1361 16.0667 30.4428 15.64C29.7495 15.2 29.2161 14.5933 28.8428 13.82C28.4828 13.0333 28.3028 12.1267 28.3028 11.1C28.3028 9.94 28.4895 8.93333 28.8628 8.08C29.2361 7.22667 29.7628 6.57333 30.4428 6.12C31.1228 5.65333 31.9161 5.42 32.8228 5.42C34.0228 5.42 34.9428 5.78667 35.5828 6.52C36.2361 7.24 36.5628 8.34 36.5628 9.82H30.3028C30.2628 10.1933 30.2428 10.62 30.2428 11.1C30.2428 11.98 30.3828 12.7467 30.6628 13.4C30.9561 14.0533 31.3361 14.56 31.8028 14.92C32.2828 15.2667 32.7828 15.44 33.3028 15.44C33.9428 15.44 34.5095 15.2867 35.0028 14.98C35.4961 14.6733 35.9095 14.16 36.2428 13.44L36.6428 13.6ZM32.7428 5.8C32.1161 5.8 31.5761 6.10667 31.1228 6.72C30.6695 7.33333 30.3895 8.24 30.2828 9.44H34.6428C34.6695 8.4 34.5161 7.53333 34.1828 6.84C33.8628 6.14667 33.3828 5.8 32.7428 5.8Z"
                                        fill="currentColor"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div className="hidden md:block">
                            <ul className="flex items-center space-x-6">
                                <li>
                                    <Link to="/" className=" dark:hover:text-green-700 text-base  text-right text-white focus:outline-none focus:ring-2 focus:ring-gray-800 hover:translate-x-2 transform duration-700">
                                        {" "}
                                        Home{" "}
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/products" className=" dark:hover:text-green-700 text-base  text-right text-white focus:outline-none focus:ring-2 focus:ring-gray-800 ">
                                        {" "}
                                        Products{" "}
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/pricing" className=" dark:hover:text-green-700 text-base  text-right text-white focus:outline-none focus:ring-2 focus:ring-gray-800 ">
                                        {" "}
                                        Pricing{" "}
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/about" className=" dark:hover:text-green-700 text-base  text-right text-white focus:outline-none focus:ring-2 focus:ring-gray-800 ">
                                        {" "}
                                        About{" "}
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/contact" className=" dark:hover:text-green-700 text-base  text-right text-white focus:outline-none focus:ring-2 focus:ring-gray-800 ">
                                        {" "}
                                        Contact Us{" "}
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="hidden md:flex items-center space-x-4">
                            <Link to = "/authentication" className="focus:outline-none focus:ring-2 focus:ring-gray-800 hover:bg-black p-0.5 rounded">
                                <svg className="fill-stroke text-white hover:text-green-700 " width={18} height={20} viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17 19V17C17 15.9391 16.5786 14.9217 15.8284 14.1716C15.0783 13.4214 14.0609 13 13 13H5C3.93913 13 2.92172 13.4214 2.17157 14.1716C1.42143 14.9217 1 15.9391 1 17V19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M9 9C11.2091 9 13 7.20914 13 5C13 2.79086 11.2091 1 9 1C6.79086 1 5 2.79086 5 5C5 7.20914 6.79086 9 9 9Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </Link>
                            <Link to = "/cart" aria-label="Bag" href="javascript:void(0)" className="focus:outline-none focus:ring-2 focus:ring-gray-800 hover:bg-black p-0.5 rounded">
                                <svg className="fill-stroke text-white hover:text-green-700 " width={20} height={22} viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 1L1 5V19C1 19.5304 1.21071 20.0391 1.58579 20.4142C1.96086 20.7893 2.46957 21 3 21H17C17.5304 21 18.0391 20.7893 18.4142 20.4142C18.7893 20.0391 19 19.5304 19 19V5L16 1H4Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M1 5H19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M14 9C14 10.0609 13.5786 11.0783 12.8284 11.8284C12.0783 12.5786 11.0609 13 10 13C8.93913 13 7.92172 12.5786 7.17157 11.8284C6.42143 11.0783 6 10.0609 6 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </Link>
                        </div>
                        <div className="md:hidden">
                            <button aria-label="open menu" onClick={() => setShowMenu(true)} className="focus:outline-none focus:ring-2 focus:ring-gray-800 rounded">
                                <svg className="fill-stroke text-white " width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 6H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M10 12H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M6 18H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="mt-4 pb-4 flex space-x-3 border-b border-white dark:border-white">
                        <div>
                            <svg className="fill-stroke text-white " width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M19.0004 19.0004L14.6504 14.6504" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <input type="text" placeholder="Search for products" className="focus:outline-none bg-transparent text-sm text-white" />
                    </div>
                </div>
                <div id="mobile-menu" className={`${showMenu ? "flex" : "hidden"} dark:bg-black md:hidden absolute inset-0 z-10 flex-col w-full h-screen bg-black pt-6`}>
                    <div className="w-full">
                        <div className="flex items-center justify-between border-b border-white dark:border-white pb-3 mx-4">
                            <div role="img" aria-label="Luxe. Logo">
                                <svg className="fill-stroke text-white " width={37} height={17} viewBox="0 0 37 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M3.76 14.14C3.76 14.6867 3.87333 15.0667 4.1 15.28C4.32667 15.48 4.72 15.58 5.28 15.58V16C4.05333 15.9467 3.24667 15.92 2.86 15.92C2.47333 15.92 1.66667 15.9467 0.44 16V15.58C1 15.58 1.39333 15.48 1.62 15.28C1.84667 15.0667 1.96 14.6867 1.96 14.14V2.72C1.96 2.10667 1.84667 1.66 1.62 1.38C1.39333 1.1 1 0.959999 0.44 0.959999V0.539999C0.853333 0.579999 1.26667 0.599999 1.68 0.599999C2.52 0.599999 3.21333 0.506666 3.76 0.319999V14.14ZM15.3827 13.84C15.3827 14.4533 15.496 14.9 15.7227 15.18C15.9493 15.46 16.3427 15.6 16.9027 15.6V16.02C16.4893 15.98 16.076 15.96 15.6627 15.96C14.8227 15.96 14.1293 16.0533 13.5827 16.24V13.88C13.2627 14.7067 12.8093 15.3133 12.2227 15.7C11.636 16.0867 10.996 16.28 10.3027 16.28C9.39599 16.28 8.70266 16.0267 8.22266 15.52C7.98266 15.2533 7.80932 14.9133 7.70266 14.5C7.60932 14.0867 7.56266 13.5533 7.56266 12.9V7.88C7.56266 7.26667 7.44932 6.82 7.22266 6.54C6.99599 6.26 6.60266 6.12 6.04266 6.12V5.7C6.45599 5.74 6.86932 5.76 7.28266 5.76C8.12266 5.76 8.81599 5.66667 9.36266 5.48V13.34C9.36266 13.8467 9.38932 14.26 9.44266 14.58C9.50932 14.8867 9.64932 15.14 9.86266 15.34C10.0893 15.54 10.4293 15.64 10.8827 15.64C11.3893 15.64 11.8493 15.48 12.2627 15.16C12.676 14.84 12.996 14.4067 13.2227 13.86C13.4627 13.3 13.5827 12.6867 13.5827 12.02V7.88C13.5827 7.26667 13.4693 6.82 13.2427 6.54C13.016 6.26 12.6227 6.12 12.0627 6.12V5.7C12.476 5.74 12.8893 5.76 13.3027 5.76C14.1427 5.76 14.836 5.66667 15.3827 5.48V13.84ZM26.2238 14.58C26.4638 14.9133 26.6638 15.1533 26.8238 15.3C26.9971 15.4333 27.2104 15.5267 27.4638 15.58V16C26.7704 15.9467 26.2971 15.92 26.0438 15.92C25.5904 15.92 24.8038 15.9467 23.6838 16V15.58C23.8971 15.58 24.0771 15.54 24.2238 15.46C24.3838 15.38 24.4638 15.2733 24.4638 15.14C24.4638 15.0467 24.4371 14.9667 24.3838 14.9L22.1038 11.58L20.6438 13.48C20.2704 13.9733 20.0838 14.3733 20.0838 14.68C20.0838 14.96 20.2104 15.18 20.4638 15.34C20.7304 15.4867 21.0971 15.5733 21.5638 15.6V16C20.8704 15.96 20.1104 15.94 19.2838 15.94C18.6971 15.94 18.1904 15.96 17.7638 16V15.6C18.0304 15.5733 18.2971 15.4533 18.5638 15.24C18.8438 15.0267 19.1638 14.68 19.5238 14.2L21.8238 11.18L19.0438 7.12C18.7771 6.73333 18.5638 6.48 18.4038 6.36C18.2438 6.22667 18.0438 6.14667 17.8038 6.12V5.7C18.4971 5.75333 18.9704 5.78 19.2238 5.78C19.6771 5.78 20.4638 5.75333 21.5838 5.7V6.12C21.3704 6.12 21.1838 6.16 21.0238 6.24C20.8771 6.32 20.8038 6.42667 20.8038 6.56C20.8038 6.65333 20.8304 6.73333 20.8838 6.8L23.0238 9.92L24.4038 7.98C24.8038 7.40667 25.0038 6.98667 25.0038 6.72C25.0038 6.53333 24.9104 6.39333 24.7238 6.3C24.5504 6.19333 24.2638 6.12667 23.8638 6.1V5.7C24.5571 5.74 25.1171 5.76 25.5438 5.76C26.1304 5.76 26.6371 5.74 27.0638 5.7V6.1C26.5171 6.16667 25.9304 6.63333 25.3038 7.5L23.2838 10.3L26.2238 14.58ZM36.6428 13.6C36.4028 14.3333 35.9495 14.9667 35.2828 15.5C34.6295 16.02 33.8361 16.28 32.9028 16.28C31.9561 16.28 31.1361 16.0667 30.4428 15.64C29.7495 15.2 29.2161 14.5933 28.8428 13.82C28.4828 13.0333 28.3028 12.1267 28.3028 11.1C28.3028 9.94 28.4895 8.93333 28.8628 8.08C29.2361 7.22667 29.7628 6.57333 30.4428 6.12C31.1228 5.65333 31.9161 5.42 32.8228 5.42C34.0228 5.42 34.9428 5.78667 35.5828 6.52C36.2361 7.24 36.5628 8.34 36.5628 9.82H30.3028C30.2628 10.1933 30.2428 10.62 30.2428 11.1C30.2428 11.98 30.3828 12.7467 30.6628 13.4C30.9561 14.0533 31.3361 14.56 31.8028 14.92C32.2828 15.2667 32.7828 15.44 33.3028 15.44C33.9428 15.44 34.5095 15.2867 35.0028 14.98C35.4961 14.6733 35.9095 14.16 36.2428 13.44L36.6428 13.6ZM32.7428 5.8C32.1161 5.8 31.5761 6.10667 31.1228 6.72C30.6695 7.33333 30.3895 8.24 30.2828 9.44H34.6428C34.6695 8.4 34.5161 7.53333 34.1828 6.84C33.8628 6.14667 33.3828 5.8 32.7428 5.8Z"
                                        fill="currentColor"
                                    />
                                </svg>
                            </div>
                            <button aria-label="close menu" onClick={() => setShowMenu(false)} className="text-white  focus:outline-none focus:ring-2 focus:ring-gray-800">
                                <svg className="fill-stroke" width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15 5L5 15" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M5 5L15 15" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="mt-4 mx-4">
                        <ul className="flex flex-col space-y-4">
                            <li className="border-b border-white dark:border-gray-300 text-white  dark:text-white pb-4 px-1 flex items-center justify-between">
                                <Link to="/" className=" dark:hover:text-green-700 text-base text-right text-white focus:outline-none focus:ring-2 focus:ring-gray-800 hover:translate-x-2 transform duration-700">
                                    {" "}
                                    Home{" "}
                                </Link>
                                <button aria-label="Add" className=" text-white focus:outline-none focus:ring-2 focus:ring-gray-800 rounded hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <svg className="fill-stroke" width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8 3.3335V12.6668" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M3.33203 8H12.6654" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                            </li>
                            <li className="border-b border-gray-200 dark:border-gray-300 dark:text-white pb-4 px-1 flex items-center justify-between">
                                <a href="javascript:void(0)" className=" focus:outline-none focus:ring-2 focus:ring-gray-800 text-base text-white ">
                                    {" "}
                                    Products{" "}
                                </a>
                                <button aria-label="Add" className=" text-white focus:outline-none focus:ring-2 focus:ring-gray-800 rounded hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <svg className="fill-stroke" width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8 3.3335V12.6668" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M3.33203 8H12.6654" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                            </li>

                            <li className="border-b border-gray-200 dark:border-gray-300 dark:text-gray-700 pb-4 px-1 flex items-center justify-between">
                                <Link to="/pricing" className=" dark:hover:text-green-700 text-base text-right text-white focus:outline-none focus:ring-2 focus:ring-gray-800 ">
                                    {" "}
                                    Pricing{" "}
                                </Link>
                                <button aria-label="Add" className=" text-white focus:outline-none focus:ring-2 focus:ring-gray-800 rounded hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <svg className="fill-stroke" width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8 3.3335V12.6668" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M3.33203 8H12.6654" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                            </li>
                            <li className="border-b border-gray-200 dark:border-gray-300 dark:text-gray-700 pb-4 px-1 flex items-center justify-between">
                                <Link to="/about" className=" focus:outline-none focus:ring-2 focus:ring-gray-800 text-base text-white ">
                                    {" "}
                                    About{" "}
                                </Link>
                                <button aria-label="Add" className=" text-white focus:outline-none focus:ring-2 focus:ring-gray-800 rounded hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <svg className="fill-stroke" width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8 3.3335V12.6668" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M3.33203 8H12.6654" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                            </li>
                            <li className="border-b border-gray-200 dark:border-gray-300 dark:text-gray-700 pb-4 px-1 flex items-center justify-between">
                                <Link to="/contact" className=" focus:outline-none focus:ring-2 focus:ring-gray-800 text-base text-white ">
                                    {" "}
                                    Contact Us{" "}
                                </Link>
                                <button aria-label="Add" className=" text-white focus:outline-none focus:ring-2 focus:ring-gray-800 rounded hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <svg className="fill-stroke" width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8 3.3335V12.6668" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M3.33203 8H12.6654" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div className="flex items-end ">
                        <ul className="bg-black dark:bg-black py-10 px-4 flex flex-col space-y-8 w-full">
                            <li>
                                <Link to = "/authentication" className="flex items-center space-x-2 focus:outline-none text-white  focus:ring-2 focus:ring-gray-800 ">
                                    <div>
                                        <svg className="fill-stroke" width={18} height={20} viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M17 19V17C17 15.9391 16.5786 14.9217 15.8284 14.1716C15.0783 13.4214 14.0609 13 13 13H5C3.93913 13 2.92172 13.4214 2.17157 14.1716C1.42143 14.9217 1 15.9391 1 17V19" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M9 9C11.2091 9 13 7.20914 13 5C13 2.79086 11.2091 1 9 1C6.79086 1 5 2.79086 5 5C5 7.20914 6.79086 9 9 9Z" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <p className="text-base">My account</p>
                                </Link>
                            </li>
                            <li>
                                <Link to = "/cart" className="flex items-center space-x-2 focus:outline-none text-white  focus:ring-2 focus:ring-gray-800 " href="javascript:void(0)">
                                    <div>
                                        <svg className="fill-stroke" width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4.33333 1L1 5V19C1 19.5304 1.23413 20.0391 1.65087 20.4142C2.06762 20.7893 2.63285 21 3.22222 21H18.7778C19.3671 21 19.9324 20.7893 20.3491 20.4142C20.7659 20.0391 21 19.5304 21 19V5L17.6667 1H4.33333Z" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M1 5H21" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M15.4436 9C15.4436 10.0609 14.9753 11.0783 14.1418 11.8284C13.3083 12.5786 12.1779 13 10.9991 13C9.82039 13 8.68993 12.5786 7.85643 11.8284C7.02294 11.0783 6.55469 10.0609 6.55469 9" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <p className="text-base">Bag</p>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
