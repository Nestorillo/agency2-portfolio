import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "tqqbyyd9",
  dataset: "production",
  useCdn: false,
  apiVersion: "2026-08-26",
});

const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}