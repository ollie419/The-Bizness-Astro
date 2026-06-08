export default {
  name: 'moodboard',
  title: 'IMG',
  type: 'document',
  orderings: [
    {
      title: 'Date, Newest First',
      name: 'dateDesc',
      by: [{ field: 'date', direction: 'desc' }]
    }
  ],
  preview: {
    select: { title: 'title', date: 'date' },
    prepare({ title, date }) {
      return { title: title || date || 'IMG Entry' }
    }
  },
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'e.g. June 2025',
    },
    {
      name: 'date',
      title: 'Date',
      type: 'date',
      options: { dateFormat: 'MMMM YYYY' },
      description: 'Month and year for archive ordering',
    },
    {
      name: 'curator',
      title: 'Curated by',
      type: 'string',
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    },
  ],
}