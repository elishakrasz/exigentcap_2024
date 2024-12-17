import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'contact',
  title: 'Contact',
  type: 'document',
  fields: [
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
    }),
    defineField({
        name: 'phone',
        title: 'Phone',
        type: 'array',
        of: [{type: 'block'}],
      }),
    defineField({
      name: 'jerusalem',
      title: 'Jerusalem',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'herzliya',
      title: 'Herzliya',
      type: 'array',
      of: [{type: 'block'}],
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
  ],
  preview: {
    select: {title: 'name', media: 'image'},
  },
})
