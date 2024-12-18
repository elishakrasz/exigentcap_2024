import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
interface Image {
  image: string;
}

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  // projectId: "t79x65c2",
  // dataset: "production",
  apiVersion: "2024-12-17", // Make sure this matches your schema version
  useCdn: false,
});
const builder = imageUrlBuilder(client);
export function urlForImage(source: Image) {
  return builder.image(source);
}






