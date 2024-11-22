"use client";

import { Category, Dua } from "@/types/types";
import { SubCategory } from "@/types/types";
import { UserX } from "lucide-react";
import React, { useEffect, useMemo, useState } from "react";
import fetchDuas from "@/fetch/fetchDuas";

type CategoryProps = {
  category: Category;
  filterSubcat: SubCategory[];
};

const CategoryCard: React.FC<CategoryProps> = ({ category, filterSubcat }) => {
  const [isActiveCat, setIsActiveCat] = useState<boolean>(false);
  const [isActiveSubCat, setIsActiveSubCat] = useState<boolean>(false);
  const [selctedCategory, setSelectedCategory] = useState<number | null>(null);
  const [activeSubCatId, setSubCategoryId] = useState<number | null>(null);
  const [duasData, setDuasData] = useState<Dua[]>([]);
  const [filteredDuas, setFilteredDuas] = useState<Dua[]>([]);

  useEffect(() => {
    const getDuas = async () => {
      try {
        const data = await fetchDuas();
        setDuasData(data);
        setFilteredDuas(
          activeSubCatId
            ? data.filter((dua) => dua.subcat_id === activeSubCatId)
            : data
        );
      } catch (error) {
        console.error("Error fetching duas:", error);
      }
    };
    getDuas();
  }, [activeSubCatId]);
  const mainSubCat = useMemo(() => {
    return filterSubcat.flatMap((subcat) => {
      return (
        subcat?.subCategories?.filter(
          (cat: SubCategory) => cat.cat_id === selctedCategory
        ) || []
      );
    });
  }, [filterSubcat, selctedCategory]);

  const duasUnderSubCategory = useMemo(() => {
    return duasData.filter((duas) => duas.subcat_id === activeSubCatId);
  }, [duasData, activeSubCatId]);

  console.log("Duas=====>", duasUnderSubCategory);
  console.log("Duas", duasData);
  console.log("selctedCategory", selctedCategory);
  console.log("filteredSubcat=>", mainSubCat);

  const handleCategoryClick = (cateoryId: number) => {
    setIsActiveCat((prev) => !prev);
    setSelectedCategory(cateoryId);

    const url = new URL(window.location.href);
    url.searchParams.set("cat_id", cateoryId.toString());
    window.history.pushState({}, "", url);
  };

  const handleSubCategoryClick = (subCategoryId: number) => {
    console.log("sub category=>", subCategoryId);
    setIsActiveSubCat((prev) => !prev);
    setSubCategoryId(subCategoryId);
    const url = new URL(window.location.href);
    url.searchParams.set("subcat_id", subCategoryId.toString());
    window.history.pushState({}, "", url);
  };

  const handleDuaClick = (duasId: number) => {
    console.log("Duas CLick=> ", duasId);
    const url = new URL(window.location.href);
    url.searchParams.set("duas_id", duasId.toString());
    window.history.pushState({}, "", url);
  };

  return (
    <div>
      {/* Category Card */}
      <div
        onClick={() => handleCategoryClick(category.cat_id)}
        className={`flex items-center gap-2 2xl:gap-4 p-2.5 bg-white hover:bg-slate-100 transition-all border-b-2 rounded-[10px] ${
          isActiveCat ? "bg-slate-200" : ""
        }`}
      >
        <UserX
          size={24}
          className="bg-slate-100 h-10 w-10 xxl:w-14 xxl:h-14 p-2 rounded-lg"
        />
        <div>
          <p>{category.cat_name_en}</p>
          <p className="text-sm">
            <span>Subcategory: </span>
            {category.no_of_subcat}
          </p>
        </div>
        <div className="ml-auto text-center text-sm">
          <p>{category.no_of_dua}</p>
          <p>Duas</p>
        </div>
      </div>

      {/* Subcategories List */}
      {isActiveCat && (
        <div className="pl-5 bg-gray-50">
          {mainSubCat?.length > 0 ? (
            mainSubCat.map((subCategory: SubCategory, index) => (
              <div
                key={index}
                className={`p-3 border-dotted border-gray-200 hover:bg-slate-100 transition-all ${
                  activeSubCatId === subCategory.subcat_id ? "bg-slate-200" : ""
                }`}
                onClick={() => handleSubCategoryClick(subCategory.subcat_id)}
              >
                <li>{subCategory.subcat_name_en || "Unnamed Subcategory"}</li>
                {isActiveSubCat && (
                  <div className="pl-8 bg-white">
                    {filteredDuas.length > 0 ? (
                      duasUnderSubCategory?.map((dua, index) => (
                        <div
                          key={index}
                          className="p-3 border-b border-gray-200 hover:bg-slate-100 transition-all border"
                          onClick={() => handleDuaClick(dua.dua_id)}
                        >
                          <li>{dua.dua_name_en || "Unnamed Dua"}</li>
                        </div>
                      ))
                    ) : (
                      <p className="p-3 text-gray-500">
                        No duas available for this subcategory.
                      </p>
                    )}
                  </div>
                )}
              </div>
            ))
          ) : (
            <p className="p-3 text-gray-500">No subcategories available.</p>
          )}
        </div>
      )}

      {/* Filtered Duas List */}
    </div>
  );
};

export default CategoryCard;
