export default {
  name: "products",
  title: "Products",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      title: "Slug",
      name: "slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 200,
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
      },
    },
    {
      name: "mainImage",
      title: "Main Product Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      title: "Category",
      name: "category",
      type: "reference",
      to: [{ type: "category" }],
    },
    {
      title: "Text",
      name: "body",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "weight",
      title: "Weight in KG",
      type: "number",
    },
    {
      name: "price",
      title: "Product Price in Rands",
      type: "number",
    },
    {
      name: "quantity",
      title: "Quantity of Products",
      type: "number",
    },
  ],
};
