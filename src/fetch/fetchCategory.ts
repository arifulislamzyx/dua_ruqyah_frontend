import axios from "axios";

export const fetchCategories = async () => {
  const res = await axios("http://localhost:8000/categories");

  console.log("res found", res);

  return res.data;
};
