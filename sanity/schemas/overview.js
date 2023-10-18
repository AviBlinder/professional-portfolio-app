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
    {
      name: 'description',
      type: 'array',
      of: [{ type: 'text' }],
      title: 'Description',
    },
  ],
};
