export default {
  name: 'story',
  title: 'Story',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'discipline',
      title: 'Discipline',
      type: 'string',
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
    },
    {
      name: 'title',
      title: 'Article Title',
      type: 'string',
    },
    {
      name: 'blurb',
      title: 'Card Blurb',
      type: 'text',
      description: 'Short text shown on homepage card hover',
    },
    {
      name: 'portrait',
      title: 'Portrait Image',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'body',
      title: 'Body Text',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'imageCredits',
      title: 'Image Credits',
      type: 'string',
    },
    {
      name: 'textCredits',
      title: 'Text Credits',
      type: 'string',
    },
    {
      name: 'tag',
      title: 'Tag',
      type: 'string',
      options: {
        list: [
          { title: 'Art', value: 'art' },
          { title: 'Architecture', value: 'architecture' },
          { title: 'Design', value: 'design' },
          { title: 'Fashion', value: 'fashion' },
          { title: 'Film', value: 'film' },
          { title: 'Food', value: 'food' },
          { title: 'Home & Interior', value: 'home' },
          { title: 'Music/Sound', value: 'music' },
          { title: 'Photography', value: 'photography' },
          { title: 'Sport', value: 'sport' },
        ],
      },
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'name' },
      description: 'URL-friendly version of the name — click Generate',
    },
  ],
}