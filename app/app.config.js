import { createClient } from 'next-sanity';

module.exports = {
  client: createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    apiVersion: '2021-10-14',
    useCdn: false,
  }),
};
