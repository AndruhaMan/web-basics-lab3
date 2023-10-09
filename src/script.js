'use state';

const button = document.querySelector('.button');
const people = document.querySelector('.people');

button.addEventListener('click', async () => {
  people.innerHTML = '';

  for (let i = 0; i < 5; i++) {
    const user = await fetchUser();
    const picture = user.picture.large;
    const {
      city,
      country,
      postcode,
    } = user.location;
    const card = getUserCard(picture, city, country, postcode);

    people.append(card);
  }
  
});

async function fetchUser() {
  const response = await fetch('https://randomuser.me/api').then(res => res.json());
  return response.results[0];
}

function getUserCard(picture, city, country, postcode) {
  const card = document.createElement('div');

  card.classList.add('card');

  card.innerHTML = `
    <img class="photo" src="${picture}" alt="photo">
    <p>City: ${city}</p>
    <p>Country: ${country}</p>
    <p>Postcode: ${postcode}</p>
  `;

  return card;
}