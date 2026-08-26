export default {
  name: "about",
  title: "About",
  type: "document",

  fields: [
    {
      name: "label",
      title: "Section Label",
      type: "string",
    },
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "paragraphOne",
      title: "First Paragraph",
      type: "text",
    },
    {
      name: "paragraphTwo",
      title: "Second Paragraph",
      type: "text",
    },
    {
      name: "topics",
      title: "Topics",
      type: "array",
      of: [{ type: "string" }],
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