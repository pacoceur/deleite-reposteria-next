import { fetchGraphQL } from "../api";

export async function getGallery(id) {
  const gallery = await fetchGraphQL(
    `query {
        gallery(id: "${id}") {
            id
            picturesCollection {
                items {
                    url
                }
            }
        }
    }`
  );

  return {
    gallery,
  };
}
