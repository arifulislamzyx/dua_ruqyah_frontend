import React from "react";
import { Input } from "@/components/ui/input";
import DisplayCategories from "@/components/dashboard/DisplayCategories";

const Categories = () => {
  return (
    <div className="col-span-2 felx flex-col bg-white rounded-[10px] h-full overflow-auto">
      <div className="bg-[#1FA45B] sticky top-0 text-white font-semibold py-[18px] flex items-center justify-center">
        Categories
      </div>

      <div className="p-4 space-y-4">
        <Input type="text" placeholder="Search Here" className="px-2" />
        <DisplayCategories />
      </div>
    </div>
  );
};

export default Categories;
