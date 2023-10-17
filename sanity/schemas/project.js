export default {
  name: 'project',
  type: 'document',
  title: 'Project',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    { name: 'description', type: 'text', title: 'Description' },
    { name: 'tags', type: 'array', of: [{ type: 'string' }], title: 'Tags' },
    { name: 'image', type: 'image', title: 'Image' },
    { title: 'Repo', name: 'repoURL', type: 'url' },
  ],
};
