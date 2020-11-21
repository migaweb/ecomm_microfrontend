import faker from 'faker';

const mount = (el) => {
  const cartText = `<div>You have ${faker.random.number()} items in the cart!</div>`;
  el.innerHTML = cartText;
};

// context/Situation #1
// We are running this file in development in isolation
// We are using our local index.html file which definitely has an element with an id of cart-dev
// We want to immediately render the app into that element
if (process.env.NODE_ENV === 'development') {
  const el = document.querySelector('#cart-dev');
  // Assuming the container doesnt have an element with id 'cart-dev' ...
  if (el) {
    // Probably running in isolation
    mount(el);
  } 
}

// context/situation #2
// We are running this file in development or production through the container app
// There is no guarantee that an element with id cart-dev exists.
// Wee do not want to immediately render the app.
export { mount };