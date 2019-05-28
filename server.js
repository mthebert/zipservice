const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

var routes = require('./api/routes');
routes(app);

app.listen(port, function(){
  console.log(`Dotson! We got Dotson here! on port: ${port}`);
})