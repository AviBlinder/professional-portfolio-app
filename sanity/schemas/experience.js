export default {
  name: 'experience',
  type: 'document',
  title: 'Experience',
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
        { name: 'Place', type: 'string', title: 'place' },
        { name: 'Title', type: 'string', title: 'title' },
        { name: 'From', type: 'string', title: 'from' },
        { name: 'To', type: 'string', title: 'to' },
        {
          name: 'activities',
          type: 'array',
          of: [{ type: 'string' }],
          title: 'activity',
        },
        { name: 'MainAchievement', type: 'string', title: 'mainAchievement' },
      ],
    },
  ],
};
