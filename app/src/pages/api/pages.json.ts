import { NotionService } from "@services/notion"
import { blackprint } from "@controllers/utils/blackprint";



export async function get({ params, request }) {

  const { getNotionPages } = NotionService().methods

  const data = await getNotionPages({
    pageIds: [{
      id: import.meta.env.META_PAGE_ID ?? process.env.META_PAGE_ID,
      name: "meta"
    }]
  })

  return {
    body: JSON.stringify({
      name: 'Astro',
      url: 'https://astro.build/',
      notionTest: data
    }),
  };
}