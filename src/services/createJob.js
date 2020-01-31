import axios from 'axios';

const url = 'https://stuart-frontend-challenge.now.sh';

const createJob = (pickup, dropoff) =>
  axios({
    method: 'post',
    url: `${url}/jobs`,
    data: {
      pickup,
      dropoff,
    },
  });

export default createJob;
