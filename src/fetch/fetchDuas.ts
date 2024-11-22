import axios from "axios";
import { Dua } from "@/types/types";
import { base_url } from "@/utils/baseurl";

export default async function fetchDuas(): Promise<Dua[]> {
  try {
    const response = await axios.get(`${base_url}/duas`);
    return response.data as Dua[];
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error("Axios error while fetching duas:", error.message);
    } else {
      console.error("Unexpected error while fetching duas:", error);
    }
    throw new Error("Failed to fetch duas");
  }
}
