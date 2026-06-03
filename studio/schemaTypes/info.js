export default {
  name: 'info',
  title: 'Info',
  type: 'document',
  preview: {
    prepare() {
      return { title: 'Info Page' }
    }
  },
  fields: [
    {
      name: 'portrait',
      title: 'Portrait Image',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'about',
      title: 'About Text',
      type: 'text',
      description: 'The main body of text on the info page',
    },
    {
      name: 'enquiriesText',
      title: 'Enquiries Text',
      type: 'string',
      initialValue: "For all enquiries please fill out the contact form below and we'll get back to you.",
    },
  ],
}