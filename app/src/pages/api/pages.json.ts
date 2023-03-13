import { notionCMS } from "@configs/index";
import { db as BlackprintDatabase } from "@controllers/utils/blackprint";

export async function get() {

  const { defineDatabase } = BlackprintDatabase()

  const { store } = await defineDatabase(notionCMS)

  return {
    body: JSON.stringify({
      store
    }),
  };
}