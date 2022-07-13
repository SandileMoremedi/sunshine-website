import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  dataset: process.env.DATASET,
  useCdn: true,
  apiVersion: process.env.NEXT_PUBLIC_API_VERSION,
  token: process.env.NEXT_PUBLIC_TOKEN,
});
