import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'person',
  title: 'Person',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'Please use "First Name Last Name" format',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 100,
      },
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Business Title',
    }),
    defineField({
      name: 'subtitle',
      title: 'Sub Title',
      type: 'string',
      description: 'Business Position',
    }),

    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    {
      name: 'gallery',
      type: 'array',
      title: 'Gallery',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true, // Enable image cropping
          },
          fields: [
            {
              name: 'caption',
              type: 'string',
              title: 'Caption',
              options: {
                isHighlighted: true, // Highlight in the studio
              },
            },
          ],
        },
      ],
    },
  ],
  preview: {
    select: {title: 'name', media: 'image'},
  },
})
