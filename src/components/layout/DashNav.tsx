import Avatar from "@/components/layout/Avatar";
import { Input } from "@/components/ui/input";
import React from "react";

const DashNav = () => {
  return (
    <header className="hidden md:flex justify-between items-center">
      <h3 className="font-semibold">Dua Page</h3>

      <div className="flex items-center gap-20">
        <Input placeholder="Search Dua Name" className="w-96 h-12" />
        <Avatar />
      </div>
    </header>
  );
};

export default DashNav;
