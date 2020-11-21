import faker from 'faker';

const mount = (element) => {
  let products = '';

  for (let i = 0; i < 5; i++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`;
  }

  element.innerHTML = products;
}

// context/Situation #1
// We are running this file in development in isolation
// We are using our local index.html file which definitely has an element with an id of dev-products
// We want to immediately render the app into that element
if (process.env.NODE_ENV === 'development') {
  const el = document.querySelector('#dev-products');
  // Assuming the container doesnt have an element with id 'dev-products' ...
  if (el) {
    // Probably running in isolation
    mount(el);
  } 
}

// context/situation #2
// We are running this file in development or production through the container app
// There is no guarantee that an element with id dev-products exists.
// Wee do not want to immediately render the app.
export { mount };