import React from "react";
import { IASidebar, sidebarIcon } from "@/data/sidebarIcons";
import donate from "../../../public/donate.webp";
import dualogo from "../../../public/dua-logo.svg";
import Image from "next/image";

const Sidebar = () => {
  return (
    <aside className="hidden md:flex flex-col items-center justify-between w-[100px] bg-white px-3 py-8 rounded-3xl">
      <Image src={dualogo} alt="dua_logo" width={73} height={73} />
      <div className="grid grid-cols-1 gap-4 xxl:gap-6">
        {sidebarIcon.map((icon: IASidebar) => (
          <div key={icon.id}>
            <p className="bg-background cursor-pointer rounded-full p-2">
              {icon.icon}
            </p>
          </div>
        ))}
      </div>

      <Image
        src={donate}
        alt="donate"
        width={56}
        height={56}
        className="bg-custom-green p-2 rounded-xl text-white"
      />
    </aside>
  );
};

export default Sidebar;
