export default {
  name: 'overview',
  type: 'document',
  title: 'Overview',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    { name: 'description', type: 'text', title: 'Description' },
    {
      title: 'Skills',
      name: 'skills',
      type: 'object',
      fields: [
        { name: 'skill', type: 'string', title: 'skill' },
        { name: 'icon', type: 'image', title: 'Icon' },
      ],
    },
  ],
};
