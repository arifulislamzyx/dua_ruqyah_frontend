import Duas from "@/components/dashboard/Duas";
import Settings from "@/components/layout/Settings";
import Categories from "@/section/Dashboard/Categories";

export default function Home() {
  return (
    <div className="grid grid-cols-7 gap-8 h-full">
      <Categories />
      <Duas />
      <Settings />
    </div>
  );
}
