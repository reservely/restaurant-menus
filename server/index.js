const express = require('express');
const Restaurant = require('../db/Restaurant.js');

const app = express();
const port = 3003;


app.use(express.static('public'));

app.get('/:restaurant_id/menus', (req, res) => (
  Restaurant.find(req.params, (err, data) => {
    if (err) {
      console.log(err);
    }
    res.send(data);
  })
));

app.listen(port, () => { console.log(`Listening on port ${port}`); });
