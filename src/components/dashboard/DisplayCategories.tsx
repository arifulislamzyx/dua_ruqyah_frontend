import { Category } from "@/types/types";
import React from "react";
import CategoryCard from "./CategoryCard";
import axios from "axios";
import { base_url } from "@/utils/baseurl";

const DisplayCategories = async () => {
  const res = await axios(`${base_url}/categories`);
  const categories = await res.data;

  const fetchSubcat = await axios(`${base_url}/subcategories`);
  const subCat = await fetchSubcat.data;

  const filterSubcat = categories.map((category: Category) => {
    const subCategory = subCat.filter(
      (subCat: Category) => subCat.cat_id === category.cat_id
    );

    return {
      subCategories: subCategory,
    };
  });

  return (
    <div>
      {categories.map((category: Category) => (
        <div key={category.cat_id}>
          <CategoryCard category={category} filterSubcat={filterSubcat} />
        </div>
      ))}
    </div>
  );
};

export default DisplayCategories;
