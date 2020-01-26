var guess_parser = require("guess-parser");
var routes = [];
try {
    // routes = guess_parser.parseRoutes('./apps/api/tsconfig.app.json').map(r => r.path);
    // routes = guess_parser.parseAngularRoutes('webapp').map(r => r.path);
    routes = guess_parser.parseAngularRoutes('./apps/webapp/src/app').map(r => r.path);
    console.log(routes);
}
catch (e) {
    console.log('error', e);
}
