export default {
  name: 'skill',
  type: 'document',
  title: 'Skills',
  fields: [
    {
      name: 'skills',
      title: 'Skills',
      type: 'array',
      of: [
        {
          name: 'skillItem',
          title: 'Skill Item',
          type: 'object',
          fields: [
            {
              name: 'skill',
              title: 'Skill',
              type: 'string',
              description: 'Enter the skill name',
            },
            {
              name: 'icon',
              title: 'Icon',
              type: 'image',
              description: 'Upload or select an icon for this skill',
              options: {
                accept: 'image/*', // You can restrict the file type if needed
              },
            },
          ],
        },
      ],
    },
  ],
};
