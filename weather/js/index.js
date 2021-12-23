const axios = require('axios');
const params = {
  access_key: '1e6d8d82891cfcf6c36d345a49067c35',
  query: 'New York'
}

axios.get('http://api.weatherstack.com/current', {params})
  .then(response => {
    const apiResponse = response.data;
    console.log(`Current temperature in ${apiResponse.location.name} is ${apiResponse.current.temperature}℃`);
  }).catch(error => {
    console.log(error);
  });