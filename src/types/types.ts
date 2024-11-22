export interface Dua {
  filter(arg0: (dua: Dua) => boolean): unknown;
  id: number;
  cat_id: number;
  subcat_id: number;
  dua_id: number;
  dua_name_bn: string;
  dua_name_en: string;
  top_bn?: string | null;
  top_en?: string | null;
  dua_arabic: string;
  dua_indopak: string;
  clean_arabic: string;
  transliteration_bn?: string | null;
  transliteration_en?: string | null;
  translation_bn?: string | null;
  translation_en?: string | null;
  bottom_bn?: string | null;
  bottom_en?: string | null;
  refference_bn?: string | null;
  refference_en?: string | null;
  audio?: string | null;
  subCategory?: SubCategory;
}

export interface SubCategory {
  id: number;
  cat_id: number;
  subcat_id: number;
  subcat_name_bn: string;
  subcat_name_en: string;
  no_of_dua: number;
  category?: Category;
  duas?: Dua[];
  subCategories: SubCategory[];
  map<U>(callback: (cat: SubCategory) => U): U[];
}

export interface Category {
  id: number;
  cat_id: number;
  cat_name_bn: string;
  cat_name_en: string;
  no_of_subcat: number;
  no_of_dua: number;
  cat_icon: string;
  subCategories?: SubCategory[];
  // Optional relation to SubCategory
}
