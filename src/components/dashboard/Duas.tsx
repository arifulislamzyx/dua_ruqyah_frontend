import DisplayCategories from "./DisplayCategories";
import fetchDuas from "@/fetch/fetchDuas";
import FilterDuas from "./FilterDuas";
import { Dua } from "@/types/types";

const Duas = async () => {
  const duas: Dua[] = await fetchDuas();

  return (
    <div className="col-span-4 space-y-2.5 h-full overflow-auto">
      <h3 className="bg-white px-4 py-3 font-medium rounded-xl flex gap-2 h-55">
        <span className="font-normal md:font-semibold text-custom-green">
          Section:
        </span>
        The servant is dependent on his Lord
      </h3>

      <FilterDuas duas={duas} />

      <div className="hidden">
        <DisplayCategories />
      </div>
    </div>
  );
};

export default Duas;
