export default {
  name: "hero",
  title: "Hero",
  type: "document",

  fields: [
    {
      name: "eyebrow",
      title: "Eyebrow",
      type: "string",
    },
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "role",
      title: "Role",
      type: "string",
    },
    {
      name: "availability",
      title: "Availability",
      type: "string",
    },
    {
      name: "image",
      title: "Profile Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};