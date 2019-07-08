const faker = require('faker');
const db = require('./index.js');
const Restaurant = require('./Restaurant.js');

const restaurantsArray = [];

for (let i = 1; i <= 100; i += 1) {
  const menusArray = [];
  const menuCount = faker.random.number({ min: 0, max: 6 });
  for (let j = 0; j < menuCount; j += 1) {
    const sectionsArray = [];
    const sectionCount = faker.random.number({ min: 1, max: 6 });
    for (let k = 0; k < sectionCount; k += 1) {
      const itemsArray = [];
      const itemCount = faker.random.number({ min: 1, max: 6 });
      for (let l = 0; l < itemCount; l += 1) {
        itemsArray.push({
          item_name: faker.commerce.productName(),
          item_description: faker.lorem.sentence(3),
          item_price: faker.commerce.price(1, 100.00, 2, '$'),
          item_option: faker.lorem.words(1),
        });
      }
      sectionsArray.push(
        {
          section_name: faker.lorem.words(1),
          section_description: faker.lorem.sentence(3),
          items: itemsArray,
        },
      );
    }
    menusArray.push(
      {
        menu_name: faker.commerce.productAdjective(),
        menu_description: faker.lorem.sentence(3),
        sections: sectionsArray,
      },
    );
  }
  restaurantsArray.push({
    restaurant_id: i,
    website: faker.internet.url(),
    menus: menusArray,
  });
}

function seedRestaurantMenus() {
  Restaurant.insertMany(restaurantsArray)
    .then((docs) => {
      console.log(`Successfully added ${docs.length} restaurants to database.`);
      db.close();
    })
    .catch((err) => {
      console.log(`Failed to add restaurants to database: ${err}`);
      db.close();
    });
}

seedRestaurantMenus();
