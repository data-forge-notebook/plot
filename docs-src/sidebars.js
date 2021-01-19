//TODO: Can have nested sections in the sidebar!
module.exports = {
  someSidebar: [
      {
          type: "doc",
          id: "index",
      },
      {
          type: "category",
          label: "API",
          items: require("./docs/ids.json"),
          collapsed: false,
      },
  ]
};
