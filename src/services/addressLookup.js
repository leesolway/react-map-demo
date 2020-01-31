import axios from 'axios';

const url = 'https://stuart-frontend-challenge.now.sh';

const addressLookup = address =>
  axios({
    method: 'post',
    url: `${url}/geocode`,
    data: {
      address,
    },
  });

export default addressLookup;
