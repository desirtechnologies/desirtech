import { NotionService } from "@services/notion"
import { blackprint } from "@controllers/utils/blackprint";
import { notionCMS } from "@configs/index";

export async function get({ params, request }) {

  const { defineDatabase } = blackprint()


  return {
    body: JSON.stringify({
      blackprintTest: {
        
      }
    }),
  };
}