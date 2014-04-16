require.config({
  paths: {
    jquery: "../bower_components/jquery/dist/jquery",
    "require-css": "../bower_components/require-css"
  },
  map: {
    "*": {
      css: "require-css/css"
    }
  }
});

require([
  "component/a",
  "component/b"
]);
