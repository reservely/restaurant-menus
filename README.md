# Restaurant Menus module

What are your service's inputs and outputs (API Spec)?

`GET /:restaurant_id/restaurant_menus/`

**Input**: `restaurant_id` identifies which restaurant to get menus

**Output**: JSON of current restaurant menu(s) data

```
{
  “restaurant_id”: <number>,
  "website": <string>,
  “menus”: [{
             “menu_name”: <string>,
             “menu_description”: <string>,
             “sections”: [{
                           “section_name”: <string>,
                           “section_description”: <string>,
                           “items”: [{
                                      “item_name”: <string>,
                                      “item_description”: <string>,
                                      “item_price”: <number>,
                                      “item_option”: <string>
                                     }, … ] 
                          }, … ]
            }, … ]
}
```

### Bare Minimum Requirements:

- Upon module initialization get current restaurant menu(s) information from the database
  - *If no menu information exists render link to restaurant website instead of the following steps*
- Generate/render button(s) for each menu
- Render first menu information
- Render/switch menu information if user clicks a different menu than one currently rendered

### Stretch Goals:

- Expand/Collapse feature
  - Toggle button to show all of a menu (Expand) or only a small preview (Collapse)
  - Transparency gradient and toggle button overlay when collapsed
  - Floating Expand/Collapse button
    - If you click “Expand” it will switch to “Collapse” and float on bottom of page before being anchored to bottom if you scroll to the end of menu

### Data Schema:
MongoDB is being used. A database with the capability of having a dynamic/versatile schema was preferred because there is menu structure variability among the different restaurants.

Mongoose Schema
```
let menuSchema = new mongoose.Schema({
  restaurant_id: Number,
  website: String,
  menus: [{
    menu_name: String,
    menu_description: String,
    sections: [{
      section_name: String,
      section_description: String,
      items: [{
        item_name: String,
        item_description: String,
        item_price: Number,
        item_option: String
      }]                      
    }]
  }]
});
```

