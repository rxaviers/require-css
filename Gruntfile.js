module.exports = function(grunt) {

  "use strict";

  grunt.initConfig({
    pkg: require("./package.json"),
    requirejs: {
      options: {
        paths: {
          almond: "../bower_components/almond/almond",
          jquery: "../bower_components/jquery/dist/jquery",
          "require-css": "../bower_components/require-css"
        },
        map: {
          "*": {
            css: "require-css/css"
          }
        },
        dir: "dist",
        appDir: "src",
        baseUrl: ".",
        optimize: "none",
        optimizeCss: "none",
        separateCSS: true,
        pragmasOnSave: {
          excludeRequireCss: true
        }
      },
      dist: {
        options: {
          modules: [{
            name: "app",
            include: ["almond", "app"]
          }]
        }
      }
    },
    clean: {
      dist: [
        "dist"
      ]
    }
  });

  require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

  grunt.registerTask("default", [
    "clean",
    "requirejs"
  ]);

};
