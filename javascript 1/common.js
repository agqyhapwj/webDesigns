requirejs.config({
    "baseUrl": "javascript/lib",
    "paths": {
      "app": "../app"
    },
    "shim": {
      backbone: {
          deps: ['jquery', 'underscore'],
          exports: 'Backbone'
      },
      underscore: {
          exports: '_'
      }
    }
});

// Load the main app module to start the app
requirejs(["app/main"]);