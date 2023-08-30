const fetch = require('node-fetch');

const formData = {
  Firstname: 'New',
  Lastname: 'User',
  Email: 'newuser@example.com'
};

fetch('http://localhost:3000/data', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(formData),
})
  .then(response => response.json())
  .then(result => console.log(result))
  .catch(error => console.error('Error posting data:', error));
