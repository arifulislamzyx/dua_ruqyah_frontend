import { Backpack, Languages, LayoutGrid } from "lucide-react";
import React from "react";

const Settings = () => {
  return (
    <div className="col-span-1 space-y-4 rounded-xl bg-white px-5 py-8">
      <h3 className="font-bold">Settings</h3>
      <div className="space-y-4 font-normal">
        <div className="flex items-center bg-slate-100 p-2 rounded-xl gap-2">
          <Languages />
          <p>Language Setting</p>
        </div>
        <div className="flex items-center bg-slate-100 p-2 rounded-xl gap-2">
          <Backpack />
          <p>General Setting</p>
        </div>
        <div className="flex items-center bg-slate-100 p-2 rounded-xl gap-2">
          <LayoutGrid />
          <p>Font Setting</p>
        </div>
        <div className="flex items-center bg-slate-100 p-2 rounded-xl gap-2">
          <LayoutGrid />
          <p>Appearance Setting</p>
        </div>
      </div>
    </div>
  );
};

export default Settings;
