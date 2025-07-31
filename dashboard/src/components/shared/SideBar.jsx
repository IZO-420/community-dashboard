import React from "react";
import Link from "next/link";
import Image from "next/image";

import { sideBarItems } from "@/constants/constants";
export default function TopBar() {
  return (
    <div className="bg-white p-4 shadow-md fixed top-0 left-0 h-screen w-64">
      <nav>
        <ul>
          {
            sideBarItems.map((item) => (
              <li className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-100" key={item.id}>
                <Link href={item.path}>
                  <Image src={`/icons/${item.icon}.svg`} alt={item.name} width={20} height={20} />
                  {item.name}
                </Link>
              </li>
            ))
          }
        </ul>
      </nav>
    </div>
  );
}