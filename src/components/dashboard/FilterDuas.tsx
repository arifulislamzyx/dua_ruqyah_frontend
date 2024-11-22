"use client";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import duacard from "../../../public/duacard.svg";
import DuaComent from "./DuaComent";
import { Dua } from "@/types/types";

const FilterDuas = ({ duas }: { duas: Dua[] }) => {
  const searchParams = useSearchParams();
  const catId = searchParams.get("cat_id");
  const subcatId = searchParams.get("subcat_id");
  const duasId = searchParams.get("duas_id");

  let filteredDuas = duas;

  if (duasId) {
    filteredDuas = duas.filter((dua) => dua.dua_id === parseInt(duasId));
  } else if (subcatId) {
    filteredDuas = duas.filter((dua) => dua.subcat_id === parseInt(subcatId));
  } else if (catId) {
    filteredDuas = duas.filter((dua) => dua.cat_id === parseInt(catId));
  }

  return (
    <div className="grid gap-4">
      {filteredDuas.length > 0 ? (
        filteredDuas.map((dua, index) => (
          <div className="bg-white py-4 px-8 rounded-xl space-y-5" key={index}>
            <Link
              href={`/duas?cat_id=${dua.cat_id}&subcat_id=${dua.subcat_id}&duas_id=${dua.dua_id}`}
              className="space-y-5"
            >
              <div className="flex items-center gap-4 font-semibold text-custom-green">
                <Image
                  src={duacard}
                  alt={dua.refference_en || (dua.refference_bn as string)}
                  width={35}
                  height={35}
                />
                <h4>{dua.dua_name_en}</h4>
              </div>
              <p className="font-normal">{dua.top_en}</p>
              <p className="text-right">{dua?.dua_arabic}</p>

              {dua?.transliteration_en && (
                <div>
                  <span className="font-semibold text-slate-700">
                    Transliteration:{" "}
                  </span>
                  {dua.transliteration_en}
                </div>
              )}

              {dua.translation_en && (
                <div>
                  <span className="font-semibold text-slate-700">
                    Translation:
                  </span>
                  {dua.translation_en}
                </div>
              )}

              <div>
                <p className="font-semibold text-custom-green">Reference: </p>
                <p>{dua.refference_en}</p>
              </div>
            </Link>

            <DuaComent />
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500">No Duas Found.</p>
      )}
    </div>
  );
};

export default FilterDuas;
