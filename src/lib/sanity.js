import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: 'rscqwpq1',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2024-01-01',
})