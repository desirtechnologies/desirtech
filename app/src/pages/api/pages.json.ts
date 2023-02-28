import { NotionService } from "@services/notion"
import { configs } from "@controllers/utils/blackprint";
import { notionCMS } from "@configs/index";

export async function get({ params, request }) {


  const { initStore } = await notionCMS()

  return {
    body: JSON.stringify({
      blackprintTest: {
        initStore
      }
    }),
  };
}