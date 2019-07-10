const express = require('express');
const Restaurant = require('../db/Restaurant.js');

const app = express();
const port = 3000;

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get('/:restaurant_id/menus', (req, res) => (
  Restaurant.find(req.params, (err, data) => {
    if (err) {
      console.log(err);
    }
    res.send(data);
  })
));

app.listen(port, () => { console.log(`Listening on port ${port}`); });
