const faker = require('faker');
const db = require('./index.js');
const Restaurant = require('./Restaurant.js');


for (let i = 0; i < 100; i += 1) {
  const menusArray = [];
  const menuCount = faker.random.number({min: 0, max: 6})
  for (let j = 0; j < menuCount; j += 1) {
    const sectionsArray = [];
    const sectionCount = faker.random.number({min: 1, max: 6})
    for (let k = 0; k < sectionCount; k += 1) {
      const itemsArray = [];
      const itemCount = faker.random.number({min: 1, max: 6})
      for (let l = 0; l < itemCount; l += 1) {
        itemsArray.push({
          item_name: faker.commerce.productName(),
          item_description: faker.lorem.sentence(3),
          item_price: faker.commerce.price(1, 100.00, 2, '$'),
          item_option: faker.lorem.words(1)
        })
      }
      sectionsArray.push(
        {
          section_name: faker.lorem.words(1),
          section_description: faker.lorem.sentence(3),
          items: itemsArray
        }
      );
    }
    menusArray.push(
      {
        menu_name: faker.commerce.productAdjective(),
        menu_description: faker.lorem.sentence(3),
        sections: sectionsArray
      }
    )
  }
  Restaurant.create({
    restaurant_id: i,
    website: faker.internet.url(),
    menus: menusArray
  }, (err, doc) => {
    if (err) {
      console.log(err);
    }
  });
};


console.log('Menus for 100 restaurants have been generated.');
