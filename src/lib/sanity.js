import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID || 'rscqwpq1',
  dataset: import.meta.env.PUBLIC_SANITY_DATASET || 'production',
  useCdn: false,
  apiVersion: '2024-03-01',
})