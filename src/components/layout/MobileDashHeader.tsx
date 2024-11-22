// "use client";
// import { Menu, X } from "lucide-react";
// import React, { useEffect, useState } from "react";
// import { Button } from "@/components/ui/button";
// import Categories from "@/section/Dashboard/Categories";

// const MobileDashHeader = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   return (
//     <div className="md:hidden">
//       <div className="flex justify-between items-center">
//         <h3> Mobile Nav</h3>
//         <Button onClick={toggleSidebar}>
//           <Menu size={24} />
//         </Button>
//       </div>

//       <div
//         className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-40 transform transition-transform duration-300 ease-in-out ${isSidebarOpen ? "traslate-x-0" : "-translate-x-full"}`}
//       >
//         <div className="flex justify-between items-center px-4 border-b">
//           <h4>Categories</h4>
//           <Button>
//             <X size={24} />
//           </Button>
//         </div>

//         <div className="p-4 overflow-y-auto">
//           <Categories />
//         </div>
//       </div>

//       {isSidebarOpen && (
//         <div
//           onClick={toggleSidebar}
//           className="fixed inset-0 bg-black opacity-50 z-30"
//         ></div>
//       )}
//     </div>
//   );
// };

// export default MobileDashHeader;
