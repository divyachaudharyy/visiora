"use client";

import { navLinks } from "@/constants";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
// import Image from 'next/image'
// import Link from 'next/link'
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";

// const Sidebar = () => {
//   const pathname = usePathname();

//   return (
//     <aside className="sidebar">
//       <div className="flex size-full flex-col gap-4">

//         <nav className="sidebar-nav">
//           <SignedIn>
//             <ul className="sidebar-nav_elements">
//               {navLinks.slice(0, 6).map((link) => {
//                 const isActive = link.route === pathname

//                 return (
//                   <li key={link.route} className={`sidebar-nav_element group ${
//                     isActive ? 'bg-purple-gradient text-white' : 'text-gray-700'
//                   }`}>
//                     <Link className="sidebar-link" href={link.route}>
//                       <Image
//                         src={link.icon}
//                         alt="logo"
//                         width={24}
//                         height={24}
//                         className={`${isActive && 'brightness-200'}`}
//                       />
//                       {link.label}
//                     </Link>
//                   </li>
//                 )
//               })}
//               </ul>

//             <ul className="sidebar-nav_elements">
//               {navLinks.slice(6).map((link) => {
//                 const isActive = link.route === pathname

//                 return (
//                   <li key={link.route} className={`sidebar-nav_element group ${
//                     isActive ? 'bg-purple-gradient text-white' : 'text-gray-700'
//                   }`}>
//                     <Link className="sidebar-link" href={link.route}>
//                       <Image
//                         src={link.icon}
//                         alt="logo"
//                         width={24}
//                         height={24}
//                         className={`${isActive && 'brightness-200'}`}
//                       />
//                       {link.label}
//                     </Link>
//                   </li>
//                 )
//               })}

//               <li className="flex-center cursor-pointer gap-2 p-4">
//                 <UserButton afterSignOutUrl='/' showName />
//               </li>
//             </ul>
//           </SignedIn>

//           <SignedOut>
//             <Button asChild className="button bg-purple-gradient bg-cover">
//               <Link href="/sign-in">Login</Link>
//             </Button>
//           </SignedOut>
//         </nav>
//       </div>
//     </aside>
//   )
// }

// export default Sidebar

import Image from "next/image";
import Link from "next/link";
import React from "react";

const Sidebar = () => {
  const topNavLinks = navLinks.filter(
    (link) =>
      link.label === "Buy Credits" ||
      link.label === "Profile" ||
      link.label === "Email"
  );
  const pathname = usePathname();
  return (
    <div>
      <nav className="fixed mb-5 top-0 z-50 w-full bg-black text-white  ">
        <div className="px-9 py-2 lg:px-7 lg:pl-3">
          <div className="flex items-center justify-between">
            <Link href="/" className="sidebar-logo ">
              <Image
                src="/assets/images/g.png"
                alt="logo"
                width={180}
                height={28}
              />
            </Link>
            <div className="flex gap-6">
              {topNavLinks.map((link) => {
                const isActive = link.route === pathname;
                return (
                  <Link
                    key={link.route}
                    href={link.route}
                    className={`flex items-center gap-2 px-3 py-2 rounded-md transition ${
                      isActive
                        ? "bg-purple-gradient text-white"
                        : "text-gray-700"
                    }`}
                  >
                    <Image
                      src={link.icon}
                      alt={link.label}
                      width={20}
                      height={20}
                      className={`${isActive && "brightness-200"}`}
                    />
                    <span>{link.label}</span>
                  </Link>
                );
              })}
            </div>

            {/* Right side User/Login */}
            <div>
              <SignedIn>
                <UserButton afterSignOutUrl="/" showName />
              </SignedIn>
              <SignedOut>
                <Button asChild className="button bg-purple-gradient bg-cover">
                  <Link href="/sign-in">Login</Link>
                </Button>
              </SignedOut>
            </div>
          </div>
        </div>
      </nav>

      <aside
        id="logo-sidebar"
        className="fixed px-4 top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-black text-white border-r border-gray-200 sm:translate-x-0 "
        aria-label="Sidebar"
      >
        <div className="flex size-full flex-col gap-4">
          <nav className="sidebar-nav">
            <SignedIn>
              <ul className="sidebar-nav_elements">
                {navLinks.slice(0, 6).map((link) => {
                  const isActive = link.route === pathname;
                  return (
                    <li
                      key={link.route}
                      className={`sidebar-nav_element group ${
                        isActive
                          ? "bg-purple-gradient text-white"
                          : "text-white"
                      }`}
                    >
                      <Link className="sidebar-link" href={link.route}>
                        <Image
                          src={link.icon}
                          alt="logo"
                          width={24}
                          height={24}
                          className={`${isActive && "brightness-200"}`}
                        />
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>

              <ul className="sidebar-nav_elements">
                {navLinks
                  .slice(6)
                  .filter(
                    (link) =>
                      link.label !== "Buy Credits" &&
                      link.label !== "Profile" &&
                      link.label !== "Email"
                  )
                  .map((link) => {
                    const isActive = link.route === pathname;
                    return (
                      <li
                        key={link.route}
                        className={`sidebar-nav_element group ${
                          isActive
                            ? "bg-purple-gradient text-white"
                            : "text-gray-700"
                        }`}
                      >
                        <Link className="sidebar-link" href={link.route}>
                          <Image
                            src={link.icon}
                            alt="logo"
                            width={24}
                            height={24}
                            className={`${isActive && "brightness-200"}`}
                          />
                          {link.label}
                        </Link>
                      </li>
                    );
                  })}

                {/* <li className="flex-center cursor-pointer gap-2 p-4">
                <UserButton afterSignOutUrl="/" showName />
              </li> */}
              </ul>
            </SignedIn>

            <SignedOut>
              <Button asChild className="button bg-purple-gradient bg-cover">
                <Link href="/sign-in">Login</Link>
              </Button>
            </SignedOut>
          </nav>
        </div>
      </aside>

      <div className="p-4 sm:ml-64"></div>
    </div>
  );
};

export default Sidebar;
