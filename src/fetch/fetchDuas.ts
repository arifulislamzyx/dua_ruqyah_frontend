import { Dua } from "@/types/types";
import axios from "axios";

export default async function fetchDuas() {
  const response = await axios.get("http://localhost:8000/duas");
  return (await response.data) as Dua[];
}
