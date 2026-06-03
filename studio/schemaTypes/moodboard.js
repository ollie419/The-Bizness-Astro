export default {
  name: 'moodboard',
  title: 'IMG',
  type: 'document',
  preview: {
    prepare() {
      return { title: 'IMG Page' }
    }
  },
  fields: [
    {
      name: 'curator',
      title: 'Curated by',
      type: 'string',
      description: 'Name of the curator e.g. "Ollie"',
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
        }
      ],
    },
  ],
}