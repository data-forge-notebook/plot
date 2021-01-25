module.exports = {
  someSidebar: [
      {
          type: "doc",
          id: "readme",
      },
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
